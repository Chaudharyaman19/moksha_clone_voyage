import Furalservices from "@/components/page-features/services/Furalservices";
import LocationCityPills from "@/components/seo/LocationCityPills";
import JsonLd from "@/components/seo/JsonLd";
import DynamicH1 from "@/components/seo/DynamicH1";
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
      <DynamicH1 pageKey="funeral" fallback="Cremation Wood, Kafan & Funeral Samagri Support" />
      <JsonLd data={breadcrumbJsonLd("/furalservices")} />
      <WebsiteContentProvider page="funeral" sections={sections}>
        <Furalservices pills={<LocationCityPills category="Funeral Service" />} />
        <WebsiteSection name="faq"><FAQ /></WebsiteSection>
      </WebsiteContentProvider>
    </div>
  );
}

export default page;
