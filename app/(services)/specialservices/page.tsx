import Specialservices from "@/components/page-features/services/Specialservices";
import LocationCityPills from "@/components/seo/LocationCityPills";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createDynamicMetadata, getPageSchemaMarkup, serviceJsonLd } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider, WebsiteSection } from "@/components/website/WebsiteContentContext";
import FAQ from "@/components/sections/FAQ/FAQ";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata() {
  return createDynamicMetadata("/specialservices", "specialService");
}

async function page() {
  const [sections, customSchema] = await Promise.all([
    getPageSections("specialService"),
    getPageSchemaMarkup("/specialservices", "specialService").catch(() => null),
  ]);

  const defaultSchema = serviceJsonLd(
    "Family Support After Cremation: Meals, Paperwork & Relief",
    "Comprehensive post-cremation support including tehravi meals, death certificate guidance, and counseling across Delhi NCR.",
    "/specialservices"
  );

  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/specialservices")} />
      {customSchema ? <JsonLd data={customSchema} /> : <JsonLd data={defaultSchema} />}
      <WebsiteContentProvider page="specialService" sections={sections}>
        <Specialservices pills={<LocationCityPills category="Special Service" />} />
        <WebsiteSection name="faq"><FAQ /></WebsiteSection>
      </WebsiteContentProvider>
    </div>
  );
}

export default page;
