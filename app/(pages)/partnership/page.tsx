import DynamicH1 from "@/components/seo/DynamicH1";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import PartnershipPageSections from "@/components/page-features/partnership/PartnershipPageSections";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";

import { createDynamicMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return createDynamicMetadata("/partnership", "partnership");
}

export default async function Page() {
  const sections = await getPageSections("partnership");

  return (
    <div>
      <DynamicH1 pageKey="partnership" fallback="Partnership" />
      <JsonLd data={breadcrumbJsonLd("/partnership")} />
      <Topbar />
      <Navbar />
      <WebsiteContentProvider page="partnership" sections={sections}>
        <main className="pt-[92px]">
          <PartnershipPageSections />
        </main>
      </WebsiteContentProvider>
      <Footer />
    </div>
  );
}
