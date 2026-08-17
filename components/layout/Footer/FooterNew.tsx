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
  FaTwitter,
  FaEnvelope,
  FaPaperPlane,
  FaArrowRight,
} from "react-icons/fa";
import { PiFlowerLotus } from "react-icons/pi";
import { MapPin, Mail, Clock } from "lucide-react";
import footerMokshaLogo from "../../../public/assets/footer-moksha-mark.png";
import footerBg from "../../../public/assets/footer-ghat-sunset.png";
import requestSupportBg from "../../../public/assets/request_support.webp";
import { newsletterApi } from "@/lib/newsletterApi";

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
  { label: "Facebook", href: "https://www.facebook.com/mokshasewa/", icon: FaFacebookF },
  { label: "Instagram", href: "https://www.instagram.com/mokshasewa/", icon: FaInstagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/moksha-sewaorg/", icon: FaLinkedinIn },
  { label: "Twitter", href: "https://x.com/mokshasewa", icon: FaTwitter },
  { label: "YouTube", href: "https://www.youtube.com/@Mokshasewa", icon: FaYoutube },
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
      if (root.getAttribute("data-animations") !== "enabled") return;

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
    <footer
      ref={footerRef}
      className="relative isolate overflow-hidden bg-[#050706] text-white"
    >
      {/* Slim action band attached directly above the footer content. */}
      <div className="relative z-30 border-y border-[#C6953E] bg-[linear-gradient(90deg,#F3DEB3_0%,#FFF5DE_48%,#EFD39E_100%)] px-4 py-3 shadow-[0_-5px_18px_rgba(0,0,0,0.12)] sm:px-6">
        <div className="mx-auto flex min-h-[54px] w-full max-w-[1400px] flex-col items-center justify-between gap-3 sm:flex-row">
          <div className="flex items-center gap-3 text-center text-[14px] font-semibold text-[#392814] sm:text-left sm:text-[15px]">
            <ReferenceLotusIcon className="h-8 w-8 shrink-0 text-[#A96F19]" strokeWidth={1.7} />
            <span>Stand with dignity. Serve with compassion.</span>
          </div>

          <div className="flex w-full items-center justify-center gap-3 sm:w-auto sm:justify-end">
            <Link
              href="/donation"
              className="inline-flex h-[40px] w-1/2 min-w-0 items-center justify-center gap-1.5 rounded-full border border-[#B97818] bg-[linear-gradient(180deg,#EFB84F_0%,#D88D1D_100%)] px-3 text-[13px] font-bold text-[#211609] shadow-[0_4px_12px_rgba(160,99,18,0.22)] hover:brightness-105 sm:w-auto sm:min-w-[150px] sm:gap-2 sm:px-4 sm:text-[14px]"
            >
              <ReferenceHandHeartIcon className="h-5 w-5" strokeWidth={1.7} />
              <span>Donate Now</span>
            </Link>

            <Link
              href="/volunteer/register"
              className="inline-flex h-[40px] w-1/2 min-w-0 items-center justify-center gap-1.5 rounded-full border border-[#A96F19] bg-white/75 px-3 text-[13px] font-bold text-[#6E4713] shadow-[0_3px_10px_rgba(110,71,19,0.10)] hover:bg-white sm:w-auto sm:min-w-[175px] sm:gap-2 sm:px-4 sm:text-[14px]"
            >
              <ReferenceUsersIcon className="h-5 w-5" strokeWidth={1.7} />
              <span>Become a Volunteer</span>
            </Link>
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
            src={footerBg}
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
          className="absolute left-[100px] top-[-190px] h-[900px] w-[900px] rounded-full bg-[#050706]"
        />

        {/* Controlled left circle arc: bold and softly glowing, clipped just
            before the values strip so it never enters the lower section. */}
        <div
          aria-hidden
          className="absolute left-[100px] top-[-190px] h-[900px] w-[900px] rounded-full border-l-[6px] border-[#E2AC3D] [clip-path:inset(0_0_35%_0)] [filter:drop-shadow(0_0_4px_rgba(226,172,61,0.78))_drop-shadow(0_0_10px_rgba(226,172,61,0.34))]"
        />

        {/* subtle inner green depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_18%,rgba(15,92,78,0.18),transparent_34%),linear-gradient(90deg,transparent_0%,rgba(0,31,28,0.08)_48%,rgba(0,18,17,0.30)_100%)]" />
      </div>

      {/* Mobile/tablet gets a clean dark footer with a soft scenic wash */}
      <div className="footer-ganga pointer-events-none absolute inset-0 z-0 lg:hidden">
        <Image
          src={footerBg}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-[0.13]"
        />
        <div className="absolute inset-0 bg-black/95" />
      </div>

      <div className="footer-master relative z-10">
        {/* ========================= MAIN ROW ========================= */}
        <div className="mx-auto w-full max-w-[1600px] px-4 pb-5 pt-6 sm:px-6 lg:min-h-[400px] lg:px-4 lg:pb-4 lg:pt-6 xl:px-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-2 xl:grid-cols-[26%_10%_13%_14%_15%_22%] xl:gap-0">
            {/* BRAND */}
            <div className="footer-col relative flex flex-col items-center justify-center px-4 text-center sm:col-span-2 lg:col-span-1 lg:min-h-[330px] lg:justify-start lg:pb-1 lg:pt-1 min-[1280px]:pl-[136px] min-[1280px]:pr-2">
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

              <h2 className="footer-brand-title mt-1 text-[20px] font-extrabold uppercase leading-none tracking-[0.025em] text-white sm:text-[26px]">
                {brandName}
              </h2>

              <p className="footer-brand-tagline mt-2 text-[12px] font-medium tracking-[0.01em] text-[#E2AC3D] sm:text-[13px]">
                A Namo Gange Trust Initiative
              </p>

              <GoldDivider className="footer-brand-divider mt-1" />

              <p className="footer-brand-desc relative mx-auto mt-4 max-w-[250px] text-[12px] font-normal leading-[1.45] text-white/95 sm:text-[13px] lg:left-2">
                {description}
              </p>

              <Link
                href="/donation"
                className="footer-donate-btn relative mt-4 inline-flex h-[44px] min-w-[180px] items-center justify-center gap-2.5 overflow-hidden rounded-full border border-[#E6B44A] bg-[linear-gradient(180deg,#F1C15A_0%,#D88D1D_100%)] px-4 text-[14px] font-bold tracking-[0.01em] text-[#1B2A27] shadow-[0_3px_12px_rgba(218,154,42,0.38)] transition lg:left-8"
              >
                <span className="relative inline-flex shrink-0 overflow-hidden rounded-full">
                  <ReferenceHandHeartIcon className="h-5 w-5" strokeWidth={1.8} />
                  <ShineLayer sparks={1} />
                </span>
                Donate Now
                <FaArrowRight className="footer-donate-arrow h-3.5 w-3.5" />
                <ShineLayer sparks={0} />
              </Link>
            </div>

            {/* QUICK LINKS */}
            <FloatingCard icon={ReferenceChainIcon} title="Quick Links">
              <ul className="space-y-[5px]">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
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
            <FloatingCard icon={ReferenceHandHeartIcon} title="Our Services">
              <ul className="space-y-[5px]">
                {services.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
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
            <FloatingCard icon={ReferenceLotusIcon} title="Our Initiatives">
              <ul className="space-y-[5px]">
                {initiatives.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="footer-link inline-flex items-start gap-2 text-[12px] font-medium leading-[1.4] text-white/95 transition hover:text-[#E5B14A] xl:text-[13px]"
                    >
                      <FaChevronRight className="footer-link-arrow mt-[3px] h-2.5 w-2.5 shrink-0 text-[#E4A631]" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </FloatingCard>

            {/* CONTACT */}
            <FloatingCard icon={ReferencePhoneIcon} title="Contact Us">
              <div className="space-y-2.5">
                <ContactItem icon={MapPin}>
                  <p>Delhi NCR, India</p>
                </ContactItem>

                <ContactItem icon={ReferencePhoneIcon}>
                  <a
                    href={`tel:+91${contactNumber}`}
                    className="transition hover:text-[#E5B14A]"
                  >
                    +91 {contactNumber}
                  </a>
                </ContactItem>

                <ContactItem icon={Mail}>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="whitespace-nowrap transition hover:text-[#E5B14A]"
                  >
                    {contactEmail}
                  </a>
                </ContactItem>

                <ContactItem icon={Clock}>
                  <p>
                    We are available
                    <br />
                    24/7 for you
                  </p>
                </ContactItem>
              </div>
            </FloatingCard>

            {/* REQUEST SUPPORT */}
            <div className="footer-col flex items-start justify-center sm:col-span-2 lg:col-span-1 lg:justify-end 2xl:pl-5">
              <div className="footer-support-card footer-support-glow relative w-full max-w-[315px] overflow-hidden rounded-[16px] border border-[#D6A139] bg-[#050706] px-5 pb-4 pt-4 shadow-[inset_0_0_40px_rgba(255,185,57,0.04)] lg:min-h-[340px]">
                <Image
                  src={requestSupportBg}
                  alt=""
                  fill
                  sizes="390px"
                  className="pointer-events-none absolute inset-0 z-0 object-cover opacity-[0.08]"
                />

                <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(140deg,rgba(255,185,57,0.025),rgba(0,0,0,0.38))]" />

                <div className="relative z-10">
                  <div className="flex items-start gap-3">
                    <span className="relative inline-flex h-[58px] w-[58px] shrink-0 items-center justify-center overflow-hidden rounded-full text-[#D9A33A]">
                      <ReferenceHandHeartIcon
                        className="footer-card-icon h-[54px] w-[54px]"
                        strokeWidth={1.55}
                      />
                      <ShineLayer sparks={2} />
                    </span>

                    <div className="pt-1">
                      <h3 className="footer-card-heading text-[17px] font-extrabold uppercase tracking-[0.01em] text-white">
                        Request <span className="text-[#E2AA3C]">Support</span>
                      </h3>
                      <p className="footer-card-desc mt-1.5 max-w-[180px] text-[12px] leading-[1.4] text-white/95">
                        Share your email and our support team will contact you.
                      </p>
                    </div>
                  </div>

                  <GoldDivider className="mt-4" />

                  <form onSubmit={handleSubscribe} className="mt-4">
                    <label htmlFor="footer-email" className="sr-only">
                      Email address
                    </label>

                    <div className="footer-card-input relative">
                      <FaEnvelope className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#697A78]" />
                      <input
                        id="footer-email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Your email address"
                        className="h-[46px] w-full rounded-[7px] border border-white/70 bg-white pl-12 pr-4 text-[14px] text-[#173B38] outline-none placeholder:text-[#7B8584] focus:border-[#E4AA37] focus:ring-2 focus:ring-[#E4AA37]/30"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className={`footer-send-btn relative mt-3 flex h-[46px] w-full items-center justify-center gap-3 overflow-hidden rounded-[7px] bg-[linear-gradient(180deg,#F2C45E_0%,#D98A19_100%)] text-[14px] font-bold tracking-[0.01em] text-white shadow-[0_6px_16px_rgba(0,0,0,0.15)] transition ${subscribed ? "!bg-emerald-600" : ""
                        }`}
                    >
                      <ShineLayer sparks={0} />
                      <span className="relative z-10">
                        {subscribed ? "Submitted" : "Send Request"}
                      </span>
                      <FaPaperPlane className="footer-send-icon relative z-10 h-5 w-5" />
                    </button>
                  </form>

                  <div className="footer-card-follow mt-4">
                    <div className="flex items-center justify-center gap-3">
                      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#D9A33A]/80" />
                      <span className="text-[12px] font-bold uppercase tracking-[0.06em] text-white">
                        Follow Us
                      </span>
                      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#D9A33A]/80" />
                    </div>

                    <div className="mt-3 flex items-center justify-center gap-3">
                      {socials.map((social) => {
                        const Icon = social.icon;
                        return (
                          <a
                            key={social.label}
                            href={social.href}
                            aria-label={social.label}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-social relative flex h-[42px] w-[42px] items-center justify-center overflow-hidden rounded-full border border-[#D9A33A] text-[#E7B448] transition hover:bg-[#D9A33A] hover:text-[#003a35]"
                          >
                            <Icon className="h-[21px] w-[21px]" />
                            <ShineLayer sparks={0} />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================= VALUES ROW ========================= */}
        <div className="footer-values relative border-y border-[#B8862C] bg-[#070A09]/[0.99]">
          <PiFlowerLotus className="pointer-events-none absolute -left-5 bottom-0 h-28 w-28 text-[#D9A33A] opacity-[0.055]" />
          <PiFlowerLotus className="pointer-events-none absolute -right-5 bottom-0 h-28 w-28 text-[#D9A33A] opacity-[0.055]" />

          <div className="mx-auto grid w-full max-w-[1480px] grid-cols-1 px-5 py-2 sm:grid-cols-2 lg:grid-cols-5 lg:px-4 lg:py-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className={`footer-value flex min-h-[64px] items-center gap-3 px-3 py-1.5 sm:px-4 lg:justify-center lg:py-0 ${index < values.length - 1
                    ? "lg:border-r lg:border-[#C39438]/45"
                    : ""
                    }`}
                >
                  <span className="relative inline-flex shrink-0">
                    <Icon
                      strokeWidth={1.45}
                      className="footer-value-icon h-12 w-12 text-[#E3B44E] lg:h-[55px] lg:w-[55px]"
                    />
                    <ShineLayer sparks={1} />
                  </span>

                  <div>
                    <h4 className="footer-value-heading text-[14px] font-bold uppercase tracking-[0.015em] text-[#F3D481]">
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
          <div className="mx-auto grid min-h-[64px] w-full max-w-[1540px] grid-cols-1 items-center gap-2 px-5 py-3 text-center sm:px-7 lg:grid-cols-[1.6fr_2.2fr_1.5fr_1.55fr] lg:gap-0 lg:px-8 lg:py-2">
            <div className="footer-bottom-left flex items-center justify-center gap-3 text-[12px] text-white/90 lg:justify-start">
              <PiFlowerLotus className="h-10 w-10 shrink-0 text-[#D9A33A]" />
              <p>© {new Date().getFullYear()} {brandName}. All Rights Reserved.</p>
            </div>

            <div className="footer-bottom-center flex flex-wrap items-center justify-center gap-y-2">
              {legalLinks.map((item, index) => (
                <span key={item.label} className="flex items-center">
                  <Link
                    href={item.href}
                    className="px-3 text-[12px] text-white/90 transition hover:text-[#E5B14A]"
                  >
                    {item.label}
                  </Link>
                  {index < legalLinks.length - 1 && (
                    <span className="h-6 w-px bg-[#C79A3D]/50" />
                  )}
                </span>
              ))}
            </div>

            <div className="footer-bottom-seva flex flex-col items-center justify-center">
              <p className="font-serif text-[19px] font-semibold italic tracking-[0.02em] text-[#DCA53A]">
                Seva • Samman • Samarpan
              </p>
              <GoldDivider className="mt-1" compact />
            </div>

            <div className="flex items-center justify-center gap-4 text-[12px] text-white/90 lg:justify-end">
              <p>A Namo Gange Trust Initiative</p>
              <PiFlowerLotus className="h-11 w-11 shrink-0 text-[#D9A33A]" />
            </div>
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
      className={`footer-card relative flex min-h-0 flex-col px-4 py-1 sm:min-h-[270px] lg:min-h-[305px] lg:border-r lg:border-[#C39438]/35 lg:px-3 xl:min-h-[320px] 2xl:px-4 ${className}`}
    >
      <div className="flex flex-col items-center">
        <span className="footer-card-icon-circle relative flex h-[58px] w-[58px] items-center justify-center overflow-hidden rounded-full border border-[#D9A33A]/80 text-[#E2AC3D] 2xl:h-[64px] 2xl:w-[64px]">
          <Icon
            className="footer-card-icon h-[31px] w-[31px] 2xl:h-[35px] 2xl:w-[35px]"
            strokeWidth={1.55}
          />
          <ShineLayer sparks={1} />
        </span>

        <h3 className="footer-card-title mt-3 whitespace-nowrap text-center text-[14px] font-bold uppercase tracking-[0.015em] text-white">
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
