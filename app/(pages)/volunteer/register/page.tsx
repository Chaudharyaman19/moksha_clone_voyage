import VolunteerRegister from "@/components/page-features/volunteer/VolunteerRegister";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createDynamicMetadata, getPageSchemaMarkup, webPageJsonLd } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata() {
  return createDynamicMetadata("/volunteer/register", "volunteer");
}

async function page() {
  const [sections, customSchema] = await Promise.all([
    getPageSections("volunteer"),
    getPageSchemaMarkup("/volunteer/register", "volunteer").catch(() => null),
  ]);

  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/volunteer/register")} id="schema-breadcrumb" />
      {customSchema && <JsonLd data={customSchema} id="schema-custom" />}
      <WebsiteContentProvider page="volunteer" sections={sections}>
        <VolunteerRegister />
      </WebsiteContentProvider>
    </div>
  );
}

export default page;
