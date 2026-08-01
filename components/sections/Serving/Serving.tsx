"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ServingProps {
  variant?: "voyage" | "seva";
}

interface ActivityItem {
  title: string;
  description: string;
  image: string;
}

const activities: ActivityItem[] = [
  {
    title: "Community Outreach",
    description:
      "We conduct awareness programs and reach out to communities in need.",
    image: "/assets/activities/community-outreach.webp",
  },
  {
    title: "On-Ground Support",
    description:
      "Our teams work tirelessly on ground to ensure no family is left alone.",
    image: "/assets/activities/on-ground-support.webp",
  },
  {
    title: "Food & Essentials",
    description:
      "We distribute food, clothes and essentials to families during difficult times.",
    image: "/assets/activities/food-essentials.webp",
  },
  {
    title: "Support at Hospitals",
    description:
      "We coordinate with hospitals to provide immediate end-of-life support.",
    image: "/assets/activities/hospital-support.webp",
  },
  {
    title: "Rural & Remote Reach",
    description:
      "Our services reach villages and remote areas where help is needed most.",
    image: "/assets/activities/rural-remote-reach.webp",
  },
  {
    title: "Counseling Support",
    description: "We provide emotional and grief counseling to help families cope with loss.",
    image: "/assets/activities/community-outreach.webp",
  },
  {
    title: "Emergency Transport",
    description: "24/7 dedicated transport services for transferring the deceased with respect.",
    image: "/assets/activities/on-ground-support.webp",
  },
  {
    title: "Document Assistance",
    description: "Help with acquiring necessary certificates and completing legal formalities.",
    image: "/assets/activities/hospital-support.webp",
  },
];

export default function Serving({ variant = "voyage" }: ServingProps) {
  return (
    <section className={`relative w-full overflow-hidden border-y border-[#E9DDCF] bg-[#FFFCF8] ${variant === "seva" ? "pt-2 pb-4 md:pt-3 md:pb-5" : "py-4 md:py-5"}`}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-24 w-[70%] -translate-x-1/2 rounded-full bg-[#B97A2A]/[0.035] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-0">
        <header className="mb-1 text-center">
          <div className="mb-1 inline-flex items-center space-x-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#8B6A3E] to-transparent" />
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#8B6A3E]">
              Our Activities
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#8B6A3E] to-transparent" />
          </div>

          <h2 className="font-serif text-[18px] font-normal leading-none text-[#2F1D14] sm:text-[28px] md:text-[24px] lg:whitespace-nowrap lg:text-[38px] xl:text-[32px]">
            {variant === "seva"
              ? "Serving Humanity. Spreading Compassion."
              : "Serving Humanity. Spreading Compassion."}
          </h2>
        </header>

        {/* Marquee Wrapper */}
        <div className="relative mt-2 flex w-full overflow-hidden pb-4 pt-2">
          {/* Gradient Masks */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-2 bg-gradient-to-r from-[#FFFCF8] to-transparent sm:w-3 lg:w-4" />
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-2 bg-gradient-to-l from-[#FFFCF8] to-transparent sm:w-3 lg:w-4" />

          <div className="flex w-max animate-scroll gap-4 hover:[animation-play-state:paused] sm:gap-5 md:gap-6">
            {[...activities, ...activities].map((activity, index) => (
              <article
                key={`${activity.title}-${index}`}
                className="group relative w-[220px] shrink-0 overflow-hidden rounded-[12px] border border-[#E9DED2] bg-white shadow-[0_4px_14px_rgba(66,43,24,0.055)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(66,43,24,0.09)] sm:w-[240px] md:w-[260px] lg:w-[230px]"
              >
                <div className="relative w-full aspect-square overflow-hidden">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    quality={95}
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                  />
                </div>

                <div className="px-3 pb-3 pt-2 text-center">
                  <h3 className="font-serif text-[15px] font-normal leading-tight text-[#32231C] lg:text-[14px] xl:text-[15px]">
                    {activity.title}
                  </h3>

                  <p className="mx-auto mt-1 max-w-[230px] text-[11px] font-normal leading-[15px] text-[#5D493C] lg:text-[10px] lg:leading-[14px] xl:text-[11px] xl:leading-[15px]">
                    {activity.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-3 flex justify-center md:mt-4">
          <button
            type="button"
            className="inline-flex h-8 min-w-[230px] items-center justify-center gap-2 rounded-md border border-[#C78B4D] bg-white px-5 text-[12px] font-normal text-[#A86722] transition-colors hover:bg-[#FBF4EA]"
          >
            <span>View More Activities</span>
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </section>
  );
}