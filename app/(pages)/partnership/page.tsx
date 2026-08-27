import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import PartnershipPageSections from "@/components/page-features/partnership/PartnershipPageSections";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { getMergedWebsiteSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";

export const metadata = createPageMetadata("/partnership");

export default async function Page() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api/v1"}/settings`, { cache: "no-store" });
  const body = response.ok ? await response.json() : {};
  const sections = getMergedWebsiteSections("partnership", body.data);

  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/partnership")} />
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
