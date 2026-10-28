import TrackRequest from "@/components/page-features/track/TrackRequest";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createDynamicMetadata, getPageSchemaMarkup, organizationJsonLd } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata() {
  return createDynamicMetadata("/track", "track");
}

async function page() {
  const [sections, customSchema] = await Promise.all([
    getPageSections("track"),
    getPageSchemaMarkup("/track", "track").catch(() => null),
  ]);

  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/track")} />
      {customSchema ? <JsonLd data={customSchema} /> : <JsonLd data={organizationJsonLd()} />}
      <WebsiteContentProvider page="track" sections={sections}>
        <TrackRequest />
      </WebsiteContentProvider>
    </div>
  );
}

export default page;
