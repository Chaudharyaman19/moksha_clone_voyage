"use client";

import RefundPolicy from "@/components/sections/refund-policy/Content";
import PolicyHero, { refundPolicyMeta } from "@/components/sections/policy-hero/PolicyHero";
import { WebsiteSection, useWebsiteSection, textOrFallback, imageOrFallback } from "@/components/website/WebsiteContentContext";

export default function RefundPageContent() {
  const hero = useWebsiteSection("refund-hero");
  
  const meta = refundPolicyMeta.map((item, index) => {
    const dynamicItem = hero?.items?.[index];
    return {
      ...item,
      label: dynamicItem?.label || item.label,
      value: dynamicItem?.value || item.value,
    };
  });

  return (
    <>
      <WebsiteSection name="refund-hero">
        <PolicyHero
          title={textOrFallback(hero?.title, "Refund Policy")}
          subtitle={textOrFallback(hero?.subtitle, "Please read our refund terms carefully")}
          description={textOrFallback(hero?.description, "At Moksha Sewa, we ensure complete transparency in all our donation and transaction processes. This Refund Policy explains the conditions under which refunds may be considered.")}
          policyMeta={meta}
          imageSrc={imageOrFallback(hero?.image, "/assets/privacy-policy/privacy.webp")}
        />
      </WebsiteSection>
      <WebsiteSection name="refund-content">
        <RefundPolicy />
      </WebsiteSection>
    </>
  );
}
