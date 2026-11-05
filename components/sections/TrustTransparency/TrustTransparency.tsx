"use client";

import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { Eye, HandHeart, Scale, ShieldCheck } from "lucide-react";
import AccentTitle from "../shared/AccentTitle";
import { textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";

const svgProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

function LotusIcon({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="tt-lotus-gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f6c43a" />
          <stop offset="1" stopColor="#d99a12" />
        </linearGradient>
      </defs>
      <path d="M32 3c5 7 9 12 9 19 0 6-4 10-9 12-5-2-9-6-9-12 0-7 4-12 9-19Z" fill="none" stroke="url(#tt-lotus-gold)" strokeWidth="3.6" strokeLinejoin="round" />
      <path d="M32 12c2.5 4 4 7 4 10.5S34.500 29 32 31c-2.500-2-4-5-4-8.500S29.500 16 32 12Z" fill="url(#tt-lotus-gold)" />
      <path d="M22.500 22C14 22 7 26.500 5 35c8.500 0 15-3 19-9" fill="none" stroke="url(#tt-lotus-gold)" strokeWidth="3.600" strokeLinejoin="round" />
      <path d="M41.500 22C50 22 57 26.500 59 35c-8.500 0-15-3-19-9" fill="none" stroke="url(#tt-lotus-gold)" strokeWidth="3.600" strokeLinejoin="round" />
      <path d="M2 44c8-5 15-5 22 0s14 5 20 0c6-4 12-4 18-1" fill="none" stroke="#1d6fb8" strokeWidth="4.200" strokeLinecap="round" />
      <path d="M8 53c7-4 13-4 19 0s12 4 17 0c4-3 8-3 12-1" fill="none" stroke="#4aa3dc" strokeWidth="3.800" strokeLinecap="round" />
    </svg>
  );
}

function PeopleIcon({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} strokeWidth="1.9" aria-hidden="true" {...svgProps}>
      <circle cx="24" cy="9.500" r="5" />
      <circle cx="10" cy="21" r="4.500" />
      <circle cx="38" cy="21" r="4.500" />
      <path d="M14 41c0-7 4.500-11.500 10-11.500S34 34 34 41" />
      <path d="M2 40c0-6 3-10 8-10.500" />
      <path d="M46 40c0-6-3-10-8-10.500" />
    </svg>
  );
}

function DocumentIcon({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} strokeWidth="1.9" aria-hidden="true" {...svgProps}>
      <path d="M10 4h20l9 9v31H10Z" />
      <path d="M30 4v9h9" />
      <path d="M16 21h8M16 28h8M16 35h8" />
      <path d="M29 36v-5M33.500 36v-9" />
    </svg>
  );
}

function ArrowIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} strokeWidth="2.200" aria-hidden="true" {...svgProps}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

const trustCards: { icon: ReactNode; title: string; description: string }[] = [
  {
    icon: <PeopleIcon className="h-[52px] w-[52px]" />,
    title: "About\nNamo Gange Trust",
    description:
      "Moksha Sewa is a humanitarian initiative of Namo Gange Trust, a public charitable trust committed to compassionate service and social welfare.",
  },
  {
    icon: <ShieldCheck className="h-[52px] w-[52px]" strokeWidth={1.7} />,
    title: "Governance\n& Policies",
    description:
      "Our work is guided by a clear governance framework, well-defined policies and ethical standards.",
  },
  {
    icon: <DocumentIcon className="h-[52px] w-[52px]" />,
    title: "Impact\n& Reports",
    description:
      "We maintain accurate records of our work, finances and impact, with regular reporting and updates.",
  },
  {
    icon: <HandHeart className="h-[52px] w-[52px]" strokeWidth={1.7} />,
    title: "Donation &\nRefund Policy",
    description:
      "Our donation process is simple, secure and transparent. Clear details on contribution use and our refund policy ensure complete trust.",
  },
];

const values: { icon: ReactNode; title: string; description: string }[] = [
  { icon: <HandHeart className="h-11 w-11" strokeWidth={1.6} />, title: "SEWA", description: "Service with\ncompassion" },
  { icon: <Scale className="h-11 w-11" strokeWidth={1.6} />, title: "INTEGRITY", description: "Ethical actions,\nhonest intent" },
  { icon: <Eye className="h-11 w-11" strokeWidth={1.6} />, title: "TRANSPARENCY", description: "Open processes,\nclear communication" },
  { icon: <PeopleIcon className="h-11 w-11" />, title: "ACCOUNTABILITY", description: "Answerable to all,\nalways improving." },
];

