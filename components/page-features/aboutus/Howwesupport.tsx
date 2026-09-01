"use client";

import type { ReactElement } from "react";
import { imageOrFallback, itemOrFallback, textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";

/* =========================================================
   TYPES
========================================================= */

interface IconProps {
  name: string;
  className?: string;
}

interface SupportCard {
  number: string;
  icon: string;
  title: string;
  description: string;
  image: string;
  iconBg: string;
  tint: string;
  imagePosition: string;
}

/* =========================================================
   CUSTOM ICONS
========================================================= */

const CustomIcon = ({
  name,
  className = "h-6 w-6",
}: IconProps) => {
  const icons: Record<string, ReactElement> = {
    DocumentCheck: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 6h24l9 9v42H17Z" />
        <path d="M41 6v10h9" />
        <path d="M24 25h18" />
        <path d="M24 33h14" />
        <path d="M24 41h9" />

        <circle cx="46" cy="45" r="11" />
        <path d="m41 45 4 4 7-9" />
      </svg>
    ),

    People: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="32" cy="18" r="7" />
        <circle cx="17" cy="24" r="5.5" />
        <circle cx="47" cy="24" r="5.5" />

        <path d="M21 51c1-11 4.5-17 11-17s10 6 11 17" />
        <path d="M7 49c1-8 4-13 10-13 3 0 5.5 1 7.5 3" />
        <path d="M57 49c-1-8-4-13-10-13-3 0-5.5 1-7.5 3" />
      </svg>
    ),

    HeartHands: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M24 15c0-4 4.3-6 8-2 3.7-4 8-2 8 2 0 4.5-4.5 8-8 11-3.5-3-8-6.5-8-11Z" />

        <path d="M7 39c6-1 10 1 15 6l7 8" />
        <path d="M57 39c-6-1-10 1-15 6l-7 8" />

        <path d="M7 37v17" />
        <path d="M57 37v17" />

        <path d="M18 35c4-4 8-5 14-5s10 1 14 5" />
      </svg>
    ),

    Info: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="32" cy="32" r="22" />
        <path d="M32 28v17" />

        <circle
          cx="32"
          cy="20"
          r="1.7"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    ),

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
  };

  return icons[name] ?? null;
};

/* =========================================================
   DATA
========================================================= */

