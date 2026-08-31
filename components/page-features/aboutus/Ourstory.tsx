"use client";

import Image from "next/image";
import type { ReactElement } from "react";
import { imageOrFallback, textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";

interface IconProps {
  name: "Lotus" | "Founder" | "Ornament";
  className?: string;
}

/* =========================================================
   CUSTOM ICONS
========================================================= */

const CustomIcon = ({
  name,
  className = "h-6 w-6",
}: IconProps): ReactElement | null => {
  const icons: Record<IconProps["name"], ReactElement> = {
    Lotus: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M32 42c-9-6-14-14-12-23 6 2 10 6 12 12 2-6 6-10 12-12 2 9-3 17-12 23Z" />
        <path d="M23 40c-8-1-13-6-14-13 7 0 12 3 16 8" />
        <path d="M41 40c8-1 13-6 14-13-7 0-12 3-16 8" />
        <path d="M16 47c5 2 10 3 16 3s11-1 16-3" />
        <path d="M23 51h18" />
      </svg>
    ),

    Founder: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.35"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="27" cy="23" r="8" />
        <path d="M12 49c1-11 6-17 15-17s14 6 15 17" />

        <path d="M40 12h14v11H44l-5 5v-5h-3V16c0-2 2-4 4-4Z" />

        <path d="M44 17h6" />
      </svg>
    ),

    Ornament: (
      <svg
        className={className}
        viewBox="0 0 120 28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 14h38" />
        <path d="M78 14h38" />

        <path d="M60 4c6 6 8 10 8 14 0 5-4 8-8 8s-8-3-8-8c0-4 2-8 8-14Z" />

        <path d="M47 18c5 5 9 7 13 8" />
        <path d="M73 18c-5 5-9 7-13 8" />
      </svg>
    ),
  };

  return icons[name] ?? null;
};

/* =========================================================
   COMPONENT
========================================================= */

