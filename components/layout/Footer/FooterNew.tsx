"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  FaChevronRight,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaEnvelope,
  FaPaperPlane,
  FaHeart,
  FaHome,
  FaArrowRight,
} from "react-icons/fa";
import { PiFlowerLotus } from "react-icons/pi";
import { HandHeart, Shield, Users, Heart, MapPin, Phone, Mail, Clock } from "lucide-react";
import footerMokshaLogo from "../../../public/assets/logo-moksha-seva.png";
import footerBg from "../../../public/assets/footer_bg.webp";
import namoGangeLogo from "../../../public/assets/namo-gange-logo.webp";
import requestSupportBg from "../../../public/assets/request_support.webp";
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

const initiatives = [
  { label: "Unclaimed Bodies Support", href: "/request-help" },
  { label: "Last Rites Support", href: "/request-help" },
  { label: "Support for Needy Families", href: "/request-help" },
  { label: "Ritual & Ceremony Support", href: "/furalservices" },
  { label: "Volunteer Programme", href: "/volunteer/register" },
  { label: "Awareness & Outreach", href: "/blog" },
];

const socials = [
  { label: "Facebook", href: "#", icon: FaFacebookF },
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "YouTube", href: "#", icon: FaYoutube },
  { label: "LinkedIn", href: "#", icon: FaLinkedinIn },
];

const values = [
  {
    icon: HandHeart,
    title: "Compassion",
    description: "We serve with\nempathy and humanity.",
  },
  {
    icon: Shield,
    title: "Dignity",
    description: "Every life is treated\nwith respect.",
  },
  {
    icon: Users,
    title: "Service",
    description: "We support every step\nof the final journey.",
  },
  {
    icon: PiFlowerLotus,
    title: "Trust",
    description: "Transparent, accountable\nand responsible.",
  },
  {
    icon: Heart,
    title: "Together",
    description: "United for a more\ncompassionate world.",
  },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Refund Policy", href: "/terms" },
  { label: "Sitemap", href: "/" },
];

