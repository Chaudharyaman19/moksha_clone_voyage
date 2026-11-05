"use client";

import Image from "next/image";
import { useState } from "react";
import JsonLd from "@/components/seo/JsonLd";

interface FAQItem {
  id: number;
  lines: string[];
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: 1,
    lines: ["Who can request Moksha Sewa", "support?"],
    answer:
      "Moksha Sewa support can be requested by families, authorised representatives, institutions and individuals who need assistance with last rites and related services.",
  },
  {
    id: 2,
    lines: ["Does Moksha Sewa assist with", "legally authorised unclaimed bodies?"],
    answer:
      "Yes. Subject to applicable legal permissions and local procedures, Moksha Sewa can assist with legally authorised unclaimed body cases.",
  },
  {
    id: 3,
    lines: ["What cremation and last-rites", "assistance is available?"],
    answer:
      "Moksha Sewa provides assistance and coordination for cremation, transportation, essential last-rites arrangements and other support based on the circumstances.",
  },
  {
    id: 4,
    lines: ["Where is Moksha Sewa", "currently available?"],
    answer:
      "Moksha Sewa services are currently available in selected locations. Please contact the team to confirm availability in your area.",
  },
  {
    id: 5,
    lines: ["How can I become a", "volunteer?"],
    answer:
      "You can express your interest in volunteering by contacting the Moksha Sewa team and sharing your basic details and preferred area of support.",
  },
  {
    id: 6,
    lines: ["How can I support Moksha Sewa", "through a donation?"],
    answer:
      "You can support Moksha Sewa through an authorised donation channel. Contact the organisation for current donation details and available donation options.",
  },
  {
    id: 7,
    lines: ["Is Moksha Sewa", "completely free?"],
    answer:
      "Moksha Sewa provides last-rites assistance and coordination as a humanitarian service, free of charge for families and individuals in need.",
  },
  {
    id: 8,
    lines: ["How does Moksha Sewa", "verify a request?"],
    answer:
      "Our team reviews the details shared, speaks with the family or authorised representative, and confirms the required permissions and circumstances before arranging support.",
  },
  {
    id: 9,
    lines: ["Whom can I contact for", "more help?"],
    answer:
      "You can call our 24x7 helpline at 9220147229, write to info@mokshasewa.org, or send an enquiry through the Contact page.",
  },
  {
    id: 10,
    lines: ["What documents or information are", "needed to raise a request?"],
    answer:
      "Basic details such as the requester's name and contact number, the location and the circumstances are needed. Where applicable, relevant identity or authorisation documents may be requested.",
  },
];

