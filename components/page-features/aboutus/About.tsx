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
        <section className="relative h-[600px] overflow-hidden bg-[#F4EDE3]">
          <div className="absolute inset-0">
            <Image
              src="/assets/about-reference/hero-priest-ghat.png"
              alt="Moksha Sewa ritual support at a sacred river ghat"
              fill
              priority
              quality={100}
              sizes="100vw"
              className="object-cover object-[74%_center]"
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

          <div className="relative mx-auto flex h-full w-full max-w-7xl items-center px-4 pt-2 sm:px-6 lg:px-8 lg:pt-0">
            <div className="max-w-[500px] -translate-y-2 lg:-translate-y-4">
              <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8B6A3E]">
                <span>About Us</span>
                <span className="h-px w-7 bg-[#C9A574]" />
              </div>

              <h1 className="font-serif text-[42px] font-normal leading-[0.98] text-[#2C1810] sm:text-[52px] lg:text-[60px]">
                About
                <span className="mt-1 block text-[#8B6A3E]">Moksha Sewa</span>
              </h1>

              <p className="mt-5 max-w-[455px] text-sm leading-6 text-[#4F3A2D] sm:text-[15px]">
                We support families with dignified funeral, cremation and ritual
                arrangements, so the final journey is handled with calm, respect
                and complete transparency.
              </p>
            </div>
          </div>
        </section>

        <section className="relative z-20 -mt-12 ">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-[#E5D7C4] bg-white/95 px-4 py-4 shadow-[0_18px_48px_rgba(74,49,32,0.13)] backdrop-blur-md md:px-6">
            <div className="grid grid-cols-2 gap-y-5 md:grid-cols-4 md:divide-x md:divide-[#E7DAC8]">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.title} className="flex items-center gap-3 px-2 md:justify-center md:px-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#8B6A3E] text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-serif text-2xl leading-none text-[#2C1810]">{stat.value}</div>
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

        <section className="pb-8 pt-10 lg:pb-10 lg:pt-12">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12 lg:px-8">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8B6A3E]">
                <span>Our Story</span>
                <span className="h-px w-7 bg-[#C9A574]" />
              </div>

              <h2 className="mt-3 max-w-[390px] font-serif text-3xl leading-[1.08] text-[#2C1810] sm:text-4xl">
                Compassion, Care & Complete Support
              </h2>

              <div className="mt-4 h-[2px] w-10 bg-[#8B6A3E]" />

              <p className="mt-5 max-w-[470px] text-sm leading-6 text-[#5F4A3D]">
                Moksha Sewa was founded with one simple belief: every family
                deserves support and respect during life&apos;s most difficult
                moments. We coordinate the practical arrangements and sacred
                customs, so families can focus on remembering their loved one.
              </p>

              <p className="mt-5 font-serif text-xl italic text-[#8B6A3E]">
                Serving with Devotion
              </p>
            </div>

            <div className="grid h-[330px] grid-cols-[1.55fr_1.1fr_0.85fr] grid-rows-2 gap-2 sm:h-[380px]">
              <div className="relative row-span-2 overflow-hidden rounded-2xl">
                <Image src="/assets/about-reference/story-main.png" alt="Pandits performing traditional rituals" fill quality={100} sizes="(max-width: 1024px) 45vw, 28vw" className="object-cover" />
              </div>
              <div className="relative overflow-hidden rounded-xl">
                <Image src="/assets/about-reference/story-ritual-items.png" alt="Traditional ritual samagri" fill quality={100} sizes="(max-width: 1024px) 30vw, 18vw" className="object-cover" />
              </div>
              <div className="relative row-span-2 overflow-hidden rounded-xl">
                <Image src="/assets/about-reference/story-ghat-temple.png" alt="Sacred temple ghat illuminated by golden hour light" fill quality={100} sizes="(max-width: 1024px) 24vw, 14vw" className="object-cover" />
              </div>
              <div className="relative overflow-hidden rounded-xl">
                <Image src="/assets/about-reference/story-evening-ghat.png" alt="Peaceful evening ritual by the river" fill quality={100} sizes="(max-width: 1024px) 30vw, 18vw" className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#E9DDCD] bg-[#F8F3EC] py-7">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-5 flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8B6A3E]">
              <span className="h-px w-8 bg-[#C9A574]" />
              <span>What We Take Care Of</span>
              <span className="h-px w-8 bg-[#C9A574]" />
            </div>

            <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-4 lg:grid-cols-7 lg:divide-x lg:divide-[#E0D2C0]">
              {careServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div key={service.title} className="px-3 text-center lg:px-4">
                    <Icon className="mx-auto h-8 w-8 stroke-[1.45] text-[#8B6A3E]" />
                    <h3 className="mt-2 font-serif text-base text-[#2C1810]">{service.title}</h3>
                    <p className="mx-auto mt-1 max-w-[120px] text-[10px] leading-4 text-[#6B584B]">{service.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#3B2B21] py-8 lg:py-10">
          <div className="absolute -left-20 top-0 h-64 w-64 rounded-full border border-[#C9A574]/10" />
          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full border border-[#C9A574]/10" />

          <div className="relative mx-auto grid w-full max-w-7xl items-center gap-7 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.78fr] lg:px-8">
            <div className="text-white">
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D9B681]">Why Choose Us</div>
              <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">Here for You, Always</h2>
              <div className="mt-4 h-[2px] w-10 bg-[#D9B681]" />
              <p className="mt-4 max-w-sm text-sm leading-6 text-white/75">
                We bring transparency, professionalism and heartfelt service
                together to help you in every possible way.
              </p>
              <a href="/contact" className="mt-5 inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-xs font-semibold text-[#3B2B21] transition hover:bg-[#F2E8DA]">
                Know More
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div key={reason.title} className="rounded-xl border border-white/20 bg-[#FBF8F3] px-4 py-5 text-center shadow-sm">
                    <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-[#B89564] text-[#8B6A3E]">
                      <Icon className="h-5 w-5 stroke-[1.5]" />
                    </div>
                    <h3 className="mt-3 font-serif text-base leading-tight text-[#2C1810]">{reason.title}</h3>
                    <p className="mt-2 text-[10px] leading-4 text-[#6A574A]">{reason.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#FBF8F3] py-8 lg:py-9">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6 flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8B6A3E]">
              <span className="h-px w-8 bg-[#C9A574]" />
              <span>Our Process</span>
              <span className="h-px w-8 bg-[#C9A574]" />
            </div>

            <div className="relative grid gap-6 md:grid-cols-5 md:gap-4">
              <div className="absolute left-[10%] right-[10%] top-6 hidden border-t border-dashed border-[#B89564] md:block" />
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className="relative text-center">
                    <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#B89564] bg-[#FBF8F3] text-[#8B6A3E]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mt-2 text-[9px] font-semibold text-[#B89564]">0{index + 1}</div>
                    <h3 className="mt-1 font-serif text-base text-[#2C1810]">{step.title}</h3>
                    <p className="mx-auto mt-1 max-w-[175px] text-[10px] leading-4 text-[#6A584B]">{step.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="pb-2 lg:pb-3">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 sm:px-6 lg:px-8">
            {/* Our Presence — full-width column layout */}
            <div className="rounded-2xl border border-[#E6D8C5] bg-[#F6EFE6] p-5 sm:p-6">
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8B6A3E]">
                Our Presence
              </div>
              <h2 className="mt-2 font-serif text-2xl text-[#2C1810] sm:text-3xl">
                Serving Families Across India
              </h2>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {locations.map((location) => (
                  <div
                    key={location.name}
                    className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-[#E1D2BE] bg-white shadow-sm"
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
                      <p className="font-serif text-base text-white">
                        {location.name}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-gradient-to-br from-[#9A7445] to-[#6F4E2F] px-3 text-center text-white shadow-sm">
                  <div>
                    <div className="font-serif text-3xl">+9</div>
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

            {/* Testimonial — stacked vertically so nothing stretches */}
         
          </div>
        </section>

        {/* SACRED PROMISE — image and content cards share the same height */}
        <section className="relative overflow-hidden bg-[#F2E9DD] pb-6 pt-2 lg:pb-7 lg:pt-3">
          <div className="absolute -left-28 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-[#C9A574]/20" />
          <div className="absolute -right-24 top-10 h-64 w-64 rounded-full bg-[#8B6A3E]/5 blur-3xl" />

          <div className="relative mx-auto grid w-full max-w-7xl items-stretch gap-4 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-6 lg:px-8">
            <div className="grid h-[320px] grid-cols-[1.35fr_0.85fr] grid-rows-2 gap-2.5 sm:h-[380px] lg:h-full lg:min-h-[470px]">
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

            <div className="flex h-full flex-col justify-center rounded-[22px] border border-[#E0CFBA] bg-white/85 p-5 shadow-[0_16px_42px_rgba(73,49,31,0.09)] backdrop-blur-sm sm:p-6">
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8B6A3E]">
                <span>Our Sacred Promise</span>
                <span className="h-px w-8 bg-[#C9A574]" />
              </div>

              <h2 className="mt-2.5 max-w-[500px] font-serif text-[28px] leading-[1.08] text-[#2C1810] sm:text-[34px]">
                Every Farewell Deserves Dignity, Peace & Devotion
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
                      className="flex items-center gap-3 rounded-xl border border-[#E8DCCB] bg-[#FBF8F3] px-3 py-2.5"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#8B6A3E] text-white">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-serif text-[15px] leading-5 text-[#2C1810]">
                          {item.title}
                        </h3>
                        <p className="mt-0.5 text-[10px] leading-4 text-[#6A584B]">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <a
                href="/contact"
                className="mt-4 inline-flex w-fit items-center gap-2 rounded-lg bg-[#8B6A3E] px-4 py-2.5 text-xs font-semibold text-white shadow-md transition duration-300 hover:bg-[#73532F] hover:shadow-lg"
              >
                Speak With Our Sewa Team
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#3B2B21] py-7 text-center text-white">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810] via-[#5B432F] to-[#2C1810]" />
          <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(circle_at_15%_70%,#D7B37A_0,transparent_23%),radial-gradient(circle_at_85%_60%,#D7B37A_0,transparent_22%)]" />

          <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl sm:text-3xl">We Are Here to Serve You in Your Time of Need</h2>
            <p className="mt-1 text-xs text-white/75 sm:text-sm">Call us anytime for immediate support.</p>
            <a href="tel:+911234567890" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#8B6A3E] px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#75552F]">
              <PhoneCall className="h-4 w-4" />
              +91 123 456 7890
            </a>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10px] text-white/75">
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5" /> Clear Pricing</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5" /> Verified Support</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5" /> Available 24/7</span>
            </div>
          </div>
        </section>
      </main>

      <Footer variant="seva" />
    </div>
  );
}