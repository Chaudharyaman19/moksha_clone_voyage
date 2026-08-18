import UnclaimedBodySewa from "@/components/page-features/services/UnclaimedBodySewa";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/unclaimed-body-sewa");

function page() {
  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/unclaimed-body-sewa")} />
      <UnclaimedBodySewa />
    </div>
  );
}

export default page;
