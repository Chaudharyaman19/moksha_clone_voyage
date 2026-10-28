import Footer from "@/components/layout/Footer/FooterNew";
import Navbar from "@/components/layout/navbar/Navbar";
import Topbar from "@/components/layout/topbar/Topbar";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createDynamicMetadata, getPageSchemaMarkup, organizationJsonLd } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";
import RefundPageContent from "./RefundPageContent";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata() {
  return createDynamicMetadata("/refund-policy", "refund-policy");
}

export default async function RefundPolicyPage() {
  const [sections, customSchema] = await Promise.all([
    getPageSections("refund-policy"),
    getPageSchemaMarkup("/refund-policy", "refund-policy").catch(() => null),
  ]);

  return (
    <WebsiteContentProvider sections={sections as any} page="refund-policy">
      <div className="min-h-screen bg-[#FBF8F2] text-[#2C1810]">
        <JsonLd data={breadcrumbJsonLd("/refund-policy")} />
        {customSchema ? <JsonLd data={customSchema} /> : <JsonLd data={organizationJsonLd()} />}
        <Topbar />
        <Navbar />
        <RefundPageContent />
        <Footer />
      </div>
    </WebsiteContentProvider>
  );
}
