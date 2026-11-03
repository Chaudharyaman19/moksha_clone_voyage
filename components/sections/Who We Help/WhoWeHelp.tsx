"use client";

import Image from "next/image";
import type { ReactElement } from "react";
import { itemOrFallback, textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";
import * as LucideIcons from "lucide-react";

interface CustomIconProps {
  name: string;
  className?: string;
}

const CustomIcon = ({
  name,
  className = "h-6 w-6",
}: CustomIconProps) => {
  const icons: Record<string, ReactElement> = {
    LegalHelpIcon: (
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
        <path d="m25 28 5 5 9-10" />
        <path d="M13 47c4-1 8 .2 11 4" />
        <path d="M51 47c-4-1-8 .2-11 4" />
        <path d="M20 44h24" />
      </svg>
    ),

    PeopleIcon: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="32" cy="20" r="5" />
        <circle cx="19" cy="24" r="4" />
        <circle cx="45" cy="24" r="4" />

        <path d="M23 47c.8-8 3.8-12 9-12s8.2 4 9 12" />

        <path d="M9 47c.6-7 3.2-10.5 8.5-10.5 2.5 0 4.6.8 6.2 2.4" />

        <path d="M55 47c-.6-7-3.2-10.5-8.5-10.5-2.5 0-4.6.8-6.2 2.4" />
      </svg>
    ),

    HeartHandsIcon: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M25 17c0-4 4.2-5.5 7-2 2.8-3.5 7-2 7 2 0 4-4 7-7 10-3-3-7-6-7-10Z" />
        <path d="M8 39c5-1 9 1 13 5l6 7" />
        <path d="M56 39c-5-1-9 1-13 5l-6 7" />
        <path d="M8 38v14" />
        <path d="M56 38v14" />
        <path d="M20 33c3-3 7-4 12-4s9 1 12 4" />
      </svg>
    ),

    ShieldCheckIcon: (
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
        <path d="m24 29 5 5 11-12" />
      </svg>
    ),

    CompassionIcon: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M24 18c0-4 4.5-5.6 8-2 3.5-3.6 8-2 8 2 0 4-4.5 7.5-8 10.5C28.5 25.5 24 22 24 18Z" />
        <path d="M12 43c5-2 9-.5 13 3l7 6" />
        <path d="M52 43c-5-2-9-.5-13 3l-7 6" />
        <path d="M16 39c4-4 9-6 16-6s12 2 16 6" />
      </svg>
    ),

    HandshakeIcon: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m9 26 11-8 10 7" />
        <path d="m55 26-11-8-10 7" />
        <path d="m23 30 7 6c1.4 1.2 3.6 1.2 5 0l6-5" />
        <path d="m18 33 12 11c1.5 1.3 3.7 1.3 5.2 0l11-10" />
        <path d="m10 27 8 10" />
        <path d="m54 27-8 10" />
      </svg>
    ),

    MapPinIcon: (
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
        <circle cx="32" cy="25" r="6" />
      </svg>
    ),

    SmallShieldIcon: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M32 9 49 15v12c0 11-6.5 18.5-17 24-10.5-5.5-17-13-17-24V15L32 9Z" />
        <path d="m25 30 5 5 10-11" />
      </svg>
    ),
  };

  const iconKey = name ? Object.keys(icons).find(k => k.toLowerCase() === name.toLowerCase().replace(/-/g, "")) : null;
  if (iconKey) return icons[iconKey];

  let lucideName = name?.split("-").map(part => part.charAt(0).toUpperCase() + part.slice(1)).join("");
  
  if (lucideName === "HeartHands") lucideName = "HandHeart";
  if (lucideName === "Diya") lucideName = "Flame";
  if (lucideName === "Hands") lucideName = "HelpingHand";
  if (lucideName === "Document") lucideName = "FileText";
  if (lucideName === "Clipboard") lucideName = "ClipboardList";
  if (lucideName === "FamilyHands") lucideName = "Users";
  if (lucideName === "ElderlyCare") lucideName = "UserPlus";
  if (lucideName === "UnclaimedCase") lucideName = "UserX";
  if (lucideName === "ShieldCheck") lucideName = "ShieldCheck";

  const LucideIcon = (LucideIcons as any)[lucideName];
  if (LucideIcon) {
    return <LucideIcon className={className} strokeWidth={2.8} />;
  }

  return <span className={className}>•</span>;
};

interface HelpCard {
  icon: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  color: string;
  titleColor: string;
}

