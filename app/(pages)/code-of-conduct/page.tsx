import Footer from "@/components/layout/Footer/FooterNew";
import Navbar from "@/components/layout/navbar/Navbar";
import Topbar from "@/components/layout/topbar/Topbar";
import JsonLd from "@/components/seo/JsonLd";
import DynamicH1 from "@/components/seo/DynamicH1";
import { breadcrumbJsonLd, createDynamicMetadata, getPageSchemaMarkup, organizationJsonLd } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";
import ConductPageContent from "./ConductPageContent";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata() {
  return createDynamicMetadata("/code-of-conduct", "code-of-conduct");
}

export default async function ConductPage() {
  const [sections, customSchema] = await Promise.all([
    getPageSections("code-of-conduct"),
    getPageSchemaMarkup("/code-of-conduct", "code-of-conduct").catch(() => null),
  ]);

  return (
    <WebsiteContentProvider sections={sections as any} page="code-of-conduct">
      <div className="min-h-screen bg-[#FBF8F2] text-[#2C1810]">
        <DynamicH1 pageKey="code-of-conduct" fallback="Code of Conduct - Moksha Sewa Volunteer & Staff Ethics" />
        <JsonLd data={breadcrumbJsonLd("/code-of-conduct")} />
        {customSchema ? <JsonLd data={customSchema} /> : <JsonLd data={organizationJsonLd()} />}
        <Topbar />
        <Navbar />
        <ConductPageContent />
        <Footer />
      </div>
    </WebsiteContentProvider>
  );
}
