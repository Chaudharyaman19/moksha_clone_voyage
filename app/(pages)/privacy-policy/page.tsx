import DynamicH1 from "@/components/seo/DynamicH1";
import Footer from "@/components/layout/Footer/FooterNew";
import Navbar from "@/components/layout/navbar/Navbar";
import Topbar from "@/components/layout/topbar/Topbar";
import PrivacyPageContent from "./PrivacyPageContent";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";

import { createDynamicMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return createDynamicMetadata("/privacy-policy", "privacy-policy");
}

export default async function PrivacyPolicyPage() {
  const sections = await getPageSections("privacy-policy");
  return (
    <WebsiteContentProvider sections={sections as any} page="privacy-policy">
      <DynamicH1 pageKey="privacy-policy" fallback="Privacy Policy" />
      <div className="min-h-screen bg-[#FBF8F2] text-[#2C1810]">
        <JsonLd data={breadcrumbJsonLd("/privacy-policy")} />
        <Topbar />
        <Navbar />
        <PrivacyPageContent />
        <Footer />
      </div>
    </WebsiteContentProvider>
  );
}
