"use client";

import {
  Ambulance,
  Heart,
  HeartHandshake,
  MapPinCheck,
  PhoneCall,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface MokshaShlokSectionProps {
  variant?: "voyage" | "seva";
}

interface StepItem {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  finalStep?: boolean;
}

export default function MokshaShlokSection({
  variant = "voyage",
}: MokshaShlokSectionProps) {
  const steps: StepItem[] =
    variant === "seva"
      ? [
          {
            number: "1",
            title: "Call Us Anytime",
            description: "Reach out to us 24×7. We’re just a phone call away.",
            icon: PhoneCall,
          },
          {
            number: "2",
            title: "We Reach You",
            description: "Our team and vehicle reach the location immediately.",
            icon: Ambulance,
          },
          {
            number: "3",
            title: "We Handle Everything",
            description:
              "From transportation to cremation, we manage every step with care.",
            icon: MapPinCheck,
          },
          {
            number: "4",
            title: "You Focus on Farewell",
            description:
              "We ensure your loved one receives a respectful and dignified final journey.",
            icon: HeartHandshake,
            finalStep: true,
          },
        ]
      : [
          {
            number: "1",
            title: "Call Us Anytime",
            description: "Connect with our care team whenever support is needed.",
            icon: PhoneCall,
          },
          {
            number: "2",
            title: "We Coordinate",
            description: "Our verified team confirms every required arrangement.",
            icon: Ambulance,
          },
          {
            number: "3",
            title: "We Manage Everything",
            description: "Documentation, rituals and logistics are handled with care.",
            icon: MapPinCheck,
          },
          {
            number: "4",
            title: "You Stay With Family",
            description: "You remain present while we manage the complete journey.",
            icon: HeartHandshake,
            finalStep: true,
          },
        ];

  return (
    <section className="relative w-full overflow-hidden border-y border-[#eadfce] bg-[#fbf7ef] py-3 md:py-4">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(151,95,24,0.10) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1540px] px-4 sm:px-6 lg:px-8">
        <header className="mb-3 text-center md:mb-4">
          <p className="mb-0.5 text-[9px] font-medium uppercase tracking-[0.22em] text-[#b66b11] sm:text-[10px]">
            How It Works
          </p>
          <h2 className="font-serif text-[19px] font-normal leading-tight text-[#2f2118] sm:text-[21px] md:text-[23px]">
            Just 4 Steps. We Take Care of Everything.
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 xl:grid-cols-4 xl:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="relative min-h-[108px] rounded-[20px] border border-[#eee4d6] bg-white/60 px-4 pb-3 pt-6 shadow-[0_5px_16px_rgba(80,50,22,0.025)] sm:min-h-[112px]"
              >
                <div className="absolute -top-3 left-5 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#ee9614] to-[#d97705] font-serif text-[21px] font-normal text-white shadow-[0_5px_12px_rgba(205,118,7,0.20)]">
                  {step.number}
                </div>

                <div className="flex h-full items-center gap-3 pt-0.5">
                  <div className="flex w-[54px] shrink-0 items-center justify-center text-[#986728]">
                    {step.finalStep ? (
                      <div className="relative h-[48px] w-[48px]">
                        <svg
                          viewBox="0 0 72 72"
                          className="absolute inset-0 h-full w-full"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M18 18a25 25 0 1 1-2 33"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                          <path
                            d="m11 46 4 7 8-2"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <Heart
                          className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 fill-[#ef5c28] text-[#ef5c28]"
                          strokeWidth={1.7}
                        />
                      </div>
                    ) : (
                      <Icon className="h-[44px] w-[44px]" strokeWidth={1.45} />
                    )}
                  </div>

                  <div className="min-w-0">
                    <h3 className="mb-1 text-[13px] font-medium leading-tight text-[#33251d] sm:text-[14px]">
                      {step.title}
                    </h3>
                    <p className="text-[10.5px] font-normal leading-[1.4] text-[#5f5147] sm:text-[11px]">
                      {step.description}
                    </p>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="pointer-events-none absolute -right-[23px] top-1/2 z-20 hidden w-[28px] -translate-y-1/2 items-center xl:flex">
                    <span className="h-px flex-1 border-t border-dotted border-[#d8b47c]" />
                    <ChevronConnector />
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ChevronConnector() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="-ml-1 h-4 w-4 text-[#dd9b43]"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m6 3 7 7-7 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}