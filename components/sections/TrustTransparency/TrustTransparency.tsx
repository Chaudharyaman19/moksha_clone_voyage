"use client";

import Image from "next/image";
import {
  FaArrowRight,
  FaBalanceScale,
  FaChartBar,
  FaEye,
  FaFileContract,
  FaHandHoldingHeart,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";
import { PiFlowerLotus } from "react-icons/pi";

const trustCards = [
  {
    icon: FaUsers,
    title: "About Namo Gange Trust",
    description: "Learn about our vision, mission and the work we stand for.",
  },
  {
    icon: FaShieldAlt,
    title: "Governance & Policies",
    description: "Our governance structure, policies and commitment to ethical operations.",
  },
  {
    icon: FaChartBar,
    title: "Impact / Reports",
    description: "See our impact, case highlights and transparent reports.",
  },
  {
    icon: FaFileContract,
    title: "Donation & Refund Policy",
    description: "Clear information on donations, utilization and refund policy.",
  },
];

const values = [
  { icon: FaHandHoldingHeart, title: "Sewa", description: "Service with compassion" },
  { icon: FaBalanceScale, title: "Integrity", description: "Ethical actions, honest intent" },
  { icon: FaEye, title: "Transparency", description: "Open processes, clear communication" },
  { icon: FaUsers, title: "Accountability", description: "Answerable to all, always improving" },
];

export default function TrustTransparency() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F4EEE4] px-4 pb-7 pt-14 sm:px-5 lg:px-6 lg:pb-8 lg:pt-16">
      {/* soft background accents */}
      <div className="pointer-events-none absolute left-0 top-0 h-64 w-64 rounded-full bg-[#E9DFCE]/55 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#EAD9B5]/35 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-[1360px]">
        {/* Top layout */}
        <div className="grid grid-cols-1 gap-7 xl:grid-cols-[0.92fr_1.08fr] xl:gap-8">
          {/* LEFT COLUMN */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 text-[16px] font-bold uppercase tracking-[0.08em] text-[#A56F24]">
              <span className="h-px w-12 bg-[#C99A4B]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#C99A4B]" />
              Sewa With Responsibility
              <span className="h-1.5 w-1.5 rounded-full bg-[#C99A4B]" />
              <span className="h-px w-12 bg-[#C99A4B]" />
            </div>

            <h2 className="mt-4 font-serif text-[46px] font-semibold leading-[0.98] tracking-[-0.025em] text-[#114B38] sm:text-[54px]">
              Trust &amp;
              <br />
              Transparency
            </h2>

            <div className="mt-3 flex items-center gap-2 text-[#B9832E]">
              <span className="h-px w-14 bg-[#C99A4B]" />
              <PiFlowerLotus className="h-5 w-5" />
              <span className="h-px w-14 bg-[#C99A4B]" />
            </div>

            <p className="mt-4 max-w-[520px] text-[16px] leading-[1.55] text-[#625B52]">
              Our commitment to transparency, integrity and responsible service.
            </p>

            {/* Brand relationship panel */}
            <div className="mt-5 rounded-[18px] bg-[#0A4D37] px-5 py-5 text-white shadow-[0_10px_26px_rgba(10,77,55,0.14)]">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.95fr_auto_1.35fr] lg:items-center">
                {/* Moksha Sewa */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative h-[88px] w-[170px]">
                    <Image
                      src="/assets/footer-moksha-mark.png"
                      alt="Moksha Sewa"
                      fill
                      sizes="170px"
                      className="object-contain"
                    />
                  </div>

                  <p className="mt-2 font-serif text-[26px] font-semibold uppercase leading-none">
                    Moksha Sewa
                  </p>

                  <p className="mt-2 text-[16px] leading-[1.35] text-[#E3B94E]">
                    A Namo Gange Trust Initiative
                  </p>
                </div>

                <span className="hidden h-[118px] w-px bg-[#D9A43C]/50 lg:block" />

                {/* Namo Gange side */}
                <div className="flex flex-col items-center text-center">
                  <p className="text-[16px] font-semibold uppercase text-[#E3B94E]">
                    An Initiative Of
                  </p>

                  <div className="relative mt-2 h-[78px] w-[165px]">
                    <Image
                      src="/hero-images/namo-gange-logo.png"
                      alt="Namo Gange Trust"
                      fill
                      sizes="165px"
                      className="object-contain"
                    />
                  </div>

                  <p className="mt-2 text-[21px] font-bold uppercase leading-tight text-white">
                    Namo Gange Trust
                  </p>
                  <p className="mt-2 max-w-[300px] text-[16px] leading-[1.45] text-white/90">
                    Committed to Service, Sustainability and Social Responsibility.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col">
            <div className="mx-auto max-w-[760px] text-center">
              <p className="text-[16px] font-medium leading-[1.55] text-[#342E28]">
                <span className="mr-3 font-serif text-[34px] leading-none text-[#D2A04B]">&ldquo;</span>
                We believe in being open, accountable and answerable
                <br className="hidden sm:block" />
                to all those who walk with us in this mission.
                <span className="ml-3 font-serif text-[34px] leading-none text-[#D2A04B]">&rdquo;</span>
              </p>

              <div className="mt-2 flex items-center justify-center gap-1">
                <span className="h-px w-28 bg-gradient-to-r from-transparent to-[#D2A044]" />
                <span className="h-2 w-2 rounded-full bg-[#B67F22]" />
                <span className="h-px w-28 bg-gradient-to-l from-transparent to-[#D2A044]" />
              </div>
            </div>

            {/* Cards */}
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {trustCards.map((card) => {
                const Icon = card.icon;

                return (
                  <article
                    key={card.title}
                    className="flex min-h-[275px] flex-col items-center rounded-[16px] border border-[#DED2C0] bg-[#FFFDFC] px-4 py-5 text-center shadow-[0_6px_16px_rgba(92,67,32,0.05)]"
                  >
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-[#0D4E38] text-[#D79A32]">
                      <Icon className="h-7 w-7" />
                    </span>

                    <h3 className="mt-4 text-[16px] font-bold leading-[1.2] text-[#104A36]">
                      {card.title}
                    </h3>

                    <p className="mt-4 text-[16px] leading-[1.45] text-[#5F5952]">
                      {card.description}
                    </p>

                    <span className="mx-auto mt-auto block h-px w-9 bg-[#CF9D4A]" />
                  </article>
                );
              })}
            </div>

            {/* CTA + legal note */}
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-[1.15fr_0.85fr] md:items-center">
              <a
                href="/about-us"
                className="inline-flex min-h-[60px] items-center gap-4 rounded-[8px] bg-[#0A4A34] px-5 text-[16px] font-bold uppercase tracking-[0.02em] text-white shadow-[0_6px_14px_rgba(10,74,52,0.15)] transition hover:bg-[#083D2B]"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#C99737] text-[#D4A23E]">
                  <FaShieldAlt className="h-4 w-4" />
                </span>

                <span>Know About the Trust</span>

                <span className="ml-auto grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#D6A23D] text-[#0A4A34]">
                  <FaArrowRight className="h-3.5 w-3.5" />
                </span>
              </a>

              <div className="flex items-start gap-3 rounded-[10px] bg-[#FBF7EF]/70 p-2">
                <FaFileContract className="mt-1 h-8 w-8 shrink-0 text-[#7B775F]" />
                <p className="text-[16px] leading-[1.4] text-[#615B52]">
                  Applicable registration / tax information will be displayed after legal verification.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Lower trust strip */}
        <div className="mt-6 rounded-[18px] border border-[#DED2BF] bg-[#FFFDFC] px-5 py-5 shadow-[0_4px_14px_rgba(90,64,30,0.03)]">
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.15fr_1.85fr] xl:items-stretch">
            {/* Transparency intro */}
            <div className="flex items-stretch gap-5">
              <div className="relative -my-5 -ml-5 w-[38%] shrink-0 overflow-hidden rounded-l-[18px]">
                <Image
                  src="/hero-images/image3.png"
                  alt="Moksha Sewa volunteers handing supplies to an elderly couple at a river ghat"
                  fill
                  sizes="220px"
                  className="object-cover object-[75%_45%]"
                />
              </div>

              <div className="flex flex-col justify-center py-5">
                <p className="text-[16px] font-bold text-[#0E4A34]">
                  Transparency in every step.
                </p>
                <span className="mt-2 block h-px w-10 bg-[#CF9D4A]" />
                <p className="mt-3 max-w-[500px] text-[16px] leading-[1.45] text-[#605A53]">
                  Moksha Sewa follows responsible practices, transparency and applicable legal norms to ensure trust in every act of service.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {values.map((value, index) => {
                const Icon = value.icon;

                return (
                  <div
                    key={value.title}
                    className={`flex min-h-[138px] flex-col items-center justify-center px-3 text-center ${index < values.length - 1 ? "md:border-r md:border-[#DCCAA8]" : ""
                      }`}
                  >
                    <Icon className="h-9 w-9 text-[#174B35]" />
                    <p className="mt-3 text-[16px] font-bold uppercase text-[#174B35]">
                      {value.title}
                    </p>
                    <p className="mt-2 text-[16px] leading-[1.3] text-[#57524B]">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 rounded-[10px] bg-[#0E3D2C] px-5 py-3 text-center text-[16px] font-semibold text-[#F0E4C5]">
          <span className="h-px w-20 bg-gradient-to-r from-transparent to-[#D0A13F]" />
          <span>A mission of compassion.</span>
          <span className="h-px w-10 bg-[#D0A13F]" />
          <span>A commitment to transparency.</span>
          <PiFlowerLotus className="h-5 w-5 text-[#D0A13F]" />
          <span>A promise of accountability.</span>
          <span className="h-px w-20 bg-gradient-to-l from-transparent to-[#D0A13F]" />
        </div>
      </div>
    </section>
  );
}