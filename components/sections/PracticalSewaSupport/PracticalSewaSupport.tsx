import Image from "next/image";
import type { ReactElement } from "react";

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
    /* LOTUS */
    Lotus: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
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

    /* SHIELD */
    Shield: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M32 8 49 14v13c0 12-6.8 20-17 25-10.2-5-17-13-17-25V14L32 8Z" />
        <path d="m24 30 5 5 11-12" />
      </svg>
    ),

    /* HANDS + HEART */
    HeartHands: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M26 17c0-4 3.8-5.7 6-2.4 2.2-3.3 6-1.6 6 2.4 0 3.7-3.5 6.5-6 8.7-2.5-2.2-6-5-6-8.7Z" />

        <path d="M9 39c5-1 9 1 13 5l6 7" />
        <path d="M55 39c-5-1-9 1-13 5l-6 7" />

        <path d="M9 37v15" />
        <path d="M55 37v15" />

        <path d="M20 34c3-3 7-4.5 12-4.5s9 1.5 12 4.5" />
      </svg>
    ),

    /* MAP PIN */
    MapPin: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M32 55S48 40 48 25a16 16 0 1 0-32 0c0 15 16 30 16 30Z" />
        <circle cx="32" cy="25" r="5.5" />
      </svg>
    ),

    /* HEADSET */
    Headset: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 34a19 19 0 0 1 38 0" />
        <rect x="11" y="33" width="9" height="16" rx="4.5" />
        <rect x="44" y="33" width="9" height="16" rx="4.5" />
        <path d="M44 48c0 4-3 7-7 7h-5" />
      </svg>
    ),

    /* LOTUS WITH SUPPORTING HANDS */
    LotusHands: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M32 28c-7-5-10-11-7-17 4 2 7 5 7 10 1-5 4-8 8-10 3 6 0 12-8 17Z" />

        <path d="M23 29c-6-2-10-6-11-12 6 0 10 2 14 7" />
        <path d="M41 29c6-2 10-6 11-12-6 0-10 2-14 7" />

        <path d="M10 47V35c6 0 10 2 14 7l8 10" />
        <path d="M54 47V35c-6 0-10 2-14 7l-8 10" />

        <path d="M10 48h9" />
        <path d="M45 48h9" />
      </svg>
    ),

    /* ARROW */
    ArrowRight: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
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
   SUPPORT CARDS
========================================================= */

