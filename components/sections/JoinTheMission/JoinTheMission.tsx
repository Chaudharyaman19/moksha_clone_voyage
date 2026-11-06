"use client";

import Image from "next/image";
import type { ReactElement } from "react";
import { itemOrFallback, textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";
import * as LucideIcons from "lucide-react";
import AccentTitle from "../shared/AccentTitle";

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
  tint: string;
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
  if (lucideName === "GiveIcon") lucideName = "HeartHandshake";
  if (lucideName === "ServeIcon") lucideName = "Users";
  if (lucideName === "PartnerIcon") lucideName = "Handshake";

  const LucideIcon = (LucideIcons as any)[lucideName];
  if (LucideIcon) {
    return <LucideIcon className={className} strokeWidth={2.8} />;
  }

  return null;
};

/* =========================================================
   CARDS DATA
========================================================= */

const cards: MissionCard[] = [
  {
    image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165146/moksha-sewa/assets/donation-images/donate-sewa.png",
    alt: "A person placing a donation into a Sewa donation box by the river",
    icon: "GiveIcon",
    title: "Give in Sewa",
    description: "Help extend dignified final-rites support to eligible cases.",
    buttonLabel: "Donate",
    buttonHref: "/donation",
    accent: "#3F8A5F",
    tint: "#F6FAF3",
  },
  {
    image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165150/moksha-sewa/assets/donation-images/volunteer-sewa.png",
    alt: "Volunteers supporting an elderly person with compassion",
    icon: "ServeIcon",
    title: "Serve in Sewa",
    description: "Give your valuable time, presence, and compassionate support.",
    buttonLabel: "Volunteer",
    buttonHref: "/volunteer/register",
    accent: "#E8803A",
    tint: "#FFF7EE",
  },
  {
    image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165148/moksha-sewa/assets/donation-images/partner-sewa.png",
    alt: "A professional team discussing a partnership around a laptop",
    icon: "PartnerIcon",
    title: "Partner in Sewa",
    description: "CSR, institutions, hospitals, and various community partners.",
    buttonLabel: "Partner",
    buttonHref: "/partnership",
    accent: "#D1A442",
    tint: "#FEFAEC",
  },
];

