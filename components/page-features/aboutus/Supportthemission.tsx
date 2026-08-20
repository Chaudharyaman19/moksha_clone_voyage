"use client";

import type { ReactElement } from "react";

interface IconProps {
  name:
    | "Body"
    | "Ambulance"
    | "Diya"
    | "Family"
    | "Handshake"
    | "ShieldCheck"
    | "HeartHands"
    | "Clipboard"
    | "People"
    | "Lotus"
    | "ArrowRight";
  className?: string;
}

/* =========================================================
   CUSTOM ICONS
========================================================= */

const CustomIcon = ({
  name,
  className = "h-6 w-6",
}: IconProps): ReactElement | null => {
  const icons: Record<IconProps["name"], ReactElement> = {
    Body: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 39h48" />
        <path d="M12 39v11" />
        <path d="M52 39v11" />
        <path d="M15 27h34c4 0 7 3 7 7v5H8v-5c0-4 3-7 7-7Z" />
        <path d="M20 27c2-5 7-8 12-8 7 0 12 3 15 8" />
        <path d="M22 23h20" />
      </svg>
    ),

    Ambulance: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 21h32v25H8Z" />
        <path d="M40 29h8l8 8v9H40Z" />
        <circle cx="19" cy="47" r="5" />
        <circle cx="47" cy="47" r="5" />
        <path d="M20 27v12" />
        <path d="M14 33h12" />
      </svg>
    ),

    Diya: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M32 9c5 7 8 12 8 17a8 8 0 1 1-16 0c0-5 3-10 8-17Z" />
        <path d="M32 35c-8-5-13-5-19-2 3 12 10 18 19 21 9-3 16-9 19-21-6-3-11-3-19 2Z" />
        <path d="M18 42h28" />
      </svg>
    ),

    Family: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="32" cy="18" r="6" />
        <circle cx="17" cy="24" r="5" />
        <circle cx="47" cy="24" r="5" />

        <path d="M22 50c1-11 4-17 10-17s9 6 10 17" />
        <path d="M7 49c1-8 4-13 10-13 3 0 5 1 7 3" />
        <path d="M57 49c-1-8-4-13-10-13-3 0-5 1-7 3" />
      </svg>
    ),

    Handshake: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 27 19 18l10 6 7-3 9 6 12-5" />
        <path d="m8 38 12 8 8-7" />
        <path d="m56 37-14 10-14-13" />
        <path d="m23 29 7-5 12 10" />
        <path d="m25 42 5 4" />
        <path d="m31 39 6 5" />
      </svg>
    ),

    ShieldCheck: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M32 6 50 13v14c0 13-7 22-18 29-11-7-18-16-18-29V13L32 6Z" />
        <path d="m24 30 6 6 12-14" />
      </svg>
    ),

    HeartHands: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M25 16c0-4 4-6 7-2 3-4 7-2 7 2 0 4-4 7-7 10-3-3-7-6-7-10Z" />
        <path d="M8 40c6-1 10 1 15 6l8 8" />
        <path d="M56 40c-6-1-10 1-15 6l-8 8" />
        <path d="M8 38v17" />
        <path d="M56 38v17" />
      </svg>
    ),

    Clipboard: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="14" y="11" width="34" height="43" rx="2" />
        <path d="M24 11V7h16v4" />
        <path d="M22 25h18" />
        <path d="M22 34h18" />
        <path d="M22 43h10" />
        <circle cx="45" cy="46" r="7" />
        <path d="m42 46 2 2 4-5" />
      </svg>
    ),

    People: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="32" cy="19" r="6" />
        <circle cx="17" cy="25" r="5" />
        <circle cx="47" cy="25" r="5" />
        <path d="M21 51c1-11 5-17 11-17s10 6 11 17" />
        <path d="M7 50c1-8 4-13 10-13 3 0 5 1 7 3" />
        <path d="M57 50c-1-8-4-13-10-13-3 0-5 1-7 3" />
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
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 12h15" />
        <path d="m14 7 5 5-5 5" />
      </svg>
    ),
  };

  return icons[name] ?? null;
};

/* =========================================================
   SUPPORT ITEMS
========================================================= */

