"use client";

import React from "react";
import Image from "next/image";
import { imageOrFallback, textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";

const MokshaSewaIntro: React.FC = () => {
  const section = useWebsiteSection("about-moksha-sewa");

  return (
    <section className="relative min-h-[360px] w-full overflow-hidden bg-[#f7efe3]">
      {/* Background Image */}
      <Image
        src={imageOrFallback(section?.image, "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788164982/moksha-sewa/assets/about-optimized/a_mission.png")}
        alt="Moksha Sewa at the ghats"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Left cream overlay */}
      <div
        className="
          absolute inset-y-0 left-0 z-10
          w-full
          lg:w-[53%]
          bg-gradient-to-r
          from-[#faf4e9]
          via-[#faf4e9]/95
          to-[#faf4e9]/80
          lg:to-[#faf4e9]/35
        "
      />

      {/* Content */}
      <div
        className="
          relative z-20
          mx-auto flex min-h-[360px] w-full max-w-7xl
          items-center
          px-4 py-10
          sm:px-6
          lg:px-0
        "
      >
        <div className="w-full max-w-[600px]">
          {/* Eyebrow */}
          <div className="mb-4 flex items-center gap-4">
            <span className="h-px w-12 bg-[#b89a68]" />

            <span
              className="
                text-[16px] font-semibold
                tracking-[0.22em]
                text-[#16443f]
              "
            >
              {textOrFallback(section?.eyebrow, "WHAT IS MOKSHA SEWA?", 60)}
            </span>

            <span className="h-px w-12 bg-[#b89a68]" />
          </div>

          {/* Heading */}
          <h1
            className="
              max-w-[530px]
              font-serif
              text-[38px]
              font-semibold
              leading-[0.98]
              tracking-[-0.025em]
              text-[#0d403c]
              sm:text-[46px]
              lg:text-[50px]
            "
          >
            <span className="whitespace-pre-line">{textOrFallback(section?.title, "A Mission Built\nAround Dignity.", 150)}</span>
          </h1>

          {/* Gold lotus / divider — lotus + border absolute on the left, text after the border */}
          <div className="relative mt-7 flex">
            {/* Border on the left of the text */}
            <div className="absolute left-12 top-0 h-full w-px bg-[#b9a17b]" />

            {/* Lotus to the left of the border — vertically centered */}
            <div className="absolute left-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-[#faf4e9]">
              <LotusIcon />
            </div>

            {/* Description — starts after the border */}
            <div className="max-w-[505px] pl-20 text-[16px] leading-[1.55] text-[#293436]">
              <p>
                {textOrFallback(section?.description, "Moksha Sewa is a humanitarian initiative created to stand beside people during one of life's most difficult and sensitive moments - the final journey.", 600)}
              </p>

              <p className="mt-4">
                {textOrFallback(section?.secondaryDescription, "It focuses on authorised unclaimed cases, people without available family support, and verified families who may face financial hardship in arranging essential final-journey requirements.", 600)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle bottom fade */}
      <div
        className="
          absolute bottom-0 left-0 z-20 h-10 w-full
          bg-gradient-to-t
          from-[#f4ecdf]/70
          to-transparent
          pointer-events-none
        "
      />
    </section>
  );
};

const LotusIcon = () => {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M24 39C16.5 39 9.5 35.8 6 29.5C12.2 27.8 18.2 29.2 24 35.8"
        stroke="#B8791D"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M24 39C31.5 39 38.5 35.8 42 29.5C35.8 27.8 29.8 29.2 24 35.8"
        stroke="#B8791D"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M24 37C19.2 31.7 17.5 25.3 19.8 18.5C22.4 20.1 24 22.6 24 26"
        stroke="#B8791D"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M24 37C28.8 31.7 30.5 25.3 28.2 18.5C25.6 20.1 24 22.6 24 26"
        stroke="#B8791D"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M24 35C20.2 30.7 14.5 27.5 9.5 27.5"
        stroke="#B8791D"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M24 35C27.8 30.7 33.5 27.5 38.5 27.5"
        stroke="#B8791D"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default MokshaSewaIntro;
