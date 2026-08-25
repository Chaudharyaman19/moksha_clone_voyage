"use client";

import Image from "next/image";
import type { ReactElement } from "react";
import { textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";

interface IconProps {
  name: string;
  className?: string;
}

const CustomIcon = ({
  name,
  className = "h-6 w-6",
}: IconProps) => {
  const icons: Record<string, ReactElement> = {
    Lotus: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M32 43c-10-7-15-15-12-25 6 2 10 6 12 12 2-6 6-10 12-12 3 10-2 18-12 25Z" />
        <path d="M22 40c-8-2-13-7-14-15 7 0 13 3 17 8" />
        <path d="M42 40c8-2 13-7 14-15-7 0-13 3-17 8" />
        <path d="M16 46c5 2 10 3 16 3s11-1 16-3" />
        <path d="M24 49h16" />
      </svg>
    ),

    People: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="32" cy="17" r="6" />
        <circle cx="17" cy="24" r="5" />
        <circle cx="47" cy="24" r="5" />
        <path d="M22 49c1-10 4-15 10-15s9 5 10 15" />
        <path d="M7 49c1-8 4-12 10-12 3 0 5 1 7 3" />
        <path d="M57 49c-1-8-4-12-10-12-3 0-5 1-7 3" />
      </svg>
    ),

    Shield: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M32 7 50 14v14c0 13-7 21-18 27-11-6-18-14-18-27V14L32 7Z" />
        <path d="m23 31 6 6 12-13" />
      </svg>
    ),

    Report: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 7h24l9 9v41H16Z" />
        <path d="M40 7v10h9" />
        <path d="M24 45V34" />
        <path d="M32 45V27" />
        <path d="M40 45V21" />
        <path d="M21 48h24" />
      </svg>
    ),

    Policy: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 6h25l9 9v21" />
        <path d="M39 6v10h9" />
        <path d="M14 6v52h25" />
        <path d="M21 24h16" />
        <path d="M21 32h13" />
        <path d="M21 40h10" />
        <path d="M47 34 57 38v8c0 7-4 11-10 15-6-4-10-8-10-15v-8l10-4Z" />
        <path d="m43 46 3 3 6-7" />
      </svg>
    ),

    Handshake: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m8 29 13-11 9 6" />
        <path d="m56 29-13-11-9 6" />
        <path d="m22 31 8 7c2 2 5 2 7 0l6-6" />
        <path d="m17 35 13 12c2 2 5 2 7 0l10-10" />
        <path d="M8 28 17 39" />
        <path d="M56 28 47 39" />
      </svg>
    ),

    HeartHand: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M25 17c0-4 4-6 7-2 3-4 7-2 7 2 0 4-4 7-7 10-3-3-7-6-7-10Z" />
        <path d="M7 42c8-2 12 0 17 6l7 7" />
        <path d="M57 42c-8-2-12 0-17 6l-7 7" />
        <path d="M7 41v15" />
        <path d="M57 41v15" />
      </svg>
    ),

    Scale: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M32 8v44" />
        <path d="M18 15h28" />
        <path d="m17 15-9 18h18Z" />
        <path d="m47 15-9 18h18Z" />
        <path d="M22 55h20" />
      </svg>
    ),

    Eye: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 32s10-15 27-15 27 15 27 15-10 15-27 15S5 32 5 32Z" />
        <circle cx="32" cy="32" r="8" />
      </svg>
    ),

    Accountability: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="32" cy="17" r="5" />
        <circle cx="18" cy="23" r="4.5" />
        <circle cx="46" cy="23" r="4.5" />
        <path d="M24 49c1-9 3-14 8-14s7 5 8 14" />
        <path d="M8 49c1-8 4-12 10-12 3 0 5 1 7 3" />
        <path d="M56 49c-1-8-4-12-10-12-3 0-5 1-7 3" />
      </svg>
    ),

    DocumentShield: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 6h25l9 9v20" />
        <path d="M38 6v10h9" />
        <path d="M13 6v52h24" />
        <path d="M20 25h16" />
        <path d="M20 33h13" />
        <path d="M46 37 57 41v8c0 7-4 11-11 15-7-4-11-8-11-15v-8l11-4Z" />
        <path d="m42 49 3 3 6-7" />
      </svg>
    ),

    ArrowRight: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h13" />
        <path d="m14 8 4 4-4 4" />
      </svg>
    ),
  };

  return icons[name] ?? null;
};

