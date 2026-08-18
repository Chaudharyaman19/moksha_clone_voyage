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
    /* =========================
       AMBULANCE
    ========================== */
    AmbulanceIcon: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 22h30v24H10z" />
        <path d="M40 29h8l8 9v8H40z" />

        <circle cx="21" cy="49" r="4.5" />
        <circle cx="48" cy="49" r="4.5" />

        <path d="M21 27v12" />
        <path d="M15 33h12" />

        <path d="M46 19v6" />
        <path d="M43 22h6" />

        <path d="M49 34h4" />
      </svg>
    ),

    /* =========================
       CREMATION
    ========================== */
    CremationIcon: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M32 7c8 9 9 16 9 20.5 0 6-4 10.5-9 10.5s-9-4.5-9-10.5C23 23 24 16 32 7Z" />

        <path d="M32 18c3.5 4.5 4 7.5 4 9.5 0 2.7-1.8 4.8-4 4.8s-4-2.1-4-4.8c0-2 .5-5 4-9.5Z" />

        <path d="M13 45 28 37" />
        <path d="M21 50 36 42" />
        <path d="M28 42 43 50" />
        <path d="M36 37 51 45" />

        <path d="M13 53h38" />
      </svg>
    ),

    /* =========================
       RITUAL + DIYA + FLOWER
    ========================== */
    RitualIcon: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* diya */}
        <path d="M8 39c6 0 12-2 18-6 0 8-5 13-11 13-4 0-6-2-7-7Z" />
        <path d="M8 39h18" />

        {/* flame */}
        <path d="M20 13c5 6 6 10 6 13a6 6 0 0 1-12 0c0-3 1-7 6-13Z" />
        <path d="M20 20c2 3 2.5 5 2.5 6.5a2.5 2.5 0 1 1-5 0c0-1.5.5-3.5 2.5-6.5Z" />

        {/* flower */}
        <circle cx="43" cy="38" r="4" />

        <ellipse cx="43" cy="29" rx="4" ry="7" />
        <ellipse cx="43" cy="47" rx="4" ry="7" />

        <ellipse
          cx="34"
          cy="38"
          rx="7"
          ry="4"
        />

        <ellipse
          cx="52"
          cy="38"
          rx="7"
          ry="4"
        />

        <ellipse
          cx="36.5"
          cy="31.5"
          rx="4"
          ry="6"
          transform="rotate(-45 36.5 31.5)"
        />

        <ellipse
          cx="49.5"
          cy="44.5"
          rx="4"
          ry="6"
          transform="rotate(-45 49.5 44.5)"
        />

        <ellipse
          cx="49.5"
          cy="31.5"
          rx="4"
          ry="6"
          transform="rotate(45 49.5 31.5)"
        />

        <ellipse
          cx="36.5"
          cy="44.5"
          rx="4"
          ry="6"
          transform="rotate(45 36.5 44.5)"
        />
      </svg>
    ),

    /* =========================
       FAMILY
    ========================== */
    FamilyIcon: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="32" cy="18" r="6" />
        <circle cx="17" cy="24" r="5" />
        <circle cx="47" cy="24" r="5" />

        <path d="M23 48c.7-9 3.7-14 9-14s8.3 5 9 14" />

        <path d="M7 48c.5-8 3.8-12 10-12 3 0 5.3 1 7 3" />

        <path d="M57 48c-.5-8-3.8-12-10-12-3 0-5.3 1-7 3" />

        <path d="M13 48v-7" />
        <path d="M51 48v-7" />
      </svg>
    ),

    /* =========================
       HANDS / EVERYONE
    ========================== */
    HandsHeartIcon: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M24 15c0-4 4.5-5.5 8-2 3.5-3.5 8-2 8 2 0 4-4.5 7-8 10-3.5-3-8-6-8-10Z" />

        <path d="M8 38c6-1 10 1 14 6l5 6" />
        <path d="M56 38c-6-1-10 1-14 6l-5 6" />

        <path d="M8 37v14" />
        <path d="M56 37v14" />

        <path d="M18 34c2-5 6-7 14-7s12 2 14 7" />
      </svg>
    ),

    /* =========================
       MAP
    ========================== */
    MapPinIcon: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M32 55S49 40 49 25a17 17 0 1 0-34 0c0 15 17 30 17 30Z" />
        <circle cx="32" cy="25" r="6" />
      </svg>
    ),

    /* =========================
       SHIELD
    ========================== */
    ShieldIcon: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M32 8 51 15v14c0 13-7.5 21-19 27-11.5-6-19-14-19-27V15l19-7Z" />
        <path d="m24 32 6 6 11-12" />
      </svg>
    ),

    /* =========================
       HUMANITY
    ========================== */
    HumanityIcon: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="23" cy="20" r="5" />
        <circle cx="41" cy="20" r="5" />

        <path d="M10 49c1-9 5-14 13-14s12 5 13 14" />

        <path d="M28 49c1-9 5-14 13-14s12 5 13 14" />
      </svg>
    ),

    /* =========================
       PHONE
    ========================== */
    PhoneIcon: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m17 12 9 14-6 6c5 9 12 16 21 21l6-6 14 9c1 1 1.4 3 .5 4.2-2.8 3.6-7 5.8-11.6 5.8C27 66 0 39 0 16.1 0 11.5 2.2 7.3 5.8 4.5 7 3.6 9 4 10 5Z" />
      </svg>
    ),

    ArrowRightIcon: (
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

  return icons[name] ?? <span className={className}>•</span>;
};

