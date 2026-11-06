"use client";

import Image from "next/image";
import type { ReactElement } from "react";
import { textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";
import * as LucideIcons from "lucide-react";

import AccentTitle from "../shared/AccentTitle";
interface IconProps {
  name: string;
  className?: string;
}

const CustomIcon = ({ name, className = "h-6 w-6" }: IconProps) => {
  const icons: Record<string, ReactElement> = {
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

    ShieldCheck: (
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
        <path d="m24 30 5 5 11-12" />
      </svg>
    ),

    Diya: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 40c7 0 11-3 15-8 4 5 8 8 15 8" />
        <path d="M17 40h30" />
        <path d="M24 45h16" />

        <path d="M32 12c5.5 6.5 6.5 11.5 6.5 15a6.5 6.5 0 1 1-13 0c0-3.5 1-8.5 6.5-15Z" />
        <path d="M32 20c2.2 3 2.8 5.2 2.8 7a2.8 2.8 0 1 1-5.6 0c0-1.8.6-4 2.8-7Z" />

        <path d="M10 29h6" />
        <path d="M48 29h6" />
        <path d="m14 21 5 3" />
        <path d="m50 21-5 3" />
      </svg>
    ),

    HeartHands: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M24 15.5c0-4.2 4.5-6 8-2 3.5-4 8-2.2 8 2 0 4.4-4.5 7.6-8 10.7-3.5-3.1-8-6.3-8-10.7Z" />

        <path d="M9 39c5-1 9.5 1.2 13.5 5.5L28 51" />
        <path d="M55 39c-5-1-9.5 1.2-13.5 5.5L36 51" />

        <path d="M9 37v15" />
        <path d="M55 37v15" />

        <path d="M20 33c3.5-3 7.5-4.5 12-4.5S40.5 30 44 33" />
      </svg>
    ),

    Building: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 54h46" />
        <path d="M15 24h34" />
        <path d="M32 9 13 24h38L32 9Z" />
        <path d="M19 54V29" />
        <path d="M28 54V29" />
        <path d="M37 54V29" />
        <path d="M46 54V29" />
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

  const LucideIcon = (LucideIcons as any)[lucideName];
  if (LucideIcon) {
    return <LucideIcon className={className} strokeWidth={2.8} />;
  }

  return null;
};

const features = [
  {
    icon: "ShieldCheck",
    title: "Legally Authorised Cases",
    text: "We support only legally authorised unclaimed cases.",
    iconColor: "#2F7A52",
    titleColor: "#2F7A52",
    circle: "#EDF5E6",
    bar: "linear-gradient(90deg,#9CC47E,#4F9A6E)",
  },
  {
    icon: "Lotus",
    title: "Dignified Final Rites",
    text: "Every soul deserves a respectful and dignified farewell.",
    iconColor: "#4A2A14",
    titleColor: "#2A1A10",
    circle: "#FDEFD2",
    bar: "linear-gradient(90deg,#F7C262,#EE9446)",
  },
  {
    icon: "HeartHands",
    title: "Compassionate Human Presence",
    text: "Our volunteers stand with care, respect and humanity.",
    iconColor: "#2F7A52",
    titleColor: "#2F7A52",
    circle: "#EDF5E6",
    bar: "linear-gradient(90deg,#9CC47E,#4F9A6E)",
  },
];

