import Harsevan from "@/components/page-features/services/Harsevan";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { getMergedWebsiteSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";

export const metadata = createPageMetadata("/harsevanservices");

async function page() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api/v1"}/settings`, { cache: "no-store" });
  const body = response.ok ? await response.json() : {};
  const sections = getMergedWebsiteSections("services", body.data);
  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/harsevanservices")} />
      <WebsiteContentProvider page="services" sections={sections}>
        <Harsevan />
      </WebsiteContentProvider>
    </div>
  );
}

export default page;
