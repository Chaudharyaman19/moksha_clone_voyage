"use client";

import Image from "next/image";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import { imageOrFallback, itemOrFallback, textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";

const SEWA_CARDS = [
  {
    id: 1,
    title: "On-Ground Sewa",
    description:
      "Compassionate support on the ground, ensuring every step of the journey is handled with care.",
    image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165453/moksha-sewa/assets/sewa/on_ground_image.png",
    icon: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165452/moksha-sewa/assets/sewa/on-ground.png",
  },
  {
    id: 2,
    title: "Volunteer Sewa",
    description:
      "Dedicated volunteers selflessly giving their time and energy to serve those in need.",
    image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165460/moksha-sewa/assets/sewa/voluteer_sewa_image.png",
    icon: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165459/moksha-sewa/assets/sewa/voluteer-seva.png",
  },
  {
    id: 3,
    title: "Ritual Support",
    description:
      "Providing ritual essentials and guidance with dignity, respect and authenticity.",
    image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165457/moksha-sewa/assets/sewa/ritual_support_image.png",
    icon: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165456/moksha-sewa/assets/sewa/ritual-support.png",
  },
  {
    id: 4,
    title: "Community Outreach",
    description:
      "Building awareness, extending care and supporting communities with empathy.",
    image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165451/moksha-sewa/assets/sewa/community_outreach_image.png",
    icon: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165449/moksha-sewa/assets/sewa/community-outreach.png",
  },
];

export default function GlimpseOfJourney() {
  const websiteSection = useWebsiteSection("journey-glimpse");
  const managedCards = [
    ...SEWA_CARDS.map((fallback, index) => {
    const item = itemOrFallback(websiteSection?.items, index, fallback);
    return {
      ...fallback,
      title: textOrFallback(item.title, fallback.title, 70),
      description: textOrFallback(item.description, fallback.description, 160),
      image: item.image || fallback.image,
    };
    }),
    ...(websiteSection?.items?.slice(SEWA_CARDS.length) ?? []).map((item) => ({
      ...SEWA_CARDS[SEWA_CARDS.length - 1],
      title: item.title || "New Journey Moment",
      description: item.description || "Additional journey moment.",
      image: item.image || SEWA_CARDS[SEWA_CARDS.length - 1].image,
    })),
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#f8f1e3]">
      {/* Curved image clip-path definition (scales at every breakpoint) */}
      <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
        <defs>
          <clipPath id="sewa-card-curve" clipPathUnits="objectBoundingBox">
            <path d="M0,0 H1 V0.82 C0.82,0.91 0.68,0.94 0.5,0.95 C0.32,0.94 0.18,0.91 0,0.82 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageOrFallback(websiteSection?.image, "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165458/moksha-sewa/assets/sewa/sewa_in_action_bg.png")}
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="h-full w-full object-cover md:object-fill"
        />
      </div>

      {/* Soft overlay */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[#f8f1e3]/10" />

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-[1344px] px-4 py-6 sm:px-5 lg:px-0">
        {/* Section header */}
        <header className="mx-auto mb-3 max-w-[760px] text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <span className="h-px w-10 bg-[#b68a2d] sm:w-16 md:w-20" />

            <span className="whitespace-nowrap font-sans text-[16px] font-semibold uppercase text-[#a67820]">
              {textOrFallback(websiteSection?.eyebrow, "Sewa In Action", 60)}
            </span>

            <span className="h-px w-10 bg-[#b68a2d] sm:w-16 md:w-20" />
          </div>

          {/* Main heading */}
          <h2 className="mt-1 font-sans text-[24px] font-semibold leading-[1.05] text-[#352218] sm:text-[30px]">
            {textOrFallback(websiteSection?.title, "Moments of Compassion, Service & Dignity", 95)}
          </h2>

          {/* Decorative image */}
          <div className="mt-1 flex justify-center">
            <Image
              src="https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165170/moksha-sewa/assets/faq/title_decoration.png"
              alt=""
              aria-hidden="true"
              width={2928}
              height={269}
              className="h-auto w-[200px] max-w-full object-contain sm:w-[260px] md:w-[320px]"
            />
          </div>
        </header>

        {/* Cards */}
        <div className="mx-auto mt-5 grid w-full max-w-[1440px] grid-cols-1 gap-5 sm:mt-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-6">
          {managedCards.map((card) => (
            <article
              key={card.id}
              className="group relative overflow-visible rounded-[17px] border border-[#e4d8c0] shadow-[0_-3px_14px_rgba(67,51,25,0.08)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_-4px_20px_rgba(67,51,25,0.12)]"
              style={{
                backgroundImage: "url('https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165448/moksha-sewa/assets/sewa/card_image.png')",
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Image wrapper */}
              <div className="relative h-[230px] rounded-t-[17px] sm:h-[205px] md:h-[215px] lg:h-[230px] xl:h-[240px]">
                <div
                  className="absolute inset-0 overflow-hidden rounded-t-[17px]"
                  style={{ clipPath: "url(#sewa-card-curve)" }}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                  />

                  {/* Gold image bottom border */}
                  <div className="absolute bottom-[-1px] left-0 h-[2px] w-full bg-[#c39b43]" />
                </div>

                {/* Golden border following the curve */}
                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M0,82 C18,91 32,94 50,95 C68,94 82,91 100,82"
                    fill="none"
                    stroke="#c39b43"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>

              {/* Icon */}
              <div className="absolute left-1/2 top-[183px] z-20 flex h-[74px] w-[74px] -translate-x-1/2 items-center justify-center overflow-hidden rounded-full transition-transform duration-500 group-hover:scale-105 sm:top-[158px] md:top-[168px] lg:top-[183px] xl:top-[193px]">
                <Image
                  src={card.icon}
                  alt=""
                  aria-hidden="true"
                  width={74}
                  height={74}
                  className="h-[74px] w-[74px] shrink-0 object-cover"
                />
              </div>

              {/* Card content */}
              <div className="relative flex min-h-[150px] flex-col items-center px-5 pb-4 pt-[30px] text-center sm:min-h-[145px] md:min-h-[150px] lg:min-h-[155px] lg:px-4 xl:px-6">
                <h3 className="font-serif text-[20px] font-semibold leading-tight text-[#104c3e] sm:text-[19px] md:text-[20px] lg:text-[20px] xl:text-[21px]">
                  {card.title}
                </h3>

                {/* Small gold divider */}
                <div className="mt-2 h-[2px] w-[40px] bg-[#c49a43]" />

                <p className="mt-2 max-w-[300px] text-[16px] font-medium leading-[1.55] text-[#333a38]">
                  {card.description}
                </p>

                {/* Bottom decorative leaves */}
                {/* <div className="pointer-events-none absolute bottom-0 right-0 h-[72px] w-[85px] overflow-hidden opacity-[0.17]">
                  <div className="absolute bottom-[-20px] right-[18px] h-[85px] w-[32px] rotate-[30deg] border-l border-[#a88b55]" />
                  <div className="absolute bottom-[10px] right-[42px] h-[30px] w-[15px] rotate-[-25deg] rounded-[100%] border border-[#a88b55]" />
                  <div className="absolute bottom-[30px] right-[20px] h-[28px] w-[14px] rotate-[28deg] rounded-[100%] border border-[#a88b55]" />
                </div> */}
              </div>
            </article>
          ))}
        </div>

        {/* Gallery CTA */}
        <div className="relative mx-auto mt-5 flex w-full max-w-[900px] items-center justify-center md:mt-6">
          {/* Left decorative line */}
          {/* <div className="absolute left-0 hidden w-[28%] items-center md:flex">
            <span className="h-[9px] w-[9px] shrink-0 rounded-full bg-[#bb933e]" />
            <span className="h-px flex-1 bg-[#bb933e]" />
            <span className="mx-2 h-[7px] w-[7px] rotate-45 border border-[#bb933e]" />
            <span className="h-px w-6 bg-[#bb933e]" />
          </div> */}

          {/* Button */}
          <button
            type="button"
            onClick={() =>
              window.open(websiteSection?.buttonHref || "/mokshagallery", "_blank", "noopener,noreferrer")
            }
            className="group relative flex min-h-[48px] min-w-[300px] items-center justify-center gap-3 rounded-[15px] border-2 border-[#bb8d30] bg-[#0a3a2e] px-7 text-[16px] font-semibold uppercase tracking-[0.07em] text-white shadow-[0_5px_14px_rgba(0,61,48,0.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#053228] hover:shadow-[0_9px_22px_rgba(0,61,48,0.25)] sm:min-h-[52px] sm:min-w-[380px]"
          >
            {/* Gallery icon */}
            <span className="flex h-[30px] w-[30px] items-center justify-center text-[#d5a441]">
              <ImageIcon size={29} strokeWidth={1.5} />
            </span>

            <span className="whitespace-nowrap">{textOrFallback(websiteSection?.buttonLabel, "View Sewa Gallery", 36)}</span>

            <ArrowRight
              size={25}
              strokeWidth={1.5}
              className="text-[#d5a441] transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

          {/* Right decorative line */}
          {/* <div className="absolute right-0 hidden w-[28%] items-center md:flex">
            <span className="h-px w-6 bg-[#bb933e]" />
            <span className="mx-2 h-[7px] w-[7px] rotate-45 border border-[#bb933e]" />
            <span className="h-px flex-1 bg-[#bb933e]" />
            <span className="h-[9px] w-[9px] shrink-0 rounded-full bg-[#bb933e]" />
          </div> */}
        </div>
      </div>
    </section>
  );
}
