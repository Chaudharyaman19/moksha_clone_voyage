"use client";

import Image from "next/image";
import { ClipboardList, Flame, PhoneCall, Truck, Users } from "lucide-react";
import { itemOrFallback, textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";
import AccentTitle from "../shared/AccentTitle";

const SEWA_CARDS = [
  {
    key: "vehicle",
    title: "Final Journey\nVehicle",
    description: "Respectful transport from home or hospital to the cremation ground.",
    note: "Subject to vehicle availability.",
    image: "/assets/our-sewa/final-journey-vehicle.jpg",
    Icon: Truck,
  },
  {
    key: "cremation",
    title: "Cremation\nCoordination",
    description: "We help with arrangements at the cremation ground.",
    image: "/assets/our-sewa/cremation-coordination.jpg",
    Icon: ClipboardList,
  },
  {
    key: "rituals",
    title: "Ritual Materials\n& Guidance",
    description: "Help with essential ritual materials and guidance in line with the family's customs.",
    image: "/assets/our-sewa/ritual-materials-guidance.jpg",
    Icon: Flame,
  },
  {
    key: "support",
    title: "On-Ground\nFamily Support",
    description: "A volunteer to guide families through paperwork and practical arrangements on site.",
    image: "/assets/our-sewa/on-ground-family-support.jpg",
    Icon: Users,
  },
];

const LEGACY_SEWA_TITLES = new Set([
  "Ambulance & Final Journey Van",
  "Cremation Coordination",
  "Ritual & Priest Support",
  "Family & On-Ground Support",
]);

export default function PracticalSewaSupport({ isH1 = false }: { isH1?: boolean }) {
  const websiteSection = useWebsiteSection("practical-support");

  const hasCustomCards = Boolean(
    websiteSection?.items?.length &&
      websiteSection.items.slice(0, 4).some((item) => {
        const normalizedTitle = item?.title?.replace(/\s+/g, " ").trim();
        return normalizedTitle && !LEGACY_SEWA_TITLES.has(normalizedTitle);
      }),
  );
  const sourceItems = hasCustomCards ? websiteSection?.items : undefined;

  const managedCards = SEWA_CARDS.map((fallback, index) => {
    const item = itemOrFallback(sourceItems, index, fallback);
    return {
      ...fallback,
      title: textOrFallback(item.title, fallback.title, 95),
      description: textOrFallback(item.description, fallback.description, 220),
    };
  });

  const headingText = "Essential Support for a Dignified Final Journey";
  const headingAccent = "Dignified Final Journey";
  const HeadingTag = isH1 ? "h1" : "h2";

  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(180deg,#FFF8F2_0%,#FFF9F4_55%,#FFF6EE_100%)] px-4 py-6 sm:px-6 lg:px-0 lg:py-8">
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

      <div className="relative z-10 mx-auto w-full max-w-[min(1248px,calc(100vw-88px))] max-lg:max-w-none">
        {/* ================= HEADER ================= */}
        <header className="mx-auto mb-6 max-w-[1020px] text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-[52px] bg-gradient-to-r from-transparent to-[#B88335]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#B88335]" />
            <span className="lt-eyebrow font-sans font-semibold uppercase text-[#B77912]">
              Our Sewa
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#B88335]" />
            <span className="h-px w-[52px] bg-gradient-to-l from-transparent to-[#B88335]" />
          </div>

          <HeadingTag className="mt-2 font-sans text-[24px] font-semibold leading-[1.1] sm:text-[30px]">
            <AccentTitle text={headingText} accent={headingAccent} />
          </HeadingTag>

          <p className="mx-auto mt-1.5 max-w-[760px] text-[14.5px] leading-[1.45] text-[#2B2623]">
            Moksha Sewa provides free last-rites assistance in Delhi NCR for eligible cases.
          </p>
        </header>

        {/* ================= 4 CARDS ================= */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {managedCards.map(({ key, title, description, note, image, Icon }) => (
            <article
              key={key}
              className="flex flex-col overflow-hidden rounded-[14px] border border-[#EAE0D0] bg-[#FAF3E6] shadow-[0_6px_18px_rgba(68,44,20,0.06)]"
            >
              <div className="relative h-[185px] w-full shrink-0 overflow-hidden sm:h-[200px] lg:h-[180px]">
                <Image
                  src={image}
                  alt={title.replace(/\n/g, " ")}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                <div className="flex items-center gap-3.5">
                  <span className="shrink-0 text-[#8B6A3E]">
                    <Icon className="h-12 w-12" strokeWidth={1.6} />
                  </span>
                  <span aria-hidden="true" className="h-12 w-px shrink-0 bg-[#DFD1BC]" />
                  <h3 className="whitespace-pre-line font-sans text-[18px] font-semibold leading-[1.2] text-[#2C1810]">
                    {title}
                  </h3>
                </div>

                <p className="mt-3 text-[14px] leading-[1.52] text-[#2B2623]">
                  {description}
                </p>

                {note && (
                  <p className="mt-auto pt-2 text-[12.5px] italic text-[#7B6251]">
                    {note}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* ================= HELPLINE BAR ================= */}
        <div className="mt-4 flex flex-col items-start justify-between gap-4 rounded-[12px] bg-[#94502A] px-5 py-3.5 text-white shadow-[0_3px_10px_rgba(72,43,16,0.14)] sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/60 bg-white/10">
              <PhoneCall className="h-5 w-5 text-white" />
            </span>
            <span aria-hidden="true" className="h-7 w-px shrink-0 bg-white/30" />
            <div>
              <p className="font-sans text-[15px] font-semibold leading-snug sm:text-[16px]">
                Need Immediate Help?
              </p>
              <p className="text-[13px] text-white/90">Our helpline is open 24×7.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="tel:+919220147229"
              className="inline-flex h-9 items-center justify-center rounded-[8px] bg-[#FAF3E6] px-4 font-sans text-[14px] font-semibold text-[#2C1810] shadow-sm transition hover:bg-white"
            >
              Call Helpline
            </a>
            <a
              href="tel:+919220147229"
              className="font-sans text-[17px] font-semibold tracking-wide text-white hover:underline"
            >
              92201 47229
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
