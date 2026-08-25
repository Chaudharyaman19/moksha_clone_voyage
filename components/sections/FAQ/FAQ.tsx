"use client";

import Image from "next/image";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { itemOrFallback, textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 1,
    question: "Who can request Moksha Sewa support?",
    answer:
      "Moksha Sewa support can be requested by families, authorised representatives, institutions and individuals who need assistance with last rites and related services.",
    icon: "/assets/faq/request.png",
  },
  {
    id: 2,
    question:
      "Does Moksha Sewa assist with legally authorised unclaimed bodies?",
    answer:
      "Yes. Subject to applicable legal permissions and local procedures, Moksha Sewa can assist with legally authorised unclaimed body cases.",
    icon: "/assets/faq/legally.png",
  },
  {
    id: 3,
    question: "What cremation and last-rites assistance is available?",
    answer:
      "Moksha Sewa provides assistance and coordination for cremation, transportation, essential last-rites arrangements and other support based on the circumstances.",
    icon: "/assets/faq/cremation.png",
  },
  {
    id: 4,
    question: "Where is Moksha Sewa currently available?",
    answer:
      "Moksha Sewa services are currently available in selected locations. Please contact the team to confirm availability in your area.",
    icon: "/assets/faq/where_is_moksha.png",
  },
  {
    id: 5,
    question: "How can I become a volunteer?",
    answer:
      "You can express your interest in volunteering by contacting the Moksha Sewa team and sharing your basic details and preferred area of support.",
    icon: "/assets/faq/volunteer.png",
  },
  {
    id: 6,
    question: "How can I support Moksha Sewa through a donation?",
    answer:
      "You can support Moksha Sewa through an authorised donation channel. Contact the organisation for current donation details and available donation options.",
    icon: "/assets/faq/support.png",
  },
];

