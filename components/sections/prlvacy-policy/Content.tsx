"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Check,
  CircleHelp,
  ClipboardList,
  CreditCard,
  FileText,
  Globe2,
  HeartHandshake,
  Info,
  Landmark,
  LockKeyhole,
  Mail,
  MapPin,
  Monitor,
  Network,
  Scale,
  Search,
  Shield,
  ShieldCheck,
  Trash2,
  UserCheck,
  UserRound,
  UsersRound,
  WalletCards,
  X,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const HEADER_OFFSET = 150;

const SECTIONS_SELECTOR = 'section[id^="privacy-section-"]';

const ITEMS_SELECTOR = ".info-card";

const sections = [
  "About Moksha Sewa",
  "Information We Collect",
  "How We Use Your Information",
  "Your Privacy Rights",
];

const informationCards = [
  {
    icon: UserRound,
    title: "Contact Information",
    items: [
      "Name, mobile number, email address",
      "Communication preferences",
      "City/location and address or service location where required",
    ],
  },
  {
    icon: ClipboardList,
    title: "Seva / Assistance Information",
    items: [
      "Nature of assistance required and details of the case",
      "Location, hospital / cremation-ground details",
      "Information necessary for verification and coordination",
      "Documents or details required for legal / authority formalities",
    ],
  },
  {
    icon: UsersRound,
    title: "Volunteer Information",
    items: [
      "Name, contact details, location, availability",
      "Skills, experience and preferred activities",
      "Any other information you voluntarily provide",
    ],
  },
  {
    icon:  CircleHelp,
    title: "Donation Information",
    items: [
      "Donation and payment related information",
      "Transaction details processed through authorised payment gateways",
    ],
    note: "Note: We do not store your card details.",
  },
  {
    icon: Monitor,
    title: "Technical Information",
    items: [
      "IP address, browser type, device information",
      "Pages visited, date/time of access, referral/source",
      "Cookies and usage data collected automatically",
    ],
  },
];

const useInformationLeft = [
  "Respond to requests for Seva assistance.",
  "Verify and assess assistance requests.",
  "Coordinate eligible support with families, volunteers, hospitals, cremation grounds and authorities.",
  "Coordinate ambulance/hearse-van services.",
  "Arrange ritual materials and priest guidance.",
  "Communicate with families regarding their request.",
  "Process volunteer applications and manage volunteers.",
  "Process donations through authorised payment providers.",
];

const useInformationRight = [
  "Maintain records relating to donations, assistance and enquiries.",
  "Prevent fraud, misuse and unauthorised activity.",
  "Maintain website security and improve our services.",
  "Respond to complaints and enquiries.",
  "Meet applicable legal, regulatory or governmental requirements.",
  "Send service-related communications.",
  "Send updates, campaigns or fundraising communications where legally permitted and, where required, with your consent.",
];

const rights = [
  {
    icon: FileText,
    title: "Right to be\nInformed",
  },
  {
    icon: Search,
    title: "Right to Access",
  },
  {
    icon: ClipboardList,
    title: "Right to\nCorrection",
  },
  {
    icon: Trash2,
    title: "Right to\nErasure",
  },
  {
    icon: X,
    title: "Right to Withdraw\nConsent",
  },
  {
    icon: Network,
    title: "Right to Grievance\nRedressal",
  },
  {
    icon: UsersRound,
    title: "Right to Nominate\n(Where applicable)",
  },
];

function SectionTitle({
  number,
  title,
  id,
}: {
  number: string;
  title: string;
  id?: string;
}) {
  return (
    <div
      id={id}
      className="section-title mb-3 flex scroll-mt-6 items-center gap-2"
    >
      <h2 className="font-serif text-[26px] font-bold leading-tight text-[#2C1810] drop-shadow-[0_1px_3px_rgba(92,58,27,0.1)]">
        {number}. {title}
      </h2>

      <span className="relative flex items-center">
        <span className="h-px w-10 bg-[#8B6A3E]" />
        <span className="absolute left-1/2 -translate-x-1/2 text-[16px] text-[#8B6A3E]">
          ❖
        </span>
      </span>
    </div>
  );
}

