"use client";

import type { ReactElement } from "react";

interface IconProps {
  name:
    | "ShieldCheck"
    | "Verification"
    | "Formalities"
    | "Documentation"
    | "Privacy"
    | "Lotus";
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
    ShieldCheck: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M32 6 50 13v14c0 13-7 22-18 29-11-7-18-16-18-29V13L32 6Z" />
        <path d="m24 30 6 6 12-14" />
      </svg>
    ),

    Verification: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="12" y="10" width="32" height="43" rx="2" />
        <path d="M22 10V6h12v4" />

        <path d="m19 23 3 3 5-6" />
        <path d="M30 23h9" />

        <path d="m19 34 3 3 5-6" />
        <path d="M30 34h9" />

        <path d="m19 45 3 3 5-6" />
        <path d="M30 45h6" />

        <circle cx="46" cy="45" r="9" />
        <path d="m52 51 6 6" />
      </svg>
    ),

    Formalities: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 6h25l9 9v37H15Z" />
        <path d="M40 6v10h9" />

        <path d="M22 25h17" />
        <path d="M22 33h17" />
        <path d="M22 41h11" />

        <circle cx="44" cy="46" r="9" />
        <path d="M40 55 44 51l4 4 3-10" />
      </svg>
    ),

    Documentation: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 25h18l5 6h21l-4 23H14Z" />
        <path d="M16 25V13h21l8 8v10" />
        <path d="M37 13v9h8" />
      </svg>
    ),

    Privacy: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M32 6 51 13v14c0 13-7 22-19 29-12-7-19-16-19-29V13L32 6Z" />

        <rect x="24" y="30" width="16" height="14" rx="2" />
        <path d="M27 30v-5a5 5 0 0 1 10 0v5" />
      </svg>
    ),

    Lotus: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.3"
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
  };

  return icons[name] ?? null;
};

/* =========================================================
   FEATURE DATA
========================================================= */

