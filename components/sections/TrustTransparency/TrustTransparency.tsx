"use client";

import Image from "next/image";
import type { ReactElement } from "react";

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

export default function TrustTransparency() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#FBF7EF]
        px-4
        pb-0
        pt-[8px]
        sm:px-5
        lg:px-6
      "
    >
      {/* DOTS */}

      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(163,116,61,0.06) 0 1px, transparent 1.2px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* LEFT LEAVES */}

      <svg
        viewBox="0 0 180 250"
        className="
          pointer-events-none
          absolute
          -left-[44px]
          top-[6px]
          h-[235px]
          w-[170px]
          text-[#B6AA79]/30
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

      {/* RIGHT LEAVES */}

      <svg
        viewBox="0 0 180 250"
        className="
          pointer-events-none
          absolute
          -bottom-[60px]
          -right-[35px]
          h-[220px]
          w-[170px]
          rotate-180
          text-[#B6AA79]/30
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M26 220C40 166 71 107 151 25" />
        <path d="M37 174c-24-8-35-27-31-48 23 5 40 20 41 41" />
        <path d="M61 135c-20-12-25-32-17-49 22 8 34 24 31 43" />
        <path d="M91 95c-15-17-13-36-1-50 18 13 23 29 16 46" />
      </svg>

      <div className="relative z-10 mx-auto w-full max-w-[1344px]">

        {/* =====================================================
            TOP GRID
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-[24px]
            xl:grid-cols-[41%_59%]
            xl:gap-[28px]
          "
        >
          {/* LEFT */}

          <div className="flex flex-col">
            <div className="flex items-center justify-center gap-[10px] xl:justify-start">
              <span className="relative h-px w-[35px] bg-[#B87C18]">
                <span className="absolute -right-[2px] -top-[2px] h-[5px] w-[5px] rounded-full bg-[#B87C18]" />
              </span>

              <span className="text-[16px] font-bold uppercase tracking-[0.06em] text-[#A66E16]">
                Sewa With Responsibility
              </span>

              <span className="relative h-px w-[35px] bg-[#B87C18]">
                <span className="absolute -left-[2px] -top-[2px] h-[5px] w-[5px] rounded-full bg-[#B87C18]" />
              </span>
            </div>

            <h2
              className="
                mt-[7px]
                text-center
                font-serif
                text-[46px]
                font-medium
                leading-[0.9]
                tracking-[-0.03em]
                text-[#064631]
                sm:text-[54px]
                xl:text-left
                xl:text-[62px]
              "
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}
            >
              Trust &amp;
              <br />
              Transparency
            </h2>

            <div className="mt-[10px] flex items-center justify-center gap-[8px] xl:justify-start xl:pl-[145px]">
              <span className="h-px w-[55px] bg-gradient-to-r from-transparent to-[#C99234]" />

              <CustomIcon
                name="Lotus"
                className="h-[28px] w-[28px] text-[#BE7D13]"
              />

              <span className="h-px w-[55px] bg-gradient-to-l from-transparent to-[#C99234]" />
            </div>

            <p className="mx-auto mt-[7px] max-w-[350px] text-center text-[16px] leading-[1.38] text-[#48433D] xl:mx-0 xl:ml-[40px]">
              Our commitment to transparency,
              <br />
              integrity and responsible service.
            </p>

            {/* BRAND PANEL */}

            <div
              className="
                relative
                mt-[14px]
                h-[212px]
                overflow-hidden
                rounded-tl-[46px]
                rounded-tr-[22px]
                bg-[#00472F]
                px-[20px]
                py-[16px]
                text-white
                shadow-[0_7px_18px_rgba(0,59,40,0.16)]
              "
            >
              <div className="grid h-full grid-cols-[42%_1px_58%] items-center">
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="relative h-[74px] w-[145px]">
                    <Image
                      src="/assets/footer-moksha-mark.png"
                      alt="Moksha Sewa"
                      fill
                      sizes="145px"
                      className="object-contain"
                    />
                  </div>

                  <h3
                    className="mt-[2px] font-serif text-[24px] font-semibold uppercase leading-none"
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                    }}
                  >
                    Moksha Sewa
                  </h3>

                  <p className="mt-[7px] text-[16px] font-semibold leading-[1.25] text-[#DFA929]">
                    A Namo Gange Trust
                    <br />
                    Initiative
                  </p>

                  <div className="mt-[9px] flex items-center gap-[6px]">
                    <span className="h-px w-[35px] bg-[#DCA72A]" />
                    <span className="h-[5px] w-[5px] rounded-full bg-[#DCA72A]" />
                    <span className="h-px w-[35px] bg-[#DCA72A]" />
                  </div>
                </div>

                <span className="h-[145px] w-px bg-[#D69A20]/55" />

                <div className="flex h-full flex-col justify-center pl-[22px]">
                  <p className="text-center text-[16px] font-bold uppercase text-[#E5AE24]">
                    An Initiative Of
                  </p>

                  <div className="relative mx-auto mt-[2px] h-[56px] w-[210px]">
                    <Image
                      src="/hero-images/namo-gange-logo.png"
                      alt="Namo Gange"
                      fill
                      sizes="210px"
                      className="object-contain"
                    />
                  </div>

                  <div className="mt-[4px] flex items-center gap-[11px]">
                    <div className="relative h-[60px] w-[60px] shrink-0 overflow-hidden rounded-full bg-white">
                      <Image
                        src="/hero-images/namo-gange-logo.png"
                        alt=""
                        fill
                        sizes="60px"
                        className="object-contain p-[3px]"
                      />
                    </div>

                    <div>
                      <h3 className="text-[18px] font-bold uppercase leading-tight">
                        Namo Gange Trust
                      </h3>

                      <p className="mt-[2px] text-[16px] leading-[1.22] text-white/90">
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

          {/* RIGHT */}

          <div className="flex flex-col">
            <div className="mx-auto w-full text-center">
              <div className="flex items-start justify-center">
                <span className="-mt-[5px] mr-[15px] font-serif text-[52px] leading-none text-[#DFAC48]">
                  “
                </span>

                <p className="pt-[5px] text-[18px] font-medium leading-[1.32] text-[#30343A]">
                  We believe in being open, accountable and answerable
                  <br />
                  to all those who walk with us in this mission.
                </p>

                <span className="-mt-[5px] ml-[15px] font-serif text-[52px] leading-none text-[#DFAC48]">
                  ”
                </span>
              </div>

              <div className="mx-auto mt-[5px] flex max-w-[315px] items-center gap-[7px]">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#D8B76D]" />
                <span className="h-[8px] w-[8px] rounded-full bg-[#B87A08]" />
                <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#D8B76D]" />
              </div>
            </div>

            {/* 4 CARDS */}

            <div className="mt-[14px] grid grid-cols-1 gap-[12px] sm:grid-cols-2 xl:grid-cols-4">
              {trustCards.map((card) => (
                <article
                  key={card.title}
                  className="
                    flex
                    h-[277px]
                    flex-col
                    items-center
                    rounded-[13px]
                    border
                    border-[#E1D7CA]
                    bg-[#FFFDF9]
                    px-[11px]
                    pb-[15px]
                    pt-[15px]
                    text-center
                    shadow-[0_5px_14px_rgba(70,47,24,0.07)]
                  "
                >
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
                    "
                  >
                    <CustomIcon
                      name={card.icon}
                      className="h-[49px] w-[49px]"
                    />
                  </div>

                  <h3
                    className="
                      mt-[8px]
                      whitespace-pre-line
                      font-serif
                      text-[18px]
                      font-semibold
                      leading-[1.1]
                      text-[#094B35]
                    "
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                    }}
                  >
                    {card.title}
                  </h3>

                  <span className="mt-[7px] h-px w-[35px] bg-[#C89537]" />

                  <p className="mt-[11px] whitespace-pre-line text-[16px] leading-[1.34] text-[#35312D]">
                    {card.description}
                  </p>

                  <span className="mt-auto h-[2px] w-[47px] bg-[#C68E25]" />
                </article>
              ))}
            </div>

            {/* CTA */}

            <div className="mt-[16px] grid grid-cols-1 gap-[13px] md:grid-cols-[58%_42%] md:items-center">
              <a
                href="/about-us"
                className="
                  group
                  flex
                  h-[63px]
                  items-center
                  rounded-[8px]
                  bg-[#00482F]
                  px-[21px]
                  text-white
                  shadow-[0_6px_14px_rgba(0,62,42,0.16)]
                  transition
                  hover:bg-[#003C28]
                "
              >
                <CustomIcon
                  name="Shield"
                  className="h-[42px] w-[42px] shrink-0 text-[#D6A227]"
                />

                <span className="ml-[15px] text-[18px] font-semibold uppercase">
                  Know About The Trust
                </span>

                <span className="ml-auto flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#E0AE38] text-[#185039]">
                  <CustomIcon
                    name="ArrowRight"
                    className="h-[21px] w-[21px]"
                  />
                </span>
              </a>

              <div className="relative flex h-[63px] items-center pl-[15px]">
                <span className="absolute left-0 top-[4px] h-[55px] w-px bg-[#D7C49C]" />

                <CustomIcon
                  name="DocumentShield"
                  className="h-[47px] w-[47px] shrink-0 text-[#42614F]"
                />

                <p className="ml-[11px] text-[16px] leading-[1.25] text-[#393E3A]">
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

        {/* =====================================================
            LOWER BEND STRIP
            HEIGHT INCREASED 145 -> 180
        ====================================================== */}

        <div
          className="
            relative
            mt-[13px]
            h-[180px]
            overflow-hidden
            rounded-[22px]
            border
            border-[#E2D6C5]
            bg-[#FFFDF8]
            shadow-[0_4px_12px_rgba(77,51,23,0.04)]
          "
        >
          {/* LEFT SECTION */}

          <div
            className="
              absolute
              bottom-0
              left-0
              top-0
              w-[43%]
              overflow-hidden
            "
          >
            {/* PHOTO */}

            <div
              className="
                absolute
                bottom-0
                left-0
                top-0
                w-[47%]
                overflow-hidden
                rounded-l-[22px]
              "
            >
              <Image
                src="/assets/about-reference/story-ghat-temple.png"
                alt="Sacred river ghat"
                fill
                sizes="300px"
                className="object-cover object-center"
              />
            </div>

            {/* INNER BEND */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-0
                left-[39%]
                top-0
                w-[105px]
                bg-[#FFFDF8]
              "
              style={{
                borderTopLeftRadius: "90px 80px",
                borderBottomLeftRadius: "90px 80px",
              }}
            />

            {/* HANDSHAKE */}

            <div
              className="
                absolute
                left-[47%]
                top-1/2
                z-30
                flex
                h-[94px]
                w-[94px]
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border-[4px]
                border-[#E2A633]
                bg-[#004A35]
                text-[#DCAA27]
                shadow-[0_5px_14px_rgba(0,51,35,0.20)]
              "
            >
              <CustomIcon
                name="Handshake"
                className="h-[59px] w-[59px]"
              />
            </div>

            {/* TRANSPARENCY TEXT */}

            <div
              className="
                absolute
                bottom-0
                left-[53%]
                right-0
                top-0
                flex
                flex-col
                justify-center
                pl-[28px]
                pr-[13px]
                py-[12px]
              "
            >
              <h3 className="text-[16px] font-bold text-[#174D39 ] pt-3">
                Transparency in every step.
              </h3>

              <span className=" h-[2px] w-[34px] bg-[#CB9638]" />

              <p className=" text-[16px] leading-[1.32] text-[#3D3935]">
                Moksha Sewa follows responsible
                <br />
                practices, transparency and applicable
                <br />
                legal norms to ensure trust.
                
              </p>
            </div>
          </div>

          {/* VALUES */}

          <div
            className="
              absolute
              bottom-0
              right-0
              top-0
              grid
              w-[57%]
              grid-cols-4
            "
          >
            {values.map((value) => (
              <div
                key={value.title}
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  border-l
                  border-[#DCC8A4]
                  px-[11px]
                  text-center
                "
              >
                <CustomIcon
                  name={value.icon}
                  className="h-[47px] w-[47px] text-[#15523C]"
                />

                <h4 className="mt-[6px] text-[16px] font-bold uppercase text-[#15523C]">
                  {value.title}
                </h4>

                <p className="mt-[4px] whitespace-pre-line text-[16px] leading-[1.25] text-[#3E3A35]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            BOTTOM GREEN BAND
        ====================================================== */}

        <div
          className="
            mt-0
            flex
            h-[41px]
            items-center
            justify-center
            overflow-hidden
            bg-[#00442F]
            px-[16px]
            text-[16px]
            font-semibold
            text-[#F2E7C9]
          "
        >
          <span className="h-px w-[150px] bg-gradient-to-r from-transparent to-[#D2A030]" />

          <span className="mx-[11px]">
            A mission of compassion.
          </span>

          <span className="h-px w-[30px] bg-[#D2A030]" />

          <span className="mx-[11px]">
            A commitment to transparency.
          </span>

          <CustomIcon
            name="Lotus"
            className="mx-[5px] h-[21px] w-[21px] text-[#D1A02B]"
          />

          <span className="mx-[11px]">
            A promise of accountability.
          </span>

          <span className="h-px w-[150px] bg-gradient-to-l from-transparent to-[#D2A030]" />
        </div>
      </div>
    </section>
  );
}