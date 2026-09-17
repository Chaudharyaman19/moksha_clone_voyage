"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { SITE_URL } from "@/lib/seo";

/**
 * DynamicCanonical + RawOpenGraph injector
 *
 * Client-side guard that:
 * 1. Sets a baseline <link rel="canonical"> auto-generated from SITE_URL + pathname.
 * 2. Fetches the admin SEO record and — if a canonicalTag is set — uses that href instead.
 * 3. If no canonicalTag/canonicalUrl in admin, keeps the auto-generated canonical.
 * 4. Injects raw openGraphTags HTML block into <head> on every route change.
 *
 * Priority: admin canonicalTag href > admin canonicalUrl > auto-generated (SITE_URL + path)
 *
 * Renders null — zero visual impact on the page.
 */

/** Extract the href value from a raw <link rel="canonical" href="..."> string */
function extractHref(canonicalTag?: string | null): string | null {
  if (!canonicalTag?.trim()) return null;
  const match = canonicalTag.match(/href=["']([^"']+)["']/i);
  return match ? match[1].trim() : null;
}

export default function DynamicCanonical() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const pageSlug = (pathname || "").replace(/^\/+|\/+$/g, "") || "home";

    // --- 1. Set baseline auto-generated canonical (SITE_URL based) ---
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }

    // Auto-generated: always use the live SITE_URL (not localhost)
    const autoCanonical = pathname === "/" ? SITE_URL : `${SITE_URL.replace(/\/$/, "")}${pathname}`;
    link.setAttribute("href", autoCanonical);

    // --- 2. Fetch admin SEO record, override if admin has set a canonical ---
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";
    const baseApi = apiUrl.replace(/\/api\/v1\/?$/, "");
    const origin = window.location.origin;
    const envType = origin.includes("localhost") ? "local" : "live";

    fetch(`${baseApi}/api/seo/${encodeURIComponent(pageSlug)}?envType=${envType}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((payload) => {
        const seoData = payload?.data || payload;
        if (!seoData || seoData.isActive === false) return;

        // --- 2a. Canonical: admin tag href > admin URL > keep auto-generated ---
        const adminCanonical =
          extractHref(seoData.canonicalTag) ||
          seoData.canonicalUrl ||
          null;

        if (adminCanonical) {
          link?.setAttribute("href", adminCanonical);
        }
        // else: auto-generated canonical set in step 1 stays — no change

        // --- 2b. Inject raw openGraphTags HTML block into <head> ---
        if (seoData.openGraphTags && seoData.openGraphTags.trim()) {
          document
            .querySelectorAll("meta[data-dyn-og]")
            .forEach((el) => el.remove());

          const tmp = document.createElement("div");
          tmp.innerHTML = seoData.openGraphTags.trim();
          Array.from(tmp.children).forEach((child) => {
            const el = child.cloneNode(true) as Element;
            el.setAttribute("data-dyn-og", "true");
            document.head.appendChild(el);
          });
        }
      })
      .catch(() => undefined);

    // Cleanup: remove dynamic OG tags when route changes
    return () => {
      document
        .querySelectorAll("meta[data-dyn-og]")
        .forEach((el) => el.remove());
    };
  }, [pathname]);

  return null;
}
