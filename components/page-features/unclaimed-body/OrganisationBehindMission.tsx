import Image from "next/image";
import namoGangeLogo from "../../../public/hero-images/namo-gange-logo.webp";
import { UBSIcon } from "./UnclaimedBodyIcons";

const pillars = [
  ["ShieldCheck", "Governance", "Ethical leadership and transparent processes at every step."],
  ["People", "Social Service", "Working for community welfare and meaningful social impact."],
  ["HeartHands", "Humanitarian Action", "Compassionate action for people who need timely support."],
  ["Lotus", "Responsible Sewa", "Dignity-first support with accountability and care."],
] as const;

export default function OrganisationBehindMission() {
  return (
    <section className="relative overflow-hidden bg-[#fbf6ed] px-4 py-5 sm:px-5 sm:py-6">
      <div
        className="pointer-events-none absolute right-0 top-0 hidden h-[62%] w-[48%] bg-no-repeat opacity-65 sm:block"
        style={{
          backgroundImage: "url('/assets/unclaimed-body/institution-background.png')",
          backgroundSize: "100% 100%",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[31%_69%] lg:gap-5">
          <div className="flex items-center justify-center">
            <Image src={namoGangeLogo} alt="Namo Gange Trust" className="h-auto w-full max-w-[210px] object-contain sm:max-w-[280px] lg:max-w-[340px]" sizes="(max-width: 640px) 210px, (max-width: 1024px) 280px, 340px" />
          </div>

          <div className="pt-1 text-left lg:pt-2">
            <div className="flex items-center justify-start gap-3 text-[16px] font-bold uppercase tracking-[0.1em] text-[#b27a21] lg:gap-4">
              <span className="h-px w-10 bg-[#c48f38]" /><UBSIcon name="Lotus" className="h-7 w-7 sm:h-8 sm:w-8" /><span className="h-px w-10 bg-[#c48f38]" />
            </div>
            <p className="mt-2 max-w-[320px] text-left text-[14px] font-bold uppercase leading-snug tracking-[0.06em] text-[#b27a21] sm:max-w-none sm:text-[18px]">The Organisation Behind Moksha Sewa</p>
            <h2 className="mt-3 text-left text-[30px] font-medium leading-tight text-[#064335] sm:text-[40px] lg:text-[50px] lg:leading-[1.05]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              A Humanitarian Initiative of
              <br className="hidden sm:block" />
              <span className="text-[#b67a16]">Namo Gange Trust.</span>
            </h2>
            <p className="mt-3 max-w-[800px] text-left text-[16px] font-medium leading-7 text-[#404647] lg:text-[17px] lg:leading-[1.4]">
              Moksha Sewa is an initiative of Namo Gange Trust. Through this institutional framework, the initiative works to bring humanitarian service, responsible processes and dignity together in support of eligible final journeys.
            </p>
          </div>
        </div>

        <div className="relative mt-5 rounded-[14px] bg-[#004b39] px-4 pb-4 pt-10 text-white sm:mt-6 sm:px-5">
          <div className="absolute left-1/2 top-[-15px] w-[calc(100%-32px)] max-w-[340px] -translate-x-1/2 rounded-[7px] bg-[#e7b752] px-4 py-1.5 text-center text-[13px] font-bold uppercase tracking-[0.04em] text-[#164534] sm:w-auto sm:max-w-none sm:px-10 sm:text-[16px]">Our Institutional Pillars</div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-0 xl:grid-cols-4">
            {pillars.map(([icon, title, text], index) => (
              <div key={title} className={`rounded-[10px] bg-white/5 px-4 py-4 text-center sm:rounded-none sm:bg-transparent sm:px-5 sm:py-3 lg:px-6 ${index ? "xl:border-l xl:border-[#8c895f]" : ""}`}>
                <span className="mx-auto grid h-[58px] w-[58px] place-items-center rounded-full border-2 border-[#c89633] text-[#d3a03d] sm:h-[68px] sm:w-[68px]">
                  <UBSIcon name={icon} className="h-8 w-8 sm:h-9 sm:w-9" />
                </span>
                <h3 className="mt-2 text-[19px] font-semibold sm:text-[20px]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>{title}</h3>
                <span className="mx-auto mt-2 block h-[2px] w-9 bg-[#c99734]" />
                <p className="mx-auto mt-2 max-w-[260px] text-[16px] leading-6 text-[#eeeae0] sm:leading-[1.35]">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 flex justify-center">
          <a href="/about" target="_blank" rel="noopener noreferrer" className="inline-flex h-[48px] w-full max-w-[320px] items-center justify-between rounded-[7px] border border-[#c89230] bg-[#004b39] px-5 text-[15px] font-bold uppercase text-white sm:min-w-[320px] sm:text-[16px]">
            Know Namo Gange Trust
            <UBSIcon name="ArrowRight" className="h-6 w-6 text-[#d4a03b]" />
          </a>
        </div>
      </div>
    </section>
  );
}
