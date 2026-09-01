"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import { imageOrFallback, itemOrFallback, textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";

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
    image: "/woodrituals/compassionate-support.png",
    icon: <FaUsers className="h-8 w-8" />,
    title: "Compassionate Support",
    description:
      "Families receive caring guidance and respectful support throughout the final journey.",
  },
  {
    image: "/woodrituals/timely-arrangements-new.png",
    icon: <GiLotusFlower className="h-8 w-8" />,
    title: "Timely Arrangements",
    description:
      "Essential ritual materials are coordinated carefully so everything reaches on time.",
  },
  {
    image: "/woodrituals/free-service.png",
    icon: <FaHandHoldingHeart className="h-8 w-8" />,
    title: "Free Service",
    description:
      "Eligible families in need receive essential support without additional financial burden.",
  },
  {
    image: "/woodrituals/with-dignity.png",
    icon: <FaPrayingHands className="h-8 w-8" />,
    title: "With Dignity",
    description:
      "Every arrangement is handled with respect, compassion and dignity for every soul.",
  },
];

const arrangedItems = [
  {
    image: "/woodrituals/cremation-wood.webp",
    icon: <GiWoodPile className="h-9 w-9" />,
    title: "Cremation Wood",
    description:
      "We provide sufficient dry wood required for a complete and respectful cremation ceremony, subject to verification and availability.",
  },
  {
    image: "/woodrituals/shroud-flowers.webp",
    icon: <IoFlower className="h-9 w-9" />,
    title: "Shroud & Flowers",
    description:
      "Pure white shroud cloth, garlands and fresh flowers are arranged carefully to honour the departed soul with dignity and purity.",
  },
  {
    image: "/woodrituals/prayer-items.webp",
    icon: <GiCandleHolder className="h-9 w-9" />,
    title: "Prayer Items",
    description:
      "Ghee, sandalwood, incense, earthen lamps and essential Pooja Samagri are carefully arranged for the final rites and prayers.",
  },
];

export default function WoodRitualItemsPage() {
  const section = useWebsiteSection("funeral-hero");
  const supportSection = useWebsiteSection("funeral-receive");
  const heroImage = imageOrFallback(section?.image, "/woodrituals/hero.webp");
  const heroTitle = textOrFallback(section?.title, "Wood & Ritual Items", 60);
  const heroSubtitle = textOrFallback(section?.subtitle, "Arranged With Deep Respect.", 60);
  const heroDescription = textOrFallback(section?.description, "At Moksha Sewa, we understand the financial and emotional burden of the final rites. We help eligible families coordinate cremation wood, shroud cloth (Kafan), flowers, lamps, and essential prayer items subject to verification and availability.", 2000);
  const heroButtonLabel = textOrFallback(section?.buttonLabel, "Request Wood & Items", 60);
  const heroButtonHref = section?.buttonHref || "/request-help";
  const supportTitle = textOrFallback(supportSection?.title, "What We Arrange", 60);
  const supportItems = (supportSection?.items?.length ? supportSection.items : arrangedItems).slice(0, 3);
  return (
    <div className="service-page min-h-screen bg-[#FBF8F1] font-sans text-[#351D12]">
      <Topbar />
      <Navbar />

      <main className="overflow-hidden pt-24 lg:pt-24">
        <HeroSection image={heroImage} title={heroTitle} subtitle={heroSubtitle} description={heroDescription} buttonLabel={heroButtonLabel} buttonHref={heroButtonHref} />
        <ArrangeSection title={supportTitle} items={supportItems} />
        <ClosingMessage />
      </main>

      <Footer />
    </div>
  );
}

