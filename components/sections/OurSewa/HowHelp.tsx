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
    AmbulanceIcon: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="8" y="24" width="33" height="22" rx="2.5" />
        <path d="M41 30h8l7 8v8H41z" />
        <circle cx="19" cy="49" r="4.5" />
        <circle cx="48" cy="49" r="4.5" />
        <path d="M21 28v12" />
        <path d="M15 34h12" />
        <path d="M47 19v6" />
        <path d="M44 22h6" />
        <path d="M12 27h18" />
      </svg>
    ),

    CremationIcon: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M32 7c8 9 10 16 10 21 0 6-4.4 10.5-10 10.5S22 34 22 28c0-5 2-12 10-21Z" />
        <path d="M32 18c3.5 4.5 4.3 7.5 4.3 9.5 0 2.7-1.8 4.7-4.3 4.7s-4.3-2-4.3-4.7c0-2 .8-5 4.3-9.5Z" />
        <path d="M13 46 27 38" />
        <path d="M21 51 35 43" />
        <path d="M29 43 43 51" />
        <path d="M37 38 51 46" />
        <path d="M12 54h40" />
      </svg>
    ),

    RitualIcon: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 40c6 0 12-2 18-6 0 8-5 13-11 13-4 0-6-2-7-7Z" />
        <path d="M8 40h18" />
        <path d="M20 12c5 6 6 10 6 13a6 6 0 0 1-12 0c0-3 1-7 6-13Z" />
        <path d="M20 19c2 3 2.5 5 2.5 6.5a2.5 2.5 0 1 1-5 0c0-1.5.5-3.5 2.5-6.5Z" />
        <circle cx="43" cy="38" r="4" />
        <ellipse cx="43" cy="29" rx="4" ry="7" />
        <ellipse cx="43" cy="47" rx="4" ry="7" />
        <ellipse cx="34" cy="38" rx="7" ry="4" />
        <ellipse cx="52" cy="38" rx="7" ry="4" />
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

    FamilyIcon: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="32" cy="18" r="6" />
        <circle cx="17" cy="24" r="5" />
        <circle cx="47" cy="24" r="5" />
        <path d="M23 48c.7-9 3.7-14 9-14s8.3 5 9 14" />
        <path d="M7 48c.5-8 3.8-12 10-12 3 0 5.3 1 7 3" />
        <path d="M57 48c-.5-8-3.8-12-10-12-3 0-5.3 1-7 3" />
      </svg>
    ),

    HandsHeartIcon: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
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

    MapPinIcon: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M32 55S49 40 49 25a17 17 0 1 0-34 0c0 15 17 30 17 30Z" />
        <circle cx="32" cy="25" r="6" />
      </svg>
    ),

    ShieldIcon: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M32 8 51 15v14c0 13-7.5 21-19 27-11.5-6-19-14-19-27V15l19-7Z" />
        <path d="m24 32 6 6 11-12" />
      </svg>
    ),

    HumanityIcon: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="23" cy="20" r="5" />
        <circle cx="41" cy="20" r="5" />
        <path d="M10 49c1-9 5-14 13-14s12 5 13 14" />
        <path d="M28 49c1-9 5-14 13-14s12 5 13 14" />
      </svg>
    ),

    PhoneIcon: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m18 10 9 14-6 6c5 9 12 16 21 21l6-6 14 9c1 1 1.4 3 .5 4.2-2.8 3.6-7 5.8-11.6 5.8C27 64 2 39 2 15.1 2 10.5 4.2 6.3 7.8 3.5 9 2.6 11 3 12 4Z" />
      </svg>
    ),

    LotusIcon: (
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

interface BenefitItem {
  icon: string;
  title: string;
  text: string;
  color: string;
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
    accent: "#2F7A28",
    titleColor: "#225D23",
    featureBg: "#F1F7EA",
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
    accent: "#F05B00",
    titleColor: "#D64D00",
    featureBg: "#FFF2E6",
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
    accent: "#73318B",
    titleColor: "#682B80",
    featureBg: "#F6EDF8",
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
    accent: "#0E5B99",
    titleColor: "#164F87",
    featureBg: "#EDF5FB",
  },
];

