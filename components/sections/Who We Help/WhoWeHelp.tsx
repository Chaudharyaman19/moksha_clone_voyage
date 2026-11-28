"use client";

import Image from "next/image";
import type { ReactElement } from "react";
import { itemOrFallback, textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";
import AccentTitle from "../shared/AccentTitle";

interface CardIconProps {
  name: string;
  className?: string;
}

const CardIcon = ({ name, className = "h-9 w-9" }: CardIconProps) => {
  const icons: Record<string, ReactElement> = {
    ShieldCheckIcon: (
      <svg
        className={className}
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 5.5 31 9.5v9c0 8.2-4.6 13.7-11 16.5-6.4-2.8-11-8.3-11-16.5v-9l11-4Z" />
        <path d="m15.2 20.3 3.3 3.3 6.8-7.2" />
      </svg>
    ),
    CuppedHandsIcon: (
      <svg
        className={className}
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 32c-5.5-.8-10-5-11-11.2-.2-1.4.8-2.3 2-2 1.2.3 2 1.2 2.4 2.5l1.6 4.2" />
        <path d="M12.2 15.5c-.4-1.2.4-2.4 1.6-2.4 1.1 0 1.9.7 2.4 1.8l2.2 5.6c.4 1-.1 2.2-1 2.9-.8.6-1.6 1.5-1.6 2.8" />
        <path d="M22 32c5.5-.8 10-5 11-11.2.2-1.4-.8-2.3-2-2-1.2.3-2 1.2-2.4 2.5l-1.6 4.2" />
        <path d="M27.8 15.5c.4-1.2-.4-2.4-1.6-2.4-1.1 0-1.9.7-2.4 1.8l-2.2 5.6c-.4 1 .1 2.2 1 2.9.8.6 1.6 1.5 1.6 2.8" />
      </svg>
    ),
    TwoPeopleIcon: (
      <svg
        className={className}
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="14" cy="14" r="4.2" />
        <path d="M6.8 29c.5-4.7 3.2-7.2 7.2-7.2s6.7 2.5 7.2 7.2" />
        <circle cx="26.5" cy="14.5" r="3.7" />
        <path d="M22.2 22.3c1.2-.4 2.7-.5 4.3-.5 3.8 0 6.3 2.4 6.7 7.2" />
      </svg>
    ),
    LotusIcon: (
      <svg
        className={className}
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 9.5c3.4 4.2 4 8.5 0 15.2-4-6.7-3.4-11 0-15.2Z" />
        <path d="M14 14.5c-4 2-6 6-3.4 11.8 2.6 3.2 6.4 4.9 9.4 4.9" />
        <path d="M26 14.5c4 2 6 6 3.4 11.8-2.6 3.2-6.4 4.9-9.4 4.9" />
        <path d="M6.5 22.2c.8 5 4.6 9.3 13.5 11.1 8.9-1.8 12.7-6.1 13.5-11.1" />
        <path d="M11.5 34.5h17" />
      </svg>
    ),
  };

  return icons[name] ?? icons.ShieldCheckIcon;
};

interface HelpCard {
  icon: string;
  title: string;
  description: string;
  image: string;
}

const helpCards: HelpCard[] = [
  {
    icon: "ShieldCheckIcon",
    title: "Authorised\nUnclaimed Cases",
    description:
      "We help arrange last rites for unclaimed persons after receiving the required authorisation.",
    image: "/assets/who-we-help/authorised-unclaimed.jpg",
  },
  {
    icon: "CuppedHandsIcon",
    title: "People Without\nFamily Support",
    description:
      "When no family member is available to arrange the last rites, we help with the essential arrangements.",
    image: "/assets/who-we-help/without-family.jpg",
  },
  {
    icon: "TwoPeopleIcon",
    title: "Families Facing\nFinancial Hardship",
    description:
      "We help eligible families who cannot afford essential last-rites arrangements.",
    image: "/assets/who-we-help/financial-hardship.jpg",
  },
];

const LEGACY_CARD_TITLES = new Set([
  "Unclaimed & Legally Authorised Cases",
  "People Without Family or Support",
  "Economically Weaker Families",
]);

const LEGACY_SUBTITLE =
  "Moksha Sewa provides compassionate last-rites support for unclaimed cases and families in need with dignity, respect and complete sensitivity.";

export default function WhoWeHelp() {
  const websiteSection = useWebsiteSection("who-we-help");

  const hasCustomCards = Boolean(
    websiteSection?.items?.length &&
      websiteSection.items.slice(0, 3).some((item) => {
        const normalizedTitle = item?.title?.replace(/\s+/g, " ").trim();
        return normalizedTitle && !LEGACY_CARD_TITLES.has(normalizedTitle);
      }),
  );
  const sourceItems = hasCustomCards ? websiteSection?.items : undefined;

  const managedHelpCards: HelpCard[] = helpCards.map((fallback, index) => {
    const item = itemOrFallback(sourceItems, index, fallback);
    return {
      ...fallback,
      title: textOrFallback(item.title, fallback.title, 95),
      description: textOrFallback(item.description, fallback.description, 220),
      image: item.image || fallback.image,
      icon: fallback.icon,
    };
  });

  const headingText = textOrFallback(websiteSection?.subtitle, "Standing Beside Those Who Need Us Most", 95);
  const headingAccent = "Who Need Us Most";

  const rawDescription = websiteSection?.description?.replace(/\s+/g, " ").trim();
  const descriptionText =
    !rawDescription || rawDescription === LEGACY_SUBTITLE
      ? "Moksha Sewa offers free last-rites support in Delhi NCR with dignity, respect and sensitivity."
      : rawDescription;

  return (
    <section className="who-we-help-section relative w-full overflow-hidden bg-[linear-gradient(180deg,#FFF8F2_0%,#FFF9F4_55%,#FFF6EE_100%)] px-4 py-6 sm:px-6 lg:px-0 lg:py-8">
      {/* faint lotus outlines in the top corners */}
      {["-left-16 top-3", "-right-16 top-3"].map((pos) => (
        <svg
          key={pos}
          viewBox="0 0 300 300"
          aria-hidden="true"
          className={`pointer-events-none absolute ${pos} hidden h-[210px] w-[210px] text-[#E4B98F]/40 lg:block`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          {Array.from({ length: 12 }).map((_, index) => (
            <ellipse key={index} cx="150" cy="83" rx="15" ry="42" transform={`rotate(${index * 30} 150 150)`} />
          ))}
          <circle cx="150" cy="150" r="30" />
        </svg>
      ))}

      <div className="wwh-inner relative z-10 mx-auto w-full max-w-[min(1248px,calc(100vw-88px))] max-lg:max-w-none">
        {/* ================= HEADER ================= */}
        <header className="mx-auto mb-6 max-w-[1020px] text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-[52px] bg-gradient-to-r from-transparent to-[#B88335]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#B88335]" />
            <span className="lt-eyebrow font-sans font-semibold uppercase text-[#B77912]">
              {textOrFallback(websiteSection?.eyebrow, "Who We Help", 60)}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#B88335]" />
            <span className="h-px w-[52px] bg-gradient-to-l from-transparent to-[#B88335]" />
          </div>

          <h2 className="mt-2 font-sans text-[24px] font-semibold leading-[1.1] sm:text-[30px]">
            <AccentTitle text={headingText} accent={headingAccent} />
          </h2>

          <p className="mx-auto mt-1.5 max-w-[760px] text-[14.5px] leading-[1.45] text-[#2B2623]">
            {descriptionText}
          </p>
        </header>

        {/* ================= 3 CARDS ================= */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {managedHelpCards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col overflow-hidden rounded-[14px] border border-[#EAE0D0] bg-[#FAF3E6] shadow-[0_6px_18px_rgba(68,44,20,0.06)]"
            >
              <div className="relative h-[185px] w-full shrink-0 overflow-hidden sm:h-[200px] lg:h-[180px]">
                <Image
                  src={card.image}
                  alt={card.title.replace(/\n/g, " ")}
                  fill
                  unoptimized={card.image.startsWith("/assets/who-we-help/")}
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                <div className="flex items-center gap-3.5">
                  <span className="shrink-0 text-[#8B6A3E]">
                    <CardIcon name={card.icon} className="h-12 w-12" />
                  </span>
                  <span aria-hidden="true" className="h-12 w-px shrink-0 bg-[#DFD1BC]" />
                  <h3 className="whitespace-pre-line font-sans text-[18px] font-semibold leading-[1.2] text-[#2C1810]">
                    {card.title}
                  </h3>
                </div>

                <p className="mt-3 text-[14px] leading-[1.52] text-[#2B2623]">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* ================= LEGAL NOTE ================= */}
        <div className="mt-4 flex items-center gap-4 rounded-[12px] border border-[#EAE0D0] bg-[#FAF3E6] px-5 py-3 shadow-[0_3px_10px_rgba(72,43,16,0.04)]">
          <span className="shrink-0 text-[#8B6A3E]">
            <CardIcon name="LotusIcon" className="h-7 w-7" />
          </span>
          <span aria-hidden="true" className="h-6 w-px shrink-0 bg-[#DFD1BC]" />
          <p className="font-sans text-[14.5px] font-medium leading-snug text-[#2C1810] sm:text-[15.5px]">
            {textOrFallback(
              websiteSection?.legalNotice,
              "Support is subject to case verification, availability and applicable legal requirements.",
              220,
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
