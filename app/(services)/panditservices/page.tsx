import Pandit from "@/components/page-features/services/Pandit";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/panditservices");

function pages() {
  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/panditservices")} />
      <Pandit />
    </div>
  );
}

export default pages;
