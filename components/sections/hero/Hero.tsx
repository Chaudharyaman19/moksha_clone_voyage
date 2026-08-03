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

export default function Hero({ variant = "voyage" }: HeroProps) {
  const images = useMemo(
    () =>
      variant === "seva"
        ? [
          "/hero-images/1.png",
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

  const stats: StatItem[] =
    variant === "seva"
      ? [
        { value: "50,000+", label: "Sevas Performed", icon: UsersRound },
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

  const heading =
    variant === "seva"
      ? ["Sacred Rituals. Eternal Peace.", "Blessings for Generations."]
      : ["Guided Farewells.", "Lasting Memories.", "Care Across Borders."];

  const description =
    variant === "seva"
      ? "With devotion, dignity and tradition, we help you perform sacred sevas for your ancestors and loved ones at the holy places of Bharat, with complete guidance, ritual arrangements and compassionate support at every step."
      : "Compassionate end-to-end support for families, with verified services, transparent guidance and clear coordination at every step, ensuring every ritual is completed respectfully, peacefully and without unnecessary stress.";

  return (
    <section className="group relative h-[790px] w-full overflow-hidden bg-[#fbf5ea] md:h-[700px] lg:h-[650px] xl:h-[680px]">
      {/* HD image slider: image is kept on the right, so it is not stretched across the full page. */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[66%] lg:w-[68%]">
        {images.map((image, index) => (
          <div
            key={image}
            aria-hidden={index !== currentIndex}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
          >
            <Image
              src={image}
              alt="Sacred riverside ritual at a holy ghat"
              fill
              priority={index === 0}
              quality={100}
              unoptimized
              sizes="(max-width: 767px) 100vw, 68vw"
              className={`object-cover object-center transition-transform duration-[6000ms] ease-out ${index === currentIndex ? "scale-[1.04]" : "scale-100"
                }`}
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-[#774516]/[0.035]" />
      </div>

      {/* Soft blend between cream content and image. */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(90deg, #fbf5ea 0%, #fbf5ea 32%, rgba(251,245,234,0.98) 39%, rgba(251,245,234,0.83) 47%, rgba(251,245,234,0.34) 56%, rgba(251,245,234,0) 66%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#fbf5ea]/95 via-[#fbf5ea]/86 to-[#fbf5ea]/55 md:hidden" />

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
        <div className="flex h-full items-start pt-[112px] sm:pt-[126px] md:pt-[132px] lg:pt-[138px] xl:pt-[148px]">
          <div className="w-full max-w-[720px] md:w-[62%] lg:w-[56%] xl:w-[54%]">
            {/* eyebrow */}
            <div className="mb-4 inline-flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B6A3E] text-white shadow-md">
                <Flame className="h-3.5 w-3.5" />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8B6A3E]">
                {variant === "seva"
                  ? "मोक्ष सेवा · Sacred Sevas of Bharat"
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
              {heading.map((line, index) => (
                <span
                  key={line}
                  className={`${line.includes("Sacred Rituals")
                      ? "block lg:whitespace-nowrap"
                      : "block"
                    } ${index === heading.length - 1
                      ? "italic text-[#8B6A3E]"
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
              {description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3.5">
              <a
                href={variant === "seva" ? "/sevas" : "/services"}
                className="group/cta inline-flex h-[46px] min-w-[182px] items-center justify-center gap-2.5 rounded-lg bg-[#8B6A3E] px-6 text-[14px] font-semibold text-white shadow-[0_8px_20px_rgba(107,74,32,0.22)] transition hover:-translate-y-0.5 hover:bg-[#73532F] hover:shadow-[0_12px_26px_rgba(107,74,32,0.28)]"
              >
                <span>{variant === "seva" ? "Book a Seva" : "Get Support"}</span>
                <CalendarDays
                  className="h-[17px] w-[17px] transition-transform duration-300 group-hover/cta:translate-x-0.5"
                  strokeWidth={1.7}
                />
              </a>

              <a
                href={variant === "seva" ? "/sevas" : "/services"}
                className="group/cta inline-flex h-[46px] min-w-[182px] items-center justify-center gap-3 rounded-lg border border-[#B89564] bg-white/45 px-6 text-[14px] font-semibold text-[#73532F] backdrop-blur-[2px] transition hover:border-[#8B6A3E] hover:bg-white/80"
              >
                <span>{variant === "seva" ? "Explore Sevas" : "Explore Services"}</span>
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
      <div className="absolute bottom-0 left-0 z-30 w-full bg-gradient-to-r from-[#2C1810] via-[#3B2B21] to-[#2C1810] shadow-[0_-7px_24px_rgba(44,24,16,0.25)]">
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#D9B681] to-transparent" />

        <div className="mx-auto grid max-w-[1600px] grid-cols-2 md:h-[64px] md:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`group/stat flex min-h-[58px] items-center justify-center gap-2.5 px-3 py-2 md:min-h-0 md:py-0 lg:gap-3 ${index > 0 ? "md:border-l md:border-white/10" : ""
                  } ${index > 1 ? "border-t border-white/10 md:border-t-0" : ""}`}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C9A574]/50 bg-[#C9A574]/10 text-[#D9B681] transition-all duration-300 group-hover/stat:bg-[#C9A574] group-hover/stat:text-[#2C1810] lg:h-10 lg:w-10">
                  <Icon className="h-[19px] w-[19px] lg:h-5 lg:w-5" strokeWidth={1.55} />
                </div>

                <div className="min-w-0 text-left">
                  <div
                    className="whitespace-nowrap text-[19px] font-normal leading-none text-[#E8D2AC] lg:text-[21px]"
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontWeight: 400,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="mt-0.5 whitespace-nowrap text-[10px] font-normal leading-4 text-white/70 sm:text-[11px] lg:text-[12px]">
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