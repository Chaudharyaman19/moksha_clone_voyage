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
  ["Responsible Support", "Every case is handled with care, dignity and full accountability.", FaShieldAlt],
  ["Verified & Transparent", "Support follows verification, formalities and clear accountability.", FaFileAlt],
  ["Privacy First", "We protect every person’s dignity, details and private information.", FaLock],
  ["Humanity Always", "Compassion guides every action, decision and support we provide.", FaHeart],
] as const;

export default function AboutFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#fbfaf7] px-6 py-8 lg:px-8 lg:py-10 2xl:px-0">
      <div className="mx-auto w-full max-w-7xl">
        <header className="text-center">
          <div className="flex items-center justify-center gap-3 text-[16px] font-bold uppercase tracking-[0.16em] text-[#315448]"><span className="h-px w-12 bg-[#c69a4c]" /><span>Help &amp; Information</span><span className="h-px w-12 bg-[#c69a4c]" /></div>
          <h2 className="mt-2 font-serif text-[34px] font-semibold leading-none text-[#123e31] sm:text-[42px]">Frequently <span className="text-[#aa7330]">Asked Questions</span></h2>
          <p className="mt-2 text-[16px] leading-[1.45] text-[#4b5c55]">Here are answers to some common questions about Moksha Sewa.<br />If you need more help, we are here for you.</p>
        </header>

        <div className="mt-5 grid gap-3 lg:grid-cols-[.88fr_1.12fr]">
          <div className="flex h-full flex-col">
            <div className="relative min-h-[290px] flex-1 overflow-hidden rounded-tl-[72px]"><Image src="/assets/about-reference/faq-support-final.png" alt="Moksha Sewa volunteer supporting an elderly person" fill unoptimized priority sizes="(max-width:1024px) 100vw,44vw" className="object-cover object-center" /></div>
            <div className="grid min-h-[88px] grid-cols-[48px_1fr] items-center gap-x-3 border border-[#e7ded0] bg-white px-4 py-2 shadow-[0_5px_14px_rgba(65,49,30,.09)] sm:grid-cols-[48px_1fr_auto]">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-[#d4c3a5] bg-[#faf7f0] text-[#17493a]"><FaUsers className="h-6 w-6" /></span>
              <div className="flex h-full min-w-0 flex-col justify-center"><p className="text-[16px] font-semibold leading-[1.2] text-[#24483d]">Need more help?</p><p className="mt-1 max-w-[310px] text-[16px] leading-[1.25] text-[#56645e]">Our team is here to assist you with any questions or support you may need.</p></div>
              <Link href="/contact" className="col-span-2 mt-4 flex min-h-12 items-center justify-center gap-3 border-t border-[#ded1bb] pt-3 text-[#24483d] sm:col-span-1 sm:ml-4 sm:mt-0 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0"><FaPhoneAlt className="h-5 w-5 shrink-0 text-[#a97931]" /><span className="whitespace-nowrap text-[16px] font-bold uppercase leading-[1.2]">Request Sewa Help</span><FaArrowRight className="h-4 w-4 shrink-0 text-[#b27b2e]" /></Link>
            </div>
          </div>

          <div className="space-y-2">
            {faqs.map(([question, answer], index) => {
              const open = openIndex === index;
              return <div key={question} className="border border-[#e8e1d7] bg-white shadow-[0_3px_10px_rgba(65,49,30,.06)]">
                <button type="button" onClick={() => setOpenIndex(open ? -1 : index)} className="flex min-h-[50px] w-full items-center gap-3 px-4 text-left"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#f0f2ed] text-[16px] font-semibold text-[#315448]">{String(index + 1).padStart(2, "0")}</span><span className="flex-1 text-[16px] font-semibold text-[#30493f]">{question}</span><span className="text-lg font-light text-[#b57b2d]">{open ? "−" : "+"}</span></button>
                {open && <p className="px-14 pb-4 text-[16px] leading-[1.5] text-[#52625b]">{answer}</p>}
              </div>;
            })}
          </div>
        </div>

        <div className="mt-5 grid border border-[#ebe6dc] bg-[#f4f4ef] px-3 py-1 sm:grid-cols-2 lg:grid-cols-[repeat(4,1fr)_auto]">
          {trustPoints.map(([title, text, Icon], index) => <div key={title} className={`flex items-center gap-2.5 px-3 py-1 ${index ? "border-t border-[#dcd6ca] sm:border-l sm:border-t-0" : ""}`}><Icon className="h-6 w-6 shrink-0 text-[#315548]" /><span><span className="block text-[16px] font-semibold leading-[1.15] text-[#315047]">{title}</span><span className="mt-0.5 block text-[16px] leading-[1.15] text-[#5a6862]">{text}</span></span></div>)}
          <Link href="/faq" className="flex items-center justify-center gap-3 border-t border-[#dcd6ca] px-5 py-3 text-[16px] font-bold uppercase text-[#a76f2b] sm:col-span-2 lg:col-span-1 lg:border-l lg:border-t-0"><span className="grid h-8 w-8 place-items-center rounded-full border border-[#bf8b3d]">→</span>View All FAQs<FaArrowRight className="h-3 w-3" /></Link>
        </div>
      </div>
    </section>
  );
}