interface CardItem {
  icon: string;
  title: string;
  desc: string;
  features: string[];
  image: string;
  accent: string;
  titleColor: string;
  featureBg: string;
}

const cards: CardItem[] = [
  {
    icon: "AmbulanceIcon",
    title: "Final Journey &\nTransport",
    desc: "Ambulance & hearse\ncoordination with care\nand dignity.",
    features: [
      "24x7 Availability",
      "Safe & Timely Transport",
      "Trained & Verified Partners",
    ],
    image: "/assets/how-we-help/five.png",
    accent: "#397A27",
    titleColor: "#295E24",
    featureBg: "#EFF6E9",
  },

  {
    icon: "CremationIcon",
    title: "Cremation &\nLast Rites",
    desc: "Ground and essential\narrangements for a\ndignified farewell.",
    features: [
      "Cremation Ground Support",
      "Essential Arrangements",
      "Clean & Respectful Process",
    ],
    image: "/assets/how-we-help/four.png",
    accent: "#EC7205",
    titleColor: "#BE560D",
    featureBg: "#FFF2E7",
  },

  {
    icon: "RitualIcon",
    title: "Ritual &\nPriest Support",
    desc: "Priest, wood, cloth, flowers\nand all ritual essentials\narranged.",
    features: [
      "Experienced Priests",
      "Ritual Essentials",
      "As Per Tradition & Customs",
    ],
    image: "/assets/how-we-help/pandit.png",
    accent: "#772E8B",
    titleColor: "#69267B",
    featureBg: "#F6EEF8",
  },

  {
    icon: "FamilyIcon",
    title: "Family &\nOn-Ground Support",
    desc: "Guidance, volunteers and\ndocumentation assistance\nat every step.",
    features: [
      "Volunteer Support",
      "Documentation Help",
      "Emotional Support",
    ],
    image: "/assets/how-we-help/three.png",
    accent: "#205B92",
    titleColor: "#1C4F81",
    featureBg: "#EDF4FA",
  },
];

