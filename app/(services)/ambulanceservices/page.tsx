import Ambulance from "@/components/page-features/services/Ambulance";
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
  return createDynamicMetadata("/ambulanceservices", "ambulance");
}

async function page() {
  const [sections, customSchema] = await Promise.all([
    getPageSections("ambulance"),
    getPageSchemaMarkup("/ambulanceservices", "ambulance").catch(() => null),
  ]);

  const defaultSchema = serviceJsonLd(
    "Ambulance for Dead Body Transport: 24x7 in Delhi, Ghaziabad & Noida",
    "24x7 dead body ambulance and hearse transport service with freezer box support across Delhi, Ghaziabad, Noida, and NCR.",
    "/ambulanceservices"
  );

  return (
    <div>
      <DynamicH1 pageKey="ambulance" fallback="Ambulance for Dead Body Transport: 24x7 in Delhi, Ghaziabad & Noida" />
      <JsonLd data={breadcrumbJsonLd("/ambulanceservices")} />
      {customSchema ? <JsonLd data={customSchema} /> : <JsonLd data={defaultSchema} />}
      <WebsiteContentProvider page="ambulance" sections={sections}>
        <Ambulance pills={<LocationCityPills category="Ambulance Service" />} />
        <WebsiteSection name="faq"><FAQ /></WebsiteSection>
      </WebsiteContentProvider>
    </div>
  );
}

export default page;
