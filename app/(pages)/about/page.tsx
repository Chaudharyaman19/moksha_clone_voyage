import About from "@/components/page-features/aboutus/About";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createDynamicMetadata, getPageSchemaMarkup, organizationJsonLd } from "@/lib/seo";
import { getAboutSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata() {
  return createDynamicMetadata("/about", "about");
}

async function page() {
  const [aboutSections, customSchema] = await Promise.all([
    getAboutSections(),
    getPageSchemaMarkup("/about", "about").catch(() => null),
  ]);

  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/about")} />
      {customSchema ? <JsonLd data={customSchema} /> : <JsonLd data={organizationJsonLd()} />}
      <WebsiteContentProvider page="about" sections={aboutSections}>
        <About />
      </WebsiteContentProvider>
    </div>
  );
}

export default page;
