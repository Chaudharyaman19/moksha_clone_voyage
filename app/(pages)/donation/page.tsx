import DynamicH1 from "@/components/seo/DynamicH1";
import Donation from "@/components/page-features/donation/Donation";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { getMergedWebsiteSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";

import { createDynamicMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return createDynamicMetadata("/donation", "donation");
}

async function page() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api/v1"}/settings`, { cache: "no-store" });
  const body = response.ok ? await response.json() : {};
  const sections = getMergedWebsiteSections("donation", body.data);

  return (
    <div>
      <DynamicH1 pageKey="donation" fallback="Donation" />
      <JsonLd data={breadcrumbJsonLd("/donation")} />
      <WebsiteContentProvider page="donation" sections={sections}>
        <Donation />
      </WebsiteContentProvider>
    </div>
  );
}

export default page;
