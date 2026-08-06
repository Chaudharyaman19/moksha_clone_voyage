"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import type { ComponentType } from "react";

import {
  FaArrowRight,
  FaHandHoldingHeart,
  FaHandsHelping,
  FaHandshake,
  FaUsers,
} from "react-icons/fa";

interface SacredJourneyProps {
  variant?: "voyage" | "seva";
}

interface SupportCard {
  title: string;
  description: string;
  button: string;
  image: string;
  icon: ComponentType<{ className?: string }>;
  href?: string;
}

interface LotusMarkProps {
  className?: string;
}

const donationImages = {
  donate:
    "/assets/donation-images/ChatGPT Image Aug 3, 2026, 02_07_58 PM (1).png",
  volunteer:
    "/assets/donation-images/ChatGPT Image Aug 3, 2026, 02_07_59 PM (2).png",
  sponsor:
    "/assets/donation-images/ChatGPT Image Aug 3, 2026, 02_07_59 PM (3).png",
  partner:
    "/assets/donation-images/ChatGPT Image Aug 3, 2026, 02_07_59 PM (4).png",
};

const sevaCards: SupportCard[] = [
  {
    title: "Donate",
    description:
      "Your donation helps arrange ambulance, wood, cloth, flowers and ritual items for families in need.",
    button: "Donate for Sewa",
    image: donationImages.donate,
    icon: FaHandHoldingHeart,
    href: "/donation",
  },
  {
    title: "Volunteer",
    description:
      "Join our on-ground team and help families at hospitals, homes, ghats and cremation grounds.",
    button: "Become a Volunteer",
    image: donationImages.volunteer,
    icon: FaUsers,
    href: "/volunteer/register",
  },
  {
    title: "Sponsor Final Rites",
    description:
      "Sponsor priest support, cremation wood, ambulance, ritual items or food service for a family.",
    button: "Sponsor Sewa",
    image: donationImages.sponsor,
    icon: FaHandsHelping,
    href: "/donation",
  },
  {
    title: "Partner With Us",
    description:
      "Help us reach more unclaimed, orphaned and needy cases through local support.",
    button: "Partner With Us",
    image: donationImages.partner,
    icon: FaHandshake,
    href: "/contact",
  },
];

const voyageCards: SupportCard[] = [
  {
    title: "Donate",
    description:
      "Support dignified care, transparent coordination and compassionate assistance.",
    button: "Contribute Now",
    image: donationImages.donate,
    icon: FaHandHoldingHeart,
    href: "/donation",
  },
  {
    title: "Volunteer",
    description:
      "Join our support network and help families when compassionate care matters most.",
    button: "Become a Volunteer",
    image: donationImages.volunteer,
    icon: FaUsers,
    href: "/volunteer/register",
  },
  {
    title: "Sponsor a Service",
    description:
      "Sponsor a verified service or support a family in memory of a loved one.",
    button: "Sponsor Now",
    image: donationImages.sponsor,
    icon: FaHandsHelping,
    href: "/donation",
  },
  {
    title: "Partner With Us",
    description:
      "Partner with our mission to extend dignified support across more communities.",
    button: "Partner With Us",
    image: donationImages.partner,
    icon: FaHandshake,
    href: "/contact",
  },
];

