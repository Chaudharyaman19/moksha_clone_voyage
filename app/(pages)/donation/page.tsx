import Donation from "@/components/page-features/donation/Donation";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/donation");

function page() {
  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/donation")} />
      <Donation />
    </div>
  );
}

export default page;
