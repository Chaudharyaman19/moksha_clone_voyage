"use client";

import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import Image from "next/image";
import { imageOrFallback, textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";
import { FaHandHoldingHeart, FaOm, FaStar } from "react-icons/fa";
import { GiLotusFlower, GiCandleHolder } from "react-icons/gi";
import { BsTelephone } from "react-icons/bs";
import { MdOutlinePeopleAlt, MdHandshake } from "react-icons/md";
import { TbHeartHandshake } from "react-icons/tb";

const ritualCards = [
  {
    src: "/assets/panditservices/ritual-1.png",
    title: "Pre-Ritual Consultation",
  },
  {
    src: "/assets/panditservices/ritual-2.png",
    title: "Antim Sanskar Vidhi",
  },
  {
    src: "/assets/panditservices/ritual-3.png",
    title: "Mukhagni Guidance",
  },
  {
    src: "/assets/panditservices/ritual-4.png",
    title: "Asthi Visarjan",
  },
  {
    src: "/assets/panditservices/ritual-5.png",
    title: "Pind Daan",
  },
  {
    src: "/assets/panditservices/ritual-6.png",
    title: "Tehrvi & Shanti Paath",
  },
];

export default function PriestSupport() {
  const section = useWebsiteSection("pandit-hero");
  const heroImage = imageOrFallback(section?.image, "/assets/panditservices/hero-real.png");
  const title = textOrFallback(section?.title, "Priest Support");
  const subtitle = textOrFallback(section?.subtitle, "For a Dignified Final Journey.");
  const description = textOrFallback(section?.description, "Experienced Pandit Ji's guide your family with compassion, clarity and reverence in every sacred ritual of your loved one's journey.");
  const primaryLabel = textOrFallback(section?.buttonLabel, "Request Priest Support");
  const primaryHref = section?.buttonHref || "/request-help";
  const secondaryLabel = textOrFallback(section?.secondaryButtonLabel, "Donate for Ritual Support");
  const secondaryHref = section?.secondaryButtonHref || "/donation";
  return (
    <div className="service-page min-h-screen bg-[#FAF8F4] font-sans text-[#321A10]">
      <Topbar />
      <Navbar />

      <main className="overflow-hidden pb-4 pt-24 lg:pb-6 lg:pt-24">
        {/* ================= HERO SECTION ================= */}
        <section className="service-banner relative min-h-[500px] w-full overflow-hidden bg-[#FAF8F4]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt={title}
              fill
              priority
              quality={100}
              sizes="100vw"
              className="object-cover object-[67%_center] sm:object-[70%_center] lg:object-right"
            />
          </div>

          {/* Desktop Left Gradient */}
          <div
            className="absolute inset-0 hidden lg:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(250,248,244,0.98) 0%, rgba(250,248,244,0.96) 28%, rgba(250,248,244,0.82) 40%, rgba(250,248,244,0.48) 52%, rgba(250,248,244,0.12) 64%, rgba(250,248,244,0.01) 76%, rgba(250,248,244,0) 100%)",
            }}
          />

          {/* Mobile Overlay */}
          <div
            className="absolute inset-0 lg:hidden"
            style={{
              background:
                "linear-gradient(180deg, rgba(250,248,244,0.62) 0%, rgba(250,248,244,0.78) 52%, rgba(250,248,244,0.96) 100%)",
            }}
          />

          {/* Hero Content */}
          <div className="relative z-10 mx-auto flex min-h-[500px] w-full max-w-7xl items-center px-4 py-[20px] lg:px-0">
            <div className="w-full max-w-[650px]">
              {/* Breadcrumb */}
              <div className="mb-3 flex flex-wrap items-center gap-2 text-[18px] font-medium tracking-wide text-[#321A10]">
                <span className="opacity-70">Moksha Sewa</span>
                <span className="opacity-50">›</span>
                <span className="opacity-70">Our Services</span>
                <span className="opacity-50">›</span>
                <span className="font-semibold text-[#C99A4A]">
                  {title}
                </span>
              </div>

              {/* Tag Line */}
              <div className="mb-[2px] flex items-center gap-2 text-[#C99A4A]">
                <GiLotusFlower className="h-5 w-5 shrink-0" />

                <span className="text-[18px] font-medium tracking-wide">
                  {subtitle}
                </span>
              </div>

              {/* Heading */}
              <h1 className="pb-[20px] pt-[8px] font-serif text-[30px] font-normal leading-[1.1] text-[#321A10]">
                {title}
              </h1>

              {/* Description */}
              <p className="mb-7 max-w-[590px] text-[18px] leading-relaxed text-[#321A10]/90">
                {description}
              </p>

              {/* HERO BUTTONS - EXACT SAME HEIGHT & WIDTH */}
              <div className="flex w-full flex-col gap-3 sm:flex-row">
                <a
                  href={primaryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-[#321A10] px-6 py-3 text-[20px] font-semibold text-[#FAF8F4] shadow-sm transition-all hover:bg-[#4A2E1B] md:px-8"
                >
                  <GiLotusFlower className="h-5 w-5 shrink-0 text-[#C99A4A]" />

                  <span className="whitespace-nowrap">
                    {primaryLabel}
                  </span>
                </a>

                <a
                  href={secondaryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="donate-nav-sparkle relative inline-flex h-[46px] min-w-[210px] items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full border border-[#F4C46A] bg-gradient-to-r from-[#B76B16] via-[#E5A93E] to-[#B76B16] px-6 text-[20px] font-semibold text-white shadow-[0_0_18px_rgba(229,169,62,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(229,169,62,0.72)]"
                >
                  <span className="donate-nav-shine" aria-hidden />

                  <GiCandleHolder className="relative z-10 h-5 w-5 shrink-0" />

                  <span className="relative z-10 whitespace-nowrap">
                    {secondaryLabel}
                  </span>

                  <FaStar
                    className="donate-star donate-star-one"
                    aria-hidden
                  />

                  <FaStar
                    className="donate-star donate-star-two"
                    aria-hidden
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FEATURE CARDS ================= */}
        <section className="mx-auto mb-4 max-w-7xl px-4 lg:px-0">
          <div className="grid grid-cols-1 items-stretch gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {(useWebsiteSection("pandit-highlights")?.items || [
              { title: "Experienced Pandit Ji", description: "Learned and compassionate guidance", image: "/assets/panditservices/feature-pandit.png" },
              { title: "Vedic Guidance", description: "Guidance based on Hindu traditions", image: "/assets/panditservices/feature-vedic.png" },
              { title: "Ritual Planning", description: "Complete ritual planning and coordination", image: "/assets/panditservices/feature-planning.png" },
              { title: "Regional Traditions", description: "Rituals according to family customs", image: "/assets/panditservices/feature-traditions.png" }
            ]).map((item, idx) => (
              <FeatureCard
                key={idx}
                imageSrc={imageOrFallback(item.image, "/assets/panditservices/feature-pandit.png")}
                title={item.title || ""}
                desc={item.description || ""}
              />
            ))}
          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}
        <section className="relative bg-[#FAF8F4] pb-4 pt-2">
          <div className="mx-auto max-w-7xl px-4 lg:px-0">
            <div className="relative mb-6 text-center">
              <h2 className="inline-flex items-center gap-3 py-[20px] font-serif text-[30px] text-[#321A10]">
                <span className="text-[20px] text-[#C99A4A]/80">✹</span>

                {textOrFallback(useWebsiteSection("pandit-how-it-works")?.title, "How It Works")}

                <span className="text-[20px] text-[#C99A4A]/80">✹</span>
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-[15%] right-[15%] top-[36px] hidden border-t-[1.5px] border-dashed border-[#C99A4A]/40 lg:block" />

              <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {(useWebsiteSection("pandit-how-it-works")?.items || [
                  { title: "Call or Request Support", label: "phone" },
                  { title: "Pandit Ji Consultation", label: "team" },
                  { title: "Ritual Arrangement", label: "hands" },
                  { title: "Guidance Through Every Ceremony", label: "hands" }
                ]).map((item, idx) => (
                  <StepItem
                    key={idx}
                    num={(idx + 1).toString()}
                    icon={item.label === "phone" ? <BsTelephone className="h-6 w-6 text-[#321A10]" /> : item.label === "team" ? <MdOutlinePeopleAlt className="h-7 w-7 text-[#321A10]" /> : item.label === "hands" ? <MdHandshake className="h-7 w-7 text-[#321A10]" /> : <GiCandleHolder className="h-7 w-7 text-[#321A10]" />}
                    title={item.title || ""}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= RITUAL MARQUEE ================= */}
        <section className="mx-auto w-full max-w-7xl overflow-hidden px-4 pb-2 pt-4 lg:px-0">
          <SectionHeader title={textOrFallback(useWebsiteSection("pandit-stories")?.title, "Ritual Support at Every Step")} />

          <style>{`
            @keyframes scrollMarquee {
              0% {
                transform: translateX(0);
              }

              100% {
                transform: translateX(-50%);
              }
            }

            .marquee-track {
              display: flex;
              width: max-content;
              animation: scrollMarquee 25s linear infinite;
            }

            .marquee-track:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="relative mt-8 w-full overflow-hidden">
            <div className="marquee-track gap-4 lg:gap-5">
              {[...(useWebsiteSection("pandit-stories")?.items || ritualCards), ...(useWebsiteSection("pandit-stories")?.items || ritualCards)].map((card, idx) => (
                <div
                  key={idx}
                  className="w-[180px] shrink-0 sm:w-[220px]"
                >
                  <SquareImageCard src={imageOrFallback((card as any).image || (card as any).src, "/assets/panditservices/ritual-1.png")} title={card.title || ""} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= PANDIT JI ROLES ================= */}
        <section className="mx-auto mb-2 max-w-7xl px-4 pb-2 pt-0 lg:px-0">
          <SectionHeader title={textOrFallback(useWebsiteSection("pandit-receive")?.title, "Pandit Ji Roles")} />

          <div className="mt-6 grid grid-cols-1 items-stretch gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {(useWebsiteSection("pandit-receive")?.items || [
              { title: "Samagri Guidance", description: "Right samagri for every sacred ritual.", image: "/assets/panditservices/roles-1.png" },
              { title: "Prayer Hall Ceremony", description: "Rituals conducted with peace and reverence.", image: "/assets/panditservices/roles-2.png" },
              { title: "Family Ritual Explanation", description: "Simple guidance at every sacred step.", image: "/assets/panditservices/roles-3.png" },
              { title: "Post-Ritual Support", description: "Guidance for remaining rituals and timelines.", image: "/assets/panditservices/roles-4.png" }
            ]).map((item, idx) => (
              <RoleSquareCard
                key={idx}
                src={imageOrFallback(item.image, "/assets/panditservices/roles-1.png")}
                title={item.title || ""}
                desc={item.description || ""}
              />
            ))}
          </div>
        </section>

        {/* ================= TRUST CARDS ================= */}
        <section className="mx-auto mb-4 mt-2 max-w-7xl px-4 lg:px-0">
          <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-3">
            {(useWebsiteSection("pandit-trust")?.items || [
              { title: "Compassionate Guidance", description: "Care, sensitivity and respect in every moment.", label: "heart" },
              { title: "Authentic Hindu Rituals", description: "Rituals performed according to Shastra and tradition.", label: "om" },
              { title: "Support Beyond Ceremony", description: "Continued spiritual guidance after the ceremony.", label: "handshake" }
            ]).map((item, idx) => (
              <TrustCard
                key={idx}
                icon={
                  item.label === "heart" ? <FaHandHoldingHeart className="h-10 w-10 text-[#C99A4A]" /> :
                  item.label === "om" ? <FaOm className="h-10 w-10 text-[#C99A4A]" /> :
                  <TbHeartHandshake className="h-10 w-10 text-[#C99A4A]" />
                }
                title={item.title || ""}
                desc={item.description || ""}
              />
            ))}
          </div>
        </section>

        {/* ================= FINAL DONATION CTA ================= */}
        <section className="mx-auto max-w-7xl px-4 lg:px-0">
          <div className="flex flex-col items-stretch overflow-hidden rounded-none border border-[#E7D5B8] bg-[#E7D5B8]/30 shadow-sm lg:flex-row">
            {/* Left Image */}
            <div className="relative hidden h-[160px] w-full lg:block lg:h-auto lg:w-1/5">
              <Image
                src={imageOrFallback(useWebsiteSection("pandit-donation")?.image, "/assets/panditservices/hero.png")}
                alt="Decorative brass items"
                fill
                sizes="20vw"
                className="object-cover object-bottom opacity-90"
              />
            </div>

            {/* Center Content */}
            <div className="z-10 flex flex-1 flex-col items-center justify-center bg-gradient-to-r from-[#FAF8F4] via-transparent to-transparent p-6 text-center lg:items-start lg:p-8 lg:text-left">
              <h2 className="max-w-xl py-[20px] font-serif text-[30px] leading-tight text-[#321A10]">
                {textOrFallback(useWebsiteSection("pandit-donation")?.title, "Your Support Helps Families Receive Dignified & Sacred Final Rites")}
              </h2>

              <a
                href={useWebsiteSection("pandit-donation")?.buttonHref || "/donation"}
                target="_blank"
                rel="noopener noreferrer"
                className="donate-nav-sparkle relative inline-flex h-[46px] min-w-[210px] items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full border border-[#F4C46A] bg-gradient-to-r from-[#B76B16] via-[#E5A93E] to-[#B76B16] px-6 text-[20px] font-semibold text-white shadow-[0_0_18px_rgba(229,169,62,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(229,169,62,0.72)]"
              >
                <span className="donate-nav-shine" aria-hidden />

                <GiCandleHolder className="relative z-10 h-5 w-5 shrink-0" />

                <span className="relative z-10 whitespace-nowrap">
                  {textOrFallback(useWebsiteSection("pandit-donation")?.buttonLabel, "Donate for Ritual Support")}
                </span>

                <FaStar
                  className="donate-star donate-star-one"
                  aria-hidden
                />

                <FaStar
                  className="donate-star donate-star-two"
                  aria-hidden
                />
              </a>
            </div>

            {/* Right Side */}
            <div className="flex w-full flex-col items-center justify-center border-t border-[#E7D5B8]/50 bg-[#FAF8F4]/50 p-6 text-center lg:w-1/4 lg:border-l lg:border-t-0">
              <FaHandHoldingHeart className="mb-3 h-10 w-10 text-[#C99A4A]" />

              <p className="max-w-[190px] text-[18px] font-medium leading-relaxed text-[#321A10]">
                {textOrFallback(useWebsiteSection("pandit-donation")?.description, "Every act of kindness becomes a blessing for many.")}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* =========================================================
   COMPONENTS
========================================================= */

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mb-4 flex items-center justify-center gap-4 text-center">
      <GiLotusFlower className="h-5 w-5 rotate-90 text-[#C99A4A] opacity-60" />

      <h2 className="py-[20px] font-serif text-[30px] text-[#321A10]">
        {title}
      </h2>

      <GiLotusFlower className="h-5 w-5 -rotate-90 text-[#C99A4A] opacity-60" />
    </div>
  );
}

function FeatureCard({
  imageSrc,
  title,
  desc,
}: {
  imageSrc: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="group relative aspect-[5/4] h-full min-h-[260px] w-full cursor-pointer overflow-hidden rounded-sm border border-black/10">
      <Image
        src={imageSrc}
        alt={title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black/90 via-black/30 to-black/5 p-5 text-center">
        <h4 className="flex min-h-[69px] items-end justify-center text-[20px] font-semibold leading-[1.15] text-white">
          {title}
        </h4>

        <p className="mt-2 min-h-[44px] text-[18px] leading-snug text-white/90">
          {desc}
        </p>
      </div>
    </div>
  );
}

function StepItem({
  num,
  icon,
  title,
}: {
  num: string;
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="group flex h-full flex-col items-center text-center">
      <div className="relative mb-4">
        <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#E7D5B8]/80 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-all group-hover:shadow-[0_4px_15px_rgba(0,0,0,0.06)]">
          {icon}
        </div>

        <div className="absolute -right-1 -top-1 flex h-[26px] w-[26px] items-center justify-center rounded-full border-2 border-white bg-[#C99A4A] text-[20px] font-semibold text-white">
          {num}
        </div>
      </div>

      <h4 className="mx-auto max-w-[220px] px-2 text-[20px] font-semibold leading-[1.15] text-[#321A10]">
        {title}
      </h4>
    </div>
  );
}

function SquareImageCard({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-none border border-[#E7D5B8]/60 bg-white transition-shadow duration-300 hover:shadow-md">
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={src}
          alt={title}
          fill
          sizes="220px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex min-h-[100px] flex-1 items-center justify-center border-t border-[#E7D5B8]/30 bg-white p-4 text-center">
        <h4 className="text-[20px] font-semibold leading-[1.15] text-[#321A10]">
          {title}
        </h4>
      </div>
    </div>
  );
}

function RoleSquareCard({
  src,
  title,
  desc,
}: {
  src: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-none border border-[#E7D5B8]/60 bg-white transition-shadow duration-300 hover:shadow-md">
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={src}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col border-t border-[#E7D5B8]/30 bg-white p-4 text-center">
        <h4 className="flex min-h-[69px] items-center justify-center text-[20px] font-semibold leading-[1.15] text-[#321A10]">
          {title}
        </h4>

        <p className="mt-1 flex-1 text-[18px] leading-relaxed text-[#321A10]/70">
          {desc}
        </p>
      </div>
    </div>
  );
}

function TrustCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex h-full flex-col items-center gap-5 rounded-none border border-[#E7D5B8] bg-white p-6 text-center lg:flex-row lg:items-start lg:text-left">
      <div className="shrink-0 rounded-full border border-[#E7D5B8]/50 bg-[#FAF8F4] p-3">
        {icon}
      </div>

      <div className="flex h-full flex-1 flex-col">
        <h4 className="text-[20px] font-semibold leading-[1.15] text-[#321A10]">
          {title}
        </h4>

        <p className="mt-1 flex-1 text-[18px] leading-relaxed text-[#321A10]/70">
          {desc}
        </p>
      </div>
    </div>
  );
}
