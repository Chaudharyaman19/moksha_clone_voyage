"use client";

import Image from "next/image";
import {
  FaArrowRight,
  FaHandHoldingHeart,
  FaHandshake,
  FaUsers,
} from "react-icons/fa";
import { PiFlowerLotus } from "react-icons/pi";

interface MissionCard {
  image: string;
  alt: string;
  icon: "give" | "serve" | "partner";
  iconColor: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  buttonColor: string;
}

const ICONS = {
  give: FaHandHoldingHeart,
  serve: FaUsers,
  partner: FaHandshake,
};

const cards: MissionCard[] = [
  {
    image: "/assets/donation-images/donate-sewa.png",
    alt: "A person placing a donation into a Sewa donation box by the river",
    icon: "give",
    iconColor: "#0E4A2E",
    title: "Give in Sewa",
    description:
      "Help extend dignified final-rites support to eligible cases.",
    buttonLabel: "Donate",
    buttonHref: "/donation",
    buttonColor: "#154A2E",
  },
  {
    image: "/assets/donation-images/volunteer-sewa.png",
    alt: "Volunteers supporting an elderly person with compassion",
    icon: "serve",
    iconColor: "#A95119",
    title: "Serve in Sewa",
    description: "Give your time, presence and compassion.",
    buttonLabel: "Become a Volunteer",
    buttonHref: "/volunteer",
    buttonColor: "#A95119",
  },
  {
    image: "/assets/donation-images/partner-sewa.png",
    alt: "A professional team discussing a partnership around a laptop",
    icon: "partner",
    iconColor: "#0E4A2E",
    title: "Partner in Sewa",
    description:
      "CSR, institutions, hospitals, organisations and community partners.",
    buttonLabel: "Partner With Us",
    buttonHref: "/contact",
    buttonColor: "#154A2E",
  },
];

export default function JoinTheMission() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FCF8F0] px-3 py-5 sm:px-4 lg:px-5 lg:py-6">
      {/* subtle botanical decoration */}
      <div className="pointer-events-none absolute -left-4 -top-2 text-[#CDB68B]/25">
        <svg viewBox="0 0 140 110" className="h-24 w-32" fill="none" aria-hidden="true">
          <path d="M3 6c40 20 62 42 82 86" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 15c12-9 24-7 31 1-10 3-20 4-31-1Z" fill="currentColor" />
          <path d="M28 30c12-9 24-7 31 1-10 3-20 4-31-1Z" fill="currentColor" />
          <path d="M44 47c12-9 24-7 31 1-10 3-20 4-31-1Z" fill="currentColor" />
        </svg>
      </div>

      <div className="pointer-events-none absolute right-0 top-0 h-28 w-44 opacity-20">
        <Image
          src="/assets/donation-images/partner-sewa.png"
          alt=""
          fill
          sizes="180px"
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#FCF8F0]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1344px]">
        {/* Header */}
        <header className="mb-4 text-center">
          <div className="inline-flex items-center gap-3 text-[16px] font-bold uppercase tracking-[0.07em] text-[#A16B25]">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#C08B3E]" />
            <PiFlowerLotus className="h-4 w-4" />
            Join the Mission
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#C08B3E]" />
          </div>

          <h2 className="mx-auto mt-1 max-w-[840px] font-serif text-[28px] font-bold leading-tight text-[#174A2D] sm:text-[34px] lg:text-[40px]">
            There Is a Place for Everyone in Sewa
          </h2>

          <div className="mt-1 flex items-center justify-center gap-2 text-[#B68535]">
            <PiFlowerLotus className="h-3.5 w-3.5" />
            <span className="h-px w-10 bg-[#C79A50]" />
          </div>

          <p className="mx-auto mt-2 max-w-[820px] text-[16px] leading-[1.5] text-[#625D56] sm:text-[16px]">
            Every act of kindness helps us bring dignity, compassion and support to those who need it most in their final journey.
          </p>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
          {cards.map((card) => {
            const Icon = ICONS[card.icon];

            return (
              <article
                key={card.title}
                className="grid min-h-[300px] grid-cols-[1fr_1.1fr] overflow-hidden rounded-[8px] border border-[#E7DCC5] bg-white shadow-[0_4px_14px_rgba(86,59,24,0.05)]"
              >
                <div className="relative min-h-[280px]">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 24vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>

                <div className="flex flex-col justify-center px-4 py-4">
                  <span
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-white shadow-[0_3px_8px_rgba(0,0,0,0.08)]"
                    style={{ backgroundColor: card.iconColor }}
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </span>

                  <h3
                    className={`mt-3 font-serif text-[17px] font-bold ${card.icon === "serve" ? "text-[#A95119]" : "text-[#24452F]"
                      }`}
                  >
                    {card.title}
                  </h3>

                  <div className="mt-1 h-px w-7 bg-[#D0A456]" />

                  <p className="mt-2 text-[16px] leading-[1.45] text-[#5D5953]">
                    {card.description}
                  </p>

                  <a
                    href={card.buttonHref}
                    className="mt-4 inline-flex h-[44px] w-fit items-center justify-center gap-2 whitespace-nowrap rounded-[4px] px-3.5 text-[16px] font-bold uppercase text-white transition hover:brightness-110"
                    style={{ backgroundColor: card.buttonColor }}
                  >
                    {card.buttonLabel}
                    <FaArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom bar */}
        <div className="mt-3 flex flex-col gap-3 rounded-[8px] border border-[#E7DCC5] bg-[#F3EBDD] px-5 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#D9C28F] bg-[#FBF6EA] text-[#B58A43]">
              <FaUsers className="h-4 w-4" />
            </span>

            <p className="max-w-[820px] text-[16px] leading-[1.45] text-[#5D5850]">
              Whether you give, serve or partner – your support creates a meaningful difference in ensuring dignity and respect in every final journey we are able to support.
            </p>
          </div>

          <div className="hidden h-8 w-px bg-[#DED2B9] sm:block" />

          <p className="flex shrink-0 items-center justify-center gap-2 font-serif text-[16px] italic text-[#B17D33] sm:justify-end">
            <PiFlowerLotus className="h-4 w-4" />
            Together, we bring compassion to life.
          </p>
        </div>
      </div>
    </section>
  );
}