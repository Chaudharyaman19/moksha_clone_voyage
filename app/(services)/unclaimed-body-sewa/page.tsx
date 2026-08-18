import Navbar from "@/components/layout/navbar/Navbar";
import Topbar from "@/components/layout/topbar/Topbar";
import UnclaimedBodyPageSections from "@/components/page-features/unclaimed-body/UnclaimedBodyPageSections";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/unclaimed-body-sewa");

function page() {
  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/unclaimed-body-sewa")} />
      <Topbar />
      <Navbar />
      <main className="pt-24">
        <UnclaimedBodyPageSections />
      </main>
    </div>
  );
}

export default page;
