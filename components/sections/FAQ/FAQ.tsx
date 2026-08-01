"use client";

import { useState } from "react";
import { ChevronDown, PhoneCall, Heart } from "lucide-react";
import Image from "next/image";

const faqs = [
  {
    question: "Is the cremation service really free?",
    answer: "We offer both free and paid services depending on the family's financial situation. Our core mission is that no one should be denied a dignified farewell due to lack of funds."
  },
  {
    question: "Do you provide ambulance service?",
    answer: "Yes, we provide 24/7 ambulance services for transporting the deceased from hospital/home to the cremation ground."
  },
  {
    question: "What services do you deliver?",
    answer: "We deliver complete end-to-end funeral services including hearse van, samagri, pandit ji, prayer hall arrangements, and asthi visarjan."
  },
  {
    question: "Can you help with death certificate?",
    answer: "Yes, our team assists you with the necessary documentation and guides you through the process of obtaining the death certificate."
  },
  {
    question: "What documents are required?",
    answer: "Generally, you need the doctor's certificate/hospital discharge summary and the ID proof of the deceased and the family member."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const leftCol = faqs.slice(0, 3);
  const rightCol = faqs.slice(3);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FBF8F3] py-10 md:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#D97736]">FAQs</p>
          <h2 className="mt-2 font-serif text-3xl text-[#2C1810] sm:text-4xl">Frequently Asked Questions</h2>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2 lg:gap-12">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            {leftCol.map((faq, idx) => {
               const actualIndex = idx;
               const isOpen = openIndex === actualIndex;
               return (
                 <div key={idx} className="border-b border-[#E1D2BE] pb-4">
                   <button onClick={() => toggleFaq(actualIndex)} className="flex w-full items-center justify-between text-left">
                     <span className="font-serif text-[15px] sm:text-base text-[#2C1810]">{faq.question}</span>
                     <ChevronDown className={`h-4 w-4 text-[#8B6A3E] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                   </button>
                   {isOpen && (
                     <div className="mt-3 text-xs sm:text-sm text-[#6B584B] leading-relaxed">
                       {faq.answer}
                     </div>
                   )}
                 </div>
               )
            })}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            {rightCol.map((faq, idx) => {
               const actualIndex = idx + 3;
               const isOpen = openIndex === actualIndex;
               return (
                 <div key={idx} className="border-b border-[#E1D2BE] pb-4">
                   <button onClick={() => toggleFaq(actualIndex)} className="flex w-full items-center justify-between text-left">
                     <span className="font-serif text-[15px] sm:text-base text-[#2C1810]">{faq.question}</span>
                     <ChevronDown className={`h-4 w-4 text-[#8B6A3E] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                   </button>
                   {isOpen && (
                     <div className="mt-3 text-xs sm:text-sm text-[#6B584B] leading-relaxed">
                       {faq.answer}
                     </div>
                   )}
                 </div>
               )
            })}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 overflow-hidden rounded-xl bg-[#A54A24] text-white shadow-xl relative">
          <div className="absolute inset-0">
             <Image src="/assets/newbanner1.jpg" alt="Background" fill className="object-cover opacity-20 mix-blend-multiply" />
          </div>
          <div className="relative px-6 py-10 sm:px-12 sm:py-14 lg:flex lg:items-center lg:justify-between lg:px-16">
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="font-serif text-2xl sm:text-3xl leading-tight text-white">In Their Final Journey.<br />Let&apos;s Walk Together with Dignity.</h2>
              <p className="mt-3 text-sm text-white/90">Your support can bring peace to grieving families.</p>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-4 lg:mt-0 lg:shrink-0">
              <a href="tel:+911234567890" className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#A54A24] transition hover:bg-gray-100">
                Get Help Now <PhoneCall className="h-4 w-4" />
              </a>
              <a href="/donate" className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-md border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Donate Now <Heart className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