const GOLD_LINE = "bg-gradient-to-r from-transparent via-[#E9A92E] to-[#E9A92E]";

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(180deg,#FCEEE1_0%,#FDF1E5_45%,#FBEAD6_100%)] font-sans pb-[calc(var(--u)*8)] pt-8 [--u:12px] sm:[--u:14px] lg:h-[calc(var(--u)*50)] lg:pt-0 lg:[--u:min(1vw,16px)]">
      <JsonLd
        id="schema-faq"
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_DATA.map((faq) => ({
            "@type": "Question",
            name: faq.lines.join(" "),
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }}
      />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[calc(var(--u)*7.2)] bg-[url('/assets/faq/faq-wave-bottom.png')] bg-[length:100%_100%]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute left-0 top-0 hidden h-[calc(var(--u)*42.8)] w-[calc(var(--u)*29.4)] lg:block">
        <Image src="/assets/faq/faq-photo.png" alt="Moksha Sewa volunteer with an elderly woman" fill sizes="30vw" className="object-fill" priority={false} />
      </div>
      <Image
        src="/assets/faq/faq-lotus-watermark.png"
        alt=""
        width={980}
        height={600}
        aria-hidden="true"
        className="pointer-events-none absolute left-[calc(var(--u)*83.4)] top-[calc(var(--u)*2.2)] hidden h-auto w-[calc(var(--u)*15.3)] opacity-70 lg:block"
      />

      <div className="relative z-10 px-4 sm:px-6 lg:px-0">
        {/* Header */}
        <div className="mx-auto text-center lg:ml-[calc(var(--u)*26)] lg:mr-0 lg:w-[calc(var(--u)*54.8)] lg:pt-[calc(var(--u)*2.06)]">
          <div className="flex items-center justify-center gap-[calc(var(--u)*0.9)] lg:-translate-x-[calc(var(--u)*0.6)]">
            <span className={`hidden h-[2px] w-[calc(var(--u)*4.25)] sm:block ${GOLD_LINE} rotate-180`} />
            <span className="inline-flex h-[calc(var(--u)*2.3)] min-h-[32px] items-center rounded-full border-[1.5px] border-[#DDAB62] bg-[#FFF7EC]/75 px-[calc(var(--u)*1.5)] font-sans text-[calc(var(--u)*1.05)] font-bold uppercase tracking-[0.03em] text-[#9C5306] lg:min-h-0 lg:w-[calc(var(--u)*15.5)] lg:justify-center lg:px-0">
              Help &amp; Information
            </span>
            <span className={`hidden h-[2px] w-[calc(var(--u)*4.25)] sm:block ${GOLD_LINE}`} />
          </div>

          <h2 className="mt-[calc(var(--u)*0.5)] font-sans text-[calc(var(--u)*2.2)] font-extrabold leading-[1.15] tracking-tight text-[#4A1208] lg:text-[calc(var(--u)*2.7)] lg:leading-[calc(var(--u)*3.1)]">
            Frequently Asked Questions
          </h2>

          <div className="flex items-center justify-center gap-[calc(var(--u)*0.8)]">
            <span className={`h-[2px] w-[calc(var(--u)*7)] ${GOLD_LINE} rotate-180`} />
            <Image src="/assets/faq/faq-lotus-divider.png" alt="" aria-hidden="true" width={256} height={176} className="h-auto w-[calc(var(--u)*4)]" />
            <span className={`h-[2px] w-[calc(var(--u)*6.7)] ${GOLD_LINE}`} />
          </div>

          <p className="mx-auto mt-[calc(var(--u)*0.2)] max-w-[640px] font-sans text-[calc(var(--u)*1.0)] leading-[calc(var(--u)*1.5)] text-[#263447] lg:max-w-none lg:whitespace-nowrap lg:translate-x-[calc(var(--u)*1.1)] lg:text-[calc(var(--u)*0.98)] lg:leading-[calc(var(--u)*1.45)]">
            Find quick answers to common questions about Moksha Sewa, our services and how you can get involved.
          </p>
        </div>

        <div className="relative mx-auto mt-6 aspect-[470/685] w-full max-w-[260px] overflow-hidden rounded-3xl lg:hidden">
          <Image src="/assets/faq/faq-photo.png" alt="Moksha Sewa volunteer with an elderly woman" fill sizes="260px" className="object-cover" />
        </div>

        {/* FAQ grid */}
        <div className="mx-auto mt-[calc(var(--u)*2.06)] grid max-w-[640px] grid-cols-1 items-start gap-[calc(var(--u)*0.62)] lg:ml-[calc(var(--u)*29.6)] lg:mr-0 lg:max-w-none lg:w-[calc(var(--u)*68.4)] lg:grid-cols-[31.75fr_34.4fr] lg:gap-x-[calc(var(--u)*2.2)]">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="overflow-hidden rounded-[calc(var(--u)*1.15)] border border-[#FFF3E5] bg-gradient-to-br from-[#FEF8F1] to-[#FDF2E6] shadow-[0_5px_12px_rgba(150,100,40,0.14),0_1px_2px_rgba(150,100,40,0.10)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenId((prev) => (prev === faq.id ? null : faq.id))}
                  aria-expanded={isOpen}
                  className="relative flex min-h-[calc(var(--u)*4.7)] w-full items-center py-0 pl-[calc(var(--u)*3.9)] pr-[calc(var(--u)*1.4)] text-left"
                >
                  <span className="absolute left-[calc(var(--u)*2.3)] top-1/2 h-[calc(var(--u)*2.9)] w-[3px] -translate-y-1/2 rounded-full bg-[#EEA725]" />
                  <span className="min-w-0 flex-1 pr-3 font-sans text-[calc(var(--u)*1.05)] font-semibold leading-[calc(var(--u)*1.45)] text-[#1B1410] lg:text-[calc(var(--u)*1.05)]">
                    {faq.lines[0]}
                    <br className="hidden lg:block" />{" "}
                    {faq.lines[1]}
                  </span>
                  <span className="flex h-[calc(var(--u)*2.25)] min-h-[30px] w-[calc(var(--u)*2.25)] min-w-[30px] shrink-0 items-center justify-center rounded-full border-[1.6px] border-[#DDA032] text-[#C9780A]">
                    <svg viewBox="0 0 20 20" className="h-[55%] w-[55%]" aria-hidden="true">
                      <path d={isOpen ? "M4 10 H16" : "M10 4 V16 M4 10 H16"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                    </svg>
                  </span>
                </button>

                <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="border-t border-[#F0DFC9] pb-3 pl-[calc(var(--u)*3.9)] pr-[calc(var(--u)*3)] pt-2 font-sans text-[calc(var(--u)*0.88)] leading-[calc(var(--u)*1.4)] text-[#5A4A3A]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
