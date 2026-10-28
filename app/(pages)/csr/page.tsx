import DynamicH1 from "@/components/seo/DynamicH1";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import CSRPartnershipSections from "@/components/page-features/csr/CSRPartnershipSections";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createDynamicMetadata, getPageSchemaMarkup, organizationJsonLd } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata() {
  return createDynamicMetadata("/csr", "csr");
}

export default async function Page() {
  const [sections, customSchema] = await Promise.all([
    getPageSections("csr"),
    getPageSchemaMarkup("/csr", "csr").catch(() => null),
  ]);

  return (
    <div>
      <DynamicH1 pageKey="csr" fallback="Corporate Social Responsibility (CSR) Partnerships | Moksha Sewa" />
      <JsonLd data={breadcrumbJsonLd("/csr")} />
      {customSchema ? <JsonLd data={customSchema} /> : <JsonLd data={organizationJsonLd()} />}
      <Topbar />
      <Navbar />
      <WebsiteContentProvider page="csr" sections={sections}>
        <main className="pt-[92px]">
          <CSRPartnershipSections />
        </main>
      </WebsiteContentProvider>
      <Footer />
    </div>
  );
}
