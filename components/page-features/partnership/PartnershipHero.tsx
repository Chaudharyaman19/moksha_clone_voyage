"use client";

import { PartnershipIcon } from "./PartnershipIcons";

const benefits = [
  ["People", "Shared Purpose", "Working together for a common mission."],
  ["ShieldCheck", "Defined Roles", "Clear understanding of responsibilities."],
  ["Handshake", "Responsible Coordination", "Collaborating with care, process and accountability."],
  ["HeartHands", "Human Dignity", "Respect and compassion at the heart of every action."],
] as const;

export default function PartnershipHero() {
  return (
    <section className="relative overflow-hidden bg-[#fbf7ef] ">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] bg-no-repeat lg:block"
        style={{
          backgroundImage: "url('/assets/partnership/hero.png')",
          backgroundSize: "auto 100%",
          backgroundPosition: "right center",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-[1] hidden w-[61%] lg:block"
        style={{
          background:
            "linear-gradient(90deg,#fbf7ef 0%,#fbf7ef 62%,rgba(251,247,239,.97) 72%,rgba(251,247,239,.72) 84%,transparent 100%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1344px]">
        <div className="relative z-10 px-5 pb-5 pt-8 sm:px-7 lg:min-h-[440px] lg:w-[58%] lg:px-10 lg:pt-14">
          <div className="flex items-center gap-3 text-[16px] font-bold uppercase tracking-[0.08em] text-[#b37a22] pt-8">
            <PartnershipIcon name="Handshake" className="h-7 w-7" />
            Partner With Moksha Sewa
            <span className="h-px w-12 bg-[#c6923c]" />
          </div>

          <h1 className="mt-3 text-[42px] font-medium leading-[1.03] text-[#064335] sm:text-[50px]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            Together, We Can
            <br />
            Serve With Greater Purpose.
          </h1>

          <p className="mt-3 text-[20px] font-semibold leading-[1.35] text-[#b77a1d]">
            Build responsible partnerships around dignity,
            <br />
            compassion and humanitarian service.
          </p>

          <div className="mt-3 flex items-center gap-3 text-[#c4933a]">
            <span className="h-px w-44 bg-[#c4933a]" />
            <PartnershipIcon name="Lotus" className="h-6 w-6" />
            <span className="h-px w-44 bg-[#c4933a]" />
          </div>

          <p className="mt-3 max-w-[610px] text-[16px] font-medium leading-[1.45] text-[#44494a]">
            Partner with Moksha Sewa, an initiative of Namo Gange Trust, to
            explore meaningful collaborations that strengthen support for
            eligible individuals and families during the final journey.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a href="#partnership-enquiry" className="inline-flex h-[52px] min-w-[220px] items-center justify-between rounded-[6px] bg-[#004b39] px-5 text-[16px] font-bold uppercase text-white">
              Become a Partner
              <PartnershipIcon name="ArrowRight" className="h-5 w-5 text-[#d2a03c]" />
            </a>
            <a href="#partnership-network" className="inline-flex h-[52px] min-w-[220px] items-center justify-between rounded-[6px] border border-[#c99d5b] bg-[#fffaf2]/90 px-5 text-[16px] font-bold uppercase text-[#0a4b3b]">
              Explore Partnerships
              <PartnershipIcon name="ArrowRight" className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="relative z-20 mx-5 mb-4 grid overflow-hidden rounded-[10px] border border-[#ddd3c3] bg-[#f7f4ed]/95 sm:grid-cols-2 xl:grid-cols-4">
          {benefits.map(([icon, title, text], index) => (
            <div key={title} className={`flex min-h-[92px] items-center gap-4 px-5 py-4 ${index ? "xl:border-l xl:border-[#ded3c4]" : ""}`}>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#eef0e8] text-[#0a4b3b]">
                <PartnershipIcon name={icon} className="h-7 w-7" />
              </span>
              <div>
                <h3 className="text-[16px] font-bold text-[#0b4b3b]">{title}</h3>
                <p className="mt-1 text-[16px] leading-[1.35] text-[#535756]">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
