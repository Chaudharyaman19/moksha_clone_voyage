
import Image from "next/image";
import { CSRIcon, type CSRIconName } from "./CSRIcons";

const pillars = [
  ["Institution", "Governance", "Upholding transparent systems,\nethical practices and strong\ninstitutional governance."],
  ["People", "Social Service", "Working for community welfare\nand creating inclusive, compassionate\nand meaningful social impact."],
  ["HeartHands", "Humanitarian Action", "Extending timely support and relief\nto those in need with dignity,\ncare and respect."],
  ["Handshake", "Responsible Partnerships", "Building accountable partnerships\nthat create sustainable impact\nand long-term shared value."],
] as const;

export default function InstitutionalResponsibility() {
  return (
    <section id="organisation" className="relative overflow-hidden bg-[#fbf6ed] px-5 py-5">
      <div className="relative mx-auto max-w-7xl overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 h-[515px] bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/csr/institutional-responsibility-bg.jpeg')" }}
        />
        <div
          className="pointer-events-none absolute left-[28%] top-0 z-[1] hidden h-[515px] w-[47%] lg:block"
          style={{ background: "linear-gradient(90deg,#fbf6ed 0%,rgba(251,246,237,.94) 45%,rgba(251,246,237,.55) 72%,transparent 100%)" }}
        />
        <div className="relative z-10 grid min-h-[430px] grid-cols-1 gap-7 lg:grid-cols-[30%_70%]">
          <div className="pt-[76px]">
            <div className="relative mx-auto h-[340px] max-w-[410px] overflow-hidden rounded-[12px] bg-white shadow-lg">
              <Image src="/assets/csr/namo-gange-card.jpg" alt="Namo Gange Trust" fill className="object-cover" sizes="410px" />
            </div>
          </div>
          <div className="pt-5">
            <div className="flex items-center justify-center gap-4 text-[18px] font-bold uppercase tracking-[0.08em] text-[#a66f19]">
              <span className="h-px w-10 bg-[#bd8b35]" /><CSRIcon name="Lotus" className="h-8 w-8" /><span className="h-px w-10 bg-[#bd8b35]" />
            </div>
            <p className="mt-2 text-center text-[18px] font-bold uppercase tracking-[0.08em] text-[#a66f19]">The Organisation Behind Moksha Sewa</p>
            <h2
              className="mt-3 text-[40px] font-medium leading-[1.05] text-[#064335] lg:text-[48px]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Institutional Responsibility
              <br />
              Behind the Mission.
            </h2>
            <span className="mt-3 block h-[2px] w-[105px] bg-[#b88027]" />
            <p className="mt-3 max-w-[680px] text-[18px] font-medium leading-[1.45] text-[#3e4343]">
              Moksha Sewa is an initiative of <strong className="text-[#b67914]">Namo Gange Trust.</strong>
              <br />
              Through this institutional framework, the initiative
              <br />
              seeks to build responsible humanitarian collaborations
              <br />
              centred on dignity, service and accountability.
            </p>
          </div>
        </div>

        <div className="relative z-20 -mt-[12px] rounded-[12px] bg-[#004c39] px-4 pb-4 pt-9 text-white">
          <div className="absolute left-1/2 top-[-18px] -translate-x-1/2 rounded-[7px] bg-[#e7b752] px-10 py-2 text-[16px] font-bold uppercase tracking-[0.04em] text-[#164534] shadow">
            Our Institutional Pillars
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            {pillars.map(([icon, title, text], index) => (
              <div key={title} className={`min-h-[185px] px-6 text-center ${index ? "border-l border-[#8b8a55]" : ""}`}>
                <span className="mx-auto grid h-[72px] w-[72px] place-items-center rounded-full border-2 border-[#c69431] text-[#d6a33d]">
                  <CSRIcon name={icon as CSRIconName} className="h-14 w-14" />
                </span>
                <h3 className="mt-2 text-[22px] font-semibold" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>{title}</h3>
                <span className="mx-auto mt-2 block h-[2px] w-10 bg-[#c89633]" />
                <p className="mt-2 whitespace-pre-line text-[16px] leading-[1.35] text-[#f1eee4]">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-20 mt-3 flex items-center justify-center gap-4">
          <span className="hidden h-px flex-1 bg-[#c29139] sm:block" /><span className="text-[#bc842d]">◇</span>
          <a href="#" className="inline-flex h-[48px] w-full max-w-[390px] items-center justify-between rounded-[7px] border border-[#c6912f] bg-[#004938] px-5 text-[16px] font-bold uppercase text-white shadow">
            <span className="inline-flex items-center gap-4"><CSRIcon name="ShieldCheck" className="h-9 w-9 text-[#d6a33a]" />Know Namo Gange Trust</span>
            <CSRIcon name="ArrowRight" className="h-7 w-7 text-[#d6a33a]" />
          </a>
          <span className="text-[#bc842d]">◇</span><span className="hidden h-px flex-1 bg-[#c29139] sm:block" />
        </div>
      </div>
    </section>
  );
}
