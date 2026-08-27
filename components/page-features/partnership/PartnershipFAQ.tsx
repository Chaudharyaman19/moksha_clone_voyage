"use client";

import { PartnershipIcon, type PartnershipIconName } from "./PartnershipIcons";
import { itemOrFallback, textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";

const defaultFaqs = [
  { q: "Who can partner with Moksha Sewa?", a: "We welcome partnerships from hospitals, institutions, NGOs, service providers, professional organisations and community networks that share our commitment to dignity and humanitarian service." },
  { q: "What types of partnerships are possible?", a: "Partnerships may include institutional coordination, service partnership, community collaboration, professional support, volunteer engagement and other mission-aligned collaborations." },
  { q: "Does submitting an enquiry make us an official partner?", a: "No. Submitting an enquiry does not create or imply any formal partnership. All partnerships are subject to review, mutual agreement and applicable requirements." },
  { q: "How are partnership roles and responsibilities defined?", a: "Where a partnership is explored further, roles, responsibilities, communication protocols and expectations are clearly defined and mutually agreed upon." },
];

const defaultLeftItems = [
  { icon: "People" as const, title: "Shared Purpose", text: "Work together for a common mission and responsible Sewa." },
  { icon: "ShieldCheck" as const, title: "Responsible Collaboration", text: "Defined roles, clear processes and mutual accountability." },
  { icon: "Handshake" as const, title: "Trust & Transparency", text: "Collaboration built on honesty, privacy and responsible communication." },
  { icon: "HeartHands" as const, title: "Human Dignity First", text: "Every partnership is guided by respect, dignity and compassion." },
];

export default function PartnershipFAQ() {
  const section = useWebsiteSection("partnership-faq");
  const leftEyebrow = textOrFallback(section?.eyebrow, "Together In Sewa", 40);
  const leftTitle = textOrFallback(section?.title, "Bring Your Strengths\nto a Mission of Dignity.", 100);
  const leftDescription = textOrFallback(section?.description, "Explore how your organisation, services or network can contribute to responsible humanitarian Sewa.", 200);
  const rightEyebrow = textOrFallback(section?.subtitle, "Partnership Questions", 50);
  const rightTitle = textOrFallback(section?.secondaryTitle, "Frequently Asked Questions", 60);

  return (
    <section className="bg-[#fbf7ef] px-5 py-5">
      <div className="mx-auto grid max-w-[1344px] grid-cols-1 overflow-hidden rounded-[12px] border border-[#ded1bf] lg:grid-cols-[46%_54%]">
        <div className="bg-[#004132] px-7 py-6 text-white">
          <p className="text-[16px] font-bold uppercase tracking-[0.08em] text-[#d1a03b]">{leftEyebrow}</p>
          <h2 className="mt-3 text-[38px] font-medium leading-[1.05]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            {leftTitle.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </h2>
          <p className="mt-3 text-[16px] leading-[1.45] text-[#e8e4db]">
            {leftDescription}
          </p>

          <div className="mt-4 space-y-3">
            {defaultLeftItems.map((defaultItem, index) => {
              const item = itemOrFallback(section?.items, index, { title: defaultItem.title, description: defaultItem.text, value: defaultItem.icon });
              const itemTitle = item.title || defaultItem.title;
              const itemText = item.description || defaultItem.text;
              const itemIcon = (item.value || defaultItem.icon) as PartnershipIconName;
              return (
              <div key={defaultItem.title} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#8d8158] text-[#d2a03c]">
                  <PartnershipIcon name={itemIcon} className="h-7 w-7" />
                </span>
                <div>
                  <h3 className="text-[16px] font-bold text-[#f2eee5]">{itemTitle}</h3>
                  <p className="mt-1 text-[16px] leading-[1.4] text-[#d7d4cc]">{itemText}</p>
                </div>
              </div>
            )})}
          </div>
        </div>

        <div className="bg-[#fffdf8] px-7 py-6">
          <p className="text-[16px] font-bold uppercase tracking-[0.08em] text-[#b47a22]">{rightEyebrow}</p>
          <h2 className="mt-2 text-[34px] font-medium text-[#064335]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>{rightTitle}</h2>

          <div className="mt-4 space-y-2.5">
            {defaultFaqs.map((defaultFaq, index) => {
              const faqItem = itemOrFallback(section?.items, index + defaultLeftItems.length, { title: defaultFaq.q, description: defaultFaq.a });
              const q = faqItem.title || defaultFaq.q;
              const a = faqItem.description || defaultFaq.a;
              return (
              <details key={defaultFaq.q} open={index === 0} className="group rounded-[7px] border border-[#e1d7c8] bg-white px-4 py-3">
                <summary className="flex cursor-pointer list-none items-center gap-3 text-[16px] font-bold text-[#34403f]">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-[#004b39] text-white text-[12px]">{String(index + 1).padStart(2, "0")}</span>
                  <span className="flex-1">{q}</span>
                  <span className="text-[#b48026]">+</span>
                </summary>
                <p className="pl-10 pt-3 text-[16px] leading-[1.45] text-[#555a59]">{a}</p>
              </details>
            )})}
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
