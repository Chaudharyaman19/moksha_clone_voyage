"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Check,
  CircleAlert,
  ClipboardList,
  Clock3,
  CreditCard,
  FileCheck2,
  FileText,
  Gift,
  HandHeart,
  HeartHandshake,
  IndianRupee,
  Info,
  Landmark,
  Mail,
  Package,
  ReceiptText,
  RefreshCcw,
  ShieldCheck,
  ShoppingBag,
  Sprout,
  TriangleAlert,
  UsersRound,
  WalletCards,
  XCircle,
} from "lucide-react";

const HEADER_OFFSET = 150;

const SECTIONS_SELECTOR = 'section[id^="refund-section-"]';
const ITEMS_SELECTOR = ".refund-policy-card";



import { useWebsiteSection } from "@/components/website/WebsiteContentContext";

const mainIcons = [HeartHandshake, HandHeart, CreditCard, ReceiptText, CalendarDays, Package, UsersRound];
const premiumIcons = [FileCheck2, Clock3, IndianRupee, ShieldCheck];
const addendumIcons = [FileText, RefreshCcw, Mail];

function RefundPolicyCard({
  card,
  isEven,
}: {
  card: { number: number; title: string; icon: any; tagline?: string; content: React.ReactNode; image?: string; imageAlt?: string };
  isEven: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const Icon = card.icon;

  return (
    <article
      className="refund-policy-card group flex h-full flex-col overflow-hidden rounded-[18px] border border-[#E6DCC4] bg-[#FFFDF8] shadow-[0_10px_28px_rgba(66,57,15,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(66,57,15,0.14)]"
    >
      {isEven && card.image && (
        <div className="relative h-32 shrink-0 overflow-hidden">
          <Image
            src={card.image}
            alt={card.imageAlt ?? ""}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />

          <div
            className="absolute inset-0 bg-gradient-to-t from-[#FFFDF8]/50 to-transparent"
            aria-hidden="true"
          />

          <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#C9A227]/50 bg-[#FFFDF8]/95 font-serif text-[15px] font-semibold text-[#1F3D2B] shadow-[0_3px_10px_rgba(66,57,15,0.25)]">
            {String(card.number).padStart(2, "0")}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1F3D2B] shadow-[0_6px_14px_rgba(31,61,43,0.25)]">
            <Icon size={19} strokeWidth={1.5} className="text-[#F2DCA2]" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-serif text-[17px] font-bold leading-[1.35] text-[#1F3D2B]">
                {card.title}
              </h3>

              {!isEven && (
                <span className="shrink-0 rounded-full border border-[#D9C48E] bg-[#FBF3DC] px-2.5 py-0.5 font-serif text-[14px] font-bold tracking-wide text-[#7A5E17]">
                  {String(card.number).padStart(2, "0")}
                </span>
              )}
            </div>

            <p className="mt-1 text-[14px] leading-[1.55] text-[#72694A]">
              {card.tagline}
            </p>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2" aria-hidden="true">
          <span className="h-px w-full bg-gradient-to-r from-[#C9A227]/60 via-[#C9A227]/25 to-transparent" />
          <Sprout size={12} className="shrink-0 text-[#C9A227]" />
        </div>

        <button
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded((value) => !value)}
          className="mt-auto flex w-fit items-center gap-2 pt-3 text-[13px] font-bold uppercase tracking-[0.14em] text-[#1F3D2B] transition-colors hover:text-[#B76B16]"
        >
          <span className="border-b-2 border-[#C9A227] pb-0.5 transition-all duration-300 group-hover:border-[#B76B16]">
            {expanded ? "Show Less" : "Read More"}
          </span>
          <ArrowRight
            size={14}
            className={`transition-transform duration-300 ${expanded ? "rotate-90" : "translate-x-0 group-hover:translate-x-1"
              }`}
          />
        </button>

        <div
          className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${expanded
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
            }`}
        >
          <div className="overflow-hidden">
            <div className="mt-2.5 rounded-[10px] border border-[#EADFC4] bg-[#FAF4E4]/70 px-3.5 py-2.5 text-[14px] leading-[1.6] text-[#5F5836]">
              {card.content}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function SectionIcon({
  icon: Icon,
}: {
  icon: React.ElementType;
}) {
  return (
    <div className="refund-section-icon flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#F7E4C6] text-[#D95A06] shadow-[0_3px_10px_rgba(185,90,6,0.12)]">
      <Icon size={24} strokeWidth={1.5} />
    </div>
  );
}

function SectionHeading({
  number,
  title,
}: {
  number: number;
  title: string;
}) {
  return (
    <h2 className="font-serif text-[26px] font-semibold leading-tight text-[#2C1810] drop-shadow-[0_1px_3px_rgba(92,58,27,0.1)]">
      {number}. {title}
    </h2>
  );
}

export default function RefundPolicy() {
  const mainSec = useWebsiteSection("refund-content");
  const premiumSec = useWebsiteSection("refund-premium-cards");
  const addendumSec = useWebsiteSection("refund-addendum-sections");
  const refundContact = useWebsiteSection("refund-contact");
  const refundSidebar = useWebsiteSection("refund-sidebar");
  const refundIntro = useWebsiteSection("refund-intro");

  const noteItem = refundSidebar?.items?.[0] || {
    title: "Note",
    description: "Refunds are processed only in eligible cases as per this policy.\n\nWe request you to read this policy carefully before making any donation or payment.",
  };

  const commitment = refundSidebar?.items?.[1] || {
    title: "Our Commitment",
    description: "We are committed to transparency and accountability in managing all donations.\n\nEvery contribution directly supports our mission to serve humanity.",
    image: "/assets/privacy-policy/our_commitment.webp",
  };

  const introText = refundIntro?.description || (
    <>
      Moksha Sewa (an initiative of{" "}
      <a
        href="https://namogange.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-[#8B6A3E] underline underline-offset-4 transition-colors hover:text-[#B76B16]"
      >
        Namo Gange Trust
      </a>
      ) is a non-profit
      organisation. Donations made to support our humanitarian
      activities are voluntary and non-refundable except as provided
      in this Refund Policy.
    </>
  );

  const mainSections = (mainSec?.items || []).map((item, index) => ({
    number: index + 1,
    title: item.title || `Section ${index + 1}`,
    icon: mainIcons[index % mainIcons.length],
    content: item.description || "",
  }));

  const premiumCards = (premiumSec?.items || []).map((item, index) => ({
    number: index + 9,
    title: item.title || `Premium ${index + 1}`,
    icon: premiumIcons[index % premiumIcons.length],
    tagline: item.label || "",
    content: <p className="whitespace-pre-wrap">{item.description}</p>,
    image: item.image,
    imageAlt: item.title,
  }));

  const addendumSections = (addendumSec?.items || []).map((item, index) => ({
    number: index + 13,
    title: item.title || `Addendum ${index + 1}`,
    icon: addendumIcons[index % addendumIcons.length],
    content: item.description || "",
  }));

  const navigationItems = useMemo(() => {
    return [
      ...mainSections.map((s) => ({ number: s.number, label: s.title })),
      ...premiumCards.map((s) => ({ number: s.number, label: s.title })),
      ...addendumSections.map((s) => ({ number: s.number, label: s.title })),
    ];
  }, [mainSections, premiumCards, addendumSections]);

  const pageRef = useRef<HTMLDivElement>(null);
  const navItemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const isProgrammaticScroll = useRef(false);
  const lastHighlighted = useRef<HTMLElement | null>(null);
  const reducedMotion = useRef(false);
  const highlightTimers = useRef<number[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const anchorFor = (number: number) => {
    if (number >= 9 && number <= 12) return 9;
    return number;
  };

  const sectionIds = navigationItems.map((item) =>
    item.number >= 9 && item.number <= 12
      ? "refund-section-9"
      : `refund-section-${item.number}`,
  );

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const elements = sectionIds.map((id) => document.getElementById(id));

    const observer = new IntersectionObserver(
      (entries) => {
        if (isProgrammaticScroll.current) return;

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );

        if (visible.length === 0) return;

        const el = visible[0].target as HTMLElement;
        const index = elements.indexOf(el);

        if (index !== -1) {
          const element = elements[index] as HTMLElement;
          setActiveIndex(index);

          if (element !== lastHighlighted.current) {
            lastHighlighted.current = element;
            highlightTarget(element);
            highlightNavItem(index);
          }
        }
      },
      {
        rootMargin: "-150px 0px -55% 0px",
        threshold: 0,
      },
    );

    elements.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Reveal-on-scroll — CSS-only replacement for the previous GSAP
  // ScrollTrigger reveal on the premium card grid.
  useEffect(() => {
    const targets = pageRef.current?.querySelectorAll<HTMLElement>(ITEMS_SELECTOR);
    if (!targets || targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    const timer = window.setTimeout(() => {
      const element = document.getElementById(hash);
      if (!element) return;

      const anchor = Number(hash.replace("refund-section-", ""));
      const index = navigationItems.findIndex(
        (item) => anchorFor(item.number) === anchor,
      );

      if (index !== -1) {
        setActiveIndex(index);
        highlightNavItem(index);
      }

      const targetY = Math.max(
        element.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET,
        0,
      );
      isProgrammaticScroll.current = true;
      window.scrollTo(0, targetY);
      isProgrammaticScroll.current = false;

      lastHighlighted.current = element;
      highlightTarget(element);
    }, 450);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    return () => {
      highlightTimers.current.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  const pulseHighlight = (el: HTMLElement) => {
    el.classList.remove("terms-glow");
    void el.offsetWidth;
    el.classList.add("terms-glow");
    const timer = window.setTimeout(() => el.classList.remove("terms-glow"), 1500);
    highlightTimers.current.push(timer);
  };

  const highlightTarget = (target: HTMLElement) => {
    if (reducedMotion.current) return;

    pulseHighlight(target);

    const items = Array.from(
      target.querySelectorAll<HTMLElement>(ITEMS_SELECTOR),
    );
    items.forEach((item, index) => {
      window.setTimeout(() => pulseHighlight(item), index * 60);
    });
  };

  const scrollToTarget = (target: HTMLElement) => {
    isProgrammaticScroll.current = true;

    const targetY = Math.max(
      target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET,
      0,
    );

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>(SECTIONS_SELECTOR),
    ).filter((section) => section !== target);

    if (reducedMotion.current) {
      window.scrollTo({ top: targetY, behavior: "auto" });
      isProgrammaticScroll.current = false;
      lastHighlighted.current = target;
      highlightTarget(target);
      return;
    }

    sections.forEach((section) => section.classList.add("refund-dim"));
    highlightTarget(target);

    const distance = Math.abs(targetY - window.scrollY);
    const durationMs = Math.min(750 + distance / 2.6, 1150);

    window.scrollTo({ top: targetY, behavior: "smooth" });

    const timer = window.setTimeout(() => {
      isProgrammaticScroll.current = false;
      sections.forEach((section) => section.classList.remove("refund-dim"));
      const settleTimer = window.setTimeout(() => {
        lastHighlighted.current = target;
        highlightTarget(target);
      }, 150);
      highlightTimers.current.push(settleTimer);
    }, durationMs);
    highlightTimers.current.push(timer);
  };

  const highlightNavItem = (index: number) => {
    if (reducedMotion.current) return;

    const item = navItemRefs.current[index];
    if (!item) return;

    pulseHighlight(item);
  };

  const handleNavClick = (index: number) => {
    const item = navigationItems[index];
    if (!item) return;

    const element = document.getElementById(
      `refund-section-${anchorFor(item.number)}`,
    );
    const navItem = navItemRefs.current[index];

    if (!element || !navItem) return;

    setActiveIndex(index);
    highlightNavItem(index);
    scrollToTarget(element);

    window.history.replaceState(null, "", `#${element.id}`);
  };

  return (
    <main
      ref={pageRef}
      className="min-h-screen bg-[#FBF8F2] text-[#2C1810]"
    >
      <style>{`
        .refund-policy-card {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .refund-policy-card.is-revealed { opacity: 1; transform: translateY(0); }
        section[id^="refund-section-"].refund-dim { opacity: 0.3; transition: opacity 0.4s ease-out; }
        .refund-sidebar, .refund-main, .refund-intro {
          opacity: 0;
          transition: opacity 0.65s ease-out, transform 0.65s ease-out;
        }
        .refund-sidebar { transform: translateX(-24px); }
        .refund-main { transform: translateX(24px); transition-delay: 0.15s; }
        .refund-intro { transform: translateY(-12px); transition-delay: 0.5s; }
        .refund-sidebar.is-mounted, .refund-main.is-mounted, .refund-intro.is-mounted {
          opacity: 1;
          transform: none;
        }
        .refund-section-icon { animation: terms-icon-float 2.4s ease-in-out infinite alternate; }
        @keyframes terms-icon-float {
          from { transform: translateY(0); }
          to { transform: translateY(-2px); }
        }
        .terms-glow { animation: terms-glow-pulse 0.5s ease-out 3; }
        @keyframes terms-glow-pulse {
          0%, 100% { box-shadow: 0 0 0 rgba(215,140,40,0); }
          50% { box-shadow: 0 0 14px rgba(215,140,40,0.45); }
        }
        @media (prefers-reduced-motion: reduce) {
          .refund-policy-card, .refund-sidebar, .refund-main, .refund-intro {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
          .refund-section-icon, .terms-glow { animation: none !important; }
        }
      `}</style>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 pb-4 pt-6 sm:px-5 lg:grid-cols-[240px_minmax(0,1fr)] lg:px-0">
        {/* =====================================================
            SIDEBAR
        ====================================================== */}
        <aside className={`refund-sidebar self-start lg:sticky lg:top-[100px] ${mounted ? "is-mounted" : ""}`}>
          <div className="overflow-hidden rounded-[7px] border border-[#e9e4d5] bg-[#fffef9] shadow-[0_2px_10px_rgba(29,65,53,0.04)]">
            <div className="flex h-[40px] items-center justify-center bg-[#8B6A3E]">
              <h2 className="text-[16px] font-semibold tracking-wide text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                ON THIS PAGE
              </h2>
            </div>

            <nav aria-label="Refund Policy sections">
              <ol className="list-none py-1">
                {navigationItems.map((item, index) => (
                  <li key={item.number}>
                    <button
                      type="button"
                      ref={(el) => {
                        navItemRefs.current[index] = el;
                      }}
                      aria-current={
                        activeIndex === index ? "location" : undefined
                      }
                      onClick={() => handleNavClick(index)}
                      className={`refund-nav-button flex w-full items-start gap-2 px-3 py-1.5 text-left text-[16px] leading-[1.4] transition-colors ${activeIndex === index
                          ? "bg-[#f5edda] font-semibold text-[#2C1810]"
                          : "text-[#5A4030] hover:bg-[#f8f4e9]"
                        }`}
                    >
                      <span className="w-[16px] shrink-0 font-medium">
                        {item.number}.
                      </span>

                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ol>
            </nav>
          </div>

          {/* NOTE CARD */}
          <div className="mt-4 overflow-hidden rounded-[7px] border border-[#e8e1d1] bg-[#fffef9] px-4 pt-4 pb-0 shadow-[0_2px_10px_rgba(29,65,53,0.035)]">
            <div className="flex items-center gap-2.5">
              <TriangleAlert
                size={16}
                strokeWidth={2}
                className="text-[#D95A06]"
              />

              <h3 className="font-serif text-[16px] font-semibold text-[#2C1810] drop-shadow-[0_1px_2px_rgba(92,58,27,0.08)]">
                {noteItem.title}
              </h3>
            </div>

            <div className="mt-3 space-y-2 text-[16px] leading-6 text-[#5B4635] whitespace-pre-wrap">
              <p>{noteItem.description}</p>
            </div>

            <div className="mt-4 flex flex-col items-center">
              <h3 className="w-full text-left font-serif text-[16px] font-semibold text-[#2C1810] drop-shadow-[0_1px_2px_rgba(92,58,27,0.08)]">
                {commitment.title}
              </h3>
              <p className="mt-2 w-full text-left text-[16px] leading-6 text-[#5B4635] whitespace-pre-wrap">
                {commitment.description}
              </p>
            </div>

            <div className="flex justify-end mt-2">
              <Image
                src={commitment.image || "/assets/privacy-policy/our_commitment.webp"}
                alt={commitment.title || "Our Commitment"}
                width={240}
                height={160}
                className="h-auto w-1/2 object-cover"
              />
            </div>
          </div>
        </aside>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}
        <article className={`refund-main min-w-0 ${mounted ? "is-mounted" : ""}`}>
          {/* INTRO NOTICE */}
          <section
            className={`refund-intro mb-4 flex items-center gap-3 rounded-[7px] border border-[#E2AE73] bg-[#FFF8EE] px-4 py-3 ${mounted ? "is-mounted" : ""}`}
            aria-label="Refund policy introduction"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF8EE]">
              <ShieldCheck
                size={22}
                strokeWidth={1.6}
                className="text-[#8B6A3E]"
              />
            </div>

            <p className="text-[16px] font-medium leading-6 text-[#2C1810]">
              {introText}
            </p>
          </section>

          {/* SECTIONS 1 - 8 */}
          <div className="space-y-0">
            {mainSections.map((section) => {
              const Icon = section.icon;

              return (
                <section
                  key={section.number}
                  id={`refund-section-${section.number}`}
                  className="refund-main-section relative scroll-mt-4 overflow-hidden p-2 rounded-lg"
                >
                  <div className="grid grid-cols-[64px_minmax(0,1fr)]">
                    <div className="flex justify-start pt-1">
                      <SectionIcon icon={Icon} />
                    </div>

                    <div
                      className={`border-b border-[#eadbc3] py-4 ${section.number === 1 ? "pt-2" : ""
                        }`}
                    >
                      <SectionHeading
                        number={section.number}
                        title={section.title}
                      />

                      <p className="mt-1.5 max-w-[650px] text-[16px] leading-7 text-[#594236]">
                        {section.content}
                      </p>

                      {/* Section 8 special bullets */}
                      {section.number === 8 && (
                        <div className="mt-2 grid grid-cols-2 gap-x-7 text-[16px] leading-6 text-[#5B4635]">
                          <div className="space-y-1">
                            <p>• Change of mind after successful donation</p>
                            <p>
                              • Completed transactions without any technical
                              issue
                            </p>
                          </div>

                          <div className="space-y-1">
                            <p>• Incorrect details entered by the donor</p>
                            <p>• Donations made offline or in cash</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              );
            })}
          </div>

          {/* =====================================================
              9 - 12 PREMIUM CARD GRID
          ====================================================== */}
          <section
            id="refund-section-9"
            className="relative mt-6 scroll-mt-4 overflow-hidden"
            aria-label="How to request a refund, process, mode and chargebacks"
          >
            <h2 className="sr-only">How to Request a Refund</h2>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {premiumCards.map((card, index) => (
                <RefundPolicyCard
                  key={card.number}
                  card={card}
                  isEven={index % 2 === 1}
                />
              ))}
            </div>
          </section>

          {/* =====================================================
              13 - 15 ADDENDUM SECTIONS
          ====================================================== */}
          <div className="mt-6 space-y-0 border-t border-[#eadbc3] pt-4">
            {addendumSections.map((section) => {
              const Icon = section.icon;

              return (
                <section
                  key={section.number}
                  id={`refund-section-${section.number}`}
                  className="refund-main-section relative scroll-mt-4 overflow-hidden"
                >
                  <div className="grid grid-cols-[64px_minmax(0,1fr)]">
                    <div className="flex justify-start pt-1">
                      <SectionIcon icon={Icon} />
                    </div>

                    <div className="border-b border-[#eadbc3] py-4">
                      <SectionHeading
                        number={section.number}
                        title={section.title}
                      />

                      <p className="mt-1.5 max-w-[650px] text-[16px] leading-7 text-[#594236]">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </article>
      </div>

      {/* =====================================================
          CONTACT CTA
      ====================================================== */}
      <section className="refund-contact w-full border-t border-[#e7e2d5] bg-white/65 px-4 py-3 sm:px-5 lg:px-0">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-center gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2C1810]">
              <Image
                src="/assets/privacy-policy/cta_icon.webp"
                alt="Contact us"
                width={22}
                height={22}
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="font-serif text-[16px] font-semibold text-[#2C1810] drop-shadow-[0_1px_2px_rgba(92,58,27,0.08)]">
                {refundContact?.title || "Have Questions About a Refund?"}
              </h2>

              <p className="mt-1 text-[16px] leading-6 text-[#5B4635] whitespace-pre-wrap">
                {refundContact?.description || "We are here to help you with any refund-related queries or concerns."}
              </p>
            </div>

            <Image
              src="/assets/privacy-policy/subtitle_decoration.webp"
              alt=""
              width={120}
              height={40}
              className="hidden h-6 w-auto object-contain sm:block"
            />
          </div>

          <Link
            href={refundContact?.buttonHref || "/contact"}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex shrink-0 items-center gap-3 rounded-[9px] border border-[#F4C46A] bg-gradient-to-r from-[#B76B16] via-[#E5A93E] to-[#B76B16] px-6 py-3 text-[16px] font-semibold uppercase tracking-wide text-white shadow-[0_0_18px_rgba(229,169,62,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(229,169,62,0.72)]"
          >
            {refundContact?.buttonLabel || "Contact Us"}

            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
