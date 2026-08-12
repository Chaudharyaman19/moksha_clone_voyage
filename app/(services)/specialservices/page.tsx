import Specialservices from "@/components/page-features/services/Specialservices";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/specialservices");

function page() {
  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/specialservices")} />
      <Specialservices />
    </div>
  );
}

export default page;
