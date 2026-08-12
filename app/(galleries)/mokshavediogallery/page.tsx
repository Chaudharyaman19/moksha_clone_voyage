import Mokshavediogallery from "@/components/page-features/mokshavediogallery/Mokshavediogallery";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/mokshavediogallery");

function page() {
  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/mokshavediogallery")} />
      <Mokshavediogallery />
    </div>
  );
}

export default page;