export default function FooterNew() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const root = footerRef.current;
      if (!root) return;

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // Keep Tailwind transitions from fighting GSAP transforms
      gsap.utils.toArray<HTMLElement>(
        ".footer-link, .footer-social, .footer-donate-btn, .footer-send-btn"
      ).forEach((el) => {
        const parts = (getComputedStyle(el).transitionProperty || "")
          .split(",")
          .map((s) => s.trim())
          .filter((s) => s !== "transform" && s !== "filter");
        if (parts.length) el.style.transitionProperty = parts.join(", ");
      });

      // ─────────────── REFLECTIVE SHINE / SPARKLE ENGINE ───────────────
      const sweepLine = (line: HTMLElement, delay = 0) => {
        gsap.timeline({ delay })
          .set(line, { xPercent: -130, opacity: 0 })
          .to(line, { xPercent: 90, opacity: 1, duration: 0.5, ease: "power2.inOut" })
          .to(line, { opacity: 0, duration: 0.4, ease: "power2.out" }, ">-0.1");
      };

      const sparkleSet = (el: HTMLElement, delay = 0) => {
        const pulseAt = [0.2, 0.8, 1.4, 2.1, 2.8];
        el.querySelectorAll<HTMLElement>(".footer-spark").forEach((sp, i) => {
          gsap.fromTo(
            sp,
            { scale: 0.2, opacity: 0 },
            {
              scale: 1.2,
              opacity: 1,
              duration: 0.45,
              ease: "power2.out",
              yoyo: true,
              repeat: 2,
              repeatDelay: 0.55,
              delay: delay + pulseAt[i % pulseAt.length],
            }
          );
        });
      };

      const shineHost = (el: HTMLElement, delay = 0) => {
        el.querySelectorAll<HTMLElement>(".footer-shine-line").forEach((line, i) =>
          sweepLine(line, delay + i * 0.15)
        );
        sparkleSet(el, delay);
      };

      const hoverSweep = (el: HTMLElement) => {
        const line = el.querySelector<HTMLElement>(".footer-shine-line");
        if (!line) return;
        gsap.killTweensOf(line);
        gsap.timeline()
          .set(line, { xPercent: -130, opacity: 0 })
          .to(line, { xPercent: 90, opacity: 1, duration: 0.35, ease: "power2.inOut" })
          .to(line, { opacity: 0, duration: 0.3, ease: "power2.out" }, ">-0.1");
      };

      // ─────────────── CONTINUOUS AMBIENT SHINE ───────────────
      // Ambient timelines are tracked so hot-reload / unmount never duplicates them.
      const ambientTl: gsap.core.Timeline[] = [];

      // Moksha logo — strongest, continuous reflective sweep + organic sparkles.
      // Normal → 2.8s pause → diagonal sweep → pause → repeat infinitely.
      const logoAmbient = (host: HTMLElement, delay = 0) => {
        const line = host.querySelector<HTMLElement>(".footer-shine-line");
        if (line) {
          const tl = gsap
            .timeline({ repeat: -1, delay })
            .set(line, { xPercent: -220, opacity: 0 })
            .to(line, { opacity: 1, duration: 0.1 }, 0)
            .to(line, { xPercent: 220, duration: 0.9, ease: "power2.inOut" }, 0)
            .to(line, { opacity: 0, duration: 0.3 }, ">-0.3")
            .to({}, { duration: 2.6 });
          ambientTl.push(tl);
        }

        host.querySelectorAll<HTMLElement>(".footer-spark").forEach((sp, i) => {
          const period = 3.7 + ((i * 0.7) % 1.8) + Math.random() * 0.5;
          const tl = gsap
            .timeline({ repeat: -1, delay: delay + 1 + Math.random() * 2.5 })
            .fromTo(
              sp,
              { opacity: 0, scale: 0.2 },
              { opacity: 0.9, scale: 1, duration: 0.25, ease: "power2.out" }
            )
            .to(sp, { opacity: 0, scale: 0.2, duration: 0.35, ease: "power2.in" })
            .to({}, { duration: Math.max(0.5, period - 0.6) });
          ambientTl.push(tl);
        });
      };

      // Other icons — very subtle, occasional shimmer every 5–8s.
      const ambientShimmer = (el: HTMLElement, delay = 0, periodOverride?: number) => {
        el.querySelectorAll<HTMLElement>(".footer-shine-line").forEach((line, i) => {
          const period = periodOverride ?? 5 + Math.random() * 3;
          const tl = gsap
            .timeline({ repeat: -1, delay: delay + i * 1.3 + Math.random() * 1.5 })
            .set(line, { xPercent: -180, opacity: 0 })
            .to(line, { opacity: 0.45, duration: 0.35, ease: "power2.out" }, 0)
            .to(line, { xPercent: 180, duration: 1.2, ease: "power2.inOut" }, 0)
            .to(line, { opacity: 0, duration: 0.6 }, ">-0.35")
            .to({}, { duration: period });
          ambientTl.push(tl);
        });
      };

      if (!reduced) {
        /* ═══════════════ MASTER FOOTER REVEAL ═══════════════
           0.00 scene  0.10 ganga  0.15 logo  0.35 brand text
           0.40 cards  0.45 support card  0.90 support content
           1.15 socials  1.25 values pill  1.55 value icons
           1.80 bottom bar — entrance finishes ≈ 1.9–2.1s        */
        const master = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top 82%",
            once: true,
          },
          defaults: { ease: "power4.out" },
        });

        master
          // 0.00 Footer scene — master clip unfold
          .fromTo(
            ".footer-master",
            { clipPath: "inset(0 0 100% 0)" },
            { clipPath: "inset(0 0 0% 0)", duration: 1.1 },
            0
          )
          // 0.10 Background visual reveal
          .fromTo(
            ".footer-ganga",
            { opacity: 0 },
            { opacity: 1, duration: 0.8 },
            0.1
          )
          // 0.15 Moksha logo — 3D entrance
          .fromTo(
            ".footer-brand-logo",
            {
              opacity: 0,
              y: 25,
              scale: 0.82,
              rotationX: -8,
              transformPerspective: 800,
            },
            { opacity: 1, y: 0, scale: 1, rotationX: 0, duration: 0.9 },
            0.15
          )
          // 0.35 Brand text — line-by-line reveal
          .fromTo(
            ".footer-brand-title, .footer-brand-tagline, .footer-brand-divider, .footer-brand-desc, .footer-donate-btn",
            {
              opacity: 0,
              y: 25,
              clipPath: "inset(100% 0 0 0)",
            },
            {
              opacity: 1,
              y: 0,
              clipPath: "inset(0 0 0 0)",
              duration: 0.7,
              stagger: 0.08,
            },
            0.35
          )
          // 0.40 Floating white cards — cascading 3D reveal
          .fromTo(
            ".footer-card",
            { opacity: 0, y: 30, rotationY: -6, transformPerspective: 900 },
            { opacity: 1, y: 0, rotationY: 0, duration: 0.6, stagger: 0.1 },
            0.4
          )
          // 0.55 Card icon circles pop
          .fromTo(
            ".footer-card-icon",
            { scale: 0, opacity: 0, rotation: -12 },
            { scale: 1, opacity: 1, rotation: 0, duration: 0.5, stagger: 0.1, ease: "back.out(1.4)" },
            0.55
          )
          // 0.60 Card heading lines drawn
          .fromTo(
            ".footer-heading-line",
            { scaleX: 0, opacity: 0, transformOrigin: "left center" },
            { scaleX: 1, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power3.inOut" },
            0.6
          )
          // 0.65 Navigation links cascade
          .fromTo(
            ".footer-link",
            { opacity: 0, x: -12 },
            { opacity: 1, x: 0, duration: 0.4, stagger: 0.03, ease: "power3.out" },
            0.65
          )
          // 0.45 Support card — 3D climax
          .fromTo(
            ".footer-support-card",
            {
              opacity: 0,
              x: 70,
              scale: 0.94,
              rotationY: 5,
              transformPerspective: 1000,
            },
            { opacity: 1, x: 0, scale: 1, rotationY: 0, duration: 0.9 },
            0.45
          )
          // 0.90 Support card content cascade
          .fromTo(
            ".footer-card-heading, .footer-card-desc",
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.07 },
            0.9
          )
          .fromTo(
            ".footer-card-input, .footer-send-btn",
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.07 },
            1.0
          )
          .fromTo(
            ".footer-card-follow",
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.4 },
            1.1
          )
          // 1.15 Social icons staggered pop
          .fromTo(
            ".footer-social",
            { opacity: 0, scale: 0.4, y: 15 },
            { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.07, ease: "back.out(1.6)" },
            1.15
          )
          // 1.25 Values pill floats in
          .fromTo(
            ".footer-values",
            { opacity: 0, y: 24, scale: 0.96 },
            { opacity: 1, y: 0, scale: 1, duration: 0.7 },
            1.25
          )
          // 1.55 Value icons reveal — left-to-right rhythm
          .fromTo(
            ".footer-value-icon",
            { scale: 0, rotation: -15, opacity: 0 },
            { scale: 1, rotation: 0, opacity: 1, duration: 0.55, stagger: 0.09, ease: "back.out(1.4)" },
            1.55
          )
          .fromTo(
            ".footer-value-heading",
            { opacity: 0, y: 12 },
            { opacity: 1, y: 0, duration: 0.45, stagger: 0.09 },
            1.6
          )
          .fromTo(
            ".footer-value-desc",
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.4, stagger: 0.09 },
            1.65
          )
          // 1.80 Bottom bar finale
          .fromTo(".footer-bottom", { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.6 }, 1.8)
          .fromTo(
            ".footer-bottom-left",
            { x: -20, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5 },
            1.85
          )
          .fromTo(
            ".footer-bottom-center",
            { y: 12, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5 },
            1.9
          )
          .fromTo(
            ".footer-bottom-seva",
            { x: 20, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5 },
            1.95
          )
          // ── Shine choreography ──
          // Logo — CONTINUOUS ambient shine starts after entrance settles
          .call(() => {
            const logoHost = root.querySelector<HTMLElement>(".footer-brand-logo");
            if (logoHost) logoAmbient(logoHost, 2.2);
          }, [], 1.05)
          // Support icon — one-time gold reflection + sparkle, then slow ambient
          .call(() => {
            const supportCard = root.querySelector<HTMLElement>(".footer-support-card");
            if (supportCard) {
              shineHost(supportCard, 0);
              ambientShimmer(supportCard, 6);
            }
          }, [], 1.15)
          // Brand divider lotus micro-shine
          .call(() => shineHost(root.querySelector(".footer-brand-divider")!, 0), [], 1.3)
          // Donate button heart shine
          .call(() => shineHost(root.querySelector(".footer-donate-btn")!, 0), [], 1.35)
          // Card icon circles — one-time sweep left-to-right + staggered ambient shimmer (0.4s apart)
          .call(() => {
            gsap.utils.toArray<HTMLElement>(".footer-card").forEach((card, i) => {
              shineHost(card, 0.3 + i * 0.12);
              ambientShimmer(card, 4 + i * 0.4, 6);
            });
          }, [], 0.8)
          // Value icons — one-time reflection rhythm + slow ambient shimmer
          .call(() => {
            gsap.utils.toArray<HTMLElement>(".footer-value").forEach((item, i) => {
              shineHost(item, 0.15 + i * 0.12);
              ambientShimmer(item, 6 + i * 0.6);
            });
          }, [], 1.7)
          // Namo Gange logo — subtle one-time sweep
          .call(() => {
            const ng = root.querySelector<HTMLElement>(".footer-namo-gange");
            if (ng) shineHost(ng, 0);
          }, [], 2.1);
      }

      if (reduced) return;

      const listeners: Array<[HTMLElement, EventListener, EventListener]> = [];

      const attach = (el: HTMLElement, enterVars: gsap.TweenVars, leaveVars: gsap.TweenVars) => {
        const enter = () => {
          hoverSweep(el);
          gsap.to(el, { ...enterVars, duration: 0.25, ease: "power2.out" });
        };
        const leave = () => gsap.to(el, { ...leaveVars, duration: 0.3, ease: "power2.out" });
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
        listeners.push([el, enter, leave]);
      };

      // Link hover — arrow slides right
      gsap.utils.toArray<HTMLElement>(".footer-link").forEach((el) => {
        const arrow = el.querySelector<HTMLElement>(".footer-link-arrow");
        if (arrow) attach(arrow, { x: 5 }, { x: 0 });
      });

      // Social hover — lift + tiny reflective sweep
      gsap.utils.toArray<HTMLElement>(".footer-social").forEach((el) => {
        attach(el, { scale: 1.1, y: -2 }, { scale: 1, y: 0 });
      });

      // Send button — premium interaction + diagonal highlight
      gsap.utils.toArray<HTMLElement>(".footer-send-btn").forEach((el) => {
        const icon = el.querySelector<HTMLElement>(".footer-send-icon");
        attach(el, { scale: 1.025 }, { scale: 1, clearProps: "transform" });
        if (icon) attach(icon, { x: 5 }, { x: 0 });
      });

      // Donate button — magnetic + scale + arrow + shine
      const donateBtn = root.querySelector<HTMLElement>(".footer-donate-btn");
      if (donateBtn) {
        const xTo = gsap.quickTo(donateBtn, "x", { duration: 0.3, ease: "power3.out" });
        const yTo = gsap.quickTo(donateBtn, "y", { duration: 0.3, ease: "power3.out" });
        const arrow = donateBtn.querySelector<HTMLElement>(".footer-donate-arrow");
        const onMove = (event: Event) => {
          const rect = donateBtn.getBoundingClientRect();
          const e = event as MouseEvent;
          const mx = (e.clientX - (rect.left + rect.width / 2)) * 0.08;
          const my = (e.clientY - (rect.top + rect.height / 2)) * 0.08;
          xTo(Math.max(-6, Math.min(6, mx)));
          yTo(Math.max(-6, Math.min(6, my)));
        };
        const onEnter = () => {
          hoverSweep(donateBtn);
          gsap.to(donateBtn, { scale: 1.04, duration: 0.25, ease: "power2.out" });
          if (arrow) gsap.to(arrow, { x: 5, duration: 0.25, ease: "power2.out" });
        };
        const onLeave = () => {
          xTo(0);
          yTo(0);
          gsap.to(donateBtn, { scale: 1, duration: 0.3, ease: "power2.out" });
          if (arrow) gsap.to(arrow, { x: 0, duration: 0.3, ease: "power2.out" });
        };
        donateBtn.addEventListener("mousemove", onMove);
        donateBtn.addEventListener("mouseenter", onEnter);
        donateBtn.addEventListener("mouseleave", onLeave);
        listeners.push([donateBtn, onEnter, onLeave]);
      }

      // Value hover — icon lifts, heading shifts, reflection echoes
      gsap.utils.toArray<HTMLElement>(".footer-value").forEach((el) => {
        const icon = el.querySelector<HTMLElement>(".footer-value-icon");
        const heading = el.querySelector<HTMLElement>(".footer-value-heading");
        const enter = () => {
          hoverSweep(el);
          if (icon) gsap.to(icon, { y: -4, scale: 1.08, duration: 0.25, ease: "power2.out" });
          if (heading) gsap.to(heading, { y: -2, duration: 0.25, ease: "power2.out" });
        };
        const leave = () => {
          if (icon) gsap.to(icon, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" });
          if (heading) gsap.to(heading, { y: 0, duration: 0.3, ease: "power2.out" });
        };
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
        listeners.push([el, enter, leave]);
      });

      return () => {
        ambientTl.forEach((tl) => tl.kill());
        listeners.forEach(([el, enter, leave]) => {
          el.removeEventListener("mouseenter", enter);
          el.removeEventListener("mouseleave", leave);
          el.removeEventListener("mousemove", enter);
        });
      };
    },
    { scope: footerRef }
  );

  const brandName = "Moksha Sewa";
  const tagline = "A Namo Gange Trust Initiative";
  const description =
    "We stand with the forgotten, the unclaimed and the helpless to ensure every life's final journey is dignified, peaceful and respectful.";

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
    <footer ref={footerRef} className="relative overflow-x-clip bg-[#F8F5EF]">
      {/* FULL-WIDTH FOOTER BACKGROUND — full size top-to-bottom, left-to-right */}
      <div className="footer-ganga pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <Image
          src={footerBg}
          alt="Moksha Sewa footer background"
          fill
          sizes="100vw"
          className="h-full w-full object-cover object-left"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 15% 20%, rgba(242,140,24,0.055), transparent 25%), radial-gradient(circle at 85% 65%, rgba(242,140,24,0.045), transparent 25%)",
          }}
        />
      </div>

      {/* ═══════════ LAYER 1 — MAIN FOOTER ═══════════ */}
      <div className="footer-master relative z-10 mx-auto w-full max-w-[1540px] px-[4%] pb-[2px] pt-0">
        <div className="grid grid-cols-1 gap-y-3 md:grid-cols-2 lg:grid-cols-[2.1fr_1.6fr_1.6fr_1.6fr_1.6fr_2.2fr] lg:gap-y-0 lg:gap-x-2 xl:gap-x-2">
          {/* COLUMN 1 — BRAND / LOGO HERO */}
          <div className="footer-col pt-5 md:col-span-2 lg:col-span-1 lg:pt-7 lg:pr-5 xl:pr-6">
           <div className="flex h-full flex-col items-center rounded-2xl bg-white/40 px-4 py-0 text-center shadow-[0_8px_35px_rgba(255,255,255,0.8)] backdrop-blur-[2px] drop-shadow-[0_10px_16px_rgba(6,62,66,0.08)]">
  <div className="footer-brand-logo relative flex w-[104px] items-start justify-center overflow-hidden">
    <Image
      src={footerMokshaLogo}
      alt={brandName}
      width={104}
      height={72}
      className="h-auto w-full object-contain drop-shadow-[0_4px_10px_rgba(242,140,24,0.08)]"
    />
    <ShineLayer sparks={4} gold />
  </div>

  {/* Moksha Sewa text temporarily hidden
  <h2 className="footer-brand-title mt-1 text-[22px] font-bold uppercase tracking-[0.02em] text-[#123F40]">
    Moksha Sewa
  </h2>
  */}

  <p className="footer-brand-tagline mt-0.5 text-[16px] font-bold uppercase tracking-[0.08em] text-[#F28C18]">
    {tagline}
  </p>

  {/* decorative divider ──── ✦ ──── */}
  <div className="footer-brand-divider mt-1.5 flex items-center gap-2">
    <span className="h-px w-10 bg-[#F28C18]" />

    <span className="relative inline-flex shrink-0 overflow-hidden rounded-full">
      <PiFlowerLotus className="h-3.5 w-3.5 text-[#F28C18]" />
      <ShineLayer sparks={1} />
    </span>

    <span className="h-px w-10 bg-[#F28C18]" />
  </div>

  <p className="footer-brand-desc mx-auto mt-1.5 max-w-[220px] text-center text-[16px] font-medium leading-[1.4] text-[#123F40]">
    {description}
  </p>

  <Link
    href="/donation"
    className="footer-donate-btn mt-2 inline-flex h-9 items-center gap-2.5 rounded-full bg-gradient-to-r from-[#E94B2B] to-[#F28C18] px-6 text-[16px] font-bold uppercase tracking-[0.04em] text-white shadow-[0_8px_18px_rgba(233,75,43,0.30)] transition hover:-translate-y-0.5 hover:brightness-105"
  >
    <span className="relative inline-flex shrink-0 overflow-hidden rounded-full">
      <HandHeart className="h-5 w-5" />
      <ShineLayer sparks={1} />
    </span>

    Donate Now

    <FaArrowRight className="footer-donate-arrow h-3.5 w-3.5" />
  </Link>
