import DynamicH1 from "@/components/seo/DynamicH1";
import Contact from "@/components/page-features/contact/Contact";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { getPageSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";

import { createDynamicMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return createDynamicMetadata("/contact", "contact");
}

async function page() {
  const sections = await getPageSections("contact");

  return (
    <div>
      <DynamicH1 pageKey="contact" fallback="Contact" />
      <JsonLd data={breadcrumbJsonLd("/contact")} />
      <WebsiteContentProvider page="contact" sections={sections}>
        <Contact />
      </WebsiteContentProvider>
    </div>
  );
}

export default page;
