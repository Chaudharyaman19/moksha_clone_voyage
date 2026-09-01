import DynamicH1 from "@/components/seo/DynamicH1";
import RequestHelp from "@/components/page-features/request-help/RequestHelp";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { getMergedWebsiteSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";

import { createDynamicMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return createDynamicMetadata("/request-help", "request-help");
}

async function page() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api/v1"}/settings`, { cache: "no-store" });
  const body = response.ok ? await response.json() : {};
  const sections = getMergedWebsiteSections("request-help", body.data);

  return (
    <div>
      <DynamicH1 pageKey="request-help" fallback="Request Help" />
      <JsonLd data={breadcrumbJsonLd("/request-help")} />
      <WebsiteContentProvider page="request-help" sections={sections}>
        <RequestHelp />
      </WebsiteContentProvider>
    </div>
  );
}

export default page;
