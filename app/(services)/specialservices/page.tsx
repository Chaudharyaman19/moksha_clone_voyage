import Specialservices from "@/components/page-features/services/Specialservices";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider, WebsiteSection } from "@/components/website/WebsiteContentContext";
import FAQ from "@/components/sections/FAQ/FAQ";

import { createDynamicMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return createDynamicMetadata("/specialservices", "specialService");
}

async function page() {
  const sections = await getPageSections("specialService");
  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/specialservices")} />
      <WebsiteContentProvider page="specialService" sections={sections}>
        <Specialservices />
        <WebsiteSection name="faq"><FAQ /></WebsiteSection>
      </WebsiteContentProvider>
    </div>
  );
}

export default page;
