import DynamicH1 from "@/components/seo/DynamicH1";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import PartnershipPageSections from "@/components/page-features/partnership/PartnershipPageSections";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createDynamicMetadata, getPageSchemaMarkup, organizationJsonLd } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata() {
  return createDynamicMetadata("/partnership", "partnership");
}

export default async function Page() {
  const [sections, customSchema] = await Promise.all([
    getPageSections("partnership"),
    getPageSchemaMarkup("/partnership", "partnership").catch(() => null),
  ]);

  return (
    <div>
      <DynamicH1 pageKey="partnership" fallback="Hospital & NGO Partnerships for Last Rites | Moksha Sewa" />
      <JsonLd data={breadcrumbJsonLd("/partnership")} />
      {customSchema ? <JsonLd data={customSchema} /> : <JsonLd data={organizationJsonLd()} />}
      <Topbar />
      <Navbar />
      <WebsiteContentProvider page="partnership" sections={sections}>
        <main className="pt-[92px]">
          <PartnershipPageSections />
        </main>
      </WebsiteContentProvider>
      <Footer />
    </div>
  );
}
