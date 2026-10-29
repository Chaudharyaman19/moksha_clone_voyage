import Navbar from "@/components/layout/navbar/Navbar";
import Topbar from "@/components/layout/topbar/Topbar";
import UnclaimedBodyPageSections from "@/components/page-features/unclaimed-body/UnclaimedBodyPageSections";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createDynamicMetadata, getPageSchemaMarkup, serviceJsonLd } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider, WebsiteSection } from "@/components/website/WebsiteContentContext";
import FAQ from "@/components/sections/FAQ/FAQ";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata() {
  return createDynamicMetadata("/unclaimed-body-sewa", "unclaimed-body");
}

async function page() {
  const [sections, customSchema] = await Promise.all([
    getPageSections("unclaimed-body"),
    getPageSchemaMarkup("/unclaimed-body-sewa", "unclaimed-body").catch(() => null),
  ]);

  const defaultSchema = serviceJsonLd(
    "Unclaimed Body Sewa & Humanitarian Antim Sanskar",
    "Providing sacred, respectful last rites and antim sanskar for unclaimed, unidentified, and destitute bodies in Delhi, Ghaziabad, and Noida.",
    "/unclaimed-body-sewa"
  );

  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/unclaimed-body-sewa")} id="schema-breadcrumb" />
      {customSchema && <JsonLd data={customSchema} id="schema-custom" />}
      <Topbar />
      <Navbar />
      <main className="pt-24">
        <WebsiteContentProvider page="unclaimed-body" sections={sections}>
          <UnclaimedBodyPageSections />
          <WebsiteSection name="faq"><FAQ /></WebsiteSection>
        </WebsiteContentProvider>
      </main>
    </div>
  );
}

export default page;
