"use client";

import { PartnershipIcon } from "./PartnershipIcons";
import { useWebsiteSection } from "@/components/website/WebsiteContentContext";
import { textOrFallback, itemOrFallback } from "@/components/website/WebsiteContentContext";

const quickLinks = ["Home", "About Us", "Gallery", "Blog", "Contact Us"];
const services = ["Request Sewa Help", "Transport", "Cremation", "Ritual Material Support", "Priest Guidance", "Family Guidance"];
const initiatives = ["Unclaimed Bodies Support", "Volunteer Program", "Awareness & Outreach"];

export default function PartnershipFooter() {
  const section = useWebsiteSection("footer");
  const brandName = textOrFallback(section?.title, "MOKSHA SEWA", 60);
  const subtitle = textOrFallback(section?.subtitle, "A Namo Gange Trust Initiative", 120);
  const description = textOrFallback(section?.description, "We stand with compassion, coordination and dignity so no final journey is forgotten.", 240);
  
  const quickLinksTitle = textOrFallback(section?.quickLinksTitle, "Quick Links", 50);
  const servicesTitle = textOrFallback(section?.servicesTitle, "Our Services", 50);
  const initiativesTitle = textOrFallback(section?.initiativesTitle, "Our Initiatives", 50);
  const supportTitle = textOrFallback(section?.actionTitle, "Need Sewa Support?", 50);
  const supportDesc = textOrFallback(section?.requestDescription, "Request help or connect with our team.", 150);
  const submitLabel = textOrFallback(section?.submitLabel, "Send Request", 50);

  const footerItems = section?.items ?? [];
  const getItems = (defaults: string[], offset: number) => 
    defaults.map((defaultLabel, i) => {
      const item = itemOrFallback(footerItems, offset + i, { label: defaultLabel, title: defaultLabel } as any);
      return item.label || item.title || defaultLabel;
    });

  const mappedQuickLinks = getItems(quickLinks, 0);
  const mappedServices = getItems(services, quickLinks.length);
  const mappedInitiatives = getItems(initiatives, quickLinks.length + services.length);

  return (
    <footer className="bg-[#001f1a] px-5 py-6 text-white">
      <div className="mx-auto grid max-w-[1344px] grid-cols-1 gap-7 lg:grid-cols-[26%_16%_18%_18%_22%]">
        <div>
          <PartnershipIcon name="Lotus" className="h-14 w-14 text-[#d2a03b]" />
          <h3 className="mt-2 text-[26px] font-bold uppercase">{brandName}</h3>
          <p className="mt-1 text-[16px] text-[#ddd9cf]">{subtitle}</p>
          <p className="mt-4 text-[16px] leading-[1.45] text-[#c9c6bf]">{description}</p>
        </div>
        {[
          [quickLinksTitle, mappedQuickLinks],
          [servicesTitle, mappedServices],
          [initiativesTitle, mappedInitiatives],
        ].map(([heading, items]) => (
          <div key={heading as string}>
            <h4 className="text-[16px] font-bold uppercase text-[#d2a03b]">{heading}</h4>
            <ul className="mt-4 space-y-2 text-[16px] text-[#d9d6ce]">
              {(items as string[]).map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
        <div>
          <h4 className="text-[16px] font-bold uppercase text-[#d2a03b]">{supportTitle}</h4>
          <div className="mt-4 rounded-[8px] border border-[#6e674a] bg-[#0a3d34] p-4">
            <p className="text-[16px] leading-[1.4] text-[#e4e0d6]">{supportDesc}</p>
            <a href="#" className="mt-4 inline-flex h-[42px] w-full items-center justify-between rounded-[5px] bg-[#d2a03b] px-4 text-[16px] font-bold uppercase text-[#073a30]">{submitLabel}<PartnershipIcon name="ArrowRight" className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
