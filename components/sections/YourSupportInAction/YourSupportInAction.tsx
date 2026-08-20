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
    /* =====================================================
       VAN / TRANSPORT
    ====================================================== */
    Van: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 21h31v24H10z" />
        <path d="M41 29h8l6 8v8H41z" />

        <circle cx="21" cy="48" r="4" />
        <circle cx="48" cy="48" r="4" />

        <path d="M15 28h17v10H15z" />
        <path d="M46 33h5" />
      </svg>
    ),

    /* =====================================================
       FIRE
    ====================================================== */
    Fire: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M32 7c8 9 12 17 12 25a12 12 0 0 1-24 0c0-7 3-13 8-19 0 7 3 11 7 14 1-7 0-13-3-20Z" />
        <path d="M32 28c4 5 5 8 5 11a5 5 0 1 1-10 0c0-3 1-6 5-11Z" />
      </svg>
    ),

    /* =====================================================
       DIYA
    ====================================================== */
    Diya: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 39c7 0 13-2 18-7 5 5 11 7 18 7" />
        <path d="M14 39h36" />
        <path d="M22 45h20" />

        <path d="M32 11c5 6 6 10 6 13a6 6 0 0 1-12 0c0-3 1-7 6-13Z" />
        <path d="M32 18c2 3 2.5 5 2.5 6.5a2.5 2.5 0 0 1-5 0c0-1.5.5-3.5 2.5-6.5Z" />
      </svg>
    ),

    /* =====================================================
       PRIEST
    ====================================================== */
    Priest: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="32" cy="20" r="8" />

        <path d="M19 52c1-12 5-18 13-18s12 6 13 18" />

        <path d="M26 13c2-2 4-3 6-3s4 1 6 3" />

        <path d="M27 36 32 43l5-7" />

        <path d="M23 52v-7" />
        <path d="M41 52v-7" />
      </svg>
    ),

    /* =====================================================
       HEART HANDS
    ====================================================== */
    HeartHands: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M24 16c0-4 4.5-5.8 8-2 3.5-3.8 8-2 8 2 0 4.2-4.5 7.3-8 10.4-3.5-3.1-8-6.2-8-10.4Z" />

        <path d="M9 39c5-1 9.5 1 13.5 5.5L29 52" />
        <path d="M55 39c-5-1-9.5 1-13.5 5.5L35 52" />

        <path d="M9 37v16" />
        <path d="M55 37v16" />

        <path d="M20 33c3.5-3 7.5-4.5 12-4.5S40.5 30 44 33" />
      </svg>
    ),

    /* =====================================================
       LOTUS
    ====================================================== */
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

    /* =====================================================
       ARROW
    ====================================================== */
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
   DATA
========================================================= */

