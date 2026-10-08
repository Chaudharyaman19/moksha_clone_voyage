import VolunteerRegister from "@/components/page-features/volunteer/VolunteerRegister";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";

import { createDynamicMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return createDynamicMetadata("/volunteer/register", "volunteer");
}
async function page() {
  const sections = await getPageSections("volunteer");

  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/volunteer/register")} />
      <WebsiteContentProvider page="volunteer" sections={sections}>
        <VolunteerRegister />
      </WebsiteContentProvider>
    </div>
  );
}

export default page;
