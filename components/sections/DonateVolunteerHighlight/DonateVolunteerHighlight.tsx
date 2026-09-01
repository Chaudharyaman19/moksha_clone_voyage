"use client";

import {
  FaArrowRight,
  FaHandHoldingHeart,
  FaHandsHelping,
  FaUsers,
} from "react-icons/fa";
import { PiFlowerLotus } from "react-icons/pi";

export default function DonateVolunteerHighlight() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F2E6D8] px-4 py-8 sm:px-5 lg:px-6 lg:py-8">
      {/* =========================================================
          PREMIUM BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_18%,rgba(200,81,23,0.10),transparent_28%),radial-gradient(circle_at_88%_82%,rgba(139,106,62,0.13),transparent_34%),linear-gradient(135deg,#F5E7D8_0%,#EFE0CF_48%,#F8EEE2_100%)]" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C99354]/55 to-transparent" />

      <div className="pointer-events-none absolute -left-32 top-1/2 h-[430px] w-[430px] -translate-y-1/2 rounded-full border border-[#B8874E]/10" />

      <div className="pointer-events-none absolute -left-12 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full border border-[#B8874E]/10" />

      <div className="pointer-events-none absolute -right-28 -top-24 h-[360px] w-[360px] rounded-full border border-[#B8874E]/10" />

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-24 w-[78%] -translate-x-1/2 bg-gradient-to-t from-[#8B6A3E]/[0.05] to-transparent blur-2xl" />

      <div className="relative z-10 mx-auto max-w-[1344px]">

        <div className="mb-1 -mt-2 flex items-center justify-center gap-3 py-1">
          <span className="h-px w-10 bg-[#A97843]/45 sm:w-14" />

          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D7B47D] bg-[#FFF8EC] shadow-[0_6px_18px_rgba(129,83,38,0.08)]">
            <PiFlowerLotus className="h-4 w-4 text-[#C85117]" />
          </span>

          <span className="text-[16px] font-semibold uppercase tracking-[0.24em] text-[#72502F] sm:text-[16px]">
            Together For Dignity
          </span>

          <span className="h-px w-10 bg-[#A97843]/45 sm:w-14" />
        </div>

        <div className="grid items-stretch gap-4 lg:grid-cols-[1.04fr_0.96fr]">

          <div className="group relative min-h-[270px] overflow-hidden border border-[#D5AF78]/65 bg-[#2C1810] shadow-[0_20px_48px_rgba(73,47,25,0.16)] sm:min-h-[315px] lg:min-h-[355px]">

            <video
              src="/vedio/taniya.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="auto"
              poster="https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165425/moksha-sewa/assets/route-optimized/video-prayer-hall.webp"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.015]"
            />

            {/* Cinematic overlay */}


            {/* Video content */}

          </div>

          {/* =====================================================
              RIGHT — CONTENT
          ====================================================== */}

          <div className="relative overflow-hidden border border-[#DFC59D] bg-[#FFFDF9]/95 p-4 shadow-[0_18px_42px_rgba(79,51,27,0.10)] backdrop-blur-sm sm:p-5 lg:p-6">

            {/* Top line */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C58B49] to-transparent" />

            {/* Decorative glow */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#D95A06]/[0.06] blur-3xl" />

            <div className="pointer-events-none absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-[#8B6A3E]/[0.05] blur-3xl" />

            <div className="relative z-10">

              {/* =================================================
                  SMALL HEADER
              ================================================== */}

              <div className="mb-2.5 flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center border border-[#D9B67F] bg-[#F8EAD5] text-[#C85117] shadow-[0_6px_16px_rgba(129,83,38,0.08)]">
                  <FaHandHoldingHeart className="h-4 w-4" />
                </div>

                <div>
                  <span className="block text-[16px] font-semibold uppercase tracking-[0.18em] text-[#A27549]">
                    Moksha Sewa
                  </span>

                  <span className="mt-0.5 block text-[16px] font-semibold uppercase tracking-[0.22em] text-[#815B35]">
                    Join The Mission
                  </span>
                </div>

              </div>

              {/* =================================================
                  MAIN HEADING
              ================================================== */}

              <h2
                className="max-w-[560px] text-[27px] font-normal leading-[1.08] text-[#2C1810] sm:text-[33px] lg:text-[37px]"
              >
                Your Support Can Become Someone&apos;s{" "}
                <span className="relative inline-block text-[#C85117]">
                  Final Dignity.

                  <span className="absolute -bottom-1 left-0 h-px w-full bg-gradient-to-r from-[#C85117]/75 to-transparent" />
                </span>
              </h2>

              {/* Description */}
              <p className="mt-2 max-w-[580px] text-[16px] leading-[1.6] text-[#655043] sm:text-[16px]">
                Donate to support verified sewa needs or volunteer your time
                for coordination, guidance and on-ground assistance.
              </p>

              {/* =================================================
                  DONATE + VOLUNTEER
              ================================================== */}

              <div className="mt-4 grid gap-2.5 sm:grid-cols-2">

                {/* =================================================
                    DONATE CARD
                ================================================== */}

                <a
                  href="/donation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden border border-[#9E6129] bg-[linear-gradient(145deg,#4A2A19_0%,#351E14_52%,#28150D_100%)] p-3.5 text-white shadow-[0_14px_30px_rgba(70,39,20,0.20)] transition duration-300 hover:-translate-y-1 hover:border-[#C88643] hover:shadow-[0_20px_40px_rgba(70,39,20,0.26)]"
                >

                  {/* Decorative elements */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F0C889]/70 to-transparent" />

                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full border border-[#DDB475]/20" />

                  <div className="pointer-events-none absolute -right-2 -top-2 h-20 w-20 rounded-full bg-[#D95A06]/15 blur-2xl" />

                  <div className="pointer-events-none absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-black/10 to-transparent" />

                  <div className="relative z-10">

                    <div className="mb-2.5 flex items-center justify-between">

                      <div className="flex h-10 w-10 items-center justify-center border border-[#E5B56F]/55 bg-[#E5B56F]/10 text-[#F1C27D]">
                        <FaHandHoldingHeart className="h-4 w-4" />
                      </div>

                      <span className="border border-[#E6C18A]/30 bg-white/5 px-2 py-1 text-[16px] font-semibold uppercase tracking-[0.16em] text-[#EBCB9A]">
                        Support
                      </span>

                    </div>

                    <h3
                      className="text-[19px] leading-tight text-white"
                    >
                      Donate For Sewa
                    </h3>

                    <p className="mt-1 text-[16px] leading-[1.45] text-white/72">
                      Help verified cases receive respectful final-rites
                      assistance.
                    </p>

                    <span className="mt-2.5 inline-flex items-center gap-2 text-[16px] font-semibold text-[#F2C986]">
                      Donate Now

                      <span className="flex h-6 w-6 items-center justify-center border border-[#F2C986]/45 transition duration-300 group-hover:translate-x-1 group-hover:border-[#F2C986]">
                        <FaArrowRight className="h-2.5 w-2.5" />
                      </span>
                    </span>

                  </div>
                </a>

                {/* =================================================
                    VOLUNTEER CARD
                ================================================== */}

                <a
                  href="/volunteer/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden border border-[#D2A064] bg-[linear-gradient(145deg,#FFF9EE_0%,#FFFDF9_50%,#F5E4CA_100%)] p-3.5 text-[#2C1810] shadow-[0_14px_30px_rgba(122,79,35,0.10)] transition duration-300 hover:-translate-y-1 hover:border-[#B97535] hover:shadow-[0_20px_40px_rgba(122,79,35,0.16)]"
                >

                  {/* Decorative elements */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C58B49]/70 to-transparent" />

                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full border border-[#C98B45]/15" />

                  <div className="pointer-events-none absolute -right-2 -top-2 h-20 w-20 rounded-full bg-[#C85117]/[0.06] blur-2xl" />

                  <div className="relative z-10">

                    <div className="mb-2.5 flex items-center justify-between">

                      <div className="flex h-10 w-10 items-center justify-center border border-[#D8AD76] bg-[#F5E2C4] text-[#C85117]">
                        <FaUsers className="h-4 w-4" />
                      </div>

                      <span className="border border-[#C99152]/30 bg-[#9A6A2E]/5 px-2 py-1 text-[16px] font-semibold uppercase tracking-[0.16em] text-[#8C5D2E]">
                        Volunteer
                      </span>

                    </div>

                    <h3
                      className="text-[19px] leading-tight text-[#2C1810]"
                    >
                      Become a Volunteer
                    </h3>

                    <p className="mt-1 text-[16px] leading-[1.45] text-[#685446]">
                      Give your time for coordination, guidance and on-ground
                      sewa.
                    </p>

                    <span className="mt-2.5 inline-flex items-center gap-2 text-[16px] font-semibold text-[#A85C20]">
                      Register Now

                      <span className="flex h-6 w-6 items-center justify-center border border-[#C97A3A]/45 transition duration-300 group-hover:translate-x-1 group-hover:border-[#C97A3A]">
                        <FaArrowRight className="h-2.5 w-2.5" />
                      </span>
                    </span>

                  </div>
                </a>
              </div>

              {/* =================================================
                  TRUST NOTE
              ================================================== */}

              <div className="mt-3 flex items-start gap-3 border-t border-[#E7D7BF] pt-3">

                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-[#DFC49D] bg-[#F6E8D3] text-[#B86A2A]">
                  <FaHandsHelping className="h-4 w-4" />
                </div>

                <p className="text-[16px] leading-[1.45] text-[#756154]">
                  Every request is handled with dignity and is subject to
                  verification, availability and applicable local requirements.
                </p>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
