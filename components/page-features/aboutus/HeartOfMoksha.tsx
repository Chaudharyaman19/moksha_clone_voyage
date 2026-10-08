"use client";

import Image from "next/image";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { FaArrowRight, FaHandshake, FaUsers } from "react-icons/fa";
import { PiFlowerLotus, PiHandHeart, PiHandsPraying } from "react-icons/pi";
import { imageOrFallback, itemOrFallback, textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";

const defaultActions = [
  { label: "Be a\nVolunteer", icon: "heart-hands", Fallback: FaUsers },
  { label: "Partner\nWith Us", icon: "partner-icon", Fallback: FaHandshake },
  { label: "Support the\nMission", icon: "heart-hands", Fallback: PiHandHeart },
];

function ActionIcon({ name, Fallback, className = "h-5 w-5" }: { name?: string; Fallback?: any; className?: string }) {
  if (!name && Fallback) return <Fallback className={className} />;
  if (!name) return null;

  const customIcons: Record<string, React.ReactNode> = {
    Privacy: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M32 6 51 13v14c0 13-7 22-19 29-12-7-19-16-19-29V13L32 6Z" />
        <rect x="24" y="30" width="16" height="14" rx="2" />
        <path d="M27 30v-5a5 5 0 0 1 10 0v5" />
      </svg>
    ),
    Verification: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="12" y="10" width="32" height="43" rx="2" />
        <path d="M22 10V6h12v4" />
        <path d="m19 23 3 3 5-6" />
        <path d="M30 23h9" />
        <path d="m19 34 3 3 5-6" />
        <path d="M30 34h9" />
        <path d="m19 45 3 3 5-6" />
        <path d="M30 45h6" />
        <circle cx="46" cy="45" r="9" />
        <path d="m52 51 6 6" />
      </svg>
    ),
    Formalities: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M15 6h25l9 9v37H15Z" />
        <path d="M40 6v10h9" />
        <path d="M22 25h17" />
        <path d="M22 33h17" />
        <path d="M22 41h11" />
        <circle cx="44" cy="46" r="9" />
        <path d="M40 55 44 51l4 4 3-10" />
      </svg>
    ),
    Documentation: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M10 25h18l5 6h21l-4 23H14Z" />
        <path d="M16 25V13h21l8 8v10" />
        <path d="M37 13v9h8" />
      </svg>
    ),
    Body: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M8 39h48" />
        <path d="M12 39v11" />
        <path d="M52 39v11" />
        <path d="M15 27h34c4 0 7 3 7 7v5H8v-5c0-4 3-7 7-7Z" />
        <path d="M20 27c2-5 7-8 12-8 7 0 12 3 15 8" />
        <path d="M22 23h20" />
      </svg>
    ),
    Lotus: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M32 43c-10-7-15-15-12-25 6 2 10 6 12 12 2-6 6-10 12-12 3 10-2 18-12 25Z" />
        <path d="M22 40c-8-2-13-7-14-15 7 0 13 3 17 8" />
        <path d="M42 40c8-2 13-7 14-15-7 0-13 3-17 8" />
        <path d="M16 46c5 2 10 3 16 3s11-1 16-3" />
        <path d="M24 49h16" />
      </svg>
    ),
    Diya: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M32 9c5 7 8 12 8 17a8 8 0 1 1-16 0c0-5 3-10 8-17Z" />
        <path d="M32 35c-8-5-13-5-19-2 3 12 10 18 19 21 9-3 16-9 19-21-6-3-11-3-19 2Z" />
        <path d="M18 42h28" />
      </svg>
    ),
    HeartHands: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M24 15.5c0-4.2 4.5-6 8-2 3.5-4 8-2.2 8 2 0 4.4-4.5 7.6-8 10.7-3.5-3.1-8-6.3-8-10.7Z" />
        <path d="M9 39c5-1 9.5 1.2 13.5 5.5L28 51" />
        <path d="M55 39c-5-1-9.5 1.2-13.5 5.5L36 51" />
        <path d="M9 37v15" />
        <path d="M55 37v15" />
        <path d="M20 33c3.5-3 7.5-4.5 12-4.5S40.5 30 44 33" />
      </svg>
    ),
  };

  const cleanName = name.toLowerCase().replace(/[-_\s]/g, "");
  const customKey = Object.keys(customIcons).find(
    (k) => k.toLowerCase() === cleanName
  );
  if (customKey) return <>{customIcons[customKey]}</>;

  const pascalKey = name
    .split(/[-_\s]+/)
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
    .join("");

  const aliases: Record<string, string> = {
    PartnerIcon:    "Handshake",
    Partner:        "Handshake",
    Hands:          "Handshake",
    HeartHands:     "HeartHands",
    HeartHand:      "HeartHands",
    HeartHandshake: "HeartHandshake",
    GiveIcon:       "HeartHands",
    ServeIcon:      "Heart",
    Leaf:           "Leaf",
    ShieldCheck:    "ShieldCheck",
    Shield:         "Shield",
    UsersRound:     "Users",
    Users:          "Users",
    People:         "Users",
    FamilyHands:    "Users",
    ElderlyCare:    "UserPlus",
    BookOpen:       "BookOpen",
    Diya:           "Diya",
    Flame:          "Diya",
    Fire:          "Diya",
    Ambulance:      "Truck",
    Van:            "Truck",
    Clipboard:      "ClipboardList",
    Document:       "FileText",
    DocumentCheck:  "FileCheck",
    Scale:          "Scale",
    Eye:            "Eye",
    Globe:          "Globe",
    MapPin:         "MapPin",
    Phone:          "Phone",
    Mail:           "Mail",
    Star:           "Star",
    Smile:          "Smile",
    Building:       "Building2",
    Activity:       "Activity",
  };

  const target = aliases[pascalKey] || pascalKey;
  if (customIcons[target]) return <>{customIcons[target]}</>;

  const LucideIcon = (LucideIcons as any)[target] || (LucideIcons as any)[pascalKey];
  if (LucideIcon) {
    return <LucideIcon className={className} strokeWidth={1.7} />;
  }

  if (Fallback) return <Fallback className={className} />;
  return null;
}

