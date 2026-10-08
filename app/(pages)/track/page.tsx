import DynamicH1 from "@/components/seo/DynamicH1";
import TrackRequest from "@/components/page-features/track/TrackRequest";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";

import { createDynamicMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return createDynamicMetadata("/track", "track");
}

async function page() {
  const sections = await getPageSections("track");

  return (
    <div>
      <DynamicH1 pageKey="track" fallback="Track" />
      <JsonLd data={breadcrumbJsonLd("/track")} />
      <WebsiteContentProvider page="track" sections={sections}>
        <TrackRequest />
      </WebsiteContentProvider>
    </div>
  );
}

export default page;
