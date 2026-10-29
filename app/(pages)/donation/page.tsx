import Donation from "@/components/page-features/donation/Donation";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createDynamicMetadata, getPageSchemaMarkup, donationPageJsonLd } from "@/lib/seo";
import { getPageSections, getWebsiteSettings } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata() {
  return createDynamicMetadata("/donation", "donation");
}

async function page() {
  const [sections, settings, customSchema] = await Promise.all([
    getPageSections("donation"),
    getWebsiteSettings(),
    getPageSchemaMarkup("/donation", "donation").catch(() => null),
  ]);

  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/donation")} id="schema-breadcrumb" />
      {customSchema && <JsonLd data={customSchema} id="schema-custom" />}
      <WebsiteContentProvider page="donation" sections={sections}>
        <Donation />
      </WebsiteContentProvider>
    </div>
  );
}

export default page;
