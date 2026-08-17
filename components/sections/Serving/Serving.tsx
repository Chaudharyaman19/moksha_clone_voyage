"use client";

import Image from "next/image";
import {
  FaAmbulance,
  FaArrowRight,
  FaFileAlt,
  FaHandHoldingHeart,
  FaHeart,
  FaHospital,
  FaLandmark,
  FaMapMarkerAlt,
  FaBoxOpen,
} from "react-icons/fa";
import type { IconType } from "react-icons";

interface ServingProps {}

interface ActivityItem {
  title: string;
  description: string;
  image: string;
  icon: IconType;
  imagePosition?: string;
}

const activities: ActivityItem[] = [
  {
    title: "Unclaimed Case Support",
    description:
      "We coordinate with police, hospitals and authorities for respectful final rites.",
    image: "/assets/serving/community-outreach.png",
    icon: FaHandHoldingHeart,
    imagePosition: "50% 50%",
  },
  {
    title: "On-Ground Support",
    description:
      "Volunteers assist families at hospitals, homes, ghats and cremation grounds.",
    image: "/assets/serving/on-ground-support.png",
    icon: FaLandmark,
    imagePosition: "50% 50%",
  },
  {
    title: "Food Service & Essentials",
    description:
      "Food, water, clothing and basic essentials are arranged where support is needed.",
    image: "/assets/serving/food-essentials.png",
    icon: FaBoxOpen,
    imagePosition: "50% 50%",
  },
  {
    title: "Hospital Support",
    description:
      "We guide families through body release, hospital coordination and urgent needs.",
    image: "/assets/serving/hospital-support.png",
    icon: FaHospital,
    imagePosition: "50% 50%",
  },
  {
    title: "Rural & Remote Reach",
    description:
      "We help villages and remote areas where access to final-rites support is limited.",
    image: "/assets/serving/rural-remote-reach.png",
    icon: FaMapMarkerAlt,
    imagePosition: "50% 50%",
  },
  {
    title: "Emotional Support",
    description:
      "Families receive calm guidance and respectful support through a hard moment.",
    image: "/assets/serving/counseling-support.png",
    icon: FaHeart,
    imagePosition: "50% 50%",
  },
  {
    title: "Ambulance & Transport",
    description:
      "Ambulance and hearse-van coordination for short or long-distance transport.",
    image: "/assets/serving/emergency-transport.png",
    icon: FaAmbulance,
    imagePosition: "50% 50%",
  },
  {
    title: "Document Assistance",
    description:
      "Support with required papers, hospital documents and official guidance.",
    image: "/assets/serving/document-assistance.png",
    icon: FaFileAlt,
    imagePosition: "50% 50%",
  },
];

