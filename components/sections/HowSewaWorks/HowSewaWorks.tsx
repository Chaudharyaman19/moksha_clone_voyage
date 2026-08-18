"use client";

import { FaArrowRight, FaHeadset, FaShieldAlt } from "react-icons/fa";

interface StepItem {
  number: string;
  title: string;
  description: string;
  icon: "clipboard" | "document" | "hands" | "diya";
}

function LotusMark({ className = "h-6 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 72 50" className={className} fill="none" aria-hidden="true">
      <path d="M36 4c-7 8-9 15-7 22 2 5 7 9 7 9s5-4 7-9c2-7 0-14-7-22Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 17c9 0 16 3 20 9 3 5 3 10 3 10s-6 0-12-4c-6-4-9-9-11-15Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M60 17c-9 0-16 3-20 9-3 5-3 10-3 10s6 0 12-4c6-4 9-9 11-15Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M20 12c7 2 12 6 15 12 2 5 1 10 1 10s-6-2-10-7c-4-5-6-10-6-15Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M52 12c-7 2-12 6-15 12-2 5-1 10-1 10s6-2 10-7c4-5 6-10 6-15Z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 31c9 8 18 12 28 12s19-4 28-12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function ClipboardIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <rect x="10" y="9" width="28" height="34" rx="3" stroke="currentColor" strokeWidth="2" />
      <rect x="18" y="5" width="12" height="7" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.08" />
      <circle cx="24" cy="22" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M17 34c1.5-5 4.5-7 7-7s5.5 2 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function DocumentIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <path d="M13 6h16l8 8v27a2 2 0 0 1-2 2H13a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M29 6v8h8" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M15 26h11M15 32h7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="33" cy="34" r="8" fill="#FBEEDD" stroke="currentColor" strokeWidth="2" />
      <path d="M29.5 34.2l2.2 2.3 4.3-4.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HandsIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <circle cx="16" cy="17" r="3.4" stroke="currentColor" strokeWidth="2" />
      <path d="M11.5 26c1-3 2.5-4.6 4.5-4.6s3.5 1.6 4.5 4.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="13" r="3.8" stroke="currentColor" strokeWidth="2" />
      <path d="M18.7 23.5c1.2-3.6 3-5.4 5.3-5.4s4.1 1.8 5.3 5.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="32" cy="17" r="3.4" stroke="currentColor" strokeWidth="2" />
      <path d="M27.5 26c1-3 2.5-4.6 4.5-4.6s3.5 1.6 4.5 4.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M6 30c3 6 10 10 18 10s15-4 18-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 30.5c2 4.4 8 7.5 15 7.5s13-3.1 15-7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function DiyaIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <path d="M24 2v4M15 5l2 3.4M33 5l-2 3.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M24 11c-2.6 4-3.8 7-2.6 9.6.8 1.9 2.6 3 2.6 3s1.8-1.1 2.6-3c1.2-2.6 0-5.6-2.6-9.6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <path d="M6 28c4 6.4 11 10 18 10s14-3.6 18-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9.5 28c1.8 4.6 7.6 8 14.5 8s12.7-3.4 14.5-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 28h40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const ICONS = {
  clipboard: ClipboardIcon,
  document: DocumentIcon,
  hands: HandsIcon,
  diya: DiyaIcon,
};

function LeafBranch({ className = "h-28 w-40" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 140" className={className} fill="none" aria-hidden="true">
      <path d="M4 4c40 8 80 30 110 70 20 26 34 50 40 62" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {[
        [20, 14, 46, 8],
        [40, 30, 68, 22],
        [60, 48, 90, 40],
        [80, 66, 112, 58],
        [98, 84, 130, 76],
      ].map(([x1, y1, x2, y2], i) => (
        <path key={i} d={`M${x1} ${y1}C${x1 + 10} ${y1 - 14},${x2 - 6} ${y2 - 18},${x2} ${y2}C${x2 - 6} ${y2 + 6},${x1 + 6} ${y1 + 10},${x1} ${y1}Z`} fill="currentColor" fillOpacity="0.5" />
      ))}
    </svg>
  );
}

function GhatSkyline({ className = "h-64 w-72" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 320" className={className} fill="none" aria-hidden="true">
      <path d="M40 320V150M80 320V110M120 320V150M160 320V90M200 320V150M240 320V110M280 320V150" stroke="currentColor" strokeWidth="1.5" />
      <path d="M150 90c0-16 10-26 10-26s10 10 10 26" stroke="currentColor" strokeWidth="1.5" />
      <path d="M70 110c0-14 10-24 10-24s10 10 10 24" stroke="currentColor" strokeWidth="1.5" />
      <path d="M230 110c0-14 10-24 10-24s10 10 10 24" stroke="currentColor" strokeWidth="1.5" />
      <path d="M0 190c40-10 60-10 100-2s60 8 100 0 60-10 120-2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M0 320c60-30 100-40 160-40s100 10 160 40" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="160" cy="40" r="14" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function StepConnector() {
  return (
    <div className="pointer-events-none absolute -right-[26px] top-[42px] z-20 hidden lg:flex">
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#E0932E] text-white shadow-[0_4px_10px_rgba(200,120,20,0.35)]">
        <FaArrowRight className="h-3.5 w-3.5" />
      </span>
    </div>
  );
}


export default function HowSewaWorks() {
  const steps: StepItem[] = [
    {
      number: "01",
      title: "Request Sewa Help",
      description: "Share the basic case details\nwith our team right away.",
      icon: "clipboard",
    },
    {
      number: "02",
      title: "Case Verification",
      description: "Our team reviews the need\nand applicable requirements.",
      icon: "document",
    },
    {
      number: "03",
      title: "Sewa Coordination",
      description: "Required assistance is\ncoordinated based on availability.",
      icon: "hands",
    },
    {
      number: "04",
      title: "Dignified Final Journey",
      description: "The family receives\ncompassionate on-ground assistance.",
      icon: "diya",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#FFFDF8] py-6 sm:py-7 lg:py-8">
      {/* subtle paper texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(176,132,69,0.11) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* decorative corners */}
      <div className="pointer-events-none absolute -left-7 -top-5 text-[#D7B16B]/35">
        <LeafBranch className="h-24 w-36 sm:h-28 sm:w-40" />
      </div>

      <div className="pointer-events-none absolute right-0 top-[90px] text-[#CBA15A]/20">
        <GhatSkyline className="h-44 w-52 sm:h-52 sm:w-60 lg:h-56 lg:w-64" />
      </div>

      {/* birds */}
      <div className="pointer-events-none absolute right-[3%] top-9 hidden lg:block text-[#C79A51]/55">
        <svg viewBox="0 0 80 30" className="h-8 w-24" fill="none" aria-hidden="true">
          <path d="M5 16c5-5 10-5 15 0M20 16c5-5 10-5 15 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M42 9c4-4 8-4 12 0M54 9c4-4 8-4 12 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-5 lg:px-0">
        {/* Heading */}
        <header className="mb-8 text-center lg:mb-9">
          <div className="inline-flex items-center justify-center gap-3">
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-[#D4A343]" />
            <span className="inline-flex items-center gap-2 text-[16px] font-semibold uppercase tracking-[0.08em] text-[#5B4A36]">
              <LotusMark className="h-4 w-5 text-[#D49A2E]" />
              How Sewa Works
            </span>
            <span className="h-px w-14 bg-gradient-to-l from-transparent to-[#D4A343]" />
          </div>

          <h2 className="mx-auto mt-2 max-w-[980px] font-serif text-[27px] font-semibold leading-[1.04] text-[#302116] sm:text-[34px] lg:text-[38px]">
            Support With Care, Verification &amp; Responsibility
          </h2>

          <div className="mt-2 flex items-center justify-center gap-2 text-[#D49A2E]">
            <LotusMark className="h-4 w-5" />
            <span className="h-px w-14 bg-[#D7AA59]" />
          </div>

          <p className="mt-2 text-[16px] leading-6 text-[#6F665B]">
            A simple process. Compassionate support. Dignified final journey.
          </p>
        </header>

        {/* Process timeline */}
        <div className="relative">
          {/* desktop line behind cards */}
          <div className="pointer-events-none absolute left-[8%] right-[8%] top-[54px] hidden h-px bg-[#D8A54B] lg:block" />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-11">
            {steps.map((step, index) => {
              const Icon = ICONS[step.icon];

              return (
                <article key={step.number} className="relative pt-7">
                  {/* icon medallion + number badge, grouped so the badge always tracks the circle */}
                  <div className="absolute left-1/2 top-0 z-30 -translate-x-1/2">
                    <div className="relative">
                      <div className="grid h-[70px] w-[70px] place-items-center rounded-full border border-[#E4BF79] bg-[#FFF9ED] text-[#7B6C46] shadow-[0_4px_14px_rgba(175,126,55,0.12)]">
                        <Icon className="h-9 w-9" />
                      </div>

                      <div className="absolute -left-2 -top-2 z-30 grid h-8 w-8 place-items-center rounded-full bg-[#311E13] text-[16px] font-semibold text-white shadow-[0_3px_8px_rgba(49,30,19,0.24)]">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* card */}
                  <div className="min-h-[168px] rounded-[8px] border border-[#F0E2CB] bg-white/95 px-4 pb-4 pt-[58px] text-center shadow-[0_6px_18px_rgba(100,72,36,0.05)]">
                    <h3 className="text-[16px] font-semibold leading-tight text-[#3A2A1E]">
                      {step.title}
                    </h3>

                    <div className="mx-auto mt-2 h-px w-7 bg-[#D7A34B]" />

                    <p className="mt-2 whitespace-pre-line text-[16px] leading-[1.45] text-[#6E665E]">
                      {step.description}
                    </p>
                  </div>

                  {/* connector arrow, vertically centered on the icon medallion */}
                  {index < steps.length - 1 && (
                    <div className="pointer-events-none absolute -right-[34px] top-[19px] z-40 hidden lg:grid h-8 w-8 place-items-center rounded-full border border-[#D7A34B] bg-[#FFFDF8] text-[#D2942F]">
                      <FaArrowRight className="h-3 w-3" />
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>

        {/* CTA strip */}
        <div className="mt-4 grid overflow-hidden rounded-[8px] border border-[#EFE2C8] bg-[#FFFDF8] shadow-[0_4px_14px_rgba(98,69,33,0.04)] lg:grid-cols-[0.9fr_1.25fr_1.2fr] lg:divide-x lg:divide-[#E8DAC1]">
          <div className="flex items-center justify-center gap-3 px-4 py-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#E9E3CC] text-[#525B33]">
              <FaHeadset className="h-4 w-4" />
            </span>
            <div className="text-left">
              <p className="text-[16px] font-semibold text-[#3B3025]">Need assistance?</p>
              <p className="mt-0.5 text-[16px] leading-5 text-[#6E665D]">
                We are here to help you
                <br className="hidden sm:block" /> in this difficult time.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center border-y border-[#E8DAC1] px-4 py-3 lg:border-y-0">
            <a
              href="/request-help"
              className="inline-flex h-[50px] min-w-[320px] items-center justify-center gap-3 rounded-[4px] bg-[#495116] px-6 text-[16px] font-semibold uppercase tracking-[0.04em] text-[#F4E6BF] shadow-[0_3px_8px_rgba(70,80,20,0.18)] transition hover:bg-[#3E4612]"
            >
              <LotusMark className="h-4 w-5 text-[#D6A441]" />
              Request Sewa Help
              <FaArrowRight className="h-3 w-3" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-3 px-4 py-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#F0E8D5] text-[#616E43]">
              <FaShieldAlt className="h-4 w-4" />
            </span>
            <p className="max-w-[280px] text-left text-[16px] leading-[1.45] text-[#6A625A]">
              Support is provided subject to verification, availability and applicable legal requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}