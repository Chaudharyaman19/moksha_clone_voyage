import Mokshagallrey from "@/components/page-features/mokshagallery/Mokshagallrey";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/mokshagallery");

function page() {
  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/mokshagallery")} />
      <Mokshagallrey />
    </div>
  );
}

export default page;
