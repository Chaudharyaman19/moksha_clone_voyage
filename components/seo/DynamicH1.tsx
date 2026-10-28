import { getWebsiteSettings, type WebsitePageKey } from "@/lib/websiteSettingsApi";
import { seoApi } from "@/lib/seoApi";

interface DynamicH1Props {
  pageKey: WebsitePageKey;
  fallback: string;
}

export default async function DynamicH1({ pageKey, fallback }: DynamicH1Props) {
  let customH1: string | undefined;
  try {
    const isLocal = process.env.NODE_ENV !== "production";
    const slug = pageKey === "landing" ? "home" : pageKey;
    const seo = await seoApi.getByPage(slug, isLocal ? "local" : "live");
    if (seo?.h1Tag && seo.h1Tag.trim()) {
      customH1 = seo.h1Tag.trim();
    }
  } catch {
    // fallback
  }

  const headingText = customH1 || fallback;

  // Render sr-only <h1> so search crawlers and accessibility tools see a valid H1 on every page
  // without disrupting the visible visual design and layout.
  return <h1 className="sr-only">{headingText}</h1>;
}
