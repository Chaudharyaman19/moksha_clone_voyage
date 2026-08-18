import Image from "next/image";
import type { ReactElement } from "react";

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
        strokeWidth="2.8"
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
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="32" cy="19" r="5" />
        <circle cx="20" cy="24" r="4" />
        <circle cx="44" cy="24" r="4" />

        <path d="M24 43c.7-7 3.4-10.5 8-10.5S39.3 36 40 43" />

        <path d="M11 43c.5-6 3-9 8-9 2.2 0 4 .7 5.5 2" />
        <path d="M53 43c-.5-6-3-9-8-9-2.2 0-4 .7-5.5 2" />

        <path d="M17 49c4-2 8-1 11 2" />
        <path d="M47 49c-4-2-8-1-11 2" />
      </svg>
    ),

    ElderlyCare: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="26" cy="19" r="5" />
        <circle cx="39" cy="21" r="4.2" />

        <path d="M15 46c1-9 4.5-14 11-14s10 5 11 14" />

        <path d="M32 46c.8-7 3.2-11 8-11s7.6 4 8.5 11" />

        <path d="M22 28c3 2 5 2 8 0" />
        <path d="M37 27c2 1.5 4 1.5 6 0" />
      </svg>
    ),

    UnclaimedCase: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="32" cy="19" r="5" />
        <circle cx="19" cy="23" r="4" />
        <circle cx="45" cy="23" r="4" />

        <path d="M23 46c.7-8 3.7-12 9-12s8.3 4 9 12" />

        <path d="M9 46c.5-7 3-10 8-10 2.3 0 4.2.8 5.8 2.2" />

        <path d="M55 46c-.5-7-3-10-8-10-2.3 0-4.2.8-5.8 2.2" />

        <path d="M32 50v5" />
        <path d="M28 53h8" />
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
        strokeWidth="3"
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
        strokeWidth="2.4"
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
  icon: string;
  title: string;
  location: string;
  services: string[];
  description: string;
  accent: string;
}

const stories: StoryCard[] = [
  {
    image: "/assets/about-optimized/family-support.webp",
    icon: "FamilyHands",
    title: "ECONOMICALLY WEAKER FAMILY",
    location: "Delhi NCR",
    services: ["Transport", "Ritual Essentials", "Priest Coordination"],
    description:
      "An elderly father passed away unexpectedly. With no one to support the family, our team arranged transport, cremation and performed all rituals with dignity.",
    accent: "#39694D",
  },

  {
    image: "/assets/about-optimized/hearse-van.webp",
    icon: "ElderlyCare",
    title: "ELDERLY WITHOUT SUPPORT",
    location: "Ghaziabad, UP",
    services: ["Transport", "Cremation", "Rituals"],
    description:
      "An elderly man with no close family passed away. Our team arranged cremation and performed all rituals with dignity and respect.",
    accent: "#527258",
  },

  {
    image: "/assets/about-optimized/cremation-ritual.webp",
    icon: "UnclaimedCase",
    title: "UNCLAIMED BODY CASE",
    location: "Faridabad, Haryana",
    services: ["Transport", "Cremation", "Rituals"],
    description:
      "A legally authorised unclaimed body was given a respectful last journey by our team with complete dignity and proper rituals.",
    accent: "#4B6B55",
  },
];

const backgroundPattern = {
  backgroundImage:
    "radial-gradient(circle at 20% 20%, rgba(154,111,50,0.055) 0 1px, transparent 1.2px)",
  backgroundSize: "24px 24px",
};

