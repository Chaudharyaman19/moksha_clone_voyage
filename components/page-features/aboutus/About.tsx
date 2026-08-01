"use client";

import React from "react";
import Image from "next/image";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import {
  Ambulance,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardList,
  Clock3,
  Flame,
  HandHeart,
  HeartHandshake,
  Home,
  MapPin,
  MessageCircle,
  PhoneCall,
  Quote,
  ShieldCheck,
  ShoppingBag,
  Star,
  Truck,
  UserRound,
  UsersRound,
} from "lucide-react";

/*
  TEMPLE (SHIKHARA) SHAPES — pointed mandir peaks, not domes.
  clip-path polygons: peak at top-center, angled shoulders, straight sides.
*/
const templeTall = "polygon(50% 0%, 78% 5%, 100% 13%, 100% 100%, 0% 100%, 0% 13%, 22% 5%)";
const templeMed = "polygon(50% 0%, 78% 6%, 100% 16%, 100% 100%, 0% 100%, 0% 16%, 22% 6%)";
const templeCard = "polygon(50% 0%, 80% 8%, 100% 20%, 100% 100%, 0% 100%, 0% 20%, 20% 8%)";

/* Kalash finial — the small gold urn-dot that sits on a mandir peak */
function Kalash({ size = "md" }) {
  const s = size === "sm" ? "h-1.5 w-1.5" : "h-2 w-2";
  return (
    <span className="pointer-events-none absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
      <span className={`block ${s} rounded-full border border-[#8B6A3E] bg-[#D9B681]`} />
    </span>
  );
}



const stats = [
  { icon: Clock3, value: "24/7", title: "Sewa Support", text: "365 Days a Year" },
  { icon: MapPin, value: "15+", title: "Cities Covered", text: "Across India" },
  { icon: UsersRound, value: "500+", title: "Verified Pandits", text: "Trusted Ritual Support" },
  { icon: ShieldCheck, value: "100%", title: "Transparent Services", text: "No Hidden Charges" },
];

const careServices = [
  { icon: Ambulance, title: "Ambulance", text: "24/7 Pickup Support" },
  { icon: Truck, title: "Hearse Van", text: "Dignified Transport" },
  { icon: ShoppingBag, title: "Samagri", text: "Complete Ritual Items" },
  { icon: UserRound, title: "Pandit Ji", text: "Verified & Experienced" },
  { icon: Home, title: "Prayer Hall", text: "Clean & Peaceful Facilities" },
  { icon: Flame, title: "Cremation", text: "Smooth Arrangements" },
  { icon: HeartHandshake, title: "Family Support", text: "Guidance & Emotional Care" },
];

const reasons = [
  { icon: BadgeCheck, title: "Experienced Team", text: "Trained, verified and compassionate" },
  { icon: ShieldCheck, title: "Complete Transparency", text: "Clear pricing with no hidden costs" },
  { icon: MapPin, title: "Pan India Network", text: "Strong local presence across cities" },
  { icon: PhoneCall, title: "24/7 Availability", text: "A caring team always within reach" },
  { icon: HandHeart, title: "Dignity & Respect", text: "Every ritual handled with utmost care" },
];

const processSteps = [
  { icon: PhoneCall, title: "Call or Book Sewa", text: "Reach out anytime. We are available 24/7." },
  { icon: MessageCircle, title: "Share Details", text: "Tell us your needs and family preferences." },
  { icon: ClipboardList, title: "We Arrange Everything", text: "Our team coordinates all services calmly." },
  { icon: Flame, title: "Rituals & Cremation", text: "Every ritual is performed with dignity." },
  { icon: HeartHandshake, title: "Family Support", text: "We remain with your family throughout." },
];

const locations = [
  { name: "Gaya", image: "/assets/about-reference/location-gaya.png" },
  { name: "Varanasi", image: "/assets/about-reference/location-varanasi.png" },
  { name: "Haridwar", image: "/assets/about-reference/location-haridwar.png" },
  { name: "Rishikesh", image: "/assets/about-reference/location-rishikesh.png" },
  { name: "Nashik", image: "/assets/about-reference/location-nashik.png" },
];

