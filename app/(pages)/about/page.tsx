import DynamicH1 from "@/components/seo/DynamicH1";
import About from "@/components/page-features/aboutus/About";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { getAboutSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";

import { createDynamicMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return createDynamicMetadata("/about", "about");
}

async function page() {
  const aboutSections = await getAboutSections();

  return (
    <div>
      <DynamicH1 pageKey="about" fallback="About" />
      <JsonLd data={breadcrumbJsonLd("/about")} />
      <WebsiteContentProvider page="about" sections={aboutSections}>
        <About />
      </WebsiteContentProvider>
    </div>
  );
}

export default page;
