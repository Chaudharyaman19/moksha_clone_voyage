"use client";

import type { ReactElement } from "react";
import { imageOrFallback, textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";

interface IconProps {
  name: string;
  className?: string;
}

/* =========================================================
   CUSTOM ICONS
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
        <path d="M32 43c-10-7-15-15-12-25 6 2 10 6 12 12 2-6 6-10 12-12 3 10-2 18-12 25Z" />
        <path d="M22 40c-8-2-13-7-14-15 7 0 13 3 17 8" />
        <path d="M42 40c8-2 13-7 14-15-7 0-13 3-17 8" />
        <path d="M16 46c5 2 10 3 16 3s11-1 16-3" />
        <path d="M24 49h16" />
      </svg>
    ),

    LotusDiya: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M32 18c5 6 7 11 7 15a7 7 0 1 1-14 0c0-4 2-9 7-15Z" />

        <path d="M32 28c2 3 3 5 3 7a3 3 0 1 1-6 0c0-2 1-4 3-7Z" />

        <path d="M32 46c-9-5-13-11-11-18 5 1 9 4 11 9 2-5 6-8 11-9 2 7-2 13-11 18Z" />

        <path d="M22 43c-7-1-11-5-12-11 6 0 11 2 14 6" />

        <path d="M42 43c7-1 11-5 12-11-6 0-11 2-14 6" />

        <path d="M15 50c6 2 11 3 17 3s11-1 17-3" />
      </svg>
    ),

    SmallOrnament: (
      <svg
        className={className}
        viewBox="0 0 64 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 16h20" />
        <path d="M40 16h20" />

        <path d="M32 6c4 5 6 8 6 11 0 4-3 7-6 7s-6-3-6-7c0-3 2-6 6-11Z" />

        <path d="M24 19c3 4 5 6 8 7" />
        <path d="M40 19c-3 4-5 6-8 7" />
      </svg>
    ),
  };

  return icons[name] ?? null;
};

/* =========================================================
   COMPONENT
========================================================= */

export default function WhyWeExist() {
  const section = useWebsiteSection("about-why-exist");

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#F8F1E5]
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
          border-[#E7D9C5]
          bg-[#F8F1E5]
          shadow-[0_7px_22px_rgba(73,46,22,0.06)]
          lg:min-h-[790px]
        "
      >
        {/* =====================================================
            DESKTOP FULL BACKGROUND IMAGE

            IMPORTANT:
            Image poore section par hai.
            bg-cover nahi hai.
            100% 100% => NO CROP
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            hidden
            bg-no-repeat
            lg:block
          "
          style={{
            backgroundImage:
              `url('${imageOrFallback(section?.image, "/assets/about-optimized/existimage.png")}')`,
            backgroundSize: "100% 100%",
            backgroundPosition: "center center",
          }}
        />

        {/* =====================================================
            VERY LIGHT LEFT READABILITY LAYER

            Image already cream hai, isliye ye bahut subtle hai.
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            z-[1]
            hidden
            w-[51%]
            lg:block
          "
          style={{
            background:
              "linear-gradient(90deg, rgba(251,244,232,0.18) 0%, rgba(251,244,232,0.10) 65%, rgba(251,244,232,0) 100%)",
          }}
        />

        {/* =====================================================
            LIGHT TEXTURE
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[2]
            opacity-[0.18]
          "
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(161,111,49,0.05) 0 1px, transparent 1.2px)",
            backgroundSize: "22px 22px",
          }}
        />

        {/* =====================================================
            CONTENT
        ====================================================== */}

        <div
          className="
            relative
            z-10
            flex
            min-h-[790px]
            flex-col
            px-[28px]
            pb-[70px]
            pt-[45px]
            sm:px-[45px]
            lg:w-[53%]
            lg:px-[72px]
            lg:pb-[72px]
            lg:pt-[58px]
          "
        >
          {/* =================================================
              TOP LOTUS
          ================================================= */}

          <div className="flex justify-center lg:justify-start lg:pl-[205px]">
            <CustomIcon
              name="Lotus"
              className="
                h-[45px]
                w-[45px]
                text-[#B47A16]
              "
            />
          </div>

          {/* =================================================
              WHY WE EXIST
          ================================================= */}

          <div
            className="
              mt-[9px]
              flex
              items-center
              justify-center
              gap-[14px]
              lg:justify-start
              lg:pl-[75px]
            "
          >
            <span className="relative h-px w-[61px] bg-[#BC882B]">
              <span
                className="
                  absolute
                  -right-[2px]
                  -top-[3px]
                  h-[7px]
                  w-[7px]
                  rotate-45
                  bg-[#BC882B]
                "
              />
            </span>

            <span
              className="
                whitespace-nowrap
                text-[18px]
                font-bold
                uppercase
                tracking-[0.24em]
                text-[#064A38]
              "
            >
              {textOrFallback(section?.eyebrow, "Why We Exist")}
            </span>

            <span className="relative h-px w-[61px] bg-[#BC882B]">
              <span
                className="
                  absolute
                  -left-[2px]
                  -top-[3px]
                  h-[7px]
                  w-[7px]
                  rotate-45
                  bg-[#BC882B]
                "
              />
            </span>
          </div>

          {/* =================================================
              MAIN HEADING
          ================================================= */}

          <h2
            className="
              mt-[22px]
              font-serif
              text-[42px]
              font-medium
              leading-[1.08]
              tracking-[-0.025em]
              sm:text-[50px]
              lg:text-[56px]
            "
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            <span className="whitespace-pre-line">{textOrFallback(section?.title, "Because Sometimes,\nThere Is No One Left\nto Stand Beside Them.")}</span>
          </h2>

          {/* =================================================
              HEADING DIVIDER
          ================================================= */}

          <div
            className="
              mt-[22px]
              flex
              items-center
              gap-[16px]
            "
          >
            <span
              className="
                h-px
                w-[175px]
                bg-gradient-to-r
                from-[#C18D35]
                to-transparent
              "
            />

            <CustomIcon
              name="Lotus"
              className="
                h-[31px]
                w-[31px]
                shrink-0
                text-[#B98121]
              "
            />

            <span
              className="
                h-px
                w-[105px]
                bg-gradient-to-l
                from-transparent
                to-[#C18D35]
              "
            />
          </div>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p
            className="
              mt-[19px]
              max-w-[520px]
              whitespace-pre-line
              text-[18px]
              font-medium
              leading-[1.52]
              text-[#303437]
            "
          >
            {textOrFallback(section?.description, "Some people leave this world without family or support.\nSome cases remain unclaimed. And some families have the love and willingness to perform the final rites, but do not have the financial means to manage everything on their own.")}
          </p>

          {/* =================================================
              MOKSHA SEWA STATEMENT
          ================================================= */}

          <div
            className="
              mt-[28px]
              flex
              items-center
            "
          >
            {/* ICON */}

            <div
              className="
                flex
                h-[88px]
                w-[88px]
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#004736]
                text-[#D3A22D]
                shadow-[0_5px_15px_rgba(0,55,39,0.14)]
              "
            >
              <CustomIcon
                name="LotusDiya"
                className="
                  h-[60px]
                  w-[60px]
                "
              />
            </div>

            {/* DIVIDER */}

            <span
              className="
                mx-[18px]
                h-[88px]
                w-px
                shrink-0
                bg-[#BD8E38]
              "
            />

            {/* TEXT */}

            <div>
              <h2
                className="
                  font-sans
                  text-[24px]
                  font-semibold
                  leading-[1.05]
                  text-[#064334]
                  sm:text-[30px]
                "
              >
                Moksha Sewa
              </h2>

              <p
                className="
                  mt-[5px]
                  font-serif
                  whitespace-pre-line
                  text-[31px]
                  leading-[1.08]
                  text-[#B67B18]
                  lg:text-[34px]
                "
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                }}
              >
                {textOrFallback(section?.subtitle, "Exists for These Moments.")}
              </p>
            </div>
          </div>

          {/* =================================================
              QUOTE CARD
          ================================================= */}

          <div
            className="
              relative
              mt-[27px]
              w-fit
              rounded-[12px]
              border
              border-[#D4AA67]
              bg-[#FBF5E9]/90
              px-[55px]
              py-[18px]
            "
          >
            {/* LEFT QUOTE */}

            <span
              className="
                absolute
                left-[25px]
                top-[5px]
                font-serif
                text-[54px]
                leading-none
                text-[#DBBE83]
              "
            >
              “
            </span>

            {/* RIGHT QUOTE */}

            <span
              className="
                absolute
                bottom-[-5px]
                right-[27px]
                font-serif
                text-[54px]
                leading-none
                text-[#D6B56D]
              "
            >
              ”
            </span>

            <p
              className="
                font-serif
                whitespace-pre-line
                text-[26px]
                leading-[1.2]
                text-[#263235]
                sm:text-[28px]
              "
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}
            >
              {textOrFallback(section?.quote, "When support disappears,\nhumanity must step forward.")}
            </p>

            {/* ORNAMENT */}

            <CustomIcon
              name="SmallOrnament"
              className="
                absolute
                -bottom-[17px]
                left-1/2
                h-[31px]
                w-[68px]
                -translate-x-1/2
                text-[#C29236]
              "
            />
          </div>
        </div>

        {/* =====================================================
            MOBILE IMAGE
            Mobile par cover rakha hai because screen narrow hai.
        ====================================================== */}

        <div
          className="
            relative
            h-[420px]
            w-full
            bg-cover
            bg-no-repeat
            lg:hidden
          "
          style={{
            backgroundImage:
              `url('${imageOrFallback(section?.image, "/assets/about-optimized/existimage.png")}')`,
            backgroundPosition: "74% center",
          }}
        />

        {/* =====================================================
            BOTTOM STRIP
        ====================================================== */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            z-20
          "
        >
          <div className="h-[4px] bg-[#C59327]" />

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

            <div className="absolute left-0 right-0 top-[3px] h-px bg-[#A97924]/65" />
          </div>
        </div>
      </div>
    </section>
  );
}