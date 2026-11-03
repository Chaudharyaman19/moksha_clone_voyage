"use client";

import Image from "next/image";
import type { ReactElement } from "react";
import { itemOrFallback, textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";
import * as LucideIcons from "lucide-react";

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

  const iconKey = name ? Object.keys(icons).find(k => k.toLowerCase() === name.toLowerCase().replace(/-/g, "")) : null;
  if (iconKey) return icons[iconKey];

  let lucideName = name?.split("-").map(part => part.charAt(0).toUpperCase() + part.slice(1)).join("");

  if (lucideName === "HeartHands") lucideName = "HandHeart";
  if (lucideName === "Diya") lucideName = "Flame";
  if (lucideName === "Hands") lucideName = "HelpingHand";
  if (lucideName === "Document") lucideName = "FileText";
  if (lucideName === "Clipboard") lucideName = "ClipboardList";
  if (lucideName === "FamilyHands") lucideName = "Users";
  if (lucideName === "ElderlyCare") lucideName = "UserPlus";
  if (lucideName === "UnclaimedCase") lucideName = "UserX";
  if (lucideName === "ShieldCheck") lucideName = "ShieldCheck";

  const LucideIcon = (LucideIcons as any)[lucideName];
  if (LucideIcon) {
    return <LucideIcon className={className} strokeWidth={2.8} />;
  }

  return <span className={className}>•</span>;
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
    title: "Ambulance & Final Journey Van",
    desc: "Respectful transport for the deceased from hospital/home to cremation ground.",
    features: [
      "24x7 Availability",
      "Safe & Timely Transport",
      "Trained & Verified Partners",
    ],
    image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165185/moksha-sewa/assets/how-we-help/five.png",
    accent: "#2F7A28",
    titleColor: "#225D23",
    featureBg: "#F1F7EA",
  },

  {
    icon: "CremationIcon",
    title: "Cremation Coordination",
    desc: "Support in arranging cremation ground coordination and required formalities.",
    features: [
      "Cremation Ground Support",
      "Essential Arrangements",
      "Clean & Respectful Process",
    ],
    image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165187/moksha-sewa/assets/how-we-help/four.png",
    accent: "#F05B00",
    titleColor: "#D64D00",
    featureBg: "#FFF2E6",
  },

  {
    icon: "RitualIcon",
    title: "Ritual & Priest Support",
    desc: "Priest, wood, cloth, flowers and all ritual essentials arranged.",
    features: [
      "Experienced Priests",
      "Ritual Essentials",
      "As Per Tradition & Customs",
    ],
    image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165189/moksha-sewa/assets/how-we-help/pandit.png",
    accent: "#73318B",
    titleColor: "#682B80",
    featureBg: "#F6EDF8",
  },

  {
    icon: "FamilyIcon",
    title: "Family & On-Ground Support",
    desc: "Guidance, volunteers and documentation assistance at every step.",
    features: [
      "Volunteer Support",
      "Documentation Help",
      "Emotional Support",
    ],
    image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165195/moksha-sewa/assets/how-we-help/three.png",
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
      "We serve unclaimed bodies, elderly alone, and families in financial distress.",
    color: "#246833",
  },

  {
    icon: "MapPinIcon",
    title: "Delhi • Ghaziabad • Noida",
    text: "Expanding our network and reach to support more vulnerable people in need.",
    color: "#A86317",
  },

  {
    icon: "ShieldIcon",
    title: "Zero Financial Burden",
    text:
      "Our services are completely free for all those who are unable to afford them.",
    color: "#165A8D",
  },

  {
    icon: "HumanityIcon",
    title: "Humanity First",
    text:
      "Every single life deserves dignity. Every family deserves complete support.",
    color: "#B42058",
  },
];

const decorativePattern = {
  backgroundImage:
    "radial-gradient(circle, rgba(170,112,48,0.055) 0 1px, transparent 1.15px)",
  backgroundSize: "22px 22px",
};

