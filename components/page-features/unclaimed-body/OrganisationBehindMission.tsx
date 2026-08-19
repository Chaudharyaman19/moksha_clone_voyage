import Image from "next/image";
import namoGangeLogo from "../../../public/assets/namo-gange-logo.webp";
import { UBSIcon } from "./UnclaimedBodyIcons";

const pillars = [
  ["ShieldCheck", "Governance", "Ethical leadership and transparent processes at every step."],
  ["People", "Social Service", "Working for community welfare and meaningful social impact."],
  ["HeartHands", "Humanitarian Action", "Compassionate action for people who need timely support."],
  ["Lotus", "Responsible Sewa", "Dignity-first support with accountability and care."],
] as const;

export default function OrganisationBehindMission() {
  return (
    <section className="relative overflow-hidden bg-[#fbf6ed] px-5 py-6">
      <div
        className="pointer-events-none absolute right-0 top-0 h-[62%] w-[48%] bg-no-repeat opacity-65"
        style={{
          backgroundImage: "url('/assets/unclaimed-body/institution-background.png')",
          backgroundSize: "100% 100%",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[31%_69%]">
          <div className="flex items-center justify-center">
            <Image src={namoGangeLogo} alt="Namo Gange Trust" className="h-auto w-full max-w-[340px] object-contain" sizes="340px" />
          </div>

          <div className="pt-2">
            <div className="flex items-center justify-center gap-4 text-[16px] font-bold uppercase tracking-[0.1em] text-[#b27a21]">
              <span className="h-px w-10 bg-[#c48f38]" /><UBSIcon name="Lotus" className="h-8 w-8" /><span className="h-px w-10 bg-[#c48f38]" />
            </div>
            <p className="mt-2 text-center text-[18px] font-bold uppercase tracking-[0.07em] text-[#b27a21]">The Organisation Behind Moksha Sewa</p>
            <h2 className="mt-3 text-[42px] font-medium leading-[1.05] text-[#064335] lg:text-[50px]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              A Humanitarian Initiative of
              <br />
              <span className="text-[#b67a16]">Namo Gange Trust.</span>
            </h2>
            <p className="mt-3 max-w-[800px] text-[17px] font-medium leading-[1.4] text-[#404647]">
              Moksha Sewa is an initiative of Namo Gange Trust. Through this institutional framework, the initiative works to bring humanitarian service, responsible processes and dignity together in support of eligible final journeys.
            </p>
          </div>
        </div>

        <div className="relative mt-6 rounded-[14px] bg-[#004b39] px-5 pb-4 pt-8 text-white">
          <div className="absolute left-1/2 top-[-16px] -translate-x-1/2 rounded-[7px] bg-[#e7b752] px-10 py-1.5 text-[16px] font-bold uppercase text-[#164534]">Our Institutional Pillars</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            {pillars.map(([icon, title, text], index) => (
              <div key={title} className={`px-6 py-2 text-center ${index ? "xl:border-l xl:border-[#8c895f]" : ""}`}>
                <span className="mx-auto grid h-[68px] w-[68px] place-items-center rounded-full border-2 border-[#c89633] text-[#d3a03d]">
                  <UBSIcon name={icon} className="h-9 w-9" />
                </span>
                <h3 className="mt-2 text-[20px] font-semibold" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>{title}</h3>
                <span className="mx-auto mt-2 block h-[2px] w-9 bg-[#c99734]" />
                <p className="mt-2 text-[16px] leading-[1.35] text-[#eeeae0]">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 flex justify-center">
          <a href="#" className="inline-flex h-[48px] min-w-[320px] items-center justify-between rounded-[7px] border border-[#c89230] bg-[#004b39] px-5 text-[16px] font-bold uppercase text-white">
            Know Namo Gange Trust
            <UBSIcon name="ArrowRight" className="h-6 w-6 text-[#d4a03b]" />
          </a>
        </div>
      </div>
    </section>
  );
}
