import Callingrelativesservices from "@/components/page-features/services/Callingrelativesservices";
import LocationCityPills from "@/components/seo/LocationCityPills";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createDynamicMetadata, getPageSchemaMarkup, serviceJsonLd } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider, WebsiteSection } from "@/components/website/WebsiteContentContext";
import FAQ from "@/components/sections/FAQ/FAQ";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata() {
  return createDynamicMetadata("/callingrelativesservices", "callingRelatives");
}

async function page() {
  const [sections, customSchema] = await Promise.all([
    getPageSections("callingRelatives"),
    getPageSchemaMarkup("/callingrelativesservices", "callingRelatives").catch(() => null),
  ]);

  const defaultSchema = serviceJsonLd(
    "Informing Relatives & Family Coordination After a Death",
    "Supportive coordination service to inform relatives, manage obituary notices, and assist grieving families across Delhi NCR.",
    "/callingrelativesservices"
  );

  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/callingrelativesservices")} id="schema-breadcrumb" />
      {customSchema && <JsonLd data={customSchema} id="schema-custom" />}
      <WebsiteContentProvider page="callingRelatives" sections={sections}>
        <Callingrelativesservices pills={<LocationCityPills category="Calling Relatives Service" />} />
        <WebsiteSection name="faq"><FAQ /></WebsiteSection>
      </WebsiteContentProvider>
    </div>
  );
}

export default page;
