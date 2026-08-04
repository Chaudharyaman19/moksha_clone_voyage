"use client";

import Image from "next/image";
import { ReactElement } from "react";

interface CustomIconProps {
  name: string;
  className?: string;
}

const CustomIcon = ({ name, className = "w-6 h-6" }: CustomIconProps) => {
  const icons: Record<string, ReactElement> = {
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
    FaShoppingBag: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 8h12l1 13H5L6 8Z" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      </svg>
    ),
    FaUserOutline: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="7" r="4" />
        <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
      </svg>
    ),
    FaTruckOutline: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 6h11v10H3z" />
        <path d="M14 10h4l3 3v3h-7z" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
      </svg>
    ),
    FaTemple: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M5 18h14M6 9h12v9H6zM4 9l8-6 8 6" />
        <path d="M9 12v6M15 12v6" />
      </svg>
    ),
    FaArrowRight: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
      </svg>
    ),
    FaHeart: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    FaUsers: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
    FaClock: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
      </svg>
    ),
    FaStar: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ),
    FaShield: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 5 6v5c0 4.8 2.8 8 7 10 4.2-2 7-5.2 7-10V6l-7-3Z" />
        <path d="m9.5 12 1.7 1.7 3.6-4" />
      </svg>
    ),
    FaMapPin: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  };

  return icons[name] || <div className={className}>●</div>;
};

interface CardItem {
  icon: string;
  title: string;
  desc: string;
  color: string;
  features: string[];
  image?: string;
}

interface StatItem {
  icon: string;
  value: string;
  label: string;
}

interface HowWeHelpProps {
  variant?: "voyage" | "seva";
}