// Desktop layout: every graphic (logo, divider, quote marks, icons) is its own file in
// /public/assets/trust and is placed on a 1600x816 grid, so each can be swapped on its own.
// scene.jpg is only the backdrop (sky, ghat photo, hill, green band). All copy is live text.
const px = (n: number) => `${n / 16}cqw`;
const at = (x: number, cy: number, fs: number, lh: number, extra?: CSSProperties): CSSProperties => ({
  position: "absolute",
  left: px(x),
  top: px(cy - lh / 2),
  fontSize: px(fs),
  lineHeight: px(lh),
  whiteSpace: "nowrap",
  ...extra,
});

// [file, x, y, width, height] in 1600x816 design pixels
const stageArt: [string, number, number, number, number][] = [
  ["logo-mark", 126, 4, 148, 112],
  ["divider", 214, 182, 388, 48],
  ["quote-open", 802, 68, 47, 39],
  ["quote-close", 1051, 174, 48, 38],
  ["icon-about", 112, 340, 86, 62],
  ["icon-governance", 414, 340, 66, 64],
  ["icon-impact", 668, 340, 62, 62],
  ["icon-donation", 908, 340, 72, 64],
  ["value-lotus", 80, 704, 68, 64],
  ["value-sewa", 438, 706, 70, 62],
  ["value-integrity", 678, 706, 68, 62],
  ["value-transparency", 946, 706, 74, 62],
  ["value-accountability", 1256, 706, 78, 62],
];

// [x, y, width, height, colour] gold rules
const stageRules: [number, number, number, number, string][] = [
  [277, 36, 1, 60, "#d7b66d"],
  [288, 93.5, 31, 2, "#d9ae43"],
  [596, 93.5, 30, 2, "#d9ae43"],
  [769, 65, 1.5, 143, "#d4a33b"],
  [349, 405, 1, 157, "#e0b562"],
  [607, 405, 1, 157, "#e0b562"],
  [836, 405, 1, 157, "#e0b562"],
  [310, 628, 170, 1.5, "#e3ba6b"],
  [852, 628, 180, 1.5, "#e3ba6b"],
  [404, 713, 1, 55, "#d9ae43"],
  [642, 713, 1, 55, "#d9ae43"],
  [912, 713, 1, 55, "#d9ae43"],
  [1224, 713, 1, 55, "#d9ae43"],
];

const stageCards = [
  { x: 78, title: ["About", "Namo Gange Trust"], lines: ["Moksha Sewa is a humanitarian", "initiative of Namo Gange Trust,", "a public charitable trust committed", "to compassionate service", "and social welfare."] },
  { x: 388, title: ["Governance", "& Policies"], lines: ["Our work is guided by a clear", "governance framework,", "well-defined policies and", "ethical standards."] },
  { x: 645, title: ["Impact", "& Reports"], lines: ["We maintain accurate", "records of our work,", "finances and impact,", "with regular reporting", "and updates."] },
  { x: 873, title: ["Donation &", "Refund Policy"], lines: ["Our donation process is", "simple, secure and transparent.", "Clear details on contribution", "use and our refund policy", "ensure complete trust."] },
];

const stageValues = [
  { x: 524, title: "SEWA", lines: ["Service with", "compassion"] },
  { x: 766, title: "INTEGRITY", lines: ["Ethical actions,", "honest intent"] },
  { x: 1038, title: "TRANSPARENCY", lines: ["Open processes,", "clear communication"] },
  { x: 1354, title: "ACCOUNTABILITY", lines: ["Answerable to all,", "always improving."] },
];