const helpCards: HelpCard[] = [
  {
    icon: "LegalHelpIcon",
    title: "Unclaimed & Legally Authorised Cases",
    description:
      "We assist with respectful last-rites after completion of all required police, hospital and authority formalities.",
    features: [
      "Support after legal verification",
      "Coordination with authorities",
      "Respectful & dignified last-rites",
    ],

    /* OLD IMAGE */
    image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788164996/moksha-sewa/assets/about-optimized/cremation-ritual.webp",

    color: "#8E1916",
    titleColor: "#741713",
  },

  {
    icon: "PeopleIcon",
    title: "People Without Family or Support",
    description:
      "For those who have no one to stand beside them, we ensure a dignified and respectful final journey.",
    features: [
      "No one left alone in their final journey",
      "Compassionate on-ground support",
      "Respect, care and complete dignity",
    ],

    /* OLD IMAGE */
    image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165001/moksha-sewa/assets/about-optimized/family-support.webp",

    color: "#5B409C",
    titleColor: "#523790",
  },

  {
    icon: "HeartHandsIcon",
    title: "Economically Weaker Families",
    description:
      "Verified support for eligible families who are unable to manage essential last-rites arrangements.",
    features: [
      "Eligibility-based verified support",
      "Essential arrangements provided",
      "Guidance and on-ground assistance",
    ],

    /* OLD IMAGE */
    image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165012/moksha-sewa/assets/about-optimized/prayer-hall.webp",

    color: "#2E7140",
    titleColor: "#276237",
  },
];

const trustItems = [
  {
    icon: "ShieldCheckIcon",
    title: "Verified & Transparent",
    text: "Every sewa request is carefully verified before providing help.",
    color: "#8E1916",
  },

  {
    icon: "CompassionIcon",
    title: "Compassion is Our Commitment",
    text: "We serve every life with deep respect, care and full dignity.",
    color: "#53419B",
  },

  {
    icon: "HandshakeIcon",
    title: "Support with Responsibility",
    text: "Our support is subject to verification and legal requirements.",
    color: "#26713D",
  },

  {
    icon: "MapPinIcon",
    title: "Local Sewa Network",
    text: "Our dedicated teams are available across Delhi • Ghaziabad • Noida for support.",
    color: "#E25F07",
  },
];

const backgroundPattern = {
  backgroundImage:
    "radial-gradient(circle at 20% 20%, rgba(168,111,44,0.055) 0 1px, transparent 1.2px)",
  backgroundSize: "22px 22px",
};

