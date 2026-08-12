import About from "@/components/page-features/aboutus/About";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/about");

function page() {
  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/about")} />
      <About />
    </div>
  );
}

export default page;
