"use client";

import Image from "next/image";
import {
  FaArrowRight,
  FaHandHoldingUsd,
  FaHandsHelping,
  FaHandshake,
  FaUsers,
} from "react-icons/fa";

interface SacredJourneyProps {
  variant?: "voyage" | "seva";
}

type SupportCard = {
  title: string;
  description: string;
  button: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
};

export default function SacredJourney({
  variant = "voyage",
}: SacredJourneyProps) {
  const cards: SupportCard[] =
    variant === "seva"
      ? [
          {
            title: "Donate",
            description:
              "Your contribution helps us provide free services to families in need.",
            button: "Donate Now",
            image: "/assets/sacred-journey-hd/donate.webp",
            icon: FaHandHoldingUsd,
          },
          {
            title: "Volunteer",
            description:
              "Join our team and serve humanity by being there when it matters most.",
            button: "Become a Volunteer",
            image: "/assets/sacred-journey-hd/volunteer.webp",
            icon: FaUsers,
          },
          {
            title: "Sponsor a Service",
            description:
              "Sponsor a cremation or support a family in memory of your loved ones.",
            button: "Sponsor Now",
            image: "/assets/sacred-journey-hd/sponsor-service.webp",
            icon: FaHandsHelping,
          },
          {
            title: "Partner With Us",
            description:
              "Partner with us to expand our reach and impact more lives together.",
            button: "Partner With Us",
            image: "/assets/sacred-journey-hd/partner-with-us.webp",
            icon: FaHandshake,
          },
        ]
      : [
          {
            title: "Donate",
            description:
              "Support dignified care, transparent coordination and compassionate assistance.",
            button: "Donate Now",
            image: "/assets/sacred-journey-hd/donate.webp",
            icon: FaHandHoldingUsd,
          },
          {
            title: "Volunteer",
            description:
              "Join our support network and help families when compassionate care matters most.",
            button: "Become a Volunteer",
            image: "/assets/sacred-journey-hd/volunteer.webp",
            icon: FaUsers,
          },
          {
            title: "Sponsor a Service",
            description:
              "Sponsor a verified service or support a family in memory of a loved one.",
            button: "Sponsor Now",
            image: "/assets/sacred-journey-hd/sponsor-service.webp",
            icon: FaHandsHelping,
          },
          {
            title: "Partner With Us",
            description:
              "Partner with our mission to extend dignified support across more communities.",
            button: "Partner With Us",
            image: "/assets/sacred-journey-hd/partner-with-us.webp",
            icon: FaHandshake,
          },
        ];

  return (
    <section className="relative w-full overflow-hidden border-y border-[#E9DCCB] bg-[#FBF7F0] py-5 md:py-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(196,129,36,0.08),transparent_42%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-0">
        <header className="mb-4 text-center md:mb-5 flex flex-col items-center justify-center">
          <div className="mb-2 inline-flex items-center space-x-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent via-[#D97800] to-transparent" />
            <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-[#D97800] sm:text-[10px]">
              {variant === "seva" ? "Support Moksha Sewa" : "Support With Compassion"}
            </p>
            <div className="h-px w-8 bg-gradient-to-r from-transparent via-[#D97800] to-transparent" />
          </div>
          <h2 className="font-serif text-[22px] font-normal leading-tight text-[#362319] sm:text-[26px] lg:text-[30px]">
            Be the Reason Someone Gets a Dignified Farewell.
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="group relative h-[206px] overflow-hidden rounded-[15px] border border-[#E7D4BA] bg-white shadow-[0_5px_16px_rgba(74,45,22,0.06)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(74,45,22,0.10)] sm:h-[212px] xl:h-[202px]"
              >
                {/* Clean HD image kept fully away from the text column. */}
              <div className="absolute right-0 top-0 h-[145px] w-[60%] overflow-hidden rounded-tr-[14px] rounded-bl-[100%] sm:h-[150px] xl:h-[155px]">
  <Image
    src={card.image}
    alt={card.title}
    fill
    unoptimized
    priority={index < 2}
    sizes="(max-width: 640px) 52vw, (max-width: 1280px) 26vw, 20vw"
    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.025]"
  />
</div>

                {/* Fixed-width text column prevents image/content overlap. */}
                <div className="relative z-10 flex h-full w-[51%] flex-col px-4 pb-[50px] pt-4 sm:px-5 xl:px-4">
                  <Icon className="mb-2 h-7 w-7 shrink-0 text-[#E98700] sm:h-8 sm:w-8 xl:h-7 xl:w-7" />

                  <h3 className="text-[17px] font-semibold leading-[1.08] text-[#352319] sm:text-[18px] xl:text-[17px]">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-[11px] font-normal leading-[1.38] text-[#694B3A] sm:text-[12px] xl:text-[11px]">
                    {card.description}
                  </p>
                </div>

                <button
                  type="button"
                  className="absolute bottom-3 left-4 z-20 flex h-8 w-[72%] items-center justify-center gap-2 rounded-[5px] bg-gradient-to-r from-[#E88A00] to-[#F39A00] px-3 text-[11px] font-semibold text-white shadow-[0_4px_10px_rgba(230,132,0,0.18)] transition hover:brightness-95 sm:left-5 sm:text-[12px] xl:left-4 xl:h-[30px] xl:text-[11px]"
                >
                  <span className="truncate">{card.button}</span>
                  <FaArrowRight className="h-3 w-3 shrink-0" />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}