import Image from "next/image";
import type { ReactElement } from "react";

interface CustomIconProps {
  name: string;
  className?: string;
}

const CustomIcon = ({
  name,
  className = "h-6 w-6",
}: CustomIconProps) => {
  const icons: Record<string, ReactElement> = {
    LegalHelpIcon: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M32 8 49 14v13c0 11.5-6.6 19-17 24-10.4-5-17-12.5-17-24V14L32 8Z" />
        <path d="m25 28 5 5 9-10" />
        <path d="M13 47c4-1 8 .2 11 4" />
        <path d="M51 47c-4-1-8 .2-11 4" />
        <path d="M20 44h24" />
      </svg>
    ),

    PeopleIcon: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="32" cy="20" r="5" />
        <circle cx="19" cy="24" r="4" />
        <circle cx="45" cy="24" r="4" />

        <path d="M23 47c.8-8 3.8-12 9-12s8.2 4 9 12" />

        <path d="M9 47c.6-7 3.2-10.5 8.5-10.5 2.5 0 4.6.8 6.2 2.4" />

        <path d="M55 47c-.6-7-3.2-10.5-8.5-10.5-2.5 0-4.6.8-6.2 2.4" />
      </svg>
    ),

    HeartHandsIcon: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M25 17c0-4 4.2-5.5 7-2 2.8-3.5 7-2 7 2 0 4-4 7-7 10-3-3-7-6-7-10Z" />
        <path d="M8 39c5-1 9 1 13 5l6 7" />
        <path d="M56 39c-5-1-9 1-13 5l-6 7" />
        <path d="M8 38v14" />
        <path d="M56 38v14" />
        <path d="M20 33c3-3 7-4 12-4s9 1 12 4" />
      </svg>
    ),

    ShieldCheckIcon: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M32 8 49 14v13c0 11.5-6.6 19-17 24-10.4-5-17-12.5-17-24V14L32 8Z" />
        <path d="m24 29 5 5 11-12" />
      </svg>
    ),

    CompassionIcon: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M24 18c0-4 4.5-5.6 8-2 3.5-3.6 8-2 8 2 0 4-4.5 7.5-8 10.5C28.5 25.5 24 22 24 18Z" />
        <path d="M12 43c5-2 9-.5 13 3l7 6" />
        <path d="M52 43c-5-2-9-.5-13 3l-7 6" />
        <path d="M16 39c4-4 9-6 16-6s12 2 16 6" />
      </svg>
    ),

    HandshakeIcon: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m9 26 11-8 10 7" />
        <path d="m55 26-11-8-10 7" />
        <path d="m23 30 7 6c1.4 1.2 3.6 1.2 5 0l6-5" />
        <path d="m18 33 12 11c1.5 1.3 3.7 1.3 5.2 0l11-10" />
        <path d="m10 27 8 10" />
        <path d="m54 27-8 10" />
      </svg>
    ),

    MapPinIcon: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M32 54S49 39 49 25a17 17 0 1 0-34 0c0 14 17 29 17 29Z" />
        <circle cx="32" cy="25" r="6" />
      </svg>
    ),

    SmallShieldIcon: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M32 9 49 15v12c0 11-6.5 18.5-17 24-10.5-5.5-17-13-17-24V15L32 9Z" />
        <path d="m25 30 5 5 10-11" />
      </svg>
    ),
  };

  return icons[name] ?? <span className={className}>•</span>;
};

interface HelpCard {
  icon: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  color: string;
  titleColor: string;
}

