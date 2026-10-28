import DonationHistory from "@/components/page-features/donation/DonationHistory";
import DynamicH1 from "@/components/seo/DynamicH1";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/donation/history");

function page() {
  return (
    <div>
      <DynamicH1 pageKey="donation" fallback="Donation History & Transparency | Moksha Sewa" />
      <JsonLd data={breadcrumbJsonLd("/donation/history", "Donation History")} />
      <DonationHistory />
    </div>
  );
}

export default page;
