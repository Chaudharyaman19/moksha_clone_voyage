import { UBSIcon } from "./UnclaimedBodyIcons";

const services = [
  ["01", "Ambulance", "Final-Journey\nTransport", "Appropriate transport coordination where required and permitted."],
  ["02", "Fire", "Cremation &\nLast-Rites Coordination", "Support with eligible final-journey arrangements."],
  ["03", "Ritual", "Ritual\nEssentials", "Basic materials required for final rites where applicable."],
  ["04", "Priest", "Priest / Ritual\nCoordination", "Appropriate ritual guidance or coordination where relevant."],
  ["05", "HeartHands", "On-Ground\nSewa", "Compassionate presence and practical coordination during the final journey."],
] as const;

export default function FinalJourneySupport() {
  return (
    <section className="relative overflow-hidden bg-[#fbf7ef] px-5 py-10">
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-[44%] bg-no-repeat opacity-45"
        style={{
          backgroundImage: "url('/assets/unclaimed-body/ghat-background.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "right center",
        }}
      />
      <div className="relative mx-auto max-w-[1550px]">
        <div className="flex items-center gap-3 text-[16px] font-bold uppercase tracking-[0.1em] text-[#b3781c]">
          <UBSIcon name="Lotus" className="h-8 w-8" />
          Sewa Support
        </div>
        <h2 className="mt-4 text-[44px] font-medium text-[#064335] sm:text-[54px]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
          Support for a Dignified Final Journey
        </h2>
        <p className="mt-5 max-w-[900px] text-[16px] font-medium leading-[1.55] text-[#43494a]">
          Depending on the verified case, applicable requirements and available resources, assistance may include:
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-5">
          {services.map(([no, icon, title, text], index) => (
            <div key={no} className="relative text-center">
              {index < services.length - 1 && (
                <div className="absolute left-[71%] top-[45px] hidden w-[58%] items-center xl:flex">
                  <span className="h-px flex-1 border-t border-dashed border-[#a5a183]" />
                  <span className="grid h-7 w-7 place-items-center rounded-full border border-[#0a5a44] bg-[#fbf7ef] text-[#0a5a44]">›</span>
                </div>
              )}
              <span className="mx-auto grid h-[92px] w-[92px] place-items-center rounded-full border border-[#d7c8aa] bg-[#f1f2eb] text-[#0a4d3b]">
                <UBSIcon name={icon} className="h-12 w-12" />
              </span>
              <div className="mx-auto mt-2 text-[16px] font-bold text-[#b87a16]">{no}</div>
              <h3 className="mt-2 whitespace-pre-line text-[20px] font-bold leading-[1.15] text-[#0a4a39]">{title}</h3>
              <p className="mt-3 text-[16px] leading-[1.45] text-[#4a5051]">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-9 flex min-h-[74px] items-center rounded-[12px] border border-[#dfd4c4] bg-[#f4f2eb]/95 px-7">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-[#004b39] text-white">
            <UBSIcon name="ShieldCheck" className="h-8 w-8" />
          </span>
          <p className="ml-5 text-[16px] font-medium leading-[1.45] text-[#424948]">
            Support varies by case and is subject to verification, required authorisation, applicable formalities, local requirements and resource availability.
          </p>
        </div>
      </div>
    </section>
  );
}