export default function JoinTheMission() {
  const websiteSection = useWebsiteSection("join-mission");
  const missionCards = [
    ...cards.map((fallback, index) => {
      const item = itemOrFallback(websiteSection?.items, index, {
        title: fallback.title,
        label: fallback.buttonLabel,
        description: fallback.description,
        image: fallback.image,
        href: fallback.buttonHref,
        icon: fallback.icon,
      });

      return {
        ...fallback,
        image: item.image || fallback.image,
        alt: textOrFallback(item.title, fallback.alt, 120),
        title: textOrFallback(item.title, fallback.title, 60),
        description: textOrFallback(item.description, fallback.description, 140).replace(/\s*\n\s*/g, " "),
        buttonLabel: textOrFallback(item.label, fallback.buttonLabel, 36),
        buttonHref: item.href || fallback.buttonHref,
        icon: item.icon || fallback.icon,
      };
    }),
    ...(websiteSection?.items?.slice(cards.length) ?? []).map((item) => ({
      ...cards[cards.length - 1],
      title: item.title || "New Mission",
      buttonLabel: item.label || "Support",
      description: (item.description || "Additional mission information.").replace(/\s*\n\s*/g, " "),
      image: item.image || cards[cards.length - 1].image,
      buttonHref: item.href || "/",
      icon: item.icon || cards[cards.length - 1].icon,
    })),
  ];

  const headingText = textOrFallback(websiteSection?.title, "There Is a Place for Everyone in Sewa", 95);
  const headingAccent = "Sewa";

  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(180deg,#FFFAF4_0%,#FFF8F1_100%)] px-4 py-4 sm:px-6 lg:px-0 lg:py-5">
      {/* faint lotus outlines in the top corners */}
      {["left-[3%]", "right-[3%]"].map((pos) => (
        <CustomIcon
          key={pos}
          name="Lotus"
          className={`pointer-events-none absolute ${pos} top-3 hidden h-[84px] w-[84px] text-[#F0C9A4]/60 lg:block`}
        />
      ))}

      <div className="wwh-inner relative z-10 mx-auto w-full max-w-[min(1248px,calc(100vw-88px))] max-lg:max-w-none">
        {/* ================= HEADER ================= */}
        <header className="mx-auto mb-4 max-w-[1020px] text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-[52px] bg-gradient-to-r from-transparent to-[#B88335]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#B88335]" />
            <span className="lt-eyebrow font-sans font-semibold uppercase text-[#B77912]">
                {textOrFallback(websiteSection?.eyebrow, "Join The Mission", 60)}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#B88335]" />
            <span className="h-px w-[52px] bg-gradient-to-l from-transparent to-[#B88335]" />
          </div>

          <h2 className="mt-2 font-sans text-[24px] font-semibold leading-[1.1] sm:text-[30px]">
            <AccentTitle text={headingText} accent={headingAccent} />
          </h2>

          <p className="mx-auto mt-1.5 max-w-[1000px] text-[14px] leading-[1.45] text-[#2B2623]">
            {textOrFallback(
              websiteSection?.description,
              "Every act of kindness helps us bring dignity, compassion and support to those who need it most in their final journey.",
              180
            )}
          </p>
        </header>

        {/* ================= 3 CARDS ================= */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {missionCards.map((card) => (
            <article
              key={card.title}
              className="relative grid min-h-[290px] grid-cols-[48%_52%] overflow-hidden rounded-[14px] bg-white shadow-[0_6px_17px_rgba(68,44,20,0.09)] max-sm:min-h-[280px]"
              style={{ boxShadow: `0 8px 22px rgba(70,45,25,0.12), 0 6px 0 -2px ${card.tint}` }}
            >
              {/* image + tinted wedge */}
              <div className="relative" style={{ backgroundColor: card.tint }}>
                <div className="absolute inset-0 overflow-hidden rounded-br-[90px]">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    quality={90}
                    sizes="(max-width:1024px) 50vw, 17vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* content */}
              <div
                className="flex flex-col px-4 pb-4 pt-4 [container-type:inline-size]"
                style={{ background: card.tint }}
              >
                <span
                  className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: card.accent }}
                >
                  <CustomIcon name={card.icon} className="h-[34px] w-[34px]" />
                </span>

                <h3
                  className="mt-2 whitespace-nowrap font-sans text-[length:clamp(17px,12cqw,24px)] font-bold leading-[1.15]"
                  style={{ color: card.accent }}
                >
                  {card.title}
                </h3>

                <span className="mt-2 h-[2px] w-[34px] shrink-0 rounded-full bg-[#B8862F]" />

                <p className="mt-2 text-[14px] leading-[1.42] text-[#2B2623]">{card.description}</p>

                <a
                  href={card.buttonHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-auto flex h-[48px] w-full items-center justify-center gap-2 rounded-[9px] border-2 border-[#D09A2D] bg-[#004B36] text-[15px] font-semibold uppercase tracking-[0.02em] text-white shadow-[0_4px_9px_rgba(45,30,15,0.15)] transition duration-300 hover:-translate-y-[1px] hover:brightness-110"
                >
                  <span>{card.buttonLabel}</span>
                  <CustomIcon name="ArrowRight" className="h-[15px] w-[15px] shrink-0 transition-transform duration-300 group-hover:translate-x-[3px]" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* ================= BOTTOM BAND ================= */}
        <div className="mt-3 grid grid-cols-1 overflow-hidden rounded-[10px] border border-[#E2D6C5] bg-[#F4EBDD] shadow-[0_4px_11px_rgba(70,45,21,0.04)] lg:grid-cols-[1fr_auto]">
          <div className="flex items-center gap-3 px-5 py-3">
            <CustomIcon name="Lotus" className="h-[38px] w-[38px] shrink-0 text-[#B1843E]" />
            <span className="h-9 w-px shrink-0 bg-[#DDD0B9]" />
            <p className="max-w-[760px] text-[14px] leading-[1.4] text-[#2B2623]">
              {textOrFallback(
                websiteSection?.bottomStatement,
                "Whether you give, serve or partner – your support creates a meaningful difference in ensuring dignity and respect in every final journey we are able to support.",
                220
              )}
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 border-t border-[#DDD0B9] px-6 py-3 lg:border-l lg:border-t-0">
            <CustomIcon name="Lotus" className="h-[34px] w-[34px] shrink-0 text-[#B57A28]" />
            <p className="font-sans text-[17px] italic leading-[1.25] text-[#A76A27]">
              Together, we bring compassion to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
