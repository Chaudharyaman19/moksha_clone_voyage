"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight, FaFileAlt, FaHeart, FaLock, FaPhoneAlt, FaShieldAlt, FaUsers } from "react-icons/fa";

const faqs = [
  ["Who can request Moksha Sewa support?", "Moksha Sewa provides support for legally authorised unclaimed bodies, people without family support and verified families facing financial hardship. All requests are subject to verification and eligibility."],
  ["Does Moksha Sewa assist with legally authorised unclaimed bodies?", "Yes. We coordinate support only after the required authority clearance, documentation and legal formalities have been completed."],
  ["What kind of assistance does Moksha Sewa provide?", "Depending on verified need and availability, support may include final-journey transport, ritual materials, priest coordination, cremation-ground support and family guidance."],
  ["Is Moksha Sewa available in my area?", "Moksha Sewa currently focuses on Delhi NCR and is expanding progressively. Contact our team with the case location to confirm availability."],
  ["How can I become a volunteer with Moksha Sewa?", "Submit the volunteer form through our website. Our team will review your details and contact you when a suitable verified opportunity is available."],
  ["How can I support Moksha Sewa through donations?", "You can support verified cases through the official donation page. Contributions are used responsibly for eligible mission activities and case-based assistance."],
];

const trustPoints = [
  ["Responsible Support", "Every case is handled with care, dignity and accountability.", FaShieldAlt],
  ["Verified & Transparent", "Support is provided after verification and required formalities.", FaFileAlt],
  ["Privacy First", "We respect the dignity and privacy of every individual.", FaLock],
  ["Humanity Always", "Compassion is at the heart of everything we do.", FaHeart],
] as const;

export default function AboutFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#fbfaf7] px-6 py-8 lg:px-8 lg:py-10 2xl:px-0">
      <div className="mx-auto w-full max-w-7xl">
        <header className="text-center">
          <div className="flex items-center justify-center gap-3 text-[12px] font-bold uppercase tracking-[0.16em] text-[#315448]"><span className="h-px w-12 bg-[#c69a4c]" /><span>Help &amp; Information</span><span className="h-px w-12 bg-[#c69a4c]" /></div>
          <h2 className="mt-2 font-serif text-[34px] font-semibold leading-none text-[#123e31] sm:text-[42px]">Frequently <span className="text-[#aa7330]">Asked Questions</span></h2>
          <p className="mt-2 text-[12px] leading-[1.45] text-[#4b5c55] sm:text-[13px]">Here are answers to some common questions about Moksha Sewa.<br />If you need more help, we are here for you.</p>
        </header>

        <div className="mt-5 grid gap-3 lg:grid-cols-[.88fr_1.12fr]">
          <div>
            <div className="relative h-[290px] overflow-hidden rounded-t-[32px]"><Image src="/hero-images/volunteer-elderly-woman.png" alt="Moksha Sewa volunteer supporting an elderly person" fill sizes="(max-width:1024px) 100vw,44vw" className="object-cover object-[72%_center]" /></div>
            <div className="flex min-h-[74px] items-center border border-[#e7ded0] bg-white px-4 shadow-[0_5px_14px_rgba(65,49,30,.09)]">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[#d4c3a5] text-[#17493a]"><FaUsers className="h-6 w-6" /></span>
              <div className="ml-4"><p className="text-[12px] font-semibold text-[#24483d]">Need more help?</p><p className="mt-1 max-w-[205px] text-[10px] leading-[1.35] text-[#56645e]">Our team is here to assist you with any questions or support you may need.</p></div>
              <Link href="/contact" className="ml-auto flex items-center gap-3 border-l border-[#ded1bb] pl-4 text-[#24483d]"><FaPhoneAlt className="h-4 w-4 text-[#a97931]" /><span className="text-[10px] font-bold uppercase leading-[1.2]">Request<br />Sewa Help</span><FaArrowRight className="h-3 w-3 text-[#b27b2e]" /></Link>
            </div>
          </div>

          <div className="space-y-2">
            {faqs.map(([question, answer], index) => {
              const open = openIndex === index;
              return <div key={question} className="border border-[#e8e1d7] bg-white shadow-[0_3px_10px_rgba(65,49,30,.06)]">
                <button type="button" onClick={() => setOpenIndex(open ? -1 : index)} className="flex min-h-[44px] w-full items-center gap-3 px-4 text-left"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#f0f2ed] text-[10px] font-semibold text-[#315448]">{String(index + 1).padStart(2, "0")}</span><span className="flex-1 text-[12px] font-semibold text-[#30493f] sm:text-[13px]">{question}</span><span className="text-lg font-light text-[#b57b2d]">{open ? "−" : "+"}</span></button>
                {open && <p className="px-14 pb-4 text-[11px] leading-[1.5] text-[#52625b] sm:text-[12px]">{answer}</p>}
              </div>;
            })}
          </div>
        </div>

        <div className="mt-5 grid border border-[#ebe6dc] bg-[#f4f4ef] px-4 py-3 sm:grid-cols-2 lg:grid-cols-[repeat(4,1fr)_auto]">
          {trustPoints.map(([title, text, Icon], index) => <div key={title} className={`flex items-center gap-3 px-4 py-2 ${index ? "border-t border-[#dcd6ca] sm:border-l sm:border-t-0" : ""}`}><Icon className="h-7 w-7 shrink-0 text-[#315548]" /><span><span className="block text-[10px] font-semibold text-[#315047]">{title}</span><span className="mt-0.5 block text-[8px] leading-[1.25] text-[#5a6862]">{text}</span></span></div>)}
          <Link href="/faq" className="flex items-center justify-center gap-3 border-t border-[#dcd6ca] px-5 py-3 text-[9px] font-bold uppercase text-[#a76f2b] sm:col-span-2 lg:col-span-1 lg:border-l lg:border-t-0"><span className="grid h-7 w-7 place-items-center rounded-full border border-[#bf8b3d]">→</span>View All FAQs<FaArrowRight className="h-3 w-3" /></Link>
        </div>
      </div>
    </section>
  );
}
