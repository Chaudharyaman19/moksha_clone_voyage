"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { ReactElement } from "react";
import { itemOrFallback, textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";

interface IconProps {
  name: string;
  className?: string;
}

const CustomIcon = ({
  name,
  className = "h-6 w-6",
}: IconProps) => {
  const icons: Record<string, ReactElement> = {
    ShieldCheck: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M32 8 49 14v13c0 11.5-6.6 19-17 24-10.4-5-17-12.5-17-24V14L32 8Z" />
        <path d="m24 30 5 5 11-12" />
      </svg>
    ),

    FamilyHands: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M26 14c0-3.8 4-5.4 6-2 2-3.4 6-1.8 6 2 0 3.6-3.5 6.2-6 8.6-2.5-2.4-6-5-6-8.6Z" />

        <path d="M10 36c5-1 9 1 13 5l6 7" />
        <path d="M54 36c-5-1-9 1-13 5l-6 7" />

        <path d="M10 35v15" />
        <path d="M54 35v15" />

        <path d="M20 31c3.5-3 7.5-4 12-4s8.5 1 12 4" />
      </svg>
    ),

    ElderlyCare: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="31" cy="18" r="5" />
        <circle cx="20" cy="23" r="3.8" />
        <circle cx="43" cy="23" r="3.8" />

        <path d="M22 45c.7-8 3.8-12 9-12s8.3 4 9 12" />

        <path d="M9 45c.6-6.5 3.2-10 8.5-10 2.1 0 4 .7 5.5 2.1" />

        <path d="M54 45c-.6-6.5-3.2-10-8.5-10-2.1 0-4 .7-5.5 2.1" />
      </svg>
    ),

    UnclaimedCase: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="32" cy="18" r="5" />
        <circle cx="19" cy="23" r="4" />
        <circle cx="45" cy="23" r="4" />

        <path d="M23 44c.7-7.5 3.7-11.5 9-11.5s8.3 4 9 11.5" />

        <path d="M9 44c.6-6.5 3.2-10 8.5-10 2.2 0 4 .7 5.5 2" />

        <path d="M55 44c-.6-6.5-3.2-10-8.5-10-2.2 0-4 .7-5.5 2" />
      </svg>
    ),

    MapPin: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M32 54S49 39 49 25a17 17 0 1 0-34 0c0 14 17 29 17 29Z" />
        <circle cx="32" cy="25" r="5.5" />
      </svg>
    ),

    CheckCircle: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="32" cy="32" r="22" />
        <path d="m22 32 7 7 14-16" />
      </svg>
    ),

    Lotus: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M32 43c-10-7-15-15-12-25 6 2 10 6 12 12 2-6 6-10 12-12 3 10-2 18-12 25Z" />

        <path d="M22 40c-8-2-13-7-14-15 7 0 13 3 17 8" />

        <path d="M42 40c8-2 13-7 14-15-7 0-13 3-17 8" />

        <path d="M16 46c5 2 10 3 16 3s11-1 16-3" />

        <path d="M24 49h16" />
      </svg>
    ),

    ArrowRight: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h13" />
        <path d="m14 8 4 4-4 4" />
      </svg>
    ),
  };

  return icons[name] ?? null;
};

interface StoryCard {
  image: string;
  images?: string[];
  icon: string;
  title: string;
  location: string;
  services: string[];
  description: string;
}

const stories: StoryCard[] = [
  {
    image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165001/moksha-sewa/assets/about-optimized/family-support.webp",
    images: [
      "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165465/moksha-sewa/assets/sewa-stories/family-support-1.jpg",
      "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165466/moksha-sewa/assets/sewa-stories/family-support-2.jpg",
    ],
    icon: "FamilyHands",
    title: "ECONOMICALLY WEAKER FAMILY",
    location: "Delhi • Ghaziabad • Noida",
    services: [
      "Transport",
      "Ritual Essentials",
      "Priest Coordination",
    ],
    description:
      "An elderly father passed away unexpectedly. With no one to support the family, our team arranged transport, cremation and performed all rituals with dignity.",
  },

  {
    image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165004/moksha-sewa/assets/about-optimized/hearse-van.webp",
    images: [
      "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165462/moksha-sewa/assets/sewa-stories/elderly-support-1.jpg",
      "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165463/moksha-sewa/assets/sewa-stories/elderly-support-2.jpg",
      "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165464/moksha-sewa/assets/sewa-stories/elderly-support-3.jpg",
    ],
    icon: "ElderlyCare",
    title: "ELDERLY WITHOUT SUPPORT",
    location: "Ghaziabad, UP",
    services: [
      "Transport",
      "Cremation",
      "Rituals",
    ],
    description:
      "An elderly man with no close family passed away. Our team arranged cremation and performed all rituals with dignity and respect.",
  },

  {
    image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788164996/moksha-sewa/assets/about-optimized/cremation-ritual.webp",
    icon: "UnclaimedCase",
    title: "UNCLAIMED BODY CASE",
    location: "Faridabad, Haryana",
    services: [
      "Transport",
      "Cremation",
      "Rituals",
    ],
    description:
      "A legally authorised unclaimed body was given a respectful last journey by our team with complete dignity and proper rituals.",
  },
];

