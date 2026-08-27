"use client";

import { UBSIcon, UBSIconName } from "./UnclaimedBodyIcons";
import { textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";

const defaultServices = [
  ["01", "Ambulance", "Final-Journey\nTransport", "Appropriate transport coordination where required and permitted."],
  ["02", "Fire", "Cremation &\nLast-Rites Coordination", "Support with eligible final-journey arrangements."],
  ["03", "Ritual", "Ritual\nEssentials", "Basic materials required for final rites where applicable."],
  ["04", "Priest", "Priest / Ritual\nCoordination", "Appropriate ritual guidance or coordination where relevant."],
  ["05", "HeartHands", "On-Ground\nSewa", "Compassionate presence and practical coordination during the final journey."],
] as const;

export default function FinalJourneySupport() {
  const section = useWebsiteSection("unclaimed-final-journey");
  const items = section?.items?.length ? section.items : defaultServices.map(s => ({ title: s[2], description: s[3] }));
  const icons: UBSIconName[] = ["Ambulance", "Fire", "Ritual", "Priest", "HeartHands"];

  return (
    <section className="relative overflow-hidden bg-[#fbf7ef] px-5 py-7">
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-[44%] bg-no-repeat opacity-45"
        style={{
          backgroundImage: `url('${section?.image || '/assets/unclaimed-body/ghat-background.png'}')`,
          backgroundSize: "100% 100%",
          backgroundPosition: "right center",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="flex items-center gap-3 text-[16px] font-bold uppercase tracking-[0.1em] text-[#b3781c]">
          <UBSIcon name="Lotus" className="h-8 w-8" />
          {textOrFallback(section?.eyebrow, "Sewa Support", 60)}
        </div>
        <h2 className="mt-2 text-[44px] font-medium text-[#064335] sm:text-[54px]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
          {textOrFallback(section?.title, "Support for a Dignified Final Journey", 150)}
        </h2>
        <p className="mt-2 max-w-[900px] text-[16px] font-medium leading-[1.4] text-[#43494a]">
          {textOrFallback(section?.description, "Depending on the verified case, applicable requirements and available resources, assistance may include:", 600)}
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-5">
          {items.map((item, index) => {
            const no = String(index + 1).padStart(2, "0");
            const icon = icons[index % icons.length];
            return (
              <div key={no} className="relative text-center">
                {index < items.length - 1 && (
                  <div className="absolute left-[71%] top-[45px] hidden w-[58%] items-center xl:flex">
                    <span className="h-px flex-1 border-t border-dashed border-[#a5a183]" />
                    <span className="grid h-7 w-7 place-items-center rounded-full border border-[#0a5a44] bg-[#fbf7ef] text-[#0a5a44]">›</span>
                  </div>
                )}
                <span className="mx-auto grid h-[80px] w-[80px] place-items-center rounded-full border border-[#d7c8aa] bg-[#f1f2eb] text-[#0a4d3b]">
                  <UBSIcon name={icon} className="h-10 w-10" />
                </span>
                <div className="mx-auto mt-2 text-[16px] font-bold text-[#b87a16]">{no}</div>
                <h3 className="mt-2 whitespace-pre-line text-[20px] font-bold leading-[1.15] text-[#0a4a39]">{textOrFallback(item.title, "", 60)}</h3>
                <p className="mt-2 text-[16px] leading-[1.35] text-[#4a5051]">{textOrFallback(item.description, "", 160)}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-5 flex min-h-[62px] items-center rounded-[12px] border border-[#dfd4c4] bg-[#f4f2eb]/95 px-6 py-2">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#004b39] text-white">
            <UBSIcon name="ShieldCheck" className="h-6 w-6" />
          </span>
          <p className="ml-4 text-[16px] font-medium leading-[1.35] text-[#424948]">
            Support varies by case and is subject to verification, required authorisation, applicable formalities, local requirements and resource availability.
          </p>
        </div>
      </div>
    </section>
  );
}
