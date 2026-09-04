"use client";

import Image from "next/image";
import { ComponentType, useCallback, useEffect, useMemo, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaLandmark,
  FaShieldAlt,
  FaSmile,
  FaUsers,
  FaPrayingHands,
  FaHandHoldingHeart,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart,
  FaStar,
  FaCheckCircle,
  FaInfoCircle,
} from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { PiFlowerLotus } from "react-icons/pi";
import { imageOrFallback, itemOrFallback, textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";
import type { LandingSectionItem } from "@/lib/landingContent";

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

type StatItem = {
  value: string;
  label: string;
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
};

type SlideContent = {
  heading: string[];
  headingHighlight?: string;
  description: string;
  descriptionHighlight?: string;
  alt: string;
  showMissionExtras?: boolean;
  familySupportLayout?: boolean;
  journeyPrayerLayout?: boolean;
  volunteerImpactLayout?: boolean;
  primaryButton?: {
    label: string;
    href: string;
  };
  secondaryButton?: {
    label: string;
    href: string;
  };
};

export default function Hero() {
  const websiteSection = useWebsiteSection("hero");
  const itemSlides = useMemo(
    () =>
      (websiteSection?.items ?? [])
        .filter((item) => item.image)
        .map((item) => ({
          title: item.title || "New Hero Slide",
          description: item.description || "",
          image: imageOrFallback(item.image, "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788164944/moksha-sewa/hero-images/dignity-in-every-final-journey-bg.png"),
          alt: item.title || "Hero slide image",
          buttonLabel: item.label || websiteSection?.buttonLabel || "Learn More",
          buttonHref: item.href || websiteSection?.buttonHref || "/",
          secondaryButtonLabel: websiteSection?.secondaryButtonLabel || "Support This Mission",
          secondaryButtonHref: websiteSection?.secondaryButtonHref || "/donation",
          variant: "default" as const,
        })),
    [websiteSection],
  );
  const managedSlides = useMemo(
    () => [...(websiteSection?.slides ?? []), ...itemSlides],
    [itemSlides, websiteSection?.slides],
  );
  const images = useMemo(
    () => managedSlides.length ? managedSlides.map((slide) => imageOrFallback(slide.image, "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788164944/moksha-sewa/hero-images/dignity-in-every-final-journey-bg.png")) : [
      imageOrFallback(websiteSection?.image, "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788164944/moksha-sewa/hero-images/dignity-in-every-final-journey-bg.png"),
      "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788164948/moksha-sewa/hero-images/image2.png",
      "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788164950/moksha-sewa/hero-images/image3.png",
      "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788164954/moksha-sewa/hero-images/image7.png",
      "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788164955/moksha-sewa/hero-images/image8.png",
      "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788164966/moksha-sewa/hero-images/volunteer-impact-v2.png",
      // "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788164929/moksha-sewa/hero-images/1.png",
      // "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788164931/moksha-sewa/hero-images/2.png",
      // "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788164932/moksha-sewa/hero-images/3.png",
      // "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788164933/moksha-sewa/hero-images/4.png",
      // "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788164943/moksha-sewa/hero-images/9.png",
    ],
    [managedSlides, websiteSection?.image],
  );

  const slideContent = useMemo<SlideContent[]>(
    () => {
      const fallbackSlides: SlideContent[] = [
        {
          heading: ["Dignity in Every", "Final Journey"],
          description:
            "Supporting weaker families with compassionate last-rites assistance.",
          descriptionHighlight: "compassionate last-rites assistance.",
          alt: "Moksha Sewa team helping a helpless family with a dignified final journey",
          primaryButton: {
            label: "Request Sewa Help",
            href: "/request-help",
          },
          secondaryButton: {
            label: "Support This Mission",
            href: "/donation",
          },
        },
        {
        heading: ["No One Leaves", "Without Final Dignity."],
        headingHighlight: "Without Final Dignity.",
        description:
          "Respectful last rites for authorised unclaimed cases.",
        descriptionHighlight: "Respectful last rites",
        alt: "Moksha Sewa volunteers providing dignified last rites support for an authorised unclaimed case",
        primaryButton: {
          label: "Know Our Mission",
          href: "/about",
        },
        secondaryButton: {
          label: "Support This Mission",
          href: "/donation",
        },
        },
        {
        heading: ["Be the Reason", "Dignity Reaches Someone."],
        headingHighlight: "Dignity Reaches Someone.",
        description:
          "Your support brings dignity through every farewell.",
        descriptionHighlight: "dignity",
        alt: "Moksha Sewa volunteers supporting an elderly couple with dignity and compassion",
        primaryButton: {
          label: "Support This Mission",
          href: "/donation",
        },
        secondaryButton: {
          label: "Become a Volunteer",
          href: "/volunteer/register",
        },
        },
        {
        heading: ["When a Family Cannot", "Afford a Final Farewell."],
        headingHighlight: "Afford a Final Farewell.",
        description:
          "Humanity stands beside families through every farewell.",
        descriptionHighlight: "families",
        alt: "Moksha Sewa volunteers standing beside a grieving family with dignity and compassion",
        familySupportLayout: true,
        primaryButton: {
          label: "Request Support",
          href: "/request-help",
        },
        secondaryButton: {
          label: "Support a Family",
          href: "/donation",
        },
        },
        {
        heading: ["Final Journey to Prayer", "We Stand Beside Them."],
        headingHighlight: "We Stand Beside Them.",
        description:
          "Transport and rituals support families with compassion.",
        descriptionHighlight: "with compassion.",
        alt: "Moksha Sewa transport, rituals and family support during a dignified final journey",
        journeyPrayerLayout: true,
        primaryButton: {
          label: "Explore Our Sewa",
          href: "/prayerhallservices",
        },
        secondaryButton: {
          label: "Support This Mission",
          href: "/donation",
        },
        },
        {
        heading: ["Be the Reason", "Dignity Reaches Someone."],
        headingHighlight: "Dignity Reaches Someone.",
        description:
          "Your time brings comfort, care and compassion.",
        descriptionHighlight: "care and compassion.",
        alt: "Moksha Sewa volunteers serving with compassion and dignity",
        volunteerImpactLayout: true,
        primaryButton: {
          label: "Become a Volunteer",
          href: "/volunteer/register",
        },
        secondaryButton: {
          label: "Support This Mission",
          href: "/donation",
        },
      },
      ];

      const hasAdminHeroContent = Boolean(
        managedSlides.length ||
        websiteSection?.title ||
        websiteSection?.subtitle ||
        websiteSection?.buttonLabel ||
        websiteSection?.secondaryButtonLabel
      );
      if (managedSlides.length) {
        return managedSlides.map((slide, index) => {
          const fallback = fallbackSlides[index] ?? fallbackSlides[0];
          return {
            ...fallback,
            heading: slide.title.split(/\n|(?<=Every) /).filter(Boolean),
            headingHighlight: undefined,
            description: slide.description,
            descriptionHighlight: undefined,
            alt: slide.alt,
            familySupportLayout: slide.variant === "family-support",
            journeyPrayerLayout: slide.variant === "journey-prayer",
            volunteerImpactLayout: slide.variant === "volunteer-impact",
            primaryButton: slide.buttonLabel ? { label: slide.buttonLabel, href: slide.buttonHref || "/request-help" } : fallback.primaryButton,
            secondaryButton: slide.secondaryButtonLabel ? { label: slide.secondaryButtonLabel, href: slide.secondaryButtonHref || "/donation" } : fallback.secondaryButton,
          };
        });
      }
      if (!hasAdminHeroContent) return fallbackSlides;

      return fallbackSlides.map((slide) => ({
        ...slide,
        heading: textOrFallback(websiteSection?.title, slide.heading.join("\n"), 95).split(/\n|(?<=Every) /).filter(Boolean),
        headingHighlight: undefined,
        description: textOrFallback(websiteSection?.subtitle, slide.description, 150),
        descriptionHighlight: undefined,
        alt: textOrFallback(websiteSection?.description, slide.alt, 150),
        primaryButton: {
          label: textOrFallback(websiteSection?.buttonLabel, slide.primaryButton?.label ?? "Request Sewa Help", 36),
          href: websiteSection?.buttonHref || slide.primaryButton?.href || "/request-help",
        },
        secondaryButton: {
          label: textOrFallback(websiteSection?.secondaryButtonLabel, slide.secondaryButton?.label ?? "Support This Mission", 36),
          href: websiteSection?.secondaryButtonHref || slide.secondaryButton?.href || "/donation",
        },
      }));
    },
    [managedSlides, websiteSection],
  );

  const statFallbacks: StatItem[] = [
    { value: "24/7", label: "Helpline Guidance", icon: FaUsers },
    { value: "Delhi • Ghaziabad • Noida", label: "Launch Region", icon: FaLandmark },
    { value: "Verified", label: "Case-Based Support", icon: FaSmile },
    { value: "Subject", label: "To Eligibility", icon: FaShieldAlt },
  ];
  const stats: StatItem[] = statFallbacks.map((fallback, index) => {
    const item: LandingSectionItem = itemOrFallback(websiteSection?.items, index, {
      value: fallback.value,
      label: fallback.label,
    });
    
    let resolvedIcon = fallback.icon;
    if (item.icon) {
      switch (item.icon) {
        case "users": resolvedIcon = FaUsers; break;
        case "building": resolvedIcon = FaLandmark; break;
        case "smile": resolvedIcon = FaSmile; break;
        case "shield": resolvedIcon = FaShieldAlt; break;
        case "phone": resolvedIcon = FaPhoneAlt; break;
        case "mail": resolvedIcon = FaEnvelope; break;
        case "map-pin": resolvedIcon = FaMapMarkerAlt; break;
        case "heart": resolvedIcon = FaHeart; break;
        case "star": resolvedIcon = FaStar; break;
        case "check-circle": resolvedIcon = FaCheckCircle; break;
        case "info": resolvedIcon = FaInfoCircle; break;
        case "activity": resolvedIcon = FiActivity; break;
      }
    }
    
    return {
      ...fallback,
      value: textOrFallback(item.value, fallback.value, 40),
      label: textOrFallback(item.label, fallback.label, 60),
      icon: resolvedIcon,
    };
  });
  const heroLogo = imageOrFallback(websiteSection?.logoImage, "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788164952/moksha-sewa/hero-images/image6.png");

  const [currentIndex, setCurrentIndex] = useState(0);
  const activeSlide = slideContent[currentIndex] ?? slideContent[0];
  const activeImage = images[currentIndex] ?? images[0];
  const isFamilySupportSlide = activeSlide.familySupportLayout === true;
  const isJourneyPrayerSlide = activeSlide.journeyPrayerLayout === true;
  const isVolunteerImpactSlide = activeSlide.volunteerImpactLayout === true;

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
        className="group relative w-full min-h-[735px] overflow-hidden bg-[#fbf5ea] sm:min-h-[705px] md:aspect-[16/10] md:min-h-[635px] lg:aspect-[20/9] lg:min-h-[615px]"
      >
        {/* HD image slider: image is kept on the right, so it is not stretched across the full page. */}
        <div
          className={`absolute inset-y-0 overflow-hidden ${isFamilySupportSlide
            ? "left-0 right-0 md:left-[42%]"
            : isJourneyPrayerSlide
              ? "left-0 right-0 md:left-[40%]"
              : isVolunteerImpactSlide
                ? "left-0 right-0 md:left-[36%]"
                : `left-0 ${currentIndex === 0 ? "right-0" : "right-0 md:right-[-80px]"}`
            }`}
        >
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
              className={
                isFamilySupportSlide || isJourneyPrayerSlide || isVolunteerImpactSlide
                  ? "object-cover object-right transition-transform duration-[6000ms] ease-out"
                  : "object-cover object-[68%_center] transition-transform duration-[6000ms] ease-out sm:object-[72%_center] md:object-[76%_center]"
              }
            />
          </div>
        </div>

        {/* Smooth content-to-image blend */}
        <div
          className="pointer-events-none absolute inset-0 hidden md:block"
          style={{
            background: isFamilySupportSlide
              ? "linear-gradient(90deg, #fbf5ea 0%, #fbf5ea 34%, rgba(251,245,234,0.98) 40%, rgba(251,245,234,0.86) 46%, rgba(251,245,234,0.40) 53%, rgba(251,245,234,0.08) 59%, rgba(251,245,234,0) 64%)"
              : isJourneyPrayerSlide
                ? "linear-gradient(90deg, #fbf5ea 0%, #fbf5ea 33%, rgba(251,245,234,0.98) 39%, rgba(251,245,234,0.84) 45%, rgba(251,245,234,0.38) 52%, rgba(251,245,234,0.08) 58%, rgba(251,245,234,0) 63%)"
                : isVolunteerImpactSlide
                  ? "linear-gradient(90deg, #fbf5ea 0%, #fbf5ea 30%, rgba(251,245,234,0.98) 35%, rgba(251,245,234,0.86) 41%, rgba(251,245,234,0.42) 48%, rgba(251,245,234,0.10) 54%, rgba(251,245,234,0) 59%)"
                  : "linear-gradient(90deg, #fbf5ea 0%, #fbf5ea 24%, rgba(251,245,234,0.96) 31%, rgba(251,245,234,0.78) 38%, rgba(251,245,234,0.42) 45%, rgba(251,245,234,0.12) 51%, rgba(251,245,234,0) 57%)",
          }}
        />

        {/* Mobile content readability */}
        <div
          className={`pointer-events-none absolute inset-0 md:hidden ${isFamilySupportSlide || isJourneyPrayerSlide || isVolunteerImpactSlide
            ? "bg-gradient-to-b from-[#fbf5ea]/95 via-[#fbf5ea]/88 to-[#fbf5ea]/54"
            : "bg-gradient-to-b from-[#fbf5ea]/92 via-[#fbf5ea]/68 to-[#fbf5ea]/16"
            }`}
        />

        {/* Devanagari watermark — same signature as the rest of the site */}
        {!isFamilySupportSlide && !isJourneyPrayerSlide && !isVolunteerImpactSlide && (
          <>
            <div className="pointer-events-none absolute left-16 top-1/2 z-10 hidden -translate-y-[55%] select-none font-serif text-[240px] leading-none text-[#8B6A3E]/[0.06] lg:block xl:left-24">
              मोक्ष
            </div>

            {/* soft ornamental rings behind the content */}
            <div className="pointer-events-none absolute -left-24 top-1/2 z-10 hidden h-[380px] w-[380px] -translate-y-1/2 rounded-full border border-[#C9A574]/20 lg:block" />
            <div className="pointer-events-none absolute -left-10 top-1/2 z-10 hidden h-[270px] w-[270px] -translate-y-1/2 rounded-full border border-[#C9A574]/12 lg:block" />
          </>
        )}

        {/* Slider controls */}
        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous hero image"
          className="absolute bottom-5 right-14 z-40 hidden rounded-full border border-[#C9A574]/60 bg-[#2C1810]/25 p-2 text-white opacity-0 backdrop-blur-sm transition hover:bg-[#2C1810]/45 group-hover:opacity-100 lg:flex"
        >
          <FaChevronLeft className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next hero image"
          className="absolute bottom-5 right-3 z-40 hidden rounded-full border border-[#C9A574]/60 bg-[#2C1810]/25 p-2 text-white opacity-0 backdrop-blur-sm transition hover:bg-[#2C1810]/45 group-hover:opacity-100 lg:flex"
        >
          <FaChevronRight className="h-5 w-5" />
        </button>

        {/* Main content */}
        <div className="relative z-20 mx-auto h-full max-w-7xl px-4 sm:px-5 lg:px-0">
          <div className="flex h-full items-start pt-[104px] sm:pt-[140px]">
            <div className="w-full max-w-[720px] md:w-[68%] lg:w-[56%] xl:w-[54%]">

              <div className="mb-3 flex w-full max-w-[360px] flex-col items-start text-left sm:w-fit sm:min-w-[340px]">
                <div className="w-[190px] self-center sm:w-[220px] lg:w-[250px]">
                  <Image
                    src={heroLogo}
                    alt="Namo Gange"
                    width={420}
                    height={150}
                    priority
                    sizes="250px"
                    className="h-auto w-full object-contain"
                  />
                </div>

                <div className="mt-2 flex w-full items-center justify-start gap-3">

                  <div className="mt-3 shrink-0 text-left">
                    <span className="block text-[22px] leading-none tracking-[0.01em] text-[#2C1810] sm:text-[24px] lg:text-[26px]">
                      {textOrFallback(websiteSection?.eyebrow, "Moksha Sewa", 40)}
                    </span>
                    <span className="mt-1 block text-[11px] font-semibold uppercase leading-tight tracking-[0.22em] text-[#73532F] sm:text-[12px]">
                      {textOrFallback(websiteSection?.initiativeLabel, "An Initiative of Namo Gange Trust", 80)}
                    </span>
                  </div>

                </div>
              </div>

              <h1
                className="text-[36px] leading-[0.98] sm:text-[44px] md:text-[48px] lg:h-[112px] lg:text-[54px] xl:h-[120px] xl:text-[58px]"
                style={{
                  fontWeight: 500,
                }}
              >
                {activeSlide.heading.map((line, index) => {
                  const isLastLine = index === activeSlide.heading.length - 1;
                  const highlightedHeading =
                    isLastLine &&
                    activeSlide.headingHighlight &&
                    line.includes(activeSlide.headingHighlight);

                  return (
                    <span
                      key={`hero-heading-${currentIndex}-${index}`}
                      className={`block ${isLastLine ? "mt-1" : ""} text-[#2C1810] md:whitespace-nowrap`}
                    >
                      {highlightedHeading ? (
                        <>
                          {line.replace(activeSlide.headingHighlight!, "")}
                          <span className="text-[#C85117]">
                            {activeSlide.headingHighlight}
                          </span>
                        </>
                      ) : (
                        <span className={isLastLine ? "text-[#C85117]" : ""}>
                          {line}
                        </span>
                      )}
                    </span>
                  );
                })}
              </h1>

              {/* reference-style flourish */}
              <div className="mt-3 flex max-w-[500px] items-center gap-3">
                <span className="h-px flex-1 bg-[#C85117]/65" />
                <PiFlowerLotus className="h-6 w-6 shrink-0 text-[#C85117]" />
                <span className="h-px flex-1 bg-[#C85117]/65" />
              </div>

              <p className="mt-3 max-w-[650px] text-[18px] font-semibold leading-[1.35] text-[#2C1810] sm:text-[19px] md:h-[27px] md:whitespace-nowrap lg:text-[20px]">
                {activeSlide.descriptionHighlight &&
                  activeSlide.description.includes(activeSlide.descriptionHighlight) ? (
                  <>
                    {activeSlide.description.split(activeSlide.descriptionHighlight)[0]}
                    <span className="font-semibold text-[#C85117]">
                      {activeSlide.descriptionHighlight}
                    </span>
                    {activeSlide.description.split(activeSlide.descriptionHighlight).slice(1).join(activeSlide.descriptionHighlight)}
                  </>
                ) : (
                  activeSlide.description
                )}
              </p>

              <div className="mt-4 flex min-h-[54px] flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={activeSlide.primaryButton?.href ?? "/request-help"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/cta inline-flex h-[54px] w-full items-center justify-center rounded-[9px] border border-[#F4C46A] bg-gradient-to-r from-[#B76B16] via-[#E5A93E] to-[#B76B16] px-5 text-[16px] font-semibold text-white shadow-[0_0_18px_rgba(229,169,62,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(229,169,62,0.72)] sm:w-[190px]"
                >
                  <span className="whitespace-nowrap">
                    {activeSlide.primaryButton?.label ?? "Request Sewa Help"}
                  </span>
                </a>

                <a
                  href={activeSlide.secondaryButton?.href ?? "/donation"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/cta inline-flex h-[54px] w-full items-center justify-center rounded-[9px] border border-[#F4C46A] bg-gradient-to-r from-[#B76B16] via-[#E5A93E] to-[#B76B16] px-5 text-[16px] font-semibold text-white shadow-[0_0_18px_rgba(229,169,62,0.45)] backdrop-blur-[2px] transition hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(229,169,62,0.72)] sm:w-[190px]"
                >
                  <span className="whitespace-nowrap">
                    {activeSlide.secondaryButton?.label ?? "Support This Mission"}
                  </span>
                </a>
              </div>

              {activeSlide.showMissionExtras && (
                <div className="mt-1 hidden max-w-[690px] items-center gap-0 lg:flex">
                  <div className="flex min-w-[215px] items-center gap-2.5 border-r border-[#D8B58B] pr-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F7E4C6] text-[#D95A06]">
                      <FaHandHoldingHeart className="h-5 w-5" />
                    </span>
                    <span className="text-[16px] font-semibold leading-[1.18] tracking-[0.01em] text-[#2C1810]">
                      Your Compassion
                      <br />
                      Brings Dignity
                    </span>
                  </div>

                  <div className="flex min-w-[215px] items-center gap-2.5 border-r border-[#D8B58B] px-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F7E4C6] text-[#D95A06]">
                      <FaUsers className="h-5 w-5" />
                    </span>
                    <span className="text-[16px] font-semibold leading-[1.18] tracking-[0.01em] text-[#2C1810]">
                      Your Time
                      <br />
                      Creates Impact
                    </span>
                  </div>

                  <div className="flex min-w-[215px] items-center gap-2.5 pl-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F7E4C6] text-[#D95A06]">
                      <FaHandHoldingHeart className="h-5 w-5" />
                    </span>
                    <span className="text-[16px] font-semibold leading-[1.18] tracking-[0.01em] text-[#2C1810]">
                      Your Support
                      <br />
                      Gives Respect
                    </span>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

        {activeSlide.showMissionExtras && !isFamilySupportSlide && !isJourneyPrayerSlide && !isVolunteerImpactSlide && (
          <div className="absolute bottom-5 right-5 z-30 hidden w-[640px] border border-[#E2AE73] bg-[#FFF8EE]/95 px-5 py-4 shadow-[0_10px_30px_rgba(95,61,30,0.12)] backdrop-blur-sm xl:block">
            <div className="grid grid-cols-3 divide-x divide-[#D8B58B]">
              <div className="flex items-center gap-3 px-3">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#E2AE73] text-[#D95A06]">
                  <FaPrayingHands className="h-7 w-7" />
                </span>
                <span className="text-[16px] font-semibold leading-[1.25] text-[#2C1810]">
                  Volunteer
                  <br />
                  For Sewa
                </span>
              </div>

              <div className="flex items-center gap-3 px-4">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#E2AE73] text-[#D95A06]">
                  <FaHandHoldingHeart className="h-7 w-7" />
                </span>
                <span className="text-[16px] font-semibold leading-[1.25] text-[#2C1810]">
                  Donate
                  <br />
                  With Heart
                </span>
              </div>

              <div className="flex items-center gap-3 px-4">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#E2AE73] text-[#D95A06]">
                  <FaUsers className="h-7 w-7" />
                </span>
                <span className="text-[16px] font-semibold leading-[1.25] text-[#2C1810]">
                  Share
                  <br />
                  The Mission
                </span>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-2 border-t border-[#E7CDAE] pt-3">
              <PiFlowerLotus className="h-5 w-5 shrink-0 text-[#D95A06]" />
              <p className="text-[16px] font-medium text-[#5B4635]">
                Together, we ensure{" "}
                <span className="font-semibold text-[#D95A06]">
                  no one is left without dignity
                </span>{" "}
                in their final journey.
              </p>
            </div>
          </div>
        )}
      </section>

      {/* Mission Stats Band Below Hero */}
      <div className="w-full border-b border-[#73532F] bg-gradient-to-r from-[#8B6A3E] via-[#9C794C] to-[#8B6A3E] py-1 shadow-md">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={`hero-stat-${index}`}
                className={`group/stat flex items-center justify-center gap-3 px-4 py-1.5 ${index > 0 ? "md:border-l md:border-white/20" : ""
                  } ${index > 1 ? "border-t border-white/20 md:border-t-0" : ""}`}
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition-transform duration-300 group-hover/stat:scale-110 shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]">
                  <Icon className="h-4 w-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]" />
                </div>
                <div className="min-w-0 text-left">
                  <div
                    className="text-[17px] font-medium leading-none text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)] lg:text-[19px]"
                  >
                    <AnimatedNumber endString={stat.value} />
                  </div>
                  <div className="mt-1 max-w-[120px] text-[16px] font-medium leading-tight tracking-[0.02em] text-white/90 lg:max-w-none lg:text-[16px]">
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