function LotusMark({
  className = "h-5 w-8",
}: LotusMarkProps) {
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

function TopLabel() {
  return (
    <div className="flex flex-col items-center">
      <LotusMark className="h-5 w-8 text-[#D98500]" />

      <div className="mt-0.5 flex items-center justify-center gap-2.5">
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#D98500]" />

        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#C87500]">
          Support This Sewa
        </p>

        <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#D98500]" />
      </div>
    </div>
  );
}

function HeadingDivider() {
  return (
    <div
      className="mt-2 flex items-center justify-center gap-2.5"
      aria-hidden="true"
    >
      <span className="h-px w-9 bg-[#D98500]" />

      <span className="grid h-2.5 w-2.5 rotate-45 place-items-center border border-[#D98500]">
        <span className="h-[3px] w-[3px] bg-[#D98500]" />
      </span>

      <span className="h-px w-9 bg-[#D98500]" />
    </div>
  );
}

function BottomOrnament() {
  return (
    <div
      className="mt-3 flex items-center justify-center gap-2.5"
      aria-hidden="true"
    >
      <span className="h-px w-24 bg-gradient-to-r from-transparent to-[#D98500] sm:w-36" />

      <LotusMark className="h-5 w-8 text-[#D98500]" />

      <span className="h-px w-24 bg-gradient-to-l from-transparent to-[#D98500] sm:w-36" />
    </div>
  );
}

function DotPattern() {
  return (
    <div
      className="pointer-events-none absolute bottom-[62px] left-3 z-10 grid grid-cols-3 gap-[5px] opacity-30"
      aria-hidden="true"
    >
      {Array.from({ length: 12 }).map((_, index) => (
        <span
          key={index}
          className="h-[3px] w-[3px] rounded-full bg-[#E4A24C]"
        />
      ))}
    </div>
  );
}

function CardCornerLotus() {
  return (
    <div className="pointer-events-none absolute -bottom-6 -right-5 z-10 text-[#D99B48]/15">
      <LotusMark className="h-[88px] w-[88px]" />
    </div>
  );
}

/*
 * Reference-image white shape:
 * edges stay higher and the centre curves slightly downward.
 */
function CardWhiteWave() {
  return (
     <div
      className="pointer-events-none absolute inset-x-0 top-[126px] z-10 h-[96px] sm:top-[136px] lg:top-[116px]"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <path
          d="
            M 0 14
           C 20 14, 34 41, 50 48
           C 66 41, 80 14, 100 14
            L 100 100
            L 0 100
            Z
          "
          fill="#FFFDF9"
        />
      </svg>
    </div>
  );
}

function FloatingIcon({
  Icon,
}: {
  Icon: ComponentType<{ className?: string }>;
}) {
  return (
    <div className="absolute left-1/2 top-[132px] z-30 -translate-x-1/2 sm:top-[142px] lg:top-[122px]">
      <div className="absolute inset-0 scale-110 rounded-full bg-[#E99932]/10 blur-[7px]" />

      <div className="relative grid h-[58px] w-[58px] place-items-center rounded-full border border-[#E49A3D] bg-[#FFFDF9] text-[#E27F00] shadow-[0_5px_14px_rgba(216,124,13,0.16)]">
        <Icon className="h-[22px] w-[22px]" />
      </div>
    </div>
  );
}

export default function SacredJourney({
  variant = "voyage",
}: SacredJourneyProps) {
  const router = useRouter();

  const cards = variant === "seva" ? sevaCards : voyageCards;

  const handleCardClick = (href?: string) => {
    if (href) {
      router.push(href);
    }
  };

  return (
    <section className="relative w-full overflow-hidden border-y border-[#EADFD0] bg-[#FCF9F4] px-3 py-3 sm:px-4 lg:py-4">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-40 w-[65%] -translate-x-1/2 rounded-full bg-[#D68A22]/[0.04] blur-3xl" />

        <div className="absolute -left-24 top-10 h-44 w-44 rounded-full border border-[#D98500]/10" />

        <div className="absolute -right-24 bottom-8 h-48 w-48 rounded-full border border-[#D98500]/10" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px]">
        <header className="mx-auto mb-3 max-w-[820px] text-center">
          <TopLabel />

          <h2 className="mt-1.5 font-serif text-[24px] font-normal leading-tight text-[#342017] sm:text-[28px] lg:text-[30px]">
            Help Someone Receive a Respectful Farewell.
          </h2>

          <HeadingDivider />

          <p className="mx-auto mt-2 max-w-[600px] text-[13px] font-normal leading-[1.45] text-[#5B473C]">
            Your support helps arrange ambulance, priest support, wood, cloth,
            <br className="hidden sm:block" />
            flowers, ritual items and food service for families in need.
          </p>
        </header>

        <div className="mx-auto grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[14px]">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const isFilledButton = index === 0 || index === 2;

            return (
              <article
                key={card.title}
                className="group relative mx-auto h-[348px] w-full max-w-[320px] overflow-hidden rounded-[14px] border border-[#E6D5BF] bg-[#FFFDF9] shadow-[0_6px_18px_rgba(75,47,25,0.065)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D3A15F] hover:shadow-[0_10px_24px_rgba(75,47,25,0.10)] sm:h-[336px] sm:max-w-none md:h-[326px] lg:h-[318px]"
              >
                {/* Image */}
                <div className="absolute inset-x-0 top-0 h-[168px] overflow-hidden rounded-t-[13px] sm:h-[165px] lg:h-[155px]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    priority={index < 2}
                    unoptimized
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.025]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#432312]/12 via-transparent to-transparent" />
                </div>

                {/* Exact controlled white curve */}
                <CardWhiteWave />

                {/* Circular icon overlapping the wave */}
                <FloatingIcon Icon={Icon} />

                <DotPattern />
                <CardCornerLotus />

                {/* Card content */}
                <div className="absolute inset-x-0 top-[204px] z-20 flex flex-col items-center px-4 text-center sm:top-[198px] md:top-[194px] lg:top-[188px]">
                  <h3 className="font-serif text-[17px] font-normal uppercase leading-[1.1] tracking-[0.015em] text-[#352017] lg:text-[16px] xl:text-[17px]">
                    {card.title}
                  </h3>

                  <span className="mt-1.5 h-px w-7 shrink-0 bg-[#D98500]" />

                  <p className="mx-auto mt-2 max-w-[250px] text-[11px] font-normal leading-[1.45] text-[#5B473C] lg:max-w-[220px] lg:text-[10.5px]">
                    {card.description}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleCardClick(card.href)}
                  className={`absolute bottom-[12px] left-4 right-4 z-30 flex min-h-[36px] items-center justify-center gap-2 rounded-[5px] px-4 py-2 text-center text-[11px] font-medium leading-tight transition ${
                    isFilledButton
                      ? "bg-gradient-to-r from-[#DF6700] to-[#EE9200] text-white shadow-[0_4px_10px_rgba(225,132,0,0.20)] hover:brightness-95"
                      : "border border-[#E17D18] bg-white/75 text-[#C66300] hover:bg-[#FFF5E8]"
                  }`}
                >
                  <span>{card.button}</span>

                  <FaArrowRight className="h-3 w-3 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
              </article>
            );
          })}
        </div>

        <BottomOrnament />
      </div>
    </section>
  );
}
