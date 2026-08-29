"use client";

import TermsAndConditions from "@/components/sections/terms/Content";
import PolicyHero, { termsPolicyMeta } from "@/components/sections/policy-hero/PolicyHero";
import { WebsiteSection, useWebsiteSection, textOrFallback, imageOrFallback } from "@/components/website/WebsiteContentContext";

export default function TermsPageContent() {
  const hero = useWebsiteSection("terms-hero");
  
  const meta = termsPolicyMeta.map((item, index) => {
    const dynamicItem = hero?.items?.[index];
    return {
      ...item,
      label: dynamicItem?.label || item.label,
      value: dynamicItem?.value || item.value,
    };
  });

  return (
    <>
      <WebsiteSection name="terms-hero">
        <PolicyHero
          title={textOrFallback(hero?.title, "Terms & Conditions")}
          subtitle={textOrFallback(hero?.subtitle, "Please read these terms carefully")}
          description={textOrFallback(hero?.description, "Welcome to Moksha Sewa. By accessing our website or using our services, you agree to comply with and be bound by the following Terms & Conditions.")}
          policyMeta={meta}
          imageSrc={imageOrFallback(hero?.image, "/assets/privacy-policy/privacy.webp")}
        />
      </WebsiteSection>
      <WebsiteSection name="terms-content">
        <TermsAndConditions />
      </WebsiteSection>
    </>
  );
}
