import DynamicH1 from "@/components/seo/DynamicH1";
import Footer from "@/components/layout/Footer/FooterNew";
import Navbar from "@/components/layout/navbar/Navbar";
import Topbar from "@/components/layout/topbar/Topbar";
import DisclaimerContent from "./DisclaimerContent";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";
import { createDynamicMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return createDynamicMetadata("/disclaimer", "disclaimer");
}

export default async function DisclaimerPage() {
  const sections = await getPageSections("disclaimer");

  return (
    <WebsiteContentProvider sections={sections as any} page="disclaimer">
      <div className="min-h-screen bg-[#FFFFFF] text-[#2C1810]">
        <JsonLd data={breadcrumbJsonLd("/disclaimer")} />
        <Topbar />
        <Navbar />
        <DisclaimerContent />
        <Footer />
      </div>
    </WebsiteContentProvider>
  );
}
