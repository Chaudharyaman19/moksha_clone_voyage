import About from "@/components/page-features/aboutus/About";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createDynamicMetadata, getPageSchemaMarkup } from "@/lib/seo";
import { getAboutSections, getWebsiteSettings } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata() {
  return createDynamicMetadata("/about", "about");
}

async function page() {
  const [aboutSections, settings, customSchema] = await Promise.all([
    getAboutSections(),
    getWebsiteSettings(),
    getPageSchemaMarkup("/about", "about").catch(() => null),
  ]);

  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/about")} id="schema-breadcrumb" />
      {customSchema && <JsonLd data={customSchema} id="schema-custom" />}
      <WebsiteContentProvider page="about" sections={aboutSections}>
        <About />
      </WebsiteContentProvider>
    </div>
  );
}

export default page;
