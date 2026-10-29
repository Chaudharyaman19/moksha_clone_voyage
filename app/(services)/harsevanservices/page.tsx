import Harsevan from "@/components/page-features/services/Harsevan";
import LocationCityPills from "@/components/seo/LocationCityPills";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createDynamicMetadata, getPageSchemaMarkup, serviceJsonLd } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider, WebsiteSection } from "@/components/website/WebsiteContentContext";
import FAQ from "@/components/sections/FAQ/FAQ";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata() {
  return createDynamicMetadata("/harsevanservices", "harsevan");
}

async function page() {
  const [sections, customSchema] = await Promise.all([
    getPageSections("harsevan"),
    getPageSchemaMarkup("/harsevanservices", "harsevan").catch(() => null),
  ]);

  const defaultSchema = serviceJsonLd(
    "Hearse Van (Shav Vahan) Service for the Final Journey",
    "Dignified hearse van (shav vahan) transportation with respectful volunteer assistance across Delhi, Ghaziabad, Noida, and NCR.",
    "/harsevanservices"
  );

  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/harsevanservices")} id="schema-breadcrumb" />
      {customSchema && <JsonLd data={customSchema} id="schema-custom" />}
      <WebsiteContentProvider page="harsevan" sections={sections}>
        <Harsevan pills={<LocationCityPills category="Hearse Van Service" />} />
        <WebsiteSection name="faq"><FAQ /></WebsiteSection>
      </WebsiteContentProvider>
    </div>
  );
}

export default page;