export default function HeartOfMoksha() {
  const section = useWebsiteSection("about-heart");
  const actionItems = defaultActions.map((fallback, index) => {
    const item = itemOrFallback(section?.items, index, fallback);
    return {
      label: item.label || fallback.label,
      icon: item.icon || fallback.icon,
      Fallback: fallback.Fallback,
    };
  });

  return (
    <section className="relative min-h-[620px] w-full overflow-hidden bg-[#003a2f] sm:min-h-[560px] lg:aspect-[4/1] lg:min-h-0">
        <Image
          src={imageOrFallback(section?.image, "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165038/moksha-sewa/assets/about-reference/heart-of-moksha-sewa.png")}
          alt="Moksha Sewa volunteers beside a sacred river ghat at sunset"
          fill
          sizes="(max-width: 1344px) 100vw, 1344px"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003b2f]/45 via-transparent to-transparent" />

        <div className="absolute inset-0 z-10">
          <div className="mx-auto flex h-full w-full max-w-7xl items-center px-5 py-10 sm:px-6 lg:px-8 lg:py-0 2xl:px-0">
            <div className="flex h-full w-full items-center text-left text-white lg:w-[61%] max-lg:bg-[#003a2f]/82 max-lg:p-5 max-lg:backdrop-blur-[1px] sm:max-lg:p-7">
              <div className="flex w-full items-center justify-start gap-[4%]">
            <div className="hidden shrink-0 items-center gap-5 lg:flex">
              <PiHandsPraying className="h-16 w-16 text-[#d3a13e]" />
              <span className="h-24 w-px bg-[#d0a14d]/75" />
            </div>

            <div className="flex w-full max-w-[650px] flex-col items-start text-left">
              <p className="font-sans text-[16px] font-semibold uppercase text-[#d8a43d]">
                {textOrFallback(section?.eyebrow, "The Heart of Moksha Sewa", 60)}
              </p>

              <div className="mt-2 flex w-full max-w-[260px] items-center justify-start gap-2 text-[#cda24a] sm:max-w-none">
                <span className="h-px flex-1 bg-[#cda24a]/65 sm:w-24 sm:flex-none" />
                <PiFlowerLotus className="h-5 w-5" />
                <span className="h-px flex-1 bg-[#cda24a]/65 sm:w-24 sm:flex-none" />
              </div>

              <h2 className="mt-3 w-full text-left font-sans text-[26px] font-semibold leading-tight sm:text-[30px]">
                <span className="whitespace-pre-line">{textOrFallback(section?.title, "When Someone Has No One,\nHumanity Must Stand Beside Them.", 150)}</span>
              </h2>

              <p className="mt-4 w-full max-w-[610px] text-left text-[16px] leading-7 text-white/90">
                {textOrFallback(section?.description, "Because the final journey is not only about how life ends. It is about how we choose to stand beside one another until the very end.", 600)}
              </p>

              <div className="mt-5 flex w-full flex-col items-start gap-5 xl:flex-row xl:items-center xl:justify-start">
                <Link href={textOrFallback(section?.buttonHref, "/volunteer/register", 60)} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 w-fit items-center gap-4 bg-[#dda546] px-6 text-[16px] font-bold uppercase tracking-[0.08em] text-[#113e31] shadow-[0_4px_8px_rgba(0,0,0,.2)] transition hover:bg-[#ebba61]">
                  {textOrFallback(section?.buttonLabel, "Join the Mission", 60)}
                  <FaArrowRight className="h-3 w-3" />
                </Link>

                <div className="grid w-full grid-cols-3 items-stretch sm:w-auto">
                  {actionItems.map(({ label, icon, Fallback }, index) => (
                    <div key={label} className={`flex min-w-0 flex-col items-center px-2 text-center sm:min-w-[92px] sm:px-3 ${index ? "border-l border-[#d4aa53]/35" : ""}`}>
                      <span className="grid h-9 w-9 place-items-center border border-[#d0a346] text-[#d0a346]">
                        <ActionIcon name={icon} Fallback={Fallback} className="h-5 w-5" />
                      </span>
                      <span className="mt-1 whitespace-pre-line text-[13px] leading-[1.15] text-white sm:text-[16px]">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>

        <PiFlowerLotus className="pointer-events-none absolute -bottom-10 -left-8 h-36 w-36 text-[#d0a14d]/[.07]" />
    </section>
  );
}
