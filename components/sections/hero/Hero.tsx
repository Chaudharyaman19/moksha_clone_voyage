"use client";

import Image from "next/image";
import { ComponentType, useCallback, useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Flame,
  Landmark,
  ShieldCheck,
  Smile,
  UsersRound,
} from "lucide-react";

interface HeroProps {
  variant?: "voyage" | "seva";
}

type StatItem = {
  value: string;
  label: string;
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
};

type SlideContent = {
  heading: string[];
  description: string;
  alt: string;
};

export default function Hero({ variant = "voyage" }: HeroProps) {
  const images = useMemo(
    () =>
      variant === "seva"
        ? [
          "/hero-images/u.png",
          "/hero-images/2.png",
          "/hero-images/3.png",
          "/hero-images/4.png",
          "/hero-images/5.png",
        ]
        : [
          "/assets/image.webp",
          "/assets/image3.png",
          "/assets/im3.jpeg",
          "/assets/im4.jpeg",
        ],
    [variant],
  );

  const slideContent = useMemo<SlideContent[]>(
    () =>
      variant === "seva"
        ? [
            {
              heading: ["A Dignified Final Journey.", "Care at Every Step."],
              description:
                "With dignity, care and timely coordination, our trained Sewa team manages respectful transportation, sacred preparation and ghat arrangements, while supporting every family with calm guidance throughout each step of the final journey.",
              alt: "Moksha Sewa team respectfully transporting a departed loved one at a sacred ghat",
            },
            {
              heading: ["Sacred Rites. Peaceful Farewell.", "Guided With Devotion."],
              description:
                "With experienced Pandits and complete ritual arrangements, we help families perform the final rites with devotion, proper traditions and respectful guidance, ensuring every sacred step is completed peacefully at the holy ghats of Bharat.",
              alt: "Family performing final rites with a Pandit beside the sacred river",
            },
            {
              heading: ["Every Ritual. Properly Arranged.", "Dignity in Every Detail."],
              description:
                "From sacred samagri and pyre preparation to Pandit coordination and family support, our Sewa team manages every detail with respect, clarity and care, allowing loved ones to remain present during the final farewell.",
              alt: "Moksha Sewa team arranging sacred samagri and final ritual preparations",
            },
            {
              heading: ["Sacred Waters. Lasting Peace.", "Prayers for the Departed."],
              description:
                "With complete guidance for Asthi Visarjan and related rituals, we arrange the Pandit, samagri and ghat support, helping families offer prayers with devotion, peace and proper tradition at sacred rivers across Bharat.",
              alt: "Family offering flowers and prayers during a sacred riverside ritual",
            },
            {
              heading: ["Sewa Through Compassion.", "Honouring With Kindness."],
              description:
                "Through respectful food Sewa and charitable offerings, we help families honour their loved ones by serving those in need, with complete arrangements, transparent coordination and compassionate support at sacred destinations.",
              alt: "Moksha Sewa volunteers respectfully serving food to people at a sacred ghat",
            },
          ]
        : images.map(() => ({
            heading: [
              "Guided Farewells.",
              "Lasting Memories.",
              "Care Across Borders.",
            ],
            description:
              "Compassionate end-to-end support for families, with verified services, transparent guidance and clear coordination at every step, ensuring every ritual is completed respectfully, peacefully and without unnecessary stress.",
            alt: "Compassionate farewell support for families",
          })),
    [images, variant],
  );

  const stats: StatItem[] =
    variant === "seva"
      ? [
        { value: "50,000+", label: "Sewas Performed", icon: UsersRound },
        { value: "25+", label: "Sacred Destinations", icon: Landmark },
        { value: "98%", label: "Happy Devotees", icon: Smile },
        { value: "100%", label: "Secure & Transparent", icon: ShieldCheck },
      ]
      : [
        { value: "24/7", label: "Care Coordinators", icon: UsersRound },
        { value: "15+", label: "Service Cities", icon: Landmark },
        { value: "98%", label: "Families Supported", icon: Smile },
        { value: "100%", label: "Transparent Support", icon: ShieldCheck },
      ];

  const trustChips =
    variant === "seva"
      ? ["Verified Pandits", "Transparent Pricing", "24/7 Support"]
      : ["Verified Services", "Clear Guidance", "24/7 Support"];

  const [currentIndex, setCurrentIndex] = useState(0);
  const activeSlide = slideContent[currentIndex] ?? slideContent[0];

  const nextSlide = useCallback(() => {
    setCurrentIndex((previous) => (previous + 1) % images.length);
  }, [images.length]);

  const previousSlide = useCallback(() => {
    setCurrentIndex(
      (previous) => (previous - 1 + images.length) % images.length,
    );
  }, [images.length]);

  useEffect(() => {
    const timer = window.setInterval(nextSlide, 5500);
    return () => window.clearInterval(timer);
  }, [nextSlide]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [variant]);

  return (
    <section
      className="group relative h-[790px] max-w-none overflow-hidden bg-[#fbf5ea] md:h-[700px] lg:h-[calc(100svh-80px)] lg:min-h-[620px] lg:max-h-[810px]"
      style={{ width: "100vw", marginLeft: "calc(50% - 50vw)" }}
    >
      {/* HD image slider: image is kept on the right, so it is not stretched across the full page. */}
      <div className="absolute inset-y-0 left-0 right-[-80px] overflow-hidden">
        {images.map((image, index) => (
          <div
            key={image}
            aria-hidden={index !== currentIndex}
            className={`absolute inset-0 min-w-full transition-opacity duration-1000 ease-out ${index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
          >
            <Image
              src={image}
              alt={slideContent[index]?.alt ?? "Moksha Sewa sacred ritual support"}
              fill
              priority={index === 0}
              quality={100}
              unoptimized
              sizes="100vw"
              className={`object-cover object-[76%_center] transition-transform duration-[6000ms] ease-out ${index === currentIndex ? "scale-[1.04]" : "scale-100"
                }`}
            />
          </div>
        ))}

      </div>

      {/* Smooth content-to-image blend: no visible vertical division */}
      <div
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(90deg, #fbf5ea 0%, #fbf5ea 24%, rgba(251,245,234,0.96) 31%, rgba(251,245,234,0.78) 38%, rgba(251,245,234,0.42) 45%, rgba(251,245,234,0.12) 51%, rgba(251,245,234,0) 57%)",
        }}
      />

      {/* Mobile content readability without covering the complete image */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#fbf5ea]/78 via-[#fbf5ea]/38 to-transparent md:hidden" />

      {/* Devanagari watermark — same signature as the rest of the site */}
      <div className="pointer-events-none absolute left-16 top-1/2 z-10 hidden -translate-y-[55%] select-none font-serif text-[240px] leading-none text-[#8B6A3E]/[0.06] lg:block xl:left-24">
        मोक्ष
      </div>

      {/* soft ornamental rings behind the content */}
      <div className="pointer-events-none absolute -left-24 top-1/2 z-10 hidden h-[380px] w-[380px] -translate-y-1/2 rounded-full border border-[#C9A574]/20 lg:block" />
      <div className="pointer-events-none absolute -left-10 top-1/2 z-10 hidden h-[270px] w-[270px] -translate-y-1/2 rounded-full border border-[#C9A574]/12 lg:block" />

      {/* Slider controls */}
      <button
        type="button"
        onClick={previousSlide}
        aria-label="Previous hero image"
        className="absolute left-3 top-1/2 z-40 hidden -translate-y-1/2 rounded-full border border-[#C9A574]/60 bg-[#2C1810]/25 p-2 text-white opacity-0 backdrop-blur-sm transition hover:bg-[#2C1810]/45 group-hover:opacity-100 lg:flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next hero image"
        className="absolute right-3 top-1/2 z-40 hidden -translate-y-1/2 rounded-full border border-[#C9A574]/60 bg-[#2C1810]/25 p-2 text-white opacity-0 backdrop-blur-sm transition hover:bg-[#2C1810]/45 group-hover:opacity-100 lg:flex"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Slide dots + counter — sits just above the stats band */}
      <div className="absolute bottom-[80px] right-5 z-40 hidden items-center gap-3 rounded-full border border-white/25 bg-black/25 px-3 py-1.5 backdrop-blur-md md:flex">
        <div className="flex items-center gap-1.5">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex
                  ? "w-5 bg-[#E4B75F]"
                  : "w-1.5 bg-white/50 hover:bg-white/80"
                }`}
            />
          ))}
        </div>
        <span className="font-serif text-[10px] tracking-[0.18em] text-white/80">
          0{currentIndex + 1} / 0{images.length}
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-20 mx-auto h-full max-w-7xl px-0">
        <div className="flex h-full items-start pt-[124px] sm:pt-[138px] md:pt-[144px] lg:pt-[150px] xl:pt-[160px]">
          <div className="w-full max-w-[720px] md:w-[62%] lg:w-[56%] xl:w-[54%]">
            {/* eyebrow */}
            <div className="mb-4 inline-flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B6A3E] text-white shadow-md">
                <Flame className="h-3.5 w-3.5" />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8B6A3E]">
                {variant === "seva"
                  ? "मोक्ष सेवा · Sacred Sewas of Bharat"
                  : "मोक्ष · With You, Always"}
              </span>
            </div>

            <h1
              className="text-[34px] font-normal leading-[1.1] tracking-[-0.025em] text-[#2C1810] sm:text-[38px] md:text-[40px] lg:text-[42px] xl:text-[44px]"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontWeight: 400,
              }}
            >
              {activeSlide.heading.map((line, index) => (
                <span
                  key={line}
                  className={`${index === 0
                      ? "block lg:whitespace-nowrap"
                      : "block"
                    } ${index === activeSlide.heading.length - 1
                      ? "text-[#8B6A3E]"
                      : ""
                    }`}
                >
                  {line}
                </span>
              ))}
            </h1>

            {/* diya flourish — same as About & Contact */}
            <div className="mt-5 flex items-center gap-2">
              <span className="h-[2px] w-12 bg-[#8B6A3E]" />
              <span className="h-2 w-2 rotate-45 border border-[#8B6A3E] bg-[#C9A574]" />
              <span className="h-px w-20 bg-gradient-to-r from-[#C9A574] to-transparent" />
            </div>

            <p className="mt-4 max-w-[535px] text-[15px] font-normal leading-6 text-[#4F3A2D] sm:text-[16px]">
              {activeSlide.description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3.5">
              <a
                href={variant === "seva" ? "/sevas" : "/services"}
                className="group/cta inline-flex h-[46px] min-w-[182px] items-center justify-center gap-2.5 rounded-lg bg-[#8B6A3E] px-6 text-[14px] font-semibold text-white shadow-[0_8px_20px_rgba(107,74,32,0.22)] transition hover:-translate-y-0.5 hover:bg-[#73532F] hover:shadow-[0_12px_26px_rgba(107,74,32,0.28)]"
              >
                <span>{variant === "seva" ? "Book a Sewa" : "Get Support"}</span>
                <CalendarDays
                  className="h-[17px] w-[17px] transition-transform duration-300 group-hover/cta:translate-x-0.5"
                  strokeWidth={1.7}
                />
              </a>

              <a
                href={variant === "seva" ? "/sevas" : "/services"}
                className="group/cta inline-flex h-[46px] min-w-[182px] items-center justify-center gap-3 rounded-lg border border-[#B89564] bg-white/45 px-6 text-[14px] font-semibold text-[#73532F] backdrop-blur-[2px] transition hover:border-[#8B6A3E] hover:bg-white/80"
              >
                <span>{variant === "seva" ? "Explore Sewas" : "Explore Services"}</span>
                <ArrowRight
                  className="h-[17px] w-[17px] transition-transform duration-300 group-hover/cta:translate-x-0.5"
                  strokeWidth={1.7}
                />
              </a>
            </div>

            {/* trust row */}
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
              {trustChips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#5F4630]"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#8B6A3E]/12">
                    <CheckCircle2 className="h-3 w-3 text-[#8B6A3E]" />
                  </span>
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Full-width, thin stats band — dark with gold, matching the site's stat bars */}
      <div className="stats-band absolute bottom-0 left-0 z-30 w-full overflow-hidden bg-gradient-to-r from-[#6F4F2F] via-[#8B6A3E] to-[#6F4F2F] shadow-[0_-5px_18px_rgba(111,79,47,0.18)]">
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#F1D6A2] to-transparent" />

        <div className="relative z-20 mx-auto grid max-w-[1600px] grid-cols-2 md:h-[44px] md:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`group/stat relative flex min-h-[42px] items-center justify-center gap-2 overflow-hidden px-2 py-1 md:min-h-0 md:py-0 lg:gap-2.5 ${index > 0 ? "md:border-l md:border-white/15" : ""
                  } ${index > 1 ? "border-t border-white/10 md:border-t-0" : ""}`}
              >
                <span className="pointer-events-none absolute right-[17%] top-[7px] text-[10px] leading-none text-[#FFD98A] opacity-95 drop-shadow-[0_0_5px_rgba(255,217,138,0.6)]">
                  ✦
                </span>
                <span className="pointer-events-none absolute right-[11%] top-[15px] text-[7px] leading-none text-[#F1D6A2] opacity-85 drop-shadow-[0_0_4px_rgba(241,214,162,0.5)]">
                  ✦
                </span>

                <div
                  className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#F1D6A2]/80 bg-[#F1D6A2]/18 text-[#FFE2A8] shadow-[0_0_10px_rgba(241,214,162,0.22)] lg:h-7 lg:w-7"
                >
                  <Icon className="h-3.5 w-3.5" strokeWidth={1.7} />
                </div>

                <div className="relative z-10 min-w-0 text-left">
                  <div
                    className="whitespace-nowrap text-[15px] font-semibold leading-none text-[#FFF0C9] drop-shadow-[0_1px_2px_rgba(44,24,16,0.24)] lg:text-[16px]"
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontWeight: 400,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="mt-0.5 whitespace-nowrap text-[9px] font-semibold leading-3 text-white/90 sm:text-[9px] lg:text-[9px]"
                  >
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}