function DesktopStage({ title, quoteLines, buttonLabel, buttonHref, srDescription }: { title: string; quoteLines: string[]; buttonLabel: string; buttonHref: string; srDescription: string }) {
  return (
    <section className="trust-stage hidden w-full bg-[#fffaf0] lg:block" aria-label="Trust and transparency">
      <div data-stage className="relative w-full overflow-hidden" style={{ containerType: "inline-size", aspectRatio: "1600 / 816" }}>
        <Image src="/assets/trust/scene.jpg" alt="" fill sizes="100vw" unoptimized className="object-cover" />

        {stageArt.map(([name, x, y, w, h]) => (
          <Image key={name} src={`/assets/trust/${name}.png`} alt="" width={w * 4} height={h * 4} unoptimized style={{ position: "absolute", left: px(x), top: px(y), width: px(w), height: px(h) }} />
        ))}
        {stageRules.map(([x, y, w, h, color], i) => (
          <span key={i} aria-hidden="true" style={{ position: "absolute", left: px(x), top: px(y), width: px(w), height: px(h), background: color }} />
        ))}

        <p className="font-semibold text-[#0f3a75]" style={at(287, 50, 43.5, 50, { letterSpacing: ".01em" })}>MOKSHA SEWA</p>
        <p className="font-medium uppercase text-[#1d3557]" style={at(326, 94, 15.8, 20, { letterSpacing: ".115em" })}>Sewa With Responsibility</p>

        <h2 className="font-serif font-bold text-[#0b4a2f]" style={at(89, 159, 63.2, 66, { letterSpacing: "-.015em" })}>{title.split("&").map((part, i) => (
          <span key={i} style={i > 0 ? { color: "#D54200" } : undefined}>
            {i > 0 && <span style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>&amp;</span>}
            {part}
          </span>
        ))}</h2>
        <p className="text-center text-[#1d2833]" style={at(115, 258.5, 24, 31, { width: px(580) })}>
          A humane, accountable and transparent initiative<br />for dignified last rites support.
        </p>
        <p className="sr-only">{srDescription}</p>

        <p className="italic text-[#162338]" style={at(857, 87, 22.7, 30.5)}>
          {quoteLines.map((line) => <span key={line} className="block">{line}</span>)}
        </p>

        {stageCards.map((card) => (
          <div key={card.title[0]}>
            <h3 className="font-extrabold text-[#0b4a2f]" style={at(card.x, 419, 22.2, 26)}>
              {card.title.map((line) => <span key={line} className="block">{line}</span>)}
            </h3>
            <p className="text-[#1d2833]" style={at(card.x, 479.5, 14, 20)}>
              {card.lines.map((line) => <span key={line} className="block">{line}</span>)}
            </p>
          </div>
        ))}

        <a
          href={buttonHref}
          className="absolute rounded-full bg-[#03482a] text-white"
          style={{ left: px(493), top: px(603), width: px(344), height: px(51), boxShadow: "0 6px 12px rgba(0,48,31,.28)" }}
          aria-label={buttonLabel}
        >
          <span className="absolute font-normal" style={at(38, 25.5, 21.7, 28)}>{buttonLabel}</span>
          <span className="absolute flex items-center justify-center rounded-full bg-[#f5c523] text-[#0b4a2f]" style={{ left: px(284), top: px(4), width: px(44), height: px(44) }}>
            <ArrowIcon className="h-[55%] w-[55%]" />
          </span>
        </a>

        <h3 className="font-semibold text-white" style={at(164, 736, 22.8, 30)}>Our Guiding Values</h3>
        {stageValues.map((value) => (
          <div key={value.title}>
            <h4 className="font-extrabold uppercase text-white" style={at(value.x, 719.5, 17.5, 22)}>{value.title}</h4>
            <p className="text-white/90" style={at(value.x, 741.5, 15.5, 21)}>
              {value.lines.map((line) => <span key={line} className="block">{line}</span>)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function TrustTransparency() {
  const websiteSection = useWebsiteSection("trust-transparency");
  const quoteLines = ["We believe in being open,", "accountable and answerable", "to all those who walk with us", "in this mission."];

  const buttonLabel = textOrFallback(websiteSection?.buttonLabel, "Know About the Trust", 50);
  const buttonHref = websiteSection?.buttonHref || "/about";

  return (
    <>
    <DesktopStage title={textOrFallback(websiteSection?.title, "Trust & Transparency", 80).replace("\n", " ")} quoteLines={quoteLines} buttonLabel={buttonLabel} buttonHref={buttonHref} srDescription={textOrFallback(websiteSection?.description, "Our commitment to transparency, integrity and responsible service.", 160)} />
    <section className="relative isolate w-full overflow-hidden bg-[#fffaf0] text-[#0e3b2a] lg:hidden">
      {/* warm sunrise glow + cream base */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_85%_30%,rgba(255,213,120,0.55),transparent_45%),radial-gradient(ellipse_at_0%_0%,rgba(226,200,160,0.28),transparent_28%),linear-gradient(180deg,#fffbf3_0%,#fff8ec_100%)]"
      />
      {/* pale green hill, bottom-left */}
      <svg aria-hidden="true" viewBox="0 0 1600 300" preserveAspectRatio="none" className="pointer-events-none absolute bottom-[110px] left-0 -z-10 hidden h-[260px] w-full lg:block">
        <defs>
          <linearGradient id="tt-hill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#dfe9d0" stopOpacity="0" />
            <stop offset=".45" stopColor="#d6e5cb" stopOpacity=".4" />
            <stop offset="1" stopColor="#c4dbbf" stopOpacity=".55" />
          </linearGradient>
        </defs>
        <path d="M0 30C140 40 240 110 420 160S820 230 1180 270L1600 300H0Z" fill="url(#tt-hill)" />
      </svg>

      {/* Ghat photograph, right side */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 -z-10 hidden h-[88%] w-[26.5%] lg:block"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, #000 38%)",
          maskImage: "linear-gradient(to right, transparent 0%, #000 38%)",
        }}
      >
        <Image src="/assets/trust/trust-ghat.jpg" alt="" fill sizes="30vw" quality={95} className="object-cover object-left-bottom" priority={false} />
      </div>

      <div className="relative mx-auto w-full max-w-[1600px] px-6 pb-10 pt-10 sm:px-10 lg:px-[4.8%] lg:pb-0 lg:pt-[1.6%]">
        {/* Header + quote */}
        <div className="grid items-start gap-8 lg:grid-cols-[48%_1fr] lg:gap-0">
          <header className="min-w-0 text-center lg:text-left">
            <div className="flex items-center justify-center gap-4 lg:justify-start lg:pl-[3%]">
              <LotusIcon className="h-[64px] w-[70px] shrink-0 sm:h-[88px] sm:w-[96px]" />
              <span className="h-[56px] w-px bg-[#d7b66d] sm:h-[72px]" />
              <div className="text-left">
                <p className="text-[22px] font-extrabold leading-none tracking-[.02em] text-[#123d78] sm:text-[40px]">MOKSHA SEWA</p>
                <div className="mt-2 flex items-center gap-2 text-[#c9952e]">
                  <span className="h-px w-5 bg-current" />
                  <span className="text-[9px] font-semibold uppercase tracking-[.14em] text-[#1d4a6e] sm:text-xs">Sewa With Responsibility</span>
                  <span className="h-px w-5 bg-current" />
                </div>
              </div>
            </div>
            <h2 className="mt-2 font-serif text-[clamp(1.8rem,8.4vw,3rem)] font-bold lg:text-[clamp(2.6rem,4vw,4.4rem)] leading-[1.02] tracking-[-.02em] text-[#0b4a2f] lg:whitespace-nowrap lg:pl-[1.5%]">
              <AccentTitle text={textOrFallback(websiteSection?.title, "Trust & Transparency", 80).replace("\n", " ")} accent="& Transparency" />
            </h2>
            <div className="mx-auto my-2 flex w-[68%] max-w-[420px] items-center justify-center gap-3 text-[#c9952e] lg:ml-[6%] lg:mr-0">
              <span className="h-px flex-1 bg-current" />
              <LotusIcon className="h-9 w-9" />
              <span className="h-px flex-1 bg-current" />
            </div>
            <p className="mx-auto mt-3 max-w-[560px] text-lg leading-[1.45] text-[#1d2833] sm:text-xl lg:ml-[2%] lg:mr-0 lg:text-[clamp(1.1rem,1.4vw,1.4rem)]">
              A humane, accountable and transparent initiative
              <br className="hidden lg:block" /> for dignified last rites support.
            </p>
            <p className="sr-only">{textOrFallback(websiteSection?.description, "Our commitment to transparency, integrity and responsible service.", 160)}</p>
          </header>

          <aside className="relative mx-auto flex w-full max-w-[520px] items-center border-[#d4a33b] pl-8 lg:mt-[.8%] lg:min-h-[140px] lg:max-w-none lg:border-l lg:pl-[3%]">
            <span aria-hidden="true" className="absolute left-5 top-0 font-serif text-[64px] font-black leading-none text-[#e0a21f] lg:left-[4%] lg:top-[-4px]">“</span>
            <p className="relative z-10 pl-10 pt-3 text-xl font-medium italic leading-[1.4] text-[#162338] sm:text-[26px] lg:pl-[12%] lg:pt-0 lg:text-[clamp(1.2rem,1.42vw,1.5rem)]">
              {quoteLines.map((line) => (
                <span key={line} className="block">{line}</span>
              ))}
            </p>
            <span aria-hidden="true" className="absolute bottom-[-18px] right-6 font-serif text-[64px] font-black leading-none text-[#e0a21f] lg:bottom-[-22px] lg:left-[42%] lg:right-auto">”</span>
          </aside>
        </div>

        {/* Mobile photo strip */}
        <div className="relative mt-8 h-52 w-full overflow-hidden rounded-2xl lg:hidden">
          <Image src="/assets/trust/trust-ghat.jpg" alt="Sunrise over the ghats of the Ganga" fill sizes="100vw" unoptimized className="object-cover object-center" />
        </div>

        {/* Four trust pillars */}
        <div className="relative mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-[3%] lg:max-w-[70%] lg:grid-cols-4 lg:gap-0">
          {trustCards.map((card, index) => (
            <article
              key={card.title}
              className={`flex flex-col items-center text-center text-[#0b4a2f] lg:items-start lg:text-left ${index === 0 ? "lg:pr-5" : "lg:px-5"} ${index < trustCards.length - 1 ? "lg:border-r lg:border-[#e2b44e]" : ""}`}
            >
              <div className="text-[#0b4a2f]">{card.icon}</div>
              <h3 className="mt-3 whitespace-pre-line text-[22px] font-extrabold leading-[1.15] tracking-[-.01em] text-[#0b4a2f] lg:text-[clamp(1.1rem,1.4vw,1.4rem)]">{card.title}</h3>
              <p className="mt-3 max-w-[320px] text-[15px] leading-[1.45] text-[#1d2833] lg:max-w-none lg:text-[clamp(.78rem,.9vw,.95rem)]">{card.description}</p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mx-auto mt-10 flex max-w-[760px] items-center gap-4 lg:mx-0 lg:mt-[1.6%] lg:max-w-[52%] lg:pl-[1%]">
          <span className="h-px flex-1 bg-[#d8ad50]" />
          <a
            href={websiteSection?.buttonHref || "/about"}
            className="group inline-flex min-h-[56px] shrink-0 items-center gap-6 rounded-full bg-[#0a4a30] py-1.5 pl-9 pr-2 text-lg font-medium text-white shadow-[0_6px_14px_rgba(0,48,31,.25)] transition hover:bg-[#073824]"
          >
            {textOrFallback(websiteSection?.buttonLabel, "Know About the Trust", 50)}
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f2c01c] text-[#0b4a2f]">
              <ArrowIcon className="h-6 w-6 transition-transform group-hover:translate-x-0.5" />
            </span>
          </a>
          <span className="h-px flex-1 bg-[#d8ad50]" />
        </div>
      </div>

      {/* Guiding values band */}
      <div className="relative mt-10 text-white lg:mt-[.6%]">
        <svg aria-hidden="true" viewBox="0 0 1600 120" preserveAspectRatio="none" className="absolute inset-x-0 top-0 hidden h-[84px] w-full lg:block">
          <defs>
            <linearGradient id="tt-gold" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#e9c34a" stopOpacity="0" />
              <stop offset=".25" stopColor="#e3b52f" />
              <stop offset=".75" stopColor="#f3cf5a" />
              <stop offset="1" stopColor="#d9a21c" />
            </linearGradient>
          </defs>
          <path d="M0 62C260 40 420 78 700 74S1180 62 1380 24 1560 0 1600 4V120H0Z" fill="#0c5a37" />
          <path d="M0 62C260 40 420 78 700 74S1180 62 1380 24 1560 0 1600 4" fill="none" stroke="url(#tt-gold)" strokeWidth="5" />
          <path d="M0 74C260 54 430 92 710 88S1190 76 1390 38 1565 12 1600 16" fill="none" stroke="#d9a21c" strokeOpacity=".7" strokeWidth="2" />
        </svg>
        <div className="relative bg-[#0a4a30] px-6 pb-8 pt-10 sm:px-10 lg:bg-transparent lg:px-[4.8%] lg:pb-0 lg:pt-[44px]">
          <div className="absolute inset-x-0 bottom-0 top-[80px] hidden bg-[#0a4a30] lg:block" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-[1600px] gap-6 sm:grid-cols-2 lg:grid-cols-[1.35fr_repeat(4,1fr)] lg:items-center lg:gap-0 lg:py-[18px]">
            <div className="flex items-center justify-center gap-4 lg:justify-start lg:border-r lg:border-[#d9ae43]/70 lg:pr-4">
              <LotusIcon className="h-14 w-14 shrink-0" />
              <h3 className="text-2xl font-bold sm:text-[28px]">Our Guiding Values</h3>
            </div>
            {values.map((value) => (
              <div key={value.title} className="flex items-center justify-center gap-4 lg:justify-start lg:border-r lg:border-[#d9ae43]/70 lg:px-6 lg:last:border-r-0">
                <div className="shrink-0 text-white">{value.icon}</div>
                <div>
                  <h4 className="text-base font-extrabold uppercase leading-tight tracking-wide">{value.title}</h4>
                  <p className="mt-1 whitespace-pre-line text-[15px] leading-[1.3] text-white/90">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
