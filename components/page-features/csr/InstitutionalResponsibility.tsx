
import Image from "next/image";
import namoGangeLogo from "../../../public/hero-images/namo-gange-logo.webp";
import { CSRIcon, type CSRIconName } from "./CSRIcons";

const pillars = [
  ["Institution", "Governance", "Upholding transparent systems,\nethical practices and strong\ninstitutional governance."],
  ["People", "Social Service", "Working for community welfare\nand creating inclusive, compassionate\nand meaningful social impact."],
  ["HeartHands", "Humanitarian Action", "Extending timely support and relief\nto those in need with dignity,\ncare and respect."],
  ["Handshake", "Responsible Partnerships", "Building accountable partnerships\nthat create sustainable impact\nand long-term shared value."],
] as const;

export default function InstitutionalResponsibility() {
  return (
    <section id="organisation" className="relative overflow-hidden bg-[#fbf6ed] px-5 py-3">
      <div className="relative mx-auto max-w-7xl overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 h-[340px] bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/csr/institutional-responsibility-bg.jpeg')" }}
        />
        <div
          className="pointer-events-none absolute left-[28%] top-0 z-[1] hidden h-[340px] w-[47%] lg:block"
          style={{ background: "linear-gradient(90deg,#fbf6ed 0%,rgba(251,246,237,.94) 45%,rgba(251,246,237,.55) 72%,transparent 100%)" }}
        />
        <div className="relative z-10 grid min-h-[280px] grid-cols-1 gap-5 lg:grid-cols-[30%_70%]">
          <div className="flex items-center justify-center pt-[28px]">
            <Image
              src={namoGangeLogo}
              alt="Namo Gange Trust"
              className="mx-auto h-auto w-full max-w-[320px] object-contain"
              sizes="320px"
            />
          </div>
          <div className="pt-3">
            <div className="flex items-center justify-start gap-4 text-[16px] font-bold uppercase tracking-[0.08em] text-[#a66f19]">
              <span className="h-px w-10 bg-[#bd8b35]" /><CSRIcon name="Lotus" className="h-6 w-6" /><span className="h-px w-10 bg-[#bd8b35]" />
            </div>
            <p className="mt-1.5 text-left text-[16px] font-bold uppercase tracking-[0.08em] text-[#a66f19]">The Organisation Behind Moksha Sewa</p>
            <h2
              className="mt-2 text-left text-[30px] font-medium leading-[1.05] text-[#064335] lg:text-[36px]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Institutional Responsibility
              <br />
              Behind the Mission.
            </h2>
            <span className="mt-2 block h-[2px] w-[105px] bg-[#b88027]" />
            <p className="mt-2 max-w-[680px] text-left text-[16px] font-medium leading-[1.4] text-[#3e4343]">
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

        <div className="relative z-20 mt-6 rounded-[12px] bg-[#004c39] px-4 pb-4 pt-12 text-white sm:pb-3 sm:pt-8">
          <div className="absolute left-1/2 top-[-18px] w-[calc(100%-32px)] max-w-[340px] -translate-x-1/2 rounded-[7px] bg-[#e7b752] px-4 py-2 text-center text-[16px] font-bold uppercase tracking-[0.04em] text-[#164534] shadow sm:w-auto sm:max-w-none sm:px-10">
            Our Institutional Pillars
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            {pillars.map(([icon, title, text], index) => (
              <div key={title} className={`min-h-[150px] px-6 py-4 text-center sm:py-2 ${index ? "sm:border-l sm:border-[#8b8a55]" : ""}`}>
                <span className="mx-auto grid h-[58px] w-[58px] place-items-center rounded-full border-2 border-[#c69431] text-[#d6a33d]">
                  <CSRIcon name={icon as CSRIconName} className="h-11 w-11" />
                </span>
                <h3 className="mt-2.5 text-[19px] font-semibold leading-[1.2] sm:mt-1.5" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>{title}</h3>
                <span className="mx-auto mt-2 block h-[2px] w-10 bg-[#c89633] sm:mt-1.5" />
                <p className="mt-2 whitespace-pre-line text-[16px] leading-[1.35] text-[#f1eee4] sm:mt-1.5 sm:leading-[1.3]">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-20 mt-2 flex items-center justify-center gap-4">
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
