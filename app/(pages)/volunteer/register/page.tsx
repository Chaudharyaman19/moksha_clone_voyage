import VolunteerRegister from "@/components/page-features/volunteer/VolunteerRegister";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/volunteer/register");

function page() {
  return (
    <div>
      <JsonLd data={breadcrumbJsonLd("/volunteer/register")} />
      <VolunteerRegister />
    </div>
  );
}

export default page;
