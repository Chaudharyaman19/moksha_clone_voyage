"use client";
import Image from "next/image";
import Link from "next/link";
import { FaChevronRight, FaArrowRight } from "react-icons/fa";
import { PiFlowerLotus } from "react-icons/pi";
import footerMokshaLogo from "../../../public/homelogo/mok-footer-white.png";
import footerGhatBg from "../../../public/assets/footer-ghat-sunset.png";
import namoGangeLogo from "../../../public/assets/namo-gange-logo.webp";

type FooterSvgProps = { className?: string; strokeWidth?: number };

const svgBase = (strokeWidth = 1.7) => ({
  fill: "none",
  stroke: "currentColor",
  strokeWidth: strokeWidth + 0.45,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

function ReferenceChainIcon({ className, strokeWidth }: FooterSvgProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <g {...svgBase(strokeWidth)}>
        <path d="M19 29l-3.8 3.8a7 7 0 01-9.9-9.9l6.1-6.1a7 7 0 019.9 0" />
        <path d="M29 19l3.8-3.8a7 7 0 019.9 9.9l-6.1 6.1a7 7 0 01-9.9 0" />
        <path d="M16.5 31.5l15-15" />
      </g>
    </svg>
  );
}

function ReferenceHandHeartIcon({ className, strokeWidth }: FooterSvgProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <g {...svgBase(strokeWidth)}>
        <path d="M32 26.5S20.5 19 20.5 11.8c0-6.2 7.8-8.8 11.5-2.4 3.7-6.4 11.5-3.8 11.5 2.4C43.5 19 32 26.5 32 26.5z" />
        <path d="M12 31v15.5l10.5 6.5h19L52 43V29.5c0-2.6-3.2-3.8-5-2l-8.5 8.2" />
        <path d="M52 31l-10.5 9H29a4 4 0 010-8h8" />
        <path d="M12 31c4.8 0 8 2 11 5" />
        <path d="M6 29h6v21H6zM52 29h6v21h-6z" />
      </g>
    </svg>
  );
}

function ReferenceLotusIcon({ className, strokeWidth }: FooterSvgProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <g {...svgBase(strokeWidth)}>
        <path d="M32 8c9 9 9 19 0 29-9-10-9-20 0-29z" />
        <path d="M29 39C18 37 12 29 13 18c10 2 17 9 18 19" />
        <path d="M35 39c11-2 17-10 16-21-10 2-17 9-18 19" />
        <path d="M27 43C17 44 8 39 5 29c10-1 19 3 24 11" />
        <path d="M37 43c10 1 19-4 22-14-10-1-19 3-24 11" />
        <path d="M11 48c13 6 29 6 42 0" />
      </g>
    </svg>
  );
}

function ReferencePhoneIcon({ className, strokeWidth }: FooterSvgProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <g {...svgBase(strokeWidth)}>
        <path d="M13.5 5.5l7 10-5 5c3.2 6.2 6.9 9.9 13 13l5-5 10 7-3 7c-.7 1.6-2.3 2.5-4 2.2C18.2 42 6 29.8 3.3 11.5 3 9.8 4 8.2 5.5 7.5l8-2z" />
      </g>
    </svg>
  );
}

function ReferenceShieldIcon({ className, strokeWidth }: FooterSvgProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <g {...svgBase(strokeWidth)}>
        <path d="M32 5l23 9v16c0 14-9.7 24.2-23 29C18.7 54.2 9 44 9 30V14l23-9z" />
        <path d="M21 31l7 7 15-16" />
      </g>
    </svg>
  );
}

function ReferenceUsersIcon({ className, strokeWidth }: FooterSvgProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <g {...svgBase(strokeWidth)}>
        <circle cx="23" cy="19" r="8" />
        <circle cx="43" cy="21" r="7" />
        <path d="M7 52v-6c0-9 7-15 16-15s16 6 16 15v6" />
        <path d="M38 34c10-3 19 3 19 13v5" />
        <path d="M16 52V42M31 52V42M47 52V43" />
      </g>
    </svg>
  );
}

