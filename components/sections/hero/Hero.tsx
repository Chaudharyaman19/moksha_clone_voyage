"use client";

import Image from "next/image";
import { ComponentType, useCallback, useEffect, useMemo, useState } from "react";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaFire,
  FaLandmark,
  FaShieldAlt,
  FaSmile,
  FaUsers,
} from "react-icons/fa";

function AnimatedNumber({ endString }: { endString: string }) {
  const shouldAnimate = !/[^0-9,%+]/.test(endString);
  const end = parseInt(endString.replace(/,/g, "").replace(/\D/g, ""), 10);
  const suffix = endString.replace(/[0-9,]/g, "");
  const formatComma = endString.includes(",");

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;

    let startTimestamp: number | null = null;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [end, shouldAnimate]);

  if (!shouldAnimate) {
    return <span>{endString}</span>;
  }

  return (
    <span>
      {formatComma && end > 999 ? count.toLocaleString("en-IN") : count}
      {suffix}
    </span>
  );
}

interface HeroProps {}

type StatItem = {
  value: string;
  label: string;
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
};

type SlideContent = {
  heading: string[];
  description: string;
  alt: string;
  primaryButton?: {
    label: string;
    href: string;
  };
  secondaryButton?: {
    label: string;
    href: string;
  };
};

export default function Hero({}: HeroProps) {
  const images = useMemo(
    () => [
      "/hero-images/7.png",
      "/hero-images/8.png",
      "/hero-images/1.png",
      "/hero-images/2.png",
      "/hero-images/3.png",
      "/hero-images/4.png",
      "/hero-images/9.png",
    ],
    [],
  );

  const slideContent = useMemo<SlideContent[]>(
    () => [
            {
            heading: ["Dignity for Every Life", "Support in Difficult Times"],
              description:
                "Moksha Sewa helps helpless and needy families arrange respectful final-rites support, including ambulance, wood, cloth, flowers, priest guidance and volunteers.",
              alt: "Moksha Sewa team helping a helpless family with a dignified final journey",
              primaryButton: {
                label: "Request Help",
                href: "/request-help",
              },
              secondaryButton: {
                label: "Donate for Sewa",
                href: "/donation",
              },
            },
            {
              heading: ["Ambulance and Hearse Van", "Handled With Care"],
              description:
                "We coordinate ambulance and hearse-van support from hospital, home or public place to the cremation ground, with clear guidance at each step.",
              alt: "Moksha Sewa team arranging hearse van support for a grieving family",
              primaryButton: {
                label: "Call Ambulance",
                href: "tel:+919220147229",
              },
              secondaryButton: {
                label: "Request Transport",
                href: "/request-help",
              },
            },
            {
              heading: ["Wood, Cloth and Flowers", "Essentials Arranged"],
              description:
                "For families who cannot manage the basic items, we help arrange cremation wood, shroud cloth, flowers, lamps and other ritual materials.",
              alt: "Moksha Sewa volunteers supporting a needy family at the cremation ground",
              primaryButton: {
                label: "Sponsor Ritual Items",
                href: "/donation",
              },
              secondaryButton: {
                label: "Request Support",
                href: "/request-help",
              },
            },
            {
              heading: ["Priest and Ritual Support", "Simple Guidance"],
              description:
                "We help arrange priest support and ritual guidance so the final prayers can be completed respectfully, even when the family has limited resources.",
              alt: "Moksha Sewa volunteers arranging priest and ritual materials",
              primaryButton: {
                label: "Request Priest Help",
                href: "/request-help",
              },
              secondaryButton: {
                label: "Sponsor Rituals",
                href: "/donation",
              },
            },
            {
              heading: ["Unclaimed or Helpless", "Never Without Respect"],
              description:
                "In unclaimed or helpless cases, we support the required coordination with local authorities, transport, cremation-ground arrangements and basic final-rites needs.",
              alt: "Moksha Sewa team giving respectful final farewell support",
              primaryButton: {
                label: "Final Rites Help",
                href: "/request-help",
              },
              secondaryButton: {
                label: "Sponsor Final Rites",
                href: "/donation",
              },
            },
            {
              heading: ["Volunteers on Ground", "Families Are Not Alone"],
              description:
                "Our volunteers help families with calls, local coordination, materials, cremation-ground support and practical guidance during the final journey.",
              alt: "Moksha Sewa volunteers doing on-ground service near the cremation ground",
              primaryButton: {
                label: "Become Volunteer",
                href: "/volunteer/register",
              },
              secondaryButton: {
                label: "Support Service",
                href: "/donation",
              },
            },
            {
              heading: ["Food and Basic Support", "For Families in Need"],
              description:
                "Where possible, we help arrange food, water and basic essentials so grieving families do not face extra pressure during the rituals.",
              alt: "Namo Gange volunteers serving food as part of community food service",
              primaryButton: {
                label: "Sponsor Food Service",
                href: "/donation",
              },
              secondaryButton: {
                label: "Donate Food Support",
                href: "/donation",
              },
            },
          ]
    ,
    [],
  );

  const stats: StatItem[] = [
    { value: "24/7", label: "Help Requests", icon: FaUsers },
    { value: "1", label: "Call to Coordinate", icon: FaLandmark },
    { value: "100%", label: "Respectful Care", icon: FaSmile },
    { value: "0", label: "Cost for Eligible Cases", icon: FaShieldAlt },
  ];

  const trustChips = ["Ambulance Support", "Priest & Ritual Items", "Volunteers on Ground"];

  const [currentIndex, setCurrentIndex] = useState(0);
  const activeSlide = slideContent[currentIndex] ?? slideContent[0];
  const activeImage = images[currentIndex] ?? images[0];

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

  return (
    <>
      <section
      className="group relative w-full min-h-[720px] overflow-hidden bg-[#fbf5ea] sm:min-h-[690px] md:aspect-[16/10] md:min-h-[620px] lg:aspect-[20/9] lg:min-h-[600px]"
    >
      {/* HD image slider: image is kept on the right, so it is not stretched across the full page. */}
      <div className="absolute inset-y-0 left-0 right-0 overflow-hidden md:right-[-80px]">
        <div className="absolute inset-0 min-w-full transition-opacity duration-1000 ease-out">
          <Image
            key={activeImage}
            src={activeImage}
            alt={activeSlide.alt}
            fill
            priority={currentIndex === 0}
            fetchPriority={currentIndex === 0 ? "high" : "auto"}
            quality={75}
            sizes="100vw"
            className="object-cover object-[68%_center] transition-transform duration-[6000ms] ease-out sm:object-[72%_center] md:object-[76%_center] scale-[1.04]"
          />
        </div>
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
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#fbf5ea]/92 via-[#fbf5ea]/68 to-[#fbf5ea]/16 md:hidden" />

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
        <FaChevronLeft className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next hero image"
        className="absolute right-3 top-1/2 z-40 hidden -translate-y-1/2 rounded-full border border-[#C9A574]/60 bg-[#2C1810]/25 p-2 text-white opacity-0 backdrop-blur-sm transition hover:bg-[#2C1810]/45 group-hover:opacity-100 lg:flex"
      >
        <FaChevronRight className="h-5 w-5" />
      </button>

      {/* Main content */}
      <div className="relative z-20 mx-auto h-full max-w-7xl px-4 sm:px-5 lg:px-0">
        <div className="flex h-full items-start pt-[104px] sm:pt-[122px] md:pt-[140px] lg:pt-[150px] xl:pt-[160px]">
          <div className="w-full max-w-[720px] md:w-[68%] lg:w-[56%] xl:w-[54%]">
            {/* eyebrow */}
            <div className="mb-3 inline-flex max-w-full items-center gap-2.5 sm:mb-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B6A3E] text-white shadow-md">
                <FaFire className="h-3.5 w-3.5" />
              </span>
              <span className="min-w-0 text-[14px] font-semibold uppercase tracking-[0.16em] text-[#8B6A3E] sm:text-[15px] sm:tracking-[0.28em]">
                मोक्ष सेवा · Final Rites Support
              </span>
            </div>

            <h1
              className="text-[30px] font-normal leading-[1.12] text-[#2C1810] sm:text-[36px] md:text-[38px] lg:text-[42px] xl:text-[44px]"
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

            <p className="mt-4 max-w-[535px] text-[14px] font-normal leading-[1.65] text-[#4F3A2D] sm:text-[16px]">
              {activeSlide.description}
            </p>

            <div className="mt-5 flex flex-col items-stretch gap-3 sm:mt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3.5">
              <a
                href={activeSlide.primaryButton?.href ?? "/sevas"}
                className="group/cta inline-flex min-h-[46px] w-full items-center justify-center gap-2.5 rounded-lg bg-[#8B6A3E] px-5 py-3 text-center text-[14px] font-semibold leading-tight text-white shadow-[0_8px_20px_rgba(107,74,32,0.22)] transition hover:-translate-y-0.5 hover:bg-[#73532F] hover:shadow-[0_12px_26px_rgba(107,74,32,0.28)] sm:w-auto sm:min-w-[182px] sm:px-6"
              >
                <span>
                  {activeSlide.primaryButton?.label ?? "Final Rites Help"}
                </span>
                <FaCalendarAlt
                  className="h-[17px] w-[17px] transition-transform duration-300 group-hover/cta:translate-x-0.5"
                />
              </a>

              <a
                href={activeSlide.secondaryButton?.href ?? "/sevas"}
                className="group/cta inline-flex min-h-[46px] w-full items-center justify-center gap-3 rounded-lg border border-[#B89564] bg-white/60 px-5 py-3 text-center text-[14px] font-semibold leading-tight text-[#73532F] backdrop-blur-[2px] transition hover:border-[#8B6A3E] hover:bg-white/80 sm:w-auto sm:min-w-[182px] sm:px-6"
              >
                <span>
                  {activeSlide.secondaryButton?.label ?? "Ambulance & Ritual Items"}
                </span>
                <FaArrowRight
                  className="h-[17px] w-[17px] transition-transform duration-300 group-hover/cta:translate-x-0.5"
                />
              </a>
            </div>

            {/* trust row */}
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
              {trustChips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#5F4630]"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#8B6A3E]/12">
                    <FaCheckCircle className="h-3 w-3 text-[#8B6A3E]" />
                  </span>
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Premium Stats Band Below Hero */}
      <div className="w-full border-b border-[#73532F] bg-gradient-to-r from-[#8B6A3E] via-[#9C794C] to-[#8B6A3E] py-1 shadow-md">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`group/stat flex items-center justify-center gap-3 px-4 py-1.5 ${index > 0 ? "md:border-l md:border-white/20" : ""
                  } ${index > 1 ? "border-t border-white/20 md:border-t-0" : ""}`}
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition-transform duration-300 group-hover/stat:scale-110 shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]">
                  <Icon className="h-4 w-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]" />
                </div>
                <div className="min-w-0 text-left">
                  <div
                    className="text-[17px] font-medium leading-none text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)] lg:text-[19px]"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    <AnimatedNumber endString={stat.value} />
                  </div>
                  <div className="mt-1 max-w-[120px] text-[14px] font-medium uppercase leading-tight tracking-[0.06em] text-white/90 lg:max-w-none lg:text-[15px]">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
