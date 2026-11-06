"use client";

import Image from "next/image";
import type { ReactElement } from "react";
import { itemOrFallback, textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";
import AccentTitle from "../shared/AccentTitle";
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

    LotusIcon: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M32 12c5 6 6 12 0 22-6-10-5-16 0-22Z" />
        <path d="M22 20c-6 3-9 9-5 18 4 5 10 8 15 8" />
        <path d="M42 20c6 3 9 9 5 18-4 5-10 8-15 8" />
        <path d="M9 32c1 8 7 15 23 18 16-3 22-10 23-18" />
        <path d="M18 52h28" />
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

interface HelpCard {
  icon: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  imagePosition?: string;
  color: string;
  titleColor: string;
  tint: string;
}

const helpCards: HelpCard[] = [
  {
    icon: "gavel",
    title: "Unclaimed & Legally Authorised Cases",
    description:
      "We assist with respectful last-rites after completion of all required police, hospital and authority formalities.",
    features: [
      "Support after legal verification",
      "Coordination with authorities",
      "Respectful & dignified last-rites",
    ],
    image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788164996/moksha-sewa/assets/about-optimized/cremation-ritual.webp",
    color: "#3F8A5F",
    titleColor: "#2F7A52",
    tint: "#F6FAF3",
  },
  {
    icon: "PeopleIcon",
    title: "People Without Family or Support",
    description:
      "For those who have no one to stand beside them, we ensure a dignified and respectful final journey.",
    features: [
      "No one left alone in their final journey",
      "Compassionate on-ground support",
      "Respect, care and complete dignity",
    ],
    image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165001/moksha-sewa/assets/about-optimized/family-support.webp",
    color: "#E8803A",
    titleColor: "#D26A22",
    tint: "#FFF7EE",
  },
  {
    icon: "HeartHandsIcon",
    title: "Economically Weaker Families",
    description:
      "Verified support for eligible families who are unable to manage essential last-rites arrangements.",
    features: [
      "Eligibility-based verified support",
      "Essential arrangements provided",
      "Guidance and on-ground assistance",
    ],
    image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165012/moksha-sewa/assets/about-optimized/prayer-hall.webp",
    color: "#D1A442",
    titleColor: "#B58727",
    tint: "#FEFAEC",
  },
];

// 4th card is fixed content (not driven by the CMS items, whose first 3 entries are the cards above).
const dignifiedCareCard: HelpCard = {
  icon: "LotusIcon",
  title: "Dignified & Sensitive Care",
  description:
    "A compassionate, respectful and culturally appropriate last-rites experience for every individual.",
  features: [
    "Respect for all beliefs and traditions",
    "Complete process support",
    "Compassionate and dignified care",
  ],
  image: "/assets/about-optimized/samagri.webp",
  imagePosition: "50% 78%",
  color: "#8A9A3A",
  titleColor: "#6F7F27",
  tint: "#F9FAEC",
};

const trustItems = [
  {
    icon: "ShieldCheckIcon",
    title: "Verified & Transparent",
    text: "Every sewa request is carefully verified before providing help.",
    color: "#3F8A5F",
  },
  {
    icon: "HandshakeIcon",
    title: "Compassion is Our Commitment",
    text: "We serve every life with deep respect, care and full dignity.",
    color: "#E8803A",
  },
  {
    icon: "CompassionIcon",
    title: "Support with Responsibility",
    text: "Our support is subject to verification and legal requirements.",
    color: "#D1A442",
  },
  {
    icon: "MapPinIcon",
    title: "Local Sewa Network",
    text: "Our dedicated teams are available across Delhi • Ghaziabad • Noida for support.",
    color: "#8A9A3A",
  },
];

/* wavy divider between the card photo and the card body */
function CardWave({ color, tint }: { color: string; tint: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 44"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-x-0 bottom-[-1px] z-10 h-[30px] w-full"
    >
      <path d="M0 30C70 6 130 44 215 26S340 2 400 14V44H0Z" fill={tint} />
      <path d="M0 30C70 6 130 44 215 26S340 2 400 14" fill="none" stroke={color} strokeWidth="4.5" strokeLinecap="round" />
    </svg>
  );
}

export default function WhoWeHelp() {
  const websiteSection = useWebsiteSection("who-we-help");
  const managedHelpCards: HelpCard[] = [
    ...helpCards.map((fallback, index) => {
      const item = itemOrFallback(websiteSection?.items, index, fallback);
      return {
        ...fallback,
        title: textOrFallback(item.title, fallback.title, 95),
        description: textOrFallback(item.description, fallback.description, 220),
        image: item.image || fallback.image,
        icon: item.icon || fallback.icon,
      };
    }),
    dignifiedCareCard,
  ];
  const managedTrustItems = trustItems.map((fallback, index) => {
    const item = websiteSection?.items?.[index + helpCards.length];
    return {
      ...fallback,
      title: textOrFallback(item?.title, fallback.title, 80),
      text: textOrFallback(item?.description, fallback.text, 180),
    };
  });

  const headingText = textOrFallback(websiteSection?.subtitle, "Standing Beside Those Who Need Us Most", 95);
  const headingAccent = "Who Need Us Most";

  return (
    <section className="who-we-help-section relative w-full overflow-hidden bg-[linear-gradient(180deg,#FFF8F2_0%,#FFF9F4_55%,#FFF6EE_100%)] px-4 py-3 sm:px-6 lg:px-0 lg:py-5">
      {/* faint lotus outlines in the top corners */}
      {["-left-16 top-3", "-right-16 top-3"].map((pos) => (
        <svg
          key={pos}
          viewBox="0 0 300 300"
          aria-hidden="true"
          className={`pointer-events-none absolute ${pos} hidden h-[210px] w-[210px] text-[#E4B98F]/40 lg:block`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          {Array.from({ length: 12 }).map((_, index) => (
            <ellipse key={index} cx="150" cy="83" rx="15" ry="42" transform={`rotate(${index * 30} 150 150)`} />
          ))}
          <circle cx="150" cy="150" r="30" />
        </svg>
      ))}

      <div className="wwh-inner relative z-10 mx-auto w-full max-w-[min(1248px,calc(100vw-88px))] max-lg:max-w-none">
        {/* ================= HEADER ================= */}
        <header className="mx-auto mb-4 max-w-[1020px] text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-[52px] bg-gradient-to-r from-transparent to-[#B88335]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#B88335]" />
            <span className="lt-eyebrow font-sans font-semibold uppercase text-[#B77912]">
              {textOrFallback(websiteSection?.eyebrow, "Who We Help", 60)}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#B88335]" />
            <span className="h-px w-[52px] bg-gradient-to-l from-transparent to-[#B88335]" />
          </div>

          <h2 className="mt-2 font-sans text-[24px] font-semibold leading-[1.1] sm:text-[30px]">
            <AccentTitle text={headingText} accent={headingAccent} />
          </h2>

          <p className="mx-auto mt-1.5 max-w-[760px] text-[14.5px] leading-[1.45] text-[#2B2623]">
            {textOrFallback(websiteSection?.description, "Moksha Sewa provides compassionate last-rites support for unclaimed cases and families in need with dignity, respect and complete sensitivity.", 220)}
          </p>
        </header>

        {/* ================= 4 CARDS ================= */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {managedHelpCards.map((card) => (
            <article
              key={card.title}
              className="relative flex flex-col overflow-hidden rounded-[14px] bg-white shadow-[0_6px_17px_rgba(68,44,20,0.09)]"
              style={{ backgroundColor: card.tint, borderBottom: `4px solid ${card.color}` }}
            >
              {/* photo + wave */}
              <div className="relative h-[120px] shrink-0 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  quality={90}
                  sizes="(max-width:1024px) 100vw, 25vw"
                  className="object-cover"
                  style={card.imagePosition ? { objectPosition: card.imagePosition } : undefined}
                />
                <CardWave color={card.color} tint={card.tint} />
              </div>

              {/* icon badge on the wave */}
              <div
                className="absolute left-1/2 top-[90px] z-20 flex h-[58px] w-[58px] -translate-x-1/2 items-center justify-center rounded-full border-[3px] border-white text-white shadow-[0_4px_12px_rgba(41,25,14,0.22)]"
                style={{ backgroundColor: card.color }}
              >
                <CustomIcon name={card.icon} className="h-[29px] w-[29px]" />
              </div>

              {/* content */}
              <div className="flex flex-1 flex-col px-3 pb-3 pt-[34px] text-center">
                <h3
                  className="mx-auto min-h-[44px] max-w-[200px] font-sans text-[18px] font-bold leading-[1.15] [text-wrap:balance]"
                  style={{ color: card.titleColor }}
                >
                  {card.title}
                </h3>

                <p className="mx-auto mt-1 min-h-[56px] text-[14px] leading-[1.38] text-[#2B2623]">
                  {card.description}
                </p>

                <div className="mt-auto flex flex-col gap-[2px] pt-2 text-left">
                  {card.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-[7px] whitespace-nowrap py-[3px] text-[12.5px] leading-tight text-[#2B2623]"
                    >
                      <span
                        className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
                        style={{ backgroundColor: card.color }}
                      >
                        ✓
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ================= TRUST STRIP ================= */}
        <div className="mt-3 grid grid-cols-1 overflow-hidden rounded-[12px] border border-[#E5DED6] bg-[#FFFDF9] shadow-[0_4px_12px_rgba(58,37,20,0.05)] sm:grid-cols-2 lg:grid-cols-4">
          {managedTrustItems.map((item, index) => (
            <div
              key={item.title}
              className={`flex items-center gap-3 px-4 py-2.5 ${index > 0 ? "lg:border-l lg:border-[#EBDCCB]" : ""} ${index % 2 === 1 ? "sm:border-l sm:border-[#EBDCCB] lg:border-l" : ""}`}
            >
              <span className="shrink-0" style={{ color: item.color }}>
                <CustomIcon name={item.icon} className="h-[40px] w-[40px]" />
              </span>
              <div className="min-w-0">
                <p className="font-sans text-[14.5px] font-bold leading-tight" style={{ color: item.color }}>
                  {item.title}
                </p>
                <p className="mt-1 text-[12px] leading-[1.35] text-[#3A332E]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ================= LEGAL NOTE ================= */}
        <div className="relative mt-2.5 flex items-center gap-4 overflow-hidden rounded-[10px] border border-[#ECDCBF] bg-gradient-to-r from-[#FFF5DF] via-[#FFF9EE] to-[#FFF5DF] px-5 py-2.5 shadow-[0_3px_10px_rgba(72,43,16,0.04)]">
          <span className="shrink-0 text-[#C99A3A]">
            <CustomIcon name="LotusIcon" className="h-[30px] w-[30px]" />
          </span>
          <span className="h-7 w-px shrink-0 bg-[#E0C99A]" />
          <p className="font-sans text-[15px] font-semibold leading-snug text-[#4A3420] sm:text-[16px]">
            Support is subject to case verification, availability and applicable legal requirements.
          </p>
          <CustomIcon name="LotusIcon" className="pointer-events-none absolute -bottom-3 right-4 h-[64px] w-[64px] text-[#DDB96E]/30" />
        </div>
      </div>
    </section>
  );
}
