import Specialservices from "@/components/page-features/services/Specialservices";
import LocationCityPills from "@/components/seo/LocationCityPills";
import JsonLd from "@/components/seo/JsonLd";
import DynamicH1 from "@/components/seo/DynamicH1";
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
      <DynamicH1 pageKey="specialService" fallback="Family Support After Cremation: Meals, Paperwork & Relief" />
      <JsonLd data={breadcrumbJsonLd("/specialservices")} />
      <WebsiteContentProvider page="specialService" sections={sections}>
        <Specialservices pills={<LocationCityPills category="Special Service" />} />
        <WebsiteSection name="faq"><FAQ /></WebsiteSection>
      </WebsiteContentProvider>
    </div>
  );
}

export default page;
