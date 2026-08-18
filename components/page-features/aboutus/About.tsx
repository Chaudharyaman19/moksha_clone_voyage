import React from "react";
import Image from "next/image";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import AboutMokshaSewa from "./AboutMokshaSewa";
import AboutNamoGangeTrust from "./AboutNamoGangeTrust";
import FoundersVision from "./FoundersVision";
import BoardMembers from "./BoardMembers";
import OurInitiatives from "./OurInitiatives";
import AboutHeroSlider from "./AboutHeroSlider";
import WhoWeAre from "./WhoWeAre";
import {
  FaAmbulance,
  FaArrowRight,
  FaCertificate,
  FaClipboardList,
  FaRegClock,
  FaFire,
  FaHandHoldingHeart,
  FaHandshake,
  FaHome,
  FaMapMarkerAlt,
  FaComment,
  FaPhoneAlt,
  FaShieldAlt,
  FaShoppingBag,
  FaTruck,
  FaUserAlt,
  FaUsers,
} from "react-icons/fa";

const templeTall =
  "polygon(50% 0%, 78% 5%, 100% 13%, 100% 100%, 0% 100%, 0% 13%, 22% 5%)";

const templeMed =
  "polygon(50% 0%, 78% 6%, 100% 16%, 100% 100%, 0% 100%, 0% 16%, 22% 6%)";

/* Kalash finial — the small gold urn-dot that sits on a mandir peak */
function Kalash({ size = "md" }) {
  const s = size === "sm" ? "h-1.5 w-1.5" : "h-2 w-2";

  return (
    <span className="pointer-events-none absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
      <span
        className={`block ${s} rounded-full border border-[#8B6A3E] bg-[#D9B681]`}
      />
    </span>
  );
}

const stats = [
  {
    icon: FaRegClock,
    value: "24/7",
    title: "Sewa Support",
    text: "365 Days a Year",
  },
  {
    icon: FaMapMarkerAlt,
    value: "Delhi NCR",
    title: "Launch Region",
    text: "Expanding Progressively",
  },
  {
    icon: FaUsers,
    value: "Verified",
    title: "Case Support",
    text: "Eligibility Based",
  },
  {
    icon: FaShieldAlt,
    value: "Legal",
    title: "Formalities First",
    text: "Authority Clearance",
  },
];

const careServices = [
  {
    icon: FaAmbulance,
    title: "Transport Coordination",
    text: "Case-based ambulance and hearse-van coordination, subject to location, verification and availability.",
    image: "/assets/ambulance.avif",
  },
  {
    icon: FaTruck,
    title: "Hearse Support",
    text: "Respectful final-journey transport coordination for eligible families and authorised cases.",
    image: "/assets/about-optimized/hearse-van.webp",
  },
  {
    icon: FaShoppingBag,
    title: "Ritual Materials",
    text: "Essential ritual material assistance such as wood, shroud cloth, flowers and basic items.",
    image: "/assets/about-optimized/samagri.webp",
  },
  {
    icon: FaUserAlt,
    title: "Ritual Guidance",
    text: "Priest and ritual guidance coordination according to local customs and availability.",
    image: "/assets/about-optimized/pandit-ji.webp",
  },
  {
    icon: FaHome,
    title: "Family Guidance",
    text: "Practical guidance for families navigating immediate final-rites requirements.",
    image: "/assets/about-optimized/prayer-hall.webp",
  },
  {
    icon: FaFire,
    title: "Cremation Support",
    text: "Cremation-ground coordination after required case verification and local formalities.",
    image: "/assets/about-optimized/cremation-ritual.webp",
  },
  {
    icon: FaUsers,
    title: "Relief Support",
    text: "Food, water and basic relief support where verified need and availability permit.",
    image: "/assets/about-optimized/tehrvi-feast.webp",
  },
  {
    icon: FaHandshake,
    title: "Case Coordination",
    text: "Compassionate step-by-step coordination so families are not left alone in crisis.",
    image: "/assets/about-optimized/family-support.webp",
  },
];

