"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Heart,
  HeartHandshake,
  Scale,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { imageOrFallback, itemOrFallback, textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";

interface InfoItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const supportItems: InfoItem[] = [
  {
    title: "For Those Unclaimed",
    description: "Dignified rites for unclaimed.",
    icon: <UsersRound size={28} strokeWidth={1.8} />,
  },
  {
    title: "For Those Alone",
    description: "Support for the alone.",
    icon: <HeartHandshake size={28} strokeWidth={1.8} />,
  },
  {
    title: "For Families in Need",
    description: "Help for families in need.",
    icon: <HeartHandshake size={28} strokeWidth={1.8} />,
  },
  {
    title: "With Dignity & Care",
    description: "Compassion in every farewell.",
    icon: <ShieldCheck size={28} strokeWidth={1.8} />,
  },
];

const values: InfoItem[] = [
  {
    title: "Humanity First",
    description: "Every life is precious and deserves respect.",
    icon: <HeartHandshake size={28} strokeWidth={1.7} />,
  },
  {
    title: "Verification & Legal",
    description: "We follow formalities and check eligibility first.",
    icon: <Scale size={28} strokeWidth={1.7} />,
  },
  {
    title: "Transparent Sewa",
    description: "Accountable and compassionate at every step.",
    icon: <HeartHandshake size={28} strokeWidth={1.7} />,
  },
  {
    title: "Community Powered",
    description: "Powered by volunteers, supporters and partners.",
    icon: <UsersRound size={28} strokeWidth={1.7} />,
  },
];

const LeafDecoration = ({
  flip = false,
}: {
  flip?: boolean;
}) => {
  return (
    <svg
      width="105"
      height="68"
      viewBox="0 0 105 68"
      fill="none"
      aria-hidden="true"
      className={flip ? "-scale-x-100" : ""}
    >
      <path
        d="M97 59C78 52 62 38 51 18"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M51 19C40 21 30 17 21 9"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M60 32C50 31 41 26 35 19"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M71 43C61 42 53 38 46 31"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M33 24C29 31 22 36 14 36"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
};

const RightLeafDecoration = () => {
  return (
    <svg
      width="150"
      height="230"
      viewBox="0 0 150 230"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M137 226C120 192 120 159 132 126C139 106 143 87 140 67"
        stroke="currentColor"
        strokeWidth="1.3"
      />

      <path
        d="M126 190C115 179 108 165 109 148C121 151 130 161 133 174"
        stroke="currentColor"
        strokeWidth="1.2"
      />

      <path
        d="M127 158C115 149 109 136 112 122C123 125 131 135 134 148"
        stroke="currentColor"
        strokeWidth="1.2"
      />

      <path
        d="M130 126C119 116 116 103 120 91C130 95 137 104 138 116"
        stroke="currentColor"
        strokeWidth="1.2"
      />

      <path
        d="M133 96C125 87 124 75 129 65C138 71 141 81 140 90"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
};

const AboutMokshaSewa: React.FC = () => {
  const section = useWebsiteSection("about-hero");
  const activeSupport = section?.items?.length
    ? section.items.slice(0, Math.min(section.items.length, supportItems.length + 4)).slice(0, supportItems.length < section.items.length ? section.items.length : supportItems.length)
    : supportItems.map(i => ({ title: i.title, description: i.description }));
  // support items = first N items, value items = remaining items after support
  const supportCount = supportItems.length;
  const activeSupportItems = (section?.items?.length ? section.items.slice(0, supportCount) : supportItems.map(i => ({ title: i.title, description: i.description })));
  const activeValueItems = (section?.items?.length ? section.items.slice(supportCount) : values.map(i => ({ title: i.title, description: i.description })));

  const supportCards = activeSupportItems.map((item, index) => {
    const itemObj = item as Record<string, any>;
    const fallback = supportItems[index % supportItems.length];
    return { ...fallback, title: itemObj.title || fallback.title, description: itemObj.description || fallback.description };
  });
  const valueCards = activeValueItems.map((item, index) => {
    const itemObj = item as Record<string, any>;
    const fallback = values[index % values.length];
    return { ...fallback, title: itemObj.title || fallback.title, description: itemObj.description || fallback.description };
  });
  const quoteText = textOrFallback(section?.quote, "We do not see a case. We see a human life that deserves respect.", 600);

  return (
    <section
      aria-labelledby="about-moksha-title"
      className="relative overflow-hidden bg-[#fffdf9] text-[#14263a]"
    >
      {/* =====================================================
          HERO — full-width background
      ====================================================== */}
      <div className="relative">
        {/* Full-width background image */}
        <div className="absolute inset-0 min-h-[320px] sm:min-h-[380px] md:min-h-[440px] lg:min-h-[540px]">
          <Image
            src={imageOrFallback(section?.image, "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788164944/moksha-sewa/hero-images/dignity-in-every-final-journey-bg.png")}
            alt="Moksha Sewa volunteer supporting an elderly person"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[68%_center] transition-transform duration-[6000ms] ease-out sm:object-[72%_center] md:object-[76%_center]"
          />
        </div>

        {/* Smooth content-to-image blend (desktop) */}
        <div
          className="pointer-events-none absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(90deg, #fffdf9 0%, #fffdf9 24%, rgba(255,253,249,0.96) 31%, rgba(255,253,249,0.78) 38%, rgba(255,253,249,0.42) 45%, rgba(255,253,249,0.12) 51%, rgba(255,253,249,0) 57%)",
          }}
        />

        {/* Mobile content readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#fffdf9]/92 via-[#fffdf9]/68 to-[#fffdf9]/16 md:hidden" />

        <div
          className="
            relative
            z-10
            mx-auto
            grid
            min-h-[360px]
            max-w-7xl
            grid-cols-1
            pt-36
            pb-6
            sm:min-h-[380px]
            sm:pb-8
            sm:pt-40
            md:min-h-[440px]
            lg:min-h-[540px]
            lg:pb-10
            lg:pt-40
          "
        >
          {/* LEFT CONTENT */}
          <div
            className="
              relative
              z-10
              flex
              flex-col
              px-5
              sm:px-8
              md:px-12
              xl:px-0
              xl:pr-14
            "
          >
            {/* Eyebrow */}
            <div
              className="
                mb-3
                flex
                items-center
                gap-1.5
                text-base
                font-semibold
                uppercase
                tracking-[0.08em]
                text-[#df5b0b]
              "
            >
              <span aria-hidden="true">—</span>
              <span>{textOrFallback(section?.eyebrow, "About Moksha Sewa", 60)}</span>
            </div>

            {/* Heading */}
            <h1
              id="about-moksha-title"
              className="
                max-w-[620px]
                font-serif
                text-[34px]
                font-semibold
                leading-[1.05]
                tracking-[-0.025em]
                text-[#12263b]
                sm:text-[42px]
                lg:text-[48px]
                xl:text-[52px]
              "
            >
              <span className="whitespace-pre-line">{textOrFallback(section?.title, "Every Final Journey\nDeserves Dignity", 150)}</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-2 text-base font-semibold text-[#df5b0b] sm:text-lg">
              {textOrFallback(section?.subtitle, "A humanitarian initiative of Namo Gange Trust.", 150)}
            </p>

            {/* Description */}
            <p
              className="
                mt-4
                max-w-[550px]
                text-base
                font-medium
                leading-[1.6]
                text-[#1d1d1d]
                sm:text-lg
              "
            >
              {textOrFallback(section?.description, "Moksha Sewa is a humanitarian initiative of Namo Gange Trust, created to stand beside unclaimed and unsupported persons, and families facing financial hardship - so that dignity, care and respectful final rites are never denied when they matter most.", 2000)}
            </p>

            {/* CTA */}
            <div
              className="
                mt-5
                flex
                flex-col
                items-start
                gap-4
                sm:flex-row
                sm:flex-wrap
                sm:items-center
                sm:gap-5
              "
            >
              <button
                type="button"
                className="
                  group
                  flex
                  min-h-[48px]
                  items-center
                  gap-6
                  rounded-lg
                  bg-[#e55b0b]
                  px-5
                  text-base
                  font-semibold
                  text-white
                  shadow-sm
                  transition-all
                  duration-300
                  hover:bg-[#c94d08]
                  hover:shadow-lg
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#e55b0b]
                  focus:ring-offset-2
                "
              >
                <span>{textOrFallback(section?.buttonLabel, "Know Our Mission", 60)}</span>

                <ArrowDown
                  size={22}
                  aria-hidden="true"
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-y-1
                  "
                />
              </button>

              <Link
                href={textOrFallback(section?.secondaryButtonHref, "/request-help", 60)}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  border-b
                  border-[#e55b0b]
                  pb-2
                  text-base
                  font-semibold
                  text-[#181818]
                  transition-colors
                  hover:text-[#df5b0b]
                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#df5b0b]
                "
              >
                <span>{textOrFallback(section?.secondaryButtonLabel, "Need Sewa Support?", 60)}</span>

                <ArrowRight
                  size={21}
                  aria-hidden="true"
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative leaves */}
        <div
          className="
            pointer-events-none
            absolute
            bottom-2
            right-0
            z-10
            text-[#d97a43]
            opacity-40
            sm:bottom-4
            sm:right-3
          "
        >
          <RightLeafDecoration />
        </div>

        {/* =====================================================
            SUPPORT STRIP
        ====================================================== */}
        <div
          className="
            relative
            z-20
            mx-auto
            max-w-7xl
            px-4
            -mt-2
            lg:-mt-4
            lg:px-0
          "
        >
          <div
            className="
              rounded-xl
              bg-[#142b40]
              px-5
              py-2
              text-white
              shadow-[0_12px_35px_rgba(15,38,57,0.16)]
              sm:px-7
              sm:py-2.5
            "
          >
            <div
              className="
                grid
                grid-cols-1
                divide-y
                divide-white/25
                md:grid-cols-2
                md:divide-y-0
                lg:grid-cols-4
                lg:divide-x
                lg:divide-y-0
              "
            >
              {supportCards.map((item, index) => (
                <div
                  key={item.title}
                  className={`
                    flex
                    items-center
                    gap-3
                    py-2.5
                    md:px-5
                    lg:px-6
                  ${
                      index === 0
                        ? "lg:pl-0"
                        : ""
                    }
                    ${
                      index === supportCards.length - 1
                        ? "lg:pr-0"
                        : ""
                    }
                  `}
                >
                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#fffdf8]
                      text-[#e05c0b]
                    "
                  >
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="min-w-0">
                    <h3
                      className="
                        text-[18px]
                        font-semibold
                        leading-[1.1]
                        text-white
                        sm:text-[18px]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-1
                        whitespace-nowrap
                        text-base
                        leading-[1.4]
                        text-white/90
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          QUOTE
      ====================================================== */}
      <div
        className="
          relative
          bg-[#fffdf9]
          px-5
          py-6
          sm:py-8
          lg:py-8
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-[1050px]
            items-center
            justify-center
            gap-4
            sm:gap-5
          "
        >
          {/* Left decoration */}
          <div className="hidden shrink-0 md:block">
            <Image src="https://res.cloudinary.com/dr8mld4i0/image/upload/v1788164989/moksha-sewa/assets/about-optimized/about_banner_deco_left.png" alt="" width={100} height={81} className="h-auto w-[100px]" />
          </div>

          <div className="min-w-0 text-center">
            <div
              className="
                flex
                items-start
                justify-center
                gap-1.5
                sm:gap-2
              "
            >
              <span
                aria-hidden="true"
                className="
                  font-serif
                  text-4xl
                  leading-none
                  text-[#df5b0b]
                  sm:text-5xl
                "
              >
                “
              </span>

              <blockquote
                className="
                  max-w-[700px]
                  font-serif
                  text-xl
                  font-semibold
                  leading-[1.3]
                  text-[#172b40]
                  sm:text-2xl
                  lg:text-[1.65rem]
                "
              >
                {quoteText}
              </blockquote>

              <span
                aria-hidden="true"
                className="
                  self-end
                  font-serif
                  text-4xl
                  leading-none
                  text-[#df5b0b]
                  sm:text-5xl
                "
              >
                ”
              </span>
            </div>

            {/* Quote separator */}
            <div
              className="
                mt-3
                flex
                items-center
                justify-center
                gap-3
              "
            >
              <span className="h-px w-16 bg-[#df6a27] sm:w-20" />

              <Heart
                size={24}
                strokeWidth={1.5}
                aria-hidden="true"
                className="text-[#df5b0b]"
              />

              <span className="h-px w-16 bg-[#df6a27] sm:w-20" />
            </div>
          </div>

          {/* Right decoration */}
          <div className="hidden shrink-0 md:block">
            <Image src="https://res.cloudinary.com/dr8mld4i0/image/upload/v1788164992/moksha-sewa/assets/about-optimized/about_banner_deco_right.png" alt="" width={100} height={77} className="h-auto w-[100px]" />
          </div>
        </div>
      </div>

      {/* =====================================================
          VALUES STRIP
      ====================================================== */}
      <div
        className="
          border-t
          border-[#eadfce]
          bg-[#fcf7ed]
        "
      >
        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            py-2
            sm:px-8
            sm:py-2.5
            md:px-10
            lg:px-8
            xl:px-0
          "
        >
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-4
            "
          >
            {valueCards.map((item, index) => (
              <div
                key={item.title}
                className={`
                  flex
                  items-center
                  gap-3
                  py-2
                  md:px-5
                  lg:px-6
                  lg:py-2
                  ${
                    index !== 0
                      ? "lg:border-l lg:border-[#e5d9c8]"
                      : ""
                  }
                  ${
                    index === 0
                      ? "lg:pl-0"
                      : ""
                  }
                  ${
                    index === valueCards.length - 1
                      ? "lg:pr-0"
                      : ""
                  }
                `}
              >
                {/* Icon */}
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-[#171717]
                    shadow-[0_2px_10px_rgba(0,0,0,0.04)]
                  "
                >
                  {item.icon}
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <h2
                    className="
                      text-[18px]
                      font-semibold
                      leading-[1.1]
                      text-[#171717]
                      sm:text-[18px]
                    "
                  >
                    {item.title}
                  </h2>

                  <p
                    className="
                      mt-0.5
                      text-base
                      leading-[1.4]
                      text-[#292929]
                    "
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMokshaSewa;
