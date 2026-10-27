"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  FaChevronRight,
  FaEnvelope,
  FaPaperPlane,
  FaArrowRight,
  FaArrowUp,
} from "react-icons/fa";
import { PiFlowerLotus } from "react-icons/pi";
import { MapPin, Mail, Clock } from "lucide-react";
import footerMokshaLogo from "../../../public/homelogo/mok-footer-white.png";
import footerBg from "../../../public/assets/footer-ghat-sunset.png";
import namoGangeLogo from "../../../public/assets/namo-gange-logo.webp";
import { newsletterApi } from "@/lib/newsletterApi";
import SuccessPopup from "@/components/common/SuccessPopup";
import { imageOrFallback, itemOrFallback, textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";

type FooterSvgProps = { className?: string; strokeWidth?: number };

const svgBase = (strokeWidth = 1.7) => ({
  fill: "none",
  stroke: "currentColor",
  strokeWidth: strokeWidth + 0.45,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

function ReferenceChainIcon({ className, strokeWidth }: FooterSvgProps) {
  return <svg viewBox="0 0 48 48" className={className} aria-hidden><g {...svgBase(strokeWidth)}><path d="M19 29l-3.8 3.8a7 7 0 01-9.9-9.9l6.1-6.1a7 7 0 019.9 0" /><path d="M29 19l3.8-3.8a7 7 0 019.9 9.9l-6.1 6.1a7 7 0 01-9.9 0" /><path d="M16.5 31.5l15-15" /></g></svg>;
}

function ReferenceHandHeartIcon({ className, strokeWidth }: FooterSvgProps) {
  return <svg viewBox="0 0 64 64" className={className} aria-hidden><g {...svgBase(strokeWidth)}><path d="M32 26.5S20.5 19 20.5 11.8c0-6.2 7.8-8.8 11.5-2.4 3.7-6.4 11.5-3.8 11.5 2.4C43.5 19 32 26.5 32 26.5z" /><path d="M12 31v15.5l10.5 6.5h19L52 43V29.5c0-2.6-3.2-3.8-5-2l-8.5 8.2" /><path d="M52 31l-10.5 9H29a4 4 0 010-8h8" /><path d="M12 31c4.8 0 8 2 11 5" /><path d="M6 29h6v21H6zM52 29h6v21h-6z" /></g></svg>;
}

function ReferenceLotusIcon({ className, strokeWidth }: FooterSvgProps) {
  return <svg viewBox="0 0 64 64" className={className} aria-hidden><g {...svgBase(strokeWidth)}><path d="M32 8c9 9 9 19 0 29-9-10-9-20 0-29z" /><path d="M29 39C18 37 12 29 13 18c10 2 17 9 18 19" /><path d="M35 39c11-2 17-10 16-21-10 2-17 9-18 19" /><path d="M27 43C17 44 8 39 5 29c10-1 19 3 24 11" /><path d="M37 43c10 1 19-4 22-14-10-1-19 3-24 11" /><path d="M11 48c13 6 29 6 42 0" /></g></svg>;
}

function ReferencePhoneIcon({ className, strokeWidth }: FooterSvgProps) {
  return <svg viewBox="0 0 48 48" className={className} aria-hidden><g {...svgBase(strokeWidth)}><path d="M13.5 5.5l7 10-5 5c3.2 6.2 6.9 9.9 13 13l5-5 10 7-3 7c-.7 1.6-2.3 2.5-4 2.2C18.2 42 6 29.8 3.3 11.5 3 9.8 4 8.2 5.5 7.5l8-2z" /></g></svg>;
}

function ReferenceBuildingIcon({ className, strokeWidth }: FooterSvgProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <g {...svgBase(strokeWidth)}>
        <path d="M24 6l10 7v27H14V13l10-7z" />
        <path d="M10 20v20h4V20" />
        <path d="M34 20v20h4V20" />
        <circle cx="20" cy="18" r="1.5" />
        <circle cx="28" cy="18" r="1.5" />
        <circle cx="20" cy="25" r="1.5" />
        <circle cx="28" cy="25" r="1.5" />
        <circle cx="20" cy="32" r="1.5" />
        <circle cx="28" cy="32" r="1.5" />
        <path d="M22 40v-4h4v4" />
      </g>
    </svg>
  );
}

function ReferenceShieldIcon({ className, strokeWidth }: FooterSvgProps) {
  return <svg viewBox="0 0 64 64" className={className} aria-hidden><g {...svgBase(strokeWidth)}><path d="M32 5l23 9v16c0 14-9.7 24.2-23 29C18.7 54.2 9 44 9 30V14l23-9z" /><path d="M21 31l7 7 15-16" /></g></svg>;
}

function ReferenceUsersIcon({ className, strokeWidth }: FooterSvgProps) {
  return <svg viewBox="0 0 64 64" className={className} aria-hidden><g {...svgBase(strokeWidth)}><circle cx="23" cy="19" r="8" /><circle cx="43" cy="21" r="7" /><path d="M7 52v-6c0-9 7-15 16-15s16 6 16 15v6" /><path d="M38 34c10-3 19 3 19 13v5" /><path d="M16 52V42M31 52V42M47 52V43" /></g></svg>;
}

function ReferenceHeartIcon({ className, strokeWidth }: FooterSvgProps) {
  return <svg viewBox="0 0 64 64" className={className} aria-hidden><g {...svgBase(strokeWidth)}><path d="M32 55S7 40 7 21.5C7 7 25 4 32 16 39 4 57 7 57 21.5 57 40 32 55 32 55z" /></g></svg>;
}

// Custom golden line SVGs matching screenshot
function CremationLotusIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c3 3.5 3 7.5 0 11.5-3-4-3-8 0-11.5z" />
      <path d="M10 14.5c-4-.5-6.5-3.5-6-7.5 3.5.5 6 3.5 6 7.5z" />
      <path d="M14 14.5c4-.5 6.5-3.5 6-7.5-3.5.5-6 3.5-6 7.5z" />
      <path d="M9 16c-3.5.5-6.5-1-7.5-5 3.5-.5 6.5 1 7.5 5z" />
      <path d="M15 16c3.5.5 6.5-1 7.5-5-3.5-.5-6.5 1-7.5 5z" />
      <path d="M4 18c5 2 11 2 16 0" />
    </svg>
  );
}

function NamastePrayerIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4v16" />
      <path d="M12 4c-1.5 2-3 4.5-3 7 0 2.5 1.5 4 3 5" />
      <path d="M12 4c1.5 2 3 4.5 3 7 0 2.5-1.5 4-3 5" />
      <path d="M9 11c-2 0-3-1.5-3-3.5C6 5.5 8 4 9 4" />
      <path d="M15 11c2 0 3-1.5 3-3.5 0-2-2-3.5-3-3.5" />
      <path d="M7 18h10" />
    </svg>
  );
}

function AmbulanceTruckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 6h11v11H3z" />
      <path d="M14 9h4l3 3v5h-7z" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
      <path d="M8.5 9v4M6.5 11h4" />
    </svg>
  );
}

function PriestGuruIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="4" />
      <path d="M6 21v-2a6 6 0 0112 0v2" />
      <path d="M9 13l3 3 3-3" />
    </svg>
  );
}

function FuneralPotIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 7h10v2a5 5 0 01-10 0V7z" />
      <path d="M8 7V4h8v3" />
      <path d="M10 14v6M14 14v6" />
      <path d="M6 20h12" />
    </svg>
  );
}

function FamilyGuidanceIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3" />
      <circle cx="16" cy="10" r="2.5" />
      <path d="M4 19v-2a5 5 0 0110 0v2" />
      <path d="M14 17a4 4 0 016 0v2" />
    </svg>
  );
}

function DiyaFlameIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3c-1.5 2-2 3.5-2 5a2 2 0 004 0c0-1.5-.5-3-2-5z" />
      <path d="M4 13c0 4.5 3.5 7 8 7s8-2.5 8-7H4z" />
      <path d="M7 20h10" />
    </svg>
  );
}

function HandHoldingHeartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 6.5s-2.5-2.5-4-1.5c-1.5 1-1 3 0 4.5l4 4 4-4c1-1.5 1.5-3.5 0-4.5-1.5-1-4 1.5-4 1.5z" />
      <path d="M3 13.5v3l4.5 2.5h8l4.5-3.5v-3c-1-1-2.5-.5-3.5.5L13 16" />
    </svg>
  );
}

function CommunityCareIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="3" />
      <path d="M7 19v-1a5 5 0 0110 0v1" />
      <circle cx="4" cy="10" r="2" />
      <path d="M2 19v-.5a3.5 3.5 0 014-3" />
      <circle cx="20" cy="10" r="2" />
      <path d="M22 19v-.5a3.5 3.5 0 00-4-3" />
    </svg>
  );
}

function MegaphoneAwarenessIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11v4h4l5 4V7L7 11H3z" />
      <path d="M16 9a4 4 0 010 6" />
      <path d="M19 6a8 8 0 010 12" />
      <path d="M6 15v4" />
    </svg>
  );
}

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Our Initiatives", href: "/initiatives" },
  { label: "Volunteer With Us", href: "/volunteer/register" },
  { label: "Gallery", href: "/mokshagallery" },
  { label: "Contact Us", href: "/contact" },
];

const services = [
  { label: "Dignified Cremation\nServices", href: "/services", iconImg: "/footer/Golden Lotus Flame Emblem.png" },
  { label: "Antim Sanskar Assistance", href: "/services", iconImg: "/footer/Glowing Golden Praying Hands Emblem.png" },
  { label: "Dead Body Transportation", href: "/ambulanceservices", iconImg: "/footer/Golden Delivery Truck Icon.png" },
  { label: "Pandit & Ritual Support", href: "/panditservices", iconImg: "/footer/Glossy Golden Avatar Icon.png" },
  { label: "Funeral Materials\n& Arrangements", href: "/furalservices", iconImg: "/footer/Ornate Golden Urn Emblem.png" },
  { label: "Family Guidance & Support", href: "/specialservices", iconImg: "/footer/Glossy Gold Team Emblem.png" },
];

const initiatives = [
  { label: "Dignified Last Rites", href: "/initiatives", iconImg: "/footer/Glossy Golden Flame Emblem.png" },
  { label: "Unclaimed Bodies Support", href: "/unclaimed-body-sewa", iconImg: "/footer/Glossy Golden Heart in Hand Emblem.png" },
  { label: "Underprivileged Family\nAssistance", href: "/initiatives", iconImg: "/footer/Glossy Golden Community Emblem.png" },
  { label: "Volunteer & Seva Network", href: "/volunteer/register", iconImg: "/footer/Glossy Gold Team Emblem.png" },
  { label: "Community Welfare & Outreach", href: "/initiatives", iconImg: "/footer/Glossy Golden Heart and Leaves Emblem.png" },
  { label: "Awareness & Social\nResponsibility", href: "/blog", iconImg: "/footer/Glossy Golden Megaphone Emblem.png" },
];

