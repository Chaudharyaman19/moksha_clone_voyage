import DynamicH1 from "@/components/seo/DynamicH1";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import CSRPartnershipSections from "@/components/page-features/csr/CSRPartnershipSections";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { getMergedWebsiteSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";

import { createDynamicMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return createDynamicMetadata("/csr", "csr");
}

export default async function Page() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api/v1"}/settings`, { cache: "no-store" });
  const body = response.ok ? await response.json() : {};
  const sections = getMergedWebsiteSections("csr", body.data);

  return (
    <div>
      <DynamicH1 pageKey="csr" fallback="Csr" />
      <JsonLd data={breadcrumbJsonLd("/csr")} />
      <Topbar />
      <Navbar />
      <WebsiteContentProvider page="csr" sections={sections}>
        <main className="pt-[92px]">
          <CSRPartnershipSections />
        </main>
      </WebsiteContentProvider>
      <Footer />
    </div>
  );
}
