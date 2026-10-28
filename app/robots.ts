import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default async function robots(): Promise<MetadataRoute.Robots> {
  // NOTE: settings.advancedSeo.robotsTxt custom override is not served by this
  // metadata route (returns an object, not raw text). Serve it via a route
  // handler at app/robots.txt/route.ts if a full custom robots.txt is needed.
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
          "/careers/apply",
          "/api/",
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
