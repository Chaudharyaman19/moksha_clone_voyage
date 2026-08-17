"use client";

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
    FaWoodStack: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="7" cy="8" r="2.4" />
        <circle cx="12" cy="6" r="2.4" />
        <circle cx="17" cy="8" r="2.4" />
        <circle cx="8.5" cy="13" r="2.4" />
        <circle cx="15.5" cy="13" r="2.4" />
        <circle cx="12" cy="17.5" r="2.4" />
        <path d="M4.5 20h15" />
      </svg>
    ),

    FaPriestOutline: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="7" r="3.1" />
        <path d="M5.2 21c.55-4.35 2.85-6.7 6.8-6.7s6.25 2.35 6.8 6.7" />
        <path d="M9.2 4.9c.8-.8 1.75-1.2 2.8-1.2s2 .4 2.8 1.2" />
        <path d="M9.4 14.8 12 18.6l2.6-3.8" />
        <path d="M8 21v-2.2M16 21v-2.2" />
      </svg>
    ),

    FaHearseVan: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 7h11.5v9H3z" />
        <path d="M14.5 10h3.2l3.3 3.3V16h-6.5z" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
        <path d="M6.2 10.5h4.4M8.4 8.3v4.4" />
      </svg>
    ),

    FaVolunteersOutline: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="7" r="2.8" />
        <circle cx="5.8" cy="9" r="2.2" />
        <circle cx="18.2" cy="9" r="2.2" />
        <path d="M7.2 20c.35-4 1.95-6.1 4.8-6.1s4.45 2.1 4.8 6.1" />
        <path d="M1.9 20c.3-3.3 1.6-5 3.9-5 1.35 0 2.35.55 3 1.55" />
        <path d="M22.1 20c-.3-3.3-1.6-5-3.9-5-1.35 0-2.35.55-3 1.55" />
      </svg>
    ),

    FaArrowRight: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h13" />
        <path d="m14 8 4 4-4 4" />
      </svg>
    ),

    FaClockOutline: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.2v5l3.2 2" />
      </svg>
    ),

    FaFamiliesOutline: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="9" cy="8" r="2.5" />
        <circle cx="16.5" cy="8.5" r="2.1" />
        <path d="M3.5 20c.4-4 2.2-6.2 5.5-6.2s5.1 2.2 5.5 6.2" />
        <path d="M14 14.4c.7-.4 1.5-.6 2.5-.6 2.6 0 4 2 4.4 6.2" />
      </svg>
    ),

    FaShieldOutline: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3 19 6v5c0 4.8-2.8 8-7 10-4.2-2-7-5.2-7-10V6l7-3Z" />
        <path d="m9.1 12 1.9 1.9 4-4.2" />
      </svg>
    ),

    FaMapPinOutline: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.4" />
      </svg>
    ),

    FaFireAlt: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
      </svg>
    ),

    FaGlobeAsia: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),

    FaPrayingHands: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.89 14.75c-.29-.29-.76-.29-1.06 0-.29.29-.29.77 0 1.06l3 3c.29.29.77.29 1.06 0 .29-.29.29-.77 0-1.06l-3-3zM12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z" />
      </svg>
    ),

    FaVideo: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
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
  image?: string;
  href?: string;
}

interface StatItem {
  icon: string;
  value: string;
  label: string;
}

const decorativePattern = {
  backgroundImage:
    "radial-gradient(circle at 18% 18%, rgba(164,112,48,0.08) 0 1px, transparent 1.2px), radial-gradient(circle at 82% 38%, rgba(164,112,48,0.06) 0 1px, transparent 1.2px)",
  backgroundSize: "20px 20px, 26px 26px",
};

