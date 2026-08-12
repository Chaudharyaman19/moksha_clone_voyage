import TrackRequest from "@/components/page-features/track/TrackRequest";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/track");

function page() {
  return (
    <div>
      <TrackRequest />
    </div>
  );
}

export default page;
