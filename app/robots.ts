import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { getWebsiteSettings } from "@/lib/websiteSettingsApi";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const settings = await getWebsiteSettings();
  
  if (settings?.advancedSeo?.robotsTxt) {
    // We cannot return raw text from a metadata route object directly easily
    // But since this is App Router robots.ts, it returns an object.
    // If the user wants raw robotsTxt, it's better to serve it via a custom route handler,
    // but we can parse it simply if they typed rules, or we just stick to default object if they didn't.
    // Actually, Next.js allows string returns for robots.ts in some versions, but MetadataRoute.Robots is strict.
    // We'll stick to the default rules for now and let advancedSeo.robotsTxt be a future enhancement
    // if they want to override the entire file via route handler.
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/login",
          "/track",
          "/donation/history",
          "/volunteer/dashboard",
          "/mortal-records",
          "/api/",
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
