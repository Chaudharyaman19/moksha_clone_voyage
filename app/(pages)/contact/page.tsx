import DynamicH1 from "@/components/seo/DynamicH1";
import Contact from "@/components/page-features/contact/Contact";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createDynamicMetadata, getPageSchemaMarkup, organizationJsonLd } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata() {
  return createDynamicMetadata("/contact", "contact");
}

async function page() {
  const [sections, customSchema] = await Promise.all([
    getPageSections("contact"),
    getPageSchemaMarkup("/contact", "contact").catch(() => null),
  ]);

  return (
    <div>
      <DynamicH1 pageKey="contact" fallback="Contact Moksha Sewa - 24x7 Last-Rites Helpline" />
      <JsonLd data={breadcrumbJsonLd("/contact")} />
      {customSchema ? <JsonLd data={customSchema} /> : <JsonLd data={organizationJsonLd()} />}
      <WebsiteContentProvider page="contact" sections={sections}>
        <Contact />
      </WebsiteContentProvider>
    </div>
  );
}

export default page;