const features = [
  {
    icon: "Verification" as const,
    title: "Verification",
    text: "Support follows defined eligibility and case circumstances.",
  },
  {
    icon: "Formalities" as const,
    title: "Formalities",
    text: "Applicable permissions and procedures are respected.",
  },
  {
    icon: "Documentation" as const,
    title: "Documentation",
    text: "Cases and assistance are responsibly recorded.",
  },
  {
    icon: "Privacy" as const,
    title: "Privacy",
    text: "Beneficiary dignity comes before publicity.",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function ResponsibleSewa() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#F7F2E9]
        px-4
        py-[16px]
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
          rounded-[14px]
          border
          border-[#E2D5C3]
          bg-[#FBF7EF]
          shadow-[0_7px_22px_rgba(73,46,22,0.06)]
        "
      >
        {/* =====================================================
            MAIN HERO AREA
        ====================================================== */}

        <div
          className="
            relative
            min-h-[490px]
            overflow-hidden
            bg-[#FBF7EF]
          "
        >
          {/* =================================================
              IMAGE AS BACKGROUND
              NO OBJECT-COVER
              NO RIGHT-SIDE CROP
          ================================================= */}

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
                "url('/assets/about/our-story/response.jpeg')",

              /*
               * Full image height preserve hogi.
               * Right side crop nahi hogi.
               */
              backgroundSize: "auto 100%",

              /*
               * Image ka right edge hero ke
               * right edge se lock rahega.
               */
              backgroundPosition: "right center",
            }}
          />

          {/* =================================================
              VERY SOFT IMAGE UNDERLAY

              Agar source image thodi narrow ho to bhi
              background cream hi rahega, koi hard line nahi.
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              right-0
              hidden
              w-[65%]
              bg-[#EEE4D7]
              lg:-z-[1]
              lg:block
            "
          />

          {/* =================================================
              LEFT CREAM FADE
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              left-0
              z-[1]
              hidden
              w-[67%]
              lg:block
            "
            style={{
              background:
                "linear-gradient(90deg, #FBF7EF 0%, #FBF7EF 55%, rgba(251,247,239,0.97) 67%, rgba(251,247,239,0.82) 76%, rgba(251,247,239,0.42) 87%, rgba(251,247,239,0) 100%)",
            }}
          />

          {/* =================================================
              EXTRA SOFT CENTER BLEND
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              left-[43%]
              z-[2]
              hidden
              w-[17%]
              bg-[#FBF7EF]/20
              blur-[22px]
              lg:block
            "
          />

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div
            className="
              relative
              z-10
              flex
              min-h-[490px]
              w-full
              flex-col

              px-[28px]
              pb-[34px]
              pt-[42px]

              sm:px-[42px]

              lg:w-[54%]
              lg:px-[58px]
              lg:pb-[34px]
              lg:pt-[48px]
            "
          >
            {/* LABEL */}

            <div className="flex items-center gap-[12px]">
              <CustomIcon
                name="ShieldCheck"
                className="
                  h-[47px]
                  w-[47px]
                  shrink-0
                  text-[#AD7922]
                "
              />

              <span className="relative h-px w-[27px] bg-[#C49B59]">
                <span
                  className="
                    absolute
                    -right-[2px]
                    -top-[2px]
                    h-[5px]
                    w-[5px]
                    rounded-full
                    bg-[#A87927]
                  "
                />
              </span>

              <span
                className="
                  whitespace-nowrap
                  text-[16px]
                  font-bold
                  uppercase
                  tracking-[0.11em]
                  text-[#064A38]
                "
              >
                Responsible Sewa
              </span>

              <span className="relative h-px w-[27px] bg-[#C49B59]">
                <span
                  className="
                    absolute
                    -left-[2px]
                    -top-[2px]
                    h-[5px]
                    w-[5px]
                    rounded-full
                    bg-[#A87927]
                  "
                />
              </span>
            </div>

            {/* =================================================
                HEADING
            ================================================= */}

            <h2
              className="
                mt-[17px]

                font-serif
                text-[42px]
                font-medium
                leading-[1.02]
                tracking-[-0.025em]

                sm:text-[48px]
                lg:text-[54px]
              "
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}
            >
              <span className="block text-[#073F32]">
                Compassion
              </span>

              <span className="mt-[3px] block text-[#B87817]">
                With Accountability.
              </span>
            </h2>

            {/* =================================================
                ORNAMENT
            ================================================= */}

            <div className="mt-[18px] flex items-center gap-[10px]">
              <span
                className="
                  h-px
                  w-[68px]
                  bg-gradient-to-r
                  from-[#C79546]
                  to-transparent
                "
              />

              <span className="text-[26px] leading-none text-[#B78127]">
                ❖
              </span>

              <span
                className="
                  h-px
                  w-[68px]
                  bg-gradient-to-l
                  from-[#C79546]
                  to-transparent
                "
              />
            </div>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p
              className="
                mt-[22px]
                max-w-[570px]

                text-[18px]
                font-medium
                leading-[1.55]

                text-[#34393C]
              "
            >
              At Moksha Sewa, every act of support is guided by
              responsibility,
              <br className="hidden xl:block" />
              respect and the highest standards of ethical service.
            </p>
          </div>

          {/* =================================================
              RIGHT MESSAGE CARD
          ================================================= */}

          <div
            className="
              absolute
              bottom-[12px]
              right-[30px]
              z-20

              hidden
              w-[205px]

              rounded-[16px]

              border
              border-[#E2D4C0]

              bg-[#FBF7EF]/95

              px-[24px]
              py-[18px]

              text-center

              shadow-[0_8px_22px_rgba(63,45,26,0.11)]

              backdrop-blur-[2px]

              lg:block
            "
          >
            <CustomIcon
              name="ShieldCheck"
              className="
                mx-auto
                h-[46px]
                w-[46px]
                text-[#0A4A3A]
              "
            />

            <p
              className="
                mt-[8px]
                text-[16px]
                leading-[1.35]
                text-[#2F3434]
              "
            >
              We serve
              <br />

              <span
                className="
                  font-bold
                  text-[#164D3E]
                "
              >
                with responsibility.
              </span>

              <br />

              Because dignity
              <br />
              comes first.
            </p>

            <span
              className="
                mx-auto
                mt-[10px]
                block
                h-[2px]
                w-[30px]
                bg-[#B98A36]
              "
            />
          </div>
        </div>

        {/* =====================================================
            MOBILE IMAGE
        ====================================================== */}

        <div
          className="
            relative
            h-[360px]
            w-full
            overflow-hidden
            bg-[#ECE3D6]
            lg:hidden
          "
          style={{
            backgroundImage:
              "url('/assets/about/our-story/response.jpeg')",

            /*
             * Mobile par poori image width visible.
             * object-cover wali cropping nahi.
             */
            backgroundSize: "100% auto",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="
              absolute
              inset-x-0
              top-0
              h-[100px]

              bg-gradient-to-b
              from-[#FBF7EF]
              to-transparent
            "
          />
        </div>

        {/* =====================================================
            FEATURE BAND
        ====================================================== */}

        <div
          className="
            relative
            z-30

            mx-[20px]
            -mt-[2px]

            overflow-hidden

            rounded-[13px]

            border
            border-[#DDD0BE]

            bg-[#FCF9F3]/95

            shadow-[0_7px_17px_rgba(64,45,26,0.055)]
          "
        >
          <div
            className="
              grid
              grid-cols-1

              sm:grid-cols-2
              xl:grid-cols-4
            "
          >
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`
                  relative

                  flex
                  min-h-[166px]

                  items-center

                  gap-[18px]

                  px-[24px]
                  py-[18px]

                  ${
                    index !== 0
                      ? "border-t border-[#DED1C0] sm:border-t-0 sm:border-l"
                      : ""
                  }

                  ${index === 2 ? "sm:border-l-0 xl:border-l" : ""}
                `}
              >
                {/* ICON */}

                <div
                  className="
                    flex
                    h-[92px]
                    w-[92px]
                    shrink-0

                    items-center
                    justify-center

                    rounded-full

                    bg-[#EAEDE7]

                    text-[#174D3E]
                  "
                >
                  <CustomIcon
                    name={feature.icon}
                    className="
                      h-[62px]
                      w-[62px]
                    "
                  />
                </div>

                {/* CONTENT */}

                <div className="min-w-0 flex-1">
                  <h3
                    className="
                      font-serif
                      text-[21px]
                      font-semibold
                      leading-[1.1]

                      text-[#0C4638]
                    "
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                    }}
                  >
                    {feature.title}
                  </h3>

                  <span
                    className="
                      mt-[8px]
                      block

                      h-[2px]
                      w-[44px]

                      bg-[#B88730]
                    "
                  />

                  <p
                    className="
                      mt-[10px]

                      text-[16px]
                      font-medium
                      leading-[1.4]

                      text-[#3A3E3E]
                    "
                  >
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            BOTTOM TRUST STRIP
        ====================================================== */}

        <div
          className="
            mx-[20px]
            mb-[20px]
            mt-[10px]

            flex
            min-h-[58px]

            items-center

            rounded-[10px]

            bg-[#F1EFE9]

            px-[28px]
          "
        >
          <CustomIcon
            name="ShieldCheck"
            className="
              h-[42px]
              w-[42px]
              shrink-0
              text-[#164D3E]
            "
          />

          <span
            className="
              mx-[18px]
              h-[38px]
              w-px
              shrink-0
              bg-[#CABFAF]
            "
          />

          <p
            className="
              flex-1

              text-[16px]
              font-medium
              leading-[1.4]

              text-[#46504E]
            "
          >
            Moksha Sewa is a Namo Gange Trust initiative. Every step we
            take is guided by responsibility, respect and humanity.
          </p>

          <span
            className="
              mx-[18px]
              hidden
              h-[38px]
              w-px
              shrink-0
              bg-[#CABFAF]

              md:block
            "
          />

          <CustomIcon
            name="Lotus"
            className="
              hidden
              h-[47px]
              w-[47px]
              shrink-0
              text-[#B88A35]

              md:block
            "
          />
        </div>
      </div>
    </section>
  );
}