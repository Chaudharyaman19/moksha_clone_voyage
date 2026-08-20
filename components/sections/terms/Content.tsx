"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  CircleUserRound,
  ClipboardCheck,
  FileCheck2,
  HandHeart,
  HeartHandshake,
  Landmark,
  ScrollText,
  ShieldCheck,
  UserCheck,
  UsersRound,
} from "lucide-react";

const HEADER_OFFSET = 150;

const SECTIONS_SELECTOR = ".terms-section";

const ITEMS_SELECTOR = ".terms-round-icon";

const REVEAL_SELECTOR =
  ".terms-section, .terms-commitment, .terms-view-button, .terms-contact";
const navigationItems = [
  "Acceptance of Terms",
  "About Moksha Sewa",
  "Use of Our Website",
  "Our Services",
  "Eligibility",
  "User Responsibilities",
  "Requests for Assistance",
  "Donations & Payments",
  "Volunteer Engagement",
  "Content & Intellectual Property",
];
const termsSections = [
  {
    number: 1,
    title: "Acceptance of Terms",
    icon: ScrollText,
    content:
      "By accessing or using the Moksha Sewa website and our services, you agree to these Terms & Conditions and our Privacy Policy. If you do not agree, please do not use our website or services.",
  },
  {
    number: 2,
    title: "About Moksha Sewa",
    icon: CircleUserRound,
    content:
      "Moksha Sewa, an initiative of Namo Gange Trust, is dedicated to providing dignified final-rites support and humanitarian assistance to eligible individuals and families, especially for unclaimed and underprivileged cases. Our services are subject to verification, availability and applicable laws.",
  },
  {
    number: 3,
    title: "Use of Our Website",
    icon: UserCheck,
    content:
      "You agree to use our website only for lawful purposes and in a manner that does not infringe the rights of, restrict or inhibit anyone else's use. You must not attempt to gain unauthorized access, interfere with the functioning of the website or introduce harmful code.",
  },
  {
    number: 4,
    title: "Our Services",
    icon: UsersRound,
    content:
      "Services include assistance with ambulance/hearse-van, cremation-ground support, ritual materials, priest guidance, documentation support, food and basic-essentials assistance, volunteer support and related humanitarian services. All services are subject to verification, availability and legal requirements.",
  },
  {
    number: 5,
    title: "Eligibility",
    icon: HandHeart,
    content:
      "Our services are intended for individuals/families in genuine need. We may request information and documents for verification. We reserve the right to accept or decline any request at our sole discretion.",
  },
  {
    number: 6,
    title: "User Responsibilities",
    icon: FileCheck2,
    content:
      "You agree to provide accurate, complete and current information. You must not misuse our services, provide false information or engage in any activity that may harm our organisation, beneficiaries, volunteers or service partners.",
  },
  {
    number: 7,
    title: "Requests for Assistance",
    icon: ClipboardCheck,
    content:
      "All requests are subject to verification and availability of resources. Assistance will be provided in accordance with our policies, priorities and capacity. We do not guarantee immediate or specific outcomes.",
  },
  {
    number: 8,
    title: "Donations & Payments",
    icon: Landmark,
    content:
      "Donations are voluntary and non-refundable. Transactions are processed securely through authorised payment gateways. We do not store your card details, CVV, UPI PIN or net-banking passwords.",
  },
  {
    number: 9,
    title: "Volunteer Engagement",
    icon: HeartHandshake,
    content:
      "Volunteers must act with compassion, integrity and respect. We reserve the right to accept, assign or terminate volunteer participation based on suitability and conduct.",
  },
  {
    number: 10,
    title: "Content & Intellectual Property",
    icon: BookOpen,
    content:
      "All content on this website, including text, images, logos and graphics, is the property of Moksha Sewa or its licensors. You may not copy, reproduce or use our content without prior written permission.",
  },
];
function RoundIcon({
  icon: Icon,
}: {
  icon: React.ElementType;
}) {
  return (
    <div className="terms-round-icon flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#F7E4C6] text-[#D95A06] shadow-[0_3px_10px_rgba(185,90,6,0.12)]">
      <Icon
        size={24}
        strokeWidth={1.5}
      />
    </div>
  );
}

