import Ambulance from "@/components/page-features/services/Ambulance";
import LocationCityPills from "@/components/seo/LocationCityPills";
import JsonLd from "@/components/seo/JsonLd";
import DynamicH1 from "@/components/seo/DynamicH1";
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
      <DynamicH1 pageKey="ambulance" fallback="Ambulance for Dead Body Transport: 24x7 in Delhi, Ghaziabad & Noida" />
      <JsonLd data={breadcrumbJsonLd("/ambulanceservices")} />
      <WebsiteContentProvider page="ambulance" sections={sections}>
        <Ambulance pills={<LocationCityPills category="Ambulance Service" />} />
        <WebsiteSection name="faq"><FAQ /></WebsiteSection>
      </WebsiteContentProvider>
    </div>
  );
}

export default page;
