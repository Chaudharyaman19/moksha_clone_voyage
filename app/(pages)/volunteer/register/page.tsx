import VolunteerRegister from "@/components/page-features/volunteer/VolunteerRegister";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { getMergedWebsiteSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";

import { createDynamicMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return createDynamicMetadata("/volunteer/register", "volunteer");
}
async function page() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api/v1"}/settings`, { cache: "no-store" });
  const body = response.ok ? await response.json() : {};
  const sections = getMergedWebsiteSections("volunteer", body.data);

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
