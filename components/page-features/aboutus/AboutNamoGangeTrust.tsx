"use client";

import type { ReactElement } from "react";
import * as LucideIcons from "lucide-react";
import { FaArrowRight } from "react-icons/fa";
import { PiFlowerLotus } from "react-icons/pi";
import { itemOrFallback, textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";

// ── icon name → custom SVG map (same pattern as other sections) ──────────────
const customIconMap: Record<string, ReactElement> = {
  HeartHands: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <path d="M24 15.5c0-4.2 4.5-6 8-2 3.5-4 8-2.2 8 2 0 4.4-4.5 7.6-8 10.7-3.5-3.1-8-6.3-8-10.7Z" />
      <path d="M9 39c5-1 9.5 1.2 13.5 5.5L28 51" />
      <path d="M55 39c-5-1-9.5 1.2-13.5 5.5L36 51" />
      <path d="M9 37v15" />
      <path d="M55 37v15" />
      <path d="M20 33c3.5-3 7.5-4.5 12-4.5S40.5 30 44 33" />
    </svg>
  ),
  ShieldCheck: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <path d="M32 8 49 14v13c0 11.5-6.6 19-17 24-10.4-5-17-12.5-17-24V14L32 8Z" />
      <path d="m24 30 5 5 11-12" />
    </svg>
  ),
  Lotus: (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <path d="M32 43c-10-7-15-15-12-25 6 2 10 6 12 12 2-6 6-10 12-12 3 10-2 18-12 25Z" />
      <path d="M22 40c-8-2-13-7-14-15 7 0 13 3 17 8" />
      <path d="M42 40c8-2 13-7 14-15-7 0-13 3-17 8" />
      <path d="M16 46c5 2 10 3 16 3s11-1 16-3" />
      <path d="M24 49h16" />
    </svg>
  ),
};

function SectionIcon({ name }: { name?: string }) {
  if (!name) return null;

  // Normalise: "heart-hands" → "HeartHands"
  const key = name.split("-").map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join("");

  // 1. Try custom SVG map
  if (customIconMap[key]) return customIconMap[key];

  // 2. Alias icon names from admin → Lucide component names
  const lucideAliases: Record<string, string> = {
    // Custom SVG fallbacks → nearest Lucide equivalents
    HeartHands:    "HandHeart",
    HeartHand:     "HandHeart",
    UsersRound:    "UsersRound",
    Globe:         "Globe",
    FamilyHands:   "Users",
    ElderlyCare:   "UserPlus",
    UnclaimedCase: "UserX",
    Document:      "FileText",
    DocumentCheck: "FileCheck",
    Clipboard:     "ClipboardList",
    // Admin-only icon names that don't exist in Lucide
    Report:        "BarChart2",
    People:        "Users",
    Van:           "Truck",
    Fire:          "Flame",
    Priest:        "BookOpen",
    Policy:        "ScrollText",
    GiveIcon:      "HandHeart",
    ServeIcon:     "Heart",
    PartnerIcon:   "Handshake",
    Accountability:"ShieldCheck",
    Diya:          "Flame",
    Hands:         "HelpingHand",
    Ambulance:     "Truck",
    CheckCircle:   "CheckCircle2",
  };

  const lucideKey = lucideAliases[key] ?? key;
  const LucideIcon = (LucideIcons as any)[lucideKey];
  if (LucideIcon) return <LucideIcon className="h-7 w-7" strokeWidth={1.6} />;

  return null;
}

// ── Hardcoded defaults (used when CMS has no icon set) ───────────────────────
const trustValues = [
  { label: "Social Service",        icon: "heart-hands"  },
  { label: "Community Welfare",     icon: "users-round"  },
  { label: "Humanitarian Action",   icon: "globe"        },
  { label: "Responsible Governance",icon: "shield-check" },
];