const values = [
  {
    iconImg: "/footer/Golden Heart in Cupped Hands Emblem.png",
    title: "Compassion",
    description: "We serve with\nempathy and humanity.",
  },
  {
    iconImg: "/footer/Glossy Golden Shield with Checkmark.png",
    title: "Dignity",
    description: "Every life is treated\nwith respect.",
  },
  {
    iconImg: "/footer/Glossy Golden Group Icon copy.png",
    title: "Service",
    description: "We support every step\nof the final journey.",
  },
  {
    iconImg: "/footer/Glossy Golden Lotus NoBorder.png",
    title: "Trust",
    description: "Transparent, accountable\nand responsible.",
  },
  {
    iconImg: "/footer/Glossy Gold Heart Frame.png",
    title: "Together",
    description: "United for a more\ncompassionate world.",
  },
];

const legalLinks = [
  { label: "Sitemap", href: "/sitemap.xml" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
];

export default function FooterNew() {
  const websiteSection = useWebsiteSection("footer");
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [disabledPaths, setDisabledPaths] = useState<string[]>([]);
  const brandName = textOrFallback(websiteSection?.title, "Moksha Sewa", 60);
  const description = textOrFallback(websiteSection?.description, "We stand with the forgotten, the unclaimed and the helpless to ensure every life's final journey is dignified, peaceful and respectful.", 240);

  const contactEmail = textOrFallback(websiteSection?.contactEmail, "info@mokshasewa.org", 120);
  const contactNumber = textOrFallback(websiteSection?.phoneNumber, "9220147229", 24);
  const contactAddress = textOrFallback(websiteSection?.contactAddress, "Delhi • Ghaziabad • Noida, India", 160);
  const availabilityText = textOrFallback(websiteSection?.availabilityText, "We are available\n24/7 for you", 80);
  const actionTitle = textOrFallback(websiteSection?.actionTitle, "Stand with dignity. Serve with compassion.", 90);
  const requestTitle = textOrFallback(websiteSection?.requestTitle, "Request Support", 50);
  const requestDescription = textOrFallback(websiteSection?.requestDescription, "Share your email and our support team will contact you.", 140);
  const inputPlaceholder = textOrFallback(websiteSection?.inputPlaceholder, "Your email address", 50);
  const submitLabel = textOrFallback(websiteSection?.submitLabel, "Send Request", 36);
  const submittedLabel = textOrFallback(websiteSection?.submittedLabel, "Submitted", 36);
  const requestSupportImage = imageOrFallback(websiteSection?.secondaryImage, "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165347/moksha-sewa/assets/request_support.webp");
  const footerItems = websiteSection?.items ?? [];
  // Quick links directly uses the complete 7 links from the reference image
  const managedQuickLinks = quickLinks
    .filter((item) => !disabledPaths.includes(item.href));
  const managedServices = services
    .filter((item) => !disabledPaths.includes(item.href));
  const managedInitiatives = initiatives
    .filter((item) => !disabledPaths.includes(item.href));
  const managedValues = values.map((item, index) => ({ ...item, ...itemOrFallback(footerItems, index + 14, { title: item.title, description: item.description }) }));
  const managedLegalLinks = legalLinks
    .map((item, index) => ({ ...item, ...itemOrFallback(footerItems, index + 19, item) }))
    .filter((item) => !disabledPaths.includes(item.href));

  useEffect(() => {
    let cancelled = false;
    const fetchDisabledPages = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api/v1"}/settings`, { cache: "no-store" });
        if (!response.ok) return;
        const body = await response.json();
        if (cancelled || !body.data) return;

        const settings = body.data;
        const disabled: string[] = [];
        const pageKeyMap: Record<string, string> = {
          landingPage: "/",
          aboutPage: "/about",
          servicesPage: "/services",
          ambulancePage: "/ambulanceservices",
          panditPage: "/panditservices",
          funeralPage: "/furalservices",
          funeralDecorationPage: "/furaldecoration",
          prayerHallPage: "/prayerhallservices",
          specialServicePage: "/specialservices",
          callingRelativesPage: "/callingrelativesservices",
          harsevanPage: "/harsevanservices",
          unclaimedBodyPage: "/unclaimed-body-sewa",
          volunteerPage: "/volunteer/register",
          partnershipPage: "/partnership",
          csrPage: "/csr",
          requestHelpPage: "/request-help",
          donationPage: "/donation",
          contactPage: "/contact",
          trackPage: "/track",
          privacyPage: "/privacy-policy",
          termsPage: "/terms",
          refundPage: "/refund-policy",
          conductPage: "/code-of-conduct",
          careersPage: "/careers",
        };
        for (const [key, path] of Object.entries(pageKeyMap)) {
          const config = settings[key];
          if (config) {
            let isEnabled = true;
            if (config.enabled !== undefined) {
              isEnabled = config.enabled;
            } else if (config.sections && config.sections.length > 0) {
              isEnabled = config.sections.some((s: any) => s.enabled !== false);
            }
            if (!isEnabled) disabled.push(path);
          }
        }
        setDisabledPaths(disabled);
      } catch (e) { }
    };
    fetchDisabledPages();
    return () => { cancelled = true; };
  }, []);

  const handleSubscribe = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;

    try {
      await newsletterApi.subscribe(email.trim(), "footer-request-support");
      setSubscribed(true);
      setEmail("");
      setShowSuccessPopup(true);

      window.setTimeout(() => {
        setSubscribed(false);
      }, 2500);
    } catch {
      // Keep footer submission non-blocking.
    }
  };

  return (
    <>
      <footer
        className="relative isolate overflow-hidden bg-[#050706] text-white"
      >
        {/* Slim action band attached directly above the footer content. */}
        <div className="relative z-30 border-b border-[#F5E6CC] bg-[#FDF6EA] px-4 py-2 sm:px-6">
          <div className="mx-auto flex min-h-[46px] w-full max-w-[1600px] flex-col items-center justify-between gap-2.5 sm:flex-row">
            <div className="flex min-w-0 items-center gap-3 text-center text-[14px] font-semibold text-[#1F1911] sm:text-left sm:text-[14.5px]">
              {/* Golden outlined lotus icon */}
              <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0 text-[#C68A36] drop-shadow-[0_1px_2px_rgba(198,138,54,0.3)]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 6c3 3.5 3 9 0 14-3-5-3-10.5 0-14z" />
                <path d="M13 19c-4-.8-7-4.5-6.5-9.5 4 .8 6.5 4.5 6.5 9.5z" />
                <path d="M19 19c4-.8 7-4.5 6.5-9.5-4 .8-6.5 4.5-6.5 9.5z" />
                <path d="M11 21c-4 .5-8-1-9-5 4-.5 8 1 9 5z" />
                <path d="M21 21c4 .5 8-1 9-5-4-.5-8 1-9 5z" />
                <path d="M6 23.5c6 1.8 14 1.8 20 0" />
              </svg>
              <span className="font-medium text-[#1A1612] sm:whitespace-nowrap">{actionTitle}</span>
            </div>

            <div className="flex w-full shrink-0 flex-wrap items-center justify-center gap-3 sm:w-auto sm:flex-nowrap sm:justify-end">
              {pathname !== "/request-help" && (
                <Link
                  href={websiteSection?.secondaryButtonHref || "/request-help"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[38px] items-center justify-center gap-2 rounded-[6px] border border-[#DE932A] bg-gradient-to-b from-[#FED87A] via-[#F8AB2E] to-[#DD7D15] hover:brightness-105 px-3.5 text-[12.5px] sm:text-[13px] font-bold text-[#110D07] shadow-[0_2px_5px_rgba(0,0,0,0.12)] transition"
                >
                  {/* Phone receiver in circle outline - exact reference */}
                  <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] shrink-0 text-[#110D07]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9.5" />
                    <path d="M15.8 14.8c-.6.6-1.5.8-2.3.4-1.6-.9-3-2.3-3.9-3.9-.4-.8-.2-1.7.4-2.3l.7-.7c.3-.3.3-.9 0-1.2l-1.3-1.3c-.3-.3-.9-.3-1.2 0l-.7.7c-.9.9-1.1 2.3-.4 3.6 1.2 2.3 3.1 4.2 5.4 5.4 1.3.7 2.7.5 3.6-.4l.7-.7c.3-.3.3-.9 0-1.2l-1.3-1.3c-.3-.3-.9-.3-1.2 0l-.8.6z" />
                  </svg>
                  <span className="whitespace-nowrap">{textOrFallback(websiteSection?.secondaryButtonLabel, "Request Help", 36)}</span>
                  {/* Real horizontal arrow -> */}
                  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-[#110D07]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12h14" />
                    <path d="M12 6l6 6-6 6" />
                  </svg>
                </Link>
              )}

              {pathname !== "/donation" && (
                <Link
                  href={websiteSection?.buttonHref || "/donation"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[38px] items-center justify-center gap-2 rounded-[6px] border border-[#DE932A] bg-gradient-to-b from-[#FED87A] via-[#F8AB2E] to-[#DD7D15] hover:brightness-105 px-3.5 text-[12.5px] sm:text-[13px] font-bold text-[#110D07] shadow-[0_2px_5px_rgba(0,0,0,0.12)] transition"
                >
                  {/* Exact Handshake / Cupped arms with floating heart icon from screenshot */}
                  <svg viewBox="0 0 24 24" className="h-[23px] w-[23px] shrink-0 text-[#110D07]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {/* Floating Heart above */}
                    <path d="M12 4.2c-1.3-1.6-3.3-1.6-4.5 0-1.4 1.5-.5 3.3 4.5 6.4 5-3.1 5.9-4.9 4.5-6.4-1.2-1.6-3.2-1.6-4.5 0z" />
                    {/* Left sleeve cuff */}
                    <rect x="2" y="11" width="3.2" height="7" rx="1" />
                    {/* Right sleeve cuff */}
                    <rect x="18.8" y="11" width="3.2" height="7" rx="1" />
                    {/* Left & Right arms clasped together in center */}
                    <path d="M5.2 13h2.3l2.8 2.2c.7.5 1.7.5 2.4 0l2.8-2.2h2.3" />
                    <path d="M5.2 16h3.2l2.3 1.5c.8.5 1.8.5 2.6 0l2.3-1.5h3.2" />
                  </svg>
                  <span className="whitespace-nowrap">{textOrFallback(websiteSection?.buttonLabel, "Donate Now", 36)}</span>
                  {/* Real horizontal arrow -> */}
                  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-[#110D07]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12h14" />
                    <path d="M12 6l6 6-6 6" />
                  </svg>
                </Link>
              )}

              {pathname !== "/volunteer/register" && (
                <Link
                  href={websiteSection?.tertiaryButtonHref || "/volunteer/register"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[38px] items-center justify-center gap-2 rounded-[6px] border border-[#DE932A] bg-gradient-to-b from-[#FED87A] via-[#F8AB2E] to-[#DD7D15] hover:brightness-105 px-3.5 text-[12.5px] sm:text-[13px] font-bold text-[#110D07] shadow-[0_2px_5px_rgba(0,0,0,0.12)] transition"
                >
                  {/* 3 People Volunteer Network Icon - exact match to reference */}
                  <svg viewBox="0 0 24 24" className="h-[23px] w-[23px] shrink-0 text-[#110D07]" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
                    {/* Center person */}
                    <circle cx="12" cy="7" r="2.8" />
                    <path d="M8 18.5v-2.2c0-2 1.8-3.5 4-3.5s4 1.5 4 3.5v2.2" />
                    {/* Left person */}
                    <circle cx="6" cy="9.5" r="2.2" />
                    <path d="M2.5 18.5v-1.8c0-1.5 1.2-2.7 2.7-3" />
                    {/* Right person */}
                    <circle cx="18" cy="9.5" r="2.2" />
                    <path d="M21.5 18.5v-1.8c0-1.5-1.2-2.7-2.7-3" />
                  </svg>
                  <span className="whitespace-nowrap">{textOrFallback(websiteSection?.tertiaryButtonLabel, "Become a Volunteer", 50)}</span>
                  {/* Real horizontal arrow -> */}
                  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-[#110D07]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12h14" />
                    <path d="M12 6l6 6-6 6" />
                  </svg>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* =========================================================
          DESKTOP SCENE
          Using the official goldback.png with Varanasi temple & glowing gold arc
        ========================================================== */}
        <div className="footer-ganga pointer-events-none absolute inset-0 z-0 hidden lg:block overflow-hidden">
          <div className="relative -left-[55px] h-full w-[calc(100%+55px)]">
            <Image
              src="/footer/goldback.png"
              alt=""
              fill
              priority={false}
              sizes="100vw"
              className="object-cover object-left"
            />
          </div>
        </div>

        {/* Mobile/tablet gets scenic wash */}
        <div className="footer-ganga pointer-events-none absolute inset-0 z-0 lg:hidden">
          <Image
            src="/footer/goldback.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-left opacity-[0.25]"
          />
          <div className="absolute inset-0 bg-black/90" />
        </div>

        <div className="footer-master relative z-10">
          {/* ========================= MAIN ROW ========================= */}
          <div className="mx-auto w-full max-w-[1600px] px-4 pb-3 pt-4 sm:px-6 lg:min-h-[370px] lg:px-4 lg:pb-2 lg:pt-4 xl:px-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-3 xl:grid-cols-[22%_9.5%_15.5%_15.5%_37.5%] xl:gap-0">
              {/* BRAND */}
              <div className="footer-col relative flex flex-col items-center justify-center px-3 text-center sm:col-span-2 lg:col-span-1 lg:min-h-[300px] lg:justify-start lg:pb-1 lg:pt-1 min-[1280px]:pl-[95px] min-[1280px]:pr-1">
                <div className="footer-brand-logo relative flex w-[145px] items-center justify-center overflow-hidden sm:w-[160px]">
                  <Image
                    src="/homelogo/mok-footer-white.png"
                    alt={brandName}
                    width={160}
                    height={120}
                    className="h-[95px] w-auto max-w-full object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)] sm:h-[102px]"
                  />
                  <ShineLayer sparks={4} gold />
                </div>

                {/* Only Tagline in one row */}
                <div className="mt-1 flex items-center justify-center">
                  <p className="footer-brand-tagline text-[11.5px] font-medium tracking-[0.01em] text-[#E2AC3D] sm:text-[12px] whitespace-nowrap">
                    {textOrFallback(websiteSection?.eyebrow, "A Namo Gange Trust Initiative", 70)}
                  </p>
                </div>

                <GoldDivider className="footer-brand-divider mt-1" />

                <p className="footer-brand-desc relative mx-auto mt-2 max-w-[240px] text-[10.5px] font-normal leading-[1.4] text-white/95 sm:text-[11px] text-center">
                  We stand with the forgotten, the
                  <br />
                  unclaimed and the helpless to ensure
                  <br />
                  every life&apos;s final journey is dignified,
                  <br />
                  peaceful and respectful.
                </p>

                {/* Namo Gange Logo & Tagline below brand text */}
                <div className="mt-3 flex items-center justify-center">
                  <Image
                    src="/footer/Glossy Namo Ganga Water Emblem.png"
                    alt="Namo Gange - A Journey to Healthy World"
                    width={240}
                    height={84}
                    className="h-[70px] sm:h-[76px] w-auto object-contain brightness-110 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
                  />
                </div>
              </div>

              {/* QUICK LINKS */}
              <FloatingCard iconImg="/footer/Glowing Golden Infinity Badge.png" title={textOrFallback(websiteSection?.quickLinksTitle, "Quick Links", 50)}>
                <ul className="space-y-[2px]">
                  {managedQuickLinks.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link inline-flex items-center gap-1.5 text-[10px] sm:text-[10.5px] font-normal leading-[1.18] text-white/95 transition hover:text-[#E5B14A] whitespace-nowrap"
                      >
                        <FaChevronRight className="footer-link-arrow h-2 w-2 shrink-0 text-[#E4A631]" />
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </FloatingCard>

              {/* SERVICES - MOKSHA SEWA */}
              <FloatingCard iconImg="/footer/Glowing Golden Praying Hands Emblem.png" title={textOrFallback(websiteSection?.servicesTitle, "Our Services – Moksha Sewa", 50)}>
                <ul className="space-y-0">
                  {managedServices.map((item, idx) => {
                    const iconImg = (item as any).iconImg || services[idx]?.iconImg;
                    return (
                      <li key={item.label} className="py-0">
                        <Link
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="footer-link inline-flex items-center gap-1.5 text-[10px] sm:text-[10.5px] font-normal leading-[1.12] text-white/95 transition hover:text-[#E5B14A]"
                        >
                          <span className="flex h-[32px] w-[32px] shrink-0 items-center justify-center">
                            {iconImg ? (
                              <Image
                                src={iconImg}
                                alt=""
                                width={32}
                                height={32}
                                className="h-full w-full object-contain drop-shadow-[0_2px_6px_rgba(226,172,61,0.35)]"
                              />
                            ) : null}
                          </span>
                          <span className="whitespace-pre-line">{item.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </FloatingCard>

              {/* INITIATIVES */}
              <FloatingCard iconImg="/footer/Glowing Golden Lotus Emblem.png" title="Our Seva Initiatives">
                <ul className="space-y-0">
                  {managedInitiatives.map((item, idx) => {
                    const iconImg = (item as any).iconImg || initiatives[idx]?.iconImg;
                    return (
                      <li key={item.label} className="py-0">
                        <Link
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="footer-link inline-flex items-center gap-1.5 text-[10px] sm:text-[10.5px] font-normal leading-[1.12] text-white/95 transition hover:text-[#E5B14A]"
                        >
                          <span className="flex h-[32px] w-[32px] shrink-0 items-center justify-center">
                            {iconImg ? (
                              <Image
                                src={iconImg}
                                alt=""
                                width={32}
                                height={32}
                                className="h-full w-full object-contain drop-shadow-[0_2px_6px_rgba(226,172,61,0.35)]"
                              />
                            ) : null}
                          </span>
                          <span className="whitespace-pre-line">{item.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </FloatingCard>

              {/* ========================= OUR GLOBAL PRESENCE ========================= */}
              <div className="footer-col relative flex flex-col justify-start sm:col-span-2 lg:col-span-2 xl:col-span-1 xl:pl-2 xl:-mt-0.5 sm:-mt-0.5">
                <div
                  className="relative w-full max-w-[660px] xl:max-w-full overflow-hidden rounded-[16px] border border-[#D9A33A]/60 pl-2.5 pr-2 py-2.5 sm:pl-3 sm:pr-3 sm:py-3 shadow-[0_8px_32px_rgba(0,0,0,0.85)] bg-cover bg-right bg-no-repeat"
                  style={{
                    backgroundImage: "url('/footer/image.png')",
                    backgroundColor: "#060908",
                  }}
                >
                  {/* Header: Golden Teardrop Pin + Our Global Presence + Centered Lotus Divider matching image */}
                  <div className="relative z-10 pb-1 flex flex-col items-start">
                    <div className="flex items-center gap-2.5">
                      {/* Teardrop golden location pin with elongated body */}
                      <svg
                        viewBox="0 0 24 28"
                        className="h-[32px] w-[23px] shrink-0 drop-shadow-[0_2px_10px_rgba(235,160,35,0.7)]"
                        fill="none"
                      >
                        <defs>
                          <radialGradient id="pinGoldGrad" cx="35%" cy="30%" r="70%">
                            <stop offset="0%" stopColor="#FFF2B2" />
                            <stop offset="35%" stopColor="#F5B82E" />
                            <stop offset="85%" stopColor="#C87A14" />
                            <stop offset="100%" stopColor="#8A4805" />
                          </radialGradient>
                        </defs>
                        {/* Elongated Teardrop Pin Path */}
                        <path
                          d="M12 1.5C7.2 1.5 3.5 5.2 3.5 10c0 6.6 7.4 15.3 7.85 15.82a.85.85 0 001.3 0C13.1 25.3 20.5 16.6 20.5 10c0-4.8-3.7-8.5-8.5-8.5z"
                          fill="url(#pinGoldGrad)"
                        />
                        {/* Center dark dot with gold rim */}
                        <circle cx="12" cy="10" r="3.2" fill="#0C0E0F" stroke="#F5B82E" strokeWidth="0.75" />
                      </svg>

                      <h3 className="text-[17px] sm:text-[18px] font-serif font-bold text-white tracking-wide">
                        Our Global Presence
                      </h3>
                    </div>

                    {/* Centered lotus divider below the title text only */}
                    <div className="mt-1 flex items-center justify-center w-full max-w-[210px] gap-2">
                      <span className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-[#E5A835] to-[#F7D879]" />
                      <PiFlowerLotus className="h-4 w-4 shrink-0 text-[#FFDE59] drop-shadow-[0_0_6px_rgba(255,222,89,0.7)]" />
                      <span className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent via-[#E5A835] to-[#F7D879]" />
                    </div>
                  </div>

                  {/* 3 Office Rows - Exactly matching user snippet */}
                  <div className="relative z-10 mt-2 space-y-2">
                    {[
                      {
                        title: "Head Office – Delhi NCR, India",
                        highlight: "India",
                        company: "Namo Gange Trust",
                        address: "Plot No. 12/52, Site II Industrial Area,\nMohan Nagar, Ghaziabad – 201007,\nUttar Pradesh, India.",
                        phone: "+91 9220147229",
                        tel: "tel:+919220147229",
                      },
                      {
                        title: "Regional Office – Visakhapatnam, India",
                        highlight: "Visakhapatnam, India",
                        company: "Namo Gange Wellness Pvt. Ltd.",
                        address: "Door No. 36-46-51, 2nd Floor, Main Road,\nKancharapalem, Visakhapatnam – 530008,\nAndhra Pradesh, India.",
                        phone: "+91 6281482342",
                        tel: "tel:+916281482342",
                      },
                      {
                        title: "Global Office – London, UK",
                        highlight: "London, UK",
                        company: "Namo Gange Wellness Ltd.",
                        address: "6 Liddel Close, Luton,\nBedfordshire, LU3 1TW,\nUnited Kingdom.",
                        phone: "+44 7429 519276",
                        tel: "tel:+447429519276",
                      },
                    ].map((office) => (
                      <div
                        key={office.title}
                        className="pb-1.5"
                      >
                        <div className="flex items-center gap-3">
                          {/* Gold Building Icon with right vertical golden line divider */}
                          <div className="relative shrink-0 flex items-center justify-center pr-3 border-r border-[#D9A33A]/70">
                            <Image
                              src="/footer/Glossy Gold Building Icon.png"
                              alt=""
                              width={36}
                              height={48}
                              className="h-[40px] w-auto object-contain drop-shadow-[0_2px_8px_rgba(226,172,61,0.6)]"
                            />
                          </div>

                          {/* Office Details */}
                          <div className="min-w-0 flex-1">
                            <h4 className="text-[11px] sm:text-[11.5px] font-semibold text-white tracking-[0.01em] leading-tight">
                              {office.title.replace(office.highlight, "")}
                              <span className="text-[#FFEB60] font-semibold">{office.highlight}</span>
                            </h4>
                            <p className="text-[10px] sm:text-[10.5px] font-normal text-white/95 leading-tight mt-0.5">
                              {office.company}
                            </p>

                            {/* Address and Phone close together as in reference image */}
                            <div className="mt-1 flex flex-wrap items-end justify-start gap-x-3 gap-y-1">
                              {/* Left address block with its own bottom gradient underline */}
                              <div className="shrink-0 pb-0.5 border-b border-transparent [border-image:linear-gradient(90deg,#F3D481_0%,#8E631F_70%,transparent_100%)_1]">
                                <p className="text-[9px] sm:text-[9.5px] font-normal leading-[1.3] text-[#ECE7DF] whitespace-pre-line">
                                  {office.address}
                                </p>
                              </div>

                              {/* Right phone block with curved gold receiver icon and its own bottom gradient underline right next to address */}
                              <div className="shrink-0 pb-0.5 border-b border-transparent [border-image:linear-gradient(90deg,#F3D481_0%,#8E631F_80%,transparent_100%)_1]">
                                <a
                                  href={office.tel}
                                  className="inline-flex items-center gap-1.5 text-[10px] sm:text-[10.5px] font-semibold text-white hover:text-[#FFEB60] transition-colors whitespace-nowrap"
                                >
                                  <Image
                                    src="/footer/Glossy Golden Telephone Handset Icon.png"
                                    alt=""
                                    width={16}
                                    height={16}
                                    className="h-3.5 w-3.5 object-contain shrink-0"
                                  />
                                  <span>{office.phone}</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================= VALUES ROW ========================= */}
          <div className="footer-values relative border-y border-[#B8862C] bg-[#070A09]/[0.99]">
            <PiFlowerLotus className="pointer-events-none absolute -left-5 bottom-0 h-28 w-28 text-[#D9A33A] opacity-[0.055]" />
            <PiFlowerLotus className="pointer-events-none absolute -right-5 bottom-0 h-28 w-28 text-[#D9A33A] opacity-[0.055]" />

            <div className="mx-auto grid w-full max-w-[1540px] grid-cols-1 px-4 py-1.5 sm:grid-cols-2 lg:grid-cols-5 lg:px-2">
              {managedValues.map((value, index) => {
                const iconImg = (value as any).iconImg || values[index]?.iconImg;

                return (
                  <div
                    key={value.title}
                    className={`footer-value flex min-h-[46px] items-center gap-2 px-2 py-0.5 sm:px-3 lg:justify-center lg:py-0 ${index < values.length - 1
                      ? "lg:border-r lg:border-[#C39438]/40"
                      : ""
                      }`}
                  >
                    <span className="relative inline-flex shrink-0">
                      {iconImg ? (
                        <Image
                          src={iconImg}
                          alt=""
                          width={38}
                          height={38}
                          className="footer-value-icon h-9 w-9 object-contain lg:h-[38px] lg:w-[38px] drop-shadow-[0_2px_6px_rgba(226,172,61,0.5)]"
                        />
                      ) : null}
                      <ShineLayer sparks={1} />
                    </span>

                    <div className="min-w-0">
                      <h4 className="footer-value-heading text-[12px] sm:text-[12.5px] font-semibold uppercase tracking-[0.015em] text-[#F3D481] leading-tight">
                        {value.title}
                      </h4>
                      <p className="footer-value-desc mt-0.5 text-[10px] sm:text-[10.5px] leading-[1.25] text-white/90 whitespace-nowrap">
                        {value.description.replace(/\n/g, " ")}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ========================= BOTTOM BAR ========================= */}
          <div className="footer-bottom relative bg-black">
            <div className="mx-auto flex min-h-[46px] w-full max-w-[1380px] flex-col items-center justify-between gap-2.5 px-4 py-2 text-center sm:px-6 lg:flex-row lg:px-8">
              {/* Left: Exact Image Pattern */}
              <div className="footer-bottom-left flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[12px] text-white/90">
                <span>© {new Date().getFullYear()} Moksha Sewa – Dignified Last Rites &amp; Support</span>
                <span className="h-3.5 w-px bg-white/25" />
                <span>A Initiative of Namo Gange Trust</span>
                <span className="h-3.5 w-px bg-white/25" />
                <span>All Rights Reserved.</span>
              </div>

              {/* Right: Policy Links + Designed & Developed by */}
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-[11.5px] text-white/90">
                <Link
                  href="/sitemap.xml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#E5B14A]"
                >
                  Sitemap
                </Link>
                <span className="h-3.5 w-px bg-white/20" />

                <Link
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#E5B14A]"
                >
                  Privacy Policy
                </Link>
                <span className="h-3.5 w-px bg-white/20" />

                <Link
                  href="/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-[#E5B14A]"
                >
                  Terms &amp; Conditions
                </Link>
                <span className="h-3.5 w-px bg-white/20" />

                <div className="flex items-center gap-1.5">
                  <span className="font-normal text-white/85">
                    Designed &amp; Developed by
                  </span>
                  <div className="relative flex items-center overflow-hidden rounded-md bg-[#ED1C24] px-1.5 py-0.5 shadow-sm">
                    <Image
                      src="/assets/encodency-logo.png"
                      alt="enCodency Pvt. Ltd."
                      width={120}
                      height={24}
                      className="h-8 w-auto object-contain"
                    />
                  </div>

                  {/* Scroll to Top Arrow Button */}
                  <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    aria-label="Scroll to top"
                    title="Scroll to top"
                    className="ml-1 flex h-6 w-6 items-center justify-center rounded-md bg-[#D9A33A] text-black shadow-sm transition-all hover:bg-[#c48e28] hover:scale-105 active:scale-95"
                  >
                    <FaArrowUp className="h-3 w-3 stroke-[1.5]" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </footer>
      <SuccessPopup
        open={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
        message={textOrFallback(websiteSection?.successMessage, "Thank you for reaching out. Our support team will contact you shortly.", 180)}
      />
    </>
  );
}

const SPARK_POSITIONS: Record<number, Array<{ top: number; left: number }>> = {
  1: [{ top: 34, left: 38 }],
  2: [
    { top: 22, left: 20 },
    { top: 55, left: 60 },
  ],
  3: [
    { top: 18, left: 16 },
    { top: 44, left: 52 },
    { top: 66, left: 24 },
  ],
  4: [
    { top: 18, left: 16 },
    { top: 38, left: 58 },
    { top: 60, left: 22 },
    { top: 78, left: 62 },
  ],
};

function ShineLayer({
  sparks = 0,
  gold = false,
}: {
  sparks?: number;
  gold?: boolean;
}) {
  const shineBg = gold
    ? "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0) 40%, rgba(255,255,255,0.95) 50%, rgba(255,215,150,0.75) 55%, transparent 68%)"
    : "linear-gradient(110deg, transparent 35%, rgba(255,255,255,0.75) 48%, rgba(255,255,255,0.35) 52%, transparent 65%)";

  return (
    <span
      aria-hidden
      className="footer-shine pointer-events-none absolute inset-0 z-10 overflow-hidden"
    >
      <span
        className="footer-shine-line absolute inset-y-0 left-0 w-[75%] opacity-0"
        style={{ background: shineBg, filter: "blur(0.2px)" }}
      />
      {(SPARK_POSITIONS[sparks] ?? []).map((pos, i) => (
        <span
          key={i}
          className="footer-spark absolute h-[3px] w-[3px] rounded-full opacity-0"
          style={{
            top: `${pos.top}%`,
            left: `${pos.left}%`,
            background:
              i % 3 === 2
                ? "#F28C18"
                : i % 2 === 1
                  ? "#FFE6A6"
                  : "#FFFFFF",
          }}
        />
      ))}
    </span>
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
        className={`h-px bg-gradient-to-r from-transparent to-[#D9A33A] ${compact ? "w-12" : "w-16"
          }`}
      />
      <span className="relative inline-flex shrink-0 overflow-hidden rounded-full">
        <PiFlowerLotus
          className={`${compact ? "h-4 w-4" : "h-[18px] w-[18px]"} text-[#D9A33A]`}
        />
        <ShineLayer sparks={1} />
      </span>
      <span
        className={`h-px bg-gradient-to-l from-transparent to-[#D9A33A] ${compact ? "w-12" : "w-16"
          }`}
      />
    </div>
  );
}

interface FloatingCardProps {
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  iconImg?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

function FloatingCard({
  icon: Icon,
  iconImg,
  title,
  children,
  className = "",
}: FloatingCardProps) {
  return (
    <div
      className={`footer-card relative flex min-h-0 flex-col px-4 py-1 sm:min-h-[250px] lg:min-h-[280px] lg:border-r lg:border-[#C39438]/35 lg:px-3 xl:min-h-[295px] 2xl:px-4 ${className}`}
    >
      <div className="flex flex-col items-center">
        <span className={`footer-card-icon-circle relative flex h-[58px] w-[58px] items-center justify-center 2xl:h-[64px] 2xl:w-[64px] ${iconImg ? "" : "overflow-hidden rounded-full border border-[#D9A33A]/80 text-[#E2AC3D]"}`}>
          {iconImg ? (
            <Image
              src={iconImg}
              alt=""
              width={64}
              height={64}
              className="h-full w-full object-contain"
            />
          ) : Icon ? (
            <Icon
              className="footer-card-icon h-[31px] w-[31px] 2xl:h-[35px] 2xl:w-[35px]"
              strokeWidth={1.55}
            />
          ) : null}
          <ShineLayer sparks={1} />
        </span>

        <h3 className="footer-card-title mt-2 whitespace-nowrap text-center text-[14px] font-semibold uppercase tracking-[0.015em] text-white">
          {title}
        </h3>

        <GoldDivider className="footer-heading-line mt-1" compact />
      </div>

      <div className="mt-1 w-full">{children}</div>
    </div>
  );
}

interface ContactItemProps {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}

function ContactItem({ icon: Icon, children }: ContactItemProps) {
  return (
    <div className="flex items-start gap-2.5 text-[12px] leading-[1.4] text-white/95 2xl:text-[13px]">
      <span className="footer-contact-circle flex h-[31px] w-[31px] shrink-0 items-center justify-center rounded-full border border-[#D9A33A]/80 text-[#E2AC3D]">
        <Icon className="h-[16px] w-[16px]" />
      </span>
      <div className="pt-[6px]">{children}</div>
    </div>
  );
}
