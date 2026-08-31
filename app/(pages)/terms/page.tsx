import DynamicH1 from "@/components/seo/DynamicH1";
import Footer from "@/components/layout/Footer/FooterNew";
import Navbar from "@/components/layout/navbar/Navbar";
import Topbar from "@/components/layout/topbar/Topbar";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";

import { createDynamicMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return createDynamicMetadata("/terms", "terms");
}
import TermsPageContent from "./TermsPageContent";

export default async function TermsPage() {
  const sections = await getPageSections("terms");
  return (
    <WebsiteContentProvider sections={sections as any} page="terms">
      <DynamicH1 pageKey="terms" fallback="Terms" />
      <div className="min-h-screen bg-[#FBF8F2] text-[#2C1810]">
        <JsonLd data={breadcrumbJsonLd("/terms")} />
        <Topbar />
        <Navbar />
        <TermsPageContent />
        <Footer />
      </div>
    </WebsiteContentProvider>
  );
}
