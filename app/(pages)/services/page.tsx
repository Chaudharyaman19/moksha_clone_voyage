import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import PracticalSewaSupport from "@/components/sections/PracticalSewaSupport/PracticalSewaSupport";
import DynamicH1 from "@/components/seo/DynamicH1";
import JsonLd from "@/components/seo/JsonLd";
import { WebsiteContentProvider, WebsiteSection } from "@/components/website/WebsiteContentContext";
import { breadcrumbJsonLd, createDynamicMetadata } from "@/lib/seo";
import { getWebsiteSections } from "@/lib/websiteSettingsApi";

export async function generateMetadata() {
  return createDynamicMetadata("/services", "landing");
}

export default async function ServicesPage() {
  const sections = await getWebsiteSections();

  return (
    <WebsiteContentProvider sections={sections}>
      <DynamicH1 pageKey="services" fallback="Cremation and Final Journey Support Services" />
      <JsonLd data={breadcrumbJsonLd("/services", "Services")} />
      <WebsiteSection name="topbar"><Topbar /></WebsiteSection>
      <WebsiteSection name="navbar"><Navbar /></WebsiteSection>
      <main className="pt-24">
        <WebsiteSection name="practical-support"><PracticalSewaSupport /></WebsiteSection>
      </main>
      <WebsiteSection name="footer"><Footer /></WebsiteSection>
    </WebsiteContentProvider>
  );
}
