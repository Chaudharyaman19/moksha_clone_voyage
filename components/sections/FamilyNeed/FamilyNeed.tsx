"use client";

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
   CARDS
========================================================= */

const supportCards = [
  {
    icon: "Shield",
    title: "Verified Support",
    text: "For eligible cases",
    color: "#1F6B28",
  },
  {
    icon: "HeartHands",
    title: "Guided Assistance",
    text: "With sensitivity\nand respect",
    color: "#D6570B",
  },
  {
    icon: "MapPin",
    title: "Local Coordination",
    text: "Across the current\nservice region",
    color: "#15569A",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function PracticalSewaSupport() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#F7F3EC]
        px-4
        py-[14px]
        sm:px-5
        lg:px-6
      "
    >
      <div className="mx-auto w-full max-w-[1344px]">

        {/* =====================================================
            MAIN PANEL
        ====================================================== */}

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
          {/* =====================================================
              FULL BACKGROUND IMAGE
          ====================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-no-repeat
            "
            style={{
              backgroundImage: "url('/assets/manish.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "76% 50%",
            }}
          />

          {/* =====================================================
              LEFT CREAM AREA + SMOOTH IMAGE BLEND

              Reference jaisa image dheere-dheere left content
              ke saath merge hoga.
          ====================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              left-0
              z-[1]
              w-[61%]
              bg-gradient-to-r
              from-[#FCF7EF]
              from-[0%]
              via-[#FCF7EF]
              via-[65%]
              to-transparent
            "
          />

          {/* EXTRA SOFT CENTER FADE */}

          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              left-[43%]
              z-[2]
              hidden
              w-[20%]
              bg-[#FCF7EF]/20
              blur-[25px]
              lg:block
            "
          />

          {/* =====================================================
              CONTENT GRID
          ====================================================== */}

          <div
            className="
              relative
              z-10
              grid
              grid-cols-1
              lg:h-[570px]
              lg:grid-cols-[46%_54%]
            "
          >
            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <div
              className="
                relative
                flex
                flex-col
                px-6
                pb-[18px]
                pt-[12px]
                sm:px-8
                lg:px-[42px]
              "
            >
              {/* LABEL */}

              <div className="flex flex-col items-center">
                <CustomIcon
                  name="Lotus"
                  className="
                    h-[34px]
                    w-[34px]
                    text-[#D1540E]
                  "
                />

                <div
                  className="
                    mt-[2px]
                    flex
                    items-center
                    justify-center
                    gap-[12px]
                  "
                >
                  <span className="h-px w-[38px] bg-[#D45B0B]" />

                  <span
                    className="
                      whitespace-nowrap
                      text-[16px]
                      font-semibold
                      uppercase
                      tracking-[0.025em]
                      text-[#1D622E]
                    "
                  >
                    Practical Sewa Support
                  </span>

                  <span className="h-px w-[38px] bg-[#D45B0B]" />
                </div>
              </div>

              {/* HEADING */}

              <h2
                className="
                  mt-[10px]
                  font-serif
                  text-[32px]
                  font-semibold
                  leading-[1.06]
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

                <span
                  className="
                    mt-[4px]
                    block
                    text-[#C75008]
                    lg:whitespace-nowrap
                  "
                >
                  We Arrange the Essentials
                </span>
              </h2>

              {/* DIVIDER */}

              <div
                className="
                  mt-[8px]
                  flex
                  items-center
                  justify-center
                  gap-[7px]
                "
              >
                <span className="h-px w-[60px] bg-gradient-to-r from-transparent to-[#D9A06C]" />

                <span className="h-[7px] w-[7px] rotate-45 border border-[#CC5B12]" />

                <span className="h-px w-[60px] bg-gradient-to-l from-transparent to-[#D9A06C]" />
              </div>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-[13px]
                  max-w-[510px]
                  text-[16px]
                  leading-[1.55]
                  text-[#35302C]
                "
              >
                During a difficult final journey, families may need more than
                arrangements—they may need guidance, coordination and someone
                willing to stand beside them.
              </p>

              {/* =================================================
                  THREE SUPPORT CARDS
              ================================================= */}

              <div
                className="
                  mt-[16px]
                  grid
                  grid-cols-1
                  gap-[13px]
                  sm:grid-cols-3
                "
              >
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
                      px-[9px]
                      py-[10px]
                      text-center
                      shadow-[0_6px_17px_rgba(66,41,20,0.05)]
                    "
                  >
                    {/* ICON */}

                    <div
                      className="
                        flex
                        h-[64px]
                        w-[64px]
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
                        className="
                          h-[55px]
                          w-[55px]
                        "
                      />
                    </div>

                    {/* TITLE */}

                    <h3
                      className="
                        mt-[3px]
                        min-h-[38px]
                        text-[16px]
                        font-semibold
                        leading-[1.2]
                      "
                      style={{
                        color: card.color,
                        fontFamily: "Georgia, 'Times New Roman', serif",
                      }}
                    >
                      {card.title}
                    </h3>

                    {/* TEXT */}

                    <p
                      className="
                        mt-[3px]
                        flex
                        min-h-[44px]
                        items-center
                        justify-center
                        whitespace-pre-line
                        text-[16px]
                        leading-[1.25]
                        text-[#36312D]
                      "
                    >
                      {card.text}
                    </p>

                    {/* BOTTOM LINE */}

                    <span
                      className="
                        mt-auto
                        h-[2px]
                        w-[32px]
                        shrink-0
                      "
                      style={{
                        backgroundColor: card.color,
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* =================================================
                  REQUEST + 24X7
              ================================================= */}

              <div
                className="
                  mt-[16px]
                  flex
                  min-h-[56px]
                  items-center
                "
              >
                {/* BUTTON */}

                <a
                  href="/request-help"
                  className="
                    group
                    inline-flex
                    h-[50px]
                    w-[270px]
                    shrink-0
                    items-center
                    justify-between
                    rounded-[10px]
                    border
                    border-[#E3540A]
                    bg-gradient-to-r
                    from-[#E85B09]
                    to-[#D94B04]
                    px-[18px]
                    text-[16px]
                    font-semibold
                    uppercase
                    text-white
                    shadow-[0_7px_16px_rgba(185,69,5,0.18)]
                    transition
                    duration-300
                    hover:-translate-y-[1px]
                  "
                >
                  <span>Request Sewa Support</span>

                  <span
                    className="
                      flex
                      h-[29px]
                      w-[29px]
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white
                    "
                  >
                    <CustomIcon
                      name="ArrowRight"
                      className="
                        h-[16px]
                        w-[16px]
                        transition-transform
                        group-hover:translate-x-[2px]
                      "
                    />
                  </span>
                </a>

                {/* DIVIDER */}

                <span
                  className="
                    mx-[18px]
                    h-[48px]
                    w-px
                    shrink-0
                    bg-[#D7C9B8]
                  "
                />

                {/* 24X7 */}

                <div
                  className="
                    flex
                    min-w-0
                    items-center
                    gap-[11px]
                  "
                >
                  <div
                    className="
                      flex
                      h-[48px]
                      w-[48px]
                      shrink-0
                      items-center
                      justify-center
                      text-[#246431]
                    "
                  >
                    <CustomIcon
                      name="Headset"
                      className="
                        h-[41px]
                        w-[41px]
                      "
                    />
                  </div>

                  <p
                    className="
                      text-[16px]
                      font-semibold
                      leading-[1.3]
                      text-[#3B3733]
                    "
                  >
                    We are available 24x7
                    <br />
                    to stand beside you.
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT EMPTY GRID SIDE

                Image already full panel background hai.
            ================================================= */}

            <div className="hidden lg:block" />
          </div>
        </div>

        {/* =====================================================
            BOTTOM SUPPORT BAND
        ====================================================== */}

        <div
          className="
            relative
            mt-[7px]
            overflow-hidden
            rounded-[12px]
            border
            border-[#E6DCCE]
            bg-[#F8F5ED]
            shadow-[0_5px_13px_rgba(73,47,25,0.04)]
          "
        >
          <div
            className="
              relative
              grid
              min-h-[112px]
              grid-cols-1
              lg:grid-cols-2
            "
          >
            {/* =================================================
                LEFT
            ================================================= */}

            <div
              className="
                relative
                z-10
                flex
                items-center
                gap-[23px]
                px-[44px]
                py-[14px]
              "
            >
              <div
                className="
                  flex
                  h-[82px]
                  w-[82px]
                  shrink-0
                  items-center
                  justify-center
                  text-[#205D2A]
                "
              >
                <CustomIcon
                  name="LotusHands"
                  className="
                    h-[72px]
                    w-[72px]
                  "
                />
              </div>

              <div>
                <h3
                  className="
                    text-[18px]
                    font-semibold
                    leading-[1.32]
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
                    leading-[1.25]
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

            {/* CENTER DIVIDER */}

            <span
              className="
                pointer-events-none
                absolute
                bottom-[18px]
                left-1/2
                top-[18px]
                hidden
                w-px
                -translate-x-1/2
                bg-[#D3C7B5]
                lg:block
              "
            />

            {/* =================================================
                RIGHT
            ================================================= */}

            <div
              className="
                relative
                z-10
                flex
                items-center
                gap-[23px]
                border-t
                border-[#D8CDBD]
                px-[44px]
                py-[14px]
                lg:border-t-0
              "
            >
              <div
                className="
                  flex
                  h-[74px]
                  w-[74px]
                  shrink-0
                  items-center
                  justify-center
                  text-[#28602D]
                "
              >
                <CustomIcon
                  name="MapPin"
                  className="
                    h-[64px]
                    w-[64px]
                  "
                />
              </div>

              <div className="relative z-10">
                <p
                  className="
                    text-[16px]
                    leading-[1.32]
                    text-[#385039]
                  "
                >
                  Currently serving with care in
                </p>

                <h3
                  className="
                    mt-[3px]
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

              {/* FAINT LOTUS */}

              <CustomIcon
                name="Lotus"
                className="
                  pointer-events-none
                  absolute
                  bottom-[-20px]
                  right-[25px]
                  h-[110px]
                  w-[110px]
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