function ReferenceHeartIcon({ className, strokeWidth }: FooterSvgProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <g {...svgBase(strokeWidth)}>
        <path d="M32 55S7 40 7 21.5C7 7 25 4 32 16 39 4 57 7 57 21.5 57 40 32 55 32 55z" />
      </g>
    </svg>
  );
}

function GoldOfficeBuildingIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      {/* Center higher tower */}
      <path d="M11 5h10v23H11z" fill="#E2AC3D" fillOpacity="0.25" stroke="#E2AC3D" strokeWidth="1.8" />
      {/* Left wing */}
      <path d="M4 11h7v17H4z" fill="#E2AC3D" fillOpacity="0.25" stroke="#E2AC3D" strokeWidth="1.8" />
      {/* Right wing */}
      <path d="M21 11h7v17H21z" fill="#E2AC3D" fillOpacity="0.25" stroke="#E2AC3D" strokeWidth="1.8" />
      {/* Windows in center tower */}
      <rect x="13" y="8" width="2" height="2" fill="#E2AC3D" rx="0.5" />
      <rect x="17" y="8" width="2" height="2" fill="#E2AC3D" rx="0.5" />
      <rect x="13" y="12" width="2" height="2" fill="#E2AC3D" rx="0.5" />
      <rect x="17" y="12" width="2" height="2" fill="#E2AC3D" rx="0.5" />
      <rect x="13" y="16" width="2" height="2" fill="#E2AC3D" rx="0.5" />
      <rect x="17" y="16" width="2" height="2" fill="#E2AC3D" rx="0.5" />
      {/* Windows in left wing */}
      <rect x="6.5" y="14" width="2" height="2" fill="#E2AC3D" rx="0.5" />
      <rect x="6.5" y="18" width="2" height="2" fill="#E2AC3D" rx="0.5" />
      {/* Windows in right wing */}
      <rect x="23.5" y="14" width="2" height="2" fill="#E2AC3D" rx="0.5" />
      <rect x="23.5" y="18" width="2" height="2" fill="#E2AC3D" rx="0.5" />
      {/* Entrance Door */}
      <path d="M14 28v-5h4v5" stroke="#E2AC3D" strokeWidth="1.8" />
    </svg>
  );
}

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/mokshagallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const services = [
  { label: "Request Sewa Help", href: "/request-help" },
  { label: "Transport Coordination", href: "/ambulanceservices" },
  { label: "Ritual Material Support", href: "/furalservices" },
  { label: "Priest Guidance", href: "/panditservices" },
  { label: "Family Guidance", href: "/specialservices" },
  { label: "Unclaimed Body Sewa", href: "/unclaimed-body-sewa" },
];

const initiatives = [
  { label: "Unclaimed Bodies Support", href: "/mortal-records" },
  { label: "Volunteer Programme", href: "/volunteer/register" },
  { label: "Awareness & Outreach", href: "/blog" },
];

const values = [
  {
    icon: ReferenceHandHeartIcon,
    title: "COMPASSION",
    description: "We serve with\nempathy and humanity.",
  },
  {
    icon: ReferenceShieldIcon,
    title: "DIGNITY",
    description: "Every life is treated\nwith respect.",
  },
  {
    icon: ReferenceUsersIcon,
    title: "SERVICE",
    description: "We support every step\nof the final journey.",
  },
  {
    icon: ReferenceLotusIcon,
    title: "TRUST",
    description: "Transparent, accountable\nand responsible.",
  },
  {
    icon: ReferenceHeartIcon,
    title: "TOGETHER",
    description: "United for a more\ncompassionate world.",
  },
];

