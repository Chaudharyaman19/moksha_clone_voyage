import { UBSIcon } from "./UnclaimedBodyIcons";
import { useWebsiteSection } from "@/components/website/WebsiteContentContext";
import { textOrFallback, itemOrFallback } from "@/components/website/WebsiteContentContext";

const quickLinks = ["Home", "About Us", "Gallery", "Blog", "Contact Us"];
const services = ["Request Sewa Help", "Transport", "Cremation", "Ritual Material Support", "Priest Guidance", "Family Guidance"];
const initiatives = ["Unclaimed Bodies Support", "Volunteer Program", "Awareness & Outreach"];

export default function MokshaFooter() {
  const section = useWebsiteSection("footer");
  const brandName = textOrFallback(section?.title, "MOKSHA SEWA", 60);
  const subtitle = textOrFallback(section?.subtitle, "A Namo Gange Trust Initiative", 120);
  const description = textOrFallback(section?.description, "We stand with compassion, coordination and dignity so no final journey is forgotten.", 240);
  
  const quickLinksTitle = textOrFallback(section?.quickLinksTitle, "Quick Links", 50);
  const servicesTitle = textOrFallback(section?.servicesTitle, "Our Services", 50);
  const initiativesTitle = textOrFallback(section?.initiativesTitle, "Our Initiatives", 50);
  const contactTitle = textOrFallback(section?.contactTitle, "Contact Us", 50);
  const contactAddress = textOrFallback(section?.contactAddress, "Delhi • Ghaziabad • Noida", 100);
  
  const supportDesc = textOrFallback(section?.requestDescription, "Request support or connect with our team.", 150);
  const submitLabel = textOrFallback(section?.submitLabel, "Send Request", 50);
  const legalNotice = textOrFallback(section?.legalNotice, "© 2026 Moksha Sewa. All Rights Reserved.", 100);
  const bottomStatement = textOrFallback(section?.bottomStatement, "Sewa • Samman • Sanrakshan", 100);

  const footerItems = section?.items ?? [];
  const getItems = (defaults: string[], offset: number) => 
    defaults.map((title, i) => itemOrFallback(footerItems, offset + i, { title }).title || title);

  const mappedQuickLinks = getItems(quickLinks, 0);
  const mappedServices = getItems(services, quickLinks.length);
  const mappedInitiatives = getItems(initiatives, quickLinks.length + services.length);

  return (
    <footer className="bg-[#00372d] px-5 py-6 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[28%_16%_18%_18%_20%]">
        <div>
          <UBSIcon name="Lotus" className="h-16 w-16 text-[#d3a13d]" />
          <h3 className="mt-2 text-[28px] font-bold uppercase">{brandName}</h3>
          <p className="mt-2 text-[16px] text-[#e8e4d9]">{subtitle}</p>
          <p className="mt-5 max-w-[340px] text-[16px] leading-[1.5] text-[#d8d5cd]">{description}</p>
        </div>
        {[
          [quickLinksTitle, mappedQuickLinks],
          [servicesTitle, mappedServices],
          [initiativesTitle, mappedInitiatives],
        ].map(([heading, items]) => (
          <div key={heading as string}>
            <h4 className="text-[16px] font-bold uppercase text-[#d3a13d]">{heading}</h4>
            <ul className="mt-4 space-y-2 text-[16px] text-[#e5e2da]">
              {(items as string[]).map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
        <div>
          <h4 className="text-[16px] font-bold uppercase text-[#d3a13d]">{contactTitle}</h4>
          <div className="mt-4 space-y-3 text-[16px] text-[#e5e2da]">
            <p className="flex gap-3"><UBSIcon name="Phone" className="h-5 w-5 text-[#d3a13d]" />24x7 Sewa Support</p>
            <p>{contactAddress}</p>
          </div>
          <div className="mt-5 rounded-[10px] border border-[#826f42] bg-[#0a4539] p-4">
            <p className="text-[16px] font-bold text-[#d3a13d]">{brandName}</p>
            <p className="mt-2 text-[16px] leading-[1.4] text-[#e8e4dc]">{supportDesc}</p>
            <a href="#request-unclaimed-help" className="mt-4 inline-flex h-[44px] w-full items-center justify-between rounded-[6px] bg-[#d5a13a] px-4 text-[16px] font-bold uppercase text-[#083d32]">{submitLabel}<UBSIcon name="ArrowRight" className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-6 flex max-w-7xl flex-wrap items-center justify-between gap-3 border-t border-[#526b5e] pt-4 text-[16px] text-[#d3d0c7]">
        <p>{legalNotice}</p>
        <p>{bottomStatement}</p>
      </div>
    </footer>
  );
}
