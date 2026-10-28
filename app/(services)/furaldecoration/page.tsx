import Furaldecoration from "@/components/page-features/services/Furaldecoration";
import LocationCityPills from "@/components/seo/LocationCityPills";
import JsonLd from "@/components/seo/JsonLd";
import DynamicH1 from "@/components/seo/DynamicH1";
import { breadcrumbJsonLd, createDynamicMetadata, getPageSchemaMarkup, serviceJsonLd } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider, WebsiteSection } from "@/components/website/WebsiteContentContext";
import FAQ from "@/components/sections/FAQ/FAQ";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata() {
  return createDynamicMetadata("/furaldecoration", "funeralDecoration");
}

async function page() {
  const [sections, customSchema] = await Promise.all([
    getPageSections("funeralDecoration"),
    getPageSchemaMarkup("/furaldecoration", "funeralDecoration").catch(() => null),
  ]);

  const defaultSchema = serviceJsonLd(
    "Funeral Flower Decoration for Hearse & Pyre",
    "Traditional flower decoration service for funeral hearses, antim sanskar arti, and prayer halls in Delhi, Ghaziabad, and Noida.",
    "/furaldecoration"
  );

  return (
    <div>
      <DynamicH1 pageKey="funeralDecoration" fallback="Funeral Flower Decoration for Hearse & Pyre" />
      <JsonLd data={breadcrumbJsonLd("/furaldecoration")} />
      {customSchema ? <JsonLd data={customSchema} /> : <JsonLd data={defaultSchema} />}
      <WebsiteContentProvider page="funeralDecoration" sections={sections}>
        <Furaldecoration pills={<LocationCityPills category="Funeral Decoration" />} />
        <WebsiteSection name="faq"><FAQ /></WebsiteSection>
      </WebsiteContentProvider>
    </div>
  );
}

export default page;