function HeroSection({ image, title, subtitle, description, buttonLabel, buttonHref }: { image: string; title: string; subtitle: string; description: string; buttonLabel: string; buttonHref: string; }) {
  return (
    <section className="service-banner relative min-h-[470px] w-full overflow-hidden lg:min-h-[500px]">
      <div className="absolute inset-y-0 right-0 w-full lg:w-[58%]">
        <Image
          src={image}
          alt={title}
          fill
          priority
          quality={100}
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,248,244,1)_0%,rgba(250,248,244,1)_38%,rgba(250,248,244,0.98)_45%,rgba(250,248,244,0.7)_55%,rgba(250,248,244,0.12)_70%,rgba(250,248,244,0)_100%)]" />

      <div className="relative mx-auto flex min-h-[470px] w-full max-w-7xl items-center px-5 pb-6 pt-4 sm:px-7 lg:min-h-[500px] lg:px-0 lg:pt-4">
        <div className="w-full max-w-[575px]">
          <div className="mb-1 mt-10 flex flex-wrap items-center gap-2 text-[18px] text-[#351D12]/85">
            <span>Moksha Sewa</span>
            <span className="text-[#B67824]">›</span>
            <span>Our Services</span>
            <span className="text-[#B67824]">›</span>
            <span className="text-[#A96619]">
              Wood &amp; Ritual Items
            </span>
          </div>

          <div className="mb-[2px] flex items-center gap-2 text-[#A96619]">
            <GiLotusFlower className="h-5 w-5" />

            <span className="text-[18px]">
              {subtitle}
            </span>
          </div>

          <h2 className="pb-[8px] pt-[8px] font-serif text-[30px] leading-[1.1] text-[#321A10]">
            {title}
          </h2>

          <p className="font-serif text-[30px] leading-tight text-[#A66D2D]">
            {subtitle}
          </p>

          <p className="mt-4 max-w-[560px] text-[18px] leading-relaxed text-[#321A10]/90">
            {description}
          </p>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href="/request-help"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center gap-3 whitespace-nowrap rounded-[7px] bg-[#A66317] px-7 text-[20px] font-medium text-white shadow-[0_8px_18px_rgba(116,68,18,0.14)] transition hover:bg-[#884E10]"
            >
              <FaHandsHelping className="h-5 w-5" />
              {buttonLabel}
            </a>

            <a
              href="tel:+919999999999"
              className="inline-flex min-h-[52px] items-center justify-center gap-3 whitespace-nowrap rounded-[7px] border border-[#A66317] bg-[#FBF8F1]/92 px-7 text-[24px] font-medium text-[#72420F] transition hover:bg-white"
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

function SupportFeatureCard({ image, icon, title, description }: { image: string; icon: ReactNode; title: string; description: string; }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[10px] border border-[#DDBF95] bg-[#FFFEFB] shadow-[0_4px_14px_rgba(87,53,19,0.05)]">
      <div className="relative bg-[#FFFEFB]">
        <div className="relative aspect-[5/3] w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="absolute bottom-0 left-1/2 z-20 grid h-[60px] w-[60px] -translate-x-1/2 translate-y-1/2 place-items-center rounded-full border border-[#D7A96B] bg-[#FFFEFB] text-[#9A5618] shadow-[0_3px_8px_rgba(87,53,19,0.1)]">
          <span className="grid h-full w-full place-items-center leading-none [&>svg]:block [&>svg]:h-6 [&>svg]:w-6">
            {icon}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center px-4 pb-3 pt-8 text-center">
        <h2 className="flex min-h-[34px] items-center justify-center font-serif text-[24px] leading-[1.1] text-[#3C1E10]">
          {title}
        </h2>

        <p className="mt-1 flex-1 text-[17px] leading-[1.4] text-[#4B2F23]/80">
          {description}
        </p>
      </div>
    </article>
  );
}

function ArrangeSection({ title, items }: { title: string; items: { title?: string; description?: string; image?: string }[] }) {
  return (
    <section className="bg-[radial-gradient(circle_at_center,#FFFDF8_0%,#FBF5E8_72%,#F7EEDC_100%)] px-5 py-5 sm:px-7 lg:px-0">
      <div className="mx-auto w-full max-w-7xl">
        <SectionTitle title={title} />

        <div className="mt-5 grid grid-cols-1 items-stretch gap-3 md:grid-cols-3">
          {items.map((item) => (
            <ArrangeCard key={item.title} image={imageOrFallback(item.image, "/woodrituals/cremation-wood.webp")} icon={<GiWoodPile className="h-9 w-9" />} title={item.title || "Item"} description={item.description || ""} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="text-center">
      <h2 className="py-[20px] font-serif text-[30px] leading-none text-[#351D12]">
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
    <article className="grid h-full min-h-[220px] grid-cols-[43%_57%] overflow-hidden rounded-[12px] border border-[#D9BD91] bg-[#FFFEFB]/95 shadow-[0_5px_16px_rgba(83,48,15,0.04)]">
      <div className="relative min-h-[220px]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 43vw, 14vw"
          className="object-cover"
        />
      </div>

      <div className="flex h-full flex-col justify-center px-4 py-3">
        <div className="grid h-[50px] w-[50px] shrink-0 place-items-center rounded-full border border-[#D9BD91] bg-[#FFF9EF] text-[#8B4F18]">
          {icon}
        </div>

        <h3 className="mt-2 min-h-[69px] font-serif text-[20px] font-semibold leading-[1.15] text-[#351D12]">
          {title}
        </h3>

        <p className="mt-1 flex-1 text-[18px] leading-relaxed text-[#422A20]/88">
          {description}
        </p>
      </div>
    </article>
  );
}

function ClosingMessage() {
  const section = useWebsiteSection("funeral-trust");
  const quote = textOrFallback(section?.title, "“We believe that no family should have to worry about the expenses of a final farewell while grieving the loss of their loved one.”", 600);
  const desc = textOrFallback(section?.description, "Our volunteers work tirelessly to ensure that every necessary item reaches the cremation ground on time. You mourn in peace, let us handle the arrangements.", 600);

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(90deg,#F5E7CB_0%,#FFF9EE_18%,#FFF9EE_82%,#F5E7CB_100%)] px-5 py-6 sm:px-7">
      <GiLotusFlower className="pointer-events-none absolute -bottom-16 -left-14 h-52 w-52 rotate-12 text-[#B98B55]/10" />

      <GiLotusFlower className="pointer-events-none absolute -bottom-16 -right-14 h-52 w-52 -rotate-12 text-[#B98B55]/10" />

      <div className="relative mx-auto max-w-5xl text-center">
        <GiLotusFlower className="mx-auto h-8 w-8 text-[#B97827]" />

        <blockquote className="mx-auto max-w-4xl py-[20px] font-serif text-[30px] leading-[1.42] text-[#482414]" dangerouslySetInnerHTML={{ __html: quote.replace(/\n/g, '<br />') }} />

        <p className="mx-auto mt-3 max-w-3xl text-[18px] leading-[1.55] text-[#3D291F]/88">
          {desc}
        </p>
      </div>
    </section>
  );
}
