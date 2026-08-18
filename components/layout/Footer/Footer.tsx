"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaChevronRight,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
  FaRegClock,
  FaStar,
  FaDonate,
} from "react-icons/fa";
import { useState } from "react";
import footerMokshaLogo from "../../../public/assets/logo-moksha-seva.png";
import { newsletterApi } from "@/lib/newsletterApi";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Our Initiatives", href: "/initiatives" },
  { label: "Gallery", href: "/moksha-gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const services = [
  { label: "Request Sewa Help", href: "/request-help" },
  { label: "Transport Coordination", href: "/ambulanceservices" },
  { label: "Ritual Material Support", href: "/furalservices" },
  { label: "Priest Guidance", href: "/panditservices" },
  { label: "Unclaimed Case Support", href: "/request-help" },
  { label: "Volunteer Support", href: "/volunteer/register" },
  { label: "Family Guidance", href: "/specialservices" },
  { label: "Support This Mission", href: "/donation" },
];


const socials = [
  { label: "Facebook", href: "#", icon: FaFacebookF },
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "YouTube", href: "#", icon: FaYoutube },
];



function FooterLogoWhiteText({
  width,
  height,
  priority = false,
  objectLeft = false,
  alt = "",
}: {
  width: number;
  height: number;
  priority?: boolean;
  objectLeft?: boolean;
  alt?: string;
}) {
  return (
    <div
      className="footer-logo-highlight pointer-events-none relative shrink-0 rounded-xl"
      style={{ width, height }}
    >
      {/* Original logo stays exactly the same */}
      <Image
        src={footerMokshaLogo}
        alt={alt}
        fill
        priority={priority}
        sizes={`${width}px`}
        className={`object-contain ${objectLeft ? "object-left" : ""}`}
      />

      {/* Only the bottom logo-text area becomes white */}
      <Image
        src={footerMokshaLogo}
        alt=""
        fill
        aria-hidden="true"
        sizes={`${width}px`}
        className={`pointer-events-none object-contain brightness-0 invert ${objectLeft ? "object-left" : ""}`}
        style={{ clipPath: "inset(76% 0 0 0)" }}
      />
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const brandName = "Moksha Sewa";
  const tagline = "Humanitarian End-of-Life Support Mission";
  const description =
    "A Namo Gange Trust initiative supporting economically weaker families and legally authorised unclaimed cases with compassionate last-rites assistance.";

  const contactEmail = "info@mokshasewa.org";
  const contactNumber = "9220147229";

  const handleSubscribe = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;

    try {
      await newsletterApi.subscribe(email.trim(), "footer-request-support");
      setSubscribed(true);
      setEmail("");

      window.setTimeout(() => {
        setSubscribed(false);
      }, 2500);
    } catch {
      // Keep footer submission non-blocking.
    }
  };

  return (
    <footer className="relative overflow-hidden bg-[#0F0E0C] text-white">
      {/* Ghat background image - included inside ZIP at public/assets */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-left-bottom bg-no-repeat opacity-95"
        style={{
          backgroundImage: "url('/assets/moksha-footer-ghat-bg.webp')",
        }}
      />

      {/* Same dark fade as reference: visible ghat on left, almost black on right */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(24,16,10,0.20)_0%,rgba(18,15,12,0.58)_28%,rgba(12,12,11,0.92)_58%,rgba(9,10,10,0.98)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(13,12,10,0.10)_0%,rgba(10,10,9,0.18)_70%,rgba(7,8,8,0.70)_100%)]" />

      {/* Gold top border */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#6F4218] via-[#D9962D] to-[#6F4218]" />

      <div className="relative z-10 mx-auto w-full max-w-[1540px] px-5 pb-0 pt-3 sm:px-7 lg:px-10">
        {/* Main footer grid */}
        <div className="grid gap-3 lg:grid-cols-[1.28fr_0.58fr_0.66fr_0.70fr_0.92fr] lg:gap-5 xl:gap-6">
          {/* BRAND + TRUST */}
          <div className="min-w-0">
            <div className="flex flex-col items-start gap-0">
              <div className="-mt-4 mb-1 ml-2">
                <FooterLogoWhiteText
                  width={132}
                  height={116}
                  priority
                  objectLeft
                  alt={brandName}
                />
              </div>

              <div>
                <h2 className="footer-title-glow font-serif text-[23px] font-medium leading-none tracking-[0.02em] text-[#FFF9EF] sm:text-[26px]">
                  MOKSHA SEWA
                </h2>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.06em] text-[#E9A22D] sm:text-[11px]">
                  {tagline}
                </p>
              </div>
            </div>

            <p className="mt-2 max-w-[390px] text-[13px] font-medium leading-5 text-white/90">
              {description}
            </p>

            <Link
              href="/donation"
              className="donate-nav-sparkle relative mt-3 inline-flex h-[42px] min-w-[154px] items-center justify-center gap-2 overflow-hidden rounded-full border border-[#F4C46A] bg-gradient-to-r from-[#B76B16] via-[#E5A93E] to-[#B76B16] px-5 text-[14px] font-semibold text-white shadow-[0_0_18px_rgba(229,169,62,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(229,169,62,0.72)]"
            >
              <span className="donate-nav-shine" aria-hidden />
              <FaDonate className="relative z-10 h-3.5 w-3.5" />
              <span className="relative z-10">Donate Now</span>
              <FaStar className="donate-star donate-star-one" aria-hidden />
              <FaStar className="donate-star donate-star-two" aria-hidden />
            </Link>

          </div>

          {/* QUICK LINKS */}
          <FooterColumn title="QUICK LINKS">
            <ul className="mt-1 space-y-0.5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="footer-link-glow group inline-flex items-center gap-2 rounded-md px-1 py-0 text-[13px] font-medium text-white/90 transition hover:text-[#E8A32E]"
                  >
                    <FaChevronRight className="h-3 w-3 text-[#E8A32E] transition-transform group-hover:translate-x-0.5" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* SERVICES */}
          <FooterColumn title="OUR SERVICES">
            <ul className="mt-1 space-y-0.5">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="footer-link-glow group inline-flex items-center gap-2 rounded-md px-1 py-0 text-[13px] font-medium text-white/90 transition hover:text-[#E8A32E]"
                  >
                    <FaChevronRight className="h-3 w-3 text-[#E8A32E] transition-transform group-hover:translate-x-0.5" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          {/* CONTACT */}
          <FooterColumn title="CONTACT US">
            <div className="mt-1 space-y-0.5 text-[12px] leading-4 text-white/90">
              <div className="footer-contact-glow flex items-start gap-2 rounded-lg px-1 py-0.5">
                <FaMapMarkerAlt className="mt-1 h-5 w-5 shrink-0 text-[#E8A32E]" />
                <p>
                  Delhi NCR,

                  India
                </p>
              </div>

              <a
                href={`tel:+91${contactNumber}`}
                className="footer-contact-glow flex items-center gap-2 rounded-lg px-1 py-0.5 transition hover:text-[#E8A32E]"
              >
                <FaPhoneAlt className="h-4 w-4 shrink-0 text-[#E8A32E]" />
                <span>+91 {contactNumber}</span>
              </a>

              <a
                href={`mailto:${contactEmail}`}
                className="footer-contact-glow flex items-start gap-2 rounded-lg px-1 py-0.5 transition hover:text-[#E8A32E]"
              >
                <FaEnvelope className="mt-1 h-4 w-4 shrink-0 text-[#E8A32E]" />
                <span className="break-all">{contactEmail}</span>
              </a>

              <div className="footer-contact-glow flex items-start gap-2 rounded-lg px-1 py-0.5">
                <FaRegClock className="mt-1 h-4 w-4 shrink-0 text-[#E8A32E]" />
                <p>
                  We are available

                  24/7 for you
                </p>
              </div>
            </div>
          </FooterColumn>

          {/* REQUEST SUPPORT CARD */}
          <div className="donate-nav-sparkle relative self-start overflow-hidden rounded-[16px] border border-[#F4C46A] bg-[#211B15]/90 p-2 shadow-[0_0_22px_rgba(229,169,62,0.24)] backdrop-blur-[2px] sm:p-2">
            <span className="donate-nav-shine" aria-hidden />
            <FaStar className="donate-star donate-star-one" aria-hidden />
            <FaStar className="donate-star donate-star-two" aria-hidden />

            <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full border border-[#C78018] bg-[#2A2119]/85 text-[#F3A72F] shadow-[0_0_18px_rgba(224,151,39,0.10)]">
              <FaEnvelope className="h-3.5 w-3.5" />
            </div>

            <h3 className="mt-1 text-center font-serif text-[15px] font-semibold text-white sm:text-[16px]">
              REQUEST SUPPORT
            </h3>

            <div className="mx-auto mt-1 flex max-w-[160px] items-center">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C78018]/65" />
              <span className="mx-1.5 text-[#E8A32E]">◇</span>
              <span className="h-px flex-1 bg-gradient-to-r from-[#C78018]/65 to-transparent" />
            </div>

            <p className="mx-auto mt-1 max-w-[235px] text-center text-[10px] leading-3.5 text-white/88">
              Share your email and our support team will contact you.
            </p>

            <form onSubmit={handleSubscribe} className="mt-2 space-y-1.5">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>

              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Your email address"
                className="h-[32px] w-full rounded-lg border border-white/25 bg-white/[0.06] px-3 text-[12px] font-medium text-white outline-none transition placeholder:text-white/55 focus:border-[#D58C22]"
                required
              />

              <button
                type="submit"
                className={`relative inline-flex h-[32px] w-full items-center justify-center gap-2 overflow-hidden rounded-lg text-[12px] font-semibold text-white shadow-[0_5px_14px_rgba(0,0,0,0.18)] transition ${subscribed
                    ? "bg-emerald-600"
                    : "bg-gradient-to-r from-[#B76B16] via-[#E5A93E] to-[#B76B16] hover:brightness-110 hover:shadow-[0_0_20px_rgba(229,169,62,0.58)]"
                  }`}
              >
                {!subscribed && <span className="donate-nav-shine" aria-hidden />}
                <span className="relative z-10">{subscribed ? "Submitted" : "Send"}</span>
                {!subscribed && <FaPaperPlane className="relative z-10 h-3.5 w-3.5" />}
              </button>
            </form>

            <div className="mt-1 flex items-center justify-center gap-2">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="footer-social-glow flex h-6 w-6 items-center justify-center rounded-full border border-[#D18A1E] text-white transition hover:-translate-y-0.5 hover:bg-[#D18A1E] hover:text-[#15120F]"
                  >
                    <Icon className="h-3 w-3" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="-mx-5 mt-2 border-t-2 border-[#B87516] bg-[#090B0C]/95 px-5 py-1 sm:-mx-7 sm:px-7 lg:-mx-10 lg:px-10">
          <div className="mx-auto flex max-w-[1540px] flex-col items-center justify-between gap-2 sm:flex-row">
            <div className="footer-logo-highlight pointer-events-none rounded-lg opacity-90">
              <FooterLogoWhiteText width={48} height={32} />
            </div>

            <div className="flex flex-col items-center gap-3 text-center text-[12px] font-medium text-white/88 sm:flex-row sm:gap-6">
              <p>© {new Date().getFullYear()} {brandName}. All Rights Reserved.</p>
              <span className="hidden h-4 w-px bg-white/55 sm:block" />
              <Link href="/privacy-policy" className="footer-link-glow rounded-md px-1.5 py-0.5 transition hover:text-[#E8A32E]">
                Privacy Policy
              </Link>
              <span className="hidden h-4 w-px bg-white/55 sm:block" />
              <Link href="/terms" className="footer-link-glow rounded-md px-1.5 py-0.5 transition hover:text-[#E8A32E]">
                Terms & Conditions
              </Link>
            </div>

            <div className="footer-logo-highlight pointer-events-none rounded-lg opacity-90">
              <FooterLogoWhiteText width={48} height={32} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div className="min-w-0">
      <h3 className="footer-title-glow text-[13px] font-semibold tracking-[0.02em] text-white">
        {title}
      </h3>
      <div className="mt-1 h-[2px] w-12 bg-gradient-to-r from-[#E7A32D] to-transparent" />
      {children}
    </div>
  );
}
