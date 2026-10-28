import Footer from "@/components/layout/Footer/FooterNew";
import Navbar from "@/components/layout/navbar/Navbar";
import Topbar from "@/components/layout/topbar/Topbar";
import JsonLd from "@/components/seo/JsonLd";
import DynamicH1 from "@/components/seo/DynamicH1";
import { breadcrumbJsonLd, createDynamicMetadata, getPageSchemaMarkup, organizationJsonLd } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";
import TermsPageContent from "./TermsPageContent";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata() {
  return createDynamicMetadata("/terms", "terms");
}

export default async function TermsPage() {
  const [sections, customSchema] = await Promise.all([
    getPageSections("terms"),
    getPageSchemaMarkup("/terms", "terms").catch(() => null),
  ]);

  return (
    <WebsiteContentProvider sections={sections as any} page="terms">
      <div className="min-h-screen bg-[#FBF8F2] text-[#2C1810]">
        <DynamicH1 pageKey="terms" fallback="Terms and Conditions - Moksha Sewa | Namo Gange Trust" />
        <JsonLd data={breadcrumbJsonLd("/terms")} />
        {customSchema ? <JsonLd data={customSchema} /> : <JsonLd data={organizationJsonLd()} />}
        <Topbar />
        <Navbar />
        <TermsPageContent />
        <Footer />
      </div>
    </WebsiteContentProvider>
  );
}
