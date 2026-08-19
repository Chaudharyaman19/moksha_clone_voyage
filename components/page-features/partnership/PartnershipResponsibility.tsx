"use client";

import Image from "next/image";
import { PartnershipIcon } from "./PartnershipIcons";

import namoGangeLogo from "../../../public/assets/namo-gange-logo.webp";
import footerMokshaLogo from "../../../public/assets/footer-moksha-mark.png";

const principles = [
  {
    icon: "HeartHands" as const,
    title: "Dignity First",
    text: "Human dignity\nremains central.",
  },
  {
    icon: "Clipboard" as const,
    title: "Defined Roles",
    text: "Roles and expectations\nare clearly understood.",
  },
  {
    icon: "Lock" as const,
    title: "Privacy &\nAccountability",
    text: "Information is handled\nresponsibly.",
  },
  {
    icon: "People" as const,
    title: "Responsible\nRepresentation",
    text: "Partnerships are represented\nonly after approval.",
  },
];

const institutionalFlow = [
  {
    icon: "Building" as const,
    label: "NAMO GANGE\nTRUST",
  },
  {
    icon: "Lotus" as const,
    label: "MOKSHA\nSEWA",
  },
  {
    icon: "Handshake" as const,
    label: "RESPONSIBLE\nPARTNERSHIPS",
  },
  {
    icon: "HeartHands" as const,
    label: "HUMANITARIAN\nSEWA",
  },
];

