import Furalservices from "@/components/page-features/services/Furalservices";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider, WebsiteSection } from "@/components/website/WebsiteContentContext";
import FAQ from "@/components/sections/FAQ/FAQ";

import { createDynamicMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return createDynamicMetadata("/furalservices", "funeral");
}

async function page() {
  const sections = await getPageSections("funeral");

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
