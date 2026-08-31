import Furalservices from "@/components/page-features/services/Furalservices";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { getMergedWebsiteSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider, WebsiteSection } from "@/components/website/WebsiteContentContext";
import FAQ from "@/components/sections/FAQ/FAQ";

import { createDynamicMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return createDynamicMetadata("/furalservices", "funeral");
}

async function page() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api/v1"}/settings`, { cache: "no-store" });
  const body = response.ok ? await response.json() : {};
  const sections = getMergedWebsiteSections("funeral", body.data);

  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/furalservices")} />
      <WebsiteContentProvider page="funeral" sections={sections}>
        <Furalservices />
        <WebsiteSection name="faq"><FAQ /></WebsiteSection>
      </WebsiteContentProvider>
    </div>
  );
}

export default page;
