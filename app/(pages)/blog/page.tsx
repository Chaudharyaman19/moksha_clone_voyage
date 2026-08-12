import Blog from "@/components/page-features/blog/Blog";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/blog");

function page() {
  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/blog")} />
      <Blog />
    </div>
  );
}

export default page;