export default function SewaStories() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#FBF8F1]
        px-4
        py-6
        sm:px-5
        lg:px-6
        lg:py-8
      "
    >
      {/* ===========================================
          BACKGROUND
      ============================================ */}

      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={backgroundPattern}
      />

      {/* LEFT LEAF DECORATION */}

      <svg
        viewBox="0 0 180 180"
        className="
          pointer-events-none
          absolute
          -left-10
          -top-4
          h-[190px]
          w-[190px]
          text-[#B5BCA1]/28
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <path d="M22 148C43 109 72 69 138 28" />

        <path d="M38 121C21 110 20 92 26 77c17 9 25 22 22 39" />

        <path d="M55 99C40 84 43 66 52 53c15 12 19 26 12 41" />

        <path d="M79 76C66 58 73 42 84 31c13 14 15 28 5 41" />

        <path d="M103 55C95 36 105 23 120 17c9 16 6 29-7 39" />
      </svg>

      {/* RIGHT GHAT FADE */}

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          h-[210px]
          w-[430px]
          bg-[linear-gradient(to_left,rgba(178,151,111,0.15),transparent)]
        "
      />

      {/* ===========================================
          MAIN
      ============================================ */}

      <div className="relative z-10 mx-auto w-full max-w-[1344px]">

        {/* ===========================================
            HEADER
        ============================================ */}

        <header className="mx-auto mb-6 max-w-[960px] text-center">

          {/* LABEL */}

          <div className="mb-[6px] flex items-center justify-center gap-[10px]">

            <span className="h-px w-[60px] bg-[#BD8C43]" />

            <CustomIcon
              name="Lotus"
              className="h-[23px] w-[23px] text-[#B88339]"
            />

            <span
              className="
                text-[16px]
                font-bold
                uppercase
                tracking-[0.06em]
                text-[#9B6B2B]
              "
            >
              Sewa Stories
            </span>

            <span className="h-px w-[60px] bg-[#BD8C43]" />

          </div>

          {/* HEADING */}

          <h2
            className="
              font-serif
              text-[35px]
              font-semibold
              leading-[1.02]
              text-[#174C32]
              sm:text-[42px]
              lg:text-[50px]
            "
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            Every Sewa Has a Human Story
          </h2>

          {/* SUBTITLE */}

          <p
            className="
              mx-auto
              mt-[9px]
              max-w-[780px]
              text-[16px]
              leading-[1.4]
              text-[#55534E]
            "
          >
            Behind every case is a life, a family and a final journey deserving
            of respect.
          </p>

        </header>

        {/* ===========================================
            3 STORY CARDS
        ============================================ */}

        <div
          className="
            grid
            grid-cols-1
            gap-[18px]
            md:grid-cols-2
            lg:grid-cols-3
          "
        >

          {stories.map((story) => (
            <article
              key={story.title}
              className="
                relative
                overflow-hidden
                rounded-[12px]
                border
                border-[#E4DDD2]
                bg-[#FFFCF7]
                shadow-[0_7px_18px_rgba(64,43,25,0.09)]
              "
            >

              {/* ===================================
                  IMAGE
              ==================================== */}

              <div
                className="
                  relative
                  h-[185px]
                  overflow-hidden
                "
              >

                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  quality={95}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />

                {/* IMAGE SOFT GRADIENT */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/15
                    via-transparent
                    to-transparent
                  "
                />

                {/* VERIFIED BADGE */}

                <div
                  className="
                    absolute
                    left-[14px]
                    top-[13px]
                    flex
                    h-[30px]
                    items-center
                    gap-[7px]
                    rounded-[5px]
                    bg-[#0E573A]
                    px-[10px]
                    text-[16px]
                    font-semibold
                    text-white
                    shadow-[0_3px_8px_rgba(19,69,48,0.20)]
                  "
                >
                  <CustomIcon
                    name="ShieldCheck"
                    className="h-[18px] w-[18px] text-[#D3B76B]"
                  />

                  Verified Case
                </div>

              </div>

              {/* ===================================
                  CARD CONTENT
              ==================================== */}

              <div className="px-[20px] pb-[20px] pt-[16px]">

                {/* TITLE ROW */}

                <div className="flex items-start gap-[12px]">

                  {/* CATEGORY ICON */}

                  <span
                    className="
                      flex
                      h-[47px]
                      w-[47px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#F1EEE3]
                    "
                    style={{
                      color: story.accent,
                    }}
                  >
                    <CustomIcon
                      name={story.icon}
                      className="h-[32px] w-[32px]"
                    />
                  </span>

                  <div className="min-w-0 flex-1">

                    {/* TITLE */}

                    <h3
                      className="
                        text-[16px]
                        font-bold
                        uppercase
                        leading-[1.2]
                      "
                      style={{
                        color: story.accent,
                      }}
                    >
                      {story.title}
                    </h3>

                    {/* LOCATION */}

                    <div
                      className="
                        mt-[5px]
                        flex
                        items-center
                        gap-[5px]
                        text-[16px]
                        leading-none
                        text-[#504A42]
                      "
                    >
                      <CustomIcon
                        name="MapPin"
                        className="h-[16px] w-[16px] text-[#C48C3C]"
                      />

                      <span>
                        {story.location}
                      </span>

                    </div>

                  </div>

                </div>

                {/* SERVICES */}

                <div
                  className="
                    mt-[11px]
                    flex
                    flex-wrap
                    items-center
                    gap-x-[7px]
                    gap-y-[3px]
                    text-[16px]
                    font-medium
                    leading-[1.25]
                    text-[#4A443D]
                  "
                >
                  {story.services.map((service, index) => (
                    <span
                      key={service}
                      className="inline-flex items-center"
                    >
                      {index > 0 && (
                        <span className="mr-[7px] text-[#B2843F]">
                          •
                        </span>
                      )}

                      {service}
                    </span>
                  ))}
                </div>

                {/* COMPLETED BADGE */}

                <div className="mt-[13px]">

                  <span
                    className="
                      inline-flex
                      h-[31px]
                      items-center
                      gap-[7px]
                      rounded-[6px]
                      bg-[#EEF1E7]
                      px-[10px]
                      text-[16px]
                      font-semibold
                      text-[#466047]
                    "
                  >

                    <CustomIcon
                      name="CheckCircle"
                      className="h-[17px] w-[17px]"
                    />

                    Sewa Completed

                    <CustomIcon
                      name="ArrowRight"
                      className="h-[14px] w-[14px] text-[#B28946]"
                    />

                  </span>

                </div>

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-[15px]
                    text-[16px]
                    leading-[1.48]
                    text-[#403B35]
                  "
                >
                  {story.description}
                </p>

              </div>

            </article>
          ))}

        </div>

        {/* ===========================================
            BOTTOM CTA STRIP
        ============================================ */}

        <div
          className="
            mx-auto
            mt-[28px]
            flex
            min-h-[70px]
            max-w-[880px]
            flex-col
            items-center
            justify-between
            gap-4
            rounded-[10px]
            border
            border-[#D9B77C]
            bg-[#FFFDF8]
            px-[24px]
            py-[10px]
            shadow-[0_4px_12px_rgba(78,52,26,0.05)]
            sm:flex-row
          "
        >

          {/* LEFT */}

          <div className="flex items-center gap-[18px]">

            <CustomIcon
              name="Lotus"
              className="h-[42px] w-[42px] shrink-0 text-[#B98535]"
            />

            <span className="h-[42px] w-px bg-[#E2D6C2]" />

            <p
              className="
                text-[16px]
                font-medium
                leading-[1.3]
                text-[#3F3B35]
              "
            >
              Every life deserves dignity. Every story deserves respect.
            </p>

          </div>

          {/* BUTTON */}

          <a
            href="/gallery"
            className="
              inline-flex
              h-[42px]
              min-w-[190px]
              items-center
              justify-center
              gap-[18px]
              rounded-[6px]
              bg-[#0C5139]
              px-[20px]
              text-[16px]
              font-bold
              uppercase
              text-white
              shadow-[0_4px_10px_rgba(11,73,51,0.17)]
              transition
              hover:-translate-y-[1px]
              hover:bg-[#093F2D]
            "
          >
            View Our Work

            <CustomIcon
              name="ArrowRight"
              className="h-[17px] w-[17px] text-[#D7A344]"
            />

          </a>

        </div>

      </div>

    </section>
  );
}