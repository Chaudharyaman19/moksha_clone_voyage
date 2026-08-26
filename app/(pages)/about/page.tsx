import About from "@/components/page-features/aboutus/About";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { getAboutSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";

export const metadata = createPageMetadata("/about");

async function page() {
  const aboutSections = await getAboutSections();

  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/about")} />
      <WebsiteContentProvider page="about" sections={aboutSections}>
        <About />
      </WebsiteContentProvider>
    </div>
  );
}

export default page;
