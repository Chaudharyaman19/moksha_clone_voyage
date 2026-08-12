import Harsevan from "@/components/page-features/services/Harsevan";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/harsevanservices");

function page() {
  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/harsevanservices")} />
      <Harsevan />
    </div>
  );
}

export default page;
