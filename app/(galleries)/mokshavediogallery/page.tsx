import Mokshavediogallery from "@/components/page-features/mokshavediogallery/Mokshavediogallery";
import JsonLd from "@/components/seo/JsonLd";
import DynamicH1 from "@/components/seo/DynamicH1";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/mokshavediogallery");

function page() {
  return (
    <div>
      <DynamicH1 pageKey="landing" fallback="Moksha Sewa Video Gallery: Seva Activities & Outreach" />
      <JsonLd data={breadcrumbJsonLd("/mokshavediogallery")} />
      <Mokshavediogallery />
    </div>
  );
}

export default page;
