"use client";

import Image from "next/image";
import type { ReactElement } from "react";
import { textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";

interface IconProps {
  name: string;
  className?: string;
}

const CustomIcon = ({ name, className = "h-6 w-6" }: IconProps) => {
  const icons: Record<string, ReactElement> = {
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

    Diya: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 40c7 0 11-3 15-8 4 5 8 8 15 8" />
        <path d="M17 40h30" />
        <path d="M24 45h16" />

        <path d="M32 12c5.5 6.5 6.5 11.5 6.5 15a6.5 6.5 0 1 1-13 0c0-3.5 1-8.5 6.5-15Z" />
        <path d="M32 20c2.2 3 2.8 5.2 2.8 7a2.8 2.8 0 1 1-5.6 0c0-1.8.6-4 2.8-7Z" />

        <path d="M10 29h6" />
        <path d="M48 29h6" />
        <path d="m14 21 5 3" />
        <path d="m50 21-5 3" />
      </svg>
    ),

    HeartHands: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M24 15.5c0-4.2 4.5-6 8-2 3.5-4 8-2.2 8 2 0 4.4-4.5 7.6-8 10.7-3.5-3.1-8-6.3-8-10.7Z" />

        <path d="M9 39c5-1 9.5 1.2 13.5 5.5L28 51" />
        <path d="M55 39c-5-1-9.5 1.2-13.5 5.5L36 51" />

        <path d="M9 37v15" />
        <path d="M55 37v15" />

        <path d="M20 33c3.5-3 7.5-4.5 12-4.5S40.5 30 44 33" />
      </svg>
    ),

    Building: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 54h46" />
        <path d="M15 24h34" />
        <path d="M32 9 13 24h38L32 9Z" />
        <path d="M19 54V29" />
        <path d="M28 54V29" />
        <path d="M37 54V29" />
        <path d="M46 54V29" />
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

const features = [
  {
    icon: "ShieldCheck",
    title: "Legally Authorised Cases",
    text: "We support only legally authorised unclaimed cases.",
    iconColor: "#0C5137",
    secondColor: "#C79421",
  },
  {
    icon: "Diya",
    title: "Dignified Final Rites",
    text: "Every soul deserves a respectful and dignified farewell.",
    iconColor: "#B97D13",
    secondColor: "#0C5137",
  },
  {
    icon: "HeartHands",
    title: "Compassionate Human Presence",
    text: "Our volunteers stand with care, respect and humanity.",
    iconColor: "#0C5137",
    secondColor: "#B97D13",
  },
];

export default function HumanitarianCommitment() {
  const websiteSection = useWebsiteSection("humanitarian-commitment");
  const managedFeatures = features.map((fallback, index) => {
    const item = websiteSection?.items?.[index];
    return {
      ...fallback,
      title: textOrFallback(item?.title, fallback.title, 70),
      text: textOrFallback(item?.description, fallback.text, 160),
    };
  });

  return (
    <section className="w-full bg-[#F7F3EC] px-3 py-3 sm:px-4 lg:px-5">
      <div className="mx-auto w-full max-w-[1344px]">
        {/* =====================================================
            MAIN LARGE CARD
        ====================================================== */}

        <div className="relative overflow-hidden rounded-[18px] border border-[#D7AF67] bg-[#FCF8F0] shadow-[0_7px_24px_rgba(74,47,19,0.06)]">
          <div className="grid lg:h-[575px] lg:grid-cols-[59%_41%]">
            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div className="relative z-10 flex flex-col px-5 pb-5 pt-3 sm:px-7 lg:px-[34px] lg:pb-[26px] lg:pt-[14px]">
              {/* TOP LEFT LEAF */}

              <svg
                viewBox="0 0 190 240"
                className="pointer-events-none absolute -left-[12px] -top-[4px] h-[210px] w-[160px] text-[#A8AF94]/45"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
              >
                <path d="M25 220C40 170 75 105 156 34" />

                <path d="M42 171c-24-11-29-35-21-55 24 8 38 26 36 49" />

                <path d="M64 137c-20-16-20-40-8-57 21 13 30 32 23 53" />

                <path d="M91 101c-15-20-8-42 7-56 18 18 21 37 8 54" />

                <path d="M122 69c-9-22 3-41 22-49 13 20 7 37-9 50" />
              </svg>

              {/* ================= TOP LABEL ================= */}

              <div className="relative z-10 flex flex-col items-center">
                <CustomIcon
                  name="Lotus"
                  className="mb-[2px] h-[28px] w-[28px] text-[#B9780B]"
                />

                <div className="flex flex-wrap items-center justify-center gap-[9px]">
                  <span className="relative hidden h-px w-[72px] bg-[#B87A12] sm:block">
                    <span className="absolute -right-[3px] -top-[2px] h-[5px] w-[5px] rounded-full bg-[#B87A12]" />
                  </span>

                  <span className="text-center font-sans text-[16px] font-semibold uppercase text-[#B77912]">
                    {textOrFallback(websiteSection?.eyebrow, "Our Humanitarian Commitment", 70)}
                  </span>

                  <span className="relative hidden h-px w-[72px] bg-[#B87A12] sm:block">
                    <span className="absolute -left-[3px] -top-[2px] h-[5px] w-[5px] rounded-full bg-[#B87A12]" />
                  </span>
                </div>
              </div>

              {/* ================= HEADING ================= */}

              <h2 className="relative z-10 mx-auto mt-[8px] max-w-[720px] text-center font-sans text-[24px] font-semibold leading-[1.05] text-[#064A31] sm:text-[30px]">
                {textOrFallback(websiteSection?.title, "No One Should Leave\nThis World Without Dignity.", 95)
                  .split("\n")
                  .map((line, index) => (
                    <span key={line} className="block">
                      {index === 1 && line.includes("Dignity") ? (
                        <>
                          {line.replace("Dignity", "")}
                          <span className="text-[#BA790F]">Dignity.</span>
                        </>
                      ) : (
                        line
                      )}
                    </span>
                  ))}
              </h2>

              {/* ================= LOTUS DIVIDER ================= */}

              <div className="relative z-10 mt-[8px] flex items-center justify-center gap-[10px]">
                <span className="h-px w-[78px] bg-gradient-to-r from-transparent to-[#BE8C3E]" />

                <CustomIcon
                  name="Lotus"
                  className="h-[27px] w-[27px] text-[#B87912]"
                />

                <span className="h-px w-[78px] bg-gradient-to-l from-transparent to-[#BE8C3E]" />
              </div>

              {/* ================= PARAGRAPH ================= */}

              <p className="relative z-10 mx-auto mt-[10px] max-w-[690px] text-center text-[16px] leading-[1.5] text-[#465365]">
                {textOrFallback(websiteSection?.description, "Moksha Sewa supports legally authorised unclaimed cases with respectful final-rites coordination after completion of applicable police, hospital and authority formalities. Our team works carefully with the concerned authorities and service partners to help ensure that each final journey is handled with dignity, compassion, proper coordination and due respect. Support is provided only within the approved legal process and after the required documentation, verification and permissions have been completed.", 600)}
              </p>

              {/* =================================================
                  FEATURES
              ================================================== */}

              <div className="relative z-10 mt-auto grid grid-cols-1 divide-y divide-[#DDBF91] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {managedFeatures.map((item) => (
                  <div
                    key={item.title}
                    className="flex min-h-[205px] flex-col items-center justify-start px-[18px] pt-[4px] text-center"
                  >
                    {/* ICON CIRCLE */}

                    <div className="flex h-[86px] w-[86px] shrink-0 items-center justify-center rounded-full bg-[#F0EFE2]">
                      <CustomIcon
                        name={item.icon}
                        className="h-[49px] w-[49px]"
                      />
                    </div>

                    {/* TITLE */}

                    <h3 className="mt-[8px] min-h-[44px] text-[17px] font-semibold leading-[1.15] text-[#125439]">
                      {item.title}
                    </h3>

                    {/* GOLD LINE */}

                    <span className="mt-[5px] h-[2px] w-[36px] bg-[#C99328]" />

                    {/* TEXT */}

                    <p className="mt-[11px] max-w-[210px] text-[16px] leading-[1.4] text-[#48515E]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* =================================================
                RIGHT IMAGE
            ================================================== */}

            <div className="relative min-h-[440px] lg:h-[575px]">
              <div className="absolute inset-0 overflow-hidden rounded-b-[16px] border-t-2 border-[#D5A148] lg:rounded-b-none lg:rounded-tl-[230px_54%] lg:rounded-bl-[230px_54%] lg:border-l-2 lg:border-t-0">
                <Image
                  src={websiteSection?.image || "/assets/image.png"}
                  alt={textOrFallback(websiteSection?.title, "Moksha Sewa unclaimed body support", 120)}
                  fill
                  priority
                  quality={100}
                  sizes="(max-width: 1024px) 100vw, 41vw"
                  className="object-inherit object-center"
                />
              </div>

              {/* ================= OVERLAP CTA ================= */}

              <div className="absolute bottom-[9px] left-[6px] right-[9px] z-20">
                <a
                  href={websiteSection?.buttonHref || "/unclaimed-body-sewa"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[64px] w-full items-center justify-between gap-[10px] rounded-[16px] border-[3px] border-[#C69428] bg-[#005234] px-[12px] py-[10px] text-white shadow-[0_8px_18px_rgba(2,63,40,0.18)] sm:min-h-[88px] sm:gap-0 sm:rounded-[24px] sm:px-[18px]"
                >
                  <div className="flex min-w-0 items-center gap-[10px] sm:gap-[15px]">
                    <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border-[3px] border-[#C79428] text-[#D0A02D] sm:h-[61px] sm:w-[61px]">
                      <CustomIcon
                        name="Lotus"
                        className="h-[24px] w-[24px] sm:h-[36px] sm:w-[36px]"
                      />
                    </span>

                    <span className="text-[16px] font-semibold uppercase leading-tight sm:leading-none">
                      {textOrFallback(websiteSection?.buttonLabel, "Know About Unclaimed Body Sewa", 60)}
                    </span>
                  </div>

                  <span className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#DEA516] text-white sm:h-[49px] sm:w-[49px]">
                    <CustomIcon
                      name="ArrowRight"
                      className="h-[18px] w-[18px] sm:h-[24px] sm:w-[24px]"
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM COMMITMENT STRIP
        ====================================================== */}

        <div className="relative mt-[12px] overflow-hidden rounded-[17px] border border-[#DCC39B] bg-[#FCF8F0] shadow-[0_4px_13px_rgba(75,48,22,0.04)]">
          <div className="grid min-h-[126px] grid-cols-1 lg:grid-cols-[48%_52%]">
            {/* ================= LEFT ================= */}

            <div className="flex items-center gap-[16px] px-[20px] py-[14px] sm:gap-[24px] sm:px-[38px]">
              <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full bg-[#004E34] text-[#D0A020] sm:h-[82px] sm:w-[82px]">
                <CustomIcon
                  name="Building"
                  className="h-[34px] w-[34px] sm:h-[45px] sm:w-[45px]"
                />
              </div>

              <div className="min-w-0">
                <h3 className="text-[22px] font-semibold leading-none text-[#124C36]">
                  Our Commitment
                </h3>

                <span className="mt-[7px] block h-[2px] w-[88px] bg-[#C68E2D]" />

                <p className="mt-[8px] max-w-[540px] text-[16px] leading-[1.45] text-[#45505E]">
                  We follow all legal requirements and work in coordination with
                  authorities to ensure dignity and responsibility.
                </p>
              </div>
            </div>

            {/* ================= CENTER DIVIDER ================= */}

            <span className="absolute bottom-[18px] left-[48%] top-[18px] hidden w-px bg-[#D9BC8A] lg:block" />

            {/* ================= RIGHT ================= */}

            <div className="relative flex items-center gap-[16px] border-t border-[#E0D3BF] px-[20px] py-[14px] sm:gap-[26px] sm:px-[38px] lg:border-t-0">
              <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full bg-[#F0EFE2] text-[#0D5539] sm:h-[82px] sm:w-[82px]">
                <CustomIcon
                  name="ShieldCheck"
                  className="h-[34px] w-[34px] sm:h-[46px] sm:w-[46px]"
                />
              </div>

              <p className="relative z-10 max-w-[500px] text-[16px] leading-[1.48] text-[#46505E]">
                All support is subject to verification, applicable legal
                requirements and availability of resources.
              </p>

              {/* RIGHT LEAF WATERMARK */}

              <svg
                viewBox="0 0 200 125"
                className="pointer-events-none absolute -bottom-[8px] right-[20px] h-[110px] w-[180px] text-[#AEB59D]/38"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
              >
                <path d="M20 102C48 65 88 43 166 20" />

                <path d="M49 83c-17-9-22-25-17-40 18 4 29 15 32 31" />

                <path d="M78 65c-15-12-15-29-8-43 16 8 24 21 21 37" />

                <path d="M112 48c-11-15-6-30 5-40 13 11 17 24 10 37" />

                <path d="M145 33c-6-16 3-27 16-32 8 13 5 24-7 33" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