export default function HowWeCanHelp({ variant = "voyage" }: HowWeHelpProps) {
  const cards: CardItem[] =
    variant === "seva"
      ? [
          {
            icon: "FaShoppingBag",
            title: "Wood & Ritual Items",
            desc: "Cremation wood, shroud cloth, flowers, lamps and prayer items arranged for needy families.",
            color: "from-[#8B6A3E] to-[#A88B5E]",
            features: ["Wood Arrangement", "Shroud & Flowers", "Prayer Items"],
            image: "/assets/how-we-help/four.png",
          },
          {
            icon: "FaUserOutline",
            title: "Priest Support",
            desc: "Priest support is provided so poor families can complete the final rites properly.",
            color: "from-[#5C4033] to-[#7A5B46]",
            features: ["Proper Rituals", "Final Rites", "Family Guidance"],
            image: "/assets/how-we-help/pandit.png",
          },
          {
            icon: "FaTruckOutline",
            title: "Ambulance & Hearse",
            desc: "Body transport from hospital, home or street to cremation ground.",
            color: "from-[#4A716C] to-[#5E8B83]",
            features: ["Body Transport", "Hearse Van", "Urgent Help"],
            image: "/assets/how-we-help/five.png",
          },
          {
            icon: "FaTemple",
            title: "Ground & Prayer Support",
            desc: "Cremation-ground coordination, prayer support and calm guidance for the family.",
            color: "from-[#6B7D6E] to-[#8A9B8C]",
            features: ["Ground Support", "Prayer Setup", "Family Coordination"],
            image: "/assets/how-we-help/three.png",
          },
        ]
      : [
          {
            icon: "FaFireAlt",
            title: "Cremation Services",
            desc: "End-to-end cremation coordination with verified providers, ritual materials, and cremation ground booking.",
            color: "from-[#8B6A3E] to-[#A88B5E]",
            features: ["Cremation Ground Booking", "Pandit Services", "Ritual Materials"],
          },
          {
            icon: "FaGlobeAsia",
            title: "NRI Cross-Border",
            desc: "Dedicated local representatives managing all logistics for families abroad with real-time updates.",
            color: "from-[#5C4033] to-[#7A5B46]",
            features: ["Family Representative", "Legal Documentation", "Body/Ash Repatriation"],
          },
          {
            icon: "FaPrayingHands",
            title: "Grief Support",
            desc: "Professional counselling, peer support communities, and post-funeral ritual guidance.",
            color: "from-[#4A716C] to-[#5E8B83]",
            features: ["Grief Counselling", "Peer Communities", "Ritual Continuity"],
          },
          {
            icon: "FaVideo",
            title: "Digital Legacy",
            desc: "Permanent digital memorials, document vault, and video tributes to preserve memories.",
            color: "from-[#6B7D6E] to-[#8A9B8C]",
            features: ["Digital Memorials", "Document Vault", "Obituary Publishing"],
          },
        ];

  const stats: StatItem[] =
    variant === "seva"
      ? [
          { icon: "FaClock", value: "24/7", label: "Immediate Assistance" },
          { icon: "FaUsers", value: "500+", label: "Families Supported" },
          { icon: "FaShield", value: "100%", label: "Respectful Care" },
          { icon: "FaMapPin", value: "15+", label: "Service Cities" },
        ]
      : [
          { icon: "FaClock", value: "24/7", label: "Care Coordinators" },
          { icon: "FaUsers", value: "30M+", label: "NRI Community Served" },
          { icon: "FaHeart", value: "100%", label: "Pricing Transparency" },
          { icon: "FaStar", value: "12,000 Cr", label: "Indian Funeral Market" },
        ];

  const circleStyles = [
    { width: "80px", height: "80px", left: "10%", top: "20%", background: "radial-gradient(circle at 30% 30%, #E8DBC520, transparent 70%)" },
    { width: "100px", height: "100px", left: "20%", top: "70%", background: "radial-gradient(circle at 30% 30%, #D4C1A620, transparent 70%)" },
    { width: "60px", height: "60px", left: "40%", top: "30%", background: "radial-gradient(circle at 30% 30%, #8B6A3E20, transparent 70%)" },
    { width: "90px", height: "90px", left: "60%", top: "10%", background: "radial-gradient(circle at 30% 30%, #E8DBC520, transparent 70%)" },
    { width: "70px", height: "70px", left: "70%", top: "60%", background: "radial-gradient(circle at 30% 30%, #D4C1A620, transparent 70%)" },
    { width: "110px", height: "110px", left: "85%", top: "40%", background: "radial-gradient(circle at 30% 30%, #8B6A3E20, transparent 70%)" },
    { width: "75px", height: "75px", left: "5%", top: "50%", background: "radial-gradient(circle at 30% 30%, #E8DBC520, transparent 70%)" },
    { width: "85px", height: "85px", left: "90%", top: "80%", background: "radial-gradient(circle at 30% 30%, #D4C1A620, transparent 70%)" },
  ];

  return (
    <section className={`relative w-full overflow-hidden px-3 sm:px-4 lg:px-1 lg:pb-4 ${variant === "seva" ? "pb-0 pt-3 md:pt-4" : "py-6 md:py-8"}`}>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FCF9F3] via-white to-[#F8F4EC]" />
        {circleStyles.map((style, i) => (
          <div key={i} className="absolute rounded-full" style={style} />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-0">
        <div className={`mx-auto max-w-3xl text-center ${variant === "seva" ? "mb-2.5" : "mb-8"}`}>
          <div className={`inline-flex items-center space-x-3 ${variant === "seva" ? "mb-0.5" : "mb-6"}`}>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#8B6A3E] to-transparent" />
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#8B6A3E]">
              {variant === "seva" ? "Moksha Sewa Services" : "Our Services"}
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#8B6A3E] to-transparent" />
          </div>

          {variant === "seva" ? (
            <h2 className="font-serif text-[24px] font-normal leading-tight text-[#2F1D14] sm:text-[28px] lg:text-[30px]">
              What Moksha Sewa Arranges
            </h2>
          ) : (
            <h2 className="mb-4 text-[24px] font-light leading-tight text-[#3A2A1F] sm:text-[28px] lg:text-[30px]">
              <span className="block">End-to-End Cremation &amp;</span>
              <span className="relative inline-block">
                Ritual Services
                <svg className="absolute -bottom-2 left-0 h-2.5 w-full text-[#E8DBC5]/70" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q25,0 50,5 T100,5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </span>
            </h2>
          )}

          <p className="mx-auto mt-0.5 max-w-3xl text-[13px] font-light leading-snug text-[#6E4B3A]">
            {variant === "seva"
              ? "Wood  ·  Shroud  ·  Flowers  ·  Priest  ·  Ambulance  ·  Ground Support"
              : "Verified Service Network · NRI Cross-Border Coordination · Radical Pricing Transparency"}
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ${variant === "seva" ? "mb-3 gap-3" : "mb-10 gap-5"}`}>
          {cards.map((card, index) =>
            variant === "seva" && card.image ? (
              <article key={card.title} className="group overflow-hidden rounded-2xl border border-[#E7D9C7] bg-white shadow-[0_8px_24px_rgba(73,49,30,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(73,49,30,0.13)]">
                <div className="relative h-[190px] overflow-hidden sm:h-[200px] lg:h-[195px] xl:h-[205px]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    quality={95}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="relative flex min-h-[205px] flex-col px-4 pb-3 pt-8 xl:px-4">
                  <div className="absolute -top-7 left-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-[#A77431] to-[#7A4A12] text-white shadow-md">
                    <CustomIcon name={card.icon} className="h-7 w-7" />
                  </div>

                  <h3 className="font-serif text-[18px] font-normal leading-tight text-[#2F1D14] lg:whitespace-nowrap xl:text-[19px]">
                    {card.title}
                  </h3>

                  <p className="mt-1.5 min-h-[34px] text-[12px] font-normal leading-[17px] text-[#4C3528]">
                    {card.desc}
                  </p>

                  <div className="mt-2 space-y-1">
                    {card.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-1.5 text-[11px] font-normal leading-4 text-[#3E2A20]">
                        <span className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-[#8B5616] text-[9px] leading-none text-white">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="mt-3 flex h-8 w-full items-center justify-center gap-1.5 rounded-lg border border-[#A86A25] text-xs font-normal text-[#744211] transition-colors hover:bg-[#FAF2E7]">
                    <span>Learn More</span>
                    <CustomIcon name="FaArrowRight" className="h-3 w-3" />
                  </button>
                </div>
              </article>
            ) : (
              <div key={index} className="relative group">
                <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-[#E8DBC5] bg-white/90 p-5 backdrop-blur-sm">
                  <div className="relative mb-4">
                    <div className="relative mx-auto h-14 w-14">
                      <div className="relative flex h-full w-full items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-white to-[#F8F4EC] shadow-lg">
                        <div className="text-[#8B6A3E]">
                          <CustomIcon name={card.icon} className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="mb-3 text-center text-base font-light text-[#3A2A1F]">{card.title}</h3>
                  <p className="mb-4 flex-grow text-center text-sm leading-relaxed text-[#6E4B3A]">{card.desc}</p>

                  <div className="mb-4 space-y-2">
                    {card.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className={`h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-br ${card.color}`} />
                        <span className="text-xs text-[#6E4B3A]">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto text-center">
                    <button className="inline-flex w-full items-center justify-center space-x-1 rounded-lg border border-[#E8DBC5] px-3 py-1.5 text-xs text-[#8B6A3E] transition-colors hover:bg-[#F8F4EC]">
                      <span>Learn More</span>
                      <CustomIcon name="FaArrowRight" className="h-2.5 w-2.5" />
                    </button>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>

        {variant === "seva" ? (
          <div className="mb-3 overflow-hidden rounded-lg border border-[#E7D9C7] bg-white/75 shadow-[0_4px_12px_rgba(73,49,30,0.045)] backdrop-blur-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 md:divide-x md:divide-[#E0CDB4]">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex min-h-[50px] items-center justify-center gap-2 px-0 py-1"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E2CBAE] bg-gradient-to-br from-[#FBF5EB] to-[#EFE0CA] text-[#81500F] sm:h-9 sm:w-9">
                    <CustomIcon name={stat.icon} className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 text-left">
                    <div className="font-serif text-[18px] leading-none text-[#2F1D14] sm:text-[19px]">
                      {stat.value}
                    </div>
                    <div className="mt-0.5 whitespace-nowrap text-[9px] leading-none tracking-[-0.01em] text-[#37251C] sm:text-[10px] lg:text-[11px]">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="relative">
                <div className="rounded-lg border border-[#E8DBC5] bg-white/50 p-3 backdrop-blur-sm">
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#E8DBC5] to-[#F8F4EC]">
                      <div className="text-[#8B6A3E]">
                        <CustomIcon name={stat.icon} className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-light text-[#8B6A3E]">{stat.value}</div>
                      <div className="whitespace-normal text-xs text-[#6E4B3A]">{stat.label}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center">
          <button className={`${variant === "seva" ? "rounded-lg px-8 py-2" : "rounded-xl px-6 py-3 md:px-8"} relative overflow-hidden bg-gradient-to-br from-[#C58A43] to-[#95601F] text-white shadow-md transition-shadow hover:shadow-lg`}>
            <span className="relative z-10 flex items-center justify-center gap-2 text-sm font-medium md:text-base">
              {variant === "seva" ? "Explore Moksha Sewa" : "Explore All Services"}
              <CustomIcon name="FaArrowRight" className="h-4 w-4" />
            </span>
          </button>

          {variant === "seva" ? (
            <p className="mt-1.5 text-xs text-[#6E3F1F] sm:text-sm">
              For unclaimed and needy cases <span className="mx-2">•</span> Final rites with dignity <span className="mx-2">•</span> Every essential arrangement
            </p>
          ) : (
            <p className="mt-6 text-sm font-light text-[#6E4B3A] md:text-base">
              Need immediate assistance?{" "}
              <a href="tel:+9118001234567" className="font-normal text-[#8B6A3E] hover:underline">
                Call our 24/7 helpline
              </a>
            </p>
          )}
        </div>
      </div>

    </section>
  );
}
