import { api } from "./api";
export interface LocationPagePublic {
  pageTitle: string; slug: string; serviceCategory: string; city: string;
  h1?: string; highlightedHeading?: string; shortSummary?: string;
  detailedDescription?: string; faqs: { question: string; answer: string }[];
  mainImage?: string; mainImageAlt?: string;
  gallery: { src: string; alt?: string }[];
  seo?: { metaTitle?: string; metaDescription?: string; metaKeywords?: string; canonicalUrl?: string; ogTitle?: string; ogDescription?: string; ogImage?: string; ogImageAlt?: string; openGraphTags?: string; twitterTitle?: string; twitterDescription?: string; twitterImage?: string; schemaMarkup?: string; robotsIndex?: boolean; robotsFollow?: boolean };
  updatedAt?: string;
}
export const locationPagesApiPublic = {
  getBySlug: (slug: string) => api.get<LocationPagePublic>(`/location-pages/${encodeURIComponent(slug)}`),
  listSlugs: () => api.get<{ slug: string; updatedAt?: string }[]>("/location-pages/slugs"),
};
