import DonationHistory from "@/components/page-features/donation/DonationHistory";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata = createPageMetadata("/donation/history");

function page() {
  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/donation/history", "Donation History")} />
      <DonationHistory />
    </div>
  );
}

export default page;