/* =========================================================
   SECTION HEADING
========================================================= */

function TermsHeading({
  number,
  title,
}: {
  number: number;
  title: string;
}) {
  return (
    <h2 className="font-serif text-[26px] font-semibold leading-tight text-[#221512]">
      {number}. {title}
    </h2>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function TermsAndConditions() {
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

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const elements = navigationItems.map((_, index) =>
      document.getElementById(`terms-section-${index + 1}`),
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
    const targets = pageRef.current?.querySelectorAll<HTMLElement>(REVEAL_SELECTOR);
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

      const index = navigationItems.findIndex(
        (_, i) => `terms-section-${i + 1}` === hash,
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

  const highlightNavItem = (index: number) => {
    if (reducedMotion.current) return;

    const item = navItemRefs.current[index];
    if (!item) return;

    pulseHighlight(item);
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

    // Dim all other sections while scrolling to the target
    sections.forEach((section) => section.classList.add("terms-dim"));
    highlightTarget(target);

    const distance = Math.abs(targetY - window.scrollY);
    const durationMs = Math.min(750 + distance / 2.6, 1150);

    window.scrollTo({ top: targetY, behavior: "smooth" });

    const timer = window.setTimeout(() => {
      isProgrammaticScroll.current = false;
      sections.forEach((section) => section.classList.remove("terms-dim"));
      const settleTimer = window.setTimeout(() => {
        lastHighlighted.current = target;
        highlightTarget(target);
      }, 150);
      highlightTimers.current.push(settleTimer);
    }, durationMs);
    highlightTimers.current.push(timer);
  };

  const handleNavClick = (index: number) => {
    const element = document.getElementById(`terms-section-${index + 1}`);
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
      <style>{`
        .terms-section, .terms-commitment, .terms-view-button, .terms-contact {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.55s ease-out, transform 0.55s ease-out;
        }
        .terms-section.is-revealed, .terms-commitment.is-revealed,
        .terms-view-button.is-revealed, .terms-contact.is-revealed {
          opacity: 1;
          transform: translateY(0);
        }
        .terms-section.terms-dim { opacity: 0.3; }
        .terms-sidebar, .terms-main {
          opacity: 0;
          transition: opacity 0.65s ease-out, transform 0.65s ease-out;
        }
        .terms-sidebar { transform: translateX(-24px); }
        .terms-main { transform: translateX(24px); transition-delay: 0.15s; }
        .terms-sidebar.is-mounted, .terms-main.is-mounted {
          opacity: 1;
          transform: translateX(0);
        }
        .terms-nav-item {
          opacity: 0;
          transform: translateX(-8px);
          transition: opacity 0.35s ease-out, transform 0.35s ease-out, background-color 0.2s, color 0.2s;
        }
        .terms-nav-item.is-mounted { opacity: 1; transform: translateX(0); }
        .terms-round-icon { animation: terms-icon-float 2.4s ease-in-out infinite alternate; }
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
          .terms-section, .terms-commitment, .terms-view-button, .terms-contact,
          .terms-sidebar, .terms-main, .terms-nav-item {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
          .terms-round-icon, .terms-glow { animation: none !important; }
        }
      `}</style>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 pb-4 pt-6 sm:px-5 lg:grid-cols-[240px_minmax(0,1fr)] lg:px-0">
        {/* =================================================
            LEFT SIDEBAR
        ================================================== */}

        <aside className={`terms-sidebar self-start lg:sticky lg:top-[100px] ${mounted ? "is-mounted" : ""}`}>
          <div className="overflow-hidden rounded-[7px] border border-[#e9e4d5] bg-[#fffef9] shadow-[0_2px_10px_rgba(29,65,53,0.04)]">
            {/* Header */}

            <div className="flex h-[40px] items-center justify-center bg-[#8B6A3E]">
              <h2 className="text-[16px] font-semibold tracking-wide text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                ON THIS PAGE
              </h2>
            </div>

            {/* Navigation */}

            <nav aria-label="Terms and Conditions sections">
              <ol className="list-none py-1">
                {navigationItems.map((item, index) => (
                  <li key={item}>
                    <button
                      type="button"
                      ref={(el) => {
                        navItemRefs.current[index] = el;
                      }}
                      aria-current={
                        activeIndex === index ? "location" : undefined
                      }
                      onClick={() => handleNavClick(index)}
                      style={{ transitionDelay: mounted ? `${0.35 + index * 0.025}s` : undefined }}
                      className={`terms-nav-item flex w-full items-start gap-2 px-3 py-1.5 text-left text-[16px] leading-[1.4] ${mounted ? "is-mounted" : ""} ${activeIndex === index
                        ? "bg-[#f5edda] font-semibold text-[#2C1810]"
                        : "text-[#5A4030] hover:bg-[#f8f4e9]"
                        }`}
                    >
                      <span className="w-[16px] shrink-0 font-medium">
                        {index + 1}.
                      </span>

                      <span>{item}</span>
                    </button>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
          <div className="terms-commitment mt-4 overflow-hidden rounded-[7px] border border-[#e8e1d1] bg-[#fffef9] px-4 pt-4 pb-0 shadow-[0_2px_10px_rgba(29,65,53,0.035)]">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E2AE73] bg-[#FFF8EE]">
                <ShieldCheck
                  size={17}
                  strokeWidth={1.5}
                  className="text-[#8B6A3E]"
                />
              </div>

              <h3 className="font-serif text-[16px] font-semibold text-[#2C1810] drop-shadow-[0_1px_2px_rgba(92,58,27,0.08)]">
                Our Commitment
              </h3>
            </div>

            <p className="mt-3 max-w-[190px] text-[16px] leading-6 text-[#5B4635]">
              We are committed to transparency, compassion and dignity in
              every service we deliver.
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

        {/* =================================================
            MAIN CONTENT
        ================================================== */}

        <article className={`terms-main min-w-0 ${mounted ? "is-mounted" : ""}`}>
          <div className="overflow-hidden rounded-[7px] border border-[#E0D7C2] bg-white shadow-[0_2px_14px_rgba(66,57,15,0.06)]">
            {termsSections.map((section) => (
              <section
                key={section.number}
                id={`terms-section-${section.number}`}
                className="terms-section relative scroll-mt-4 overflow-hidden"
              >
                <div className="grid grid-cols-[64px_minmax(0,1fr)] px-[10px]">
                  {/* Icon */}

                  <div className="flex justify-start pt-[8px]">
                    <RoundIcon icon={section.icon} />
                  </div>

                  {/* Content */}

                  <div
                    className={`border-b border-[#E3D5B8] py-4 ${section.number === 10
                      ? "border-b-0"
                      : ""
                      }`}
                  >
                    <TermsHeading
                      number={section.number}
                      title={section.title}
                    />

                    <p className="mt-2 max-w-[680px] text-[16px] font-normal leading-7 text-[#2F2216]">
                      {section.content}
                    </p>
                  </div>
                </div>
              </section>
            ))}
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="terms-view-button group mt-5 inline-flex items-center gap-2 rounded-[5px] border border-[#e4dcca] bg-[#fffdf8] px-5 py-2.5 text-[16px] font-semibold text-[#5A4030] shadow-[0_1px_4px_rgba(40,60,50,0.04)] transition-all duration-300 hover:border-[#E2AE73] hover:text-[#8B6A3E]"
            >
              View All Terms &amp; Conditions

              <ArrowDown
                size={14}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-y-[2px]"
              />
            </button>
          </div>
        </article>
      </div>
      <section className="terms-contact w-full border-t border-[#e7e2d5] bg-white/65 px-4 py-3 sm:px-5 lg:px-0">
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
                Questions About These Terms?
              </h2>

              <p className="mt-1 text-[16px] leading-6 text-[#5B4635]">
                If you have any questions about these Terms &amp; Conditions,
                please reach out to us.
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
            target="_blank"
            rel="noopener noreferrer"
            className="group flex shrink-0 items-center gap-3 rounded-[9px] border border-[#F4C46A] bg-gradient-to-r from-[#B76B16] via-[#E5A93E] to-[#B76B16] px-6 py-3 text-[16px] font-semibold uppercase tracking-wide text-white shadow-[0_0_18px_rgba(229,169,62,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(229,169,62,0.72)]"
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
