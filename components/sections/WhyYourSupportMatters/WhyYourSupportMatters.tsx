"use client";

import Image from "next/image";
import { FaArrowRight, FaHandHoldingHeart } from "react-icons/fa";
import { PiFlowerLotus } from "react-icons/pi";

export default function WhyYourSupportMatters() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F8F2E8]">
      <div className="relative min-h-[540px] w-full sm:min-h-[480px] lg:min-h-[480px]">
        {/* Background image — kept exactly as your current image */}
        <Image
          src="/hero-images/support-mission-ghat.png"
          alt="A volunteer sitting beside an elderly woman, watching the sunset over a river ghat"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Left-side soft cream wash so content matches the reference */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              "linear-gradient(90deg, rgba(250,247,241,0.99) 0%, rgba(250,247,241,0.98) 34%, rgba(250,247,241,0.90) 46%, rgba(250,247,241,0.32) 58%, rgba(250,247,241,0.00) 70%)",
          }}
        />

        {/* subtle warm bottom fade */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-24"
          style={{
            background:
              "linear-gradient(to top, rgba(245,237,225,0.52), transparent)",
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[540px] w-full max-w-[1344px] items-center px-5 py-6 sm:min-h-[480px] sm:px-7 lg:min-h-[480px] lg:px-8 lg:py-5">
          <div className="w-full max-w-[610px]">
            {/* eyebrow */}
            <div className="flex flex-col items-center text-center">
              <PiFlowerLotus className="h-6 w-6 text-[#B98A3C]" />

              <div className="mt-2 flex w-full items-center justify-center gap-3">
                <span className="h-px w-9 bg-[#C99A4B]" />

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C99A4B]" />
                  <span className="font-sans text-[16px] font-semibold uppercase text-[#A27B38]">
                    Why Your Support Matters
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#C99A4B]" />
                </div>

                <span className="h-px w-9 bg-[#C99A4B]" />
              </div>
            </div>

            {/* main heading */}
            <h2 className="mx-auto mt-5 max-w-[475px] text-center font-sans text-[24px] font-semibold leading-[1.05] text-[#0E4A3F] sm:text-[30px]">
              A Dignified Farewell
              <br />
              Should Never Depend on
              <br />
              a Family&apos;s Ability to Pay.
            </h2>

            {/* divider */}
            <div className="mt-4 flex items-center justify-center gap-2 text-[#B98A3C]">
              <span className="h-px w-9 bg-[#C99A4B]" />
              <PiFlowerLotus className="h-3.5 w-3.5" />
              <span className="h-px w-9 bg-[#C99A4B]" />
            </div>

            {/* supporting copy */}
            <p className="mx-auto mt-4 max-w-[460px] text-center text-[16px] leading-[1.5] text-[#696158]">
              Your contribution helps extend verified last-rites assistance where support is genuinely needed.
            </p>

            {/* info card */}
            <div className="mx-auto mt-5 flex max-w-[570px] items-center rounded-[8px] border border-[#E2C99E] bg-white/92 px-5 py-4 shadow-[0_4px_14px_rgba(100,75,35,0.06)] backdrop-blur-[1px]">
              <div className="flex shrink-0 items-center pr-5">
                <FaHandHoldingHeart className="h-10 w-10 text-[#B88C47]" />
              </div>

              <div className="h-14 w-px shrink-0 bg-[#D9BE8D]" />

              <p className="pl-5 text-[16px] leading-[1.7] text-[#60594F]">
                Your support helps us coordinate essential assistance,
                mobilise volunteers and stand beside eligible families
                during a difficult final journey.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-3 flex justify-center">
              <a
                href="/donation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[52px] min-w-[290px] items-center justify-center gap-4 rounded-[5px] bg-[#0E4A3F] px-7 text-[16px] font-semibold uppercase tracking-[0.035em] text-white shadow-[0_4px_10px_rgba(14,74,63,0.20)] transition duration-200 hover:bg-[#0B3F35]"
              >
                Support This Mission
                <FaArrowRight className="h-4 w-4 text-[#D7A24A]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}