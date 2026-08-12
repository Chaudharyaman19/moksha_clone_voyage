import DonationHistory from "@/components/page-features/donation/DonationHistory";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/donation/history");

function page() {
  return (
    <div>
      <DonationHistory />
    </div>
  );
}

export default page;
