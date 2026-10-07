import VolunteerDashboard from "@/components/page-features/volunteer/VolunteerDashboard";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";

export const metadata = createPageMetadata("/volunteer/dashboard");

async function page() {
  const sections = await getPageSections("volunteer");

  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/volunteer/dashboard")} />
      <WebsiteContentProvider page="volunteer" sections={sections}>
        <VolunteerDashboard />
      </WebsiteContentProvider>
    </div>
  );
}

export default page;
