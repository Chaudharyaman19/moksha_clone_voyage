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
        {/* ================= HERO ================= */}
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

          {/* soft ornamental ring behind headline */}
          <div className="pointer-events-none absolute -left-24 top-1/2 hidden h-[420px] w-[420px] -translate-y-1/2 rounded-full border border-[#C9A574]/25 lg:block" />
          <div className="pointer-events-none absolute -left-10 top-1/2 hidden h-[300px] w-[300px] -translate-y-1/2 rounded-full border border-[#C9A574]/15 lg:block" />

          <div className="relative mx-auto flex h-full w-full max-w-7xl items-center px-0 pt-2 lg:pt-0">
            <div className="max-w-[500px] -translate-y-2 lg:-translate-y-4">
              {/* eyebrow */}
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#D9C4A4] bg-white/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8B6A3E] backdrop-blur-sm">
                <Flame className="h-3 w-3" />
                <span>About Us</span>
              </div>

              <h1 className="font-serif text-[42px] font-normal leading-[0.98] text-[#2C1810] sm:text-[52px] lg:text-[60px]">
                About
                <span className="mt-1 block text-[#8B6A3E]">Moksha Sewa</span>
              </h1>

              {/* flourish under the title */}
              <div className="mt-4 flex items-center gap-2">
                <span className="h-[2px] w-10 bg-[#8B6A3E]" />
                <span className="h-1.5 w-1.5 rotate-45 bg-[#C9A574]" />
                <span className="h-px w-16 bg-[#C9A574]/60" />
              </div>

              <p className="mt-5 max-w-[455px] text-sm leading-6 text-[#4F3A2D] sm:text-[15px]">
                We support families with dignified funeral, cremation and ritual
                arrangements, so the final journey is handled with calm, respect
                and complete transparency.
              </p>

              {/* trust chips */}
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {["Dignity First", "Transparent Pricing", "Always Available"].map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#DECBAC] bg-white/75 px-3 py-1 text-[10px] font-semibold text-[#6A4F32] backdrop-blur-sm"
                  >
                    <CheckCircle2 className="h-3 w-3 text-[#8B6A3E]" />
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= STATS BAR ================= */}
        <section className="relative z-20 -mt-12 ">
          <div className="mx-auto w-full max-w-7xl px-0">
            <div className="relative overflow-hidden rounded-2xl border border-[#E5D7C4] bg-white/95 px-4 py-4 shadow-[0_18px_48px_rgba(74,49,32,0.13)] backdrop-blur-md md:px-6">
              {/* thin brand accent on top edge */}
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#C9A574] to-transparent" />

              <div className="grid grid-cols-2 gap-y-5 md:grid-cols-4 md:divide-x md:divide-[#E7DAC8]">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.title}
                      className="group flex items-center gap-3 px-0 md:justify-center md:px-4"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#8B6A3E] text-white ring-4 ring-[#8B6A3E]/10 transition-transform duration-300 group-hover:scale-105">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="font-serif text-2xl leading-none text-[#2C1810]">
                          {stat.value}
                        </div>
                        <div className="mt-1 text-xs font-semibold text-[#4A3428]">{stat.title}</div>
                        <div className="mt-0.5 text-[10px] text-[#7A685B]">{stat.text}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ================= OUR STORY ================= */}
        <section className="py-5 lg:py-6">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-6 px-0 lg:grid-cols-[0.82fr_1.18fr] lg:gap-8">
            <div className="relative">
              {/* oversized watermark quote behind the text */}
              <Quote className="pointer-events-none absolute -left-4 -top-6 h-20 w-20 text-[#C9A574]/15" />

              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8B6A3E]">
                <span>Our Story</span>
                <span className="h-px w-7 bg-[#C9A574]" />
              </div>

              <h2 className="mt-3 max-w-[390px] font-serif text-3xl leading-[1.08] text-[#2C1810] sm:text-4xl">
                Compassion, Care &{" "}
                <span className="relative inline-block text-[#8B6A3E]">
                  Complete Support
                  <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-[#C9A574] to-transparent" />
                </span>
              </h2>

              <div className="mt-4 h-[2px] w-10 bg-[#8B6A3E]" />

              <p className="mt-5 max-w-[470px] text-sm leading-6 text-[#5F4A3D]">
                Moksha Sewa was founded with one simple belief: every family
                deserves support and respect during life&apos;s most difficult
                moments. We coordinate the practical arrangements and sacred
                customs, so families can focus on remembering their loved one.
              </p>

              {/* signature line, styled like a hand-signed note */}
              <div className="mt-5 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#8B6A3E]/10 text-[#8B6A3E]">
                  <HandHeart className="h-4 w-4" />
                </span>
                <p className="font-serif text-xl italic text-[#8B6A3E]">Serving with Devotion</p>
              </div>
            </div>

            <div className="grid h-[330px] grid-cols-[1.55fr_1.1fr_0.85fr] grid-rows-2 gap-1.5 sm:h-[380px]">
              <div className="group relative row-span-2 overflow-hidden rounded-2xl shadow-[0_14px_36px_rgba(70,47,31,0.12)]">
                <Image
                  src="/assets/about-reference/story-main.png"
                  alt="Pandits performing traditional rituals"
                  fill
                  quality={100}
                  sizes="(max-width: 1024px) 45vw, 28vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/50 via-transparent to-transparent" />
                {/* floating caption card on the hero tile */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 rounded-xl border border-white/20 bg-black/25 px-3 py-2 backdrop-blur-md">
                  <p className="font-serif text-sm leading-tight text-white">Rooted in Tradition</p>
                  <p className="mt-0.5 text-[9px] uppercase tracking-[0.16em] text-white/70">
                    Every Ritual, Done Right
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl">
                <Image
                  src="/assets/about-reference/story-ritual-items.png"
                  alt="Traditional ritual samagri"
                  fill
                  quality={100}
                  sizes="(max-width: 1024px) 30vw, 18vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="group relative row-span-2 overflow-hidden rounded-xl">
                <Image
                  src="/assets/about-reference/story-ghat-temple.png"
                  alt="Sacred temple ghat illuminated by golden hour light"
                  fill
                  quality={100}
                  sizes="(max-width: 1024px) 24vw, 14vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="group relative overflow-hidden rounded-xl">
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
          </div>
        </section>

        {/* ================= WHAT WE TAKE CARE OF ================= */}
        <section className="border-y border-[#E9DDCD] bg-[#F8F3EC] py-5 lg:py-6">
          <div className="mx-auto w-full max-w-7xl px-0">
            <div className="mb-5 flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8B6A3E]">
              <span className="h-px w-8 bg-[#C9A574]" />
              <span>What We Take Care Of</span>
              <span className="h-px w-8 bg-[#C9A574]" />
            </div>

            <div className="grid grid-cols-2 gap-y-4 sm:grid-cols-4 lg:grid-cols-7 lg:divide-x lg:divide-[#E0D2C0]">
              {careServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.title} className="group px-3 text-center lg:px-4">
                    {/* icon sits in a soft tile that fills with brand color on hover */}
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#E0D2C0] bg-white text-[#8B6A3E] shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-[#8B6A3E] group-hover:bg-[#8B6A3E] group-hover:text-white group-hover:shadow-md">
                      <Icon className="h-6 w-6 stroke-[1.45]" />
                    </div>
                    <h3 className="mt-2 font-serif text-base text-[#2C1810]">{service.title}</h3>
                    <p className="mx-auto mt-1 max-w-[120px] text-[10px] leading-4 text-[#6B584B]">
                      {service.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= WHY CHOOSE US ================= */}
        <section className="relative overflow-hidden bg-[#3B2B21] py-5 lg:py-6">
          <div className="absolute -left-20 top-0 h-64 w-64 rounded-full border border-[#C9A574]/10" />
          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full border border-[#C9A574]/10" />
          <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C9A574]/35 to-transparent" />

          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-5 px-0 lg:grid-cols-[0.72fr_1.78fr]">
            <div className="text-white">
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D9B681]">
                Why Choose Us
              </div>
              <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
                Here for You, <span className="text-[#D9B681]">Always</span>
              </h2>
              <div className="mt-4 h-[2px] w-10 bg-[#D9B681]" />
              <p className="mt-4 max-w-sm text-sm leading-6 text-white/75">
                We bring transparency, professionalism and heartfelt service
                together to help you in every possible way.
              </p>
              <a
                href="/contact"
                className="group mt-5 inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-xs font-semibold text-[#3B2B21] transition hover:bg-[#F2E8DA]"
              >
                Know More
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={reason.title}
                    className="group relative h-full overflow-hidden rounded-xl border border-white/20 bg-[#FBF8F3] px-3 py-3 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:px-4 sm:py-4"
                  >
                    {/* accent line that draws in on hover */}
                    <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-[#8B6A3E] transition-transform duration-300 group-hover:scale-x-100" />
                    <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-[#B89564] text-[#8B6A3E] transition-colors duration-300 group-hover:bg-[#8B6A3E] group-hover:text-white">
                      <Icon className="h-5 w-5 stroke-[1.5]" />
                    </div>
                    <h3 className="mt-3 font-serif text-base leading-tight text-[#2C1810]">
                      {reason.title}
                    </h3>
                    <p className="mt-2 text-[10px] leading-4 text-[#6A574A]">{reason.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= OUR PROCESS ================= */}
        <section className="bg-[#FBF8F3] py-5 lg:py-6">
          <div className="mx-auto w-full max-w-7xl px-0">
            <div className="mb-6 flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8B6A3E]">
              <span className="h-px w-8 bg-[#C9A574]" />
              <span>Our Process</span>
              <span className="h-px w-8 bg-[#C9A574]" />
            </div>

            <div className="relative grid gap-3 md:grid-cols-5 md:gap-2">
              <div className="absolute left-[10%] right-[10%] top-6 hidden border-t border-dashed border-[#B89564] md:block" />
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="group relative h-full text-center">
                    <div className="relative z-10 mx-auto h-12 w-12">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#B89564] bg-[#FBF8F3] text-[#8B6A3E] transition-all duration-300 group-hover:border-[#8B6A3E] group-hover:bg-[#8B6A3E] group-hover:text-white group-hover:shadow-md">
                        <Icon className="h-5 w-5" />
                      </div>
                      {/* step number pinned to the circle */}
                      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#2C1810] text-[8px] font-bold text-[#D9B681] ring-2 ring-[#FBF8F3]">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-3 font-serif text-base text-[#2C1810]">{step.title}</h3>
                    <p className="mx-auto mt-1 max-w-[175px] text-[10px] leading-4 text-[#6A584B]">
                      {step.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= OUR PRESENCE ================= */}
        <section className="pb-2 lg:pb-3">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-0">
            <div className="relative overflow-hidden rounded-2xl border border-[#E6D8C5] bg-[#F6EFE6] p-5 sm:p-6">
              {/* faint decorative ring in the corner */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-[#C9A574]/20" />

              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8B6A3E]">
                    Our Presence
                  </div>
                  <h2 className="mt-2 font-serif text-2xl text-[#2C1810] sm:text-3xl">
                    Serving Families Across India
                  </h2>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#DECBAC] bg-white px-3 py-1 text-[10px] font-semibold text-[#6A4F32]">
                  <MapPin className="h-3 w-3 text-[#8B6A3E]" />
                  15+ Cities & Growing
                </span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
                {locations.map((location) => (
                  <div
                    key={location.name}
                    className="group relative aspect-[3/2] overflow-hidden rounded-xl border border-[#E1D2BE] bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
                  >
                    <Image
                      src={location.image}
                      alt={`${location.name} Moksha Sewa location`}
                      fill
                      quality={100}
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/75 via-[#2C1810]/5 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-3">
                      <p className="flex items-center gap-1.5 font-serif text-base text-white">
                        <MapPin className="h-3 w-3 text-[#D9B681] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        {location.name}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="group flex aspect-[3/2] cursor-default items-center justify-center rounded-xl bg-gradient-to-br from-[#9A7445] to-[#6F4E2F] px-3 text-center text-white shadow-sm transition-shadow duration-300 hover:shadow-md">
                  <div>
                    <div className="font-serif text-3xl transition-transform duration-300 group-hover:scale-110">
                      +9
                    </div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.14em] text-white/80">
                      More Cities
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-center text-[11px] text-[#746154]">
                Local teams. Local support. Always near you.
              </p>
            </div>
          </div>
        </section>

        {/* ================= SACRED PROMISE ================= */}
        <section className="relative overflow-hidden bg-[#F2E9DD] py-5 lg:py-6">
          <div className="absolute -left-28 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-[#C9A574]/20" />
          <div className="absolute -right-24 top-10 h-64 w-64 rounded-full bg-[#8B6A3E]/5 blur-3xl" />

          <div className="relative mx-auto grid w-full max-w-7xl items-stretch gap-3 px-0 lg:grid-cols-[1.08fr_0.92fr] lg:gap-4">
            <div className="grid h-[320px] grid-cols-[1.35fr_0.85fr] grid-rows-2 gap-1.5 sm:h-[380px] lg:h-full lg:min-h-[470px]">
              <div className="group relative row-span-2 overflow-hidden rounded-[22px] shadow-[0_18px_42px_rgba(70,47,31,0.14)]">
                <Image
                  src="/assets/about-reference/story-ghat-temple.png"
                  alt="Sacred riverside ghat illuminated in golden light"
                  fill
                  quality={100}
                  sizes="(max-width: 1024px) 62vw, 36vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/45 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 rounded-full border border-white/25 bg-black/20 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  Sacred Care
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-[18px] shadow-sm">
                <Image
                  src="/assets/about-reference/story-ritual-items.png"
                  alt="Traditional ritual samagri arranged with care"
                  fill
                  quality={100}
                  sizes="(max-width: 1024px) 35vw, 20vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="group relative overflow-hidden rounded-[18px] shadow-sm">
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

            <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-[22px] border border-[#E0CFBA] bg-white/85 p-5 shadow-[0_16px_42px_rgba(73,49,31,0.09)] backdrop-blur-sm sm:p-6">
              {/* brand accent on the card's left edge */}
              <span className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-[#C9A574] via-[#8B6A3E] to-[#C9A574]" />

              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8B6A3E]">
                <span>Our Sacred Promise</span>
                <span className="h-px w-8 bg-[#C9A574]" />
              </div>

              <h2 className="mt-2.5 max-w-[500px] font-serif text-[28px] leading-[1.08] text-[#2C1810] sm:text-[34px]">
                Every Farewell Deserves{" "}
                <span className="text-[#8B6A3E]">Dignity, Peace & Devotion</span>
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#5F4A3D]">
                From the first call to the final prayer, Moksha Sewa remains
                beside the family with calm coordination, respectful rituals and
                clear support at every step.
              </p>

              <div className="mt-4 space-y-2">
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
                      className="group flex items-center gap-3 rounded-xl border border-[#E8DCCB] bg-[#FBF8F3] px-3 py-2.5 transition-all duration-300 hover:border-[#C9A574] hover:bg-white hover:shadow-sm"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#8B6A3E] text-white transition-transform duration-300 group-hover:scale-105">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-serif text-[15px] leading-5 text-[#2C1810]">
                          {item.title}
                        </h3>
                        <p className="mt-0.5 text-[10px] leading-4 text-[#6A584B]">{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <a
                href="/contact"
                className="group mt-4 inline-flex w-fit items-center gap-2 rounded-lg bg-[#8B6A3E] px-4 py-2.5 text-xs font-semibold text-white shadow-md transition duration-300 hover:bg-[#73532F] hover:shadow-lg"
              >
                Speak With Our Sewa Team
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </section>

        {/* ================= CTA STRIP ================= */}
        <section className="relative overflow-hidden bg-[#3B2B21] py-4 text-white sm:py-5">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810] via-[#5B432F] to-[#2C1810]" />
          <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle_at_15%_70%,#D7B37A_0,transparent_23%),radial-gradient(circle_at_85%_60%,#D7B37A_0,transparent_22%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D9B681]/40 to-transparent" />

          <div className="relative mx-auto w-full max-w-7xl px-0 md:flex md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl">
                We Are Here to Serve You in Your Time of Need
              </h2>
              <p className="mt-1 text-xs text-white/75 sm:text-sm">
                Call us anytime for immediate support.
              </p>

              <div className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10px] text-white/75 md:justify-start">
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

            <div className="mt-5 flex justify-center md:mt-0 md:shrink-0">
              <a
                href="tel:+911234567890"
                className="group relative inline-flex items-center gap-2 rounded-lg bg-[#8B6A3E] px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#75552F]"
              >
                <span className="relative flex h-4 w-4 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40 opacity-75" />
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