export default function HowWeCanHelp() {
  const cards: CardItem[] = [
        {
          icon: "FaWoodStack",
          title: "Wood, Cloth & Flowers",
          desc: "Essential ritual materials arranged for eligible families and verified cases to ensure the final rites.",
          features: ["Wood Support", "Shroud & Flowers", "Basic Items"],
          image: "/assets/how-we-help/four.png",
          href: "/furalservices",
        },
        {
          icon: "FaPriestOutline",
          title: "Ritual Guidance",
          desc: "Priest guidance is coordinated so final prayers can be completed with proper care.",
          features: ["Local Customs", "Final Rites", "Family Guidance"],
          image: "/assets/how-we-help/pandit.png",
          href: "/panditservices",
        },
        {
          icon: "FaHearseVan",
          title: "Ambulance & Hearse Van",
          desc: "Respectful transport coordination from hospital, home or public place to the cremation ground.",
          features: ["Transport Help", "Hearse Van", "Urgent Guidance"],
          image: "/assets/how-we-help/five.png",
          href: "/ambulanceservices",
        },
        {
          icon: "FaVolunteersOutline",
          title: "Volunteers & Ground Help",
          desc: "On-ground volunteers help with case coordination, materials and family guidance.",
          features: ["Ground Support", "Case Guidance", "Volunteer Help"],
          image: "/assets/how-we-help/three.png",
          href: "/prayerhallservices",
        },
      ];

  const stats: StatItem[] = [
        {
          icon: "FaClockOutline",
          value: "24/7",
          label: "Immediate Assistance",
        },
        {
          icon: "FaFamiliesOutline",
          value: "Verified",
          label: "Case Support",
        },
        {
          icon: "FaShieldOutline",
          value: "100%",
          label: "Respectful Care",
        },
        {
          icon: "FaMapPinOutline",
          value: "Delhi NCR",
          label: "Launch Region",
        },
      ];

  return (
    <section className="relative w-full overflow-hidden bg-[#FCF8F0] px-4 py-5 sm:px-5 lg:px-6 lg:py-5">
        <>
          <div
            className="pointer-events-none absolute inset-0 opacity-50"
            style={decorativePattern}
          />
          <div className="pointer-events-none absolute -left-20 top-8 h-72 w-72 rounded-full border border-[#C59658]/10" />
          <div className="pointer-events-none absolute -right-24 top-2 h-96 w-96 rounded-full border border-[#C59658]/10" />
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full border border-[#C59658]/10" />
        </>

      <div className="relative z-10 mx-auto w-full max-w-[1344px]">
        <header className="mx-auto text-center mb-2 max-w-4xl">
          <div className="inline-flex items-center mb-0 gap-4">
            <span className="h-px bg-gradient-to-r from-transparent via-[#A66F2C] to-[#A66F2C] w-20" />

            <span className="rotate-45 text-[16px] leading-none text-[#A66F2C]">
              ◇
            </span>

            <span className="font-semibold uppercase text-[#9A6426] text-[16px] tracking-[0.32em] sm:text-[16px]">
              Moksha Sewa Support
            </span>

            <span className="rotate-45 text-[16px] leading-none text-[#A66F2C]">
              ◇
            </span>

            <span className="h-px bg-gradient-to-l from-transparent via-[#A66F2C] to-[#A66F2C] w-20" />
          </div>

          <h2 className="font-serif text-[24px] font-normal leading-tight text-[#2C180F] sm:text-[28px] lg:text-[30px]">
            What We Arrange
          </h2>

          <p className="mt-1 font-serif text-[16px] leading-snug text-[#855426] sm:text-[18px]">
            Ambulance · Priest · Wood · Cloth · Flowers · Volunteers
          </p>

            <div className="mt-0.5 flex items-center justify-center gap-2 text-[#A66F2C]">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#A66F2C]" />
              <span className="text-[16px]">◇</span>
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#A66F2C]" />
            </div>
        </header>

        <div className="grid grid-cols-1 items-stretch gap-2 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) =>
              <article
                key={card.title}
                className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-[#DEC7A6] bg-[#FFFCF7] shadow-[0_14px_34px_rgba(86,52,22,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(86,52,22,0.15)]"
              >
                <div className="relative h-[155px] overflow-hidden sm:h-[160px] lg:h-[155px] xl:h-[165px]">
                  <Image
                    src={card.image!}
                    alt={card.title}
                    fill
                    quality={95}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/12 to-transparent" />
                </div>

                <div className="relative flex min-h-[240px] flex-1 flex-col px-4 pb-5 pt-6">
                  <div className="absolute left-4 top-0 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#C79045] bg-[#FFFDF8] text-[#A36B26] shadow-[0_6px_16px_rgba(102,61,20,0.14)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D8B57C] bg-white">
                      <CustomIcon name={card.icon} className="h-8 w-8" />
                    </div>
                  </div>

                  <h3 className="font-serif text-[18px] font-normal leading-[1.2] text-[#2F1C12] xl:text-[19px] mt-2">
                    {card.title}
                  </h3>

                  <p className="mt-0.5 min-h-[72px] text-[16px] leading-6 text-[#493326]">
                    {card.desc}
                  </p>

                  <div className="my-2 h-px w-14 bg-gradient-to-r from-[#C08B43] to-transparent" />

                  <div className="min-h-[66px] space-y-1 pb-3">
                    {card.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-1.5 text-[16px] leading-5 text-[#3A291F]"
                      >
                        <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[#A86D1E] text-[16px] font-bold leading-none text-white">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={card.href || "/request-help"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-auto mt-auto inline-flex h-[36px] w-fit shrink-0 items-center justify-center gap-1.5 rounded-lg border border-[#F4C46A] bg-gradient-to-r from-[#B76B16] via-[#E5A93E] to-[#B76B16] px-4 text-center font-serif text-[16px] font-bold leading-none text-white shadow-[0_0_18px_rgba(229,169,62,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(229,169,62,0.72)]"
                  >
                    <span className="whitespace-nowrap">Learn More</span>
                    <CustomIcon name="FaArrowRight" className="h-3 w-3" />
                  </a>
                </div>
              </article>
          )}
        </div>

          <div className="mt-4 overflow-hidden rounded-[2px] border border-[#D9B983] bg-[#FFFDF9]/90 shadow-[0_12px_28px_rgba(86,52,22,0.10)] backdrop-blur-sm">
            <div className="grid grid-cols-1 divide-y divide-[#DEC49C] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex min-h-[52px] items-center justify-center gap-2 px-4 py-2"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D5B47D] bg-[#FFF9EE] text-[#9A6426] shadow-[0_4px_10px_rgba(91,54,20,0.08)]">
                    <CustomIcon name={stat.icon} className="h-[18px] w-[18px]" />
                  </div>

                  <div className="min-w-0 text-left">
                    <div className="font-serif text-[16px] leading-none text-[#2F1D14]">
                      {stat.value}
                    </div>
                    <div className="mt-0.5 text-[16px] leading-tight text-[#432D20]">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-4 flex w-fit items-center gap-3 text-[#B07B36] opacity-80">
            <span className="h-px w-24 bg-gradient-to-r from-transparent to-[#B07B36]" />
            <svg
              viewBox="0 0 64 32"
              className="h-7 w-14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            >
              <path d="M32 28c-12-4-20-11-20-20 9 1 16 5 20 13 4-8 11-12 20-13 0 9-8 16-20 20Z" />
              <path d="M32 21c-7-6-10-12-6-19 4 2 6 6 6 11 0-5 2-9 6-11 4 7 1 13-6 19Z" />
              <path d="M14 29h36" />
            </svg>
            <span className="h-px w-24 bg-gradient-to-l from-transparent to-[#B07B36]" />
          </div>
      </div>
    </section>
  );
}
