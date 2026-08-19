"use client";

import { PartnershipIcon, type PartnershipIconName } from "./PartnershipIcons";

const faqs = [
  ["Who can partner with Moksha Sewa?", "We welcome partnerships from hospitals, institutions, NGOs, service providers, professional organisations and community networks that share our commitment to dignity and humanitarian service."],
  ["What types of partnerships are possible?", "Partnerships may include institutional coordination, service partnership, community collaboration, professional support, volunteer engagement and other mission-aligned collaborations."],
  ["Does submitting an enquiry make us an official partner?", "No. Submitting an enquiry does not create or imply any formal partnership. All partnerships are subject to review, mutual agreement and applicable requirements."],
  ["How are partnership roles and responsibilities defined?", "Where a partnership is explored further, roles, responsibilities, communication protocols and expectations are clearly defined and mutually agreed upon."],
] as const;

export default function PartnershipFAQ() {
  return (
    <section className="bg-[#fbf7ef] px-5 py-5">
      <div className="mx-auto grid max-w-[1344px] grid-cols-1 overflow-hidden rounded-[12px] border border-[#ded1bf] lg:grid-cols-[42%_58%]">
        <div className="bg-[#004132] px-7 py-6 text-white">
          <p className="text-[16px] font-bold uppercase tracking-[0.08em] text-[#d1a03b]">Together In Sewa</p>
          <h2 className="mt-3 text-[38px] font-medium leading-[1.05]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            Bring Your Strengths
            <br />
            to a Mission of Dignity.
          </h2>
          <p className="mt-3 text-[16px] leading-[1.45] text-[#e8e4db]">
            Explore how your organisation, services or network can contribute to responsible humanitarian Sewa.
          </p>

          <div className="mt-4 space-y-3">
            {([
              ["People", "Shared Purpose", "Work together for a common mission and responsible Sewa."],
              ["ShieldCheck", "Responsible Collaboration", "Defined roles, clear processes and mutual accountability."],
              ["Handshake", "Trust & Transparency", "Collaboration built on honesty, privacy and responsible communication."],
              ["HeartHands", "Human Dignity First", "Every partnership is guided by respect, dignity and compassion."],
            ] satisfies [PartnershipIconName, string, string][]).map(([icon, title, text]) => (
              <div key={title} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#8d8158] text-[#d2a03c]">
                  <PartnershipIcon name={icon} className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="text-[16px] font-bold text-[#f2eee5]">{title}</h3>
                  <p className="mt-1 text-[16px] leading-[1.4] text-[#d7d4cc]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#fffdf8] px-7 py-6">
          <p className="text-[16px] font-bold uppercase tracking-[0.08em] text-[#b47a22]">Partnership Questions</p>
          <h2 className="mt-2 text-[34px] font-medium text-[#064335]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>Frequently Asked Questions</h2>

          <div className="mt-4 space-y-2.5">
            {faqs.map(([q, a], index) => (
              <details key={q} open={index === 0} className="group rounded-[7px] border border-[#e1d7c8] bg-white px-4 py-3">
                <summary className="flex cursor-pointer list-none items-center gap-3 text-[16px] font-bold text-[#34403f]">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[#004b39] text-white text-[12px]">{String(index + 1).padStart(2, "0")}</span>
                  <span className="flex-1">{q}</span>
                  <span className="text-[#b48026]">+</span>
                </summary>
                <p className="pl-10 pt-3 text-[16px] leading-[1.45] text-[#555a59]">{a}</p>
              </details>
            ))}
          </div>

          {/* <a href="#" className="mx-auto mt-5 inline-flex h-[44px] min-w-[145px] items-center justify-between rounded-[5px] border border-[#cba469] px-4 text-[16px] font-bold uppercase text-[#0a4a3b]">
            View All FAQs
            <PartnershipIcon name="ArrowRight" className="h-5 w-5" />
          </a> */}
        </div>
      </div>
    </section>
  );
}
