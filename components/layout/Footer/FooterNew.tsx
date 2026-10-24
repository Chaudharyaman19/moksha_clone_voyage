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

function ReferenceShieldIcon({ className, strokeWidth }: FooterSvgProps) {
  return <svg viewBox="0 0 64 64" className={className} aria-hidden><g {...svgBase(strokeWidth)}><path d="M32 5l23 9v16c0 14-9.7 24.2-23 29C18.7 54.2 9 44 9 30V14l23-9z" /><path d="M21 31l7 7 15-16" /></g></svg>;
}

function ReferenceUsersIcon({ className, strokeWidth }: FooterSvgProps) {
  return <svg viewBox="0 0 64 64" className={className} aria-hidden><g {...svgBase(strokeWidth)}><circle cx="23" cy="19" r="8" /><circle cx="43" cy="21" r="7" /><path d="M7 52v-6c0-9 7-15 16-15s16 6 16 15v6" /><path d="M38 34c10-3 19 3 19 13v5" /><path d="M16 52V42M31 52V42M47 52V43" /></g></svg>;
}

function ReferenceHeartIcon({ className, strokeWidth }: FooterSvgProps) {
  return <svg viewBox="0 0 64 64" className={className} aria-hidden><g {...svgBase(strokeWidth)}><path d="M32 55S7 40 7 21.5C7 7 25 4 32 16 39 4 57 7 57 21.5 57 40 32 55 32 55z" /></g></svg>;
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
    title: "Compassion",
    description: "We serve with\nempathy and humanity.",
  },
  {
    icon: ReferenceShieldIcon,
    title: "Dignity",
    description: "Every life is treated\nwith respect.",
  },
  {
    icon: ReferenceUsersIcon,
    title: "Service",
    description: "We support every step\nof the final journey.",
  },
  {
    icon: ReferenceLotusIcon,
    title: "Trust",
    description: "Transparent, accountable\nand responsible.",
  },
  {
    icon: ReferenceHeartIcon,
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
  const managedQuickLinks = quickLinks
    .map((item, index) => ({ ...item, ...itemOrFallback(footerItems, index, item) }))
    .filter((item) => !disabledPaths.includes(item.href));
  const managedServices = services
    .map((item, index) => ({ ...item, ...itemOrFallback(footerItems, index + quickLinks.length, item) }))
    .filter((item) => !disabledPaths.includes(item.href));
  const managedInitiatives = [
    ...initiatives.map((item, index) => ({ ...item, ...itemOrFallback(footerItems, index + quickLinks.length + services.length, item) })),
    ...footerItems.slice(quickLinks.length + services.length + initiatives.length + values.length + legalLinks.length).map((item) => ({
      label: item.label || item.title || "Footer Link",
      href: item.href || "#",
    })),
  ].filter((item) => !disabledPaths.includes(item.href));
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
        <div className="relative z-30 border-y border-[#C6953E] bg-[linear-gradient(90deg,#F3DEB3_0%,#FFF5DE_48%,#EFD39E_100%)] px-4 py-2 shadow-[0_-5px_18px_rgba(0,0,0,0.12)] sm:px-6">
          <div className="mx-auto flex min-h-[44px] w-full max-w-7xl flex-col items-center justify-between gap-2 sm:flex-row">
            <div className="flex min-w-0 items-center gap-3 text-center text-[14px] font-semibold text-[#392814] sm:text-left sm:text-[15px]">
              <ReferenceLotusIcon className="h-8 w-8 shrink-0 text-[#A96F19]" strokeWidth={1.7} />
              <span className="sm:whitespace-nowrap">{actionTitle}</span>
            </div>

            <div className="flex w-full shrink-0 flex-wrap items-center justify-center gap-2.5 sm:w-auto sm:flex-nowrap sm:justify-end">
              {pathname !== "/request-help" && (
                <Link
                  href={websiteSection?.secondaryButtonHref || "/request-help"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[40px] min-w-[150px] items-center justify-center gap-1.5 rounded-[7px] border border-[#B97818] bg-[linear-gradient(180deg,#EFB84F_0%,#D88D1D_100%)] px-3 text-[13px] font-semibold text-[#211609] shadow-[0_4px_12px_rgba(160,99,18,0.22)] hover:brightness-105 sm:gap-2 sm:px-4 sm:text-[14px]"
                >
                  <ReferencePhoneIcon className="h-5 w-5" strokeWidth={1.7} />
                  <span className="whitespace-nowrap">{textOrFallback(websiteSection?.secondaryButtonLabel, "Request Help", 36)}</span>
                </Link>
              )}

              {pathname !== "/donation" && (
                <Link
                  href={websiteSection?.buttonHref || "/donation"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[40px] min-w-[150px] items-center justify-center gap-1.5 rounded-[7px] border border-[#B97818] bg-[linear-gradient(180deg,#EFB84F_0%,#D88D1D_100%)] px-3 text-[13px] font-semibold text-[#211609] shadow-[0_4px_12px_rgba(160,99,18,0.22)] hover:brightness-105 sm:gap-2 sm:px-4 sm:text-[14px]"
                >
                  <ReferenceHandHeartIcon className="h-5 w-5" strokeWidth={1.7} />
                  <span className="whitespace-nowrap">{textOrFallback(websiteSection?.buttonLabel, "Donate Now", 36)}</span>
                </Link>
              )}

              {pathname !== "/volunteer/register" && (
                <Link
                  href={websiteSection?.tertiaryButtonHref || "/volunteer/register"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[40px] min-w-[175px] items-center justify-center gap-1.5 rounded-[7px] border border-[#B97818] bg-[linear-gradient(180deg,#EFB84F_0%,#D88D1D_100%)] px-3 text-[13px] font-semibold text-[#211609] shadow-[0_4px_12px_rgba(160,99,18,0.22)] hover:brightness-105 sm:gap-2 sm:px-4 sm:text-[14px]"
                >
                  <ReferenceUsersIcon className="h-5 w-5" strokeWidth={1.7} />
                  <span className="whitespace-nowrap">{textOrFallback(websiteSection?.tertiaryButtonLabel, "Become a Volunteer", 50)}</span>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* =========================================================
          DESKTOP SCENE
          The reference has the river/temple photo only on the left.
          A large dark circle masks it and creates the curved gold edge.
      ========================================================== */}
        <div className="footer-ganga pointer-events-none absolute inset-0 z-0 hidden lg:block">
          <div className="absolute inset-y-0 left-0 w-[500px] overflow-hidden">
            <Image
              src={websiteSection?.image || footerBg}
              alt=""
              fill
              priority={false}
              sizes="500px"
              className="object-cover object-left"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,20,20,0.03),rgba(0,35,33,0.08))]" />
          </div>

          {/* Creates the exact concave photo boundary seen in the reference */}
          {/* Perfect circular mask blends into the footer; it intentionally has no outline. */}
          <div
            aria-hidden
            className="absolute left-[108px] top-[-190px] h-[900px] w-[900px] rounded-full bg-[#050706]"
          />

          {/* Controlled left circle arc: semibold and softly glowing, clipped just
            before the values strip so it never enters the lower section. */}
          <div
            aria-hidden
            className="absolute left-[108px] top-[-190px] h-[900px] w-[900px] rounded-full border-l-[6px] border-[#E2AC3D] [clip-path:inset(0_0_28%_0)] [filter:drop-shadow(0_0_4px_rgba(226,172,61,0.78))_drop-shadow(0_0_10px_rgba(226,172,61,0.34))]"
          />

          {/* subtle inner green depth */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_18%,rgba(15,92,78,0.18),transparent_34%),linear-gradient(90deg,transparent_0%,rgba(0,31,28,0.08)_48%,rgba(0,18,17,0.30)_100%)]" />
        </div>

        {/* Mobile/tablet gets a clean dark footer with a soft scenic wash */}
        <div className="footer-ganga pointer-events-none absolute inset-0 z-0 lg:hidden">
          <Image
            src={websiteSection?.image || footerBg}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center opacity-[0.13]"
          />
          <div className="absolute inset-0 bg-black/95" />
        </div>

        <div className="footer-master relative z-10">
          {/* ========================= MAIN ROW ========================= */}
          <div className="mx-auto w-full max-w-[1600px] px-4 pb-3 pt-4 sm:px-6 lg:min-h-[370px] lg:px-4 lg:pb-2 lg:pt-4 xl:px-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-3 xl:grid-cols-[22%_11%_13%_13%_41%] xl:gap-0">
              {/* BRAND */}
              <div className="footer-col relative flex flex-col items-center justify-center px-4 text-center sm:col-span-2 lg:col-span-1 lg:min-h-[300px] lg:justify-start lg:pb-1 lg:pt-1 min-[1280px]:pl-[136px] min-[1280px]:pr-2">
                <div className="footer-brand-logo relative flex w-[132px] items-center justify-center overflow-hidden sm:w-[145px]">
                  <Image
                    src={footerMokshaLogo}
                    alt={brandName}
                    width={145}
                    height={127}
                    className="h-[105px] w-auto max-w-full object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.16)] sm:h-[112px]"
                  />
                  <ShineLayer sparks={4} gold />
                </div>

                <h2 className="footer-brand-title mt-1 text-[16px] font-semibold uppercase leading-none tracking-[0.025em] text-white sm:text-[18px]">
                  {brandName}
                </h2>

                <p className="footer-brand-tagline mt-1 text-[12px] font-medium tracking-[0.01em] text-[#E2AC3D] sm:text-[13px]">
                  {textOrFallback(websiteSection?.eyebrow, "A Namo Gange Trust Initiative", 70)}
                </p>

                <GoldDivider className="footer-brand-divider mt-0.5" />

                <p className="footer-brand-desc relative mx-auto mt-2 max-w-[250px] text-[12px] font-normal leading-[1.45] text-white/95 sm:text-[13px] lg:-translate-x-4">
                  {description}
                </p>
              </div>

              {/* QUICK LINKS */}
              <FloatingCard icon={ReferenceChainIcon} title={textOrFallback(websiteSection?.quickLinksTitle, "Quick Links", 50)}>
                <ul className="space-y-[5px]">
                  {managedQuickLinks.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link inline-flex items-center gap-2 text-[12px] font-medium leading-[1.4] text-white/95 transition hover:text-[#E5B14A] xl:text-[13px]"
                      >
                        <FaChevronRight className="footer-link-arrow h-2.5 w-2.5 shrink-0 text-[#E4A631]" />
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FloatingCard>

              {/* SERVICES */}
              <FloatingCard icon={ReferenceHandHeartIcon} title={textOrFallback(websiteSection?.servicesTitle, "Our Services", 50)}>
                <ul className="space-y-[5px]">
                  {managedServices.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link inline-flex items-start gap-2 text-[12px] font-medium leading-[1.4] text-white/95 transition hover:text-[#E5B14A] xl:text-[13px]"
                      >
                        <FaChevronRight className="footer-link-arrow mt-[3px] h-2.5 w-2.5 shrink-0 text-[#E4A631]" />
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </FloatingCard>

              {/* INITIATIVES */}
              <FloatingCard icon={ReferenceLotusIcon} title={textOrFallback(websiteSection?.initiativesTitle, "Our Initiatives", 50)}>
                <ul className="space-y-[5px]">
                  {managedInitiatives.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link inline-flex items-start gap-2 text-[12px] font-medium leading-[1.4] text-white/95 transition hover:text-[#E5B14A] xl:text-[13px]"
                      >
                        <FaChevronRight className="footer-link-arrow mt-[3px] h-2.5 w-2.5 shrink-0 text-[#E4A631]" />
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </FloatingCard>

              {/* ========================= OUR OFFICES & CONTACT ========================= */}
              <div className="footer-col relative flex flex-col justify-start sm:col-span-2 lg:col-span-2 xl:col-span-1 xl:pl-2 xl:-mt-2.5">
                <div className="relative w-full xl:w-[calc(100%+20px)] overflow-hidden rounded-[18px] bg-[#070B09] px-3 py-1.5 sm:px-3.5 sm:py-2 shadow-[0_8px_30px_rgba(0,0,0,0.65)]">
                  {/* Card Header: Left = Icon + Title, Right = Namo Gange Logo */}
                  <div className="flex items-center justify-between gap-2 pb-1.5 border-b border-[#D9A33A]/25">
                    {/* Left: Phone circle + Title */}
                    <div className="flex items-center gap-3 -translate-y-2">
                      <span className="flex h-[48px] w-[48px] sm:h-[54px] sm:w-[54px] shrink-0 items-center justify-center rounded-full border-2 border-[#D9A33A] text-[#E2AC3D] shadow-[0_0_14px_rgba(226,172,61,0.3)]">
                        <ReferencePhoneIcon className="h-6 w-6 sm:h-[28px] sm:w-[28px]" strokeWidth={1.8} />
                      </span>
                      <div className="flex flex-col items-center">
                        <h3 className="text-[15.5px] sm:text-[17.5px] font-bold uppercase tracking-[0.025em] text-white leading-tight text-center">
                          OUR OFFICES &amp; CONTACT
                        </h3>
                        <div className="mt-1 flex items-center justify-center gap-2 w-full">
                          <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#D9A33A]" />
                          <PiFlowerLotus className="h-3.5 w-3.5 text-[#D9A33A]" />
                          <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#D9A33A]" />
                        </div>
                      </div>
                    </div>

                    {/* Right: Namo Gange Logo & Tagline */}
                    <div className="flex flex-col items-end text-right shrink-0">
                      <Image
                        src={websiteSection?.partnerLogoImage || namoGangeLogo}
                        alt="Namo Gange"
                        width={180}
                        height={56}
                        className="h-[48px] sm:h-[54px] w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
                      />
                      <p className="mt-0.5 text-[12px] sm:text-[13px] font-bold text-white leading-tight">
                        Moksha Sewa
                      </p>
                      <p className="mt-0.5 text-[12.5px] sm:text-[13.5px] font-semibold text-[#D9A33A] leading-tight">
                        A Initiative of Namo Gange Trust
                      </p>
                    </div>
                  </div>

                  {/* 3 Office Rows - Unified Container with Horizontal & Vertical Partitions */}
                  <div className="mt-2.5 overflow-hidden rounded-[14px] border border-[#D9A33A]/40 bg-[#0A0E0C]/95 divide-y divide-[#D9A33A]/30 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                    {[
                      {
                        title: "Head Office – India",
                        company: "Namo Gange Trust",
                        address: "Plot No. 12/52, Site II Industrial Area,\nMohan Nagar, Ghaziabad – 201007, Uttar Pradesh, India.",
                        phone: "+91 9220147229",
                        tel: "tel:+919220147229",
                      },
                      {
                        title: "Regional Office – Visakhapatnam, India",
                        company: "Namo Gange Wellness Pvt. Ltd.",
                        address: "Door No. 36-46-51, 2nd Floor, Main Road,\nKancharapalem, Visakhapatnam – 530008, Andhra Pradesh, India.",
                        phone: "+91 6281482342",
                        tel: "tel:+916281482342",
                      },
                      {
                        title: "International Office – London (UK)",
                        company: "Namo Gange Wellness Ltd.",
                        address: "6 Liddel Close, Luton, Bedfordshire, LU3 1TW, United Kingdom.",
                        phone: "+44 7429 519276",
                        tel: "tel:+447429519276",
                      },
                    ].map((office) => (
                      <div
                        key={office.title}
                        className="group relative flex items-center justify-between px-3 py-2 sm:px-3.5 transition-colors hover:bg-white/[0.02]"
                      >
                        {/* Left: Building Icon + Details */}
                        <div className="flex items-center gap-3 min-w-0 flex-1 pr-3">
                          <div className="relative shrink-0 flex items-center justify-center self-center -translate-y-2">
                            <Image
                              src="/assets/office-gold-building.png"
                              alt=""
                              width={48}
                              height={68}
                              className="h-[48px] sm:h-[52px] w-auto object-contain drop-shadow-[0_2px_12px_rgba(226,172,61,0.4)]"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="text-[12.5px] sm:text-[13px] font-bold text-[#F3D481] tracking-[0.01em] leading-tight truncate">
                              {office.title}
                            </h4>
                            <p className="text-[11.5px] font-semibold text-white/95 leading-tight mt-0.5 truncate">
                              {office.company}
                            </p>
                            <p className="text-[10px] sm:text-[10.5px] leading-[1.3] text-white/70 mt-0.5 whitespace-pre-line">
                              {office.address}
                            </p>
                          </div>
                        </div>

                        {/* Vertical Partition Line */}
                        <div className="self-stretch w-[1.5px] bg-[#D9A33A]/45 shrink-0 my-1" />

                        {/* Right: Phone Number + Golden Round Arrow Button */}
                        <div className="flex items-center gap-2.5 shrink-0 pl-3">
                          <a
                            href={office.tel}
                            className="inline-flex items-center gap-1.5 text-[12px] sm:text-[12.5px] font-bold text-white transition hover:text-[#E5B14A]"
                          >
                            <ReferencePhoneIcon className="h-4 w-4 shrink-0 text-[#E5B14A]" strokeWidth={1.8} />
                            <span className="whitespace-nowrap">{office.phone}</span>
                          </a>

                          <a
                            href={office.tel}
                            title={`Call ${office.title}`}
                            className="flex h-[24px] w-[24px] sm:h-[26px] sm:w-[26px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#F1C15A_0%,#D88D1D_100%)] text-black shadow-[0_2px_6px_rgba(216,141,29,0.3)] transition-all hover:scale-105 active:scale-95"
                          >
                            <FaArrowRight className="h-2.5 w-2.5 text-[#111111]" />
                          </a>
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

            <div className="mx-auto grid w-full max-w-[1480px] grid-cols-1 px-5 py-1 sm:grid-cols-2 lg:grid-cols-5 lg:px-4">
              {managedValues.map((value, index) => {
                const Icon = value.icon;

                return (
                  <div
                    key={value.title}
                    className={`footer-value flex min-h-[52px] items-center gap-2.5 px-3 py-1 sm:px-4 lg:justify-center lg:py-0 ${index < values.length - 1
                      ? "lg:border-r lg:border-[#C39438]/45"
                      : ""
                      }`}
                  >
                    <span className="relative inline-flex shrink-0">
                      <Icon
                        strokeWidth={1.45}
                        className="footer-value-icon h-11 w-11 text-[#E3B44E] lg:h-[46px] lg:w-[46px]"
                      />
                      <ShineLayer sparks={1} />
                    </span>

                    <div>
                      <h4 className="footer-value-heading text-[14px] font-semibold uppercase tracking-[0.015em] text-[#F3D481]">
                        {value.title}
                      </h4>
                      <p className="footer-value-desc mt-1 whitespace-pre-line text-[12px] leading-[1.4] text-white/95">
                        {value.description}
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
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  children: React.ReactNode;
  className?: string;
}

function FloatingCard({
  icon: Icon,
  title,
  children,
  className = "",
}: FloatingCardProps) {
  return (
    <div
      className={`footer-card relative flex min-h-0 flex-col px-4 py-1 sm:min-h-[250px] lg:min-h-[280px] lg:border-r lg:border-[#C39438]/35 lg:px-3 xl:min-h-[295px] 2xl:px-4 ${className}`}
    >
      <div className="flex flex-col items-center">
        <span className="footer-card-icon-circle relative flex h-[58px] w-[58px] items-center justify-center overflow-hidden rounded-full border border-[#D9A33A]/80 text-[#E2AC3D] 2xl:h-[64px] 2xl:w-[64px]">
          <Icon
            className="footer-card-icon h-[31px] w-[31px] 2xl:h-[35px] 2xl:w-[35px]"
            strokeWidth={1.55}
          />
          <ShineLayer sparks={1} />
        </span>

        <h3 className="footer-card-title mt-3 whitespace-nowrap text-center text-[14px] font-semibold uppercase tracking-[0.015em] text-white">
          {title}
        </h3>

        <GoldDivider className="footer-heading-line mt-2" compact />
      </div>

      <div className="mt-3 w-full">{children}</div>
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