export default function OurStory() {
  const section = useWebsiteSection("about-our-story");

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#F7F0E5]
        px-4
        py-[18px]
        sm:px-5
        lg:px-6
      "
    >
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1344px]
          overflow-hidden
          border
          border-[#E6D9C5]
          bg-[#FBF5EA]
          shadow-[0_8px_26px_rgba(72,45,20,0.06)]

          lg:min-h-[650px]
        "
      >
        {/* =====================================================
            TOP LEFT MANDALA
        ====================================================== */}

        <svg
          className="
            pointer-events-none
            absolute
            -left-[64px]
            -top-[68px]
            h-[230px]
            w-[230px]
            text-[#C9A15B]/20
          "
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          aria-hidden="true"
        >
          <circle cx="100" cy="100" r="27" />
          <circle cx="100" cy="100" r="52" />
          <circle cx="100" cy="100" r="78" />

          <path d="M100 12v176" />
          <path d="M12 100h176" />

          <path d="M38 38l124 124" />
          <path d="M162 38 38 162" />

          <path d="M100 22 115 70 100 92 85 70Z" />
          <path d="M100 178 115 130 100 108 85 130Z" />

          <path d="M22 100 70 85 92 100 70 115Z" />
          <path d="M178 100 130 85 108 100 130 115Z" />
        </svg>

        {/* =====================================================
            LEFT GHAT BACKGROUND
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-0
            hidden
            h-[63%]
            w-[58%]
            overflow-hidden
            lg:block
          "
        >
          <Image
            src={imageOrFallback(section?.secondaryImage, "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788164976/moksha-sewa/assets/about/our-story/ghat-background.png")}
            alt=""
            fill
            priority
            sizes="58vw"
            className="
              scale-x-[-1]
              object-cover
              object-[76%_center]
            "
          />

          {/* TOP FADE */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-[#FBF5EA]
              via-[#FBF5EA]/80
              via-[24%]
              to-transparent
            "
          />

          {/* RIGHT FADE */}

          <div
            className="
              absolute
              inset-y-0
              right-0
              w-[36%]
              bg-gradient-to-r
              from-transparent
              to-[#FBF5EA]
            "
          />
        </div>

        {/* =====================================================
            MAIN GRID
        ====================================================== */}

        <div
          className="
            relative
            z-10
            grid
            grid-cols-1

            lg:min-h-[650px]
            lg:grid-cols-[54%_46%]
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div
            className="
              relative
              px-[26px]
              pb-[70px]
              pt-[34px]

              sm:px-[46px]

              lg:px-[72px]
              lg:pb-[54px]
              lg:pt-[38px]
            "
          >
            {/* TOP LOTUS */}

            <div className="flex justify-center">
              <CustomIcon
                name="Lotus"
                className="
                  h-[44px]
                  w-[44px]
                  text-[#B47A16]
                "
              />
            </div>

            {/* OUR STORY */}

            <div
              className="
                mt-[5px]
                flex
                items-center
                justify-center
                gap-[13px]
              "
            >
              <span className="relative h-px w-[70px] bg-[#BF8B2E]">
                <span
                  className="
                    absolute
                    -right-[3px]
                    -top-[3px]
                    h-[7px]
                    w-[7px]
                    rotate-45
                    bg-[#BF8B2E]
                  "
                />
              </span>

              <span
                className="
                  text-[17px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#064638]
                "
              >
                {textOrFallback(section?.eyebrow, "Our Story", 60)}
              </span>

              <span className="relative h-px w-[70px] bg-[#BF8B2E]">
                <span
                  className="
                    absolute
                    -left-[3px]
                    -top-[3px]
                    h-[7px]
                    w-[7px]
                    rotate-45
                    bg-[#BF8B2E]
                  "
                />
              </span>
            </div>

            {/* =================================================
                TITLE
            ================================================= */}

            <h2
              className="
                mx-auto
                mt-[15px]
                max-w-[560px]
                text-center

                font-sans
                text-[24px]
                font-semibold
                leading-[1.05]

                sm:text-[30px]
              "
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}
            >
              <span className="whitespace-pre-line">{textOrFallback(section?.title, "One Question\nBecame a Mission.", 150)}</span>
            </h2>

            {/* TITLE DIVIDER */}

            <div
              className="
                mt-[17px]
                flex
                items-center
                justify-center
                gap-[10px]
              "
            >
              <span
                className="
                  h-px
                  w-[122px]
                  bg-gradient-to-r
                  from-transparent
                  to-[#C69949]
                "
              />

              <CustomIcon
                name="Lotus"
                className="
                  h-[28px]
                  w-[28px]
                  text-[#B27C20]
                "
              />

              <span
                className="
                  h-px
                  w-[122px]
                  bg-gradient-to-l
                  from-transparent
                  to-[#C69949]
                "
              />
            </div>

            {/* =================================================
                MAIN QUESTION
            ================================================= */}

            <div
              className="
                relative
                mx-auto
                mt-[17px]
                max-w-[560px]
                px-[34px]
                text-center
              "
            >
              <span
                className="
                  absolute
                  left-[4px]
                  top-[-11px]

                  font-serif
                  text-[48px]
                  leading-none

                  text-[#B87A0B]
                "
              >
                “
              </span>

              <p
                className="
                  font-serif
                  text-[22px]
                  italic
                  whitespace-pre-line
                  leading-[1.45]

                  text-[#17483D]

                  sm:text-[24px]
                "
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                }}
              >
                {textOrFallback(section?.subtitle, "What happens when someone passes away\nand there is no one to stand beside them?", 600)}
              </p>

              <span
                className="
                  absolute
                  bottom-[-15px]
                  right-[5px]

                  font-serif
                  text-[48px]
                  leading-none

                  text-[#B87A0B]
                "
              >
                ”
              </span>
            </div>

            <div
              className="
                mx-auto
                mt-[18px]

                h-px
                w-[145px]

                bg-gradient-to-r
                from-transparent
                via-[#C6943E]
                to-transparent
              "
            />

            {/* =================================================
                BODY CONTENT
            ================================================= */}

            <div
              className="
                mx-auto
                mt-[19px]
                max-w-[520px]

                space-y-[15px]

                bg-white/80
                backdrop-blur-sm
                p-5
                rounded-xl
                shadow-sm

                text-[18px]
                font-medium
                leading-[1.6]

                text-[#33383A]
                whitespace-pre-line
              "
            >
              <p>
                {textOrFallback(section?.description, "This question became the foundation of Moksha Sewa—a mission created so that when someone is left without family, support or resources, humanity can still stand beside them.\n\nWe believe that every individual, regardless of identity, status or circumstance, deserves a final journey of dignity, respect and compassion.\n\nOur mission is to ensure that no one faces their final journey alone.", 2000)}
              </p>
            </div>
          </div>

          {/* =================================================
              RIGHT SIDE
          ================================================= */}

          <div
            className="
              relative
              px-[22px]
              pb-[28px]
              pt-0

              lg:px-[28px]
              lg:pb-[22px]
              lg:pt-0
            "
          >
            {/* =================================================
                FOUNDER IMAGE
            ================================================= */}

            <div
              className="
                relative
                mx-auto

                h-[350px]
                sm:h-[420px]
                lg:h-[540px]
                w-full

                overflow-hidden

                border
                border-[#D6B268]

                bg-[#DED1BC]
              "
            >
              <Image
                src={imageOrFallback(section?.image, "/assets/vijay_sharma.jpg")}
                alt="Vijay Sharma - Founder, Moksha Sewa"
                fill
                priority
                quality={100}
                sizes="(max-width:1024px) 100vw, 46vw"
                className="
                  object-cover
                  object-center
                "
              />
            </div>

            {/* =================================================
                GREEN FOUNDER MESSAGE CARD
                REFERENCE STYLE
            ================================================= */}

            <div
              className="
                relative
                z-20

                -mt-[14px]

                min-h-[320px]

                overflow-hidden

                border
                border-[#B88929]

                bg-[#004A39]

                px-[32px]
                pb-[16px]
                pt-[16px]

                text-white

                shadow-[0_10px_24px_rgba(0,51,40,0.14)]
              "
            >
              {/* =================================================
                  FAINT RIGHT MANDALA
              ================================================= */}

              <svg
                className="
                  pointer-events-none
                  absolute
                  -bottom-[75px]
                  -right-[73px]

                  h-[255px]
                  w-[255px]

                  text-[#C49336]/12
                "
                viewBox="0 0 200 200"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                aria-hidden="true"
              >
                <circle cx="100" cy="100" r="27" />
                <circle cx="100" cy="100" r="50" />
                <circle cx="100" cy="100" r="76" />

                <path d="M100 15v170" />
                <path d="M15 100h170" />

                <path d="M40 40l120 120" />
                <path d="M160 40 40 160" />

                <path d="M100 22 116 70 100 92 84 70Z" />
                <path d="M100 178 116 130 100 108 84 130Z" />

                <path d="M22 100 70 84 92 100 70 116Z" />
                <path d="M178 100 130 84 108 100 130 116Z" />
              </svg>

              {/* =================================================
                  MESSAGE LABEL
              ================================================= */}

              <div
                className="
                  relative
                  mx-auto

                  flex
                  w-[92%]
                  max-w-[300px]

                  items-center

                  rounded-full

                  border
                  border-[#C38F27]

                  py-2
                  pl-[48px]
                  pr-[14px]

                  sm:h-[50px]
                  sm:w-auto
                  sm:max-w-[415px]
                  sm:py-0
                  sm:pl-[62px]
                  sm:pr-[18px]
                "
              >
                {/* LEFT CIRCLE */}

                <div
                  className="
                    absolute
                    -left-[2px]
                    top-1/2

                    flex
                    h-[42px]
                    w-[42px]

                    -translate-y-1/2

                    items-center
                    justify-center

                    rounded-full

                    border
                    border-[#C38F27]

                    bg-[#004A39]

                    text-[#D09A30]

                    sm:h-[62px]
                    sm:w-[62px]
                  "
                >
                  <CustomIcon
                    name="Founder"
                    className="
                      h-[24px]
                      w-[24px]

                      sm:h-[37px]
                      sm:w-[37px]
                    "
                  />
                </div>

                <span
                  className="
                    w-full

                    text-center
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.04em]

                    text-[#DDA33A]

                    sm:text-[16px]
                    sm:tracking-[0.105em]
                  "
                >
                  {textOrFallback(section?.secondaryTitle, "A Message From The Founder", 60)}
                </span>
              </div>

              {/* =================================================
                  QUOTE
              ================================================= */}

              <div
                className="
                  relative
                  mx-auto
                  mt-[8px]

                  w-fit

                  px-[18px]
                "
              >
                <span
                  className="
                    absolute
                    -left-[4px]
                    -top-[7px]

                    font-serif
                    text-[44px]
                    leading-none

                    text-[#C68511]
                  "
                >
                  “
                </span>

                <p
                  className="
                    font-serif
                    text-[20px]
                    italic
                    whitespace-pre-line
                    leading-[1.45]

                    text-[#F8F2E4]
                  "
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                  }}
                >
                  {textOrFallback(section?.quote, "Dignity should never depend on whether someone has money, family or someone standing beside them.", 600)}
                </p>

                <span
                  className="
                    absolute
                    bottom-[-14px]
                    right-[5px]

                    font-serif
                    text-[44px]
                    leading-none

                    text-[#C68511]
                  "
                >
                  ”
                </span>
              </div>

              {/* =================================================
                  CENTER ORNAMENT
              ================================================= */}

              <div
                className="
                  mt-[10px]
                  flex
                  justify-center
                "
              >
                <CustomIcon
                  name="Ornament"
                  className="
                    h-[24px]
                    w-[135px]
                    text-[#BF8B27]
                  "
                />
              </div>

              {/* =================================================
                  FOUNDER MESSAGE
              ================================================= */}

              <p
                className="
                  relative
                  z-10

                  mx-auto
                  mt-[6px]

                  max-w-[455px]

                  text-[15px]
                  leading-[1.46]

                  text-[#F0EDE5]
                "
              >
                <span className="whitespace-pre-line">{textOrFallback(section?.secondaryDescription, "Moksha Sewa is not just a service—it is a promise.\nA promise that in someone's final moment, humanity\nwill not look away. Together, we can build a society\nwhere compassion is stronger than circumstance.", 2000)}</span>
              </p>

              {/* =================================================
                  SIGNATURE
              ================================================= */}

              <div
                className="
                  relative
                  z-10

                  mx-auto
                  mt-[8px]

                  max-w-[455px]
                "
              >
                <div
                  className="
                    font-serif
                    text-[24px]
                    leading-none

                    text-[#C68B22]
                  "
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                  }}
                >
                  — Vijay Sharma
                </div>

                <div
                  className="
                    mt-[2px]
                    text-[14px]
                    text-[#F0E7D8]
                  "
                >
                  Founder, Moksha Sewa
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            MOBILE GHAT IMAGE
        ====================================================== */}

        <div
          className="
            relative
            h-[360px]
            w-full
            overflow-hidden
            lg:hidden
          "
        >
          <Image
            src="https://res.cloudinary.com/dr8mld4i0/image/upload/v1788164976/moksha-sewa/assets/about/our-story/ghat-background.png"
            alt=""
            fill
            sizes="100vw"
            className="
              object-cover
              object-center
            "
          />

          <div
            className="
              absolute
              inset-x-0
              top-0
              h-[100px]

              bg-gradient-to-b
              from-[#FBF5EA]
              to-transparent
            "
          />
        </div>

        {/* =====================================================
            BOTTOM DECORATIVE STRIP
        ====================================================== */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            z-30
          "
        >
          <div className="h-[4px] bg-[#C2932B]" />

          <div
            className="
              relative
              h-[30px]
              overflow-hidden
              bg-[#00452F]
            "
          >
            <div
              className="
                absolute
                inset-0
                opacity-20
              "
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, transparent 0 12px, rgba(198,157,55,.35) 12px 13px, transparent 13px 24px)",
              }}
            />

            <div
              className="
                absolute
                left-0
                right-0
                top-[3px]

                h-px

                bg-[#A97924]/65
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}