"use client";

import { UBSIcon } from "./UnclaimedBodyIcons";
import { textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";

const defaultFaqs = [
  ["What is an unclaimed body?", "The legal or administrative status of a deceased person is determined by competent authorities under applicable procedures. Moksha Sewa does not independently declare a body to be unclaimed."],
  ["Who can request Unclaimed Body Sewa?", "Requests may come from competent authorities, hospitals, recognised institutions or people with verifiable information, depending on the circumstances."],
  ["What documents or authorisation may be required?", "Requirements depend on the case and applicable local process. Assistance can proceed only after the required formalities and authorisation are available."],
  ["What support can Moksha Sewa provide?", "Depending on eligibility, authorisation and resources, support may include transport coordination, cremation or last-rites assistance, ritual essentials and on-ground coordination."],
  ["Does Moksha Sewa declare a body legally unclaimed?", "No. Moksha Sewa provides humanitarian assistance and does not replace the authority of competent legal or administrative bodies."],
  ["Where is Unclaimed Body Sewa currently available?", "Availability depends on location, case verification, local coordination and available resources."],
];

export default function UnclaimedBodyFAQ() {
  const section = useWebsiteSection("unclaimed-faq");
  const items = section?.items?.length ? section.items : defaultFaqs.map(f => ({ title: f[0], description: f[1] }));

  return (
    <section className="relative overflow-hidden bg-[#fbf7ef] px-5 py-6">
      <div className="mx-auto max-w-7xl text-center">
        <div className="flex items-center justify-center gap-3 text-[16px] font-bold uppercase tracking-[0.1em] text-[#b37b22]"><span className="h-px w-14 bg-[#c69139]" />{textOrFallback(section?.eyebrow, "Help & Information", 60)}<span className="h-px w-14 bg-[#c69139]" /></div>
        <h2 className="mt-2 text-[40px] font-medium leading-[1.05] text-[#064335] sm:text-[48px]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
          {textOrFallback(section?.title, "Frequently Asked Questions", 150)}
        </h2>
        <p className="mt-1 text-[18px] font-medium text-[#3f4546]">{textOrFallback(section?.description, "About Unclaimed Body Sewa", 160)}</p>

        <div className="mx-auto mt-4 max-w-[900px] space-y-2 text-left">
          {items.map((item, index) => (
            <details key={item.title} open={index === 0} className="group rounded-[8px] border border-[#ddd3c4] bg-white px-4 py-2.5">
              <summary className="flex cursor-pointer list-none items-center gap-4 text-[16px] font-bold text-[#34403e]">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-[#004b39] text-white"><UBSIcon name="ShieldCheck" className="h-4 w-4" /></span>
                <span className="flex-1">{textOrFallback(item.title, "", 150)}</span>
                <span className="text-[#8e7b58] group-open:rotate-180">⌄</span>
              </summary>
              <p className="pl-11 pt-2 text-[16px] leading-[1.35] text-[#555b5a]">{textOrFallback(item.description, "", 600)}</p>
            </details>
          ))}
        </div>

      </div>

      <div
        className="relative mx-auto mt-5 min-h-[130px] max-w-7xl overflow-hidden rounded-[12px] bg-[#003e32] px-6 py-4 text-white"
        style={{
          backgroundImage: "linear-gradient(rgba(0,62,50,.78),rgba(0,62,50,.78)), url('https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165473/moksha-sewa/assets/unclaimed-body/request-background.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >
        <p className="text-center text-[16px] font-bold uppercase tracking-[0.08em] text-[#d3a13f]">Dignity Until The Very End</p>
        <h3 className="mt-1 text-center text-[27px] font-medium" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
          When Someone Has No One, Humanity Must Stand Beside Them.
        </h3>
        <p className="mt-1.5 text-center text-[16px] text-[#edeae2]">Every final journey deserves dignity, care and respect.</p>
        <div className="mt-3 flex flex-wrap justify-center gap-3">
          <a href="#request-unclaimed-help" className="inline-flex h-[44px] min-w-[180px] items-center justify-between rounded-[6px] bg-[#d39b37] px-4 text-[16px] font-bold uppercase text-[#0a4335]">Request Sewa Help<UBSIcon name="ArrowRight" className="h-5 w-5" /></a>
          <a href="/donation" target="_blank" rel="noopener noreferrer" className="inline-flex h-[44px] min-w-[180px] items-center justify-between rounded-[6px] border border-[#c69336] bg-transparent px-4 text-[16px] font-bold uppercase text-white">Support The Mission<UBSIcon name="ArrowRight" className="h-5 w-5" /></a>
        </div>
      </div>
    </section>
  );
}
