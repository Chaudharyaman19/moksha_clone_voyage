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

const GOLD = "#D98500";

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
      "Your donation helps arrange lakdi, kafan, phool, samagri and ambulance for needy antim sewa.",
    button: "Donate for Sewa",
    image: donationImages.donate,
    icon: FaHandHoldingHeart,
    href: "/donation",
  },
  {
    title: "Volunteer",
    description:
      "Join our on-ground team to help families at hospitals, ghats and cremation grounds.",
    button: "Become a Volunteer",
    image: donationImages.volunteer,
    icon: FaUsers,
  },
  {
    title: "Sponsor Antim Sewa",
    description:
      "Sponsor pandit ji, lakdi, ambulance, pooja samagri or logon ko bhoj for a family in need.",
    button: "Sponsor Sewa",
    image: donationImages.sponsor,
    icon: FaHandsHelping,
  },
  {
    title: "Partner With Us",
    description:
      "Help us reach more lawaris, anath and zaruratmand cases through local support.",
    button: "Partner With Us",
    image: donationImages.partner,
    icon: FaHandshake,
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
  },
  {
    title: "Sponsor a Service",
    description:
      "Sponsor a verified service or support a family in memory of a loved one.",
    button: "Sponsor Now",
    image: donationImages.sponsor,
    icon: FaHandsHelping,
  },
  {
    title: "Partner With Us",
    description:
      "Partner with our mission to extend dignified support across more communities.",
    button: "Partner With Us",
    image: donationImages.partner,
    icon: FaHandshake,
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
        stroke={GOLD}
        strokeWidth="1.7"
      />

      <path
        d="M12 17c9 0 16 3 20 9 3 5 3 10 3 10s-6 0-12-4c-6-4-9-9-11-15Z"
        stroke={GOLD}
        strokeWidth="1.7"
      />

      <path
        d="M60 17c-9 0-16 3-20 9-3 5-3 10-3 10s6 0 12-4c6-4 9-9 11-15Z"
        stroke={GOLD}
        strokeWidth="1.7"
      />

      <path
        d="M20 12c7 2 12 6 15 12 2 5 1 10 1 10s-6-2-10-7c-4-5-6-10-6-15Z"
        stroke={GOLD}
        strokeWidth="1.7"
      />

      <path
        d="M52 12c-7 2-12 6-15 12-2 5-1 10-1 10s6-2 10-7c4-5 6-10 6-15Z"
        stroke={GOLD}
        strokeWidth="1.7"
      />

      <path
        d="M8 31c9 8 18 12 28 12s19-4 28-12"
        stroke={GOLD}
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TopLabel() {
  return (
    <div className="flex flex-col items-center">
      <LotusMark className="h-5 w-8" />

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

      <LotusMark className="h-5 w-8" />

      <span className="h-px w-24 bg-gradient-to-l from-transparent to-[#D98500] sm:w-36" />
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
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px]">
        {/* Header */}
        <header className="mx-auto mb-3 max-w-[820px] text-center">
          <TopLabel />

          <h2 className="mt-1.5 font-serif text-[24px] font-normal leading-tight text-[#342017] sm:text-[28px] lg:text-[30px]">
            Help Someone Receive a Respectful Antim Sanskar.
          </h2>

          <HeadingDivider />

          <p className="mx-auto mt-2 max-w-[600px] text-[13px] font-normal leading-[1.45] text-[#5B473C]">
            Your support helps arrange ambulance, lakdi, pandit ji,
            samagri,
            <br className="hidden sm:block" />
            and logon ko bhoj for families who cannot afford it.
          </p>
        </header>

        {/* Cards */}
        <div className="mx-auto grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-[14px]">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="group relative mx-auto h-[308px] w-full max-w-[280px] overflow-hidden rounded-[14px] border border-[#E6D5BF] bg-[#FFFDF9] shadow-[0_6px_18px_rgba(75,47,25,0.065)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D3A15F] hover:shadow-[0_10px_24px_rgba(75,47,25,0.10)] sm:max-w-none lg:h-[300px]"
              >
                {/* Image */}
                <div className="absolute inset-x-0 top-0 h-[165px] overflow-hidden rounded-t-[13px] lg:h-[155px]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    priority={index < 2}
                    unoptimized
                    sizes="(max-width: 640px) 280px, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.025]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/[0.06] to-transparent" />
                </div>

                {/* White rounded wave */}
                <div className="pointer-events-none absolute left-1/2 top-[126px] z-10 h-[92px] w-[150%] -translate-x-1/2 rounded-[50%] bg-[#FFFDF9] sm:top-[136px] lg:top-[116px]" />

                {/* Icon */}
                <div className="absolute left-1/2 top-[132px] z-20 grid h-[54px] w-[54px] -translate-x-1/2 place-items-center rounded-full border border-[#E8D8C3] bg-[#FFFDF9] shadow-[0_4px_12px_rgba(78,48,24,0.09)] sm:top-[142px] lg:top-[122px]">
                  <Icon className="h-5 w-5 text-[#DE8500]" />
                </div>

                {/* Compact content */}
                <div className="absolute inset-x-0 top-[187px] z-10 flex flex-col items-center px-4 text-center lg:top-[177px]">
                  <h3 className="font-serif text-[20px] font-normal leading-[1.05] text-[#352017] lg:text-[19px]">
                    {card.title}
                  </h3>

                  <span className="mt-1 h-px w-7 shrink-0 bg-[#D98500]" />

                  <p className="mx-auto mt-1.5 max-w-[230px] text-[11px] font-normal leading-[1.32] text-[#5B473C]">
                    {card.description}
                  </p>
                </div>

                {/* Compact button */}
                <button
                  type="button"
                  onClick={() => handleCardClick(card.href)}
                  className="absolute bottom-[9px] left-4 right-4 z-20 flex h-[34px] items-center justify-center gap-2 rounded-[5px] bg-gradient-to-r from-[#DF8300] to-[#EE9708] px-4 text-[11px] font-medium text-white shadow-[0_4px_10px_rgba(225,132,0,0.2)] transition hover:brightness-95"
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
