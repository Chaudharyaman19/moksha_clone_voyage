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
  const end = parseInt(endString.replace(/,/g, "").replace(/\D/g, ""), 10);
  const suffix = endString.replace(/[0-9,]/g, "");
  const formatComma = endString.includes(",");

  const [count, setCount] = useState(0);

  useEffect(() => {
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
  }, [end]);

  return (
    <span>
      {formatComma && end > 999 ? count.toLocaleString("en-IN") : count}
      {suffix}
    </span>
  );
}

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
  primaryButton?: {
    label: string;
    href: string;
  };
  secondaryButton?: {
    label: string;
    href: string;
  };
};

export default function Hero({ variant = "voyage" }: HeroProps) {
  const images = useMemo(
    () =>
      variant === "seva"
        ? [
          "/hero-images/7.png",
          "/hero-images/8.png",
          "/hero-images/1.png",
          "/hero-images/2.png",
          "/hero-images/3.png",
            "/hero-images/4.png",
               "/hero-images/9.png",
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
            heading: ["No One Left Behind.", "Dignity for Every Life."],
              description:
                "For those who have no one, or for families who cannot afford final rites, Moksha Sewa arranges ambulance support, body transport, wood, cloth, flowers and essential ritual items.",
              alt: "Moksha Sewa team helping a helpless family with a dignified final journey",
              primaryButton: {
                label: "Unclaimed Case Help",
                href: "/request-help",
              },
              secondaryButton: {
                label: "Donate for Service",
                href: "/donation",
              },
            },
            {
              heading: ["Ambulance to Cremation Ground,", "Complete Support."],
              description:
                "We arrange ambulance and hearse van support to respectfully move the body from a hospital, home or public place to the cremation ground, so the family or authorities are not left alone.",
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
              heading: ["Wood, Cloth and Flowers,", "We Arrange the Essentials."],
              description:
                "Moksha Sewa arranges basic cremation essentials such as wood, shroud cloth, flowers, ritual items and cremation-ground support for people in need.",
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
              heading: ["For Families in Need,", "Support With Care."],
              description:
                "Many families cannot arrange even basic supplies during their hardest moments. We help provide food, clothing, blankets and ritual items so the final service can happen with respect.",
              alt: "Moksha Sewa volunteers providing ration blankets and ritual materials",
              primaryButton: {
                label: "Donate Essentials",
                href: "/donation",
              },
              secondaryButton: {
                label: "Help a Family",
                href: "/request-help",
              },
            },
            {
              heading: ["Unclaimed or Helpless,", "Every Life Deserves Dignity."],
              description:
                "Whether it is an unclaimed body or a helpless person, dignity matters. We help arrange local support, transport, wood, cremation-ground coordination and basic final-rites arrangements.",
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
              heading: ["At Every Step,", "Volunteers Stand With You."],
              description:
                "Moksha Sewa provides on-ground volunteers to help with ambulance coordination, wood, ritual items, cremation-ground support and a respectful final farewell.",
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
              heading: ["Food Service for People,", "Arranged by Namo Gange."],
              description:
                "After the final rites, arranging food for people can be difficult for many families. Namo Gange helps arrange food service so families in need do not face extra burden.",
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
        { value: "0", label: "Cost for Helpless", icon: FaUsers },
        { value: "24", label: "Hour Ambulance Help", icon: FaLandmark },
        { value: "100%", label: "Respectful Final Rites", icon: FaSmile },
        { value: "1", label: "Call for Full Arrangement", icon: FaShieldAlt },
      ]
      : [
        { value: "24/7", label: "Care Coordinators", icon: FaUsers },
        { value: "15+", label: "Service Cities", icon: FaLandmark },
        { value: "98%", label: "Families Supported", icon: FaSmile },
        { value: "100%", label: "Transparent Support", icon: FaShieldAlt },
      ];

  const trustChips =
    variant === "seva"
      ? ["Unclaimed Body Support", "Ambulance & Wood", "Shroud, Flowers & Ritual Items"]
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
    <>
      <section
      className="group relative w-full aspect-[16/9] lg:aspect-[20/9] min-h-[600px] max-w-none overflow-hidden bg-[#fbf5ea]"
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
                <FaFire className="h-3.5 w-3.5" />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8B6A3E]">
                {variant === "seva"
                  ? "मोक्ष सेवा · Free Final Rites Support"
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
                href={
                  variant === "seva"
                    ? activeSlide.primaryButton?.href ?? "/sevas"
                    : "/services"
                }
                className="group/cta inline-flex h-[46px] min-w-[182px] items-center justify-center gap-2.5 rounded-lg bg-[#8B6A3E] px-6 text-[14px] font-semibold text-white shadow-[0_8px_20px_rgba(107,74,32,0.22)] transition hover:-translate-y-0.5 hover:bg-[#73532F] hover:shadow-[0_12px_26px_rgba(107,74,32,0.28)]"
              >
                <span>
                  {variant === "seva"
                    ? activeSlide.primaryButton?.label ?? "Final Rites Help"
                    : "Get Support"}
                </span>
                <FaCalendarAlt
                  className="h-[17px] w-[17px] transition-transform duration-300 group-hover/cta:translate-x-0.5"
                />
              </a>

              <a
                href={
                  variant === "seva"
                    ? activeSlide.secondaryButton?.href ?? "/sevas"
                    : "/services"
                }
                className="group/cta inline-flex h-[46px] min-w-[182px] items-center justify-center gap-3 rounded-lg border border-[#B89564] bg-white/45 px-6 text-[14px] font-semibold text-[#73532F] backdrop-blur-[2px] transition hover:border-[#8B6A3E] hover:bg-white/80"
              >
                <span>
                  {variant === "seva"
                    ? activeSlide.secondaryButton?.label ?? "Ambulance & Ritual Items"
                    : "Explore Services"}
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
                  className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#5F4630]"
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
      <div className="w-full bg-gradient-to-r from-[#8B6A3E] via-[#9C794C] to-[#8B6A3E] py-1 shadow-md border-b border-[#73532F]">
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
                    className="whitespace-nowrap text-[17px] font-medium leading-none text-white lg:text-[19px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]"
                    style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                  >
                    <AnimatedNumber endString={stat.value} />
                  </div>
                  <div className="mt-1 whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.08em] text-white/90 lg:text-[10px]">
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
