import Harsevan from "@/components/page-features/services/Harsevan";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider, WebsiteSection } from "@/components/website/WebsiteContentContext";
import FAQ from "@/components/sections/FAQ/FAQ";

import { createDynamicMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return createDynamicMetadata("/harsevanservices", "harsevan");
}

async function page() {
  const sections = await getPageSections("harsevan");
  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/harsevanservices")} />
      <WebsiteContentProvider page="harsevan" sections={sections}>
        <Harsevan />
        <WebsiteSection name="faq"><FAQ /></WebsiteSection>
      </WebsiteContentProvider>
    </div>
  );
}

export default page;
