import Navbar from "@/components/layout/navbar/Navbar";
import Topbar from "@/components/layout/topbar/Topbar";
import UnclaimedBodyPageSections from "@/components/page-features/unclaimed-body/UnclaimedBodyPageSections";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { getMergedWebsiteSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";

export const metadata = createPageMetadata("/unclaimed-body-sewa");

async function page() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api/v1"}/settings`, { cache: "no-store" });
  const body = response.ok ? await response.json() : {};
  const sections = getMergedWebsiteSections("unclaimed-body", body.data);
  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/unclaimed-body-sewa")} />
      <Topbar />
      <Navbar />
      <main className="pt-24">
        <WebsiteContentProvider page="unclaimed-body" sections={sections}>
          <UnclaimedBodyPageSections />
        </WebsiteContentProvider>
      </main>
    </div>
  );
}

export default page;