const helpCards: HelpCard[] = [
  {
    icon: "LegalHelpIcon",
    title: "Unclaimed & Legally\nAuthorised Cases",
    description:
      "We assist with respectful last-rites after completion of all required police, hospital and authority formalities.",
    features: [
      "Support after legal verification",
      "Coordination with authorities",
      "Respectful & dignified last-rites",
    ],

    /* OLD IMAGE */
    image: "/assets/about-optimized/cremation-ritual.webp",

    color: "#8E1916",
    titleColor: "#741713",
  },

  {
    icon: "PeopleIcon",
    title: "People Without Family\nor Support",
    description:
      "For those who have no one to stand beside them, we ensure a dignified and respectful final journey.",
    features: [
      "No one left alone in their final journey",
      "Compassionate on-ground support",
      "Respect, care and complete dignity",
    ],

    /* OLD IMAGE */
    image: "/assets/about-optimized/family-support.webp",

    color: "#5B409C",
    titleColor: "#523790",
  },

  {
    icon: "HeartHandsIcon",
    title: "Economically Weaker\nFamilies",
    description:
      "Verified support for eligible families who are unable to manage essential last-rites arrangements.",
    features: [
      "Eligibility-based verified support",
      "Essential arrangements provided",
      "Guidance and on-ground assistance",
    ],

    /* OLD IMAGE */
    image: "/assets/about-optimized/prayer-hall.webp",

    color: "#2E7140",
    titleColor: "#276237",
  },
];

const trustItems = [
  {
    icon: "ShieldCheckIcon",
    title: "Verified & Transparent",
    text: "Every request is carefully verified before assistance.",
    color: "#8E1916",
  },

  {
    icon: "CompassionIcon",
    title: "Compassion is Our\nCommitment",
    text: "We serve every life with respect, care and complete sensitivity.",
    color: "#53419B",
  },

  {
    icon: "HandshakeIcon",
    title: "Support with\nResponsibility",
    text: "Support is subject to verification, availability and applicable legal requirements.",
    color: "#26713D",
  },

  {
    icon: "MapPinIcon",
    title: "Local Sewa Network",
    text: "Our teams are available across Delhi NCR for timely help.",
    color: "#E25F07",
  },
];

const backgroundPattern = {
  backgroundImage:
    "radial-gradient(circle at 20% 20%, rgba(168,111,44,0.055) 0 1px, transparent 1.2px)",
  backgroundSize: "22px 22px",
};