function StoryImage({
  image,
  images,
  alt,
}: {
  image: string;
  images?: string[];
  alt: string;
}) {
  const slides = images && images.length > 1 ? images : [image];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  return (
    <>
      {slides.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={alt}
          fill
          quality={95}
          sizes="
            (max-width:768px) 100vw,
            (max-width:1024px) 50vw,
            33vw
          "
          className={`
            object-cover
            object-center
            transition-opacity
            duration-700
            ease-in-out
            ${index === activeIndex ? "opacity-100" : "opacity-0"}
          `}
        />
      ))}
    </>
  );
}

const backgroundPattern = {
  backgroundImage:
    "radial-gradient(circle, rgba(139,96,43,0.06) 0 1px, transparent 1.15px)",
  backgroundSize: "22px 22px",
};

export default function SewaStories() {
  const websiteSection = useWebsiteSection("sewa-stories");
  const managedStories = [
    ...stories.map((fallback, index) => {
      const item = itemOrFallback(websiteSection?.items, index, fallback);
      const itemImages = [item.image, (item as any).secondaryImage, (item as any).tertiaryImage, (item as any).quaternaryImage].filter(Boolean) as string[];
      return {
        ...fallback,
        title: textOrFallback(item.title, fallback.title, 80),
        description: textOrFallback(item.description, fallback.description, 220),
        image: item.image || fallback.image,
        images: itemImages.length > 0 ? itemImages : fallback.images,
      };
    }),
    ...(websiteSection?.items?.slice(stories.length) ?? []).map((item) => ({
      ...stories[stories.length - 1],
      title: item.title || "New Sewa Story",
      image: item.image || stories[stories.length - 1].image,
      images: [item.image, (item as any).secondaryImage, (item as any).tertiaryImage, (item as any).quaternaryImage].filter(Boolean) as string[],
      description: item.description || "Additional Sewa story.",
    }))
  ];

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#FCF8F0]
        px-4
        py-[20px]
        sm:px-5
        lg:px-6
        lg:py-[24px]
      "
    >
      {/* ==========================================
          BACKGROUND DOTS
      =========================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-45"
        style={backgroundPattern}
      />

      {/* ==========================================
          TOP RIGHT GHAT — MORE VISIBLE
      =========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          h-[260px]
          w-[610px]
          overflow-hidden
        "
      >
        <Image
          src={websiteSection?.image || "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165059/moksha-sewa/assets/about-reference/story-evening-ghat.png"}
          alt=""
          fill
          sizes="610px"
          className="
            object-cover
            object-[65%_center]
            opacity-[0.32]
          "
        />

        {/* left fade only */}
        <div
          className="
            absolute
            inset-y-0
            left-0
            w-[55%]
            bg-gradient-to-r
            from-[#FCF8F0]
            via-[#FCF8F0]/75
            to-transparent
          "
        />

        {/* bottom fade */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[74px]
            bg-gradient-to-t
            from-[#FCF8F0]
            via-[#FCF8F0]/55
            to-transparent
          "
        />
      </div>

      {/* ==========================================
          LEFT LEAF
      =========================================== */}

      <svg
        viewBox="0 0 200 220"
        className="
          pointer-events-none
          absolute
          -left-[42px]
          -top-[20px]
          h-[215px]
          w-[190px]
          text-[#A7AF96]/45
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      >
        <path d="M25 205C47 155 80 95 165 28" />

        <path d="M41 157c-25-10-31-34-23-54 24 7 39 25 38 48" />

        <path d="M67 118c-21-15-22-38-10-56 21 12 31 30 25 51" />

        <path d="M97 80c-15-20-9-41 6-56 18 17 21 36 9 53" />

        <path d="M129 52c-9-20 2-36 19-43 12 17 8 32-7 44" />
      </svg>



      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1344px]
        "
      >
        {/* ========================================
            HEADER
        ========================================= */}

        <header
          className="
            mx-auto
            mb-[25px]
            max-w-[930px]
            text-center
          "
        >
          {/* LABEL */}

          <div
            className="
              mb-[5px]
              flex
              items-center
              justify-center
              gap-[9px]
            "
          >
            <span className="relative h-px w-[54px] bg-[#B88335]">
              <span className="absolute -right-[3px] -top-[2px] h-[5px] w-[5px] rounded-full bg-[#B88335]" />
            </span>

            <CustomIcon
              name="Lotus"
              className="h-[23px] w-[23px] text-[#B27B29]"
            />

            <span
              className="
                font-sans
                text-[16px]
                font-semibold
                uppercase
                text-[#9C6D2C]
              "
            >
              {textOrFallback(websiteSection?.eyebrow, "Sewa Stories", 60)}
            </span>

            <span className="relative h-px w-[54px] bg-[#B88335]">
              <span className="absolute -left-[3px] -top-[2px] h-[5px] w-[5px] rounded-full bg-[#B88335]" />
            </span>
          </div>

          {/* HEADING */}

          <h2
            className="
              font-sans
              text-[24px]
              font-semibold
              leading-[1.05]
              text-[#064A31]
              sm:text-[30px]
            "
          >
            {textOrFallback(websiteSection?.subtitle, "Every Sewa Has a Human Story", 95)}
          </h2>

          {/* SUBTEXT */}

          <p
            className="
              mx-auto
              mt-[10px]
              max-w-[760px]
              text-[16px]
              leading-[1.4]
              text-[#555550]
            "
          >
            {textOrFallback(websiteSection?.description, "Behind every case is a life, a family and a final journey deserving of respect.", 180)}
          </p>
        </header>

        {/* ========================================
            CARDS
        ========================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-[16px]
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {managedStories.map((story) => (
            <article
              key={story.title}
              className="
                group
                flex
                flex-col
                overflow-hidden
                rounded-[11px]
                border
                border-[#DDD4C7]
                bg-[#FFFCF7]
                shadow-[0_6px_16px_rgba(62,42,22,0.09)]
              "
            >
              {/* ====================================
                  IMAGE
              ===================================== */}

              <div
                className="
                  relative
                  h-[300px]
                  shrink-0
                  overflow-hidden
                "
              >
                <StoryImage
                  image={story.image}
                  images={story.images}
                  alt={story.title}
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/10
                    via-transparent
                    to-transparent
                  "
                />

                {/* VERIFIED BADGE */}

                <div
                  className="
                    absolute
                    left-[13px]
                    top-[12px]
                    flex
                    h-[31px]
                    items-center
                    gap-[6px]
                    rounded-[5px]
                    bg-[#00543A]
                    px-[10px]
                    text-[16px]
                    font-semibold
                    leading-none
                    text-white
                    shadow-[0_3px_8px_rgba(0,64,42,0.18)]
                  "
                >
                  <CustomIcon
                    name="ShieldCheck"
                    className="
                      h-[17px]
                      w-[17px]
                      text-[#CDA126]
                    "
                  />

                  Verified Case
                </div>

                {/* DESCRIPTION — hidden until hover, so the photo
                    shows in full by default */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    bottom-0
                    translate-y-full
                    bg-gradient-to-t
                    from-black/92
                    via-black/70
                    to-transparent
                    px-[16px]
                    pb-[14px]
                    pt-[34px]
                    opacity-0
                    transition-all
                    duration-500
                    ease-out
                    group-hover:translate-y-0
                    group-hover:opacity-100
                    group-hover:pointer-events-auto
                  "
                >
                  <p
                    className="
                      text-[15px]
                      leading-[1.45]
                      text-white
                    "
                  >
                    {story.description}
                  </p>
                </div>
              </div>

              {/* ====================================
                  CONTENT
              ===================================== */}

              <div
                className="
                  flex
                  flex-1
                  flex-col
                  px-[18px]
                  pb-[17px]
                  pt-[13px]
                "
              >
                {/* TITLE ROW */}

                <div className="flex items-start gap-[10px]">

                  {/* ICON */}

                  <span
                    className="
                      flex
                      h-[44px]
                      w-[44px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#F0EEDF]
                      text-[#496B55]
                    "
                  >
                    <CustomIcon
                      name={story.icon}
                      className="
                        h-[29px]
                        w-[29px]
                      "
                    />
                  </span>

                  <div className="min-w-0 flex-1">

                    <h3
                      className="
                        text-[16px]
                        font-semibold
                        uppercase
                        leading-[1.18]
                        text-[#285E42]
                      "
                    >
                      {story.title}
                    </h3>

                    <span
                      className="
                        mt-[3px]
                        block
                        h-[2px]
                        w-[36px]
                        bg-[#BF8A35]
                      "
                    />

                    <div
                      className="
                        mt-[5px]
                        flex
                        items-center
                        gap-[5px]
                        text-[16px]
                        leading-none
                        text-[#514A42]
                      "
                    >
                      <CustomIcon
                        name="MapPin"
                        className="
                          h-[15px]
                          w-[15px]
                          text-[#C58B30]
                        "
                      />

                      {story.location}
                    </div>
                  </div>
                </div>

                {/* SERVICES */}

                <div
                  className="
                    mt-[9px]
                    flex
                    flex-wrap
                    items-center
                    text-[16px]
                    font-medium
                    leading-[1.22]
                    text-[#47413B]
                  "
                >
                  {story.services.map((service, index) => (
                    <span
                      key={service}
                      className="inline-flex items-center"
                    >
                      {index > 0 && (
                        <span className="mx-[6px] text-[#B17B2E]">
                          •
                        </span>
                      )}

                      {service}
                    </span>
                  ))}
                </div>

                {/* COMPLETED */}

                <div className="mt-[11px]">
                  <span
                    className="
                      inline-flex
                      h-[30px]
                      items-center
                      gap-[6px]
                      rounded-[6px]
                      bg-[#EFF0E5]
                      px-[9px]
                      text-[16px]
                      font-semibold
                      leading-none
                      text-[#466149]
                    "
                  >
                    <CustomIcon
                      name="CheckCircle"
                      className="h-[16px] w-[16px]"
                    />

                    Sewa Completed

                    <CustomIcon
                      name="ArrowRight"
                      className="
                        h-[13px]
                        w-[13px]
                        text-[#B28236]
                      "
                    />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ========================================
            BOTTOM CTA
        ========================================= */}

        <div
          className="
            mx-auto
            mt-[26px]
            flex
            min-h-[70px]
            w-full
            max-w-[900px]
            flex-col
            items-center
            justify-between
            gap-4
            rounded-[9px]
            border
            border-[#CFA65E]
            bg-[#FFFCF7]
            px-[21px]
            py-[8px]
            shadow-[0_4px_10px_rgba(75,48,22,0.04)]
            sm:flex-row
          "
        >
          {/* LEFT */}

          <div
            className="
              flex
              min-w-0
              items-center
              gap-[16px]
            "
          >
            <CustomIcon
              name="Lotus"
              className="
                h-[40px]
                w-[40px]
                shrink-0
                text-[#B87D22]
              "
            />

            <span className="h-[40px] w-px bg-[#DED1BD]" />

            <p
              className="
                text-[16px]
                font-medium
                leading-[1.3]
                text-[#3E403F]
              "
            >
              Every life deserves dignity. Every story deserves respect.
            </p>
          </div>

          {/* BUTTON */}

          <a
            href="/mokshagallery"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              h-[43px]
              min-w-[210px]
              shrink-0
              items-center
              justify-center
              gap-[22px]
              rounded-[6px]
              bg-[#005039]
              px-[20px]
              text-[16px]
              font-semibold
              uppercase
              leading-none
              text-white
              shadow-[0_4px_10px_rgba(0,65,44,0.14)]
              transition-all
              duration-300
              hover:bg-[#003F2D]
            "
          >
            View Our Work

            <CustomIcon
              name="ArrowRight"
              className="
                h-[17px]
                w-[17px]
                text-[#D29A2B]
                transition-transform
                duration-300
                group-hover:translate-x-[3px]
              "
            />
          </a>
        </div>
      </div>
    </section>
  );
}