function LotusMark({
  className = "h-6 w-9",
}: {
  className?: string;
}) {
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

function HeadingDivider() {
  return (
    <div
      className="mt-1.5 flex items-center justify-center gap-1.5"
      aria-hidden="true"
    >
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#C88B35]" />

      <span className="h-[5px] w-[5px] rotate-45 bg-[#C88B35]" />

      <span className="h-[3px] w-[3px] rotate-45 bg-[#E0B26D]" />

      <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#C88B35]" />
    </div>
  );
}

function CornerLotus() {
  return (
    <div className="pointer-events-none absolute -bottom-5 -right-4 z-0 text-[#D6A456]/[0.13]">
      <LotusMark className="h-[76px] w-[76px]" />
    </div>
  );
}

function ActivityCard({
  activity,
}: {
  activity: ActivityItem;
}) {
  const Icon = activity.icon;

  return (
    <article className="group relative w-[220px] shrink-0 overflow-hidden rounded-[12px] border border-[#E9DED2] bg-[#FFFDF9] shadow-[0_4px_14px_rgba(66,43,24,0.055)] transition duration-300 hover:-translate-y-0.5 hover:border-[#DDBB87] hover:shadow-[0_8px_20px_rgba(66,43,24,0.09)] sm:w-[240px] md:w-[260px] lg:w-[230px]">
      {/* Same image height */}
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={activity.image}
          alt={activity.title}
          fill
          sizes="(max-width: 640px) 220px, (max-width: 768px) 240px, (max-width: 1024px) 260px, 230px"
          quality={95}
          style={{
            objectPosition: activity.imagePosition ?? "50% 50%",
          }}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#382013]/10 via-transparent to-transparent" />
      </div>

      {/* Floating icon */}
      <div className="absolute left-1/2 top-[calc(100%-86px)] z-20 hidden" />

      <div className="absolute left-1/2 top-[calc(100%-1px)] z-20" />

      <div className="absolute left-1/2 top-[220px] z-20 hidden -translate-x-1/2 sm:top-[240px] md:top-[260px] lg:top-[230px]" />

      <div className="absolute left-1/2 top-[220px] z-20 grid h-[46px] w-[46px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#DFC08F] bg-[#FFFDF9] text-[#C48324] shadow-[0_5px_14px_rgba(80,48,22,0.10)] sm:top-[240px] md:top-[260px] lg:top-[230px]">
        <Icon className="h-[22px] w-[22px]" strokeWidth={1.55} />
      </div>

      {/* Compact content */}
      <div className="relative min-h-[94px] overflow-hidden px-3 pb-3 pt-7 text-center">
        <CornerLotus />

        <div className="relative z-10">
          <h3 className="font-serif text-[16px] font-normal leading-tight text-[#32231C] lg:text-[16px] xl:text-[16px]">
            {activity.title}
          </h3>

          <span className="mx-auto mt-1.5 block h-px w-7 bg-[#C88935]" />

          <p className="mx-auto mt-1.5 max-w-[210px] text-[16px] font-normal leading-[14px] text-[#5D493C] xl:text-[16px] xl:leading-[14px]">
            {activity.description}
          </p>
        </div>
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

export default function Serving({}: ServingProps) {
  return (
    <section
      className={`relative w-full overflow-hidden border-y border-[#E9DDCF] bg-[#FFFCF8] px-3 py-5 sm:px-4 lg:px-5 md:py-5`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-24 w-[70%] -translate-x-1/2 rounded-full bg-[#B97A2A]/[0.035] blur-3xl" />

        <div className="absolute bottom-[-65px] left-1/2 h-[110px] w-[75%] -translate-x-1/2 rounded-[50%] border border-[#D7AA68]/[0.07]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-0">
        <header className="mx-auto mb-4 max-w-3xl text-center">
          <LotusMark className="mx-auto h-5 w-8 text-[#C88B35]" />

          <div className="mb-1 mt-0.5 inline-flex items-center space-x-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#8B6A3E] to-transparent" />

            <span className="text-[16px] font-medium uppercase tracking-[0.25em] text-[#8B6A3E] sm:text-[16px]">
              Our Service Work
            </span>

            <div className="h-px w-12 bg-gradient-to-l from-transparent via-[#8B6A3E] to-transparent" />
          </div>

          <h2 className="font-serif text-[24px] font-normal leading-tight text-[#2F1D14] sm:text-[28px] lg:text-[30px]">
            Practical Help, Step by Step
          </h2>

          <HeadingDivider />
        </header>

        {/* Infinite marquee remains unchanged */}
        <div className="marquee-wrapper relative mt-2 w-full overflow-hidden py-2">
          <div className="pointer-events-none absolute left-0 top-0 z-30 h-full w-5 bg-gradient-to-r from-[#FFFCF8] via-[#FFFCF8]/85 to-transparent sm:w-8 lg:w-12" />

          <div className="pointer-events-none absolute right-0 top-0 z-30 h-full w-5 bg-gradient-to-l from-[#FFFCF8] via-[#FFFCF8]/85 to-transparent sm:w-8 lg:w-12" />

          <div className="marquee-track flex w-max">
            <ActivityGroup />
            <ActivityGroup duplicate />
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <a
            href="/request-help"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-fit items-center justify-center gap-2 rounded-md border border-[#F4C46A] bg-gradient-to-r from-[#B76B16] via-[#E5A93E] to-[#B76B16] px-5 text-[16px] font-bold text-white shadow-[0_0_18px_rgba(229,169,62,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(229,169,62,0.72)]"
          >
            <span>Request Help Now</span>

            <FaArrowRight
              className="h-3.5 w-3.5"
            />
          </a>
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
