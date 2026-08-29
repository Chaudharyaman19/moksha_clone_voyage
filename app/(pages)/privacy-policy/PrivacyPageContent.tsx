"use client";

import PrivacyHero, { defaultPolicyMeta } from "@/components/sections/policy-hero/PolicyHero";
import PrivacyPolicy from "@/components/sections/prlvacy-policy/Content";
import { WebsiteSection, useWebsiteSection, textOrFallback, imageOrFallback } from "@/components/website/WebsiteContentContext";

export default function PrivacyPageContent() {
  const hero = useWebsiteSection("privacy-hero");
  
  const meta = defaultPolicyMeta.map((item, index) => {
    const dynamicItem = hero?.items?.[index];
    return {
      ...item,
      label: dynamicItem?.label || item.label,
      value: dynamicItem?.value || item.value,
    };
  });

  return (
    <>
      <WebsiteSection name="privacy-hero">
        <PrivacyHero
          title={textOrFallback(hero?.title, "Privacy Policy")}
          subtitle={textOrFallback(hero?.subtitle, "Your privacy is important to us.")}
          description={textOrFallback(hero?.description, "This Privacy Policy explains how Moksh Sewa (an initiative of Namo Gange Trust) collects, uses, protects, and shares your personal information when you visit our website or use our services.")}
          imageSrc={imageOrFallback(hero?.image, "/assets/privacy-policy/privacy.webp")}
          policyMeta={meta}
        />
      </WebsiteSection>
      <WebsiteSection name="privacy-content">
        <PrivacyPolicy />
      </WebsiteSection>
    </>
  );
}
