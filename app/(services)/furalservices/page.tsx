import Furalservices from "@/components/page-features/services/Furalservices";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/furalservices");

function page() {
  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/furalservices")} />
      <Furalservices />
    </div>
  );
}

export default page;
