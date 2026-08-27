"use client";

import { UBSIcon, UBSIconName } from "./UnclaimedBodyIcons";
import { textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";

const defaultSteps = [
  ["01", "FileCheck", "Case Referral", "Case details are received from an appropriate or verifiable source."],
  ["02", "ShieldCheck", "Verification & Authorisation", "Available case information, documentation and required authorisation are reviewed before assistance is undertaken."],
  ["03", "People", "Sewa Coordination", "Eligible assistance is coordinated according to case requirements, applicable process and available resources."],
  ["04", "HeartHands", "Dignified Final Journey", "Approved support is provided with sensitivity, dignity and respect."],
] as const;

export default function UnclaimedBodyProcess() {
  const section = useWebsiteSection("unclaimed-process");
  const items = section?.items?.length ? section.items : defaultSteps.map(s => ({ title: s[2], description: s[3] }));
  
  // We need to map the dynamic items back to the icons. Since items can change, we'll assign icons sequentially from the default list or cycle them.
  const icons: UBSIconName[] = ["FileCheck", "ShieldCheck", "People", "HeartHands"];

  return (
    <section id="how-unclaimed-works" className="bg-[#fbf8f2] px-5 py-7">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-[16px] font-bold uppercase tracking-[0.12em] text-[#b27b22]">{textOrFallback(section?.eyebrow, "The Sewa Process", 60)}</p>
        <h2 className="mt-2 text-[44px] font-medium text-[#064335] sm:text-[54px]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
          {textOrFallback(section?.title, "How Unclaimed Body Sewa Works", 150)}
        </h2>
        <div className="mt-2 flex items-center justify-center gap-3 text-[#bd8a35]">
          <span className="h-px w-20 bg-[#c69649]" /><UBSIcon name="Lotus" className="h-7 w-7" /><span className="h-px w-20 bg-[#c69649]" />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => {
            const no = String(index + 1).padStart(2, "0");
            const icon = icons[index % icons.length];
            return (
              <div key={no} className="relative px-5">
                {index < items.length - 1 && (
                  <span className="absolute left-[72%] top-[50px] hidden h-px w-[58%] bg-[#c9ae79] xl:block" />
                )}
                <div className="relative mx-auto grid h-[82px] w-[82px] place-items-center rounded-full border border-[#d4c3a2] bg-[#f5f4ed] text-[#0c4c3b]">
                  <span className="absolute -left-4 top-[-7px] grid h-7 w-7 place-items-center rounded-full bg-[#00503d] text-[16px] font-bold text-white">{no}</span>
                  <UBSIcon name={icon} className="h-10 w-10" />
                </div>
                <h3 className="mt-2 text-[20px] font-bold text-[#0a4a39]">{textOrFallback(item.title, "", 60)}</h3>
                <span className="mx-auto mt-2 block h-[2px] w-10 bg-[#c28c34]" />
                <p className="mt-2 text-[16px] font-medium leading-[1.4] text-[#4b5051]">{textOrFallback(item.description, "", 160)}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 rounded-[12px] bg-[#f1f1ea] px-6 py-3 text-left md:grid-cols-2">
          <p className="flex gap-3 text-[16px] leading-[1.45] text-[#444b4a]">
            <UBSIcon name="People" className="h-8 w-8 shrink-0 text-[#0b4e3c]" />
            Cases may be referred by hospitals, competent authorities, recognised institutions or individuals with verifiable information, depending on the circumstance.
          </p>
          <p className="flex gap-3 text-[16px] leading-[1.45] text-[#444b4a]">
            <UBSIcon name="ShieldCheck" className="h-8 w-8 shrink-0 text-[#0b4e3c]" />
            A referral or request itself does not constitute legal authorisation.
          </p>
        </div>

        <a href="#request-unclaimed-help" className="mx-auto mt-4 inline-flex h-[50px] min-w-[280px] items-center justify-between rounded-[7px] bg-[#004b39] px-6 text-[16px] font-bold uppercase text-white">
          Request Sewa Help
          <UBSIcon name="ArrowRight" className="h-6 w-6 text-[#d5a33a]" />
        </a>
      </div>
      <div className="mx-auto mt-5 h-[5px] max-w-7xl bg-[#004735]" />
    </section>
  );
}
