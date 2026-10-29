"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { SITE_URL } from "@/lib/seo";

/**
 * DynamicCanonical
 *
 * Client-side guard that ensures exactly ONE <link rel="canonical"> in <head>
 * matching the canonical URL specified by the admin CMS or the canonical path.
 * Deduplicates canonicals and ensures no duplicate OG tags are created in the DOM.
 */

function extractHref(canonicalTag?: string | null): string | null {
  if (!canonicalTag?.trim()) return null;
  const trimmed = canonicalTag.trim();
  const match = trimmed.match(/href=["']([^"']+)["']/i);
  if (match) return match[1].trim();
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return null;
}

function isInvalidCanonical(href?: string | null) {
  return (
    !href ||
    href.includes("yourdomain.com") ||
    href.includes("example.com") ||
    href.includes("localhost") ||
    href.includes("127.0.0.1") ||
    /^https?:\/\/admin\./i.test(href)
  );
}

export default function DynamicCanonical() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Remove any leftover duplicate dynamic meta tags from older sessions
    document
      .querySelectorAll("meta[data-dyn-og]")
      .forEach((el) => el.remove());

    // Deduplicate any existing canonical tags so only one canonical exists in <head>
    const canonicals = document.querySelectorAll('link[rel="canonical"]');
    if (canonicals.length > 1) {
      canonicals.forEach((el, index) => {
        if (index > 0) el.remove();
      });
    }

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }

    const autoCanonical = pathname === "/" ? SITE_URL : `${SITE_URL.replace(/\/$/, "")}${pathname}`;
    link.setAttribute("href", autoCanonical);

    // Check if admin CMS overrides the canonical
    const pageSlug = (pathname || "").replace(/^\/+|\/+$/g, "") || "home";
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5003/api/v1";
    const baseApi = apiUrl.replace(/\/api\/v1\/?$/, "");
    const origin = window.location.origin;
    const envType = origin.includes("localhost") ? "local" : "live";

    fetch(`${baseApi}/api/seo/page/${encodeURIComponent(pageSlug)}?envType=${envType}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((payload) => {
        const seoData = payload?.data || payload;
        if (!seoData || seoData.isActive === false) return;

        const adminCanonical =
          extractHref(seoData.canonicalTag) ||
          seoData.canonicalUrl ||
          null;

        if (adminCanonical && !isInvalidCanonical(adminCanonical)) {
          link?.setAttribute("href", adminCanonical);
        }
      })
      .catch(() => undefined);
  }, [pathname]);

  return null;
}
