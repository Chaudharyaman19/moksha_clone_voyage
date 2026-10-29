import Contact from "@/components/page-features/contact/Contact";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createDynamicMetadata, getPageSchemaMarkup, contactPageJsonLd } from "@/lib/seo";
import { getPageSections, getWebsiteSettings } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata() {
  return createDynamicMetadata("/contact", "contact");
}

async function page() {
  const [sections, settings, customSchema] = await Promise.all([
    getPageSections("contact"),
    getWebsiteSettings(),
    getPageSchemaMarkup("/contact", "contact").catch(() => null),
  ]);

  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/contact")} id="schema-breadcrumb" />
      {customSchema && <JsonLd data={customSchema} id="schema-custom" />}
      <WebsiteContentProvider page="contact" sections={sections}>
        <Contact />
      </WebsiteContentProvider>
    </div>
  );
}

export default page;
