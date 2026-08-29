"use client";

import CodeOfConduct from "@/components/sections/code-of-conduct/Content";
import PolicyHero, { conductPolicyMeta } from "@/components/sections/policy-hero/PolicyHero";
import { WebsiteSection, useWebsiteSection, textOrFallback, imageOrFallback } from "@/components/website/WebsiteContentContext";

export default function ConductPageContent() {
  const hero = useWebsiteSection("conduct-hero");
  
  const meta = conductPolicyMeta.map((item, index) => {
    const dynamicItem = hero?.items?.[index];
    return {
      ...item,
      label: dynamicItem?.label || item.label,
      value: dynamicItem?.value || item.value,
    };
  });

  return (
    <>
      <WebsiteSection name="conduct-hero">
        <PolicyHero
          title={textOrFallback(hero?.title, "Code of Conduct")}
          subtitle={textOrFallback(hero?.subtitle, "Principles That Guide Every Action")}
          description={textOrFallback(hero?.description, "We uphold strict standards of empathy, privacy, dignity, and zero commercial interest in all our humanitarian activities. This Code applies to all staff, volunteers, and partners.")}
          policyMeta={meta}
          imageSrc={imageOrFallback(hero?.image, "/assets/privacy-policy/privacy.webp")}
        />
      </WebsiteSection>
      <WebsiteSection name="conduct-content">
        <CodeOfConduct />
      </WebsiteSection>
    </>
  );
}