const reasons = [
  {
    icon: FaCertificate,
    title: "Mission-Led Team",
    text: "Compassionate case coordination",
  },
  {
    icon: FaShieldAlt,
    title: "Verified Support",
    text: "Eligibility and formalities first",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Delhi NCR Launch",
    text: "Expanding progressively",
  },
  {
    icon: FaPhoneAlt,
    title: "24/7 Availability",
    text: "A caring team always within reach",
  },
  {
    icon: FaHandHoldingHeart,
    title: "Dignity & Respect",
    text: "Every ritual handled with utmost care",
  },
];

const processSteps = [
  {
    icon: FaPhoneAlt,
    title: "Request Sewa Help",
    text: "Reach out anytime through the helpline.",
  },
  {
    icon: FaComment,
    title: "Share Case Details",
    text: "Tell us the situation, location and urgent need.",
  },
  {
    icon: FaClipboardList,
    title: "Verification",
    text: "Our team reviews eligibility and formalities.",
  },
  {
    icon: FaFire,
    title: "Case Coordination",
    text: "Approved support is coordinated with dignity.",
  },
  {
    icon: FaHandshake,
    title: "Family Support",
    text: "We guide the family through the process.",
  },
];

const locations = [
  {
    name: "Delhi",
    image: "/assets/about-reference/gaya.png",
  },
  {
    name: "Noida",
    image: "/assets/about-reference/varanasi.png",
  },
  {
    name: "Ghaziabad",
    image: "/assets/about-reference/haridwar.png",
  },
  {
    name: "Gurugram",
    image: "/assets/about-reference/rishikesh.png",
  },
  {
    name: "Faridabad",
    image: "/assets/about-reference/nasik.png",
  },
];

const aboutImages = {
  hero: "/assets/about-optimized/about-hero-new.webp",
  storyMain: "/assets/about-reference/story-main.png",
  storyRitualItems: "/assets/about-reference/story-ritual-items.png",
  storyTemple: "/assets/about-reference/story-ghat-temple.png",
  storyEvening: "/assets/about-reference/story-evening-ghat.png",
  promiseMain: "/assets/about-optimized/promise-1.webp",
  promiseSupport: "/assets/about-optimized/promise-2.webp",
  promiseCare: "/assets/about-optimized/promise-3.webp",
  indiaMap: "/assets/about-reference/india-map.png",
};