export default function FAQSection() {
  const websiteSection = useWebsiteSection("faq");
  const [openId, setOpenId] = useState<number | null>(null);
  const faqData = FAQ_DATA.map((fallback, index) => {
    const item = itemOrFallback(websiteSection?.items, index, {
      title: fallback.question,
      description: fallback.answer,
      image: fallback.icon,
    });
    return {
      ...fallback,
      question: textOrFallback(item.title, fallback.question, 120),
      answer: textOrFallback(item.description, fallback.answer, 260),
      icon: item.image || fallback.icon,
    };
  });

  const toggleFAQ = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#f8f1e3]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/faq/bg.png"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="h-full w-full object-cover object-top"
        />
      </div>

      {/* Soft overlay */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[#f8f1e3]/10" />

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-10 lg:py-6 xl:px-12">
        {/* Top header */}
        <div className="relative mx-auto max-w-[1050px] text-center">
          {/* Logos */}
          <div className="mb-3 flex items-center justify-center gap-4 lg:absolute lg:left-[-390px] lg:top-[-2px] lg:mb-0 lg:justify-start">
            <Image
              src="/assets/logo-moksha-seva.png"
              alt="Moksha Sewa"
              width={64}
              height={64}
              className="h-[40px] w-auto object-contain sm:h-[48px] md:h-[54px]"
            />
          </div>

          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <Image
              src="/assets/faq/left.png"
              alt=""
              aria-hidden="true"
              width={2819}
              height={209}
              className="h-auto w-[90px] object-contain sm:w-[120px] md:w-[100px]"
            />

            <span className="whitespace-nowrap font-sans text-[16px] font-semibold uppercase text-[#a67820]">
              {textOrFallback(websiteSection?.eyebrow, "Help & Information", 60)}
            </span>

            <Image
              src="/assets/faq/right.png"
              alt=""
              aria-hidden="true"
              width={1992}
              height={152}
              className="h-auto w-[90px] object-contain sm:w-[120px] md:w-[100px]"
            />
          </div>

          {/* Title */}
          <h2 className="mt-1 font-sans text-[24px] font-semibold leading-[1.05] text-[#352218] sm:text-[30px]">
            {textOrFallback(websiteSection?.title, "Frequently Asked Questions", 95)}
          </h2>

          {/* Decorative image */}
          <div className="mt-1 flex justify-center">
            <Image
              src="/assets/faq/title_decoration.png"
              alt=""
              aria-hidden="true"
              width={2928}
              height={269}
              className="h-auto w-[200px] max-w-full object-contain sm:w-[260px] md:w-[320px]"
            />
          </div>

          {/* Description */}
          <p className="mx-auto mt-1 max-w-[720px] px-3 text-[16px] leading-6 text-[#40464a]">
            {textOrFallback(
              websiteSection?.description,
              "Find quick answers to common questions about Moksha Sewa, our services and how you can get involved.",
              180
            )}
          </p>
        </div>

        {/* FAQ list */}
        <div className="mx-auto mt-4 w-full max-w-[1035px]">
          <div className="space-y-[5px]">
            {faqData.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`overflow-hidden rounded-[9px] border border-[#e7ddca] bg-[#fffdf9]/95 shadow-[0_2px_7px_rgba(71,55,25,0.10)] transition-all duration-300 ${isOpen ? "shadow-[0_5px_18px_rgba(71,55,25,0.14)]" : ""
                    }`}
                >
                  {/* Question button */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(faq.id)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center gap-3 px-3 py-1 text-left sm:px-4"
                  >
                    {/* Icon */}
                    <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-[1.04] sm:h-[44px] sm:w-[44px]">
                      <Image
                        src={faq.icon}
                        alt=""
                        aria-hidden="true"
                        width={44}
                        height={44}
                        className="h-full w-full object-contain"
                      />
                    </span>

                    {/* Vertical divider */}
                    <span className="hidden h-[30px] w-px shrink-0 bg-[#d9c8a5] sm:block" />

                    {/* Question */}
                    <span className="min-w-0 flex-1 pr-2 font-serif text-[16px] font-semibold leading-6 text-[#174b3e] lg:text-[17px]">
                      {faq.question}
                    </span>

                    {/* Plus / minus */}
                    <span
                      className={`flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-[#b78b2d] text-[#a8791c] transition-all duration-300 sm:h-[32px] sm:w-[32px] ${isOpen ? "rotate-180 bg-[#00503f] text-white" : ""
                        }`}
                    >
                      {isOpen ? (
                        <Minus size={17} strokeWidth={1.8} />
                      ) : (
                        <Plus size={17} strokeWidth={1.8} />
                      )}
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-[#eee5d5] px-5 pb-3 pt-2 pl-[58px] text-[16px] leading-6 text-[#5a615e] sm:pl-[72px]">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        {/* <div className="relative mx-auto mt-3 flex w-full items-center justify-center">
          <button
            type="button"
            className="group relative w-full max-w-[430px] overflow-hidden transition-all duration-300 hover:opacity-90 sm:max-w-[480px]"
          >
            <Image
              src="/assets/faq/view_all_faq.png"
              alt="View All FAQs"
              width={2156}
              height={222}
              className="h-auto w-full object-cover"
            />

            <span className="absolute inset-0 flex items-center justify-center gap-2.5 sm:gap-3">
              <svg
                viewBox="0 0 48 40"
                fill="none"
                className="h-[27px] w-[32px] shrink-0 text-[#d5a43e] sm:h-[29px] sm:w-[34px]"
              >
                <path
                  d="M20 3C10.6 3 3 8.9 3 16.2C3 21.4 6.7 25.8 12.1 27.9L10 36L17.5 29.7C18.3 29.8 19.1 29.9 20 29.9C29.4 29.9 37 24 37 16.7C37 9.4 29.4 3 20 3Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="M29 11C37.8 11 45 16.3 45 22.8C45 27.2 41.9 30.8 37.2 32.5L39 38L32.5 33.2C31.4 33.4 30.2 33.5 29 33.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="M17.5 13.5C18.3 11.7 20 10.7 22 10.7C24.7 10.7 26.8 12.4 26.8 14.8C26.8 17 25.4 18.1 23.8 19.2C22.5 20.1 21.4 20.9 21.4 22.7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="21.5" cy="26.5" r="1.2" fill="currentColor" />
              </svg>

              <span className="whitespace-nowrap text-[17px] font-semibold uppercase tracking-[0.07em] text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)] sm:text-[18px]">
                View All FAQs
              </span>

              <ArrowRight
                size={24}
                strokeWidth={1.8}
                className="shrink-0 text-[#d5a43e] transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </button>
        </div> */}
      </div>
    </section>
  );
}
