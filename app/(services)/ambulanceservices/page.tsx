import Ambulance from "@/components/page-features/services/Ambulance";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { getMergedWebsiteSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";

export const metadata = createPageMetadata("/ambulanceservices");

async function page() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api/v1"}/settings`, { cache: "no-store" });
  const body = response.ok ? await response.json() : {};
  const sections = getMergedWebsiteSections("ambulance", body.data);
  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/ambulanceservices")} />
      <WebsiteContentProvider page="ambulance" sections={sections}>
        <Ambulance />
      </WebsiteContentProvider>
    </div>
  );
}

export default page;
