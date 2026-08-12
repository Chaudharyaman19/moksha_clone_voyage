import VolunteerDashboard from "@/components/page-features/volunteer/VolunteerDashboard";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/volunteer/dashboard");

function page() {
  return (
    <div>
      <VolunteerDashboard />
    </div>
  );
}

export default page;
