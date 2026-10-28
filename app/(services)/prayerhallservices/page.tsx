import Prayerhallservices from "@/components/page-features/services/Prayerhallservices";
import LocationCityPills from "@/components/seo/LocationCityPills";
import JsonLd from "@/components/seo/JsonLd";
import DynamicH1 from "@/components/seo/DynamicH1";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider, WebsiteSection } from "@/components/website/WebsiteContentContext";
import FAQ from "@/components/sections/FAQ/FAQ";

import { createDynamicMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return createDynamicMetadata("/prayerhallservices", "prayerHall");
}

async function page() {
  const sections = await getPageSections("prayerHall");
  return (
    <div>
      <DynamicH1 pageKey="prayerHall" fallback="Prayer Hall & Ground Support for Last-Rites Ceremonies" />
      <JsonLd data={breadcrumbJsonLd("/prayerhallservices")} />
      <WebsiteContentProvider page="prayerHall" sections={sections}>
        <Prayerhallservices pills={<LocationCityPills category="Prayer Hall Service" />} />
        <WebsiteSection name="faq"><FAQ /></WebsiteSection>
      </WebsiteContentProvider>
    </div>
  );
}

export default page;
