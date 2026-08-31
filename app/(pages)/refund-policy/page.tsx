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
  return createDynamicMetadata("/refund-policy", "refund-policy");
}
import RefundPageContent from "./RefundPageContent";

export default async function RefundPolicyPage() {
  const sections = await getPageSections("refund-policy");
  return (
    <WebsiteContentProvider sections={sections as any} page="refund-policy">
      <DynamicH1 pageKey="refund-policy" fallback="Refund Policy" />
      <div className="min-h-screen bg-[#FBF8F2] text-[#2C1810]">
        <JsonLd data={breadcrumbJsonLd("/refund-policy")} />
        <Topbar />
        <Navbar />
        <RefundPageContent />
        <Footer />
      </div>
    </WebsiteContentProvider>
  );
}