export default function FooterNew() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#050706] text-white">
      {/* =========================================================
          1. TOP BANNER (Golden Gradient Bar)
      ========================================================== */}
      <div className="relative z-30 border-y border-[#C6953E] bg-[linear-gradient(90deg,#F5DEB4_0%,#FDF0D5_48%,#EED09A_100%)] px-4 py-2.5 shadow-[0_-5px_18px_rgba(0,0,0,0.12)] sm:px-6">
        <div className="mx-auto flex min-h-[44px] w-full max-w-[1520px] flex-col items-center justify-between gap-3 sm:flex-row">
          <div className="flex min-w-0 items-center gap-3 text-center sm:text-left">
            <PiFlowerLotus className="h-7 w-7 shrink-0 text-[#A96F19]" />
            <span className="text-[14px] font-bold text-[#2A1D0D] sm:text-[15px]">
              Stand with dignity. Serve with compassion.
            </span>
          </div>

          <div className="flex w-full shrink-0 flex-wrap items-center justify-center gap-2.5 sm:w-auto sm:flex-nowrap sm:justify-end">
            <Link
              href="/request-help"
              className="inline-flex h-[38px] items-center justify-center gap-2 rounded-[8px] border border-[#B97818] bg-[linear-gradient(180deg,#F0C05B_0%,#D88D1D_100%)] px-3.5 text-[13px] font-semibold text-[#211609] shadow-[0_3px_10px_rgba(160,99,18,0.2)] transition hover:brightness-105 active:scale-95"
            >
              <ReferencePhoneIcon className="h-4 w-4" strokeWidth={1.8} />
              <span>Request Help</span>
              <FaArrowRight className="h-3 w-3" />
            </Link>

            <Link
              href="/donation"
              className="inline-flex h-[38px] items-center justify-center gap-2 rounded-[8px] border border-[#B97818] bg-[linear-gradient(180deg,#F0C05B_0%,#D88D1D_100%)] px-3.5 text-[13px] font-semibold text-[#211609] shadow-[0_3px_10px_rgba(160,99,18,0.2)] transition hover:brightness-105 active:scale-95"
            >
              <ReferenceHandHeartIcon className="h-4 w-4" strokeWidth={1.8} />
              <span>Donate Now</span>
              <FaArrowRight className="h-3 w-3" />
            </Link>

            <Link
              href="/volunteer/register"
              className="inline-flex h-[38px] items-center justify-center gap-2 rounded-[8px] border border-[#B97818] bg-[linear-gradient(180deg,#F0C05B_0%,#D88D1D_100%)] px-3.5 text-[13px] font-semibold text-[#211609] shadow-[0_3px_10px_rgba(160,99,18,0.2)] transition hover:brightness-105 active:scale-95"
            >
              <ReferenceUsersIcon className="h-4 w-4" strokeWidth={1.8} />
              <span>Become a Volunteer</span>
              <FaArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* =========================================================
          2. DESKTOP SCENE (Temple Ghat photo on left with Golden Arc)
      ========================================================== */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block overflow-hidden">
        {/* The Ghat photo container strictly on the left */}
        <div className="absolute inset-y-0 left-0 w-[240px] overflow-hidden">
          <Image
            src={footerGhatBg}
            alt="Varanasi Ghats"
            fill
            sizes="240px"
            className="object-cover object-[15%_65%] filter contrast-110 brightness-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/50" />
        </div>

        {/* SVG Arc and Dark Mask */}
        <svg
          className="absolute inset-y-0 left-0 h-full w-[240px] pointer-events-none z-[1]"
          viewBox="0 0 240 450"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="goldArcGradExact" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DFAD42" />
              <stop offset="35%" stopColor="#FEE5A2" />
              <stop offset="65%" stopColor="#E2AC3D" />
              <stop offset="100%" stopColor="#B3781B" />
            </linearGradient>
            <filter id="goldArcGlowExact" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Solid deep dark mask to the right of the arc */}
          <path
            d="M 90 0 Q 170 225 90 450 L 240 450 L 240 0 Z"
            fill="#050706"
          />

          {/* Glowing Golden Arc boundary */}
          <path
            d="M 90 0 Q 170 225 90 450"
            fill="none"
            stroke="url(#goldArcGradExact)"
            strokeWidth="4"
            filter="url(#goldArcGlowExact)"
          />
        </svg>
      </div>

      {/* Mobile/tablet backdrop */}
      <div className="pointer-events-none absolute inset-0 z-0 lg:hidden">
        <Image
          src={footerGhatBg}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-10"
        />
        <div className="absolute inset-0 bg-black/95" />
      </div>

      {/* =========================================================
          3. MAIN CONTENT (Columns 1-4 + Our Offices & Contact Card)
      ========================================================== */}
      <div className="relative z-10 mx-auto w-full max-w-[1520px] px-4 py-6 sm:px-6 lg:px-6 lg:pr-20 xl:pr-20 lg:py-6">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-0">
          
          {/* COLUMN 1: BRAND SECTION (Matches reference screenshot 100%) */}
          <div className="flex flex-col items-center text-center w-full lg:w-[24%] shrink-0 lg:pl-16 xl:pl-18 pr-3 lg:border-r lg:border-[#C39438]/30">
            <div className="relative flex w-[135px] items-center justify-center">
              <Image
                src={footerMokshaLogo}
                alt="Moksha Sewa"
                width={135}
                height={105}
                className="h-[92px] w-auto max-w-full object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
              />
            </div>

            <h2 className="mt-1 text-[21px] font-bold uppercase tracking-[0.03em] text-white">
              MOKSHA SEWA
            </h2>

            <p className="mt-0.5 text-[12px] font-medium tracking-[0.01em] text-[#E2AC3D]">
              A Namo Gange Trust Initiative
            </p>

            <GoldDivider compact className="mt-1" />

            <p className="mt-2 max-w-[240px] text-[12px] font-normal leading-[1.45] text-white/90">
              We stand with the forgotten, the unclaimed and the helpless to ensure every life&apos;s final journey is dignified, peaceful and respectful.
            </p>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div className="flex flex-col items-center px-2 py-1 w-full lg:w-[10%] shrink-0 lg:border-r lg:border-[#C39438]/30">
            <span className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#D9A33A]/80 text-[#E2AC3D]">
              <ReferenceChainIcon className="h-[26px] w-[26px]" strokeWidth={1.6} />
            </span>

            <h3 className="mt-2 whitespace-nowrap text-center text-[13px] font-bold uppercase tracking-[0.02em] text-white">
              QUICK LINKS
            </h3>

            <GoldDivider compact className="mt-1" />

            <ul className="mt-2.5 w-full space-y-1.5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 text-[12.5px] font-medium text-white/90 transition hover:text-[#E5B14A]"
                  >
                    <FaChevronRight className="h-2 w-2 text-[#E4A631] transition-transform group-hover:translate-x-0.5" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: OUR SERVICES */}
          <div className="flex flex-col items-center px-2 py-1 w-full lg:w-[13%] shrink-0 lg:border-r lg:border-[#C39438]/30">
            <span className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#D9A33A]/80 text-[#E2AC3D]">
              <ReferenceHandHeartIcon className="h-[28px] w-[28px]" strokeWidth={1.5} />
            </span>

            <h3 className="mt-2 whitespace-nowrap text-center text-[13px] font-bold uppercase tracking-[0.02em] text-white">
              OUR SERVICES
            </h3>

            <GoldDivider compact className="mt-1" />

            <ul className="mt-2.5 w-full space-y-1.5">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-start gap-1.5 text-[12.5px] font-medium text-white/90 transition hover:text-[#E5B14A]"
                  >
                    <FaChevronRight className="mt-1 h-2 w-2 shrink-0 text-[#E4A631] transition-transform group-hover:translate-x-0.5" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: OUR INITIATIVES */}
          <div className="flex flex-col items-center px-2 py-1 w-full lg:w-[11.5%] shrink-0">
            <span className="flex h-[48px] w-[48px] items-center justify-center rounded-full border border-[#D9A33A]/80 text-[#E2AC3D]">
              <ReferenceLotusIcon className="h-[28px] w-[28px]" strokeWidth={1.5} />
            </span>

            <h3 className="mt-2 whitespace-nowrap text-center text-[13px] font-bold uppercase tracking-[0.02em] text-white">
              OUR INITIATIVES
            </h3>

            <GoldDivider compact className="mt-1" />

            <ul className="mt-2.5 w-full space-y-1.5">
              {initiatives.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-start gap-1.5 text-[12.5px] font-medium text-white/90 transition hover:text-[#E5B14A]"
                  >
                    <FaChevronRight className="mt-1 h-2 w-2 shrink-0 text-[#E4A631] transition-transform group-hover:translate-x-0.5" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 5: OUR OFFICES & CONTACT (Exact shape, spacious ~40% width) */}
          <div className="flex flex-col w-full lg:w-[41%] shrink-0 pl-1">
            
            {/* Top row: Header tab on left, Namo Gange branding on right */}
            <div className="flex items-end justify-between px-1">
              {/* Header Tab with continuous border connection */}
              <div className="relative z-10 -mb-[1px] inline-flex items-center gap-3 rounded-t-2xl border-l border-r border-t border-[#8B6520]/80 bg-[#0e100e] px-4 py-2 shadow-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D9A33A] bg-black/40 text-[#E2AC3D]">
                  <ReferencePhoneIcon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="text-[13.5px] font-bold uppercase tracking-wider text-white">
                    OUR OFFICES &amp; CONTACT
                  </h3>
                  <div className="mt-0.5 flex items-center justify-start gap-1">
                    <span className="h-px w-5 bg-gradient-to-r from-transparent to-[#D9A33A]" />
                    <PiFlowerLotus className="h-3 w-3 text-[#D9A33A]" />
                    <span className="h-px w-5 bg-gradient-to-l from-transparent to-[#D9A33A]" />
                  </div>
                </div>
              </div>

              {/* Namo Gange Trust Brand Stamp */}
              <div className="flex flex-col items-center pb-2 pr-2 text-center">
                <Image
                  src={namoGangeLogo}
                  alt="Namo Gange"
                  width={120}
                  height={45}
                  className="h-8 w-auto object-contain brightness-110"
                />
                <span className="mt-0.5 text-[13px] font-bold leading-tight text-white">
                  Moksha Sewa
                </span>
                <span className="text-[10.5px] font-medium leading-tight text-[#E2AC3D]">
                  A Initiative of Namo Gange Trust
                </span>
              </div>
            </div>

            {/* Main Office Card Body */}
            <div className="relative z-0 rounded-b-2xl rounded-tr-2xl border border-[#8B6520]/80 bg-[#0e100e] p-3.5 sm:p-4 shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
              
              {/* ROW 1: Head Office – India */}
              <div className="flex flex-col gap-1.5 py-1.5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-2.5 min-w-0">
                  <span className="mt-0.5 shrink-0 text-[#E2AC3D]">
                    <GoldOfficeBuildingIcon className="h-6 w-6" />
                  </span>
                  <div className="min-w-0">
                    <h4 className="text-[13px] font-semibold text-[#E2AC3D] leading-tight">
                      Head Office – India
                    </h4>
                    <p className="mt-0.5 text-[11px] leading-[1.3] text-white/85">
                      <span className="block font-medium text-white/95">Namo Gange Trust</span>
                      Plot No. 12/52, Site II Industrial Area,<br />
                      Mohan Nagar, Ghaziabad – 201007, Uttar Pradesh, India.
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center justify-between gap-2.5 pl-9 sm:justify-end sm:pl-0">
                  <a
                    href="tel:+919220147229"
                    className="flex items-center gap-1.5 text-white transition hover:text-[#E2AC3D]"
                  >
                    <ReferencePhoneIcon className="h-3.5 w-3.5 text-[#E2AC3D]" strokeWidth={1.8} />
                    <span className="whitespace-nowrap text-[12.5px] font-medium">
                      +91 9220147229
                    </span>
                  </a>
                  <a
                    href="tel:+919220147229"
                    aria-label="Call Head Office"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#F6C868] via-[#E8B042] to-[#D99623] text-black shadow-md transition hover:scale-105 active:scale-95"
                  >
                    <FaArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="my-1 border-b border-[#8B6520]/35" />

              {/* ROW 2: Regional Office – Visakhapatnam, India */}
              <div className="flex flex-col gap-1.5 py-1.5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-2.5 min-w-0">
                  <span className="mt-0.5 shrink-0 text-[#E2AC3D]">
                    <GoldOfficeBuildingIcon className="h-6 w-6" />
                  </span>
                  <div className="min-w-0">
                    <h4 className="text-[13px] font-semibold text-[#E2AC3D] leading-tight">
                      Regional Office – Visakhapatnam, India
                    </h4>
                    <p className="mt-0.5 text-[11px] leading-[1.3] text-white/85">
                      <span className="block font-medium text-white/95">Namo Gange Wellness Pvt. Ltd.</span>
                      Door No. 36-46-51, 2nd Floor, Main Road,<br />
                      Kancharapalem, Visakhapatnam – 530008, Andhra Pradesh, India.
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center justify-between gap-2.5 pl-9 sm:justify-end sm:pl-0">
                  <a
                    href="tel:+916281482342"
                    className="flex items-center gap-1.5 text-white transition hover:text-[#E2AC3D]"
                  >
                    <ReferencePhoneIcon className="h-3.5 w-3.5 text-[#E2AC3D]" strokeWidth={1.8} />
                    <span className="whitespace-nowrap text-[12.5px] font-medium">
                      +91 6281482342
                    </span>
                  </a>
                  <a
                    href="tel:+916281482342"
                    aria-label="Call Regional Office"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#F6C868] via-[#E8B042] to-[#D99623] text-black shadow-md transition hover:scale-105 active:scale-95"
                  >
                    <FaArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="my-1 border-b border-[#8B6520]/35" />

              {/* ROW 3: International Office – London (UK) */}
              <div className="flex flex-col gap-1.5 py-1.5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-2.5 min-w-0">
                  <span className="mt-0.5 shrink-0 text-[#E2AC3D]">
                    <GoldOfficeBuildingIcon className="h-6 w-6" />
                  </span>
                  <div className="min-w-0">
                    <h4 className="text-[13px] font-semibold text-[#E2AC3D] leading-tight">
                      International Office – London (UK)
                    </h4>
                    <p className="mt-0.5 text-[11px] leading-[1.3] text-white/85">
                      <span className="block font-medium text-white/95">Namo Gange Wellness Ltd.</span>
                      6 Liddel Close, Luton, Bedfordshire, LU3 1TW, United Kingdom.
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center justify-between gap-2.5 pl-9 sm:justify-end sm:pl-0">
                  <a
                    href="tel:+447429519276"
                    className="flex items-center gap-1.5 text-white transition hover:text-[#E2AC3D]"
                  >
                    <ReferencePhoneIcon className="h-3.5 w-3.5 text-[#E2AC3D]" strokeWidth={1.8} />
                    <span className="whitespace-nowrap text-[12.5px] font-medium">
                      +44 7429 519276
                    </span>
                  </a>
                  <a
                    href="tel:+447429519276"
                    aria-label="Call International Office"
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#F6C868] via-[#E8B042] to-[#D99623] text-black shadow-md transition hover:scale-105 active:scale-95"
                  >
                    <FaArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* =========================================================
          4. VALUES ROW (5 Columns with gold borders)
      ========================================================== */}
      <div className="relative border-y border-[#B8862C] bg-[#070A09]">
        <PiFlowerLotus className="pointer-events-none absolute -left-5 bottom-0 h-24 w-24 text-[#D9A33A] opacity-[0.05]" />
        <PiFlowerLotus className="pointer-events-none absolute -right-5 bottom-0 h-24 w-24 text-[#D9A33A] opacity-[0.05]" />

        <div className="mx-auto grid w-full max-w-[1520px] grid-cols-1 px-4 py-2 sm:grid-cols-2 lg:grid-cols-5 lg:px-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={val.title}
                className={`flex min-h-[52px] items-center gap-3 px-3 py-1.5 sm:px-4 lg:justify-center lg:py-0 ${
                  idx < values.length - 1 ? "lg:border-r lg:border-[#C39438]/40" : ""
                }`}
              >
                <span className="relative inline-flex shrink-0">
                  <Icon
                    strokeWidth={1.45}
                    className="h-9 w-9 text-[#E3B44E] lg:h-[42px] lg:w-[42px]"
                  />
                </span>

                <div>
                  <h4 className="text-[13px] font-bold uppercase tracking-[0.02em] text-[#F3D481]">
                    {val.title}
                  </h4>
                  <p className="mt-0.5 whitespace-pre-line text-[11px] leading-[1.35] text-white/90">
                    {val.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================================
          5. BOTTOM COPYRIGHT & LEGAL BAR
      ========================================================== */}
      <div className="relative bg-black px-4 py-2.5 sm:px-6 lg:px-8">
        <div className="mx-auto flex min-h-[42px] w-full max-w-[1520px] flex-col items-center justify-between gap-2.5 text-center lg:flex-row">
          
          {/* Left: Copyright text */}
          <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-[11.5px] text-white/90 sm:text-[12px]">
            <span>© 2026 Moksha Sewa – Dignified Last Rites &amp; Support</span>
            <span className="hidden h-3 w-px bg-white/25 sm:inline-block" />
            <span>A Initiative of Namo Gange Trust</span>
            <span className="hidden h-3 w-px bg-white/25 sm:inline-block" />
            <span>All Rights Reserved.</span>
          </div>

          {/* Right: Policy Links + Developed by enCodency */}
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] text-white/90 sm:text-[11.5px]">
            <Link
              href="/sitemap.xml"
              className="transition hover:text-[#E5B14A]"
            >
              Sitemap
            </Link>
            <span className="h-3 w-px bg-white/25" />

            <Link
              href="/privacy-policy"
              className="transition hover:text-[#E5B14A]"
            >
              Privacy Policy
            </Link>
            <span className="h-3 w-px bg-white/25" />

            <Link
              href="/terms"
              className="transition hover:text-[#E5B14A]"
            >
              Terms &amp; Conditions
            </Link>
            <span className="h-3 w-px bg-white/25" />

            <div className="flex items-center gap-1.5 pl-1">
              <span className="text-white/85">
                Designed &amp; Developed by
              </span>
              <div className="relative flex items-center overflow-hidden rounded bg-[#ED1C24] px-1.5 py-0.5 shadow-sm">
                <Image
                  src="/assets/encodency-logo.png"
                  alt="enCodency Pvt. Ltd."
                  width={110}
                  height={22}
                  className="h-6 w-auto object-contain"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

function GoldDivider({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <span
        className={`h-px bg-gradient-to-r from-transparent to-[#D9A33A] ${
          compact ? "w-8" : "w-12"
        }`}
      />
      <PiFlowerLotus
        className={`${compact ? "h-3.5 w-3.5" : "h-[16px] w-[16px]"} text-[#D9A33A]`}
      />
      <span
        className={`h-px bg-gradient-to-l from-transparent to-[#D9A33A] ${
          compact ? "w-8" : "w-12"
        }`}
      />
    </div>
  );
}
