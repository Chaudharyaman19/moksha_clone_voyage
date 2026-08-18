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

    ShieldCheck: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.9"
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
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 40c7 0 11-3 15-8 4 5 8 8 15 8" />
        <path d="M17 40h30" />
        <path d="M24 45h16" />
        <path d="M32 13c5 6 6 11 6 14a6 6 0 1 1-12 0c0-3 1-8 6-14Z" />
        <path d="M32 20c2.2 3 2.8 5.3 2.8 7a2.8 2.8 0 1 1-5.6 0c0-1.7.6-4 2.8-7Z" />
        <path d="M11 30h6" />
        <path d="M47 30h6" />
        <path d="M14 22l4 3" />
        <path d="M50 22l-4 3" />
      </svg>
    ),

    HeartHands: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M26 16c0-4 3.8-5.7 6-2.4 2.2-3.3 6-1.6 6 2.4 0 3.7-3.5 6.5-6 8.7-2.5-2.2-6-5-6-8.7Z" />
        <path d="M10 39c5-1 9 1 13 5l5 6" />
        <path d="M54 39c-5-1-9 1-13 5l-5 6" />
        <path d="M10 38v14" />
        <path d="M54 38v14" />
        <path d="M20 33c3-3 7-4 12-4s9 1 12 4" />
      </svg>
    ),

    Building: (
      <svg
        className={className}
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 54h44" />
        <path d="M16 24h32" />
        <path d="M32 10 14 24h36L32 10Z" />
        <path d="M20 54V29" />
        <path d="M29 54V29" />
        <path d="M38 54V29" />
        <path d="M47 54V29" />
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
    color: "#145C3A",
  },
  {
    icon: "Diya",
    title: "Dignified Final Rites",
    text: "Every soul deserves a respectful and dignified farewell.",
    color: "#C18A19",
  },
  {
    icon: "HeartHands",
    title: "Compassionate Human Presence",
    text: "Our volunteers stand with care, respect and humanity.",
    color: "#145C3A",
  },
];