const supportItems = [
  {
    icon: "Body" as const,
    text: "Essential\nfinal-journey\narrangements",
  },
  {
    icon: "Ambulance" as const,
    text: "Transportation\n& coordination",
  },
  {
    icon: "Diya" as const,
    text: "Ritual\nrequirements",
  },
  {
    icon: "Family" as const,
    text: "Eligible\nfamily support",
  },
  {
    icon: "Handshake" as const,
    text: "On-ground\ncoordination",
  },
];

/* =========================================================
   TRUST ITEMS
========================================================= */

const trustItems = [
  {
    icon: "ShieldCheck" as const,
    title: "Secure & Trusted",
    text: "Safe donations through\ntrusted gateway",
  },
  {
    icon: "Clipboard" as const,
    title: "Accountable Use",
    text: "Funds used for eligible\nactivities only",
  },
  {
    icon: "People" as const,
    title: "Transparency First",
    text: "Committed to responsible\nreporting",
  },
  {
    icon: "Lotus" as const,
    title: "Sewa With Dignity",
    text: "Ensuring respect and compassion\nin every step of the final journey",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function SupportTheMission() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#F7F2E9]
        px-4
        py-[16px]
        sm:px-5
        lg:px-6
      "
    >
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1344px]
          overflow-hidden
          rounded-[14px]
          border
          border-[#E4D7C3]
          bg-[#FBF6ED]
          shadow-[0_8px_24px_rgba(70,44,21,0.06)]
        "
      >
        {/* =====================================================
            TOP AREA
        ====================================================== */}

        <div
          className="
            relative
            min-h-0
            overflow-hidden
            bg-[#FBF6ED]
            lg:min-h-[430px]
          "
        >
          {/* =================================================
              BACKGROUND IMAGE
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              right-0
              hidden
              w-[69%]
              bg-no-repeat
              lg:block
            "
            style={{
              backgroundImage:
                "url('/assets/about/our-story/arthi.jpeg')",
              backgroundSize: "100% 100%",
              backgroundPosition: "right center",
            }}
          />

          {/* =================================================
              LEFT CREAM FADE
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              left-0
              z-[1]
              hidden
              w-[61%]
              lg:block
            "
            style={{
              background:
                "linear-gradient(90deg, #FBF6ED 0%, #FBF6ED 50%, rgba(251,246,237,0.98) 61%, rgba(251,246,237,0.87) 72%, rgba(251,246,237,0.46) 86%, rgba(251,246,237,0) 100%)",
            }}
          />

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div
            className="
              relative
              z-10
              w-full
              px-[18px]
              pb-[30px]
              pt-[25px]

              sm:px-[48px]

              lg:w-[56%]
              lg:px-[64px]
              lg:pb-[32px]
              lg:pt-[26px]
            "
          >
            {/* LABEL */}

            <div
              className="
                flex
                items-center
                justify-center
                gap-[10px]
                sm:justify-start
                sm:gap-[13px]
              "
            >
              <span className="relative hidden h-px w-[78px] bg-[#C18E39] sm:block">
                <span
                  className="
                    absolute
                    -right-[3px]
                    -top-[3px]
                    h-[7px]
                    w-[7px]
                    rounded-full
                    bg-[#B37C19]
                  "
                />
              </span>

              <span
                className="
                  text-center
                  text-[17px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-[#06483A]
                "
              >
                Support The Mission
              </span>

              <span className="relative hidden h-px w-[78px] bg-[#C18E39] sm:block">
                <span
                  className="
                    absolute
                    -left-[3px]
                    -top-[3px]
                    h-[7px]
                    w-[7px]
                    rounded-full
                    bg-[#B37C19]
                  "
                />
              </span>
            </div>

            {/* =================================================
                MAIN HEADING
            ================================================= */}

            <h2
              className="
                mt-[14px]

                font-sans
                text-center
                text-[25px]
                font-semibold
                leading-[1.05]

                sm:text-left
                sm:text-[30px]
              "
            >
              <span className="block text-[#063F33]">
                Help Namo Gange Trust
              </span>

              <span className="mt-[3px] block">
                <span className="text-[#063F33]">
                  Continue{" "}
                </span>

                <span className="text-[#B87916]">
                  Moksha Sewa.
                </span>
              </span>
            </h2>

            {/* =================================================
                LOTUS DIVIDER
            ================================================= */}

            <div
              className="
                mt-[14px]
                flex
                items-center
                gap-[10px]
              "
            >
              <span
                className="
                  h-px
                  flex-1
                  sm:w-[220px]
                  sm:flex-none
                  bg-gradient-to-r
                  from-[#C2913E]
                  to-transparent
                "
              />

              <CustomIcon
                name="Lotus"
                className="
                  h-[33px]
                  w-[33px]
                  shrink-0
                  text-[#B5842D]
                "
              />

              <span
                className="
                  h-px
                  flex-1
                  sm:w-[190px]
                  sm:flex-none
                  bg-gradient-to-l
                  from-transparent
                  to-[#C2913E]
                "
              />
            </div>

            {/* DESCRIPTION */}

            <p
              className="
                mt-[14px]
                max-w-[600px]

                text-center
                text-[17px]
                font-medium
                leading-7

                text-[#343A3D]
                sm:text-left
                sm:text-[22px]
                sm:leading-[1.52]
              "
            >
              Moksha Sewa is a humanitarian initiative of Namo Gange Trust.
              <br className="hidden sm:block" />
              Your contribution helps support the Trust&apos;s efforts to provide
              <br className="hidden sm:block" />
              dignified and responsible final-journey assistance through the
              <br className="hidden sm:block" />
              Moksha Sewa initiative.
            </p>
          </div>
        </div>

        {/* =====================================================
            LOWER WHITE PANEL
        ====================================================== */}

        <div
          className="
            relative
            z-20
            -mt-[5px]
            mx-0
            rounded-t-[18px]
            bg-[#FCF9F3]/98
            px-[14px]
            pb-[16px]
            pt-[12px]
            sm:mx-[18px]
            sm:rounded-t-[30px]
            sm:px-[25px]
          "
        >
          {/* =================================================
              HOW YOUR SUPPORT MAY HELP
          ================================================= */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-[10px]
              sm:gap-[18px]
            "
          >
            <span className="relative hidden h-px w-[76px] bg-[#BD8C38] sm:block">
              <span
                className="
                  absolute
                  -right-[3px]
                  -top-[3px]
                  h-[7px]
                  w-[7px]
                  rounded-full
                  bg-[#B57E18]
                "
              />
            </span>

            <span
              className="
                text-center
                text-[15px]
                font-bold
                uppercase
                tracking-[0.05em]
                text-[#074939]
                sm:text-[17px]
                sm:tracking-[0.08em]
              "
            >
              How Your Support May Help
            </span>

            <span className="relative hidden h-px w-[76px] bg-[#BD8C38] sm:block">
              <span
                className="
                  absolute
                  -left-[3px]
                  -top-[3px]
                  h-[7px]
                  w-[7px]
                  rounded-full
                  bg-[#B57E18]
                "
              />
            </span>
          </div>

          {/* =================================================
              MAIN LOWER GRID
          ================================================= */}

          <div
            className="
              mt-[13px]
              grid
              grid-cols-1
              gap-[20px]

              lg:grid-cols-[58%_42%]
            "
          >
            {/* ===============================================
                5 SUPPORT ITEMS
            =============================================== */}

            <div
              className="
                grid
                grid-cols-1
                gap-0

                sm:grid-cols-2
                md:grid-cols-3
                xl:grid-cols-5
              "
            >
              {supportItems.map((item, index) => (
                <div
                  key={item.text}
                  className={`
                    relative
                    flex
                    min-h-[118px]
                    flex-col
                    items-center
                    px-[10px]
                    py-3
                    text-center

                    ${
                      index !== 0
                        ? "border-t border-[#DED2C0] sm:border-t-0 sm:border-l"
                        : ""
                    }
                  `}
                >
                  {/* ICON CIRCLE */}

                  <div
                    className="
                      flex
                      h-[78px]
                      w-[78px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#ECEEE8]
                      text-[#155040]
                    "
                  >
                    <CustomIcon
                      name={item.icon}
                      className="
                        h-[50px]
                        w-[50px]
                      "
                    />
                  </div>

                  <p
                    className="
                      mt-[9px]
                      whitespace-pre-line
                      text-[16px]
                      font-semibold
                      leading-[1.32]
                      text-[#343638]
                    "
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* ===============================================
                DONATION DISCLOSURE
            =============================================== */}

            <div
              className="
                flex flex-col md:flex-row
                min-h-[158px]
                overflow-hidden
                rounded-[12px]
                bg-[#F1F0EA]
              "
            >
              {/* GREEN ICON SIDE */}

              <div
                className="
                  flex w-full
                  md:w-[128px]
                  shrink-0
                  items-center
                  justify-center
                  bg-[#004B3A]
                  text-[#D19A2E]
                "
              >
                <CustomIcon
                  name="ShieldCheck"
                  className="
                    h-[73px]
                    w-[73px]
                  "
                />
              </div>

              {/* CONTENT */}

              <div
                className="
                  flex-1
                  px-[27px]
                  py-[17px]
                "
              >
                <h3
                  className="
                    text-[18px]
                    font-bold
                    uppercase
                    tracking-[0.03em]
                    text-[#124B3C]
                  "
                >
                  Donation Disclosure
                </h3>

                <p
                  className="
                    mt-[10px]
                    text-[16px]
                    font-medium
                    leading-[1.48]
                    text-[#39403F]
                  "
                >
                  Contributions made through this website are received by Namo
                  Gange Trust and are utilised towards eligible activities and
                  support under the Moksha Sewa initiative, subject to applicable
                  policies and requirements.
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              CTA ROW
          ================================================= */}

          <div
            className="
              mt-[12px]
              flex
              items-center
              justify-center
              gap-[14px]
            "
          >
            <span
              className="
                hidden
                h-px
                flex-1
                bg-gradient-to-r
                from-transparent
                to-[#B6842E]
                md:block
              "
            />

            <span
              className="
                hidden
                h-[7px]
                w-[7px]
                rounded-full
                bg-[#B6842E]
                md:block
              "
            />

            <div
              className="
                flex
                h-[70px]
                w-[70px]
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#F1EFE7]
                text-[#B78221]
              "
            >
              <CustomIcon
                name="HeartHands"
                className="
                  h-[52px]
                  w-[52px]
                "
              />
            </div>

            <a
              href="/donation"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                h-[58px]
                min-w-[320px]
                items-center
                justify-between
                rounded-[11px]
                bg-[#004B38]
                px-[20px]
                text-white
                shadow-[0_7px_16px_rgba(0,62,44,0.14)]
                transition
                duration-300
                hover:-translate-y-[1px]
                hover:bg-[#003D2E]
              "
            >
              <span
                className="
                  text-[22px]
                  font-semibold
                  uppercase
                  tracking-[0.04em]
                "
              >
                Support The Mission
              </span>

              <CustomIcon
                name="ArrowRight"
                className="
                  h-[29px]
                  w-[29px]
                  text-[#D09B31]
                  transition-transform
                  duration-300
                  group-hover:translate-x-[3px]
                "
              />
            </a>

            <span
              className="
                hidden
                h-[7px]
                w-[7px]
                rounded-full
                bg-[#B6842E]
                md:block
              "
            />

            <span
              className="
                hidden
                h-px
                flex-1
                bg-gradient-to-l
                from-transparent
                to-[#B6842E]
                md:block
              "
            />
          </div>

          {/* =================================================
              TRUST BAND
          ================================================= */}

          <div
            className="
              mt-[10px]
              overflow-hidden
              rounded-[12px]
              border
              border-[#E1D6C6]
              bg-[#F8F5EE]
            "
          >
            <div
              className="
                grid
                grid-cols-1

                sm:grid-cols-2
                xl:grid-cols-4
              "
            >
              {trustItems.map((item, index) => (
                <div
                  key={item.title}
                  className={`
                    flex
                    min-h-[88px]
                    items-center
                    gap-[14px]
                    px-[24px]
                    py-[12px]

                    ${
                      index !== 0
                        ? "border-t border-[#DED3C3] sm:border-t-0 sm:border-l"
                        : ""
                    }
                  `}
                >
                  <CustomIcon
                    name={item.icon}
                    className="
                      h-[46px]
                      w-[46px]
                      shrink-0
                      text-[#155040]
                    "
                  />

                  <div>
                    <h4
                      className="
                        text-[16px]
                        font-bold
                        leading-[1.25]
                        text-[#164B3C]
                      "
                    >
                      {item.title}
                    </h4>

                    <p
                      className="
                        mt-[3px]
                        whitespace-pre-line
                        text-[16px]
                        leading-[1.3]
                        text-[#4A4C4A]
                      "
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
