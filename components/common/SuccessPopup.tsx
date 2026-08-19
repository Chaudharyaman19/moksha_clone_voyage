"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";
import { PiFlowerLotus } from "react-icons/pi";

interface SuccessPopupProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  ctaLabel?: string;
  /** e.g. 4000 — popup khud band ho jayega, saath me thin gold progress line dikhegi */
  autoCloseMs?: number;
}

/** exit animation ki duration — CSS ke saath match honi chahiye */
const EXIT_MS = 260;

/** check ke around udne wale sparkles (deterministic, taaki SSR/CSR mismatch na ho) */
const SPARKS = Array.from({ length: 10 }, (_, i) => {
  const angle = (Math.PI * 2 * i) / 10 - Math.PI / 2 + 0.28;
  const dist = i % 2 === 0 ? 44 : 34;
  return {
    x: Math.round(Math.cos(angle) * dist),
    y: Math.round(Math.sin(angle) * dist),
    delay: 0.26 + (i % 5) * 0.035,
    size: i % 3 === 0 ? 4 : 3,
  };
});

export default function SuccessPopup({
  open,
  onClose,
  title = "Thank You!",
  message = "Your form has been submitted successfully.",
  ctaLabel = "Okay, Got It",
  autoCloseMs,
}: SuccessPopupProps) {
  const [mounted, setMounted] = useState(false);
  // render = DOM me hai (exit animation ke dauran bhi true)
  const [render, setRender] = useState(open);
  // show = enter state (classes toggle karne ke liye)
  const [show, setShow] = useState(false);

  const panelRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<Element | null>(null);

  useEffect(() => setMounted(true), []);

  /* ---------- enter / exit orchestration ---------- */
  useEffect(() => {
    if (open) {
      setRender(true);
      // do rAF = browser ko initial (closed) state paint karne ka mauka
      let inner = 0;
      const outer = requestAnimationFrame(() => {
        inner = requestAnimationFrame(() => setShow(true));
      });
      return () => {
        cancelAnimationFrame(outer);
        cancelAnimationFrame(inner);
      };
    }

    setShow(false);
    const t = window.setTimeout(() => setRender(false), EXIT_MS);
    return () => window.clearTimeout(t);
  }, [open]);

  /* ---------- scroll lock (bina layout shift ke) ---------- */
  useEffect(() => {
    if (!render) return;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    const prevOverflow = document.body.style.overflow;
    const prevPadding = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;

    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPadding;
    };
  }, [render]);

  /* ---------- Esc se close + focus wapas ---------- */
  useEffect(() => {
    if (!open) return;
    lastFocused.current = document.activeElement;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const focusTimer = window.setTimeout(() => ctaRef.current?.focus(), 340);

    return () => {
      document.removeEventListener("keydown", onKey);
      window.clearTimeout(focusTimer);
      (lastFocused.current as HTMLElement | null)?.focus?.();
    };
  }, [open, onClose]);

  /* ---------- auto close ---------- */
  useEffect(() => {
    if (!open || !autoCloseMs) return;
    const t = window.setTimeout(onClose, autoCloseMs);
    return () => window.clearTimeout(t);
  }, [open, autoCloseMs, onClose]);

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose],
  );

  if (!mounted || !render) return null;

  return createPortal(
    <>
      <style>{CSS}</style>

      <div
        className={`sp-overlay fixed inset-0 z-[999] flex items-center justify-center bg-[#2C1810]/50 p-4 ${show ? "sp-overlay--in" : ""
          }`}
        onClick={handleOverlayClick}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sp-title"
        aria-describedby="sp-message"
      >
        <div
          ref={panelRef}
          className={`sp-panel relative w-full max-w-[300px] overflow-hidden rounded-[20px] bg-white text-center ring-1 ring-[#E6D6BF] ${show ? "sp-panel--in" : ""
            }`}
        >
          {/* gold accent line — site-wide cards ke jaisa, halka sa shimmer ke saath */}
          <div className="sp-accent absolute inset-x-0 top-0 h-[3px]" />

          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute right-2.5 top-3 z-10 flex h-7 w-7 items-center justify-center rounded-full text-[#8B6A3E]/45 outline-none transition duration-200 hover:bg-[#F5E9D9] hover:text-[#8B6A3E] focus-visible:ring-2 focus-visible:ring-[#C9A574]/60"
          >
            <FiX className="h-3.5 w-3.5" />
          </button>

          {/* ---------- head ---------- */}
          <div className="relative overflow-hidden bg-gradient-to-b from-[#FBF8F3] to-white px-5 pb-2 pt-8">
            <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full border border-[#C9A574]/15" />
            <div className="pointer-events-none absolute -bottom-4 -left-7 h-16 w-16 rounded-full border border-[#C9A574]/10" />

            <div className="relative mx-auto flex h-16 w-16 items-center justify-center">
              {/* halo + do expanding rings */}
              <span className="sp-glow absolute inset-0 rounded-full" />
              <span className="sp-ring absolute inset-0 rounded-full border border-[#2FA84F]/35" />
              <span className="sp-ring sp-ring--2 absolute inset-0 rounded-full border border-[#2FA84F]/25" />

              <span className="sp-disc absolute left-1/2 top-1/2 h-[52px] w-[52px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-[#EAF8EE] to-[#DCF3E2]" />

              <span className="sp-badge relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-b from-[#43D072] to-[#1F9A45]">
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <path
                    className="sp-tick"
                    d="M5 12.6 10 17.4 19.2 7.6"
                    fill="none"
                    stroke="#fff"
                    strokeWidth={2.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              {SPARKS.map((s, i) => (
                <span
                  key={i}
                  className="sp-spark"
                  style={
                    {
                      "--tx": `${s.x}px`,
                      "--ty": `${s.y}px`,
                      "--d": `${s.delay}s`,
                      "--s": `${s.size}px`,
                    } as React.CSSProperties
                  }
                />
              ))}
            </div>

            <PiFlowerLotus className="sp-lotus relative mx-auto mt-2 h-3.5 w-3.5 text-[#C9A574]" />
          </div>

          {/* ---------- body ---------- */}
          <div className="px-6 pb-6 pt-2.5">
            <h3
              id="sp-title"
              className="sp-fade sp-fade--1 text-[18px] leading-tight text-[#2C1810]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              {title}
            </h3>

            <p
              id="sp-message"
              className="sp-fade sp-fade--2 mx-auto mt-2 text-[12.5px] leading-relaxed text-[#6B5645]"
            >
              {message}
            </p>

            <button
              ref={ctaRef}
              onClick={onClose}
              className="sp-cta sp-fade sp-fade--3 mt-5 w-full rounded-xl bg-gradient-to-r from-[#9C794C] to-[#73532F] py-2.5 text-[12.5px] font-semibold tracking-wide text-white outline-none transition duration-300 hover:brightness-110 focus-visible:ring-2 focus-visible:ring-[#C9A574] focus-visible:ring-offset-2"
            >
              {ctaLabel}
            </button>
          </div>

          {autoCloseMs ? (
            <span
              className="sp-progress absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-[#C9A574] to-[#9C794C]"
              style={{ animationDuration: `${autoCloseMs}ms` }}
            />
          ) : null}
        </div>
      </div>
    </>,
    document.body,
  );
}

/* ------------------------------------------------------------------ */

const CSS = `
.sp-overlay{
  opacity:0;
  backdrop-filter:blur(0px);
  -webkit-backdrop-filter:blur(0px);
  transition:opacity .28s ease, backdrop-filter .38s ease;
}
.sp-overlay--in{
  opacity:1;
  backdrop-filter:blur(6px);
  -webkit-backdrop-filter:blur(6px);
}

.sp-panel{
  opacity:0;
  transform:translateY(18px) scale(.9);
  box-shadow:0 30px 70px rgba(44,24,16,.35);
  transition:opacity .26s ease, transform .26s cubic-bezier(.4,0,1,1);
  will-change:transform,opacity;
}
.sp-panel--in{
  opacity:1;
  transform:translateY(0) scale(1);
  /* soft spring — overshoot ke saath, bilkul smooth */
  transition:opacity .3s ease, transform .62s cubic-bezier(.2,1.24,.36,1);
}

.sp-accent{
  background:linear-gradient(90deg,transparent,#C9A574,transparent);
  background-size:200% 100%;
}
.sp-panel--in .sp-accent{ animation:sp-sheen 2.6s ease-in-out .35s infinite; }
@keyframes sp-sheen{
  0%,100%{ background-position:0% 0 }
  50%{ background-position:100% 0 }
}

/* --- check badge --- */
.sp-glow{
  background:radial-gradient(circle,rgba(47,168,79,.28) 0%,rgba(47,168,79,0) 68%);
  opacity:0; transform:scale(.6);
}
.sp-panel--in .sp-glow{ animation:sp-glow-in .7s ease-out .12s forwards; }
@keyframes sp-glow-in{ to{ opacity:1; transform:scale(1) } }

.sp-disc{
  opacity:0; transform:translate(-50%,-50%) scale(.5);
  box-shadow:inset 0 1px 2px rgba(255,255,255,.9);
}
.sp-panel--in .sp-disc{ animation:sp-disc-in .5s cubic-bezier(.2,1.3,.4,1) .1s forwards; }
@keyframes sp-disc-in{ to{ opacity:1; transform:translate(-50%,-50%) scale(1) } }

.sp-badge{
  opacity:0; transform:scale(.35) rotate(-14deg);
  box-shadow:0 8px 18px rgba(31,154,69,.35);
}
.sp-panel--in .sp-badge{ animation:sp-badge-in .58s cubic-bezier(.2,1.42,.4,1) .16s forwards; }
@keyframes sp-badge-in{ to{ opacity:1; transform:scale(1) rotate(0) } }

.sp-tick{ stroke-dasharray:30; stroke-dashoffset:30; }
.sp-panel--in .sp-tick{ animation:sp-draw .42s cubic-bezier(.65,0,.35,1) .36s forwards; }
@keyframes sp-draw{ to{ stroke-dashoffset:0 } }

.sp-ring{ opacity:0; }
.sp-panel--in .sp-ring{ animation:sp-ring-out 2.4s cubic-bezier(.2,.6,.3,1) .5s infinite; }
.sp-panel--in .sp-ring--2{ animation-delay:1.1s; }
@keyframes sp-ring-out{
  0%{ opacity:.85; transform:scale(.72) }
  70%{ opacity:0; transform:scale(1.5) }
  100%{ opacity:0; transform:scale(1.5) }
}

.sp-spark{
  position:absolute; left:50%; top:50%;
  width:var(--s); height:var(--s); margin:calc(var(--s) / -2) 0 0 calc(var(--s) / -2);
  border-radius:9999px; background:#C9A574; opacity:0;
}
.sp-spark:nth-child(2n){ background:#3FC96A; }
.sp-panel--in .sp-spark{ animation:sp-spark-out .82s cubic-bezier(.15,.7,.3,1) var(--d) forwards; }
@keyframes sp-spark-out{
  0%{ opacity:0; transform:translate(0,0) scale(.4) }
  25%{ opacity:1 }
  100%{ opacity:0; transform:translate(var(--tx),var(--ty)) scale(.5) }
}

/* --- text + cta stagger --- */
.sp-lotus,.sp-fade{ opacity:0; transform:translateY(8px); }
.sp-panel--in .sp-lotus{ animation:sp-rise .5s ease-out .42s forwards; }
.sp-panel--in .sp-fade--1{ animation:sp-rise .5s ease-out .5s forwards; }
.sp-panel--in .sp-fade--2{ animation:sp-rise .5s ease-out .58s forwards; }
.sp-panel--in .sp-fade--3{ animation:sp-rise .5s ease-out .66s forwards; }
@keyframes sp-rise{ to{ opacity:1; transform:translateY(0) } }

.sp-cta{ box-shadow:0 8px 18px rgba(115,83,47,.28); }
.sp-cta:hover{ transform:translateY(-1px); box-shadow:0 12px 24px rgba(115,83,47,.4); }
.sp-cta:active{ transform:translateY(0) scale(.985); box-shadow:0 6px 14px rgba(115,83,47,.32); }

.sp-progress{ transform:scaleX(1); animation:sp-progress linear forwards; }
@keyframes sp-progress{ to{ transform:scaleX(0) } }

/* --- accessibility --- */
@media (prefers-reduced-motion: reduce){
  .sp-overlay,.sp-panel{ transition-duration:.12s }
  .sp-panel--in .sp-accent,
  .sp-panel--in .sp-ring,
  .sp-panel--in .sp-spark{ animation:none }
  .sp-spark{ display:none }
  .sp-glow,.sp-disc,.sp-badge,.sp-lotus,.sp-fade{ opacity:1; transform:none }
  .sp-disc{ transform:translate(-50%,-50%) }
  .sp-tick{ stroke-dashoffset:0 }
  .sp-panel--in .sp-glow,.sp-panel--in .sp-disc,.sp-panel--in .sp-badge,
  .sp-panel--in .sp-tick,.sp-panel--in .sp-lotus,.sp-panel--in .sp-fade{ animation:none }
  .sp-cta:hover{ transform:none }
}
`;