export default function WhoWeHelp() {
  const websiteSection = useWebsiteSection("who-we-help");
  const managedHelpCards = [
    ...helpCards.map((fallback, index) => {
    const item = itemOrFallback(websiteSection?.items, index, fallback);
    return {
      ...fallback,
      title: textOrFallback(item.title, fallback.title, 95),
      description: textOrFallback(item.description, fallback.description, 220),
      image: item.image || fallback.image,
      icon: item.icon || fallback.icon,
    };
    }),
    ...(websiteSection?.items?.slice(helpCards.length) ?? []).map((item) => ({
      ...helpCards[helpCards.length - 1],
      title: item.title || "New Help Card",
      description: item.description || "Additional support information.",
      image: item.image || helpCards[helpCards.length - 1].image,
    })),
  ];
  const managedTrustItems = trustItems.map((fallback, index) => {
    const item = websiteSection?.items?.[index + helpCards.length];
    return {
      ...fallback,
      title: textOrFallback(item?.title, fallback.title, 80),
      text: textOrFallback(item?.description, fallback.text, 180),
    };
  });

  return (
    <section className="relative w-full overflow-hidden bg-[#FBF8F3] px-3 py-3 sm:px-5 sm:py-4 lg:px-6 lg:py-4 xl:py-5">

      {/* ===================================================
          BACKGROUND
      ==================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-55"
        style={backgroundPattern}
      />

      {/* LEFT FLORAL DECORATION */}

      <svg
        viewBox="0 0 300 300"
        className="
          pointer-events-none
          absolute
          -left-20
          top-8
          h-[180px]
          w-[180px]
          text-[#DAB978]/30
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <circle cx="150" cy="150" r="42" />
        <circle cx="150" cy="150" r="72" />

        {Array.from({ length: 12 }).map((_, index) => (
          <ellipse
            key={index}
            cx="150"
            cy="83"
            rx="15"
            ry="42"
            transform={`rotate(${index * 30} 150 150)`}
          />
        ))}
      </svg>

      {/* RIGHT FLORAL DECORATION */}

      <svg
        viewBox="0 0 300 300"
        className="
          pointer-events-none
          absolute
          -right-24
          top-12
          h-[190px]
          w-[190px]
          text-[#DAB978]/30
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <circle cx="150" cy="150" r="42" />
        <circle cx="150" cy="150" r="72" />

        {Array.from({ length: 12 }).map((_, index) => (
          <ellipse
            key={index}
            cx="150"
            cy="83"
            rx="15"
            ry="42"
            transform={`rotate(${index * 30} 150 150)`}
          />
        ))}
      </svg>

      {/* ===================================================
          MAIN WRAPPER
      ==================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1344px]
          rounded-[16px]
          border
          border-[#EFE6DC]
          bg-[#FFFCF8]/80
          px-4
          py-3
          sm:px-6
          sm:py-3.5
          lg:px-7
          lg:py-4
          shadow-[0_8px_24px_rgba(78,51,28,0.06)]
        "
      >

        {/* ===================================================
            HEADER
        ==================================================== */}

        <header className="mx-auto mb-3 sm:mb-4 max-w-[1020px] text-center">

          <div className="mb-1 flex items-center justify-center gap-3">

            <span className="h-px w-[52px] bg-gradient-to-r from-transparent to-[#D36516]" />

            <span className="h-1.5 w-1.5 rounded-full bg-[#D36516]" />

            <span className="font-sans text-[16px] font-semibold uppercase text-[#C6520D]">
              {textOrFallback(websiteSection?.eyebrow, "Who We Help", 60)}
            </span>

            <span className="h-1.5 w-1.5 rounded-full bg-[#D36516]" />

            <span className="h-px w-[52px] bg-gradient-to-l from-transparent to-[#D36516]" />

          </div>

          <h2
            className="
              font-sans
              text-[24px]
              font-semibold
              leading-[1.1]
              text-[#28120E]
              sm:text-[30px]
            "
          >
            {textOrFallback(websiteSection?.subtitle, "Standing Beside Those Who Need Us Most", 95)}
          </h2>

          <p
            className="
              mx-auto
              mt-2
              max-w-[760px]
              text-[16px]
              leading-[1.4]
              text-[#252020]
            "
          >
            {textOrFallback(websiteSection?.description, "Moksha Sewa provides compassionate last-rites support for unclaimed cases and families in need with dignity, respect and complete sensitivity.", 220)}
          </p>

        </header>

        {/* ===================================================
            3 MAIN CARDS
        ==================================================== */}

        <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-3">

          {managedHelpCards.map((card) => (
            <article
              key={card.title}
              className="
                relative
                flex
                h-auto
                flex-col
                overflow-hidden
                rounded-[14px]
                border
                border-[#E3DCD5]
                bg-white
                shadow-[0_6px_20px_rgba(54,34,20,0.09)]
              "
            >

              {/* ===============================================
                  IMAGE
              ================================================ */}

              <div
                className="
                  relative
                  h-[210px]
                  sm:h-[225px]
                  lg:h-[235px]
                  shrink-0
                  overflow-hidden
                "
              >
                <Image
                  src={card.image}
                  alt={card.title.replace(/\n/g, " ")}
                  fill
                  quality={95}
                  sizes="(max-width:1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* ===============================================
                  CIRCLE ICON
                  SAME IMAGE/CONTENT JOIN POSITION
              ================================================ */}

              <div
                className="
                  absolute
                  left-1/2
                  top-[178px]
                  sm:top-[193px]
                  lg:top-[203px]
                  z-20
                  flex
                  h-[64px]
                  w-[64px]
                  -translate-x-1/2
                  items-center
                  justify-center
                  rounded-full
                  border-[3.5px]
                  border-white
                  text-white
                  shadow-[0_4px_12px_rgba(41,25,14,0.18)]
                "
                style={{
                  backgroundColor: card.color,
                }}
              >
                <CustomIcon
                  name={card.icon}
                  className="h-[32px] w-[32px]"
                />
              </div>

              {/* ===============================================
                  CONTENT
              ================================================ */}

              <div
                className="
                  flex
                  flex-1
                  flex-col
                  px-4
                  sm:px-6
                  pb-3
                  sm:pb-3.5
                  pt-[36px]
                  sm:pt-[40px]
                  text-center
                "
                style={{
                  borderBottom: `4px solid ${card.color}`,
                }}
              >

                {/* TITLE - SINGLE ROW */}

                <h3
                  className="
                    font-sans
                    text-[19px]
                    sm:text-[20px]
                    lg:text-[21px]
                    font-semibold
                    leading-snug
                    whitespace-nowrap
                    truncate
                  "
                  style={{
                    color: card.titleColor,
                  }}
                  title={card.title.replace(/\n/g, " ")}
                >
                  {card.title.replace(/\n/g, " ")}
                </h3>

                {/* SHORT COLOR LINE */}

                <span
                  className="
                    mx-auto
                    mt-1.5
                    h-[2px]
                    w-[38px]
                    shrink-0
                    rounded-full
                  "
                  style={{
                    backgroundColor: card.color,
                  }}
                />

                {/* DESCRIPTION - EXACTLY 2 ROWS */}

                <p
                  className="
                    mx-auto
                    mt-2
                    max-w-[350px]
                    text-[16px]
                    leading-[1.35]
                    text-[#211E1D]
                    line-clamp-2
                    min-h-[44px]
                  "
                >
                  {card.description}
                </p>

                {/* FEATURE LIST - TIGHT SPACING */}

                <div
                  className="
                    mt-auto
                    flex
                    flex-col
                    gap-2
                    pt-3
                    text-left
                  "
                >

                  {card.features.map((feature) => (
                    <div
                      key={feature}
                      className="
                        flex
                        items-center
                        gap-2.5
                        text-[15px]
                        sm:text-[16px]
                        leading-tight
                        text-[#242120]
                      "
                    >

                      <span
                        className="
                          flex
                          h-[18px]
                          w-[18px]
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          text-[11px]
                          font-semibold
                          text-white
                        "
                        style={{
                          backgroundColor: card.color,
                        }}
                      >
                        ✓
                      </span>

                      <span className="truncate">
                        {feature}
                      </span>

                    </div>
                  ))}

                </div>

              </div>

            </article>
          ))}

        </div>

        {/* ===================================================
            TRUST STRIP - SLIM BAND, ORIGINAL FONT SIZE, SINGLE ROW HEADINGS
        ==================================================== */}

        <div
          className="
            mt-3
            sm:mt-3.5
            overflow-hidden
            rounded-[12px]
            border
            border-[#E5DED6]
            bg-[#FFFDF9]
            shadow-[0_4px_12px_rgba(58,37,20,0.05)]
          "
        >

          <div
            className="
              grid
              grid-cols-1
              divide-y
              divide-[#DDD7D0]
              md:grid-cols-4
              md:divide-x
              md:divide-y-0
            "
          >

            {managedTrustItems.map((item) => (
              <div
                key={item.title}
                className="
                  flex
                  min-h-0
                  items-center
                  gap-3
                  px-4
                  py-2
                  sm:py-2.5
                "
              >

                {/* ICON */}

                <div
                  className="
                    flex
                    h-[42px]
                    w-[42px]
                    shrink-0
                    items-center
                    justify-center
                  "
                  style={{
                    color: item.color,
                  }}
                >
                  <CustomIcon
                    name={item.icon}
                    className="h-[36px] w-[36px]"
                  />
                </div>

                {/* TEXT */}

                <div className="min-w-0 flex-1">

                  <h4
                    className="
                      whitespace-nowrap
                      truncate
                      text-[16px]
                      font-semibold
                      leading-tight
                    "
                    style={{
                      color: item.color,
                    }}
                    title={item.title.replace(/\n/g, " ")}
                  >
                    {item.title.replace(/\n/g, " ")}
                  </h4>

                  <p
                    className="
                      mt-1
                      text-[15px]
                      sm:text-[16px]
                      leading-tight
                      text-[#282321]
                      line-clamp-2
                    "
                  >
                    {item.text}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* ===================================================
            LEGAL / VERIFICATION NOTICE - COMPACT WITH ORIGINAL FONT SIZE
        ==================================================== */}

        <div
          className="
            relative
            mt-2.5
            flex
            min-h-0
            items-center
            gap-3.5
            overflow-hidden
            rounded-[10px]
            border
            border-[#ECDCBF]
            bg-gradient-to-r
            from-[#FFF5DF]
            via-[#FFF9EE]
            to-[#FFF5DF]
            px-4
            py-2
            shadow-[0_3px_10px_rgba(72,43,16,0.04)]
          "
        >

          {/* SHIELD BADGE */}

          <span
            className="
              flex
              h-[30px]
              w-[30px]
              shrink-0
              items-center
              justify-center
              rounded-[8px]
              bg-gradient-to-b
              from-[#C5810B]
              to-[#8D5700]
              text-white
              shadow-[0_3px_6px_rgba(108,65,3,0.18)]
            "
          >
            <CustomIcon
              name="SmallShieldIcon"
              className="h-[20px] w-[20px]"
            />
          </span>

          <p
            className="
              text-[15px]
              sm:text-[16px]
              font-semibold
              leading-snug
              text-[#27201B]
            "
          >
            Support is subject to case verification, availability and applicable
            legal requirements.
          </p>

          {/* RIGHT LOTUS DECORATION */}

          <svg
            viewBox="0 0 100 70"
            className="
              pointer-events-none
              absolute
              -bottom-5
              right-4
              h-[60px]
              w-[88px]
              text-[#DDB96E]/35
            "
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          >
            <path d="M50 60C29 50 19 34 24 16c12 5 21 13 26 26 5-13 14-21 26-26 5 18-5 34-26 44Z" />

            <path d="M50 46C40 35 37 24 44 10c4 5 6 11 6 18 0-7 2-13 6-18 7 14 4 25-6 36Z" />

            <path d="M12 62h76" />
          </svg>

        </div>

      </div>

    </section>
  );
}
