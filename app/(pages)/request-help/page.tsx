import RequestHelp from "@/components/page-features/request-help/RequestHelp";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/request-help");

function page() {
  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/request-help")} />
      <RequestHelp />
    </div>
  );
}

export default page;