const cards = [
  {
    icon: "Van",
    title: "Final Journey\nTransport",
    text: "Safe and respectful transport of the departed to the cremation facility.",
    image: "/assets/how-we-help/five.png",
  },

  {
    icon: "Fire",
    title: "Cremation\nCoordination",
    text: "Coordinating with crematoriums and ensuring a smooth cremation process.",
    image: "/assets/how-we-help/four.png",
  },

  {
    icon: "Diya",
    title: "Ritual\nEssentials",
    text: "Providing essential items required for the final rites and rituals.",
    image: "/assets/about-optimized/samagri.webp",
  },

  {
    icon: "Priest",
    title: "Priest & Ritual\nGuidance",
    text: "Arranging experienced priests who guide and conduct the final rites with respect.",
    image: "/assets/about-optimized/pandit-ji.webp",
  },

  {
    icon: "HeartHands",
    title: "On-Ground\nSupport",
    text: "Our team stands beside the family, providing support and care at every step.",
    image: "/assets/about-optimized/family-support.webp",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function SupportInAction() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#FCF8F0]
        px-4
        py-[18px]
        sm:px-5
        lg:px-6
        lg:py-[22px]
      "
    >
      {/* =====================================================
          SUBTLE BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-40
        "
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(152,104,45,0.06) 0 1px, transparent 1.15px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* =====================================================
          WIDTH
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1344px]">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <header
          className="
            mx-auto
            mb-[20px]
            max-w-[1120px]
            text-center
          "
        >
          {/* LABEL */}

          <div
            className="
              mb-[5px]
              flex
              items-center
              justify-center
              gap-[10px]
            "
          >
            <span className="relative h-px w-[52px] bg-[#B47A1F]">
              <span
                className="
                  absolute
                  -right-[3px]
                  -top-[2px]
                  h-[5px]
                  w-[5px]
                  rounded-full
                  bg-[#B47A1F]
                "
              />
            </span>

            <span
              className="
                font-sans
                text-[16px]
                font-semibold
                uppercase
                text-[#A26B12]
              "
            >
              Your Support In Action
            </span>

            <span className="relative h-px w-[52px] bg-[#B47A1F]">
              <span
                className="
                  absolute
                  -left-[3px]
                  -top-[2px]
                  h-[5px]
                  w-[5px]
                  rounded-full
                  bg-[#B47A1F]
                "
              />
            </span>
          </div>

          {/* HEADING */}

          <h2
            className="
              font-sans
              text-[24px]
              font-semibold
              leading-[1.05]
              text-[#06452F]
              sm:text-[30px]
            "
          >
            Helping Complete a Final Journey With Dignity
          </h2>

          {/* FLOWER DIVIDER */}

          <div
            className="
              mx-auto
              mt-[9px]
              flex
              max-w-[190px]
              items-center
              justify-center
              gap-[8px]
            "
          >
            <span
              className="
                h-px
                flex-1
                bg-gradient-to-r
                from-transparent
                to-[#BB8234]
              "
            />

            <CustomIcon
              name="Lotus"
              className="
                h-[24px]
                w-[24px]
                text-[#B37A1B]
              "
            />

            <span
              className="
                h-px
                flex-1
                bg-gradient-to-l
                from-transparent
                to-[#BB8234]
              "
            />
          </div>
        </header>

        {/* =====================================================
            5 CARDS
        ====================================================== */}

        <div
          className="
            relative
            grid
            grid-cols-1
            gap-[14px]
            sm:grid-cols-2
            lg:grid-cols-5
          "
        >
          {cards.map((card, index) => (
            <div
              key={card.title}
              className="relative"
            >
              {/* =================================================
                  CARD
              ================================================== */}

              <article
                className="
                  relative
                  flex
                  h-[365px]
                  flex-col
                  overflow-hidden
                  rounded-[15px]
                  border
                  border-[#E2D8C9]
                  bg-[#FFFDF9]
                  shadow-[0_7px_18px_rgba(64,43,20,0.09)]
                "
              >
                {/* IMAGE */}

                <div
                  className="
                    relative
                    h-[190px]
                    shrink-0
                    overflow-hidden
                  "
                >
                  <Image
                    src={card.image}
                    alt={card.title.replace("\n", " ")}
                    fill
                    quality={95}
                    sizes="
                      (max-width:640px) 100vw,
                      (max-width:1024px) 50vw,
                      20vw
                    "
                    className="
                      object-cover
                      object-center
                    "
                  />
                </div>

                {/* =================================================
                    ICON CIRCLE — IMAGE/CONTENT JOIN
                ================================================== */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-[162px]
                    z-20

                    flex
                    h-[58px]
                    w-[58px]

                    -translate-x-1/2

                    items-center
                    justify-center

                    rounded-full

                    border-[3px]
                    border-[#D59A27]

                    bg-[#00533A]

                    text-[#D5A52D]

                    shadow-[0_4px_10px_rgba(0,67,46,0.20)]
                  "
                >
                  <CustomIcon
                    name={card.icon}
                    className="
                      h-[34px]
                      w-[34px]
                    "
                  />
                </div>

                {/* =================================================
                    CONTENT
                ================================================== */}

                <div
                  className="
                    flex
                    flex-1
                    flex-col
                    items-center

                    px-[14px]
                    pb-[14px]
                    pt-[38px]

                    text-center
                  "
                >
                  {/* TITLE */}

                  <h3
                    className="
                      whitespace-pre-line

                      font-serif

                      text-[20px]
                      font-semibold

                      leading-[1.03]

                      text-[#123E30]
                    "
                  >
                    {card.title}
                  </h3>

                  {/* GOLD LINE */}

                  <span
                    className="
                      mt-[6px]

                      h-[2px]
                      w-[32px]

                      bg-[#C8922C]
                    "
                  />

                  {/* DESCRIPTION */}

                  <p
                    className="
                      mt-[8px]

                      max-w-[220px]

                      text-[16px]

                      leading-[1.35]

                      text-[#3C4956]
                    "
                  >
                    {card.text}
                  </p>
                </div>
              </article>

              {/* =================================================
                  ARROW CONNECTOR
              ================================================== */}

              {index < cards.length - 1 && (
                <div
                  className="
                    absolute

                    -right-[30px]
                    top-[165px]

                    z-30

                    hidden

                    h-[50px]
                    w-[50px]

                    items-center
                    justify-center

                    rounded-full

                    border-[3px]
                    border-[#D39A2B]

                    bg-[#00513A]

                    text-[#DBA42A]

                    shadow-[0_4px_10px_rgba(0,65,44,0.18)]

                    lg:flex
                  "
                >
                  <CustomIcon
                    name="ArrowRight"
                    className="
                      h-[24px]
                      w-[24px]
                    "
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* =====================================================
            STATEMENT
        ====================================================== */}

        <div
          className="
            mx-auto
            mt-[19px]

            flex
            max-w-[1220px]

            items-center
            justify-center

            gap-[20px]

            text-center
          "
        >
          <span
            className="
              hidden
              h-px
              w-[120px]
              bg-gradient-to-r
              from-transparent
              to-[#B68137]
              sm:block
            "
          />

          <p
            className="
              text-[16px]
              leading-[1.35]
              text-[#40505D]
              sm:text-[17px]
            "
          >
            Every contribution strengthens Moksha Sewa&apos;s ability to support
            verified humanitarian cases,{" "}
            <span className="font-semibold text-[#A66D1D]">
              subject to need and availability.
            </span>
          </p>

          <span
            className="
              hidden
              h-px
              w-[120px]
              bg-gradient-to-l
              from-transparent
              to-[#B68137]
              sm:block
            "
          />
        </div>

        {/* =====================================================
            DONATE BUTTON
        ====================================================== */}
        <div className="mt-[12px] flex justify-center">
          <a
            href="/donation"
            target="_blank"
            rel="noopener noreferrer"
            className="
      group
      inline-flex
      h-[50px]
      min-w-[330px]
      items-center
      justify-between
      rounded-[9px]
      border-[2px]
      border-[#D09A2D]
      bg-[#004B36]
      px-[20px]
      text-white
      shadow-[0_5px_12px_rgba(0,65,44,0.17)]
      transition-all
      duration-300
      hover:-translate-y-[1px]
      hover:bg-[#003E2D]
    "
          >
            <span className="flex items-center gap-[12px]">
              <CustomIcon
                name="HeartHands"
                className="
          h-[28px]
          w-[28px]
          text-[#D8A62A]
        "
              />

              <span
                className="
          text-[18px]
          font-medium
          uppercase
          tracking-[0.02em]
        "
              >
                Donate For Sewa
              </span>
            </span>

            <CustomIcon
              name="ArrowRight"
              className="
        h-[22px]
        w-[22px]
        text-[#D9A32B]
        transition-transform
        duration-300
        group-hover:translate-x-[3px]
      "
            />
          </a>
        </div>
      </div>
    </section>
  );
}