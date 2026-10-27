import { cache } from "react";
import { api } from "./api";

export interface SeoData {
  page: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  canonicalUrl?: string;
  canonicalTag?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  openGraphTags?: string;
  schemaMarkup?: string;
  h1Tag?: string;
  breadcrumbName?: string;
  robotsIndex?: boolean;
  robotsFollow?: boolean;
  isActive?: boolean;
}

const seoCache = new Map<string, { data: SeoData | null; expires: number }>();
const CACHE_TTL_MS = 60 * 1000; // 60 seconds

export const seoApi = {
  getByPage: cache(async (page: string, envType: "local" | "live" = "live"): Promise<SeoData | null> => {
    const cleanPage = (page || "home").replace(/^\/+|\/+$/g, "") || "home";
    const cacheKey = `${cleanPage}:${envType}`;

    const cached = seoCache.get(cacheKey);
    const now = Date.now();
    if (cached && cached.expires > now) {
      return cached.data;
    }

    try {
      // Race fetch against 250ms timeout so we never block Next.js head streaming
      const fetchPromise = api.get<SeoData>(`/seo/page/${encodeURIComponent(cleanPage)}?envType=${envType}`);
      const timeoutPromise = new Promise<null>((resolve) => setTimeout(() => resolve(null), 250));
      const res = await Promise.race([fetchPromise, timeoutPromise]);

      if (res) {
        seoCache.set(cacheKey, { data: res, expires: now + CACHE_TTL_MS });
        return res;
      }

      // If timed out but have an older cache, return it
      if (cached) return cached.data;
      return null;
    } catch {
      return cached ? cached.data : null;
    }
  }),

  /** Fetch all SEO records (used by sitemap generator) */
  getAll: async (): Promise<(SeoData & { updatedAt?: string })[]> => {
    try {
      const res = await api.get<(SeoData & { updatedAt?: string })[]>("/seo");
      return Array.isArray(res) ? res : [];
    } catch {
      return [];
    }
  },
};
