"use client";

import Link from "next/link";
import {
  itemOrFallback,
  textOrFallback,
  useWebsiteSection,
} from "@/components/website/WebsiteContentContext";

interface StepItem {
  number: string;
  title: string;
  description: string;
}

const DEFAULT_STEPS: StepItem[] = [
  {
    number: "01",
    title: "Request Help",
    description: "Share the basic details online or call our helpline.",
  },
  {
    number: "02",
    title: "Verification",
    description: "Our team checks eligibility and any required permissions.",
  },
  {
    number: "03",
    title: "Sewa Coordination",
    description: "We coordinate the assistance available for your case.",
  },
];

const LEGACY_TITLES = new Set([
  "Support With Care, Verification & Responsibility",
  "How Sewa Works",
]);

const LEGACY_BUTTON_LABELS = new Set(["Request Sewa Help"]);

const LEGACY_STEP_TITLES = new Set([
  "Request Sewa Help",
  "Case Verification",
  "Sewa Coordination",
  "Dignified Final Journey",
]);

export default function HowSewaWorks() {
  const websiteSection = useWebsiteSection("how-sewa-works");

  const eyebrow = textOrFallback(websiteSection?.eyebrow, "HOW SEWA WORKS", 60);

  const rawTitle = websiteSection?.title?.trim() || "";
  const hasCustomTitle = Boolean(rawTitle && !LEGACY_TITLES.has(rawTitle));

  const rawButtonLabel = websiteSection?.buttonLabel?.trim() || "";
  const buttonLabel =
    rawButtonLabel && !LEGACY_BUTTON_LABELS.has(rawButtonLabel)
      ? rawButtonLabel
      : "Request Free Sewa";

  const buttonHref = textOrFallback(
    websiteSection?.buttonHref,
    "/request-help",
    120
  );

  const steps = DEFAULT_STEPS.map((fallback, index) => {
    const item = itemOrFallback(websiteSection?.items, index, {
      title: fallback.title,
      description: fallback.description,
      value: fallback.number,
    });
    const rawStepTitle = item.title?.trim() || "";
    const isLegacyStep = !rawStepTitle || LEGACY_STEP_TITLES.has(rawStepTitle);

    return {
      number: textOrFallback(item.value, fallback.number, 8),
      title: isLegacyStep
        ? fallback.title
        : textOrFallback(rawStepTitle, fallback.title, 60),
      description: isLegacyStep
        ? fallback.description
        : textOrFallback(item.description, fallback.description, 140),
    };
  });

  const footnote =
    "Support is subject to eligibility, required permissions and availability.";

  return (
    <section
      id="how-sewa-works"
      aria-labelledby="how-sewa-works-heading"
      className="how-sewa-showcase relative w-full overflow-hidden bg-[#FBF6EF] px-6 pb-6 pt-3 sm:px-10 lg:px-14 lg:pb-7 lg:pt-2"
    >
      <div className="relative z-10 mx-auto max-w-[1160px]">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[265px_minmax(0,1fr)_315px] lg:gap-0 xl:grid-cols-[280px_minmax(0,1fr)_325px]">
          {/* Left: Eyebrow, 3-line Heading & CTA */}
          <div className="relative z-20 flex flex-col items-start text-left lg:py-4">
            <span className="how-sewa-eyebrow uppercase">{eyebrow}</span>

            <h2 id="how-sewa-works-heading" className="mt-2.5">
              {hasCustomTitle ? (
                rawTitle
              ) : (
                <>
                  <span className="block">Get Sewa</span>
                  <span className="block">Support in</span>
                  <span className="block">Three Steps</span>
                </>
              )}
            </h2>

            <Link
              href={buttonHref}
              className="how-sewa-cta mt-5 inline-flex items-center justify-center rounded-[8px] bg-[#9F5C1E] px-6 py-2.5 shadow-[0_3px_10px_rgba(159,92,30,0.22)] transition-colors hover:bg-[#854B16]"
            >
              {buttonLabel}
            </Link>
          </div>

          {/* Center: Consultation Photo with linear left/right/top/bottom fade */}
          <div className="relative z-10 mx-auto flex w-full max-w-[580px] items-end justify-center lg:-mx-6 lg:max-w-none xl:-mx-8">
            <img
              src="/assets/how-sewa-works/sewa-consultation.png?v=3"
              alt="Moksha Sewa volunteer assisting an elderly woman with compassion and care"
              className="mx-auto block h-auto max-h-[435px] w-full select-none object-contain object-bottom"
              loading="lazy"
            />
          </div>

          {/* Right: 3-Step Vertical Timeline */}
          <div className="relative z-20 flex flex-col gap-6">
            {/* Vertical connecting line centered through the 42px circles */}
            <div
              aria-hidden="true"
              className="absolute bottom-9 left-[20.5px] top-6 w-px bg-[#D1BEA6]"
            />

            {steps.map((step) => (
              <div key={step.number} className="relative flex items-start gap-4">
                <span className="relative z-10 flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#9F5C1E] text-[15px] font-bold tracking-[0.01em] text-white shadow-[0_2px_8px_rgba(159,92,30,0.2)]">
                  {step.number}
                </span>

                <div className="min-w-0 pt-0.5">
                  <h3>{step.title}</h3>
                  <p className="how-sewa-step-desc mt-1 max-w-[265px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Divider & Eligibility Footnote seated cleanly beneath desk edge */}
        <div className="relative z-20 -mt-1 border-t border-[#D8C5AE] pt-4 text-center lg:-mt-2">
          <p className="how-sewa-footnote">{footnote}</p>
        </div>
      </div>
    </section>
  );
}
