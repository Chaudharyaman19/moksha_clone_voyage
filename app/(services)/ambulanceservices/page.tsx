import Ambulance from "@/components/page-features/services/Ambulance";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider, WebsiteSection } from "@/components/website/WebsiteContentContext";
import FAQ from "@/components/sections/FAQ/FAQ";

import { createDynamicMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return createDynamicMetadata("/ambulanceservices", "ambulance");
}

async function page() {
  const sections = await getPageSections("ambulance");
  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/ambulanceservices")} />
      <WebsiteContentProvider page="ambulance" sections={sections}>
        <Ambulance />
        <WebsiteSection name="faq"><FAQ /></WebsiteSection>
      </WebsiteContentProvider>
    </div>
  );
}

export default page;
