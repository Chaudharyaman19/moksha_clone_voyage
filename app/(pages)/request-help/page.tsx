import DynamicH1 from "@/components/seo/DynamicH1";
import RequestHelp from "@/components/page-features/request-help/RequestHelp";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";

import { createDynamicMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return createDynamicMetadata("/request-help", "request-help");
}

async function page() {
  const sections = await getPageSections("request-help");

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
