import RequestHelp from "@/components/page-features/request-help/RequestHelp";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createDynamicMetadata, getPageSchemaMarkup, webPageJsonLd } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata() {
  return createDynamicMetadata("/request-help", "request-help");
}

async function page() {
  const [sections, customSchema] = await Promise.all([
    getPageSections("request-help"),
    getPageSchemaMarkup("/request-help", "request-help").catch(() => null),
  ]);

  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/request-help")} id="schema-breadcrumb" />
      {customSchema && <JsonLd data={customSchema} id="schema-custom" />}
      <WebsiteContentProvider page="request-help" sections={sections}>
        <RequestHelp />
      </WebsiteContentProvider>
    </div>
  );
}

export default page;