const benefits: BenefitItem[] = [
  {
    icon: "HandsHeartIcon",
    title: "For Everyone",
    text:
      "We serve unclaimed bodies, elderly alone, and economically weaker families.",
    color: "#246833",
  },
  {
    icon: "MapPinIcon",
    title: "Pan India Service",
    text: "Expanding our network to reach more people in need.",
    color: "#A86317",
  },
  {
    icon: "ShieldIcon",
    title: "Zero Financial Burden",
    text:
      "Our services are completely free for those who are unable to afford.",
    color: "#165A8D",
  },
  {
    icon: "HumanityIcon",
    title: "Humanity First",
    text:
      "Every life deserves dignity. Every family deserves support.",
    color: "#B42058",
  },
];

const decorativePattern = {
  backgroundImage:
    "radial-gradient(circle, rgba(170,112,48,0.055) 0 1px, transparent 1.15px)",
  backgroundSize: "22px 22px",
};

export default function HowWeCanHelp() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        px-4
        pt-[2px]
        pb-[18px]
        sm:px-5
        lg:px-6
        lg:pt-[2px]
        lg:pb-[22px]
      "
      style={{
        backgroundColor: "#FBF7EF",
      }}
    >
      {/* base pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={decorativePattern}
      />

      {/* left mandala */}
      <svg
        viewBox="0 0 360 360"
        className="
          pointer-events-none
          absolute
          -left-[125px]
          -top-[100px]
          h-[385px]
          w-[385px]
          text-[#E0A24B]/45
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="1.15"
      >
        <circle cx="180" cy="180" r="38" />
        <circle cx="180" cy="180" r="72" />
        <circle cx="180" cy="180" r="108" />
        <circle cx="180" cy="180" r="142" />

        {Array.from({ length: 12 }).map((_, index) => (
          <ellipse
            key={`inner-${index}`}
            cx="180"
            cy="104"
            rx="18"
            ry="55"
            transform={`rotate(${index * 30} 180 180)`}
          />
        ))}

        {Array.from({ length: 16 }).map((_, index) => (
          <ellipse
            key={`outer-${index}`}
            cx="180"
            cy="64"
            rx="14"
            ry="46"
            transform={`rotate(${index * 22.5} 180 180)`}
          />
        ))}
      </svg>

      {/* top-right background image */}
      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          h-[355px]
          w-[480px]
          overflow-hidden
        "
      >
        <div
          className="
            absolute
            inset-0
            bg-cover
            bg-right-top
            bg-no-repeat
          "
          style={{
            backgroundImage: "url('/assets/how-we-help/our-sewa-bg.png')",
          }}
        />

        <div
          className="
            absolute
            inset-y-0
            left-0
            w-[50%]
            bg-gradient-to-r
            from-[#FBF7EF]
            via-[#FBF7EF]/72
            to-transparent
          "
        />

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[110px]
            bg-gradient-to-t
            from-[#FBF7EF]
            via-[#FBF7EF]/58
            to-transparent
          "
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1344px]">
        {/* header */}
        <header className="mx-auto mb-[14px] max-w-[840px] text-center">
          <div className="mb-0 flex justify-center">
            <CustomIcon
              name="LotusIcon"
              className="h-[24px] w-[24px] text-[#E0A24B]"
            />
          </div>

          <div className="mt-0 flex items-center justify-center gap-[12px]">
            <span className="h-px w-[62px] bg-[#D05A17]" />
            <span className="text-[16px] font-bold uppercase tracking-[0.04em] text-[#6E2C18]">
              Our Sewa
            </span>
            <span className="h-px w-[62px] bg-[#D05A17]" />
          </div>

          <h2
            className="
              mt-[1px]
              font-serif
              text-[30px]
              font-semibold
              leading-[0.98]
              text-[#21130D]
              sm:text-[42px]
              lg:text-[49px]
            "
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Essential Support for a
            <span className="mt-[2px] block text-[#D54200]">
              Dignified Final Journey
            </span>
          </h2>

          <div className="mx-auto mt-[8px] flex max-w-[230px] items-center justify-center gap-[8px]">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#DA7643]" />
            <CustomIcon
              name="LotusIcon"
              className="h-[20px] w-[20px] text-[#D45D16]"
            />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#DA7643]" />
          </div>

          <p className="mx-auto mt-[7px] max-w-[700px] text-[16px] leading-[1.42] text-[#2C2825]">
            Moksha Sewa ensures that every individual—regardless of their
            circumstances—receives a respectful and dignified farewell with
            complete care and compassion.
          </p>
        </header>

        {/* cards */}
        <div className="grid grid-cols-1 items-stretch gap-[20px] md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <article
              key={card.title}
              className="
                relative
                flex
                h-auto
                min-h-[565px]
                flex-col
                lg:h-[565px]
                overflow-hidden
                rounded-[19px]
                border
                border-[#E8DDD0]
                bg-white
                shadow-[0_8px_22px_rgba(65,39,18,0.10)]
              "
            >
              {/* top */}
              <div
                className="
                  relative
                  flex
                  h-[250px]
                  shrink-0
                  flex-col
                  items-center
                  px-[14px]
                  pt-[103px]
                  text-center
                "
              >
                <div
                  className="
                    absolute
                    left-1/2
                    top-[5px]
                    flex
                    h-[91px]
                    w-[91px]
                    -translate-x-1/2
                    items-center
                    justify-center
                    rounded-full
                    border-[5px]
                    border-white
                    text-white
                    shadow-[0_5px_14px_rgba(42,29,17,0.20)]
                  "
                  style={{ backgroundColor: card.accent }}
                >
                  <CustomIcon
                    name={card.icon}
                    className="h-[48px] w-[48px]"
                  />
                </div>

                <h3
                  className="
                    whitespace-pre-line
                    font-serif
                    text-[22px]
                    font-semibold
                    leading-[1.04]
                  "
                  style={{
                    color: card.titleColor,
                    fontFamily: "Georgia, 'Times New Roman', serif",
                  }}
                >
                  {card.title}
                </h3>

                <span
                  className="mt-[8px] h-[3px] w-[34px] shrink-0 rounded-full"
                  style={{ backgroundColor: card.accent }}
                />

                <p className="mt-[10px] whitespace-pre-line text-[16px] leading-[1.35] text-[#28211D]">
                  {card.desc}
                </p>
              </div>

              {/* image */}
              <div
                className="
                  relative
                  h-[214px]
                  w-full
                  shrink-0
                  overflow-hidden
                "
              >
                <Image
                  src={card.image}
                  alt={card.title.replace("\n", " ")}
                  fill
                  quality={100}
                  sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 25vw"
                  className="object-cover object-center"
                />
              </div>

              {/* bottom features */}
              <div
                className="
                  flex
                  flex-1
                  flex-col
                  justify-start
                  gap-[10px]
                  px-[16px]
                  pt-[12px]
                  pb-[24px]
                "
                style={{ backgroundColor: card.featureBg }}
              >
                {card.features.map((feature) => (
                  <div
                    key={feature}
                    className="
                      flex
                      items-center
                      gap-[9px]
                      text-[16px]
                      leading-[1.08]
                      text-[#28211D]
                    "
                  >
                    <span
                      className="
                        flex
                        h-[19px]
                        w-[19px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        text-[16px]
                        font-bold
                        leading-none
                        text-white
                      "
                      style={{ backgroundColor: card.accent }}
                    >
                      ✓
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* benefit band */}
        <div
          className="
            mt-[26px]
            overflow-hidden
            rounded-[15px]
            border
            border-[#E5D2B4]
            bg-[#FFF9F0]/95
            shadow-[0_5px_14px_rgba(74,46,20,0.05)]
          "
        >
          <div
            className="
              grid
              grid-cols-1
              divide-y
              divide-[#DBC3A0]
              md:grid-cols-5
              md:divide-x
              md:divide-y-0
            "
          >
            {benefits.map((item) => (
              <div
                key={item.title}
                className="flex min-h-[125px] items-center gap-[13px] px-[15px] py-[13px]"
              >
                <div
                  className="flex h-[54px] w-[54px] shrink-0 items-center justify-center"
                  style={{ color: item.color }}
                >
                  <CustomIcon
                    name={item.icon}
                    className="h-[48px] w-[48px]"
                  />
                </div>

                <div className="min-w-0">
                  <h4 className="text-[16px] font-bold leading-[1.15] text-[#251D18]">
                    {item.title}
                  </h4>
                  <p className="mt-[5px] text-[16px] leading-[1.35] text-[#37302A]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}

            <div className="flex min-h-[125px] flex-col items-center justify-center px-[12px] py-[10px] text-center">
              <CustomIcon
                name="LotusIcon"
                className="h-[35px] w-[35px] text-[#E4520E]"
              />

              <div className="mt-[3px] font-serif text-[18px] italic leading-tight text-[#A84F1D]">
                Together,
              </div>
              <div className="font-serif text-[18px] italic leading-tight text-[#A84F1D]">
                We Serve with Dignity
              </div>

              <div className="mt-[5px] flex items-center gap-[7px]">
                <span className="h-px w-[31px] bg-[#B97032]" />
                <span className="h-[6px] w-[6px] rotate-45 bg-[#B97032]" />
                <span className="h-px w-[31px] bg-[#B97032]" />
              </div>
            </div>
          </div>
        </div>

        {/* bottom cta */}
        <div
          className="
            mt-[21px]
            overflow-hidden
            rounded-[14px]
            bg-gradient-to-r
            from-[#003A68]
            via-[#004C80]
            to-[#003866]
            text-white
            shadow-[0_7px_17px_rgba(10,53,91,0.20)]
          "
        >
          <div className="flex min-h-[82px] flex-col lg:flex-row lg:items-center">
            <div className="flex flex-1 items-center gap-[14px] px-[20px] py-[11px] sm:px-[28px]">
              <span className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full border-2 border-white text-white">
                <CustomIcon
                  name="PhoneIcon"
                  className="h-[25px] w-[25px]"
                />
              </span>

              <div>
                <div className="text-[18px] font-bold leading-tight">
                  Need Immediate Help?
                </div>
                <div className="mt-[2px] text-[16px] leading-[1.25] text-white/90">
                  Our team is available 24x7 to support you.
                </div>
              </div>
            </div>

            <span className="hidden h-[50px] w-px bg-white/40 lg:block" />

            <div
              className="
                flex
                flex-[1.45]
                flex-col
                gap-[12px]
                border-t
                border-white/20
                px-[20px]
                py-[11px]
                sm:flex-row
                sm:items-center
                sm:justify-between
                sm:px-[28px]
                lg:border-t-0
              "
            >
              <div className="flex items-center gap-[15px]">
                <span className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-white text-[26px] leading-none text-[#C62565]">
                  ♥
                </span>

                <div>
                  <div className="text-[18px] font-bold leading-tight">
                    Support Our Mission
                  </div>
                  <div className="mt-[2px] text-[16px] leading-[1.25] text-white/90">
                    Your support can bring dignity to many final journeys.
                  </div>
                </div>
              </div>

              <a
                href="/donation"
                className="
                  group
                  inline-flex
                  h-[49px]
                  min-w-[228px]
                  shrink-0
                  items-center
                  justify-center
                  gap-[15px]
                  rounded-[10px]
                  border
                  border-[#F07019]
                  bg-gradient-to-r
                  from-[#D44100]
                  to-[#EA5A00]
                  px-[21px]
                  text-[16px]
                  font-bold
                  uppercase
                  leading-none
                  text-white
                  shadow-[0_5px_13px_rgba(74,28,5,0.25)]
                  transition
                  duration-300
                  hover:-translate-y-[1px]
                "
              >
                Support Now

                <span className="flex h-[24px] w-[24px] items-center justify-center rounded-full border border-white/90">
                  <CustomIcon
                    name="ArrowRightIcon"
                    className="h-[13px] w-[13px] transition-transform duration-300 group-hover:translate-x-[2px]"
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