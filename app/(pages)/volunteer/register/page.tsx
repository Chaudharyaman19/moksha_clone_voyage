import VolunteerRegister from "@/components/page-features/volunteer/VolunteerRegister";
import JsonLd from "@/components/seo/JsonLd";
import DynamicH1 from "@/components/seo/DynamicH1";
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
      <DynamicH1 pageKey="volunteer" fallback="Become a Moksha Sewa Volunteer" />
      <JsonLd data={breadcrumbJsonLd("/volunteer/register")} />
      <WebsiteContentProvider page="volunteer" sections={sections}>
        <VolunteerRegister />
      </WebsiteContentProvider>
    </div>
  );
}

export default page;
