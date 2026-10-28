import Mokshagallrey from "@/components/page-features/mokshagallery/Mokshagallrey";
import JsonLd from "@/components/seo/JsonLd";
import DynamicH1 from "@/components/seo/DynamicH1";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/mokshagallery");

function page() {
  return (
    <div>
      <DynamicH1 pageKey="landing" fallback="Moksha Sewa Photo Gallery: Last-Rites Seva in Pictures" />
      <JsonLd data={breadcrumbJsonLd("/mokshagallery")} />
      <Mokshagallrey />
    </div>
  );
}

export default page;
