import Callingrelativesservices from "@/components/page-features/services/Callingrelativesservices";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/callingrelativesservices");

function page() {
  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/callingrelativesservices")} />
      <Callingrelativesservices />
    </div>
  );
}

export default page;