export default function HumanitarianCommitment() {
  return (
    <section className="w-full bg-[#F7F3EC] px-4 py-4 lg:px-6">
      <div className="mx-auto w-full max-w-[1600px]">

        {/* ===================== MAIN PANEL ===================== */}
        <div
          className="
            overflow-hidden
            rounded-[20px]
            border
            border-[#DCC7A2]
            bg-[#FCF8F1]
            shadow-[0_8px_26px_rgba(79,52,24,0.06)]
          "
        >
          <div className="grid lg:grid-cols-[58%_42%]">

            {/* ===================== LEFT CONTENT ===================== */}
            <div className="relative px-6 pb-5 pt-4 sm:px-8 lg:px-10 lg:pb-6">

              {/* floral left */}
              <svg
                viewBox="0 0 180 180"
                className="
                  pointer-events-none
                  absolute
                  left-2
                  top-4
                  h-[165px]
                  w-[165px]
                  text-[#B7BEA6]/35
                "
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              >
                <path d="M24 150C46 110 74 70 136 30" />
                <path d="M42 120C24 110 22 92 28 78c17 8 25 21 22 38" />
                <path d="M59 98C44 84 46 67 56 54c14 11 18 25 12 40" />
                <path d="M82 76C69 58 75 43 86 32c12 13 15 27 5 40" />
                <path d="M105 57C98 38 108 24 122 18c9 15 6 28-7 39" />
              </svg>

              {/* top label */}
              <div className="mb-2 flex flex-col items-center">
                <CustomIcon
                  name="Lotus"
                  className="mb-1 h-[30px] w-[30px] text-[#BF8A2E]"
                />

                <div className="flex items-center justify-center gap-3">
                  <span className="h-px w-[76px] bg-[#C79339]" />
                  <span className="text-[16px] font-bold uppercase tracking-[0.03em] text-[#BF8A2E]">
                    Our Humanitarian Commitment
                  </span>
                  <span className="h-px w-[76px] bg-[#C79339]" />
                </div>
              </div>

              {/* heading */}
              <h2
                className="
                  mx-auto
                  max-w-[760px]
                  text-center
                  text-[34px]
                  font-semibold
                  leading-[1.02]
                  text-[#0D4D33]
                  sm:text-[44px]
                  lg:text-[62px]
                "
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                <span className="block">No One Should Leave</span>
                <span className="block">
                  This World Without
                  <span className="text-[#C08B1F]"> Dignity.</span>
                </span>
              </h2>

              {/* flourish */}
              <div className="mt-3 flex items-center justify-center gap-3">
                <span className="h-px w-[72px] bg-gradient-to-r from-transparent to-[#C79540]" />
                <CustomIcon
                  name="Lotus"
                  className="h-[26px] w-[26px] text-[#BF8A2E]"
                />
                <span className="h-px w-[72px] bg-gradient-to-l from-transparent to-[#C79540]" />
              </div>

              {/* description */}
              <p className="mx-auto mt-4 max-w-[760px] text-center text-[16px] leading-[1.45] text-[#4B4E54] sm:text-[17px]">
                Moksha Sewa supports legally authorised unclaimed cases with
                respectful final-rites coordination after completion of applicable
                police, hospital and authority formalities.
              </p>

              {/* feature row */}
              <div className="mt-6 grid grid-cols-1 divide-y divide-[#E7D5B8] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {features.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col items-center px-5 py-4 text-center"
                  >
                    <div className="flex h-[92px] w-[92px] items-center justify-center rounded-full bg-[#F5F2E8]">
                      <CustomIcon
                        name={item.icon}
                        className="h-[50px] w-[50px]"
                      />
                    </div>

                    <h3
                      className="mt-4 min-h-[52px] text-[16px] font-bold leading-[1.2] sm:text-[18px]"
                      style={{ color: "#155639" }}
                    >
                      {item.title}
                    </h3>

                    <span
                      className="mt-3 h-[3px] w-[38px] rounded-full"
                      style={{ backgroundColor: "#D0A14A" }}
                    />

                    <p className="mt-4 max-w-[240px] text-[16px] leading-[1.35] text-[#50545B]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ===================== RIGHT IMAGE + CTA ===================== */}
            <div className="relative flex flex-col justify-end bg-[#FCF8F1]">

              {/* arched image area */}
              <div className="relative h-[420px] lg:h-[550px]">
                <div
                  className="
                    absolute
                    inset-x-0
                    top-0
                    bottom-0
                    overflow-hidden
                    border-l-[3px]
                    border-[#D7B06B]
                    bg-[#F6EFE4]
                    lg:rounded-l-[180px]
                  "
                >
                  <Image
                    src="/assets/about-optimized/hearse-van.webp"
                    alt="Unclaimed body sewa support"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* bottom CTA green bar */}
              <div className="relative z-10 px-4 pb-4 lg:absolute lg:bottom-0 lg:left-0 lg:right-0">
                <a
                  href="/unclaimed-body-sewa"
                  className="
                    flex
                    min-h-[82px]
                    items-center
                    justify-between
                    gap-4
                    rounded-[24px]
                    border-[3px]
                    border-[#C69642]
                    bg-[#005432]
                    px-5
                    py-4
                    text-white
                    shadow-[0_8px_20px_rgba(8,70,45,0.16)]
                  "
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-[54px] w-[54px] items-center justify-center rounded-full border-[3px] border-[#C69642] text-[#D2A540]">
                      <CustomIcon
                        name="Lotus"
                        className="h-[30px] w-[30px]"
                      />
                    </span>

                    <span className="text-[16px] font-bold uppercase leading-[1.2] sm:text-[20px]">
                      Know About Unclaimed Body Sewa
                    </span>
                  </div>

                  <span className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-[#D6A225] text-white">
                    <CustomIcon
                      name="ArrowRight"
                      className="h-[26px] w-[26px]"
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== BOTTOM STRIP ===================== */}
        <div
          className="
            mt-5
            overflow-hidden
            rounded-[18px]
            border
            border-[#DDCCAD]
            bg-[#FCF8F1]
            shadow-[0_5px_14px_rgba(69,45,19,0.04)]
          "
        >
          <div className="grid grid-cols-1 lg:grid-cols-[48%_52%]">

            {/* left */}
            <div className="flex items-center gap-5 px-6 py-4 lg:px-8">
              <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-[#005432] text-[#D6A225]">
                <CustomIcon
                  name="Building"
                  className="h-[40px] w-[40px]"
                />
              </div>

              <div className="min-w-0">
                <h3
                  className="text-[16px] font-bold leading-[1.2] text-[#155639] sm:text-[20px]"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  Our Commitment
                </h3>

                <p className="mt-2 text-[16px] leading-[1.45] text-[#52565E]">
                  We follow all legal requirements and work in coordination
                  with authorities to ensure dignity and responsibility.
                </p>
              </div>
            </div>

            {/* right */}
            <div className="relative flex items-center gap-5 border-t border-[#E3D6C0] px-6 py-4 lg:border-l lg:border-t-0 lg:px-8">
              <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-[#F3F1E7] text-[#145C3A]">
                <CustomIcon
                  name="ShieldCheck"
                  className="h-[38px] w-[38px]"
                />
              </div>

              <p className="relative z-10 max-w-[560px] text-[16px] leading-[1.45] text-[#52565E]">
                All support is subject to verification, applicable legal
                requirements and availability of resources.
              </p>

              {/* right leaves */}
              <svg
                viewBox="0 0 180 120"
                className="
                  pointer-events-none
                  absolute
                  bottom-0
                  right-4
                  h-[90px]
                  w-[150px]
                  text-[#B7BEA6]/35
                "
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
              >
                <path d="M18 92c18-28 46-50 112-74" />
                <path d="M42 78c-15-8-18-22-15-35 16 3 26 12 28 26" />
                <path d="M66 65c-13-10-13-24-8-36 14 6 22 17 21 31" />
                <path d="M94 48c-9-12-7-25 1-36 11 8 16 19 12 32" />
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}