const benefits = [
  {
    icon: "HandsHeartIcon",
    title: "For Everyone",
    text: "We serve unclaimed bodies, elderly alone, and economically weaker families.",
    color: "#2E6C45",
  },
  {
    icon: "MapPinIcon",
    title: "Pan India Service",
    text: "Expanding our network to reach more people in need.",
    color: "#A96C1E",
  },
  {
    icon: "ShieldIcon",
    title: "Zero Financial Burden",
    text: "Our services are completely free for those who are unable to afford.",
    color: "#2C5D88",
  },
  {
    icon: "HumanityIcon",
    title: "Humanity First",
    text: "Every life deserves dignity. Every family deserves support.",
    color: "#A43F63",
  },
];

const decorativePattern = {
  backgroundImage:
    "radial-gradient(circle at 20% 20%, rgba(168,111,44,0.06) 0 1px, transparent 1.2px)",
  backgroundSize: "22px 22px",
};

export default function HowWeCanHelp() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FBF7EF] px-4 py-7 sm:px-5 lg:px-6 lg:py-8">

      {/* ==================================
          BACKGROUND
      =================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={decorativePattern}
      />

      {/* LEFT DECORATION */}

      <svg
        viewBox="0 0 300 300"
        className="pointer-events-none absolute -left-24 -top-16 h-[300px] w-[300px] text-[#DDB66F]/35"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <circle cx="150" cy="150" r="48" />
        <circle cx="150" cy="150" r="85" />
        <circle cx="150" cy="150" r="120" />

        {Array.from({ length: 12 }).map((_, i) => (
          <ellipse
            key={i}
            cx="150"
            cy="67"
            rx="18"
            ry="55"
            transform={`rotate(${i * 30} 150 150)`}
          />
        ))}
      </svg>

      {/* RIGHT SOFT GLOW */}

      <div className="pointer-events-none absolute right-0 top-0 h-[250px] w-[360px] bg-[radial-gradient(circle_at_75%_35%,rgba(226,164,72,0.32),rgba(226,164,72,0.10)_38%,transparent_72%)]" />

      {/* ==================================
          MAIN CONTAINER
      =================================== */}

      <div className="relative z-10 mx-auto w-full max-w-[1344px]">

        {/* ==================================
            HEADER
        =================================== */}

        <header className="mx-auto mb-5 max-w-[840px] text-center">

          <div className="mb-1 flex items-center justify-center gap-4">
            <span className="h-px w-[72px] bg-[#A45918]" />

            <span className="text-[16px] font-bold uppercase tracking-[0.14em] text-[#914C14]">
              OUR SEWA
            </span>

            <span className="h-px w-[72px] bg-[#A45918]" />
          </div>

          <h2
            className="font-serif text-[32px] font-semibold leading-[1] text-[#25150D] sm:text-[42px] lg:text-[48px]"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            Essential Support for a

            <span className="block text-[#AB4A0A]">
              Dignified Final Journey
            </span>
          </h2>

          <div className="mx-auto mt-2 flex max-w-[230px] items-center gap-2">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C08341]" />

            <span className="text-[18px] text-[#B05B1B]">
              ❦
            </span>

            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C08341]" />
          </div>

          <p className="mx-auto mt-2 max-w-[700px] text-[16px] leading-[1.4] text-[#29211D]">
            Moksha Sewa ensures that every individual—regardless of their
            circumstances—receives a respectful and dignified farewell with
            complete care and compassion.
          </p>

        </header>

        {/* ==================================
            CARDS
        =================================== */}

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">

          {cards.map((card) => (
            <article
              key={card.title}
              className="
                relative
                flex
                h-[440px]
                flex-col
                overflow-hidden

                rounded-[18px]

                border
                border-[#E6DDD2]

                bg-white

                shadow-[0_7px_20px_rgba(62,38,18,0.10)]
              "
            >

              {/* ==================================
                  TOP WHITE CONTENT
              =================================== */}

              <div
                className="
                  relative

                  flex
                  h-[220px]
                  shrink-0

                  flex-col

                  items-center

                  px-4

                  pt-[94px]

                  text-center
                "
              >

                {/* CIRCLE ICON
                    IMPORTANT:
                    top-0 = card ke andar.
                    Negative top nahi hai.
                */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-0

                    flex

                    h-[90px]
                    w-[90px]

                    -translate-x-1/2

                    items-center
                    justify-center

                    rounded-full

                    border-[5px]
                    border-white

                    text-white

                    shadow-[0_5px_13px_rgba(42,28,16,0.18)]
                  "
                  style={{
                    backgroundColor: card.accent,
                  }}
                >
                  <CustomIcon
                    name={card.icon}
                    className="h-[43px] w-[43px]"
                  />
                </div>

                {/* TITLE */}

                <h3
                  className="
                    whitespace-pre-line

                    font-serif

                    text-[21px]

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

                {/* SMALL COLOR LINE */}

                <span
                  className="
                    mt-[7px]

                    h-[3px]
                    w-[32px]

                    shrink-0

                    rounded-full
                  "
                  style={{
                    backgroundColor: card.accent,
                  }}
                />

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-[9px]

                    whitespace-pre-line

                    text-[16px]

                    leading-[1.27]

                    text-[#241D19]
                  "
                >
                  {card.desc}
                </p>

              </div>

              {/* ==================================
                  IMAGE
                  NO GAP ABOVE / BELOW
              =================================== */}

              <div
                className="
                  relative

                  h-[134px]

                  shrink-0

                  overflow-hidden
                "
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  quality={95}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>

              {/* ==================================
                  FEATURES
              =================================== */}

              <div
                className="
                  flex
                  flex-1
                  flex-col

                  justify-center

                  gap-[5px]

                  px-4
                  py-[8px]
                "
                style={{
                  backgroundColor: card.featureBg,
                  borderBottom: `5px solid ${card.accent}`,
                }}
              >

                {card.features.map((feature) => (
                  <div
                    key={feature}
                    className="
                      flex

                      items-center

                      gap-2

                      text-[16px]

                      leading-[1.05]

                      text-[#28201B]
                    "
                  >

                    <span
                      className="
                        flex

                        h-[18px]
                        w-[18px]

                        shrink-0

                        items-center
                        justify-center

                        rounded-full

                        border
                      "
                      style={{
                        color: card.accent,
                        borderColor: card.accent,
                      }}
                    >
                      <span className="text-[13px] font-bold">
                        ✓
                      </span>
                    </span>

                    <span>
                      {feature}
                    </span>

                  </div>
                ))}

              </div>

            </article>
          ))}

        </div>

        {/* ==================================
            BENEFIT BAND
        =================================== */}

        <div
          className="
            mt-[12px]

            overflow-hidden

            rounded-[14px]

            border
            border-[#DFC292]

            bg-[#FFF8ED]

            shadow-[0_3px_10px_rgba(73,45,20,0.05)]
          "
        >

          <div
            className="
              grid
              grid-cols-1

              divide-y
              divide-[#DCBF91]

              md:grid-cols-5
              md:divide-x
              md:divide-y-0
            "
          >

            {benefits.map((item) => (
              <div
                key={item.title}
                className="
                  flex

                  min-h-[100px]

                  items-center

                  gap-3

                  px-4
                  py-3
                "
              >

                {/* BENEFIT ICON */}

                <div
                  className="
                    flex

                    h-[52px]
                    w-[52px]

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
                    className="h-[42px] w-[42px]"
                  />
                </div>

                {/* TEXT */}

                <div>

                  <h4
                    className="
                      text-[16px]

                      font-bold

                      leading-tight

                      text-[#251B15]
                    "
                  >
                    {item.title}
                  </h4>

                  <p
                    className="
                      mt-[4px]

                      text-[16px]

                      leading-[1.25]

                      text-[#392D25]
                    "
                  >
                    {item.text}
                  </p>

                </div>

              </div>
            ))}

            {/* ==================================
                SLOGAN
            =================================== */}

            <div
              className="
                flex

                min-h-[100px]

                flex-col

                items-center
                justify-center

                px-4
                py-3

                text-center
              "
            >

              <div className="text-[26px] leading-none text-[#B4681E]">
                ♨
              </div>

              <div
                className="
                  mt-1

                  font-serif

                  text-[18px]

                  italic

                  text-[#91501E]
                "
              >
                Together,
              </div>

              <div
                className="
                  font-serif

                  text-[18px]

                  italic

                  text-[#91501E]
                "
              >
                We Serve with Dignity
              </div>

              <div className="mt-1 flex items-center gap-2">

                <span className="h-px w-9 bg-[#B77936]" />

                <span className="h-1.5 w-1.5 rotate-45 bg-[#B77936]" />

                <span className="h-px w-9 bg-[#B77936]" />

              </div>

            </div>

          </div>

        </div>

        {/* ==================================
            BLUE CTA BAR
        =================================== */}

        <div
          className="
            mt-[7px]

            min-h-[64px]

            overflow-hidden

            rounded-[12px]

            bg-[#194E80]

            text-white

            shadow-[0_7px_16px_rgba(21,67,108,0.20)]
          "
        >

          <div
            className="
              flex

              min-h-[64px]

              flex-col

              lg:flex-row
              lg:items-center
            "
          >

            {/* LEFT */}

            <div
              className="
                flex

                flex-1

                items-center

                gap-3

                px-5
                py-2
              "
            >

              <span
                className="
                  flex

                  h-[44px]
                  w-[44px]

                  shrink-0

                  items-center
                  justify-center

                  rounded-full

                  border-2
                  border-white

                  text-white
                "
              >
                <CustomIcon
                  name="PhoneIcon"
                  className="h-[22px] w-[22px]"
                />
              </span>

              <div
                className="
                  flex
                  flex-wrap

                  items-center

                  gap-x-3
                  gap-y-1
                "
              >

                <span className="text-[16px] font-bold">
                  Need Immediate Help?
                </span>

                <span className="text-[16px] text-white/90">
                  Our team is available 24x7 to support you.
                </span>

              </div>

            </div>

            {/* DIVIDER */}

            <span className="hidden h-10 w-px bg-white/35 lg:block" />

            {/* RIGHT */}

            <div
              className="
                flex

                flex-1

                flex-col

                gap-3

                border-t
                border-white/20

                px-5
                py-2

                sm:flex-row
                sm:items-center
                sm:justify-between

                lg:border-t-0
              "
            >

              <div className="flex items-center gap-3">

                <span
                  className="
                    flex

                    h-[44px]
                    w-[44px]

                    shrink-0

                    items-center
                    justify-center

                    rounded-full

                    bg-white

                    text-[24px]

                    text-[#C22D66]
                  "
                >
                  ♥
                </span>

                <div>

                  <div className="text-[16px] font-bold">
                    Support Our Mission
                  </div>

                  <div className="text-[16px] text-white/90">
                    Your support can bring dignity to many final journeys.
                  </div>

                </div>

              </div>

              {/* BUTTON */}

              <a
                href="/donation"
                className="
                  inline-flex

                  h-[42px]

                  shrink-0

                  items-center

                  gap-3

                  rounded-[9px]

                  border
                  border-[#E28A27]

                  bg-gradient-to-r
                  from-[#A9480B]
                  to-[#D27012]

                  px-6

                  text-[16px]

                  font-bold

                  uppercase

                  text-white

                  shadow-[0_5px_12px_rgba(74,29,7,0.23)]
                "
              >
                SUPPORT NOW

                <span
                  className="
                    flex

                    h-[21px]
                    w-[21px]

                    items-center
                    justify-center

                    rounded-full

                    border
                    border-white/90
                  "
                >
                  <CustomIcon
                    name="ArrowRightIcon"
                    className="h-[11px] w-[11px]"
                  />
                </span>

              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}