export default function About() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FBF8F3] text-[#2C1810]">
      <Topbar />
      <Navbar variant="seva" />

      <main>
        {/* ============ HERO — layered type + Devanagari watermark ============ */}
        <section className="relative h-[600px] overflow-hidden bg-[#F4EDE3]">
          <div className="absolute inset-0">
            <Image
              src="/assets/about-reference/hero-priest-ghat.png"
              alt="Moksha Sewa ritual support at a sacred river ghat"
              fill
              priority
              quality={100}
              sizes="100vw"
              className="scale-[1.02] object-cover object-[74%_center]"
            />
          </div>

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(247,240,231,0.98) 0%, rgba(247,240,231,0.93) 24%, rgba(247,240,231,0.62) 42%, rgba(247,240,231,0.20) 60%, rgba(247,240,231,0.02) 76%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/8 via-transparent to-transparent" />

          {/* giant Devanagari watermark — the signature of the page */}
          <div className="pointer-events-none absolute -left-6 top-1/2 hidden -translate-y-[58%] select-none font-serif text-[300px] leading-none text-[#8B6A3E]/[0.07] lg:block">
            मोक्ष
          </div>

          <div className="relative mx-auto flex h-full w-full max-w-7xl items-center px-0 pt-2 lg:pt-0">
            <div className="max-w-[540px] -translate-y-2 lg:-translate-y-4">
              {/* eyebrow */}
              <div className="mb-1 inline-flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B6A3E] text-white">
                  <Flame className="h-3.5 w-3.5" />
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8B6A3E]">
                  About Us · Since Day One
                </span>
              </div>

              {/* layered display type */}
              <h1 className="font-serif leading-[0.95]">
                <span className="block text-[38px] text-[#2C1810] sm:text-[46px] lg:text-[52px]">
                  A Promise of
                </span>
                <span className="mt-1 block text-[46px] italic text-[#8B6A3E] sm:text-[58px] lg:text-[68px]">
                  Moksha Sewa
                </span>
              </h1>

              {/* diya-style flourish */}
              <div className="mt-1 flex items-center gap-2">
                <span className="h-[2px] w-12 bg-[#8B6A3E]" />
                <span className="h-2 w-2 rotate-45 border border-[#8B6A3E] bg-[#C9A574]" />
                <span className="h-px w-20 bg-gradient-to-r from-[#C9A574] to-transparent" />
              </div>

              <p className="mt-1 max-w-[455px] text-sm leading-6 text-[#4F3A2D] sm:text-[15px]">
                We support families with dignified funeral, cremation and ritual
                arrangements, so the final journey is handled with calm, respect
                and complete transparency.
              </p>

              {/* trust row */}
              <div className="mt-1 flex flex-wrap items-center gap-x-6 gap-y-2">
                {["Dignity First", "Transparent Pricing", "Always Available"].map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#5F4630]"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#8B6A3E]/12">
                      <CheckCircle2 className="h-3 w-3 text-[#8B6A3E]" />
                    </span>
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* floating helpline card — bottom right */}
          <a
            href="tel:+919568259784"
            className="group absolute bottom-24 right-16 hidden items-center gap-3 rounded-2xl border border-white/40 bg-[#2C1810]/70 px-4 py-3 text-white shadow-[0_16px_40px_rgba(44,24,16,0.35)] backdrop-blur-md transition hover:bg-[#2C1810]/85 lg:flex lg:right-24 xl:right-32"
          >
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#C9A574] text-[#2C1810]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C9A574]/50" />
              <PhoneCall className="relative h-4 w-4" />
            </span>
            <span>
              <span className="block text-[9px] uppercase tracking-[0.2em] text-[#E8D2AC]">
                24/7 Helpline
              </span>
              <span className="block font-serif text-sm">+91 9568259784</span>
            </span>
          </a>
        </section>

        {/* ============ STATS — inverted dark bar with gold numbers ============ */}
        <section className="relative z-20 -mt-8 sm:-mt-10">
          <div className="mx-auto w-full max-w-7xl px-0">
            <div className="relative overflow-hidden rounded-2xl border border-[#5B432F] bg-gradient-to-r from-[#2C1810] via-[#3B2B21] to-[#2C1810] px-4 py-3 shadow-[0_18px_48px_rgba(44,24,16,0.35)] md:px-5 md:py-3.5">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#D9B681] to-transparent" />
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border border-[#C9A574]/15" />
              <div className="pointer-events-none absolute -bottom-12 -left-8 h-36 w-36 rounded-full border border-[#C9A574]/10" />

              <div className="relative grid grid-cols-2 gap-y-3 md:grid-cols-4 md:divide-x md:divide-white/10">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.title}
                      className="group flex items-center gap-2.5 px-0 md:justify-center md:px-3"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C9A574]/50 bg-[#C9A574]/10 text-[#D9B681] transition-all duration-300 group-hover:bg-[#C9A574] group-hover:text-[#2C1810]">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-serif text-[20px] leading-none text-[#E8D2AC]">
                          {stat.value}
                        </div>
                        <div className="mt-0.5 text-[11px] font-semibold text-white/90">{stat.title}</div>
                        <div className="mt-0 text-[9px] leading-tight text-white/50">{stat.text}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ============ OUR STORY — mandir-peak collage ============ */}
        <section className="py-5 lg:py-6">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-6 px-0 lg:grid-cols-[0.82fr_1.18fr] lg:gap-8">
            <div className="relative">
              <Quote className="pointer-events-none absolute -left-4 -top-6 h-20 w-20 text-[#C9A574]/15" />

              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8B6A3E]">
                <span>Our Story</span>
                <span className="h-px w-7 bg-[#C9A574]" />
              </div>

              <h2 className="mt-1 max-w-[420px] font-serif text-3xl leading-[1.08] text-[#2C1810] sm:text-4xl">
                Compassion, Care &{" "}
                <span className="italic text-[#8B6A3E]">Complete Support</span>
              </h2>

              <div className="mt-1 h-[2px] w-10 bg-[#8B6A3E]" />

              <p className="mt-1 max-w-[470px] text-sm leading-6 text-[#5F4A3D]">
                Moksha Sewa was founded with one simple belief: every family
                deserves support and respect during life&apos;s most difficult
                moments. We coordinate the practical arrangements and sacred
                customs, so families can focus on remembering their loved one.
              </p>

              {/* signed note */}
              <div className="mt-1 inline-flex items-center gap-4 rounded-2xl border border-[#E6D6BF] bg-white px-4 py-3 shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8B6A3E] text-white">
                  <HandHeart className="h-4 w-4" />
                </span>
                <span>
                  <span className="block font-serif text-lg italic leading-tight text-[#8B6A3E]">
                    Serving with Devotion
                  </span>
                  <span className="block text-[10px] uppercase tracking-[0.18em] text-[#8A7460]">
                    Team Moksha Sewa
                  </span>
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="grid h-[340px] grid-cols-[1.55fr_1.1fr_0.85fr] grid-rows-2 gap-1.5 pt-2 sm:h-[400px]">
                {/* main tile — pointed mandir shikhara top */}
                <div
                  className="group relative row-span-2 [filter:drop-shadow(0_16px_30px_rgba(70,47,31,0.22))]"
                >
                  <Kalash />
                  {/* white frame layer */}
                  <div
                    className="absolute inset-0 rounded-b-2xl bg-white"
                    style={{ clipPath: templeTall }}
                  />
                  {/* image layer */}
                  <div
                    className="absolute inset-[3px] overflow-hidden rounded-b-2xl"
                    style={{ clipPath: templeTall }}
                  >
                    <Image
                      src="/assets/about-reference/story-main.png"
                      alt="Pandits performing traditional rituals"
                      fill
                      quality={100}
                      sizes="(max-width: 1024px) 45vw, 28vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/55 via-transparent to-transparent" />
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl border-[3px] border-white shadow-md ring-1 ring-[#E4D5BE]">
                  <Image
                    src="/assets/about-reference/story-ritual-items.png"
                    alt="Traditional ritual samagri"
                    fill
                    quality={100}
                    sizes="(max-width: 1024px) 30vw, 18vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* tall right tile — pointed mandir top */}
                <div className="group relative row-span-2 [filter:drop-shadow(0_10px_22px_rgba(70,47,31,0.18))]">
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
                      src="/assets/about-reference/story-ghat-temple.png"
                      alt="Sacred temple ghat illuminated by golden hour light"
                      fill
                      quality={100}
                      sizes="(max-width: 1024px) 24vw, 14vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl border-[3px] border-white shadow-md ring-1 ring-[#E4D5BE]">
                  <Image
                    src="/assets/about-reference/story-evening-ghat.png"
                    alt="Peaceful evening ritual by the river"
                    fill
                    quality={100}
                    sizes="(max-width: 1024px) 30vw, 18vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* mantra badge overlapping the collage */}
              <div className="absolute -bottom-5 -left-5 hidden h-24 w-24 items-center justify-center rounded-full border border-[#DEC9A8] bg-[#FBF8F3] shadow-lg sm:flex">
                <div className="absolute inset-1.5 rounded-full border border-dashed border-[#C9A574]/60" />
                <div className="text-center">
                  <Flame className="mx-auto h-5 w-5 text-[#8B6A3E]" />
                  <div className="mt-1 font-serif text-[13px] leading-none text-[#2C1810]">सेवा</div>
                  <div className="mt-0.5 text-[7px] uppercase tracking-[0.18em] text-[#8A7460]">
                    With Dignity
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ WHAT WE TAKE CARE OF — mandir-peak tiles ============ */}
        <section className="border-y border-[#E9DDCD] bg-[#F8F3EC] py-5 lg:py-6">
          <div className="mx-auto w-full max-w-7xl px-0">
            <div className="mb-1 flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8B6A3E]">
              <span className="h-px w-8 bg-[#C9A574]" />
              <span>What We Take Care Of</span>
              <span className="h-px w-8 bg-[#C9A574]" />
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 sm:grid-cols-4 lg:grid-cols-7">
              {careServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className={`group relative transition-transform duration-300 hover:-translate-y-1.5 [filter:drop-shadow(0_6px_14px_rgba(70,47,31,0.10))] hover:[filter:drop-shadow(0_12px_22px_rgba(70,47,31,0.18))] ${index % 2 === 1 ? "lg:translate-y-3 lg:hover:translate-y-1.5" : ""
                      }`}
                  >
                    <Kalash size="sm" />
                    {/* border layer */}
                    <div
                      className="rounded-b-xl bg-[#E4D5BE] p-[1px] transition-colors duration-300 group-hover:bg-[#C9A574]"
                      style={{ clipPath: templeCard }}
                    >
                      {/* card layer */}
                      <div
                        className="rounded-b-xl bg-white px-3 pb-1 pt-8 text-center"
                        style={{ clipPath: templeCard }}
                      >
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#8B6A3E]/10 text-[#8B6A3E] transition-colors duration-300 group-hover:bg-[#8B6A3E] group-hover:text-white">
                          <Icon className="h-5 w-5 stroke-[1.45]" />
                        </div>
                        <h3 className="mt-1.5 font-serif text-base text-[#2C1810]">
                          {service.title}
                        </h3>
                        <p className="mx-auto mt-1 max-w-[120px] text-[10px] leading-4 text-[#6B584B]">
                          {service.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ OUR PRESENCE — mandir gateway city cards ============ */}
        <section className="pb-1 pt-1 lg:pb-1 lg:pt-1">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-0">
            <div className="relative overflow-hidden rounded-2xl border border-[#E6D8C5] bg-[#F6EFE6] p-5 sm:p-6">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-[#C9A574]/20" />
              <div className="pointer-events-none absolute -bottom-20 -left-16 h-52 w-52 rounded-full border border-[#C9A574]/15" />

              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8B6A3E]">
                    Our Presence
                  </div>
                  <h2 className="mt-1 font-serif text-2xl text-[#2C1810] sm:text-3xl">
                    Serving Families <span className="italic text-[#8B6A3E]">Across India</span>
                  </h2>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#DECBAC] bg-white px-3 py-1 text-[10px] font-semibold text-[#6A4F32]">
                  <MapPin className="h-3 w-3 text-[#8B6A3E]" />
                  15+ Cities & Growing
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
                        quality={100}
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/80 via-[#2C1810]/10 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-3 text-center">
                        <p className="font-serif text-base text-white">{location.name}</p>
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
                    className="absolute inset-[3px] flex items-center justify-center rounded-b-xl bg-gradient-to-b from-[#9A7445] to-[#6F4E2F] px-3 text-center text-white"
                    style={{ clipPath: templeMed }}
                  >
                    <div>
                      <div className="font-serif text-4xl transition-transform duration-300 group-hover:scale-110">
                        +9
                      </div>
                      <div className="mt-1 text-[10px] uppercase tracking-[0.14em] text-white/80">
                        More Cities
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-1 text-center text-[11px] text-[#746154]">
                Local teams. Local support. Always near you.
              </p>
            </div>
          </div>
        </section>

        {/* ============ WHY CHOOSE US — dark glass cards ============ */}
        <section className="relative overflow-hidden bg-[#3B2B21] py-5 lg:py-6">
          <div className="absolute -left-20 top-0 h-64 w-64 rounded-full border border-[#C9A574]/10" />
          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full border border-[#C9A574]/10" />
          <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C9A574]/35 to-transparent" />

          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-5 px-0 lg:grid-cols-[0.72fr_1.78fr]">
            <div className="text-white">
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D9B681]">
                Why Choose Us
              </div>
              <h2 className="mt-1 font-serif text-3xl leading-tight sm:text-4xl">
                Here for You, <span className="italic text-[#D9B681]">Always</span>
              </h2>
              <div className="mt-1 h-[2px] w-10 bg-[#D9B681]" />
              <p className="mt-1 max-w-sm text-sm leading-6 text-white/75">
                We bring transparency, professionalism and heartfelt service
                together to help you in every possible way.
              </p>
              <a
                href="/contact"
                className="group mt-1 inline-flex items-center gap-2 rounded-md bg-[#D9B681] px-4 py-2 text-xs font-semibold text-[#3B2B21] transition hover:bg-[#E8D2AC]"
              >
                Know More
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
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
                      <Icon className="h-5 w-5 stroke-[1.5]" />
                    </div>
                    <h3 className="mt-1 font-serif text-base leading-tight text-white">
                      {reason.title}
                    </h3>
                    <p className="mt-1 text-[10px] leading-4 text-white/60">{reason.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ OUR PROCESS — zigzag journey ============ */}
        <section className="bg-[#FBF8F3] py-5 lg:py-6">
          <div className="mx-auto w-full max-w-7xl px-0">
            <div className="mb-1 flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8B6A3E]">
              <span className="h-px w-8 bg-[#C9A574]" />
              <span>Our Process — The Sewa Journey</span>
              <span className="h-px w-8 bg-[#C9A574]" />
            </div>

            <div className="relative grid gap-3 md:grid-cols-5 md:gap-2">
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
                      {/* dashed halo */}
                      <div className="absolute inset-0 rounded-full border border-dashed border-[#C9A574]/60 transition-transform duration-500 group-hover:rotate-45" />
                      <div className="absolute inset-2 flex items-center justify-center rounded-full bg-[#8B6A3E] text-white shadow-md transition-colors duration-300 group-hover:bg-[#6F4E2F]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="absolute -right-0.5 -top-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#2C1810] font-serif text-[10px] text-[#D9B681] ring-2 ring-[#FBF8F3]">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="mt-1 font-serif text-base text-[#2C1810]">{step.title}</h3>
                    <p className="mx-auto mt-1 max-w-[175px] text-[10px] leading-4 text-[#6A584B]">
                      {step.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>


        {/* ============ SACRED PROMISE — dark promise card + mandir imagery ============ */}
        <section className="relative overflow-hidden bg-[#F2E9DD] py-5 lg:py-6">
          <div className="absolute -left-28 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-[#C9A574]/20" />
          <div className="absolute -right-24 top-10 h-64 w-64 rounded-full bg-[#8B6A3E]/5 blur-3xl" />

          <div className="relative mx-auto grid w-full max-w-7xl items-stretch gap-3 px-0 lg:grid-cols-[1.08fr_0.92fr] lg:gap-4">
            <div className="grid h-[320px] grid-cols-[1.35fr_0.85fr] grid-rows-2 gap-1.5 pt-2 sm:h-[380px] lg:h-full lg:min-h-[470px]">
              {/* main tile — pointed mandir top */}
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
                    src="/assets/about-reference/story-ghat-temple.png"
                    alt="Sacred riverside ghat illuminated in golden light"
                    fill
                    quality={100}
                    sizes="(max-width: 1024px) 62vw, 36vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/45 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/25 bg-black/25 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                    Sacred Care
                  </div>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-[18px] border-[3px] border-white shadow-sm ring-1 ring-[#E4D5BE]">
                <Image
                  src="/assets/about-reference/story-ritual-items.png"
                  alt="Traditional ritual samagri arranged with care"
                  fill
                  quality={100}
                  sizes="(max-width: 1024px) 35vw, 20vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="group relative overflow-hidden rounded-[18px] border-[3px] border-white shadow-sm ring-1 ring-[#E4D5BE]">
                <Image
                  src="/assets/about-reference/story-main.png"
                  alt="Traditional rituals performed with devotion"
                  fill
                  quality={100}
                  sizes="(max-width: 1024px) 35vw, 20vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* dark promise card */}
            <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-[22px] bg-gradient-to-b from-[#3B2B21] to-[#2C1810] p-5 text-white shadow-[0_18px_48px_rgba(44,24,16,0.3)] sm:p-6">
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-[#C9A574]/15" />
              <span className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-[#C9A574] via-[#D9B681] to-[#C9A574]" />

              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D9B681]">
                <span>Our Sacred Promise</span>
                <span className="h-px w-8 bg-[#C9A574]" />
              </div>

              <h2 className="mt-1.5 max-w-[500px] font-serif text-[28px] leading-[1.08] sm:text-[34px]">
                Every Farewell Deserves{" "}
                <span className="italic text-[#D9B681]">Dignity, Peace & Devotion</span>
              </h2>

              <p className="mt-1 text-sm leading-6 text-white/70">
                From the first call to the final prayer, Moksha Sewa remains
                beside the family with calm coordination, respectful rituals and
                clear support at every step.
              </p>

              <div className="mt-1 space-y-2">
                {[
                  {
                    icon: HandHeart,
                    title: "Compassionate Guidance",
                    text: "A patient team that listens and supports the family.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Trusted Arrangements",
                    text: "Verified services, transparent details and no confusion.",
                  },
                  {
                    icon: Clock3,
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
                        <h3 className="font-serif text-[15px] leading-5 text-white">{item.title}</h3>
                        <p className="mt-0.5 text-[10px] leading-4 text-white/60">{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <a
                href="/contact"
                className="group mt-1 inline-flex w-fit items-center gap-2 rounded-lg bg-[#D9B681] px-4 py-2.5 text-xs font-semibold text-[#2C1810] shadow-md transition duration-300 hover:bg-[#E8D2AC] hover:shadow-lg"
              >
                Speak With Our Sewa Team
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </section>

        {/* ============ SEWA NETWORK — INDIA MAP IMAGE ============ */}
        <section className="relative overflow-hidden bg-[#FBF8F3] py-5 lg:py-6">
          {/* soft ambient rings */}
          <div className="pointer-events-none absolute -right-24 top-8 h-72 w-72 rounded-full border border-[#C9A574]/15" />
          <div className="pointer-events-none absolute -left-20 bottom-8 h-64 w-64 rounded-full border border-[#C9A574]/10" />

          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-6 px-0 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
            {/* LEFT — content */}
            <div>
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8B6A3E]">
                <span>Sewa Network</span>
                <span className="h-px w-7 bg-[#C9A574]" />
              </div>

              <h2 className="mt-1 max-w-[420px] font-serif text-3xl leading-[1.08] text-[#2C1810] sm:text-4xl">
                One Bharat,{" "}
                <span className="italic text-[#8B6A3E]">
                  One Sewa Network
                </span>
              </h2>

              <div className="mt-1 h-[2px] w-10 bg-[#8B6A3E]" />

              <p className="mt-1 max-w-[460px] text-sm leading-6 text-[#5F4A3D]">
                From the sacred ghats of Haridwar to cities across India, our
                connected teams ensure that one call reaches the right people,
                wherever your family needs immediate assistance.
              </p>

              {/* city legend chips */}
              <div className="mt-1 flex flex-wrap gap-2">
                {locations.map((location) => (
                  <span
                    key={location.name}
                    className="inline-flex items-center gap-2 rounded-full border border-[#E4D5BE] bg-white px-3 py-1.5 text-[11px] font-semibold text-[#5F4630] shadow-sm"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C9A574] opacity-70" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8B6A3E]" />
                    </span>
                    {location.name}
                  </span>
                ))}

                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#8B6A3E] px-3 py-1.5 text-[11px] font-semibold text-white shadow-sm">
                  +9 More Cities
                </span>
              </div>

              <div className="mt-1 flex items-center gap-3 rounded-2xl border border-[#E6D6BF] bg-white px-4 py-3 shadow-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#8B6A3E] text-white">
                  <PhoneCall className="h-4 w-4" />
                </span>

                <p className="text-[11px] leading-4 text-[#5F4A3D]">
                  <span className="font-serif text-sm italic text-[#8B6A3E]">
                    Ek call, poora network.
                  </span>
                  <br />
                  Every city team is connected 24/7 for instant coordination.
                </p>
              </div>
            </div>

            {/* RIGHT — India map image */}
            <div className="relative mx-auto w-full max-w-[640px] lg:max-w-[700px]">
              {/* live badge */}
              <div className="absolute right-2 top-2 z-30 inline-flex items-center gap-1.5 rounded-full border border-[#DECBAC] bg-white/95 px-3 py-1.5 text-[10px] font-semibold text-[#6A4F32] shadow-md backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
                </span>
                Network Live · 24/7
              </div>

              <div className="relative mx-auto w-full h-[300px] sm:h-[380px] lg:h-[460px] max-w-[580px] lg:max-w-[640px]">
                {/* soft ground shadow */}
                <div className="pointer-events-none absolute bottom-0 left-1/2 h-8 w-[70%] -translate-x-1/2 rounded-full bg-[#4A3421]/20 blur-xl" />

                {/* Complete India map image */}
                <Image
                  src="/assets/about-reference/india-map.png"
                  alt="Map of India showing connected Moksha Sewa cities"
                  fill
                  quality={100}
                  sizes="(max-width: 1024px) 90vw, 520px"
                  className="object-contain scale-110 sm:scale-125 lg:scale-[1.3] drop-shadow-[0_14px_12px_rgba(74,52,33,0.24)] origin-center"
                />


              </div>

              <p className="mt-1 text-center text-[10px] text-[#8A7460]">
                Connected Moksha Sewa teams across India
              </p>
            </div>
          </div>
        </section>



        {/* ============ CTA STRIP ============ */}
        <section className="relative overflow-hidden bg-[#3B2B21] py-4 text-white sm:py-5">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810] via-[#5B432F] to-[#2C1810]" />
          <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle_at_15%_70%,#D7B37A_0,transparent_23%),radial-gradient(circle_at_85%_60%,#D7B37A_0,transparent_22%)]" />
          {/* fine gold frame inside the strip */}
          <div className="pointer-events-none absolute inset-2 rounded-xl border border-[#D9B681]/25" />

          <div className="relative mx-auto w-full max-w-7xl px-0 md:flex md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl">
                We Are Here to Serve You in{" "}
                <span className="italic text-[#D9B681]">Your Time of Need</span>
              </h2>
              <p className="mt-1 text-xs text-white/75 sm:text-sm">
                Call us anytime for immediate support.
              </p>

              <div className="mt-1 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10px] text-white/75 md:justify-start">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#D9B681]" /> Clear Pricing
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#D9B681]" /> Verified Support
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#D9B681]" /> Available 24/7
                </span>
              </div>
            </div>

            <div className="mt-1 flex justify-center md:mt-0 md:shrink-0">
              <a
                href="tel:+919568259784"
                className="group relative inline-flex items-center gap-2 rounded-lg bg-[#D9B681] px-6 py-2.5 text-sm font-semibold text-[#2C1810] shadow-lg transition hover:bg-[#E8D2AC]"
              >
                <span className="relative flex h-4 w-4 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2C1810]/25" />
                  <PhoneCall className="relative h-4 w-4" />
                </span>
                +91 9568259784
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="seva" />
    </div>
  );
}