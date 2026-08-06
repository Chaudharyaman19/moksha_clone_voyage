"use client";

import Image from "next/image";
import { useState } from "react";
import {
  FaChevronDown,
  FaHeart,
  FaPhoneAlt,
} from "react-icons/fa";

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
            question: "Is assistance free for families in need?",
            answer:
              "For eligible poor, orphaned, unclaimed or helpless cases, Moksha Sewa makes every possible effort to arrange essential support. Our team first verifies the case details and then confirms what assistance can be provided.",
          },
          {
            question: "What services can your team arrange?",
            answer:
              "Depending on the need, we may help coordinate an ambulance, hearse van, cremation wood, shroud, flowers, ritual materials, a pandit, cremation-ground support, documentation guidance and food service.",
          },
          {
            question: "Can you help in an unclaimed body case?",
            answer:
              "Yes. In unclaimed or helpless cases, our team provides guidance according to local regulations, police or hospital procedures and available support. All required official formalities must be completed first.",
          },
          {
            question: "Can you arrange an ambulance or hearse van?",
            answer:
              "Yes. Ambulance and hearse-van coordination is provided based on the location, required time and vehicle availability.",
          },
          {
            question: "Can you arrange a pandit and final rituals?",
            answer:
              "Yes. We help families in need arrange a pandit, ritual materials and guidance for the final rites, depending on the case and local availability.",
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
    <section className="relative w-full overflow-hidden bg-[#FBF8F2] px-3 py-3 sm:px-4 sm:py-4 lg:px-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(196,138,67,0.07),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(139,82,26,0.05),transparent_34%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-0">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-2 inline-flex items-center space-x-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#8B6A3E] to-transparent" />

            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#8B6A3E]">
              FAQs
            </span>

            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#8B6A3E] to-transparent" />
          </div>

          <h2 className="font-serif text-[24px] font-normal leading-tight text-[#2F2118] sm:text-[28px] lg:text-[30px]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Two-column accordion */}
        <div className="mt-2 grid gap-x-10 lg:grid-cols-2">
          {columns.map((column, columnIndex) => {
            const offset = columnIndex === 0 ? 0 : 3;

            return (
              <div
                key={columnIndex}
                className="divide-y divide-[#E8DED2] border-y border-[#E8DED2] lg:border-t"
              >
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
                        <span className="text-[14px] font-medium leading-5 text-[#3C2A20] sm:text-[14px]">
                          {item.question}
                        </span>

                        <FaChevronDown
                          className={`h-4 w-4 shrink-0 text-[#5A4638] transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
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
                          <p className="px-3 pb-4 text-[13px] font-normal leading-5 text-[#6C5749] sm:px-4 sm:text-[13px]">
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
        <div className="relative mt-3 min-h-[360px] w-full overflow-hidden rounded-[18px] border border-[#DDBE9A]/45 bg-[#B84A0B] shadow-[0_10px_32px_rgba(93,48,17,0.13)] sm:min-h-[300px] lg:min-h-[240px]">
          <Image
            src="/assets/faq/faq-support-banner-v3.png"
            alt="Moksha Sewa compassionate support for unclaimed and vulnerable cases"
            fill
            priority
            unoptimized
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(103,45,12,0.80)_0%,rgba(103,45,12,0.70)_58%,rgba(0,0,0,0.20)_100%)] sm:bg-[linear-gradient(90deg,rgba(0,0,0,0.18)_0%,rgba(103,45,12,0.68)_36%,rgba(103,45,12,0.72)_64%,rgba(0,0,0,0.18)_100%)]" />

          <div className="relative z-10 flex min-h-[360px] items-center justify-center px-5 py-8 sm:min-h-[300px] sm:px-8 lg:min-h-[240px] lg:px-10">
            <div className="w-full text-center text-white sm:w-[72%] lg:w-[48%]">
              <h3 className="font-serif text-[22px] font-normal leading-tight sm:text-[28px] lg:text-[30px]">
                For Unclaimed and Needy Cases,
                <span className="block">
                  A Respectful Final Farewell.
                </span>
              </h3>

              <p className="mx-auto mt-2 max-w-2xl text-[13px] font-normal leading-5 text-white/86 sm:text-[13px]">
                One call can help you receive guidance for an ambulance,
                cremation wood, ritual materials, a pandit and
                cremation-ground support.
              </p>

              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href="tel:+919810247319"
                  className="inline-flex min-h-11 w-full items-center justify-center gap-3 rounded-md bg-white px-5 py-3 text-[13px] font-medium text-[#A8430C] shadow-sm transition hover:bg-[#FFF8EF] sm:w-auto sm:min-w-[174px]"
                >
                  Get Sewa Help
                  <FaPhoneAlt className="h-4 w-4" />
                </a>

                <a
                  href="/donation"
                  className="inline-flex min-h-11 w-full items-center justify-center gap-3 rounded-md border border-white/80 bg-white/5 px-5 py-3 text-[13px] font-medium text-white backdrop-blur-[2px] transition hover:bg-white/12 sm:w-auto sm:min-w-[174px]"
                >
                  Donate for Sewa
                  <FaHeart className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
