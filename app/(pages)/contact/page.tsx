import DynamicH1 from "@/components/seo/DynamicH1";
import Contact from "@/components/page-features/contact/Contact";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";
import { getMergedWebsiteSections } from "@/lib/websiteSettingsApi";
import { WebsiteContentProvider } from "@/components/website/WebsiteContentContext";

import { createDynamicMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return createDynamicMetadata("/contact", "contact");
}

async function page() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api/v1"}/settings`, { cache: "no-store" });
  const body = response.ok ? await response.json() : {};
  const sections = getMergedWebsiteSections("contact", body.data);

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