export default function AboutNamoGangeTrust() {
  const section = useWebsiteSection("about-namo-gange");

  const valueItems = trustValues.map((fallback, index) => {
    const item = itemOrFallback(section?.items, index, fallback);
    return {
      label: item.label || fallback.label,
      icon:  item.icon  || fallback.icon,
    };
  });

  return (
    <section className="relative overflow-hidden bg-[#faf4e9] px-6 lg:px-8 2xl:px-0">
      <div className="mx-auto grid min-h-[410px] w-full max-w-7xl lg:grid-cols-2">
        <div className="relative min-h-[330px] overflow-hidden lg:min-h-[410px]">
          <video
            src={textOrFallback(section?.image, "/assets/videos/namoGange.mp4", 60)}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#322413]/10 via-transparent to-[#faf4e9]/25" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#1f2f24]/35 to-transparent" />

        </div>

        <div className="relative flex items-center px-6 py-8 sm:px-10 lg:px-12 lg:py-7 xl:px-16">
          <PiFlowerLotus className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rotate-[-20deg] text-[#c5aa70]/15" />
          <PiFlowerLotus className="pointer-events-none absolute -bottom-12 right-5 h-36 w-36 text-[#c5aa70]/12" />

          <div className="relative z-10 w-full">
            <div className="flex items-center gap-3 font-sans text-[16px] font-semibold uppercase text-[#24483d]">
              <span className="h-px w-9 bg-[#c49a4e]" />
              <span>{textOrFallback(section?.eyebrow, "The Organisation Behind Moksha Sewa", 150)}</span>
              <span className="h-px flex-1 bg-[#c49a4e]" />
            </div>

            <h2 className="mt-4 font-sans text-[24px] font-semibold leading-[1.05] text-[#123d31] sm:text-[30px]">
              <span className="whitespace-pre-line">{textOrFallback(section?.title, "Rooted in Service.\nDriven by Responsibility.", 150)}</span>
            </h2>

            <div className="mt-4 flex items-center gap-2 text-[#b98735]">
              <span className="h-px w-16 bg-[#cba45c]" />
              <PiFlowerLotus className="h-4 w-4" />
              <span className="h-px w-16 bg-[#cba45c]" />
            </div>

            <div className="mt-4 max-w-[590px] space-y-3 text-[13px] leading-[1.5] text-[#31463f] sm:text-[14px]">
              <p>
                {textOrFallback(section?.description, "Moksha Sewa is an initiative of Namo Gange Trust, an organisation committed to social service, community welfare and meaningful humanitarian action.", 600)}
              </p>
              <p>
                {textOrFallback(section?.secondaryDescription, "Through Moksha Sewa, Namo Gange Trust extends this commitment to one of the most sensitive moments of human life - the final journey.", 600)}
              </p>
            </div>

            <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-4">
                {valueItems.map(({ label, icon }) => (
                  <div key={label} className="text-center">
                    <span className="mx-auto grid h-12 w-12 place-items-center border border-[#d8c59e] bg-[#fbf7ef]/75 text-[#174a3b] shadow-[0_3px_7px_rgba(66,52,31,.08)]">
                      <SectionIcon name={icon} />
                    </span>
                    <span className="mx-auto mt-1.5 block max-w-[100px] text-[10px] font-semibold leading-[1.15] text-[#263e36] sm:text-[11px]">{label}</span>
                    <span className="mx-auto mt-2 block h-px w-5 bg-[#c79a48]" />
                  </div>
                ))}
              </div>

              <a
                href={textOrFallback(section?.buttonHref, "https://www.namogange.org/", 60)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 shrink-0 items-center justify-center gap-4 bg-[#0d4939] px-5 font-serif text-[14px] text-white shadow-[0_5px_10px_rgba(20,63,48,.25)] transition hover:bg-[#093c2f]"
              >
                {textOrFallback(section?.buttonLabel, "Know Namo Gange Trust", 60)}
                <FaArrowRight className="h-3 w-3 text-[#d2a342]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

