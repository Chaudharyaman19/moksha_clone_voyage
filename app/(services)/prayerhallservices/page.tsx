import Prayerhallservices from "@/components/page-features/services/Prayerhallservices";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/prayerhallservices");

function page() {
  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/prayerhallservices")} />
      <Prayerhallservices />
    </div>
  );
}

export default page;