export default function WhoWeHelp() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FBF8F3] px-4 py-7 sm:px-5 lg:px-6 lg:py-8">

      {/* ===================================================
          BACKGROUND
      ==================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-55"
        style={backgroundPattern}
      />

      {/* LEFT FLORAL DECORATION */}

      <svg
        viewBox="0 0 300 300"
        className="
          pointer-events-none
          absolute
          -left-20
          top-8
          h-[220px]
          w-[220px]
          text-[#DAB978]/30
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <circle cx="150" cy="150" r="42" />
        <circle cx="150" cy="150" r="72" />

        {Array.from({ length: 12 }).map((_, index) => (
          <ellipse
            key={index}
            cx="150"
            cy="83"
            rx="15"
            ry="42"
            transform={`rotate(${index * 30} 150 150)`}
          />
        ))}
      </svg>

      {/* RIGHT FLORAL DECORATION */}

      <svg
        viewBox="0 0 300 300"
        className="
          pointer-events-none
          absolute
          -right-24
          top-12
          h-[230px]
          w-[230px]
          text-[#DAB978]/30
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <circle cx="150" cy="150" r="42" />
        <circle cx="150" cy="150" r="72" />

        {Array.from({ length: 12 }).map((_, index) => (
          <ellipse
            key={index}
            cx="150"
            cy="83"
            rx="15"
            ry="42"
            transform={`rotate(${index * 30} 150 150)`}
          />
        ))}
      </svg>

      {/* ===================================================
          MAIN WRAPPER
      ==================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          w-full
          max-w-[1344px]

          rounded-[18px]

          border
          border-[#EFE6DC]

          bg-[#FFFCF8]/70

          px-5
          py-4

          shadow-[0_12px_34px_rgba(78,51,28,0.06)]

          sm:px-6
          lg:px-8
        "
      >

        {/* ===================================================
            HEADER
        ==================================================== */}

        <header className="mx-auto mb-6 max-w-[1020px] text-center">

          <div className="mb-1 flex items-center justify-center gap-3">

            <span className="h-px w-[52px] bg-gradient-to-r from-transparent to-[#D36516]" />

            <span className="h-1.5 w-1.5 rounded-full bg-[#D36516]" />

            <span className="text-[16px] font-bold uppercase tracking-[0.12em] text-[#C6520D]">
              Who We Help
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-[#D36516]" />

            <span className="h-px w-[52px] bg-gradient-to-l from-transparent to-[#D36516]" />

          </div>

          <h2
            className="
              font-serif

              text-[32px]

              font-semibold

              leading-[1.05]

              text-[#28120E]

              sm:text-[40px]
              lg:text-[46px]
            "
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            Standing Beside Those Who Need Us Most
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-[760px]

              text-[16px]

              leading-[1.45]

              text-[#252020]
            "
          >
            Moksha Sewa provides compassionate last-rites support for unclaimed
            cases and families in need with dignity, respect and complete
            sensitivity.
          </p>

        </header>

        {/* ===================================================
            3 MAIN CARDS
        ==================================================== */}

        <div className="grid grid-cols-1 gap-[18px] lg:grid-cols-3">

          {helpCards.map((card) => (
            <article
              key={card.title}
              className="
                relative

                flex
                h-[455px]
                flex-col

                overflow-hidden

                rounded-[14px]

                border
                border-[#E3DCD5]

                bg-white

                shadow-[0_8px_22px_rgba(54,34,20,0.11)]
              "
            >

              {/* ===============================================
                  IMAGE
              ================================================ */}

              <div
                className="
                  relative

                  h-[165px]

                  shrink-0

                  overflow-hidden
                "
              >
                <Image
                  src={card.image}
                  alt={card.title.replace("\n", " ")}
                  fill
                  quality={95}
                  sizes="(max-width:1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* ===============================================
                  CIRCLE ICON
                  SAME IMAGE/CONTENT JOIN POSITION
              ================================================ */}

              <div
                className="
                  absolute

                  left-1/2
                  top-[126px]

                  z-20

                  flex

                  h-[78px]
                  w-[78px]

                  -translate-x-1/2

                  items-center
                  justify-center

                  rounded-full

                  border-[4px]
                  border-white

                  text-white

                  shadow-[0_5px_13px_rgba(41,25,14,0.20)]
                "
                style={{
                  backgroundColor: card.color,
                }}
              >
                <CustomIcon
                  name={card.icon}
                  className="h-[40px] w-[40px]"
                />
              </div>

              {/* ===============================================
                  CONTENT
              ================================================ */}

              <div
                className="
                  flex
                  flex-1
                  flex-col

                  px-7

                  pb-5
                  pt-[50px]

                  text-center
                "
                style={{
                  borderBottom: `5px solid ${card.color}`,
                }}
              >

                {/* TITLE */}

                <h3
                  className="
                    whitespace-pre-line

                    font-serif

                    text-[22px]

                    font-semibold

                    leading-[1.05]
                  "
                  style={{
                    color: card.titleColor,
                    fontFamily: "Georgia, 'Times New Roman', serif",
                  }}
                >
                  {card.title}
                </h3>

                {/* SHORT COLOR LINE */}

                <span
                  className="
                    mx-auto

                    mt-[7px]

                    h-[2px]
                    w-[40px]

                    shrink-0

                    rounded-full
                  "
                  style={{
                    backgroundColor: card.color,
                  }}
                />

                {/* DESCRIPTION */}

                <p
                  className="
                    mx-auto

                    mt-[10px]

                    max-w-[350px]

                    text-[16px]

                    leading-[1.35]

                    text-[#211E1D]
                  "
                >
                  {card.description}
                </p>

                {/* FEATURE LIST */}

                <div
                  className="
                    mt-auto

                    flex
                    flex-col

                    gap-[9px]

                    pt-4

                    text-left
                  "
                >

                  {card.features.map((feature) => (
                    <div
                      key={feature}
                      className="
                        flex
                        items-start

                        gap-[10px]

                        text-[16px]

                        leading-[1.25]

                        text-[#242120]
                      "
                    >

                      <span
                        className="
                          mt-[1px]

                          flex

                          h-[18px]
                          w-[18px]

                          shrink-0

                          items-center
                          justify-center

                          rounded-full

                          text-[12px]
                          font-bold

                          text-white
                        "
                        style={{
                          backgroundColor: card.color,
                        }}
                      >
                        ✓
                      </span>

                      <span>
                        {feature}
                      </span>

                    </div>
                  ))}

                </div>

              </div>

            </article>
          ))}

        </div>

        {/* ===================================================
            TRUST STRIP
        ==================================================== */}

        <div
          className="
            mt-[26px]

            overflow-hidden

            rounded-[13px]

            border
            border-[#E5DED6]

            bg-[#FFFDF9]

            shadow-[0_5px_15px_rgba(58,37,20,0.05)]
          "
        >

          <div
            className="
              grid
              grid-cols-1

              divide-y
              divide-[#DDD7D0]

              md:grid-cols-2

              lg:grid-cols-4
              lg:divide-x
              lg:divide-y-0
            "
          >

            {trustItems.map((item) => (
              <div
                key={item.title}
                className="
                  flex

                  min-h-[118px]

                  items-center

                  gap-4

                  px-6
                  py-4
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
                    color: item.color,
                  }}
                >
                  <CustomIcon
                    name={item.icon}
                    className="h-[48px] w-[48px]"
                  />
                </div>

                {/* TEXT */}

                <div>

                  <h4
                    className="
                      whitespace-pre-line

                      text-[16px]

                      font-bold

                      leading-[1.22]
                    "
                    style={{
                      color: item.color,
                    }}
                  >
                    {item.title}
                  </h4>

                  <p
                    className="
                      mt-[6px]

                      text-[16px]

                      leading-[1.3]

                      text-[#282321]
                    "
                  >
                    {item.text}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* ===================================================
            LEGAL / VERIFICATION NOTICE
        ==================================================== */}

        <div
          className="
            relative

            mt-[14px]

            flex

            min-h-[58px]

            items-center

            gap-4

            overflow-hidden

            rounded-[11px]

            border
            border-[#ECDCBF]

            bg-gradient-to-r
            from-[#FFF5DF]
            via-[#FFF9EE]
            to-[#FFF5DF]

            px-6
            py-3

            shadow-[0_4px_12px_rgba(72,43,16,0.05)]
          "
        >

          {/* SHIELD BADGE */}

          <span
            className="
              flex

              h-[38px]
              w-[38px]

              shrink-0

              items-center
              justify-center

              rounded-[9px]

              bg-gradient-to-b
              from-[#C5810B]
              to-[#8D5700]

              text-white

              shadow-[0_4px_8px_rgba(108,65,3,0.18)]
            "
          >
            <CustomIcon
              name="SmallShieldIcon"
              className="h-[26px] w-[26px]"
            />
          </span>

          <p
            className="
              text-[16px]

              font-semibold

              leading-[1.3]

              text-[#27201B]
            "
          >
            Support is subject to case verification, availability and applicable
            legal requirements.
          </p>

          {/* RIGHT LOTUS DECORATION */}

          <svg
            viewBox="0 0 100 70"
            className="
              pointer-events-none

              absolute

              -bottom-6
              right-4

              h-[75px]
              w-[105px]

              text-[#DDB96E]/40
            "
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          >
            <path d="M50 60C29 50 19 34 24 16c12 5 21 13 26 26 5-13 14-21 26-26 5 18-5 34-26 44Z" />

            <path d="M50 46C40 35 37 24 44 10c4 5 6 11 6 18 0-7 2-13 6-18 7 14 4 25-6 36Z" />

            <path d="M12 62h76" />
          </svg>

        </div>

      </div>

    </section>
  );
}