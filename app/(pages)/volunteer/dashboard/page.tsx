import VolunteerDashboard from "@/components/page-features/volunteer/VolunteerDashboard";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { getMergedWebsiteSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";

export const metadata = createPageMetadata("/volunteer/dashboard");

async function page() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api/v1"}/settings`, { cache: "no-store" });
  const body = response.ok ? await response.json() : {};
  const sections = getMergedWebsiteSections("volunteer", body.data);

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
