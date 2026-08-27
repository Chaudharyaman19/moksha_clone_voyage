import Donation from "@/components/page-features/donation/Donation";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { getMergedWebsiteSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";

export const metadata = createPageMetadata("/donation");

async function page() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api/v1"}/settings`, { cache: "no-store" });
  const body = response.ok ? await response.json() : {};
  const sections = getMergedWebsiteSections("donation", body.data);

  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/donation")} />
      <WebsiteContentProvider page="donation" sections={sections}>
        <Donation />
      </WebsiteContentProvider>
    </div>
  );
}

export default page;
