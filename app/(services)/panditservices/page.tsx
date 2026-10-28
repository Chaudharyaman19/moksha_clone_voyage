import Pandit from "@/components/page-features/services/Pandit";
import LocationCityPills from "@/components/seo/LocationCityPills";
import JsonLd from "@/components/seo/JsonLd";
import DynamicH1 from "@/components/seo/DynamicH1";
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
      <DynamicH1 pageKey="pandit" fallback="Pandit for Antim Sanskar & Last-Rites Rituals" />
      <JsonLd data={breadcrumbJsonLd("/panditservices")} />
      <WebsiteContentProvider page="pandit" sections={sections}>
        <Pandit pills={<LocationCityPills category="Pandit Service" />} />
        <WebsiteSection name="faq"><FAQ /></WebsiteSection>
      </WebsiteContentProvider>
    </div>
  );
}

export default pages;
