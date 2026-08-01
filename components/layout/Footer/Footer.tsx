"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Facebook,
  Flame,
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

/* Kalash finial — same signature as About & Contact pages */
function Kalash() {
  return (
    <span className="pointer-events-none absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
      <span className="block h-1.5 w-1.5 rounded-full border border-[#8B6A3E] bg-[#D9B681]" />
    </span>
  );
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
  const contactEmail = isSeva ? "info@mokshasewa.org" : "info@mokshasewa.com";
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
      {/* fine gold line marking the start of the footer */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#D9B681] to-transparent" />

      {/* Soft layered background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(190,132,49,0.11),transparent_30%),radial-gradient(circle_at_85%_25%,rgba(190,132,49,0.08),transparent_26%),linear-gradient(180deg,#21140D_0%,#170E09_100%)]" />

      {/* Devanagari watermark */}
      <div className="pointer-events-none absolute -right-8 top-1/2 hidden -translate-y-1/2 select-none font-serif text-[160px] leading-none text-[#D9B681]/[0.05] lg:block">
        मोक्ष
      </div>

      {/* Decorative rings */}
      <div className="pointer-events-none absolute -left-20 top-24 h-56 w-56 rounded-full border border-[#C79545]/10" />
      <div className="pointer-events-none absolute -right-24 top-8 h-64 w-64 rounded-full border border-[#C79545]/10" />

      <div className="relative z-10 mx-auto max-w-7xl px-0 py-5 lg:py-6">
        {/* ---------- Top section: brand + support ---------- */}
        <div className="grid items-center gap-4 lg:grid-cols-[1fr_1fr] lg:gap-6">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3.5">
              {/* logo tile crowned with a kalash */}
              <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16">
                <Kalash />
                <div className="relative h-full w-full overflow-hidden rounded-xl border border-[#D5A451]/30 bg-white p-1.5 shadow-[0_10px_28px_rgba(0,0,0,0.25)]">
                  <Image
                    src={isSeva ? mokshaSevaLogo : mokshalogo}
                    alt={brandName}
                    fill
                    priority
                    sizes="64px"
                    className="object-contain p-1.5"
                  />
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl leading-none text-white">
                  {isSeva ? (
                    <>
                      Moksha <span className="italic text-[#E4B75F]">Sewa</span>
                    </>
                  ) : (
                    <>
                      Moksha <span className="italic text-[#E4B75F]">Voyage</span>
                    </>
                  )}
                </h2>
                <p className="mt-1 text-xs font-medium tracking-wide text-[#D9A84F] sm:text-[13px]">
                  {tagline}
                </p>
              </div>
            </div>

            <p className="mt-3 max-w-xl text-[13px] leading-6 text-white/70">
              {description}
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-2.5">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="group flex h-9 w-9 items-center justify-center rounded-full border border-[#D3A14D]/55 bg-white/[0.025] text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#E4B75F] hover:bg-[#D3A14D] hover:text-[#1A100A]"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}

              {/* helpline sits inline with socials — no separate ribbon needed */}
              <a
                href={`tel:${contactNumber.replace(/\s/g, "")}`}
                className="group ml-1 inline-flex items-center gap-2 rounded-lg bg-gradient-to-b from-[#E5B85F] to-[#C78B32] px-3.5 py-2 text-xs font-semibold text-[#24150C] shadow-md transition duration-300 hover:brightness-110"
              >
                <span className="relative flex h-3.5 w-3.5 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#24150C]/25" />
                  <Phone className="relative h-3.5 w-3.5" />
                </span>
                {contactNumber}
              </a>
            </div>
          </div>

          {/* Request support — slim card */}
          <div className="relative overflow-hidden rounded-2xl border border-[#C99645]/50 bg-white/[0.035] p-4 shadow-[0_16px_40px_rgba(0,0,0,0.24)] backdrop-blur-sm sm:p-5">
            <span className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-[#C9A574] via-[#E4B75F] to-[#C9A574]" />
            <div className="pointer-events-none absolute -right-14 -top-12 h-44 w-44 rounded-full border border-[#D3A14D]/10" />

            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D3A14D]/65 text-[#E4B75F]">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-serif text-lg leading-tight text-white">
                    {isSeva ? (
                      <>
                        Request <span className="italic text-[#E4B75F]">Support</span>
                      </>
                    ) : (
                      <>
                        Stay <span className="italic text-[#E4B75F]">Connected</span>
                      </>
                    )}
                  </h3>
                  <p className="mt-0.5 text-[11px] leading-4 text-white/55">
                    {isSeva
                      ? "Share your email and our support team will contact you."
                      : "Receive thoughtful guidance and important updates."}
                  </p>
                </div>
              </div>

              <form
                onSubmit={handleSubscribe}
                className="mt-3 flex flex-col gap-2 sm:flex-row"
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
                  className="min-h-10 flex-1 rounded-lg border border-[#B88846]/55 bg-white/[0.045] px-3.5 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-[#E4B75F] focus:bg-white/[0.07]"
                  required
                />
                <button
                  type="submit"
                  className={`group inline-flex min-h-10 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition duration-300 ${subscribed
                      ? "bg-emerald-600 text-white"
                      : "bg-gradient-to-b from-[#E5B85F] to-[#C78B32] text-[#24150C] hover:brightness-110"
                    }`}
                >
                  {subscribed ? "Submitted" : isSeva ? "Send" : "Join"}
                  {!subscribed && (
                    <Send className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ---------- Divider with diya medallion ---------- */}
        <div className="my-4 flex items-center gap-3 lg:my-5">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#B17C37]/55" />
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#B17C37]/40 text-[#E4B75F]">
            <Flame className="h-3.5 w-3.5" />
          </div>
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#B17C37]/55" />
        </div>

        {/* ---------- Navigation columns ---------- */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div>
            <FooterColumnTitle icon={Link2} title="Quick Links" />
            <ul className="mt-2.5 space-y-1.5">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-[13px] text-white/70 transition hover:text-[#E4B75F]"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-[#D3A14D] transition group-hover:translate-x-0.5" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterColumnTitle icon={Leaf} title="Services" />
            <ul className="mt-2.5 space-y-1.5">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-1.5 text-[13px] leading-5 text-white/70"
                >
                  <ChevronRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#D3A14D]" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterColumnTitle icon={MapPin} title="Contact" />
            <ul className="mt-2.5 space-y-1.5 text-[13px] text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#D3A14D]" />
                <span>Delhi NCR</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#D3A14D]" />
                <a
                  href={`mailto:${contactEmail}`}
                  className="break-all transition hover:text-[#E4B75F]"
                >
                  {contactEmail}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#D3A14D]" />
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
            <ul className="mt-2.5 space-y-1.5 text-[13px] text-white/70">
              {[
                { icon: Heart, label: "Compassion" },
                { icon: Shield, label: "Trust" },
                { icon: Leaf, label: "Respect" },
                { icon: Globe, label: "Service" },
              ].map((value) => {
                const Icon = value.icon;

                return (
                  <li key={value.label} className="flex items-center gap-2">
                    <Icon className="h-3.5 w-3.5 text-[#D3A14D]" />
                    <span>{value.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* ---------- Bottom bar (shanti + copyright in one row) ---------- */}
        <div className="mt-4 border-t border-[#B17C37]/25 pt-3 lg:mt-5">
          <div className="flex flex-col items-center justify-between gap-2 text-center text-xs text-white/45 sm:flex-row sm:text-left">
            <p>
              © {new Date().getFullYear()} {brandName} • All rights reserved
            </p>
            <p className="font-serif text-[13px] tracking-[0.25em] text-[#D9A84F]/40">
              ॐ शांति शांति शांति
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
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-[#E4B75F]" />
        <h3 className="font-serif text-base text-white">{title}</h3>
      </div>
      <div className="mt-1.5 flex items-center gap-1.5">
        <span className="h-px w-12 bg-gradient-to-r from-[#D3A14D] to-transparent" />
        <span className="h-1 w-1 rotate-45 bg-[#D3A14D]/60" />
      </div>
    </div>
  );
}