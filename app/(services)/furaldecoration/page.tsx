import Furaldecoration from "@/components/page-features/services/Furaldecoration";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/furaldecoration");

function page() {
  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/furaldecoration")} />
      <Furaldecoration />
    </div>
  );
}

export default page;
