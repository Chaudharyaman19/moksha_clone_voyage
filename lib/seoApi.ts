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

export const seoApi = {
  getByPage: async (page: string, envType: "local" | "live" = "live"): Promise<SeoData | null> => {
    const cleanPage = (page || "home").replace(/^\/+|\/+$/g, "") || "home";
    try {
      return await api.get<SeoData>(`/seo/page/${encodeURIComponent(cleanPage)}?envType=${envType}`);
    } catch {
      return null;
    }
  },

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
