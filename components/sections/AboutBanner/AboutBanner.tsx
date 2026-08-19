import React from "react";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  Heart,
  HeartHandshake,
  Scale,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

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
            src="/hero-images/dignity-in-every-final-journey-bg.png"
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
                font-sans
                text-[16px]
                font-semibold
                uppercase
                text-[#df5b0b]
              "
            >
              <span aria-hidden="true">—</span>
              <span>About Moksha Sewa</span>
            </div>

            {/* Heading */}
            <h1
              id="about-moksha-title"
              className="
                max-w-[620px]
                font-sans
                text-[24px]
                font-semibold
                leading-[1.05]
                text-[#12263b]
                sm:text-[30px]
              "
            >
              Every Final Journey
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Deserves Dignity
            </h1>

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
              Moksha Sewa is a humanitarian initiative of Namo Gange Trust,
              created to stand beside unclaimed and unsupported persons, and
              families facing financial hardship—so that dignity, care and
              respectful final rites are never denied when they matter most.
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
                <span>Know Our Mission</span>

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

              <button
                type="button"
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
                <span>Need Sewa Support?</span>

                <ArrowRight
                  size={21}
                  aria-hidden="true"
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>
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
              {supportItems.map((item, index) => (
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
                      index === supportItems.length - 1
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
                    <h2
                      className="
                        text-[16px]
                        font-semibold
                        leading-[1.25]
                        text-white
                      "
                    >
                      {item.title}
                    </h2>

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
            <Image src="/assets/about-optimized/about_banner_deco_left.png" alt="" width={100} height={100} className="h-auto w-[100px]" />
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
                We do not see a case. We see a human life
                <br className="hidden sm:block" />
                that deserves respect.
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
            <Image src="/assets/about-optimized/about_banner_deco_right.png" alt="" width={100} height={100} className="h-auto w-[100px]" />
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
            {values.map((item, index) => (
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
                    index === values.length - 1
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
                      text-[16px]
                      font-semibold
                      leading-[1.25]
                      text-[#171717]
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