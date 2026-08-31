import DynamicH1 from "@/components/seo/DynamicH1";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import PartnershipPageSections from "@/components/page-features/partnership/PartnershipPageSections";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { getMergedWebsiteSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";

import { createDynamicMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return createDynamicMetadata("/partnership", "partnership");
}

export default async function Page() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api/v1"}/settings`, { cache: "no-store" });
  const body = response.ok ? await response.json() : {};
  const sections = getMergedWebsiteSections("partnership", body.data);

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
