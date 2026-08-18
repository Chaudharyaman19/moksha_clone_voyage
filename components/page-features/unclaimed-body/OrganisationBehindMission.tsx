import { UBSIcon } from "./UnclaimedBodyIcons";

const pillars = [
  ["ShieldCheck", "Governance", "Ethical leadership and transparent processes at every step."],
  ["People", "Social Service", "Working for community welfare and meaningful social impact."],
  ["HeartHands", "Humanitarian Action", "Compassionate action for people who need timely support."],
  ["Lotus", "Responsible Sewa", "Dignity-first support with accountability and care."],
] as const;

export default function OrganisationBehindMission() {
  return (
    <section className="relative overflow-hidden bg-[#fbf6ed] px-5 py-9">
      <div
        className="pointer-events-none absolute right-0 top-0 h-[62%] w-[48%] bg-no-repeat opacity-65"
        style={{
          backgroundImage: "url('/assets/unclaimed-body/institution-background.png')",
          backgroundSize: "100% 100%",
        }}
      />
      <div className="relative mx-auto max-w-[1550px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[31%_69%]">
          <div className="rounded-[14px] bg-white px-7 py-8 shadow-[0_7px_20px_rgba(55,40,20,.08)]">
            <UBSIcon name="Lotus" className="mx-auto h-24 w-24 text-[#0a6b98]" />
            <h3 className="mt-4 text-center text-[34px] font-bold text-[#0a4a39]">NAMO GANGE</h3>
            <p className="mt-2 text-center text-[16px] font-semibold tracking-[0.16em] text-[#555]">A JOURNEY TO HEALTHY WORLD...</p>
            <div className="mt-5 flex items-center gap-3"><span className="h-px flex-1 bg-[#c79a56]" /><span className="text-[16px] font-bold tracking-[0.28em]">NAMO GANGE TRUST</span><span className="h-px flex-1 bg-[#c79a56]" /></div>
          </div>

          <div className="pt-2">
            <div className="flex items-center justify-center gap-4 text-[16px] font-bold uppercase tracking-[0.1em] text-[#b27a21]">
              <span className="h-px w-10 bg-[#c48f38]" /><UBSIcon name="Lotus" className="h-8 w-8" /><span className="h-px w-10 bg-[#c48f38]" />
            </div>
            <p className="mt-2 text-center text-[18px] font-bold uppercase tracking-[0.07em] text-[#b27a21]">The Organisation Behind Moksha Sewa</p>
            <h2 className="mt-6 text-[48px] font-medium leading-[1.05] text-[#064335] lg:text-[58px]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              A Humanitarian Initiative of
              <br />
              <span className="text-[#b67a16]">Namo Gange Trust.</span>
            </h2>
            <p className="mt-6 max-w-[800px] text-[18px] font-medium leading-[1.55] text-[#404647]">
              Moksha Sewa is an initiative of Namo Gange Trust. Through this institutional framework, the initiative works to bring humanitarian service, responsible processes and dignity together in support of eligible final journeys.
            </p>
          </div>
        </div>

        <div className="relative mt-8 rounded-[14px] bg-[#004b39] px-5 pb-7 pt-10 text-white">
          <div className="absolute left-1/2 top-[-19px] -translate-x-1/2 rounded-[7px] bg-[#e7b752] px-14 py-2 text-[18px] font-bold uppercase text-[#164534]">Our Institutional Pillars</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            {pillars.map(([icon, title, text], index) => (
              <div key={title} className={`px-8 py-3 text-center ${index ? "xl:border-l xl:border-[#8c895f]" : ""}`}>
                <span className="mx-auto grid h-[86px] w-[86px] place-items-center rounded-full border-2 border-[#c89633] text-[#d3a03d]">
                  <UBSIcon name={icon} className="h-12 w-12" />
                </span>
                <h3 className="mt-3 text-[22px] font-semibold" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>{title}</h3>
                <span className="mx-auto mt-3 block h-[2px] w-9 bg-[#c99734]" />
                <p className="mt-3 text-[16px] leading-[1.45] text-[#eeeae0]">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <a href="#" className="inline-flex h-[58px] min-w-[430px] items-center justify-between rounded-[7px] border border-[#c89230] bg-[#004b39] px-7 text-[18px] font-bold uppercase text-white">
            Know Namo Gange Trust
            <UBSIcon name="ArrowRight" className="h-6 w-6 text-[#d4a03b]" />
          </a>
        </div>
      </div>
    </section>
  );
}
