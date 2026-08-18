import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import CSRPartnershipSections from "@/components/page-features/csr/CSRPartnershipSections";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/csr");

export default function Page() {
  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/csr")} />
      <Topbar />
      <Navbar />
      <main className="pt-[92px]">
        <CSRPartnershipSections />
      </main>
      <Footer />
    </div>
  );
}
