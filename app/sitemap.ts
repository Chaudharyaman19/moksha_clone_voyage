import type { MetadataRoute } from "next";
import { absoluteUrl, publicSeoRoutes, SITE_URL } from "@/lib/seo";
import { blogsApi } from "@/lib/blogsApi";

/**
 * Auto-generated sitemap — Next.js App Router convention.
 *
 * Strategy:
 * 1. Start with the statically-defined `publicSeoRoutes` list (provides
 *    priority + changeFrequency from code).
 * 2. Fetch the public SEO record for each route from the backend to get the
 *    real `updatedAt` timestamp → used as `lastModified`.
 * 3. Fetch published blog posts and location pages with their real updatedAt dates.
 * 4. If the backend is unreachable, fall back gracefully — sitemap still
 *    renders without breaking the build or SSR.
 *
 * This file is regenerated at build time in production (ISR / static export)
 * or at request time in development. No manual maintenance needed.
 */
export const revalidate = 3600; // Re-generate at most once per hour in production

const API_BASE =
  (process.env.NEXT_PUBLIC_API_URL || "http://localhost:5003/api/v1")
    .replace(/\/api\/v1\/?$/, "");

/** Stable fallback so lastmod doesn't change on every crawl when backend is down. */
const STABLE_FALLBACK_DATE = new Date("2026-01-01T00:00:00.000Z");

async function fetchLastModified(slug: string): Promise<Date> {
  try {
    const res = await fetch(
      `${API_BASE}/api/seo/page/${encodeURIComponent(slug)}?envType=live`,
      { next: { revalidate: 3600 }, signal: AbortSignal.timeout(4000) }
    );
    if (!res.ok) return STABLE_FALLBACK_DATE;
    const json = await res.json();
    const record = json?.data || json;
    if (record?.updatedAt) return new Date(record.updatedAt);
  } catch {
    // Backend unavailable — fall back silently
  }
  return STABLE_FALLBACK_DATE;
}

async function fetchLocationPages(): Promise<{ slug: string; updatedAt?: string }[]> {
  try {
    const res = await fetch(`${API_BASE}/api/v1/location-pages/slugs`, { cache: "no-store", signal: AbortSignal.timeout(4000) });
    if (!res.ok) return [];
    const json = await res.json();
    const rows = json?.data ?? [];
    return Array.isArray(rows) ? rows.filter((r) => r?.slug).map((r) => ({ slug: String(r.slug), updatedAt: r.updatedAt })) : [];
  } catch { return []; }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch lastModified for every public route in parallel
  const entries = await Promise.all(
    publicSeoRoutes.map(async (route) => {
      const slug =
        route.path === "/" ? "home" : route.path.replace(/^\//, "");
      const lastModified = await fetchLastModified(slug);

      return {
        url: absoluteUrl(route.path),
        lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      };
    })
  );

  // Append published blogs
  try {
    const blogs = await blogsApi.getAllPublic();
    for (const b of blogs) {
      if (b?.slug && b?.seo?.robotsIndex !== false) {
        entries.push({
          url: absoluteUrl(`/blog/${b.slug}`),
          lastModified: b.updatedAt ? new Date(b.updatedAt) : (b.publishedAt ? new Date(b.publishedAt) : STABLE_FALLBACK_DATE),
          changeFrequency: "weekly" as const,
          priority: 0.7,
        });
      }
    }
  } catch {
    // fallback if blog API is unavailable
  }

  // Append Published LocationPages (Service x City).
  const lp = await fetchLocationPages();
  for (const r of lp) {
    entries.push({
      url: absoluteUrl(`/${r.slug}`),
      lastModified: r.updatedAt ? new Date(r.updatedAt) : STABLE_FALLBACK_DATE,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    });
  }

  return entries;
}