const supportCards = [
  {
    icon: "Shield",
    title: "Verified Support",
    text: "For eligible cases",
    color: "#1D6A28",
  },

  {
    icon: "HeartHands",
    title: "Guided Assistance",
    text: "With sensitivity and respect",
    color: "#D65D0B",
  },

  {
    icon: "MapPin",
    title: "Local Coordination",
    text: "Across the current service region",
    color: "#15559B",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function PracticalSewaSupport() {
  return (
    <section className="w-full bg-[#F7F3EC] px-4 py-4 lg:px-6">

      <div className="mx-auto w-full max-w-[1344px]">

        {/* =================================================
            TOP MAIN PANEL
        ================================================= */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[14px]
            border
            border-[#E8DED0]
            bg-[#FCF7EF]
            shadow-[0_7px_24px_rgba(71,44,22,0.07)]
          "
        >

          <div className="grid lg:h-[570px] lg:grid-cols-[46%_54%]">

            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <div
              className="
                relative
                z-20
                flex
                flex-col
                bg-[#FCF7EF]
                px-6
                pb-5
                pt-4
                sm:px-8
                lg:px-[42px]
              "
            >

              {/* =============================================
                  TOP LOTUS + LABEL
              ============================================= */}

              <div className="mb-[8px] flex flex-col items-center">

                <CustomIcon
                  name="Lotus"
                  className="mb-[3px] h-[31px] w-[31px] text-[#CF5B10]"
                />

                <div className="flex items-center justify-center gap-[12px]">

                  <span className="h-px w-[35px] bg-[#D45B0B]" />

                  <span className="whitespace-nowrap text-[16px] font-bold uppercase tracking-[0.025em] text-[#1E602C]">
                    Practical Sewa Support
                  </span>

                  <span className="h-px w-[35px] bg-[#D45B0B]" />

                </div>

              </div>

              {/* =============================================
                  HEADING - EXACT 2 LINES
              ============================================= */}

              <h2
                className="
                  text-[33px]
                  font-semibold
                  leading-[1.08]
                  text-[#145728]
                  sm:text-[35px]
                  lg:text-[37px]
                "
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                }}
              >
                <span className="block lg:whitespace-nowrap">
                  When a Family Needs Help,
                </span>

                <span className="mt-[4px] block text-[#C7510A] lg:whitespace-nowrap">
                  We Arrange the Essentials
                </span>
              </h2>

              {/* =============================================
                  SMALL DECORATION
              ============================================= */}

              <div className="mt-[8px] flex items-center justify-center gap-[8px]">

                <span className="h-px w-[65px] bg-gradient-to-r from-transparent to-[#D69A65]" />

                <span className="h-[7px] w-[7px] rotate-45 bg-[#C65D13]" />

                <span className="h-px w-[65px] bg-gradient-to-l from-transparent to-[#D69A65]" />

              </div>

              {/* =============================================
                  DESCRIPTION
              ============================================= */}

              <p
                className="
                  mt-[12px]
                  max-w-[505px]
                  text-[16px]
                  leading-[1.52]
                  text-[#332E2B]
                "
              >
                During a difficult final journey, families may need more than
                arrangements—they may need guidance, coordination and someone
                willing to stand beside them.
              </p>

              {/* =============================================
                  3 CARDS — SAME ROW / COMPACT
              ============================================= */}

              <div className="mt-[14px] grid grid-cols-3 gap-[13px]">

                {supportCards.map((card) => (
                  <div
                    key={card.title}
                    className="
                      flex
                      h-[188px]
                      min-w-0
                      flex-col
                      items-center
                      rounded-[13px]
                      border
                      border-[#E7DED2]
                      bg-white
                      px-[10px]
                      py-[13px]
                      text-center
                      shadow-[0_6px_17px_rgba(66,41,20,0.05)]
                    "
                  >

                    {/* ICON */}

                    <div
                      className="
                        flex
                        h-[54px]
                        w-[54px]
                        shrink-0
                        items-center
                        justify-center
                      "
                      style={{
                        color: card.color,
                      }}
                    >
                      <CustomIcon
                        name={card.icon}
                        className="h-[46px] w-[46px]"
                      />
                    </div>

                    {/* TITLE */}

                    <h3
                      className="
                        mt-[7px]
                        min-h-[40px]
                        text-[16px]
                        font-bold
                        leading-[1.2]
                      "
                      style={{
                        color: card.color,
                      }}
                    >
                      {card.title}
                    </h3>

                    {/* TEXT */}

                    <p
                      className="
                        mt-[3px]
                        flex
                        min-h-[48px]
                        items-center
                        justify-center
                        text-[16px]
                        leading-[1.28]
                        text-[#37312D]
                      "
                    >
                      {card.text}
                    </p>

                    {/* BOTTOM LINE */}

                    <span
                      className="
                        mt-auto
                        h-[2px]
                        w-[31px]
                        shrink-0
                      "
                      style={{
                        backgroundColor: card.color,
                      }}
                    />

                  </div>
                ))}

              </div>

              {/* =============================================
                  BUTTON + HEADSET ROW
              ============================================= */}

              <div
                className="
                  mt-[14px]
                  flex
                  h-[56px]
                  items-center
                "
              >

                <a
                  href="/request-help"
                  className="
                    inline-flex
                    h-[50px]
                    w-[270px]
                    shrink-0
                    items-center
                    justify-between
                    rounded-[10px]
                    bg-gradient-to-r
                    from-[#E85A08]
                    to-[#D44D06]
                    px-[18px]
                    text-[16px]
                    font-bold
                    uppercase
                    text-white
                    shadow-[0_7px_16px_rgba(185,69,5,0.18)]
                    transition
                    hover:-translate-y-[1px]
                  "
                >
                  <span>
                    Request Sewa Support
                  </span>

                  <span
                    className="
                      flex
                      h-[25px]
                      w-[25px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white
                    "
                  >
                    <CustomIcon
                      name="ArrowRight"
                      className="h-[13px] w-[13px]"
                    />
                  </span>

                </a>

                {/* DIVIDER */}

                <span className="mx-[18px] h-[46px] w-px shrink-0 bg-[#D6C9BB]" />

                {/* HEADSET */}

                <div className="flex min-w-0 items-center gap-[10px]">

                  <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center text-[#256331]">
                    <CustomIcon
                      name="Headset"
                      className="h-[35px] w-[35px]"
                    />
                  </div>

                  <p className="text-[16px] font-semibold leading-[1.25] text-[#3D3732]">
                    We are available 24x7
                    <br />
                    to stand beside you.
                  </p>

                </div>

              </div>

            </div>

            {/* =================================================
                RIGHT IMAGE
            ================================================= */}

            <div className="relative min-h-[450px] lg:h-[570px]">

              <Image
                src="/assets/chatgpt.png"
                alt="Moksha Sewa family support"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 54vw"
                className="object-cover object-center"
              />

              {/* VERY LIGHT JOIN — REFERENCE JAISA */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  left-0
                  w-[60px]
                  bg-gradient-to-r
                  from-[#FCF7EF]/35
                  to-transparent
                "
              />

            </div>

          </div>

        </div>

        {/* =================================================
            BOTTOM SUPPORT BAND
        ================================================= */}

        <div
          className="
            mt-[7px]
            overflow-hidden
            rounded-[12px]
            border
            border-[#E6DCCE]
            bg-[#F8F5ED]
            shadow-[0_5px_13px_rgba(73,47,25,0.04)]
          "
        >

          <div className="grid min-h-[100px] grid-cols-1 lg:grid-cols-2">

            {/* =============================================
                LEFT
            ============================================= */}

            <div
              className="
                flex
                items-center
                gap-[22px]
                px-[44px]
                py-[13px]
              "
            >

              <div
                className="
                  flex
                  h-[68px]
                  w-[68px]
                  shrink-0
                  items-center
                  justify-center
                  text-[#205D2A]
                "
              >
                <CustomIcon
                  name="LotusHands"
                  className="h-[60px] w-[60px]"
                />
              </div>

              <div>

                <h3
                  className="
                    text-[18px]
                    font-semibold
                    leading-[1.3]
                    text-[#24562A]
                  "
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                  }}
                >
                  We are here to support with care,
                  <br />
                  respect and compassion.
                </h3>

                <p
                  className="
                    mt-[3px]
                    text-[16px]
                    font-semibold
                    text-[#D3580C]
                  "
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                  }}
                >
                  You are not alone. We are with you.
                </p>

              </div>

            </div>

            {/* =============================================
                RIGHT
            ============================================= */}

            <div
              className="
                relative
                flex
                items-center
                gap-[22px]
                border-t
                border-[#D8CDBD]
                px-[44px]
                py-[13px]
                lg:border-l
                lg:border-t-0
              "
            >

              <div
                className="
                  flex
                  h-[60px]
                  w-[60px]
                  shrink-0
                  items-center
                  justify-center
                  text-[#28602D]
                "
              >
                <CustomIcon
                  name="MapPin"
                  className="h-[54px] w-[54px]"
                />
              </div>

              <div className="relative z-10">

                <p className="text-[16px] leading-[1.3] text-[#385039]">
                  Currently serving with care in
                </p>

                <h3
                  className="
                    mt-[2px]
                    text-[22px]
                    font-semibold
                    leading-tight
                    text-[#245524]
                  "
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                  }}
                >
                  Delhi • Ghaziabad • Noida
                </h3>

              </div>

              {/* LOTUS WATERMARK */}

              <CustomIcon
                name="Lotus"
                className="
                  pointer-events-none
                  absolute
                  bottom-[-12px]
                  right-[24px]
                  h-[90px]
                  w-[90px]
                  text-[#D9C794]/20
                "
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}