const supportCards: SupportCard[] = [
  {
    number: "01",
    icon: "DocumentCheck",
    title: "UNCLAIMED &\nAUTHORISED CASES",

    description:
      "Support for authorised cases after\napplicable procedures, permissions\nand formalities.",

    image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165060/moksha-sewa/assets/about-reference/story-ghat-temple.png",
    iconBg: "#004938",
    tint: "#EFF5ED",
    imagePosition: "72% center",
  },

  {
    number: "02",
    icon: "People",
    title: "PEOPLE WITHOUT\nFAMILY SUPPORT",

    description:
      "Compassionate assistance for\npeople who have no family or\nsupport system available to stand\nbeside them.",

    image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165059/moksha-sewa/assets/about-reference/story-evening-ghat.png",
    iconBg: "#064E7E",
    tint: "#EAF5FC",
    imagePosition: "80% center",
  },

  {
    number: "03",
    icon: "HeartHands",
    title: "VERIFIED FAMILIES FACING\nFINANCIAL HARDSHIP",

    description:
      "Case-based assistance for families\nwho need help with essential\nfinal-rites arrangements.",

    image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165001/moksha-sewa/assets/about-optimized/family-support.webp",
    iconBg: "#A35B02",
    tint: "#FFF3E4",
    imagePosition: "82% center",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function Howwesupport() {
  const section = useWebsiteSection("about-how-support");
  const activeItems = section?.items?.length ? section.items : supportCards.map(c => ({ value: c.number, title: c.title, description: c.description, image: c.image }));
  const cards = activeItems.map((item, index) => {
    const itemObj = item as Record<string, any>;
    const fallback = supportCards[index % supportCards.length];
    return {
      ...fallback,
      number: itemObj.value || fallback.number,
      title: itemObj.title || fallback.title,
      description: itemObj.description || fallback.description,
      image: imageOrFallback(itemObj.image, fallback.image),
    };
  });

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#FBF8F2]

        px-4
        pb-[22px]
        pt-[32px]

        sm:px-5
        lg:px-6
      "
    >
      {/* =====================================================
          BACKGROUND TEXTURE
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.38]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(165,118,62,0.05) 0 1px, transparent 1.1px)",
          backgroundSize: "23px 23px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1344px]">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="
            mb-[18px]
            flex
            items-center
            justify-center
            gap-[14px]
            sm:gap-[26px]
          "
        >
          <span
            className="
              h-px
              hidden
              w-[80px]
              sm:block
              lg:w-[165px]

              bg-gradient-to-r
              from-transparent
              via-[#D4B675]
              to-[#D4B675]
            "
          />

          <h2
            className="
              text-center

              font-sans
              text-[24px]
              font-semibold
              uppercase
              leading-[1.05]

              text-[#004E3A]

              sm:text-[30px]
            "
          >
            {textOrFallback(section?.title, "Who We Support", 60)}
          </h2>

          <span
            className="
              h-px
              hidden
              w-[80px]
              sm:block
              lg:w-[165px]

              bg-gradient-to-l
              from-transparent
              via-[#D4B675]
              to-[#D4B675]
            "
          />
        </div>

        {/* =====================================================
            SUPPORT CARDS
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-[17px]

            lg:grid-cols-3
          "
        >
          {cards.map((card) => (
            <article
              key={card.number}
              className="
                relative

                min-h-[310px]

                overflow-hidden

                rounded-[15px]

                border
                border-[#E6DED2]

                shadow-[0_5px_15px_rgba(73,48,24,0.055)]
              "
              style={{
                backgroundColor: card.tint,
              }}
            >
              {/* ===============================================
                  BACKGROUND IMAGE
              =============================================== */}

              <div
                className="
                  pointer-events-none

                  absolute
                  inset-0

                  bg-cover
                  bg-no-repeat
                "
                style={{
                  backgroundImage: `url('${card.image}')`,
                  backgroundPosition: card.imagePosition,
                }}
              />

              {/* ===============================================
                  LEFT FADE
              =============================================== */}

              <div
                className="
                  pointer-events-none

                  absolute
                  inset-0
                "
                style={{
                  background: `linear-gradient(
                    90deg,
                    ${card.tint} 0%,
                    ${card.tint} 46%,
                    ${card.tint}F7 57%,
                    ${card.tint}DC 66%,
                    ${card.tint}98 75%,
                    transparent 100%
                  )`,
                }}
              />

              {/* ===============================================
                  CONTENT
              =============================================== */}

              <div
                className="
                  relative
                  z-10

                  flex
                  h-full
                  flex-col

                  px-[18px]
                  pb-[18px]
                  pt-[20px]
                  sm:px-[24px]
                  sm:pt-[24px]
                "
              >
                {/* =============================================
                    TOP ROW
                ============================================= */}

                <div className="flex items-start">
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

                      text-white

                      shadow-[0_5px_14px_rgba(0,55,40,0.12)]
                    "
                    style={{
                      backgroundColor: card.iconBg,
                    }}
                  >
                    <CustomIcon
                      name={card.icon}
                      className="
                        h-[54px]
                        w-[54px]
                        text-white
                      "
                    />
                  </div>

                  {/* NUMBER + TITLE */}

                  <div
                    className="
                      ml-[24px]

                      min-w-0
                      flex-1

                      text-left
                    "
                  >
                    <div
                      className="
                        text-[23px]
                        font-bold
                        leading-none

                        text-[#B67613]
                      "
                    >
                      {card.number}
                    </div>

                    <h3
                      className="
                        mt-[7px]

                        whitespace-pre-line

                        text-left
                        text-[20px]
                        font-bold
                        uppercase

                        leading-[1.18]
                        tracking-[0.005em]

                        text-[#004E3A]

                        lg:text-[21px]
                      "
                    >
                      {card.title}
                    </h3>

                    <span
                      className="
                        mt-[13px]
                        block

                        h-[2px]
                        w-[52px]

                        bg-[#D2A34B]
                      "
                    />
                  </div>
                </div>

                {/* =============================================
                    DESCRIPTION

                    Explicit breaks +
                    limited left width.
                ============================================= */}

                <p
                  className="
                    mt-[18px]

                    w-full
                    max-w-[78%]

                    whitespace-pre-line

                    text-left
                    text-[17px]
                    font-semibold

                    leading-[1.43]
                    tracking-[-0.008em]

                    text-[#343B3C]
                    sm:text-[19px]
                  "
                >
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* =====================================================
            IMPORTANT NOTE
        ====================================================== */}

        <div
          className="
            relative

            mt-[34px]

            overflow-hidden

            rounded-[15px]

            bg-[#004B3C]

            shadow-[0_7px_16px_rgba(0,62,46,0.14)]
          "
        >
          {/* RIGHT LOTUS */}

          <CustomIcon
            name="Lotus"
            className="
              pointer-events-none

              absolute
              -bottom-[28px]
              right-[30px]

              h-[100px]
              w-[100px]

              text-[#C1972D]/20
            "
          />

          <div
            className="
              relative
              z-10

              flex
              min-h-[88px]
              flex-col
              items-center

              px-[25px]
              py-[14px]

              lg:flex-row
            "
          >
            {/* INFO ICON */}

            <div
              className="
                flex
                h-[53px]
                w-[53px]
                shrink-0

                items-center
                justify-center

                text-[#D6A743]
              "
            >
              <CustomIcon
                name="Info"
                className="
                  h-[47px]
                  w-[47px]
                "
              />
            </div>

            {/* DIVIDER */}

            <span
              className="
                mx-[24px]

                hidden
                h-[48px]
                w-px
                shrink-0

                bg-[#C7A15C]/75

                lg:block
              "
            />

            {/* LABEL */}

            <div
              className="
                mt-[8px]
                shrink-0

                text-[17px]
                font-bold
                uppercase
                tracking-[0.27em]

                text-[#D8A747]

                lg:mt-0
              "
            >
              {textOrFallback(section?.legalNotice, "Important Note", 60)}
            </div>

            {/* DIVIDER */}

            <span
              className="
                mx-[26px]

                hidden
                h-[48px]
                w-px
                shrink-0

                bg-[#C7A15C]/75

                lg:block
              "
            />

            {/* NOTE CONTENT */}

            <p
              className="
                mt-[8px]
                flex-1

                text-center
                text-[17px]
                font-medium
                leading-[1.5]

                text-[#F3EEE4]

                lg:mt-0
                lg:text-left
                lg:text-[18px]
              "
            >
              {textOrFallback(section?.bottomStatement, "Support is case-based and subject to applicable verification, eligibility, required formalities and available resources.", 600)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
