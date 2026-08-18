"use client";

import Image from "next/image";
import { FaArrowRight, FaHandHoldingHeart } from "react-icons/fa";
import { PiFlowerLotus } from "react-icons/pi";

export default function OneFinalActOfHumanity() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F7F0E4]">
      <div className="relative min-h-[520px] w-full sm:aspect-[16/6.3] sm:min-h-0">
        {/* Background image stays the same */}
        <Image
          src="/hero-images/one-final-act-humanity.png"
          alt="Two Moksha Sewa volunteers carrying a body along a river ghat at sunset"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Cream wash matching the reference */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(250,246,237,0.995) 0%, rgba(250,246,237,0.99) 27%, rgba(250,246,237,0.92) 38%, rgba(250,246,237,0.68) 48%, rgba(250,246,237,0.22) 59%, rgba(250,246,237,0) 70%)",
          }}
        />

        <div className="relative z-10 mx-auto flex h-full min-h-[520px] w-full max-w-[1344px] items-center px-5 py-6 sm:min-h-0 sm:px-7 lg:px-8">
          <div className="w-full max-w-[680px]">
            {/* Logo row */}
            <div className="mb-6 flex items-center gap-5">
              {/* Moksha Sewa logo block */}
              <div className="flex min-w-[280px] flex-col items-center text-center">
                <div className="relative ml-3 h-[92px] w-[92px] shrink-0">
                  <Image
                    src="/assets/footer-moksha-mark.png"
                    alt="Moksha Sewa"
                    fill
                    sizes="92px"
                    className="object-contain"
                  />
                </div>

                <p className="mt-1 font-serif text-[16px] font-bold uppercase tracking-[0.02em] text-[#2D3D35]">
                  Moksha Sewa
                </p>
                <p className="mt-0.5 text-[16px] text-[#A27B38]">
                  A Namo Gange Trust Initiative
                </p>
              </div>

              <span className="h-[128px] w-px shrink-0 self-center bg-[#D7B471]" />

              {/* Namo Gange logo */}
              <div className="flex min-w-[280px] flex-col items-center text-center">
                <div className="relative h-[86px] w-[290px] shrink-0">
                  <Image
                    src="/assets/namo-gange-logo.webp"
                    alt="Namo Gange Trust"
                    fill
                    sizes="290px"
                    className="object-contain"
                  />
                </div>
                <p className="mt-0.5 text-[16px] font-bold uppercase tracking-[0.02em] text-[#1B3A63]">
                  Namo Gange Trust
                </p>
              </div>
            </div>

            {/* Eyebrow */}
            <div className="flex items-center gap-3 text-[16px] font-bold uppercase tracking-[0.1em] text-[#A87327]">
              <span className="h-px w-10 bg-[#C99A4B]" />
              <span className="h-1 w-1 rounded-full bg-[#B98231]" />
              One Final Act of Humanity
              <span className="h-1 w-1 rounded-full bg-[#B98231]" />
              <span className="h-px w-10 bg-[#C99A4B]" />
            </div>

            {/* Heading */}
            <h2 className="mt-4 max-w-[600px] font-serif text-[38px] font-semibold leading-[1.06] tracking-[-0.02em] text-[#163F31] sm:text-[44px] lg:text-[48px]">
              When No One Else Is There,
              <br />
              Humanity Must Be.
            </h2>

            {/* Divider */}
            <div className="mt-3 flex items-center gap-2 text-[#B9832E]">
              <span className="h-px w-14 bg-[#C99A4B]" />
              <PiFlowerLotus className="h-4 w-4" />
              <span className="h-px w-14 bg-[#C99A4B]" />
            </div>

            {/* Subtitle */}
            <p className="mt-4 max-w-[560px] text-[16px] leading-[1.5] text-[#665F56]">
              Stand with Moksha Sewa in helping ensure dignity, compassion and respect in the final journey of those we are able to support.
            </p>

            {/* CTAs */}
            <div className="mt-5 flex flex-wrap gap-4">
              <a
                href="/request-help"
                className="inline-flex h-[54px] items-center justify-center gap-3 whitespace-nowrap rounded-[5px] bg-[#0B4B3C] px-6 text-[16px] font-bold uppercase tracking-[0.02em] text-white shadow-[0_4px_10px_rgba(11,75,60,0.18)] transition hover:bg-[#083E32]"
              >
                <FaHandHoldingHeart className="h-[18px] w-[18px] text-[#D6A13E]" />
                Request Sewa Help
                <FaArrowRight className="h-3.5 w-3.5 text-[#D6A13E]" />
              </a>

              <a
                href="/donation"
                className="inline-flex h-[54px] items-center justify-center gap-3 whitespace-nowrap rounded-[5px] bg-[linear-gradient(180deg,#D69D31_0%,#B47B1F_100%)] px-6 text-[16px] font-bold uppercase tracking-[0.02em] text-white shadow-[0_4px_10px_rgba(185,131,46,0.20)] transition hover:brightness-105"
              >
                <FaHandHoldingHeart className="h-[18px] w-[18px] text-white" />
                Support This Mission
                <FaArrowRight className="h-3.5 w-3.5 text-white" />
              </a>
            </div>

            {/* Bottom divider */}
            <div className="mt-6 flex items-center gap-2 text-[#B9832E]">
              <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#C99A4B]" />
              <PiFlowerLotus className="h-4 w-5" />
              <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#C99A4B]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}