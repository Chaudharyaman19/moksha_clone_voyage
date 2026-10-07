import DynamicH1 from "@/components/seo/DynamicH1";
import Donation from "@/components/page-features/donation/Donation";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";

import { createDynamicMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return createDynamicMetadata("/donation", "donation");
}

async function page() {
  const sections = await getPageSections("donation");

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
