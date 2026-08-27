"use client";

import { PartnershipIcon } from "./PartnershipIcons";
import { textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";

export default function PartnershipFinalCTA() {
  const section = useWebsiteSection("partnership-cta");
  const title = textOrFallback(section?.title, "Let's Build a Partnership That Creates Meaningful Impact.", 100);
  const description = textOrFallback(section?.description, "Start a conversation today. Together, we can serve with greater purpose.", 150);
  const buttonLabel = textOrFallback(section?.buttonLabel, "Become a Partner", 40);
  const buttonHref = section?.buttonHref || "#partnership-enquiry";
  const secondaryButtonLabel = textOrFallback(section?.secondaryButtonLabel, "Start a Conversation", 40);
  const secondaryButtonHref = section?.secondaryButtonHref || "#partnership-enquiry";

  return (
    <section className="bg-[#003c31] px-5 py-5 text-white">
      <div className="mx-auto flex max-w-[1344px] flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <PartnershipIcon name="People" className="h-11 w-11 text-[#d3a03a]" />
          <div>
            <h3 className="text-[20px] font-bold">{title}</h3>
            <p className="mt-1 text-[16px] text-[#e7e3da]">{description}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href={buttonHref} className="inline-flex h-[46px] min-w-[170px] items-center justify-between rounded-[5px] bg-[#d3a13b] px-5 text-[16px] font-bold uppercase text-[#083f33]">{buttonLabel}<PartnershipIcon name="ArrowRight" className="h-5 w-5" /></a>
          <a href={secondaryButtonHref} className="inline-flex h-[46px] min-w-[180px] items-center justify-between rounded-[5px] border border-[#c79336] px-5 text-[16px] font-bold uppercase text-white">{secondaryButtonLabel}<PartnershipIcon name="ArrowRight" className="h-5 w-5" /></a>
        </div>
      </div>
    </section>
  );
}
