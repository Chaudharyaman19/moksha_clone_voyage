import Pandit from "@/components/page-features/services/Pandit";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider, WebsiteSection } from "@/components/website/WebsiteContentContext";
import FAQ from "@/components/sections/FAQ/FAQ";

import { createDynamicMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return createDynamicMetadata("/panditservices", "pandit");
}

async function pages() {
  const sections = await getPageSections("pandit");
  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/panditservices")} />
      <WebsiteContentProvider page="pandit" sections={sections}>
        <Pandit />
        <WebsiteSection name="faq"><FAQ /></WebsiteSection>
      </WebsiteContentProvider>
    </div>
  );
}

export default pages;
