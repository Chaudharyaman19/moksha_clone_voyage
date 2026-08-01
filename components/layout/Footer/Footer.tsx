"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Facebook,
  Globe,
  Heart,
  Instagram,
  Leaf,
  Link2,
  Mail,
  MapPin,
  Phone,
  Send,
  Shield,
  Twitter,
  Youtube,
} from "lucide-react";
import { useState } from "react";
import mokshalogo from "../../../public/assets/logoreal.jpeg";
import mokshaSevaLogo from "../../../public/assets/logo-moksha-seva.png";

interface FooterProps {
  variant?: "voyage" | "seva";
}

const socialLinks = [
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "Twitter", href: "#", icon: Twitter },
  { label: "YouTube", href: "#", icon: Youtube },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Footer({ variant = "voyage" }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const isSeva = variant === "seva";

  const brandName = isSeva ? "Moksha Sewa" : "Moksha Voyage";
  const tagline = isSeva
    ? "Dignified Funeral & Ritual Services"
    : "Compassionate End-of-Life Guidance";
  const description = isSeva
    ? "Complete funeral, cremation, pandit, ambulance, hearse van, prayer hall and family support services with dignity, tradition and care."
    : "Providing respectful guidance with dignity, tradition and care for every family.";
  const contactEmail = isSeva
    ? "info@mokshasewa.org"
    : "info@mokshasewa.com";
  const contactNumber = isSeva ? "+91 96549 00525" : "+91 9568259784";

  const services = isSeva
    ? [
      "Funeral Samagri",
      "Pandit Service",
      "Ambulance & Hearse Van",
      "Prayer Hall Booking",
    ]
    : ["Ritual Guidance", "Planning Support", "Documentation", "24/7 Care"];

  const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");

    window.setTimeout(() => {
      setSubscribed(false);
    }, 2500);
  };

  return (
    <footer className="relative overflow-hidden bg-[#170E09] text-[#F8F2E9]">
      {/* Soft layered background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(190,132,49,0.11),transparent_30%),radial-gradient(circle_at_85%_25%,rgba(190,132,49,0.08),transparent_26%),linear-gradient(180deg,#21140D_0%,#170E09_100%)]" />

      {/* Decorative lotus outlines */}
      <div className="pointer-events-none absolute -left-20 top-44 h-64 w-64 rounded-full border border-[#C79545]/10" />
      <div className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full border border-[#C79545]/10" />
      <div className="pointer-events-none absolute bottom-12 left-1/2 h-36 w-36 -translate-x-1/2 rounded-full border border-[#C79545]/5" />

      <div className="relative z-10 mx-auto max-w-7xl px-0 py-8 lg:py-10">
        {/* Top section */}
        <div className="grid items-center gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-[#D5A451]/30 bg-white p-2 shadow-[0_12px_35px_rgba(0,0,0,0.25)] sm:h-24 sm:w-24">
                <Image
                  src={isSeva ? mokshaSevaLogo : mokshalogo}
                  alt={brandName}
                  fill
                  priority
                  sizes="96px"
                  className="object-contain p-2"
                />
              </div>

              <div>
                <h2 className="font-serif text-3xl leading-none text-white sm:text-4xl">
                  {brandName}
                </h2>
                <p className="mt-2 text-sm font-medium tracking-wide text-[#D9A84F] sm:text-base">
                  {tagline}
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <span className="h-px w-20 bg-gradient-to-r from-[#D9A84F] to-transparent" />
                  <span className="h-1.5 w-1.5 rotate-45 border border-[#D9A84F]" />
                  <span className="h-px w-20 bg-gradient-to-l from-[#D9A84F] to-transparent" />
                </div>
              </div>
            </div>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/72 sm:text-[15px]">
              {description}
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#D3A14D]/55 bg-white/[0.025] text-white transition duration-300 hover:-translate-y-1 hover:border-[#E4B75F] hover:bg-[#D3A14D] hover:text-[#1A100A]"
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Request support */}
          <div className="relative overflow-hidden rounded-3xl border border-[#C99645]/55 bg-white/[0.035] p-5 shadow-[0_22px_55px_rgba(0,0,0,0.26)] backdrop-blur-sm sm:p-6 lg:p-6">
            <div className="pointer-events-none absolute -right-14 -top-12 h-52 w-52 rounded-full border border-[#D3A14D]/10" />
            <div className="pointer-events-none absolute -right-6 top-8 h-28 w-28 rotate-45 rounded-[38%] border border-[#D3A14D]/8" />

            <div className="relative">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D3A14D]/65 text-[#E4B75F]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-white">
                    {isSeva ? "Request Support" : "Stay Connected"}
                  </h3>
                  <p className="mt-1 text-xs text-white/55">
                    {isSeva
                      ? "Share your email and our support team will contact you."
                      : "Receive thoughtful guidance and important updates."}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <span className="h-px w-20 bg-gradient-to-r from-[#D3A14D] to-transparent" />
                <span className="h-2 w-2 rotate-45 border border-[#D3A14D]" />
                <span className="h-px w-20 bg-gradient-to-l from-[#D3A14D] to-transparent" />
              </div>

              <form
                onSubmit={handleSubscribe}
                className="mt-4 flex flex-col gap-3 sm:flex-row"
              >
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder={isSeva ? "Family contact email" : "Your email address"}
                  className="min-h-12 flex-1 rounded-xl border border-[#B88846]/55 bg-white/[0.045] px-4 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-[#E4B75F] focus:bg-white/[0.07]"
                  required
                />
                <button
                  type="submit"
                  className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 text-sm font-semibold transition duration-300 sm:min-w-32 ${subscribed
                    ? "bg-emerald-600 text-white"
                    : "bg-gradient-to-b from-[#E5B85F] to-[#C78B32] text-[#24150C] hover:brightness-110"
                    }`}
                >
                  {subscribed ? "Submitted" : isSeva ? "Send" : "Join"}
                  {!subscribed && <Send className="h-4 w-4" />}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="my-6 h-px bg-gradient-to-r from-transparent via-[#B17C37]/55 to-transparent lg:my-7" />

        {/* Navigation columns */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          <div>
            <FooterColumnTitle icon={Link2} title="Quick Links" />
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-[#E4B75F]"
                  >
                    <ChevronRight className="h-4 w-4 text-[#D3A14D] transition group-hover:translate-x-1" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterColumnTitle icon={Leaf} title="Services" />
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-2 text-sm leading-5 text-white/70"
                >
                  <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[#D3A14D]" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterColumnTitle icon={MapPin} title="Contact" />
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#D3A14D]" />
                <span>Delhi NCR</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#D3A14D]" />
                <a
                  href={`mailto:${contactEmail}`}
                  className="break-all transition hover:text-[#E4B75F]"
                >
                  {contactEmail}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#D3A14D]" />
                <a
                  href={`tel:${contactNumber.replace(/\s/g, "")}`}
                  className="transition hover:text-[#E4B75F]"
                >
                  {contactNumber}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <FooterColumnTitle icon={Heart} title="Values" />
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              {[
                { icon: Heart, label: "Compassion" },
                { icon: Shield, label: "Trust" },
                { icon: Leaf, label: "Respect" },
                { icon: Globe, label: "Service" },
              ].map((value) => {
                const Icon = value.icon;

                return (
                  <li key={value.label} className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-[#D3A14D]" />
                    <span>{value.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-7 flex items-center gap-4">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#B17C37]/55" />
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B17C37]/40 text-[#D3A14D]">
            <Leaf className="h-5 w-5" />
          </div>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#B17C37]/55" />
        </div>

        <div className="mt-3 flex flex-col items-center justify-between gap-3 text-center text-xs text-white/45 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {brandName} • All rights reserved
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="transition hover:text-[#E4B75F]">
              Privacy Policy
            </Link>
            <span className="h-3 w-px bg-white/15" />
            <Link href="/terms" className="transition hover:text-[#E4B75F]">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface FooterColumnTitleProps {
  icon: React.ElementType;
  title: string;
}

function FooterColumnTitle({ icon: Icon, title }: FooterColumnTitleProps) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <Icon className="h-6 w-6 text-[#D3A14D]" />
        <h3 className="font-serif text-xl text-white">{title}</h3>
      </div>
      <div className="mt-2 h-px w-24 bg-gradient-to-r from-[#D3A14D] to-transparent" />
    </div>
  );
}