"use client";

import Image from "next/image";
import type { ReactElement } from "react";

/* =========================================================
   TYPES
========================================================= */

interface IconProps {
  name: string;
  className?: string;
}

interface MissionCard {
  image: string;
  alt: string;
  icon: "GiveIcon" | "ServeIcon" | "PartnerIcon";
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  accent: string;
}

/* =========================================================
   CUSTOM ICONS
   Reference ke close thin-outline icons
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

    /* GIVE IN SEWA */
    GiveIcon: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M26 15c0-4 4-5.7 6-2.2 2-3.5 6-1.8 6 2.2 0 3.7-3.5 6.4-6 8.8-2.5-2.4-6-5.1-6-8.8Z" />

        <path d="M8 38c6-1 10 1 14 5l6 6" />
        <path d="M56 38c-6-1-10 1-14 5l-6 6" />

        <path d="M8 37v15" />
        <path d="M56 37v15" />

        <path d="M20 32c4-3 8-4 12-4s8 1 12 4" />
      </svg>
    ),

    /* SERVE IN SEWA */
    ServeIcon: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="32" cy="18" r="5" />
        <circle cx="18" cy="23" r="4" />
        <circle cx="46" cy="23" r="4" />

        <path d="M23 46c.7-8 3.7-12 9-12s8.3 4 9 12" />

        <path d="M8 46c.6-7 3.3-10.5 8.5-10.5 2.5 0 4.6.8 6.2 2.3" />

        <path d="M56 46c-.6-7-3.3-10.5-8.5-10.5-2.5 0-4.6.8-6.2 2.3" />
      </svg>
    ),

    /* PARTNER IN SEWA */
    PartnerIcon: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m10 27 10-8 10 6" />
        <path d="m54 27-10-8-10 6" />

        <path d="m22 30 7 6c1.5 1.3 3.7 1.3 5.2 0l7-6" />

        <path d="m18 34 12 11c1.4 1.3 3.7 1.3 5.1 0l11-10" />

        <path d="m10 28 8 10" />
        <path d="m54 28-8 10" />
      </svg>
    ),

    /* COMMUNITY */
    CommunityIcon: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="32" cy="18" r="4.5" />
        <circle cx="20" cy="23" r="3.7" />
        <circle cx="44" cy="23" r="3.7" />

        <path d="M23 45c.6-7 3.6-10.5 9-10.5S40.4 38 41 45" />

        <path d="M10 45c.5-6 2.9-9 7.5-9 2.3 0 4 .7 5.4 2.1" />

        <path d="M54 45c-.5-6-2.9-9-7.5-9-2.3 0-4 .7-5.4 2.1" />
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
   CARDS DATA
========================================================= */

