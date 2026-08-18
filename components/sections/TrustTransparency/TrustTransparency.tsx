"use client";

import Image from "next/image";
import type { ReactElement } from "react";

interface IconProps {
  name: string;
  className?: string;
}

/* =========================================================
   CUSTOM OUTLINE ICONS
========================================================= */

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
        <path d="M32 44c-10-7-15-15-12-25 6 2 10 6 12 12 2-6 6-10 12-12 3 10-2 18-12 25Z" />
        <path d="M22 41c-8-2-13-7-14-15 7 0 13 3 17 8" />
        <path d="M42 41c8-2 13-7 14-15-7 0-13 3-17 8" />
        <path d="M15 47c6 2 11 3 17 3s11-1 17-3" />
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

/* =========================================================
   DATA
========================================================= */

const trustCards = [
  {
    icon: "People",
    title: "About\nNamo Gange Trust",
    description:
      "Learn about our vision,\nmission and the work\nwe stand for.",
  },
  {
    icon: "Shield",
    title: "Governance &\nPolicies",
    description:
      "Our governance structure,\npolicies and commitment\nto ethical operations.",
  },
  {
    icon: "Report",
    title: "Impact /\nReports",
    description:
      "See our impact, case\nhighlights and\ntransparent reports.",
  },
  {
    icon: "Policy",
    title: "Donation &\nRefund Policy",
    description:
      "Clear information on\ndonations, utilization\nand refund policy.",
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

/* =========================================================
   COMPONENT
========================================================= */

export default function TrustTransparency() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#FCF7EF]
        px-4
        pb-[10px]
        pt-[10px]
        sm:px-5
        lg:px-6
      "
    >
      {/* =====================================================
          SUBTLE DOT BACKGROUND
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.42]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(163,116,61,0.06) 0 1px, transparent 1.2px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* =====================================================
          TOP LEFT LEAVES
      ====================================================== */}

      <svg
        viewBox="0 0 180 250"
        className="
          pointer-events-none
          absolute
          -left-[44px]
          top-[8px]
          h-[235px]
          w-[170px]
          text-[#B6AA79]/35
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M26 220C40 166 71 107 151 25" />

        <path d="M37 174c-24-8-35-27-31-48 23 5 40 20 41 41" />
        <path d="M61 135c-20-12-25-32-17-49 22 8 34 24 31 43" />
        <path d="M91 95c-15-17-13-36-1-50 18 13 23 29 16 46" />
        <path d="M124 58c-10-18-2-34 14-43 13 15 12 29-1 42" />

        <path d="M45 161c20-9 38-5 49 10-18 10-34 9-48-2" />
        <path d="M72 119c18-7 34-2 44 12-17 8-31 6-42-4" />
        <path d="M105 79c15-6 29-1 37 11-14 7-26 5-36-3" />
      </svg>

      {/* =====================================================
          BOTTOM RIGHT LEAVES
      ====================================================== */}

      <svg
        viewBox="0 0 180 230"
        className="
          pointer-events-none
          absolute
          -bottom-[36px]
          -right-[30px]
          h-[210px]
          w-[170px]
          rotate-180
          text-[#B6AA79]/35
        "
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

      {/* =====================================================
          MAIN
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1344px]">

        {/* =====================================================
            TOP AREA
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-[22px]
            xl:grid-cols-[41.5%_58.5%]
            xl:gap-[26px]
          "
        >
          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div className="flex min-w-0 flex-col">

            {/* LABEL */}

            <div
              className="
                flex
                items-center
                justify-center
                gap-[11px]
                xl:justify-start
              "
            >
              <span className="relative h-px w-[34px] bg-[#B87C18]">
                <span className="absolute -right-[2px] -top-[2px] h-[5px] w-[5px] rounded-full bg-[#B87C18]" />
              </span>

              <span
                className="
                  text-[16px]
                  font-bold
                  uppercase
                  tracking-[0.06em]
                  text-[#A66E16]
                "
              >
                Sewa With Responsibility
              </span>

              <span className="relative h-px w-[34px] bg-[#B87C18]">
                <span className="absolute -left-[2px] -top-[2px] h-[5px] w-[5px] rounded-full bg-[#B87C18]" />
              </span>
            </div>

            {/* HEADING */}

            <h2
              className="
                mt-[8px]
                text-center
                font-serif
                text-[45px]
                font-medium
                leading-[0.89]
                tracking-[-0.03em]
                text-[#064631]
                sm:text-[54px]
                xl:text-left
                xl:text-[63px]
              "
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}
            >
              Trust &amp;
              <br />
              Transparency
            </h2>

            {/* LOTUS DIVIDER */}

            <div
              className="
                mt-[10px]
                flex
                items-center
                justify-center
                gap-[9px]
                xl:justify-start
                xl:pl-[146px]
              "
            >
              <span className="h-px w-[56px] bg-gradient-to-r from-transparent to-[#C99234]" />

              <CustomIcon
                name="Lotus"
                className="h-[29px] w-[29px] text-[#BE7D13]"
              />

              <span className="h-px w-[56px] bg-gradient-to-l from-transparent to-[#C99234]" />
            </div>

            {/* DESCRIPTION */}

            <p
              className="
                mx-auto
                mt-[9px]
                max-w-[360px]
                text-center
                text-[16px]
                leading-[1.4]
                text-[#48433D]
                xl:mx-0
                xl:ml-[42px]
              "
            >
              Our commitment to transparency,
              <br />
              integrity and responsible service.
            </p>

            {/* =================================================
                DARK GREEN BRAND PANEL
            ================================================= */}

            <div
              className="
                relative
                mt-[16px]
                min-h-[214px]
                overflow-hidden
                rounded-[34px_24px_0_0]
                bg-[#00472F]
                px-[24px]
                py-[18px]
                text-white
                shadow-[0_7px_18px_rgba(0,59,40,0.16)]
              "
            >
              {/* watermark leaves */}

              <CustomIcon
                name="Lotus"
                className="
                  pointer-events-none
                  absolute
                  -bottom-[26px]
                  -left-[18px]
                  h-[145px]
                  w-[145px]
                  text-white/[0.025]
                "
              />

              <div
                className="
                  relative
                  z-10
                  grid
                  min-h-[177px]
                  grid-cols-[42%_1px_58%]
                  items-center
                "
              >
                {/* MOKSHA */}

                <div className="flex flex-col items-center text-center">
                  <div className="relative h-[82px] w-[150px]">
                    <Image
                      src="/assets/footer-moksha-mark.png"
                      alt="Moksha Sewa"
                      fill
                      sizes="150px"
                      className="object-contain"
                    />
                  </div>

                  <h3
                    className="
                      mt-[1px]
                      font-serif
                      text-[25px]
                      font-semibold
                      uppercase
                      leading-none
                      text-white
                    "
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                    }}
                  >
                    Moksha Sewa
                  </h3>

                  <p className="mt-[7px] text-[16px] font-semibold text-[#DFA929]">
                    A Namo Gange Trust Initiative
                  </p>

                  <div className="mt-[10px] flex items-center gap-[7px]">
                    <span className="h-px w-[36px] bg-[#DCA72A]" />
                    <span className="h-[5px] w-[5px] rounded-full bg-[#DCA72A]" />
                    <span className="h-px w-[36px] bg-[#DCA72A]" />
                  </div>
                </div>

                {/* DIVIDER */}

                <span className="h-[145px] w-px bg-[#D69A20]/55" />

                {/* NAMO GANGE */}

                <div className="pl-[24px]">
                  <p
                    className="
                      text-center
                      text-[16px]
                      font-bold
                      uppercase
                      text-[#E5AE24]
                    "
                  >
                    An Initiative Of
                  </p>

                  <div className="relative mx-auto mt-[2px] h-[66px] w-[220px]">
                    <Image
                      src="/hero-images/namo-gange-logo.png"
                      alt="Namo Gange"
                      fill
                      sizes="220px"
                      className="object-contain"
                    />
                  </div>

                  <div className="mt-[6px] flex items-center gap-[12px]">
                    <div
                      className="
                        relative
                        h-[65px]
                        w-[65px]
                        shrink-0
                        overflow-hidden
                        rounded-full
                        bg-white
                      "
                    >
                      <Image
                        src="/hero-images/namo-gange-logo.png"
                        alt=""
                        fill
                        sizes="65px"
                        className="object-contain p-[3px]"
                      />
                    </div>

                    <div>
                      <h3 className="text-[18px] font-bold uppercase leading-tight text-white">
                        Namo Gange Trust
                      </h3>

                      <p className="mt-[3px] text-[16px] leading-[1.27] text-white/90">
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

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div className="flex min-w-0 flex-col">

            {/* QUOTE */}

            <div className="mx-auto w-full max-w-[720px] text-center">
              <div className="flex items-start justify-center">
                <span
                  className="
                    -mt-[6px]
                    mr-[17px]
                    font-serif
                    text-[55px]
                    leading-none
                    text-[#DFAC48]
                  "
                >
                  “
                </span>

                <p className="pt-[5px] text-[18px] font-medium leading-[1.35] text-[#30343A]">
                  We believe in being open, accountable and answerable
                  <br />
                  to all those who walk with us in this mission.
                </p>

                <span
                  className="
                    -mt-[6px]
                    ml-[17px]
                    font-serif
                    text-[55px]
                    leading-none
                    text-[#DFAC48]
                  "
                >
                  ”
                </span>
              </div>

              <div className="mx-auto mt-[6px] flex max-w-[320px] items-center justify-center gap-[8px]">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#D8B76D]" />

                <span className="h-[8px] w-[8px] rounded-full bg-[#B87A08]" />

                <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#D8B76D]" />
              </div>
            </div>

            {/* =================================================
                FOUR CARDS
            ================================================= */}

            <div
              className="
                mt-[15px]
                grid
                grid-cols-1
                gap-[12px]
                sm:grid-cols-2
                xl:grid-cols-4
              "
            >
              {trustCards.map((card) => (
                <article
                  key={card.title}
                  className="
                    flex
                    h-[278px]
                    flex-col
                    items-center
                    rounded-[13px]
                    border
                    border-[#E1D7CA]
                    bg-[#FFFDF9]
                    px-[12px]
                    pb-[15px]
                    pt-[15px]
                    text-center
                    shadow-[0_5px_14px_rgba(70,47,24,0.07)]
                  "
                >
                  {/* ICON */}

                  <div
                    className="
                      flex
                      h-[78px]
                      w-[78px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#004A35]
                      text-[#DCA624]
                      shadow-[0_4px_10px_rgba(0,58,40,0.15)]
                    "
                  >
                    <CustomIcon
                      name={card.icon}
                      className="h-[50px] w-[50px]"
                    />
                  </div>

                  {/* TITLE */}

                  <h3
                    className="
                      mt-[9px]
                      whitespace-pre-line
                      font-serif
                      text-[18px]
                      font-semibold
                      leading-[1.12]
                      text-[#094B35]
                    "
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                    }}
                  >
                    {card.title}
                  </h3>

                  <span className="mt-[8px] h-px w-[38px] bg-[#C89537]" />

                  {/* DESCRIPTION */}

                  <p
                    className="
                      mt-[12px]
                      whitespace-pre-line
                      text-[16px]
                      leading-[1.37]
                      text-[#35312D]
                    "
                  >
                    {card.description}
                  </p>

                  <span className="mt-auto h-[2px] w-[47px] bg-[#C68E25]" />
                </article>
              ))}
            </div>

            {/* =================================================
                CTA + LEGAL
            ================================================= */}

            <div
              className="
                mt-[16px]
                grid
                grid-cols-1
                gap-[14px]
                md:grid-cols-[58%_42%]
                md:items-center
              "
            >
              {/* CTA */}

              <a
                href="/about-us"
                className="
                  group
                  flex
                  h-[64px]
                  items-center
                  rounded-[9px]
                  bg-[#00482F]
                  px-[22px]
                  text-white
                  shadow-[0_6px_14px_rgba(0,62,42,0.16)]
                  transition
                  hover:bg-[#003C28]
                "
              >
                <CustomIcon
                  name="Shield"
                  className="
                    h-[43px]
                    w-[43px]
                    shrink-0
                    text-[#D6A227]
                  "
                />

                <span
                  className="
                    ml-[16px]
                    text-[18px]
                    font-semibold
                    uppercase
                    tracking-[0.01em]
                  "
                >
                  Know About The Trust
                </span>

                <span
                  className="
                    ml-auto
                    flex
                    h-[43px]
                    w-[43px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#E0AE38]
                    text-[#185039]
                    shadow-[0_3px_8px_rgba(0,0,0,0.12)]
                  "
                >
                  <CustomIcon
                    name="ArrowRight"
                    className="
                      h-[22px]
                      w-[22px]
                      transition-transform
                      group-hover:translate-x-[3px]
                    "
                  />
                </span>
              </a>

              {/* LEGAL NOTE */}

              <div className="relative flex min-h-[64px] items-center pl-[15px]">
                <span
                  className="
                    absolute
                    left-0
                    top-[5px]
                    h-[54px]
                    w-px
                    bg-[#D7C49C]
                  "
                />

                <CustomIcon
                  name="DocumentShield"
                  className="
                    h-[48px]
                    w-[48px]
                    shrink-0
                    text-[#42614F]
                  "
                />

                <p className="ml-[12px] text-[16px] leading-[1.28] text-[#393E3A]">
                  Applicable registration / tax
                  <br />
                  information will be displayed
                  <br />
                  after legal verification.
                </p>

                <span
                  className="
                    ml-auto
                    h-[55px]
                    w-[9px]
                    rounded-r-full
                    border-r
                    border-[#D9B36A]
                  "
                />
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            LOWER WHITE STRIP
        ====================================================== */}

        <div
          className="
            relative
            mt-[14px]
            overflow-hidden
            rounded-[24px]
            border
            border-[#E2D6C5]
            bg-[#FFFDF8]
            shadow-[0_4px_12px_rgba(77,51,23,0.04)]
          "
        >
          <div
            className="
              grid
              min-h-[138px]
              grid-cols-1
              xl:grid-cols-[43%_57%]
            "
          >
            {/* =================================================
                LEFT IMAGE + TRANSPARENCY TEXT
            ================================================= */}

            <div className="relative flex min-h-[138px]">

              {/* IMAGE */}

              <div
                className="
                  relative
                  w-[47%]
                  shrink-0
                  overflow-hidden
                  rounded-l-[24px]
                "
              >
                <Image
                  src="/hero-images/image3.png"
                  alt="Moksha Sewa"
                  fill
                  sizes="280px"
                  className="object-cover object-[70%_50%]"
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-transparent
                    to-[#FFFDF8]/5
                  "
                />
              </div>

              {/* OVERLAP ICON */}

              <div
                className="
                  absolute
                  left-[47%]
                  top-1/2
                  z-20
                  flex
                  h-[91px]
                  w-[91px]
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border-[4px]
                  border-[#E1A734]
                  bg-[#004A35]
                  text-[#DCAA27]
                  shadow-[0_5px_14px_rgba(0,51,35,0.20)]
                "
              >
                <CustomIcon
                  name="Handshake"
                  className="h-[58px] w-[58px]"
                />
              </div>

              {/* TEXT */}

              <div
                className="
                  flex
                  flex-1
                  flex-col
                  justify-center
                  pl-[67px]
                  pr-[22px]
                  py-[15px]
                "
              >
                <h3 className="text-[16px] font-bold text-[#174D39]">
                  Transparency in every step.
                </h3>

                <span className="mt-[5px] h-[2px] w-[35px] bg-[#CB9638]" />

                <p className="mt-[7px] text-[16px] leading-[1.32] text-[#3D3935]">
                  Moksha Sewa follows responsible
                  <br />
                  practices, transparency and applicable
                  <br />
                  legal norms to ensure trust in every
                  <br />
                  act of service.
                </p>
              </div>
            </div>

            {/* =================================================
                VALUES
            ================================================= */}

            <div
              className="
                grid
                grid-cols-2
                md:grid-cols-4
              "
            >
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`
                    flex
                    min-h-[138px]
                    flex-col
                    items-center
                    justify-center
                    px-[12px]
                    text-center

                    ${
                      index > 0
                        ? "md:border-l md:border-[#DCC8A4]"
                        : ""
                    }
                  `}
                >
                  <CustomIcon
                    name={value.icon}
                    className="
                      h-[49px]
                      w-[49px]
                      text-[#15523C]
                    "
                  />

                  <h4 className="mt-[5px] text-[16px] font-bold uppercase text-[#15523C]">
                    {value.title}
                  </h4>

                  <p className="mt-[3px] whitespace-pre-line text-[16px] leading-[1.22] text-[#3E3A35]">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM GREEN LINE
        ====================================================== */}

        <div
          className="
            mt-0
            flex
            min-h-[42px]
            items-center
            justify-center
            overflow-hidden
            bg-[#00442F]
            px-[16px]
            text-center
            text-[16px]
            font-semibold
            text-[#F2E7C9]
          "
        >
          <span className="h-px w-[160px] bg-gradient-to-r from-transparent to-[#D2A030]" />

          <span className="mx-[12px]">
            A mission of compassion.
          </span>

          <span className="h-px w-[30px] bg-[#D2A030]" />

          <span className="mx-[12px]">
            A commitment to transparency.
          </span>

          <CustomIcon
            name="Lotus"
            className="
              mx-[5px]
              h-[22px]
              w-[22px]
              text-[#D1A02B]
            "
          />

          <span className="mx-[12px]">
            A promise of accountability.
          </span>

          <span className="h-px w-[160px] bg-gradient-to-l from-transparent to-[#D2A030]" />
        </div>
      </div>
    </section>
  );
}