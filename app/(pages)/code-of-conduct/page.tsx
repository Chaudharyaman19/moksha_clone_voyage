import Footer from "@/components/layout/Footer/FooterNew";
import Navbar from "@/components/layout/navbar/Navbar";
import Topbar from "@/components/layout/topbar/Topbar";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";

import { createDynamicMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return createDynamicMetadata("/code-of-conduct", "code-of-conduct");
}
import ConductPageContent from "./ConductPageContent";

export default async function ConductPage() {
  const sections = await getPageSections("code-of-conduct");
  return (
    <WebsiteContentProvider sections={sections as any} page="code-of-conduct">
      <div className="min-h-screen bg-[#FBF8F2] text-[#2C1810]">
        <JsonLd data={breadcrumbJsonLd("/code-of-conduct")} />
        <Topbar />
        <Navbar />
        <ConductPageContent />
        <Footer />
      </div>
    </WebsiteContentProvider>
  );
}
