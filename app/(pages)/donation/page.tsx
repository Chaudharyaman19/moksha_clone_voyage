import Donation from "@/components/page-features/donation/Donation";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createDynamicMetadata, getPageSchemaMarkup, organizationJsonLd } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata() {
  return createDynamicMetadata("/donation", "donation");
}

async function page() {
  const [sections, customSchema] = await Promise.all([
    getPageSections("donation"),
    getPageSchemaMarkup("/donation", "donation").catch(() => null),
  ]);

  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/donation")} />
      {customSchema ? <JsonLd data={customSchema} /> : <JsonLd data={organizationJsonLd()} />}
      <WebsiteContentProvider page="donation" sections={sections}>
        <Donation />
      </WebsiteContentProvider>
    </div>
  );
}

export default page;
