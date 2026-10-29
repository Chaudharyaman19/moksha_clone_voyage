import Prayerhallservices from "@/components/page-features/services/Prayerhallservices";
import LocationCityPills from "@/components/seo/LocationCityPills";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createDynamicMetadata, getPageSchemaMarkup, serviceJsonLd } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider, WebsiteSection } from "@/components/website/WebsiteContentContext";
import FAQ from "@/components/sections/FAQ/FAQ";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata() {
  return createDynamicMetadata("/prayerhallservices", "prayerHall");
}

async function page() {
  const [sections, customSchema] = await Promise.all([
    getPageSections("prayerHall"),
    getPageSchemaMarkup("/prayerhallservices", "prayerHall").catch(() => null),
  ]);

  const defaultSchema = serviceJsonLd(
    "Prayer Hall & Ground Support for Last-Rites Ceremonies",
    "Peaceful prayer hall booking and ground support for uthavna, chautha, tehravi, and memorial gatherings across Delhi NCR.",
    "/prayerhallservices"
  );

  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/prayerhallservices")} id="schema-breadcrumb" />
      {customSchema && <JsonLd data={customSchema} id="schema-custom" />}
      <WebsiteContentProvider page="prayerHall" sections={sections}>
        <Prayerhallservices pills={<LocationCityPills category="Prayer Hall Service" />} />
        <WebsiteSection name="faq"><FAQ /></WebsiteSection>
      </WebsiteContentProvider>
    </div>
  );
}

export default page;
