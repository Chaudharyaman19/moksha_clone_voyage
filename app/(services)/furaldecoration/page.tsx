import Furaldecoration from "@/components/page-features/services/Furaldecoration";
import LocationCityPills from "@/components/seo/LocationCityPills";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider, WebsiteSection } from "@/components/website/WebsiteContentContext";
import FAQ from "@/components/sections/FAQ/FAQ";

import { createDynamicMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return createDynamicMetadata("/furaldecoration", "funeralDecoration");
}

async function page() {
  const sections = await getPageSections("funeralDecoration");

  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/furaldecoration")} />
      <WebsiteContentProvider page="funeralDecoration" sections={sections}>
        <Furaldecoration pills={<LocationCityPills category="Funeral Decoration" />} />
        <WebsiteSection name="faq"><FAQ /></WebsiteSection>
      </WebsiteContentProvider>
    </div>
  );
}

export default page;
