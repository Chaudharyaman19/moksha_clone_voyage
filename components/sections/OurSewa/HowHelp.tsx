"use client";

import Image from "next/image";
import { ClipboardList, Flame, PhoneCall, Truck, Users } from "lucide-react";
import { textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";

const SEWA_CARDS = [
  {
    key: "vehicle",
    title: "Final Journey Vehicle",
    desc: "Respectful transport from home or hospital to the cremation ground.",
    note: "Subject to vehicle availability.",
    image: "/assets/our-sewa/final-journey-vehicle.jpg",
    Icon: Truck,
  },
  {
    key: "cremation",
    title: "Cremation Coordination",
    desc: "We help with arrangements at the cremation ground.",
    image: "/assets/our-sewa/cremation-coordination.jpg",
    Icon: ClipboardList,
  },
  {
    key: "rituals",
    title: "Ritual Materials & Guidance",
    desc: "Help with essential ritual materials and guidance in line with the family's customs.",
    image: "/assets/our-sewa/ritual-materials-guidance.jpg",
    Icon: Flame,
  },
  {
    key: "support",
    title: "On-Ground Family Support",
    desc: "A volunteer to guide families through paperwork and practical arrangements on site.",
    image: "/assets/our-sewa/on-ground-family-support.jpg",
    Icon: Users,
  },
];

export default function HowWeCanHelp() {
  const websiteSection = useWebsiteSection("practical-support");

  const managedCards = SEWA_CARDS.map((card, index) => {
    const item = websiteSection?.items?.[index];
    const title = textOrFallback(item?.title, card.title, 80).replace(/\n/g, " ");
    const desc = textOrFallback(item?.description, card.desc, 160).replace(/\n/g, " ");
    return {
      ...card,
      title,
      desc,
      image: card.image,
    };
  });

  return (
    <section
      className="relative w-full overflow-hidden px-4 py-10 sm:px-6 lg:px-8 lg:py-12"
      style={{ backgroundColor: "#FBF7EF" }}
    >
      {/* Subtle lotus mandala watermarks */}
      <svg
        viewBox="0 0 360 360"
        aria-hidden="true"
        className="pointer-events-none -left-[120px] -top-[80px] absolute h-[340px] w-[340px] text-[#E0A24B]/20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.15"
      >
        <circle cx="180" cy="180" r="42" />
        <circle cx="180" cy="180" r="82" />
        <circle cx="180" cy="180" r="124" />
        {Array.from({ length: 12 }).map((_, i) => (
          <ellipse
            key={i}
            cx="180"
            cy="96"
            rx="18"
            ry="58"
            transform={`rotate(${i * 30} 180 180)`}
          />
        ))}
      </svg>
      <svg
        viewBox="0 0 360 360"
        aria-hidden="true"
        className="pointer-events-none -right-[120px] -top-[80px] absolute h-[340px] w-[340px] text-[#E0A24B]/20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.15"
      >
        <circle cx="180" cy="180" r="42" />
        <circle cx="180" cy="180" r="82" />
        <circle cx="180" cy="180" r="124" />
        {Array.from({ length: 12 }).map((_, i) => (
          <ellipse
            key={i}
            cx="180"
            cy="96"
            rx="18"
            ry="58"
            transform={`rotate(${i * 30} 180 180)`}
          />
        ))}
      </svg>

      <div className="relative z-10 mx-auto max-w-[1260px]">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-2 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#C78F64]/70" />
            <span className="text-[12px] font-bold tracking-[0.2em] text-[#A95A2C] uppercase">
              • OUR SEWA •
            </span>
            <span className="h-px w-10 bg-[#C78F64]/70" />
          </div>

          <h2 className="text-[26px] font-bold leading-tight tracking-tight text-[#2B1910] sm:text-[34px]">
            Essential Support for a{" "}
            <span className="text-[#A95A2C]">Dignified Final Journey</span>
          </h2>

          <p className="mt-2 text-[14px] font-medium text-[#543F31] sm:text-[15.5px]">
            Moksha Sewa provides free last-rites assistance in Delhi NCR for eligible cases.
          </p>
        </div>

        {/* 4-Card Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {managedCards.map(({ key, title, desc, note, image, Icon }) => (
            <article
              key={key}
              className="flex flex-col overflow-hidden rounded-xl border border-[#E6D5BF] bg-[#FAF2E6] shadow-[0_3px_14px_rgba(43,25,16,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(43,25,16,0.1)]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EADBC7]">
                <Image
                  src={image}
                  alt={title}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#DEC9AE] bg-[#FBF7EF] text-[#A95A2C]">
                    <Icon className="h-4 w-4" strokeWidth={1.8} />
                  </span>
                  <span className="h-7 w-px bg-[#DEC9AE]" />
                  <h3 className="text-[15px] font-bold leading-snug text-[#2B1910]">
                    {title}
                  </h3>
                </div>

                <p className="mt-3 text-[13px] leading-relaxed text-[#4E3A2D]">
                  {desc}
                </p>

                {note && (
                  <p className="mt-auto pt-2 text-[11.5px] italic text-[#7B6251]">
                    {note}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Helpline Bar */}
        <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-xl bg-[#94502A] px-5 py-3.5 text-white shadow-[0_4px_14px_rgba(74,28,5,0.18)] sm:flex-row sm:items-center sm:px-6">
          <div className="flex items-center gap-3.5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/60 bg-white/10">
              <PhoneCall className="h-4.5 w-4.5 text-white" />
            </span>
            <div>
              <p className="text-[15px] font-bold leading-tight">Need Immediate Help?</p>
              <p className="text-[12.5px] text-white/90">Our helpline is open 24×7.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href="tel:+919220147229"
              className="inline-flex h-9 items-center justify-center rounded-lg bg-[#FAF2E6] px-4 text-[13px] font-bold text-[#2B1910] shadow-sm transition hover:bg-white"
            >
              Call Helpline
            </a>
            <a
              href="tel:+919220147229"
              className="text-[17px] font-bold tracking-wide text-white hover:underline"
            >
              92201 47229
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
