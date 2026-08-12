import Ambulance from "@/components/page-features/services/Ambulance";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/ambulanceservices");

function page() {
  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/ambulanceservices")} />
      <Ambulance />
    </div>
  );
}

export default page;
