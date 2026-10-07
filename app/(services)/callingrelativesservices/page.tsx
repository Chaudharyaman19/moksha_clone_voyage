import Callingrelativesservices from "@/components/page-features/services/Callingrelativesservices";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider, WebsiteSection } from "@/components/website/WebsiteContentContext";
import FAQ from "@/components/sections/FAQ/FAQ";

import { createDynamicMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return createDynamicMetadata("/callingrelativesservices", "callingRelatives");
}

async function page() {
  const sections = await getPageSections("callingRelatives");
  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/callingrelativesservices")} />
      <WebsiteContentProvider page="callingRelatives" sections={sections}>
        <Callingrelativesservices />
        <WebsiteSection name="faq"><FAQ /></WebsiteSection>
      </WebsiteContentProvider>
    </div>
  );
}

export default page;
