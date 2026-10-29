import Furalservices from "@/components/page-features/services/Furalservices";
import LocationCityPills from "@/components/seo/LocationCityPills";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createDynamicMetadata, getPageSchemaMarkup, serviceJsonLd } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider, WebsiteSection } from "@/components/website/WebsiteContentContext";
import FAQ from "@/components/sections/FAQ/FAQ";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata() {
  return createDynamicMetadata("/furalservices", "funeral");
}

async function page() {
  const [sections, customSchema] = await Promise.all([
    getPageSections("funeral"),
    getPageSchemaMarkup("/furalservices", "funeral").catch(() => null),
  ]);

  const defaultSchema = serviceJsonLd(
    "Cremation Wood, Kafan & Funeral Samagri Support",
    "Complete antim sanskar samagri kits, pure wood, cow dung logs, kafan, and cremation ground coordination across Delhi NCR.",
    "/furalservices"
  );

  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/furalservices")} id="schema-breadcrumb" />
      {customSchema && <JsonLd data={customSchema} id="schema-custom" />}
      <WebsiteContentProvider page="funeral" sections={sections}>
        <Furalservices pills={<LocationCityPills category="Funeral Service" />} />
        <WebsiteSection name="faq"><FAQ /></WebsiteSection>
      </WebsiteContentProvider>
    </div>
  );
}

export default page;