export default function About() {
  return (
    <div className="overflow-x-clip bg-[#FBF8F3] text-[#2C1810]">
      <Topbar />

      <Navbar />

      <main>
        {/* ============ HERO SLIDER — new banner (1) + previous banner (2) ============ */}

        <AboutHeroSlider />

        {/* ============ STATS — inverted dark bar with gold numbers ============ */}

        <section className="w-full border-b border-[#73532F] bg-gradient-to-r from-[#8B6A3E] via-[#9C794C] to-[#8B6A3E] py-0.5 shadow-md md:py-1">
          <div className="mx-auto grid max-w-[1600px] grid-cols-2 md:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.title}
                  className={`group/stat flex items-center justify-center gap-2 px-2 py-0.5 md:gap-3 md:px-4 md:py-1.5 ${index > 0 ? "md:border-l md:border-white/20" : ""
                    } ${index > 1
                      ? "border-t border-white/20 md:border-t-0"
                      : ""
                    }`}
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)] transition-transform duration-300 group-hover/stat:scale-110">
                    <Icon className="h-4 w-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]" />
                  </div>

                  <div className="min-w-0 text-left">
                    <div
                      className="whitespace-nowrap text-[17px] font-medium leading-none text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)] lg:text-[19px]"
                      style={{
                        fontFamily: "Georgia, 'Times New Roman', serif",
                      }}
                    >
                      {stat.value}
                    </div>

                    <div className="mt-1 whitespace-nowrap text-[16px] font-medium uppercase tracking-[0.08em] text-white/90 lg:text-[16px]">
                      {stat.title}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ============ WHO WE ARE ============ */}

        <WhoWeAre />

        {/* ============ ABOUT MOKSHA SEWA ============ */}

        <AboutMokshaSewa />

        {/* ============ NAMO GANGE TRUST ============ */}

        <AboutNamoGangeTrust />

        {/* ============ FOUNDER'S VISION ============ */}

        <FoundersVision />

        {/* ============ BOARD MEMBERS ============ */}

        <BoardMembers />

        {/* ============ WHAT WE TAKE CARE OF ============ */}

        <section className="bg-[#FBF8F3] pb-0 pt-1 md:pt-2 lg:pb-0 lg:pt-4">
          <div className="mx-auto w-full max-w-7xl px-4">
            <div className="mb-2 flex flex-col items-center text-center">
              <div className="mb-2 inline-flex items-center space-x-3">
                <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#8B6A3E]" />

                <span className="text-[16px] font-semibold uppercase tracking-[0.3em] text-[#8B6A3E]">
                  What Support We Coordinate
                </span>

                <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#8B6A3E]" />
              </div>

              <h2
                className="text-3xl font-normal leading-tight text-[#2C1810] sm:text-4xl"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                }}
              >
                Case-Based Support
              </h2>
            </div>

            <div className="mx-auto mt-0 w-full">
              <div className="grid grid-cols-1 gap-0.5 pb-1 pt-0 sm:grid-cols-2 sm:gap-1 md:grid-cols-3 md:gap-0.5 lg:grid-cols-4 lg:gap-1">
                {careServices.map((service) => {
                  const Icon = service.icon;

                  return (
                    <div
                      key={service.title}
                      className="group relative flex h-64 w-full flex-col justify-end overflow-hidden rounded-none border border-[#E9DDCD]/40 bg-[#2C1810] shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(139,106,62,0.2)]"
                    >
                      {/* Full Background Image */}

                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 320px"
                        className="object-cover opacity-90 transition-all duration-700 group-hover:scale-110 group-hover:opacity-40 group-hover:blur-[2px]"
                      />

                      {/* Gradients */}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      {/* Content Overlay */}

                      <div className="relative z-10 flex flex-col justify-end p-5 transition-transform duration-500">
                        <div className="flex items-center justify-between">
                          <h3 className="font-serif text-[20px] font-medium text-white drop-shadow-sm transition-transform duration-500 group-hover:-translate-y-1">
                            {service.title}
                          </h3>

                          <Icon className="h-6 w-6 text-[#D9B681] opacity-90 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 group-hover:text-white" />
                        </div>

                        <div className="mt-2 h-[2px] w-8 bg-[#D9B681] transition-all duration-500 group-hover:w-16" />

                        <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 group-hover:mt-4 group-hover:grid-rows-[1fr] group-hover:opacity-100">
                          <div className="overflow-hidden">
                            <p className="text-[16px] leading-relaxed text-white/90 drop-shadow-sm">
                              {service.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ============ OUR PRESENCE — mandir gateway city cards ============ */}

        <section className="pb-0.5 pt-0 md:pb-1 lg:pb-1 lg:pt-0">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-0">
            <div className="relative overflow-hidden rounded-2xl border border-[#E6D8C5] bg-[#F6EFE6] p-3 sm:p-4 md:p-4 lg:p-6">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-[#C9A574]/20" />

              <div className="pointer-events-none absolute -bottom-20 -left-16 h-52 w-52 rounded-full border border-[#C9A574]/15" />

              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <div className="text-[16px] font-semibold uppercase tracking-[0.22em] text-[#8B6A3E]">
                    Our Presence
                  </div>

                  <h2 className="mt-1 font-serif text-2xl text-[#2C1810] sm:text-3xl">
                    Launching in{" "}
                    <span className="text-[#8B6A3E]">Delhi NCR</span>
                  </h2>
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#DECBAC] bg-white px-3 py-1 text-[16px] font-semibold text-[#6A4F32]">
                  <FaMapMarkerAlt className="h-3 w-3 text-[#8B6A3E]" />

                  Expanding Progressively
                </span>
              </div>

              <div className="mt-1 grid grid-cols-2 gap-2 pt-1 sm:grid-cols-3 lg:grid-cols-6">
                {locations.map((location) => (
                  <div
                    key={location.name}
                    className="group relative aspect-[3/4] transition-transform duration-300 hover:-translate-y-1 [filter:drop-shadow(0_6px_14px_rgba(70,47,31,0.12))] hover:[filter:drop-shadow(0_14px_24px_rgba(70,47,31,0.2))]"
                  >
                    <Kalash size="sm" />

                    <div
                      className="absolute inset-0 rounded-b-xl bg-white"
                      style={{ clipPath: templeMed }}
                    />

                    <div
                      className="absolute inset-[3px] overflow-hidden rounded-b-xl"
                      style={{ clipPath: templeMed }}
                    >
                      <Image
                        src={location.image}
                        alt={`${location.name} Moksha Sewa location`}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 210px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/80 via-[#2C1810]/10 to-transparent" />

                      <div className="absolute inset-x-0 bottom-0 p-3 text-center">
                        <p className="font-serif text-base text-white">
                          {location.name}
                        </p>

                        <span className="mx-auto mt-1 block h-px w-6 bg-[#D9B681] transition-all duration-300 group-hover:w-10" />
                      </div>
                    </div>
                  </div>
                ))}

                <div className="group relative aspect-[3/4] cursor-default transition-transform duration-300 hover:-translate-y-1 [filter:drop-shadow(0_6px_14px_rgba(70,47,31,0.12))] hover:[filter:drop-shadow(0_14px_24px_rgba(70,47,31,0.2))]">
                  <Kalash size="sm" />

                  <div
                    className="absolute inset-0 rounded-b-xl bg-white"
                    style={{ clipPath: templeMed }}
                  />

                  <div
                    className="absolute inset-[3px] overflow-hidden rounded-b-xl"
                    style={{ clipPath: templeMed }}
                  >
                    <Image
                      src="/assets/about-reference/more_cities.png"
                      alt="More Moksha Sewa locations"
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 210px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-b from-[#9A7445]/60 to-[#2C1810]/80" />

                    <div className="absolute inset-0 flex flex-col items-center justify-center px-3 text-center text-white">
                      <div className="font-serif text-4xl transition-transform duration-300 group-hover:scale-110">
                        +9
                      </div>

                      <div className="mt-1 text-[16px] uppercase tracking-[0.14em] text-white/90">
                        More Areas
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-1 text-center text-[16px] text-[#746154]">
                Launching in Delhi NCR with careful, progressive expansion.
              </p>
            </div>
          </div>
        </section>

        {/* ============ WHY CHOOSE US — dark glass cards ============ */}

        <section className="relative overflow-hidden bg-[#3B2B21] py-2 md:py-2.5 lg:py-4">
          <div className="absolute -left-20 top-0 h-64 w-64 rounded-full border border-[#C9A574]/10" />

          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full border border-[#C9A574]/10" />

          <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C9A574]/35 to-transparent" />

          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-3 px-0 md:gap-4 lg:grid-cols-[0.72fr_1.78fr] lg:gap-5">
            <div className="text-white">
              <div className="text-[16px] font-semibold uppercase tracking-[0.22em] text-[#D9B681]">
                Why This Mission
              </div>

              <h2 className="mt-1 font-serif text-3xl leading-tight sm:text-4xl">
                Here for You,{" "}
                <span className="text-[#D9B681]">Always</span>
              </h2>

              <div className="mt-1 h-[2px] w-10 bg-[#D9B681]" />

              <p className="mt-1 max-w-sm text-[16px] leading-6 text-white/75">
                We bring verified, compassionate and legally careful support
                to families and authorised unclaimed cases.
              </p>

              <a
                href="/contact"
                className="group mt-1 inline-flex items-center gap-2 rounded-md bg-[#D9B681] px-4 py-2 text-[16px] font-semibold text-[#3B2B21] transition hover:bg-[#E8D2AC]"
              >
                Know More

                <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;

                return (
                  <div
                    key={reason.title}
                    className="group relative h-full overflow-hidden rounded-xl border border-white/15 bg-white/[0.05] px-3 py-3 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D9B681]/60 hover:bg-white/[0.09] sm:px-4 sm:py-4"
                  >
                    <span className="absolute right-2 top-1.5 font-serif text-lg text-[#D9B681]/25">
                      0{index + 1}
                    </span>

                    <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-[#D9B681]/50 text-[#D9B681] transition-colors duration-300 group-hover:bg-[#D9B681] group-hover:text-[#3B2B21]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-1 font-serif text-base leading-tight text-white">
                      {reason.title}
                    </h3>

                    <p className="mt-1 text-[16px] leading-4 text-white/60">
                      {reason.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ OUR PROCESS — zigzag journey ============ */}

        <section className="bg-[#FBF8F3] py-3 md:py-4 lg:py-6">
          <div className="mx-auto w-full max-w-7xl px-0">
            <div className="mb-1 flex items-center justify-center gap-3 text-[16px] font-semibold uppercase tracking-[0.24em] text-[#8B6A3E]">
              <span className="h-px w-8 bg-[#C9A574]" />

              <span>Our Process — The Case Journey</span>

              <span className="h-px w-8 bg-[#C9A574]" />
            </div>

            <div className="relative grid gap-2 md:grid-cols-5 md:gap-1.5">
              <div className="absolute left-[10%] right-[10%] top-10 hidden border-t-2 border-dashed border-[#D9C4A0] md:block" />

              {processSteps.map((step, index) => {
                const Icon = step.icon;

                const isLifted = index % 2 === 0;

                return (
                  <div
                    key={step.title}
                    className={`group relative h-full text-center transition-transform duration-300 ${isLifted ? "" : "md:translate-y-6"
                      }`}
                  >
                    <div className="relative z-10 mx-auto h-[72px] w-[72px]">
                      <div className="absolute inset-0 rounded-full border border-dashed border-[#C9A574]/60 transition-transform duration-500 group-hover:rotate-45" />

                      <div className="absolute inset-2 flex items-center justify-center rounded-full bg-[#8B6A3E] text-white shadow-md transition-colors duration-300 group-hover:bg-[#6F4E2F]">
                        <Icon className="h-5 w-5" />
                      </div>

                      <span className="absolute -right-0.5 -top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#2C1810] font-serif text-[16px] text-[#D9B681] ring-2 ring-[#FBF8F3]">
                        {index + 1}
                      </span>
                    </div>

                    <h3 className="mt-1 font-serif text-base text-[#2C1810]">
                      {step.title}
                    </h3>

                    <p className="mx-auto mt-1 max-w-[175px] text-[16px] leading-4 text-[#6A584B]">
                      {step.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ SACRED PROMISE — dark promise card + mandir imagery ============ */}

        <section className="relative overflow-hidden bg-[#F2E9DD] py-2 md:py-2.5 lg:py-4">
          <div className="absolute -left-28 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-[#C9A574]/20" />

          <div className="absolute -right-24 top-10 h-64 w-64 rounded-full bg-[#8B6A3E]/5 blur-3xl" />

          <div className="relative mx-auto grid w-full max-w-7xl items-stretch gap-2 px-0 md:gap-2.5 lg:grid-cols-[1.08fr_0.92fr] lg:gap-4">
            <div className="grid h-[320px] grid-cols-[1.35fr_0.85fr] grid-rows-2 gap-1.5 pt-2 sm:h-[380px] lg:h-full lg:min-h-[470px]">
              <div className="group relative row-span-2 [filter:drop-shadow(0_16px_30px_rgba(70,47,31,0.2))]">
                <Kalash />

                <div
                  className="absolute inset-0 rounded-b-[22px] bg-white"
                  style={{ clipPath: templeTall }}
                />

                <div
                  className="absolute inset-[3px] overflow-hidden rounded-b-[22px]"
                  style={{ clipPath: templeTall }}
                >
                  <Image
                    src={aboutImages.promiseMain}
                    alt="Sacred riverside ghat illuminated in golden light"
                    fill
                    sizes="(max-width: 1024px) 62vw, 460px"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/45 via-transparent to-transparent" />

                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/25 bg-black/25 px-3 py-1 text-[16px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                    Sacred Care
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-[18px] border-[3px] border-white shadow-sm ring-1 ring-[#E4D5BE]">
                <Image
                  src={aboutImages.promiseSupport}
                  alt="Traditional ritual samagri arranged with care"
                  fill
                  sizes="(max-width: 1024px) 35vw, 260px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="group relative overflow-hidden rounded-[18px] border-[3px] border-white shadow-sm ring-1 ring-[#E4D5BE]">
                <Image
                  src={aboutImages.promiseCare}
                  alt="Traditional rituals performed with devotion"
                  fill
                  sizes="(max-width: 1024px) 35vw, 260px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-[22px] bg-gradient-to-b from-[#3B2B21] to-[#2C1810] p-5 text-white shadow-[0_18px_48px_rgba(44,24,16,0.3)] sm:p-6">
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-[#C9A574]/15" />

              <span className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-[#C9A574] via-[#D9B681] to-[#C9A574]" />

              <div className="flex items-center gap-2 text-[16px] font-semibold uppercase tracking-[0.22em] text-[#D9B681]">
                <span>Our Sacred Promise</span>

                <span className="h-px w-8 bg-[#C9A574]" />
              </div>

              <h2 className="mt-1.5 max-w-[500px] font-serif text-[28px] leading-[1.08] sm:text-[34px]">
                Every Farewell Deserves{" "}
                <span className="text-[#D9B681]">
                  Dignity, Peace & Devotion
                </span>
              </h2>

              <p className="mt-1 text-[16px] leading-6 text-white/70">
                From the first call to verified support, Moksha Sewa remains
                beside eligible families with calm coordination, respectful
                guidance and legal-formality awareness.
              </p>

              <div className="mt-1 space-y-2">
                {[
                  {
                    icon: FaHandHoldingHeart,
                    title: "Compassionate Guidance",
                    text: "A patient team that listens and supports the family.",
                  },
                  {
                    icon: FaShieldAlt,
                    title: "Trusted Arrangements",
                    text: "Verified support, clear details and no confusion.",
                  },
                  {
                    icon: FaRegClock,
                    title: "Support When It Matters",
                    text: "Available day and night for urgent assistance.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2.5 transition-all duration-300 hover:border-[#D9B681]/50 hover:bg-white/[0.09]"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#C9A574] text-[#2C1810] transition-transform duration-300 group-hover:scale-105">
                        <Icon className="h-4 w-4" />
                      </div>

                      <div className="min-w-0">
                        <h3 className="font-serif text-[16px] leading-5 text-white">
                          {item.title}
                        </h3>

                        <p className="mt-0.5 text-[16px] leading-4 text-white/60">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <a
                href="/contact"
                className="group mt-1 inline-flex w-fit items-center gap-2 rounded-lg bg-[#D9B681] px-4 py-2.5 text-[16px] font-semibold text-[#2C1810] shadow-md transition duration-300 hover:bg-[#E8D2AC] hover:shadow-lg"
              >
                Speak With Our Sewa Team

                <FaArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </section>

        {/* ============ SEWA NETWORK — INDIA MAP IMAGE ============ */}

        <section className="relative overflow-hidden bg-[#FBF8F3] py-3 md:py-4 lg:py-16">
          <div className="pointer-events-none absolute -right-24 top-8 h-72 w-72 rounded-full border border-[#C9A574]/15" />

          <div className="pointer-events-none absolute -left-20 bottom-8 h-64 w-64 rounded-full border border-[#C9A574]/10" />

          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-3 px-0 md:gap-4 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
            <div>
              <div className="flex items-center gap-2 text-[16px] font-semibold uppercase tracking-[0.22em] text-[#8B6A3E]">
                <span>Launch Region</span>

                <span className="h-px w-7 bg-[#C9A574]" />
              </div>

              <h2 className="mt-1 max-w-[420px] font-serif text-3xl leading-[1.08] text-[#2C1810] sm:text-4xl">
                Delhi NCR,{" "}
                <span className="text-[#8B6A3E]">
                  Progressive Expansion
                </span>
              </h2>

              <div className="mt-1 h-[2px] w-10 bg-[#8B6A3E]" />

              <p className="mt-1 max-w-[460px] text-[16px] leading-6 text-[#5F4A3D]">
                Moksha Sewa is launching with a Delhi NCR focus, building
                verified local coordination before expanding to additional
                regions.
              </p>

              <div className="mt-1 flex flex-wrap gap-2">
                {locations.map((location) => (
                  <span
                    key={location.name}
                    className="inline-flex items-center gap-2 rounded-full border border-[#E4D5BE] bg-white px-3 py-1.5 text-[16px] font-semibold text-[#5F4630] shadow-sm"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C9A574] opacity-70" />

                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8B6A3E]" />
                    </span>

                    {location.name}
                  </span>
                ))}

                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#8B6A3E] px-3 py-1.5 text-[16px] font-semibold text-white shadow-sm">
                  More Areas Soon
                </span>
              </div>

              <div className="mt-1 flex items-center gap-3 rounded-2xl border border-[#E6D6BF] bg-white px-4 py-3 shadow-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#8B6A3E] text-white">
                  <FaPhoneAlt className="h-4 w-4" />
                </span>

                <p className="text-[16px] leading-4 text-[#5F4A3D]">
                  <span className="font-serif text-[16px] text-[#8B6A3E]">
                    Ek call, verified guidance.
                  </span>

                  <br />

                  Our helpline guides eligible cases through the next step.
                </p>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[640px] lg:max-w-[700px]">
              <div className="absolute right-2 top-2 z-30 inline-flex items-center gap-1.5 rounded-full border border-[#DECBAC] bg-white/95 px-3 py-1.5 text-[16px] font-semibold text-[#6A4F32] shadow-md backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
                </span>

                Helpline Live · 24/7
              </div>

              <div className="relative mx-auto h-[200px] w-full max-w-[580px] sm:h-[260px] lg:h-[320px] lg:max-w-[640px]">
                <div className="pointer-events-none absolute bottom-0 left-1/2 h-8 w-[70%] -translate-x-1/2 rounded-full bg-[#4A3421]/20 blur-xl" />

                <Image
                  src={aboutImages.indiaMap}
                  alt="Map of India showing connected Moksha Sewa cities"
                  fill
                  sizes="(max-width: 1024px) 90vw, 640px"
                  className="origin-center scale-110 object-contain drop-shadow-[0_14px_12px_rgba(74,52,33,0.24)] sm:scale-125 lg:scale-[1.3]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ============ Our Namo Gange Initiatives ============ */}

        <div className="border-y-2 border-[#C9A574]">
          <OurInitiatives />
        </div>

        {/* ============ CTA STRIP — extra thin, benefits moved to phone side ============ */}

        <Footer />
      </main>
    </div>
  );
}