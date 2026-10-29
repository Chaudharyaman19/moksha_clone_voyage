import Footer from "@/components/layout/Footer/FooterNew";
import Navbar from "@/components/layout/navbar/Navbar";
import Topbar from "@/components/layout/topbar/Topbar";
import DisclaimerContent from "./DisclaimerContent";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createDynamicMetadata, getPageSchemaMarkup, webPageJsonLd } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata() {
  return createDynamicMetadata("/disclaimer", "disclaimer");
}

export default async function DisclaimerPage() {
  const [sections, customSchema] = await Promise.all([
    getPageSections("disclaimer"),
    getPageSchemaMarkup("/disclaimer", "disclaimer").catch(() => null),
  ]);

  return (
    <WebsiteContentProvider sections={sections as any} page="disclaimer">
      <div className="min-h-screen bg-[#FFFFFF] text-[#2C1810]">
        <JsonLd data={breadcrumbJsonLd("/disclaimer")} id="schema-breadcrumb" />
        {customSchema && <JsonLd data={customSchema} id="schema-custom" />}
        <Topbar />
        <Navbar />
        <DisclaimerContent />
        <Footer />
      </div>
    </WebsiteContentProvider>
  );
}