const cards: MissionCard[] = [
  {
    image: "/assets/donation-images/donate-sewa.png",
    alt: "A person placing a donation into a Sewa donation box by the river",
    icon: "GiveIcon",
    title: "Give in Sewa",
    description:
      "Help extend dignified final-rites support to eligible cases.",
    buttonLabel: "Donate",
    buttonHref: "/donation",
    accent: "#004A30",
  },

  {
    image: "/assets/donation-images/volunteer-sewa.png",
    alt: "Volunteers supporting an elderly person with compassion",
    icon: "ServeIcon",
    title: "Serve in Sewa",
    description:
      "Give your time, presence and compassion.",
    buttonLabel: "Become a Volunteer",
    buttonHref: "/volunteer",
    accent: "#B24E11",
  },

  {
    image: "/assets/donation-images/partner-sewa.png",
    alt: "A professional team discussing a partnership around a laptop",
    icon: "PartnerIcon",
    title: "Partner in Sewa",
    description:
      "CSR, institutions, hospitals, organisations and community partners.",
    buttonLabel: "Partner With Us",
    buttonHref: "/contact",
    accent: "#004A30",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function JoinTheMission() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#FCF8F0]
        px-4
        py-[20px]
        sm:px-5
        lg:px-6
        lg:py-[24px]
      "
    >
      {/* =====================================================
          SUBTLE BACKGROUND PATTERN
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(143,99,49,0.055) 0 1px, transparent 1.1px)",
          backgroundSize: "23px 23px",
        }}
      />

      {/* =====================================================
          LEFT FLORAL DECORATION
      ====================================================== */}

      <svg
        viewBox="0 0 220 240"
        className="
          pointer-events-none
          absolute
          -left-[55px]
          top-[14px]
          h-[220px]
          w-[210px]
          text-[#AEB6A0]/30
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
      >
        <path d="M30 214C54 162 89 103 177 28" />

        <path d="M49 166c-27-10-34-35-25-56 25 8 41 27 39 50" />

        <path d="M76 126c-22-16-23-40-10-58 22 13 32 32 26 54" />

        <path d="M108 86c-16-21-9-44 7-58 18 18 21 38 8 55" />

        <path d="M142 55c-10-21 2-38 20-45 13 18 9 34-8 46" />
      </svg>

      {/* =====================================================
          RIGHT GHAT BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          h-[255px]
          w-[570px]
          overflow-hidden
        "
      >
        <Image
          src="/assets/about-reference/story-evening-ghat.png"
          alt=""
          fill
          sizes="570px"
          className="
            object-cover
            object-[72%_center]
            opacity-[0.30]
          "
        />

        <div
          className="
            absolute
            inset-y-0
            left-0
            w-[60%]
            bg-gradient-to-r
            from-[#FCF8F0]
            via-[#FCF8F0]/75
            to-transparent
          "
        />

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[90px]
            bg-gradient-to-t
            from-[#FCF8F0]
            via-[#FCF8F0]/50
            to-transparent
          "
        />

        {/* BIRDS */}

        <svg
          viewBox="0 0 150 60"
          className="
            absolute
            right-[40px]
            top-[20px]
            h-[55px]
            w-[145px]
            text-[#C59A56]/45
          "
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M8 24c7-7 14-7 21 0 7-7 14-7 21 0" />
          <path d="M57 40c6-6 12-6 18 0 6-6 12-6 18 0" />
          <path d="M100 18c5-5 10-5 15 0 5-5 10-5 15 0" />
        </svg>
      </div>

      {/* =====================================================
          CONTENT WIDTH
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1344px]
        "
      >
        {/* =====================================================
            HEADER
        ====================================================== */}

        <header
          className="
            mx-auto
            mb-[24px]
            max-w-[1060px]
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
            <span className="relative h-px w-[58px] bg-[#B77E26]">
              <span className="absolute -right-[3px] -top-[2px] h-[5px] w-[5px] rounded-full bg-[#B77E26]" />
            </span>

            <CustomIcon
              name="Lotus"
              className="
                h-[23px]
                w-[23px]
                text-[#B17A27]
              "
            />

            <span
              className="
                text-[16px]
                font-bold
                uppercase
                tracking-[0.055em]
                text-[#9B6B25]
              "
            >
              Join The Mission
            </span>

            <span className="relative h-px w-[58px] bg-[#B77E26]">
              <span className="absolute -left-[3px] -top-[2px] h-[5px] w-[5px] rounded-full bg-[#B77E26]" />
            </span>
          </div>

          {/* HEADING */}

          <h2
            className="
              font-serif
              text-[35px]
              font-semibold
              leading-[1.02]
              text-[#074A31]
              sm:text-[42px]
              lg:text-[49px]
            "
            style={{
              fontFamily:
                "Georgia, 'Times New Roman', serif",
            }}
          >
            There Is a Place for Everyone in Sewa
          </h2>

          {/* LOTUS DIVIDER */}

          <div
            className="
              mx-auto
              mt-[8px]
              flex
              max-w-[400px]
              items-center
              justify-center
              gap-[10px]
            "
          >
            <span
              className="
                h-px
                flex-1
                bg-gradient-to-r
                from-transparent
                to-[#BD8A3A]
              "
            />

            <CustomIcon
              name="Lotus"
              className="
                h-[24px]
                w-[24px]
                text-[#B57C27]
              "
            />

            <span
              className="
                h-px
                flex-1
                bg-gradient-to-l
                from-transparent
                to-[#BD8A3A]
              "
            />
          </div>

          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-[9px]
              max-w-[950px]
              text-[16px]
              leading-[1.42]
              text-[#50504B]
            "
          >
            Every act of kindness helps us bring dignity, compassion and
            support to those who need it most in their final journey.
          </p>
        </header>

        {/* =====================================================
            CARDS
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-[16px]
            lg:grid-cols-3
          "
        >
          {cards.map((card) => (
            <article
              key={card.title}
              className="
                grid
                h-[322px]
                overflow-hidden
                rounded-[11px]
                border
                border-[#E2D6C4]
                bg-[#FFFDF8]
                shadow-[0_6px_17px_rgba(68,44,20,0.08)]
                sm:grid-cols-[57%_43%]
              "
            >
              {/* ===============================================
                  IMAGE
              ================================================ */}

              <div
                className="
                  relative
                  min-h-[230px]
                  overflow-hidden
                  sm:h-full
                "
              >
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  quality={95}
                  sizes="
                    (max-width:640px) 100vw,
                    (max-width:1024px) 60vw,
                    20vw
                  "
                  className="
                    object-cover
                    object-center
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/10
                    via-transparent
                    to-transparent
                  "
                />
              </div>

              {/* ===============================================
                  CONTENT
              ================================================ */}

              <div
                className="
                  flex
                  min-w-0
                  flex-col
                  items-start
                  justify-center
                  px-[19px]
                  py-[16px]
                "
              >
                {/* ICON */}

                <span
                  className="
                    flex
                    h-[62px]
                    w-[62px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    text-white
                    shadow-[0_4px_10px_rgba(40,28,16,0.10)]
                  "
                  style={{
                    backgroundColor: card.accent,
                  }}
                >
                  <CustomIcon
                    name={card.icon}
                    className="
                      h-[36px]
                      w-[36px]
                    "
                  />
                </span>

                {/* TITLE */}

                <h3
                  className="
                    mt-[9px]
                    font-serif
                    text-[22px]
                    font-semibold
                    leading-[1.05]
                  "
                  style={{
                    fontFamily:
                      "Georgia, 'Times New Roman', serif",
                    color: card.accent,
                  }}
                >
                  {card.title}
                </h3>

                {/* UNDERLINE */}

                <span
                  className="
                    mt-[7px]
                    h-[2px]
                    w-[35px]
                  "
                  style={{
                    backgroundColor: "#C38E32",
                  }}
                />

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-[12px]
                    text-[16px]
                    leading-[1.42]
                    text-[#4B4944]
                  "
                >
                  {card.description}
                </p>

                {/* BUTTON */}

                <a
                  href={card.buttonHref}
                  className="
                    group
                    mt-auto
                    flex
                    min-h-[45px]
                    w-full
                    items-center
                    justify-center
                    gap-[10px]
                    rounded-[5px]
                    px-[10px]
                    text-center
                    text-[16px]
                    font-bold
                    uppercase
                    leading-[1.15]
                    text-white
                    shadow-[0_4px_9px_rgba(45,30,15,0.10)]
                    transition
                    duration-300
                    hover:-translate-y-[1px]
                    hover:brightness-105
                  "
                  style={{
                    backgroundColor: card.accent,
                  }}
                >
                  <span>
                    {card.buttonLabel}
                  </span>

                  <CustomIcon
                    name="ArrowRight"
                    className="
                      h-[17px]
                      w-[17px]
                      shrink-0
                      transition-transform
                      duration-300
                      group-hover:translate-x-[3px]
                    "
                  />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* =====================================================
            BOTTOM BAND
        ====================================================== */}

        <div
          className="
            mt-[16px]
            overflow-hidden
            rounded-[10px]
            border
            border-[#E2D6C5]
            bg-[#F4EBDD]
            shadow-[0_4px_11px_rgba(70,45,21,0.04)]
          "
        >
          <div
            className="
              grid
              min-h-[79px]
              grid-cols-1
              lg:grid-cols-[61%_39%]
            "
          >
            {/* LEFT */}

            <div
              className="
                flex
                items-center
                gap-[18px]
                px-[30px]
                py-[10px]
              "
            >
              <span
                className="
                  flex
                  h-[52px]
                  w-[52px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#D7C294]
                  bg-[#FAF5E9]
                  text-[#B1843E]
                "
              >
                <CustomIcon
                  name="CommunityIcon"
                  className="
                    h-[32px]
                    w-[32px]
                  "
                />
              </span>

              <p
                className="
                  max-w-[760px]
                  text-[16px]
                  leading-[1.4]
                  text-[#4D4A44]
                "
              >
                Whether you give, serve or partner – your support creates a
                meaningful difference in ensuring dignity and respect in every
                final journey we are able to support.
              </p>
            </div>

            {/* RIGHT */}

            <div
              className="
                flex
                items-center
                justify-center
                gap-[18px]
                border-t
                border-[#DDD0B9]
                px-[24px]
                py-[10px]
                lg:border-l
                lg:border-t-0
              "
            >
              <CustomIcon
                name="Lotus"
                className="
                  h-[44px]
                  w-[44px]
                  shrink-0
                  text-[#B57A28]
                "
              />

              <p
                className="
                  font-serif
                  text-[19px]
                  italic
                  leading-[1.25]
                  text-[#A76A27]
                "
                style={{
                  fontFamily:
                    "Georgia, 'Times New Roman', serif",
                }}
              >
                Together, we bring compassion to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}