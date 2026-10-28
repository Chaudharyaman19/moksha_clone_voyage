import Navbar from "@/components/layout/navbar/Navbar";
import Topbar from "@/components/layout/topbar/Topbar";
import UnclaimedBodyPageSections from "@/components/page-features/unclaimed-body/UnclaimedBodyPageSections";
import JsonLd from "@/components/seo/JsonLd";
import DynamicH1 from "@/components/seo/DynamicH1";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider, WebsiteSection } from "@/components/website/WebsiteContentContext";
import FAQ from "@/components/sections/FAQ/FAQ";

import { createDynamicMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return createDynamicMetadata("/unclaimed-body-sewa", "unclaimed-body");
}

async function page() {
  const sections = await getPageSections("unclaimed-body");
  return (
    <div>
      <DynamicH1 pageKey="unclaimed-body" fallback="Unclaimed Body Sewa: Dignified Last Rites for Lawaris Laash" />
      <JsonLd data={breadcrumbJsonLd("/unclaimed-body-sewa")} />
      <Topbar />
      <Navbar />
      <main className="pt-24">
        <WebsiteContentProvider page="unclaimed-body" sections={sections}>
          <UnclaimedBodyPageSections />
          <WebsiteSection name="faq"><FAQ /></WebsiteSection>
      </WebsiteContentProvider>
      </main>
    </div>
  );
}

export default page;
