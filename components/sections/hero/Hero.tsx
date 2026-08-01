"use client";

import Image from "next/image";
import { ComponentType, useCallback, useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
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
            "/assets/hero-hd/moksha-hero-hd-1.png",
            "/assets/hero-hd/moksha-hero-hd-2.png",
            "/assets/hero-hd/moksha-hero-hd-3.png",
            "/assets/hero-hd/moksha-hero-hd-4.png",
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
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
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
              className="object-cover object-center"
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

      {/* Slider controls */}
      <button
        type="button"
        onClick={previousSlide}
        aria-label="Previous hero image"
        className="absolute left-3 top-1/2 z-40 hidden -translate-y-1/2 rounded-full border border-white/60 bg-black/20 p-2 text-white opacity-0 backdrop-blur-sm transition hover:bg-black/35 group-hover:opacity-100 lg:flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next hero image"
        className="absolute right-3 top-1/2 z-40 hidden -translate-y-1/2 rounded-full border border-white/60 bg-black/20 p-2 text-white opacity-0 backdrop-blur-sm transition hover:bg-black/35 group-hover:opacity-100 lg:flex"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Main content */}
      <div className="relative z-20 mx-auto h-full max-w-7xl px-5 sm:px-7 lg:px-8">
        <div className="flex h-full items-start pt-[118px] sm:pt-[132px] md:pt-[138px] lg:pt-[145px] xl:pt-[155px]">
          <div className="w-full max-w-[720px] md:w-[62%] lg:w-[56%] xl:w-[54%]">
            <h1
              className="text-[34px] font-normal leading-[1.1] tracking-[-0.025em] text-[#30170d] sm:text-[38px] md:text-[40px] lg:text-[42px] xl:text-[44px]"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontWeight: 400,
              }}
            >
              {heading.map((line) => (
                <span
                  key={line}
                  className={line.includes("Sacred Rituals") ? "block lg:whitespace-nowrap" : "block"}
                >
                  {line}
                </span>
              ))}
            </h1>

            <div className="mt-5 flex items-center gap-3 text-[#b27a24]">
              <span className="h-px w-20 bg-[#c99a50]/70" />
              <span className="text-sm">✦</span>
              <span className="h-px w-14 bg-[#c99a50]/70" />
            </div>

            <p className="mt-4 max-w-[535px] text-[15px] font-normal leading-6 text-[#3d3732] sm:text-[16px] lg:text-[16px]">
              {description}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3.5">
              <a
                href={variant === "seva" ? "/sevas" : "/services"}
                className="inline-flex h-[46px] min-w-[182px] items-center justify-center gap-2.5 rounded-lg bg-gradient-to-r from-[#bd8128] to-[#a96913] px-6 text-[14px] font-normal text-white shadow-[0_8px_20px_rgba(137,82,17,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(137,82,17,0.24)]"
              >
                <span>{variant === "seva" ? "Book a Seva" : "Get Support"}</span>
                <CalendarDays className="h-[17px] w-[17px]" strokeWidth={1.7} />
              </a>

              <a
                href={variant === "seva" ? "/sevas" : "/services"}
                className="inline-flex h-[46px] min-w-[182px] items-center justify-center gap-3 rounded-lg border border-[#b98232] bg-white/45 px-6 text-[14px] font-normal text-[#956019] backdrop-blur-[2px] transition hover:bg-white/75"
              >
                <span>{variant === "seva" ? "Explore Sevas" : "Explore Services"}</span>
                <ArrowRight className="h-[17px] w-[17px]" strokeWidth={1.7} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width, thin stats band */}
      <div className="absolute bottom-0 left-0 z-30 w-full border-y border-[#eadbc4] bg-white/95 shadow-[0_-7px_24px_rgba(70,39,13,0.08)] backdrop-blur-md">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 md:h-[64px] md:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`flex min-h-[58px] items-center justify-center gap-2.5 px-3 py-2 md:min-h-0 md:py-0 lg:gap-3 ${
                  index > 0 ? "md:border-l md:border-[#dfc9a6]" : ""
                } ${index > 1 ? "border-t border-[#eadbc3] md:border-t-0" : ""}`}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#e3cda9] bg-[#fffaf2] text-[#ad7420] shadow-[0_3px_9px_rgba(132,83,23,0.09)] lg:h-10 lg:w-10">
                  <Icon className="h-[19px] w-[19px] lg:h-5 lg:w-5" strokeWidth={1.55} />
                </div>

                <div className="min-w-0 text-left">
                  <div
                    className="whitespace-nowrap text-[19px] font-normal leading-none text-[#3a2013] lg:text-[21px]"
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      fontWeight: 400,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="mt-0.5 whitespace-nowrap text-[10px] font-normal leading-4 text-[#40362f] sm:text-[11px] lg:text-[12px]">
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