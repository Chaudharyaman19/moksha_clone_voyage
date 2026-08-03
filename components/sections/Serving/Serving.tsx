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
    image: "/assets/serving/community-outreach.png",
  },
  {
    title: "On-Ground Support",
    description:
      "Our teams work tirelessly on ground to ensure no family is left alone.",
    image: "/assets/serving/on-ground-support.png",
  },
  {
    title: "Food & Essentials",
    description:
      "We distribute food, clothes and essentials to families during difficult times.",
    image: "/assets/serving/food-essentials.png",
  },
  {
    title: "Support at Hospitals",
    description:
      "We coordinate with hospitals to provide immediate end-of-life support.",
    image: "/assets/serving/hospital-support.png",
  },
  {
    title: "Rural & Remote Reach",
    description:
      "Our services reach villages and remote areas where help is needed most.",
    image: "/assets/serving/rural-remote-reach.png",
  },
  {
    title: "Counseling Support",
    description:
      "We provide emotional and grief counseling to help families cope with loss.",
    image: "/assets/serving/counseling-support.png",
  },
  {
    title: "Emergency Transport",
    description:
      "24/7 dedicated transport services for transferring the deceased with respect.",
    image: "/assets/serving/emergency-transport.png",
  },
  {
    title: "Document Assistance",
    description:
      "Help with acquiring necessary certificates and completing legal formalities.",
    image: "/assets/serving/document-assistance.png",
  },
];

function ActivityCard({
  activity,
}: {
  activity: ActivityItem;
}) {
  return (
    <article className="group relative w-[220px] shrink-0 overflow-hidden rounded-[12px] border border-[#E9DED2] bg-white shadow-[0_4px_14px_rgba(66,43,24,0.055)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(66,43,24,0.09)] sm:w-[240px] md:w-[260px] lg:w-[230px]">
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={activity.image}
          alt={activity.title}
          fill
          sizes="(max-width: 640px) 220px, (max-width: 768px) 240px, (max-width: 1024px) 260px, 230px"
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
  );
}

function ActivityGroup({
  duplicate = false,
}: {
  duplicate?: boolean;
}) {
  return (
    <div
      className="flex shrink-0 gap-4 pr-4 sm:gap-5 sm:pr-5 md:gap-6 md:pr-6"
      aria-hidden={duplicate ? "true" : undefined}
    >
      {activities.map((activity, index) => (
        <ActivityCard
          key={`${duplicate ? "duplicate" : "original"}-${activity.title}-${index}`}
          activity={activity}
        />
      ))}
    </div>
  );
}

export default function Serving({
  variant = "voyage",
}: ServingProps) {
  return (
    <section
      className={`relative w-full overflow-hidden border-y border-[#E9DDCF] bg-[#FFFCF8] px-3 sm:px-4 lg:px-5 ${
        variant === "seva"
          ? "pb-3 pt-2 md:pb-3 md:pt-2"
          : "py-3 md:py-4"
      }`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-24 w-[70%] -translate-x-1/2 rounded-full bg-[#B97A2A]/[0.035] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-0">
        <header className="mx-auto mb-2 max-w-3xl text-center">
          <div className="mb-1 inline-flex items-center space-x-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#8B6A3E] to-transparent" />

            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#8B6A3E]">
              Our Activities
            </span>

            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#8B6A3E] to-transparent" />
          </div>

          <h2 className="font-serif text-[24px] font-normal leading-tight text-[#2F1D14] sm:text-[28px] lg:text-[30px]">
            Serving Humanity. Spreading Compassion.
          </h2>
        </header>

        {/* Infinite Marquee */}
        <div className="marquee-wrapper relative mt-1 w-full overflow-hidden pb-2 pt-1">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-5 bg-gradient-to-r from-[#FFFCF8] via-[#FFFCF8]/85 to-transparent sm:w-8 lg:w-12" />

          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-5 bg-gradient-to-l from-[#FFFCF8] via-[#FFFCF8]/85 to-transparent sm:w-8 lg:w-12" />

          <div className="marquee-track flex w-max">
            <ActivityGroup />
            <ActivityGroup duplicate />
          </div>
        </div>

        <div className="mt-2 flex justify-center">
          <button
            type="button"
            className="inline-flex h-8 min-w-[230px] items-center justify-center gap-2 rounded-md border border-[#C78B4D] bg-white px-5 text-[12px] font-normal text-[#A86722] transition-colors hover:bg-[#FBF4EA]"
          >
            <span>View More Activities</span>

            <ArrowRight
              className="h-3.5 w-3.5"
              strokeWidth={1.8}
            />
          </button>
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          animation: serving-marquee 42s linear infinite;
          will-change: transform;
        }

        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }

        @keyframes serving-marquee {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @media (max-width: 640px) {
          .marquee-track {
            animation-duration: 32s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
}