export default function HumanitarianCommitment() {
  const websiteSection = useWebsiteSection("humanitarian-commitment");
  const managedFeatures = features.map((fallback, index) => {
    const item = websiteSection?.items?.[index];
    return {
      ...fallback,
      title: textOrFallback(item?.title, fallback.title, 70),
      text: textOrFallback(item?.description, fallback.text, 160),
      icon: item?.icon || fallback.icon,
    };
  });

  return (
    <section className="w-full bg-[#F9F5EE] px-3 py-5 sm:px-4 sm:py-6 lg:px-0 lg:py-8">
      <div className="mx-auto w-full wwh-outer max-w-[min(1280px,calc(100vw-56px))] px-[16px] max-lg:max-w-none">
        {/* =====================================================
            MAIN LARGE CARD (content + image + commitment strip)
        ====================================================== */}
        <div className="relative overflow-hidden rounded-[18px] border border-[#D7AF67] bg-[#FCF8F0] shadow-[0_7px_24px_rgba(74,47,19,0.06)]">
          <div className="grid lg:grid-cols-[60%_40%]">
            {/* ================= LEFT CONTENT ================= */}
            <div className="relative z-10 flex flex-col px-5 pb-3 pt-5 sm:px-7 lg:px-[26px] lg:pb-[10px] lg:pt-[26px]">
              {/* top-left leaf */}
              <svg
                viewBox="0 0 190 240"
                className="pointer-events-none absolute -left-[12px] -top-[4px] h-[200px] w-[150px] text-[#C9C3A8]/50"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
              >
                <path d="M25 220C40 170 75 105 156 34" />
                <path d="M42 171c-24-11-29-35-21-55 24 8 38 26 36 49" />
                <path d="M64 137c-20-16-20-40-8-57 21 13 30 32 23 53" />
                <path d="M91 101c-15-20-8-42 7-56 18 18 21 37 8 54" />
                <path d="M122 69c-9-22 3-41 22-49 13 20 7 37-9 50" />
              </svg>

              {/* eyebrow */}
              <div className="relative z-10 flex items-center justify-center gap-3">
                <span className="hidden h-px w-[52px] bg-gradient-to-r from-transparent to-[#B88335] sm:block" />
                <span className="hidden h-1.5 w-1.5 rounded-full bg-[#B88335] sm:block" />
                <span className="lt-eyebrow text-center font-sans font-semibold uppercase text-[#B77912]">
                  {textOrFallback(websiteSection?.eyebrow, "Our Humanitarian Commitment", 70)}
                </span>
                <span className="hidden h-1.5 w-1.5 rounded-full bg-[#B88335] sm:block" />
                <span className="hidden h-px w-[52px] bg-gradient-to-l from-transparent to-[#B88335] sm:block" />
              </div>

              {/* heading */}
              <h2 className="hum-h2 relative z-10 mx-auto mt-[6px] max-w-[720px] text-center font-sans text-[24px] font-semibold leading-[1.08] sm:text-[30px]">
                <AccentTitle text={textOrFallback(websiteSection?.title, "No One Should Leave\nThis World Without Dignity.", 95)} accent="Dignity." />
              </h2>

              {/* lotus divider */}
              <div className="relative z-10 mt-[6px] flex items-center justify-center gap-[10px]">
                <span className="h-px w-[70px] bg-gradient-to-r from-transparent to-[#D9A05A]" />
                <CustomIcon name="Lotus" className="h-[22px] w-[22px] text-[#E8650C]" />
                <span className="h-px w-[70px] bg-gradient-to-l from-transparent to-[#D9A05A]" />
              </div>

              {/* paragraph */}
              <p className="hum-lead relative z-10 mx-auto mt-[8px] max-w-[470px] text-center text-[14px] leading-[1.5] text-[#3A3A46]">
                {textOrFallback(websiteSection?.description, "Moksha Sewa supports legally authorised unclaimed cases with respectful final-rites coordination after completion of applicable police, hospital and authority formalities. Our team works carefully with the concerned authorities and service partners to help ensure that each final journey is handled with dignity, compassion, proper coordination and due respect. Support is provided only within the approved legal process and after the required documentation, verification and permissions have been completed.", 700)}
              </p>

              {/* 3 feature cards */}
              <div className="relative z-10 mt-[40px] grid grid-cols-1 gap-x-3 gap-y-10 sm:grid-cols-3">
                {managedFeatures.map((item) => (
                  <div
                    key={item.title}
                    className="relative flex flex-col items-center rounded-[14px] bg-[#FFFDF8] px-3 pb-4 pt-[40px] text-center shadow-[0_6px_16px_rgba(90,60,25,0.10)]"
                  >
                    <div
                      className="absolute left-1/2 top-0 flex h-[58px] w-[58px] -translate-x-1/2 -translate-y-[28px] items-center justify-center rounded-full"
                      style={{ backgroundColor: item.circle, color: item.iconColor }}
                    >
                      <CustomIcon name={item.icon} className="h-[30px] w-[30px]" />
                    </div>

                    <h3 className="mt-1 min-h-[38px] max-w-[170px] text-[16px] font-bold leading-[1.15]" style={{ color: item.titleColor }}>
                      {item.title}
                    </h3>

                    <span className="mt-[6px] h-[2px] w-[34px] bg-[#E8650C]" />

                    <p className="mt-[8px] max-w-[190px] text-[14px] leading-[1.35] text-[#3A3A46]">{item.text}</p>

                    <span className="absolute inset-x-0 bottom-0 h-[5px] rounded-b-[14px]" style={{ background: item.bar }} />
                  </div>
                ))}
              </div>
            </div>

            {/* ================= RIGHT IMAGE ================= */}
            <div className="relative min-h-[400px] lg:min-h-[500px]">
              <div className="absolute inset-x-3 bottom-[34px] top-3 overflow-hidden rounded-[22px] border-2 border-[#E2A93C] lg:left-0 lg:right-3 lg:rounded-l-[260px_50%] lg:rounded-r-[24px]">
                <Image
                  src={websiteSection?.image || "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165202/moksha-sewa/assets/image.png"}
                  alt={textOrFallback(websiteSection?.title, "Moksha Sewa unclaimed body support", 120)}
                  fill
                  quality={100}
                  sizes="(max-width: 1024px) 100vw, 41vw"
                  className="object-cover object-center"
                />
              </div>

              {/* overlapping CTA */}
              <div className="absolute bottom-[8px] left-3 right-3 z-20 flex justify-center lg:left-[8%] lg:right-[6%]">
                <a
                  href={websiteSection?.buttonHref || "/unclaimed-body-sewa"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[50px] w-full items-center justify-between gap-3 rounded-[9px] border-2 border-[#D09A2D] bg-[#004B36] px-[10px] py-[6px] text-white shadow-[0_6px_14px_rgba(2,63,40,0.25)]"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full border-[2px] border-[#D3A23A] text-[#E5B94A]">
                      <CustomIcon name="Lotus" className="h-[19px] w-[19px]" />
                    </span>
                    <span className="text-[15px] font-semibold uppercase leading-tight">
                      {textOrFallback(websiteSection?.buttonLabel, "Know About Unclaimed Body Sewa", 60)}
                    </span>
                  </span>
                  <span className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-[#F2B21A] text-white">
                    <CustomIcon name="ArrowRight" className="h-[16px] w-[16px]" />
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* ================= COMMITMENT STRIP ================= */}
          <div className="px-4 pb-4 pt-1 sm:px-5 lg:px-[26px]">
            <div className="relative flex flex-col overflow-hidden rounded-[14px] border border-[#DCC39B] bg-[#FCF8F0] shadow-[0_4px_13px_rgba(75,48,22,0.04)] lg:flex-row lg:items-center">
              <div className="flex shrink-0 items-center gap-3 rounded-[10px] border border-[#E7D5AE] bg-[#F3F0DC] px-6 py-[10px] text-[#2F6A4A] lg:min-w-[220px]">
                <span className="text-[#C99A3A]">
                  <CustomIcon name="Building" className="h-[28px] w-[28px]" />
                </span>
                <h3 className="font-sans text-[16px] font-semibold leading-none">Our Commitment</h3>
              </div>

              <p className="flex-1 px-5 py-3 text-[13px] leading-snug text-[#3A3A46]">
                {textOrFallback(websiteSection?.bottomStatement, "We follow all legal requirements and work in coordination with authorities to ensure dignity and responsibility.", 200)}
              </p>

              <span className="hidden h-9 w-px bg-[#E0A070] lg:block" />

              <div className="flex flex-1 items-center gap-3 px-5 py-3">
                <span className="shrink-0 text-[#0D5539]">
                  <CustomIcon name="ShieldCheck" className="h-[28px] w-[28px]" />
                </span>
                <p className="text-[13px] leading-snug text-[#3A3A46]">
                  {textOrFallback(websiteSection?.secondaryDescription, "All support is subject to verification, applicable legal requirements and availability of resources.", 200)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
