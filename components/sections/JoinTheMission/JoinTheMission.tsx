"use client";

import Image from "next/image";
import { FaArrowRight, FaHandHoldingHeart, FaHandshake, FaUsers } from "react-icons/fa";
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
    alt: "A family offering a donation envelope during a last-rites ceremony",
    icon: "give",
    iconColor: "#1E5C34",
    title: "Give in Sewa",
    description: "Help extend dignified final-rites support to eligible cases.",
    buttonLabel: "Donate",
    buttonHref: "/donation",
    buttonColor: "#154A2E",
  },
  {
    image: "/assets/donation-images/volunteer-sewa.png",
    alt: "Volunteers comforting a grieving family at a river ghat",
    icon: "serve",
    iconColor: "#B5651D",
    title: "Serve in Sewa",
    description: "Give your time, presence and compassion.",
    buttonLabel: "Become a Volunteer",
    buttonHref: "/volunteer",
    buttonColor: "#C0631A",
  },
  {
    image: "/assets/donation-images/partner-sewa.png",
    alt: "A team discussing a partnership over a laptop",
    icon: "partner",
    iconColor: "#1E5C34",
    title: "Partner in Sewa",
    description: "CSR, institutions, hospitals, organisations and community partners.",
    buttonLabel: "Partner With Us",
    buttonHref: "/contact",
    buttonColor: "#154A2E",
  },
];

export default function JoinTheMission() {
  return (
    <section className="w-full bg-[#FBF6EC] px-4 py-10 sm:px-5 lg:px-6 lg:py-12">
      <div className="mx-auto w-full max-w-[1344px]">
        {/* Header */}
        <header className="mb-8 text-center">
          <div className="inline-flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.18em] text-[#A9832E]">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#C99A4B]" />
            <PiFlowerLotus className="h-4 w-5" />
            Join the Mission
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#C99A4B]" />
          </div>

          <h2 className="mx-auto mt-2 max-w-[720px] font-serif text-[30px] font-bold leading-tight text-[#154A2E] sm:text-[36px] lg:text-[40px]">
            There Is a Place for Everyone in Sewa
          </h2>

          <p className="mx-auto mt-3 max-w-[640px] text-[16px] leading-[1.6] text-[#6B6560]">
            Every act of kindness helps us bring dignity, compassion and support to those who need it most in their final journey.
          </p>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => {
            const Icon = ICONS[card.icon];

            return (
              <article
                key={card.title}
                className="grid grid-cols-[1fr_1.1fr] overflow-hidden rounded-[10px] border border-[#E8DEC7] bg-white shadow-[0_6px_18px_rgba(90,64,30,0.05)]"
              >
                <div className="relative min-h-[220px]">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 20vw, 45vw"
                    className="object-cover object-center"
                  />
                </div>

                <div className="flex flex-col justify-center px-4 py-5">
                  <span
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-white"
                    style={{ backgroundColor: card.iconColor }}
                  >
                    <Icon className="h-5 w-5" />
                  </span>

                  <h3 className="mt-3 text-[18px] font-bold text-[#241C10]">{card.title}</h3>

                  <p className="mt-1 text-[16px] leading-[1.45] text-[#6B6560]">{card.description}</p>

                  <a
                    href={card.buttonHref}
                    className="mt-4 inline-flex h-[42px] w-fit items-center justify-center gap-2 rounded-[5px] px-4 text-[13px] font-bold uppercase tracking-[0.04em] text-white transition hover:brightness-110"
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
        <div className="mt-4 flex flex-col items-center gap-4 rounded-[10px] border border-[#E8DEC7] bg-[#F3E9D7] px-6 py-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-start gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#D9BE8D] bg-white text-[#5B6540]">
              <FaUsers className="h-4 w-4" />
            </span>
            <p className="max-w-[560px] text-[16px] leading-[1.5] text-[#5F594F]">
              Whether you give, serve or partner – your support creates a meaningful difference in ensuring dignity and respect in every final journey we are able to support.
            </p>
          </div>

          <p className="flex shrink-0 items-center gap-2 font-serif text-[16px] italic text-[#B9832E]">
            <PiFlowerLotus className="h-4 w-4" />
            Together, we bring compassion to life.
          </p>
        </div>
      </div>
    </section>
  );
}
