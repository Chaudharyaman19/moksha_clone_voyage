import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import PartnershipPageSections from "@/components/page-features/partnership/PartnershipPageSections";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/partnership");

export default function Page() {
  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/partnership")} />
      <Topbar />
      <Navbar />
      <main className="pt-[92px]">
        <PartnershipPageSections />
      </main>
      <Footer />
    </div>
  );
}
