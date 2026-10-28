import Pandit from "@/components/page-features/services/Pandit";
import LocationCityPills from "@/components/seo/LocationCityPills";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createDynamicMetadata, getPageSchemaMarkup, serviceJsonLd } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider, WebsiteSection } from "@/components/website/WebsiteContentContext";
import FAQ from "@/components/sections/FAQ/FAQ";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata() {
  return createDynamicMetadata("/panditservices", "pandit");
}

async function pages() {
  const [sections, customSchema] = await Promise.all([
    getPageSections("pandit"),
    getPageSchemaMarkup("/panditservices", "pandit").catch(() => null),
  ]);

  const defaultSchema = serviceJsonLd(
    "Pandit for Antim Sanskar & Last-Rites Rituals",
    "Experienced Vedic pandits for conducting antim sanskar, pind daan, asthi visarjan, and shradh ceremonies with complete reverence across Delhi NCR.",
    "/panditservices"
  );

  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/panditservices")} />
      {customSchema ? <JsonLd data={customSchema} /> : <JsonLd data={defaultSchema} />}
      <WebsiteContentProvider page="pandit" sections={sections}>
        <Pandit pills={<LocationCityPills category="Pandit Service" />} />
        <WebsiteSection name="faq"><FAQ /></WebsiteSection>
      </WebsiteContentProvider>
    </div>
  );
}

export default pages;
