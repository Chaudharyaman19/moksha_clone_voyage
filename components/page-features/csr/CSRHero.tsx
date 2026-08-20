"use client";

import { CSRIcon } from "./CSRIcons";

const highlights = [
  ["Target", "Defined Scope"],
  ["ShieldCheck", "Due Diligence"],
  ["ClipboardCheck", "Documentation"],
  ["Report", "Impact Reporting"],
] as const;

const benefits = [
  ["HeartHands", "Strengthen essential", "final-journey assistance"],
  ["People", "Stand beside eligible", "& verified families"],
  ["Handshake", "Build long-term,", "responsible partnerships"],
  ["ClipboardCheck", "Create measurable", "human impact"],
] as const;

export default function CSRHero() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#FBF7EF]
      "
    >
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1660px]
          overflow-hidden

          lg:min-h-[660px]
        "
      >
        {/* =====================================================
            DESKTOP RIGHT IMAGE
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            right-0

            hidden
            w-[59%]

            bg-no-repeat

            lg:block
          "
          style={{
            backgroundImage:
              "url('/assets/csr/csr-hero-photo.jpg')",

            backgroundSize: "cover",

            /*
              Right side ke people cut na ho.
            */
            backgroundPosition: "60% center",
          }}
        />

        {/* =====================================================
            LEFT CREAM AREA + IMAGE BLEND
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            z-[1]

            hidden
            w-[62%]

            lg:block
          "
          style={{
            background:
              "linear-gradient(90deg, #FBF7EF 0%, #FBF7EF 62%, rgba(251,247,239,0.97) 72%, rgba(251,247,239,0.77) 82%, rgba(251,247,239,0.30) 92%, rgba(251,247,239,0) 100%)",
          }}
        />

        {/* EXTRA SOFT CENTER BLEND */}

        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-[46%]
            z-[2]

            hidden
            w-[12%]

            bg-[#FBF7EF]/20
            blur-[18px]

            lg:block
          "
        />

        {/* =====================================================
            HERO CONTENT
        ====================================================== */}

        <div
          className="
            relative
            z-10

            px-5
            pb-[24px]
            pt-[30px]

            sm:px-8

            lg:w-[57%]
            lg:px-[74px]
            lg:pb-[100px]
            lg:pt-[72px]

            xl:px-[88px]
          "
        >
          {/* TOP LABEL */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-[8px]

              text-[14px]
              font-bold
              uppercase
              tracking-[0.08em]

              text-[#A86E20]

              sm:justify-start
              sm:gap-[12px]
              sm:text-[16px]
            "
          >
            <span
              className="
                h-px
                w-[28px]
                shrink-0
                bg-[#BF8B37]

                sm:w-[62px]
              "
            />

            <span className="text-center leading-[1.25] sm:whitespace-nowrap">
              Corporate Social Responsibility
            </span>

            <span
              className="
                h-px
                w-[28px]
                shrink-0
                bg-[#BF8B37]

                sm:w-[62px]
              "
            />
          </div>

          {/* =================================================
              MAIN HEADING
          ================================================= */}

          <h1
            className="
              mt-[14px]

              max-w-[850px]

              font-serif
              text-[34px]
              font-medium
              leading-[1.04]
              tracking-[-0.025em]

              text-[#063F32]

              sm:text-[42px]
              lg:text-[48px]
              xl:text-[52px]
            "
            style={{
              fontFamily:
                "Georgia, 'Times New Roman', serif",
            }}
          >
            <span className="block">
              CSR Partnership for
            </span>

            <span
              className="
                mt-[4px]
                block
                xl:whitespace-nowrap
              "
            >
              Dignified Humanitarian Support
            </span>
          </h1>

          {/* TAGLINE */}

          <p
            className="
              mt-[5px]
              text-[22px]
              font-medium
              leading-[1.2]
              text-[#AA701D]

              lg:text-[25px]
            "
          >
            Partner for Dignity. Create Human Impact.
          </p>

          {/* =================================================
              LOTUS DIVIDER
          ================================================= */}

          <div
            className="
              mt-[10px]
              flex
              max-w-[610px]
              items-center
              gap-[11px]

              text-[#B88226]
            "
          >
            <span
              className="
                h-px
                flex-1
                bg-[#C59B56]
              "
            />

            <CSRIcon
              name="Lotus"
              className="
                h-[30px]
                w-[30px]
                shrink-0
              "
            />

            <span
              className="
                h-px
                flex-1
                bg-[#C59B56]
              "
            />
          </div>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p
            className="
              mt-[6px]

              max-w-[620px]

              text-[18px]
              font-medium
              leading-[1.58]

              text-[#343A3D]
            "
          >
            Partner with Moksha Sewa, an initiative of
            Namo Gange Trust,
            <br className="hidden xl:block" />
            to explore responsible humanitarian
            collaborations designed
            <br className="hidden xl:block" />
            around dignity, accountability and verified need.
          </p>

          {/* =================================================
              BUTTONS
          ================================================= */}

          <div
            className="
              mt-[16px]
              flex
              flex-col
              gap-[10px]

              sm:flex-row
              sm:flex-wrap
            "
          >
            <a
              href="#csr-enquiry"
              className="
                group

                inline-flex
                h-[52px]
                w-full

                items-center
                justify-between

                rounded-[7px]

                bg-[#004A39]

                px-[22px]

                text-[16px]
                font-bold
                uppercase

                text-white

                shadow-[0_5px_12px_rgba(0,65,46,0.12)]

                transition
                hover:bg-[#003D30]

                sm:w-auto
                sm:min-w-[300px]
              "
            >
              Discuss a CSR Partnership

              <CSRIcon
                name="ArrowRight"
                className="
                  h-[24px]
                  w-[24px]
                  text-[#D09A2C]

                  transition-transform
                  group-hover:translate-x-[3px]
                "
              />
            </a>

            <a
              href="#organisation"
              className="
                group

                inline-flex
                h-[52px]
                w-full

                items-center
                justify-between

                rounded-[7px]

                border-[2px]
                border-[#C29145]

                bg-[#FFFAF2]/90

                px-[22px]

                text-[16px]
                font-bold
                uppercase

                text-[#A76D1F]

                sm:w-auto
                sm:min-w-[325px]
              "
            >
              Request Organisation Profile

              <CSRIcon
                name="ArrowRight"
                className="
                  h-[24px]
                  w-[24px]

                  transition-transform
                  group-hover:translate-x-[3px]
                "
              />
            </a>
          </div>

          {/* =================================================
              4 SMALL HIGHLIGHTS
          ================================================= */}

          <div
            className="
              mt-[14px]

              grid
              w-full
              max-w-[920px]
              grid-cols-1

              px-[12px]

              sm:grid-cols-2

              lg:grid-cols-4
            "
          >
            {highlights.map(([icon, label]) => (
              <div
                key={label}
                className="
                  flex
                  min-h-[54px]
                  items-center
                  justify-start

                  gap-[10px]

                  px-[18px]

                "
              >
                <span
                  className="
                    grid
                    h-[42px]
                    w-[42px]
                    shrink-0

                    place-items-center

                    rounded-full

                    bg-[#EEF0E9]

                    text-[#0A4B3A]
                  "
                >
                  <CSRIcon
                    name={icon}
                    className="
                      h-[27px]
                      w-[27px]
                    "
                  />
                </span>

                <span
                  className="
                    whitespace-nowrap
                    text-[16px]
                    font-semibold
                    text-[#35403E]
                  "
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            MOBILE IMAGE
        ====================================================== */}

        <div
          className="
            relative
            h-[340px]
            w-full

            bg-cover
            bg-center
            bg-no-repeat

            lg:hidden
          "
          style={{
            backgroundImage:
              "url('/assets/csr/csr-hero-photo.jpg')",
          }}
        />

        {/* =====================================================
            BOTTOM BENEFITS STRIP
        ====================================================== */}

        <div
          className="
            relative
            z-30

            mx-5
            mb-[28px]
            mt-[24px]

            grid

            overflow-hidden

            rounded-[12px]

            border
            border-[#DFD5C5]

            bg-[#F7F4ED]/95

            shadow-[0_5px_13px_rgba(60,40,20,0.04)]

            sm:grid-cols-2

            lg:absolute
            lg:bottom-[26px]
            lg:left-[5.2%]
            lg:right-[5.2%]
            lg:mx-0
            lg:mb-0
            lg:mt-0

            xl:grid-cols-4
          "
        >
          {benefits.map(
            ([icon, line1, line2], index) => (
              <div
                key={line1}
                className={`
                  flex
                  min-h-[96px]
                  items-center

                  gap-[18px]

                  px-[30px]
                  py-[15px]

                  ${
                    index
                      ? "xl:border-l xl:border-[#DED3C4]"
                      : ""
                  }
                `}
              >
                <CSRIcon
                  name={icon}
                  className="
                    h-[48px]
                    w-[48px]
                    shrink-0

                    text-[#155042]
                  "
                />

                <p
                  className="
                    text-[16px]
                    font-semibold
                    leading-[1.4]

                    text-[#34403F]
                  "
                >
                  {line1}
                  <br />
                  {line2}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
