"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
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

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const HEADER_OFFSET = 150;

const SECTIONS_SELECTOR = ".terms-section";

const ITEMS_SELECTOR = ".terms-round-icon";

/* =========================================================
   SIDEBAR CONTENT
========================================================= */

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

/* =========================================================
   VISIBLE TERMS CONTENT
========================================================= */

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

/* =========================================================
   ICON COMPONENT
========================================================= */

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
    <h2 className="font-serif text-[26px] font-bold leading-tight text-[#221512]">
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
  const [activeIndex, setActiveIndex] = useState(0);

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

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* -----------------------------------------------
         Initial page entrance
      ------------------------------------------------ */

      const intro = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      intro
        .from(".terms-sidebar", {
          x: -24,
          opacity: 0,
          duration: 0.65,
        })
        .from(
          ".terms-main",
          {
            x: 24,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.5",
        );

      /* -----------------------------------------------
         Section reveal
      ------------------------------------------------ */

      gsap.utils
        .toArray<HTMLElement>(".terms-section")
        .forEach((section) => {
          gsap.from(section, {
            y: 18,
            opacity: 0,
            duration: 0.55,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              once: true,
            },
          });
        });

      /* -----------------------------------------------
         Icons subtle floating animation
      ------------------------------------------------ */

      gsap.utils
        .toArray<HTMLElement>(".terms-round-icon")
        .forEach((icon, index) => {
          gsap.to(icon, {
            y: -2,
            duration: 2.2 + index * 0.04,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });

      /* -----------------------------------------------
         Sidebar items stagger
      ------------------------------------------------ */

      gsap.from(".terms-nav-item", {
        x: -8,
        opacity: 0,
        duration: 0.35,
        stagger: 0.025,
        delay: 0.35,
        ease: "power2.out",
      });

      /* -----------------------------------------------
         Commitment card
      ------------------------------------------------ */

      gsap.from(".terms-commitment", {
        y: 18,
        opacity: 0,
        duration: 0.6,
        delay: 0.45,
        ease: "power3.out",
      });

      /* -----------------------------------------------
         View all button
      ------------------------------------------------ */

      gsap.from(".terms-view-button", {
        y: 8,
        opacity: 0,
        duration: 0.4,
        scrollTrigger: {
          trigger: ".terms-view-button",
          start: "top 92%",
          once: true,
        },
      });

      /* -----------------------------------------------
         Contact section
      ------------------------------------------------ */

      gsap.from(".terms-contact", {
        y: 18,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: ".terms-contact",
          start: "top 92%",
          once: true,
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  /* =====================================================
     PORTRAIT FOCUS + SCROLL TO SECTION
  ===================================================== */

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
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-4 pb-4 pt-6 sm:px-5 lg:grid-cols-[240px_minmax(0,1fr)] lg:px-0">
        {/* =================================================
            LEFT SIDEBAR
        ================================================== */}

        <aside className="terms-sidebar self-start lg:sticky lg:top-[100px]">
          <div className="overflow-hidden rounded-[7px] border border-[#e9e4d5] bg-[#fffef9] shadow-[0_2px_10px_rgba(29,65,53,0.04)]">
            {/* Header */}

            <div className="flex h-[40px] items-center justify-center bg-[#8B6A3E]">
              <h2 className="text-[16px] font-bold tracking-wide text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
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
                      className={`terms-nav-item flex w-full items-start gap-2 px-3 py-1.5 text-left text-[16px] leading-[1.4] transition-colors ${
                        activeIndex === index
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

          {/* =================================================
              OUR COMMITMENT
          ================================================== */}

          <div className="terms-commitment mt-4 overflow-hidden rounded-[7px] border border-[#e8e1d1] bg-[#fffef9] px-4 pt-4 pb-0 shadow-[0_2px_10px_rgba(29,65,53,0.035)]">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E2AE73] bg-[#FFF8EE]">
                <ShieldCheck
                  size={17}
                  strokeWidth={1.5}
                  className="text-[#8B6A3E]"
                />
              </div>

              <h3 className="font-serif text-[16px] font-bold text-[#2C1810] drop-shadow-[0_1px_2px_rgba(92,58,27,0.08)]">
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

        <article className="terms-main min-w-0">
          {/* =================================================
              SECTIONS 1 - 10
          ================================================== */}

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
                    className={`border-b border-[#E3D5B8] py-4 ${
                      section.number === 10
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

          {/* =================================================
              VIEW ALL TERMS BUTTON
          ================================================== */}

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

      {/* =================================================
          CONTACT CTA
      ================================================== */}

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
              <h2 className="font-serif text-[16px] font-bold text-[#2C1810] drop-shadow-[0_1px_2px_rgba(92,58,27,0.08)]">
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
