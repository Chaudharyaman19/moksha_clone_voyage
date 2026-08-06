"use client";

import {
  FaHandHoldingHeart,
  FaPhoneAlt,
  FaUser,
} from "react-icons/fa";
import type { IconType } from "react-icons";

interface MokshaShlokSectionProps {
  variant?: "voyage" | "seva";
}

interface StepItem {
  number: string;
  title: string;
  description: string;
  icon: IconType | null;
  lotusStep?: boolean;
}

function LotusMark({
  className = "h-6 w-9",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 72 50"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M36 4c-7 8-9 15-7 22 2 5 7 9 7 9s5-4 7-9c2-7 0-14-7-22Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M12 17c9 0 16 3 20 9 3 5 3 10 3 10s-6 0-12-4c-6-4-9-9-11-15Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M60 17c-9 0-16 3-20 9-3 5-3 10-3 10s6 0 12-4c6-4 9-9 11-15Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M20 12c7 2 12 6 15 12 2 5 1 10 1 10s-6-2-10-7c-4-5-6-10-6-15Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M52 12c-7 2-12 6-15 12-2 5-1 10-1 10s6-2 10-7c4-5 6-10 6-15Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />

      <path
        d="M8 31c9 8 18 12 28 12s19-4 28-12"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ColoredLotus({
  className = "h-10 w-12",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 72 58"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M36 8c-7 7-10 14-8 21 2 5 8 9 8 9s6-4 8-9c2-7-1-14-8-21Z"
        fill="#E94921"
      />

      <path
        d="M18 17c7 1 13 4 17 10 2 4 2 9 2 9s-7-1-12-5c-5-4-7-9-7-14Z"
        fill="#EE6A23"
      />

      <path
        d="M54 17c-7 1-13 4-17 10-2 4-2 9-2 9s7-1 12-5c5-4 7-9 7-14Z"
        fill="#D93022"
      />

      <path
        d="M10 29c8 1 15 4 21 10 3 3 5 7 5 7s-8 0-15-4c-6-4-9-8-11-13Z"
        fill="#F18B18"
      />

      <path
        d="M62 29c-8 1-15 4-21 10-3 3-5 7-5 7s8 0 15-4c6-4 9-8 11-13Z"
        fill="#E4521C"
      />

      <path
        d="M13 45c7 4 14 6 23 6s16-2 23-6"
        stroke="#B9751B"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HeaderDivider() {
  return (
    <div
      className="mt-2 flex items-center justify-center gap-2"
      aria-hidden="true"
    >
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#C9903D]" />

      <span className="h-px w-7 bg-[#D8AC6B]" />

      <span className="grid h-[9px] w-[9px] rotate-45 place-items-center border border-[#D98A0A]">
        <span className="h-[3px] w-[3px] bg-[#D98A0A]" />
      </span>

      <span className="h-px w-7 bg-[#D8AC6B]" />

      <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#C9903D]" />
    </div>
  );
}

function CornerLotus() {
  return (
    <div className="pointer-events-none absolute -bottom-5 -right-4 z-0 text-[#DDA957]/[0.14]">
      <LotusMark className="h-[82px] w-[82px]" />
    </div>
  );
}

function StepConnector() {
  return (
    <div className="pointer-events-none absolute -right-[23px] top-1/2 z-20 hidden w-[30px] -translate-y-1/2 items-center xl:flex">
      <span className="h-px flex-1 border-t border-dashed border-[#DDB87D]" />

      <span className="-ml-[1px] h-[9px] w-[9px] rotate-45 border border-[#D98A0A] bg-[#D98A0A]" />

      <span className="-ml-[1px] h-px w-2 border-t border-dashed border-[#DDB87D]" />
    </div>
  );
}

export default function HowItWorks({
  variant = "voyage",
}: MokshaShlokSectionProps) {
  const steps: StepItem[] =
    variant === "seva"
      ? [
          {
            number: "01",
            title: "Call or Send Details",
            description:
              "Share the location, situation and type of help needed.",
            icon: FaPhoneAlt,
          },
          {
            number: "02",
            title: "Team Reviews the Need",
            description:
              "We confirm the case and explain what support can be arranged.",
            icon: FaUser,
          },
          {
            number: "03",
            title: "Support Is Coordinated",
            description:
              "Ambulance, priest, materials, flowers and volunteers are coordinated.",
            icon: FaHandHoldingHeart,
          },
          {
            number: "04",
            title: "Final Rites With Dignity",
            description:
              "The family receives calm guidance until the service is complete.",
            icon: null,
            lotusStep: true,
          },
        ]
      : [
          {
            number: "01",
            title: "Call Anytime, 24×7",
            description:
              "Connect with our support team whenever assistance is required.",
            icon: FaPhoneAlt,
          },
          {
            number: "02",
            title: "Share Details",
            description:
              "Tell us what is needed. Our team guides you clearly.",
            icon: FaUser,
          },
          {
            number: "03",
            title: "We Arrange Everything",
            description:
              "Transport, documentation and services are coordinated.",
            icon: FaHandHoldingHeart,
          },
          {
            number: "04",
            title: "You Stay With Family",
            description:
              "We manage each step with dignity, care and compassion.",
            icon: null,
            lotusStep: true,
          },
        ];

  return (
    <section className="relative w-full overflow-hidden border-y border-[#EADFCE] bg-[#FBF7EF] py-2 md:py-3">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(151,95,24,0.09) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-0 h-24 w-[62%] -translate-x-1/2 rounded-full bg-white/55 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-5 lg:px-0">
        <header className="mb-5 text-center">
          <LotusMark className="mx-auto h-5 w-8 text-[#C98A34]" />

          <div className="mt-0.5 inline-flex items-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#A77B43]" />

            <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#8B6A3E] sm:text-[11px]">
              How We Help
            </span>

            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#A77B43]" />
          </div>

          <h2 className="mt-1 font-serif text-[24px] font-normal leading-tight text-[#2F1D14] sm:text-[28px] lg:whitespace-nowrap lg:text-[30px]">
            Simple Process, Clear Support.
          </h2>

          <HeaderDivider />
        </header>

        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-4 xl:grid-cols-4 xl:gap-x-4 xl:gap-y-0">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="group relative min-h-[126px] overflow-visible rounded-[20px] border border-[#EADBC6] bg-white/80 px-4 pb-4 pt-7 shadow-[0_6px_18px_rgba(80,50,22,0.045)] transition duration-300 hover:-translate-y-0.5 hover:border-[#D9B47A] hover:shadow-[0_10px_24px_rgba(80,50,22,0.08)] sm:min-h-[118px] md:min-h-[126px] xl:min-h-[122px]"
              >
                <div className="absolute left-7 top-0 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-[#F1A016] to-[#DF7F00] font-sans text-[16px] font-semibold leading-none text-white shadow-[0_5px_12px_rgba(205,118,7,0.22)]">
                  {step.number}
                </div>

                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[20px]">
                  <CornerLotus />
                </div>

                <div className="relative z-10 flex h-full items-center gap-3 pt-0.5">
                  <div className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-[#FBF4E9] text-[#C17D1E]">
                    {step.lotusStep ? (
                      <ColoredLotus className="h-[39px] w-[42px]" />
                    ) : Icon ? (
                      <Icon
                        className="h-[37px] w-[37px]"
                      />
                    ) : null}
                  </div>

                  <div className="min-w-0">
                    <h3 className="mb-1 text-[13px] font-semibold leading-tight text-[#33251D] sm:text-[14px]">
                      {step.title}
                    </h3>

                    <p className="text-[11px] font-normal leading-[1.45] text-[#5F5147] sm:text-[11px]">
                      {step.description}
                    </p>
                  </div>
                </div>

                {index < steps.length - 1 && <StepConnector />}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
