"use client";
import Image from "next/image";
import { useState } from "react";
import {
  ChevronDown,
  Heart,
  Phone,
} from "lucide-react";

interface FAQSectionProps {
  variant?: "voyage" | "seva";
}

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQSection({
  variant = "seva",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] =
    variant === "seva"
      ? [
          {
            question: "Is the cremation service really free?",
            answer:
              "Selected support services may be offered without charge for eligible families. Our coordinator confirms availability and inclusions before arrangements begin.",
          },
          {
            question: "What areas do you serve?",
            answer:
              "Moksha Sewa currently coordinates support across Delhi NCR and selected service cities through verified local teams and partners.",
          },
          {
            question: "What documents are required?",
            answer:
              "Requirements vary by location. Usually, identity proof, hospital papers and the required local documentation are needed. Our team guides the family step by step.",
          },
          {
            question: "Do you provide ambulance service?",
            answer:
              "Yes. Ambulance and hearse-van coordination is available based on location, timing and vehicle availability.",
          },
          {
            question: "Can you help with death certificate?",
            answer:
              "Our team can explain the process, required papers and relevant local authority steps. Official issuance remains subject to government procedures.",
          },
        ]
      : [
          {
            question: "How quickly can your team respond?",
            answer:
              "Our care coordinators are available around the clock and begin verified local coordination as soon as the essential details are confirmed.",
          },
          {
            question: "Which cities and destinations do you cover?",
            answer:
              "Coverage depends on the requested ritual, local partner availability and destination. Our team confirms the exact service area before booking.",
          },
          {
            question: "Which documents are usually needed?",
            answer:
              "Documentation varies by service and location. A coordinator provides a clear checklist after understanding your family’s requirement.",
          },
          {
            question: "Do you arrange transportation?",
            answer:
              "Yes. Local transport, ambulance, hearse van and other required logistics can be coordinated depending on availability.",
          },
          {
            question: "Can you guide our family remotely?",
            answer:
              "Yes. Families living outside the city or abroad can receive regular coordination updates and local representative support.",
          },
        ];

  const columns = [faqItems.slice(0, 3), faqItems.slice(3)];

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#FBF8F2] py-4 sm:py-5 lg:py-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(196,138,67,0.07),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(139,82,26,0.05),transparent_34%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-0">
        {/* Heading */}
        <div className="text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#B66C1B] sm:text-[11px]">
            FAQs
          </p>

          <h2 className="mt-1 font-serif text-[28px] font-normal leading-tight text-[#2F2118] sm:text-[32px] lg:text-[38px]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Two-column accordion */}
        <div className="mt-3 grid gap-x-10 lg:grid-cols-2">
          {columns.map((column, columnIndex) => {
            const offset = columnIndex === 0 ? 0 : 3;

            return (
              <div key={columnIndex} className="divide-y divide-[#E8DED2] border-y border-[#E8DED2] lg:border-t">
                {column.map((item, itemIndex) => {
                  const realIndex = offset + itemIndex;
                  const isOpen = openIndex === realIndex;

                  return (
                    <div key={item.question} className="bg-white/25">
                      <button
                        type="button"
                        onClick={() => toggleItem(realIndex)}
                        className="flex min-h-[52px] w-full items-center justify-between gap-5 px-3 py-3 text-left sm:min-h-[56px] sm:px-4"
                        aria-expanded={isOpen}
                      >
                        <span className="text-[13px] font-medium leading-5 text-[#3C2A20] sm:text-[14px]">
                          {item.question}
                        </span>

                        <ChevronDown
                          className={`h-4 w-4 shrink-0 text-[#5A4638] transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          strokeWidth={1.8}
                        />
                      </button>

                      <div
                        className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="px-3 pb-4 text-[12px] font-normal leading-5 text-[#6C5749] sm:px-4 sm:text-[13px]">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        {/* Support banner */}
        <div className="relative mt-4 w-full overflow-hidden rounded-[18px] border border-[#DDBE9A]/45 bg-[#B84A0B] shadow-[0_10px_32px_rgba(93,48,17,0.13)] h-[220px] sm:h-[240px] lg:h-[260px]">
          <Image
            src="/assets/faq/faq-support-banner.webp"
            alt="Moksha Sewa compassionate family support"
            fill
            priority
            unoptimized
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-[#9C3704]/5 to-black/5" />

          <div className="absolute inset-0 z-10 flex items-center px-5 sm:px-8 lg:px-10">
            <div className="ml-auto w-full text-white sm:w-[68%] lg:w-[66%]">
              <h3 className="font-serif text-[25px] font-normal leading-[1.25] sm:text-[31px] lg:text-[25px]">
                In Their Final Journey,
                <span className="block">
                  Let&apos;s Walk Together with Dignity.
                </span>
              </h3>

              <p className="mt-2 max-w-2xl text-[13px] font-normal leading-5 text-white/86 sm:text-[15px]">
                Your support can bring peace to grieving families.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="tel:+919810247319"
                  className="inline-flex h-11 min-w-[174px] items-center justify-center gap-3 rounded-md bg-white px-5 text-[13px] font-medium text-[#A8430C] shadow-sm transition hover:bg-[#FFF8EF]"
                >
                  Get Help Now
                  <Phone className="h-4 w-4" strokeWidth={1.8} />
                </a>

                <a
                  href="/donate"
                  className="inline-flex h-11 min-w-[174px] items-center justify-center gap-3 rounded-md border border-white/80 bg-white/5 px-5 text-[13px] font-medium text-white backdrop-blur-[2px] transition hover:bg-white/12"
                >
                  Donate Now
                  <Heart className="h-4 w-4" strokeWidth={1.8} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}