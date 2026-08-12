"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";

import {
  FaHandHoldingHeart,
  FaHandsHelping,
  FaPhoneAlt,
  FaPrayingHands,
  FaUsers,
} from "react-icons/fa";
import { GiCandleHolder, GiLotusFlower, GiWoodPile } from "react-icons/gi";
import { IoFlower } from "react-icons/io5";

const supportFeatures = [
  {
    image: "/woodrituals/c.webp",
    icon: <FaUsers className="h-8 w-8" />,
    title: "Compassionate Support",
    description: "Families are never alone",
  },
  {
    image: "/woodrituals/timely-arrangements.webp",
    icon: <GiLotusFlower className="h-8 w-8" />,
    title: "Timely Arrangements",
    description: "Everything reaches on time",
  },
  {
    image: "/woodrituals/free-service.webp",
    icon: <FaHandHoldingHeart className="h-8 w-8" />,
    title: "Free Service",
    description: "No cost for families in need",
  },
  {
    image: "/woodrituals/with-dignity.webp",
    icon: <FaPrayingHands className="h-8 w-8" />,
    title: "With Dignity",
    description: "Respect for every soul",
  },
];

const arrangedItems = [
  {
    image: "/woodrituals/cremation-wood.webp",
    icon: <GiWoodPile className="h-9 w-9" />,
    title: "Cremation Wood",
    description:
      "We provide sufficient, dry wood required for a complete and respectful cremation ceremony without any cost.",
  },
  {
    image: "/woodrituals/shroud-flowers.webp",
    icon: <IoFlower className="h-9 w-9" />,
    title: "Shroud & Flowers",
    description:
      "Pure white shroud cloth (Kafan), garlands, and loose flowers are arranged to honor the departed soul with purity.",
  },
  {
    image: "/woodrituals/prayer-items.webp",
    icon: <GiCandleHolder className="h-9 w-9" />,
    title: "Prayer Items",
    description:
      "Ghee, sandalwood, incense, earthen lamps (Diyas), and all necessary Pooja Samagri are carefully put together.",
  },
];