export default function HowWeCanHelp({ isH1 = false }: { isH1?: boolean } = {}) {
  const websiteSection = useWebsiteSection("practical-support");
  const managedCards = [
    ...cards.map((fallback, index) => {
      const item = itemOrFallback(websiteSection?.items, index, {
        title: fallback.title,
        description: fallback.desc,
        image: fallback.image,
        features: fallback.features,
        icon: fallback.icon,
      });
      return {
        ...fallback,
        title: textOrFallback(item.title, fallback.title, 80).replace(/\n/g, " "),
        desc: textOrFallback(item.description, fallback.desc, 180).replace(/\n/g, " "),
        features: item.features?.length ? item.features : fallback.features,
        image: item.image || fallback.image,
        icon: item.icon || fallback.icon,
      };
    }),
    ...(websiteSection?.items?.slice(cards.length + benefits.length) ?? []).map((item) => ({
      ...cards[cards.length - 1],
      title: (item.title || "New Support Service").replace(/\n/g, " "),
      desc: (item.description || "Additional support service.").replace(/\n/g, " "),
      image: item.image || cards[cards.length - 1].image,
    })),
  ];
  const managedBenefits = [
    ...benefits.map((fallback, index) => {
      const item = websiteSection?.items?.[index + cards.length];
      return {
        ...fallback,
        title: textOrFallback(item?.title, fallback.title, 70).replace(/\n/g, " "),
        text: textOrFallback(item?.description, fallback.text, 160).replace(/\n/g, " "),
        icon: item?.icon || fallback.icon,
      };
    }),
  ];

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#FBF7EF]
        px-3
        py-3
        sm:px-5
        sm:py-4
        lg:px-6
        lg:py-4
        xl:py-5
      "
    >
      {/* DOT BACKGROUND */}

      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={decorativePattern}
      />

      {/* LEFT MANDALA */}

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

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          h-[355px]
          w-[540px]
          overflow-hidden
        "
      >
        <Image
          src={websiteSection?.image || "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165233/moksha-sewa/assets/km.jpg"}
          alt="Practical Sewa Support - Dignified Last Rites Services"
          fill
          sizes="540px"
          className="
            block
            object-cover
            object-left
            opacity-35
            md:opacity-100
          "
        />

        {/* LEFT FADE */}

        <div
          className="
            absolute
            inset-y-0
            left-0
            w-[58%]
            bg-gradient-to-r
            from-[#FBF7EF]
            via-[#FBF7EF]/68
            to-transparent
          "
        />

        {/* BOTTOM FADE */}

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[110px]
            bg-gradient-to-t
            from-[#FBF7EF]
            via-[#FBF7EF]/50
            to-transparent
          "
        />
      </div>

      {/* MAIN */}

      <div className="relative z-10 mx-auto w-full max-w-[1344px]">

        {/* HEADER */}

        <header className="mx-auto mb-2.5 sm:mb-3 max-w-[840px] text-center">
          <div className="mb-[1px] flex justify-center">
            <CustomIcon
              name="LotusIcon"
              className="h-[22px] w-[22px] text-[#D76113]"
            />
          </div>

          <div className="flex items-center justify-center gap-[12px]">
            <span className="h-px w-[52px] bg-[#D05A17]" />

            <span className="font-sans text-[14px] sm:text-[15px] font-semibold uppercase text-[#6E2C18]">
              {textOrFallback(websiteSection?.eyebrow, "Our Sewa", 60)}
            </span>

            <span className="h-px w-[52px] bg-[#D05A17]" />
          </div>

          {isH1 ? (
            <h1
              className="
                mt-1
                font-sans
                text-[20px]
                sm:text-[24px]
                lg:text-[27px]
                xl:text-[30px]
                font-semibold
                leading-tight
                text-[#21130D]
                whitespace-nowrap
              "
            >
              Essential Support for a{" "}
              <span className="text-[#D54200]">Dignified Final Journey</span>
            </h1>
          ) : (
            <h2
              className="
                mt-1
                font-sans
                text-[20px]
                sm:text-[24px]
                lg:text-[27px]
                xl:text-[30px]
                font-semibold
                leading-tight
                text-[#21130D]
                whitespace-nowrap
              "
            >
              Essential Support for a{" "}
              <span className="text-[#D54200]">Dignified Final Journey</span>
            </h2>
          )}

          <div className="mx-auto mt-1 flex max-w-[200px] items-center justify-center gap-[8px]">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#DA7643]" />

            <CustomIcon
              name="LotusIcon"
              className="h-[18px] w-[18px] text-[#D45D16]"
            />

            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#DA7643]" />
          </div>

          <p className="mx-auto mt-1 max-w-[700px] text-[13.5px] sm:text-[14px] leading-snug text-[#2C2825]">
            {textOrFallback(
              websiteSection?.description,
              "Moksha Sewa ensures that every individual—regardless of their circumstances—receives a respectful and dignified farewell with complete care and compassion.",
              220
            )}
          </p>
        </header>

        {/* SERVICE CARDS */}

        <div className="grid grid-cols-1 items-stretch gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-4">
          {managedCards.map((card) => (
            <article
              key={card.title}
              className="
                relative
                flex
                h-auto
                flex-col
                overflow-hidden
                rounded-[14px]
                border
                border-[#E8DDD0]
                bg-white
                shadow-[0_4px_16px_rgba(65,39,18,0.08)]
              "
            >
              {/* TOP CONTENT */}

              <div
                className="
                  relative
                  flex
                  shrink-0
                  flex-col
                  items-center
                  px-[12px]
                  pt-[80px]
                  pb-2.5
                  text-center
                "
              >
                <div
                  className="
                    absolute
                    left-1/2
                    top-[6px]
                    flex
                    h-[68px]
                    w-[68px]
                    -translate-x-1/2
                    items-center
                    justify-center
                    rounded-full
                    border-[3.5px]
                    border-white
                    text-white
                    shadow-[0_4px_10px_rgba(42,29,17,0.18)]
                  "
                  style={{
                    backgroundColor: card.accent,
                  }}
                >
                  <CustomIcon
                    name={card.icon}
                    className="h-[34px] w-[34px]"
                  />
                </div>

                <h3
                  className="
                    w-full
                    max-w-full
                    overflow-hidden
                    text-ellipsis
                    whitespace-nowrap
                    font-sans
                    text-[15px]
                    sm:text-[16px]
                    lg:text-[15.5px]
                    xl:text-[17px]
                    2xl:text-[18px]
                    font-semibold
                    leading-tight
                  "
                  style={{
                    color: card.titleColor,
                  }}
                  title={card.title}
                >
                  {card.title}
                </h3>

                <span
                  className="mt-[5px] h-[2.5px] w-[30px] shrink-0 rounded-full"
                  style={{
                    backgroundColor: card.accent,
                  }}
                />

                <p className="mt-1.5 max-w-[280px] text-[13px] sm:text-[13.5px] lg:text-[14px] leading-[1.35] text-[#28211D] line-clamp-2 min-h-[38px]">
                  {card.desc}
                </p>
              </div>

              {/* IMAGE */}

              <div className="relative h-[190px] sm:h-[205px] lg:h-[215px] w-full shrink-0 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title.replace(/\n/g, " ")}
                  fill
                  quality={100}
                  sizes="
                    (max-width:768px) 100vw,
                    (max-width:1024px) 50vw,
                    25vw
                  "
                  className="object-cover object-center"
                />
              </div>

              {/* FEATURES - TIGHT SPACING */}

              <div
                className="
                  flex
                  flex-1
                  flex-col
                  justify-start
                  gap-1.5
                  px-3.5
                  pt-2
                  pb-2.5
                "
                style={{
                  backgroundColor: card.featureBg,
                }}
              >
                {card.features.map((feature) => (
                  <div
                    key={feature}
                    className="
                      flex
                      items-center
                      gap-2
                      text-[13px]
                      sm:text-[13.5px]
                      leading-tight
                      text-[#28211D]
                    "
                  >
                    <span
                      className="
                        flex
                        h-[16px]
                        w-[16px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        text-[10px]
                        font-bold
                        leading-none
                        text-white
                      "
                      style={{
                        backgroundColor: card.accent,
                      }}
                    >
                      ✓
                    </span>

                    <span className="truncate">{feature}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* BENEFIT BAND - PATLA BAND, 2 ROWS CONTENT */}

        <div
          className="
            mt-2
            sm:mt-2.5
            overflow-hidden
            rounded-[10px]
            border
            border-[#E5D2B4]
            bg-[#FFF9F0]/95
            shadow-[0_3px_10px_rgba(74,46,20,0.04)]
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
            {managedBenefits.map((item) => (
              <div
                key={item.title}
                className="flex min-h-0 items-center gap-2 px-2.5 py-1.5 sm:py-2"
              >
                <div
                  className="flex h-[32px] w-[32px] shrink-0 items-center justify-center"
                  style={{
                    color: item.color,
                  }}
                >
                  <CustomIcon
                    name={item.icon}
                    className="h-[26px] w-[26px]"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h4
                    className="whitespace-nowrap truncate text-[13.5px] sm:text-[14px] font-bold leading-tight text-[#251D18]"
                    title={item.title}
                  >
                    {item.title}
                  </h4>

                  <p className="mt-0.5 text-[11.5px] sm:text-[12px] leading-tight text-[#37302A] line-clamp-2 min-h-[26px]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}

            {/* SLOGAN */}

            <div className="flex min-h-0 flex-col items-center justify-center px-2 py-1.5 text-center">
              <CustomIcon
                name="LotusIcon"
                className="h-[22px] w-[22px] text-[#E4520E]"
              />

              <div className="mt-0.5 font-sans text-[13px] sm:text-[13.5px] italic leading-tight text-[#A84F1D] whitespace-nowrap">
                Together,
              </div>

              <div className="font-sans text-[13px] sm:text-[13.5px] italic leading-tight text-[#A84F1D] whitespace-nowrap">
                We Serve with Dignity
              </div>

              <div className="mt-0.5 flex items-center gap-[5px]">
                <span className="h-px w-[20px] bg-[#B97032]" />
                <span className="h-[4px] w-[4px] rotate-45 bg-[#B97032]" />
                <span className="h-px w-[20px] bg-[#B97032]" />
              </div>
            </div>
          </div>
        </div>

        {/* BLUE CTA - PATLA BAND */}

        <div
          className="
            mt-2
            sm:mt-2.5
            overflow-hidden
            rounded-[10px]
            bg-gradient-to-r
            from-[#003A68]
            via-[#004C80]
            to-[#003866]
            text-white
            shadow-[0_4px_12px_rgba(10,53,91,0.15)]
          "
        >
          <div className="flex min-h-[50px] flex-col lg:flex-row lg:items-center">
            {/* LEFT */}

            <div className="flex flex-1 items-center gap-2.5 px-3 py-1.5 sm:px-5">
              <span className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full border border-white text-white">
                <CustomIcon
                  name="PhoneIcon"
                  className="h-[16px] w-[16px]"
                />
              </span>

              <div>
                <div className="text-[14px] sm:text-[15px] font-bold leading-tight whitespace-nowrap">
                  {textOrFallback(websiteSection?.immediateHelpTitle, "Need Immediate Help?", 60)}
                </div>

                <div className="text-[11.5px] sm:text-[12px] leading-tight text-white/90 whitespace-nowrap">
                  {textOrFallback(websiteSection?.immediateHelpDescription, "Our team is available 24x7 to support you.", 100)}
                </div>
              </div>
            </div>

            <span className="hidden h-[30px] w-px bg-white/30 lg:block" />

            {/* RIGHT */}

            <div
              className="
                flex
                flex-[1.45]
                flex-col
                gap-2.5
                border-t
                border-white/20
                px-3
                py-1.5
                sm:flex-row
                sm:items-center
                sm:justify-between
                sm:px-5
                lg:border-t-0
              "
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-white text-[18px] leading-none text-[#C62565]">
                  ♥
                </span>

                <div>
                  <div className="text-[14px] sm:text-[15px] font-bold leading-tight whitespace-nowrap">
                    {textOrFallback(websiteSection?.supportMissionTitle, "Support Our Mission", 50)}
                  </div>

                  <div className="text-[11.5px] sm:text-[12px] leading-tight text-white/90 whitespace-nowrap">
                    {textOrFallback(websiteSection?.supportMissionDescription, "Your support can bring dignity to many final journeys.", 120)}
                  </div>
                </div>
              </div>

              <a
                href={websiteSection?.buttonHref || "/donation"}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  inline-flex
                  h-[36px]
                  min-w-[160px]
                  shrink-0
                  items-center
                  justify-center
                  gap-2.5
                  rounded-[7px]
                  border
                  border-[#F07019]
                  bg-gradient-to-r
                  from-[#D44100]
                  to-[#EA5A00]
                  px-3.5
                  text-[13px]
                  font-bold
                  uppercase
                  leading-none
                  text-white
                  shadow-[0_3px_8px_rgba(74,28,5,0.22)]
                  transition
                  duration-300
                  hover:-translate-y-[1px]
                "
              >
                {textOrFallback(websiteSection?.supportNowLabel, "Support Now", 36)}

                <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full border border-white/90">
                  <CustomIcon
                    name="ArrowRightIcon"
                    className="h-[10px] w-[10px] transition-transform duration-300 group-hover:translate-x-[2px]"
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