const trustCards = [
  {
    icon: "People",
    title: "About\nNamo Gange Trust",
    description:
      "Learn about our vision, mission, values, community purpose, commitment while staying connected.",
  },
  {
    icon: "Shield",
    title: "Governance &\nPolicies",
    description:
      "Understand our governance, policies, ethical standards, accountability, and processes clearly.",
  },
  {
    icon: "Report",
    title: "Impact /\nReports",
    description:
      "Explore our impact, reports, case highlights, progress, outcomes and shared responsibility clearly.",
  },
  {
    icon: "Policy",
    title: "Donation &\nRefund Policy",
    description:
      "Read about donations, fund use, refunds, policies, transparency and responsible management clearly.",
  },
];

const values = [
  {
    icon: "HeartHand",
    title: "SEWA",
    description: "Service with\ncompassion",
  },
  {
    icon: "Scale",
    title: "INTEGRITY",
    description: "Ethical actions,\nhonest intent",
  },
  {
    icon: "Eye",
    title: "TRANSPARENCY",
    description: "Open processes,\nclear communication",
  },
  {
    icon: "Accountability",
    title: "ACCOUNTABILITY",
    description: "Answerable to all,\nalways improving",
  },
];

export default function TrustTransparency() {
  const websiteSection = useWebsiteSection("trust-transparency");
  const managedTrustCards = [
    ...trustCards.map((fallback, index) => {
    const item = websiteSection?.items?.[index];
    return {
      ...fallback,
      title: textOrFallback(item?.title, fallback.title, 70),
      description: textOrFallback(item?.description, fallback.description, 160),
    };
    }),
    ...(websiteSection?.items?.slice(trustCards.length + values.length) ?? []).map((item) => ({
      ...trustCards[trustCards.length - 1],
      title: item.title || "New Trust Item",
      description: item.description || "Additional trust information.",
    })),
  ];
  const managedValues = values.map((fallback, index) => {
    const item = websiteSection?.items?.[index + trustCards.length];
    return {
      ...fallback,
      title: textOrFallback(item?.title, fallback.title, 50),
      description: textOrFallback(item?.description, fallback.description, 90),
    };
  });

  return (
    <section className="relative w-full overflow-hidden bg-[#FAF5EE] px-4 pb-0 pt-[18px] max-md:px-3 max-md:pt-[16px]">
      {/* BACKGROUND TEXTURE */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(163,116,61,0.06) 0 1px, transparent 1.2px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* LEFT LEAF */}
      <svg
        viewBox="0 0 180 250"
        className="pointer-events-none absolute -left-[46px] top-[0px] h-[220px] w-[155px] text-[#B6AA79]/30"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M26 220C40 166 71 107 151 25" />
        <path d="M37 174c-24-8-35-27-31-48 23 5 40 20 41 41" />
        <path d="M61 135c-20-12-25-32-17-49 22 8 34 24 31 43" />
        <path d="M91 95c-15-17-13-36-1-50 18 13 23 29 16 46" />
        <path d="M124 58c-10-18-2-34 14-43 13 15 12 29-1 42" />
      </svg>

      {/* RIGHT LEAF */}
      <svg
        viewBox="0 0 180 250"
        className="pointer-events-none absolute -bottom-[52px] -right-[36px] h-[205px] w-[155px] rotate-180 text-[#B6AA79]/30"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M26 220C40 166 71 107 151 25" />
        <path d="M37 174c-24-8-35-27-31-48 23 5 40 20 41 41" />
        <path d="M61 135c-20-12-25-32-17-49 22 8 34 24 31 43" />
        <path d="M91 95c-15-17-13-36-1-50 18 13 23 29 16 46" />
      </svg>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* TOP AREA */}
        <div className="grid grid-cols-1 gap-[24px] xl:grid-cols-[41.5fr_58.5fr] xl:gap-[28px]">
          {/* LEFT COLUMN */}
          <div className="flex flex-col">
            {/* LABEL */}
            <div className="flex items-center justify-center gap-[10px] max-md:gap-[7px]">
              <span className="relative h-px w-[36px] bg-[#B87C18] max-md:w-[22px]">
                <span className="absolute -right-[2px] -top-[2px] h-[5px] w-[5px] rounded-full bg-[#B87C18]" />
              </span>

              <span className="text-[16px] font-bold uppercase tracking-[0.045em] text-[#A66E16] max-md:text-[12px] max-md:tracking-[0.035em] max-md:text-center">
                Sewa With Responsibility
              </span>

              <span className="relative h-px w-[36px] bg-[#B87C18] max-md:w-[22px]">
                <span className="absolute -left-[2px] -top-[2px] h-[5px] w-[5px] rounded-full bg-[#B87C18]" />
              </span>
            </div>

            {/* MAIN TITLE */}
            <h2 className="mx-auto mt-[7px] max-w-[440px] text-center font-serif text-[52px] font-semibold leading-[0.96] tracking-[-0.025em] text-[#064631] max-md:text-[38px] max-md:leading-[1]">
              Trust &amp;
              <br />
              Transparency
            </h2>

            {/* TITLE DIVIDER */}
            <div className="mt-[12px] flex items-center justify-center gap-[8px] max-md:mt-[10px]">
              <span className="h-px w-[92px] bg-gradient-to-r from-transparent to-[#C99234] max-md:w-[64px]" />

              <CustomIcon
                name="Lotus"
                className="h-[27px] w-[27px] text-[#BE7D13] max-md:h-[23px] max-md:w-[23px]"
              />

              <span className="h-px w-[92px] bg-gradient-to-l from-transparent to-[#C99234] max-md:w-[64px]" />
            </div>

            {/* DESCRIPTION */}
            <p className="mx-auto mt-[7px] max-w-[390px] text-center text-[17px] font-medium leading-[1.35] text-[#48433D] max-md:px-2 max-md:text-[15px] max-md:leading-[1.45]">
              Our commitment to transparency,
              <br className="max-md:hidden" />
              integrity and responsible service.
            </p>

            {/* GREEN BRAND CARD */}
            <div className="relative mt-[14px] h-[212px] overflow-hidden rounded-tl-[48px] rounded-tr-[24px] bg-[#02311E] text-white shadow-[0_7px_18px_rgba(0,59,40,0.16)] max-md:h-auto max-md:rounded-[24px]">
              <CustomIcon
                name="Lotus"
                className="pointer-events-none absolute -bottom-[34px] -left-[24px] h-[150px] w-[150px] text-white/[0.025]"
              />

              <div className="relative z-10 grid h-full grid-cols-[46%_1px_54%] items-center max-md:grid-cols-1">
                {/* MOKSHA */}
                <div className="flex h-full flex-col items-center justify-center px-[10px] text-center max-md:px-[16px] max-md:pb-[18px] max-md:pt-[20px]">
                  <div className="relative h-[90px] w-[180px] max-md:h-[76px] max-md:w-[155px]">
                    <Image
                      src="/assets/footer-moksha-mark.png"
                      alt="Moksha Sewa"
                      fill
                      sizes="180px"
                      className="object-contain"
                    />
                  </div>

                  <h3 className="mt-[3px] font-serif text-[25px] font-semibold uppercase leading-none text-white max-md:text-[22px]">
                    Moksha Sewa
                  </h3>

                  <p className="mt-[7px] text-[15px] font-semibold leading-[1.15] text-[#DFA929] max-md:text-[13px] max-md:leading-[1.2]">
                    A Namo Gange Trust Initiative
                  </p>

                  <div className="mt-[9px] flex items-center gap-[6px]">
                    <span className="h-px w-[38px] bg-[#DCA72A]" />
                    <span className="h-[5px] w-[5px] rounded-full bg-[#DCA72A]" />
                    <span className="h-px w-[38px] bg-[#DCA72A]" />
                  </div>
                </div>

                {/* VERTICAL LINE */}
                <span className="h-[168px] w-px bg-[#D69A20]/55 max-md:mx-auto max-md:h-px max-md:w-[76%]" />

                {/* NAMO GANGE */}
                <div className="flex h-full flex-col justify-center px-[18px] max-md:px-[16px] max-md:pb-[22px] max-md:pt-[18px]">
                  <p className="text-center text-[11px] font-bold uppercase tracking-[0.02em] text-[#E5AE24] max-md:text-[10px]">
                    An Initiative Of
                  </p>

                  <div className="relative mx-auto mt-[1px] h-[73px] w-full max-w-[235px] max-md:h-[68px] max-md:max-w-[220px]">
                    <Image
                      src="/hero-images/namo-gange-logo.webp"
                      alt="Namo Gange"
                      fill
                      sizes="235px"
                      className="object-contain"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute bottom-0 left-1/2 z-10 h-[17px] w-[215px] -translate-x-1/2 bg-[#02311E] max-md:w-[200px]"
                    />

                    <p className="absolute bottom-[1px] left-1/2 z-20 w-full -translate-x-1/2 whitespace-nowrap text-center text-[10px] font-semibold uppercase tracking-[0.03em] text-white max-md:text-[9px] max-md:tracking-[0.02em]">
                      A Journey To Healthy World...
                    </p>
                  </div>

                  <div className="mt-[0px] flex items-center justify-center gap-[9px] max-md:mt-[2px] max-md:gap-[10px]">
                    <div className="relative mt-4 h-[57px] w-[57px] shrink-0 overflow-hidden rounded-full bg-white max-md:mt-2 max-md:h-[52px] max-md:w-[52px]">
                      <Image
                        src="/hero-images/namo-gange-logo.png"
                        alt="Namo Gange Trust"
                        fill
                        sizes="57px"
                        className="object-contain p-[3px]"
                      />
                    </div>

                    <div>
                      <p className="mt-[4px] text-[13px] leading-[1.2] text-white/90 max-md:text-[12px] max-md:leading-[1.25]">
                        Committed to Service,
                        <br />
                        Sustainability and
                        <br />
                        Social Responsibility.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col">
            {/* QUOTE */}
            <div className="mx-auto w-full text-center">
              <div className="flex items-start justify-center">
                <span className="-mt-[8px] mr-[15px] font-serif text-[52px] leading-none text-[#DFAC48] max-md:-mt-[5px] max-md:mr-[7px] max-md:text-[38px]">
                  “
                </span>

                <p className="pt-[4px] text-[18px] font-medium leading-[1.28] text-[#30343A] max-md:max-w-[290px] max-md:pt-[2px] max-md:text-[15px] max-md:leading-[1.4]">
                  We believe in being open, accountable and answerable
                  <br className="max-md:hidden" />
                  to all those who walk with us in this mission.
                </p>

                <span className="-mt-[8px] ml-[15px] font-serif text-[52px] leading-none text-[#DFAC48] max-md:-mt-[5px] max-md:ml-[7px] max-md:text-[38px]">
                  ”
                </span>
              </div>

              <div className="mx-auto mt-[3px] flex max-w-[315px] items-center gap-[7px] max-md:mt-[7px] max-md:max-w-[240px]">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#D8B76D]" />
                <span className="h-[8px] w-[8px] rounded-full bg-[#B87A08]" />
                <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#D8B76D]" />
              </div>
            </div>

            {/* 4 CARDS - SAME BACKGROUND AS MAIN SECTION */}
            <div className="mt-[13px] grid grid-cols-1 gap-[12px] sm:grid-cols-2 xl:grid-cols-4 max-md:gap-[10px]">
              {managedTrustCards.map((card) => (
                <article
                  key={card.title}
                  className="flex h-[277px] flex-col items-center rounded-[13px] border border-[#E1D7CA] bg-[#FAF5EE] px-[10px] pb-[15px] pt-[15px] text-center shadow-[0_5px_14px_rgba(70,47,24,0.045)] max-md:h-auto max-md:min-h-[235px] max-md:px-[18px] max-md:pb-[16px] max-md:pt-[16px]"
                >
                  <div className="flex h-[78px] w-[78px] shrink-0 items-center justify-center rounded-full bg-[#02311E] text-[#D8A326] shadow-[0_4px_10px_rgba(0,58,40,0.14)] max-md:h-[68px] max-md:w-[68px]">
                    <CustomIcon
                      name={card.icon}
                      className="h-[48px] w-[48px] max-md:h-[40px] max-md:w-[40px]"
                    />
                  </div>

                  <h3 className="mt-[8px] whitespace-pre-line font-serif text-[18px] font-semibold leading-[1.08] text-[#0A4936] max-md:mt-[9px] max-md:text-[19px] max-md:leading-[1.12]">
                    {card.title}
                  </h3>

                  <span className="mt-[7px] h-px w-[35px] bg-[#C89537]" />

                  <p className="mt-[10px] whitespace-pre-line text-[14px] leading-[1.36] text-[#35312D] max-md:text-[15px] max-md:leading-[1.45]">
                    {card.description}
                  </p>

                  <span className="mt-auto h-[2px] w-[47px] bg-[#C68E25]" />
                </article>
              ))}
            </div>

            {/* CTA + LEGAL */}
            <div className="mt-[16px] grid grid-cols-[58%_42%] items-center gap-[13px] max-md:mt-[14px] max-md:grid-cols-1 max-md:items-stretch max-md:gap-[10px]">
              <a
                href="/about"
                className="group flex h-[64px] items-center rounded-[8px] bg-[#02311E] px-[22px] text-white shadow-[0_6px_14px_rgba(0,62,42,0.16)] transition hover:bg-[#01291A] max-md:h-auto max-md:min-h-[58px] max-md:w-full max-md:px-[16px] max-md:py-[10px]"
              >
                <CustomIcon
                  name="Shield"
                  className="h-[42px] w-[42px] shrink-0 text-[#D6A227] max-md:h-[34px] max-md:w-[34px]"
                />

                <span className="ml-[15px] whitespace-nowrap text-[17px] font-semibold uppercase max-md:ml-[10px] max-md:whitespace-normal max-md:text-[14px]">
                  Know About The Trust
                </span>

                <span className="ml-auto flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#DFAE3B] text-[#174A36] max-md:h-[36px] max-md:w-[36px]">
                  <CustomIcon
                    name="ArrowRight"
                    className="h-[21px] w-[21px] transition-transform group-hover:translate-x-[3px]"
                  />
                </span>
              </a>

              <div className="relative flex h-[64px] items-center pl-[17px] max-md:h-auto max-md:min-h-[64px] max-md:rounded-[8px] max-md:border max-md:border-[#E1D7CA] max-md:bg-[#FAF6F0] max-md:px-[14px] max-md:py-[10px]">
                <span className="absolute left-0 top-[5px] h-[54px] w-px bg-[#D7C49C] max-md:hidden" />

                <CustomIcon
                  name="DocumentShield"
                  className="h-[45px] w-[45px] shrink-0 text-[#42614F] max-md:h-[36px] max-md:w-[36px]"
                />

                <p className="ml-[11px] text-[13px] leading-[1.25] text-[#393E3A] max-md:ml-[10px] max-md:text-[12px] max-md:leading-[1.35]">
                  Applicable registration / tax
                  <br />
                  information will be displayed
                  <br />
                  after legal verification.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* LOWER DESKTOP AREA */}
        <div className="relative -mt-px hidden h-[145px] overflow-hidden bg-[#FAF5EE] xl:block">
          {/* IMAGE */}
          <div className="absolute bottom-[3px] left-[18px] top-[3px] z-[1] w-[23%] overflow-hidden rounded-[29px] border border-[#D6A13A]">
            <Image
              src="/assets/about-reference/story-ghat-temple.png"
              alt="Sacred river ghat"
              fill
              sizes="315px"
              className="object-cover object-center"
            />
          </div>

          {/* WARM CURVED PANEL */}
          <div
            className="absolute bottom-[3px] left-[18%] right-[2px] top-[3px] z-[2] border border-[#E4D6C1] bg-[#FAF6F0]"
            style={{
              borderTopLeftRadius: "108px 74px",
              borderBottomLeftRadius: "108px 74px",
              borderTopRightRadius: "24px",
              borderBottomRightRadius: "24px",
            }}
          >
            {/* TRANSPARENCY TEXT */}
            <div className="absolute inset-y-0 left-0 flex w-[29%] flex-col justify-center pb-[8px] pl-[96px] pr-[12px] pt-[8px]">
              <h3 className="text-[16px] font-bold leading-[1.16] text-[#174D39]">
                Transparency in every step.
              </h3>

              <span className="mt-[5px] h-[2px] w-[38px] bg-[#CB9638]" />

              <p className="mt-[6px] text-[13px] leading-[1.33] text-[#3D3935]">
                Moksha Sewa follows responsible
                <br />
                practices, transparency and applicable
                <br />
                legal norms to ensure trust.
              </p>
            </div>

            {/* VALUES */}
            <div className="absolute inset-y-0 right-0 grid w-[71%] grid-cols-4">
              {managedValues.map((value) => (
                <div
                  key={value.title}
                  className="flex flex-col items-center justify-center border-l border-[#E0CEAD] px-[8px] text-center"
                >
                  <CustomIcon
                    name={value.icon}
                    className="h-[36px] w-[36px] text-[#15523C]"
                  />

                  <h4 className="mt-[4px] text-[15px] font-bold uppercase leading-[1.15] text-[#15523C]">
                    {value.title}
                  </h4>

                  <p className="mt-[3px] whitespace-pre-line text-[14px] leading-[1.22] text-[#3E3A35]">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* HANDSHAKE */}
          <div className="absolute left-[21%] top-1/2 z-[5] flex h-[90px] w-[90px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[4px] border-[#DFA52F] bg-[#02311E] text-[#DCA725] shadow-[0_6px_16px_rgba(0,49,31,0.18)]">
            <CustomIcon
              name="Handshake"
              className="h-[52px] w-[52px]"
            />
          </div>
        </div>

        {/* MOBILE / TABLET */}
        <div className="mt-[14px] flex flex-col gap-[14px] rounded-[16px] border border-[#E3D5C1] bg-[#FAF6F0] p-[16px] xl:hidden max-md:mt-[12px] max-md:p-[14px]">
          <div className="flex items-center gap-[14px] max-md:gap-[12px]">
            <div className="relative h-[70px] w-[70px] shrink-0 overflow-hidden rounded-full border-[3px] border-[#E2A633] max-md:h-[62px] max-md:w-[62px]">
              <Image
                src="/assets/about-reference/story-ghat-temple.png"
                alt="Sacred river ghat"
                fill
                sizes="70px"
                className="object-cover object-center"
              />

              <span className="absolute inset-0 flex items-center justify-center bg-[#02311E]/80 text-[#DCAA27]">
                <CustomIcon
                  name="Handshake"
                  className="h-[34px] w-[34px]"
                />
              </span>
            </div>

            <div>
              <h3 className="text-[18px] font-bold leading-[1.2] text-[#174D39] max-md:text-[17px]">
                Transparency in every step.
              </h3>

              <span className="mt-[6px] block h-[2px] w-[39px] bg-[#CB9638]" />
            </div>
          </div>

          <p className="text-[16px] leading-[1.4] text-[#3D3935] max-md:text-[14px] max-md:leading-[1.5]">
            Moksha Sewa follows responsible practices, transparency and
            applicable legal norms to ensure trust in every act of service.
          </p>

          <div className="grid grid-cols-2 gap-[14px] border-t border-[#DCC8A4] pt-[14px] sm:grid-cols-4 max-md:gap-x-[8px] max-md:gap-y-[16px]">
            {managedValues.map((value) => (
              <div
                key={value.title}
                className="flex flex-col items-center text-center"
              >
                <CustomIcon
                  name={value.icon}
                  className="h-[38px] w-[38px] text-[#15523C] max-md:h-[32px] max-md:w-[32px]"
                />

                <h4 className="mt-[6px] text-[16px] font-bold uppercase leading-[1.15] text-[#15523C] max-md:break-words max-md:text-[13px]">
                  {value.title}
                </h4>

                <p className="mt-[4px] whitespace-pre-line text-[16px] leading-[1.22] text-[#3E3A35] max-md:text-[13px] max-md:leading-[1.3]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="relative flex min-h-[43px] flex-wrap items-center justify-center gap-y-2 bg-[#02311E] px-[16px] py-[9px] text-center text-[13px] font-semibold text-[#F2E7C9] max-md:gap-x-1 max-md:px-[10px] max-md:py-[10px] max-md:text-[11px] max-md:leading-[1.35]">
          <span className="hidden h-px w-[170px] bg-gradient-to-r from-transparent to-[#D2A030] sm:block" />

          <span className="mx-[10px] whitespace-nowrap max-md:mx-[4px] max-md:whitespace-normal">
            A mission of compassion.
          </span>

          <span className="h-px w-[28px] bg-[#D2A030]" />

          <span className="mx-[10px] whitespace-nowrap max-md:mx-[4px] max-md:whitespace-normal">
            A commitment to transparency.
          </span>

          <CustomIcon
            name="Lotus"
            className="mx-[4px] h-[19px] w-[19px] shrink-0 text-[#D1A02B] max-md:mx-[2px] max-md:h-[17px] max-md:w-[17px]"
          />

          <span className="mx-[10px] whitespace-nowrap max-md:mx-[4px] max-md:whitespace-normal">
            A promise of accountability.
          </span>

          <span className="hidden h-px w-[170px] bg-gradient-to-l from-transparent to-[#D2A030] sm:block" />
        </div>
      </div>
    </section>
  );
}