</div>
          </div>

          {/* COLUMN 2 — QUICK LINKS CARD */}
          <FloatingCard icon={FaHome} title="Quick Links">
            <ul className="space-y-1">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="footer-link inline-flex items-center gap-2 text-[16px] font-semibold leading-[1.3] text-[#123F40] transition hover:text-[#E94B2B]"
                  >
                    <FaChevronRight className="footer-link-arrow h-2.5 w-2.5 shrink-0 text-[#F28C18]" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FloatingCard>

          {/* COLUMN 3 — OUR SERVICES CARD */}
          <FloatingCard icon={HandHeart} title="Our Services">
            <ul className="space-y-1">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="footer-link inline-flex items-center gap-2 text-[16px] font-semibold leading-[1.3] text-[#123F40] transition hover:text-[#E94B2B]"
                  >
                    <FaChevronRight className="footer-link-arrow h-2.5 w-2.5 shrink-0 text-[#F28C18]" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FloatingCard>

          {/* COLUMN 4 — OUR INITIATIVES CARD */}
          <FloatingCard icon={PiFlowerLotus} title="Our Initiatives">
            <ul className="space-y-1">
              {initiatives.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="footer-link inline-flex items-center gap-2 text-[16px] font-semibold leading-[1.3] text-[#123F40] transition hover:text-[#E94B2B]"
                  >
                    <FaChevronRight className="footer-link-arrow h-2.5 w-2.5 shrink-0 text-[#F28C18]" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FloatingCard>

          {/* COLUMN 5 — CONTACT US CARD */}
          <FloatingCard icon={Phone} title="Contact Us">
            <div className="space-y-1">
              <ContactItem icon={MapPin}>
                <p className="text-[16px] font-medium leading-[1.4] text-[#123F40]">
                  Delhi NCR,
                  <br />
                  India
                </p>
              </ContactItem>

              <ContactItem icon={Phone}>
                <a
                  href={`tel:+91${contactNumber}`}
                  className="text-[16px] font-medium leading-[1.4] text-[#123F40] transition hover:text-[#E94B2B]"
                >
                  +91 {contactNumber}
                </a>
              </ContactItem>

              <ContactItem icon={Mail}>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-[16px] font-medium leading-[1.4] text-[#123F40] transition hover:text-[#E94B2B]"
                >
                  <span className="break-all">{contactEmail}</span>
                </a>
              </ContactItem>

              <ContactItem icon={Clock}>
                <p className="text-[16px] font-medium leading-[1.4] text-[#123F40]">
                  We are available
                  <br />
                  24/7 for you
                </p>
              </ContactItem>
            </div>
          </FloatingCard>

          {/* COLUMN 6 — REQUEST SUPPORT CARD */}
          <div className="footer-col mt-2 flex justify-center md:col-span-2 md:block lg:col-span-1 lg:flex lg:justify-end">
            <div
              className="footer-support-card footer-support-glow relative flex min-h-[248px] w-full max-w-[300px] flex-col overflow-hidden rounded-[18px] pl-12 text-white p-6"
            >
              <Image
                src={requestSupportBg}
                alt=""
                fill
                sizes="350px"
                className="pointer-events-none absolute -inset-2 z-0 object-fill"
              />
              <span
                aria-hidden
                className="footer-gold-sweep pointer-events-none absolute left-0 top-0 z-[2] h-px w-[35%]"
              />

              <div className="relative z-10 flex flex-1 flex-col">
                <div className="flex items-center gap-2.5">
                  <span className="relative inline-flex shrink-0 overflow-hidden rounded-full">
                    <HandHeart className="footer-card-icon footer-support-lotus h-16 w-16 text-[#D99A32]" strokeWidth={1.6} />
                    <ShineLayer sparks={2} />
                  </span>
                  <div>

                    <h3 className="footer-card-heading text-[16px] font-bold uppercase tracking-[0.04em] text-white">
                      Request <span className="text-[#D99A32]">
                        Support
                        </span>
                    </h3>
                    <p className="footer-card-desc mt-1 text-[16px] leading-5 text-white/85">
                      Share your email and our support team will contact you.
                    </p>

                    {/* divider ──── ✦ ──── */}
                 
                  </div>
                  
                </div>
                   <div className="mt-2.5 flex items-center gap-2">
                      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#D99A32]/70" />
                      <PiFlowerLotus className="h-3 w-3 text-[#D99A32]" />
                      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#D99A32]/70" />
                    </div>

                    <form onSubmit={handleSubscribe} className="mt-2.5">
                      <label htmlFor="footer-email" className="sr-only">
                        Email address
                      </label>

                      <div className="footer-card-input relative">
                        <FaEnvelope className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#123F40]/55" />
                        <input
                          id="footer-email"
                          type="email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          placeholder="Your email address"
                          className="h-10 w-full rounded-[10px] border-none bg-white pl-10 pr-3 text-[16px] text-[#123F40] outline-none transition placeholder:text-[#123F40]/45 focus:ring-2 focus:ring-[#F28C18]"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        className={`footer-send-btn relative mt-2 flex h-10 w-full items-center justify-center gap-2 overflow-hidden rounded-[10px] bg-gradient-to-r from-[#E94B2B] to-[#F28C18] text-[16px] font-bold uppercase tracking-[0.04em] text-white shadow-[0_6px_18px_rgba(233,75,43,0.20),0_2px_8px_rgba(242,140,24,0.12),inset_0_1px_0_rgba(255,255,255,0.20)] transition ${subscribed
                            ? "bg-emerald-600"
                            : ""
                          }`}
                      >
                        <ShineLayer sparks={0} />
                        <span className="relative z-10">{subscribed ? "Submitted" : "Send Request"}</span>
                        <FaPaperPlane className="footer-send-icon relative z-10 h-3.5 w-3.5" />
                      </button>
                    </form>

                    {/* divider commented for now
                <div className="mt-2.5 flex items-center gap-2">
                  <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#D99A32]/70" />
                  <PiFlowerLotus className="h-3 w-3 text-[#D99A32]" />
                  <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#D99A32]/70" />
                </div>
                */}

                    {/* follow us — simple, no glass */}
                    {/* <div className="footer-card-follow relative mt-3 px-1 pb-1">
                      <div className="flex items-center justify-center gap-3">
                        <span aria-hidden className="h-px w-12 bg-white/60" />
                        <p className="text-center text-[16px] font-bold uppercase tracking-[0.08em] text-white">
                          Follow Us
                        </p>
                        <span aria-hidden className="h-px w-12 bg-white/60" />
                      </div>
                      <div className="footer-card-socials mt-2 flex items-center justify-center gap-2.5">
                        {socials.map((social) => {
                          const Icon = social.icon;
                          return (
                            <a
                              key={social.label}
                              href={social.href}
                              aria-label={social.label}
                              className="footer-social footer-social-ring flex h-8 w-8 items-center justify-center rounded-full text-white transition hover:bg-[#D99A32] hover:text-white"
                            >
                              <span className="relative inline-flex shrink-0 overflow-hidden rounded-full">
                                <Icon className="h-3.5 w-3.5" />
                                <ShineLayer sparks={0} />
                              </span>
                            </a>
                          );
                        })}
                      </div>
                    </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════ LAYER 2 — VALUES PILL ═══════════ */}
        <div className="relative z-10 px-[4%] pb-0 mt-6">
          <div className="footer-values footer-values-pill mx-auto flex w-full max-w-[1350px] flex-wrap items-center justify-center rounded-[24px] px-2 py-2 sm:w-[84vw] sm:rounded-[30px] sm:px-3 lg:h-[56px] lg:flex-nowrap lg:rounded-full lg:py-0">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className={`footer-value flex flex-1 items-center justify-center gap-2.5 px-2 py-1.5 sm:px-3 lg:py-0 ${index < values.length - 1
                      ? "lg:border-r lg:border-[rgba(8,63,66,0.12)]"
                      : ""
                    }`}
                >
                  <span className="relative inline-flex shrink-0">
                    <Icon
                      strokeWidth={1.5}
                      className="footer-value-icon h-8 w-8 text-[#F28C18]"
                    />
                    <ShineLayer sparks={1} />
                  </span>
                  <div>
                    <h4 className="footer-value-heading text-[16px] font-bold uppercase tracking-[0.02em] text-[#123F40]">
                      {value.title}
                    </h4>
                    <p className="footer-value-desc mt-0 whitespace-pre-line text-[16px] leading-[1.35] text-[#173F40]">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ═══════════ LAYER 3 — BOTTOM BAR — ONE ROW ═══════════ */}
        <div className="footer-bottom relative z-10 mt-1.5 pt-8 pb-2">
          <div className="mx-auto flex max-w-[1540px] flex-col items-center gap-x-4 gap-y-2 px-[4%] py-0.5 text-center sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-y-1.5 sm:text-left">
            {/* copyright */}
            <div className="footer-bottom-left flex items-center gap-2 text-[16px] text-[#F5EFE4]">
              <PiFlowerLotus className="h-5 w-5 text-[#D99A32]" />
              <p>
                © {new Date().getFullYear()} {brandName}. All Rights Reserved.
              </p>
            </div>

            {/* legal links */}
            <div className="footer-bottom-center flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
              {legalLinks.map((item, index) => (
                <span key={item.label} className="flex items-center gap-4">
                  <Link
                    href={item.href}
                    className="text-[16px] text-[#F5EFE4] transition hover:text-[#D99A32]"
                  >
                    {item.label}
                  </Link>
                  {index < legalLinks.length - 1 && (
                    <span className="h-3 w-px bg-white/40" />
                  )}
                </span>
              ))}
            </div>

            {/* Seva • Samman • Samarpan */}
            <div className="footer-bottom-seva flex flex-col items-center text-center">
              <p className="text-[16px] font-bold tracking-[0.08em] text-[#F28C18]">
                Seva • Samman • Samarpan
              </p>
              <div
                aria-hidden
                className="mt-0.5 h-[2px] w-full bg-gradient-to-r from-transparent via-[#F28C18] to-transparent"
              />
            </div>

            {/* A Namo Gange Trust Initiative + logo — sath mein, text left logo right */}
            {/* <div className="flex items-center justify-center gap-2.5 border-0 pl-0 sm:border-l sm:border-white/25 sm:pl-4">
              <p className="text-[16px] text-[#F5EFE4]">{tagline}</p>
              <span className="footer-namo-gange relative inline-flex h-12 w-12 shrink-0 overflow-hidden rounded-full">
                <Image
                  src={namoGangeLogo}
                  alt="Namo Gange"
                  width={100}
                  height={48}
                  className="h-full w-full object-contain"
                />
                <ShineLayer sparks={1} />
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
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

function ShineLayer({ sparks = 0, gold = false }: { sparks?: number; gold?: boolean }) {
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
            background: i % 3 === 2 ? "#F28C18" : i % 2 === 1 ? "#FFE6A6" : "#FFFFFF",
          }}
        />
      ))}
    </span>
  );
}

interface FloatingCardProps {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  children: React.ReactNode;
  className?: string;
}

function FloatingCard({ icon: Icon, title, children, className = "" }: FloatingCardProps) {
  return (
    <div className={`footer-card relative mt-2 flex h-full flex-col items-center ${className}`}>
      {/* Icon circle temporarily hidden
      <span
        aria-hidden
        className="footer-icon-halo pointer-events-none absolute -top-[27px] left-1/2 z-[1] h-[58px] w-[58px] -translate-x-1/2 rounded-full"
      />
      <div className="footer-card-icon-circle footer-icon-medallion absolute -top-[23px] left-1/2 z-20 flex h-[46px] w-[46px] -translate-x-1/2 items-center justify-center overflow-hidden rounded-full">
        <Icon className="footer-card-icon h-5 w-5 text-[#F28C18]" strokeWidth={1.8} />
        <ShineLayer sparks={1} />
      </div>
      */}

      <div className="footer-card-premium relative flex min-h-full w-full flex-col items-start rounded-[18px] rounded-b-[26px] p-2 pt-1">
        <span
          aria-hidden
          className="pointer-events-none absolute right-2 top-2 h-[3px] w-[3px] rounded-full bg-[#F28C18] opacity-20"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-1.5 left-1.5 h-3 w-3 rounded-full bg-gradient-to-tr from-[#F28C18] to-transparent opacity-10"
        />
        <h3 className="footer-card-title mt-0 text-center text-[16px] font-bold uppercase tracking-[0.02em] text-[#123F40] self-center">
          {title}
        </h3>
        <div className="footer-heading-line footer-heading-glow mt-0.5 h-[2px] w-10 self-center" />
        <div className="mt-1 flex w-full flex-col items-start">{children}</div>
      </div>
    </div>
  );
}

interface ContactItemProps {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}

function ContactItem({ icon: Icon, children }: ContactItemProps) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="footer-contact-circle flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-blue-400">
        <Icon className="h-3.5 w-3.5 text-black" />
      </span>
      {children}
    </div>
  );
}
