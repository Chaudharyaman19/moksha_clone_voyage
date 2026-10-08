import type { MetadataRoute } from "next";
import { absoluteUrl, publicSeoRoutes, SITE_URL } from "@/lib/seo";

/**
 * Auto-generated sitemap — Next.js App Router convention.
 *
 * Strategy:
 * 1. Start with the statically-defined `publicSeoRoutes` list (provides
 *    priority + changeFrequency from code).
 * 2. Fetch the public SEO record for each route from the backend to get the
 *    real `updatedAt` timestamp → used as `lastModified`.
 * 3. If the backend is unreachable, fall back to `new Date()` — sitemap still
 *    renders without breaking the build or SSR.
 *
 * This file is regenerated at build time in production (ISR / static export)
 * or at request time in development. No manual maintenance needed.
 */
export const dynamic = "force-dynamic"; // Always fresh in dev; revalidated on deploy in prod
export const revalidate = 3600; // Re-generate at most once per hour in production

const API_BASE =
  (process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1")
    .replace(/\/api\/v1\/?$/, "");

async function fetchLastModified(slug: string): Promise<Date> {
  try {
    const res = await fetch(
      `${API_BASE}/api/seo/page/${encodeURIComponent(slug)}?envType=live`,
      { next: { revalidate: 3600 }, signal: AbortSignal.timeout(4000) }
    );
    if (!res.ok) return new Date();
    const json = await res.json();
    const record = json?.data || json;
    if (record?.updatedAt) return new Date(record.updatedAt);
  } catch {
    // Backend unavailable — fall back silently
  }
  return new Date();
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

  return entries;
}