function FlowArrow() {
  return (
    <div
      className="
        flex
        h-[70px]
        w-[45px]
        shrink-0
        items-center
        justify-center
      "
    >
      <span className="h-px w-[7px] bg-[#B88728]" />

      <span
        className="
          grid
          h-[29px]
          w-[29px]
          shrink-0
          place-items-center
          rounded-full
          bg-[#D59B24]
          text-[#073D31]
        "
      >
        <PartnershipIcon
          name="ArrowRight"
          className="h-[16px] w-[16px]"
        />
      </span>

      <span className="h-px w-[7px] bg-[#B88728]" />
    </div>
  );
}

export default function PartnershipResponsibility() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#FBF8F2]
        px-4
        py-[12px]
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
          bg-[#FFFCF6]
        "
      >
        {/* =====================================================
            TOP GOLD LINE
        ====================================================== */}

        <div
          className="
            flex
            items-center
            gap-[14px]
            px-[4px]
            pt-[4px]
          "
        >
          <span
            className="
              h-[2px]
              flex-1
              bg-gradient-to-r
              from-[#C98A18]
              via-[#E5BD65]
              to-[#C98A18]
            "
          />

          <PartnershipIcon
            name="Lotus"
            className="
              h-[32px]
              w-[32px]
              shrink-0
              text-[#C78818]
            "
          />

          <span
            className="
              h-[2px]
              flex-1
              bg-gradient-to-l
              from-[#C98A18]
              via-[#E5BD65]
              to-[#C98A18]
            "
          />
        </div>

        {/* =====================================================
            TOP CREAM CONTENT
        ====================================================== */}

        <div
          className="
            relative
            z-10
            px-[32px]
            pb-[42px]
            pt-[16px]
            sm:px-[44px]
            lg:px-[76px]
          "
        >
          {/* LABEL */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-[14px]
            "
          >
            <span className="h-px w-[44px] bg-[#D2A056]" />

            <p
              className="
                text-[16px]
                font-bold
                uppercase
                tracking-[0.08em]
                text-[#B67A1D]
              "
            >
              Trust &amp; Responsibility
            </p>

            <span className="h-px w-[44px] bg-[#D2A056]" />
          </div>

          {/* SMALL DOT DIVIDER */}

          <div
            className="
              mt-[8px]
              flex
              items-center
              justify-center
              gap-[8px]
            "
          >
            <span className="h-px w-[31px] bg-[#E0C489]" />

            <span
              className="
                h-[6px]
                w-[6px]
                rounded-full
                bg-[#CB8D20]
              "
            />

            <span className="h-px w-[31px] bg-[#E0C489]" />
          </div>

          {/* HEADING */}

          <h2
            className="
              mt-[9px]
              text-center
              text-[34px]
              font-medium
              leading-[1.04]
              tracking-[-0.02em]
              text-[#064335]
              sm:text-[40px]
              lg:text-[45px]
            "
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            Partnerships Built on Purpose. Guided by Responsibility
            <span className="text-[#B97A15]">.</span>
          </h2>

          {/* LOTUS DIVIDER */}

          <div
            className="
              mt-[10px]
              flex
              items-center
              justify-center
              gap-[9px]
              text-[#C99436]
            "
          >
            <span className="h-px w-[34px] bg-[#D7B574]" />

            <PartnershipIcon
              name="Lotus"
              className="h-[20px] w-[20px]"
            />

            <span className="h-px w-[34px] bg-[#D7B574]" />
          </div>

          {/* PRINCIPLES */}

          <div
            className="
              mt-[16px]
              grid
              grid-cols-1
              gap-y-[16px]
              sm:grid-cols-2
              xl:grid-cols-4
              xl:gap-y-0
            "
          >
            {principles.map((item, index) => (
              <div
                key={item.title}
                className={`
                  relative
                  flex
                  min-w-0
                  items-center
                  gap-[15px]
                  px-[18px]

                  ${
                    index
                      ? "xl:border-l xl:border-[#DECDAE]"
                      : ""
                  }
                `}
              >
                <span
                  className="
                    grid
                    h-[78px]
                    w-[78px]
                    shrink-0
                    place-items-center
                    rounded-full
                    border-[3px]
                    border-[#D6A240]
                    bg-[#004638]
                    text-[#D5A13A]
                  "
                >
                  <PartnershipIcon
                    name={item.icon}
                    className="h-[42px] w-[42px]"
                  />
                </span>

                <div className="min-w-0 text-left">
                  <h3
                    className="
                      whitespace-pre-line
                      text-[18px]
                      font-bold
                      leading-[1.12]
                      text-[#064838]
                    "
                  >
                    {item.title}
                  </h3>

                  <span
                    className="
                      mt-[9px]
                      block
                      h-[2px]
                      w-[28px]
                      bg-[#D29C3C]
                    "
                  />

                  <p
                    className="
                      mt-[9px]
                      whitespace-pre-line
                      text-[16px]
                      font-medium
                      leading-[1.35]
                      text-[#4C5151]
                    "
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            DARK GREEN AREA
        ====================================================== */}

        <div
          className="
            relative
            overflow-visible
            bg-[#003E31]
            px-[28px]
            pb-[14px]
            pt-[48px]
            text-white
            sm:px-[36px]
            lg:px-[42px]
          "
        >
          {/* CURVED TOP */}

          <svg
            viewBox="0 0 1344 58"
            preserveAspectRatio="none"
            className="
              pointer-events-none
              absolute
              left-0
              top-[-1px]
              h-[58px]
              w-full
            "
          >
            <path
              d="
                M0 0
                H1344
                V17
                C1120 38 950 37 760 37
                C715 37 699 35 687 46
                C681 52 677 55 672 55
                C667 55 663 52 657 46
                C645 35 629 37 584 37
                C394 37 224 38 0 17
                Z
              "
              fill="#FFFCF6"
            />

            <path
              d="
                M0 17
                C224 38 394 37 584 37
                C629 37 645 35 657 46
                C663 52 667 55 672 55
                C677 55 681 52 687 46
                C699 35 715 37 760 37
                C950 37 1120 38 1344 17
              "
              fill="none"
              stroke="#D09A2F"
              strokeWidth="4"
            />
          </svg>

          {/* CENTER LOTUS */}

          <span
            className="
              absolute
              left-1/2
              top-[4px]
              z-10
              -translate-x-1/2
              text-[#D19A30]
            "
          >
            <PartnershipIcon
              name="Lotus"
              className="h-[37px] w-[37px]"
            />
          </span>

          {/* BACKGROUND DECOR */}

          <PartnershipIcon
            name="Lotus"
            className="
              pointer-events-none
              absolute
              -bottom-[5px]
              -left-[45px]
              h-[155px]
              w-[155px]
              text-[#215D4E]/20
            "
          />

          <PartnershipIcon
            name="Lotus"
            className="
              pointer-events-none
              absolute
              -bottom-[5px]
              -right-[45px]
              h-[155px]
              w-[155px]
              text-[#215D4E]/20
            "
          />

          {/* =================================================
              MAIN GRID

              IMPORTANT FIX:
              22% / 56% / 22%
          ================================================= */}

          <div
            className="
              relative
              z-10
              grid
              grid-cols-1
              items-center
                gap-[18px]

              lg:grid-cols-[22%_56%_22%]
              lg:gap-0
            "
          >
            {/* =================================================
                LEFT MOKSHA LOGO
            ================================================= */}

            <div
              className="
                flex
                min-h-[200px]
                flex-col
                items-center
                justify-center
                px-[14px]
                text-center

                lg:border-r
                lg:border-[#9D792C]
              "
            >
              <Image
                src={footerMokshaLogo}
                alt="Moksha Sewa"
                className="
                  h-auto
                  max-h-[100px]
                  w-auto
                  max-w-[205px]
                  object-contain
                "
              />

              <h3
                className="
                  mt-[8px]
                  text-[23px]
                  font-semibold
                  uppercase
                  tracking-[0.02em]
                  text-white
                "
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                }}
              >
                Moksha Sewa
              </h3>

              <div
                className="
                  mt-[5px]
                  flex
                  items-center
                  justify-center
                  gap-[6px]
                "
              >
                <span className="h-px w-[15px] bg-[#AE832C]" />

                <p
                  className="
                    whitespace-nowrap
                    text-[16px]
                    font-medium
                    italic
                    text-[#D5A13A]
                  "
                >
                  A Namo Gange Trust Initiative
                </p>

                <span className="h-px w-[15px] bg-[#AE832C]" />
              </div>
            </div>

            {/* =================================================
                CENTER CONTENT
            ================================================= */}

            <div
              className="
                min-w-0
                overflow-visible
                px-[24px]
                text-center
              "
            >
              <h3
                className="
                  text-[27px]
                  font-semibold
                  uppercase
                  tracking-[0.025em]
                  text-white
                "
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                }}
              >
                Moksha Sewa
              </h3>

              <div
                className="
                  mt-[5px]
                  flex
                  items-center
                  justify-center
                  gap-[9px]
                "
              >
                <span className="h-px w-[32px] bg-[#B88B31]" />

                <p
                  className="
                    whitespace-nowrap
                    text-[16px]
                    font-semibold
                    italic
                    text-[#D29D34]
                  "
                >
                  A Namo Gange Trust Initiative
                </p>

                <span className="h-px w-[32px] bg-[#B88B31]" />
              </div>

              <p
                className="
                  mx-auto
                  mt-[10px]
                  max-w-[590px]
                  text-[16px]
                  font-medium
                  leading-[1.45]
                  text-[#F0ECE4]
                "
              >
                Moksha Sewa operates within the institutional framework
                <br className="hidden lg:block" />
                of Namo Gange Trust, bringing responsible processes
                <br className="hidden lg:block" />
                and humanitarian service together.
              </p>

              {/* =================================================
                  FLOW — NO CUTTING
              ================================================= */}

              <div
                className="
                  mt-[12px]
                  flex
                  w-full
                  flex-nowrap
                  items-start
                  justify-center
                  overflow-visible
                "
              >
                {institutionalFlow.map((item, index) => (
                  <div
                    key={item.label}
                    className="
                      flex
                      shrink-0
                      items-start
                    "
                  >
                    <div
                      className="
                        flex
                        w-[94px]
                        shrink-0
                        flex-col
                        items-center
                        text-center
                      "
                    >
                      <span
                        className="
                          grid
                          h-[70px]
                          w-[70px]
                          place-items-center
                          rounded-full
                          border-[2px]
                          border-[#D5A13A]
                          bg-[#FFF9EE]
                          text-[#0A4A3A]
                        "
                      >
                        <PartnershipIcon
                          name={item.icon}
                          className="h-[41px] w-[41px]"
                        />
                      </span>

                      <p
                        className="
                          mt-[7px]
                          whitespace-pre-line
                          text-[16px]
                          font-medium
                          leading-[1.16]
                          text-[#EFECE4]
                        "
                      >
                        {item.label}
                      </p>
                    </div>

                    {index <
                      institutionalFlow.length - 1 && (
                      <FlowArrow />
                    )}
                  </div>
                ))}
              </div>

              {/* CTA */}

              <div
                className="
                  mt-[12px]
                  flex
                  items-center
                  justify-center
                  gap-[10px]
                "
              >
                <span
                  className="
                    hidden
                    h-px
                    w-[55px]
                    bg-[#A78539]
                    md:block
                  "
                />

                <a
                  href="#"
                  className="
                    group
                    inline-flex
                    h-[46px]
                    min-w-[310px]
                    items-center
                    justify-between
                    rounded-[5px]
                    border
                    border-[#BC8B2F]
                    bg-[#004737]
                    px-[24px]
                    text-[16px]
                    font-bold
                    uppercase
                    text-[#D8A43E]
                    transition
                    hover:bg-[#00372C]
                  "
                >
                  Know Namo Gange Trust

                  <PartnershipIcon
                    name="ArrowRight"
                    className="
                      h-[20px]
                      w-[20px]
                      transition-transform
                      group-hover:translate-x-[3px]
                    "
                  />
                </a>

                <span
                  className="
                    hidden
                    h-px
                    w-[55px]
                    bg-[#A78539]
                    md:block
                  "
                />
              </div>
            </div>

            {/* =================================================
                RIGHT NAMO GANGE LOGO
            ================================================= */}

            <div
              className="
                flex
                min-h-[250px]
                flex-col
                items-center
                justify-center
                px-[12px]
                text-center

                lg:border-l
                lg:border-[#9D792C]
              "
            >
              <Image
                src={namoGangeLogo}
                alt="Namo Gange Trust"
                className="
                  h-auto
                  max-h-[110px]
                  w-auto
                  max-w-[215px]
                  object-contain
                "
              />

              <h3
                className="
                  mt-[7px]
                  whitespace-nowrap
                  text-[21px]
                  font-semibold
                  uppercase
                  tracking-[0.01em]
                  text-white
                "
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                }}
              >
                Namo Gange Trust
              </h3>

              <p
                className="
                  mt-[6px]
                  max-w-[215px]
                  text-[16px]
                  font-medium
                  uppercase
                  leading-[1.35]
                  text-[#D29B34]
                "
              >
                A Journey to Healthy World...
              </p>
            </div>
          </div>

          {/* BOTTOM DECORATIVE LINE */}

          <div
            className="
              relative
              z-10
              mt-[10px]
              flex
              items-center
              gap-[12px]
            "
          >
            <span className="h-px flex-1 bg-[#977632]" />

            <PartnershipIcon
              name="Lotus"
              className="
                h-[20px]
                w-[20px]
                text-[#C58F2A]
              "
            />

            <span className="h-px flex-1 bg-[#977632]" />
          </div>
        </div>
      </div>
    </section>
  );
}
