import VolunteerRegister from "@/components/page-features/volunteer/VolunteerRegister";
import JsonLd from "@/components/seo/JsonLd";
import DynamicH1 from "@/components/seo/DynamicH1";
import { breadcrumbJsonLd, createDynamicMetadata, getPageSchemaMarkup, organizationJsonLd } from "@/lib/seo";
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
      <DynamicH1 pageKey="volunteer" fallback="Become a Moksha Sewa Volunteer | Humanitarian Last-Rites Support" />
      <JsonLd data={breadcrumbJsonLd("/volunteer/register")} />
      {customSchema ? <JsonLd data={customSchema} /> : <JsonLd data={organizationJsonLd()} />}
      <WebsiteContentProvider page="volunteer" sections={sections}>
        <VolunteerRegister />
      </WebsiteContentProvider>
    </div>
  );
}

export default page;