export default function WoodRitualItemsPage() {
  return (
    <div className="min-h-screen bg-[#FBF8F1] font-sans text-[#351D12]">
      <Topbar />
      <Navbar />

      <main className="overflow-hidden">
        <HeroSection />
        <SupportFeatures />
        <ArrangeSection />
        <ClosingMessage />
      </main>

      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[470px] w-full overflow-hidden lg:min-h-[500px]">
      <div className="absolute inset-y-0 right-0 w-full lg:w-[58%]">
        <Image
          src="/woodrituals/hero.webp"
          alt="Cremation wood, white shroud cloth, flowers and prayer items by a river"
          fill
          priority
          quality={100}
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,248,244,1)_0%,rgba(250,248,244,1)_38%,rgba(250,248,244,0.98)_45%,rgba(250,248,244,0.7)_55%,rgba(250,248,244,0.12)_70%,rgba(250,248,244,0)_100%)]" />

      <div className="relative mx-auto flex min-h-[470px] w-full max-w-7xl items-center px-5 pb-6 pt-20 sm:px-7 lg:min-h-[500px] lg:px-0 lg:pt-20">
        <div className="w-full max-w-[575px]">
          <div className="mb-1 flex flex-wrap items-center gap-2 text-[14px] text-[#351D12]/85 mt-10">
            <span>Moksha Sewa</span>
            <span className="text-[#B67824]">›</span>
            <span>Our Services</span>
            <span className="text-[#B67824]">›</span>
            <span className="text-[#A96619]">
              Wood &amp; Ritual Items
            </span>
          </div>

          <div className="mb-2 flex items-center gap-2 text-[#A96619]">
            <GiLotusFlower className="h-5 w-5" />

            <span className="text-[15px]">
              Guided by Dharma. Supported by Compassion.
            </span>
          </div>

          <h1 className="font-serif text-[38px] leading-[1.1] text-[#321A10] sm:text-[46px] lg:text-[52px]">
            Wood &amp; Ritual Items
          </h1>

          <p className="mt-1 font-serif text-[28px]  leading-tight text-[#A66D2D] md:text-[34px]">
            Arranged With Deep Respect.
          </p>

          <p className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-[#321A10]/90 sm:text-[16px]">
            At Moksha Sewa, we understand the financial and emotional burden of
            the final rites. We arrange cremation wood, shroud cloth (Kafan),
            pure flowers, lamps, and all essential prayer items completely free
            for families in need.
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href="/request-help"
              className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-[7px] bg-[#A66317] px-7 text-[15px] font-medium text-white shadow-[0_8px_18px_rgba(116,68,18,0.14)] transition hover:bg-[#884E10]"
            >
              <FaHandsHelping className="h-5 w-5" />
              Request Wood &amp; Items
            </a>

            <a
              href="tel:+919999999999"
              className="inline-flex min-h-[52px] items-center justify-center gap-3 rounded-[7px] border border-[#A66317] bg-[#FBF8F1]/92 px-7 text-[15px] font-medium text-[#72420F] transition hover:bg-white"
            >
              <FaPhoneAlt className="h-4 w-4" />
              24x7 Helpline
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SupportFeatures() {
  return (
    <section className="border-y border-[#EADBC3] bg-[#FCFAF5] py-3">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-3 px-5 sm:grid-cols-2 sm:px-7 lg:grid-cols-4 lg:px-0">
        {supportFeatures.map((item) => (
          <SupportFeatureCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

function SupportFeatureCard({
  image,
  icon,
  title,
  description,
}: {
  image: string;
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <article className="overflow-hidden rounded-[10px] border border-[#DDBF95] bg-[#FFFEFB] shadow-[0_4px_14px_rgba(87,53,19,0.05)]">
      <div className="relative">
        <div className="relative h-[190px] w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top"
          />

          {/* Hide baked icon area */}
          <div className="absolute inset-x-0 bottom-0 z-10 h-[34px] bg-[#FFFEFB]" />
        </div>

        {/* Center icon */}
        <div className="absolute bottom-0 left-1/2 z-20 grid h-[60px] w-[60px] -translate-x-1/2 translate-y-1/2 place-items-center rounded-full border border-[#D7A96B] bg-[#FFFEFB] text-[#9A5618] shadow-[0_3px_8px_rgba(87,53,19,0.1)]">
          <span className="grid h-full w-full place-items-center leading-none [&>svg]:block [&>svg]:h-6 [&>svg]:w-6">
            {icon}
          </span>
        </div>
      </div>

      <div className="flex min-h-[102px] flex-col items-center justify-center px-4 pb-3 pt-8 text-center">
        <h2 className="font-serif text-[15px] leading-[1.3] text-[#3C1E10]">
          {title}
        </h2>

        <p className="mt-[3px] text-[14px] leading-snug text-[#4B2F23]/80">
          {description}
        </p>
      </div>
    </article>
  );
}
function ArrangeSection() {
  return (
    <section className="bg-[radial-gradient(circle_at_center,#FFFDF8_0%,#FBF5E8_72%,#F7EEDC_100%)] px-5 py-5 sm:px-7 lg:px-0">
      <div className="mx-auto w-full max-w-7xl">
        <SectionTitle title="What We Arrange" />

        <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-3">
          {arrangedItems.map((item) => (
            <ArrangeCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="text-center">
      <h2 className="font-serif text-[28px] leading-none text-[#351D12] md:text-[34px]">
        {title}
      </h2>

      <div className="mt-3 flex items-center justify-center gap-3 text-[#B67625]">
        <span className="h-px w-24 bg-[#B67625]" />
        <GiLotusFlower className="h-5 w-5" />
        <span className="h-px w-24 bg-[#B67625]" />
      </div>
    </div>
  );
}

function ArrangeCard({
  image,
  icon,
  title,
  description,
}: {
  image: string;
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <article className="grid min-h-[220px] grid-cols-[43%_57%] overflow-hidden rounded-[12px] border border-[#D9BD91] bg-[#FFFEFB]/95 shadow-[0_5px_16px_rgba(83,48,15,0.04)]">
      <div className="relative min-h-[220px]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col justify-center px-4 py-3">
        <div className="grid h-[50px] w-[50px] place-items-center rounded-full border border-[#D9BD91] bg-[#FFF9EF] text-[#8B4F18]">
          {icon}
        </div>

        <h3 className="mt-2 font-serif text-[15px] leading-tight text-[#351D12]">
          {title}
        </h3>

        <p className="mt-1 text-[14px] leading-snug text-[#422A20]/88">
          {description}
        </p>
      </div>
    </article>
  );
}

function ClosingMessage() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(90deg,#F5E7CB_0%,#FFF9EE_18%,#FFF9EE_82%,#F5E7CB_100%)] px-5 py-6 sm:px-7">
      <GiLotusFlower className="pointer-events-none absolute -bottom-16 -left-14 h-52 w-52 rotate-12 text-[#B98B55]/10" />

      <GiLotusFlower className="pointer-events-none absolute -bottom-16 -right-14 h-52 w-52 -rotate-12 text-[#B98B55]/10" />

      <div className="relative mx-auto max-w-5xl text-center">
        <GiLotusFlower className="mx-auto h-8 w-8 text-[#B97827]" />

        <blockquote className="mx-auto mt-3 max-w-4xl font-serif text-[24px]  leading-[1.42] text-[#482414] sm:text-[28px]">
          “We believe that no family should have to worry about the expenses of a
          final farewell while grieving the loss of their loved one.”
        </blockquote>

        <p className="mx-auto mt-3 max-w-3xl text-[15px] leading-[1.55] text-[#3D291F]/88">
          Our volunteers work tirelessly to ensure that every necessary item
          reaches the cremation ground on time. You mourn in peace, let us handle
          the arrangements.
        </p>
      </div>
    </section>
  );
}
