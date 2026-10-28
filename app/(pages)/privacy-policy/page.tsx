import Footer from "@/components/layout/Footer/FooterNew";
import Navbar from "@/components/layout/navbar/Navbar";
import Topbar from "@/components/layout/topbar/Topbar";
import PrivacyPageContent from "./PrivacyPageContent";
import JsonLd from "@/components/seo/JsonLd";
import DynamicH1 from "@/components/seo/DynamicH1";
import { breadcrumbJsonLd, createDynamicMetadata, getPageSchemaMarkup, organizationJsonLd } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata() {
  return createDynamicMetadata("/privacy-policy", "privacy-policy");
}

export default async function PrivacyPolicyPage() {
  const [sections, customSchema] = await Promise.all([
    getPageSections("privacy-policy"),
    getPageSchemaMarkup("/privacy-policy", "privacy-policy").catch(() => null),
  ]);

  return (
    <WebsiteContentProvider sections={sections as any} page="privacy-policy">
      <div className="min-h-screen bg-[#FBF8F2] text-[#2C1810]">
        <DynamicH1 pageKey="privacy-policy" fallback="Privacy Policy - Moksha Sewa | Namo Gange Trust" />
        <JsonLd data={breadcrumbJsonLd("/privacy-policy")} />
        {customSchema ? <JsonLd data={customSchema} /> : <JsonLd data={organizationJsonLd()} />}
        <Topbar />
        <Navbar />
        <PrivacyPageContent />
        <Footer />
      </div>
    </WebsiteContentProvider>
  );
}
