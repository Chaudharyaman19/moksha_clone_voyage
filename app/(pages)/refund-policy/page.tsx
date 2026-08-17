import Footer from "@/components/layout/Footer/FooterNew";
import Navbar from "@/components/layout/navbar/Navbar";
import Topbar from "@/components/layout/topbar/Topbar";
import RefundPolicy from "@/components/sections/refund-policy/Content";
import PolicyHero, {
  refundPolicyMeta,
} from "@/components/sections/policy-hero/PolicyHero";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/refund-policy");

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-[#FBF8F2] text-[#2C1810]">
      <JsonLd data={breadcrumbJsonLd("/refund-policy")} />
      <Topbar />
      <Navbar />
      <PolicyHero
        title="Refund Policy"
        subtitle="Please read our refund terms carefully"
        description="At Moksha Sewa, we ensure complete transparency in all our donation and transaction processes. This Refund Policy explains the conditions under which refunds may be considered."
        policyMeta={refundPolicyMeta}
      />
      <RefundPolicy />
      <Footer />
    </div>
  );
}