export default function PrivacyPolicy() {
  const pageRef = useRef<HTMLDivElement>(null);
  const navItemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const isProgrammaticScroll = useRef(false);
  const lastHighlighted = useRef<HTMLElement | null>(null);
  const reducedMotion = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const elements = sections.map((_, index) =>
      document.getElementById(`privacy-section-${index + 1}`),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        if (isProgrammaticScroll.current) return;

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );

        if (visible.length === 0) return;

        const index = elements.indexOf(visible[0].target as HTMLElement);

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

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    const timer = window.setTimeout(() => {
      const element = document.getElementById(hash);
      if (!element) return;

      const index = sections.findIndex(
        (_, i) => `privacy-section-${i + 1}` === hash,
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

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".privacy-sidebar", {
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".privacy-main", {
        x: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.1,
        ease: "power3.out",
      });

      gsap.from(".section-title", {
        y: 18,
        opacity: 0,
        duration: 0.65,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".privacy-main",
          start: "top 82%",
        },
      });

      gsap.utils.toArray<HTMLElement>(".info-card").forEach((card) => {
        gsap.from(card, {
          y: 20,
          opacity: 0,
          duration: 0.55,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".use-item").forEach((item) => {
        gsap.from(item, {
          x: -12,
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            once: true,
          },
        });
      });

      gsap.from(".privacy-right", {
        y: 18,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: {
          trigger: ".privacy-right",
          start: "top 88%",
          once: true,
        },
      });

      gsap.from(".privacy-contact", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        scrollTrigger: {
          trigger: ".privacy-contact",
          start: "top 90%",
          once: true,
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const highlightTarget = (target: HTMLElement) => {
    if (reducedMotion.current) return;

    document.querySelectorAll(".scroll-target-highlight").forEach((el) => {
      gsap.killTweensOf(el);
      el.remove();
    });

    gsap.utils.toArray<HTMLElement>(SECTIONS_SELECTOR).forEach((section) => {
      gsap.killTweensOf(section);
      gsap.set(section, {
        boxShadow: "0 0 0 rgba(215,140,40,0)",
        backgroundColor: "rgba(255,250,240,0)",
      });
    });

    const items = Array.from(
      target.querySelectorAll<HTMLElement>(ITEMS_SELECTOR),
    );

    gsap.killTweensOf(target);
    gsap.set(target, { boxShadow: "0 0 0 rgba(215,140,40,0)" });

    gsap.fromTo(
      target,
      { boxShadow: "0 0 0 rgba(215,140,40,0)" },
      {
        boxShadow: "0 0 14px rgba(215,140,40,0.45)",
        duration: 0.5,
        ease: "power2.out",
        yoyo: true,
        repeat: 2,
        onComplete: () => {
          gsap.set(target, { boxShadow: "0 0 0 rgba(215,140,40,0)" });
        },
      },
    );

    if (items.length > 0) {
      gsap.killTweensOf(items);
      gsap.set(items, { boxShadow: "0 0 0 rgba(215,140,40,0)" });

      gsap.to(items, {
        boxShadow: "0 0 14px rgba(215,140,40,0.45)",
        duration: 0.5,
        ease: "power2.out",
        yoyo: true,
        repeat: 2,
        stagger: 0.06,
        onComplete: () => {
          gsap.set(items, { boxShadow: "0 0 0 rgba(215,140,40,0)" });
        },
      });
    }
  };

  const scrollToTarget = (target: HTMLElement) => {
    isProgrammaticScroll.current = true;

    gsap.killTweensOf(window);

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

    gsap.to(sections, {
      opacity: 0.25,
      duration: 0.45,
      ease: "power2.out",
      overwrite: "auto",
    });

    const restoreSections = () => {
      gsap.to(sections, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const distance = Math.abs(targetY - window.scrollY);
    const duration = Math.min(0.75 + distance / 2600, 1.15);

    gsap.to(window, {
      duration,
      scrollTo: { y: targetY, autoKill: false },
      ease: "power3.inOut",
      overwrite: true,
      onComplete: () => {
        isProgrammaticScroll.current = false;
        restoreSections();
        gsap.delayedCall(0.15, () => {
          lastHighlighted.current = target;
          highlightTarget(target);
        });
      },
      onInterrupt: () => {
        isProgrammaticScroll.current = false;
        restoreSections();
      },
    });
  };

  const highlightNavItem = (index: number) => {
    if (reducedMotion.current) return;

    const item = navItemRefs.current[index];
    if (!item) return;

    gsap.killTweensOf(item);
    gsap.fromTo(
      item,
      { boxShadow: "0 0 0 rgba(215,140,40,0)" },
      {
        boxShadow: "0 0 14px rgba(215,140,40,0.45)",
        duration: 0.5,
        ease: "power2.out",
        yoyo: true,
        repeat: 2,
        onComplete: () => {
          gsap.set(item, { boxShadow: "0 0 0 rgba(215,140,40,0)" });
        },
      },
    );
  };

  const handleNavClick = (index: number) => {
    const element = document.getElementById(`privacy-section-${index + 1}`);
    const item = navItemRefs.current[index];

    if (!element || !item) return;

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
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 pb-4 pt-6 sm:px-5 lg:grid-cols-[240px_minmax(0,1fr)] lg:px-0">
        {/* =========================
            LEFT SIDEBAR
        ========================== */}
        <aside className="privacy-sidebar self-start lg:sticky lg:top-[100px]">
          <div className="overflow-hidden rounded-[7px] border border-[#e9e4d5] bg-[#fffef9] shadow-[0_2px_10px_rgba(29,65,53,0.04)]">
            <div className="bg-[#8B6A3E] px-4 py-2.5 text-center">
              <h3 className="text-[16px] font-bold uppercase tracking-wide text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                ON THIS PAGE
              </h3>
            </div>

            <nav aria-label="Privacy policy sections">
              <ol className="list-none divide-y divide-[#eeeade]">
                {sections.map((section, index) => (
                  <li key={section}>
                    <button
                      type="button"
                      ref={(el) => {
                        navItemRefs.current[index] = el;
                      }}
                      aria-current={
                        activeIndex === index ? "location" : undefined
                      }
                      onClick={() => handleNavClick(index)}
                      className={`group flex w-full items-center gap-2 px-3 py-1.5 text-left text-[16px] leading-[1.4] transition-colors ${
                        activeIndex === index
                          ? "bg-[#f5edda] font-semibold text-[#2C1810]"
                          : "text-[#5A4030] hover:bg-[#f8f4e9]"
                      }`}
                    >
                      <span className="min-w-[16px] text-[16px] font-bold text-[#8B6A3E]">
                        {index + 1}.
                      </span>

                      <span>{section}</span>
                    </button>
                  </li>
                ))}
              </ol>
            </nav>
          </div>

          {/* Commitment card */}
          <div className="mt-4 overflow-hidden rounded-[7px] border border-[#e8e1d1] bg-[#fffef9] px-4 pt-4 pb-0 shadow-[0_2px_10px_rgba(29,65,53,0.035)]">
            <div className="mb-2 flex items-center gap-2.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E2AE73] bg-[#FFF8EE]">
                <ShieldCheck
                  size={17}
                  strokeWidth={1.5}
                  className="text-[#8B6A3E]"
                />
              </div>

              <h3 className="font-sans text-[16px] font-bold text-[#2C1810] drop-shadow-[0_1px_2px_rgba(92,58,27,0.08)]">
                Our Commitment
              </h3>
            </div>

            <p className="mt-3 text-[16px] leading-6 text-[#5B4635]">
              We are committed to transparency and protecting your personal
              information.
              <br />
              <br />
              We collect only what we need and use it responsibly to serve
              humanity.
            </p>

            <div className="flex justify-end">
              <Image
                src="/assets/privacy-policy/our_commitment.webp"
                alt="Our Commitment"
                width={240}
                height={160}
                className="h-auto w-1/2 object-cover"
              />
            </div>
          </div>
        </aside>

        {/* =========================
            MAIN CONTENT
        ========================== */}
        <article className="privacy-main min-w-0">
          {/* Section 1 */}
          <section
            id="privacy-section-1"
            className="relative mb-4 scroll-mt-4 overflow-hidden"
          >
            <SectionTitle number="1" title="About Moksha Sewa" />

            <p className="text-[16px] leading-7 text-[#594236]">
              Moksha Sewa provides humanitarian assistance relating to
              dignified final-rites support, particularly for eligible
              economically weaker families and legally authorised unclaimed
              cases.
            </p>

            <p className="mt-4 text-[16px] leading-7 text-[#594236]">
              Our services include ambulance/hearse-van coordination,
              cremation-ground support, wood, cloth, flowers and
              ritual-material assistance, priest and ritual guidance, family
              guidance, hospital and ground coordination, food and
              basic-essentials assistance, volunteer support and documentation
              guidance.
            </p>

            <div className="mt-4 flex items-start gap-2 rounded-[7px] border border-[#E2AE73] bg-[#FFF8EE] px-4 py-3">
              <Info
                size={18}
                className="mt-0.5 shrink-0 text-[#8B6A3E]"
                strokeWidth={2}
              />

              <p className="text-[16px] font-medium leading-6 text-[#5B4635]">
                All assistance is subject to case verification, availability
                and applicable legal, police, hospital, municipal and other
                competent-authority requirements.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section
            id="privacy-section-2"
            className="relative mb-4 scroll-mt-4 overflow-hidden"
          >
            <SectionTitle number="2" title="Information We Collect" />

            <p className="mb-4 text-[16px] leading-7 text-[#594236]">
              We collect only the information that is necessary for providing
              our services and improving our experience.
            </p>

            <div className="overflow-hidden rounded-[7px] border border-[#e8e4d8] bg-white/70">
              {informationCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <div
                    key={card.title}
                    className={`info-card grid grid-cols-1 p-2 md:grid-cols-[360px_minmax(0,1fr)] ${
                      index !== informationCards.length - 1
                        ? "border-b border-[#e8e4d8]"
                        : ""
                    }`}
                  >
                    <div className="flex items-start gap-3 px-4 py-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F7E4C6]">
                        <Icon
                          size={22}
                          strokeWidth={1.55}
                          className="text-[#D95A06]"
                        />
                      </div>

                      <h3 className="pt-1 text-[16px] font-bold leading-[1.4] text-[#2C1810] drop-shadow-[0_1px_2px_rgba(92,58,27,0.08)]">
                        {card.title}
                      </h3>
                    </div>

                    <div className="border-t border-[#eeeade] px-4 py-3.5 md:border-l md:border-t-0">
                      <ul className="space-y-1.5">
                        {card.items.map((item) => (
                          <li
                            key={item}
                            className="relative pl-3 text-[16px] leading-6 text-[#5B4635]"
                          >
                            <span className="absolute left-0 top-[9px] h-[4px] w-[4px] rounded-full bg-[#8B6A3E]" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      {card.note && (
                        <p className="mt-1.5 text-[16px] font-semibold leading-5 text-[#5B4635]">
                          {card.note}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-3 flex items-center gap-2.5 rounded-[7px] border border-[#E2AE73] bg-[#FFF8EE] px-4 py-3">
              <Shield
                size={20}
                className="shrink-0 text-[#D95A06]"
                strokeWidth={1.6}
              />

              <p className="text-[16px] font-medium leading-5 text-[#5B4635]">
                We do not request or store your card PIN, CVV, UPI PIN,
                internet-banking password or other payment authentication
                credentials.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section
            id="privacy-section-3"
            className="relative mb-4 scroll-mt-4 overflow-hidden"
          >
            <SectionTitle number="3" title="How We Use Your Information" />

            <p className="mb-4 text-[16px] leading-7 text-[#594236]">
              We may use your personal information to:
            </p>

            <div className="grid grid-cols-1 gap-x-7 gap-y-3 md:grid-cols-2">
              <ul className="space-y-1.5">
                {useInformationLeft.map((item) => (
                  <li
                    key={item}
                    className="use-item flex items-start gap-2.5 text-[16px] leading-6 text-[#5B4635]"
                  >
                    <span className="mt-[2px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#F7E4C6]">
                      <Check
                        size={11}
                        strokeWidth={3}
                        className="text-[#D95A06]"
                      />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <ul className="space-y-1.5">
                {useInformationRight.map((item) => (
                  <li
                    key={item}
                    className="use-item flex items-start gap-2.5 text-[16px] leading-6 text-[#5B4635]"
                  >
                    <span className="mt-[2px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#F7E4C6]">
                      <Check
                        size={11}
                        strokeWidth={3}
                        className="text-[#D95A06]"
                      />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section
            id="privacy-section-4"
            className="relative mb-4 scroll-mt-4 overflow-hidden"
          >
            <SectionTitle number="4" title="Your Privacy Rights" />

            <p className="mb-4 text-[16px] leading-7 text-[#594236]">
              Subject to applicable law, you may have the following rights
              regarding your personal data:
            </p>

            <div className="privacy-right grid grid-cols-2 overflow-hidden rounded-[7px] border border-[#e7e3d7] bg-white/75 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
              {rights.map((right, index) => {
                const Icon = right.icon;

                return (
                  <div
                    key={right.title}
                    className={`flex min-h-[90px] flex-col items-center justify-center px-1 py-3 text-center ${
                      index !== rights.length - 1
                        ? "md:border-r md:border-[#ebe7db]"
                        : ""
                    }`}
                  >
                    <Icon
                      size={22}
                      strokeWidth={1.35}
                      className="mb-2 text-[#8B6A3E]"
                    />

                    <span className="whitespace-pre-line text-[16px] font-medium leading-[1.5] text-[#5B4635]">
                      {right.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

        </article>
      </div>

      {/* Bottom contact */}
      <section className="privacy-contact mt-0 w-full border-t border-[#e7e2d5] bg-white/65 px-4 py-5 sm:px-5 lg:px-0">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-center gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#8B6A3E]">
              <Mail
                size={22}
                strokeWidth={1.5}
                className="text-white"
              />
            </div>

            <div>
              <h3 className="text-[16px] font-bold text-[#2C1810] drop-shadow-[0_1px_2px_rgba(92,58,27,0.08)]">
                Have Questions About Your Privacy?
              </h3>

              <p className="mt-1 text-[16px] leading-6 text-[#5B4635]">
                If you have any questions, requests or concerns regarding
                this policy or your personal
                <br className="hidden sm:block" />
                information, please contact our Grievance Officer.
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
            href="/contact"
            className="group flex shrink-0 items-center gap-3 rounded-[9px] border border-[#F4C46A] bg-gradient-to-r from-[#B76B16] via-[#E5A93E] to-[#B76B16] px-6 py-3 text-[16px] font-bold uppercase tracking-wide text-white shadow-[0_0_18px_rgba(229,169,62,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(229,169,62,0.72)]"
          >
            Contact Us
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