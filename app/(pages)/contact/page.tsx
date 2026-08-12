import Contact from "@/components/page-features/contact/Contact";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/contact");

function page() {
  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/contact")} />
      <Contact />
    </div>
  );
}

export default page;
