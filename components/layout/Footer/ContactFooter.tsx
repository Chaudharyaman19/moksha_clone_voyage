"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const A = "/assets/contact-footer";
const k = (n: number) => `calc(var(--k) * ${n})`;
const GOLD = "#D9B36B";

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
  { label: ["Dignified Cremation", "Services"], href: "/services", cy: 211 },
  { label: ["Antim Sanskar Assistance"], href: "/services", cy: 245 },
  { label: ["Dead Body Transportation"], href: "/ambulanceservices", cy: 277 },
  { label: ["Pandit & Ritual Support"], href: "/panditservices", cy: 311 },
  { label: ["Funeral Materials", "& Arrangements"], href: "/furalservices", cy: 345 },
  { label: ["Family Guidance & Support"], href: "/specialservices", cy: 383 },
];

const initiatives = [
  { label: ["Dignified Last Rites"], href: "/initiatives", cy: 208 },
  { label: ["Unclaimed Bodies Support"], href: "/unclaimed-body-sewa", cy: 242 },
  { label: ["Underprivileged Family", "Assistance"], href: "/initiatives", cy: 277 },
  { label: ["Volunteer & Seva Network"], href: "/volunteer/register", cy: 310 },
  { label: ["Community Welfare & Outreach"], href: "/initiatives", cy: 342 },
  { label: ["Awareness & Social", "Responsibility"], href: "/blog", cy: 380 },
];

const values = [
  { icon: "v-compassion", title: "Compassion", desc: "We serve with empathy and humanity.", x: 38, tx: 93 },
  { icon: "v-dignity", title: "Dignity", desc: "Every life is treated with respect.", x: 366, tx: 418 },
  { icon: "v-service", title: "Service", desc: "We support every step of the final journey.", x: 648, tx: 700 },
  { icon: "v-trust", title: "Trust", desc: "Transparent, accountable and responsible.", x: 962, tx: 1018 },
  { icon: "v-together", title: "Together", desc: "United for a more compassionate world.", x: 1278, tx: 1331 },
];

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/mokshasewa/", cx: 1542, cy: 108 },
  { label: "Instagram", href: "https://www.instagram.com/mokshasewa/", cx: 1542, cy: 163 },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/moksha-sewaorg/", cx: 1542, cy: 218 },
  { label: "YouTube", href: "https://www.youtube.com/@Mokshasewa", cx: 1542, cy: 274 },
];

function GoldLine({ dir }: { dir: "l" | "r" }) {
  return (
    <span
      className="absolute"
      style={{ height: 1.5, background: `linear-gradient(${dir === "l" ? "90deg" : "270deg"}, transparent, ${GOLD})` }}
    />
  );
}

function Divider({ cx, y, half, lotusW = 26 }: { cx: number; y: number; half: number; lotusW?: number }) {
  return (
    <>
      <span className="absolute" style={{ left: k(cx - lotusW / 2 - 4 - half), top: k(y), width: k(half), height: 1.5, background: `linear-gradient(90deg, transparent, ${GOLD})` }} />
      <span className="absolute" style={{ left: k(cx + lotusW / 2 + 4), top: k(y), width: k(half), height: 1.5, background: `linear-gradient(270deg, transparent, ${GOLD})` }} />
      <Image src={`${A}/divider-lotus.png`} alt="" width={104} height={80} className="absolute h-auto" style={{ left: k(cx - lotusW / 2), top: k(y - 9), width: k(lotusW) }} />
    </>
  );
}

function ColumnHead({ cx, icon, iw, ih, title, lineHalf }: { cx: number; icon: string; iw: number; ih: number; title: string; lineHalf: number }) {
  return (
    <>
      <Image src={`${A}/${icon}.png`} alt="" width={iw} height={ih} className="absolute h-auto" style={{ left: k(cx - iw / 2 / 4 * 0 - 31), top: k(80), width: k(62) }} />
      <h3
        className="absolute -translate-x-1/2 whitespace-nowrap text-center font-bold uppercase text-white"
        style={{ left: k(cx), top: k(147), fontSize: k(14.6), lineHeight: k(22), letterSpacing: "0.01em" }}
      >
        {title}
      </h3>
      <Divider cx={cx} y={182} half={lineHalf} />
    </>
  );
}

function ActionBand() {
  const btn =
    "inline-flex items-center justify-center gap-2 rounded-[6px] border border-[#DE932A] bg-gradient-to-b from-[#FED87A] via-[#F8AB2E] to-[#DD7D15] text-[#110D07] shadow-[0_2px_5px_rgba(0,0,0,0.12)] transition hover:brightness-105 font-bold";
  const arrow = (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12h14" />
      <path d="M12 6l6 6-6 6" />
    </svg>
  );
  return (
    <div className="flex flex-col items-center justify-between gap-3 bg-[#FAF0E4] px-4 py-3 lg:absolute lg:inset-x-0 lg:top-0 lg:h-[calc(var(--k)*60.5)] lg:flex-row lg:px-0 lg:py-0">
      <div className="flex items-center gap-3 lg:absolute lg:left-[calc(var(--k)*22)] lg:top-[calc(var(--k)*13)]">
        <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0 text-[#C68A36]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 6c3 3.5 3 9 0 14-3-5-3-10.5 0-14z" />
          <path d="M13 19c-4-.8-7-4.5-6.5-9.5 4 .8 6.5 4.5 6.5 9.5z" />
          <path d="M19 19c4-.8 7-4.5 6.5-9.5-4 .8-6.5 4.5-6.5 9.5z" />
          <path d="M11 21c-4 .5-8-1-9-5 4-.5 8 1 9 5z" />
          <path d="M21 21c4 .5 8-1 9-5-4-.5-8 1-9 5z" />
          <path d="M6 23.5c6 1.8 14 1.8 20 0" />
        </svg>
        <span className="font-medium text-[#1A1612] lg:text-[calc(var(--k)*16.2)]">Stand with dignity. Serve with compassion.</span>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3 lg:absolute lg:right-[calc(var(--k)*43)] lg:top-[calc(var(--k)*9)] lg:flex-nowrap lg:gap-[calc(var(--k)*12)]">
        <Link href="/request-help" target="_blank" rel="noopener noreferrer" className={`${btn} h-[38px] px-3.5 text-[13px] lg:text-[calc(var(--k)*13.5)]`}>
          <svg viewBox="0 0 24 24" className="h-[22px] w-[22px] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9.5" />
            <path d="M15.8 14.8c-.6.6-1.5.8-2.3.4-1.6-.9-3-2.3-3.9-3.9-.4-.8-.2-1.7.4-2.3l.7-.7c.3-.3.3-.9 0-1.2l-1.3-1.3c-.3-.3-.9-.3-1.2 0l-.7.7c-.9.9-1.1 2.3-.4 3.6 1.2 2.3 3.1 4.2 5.4 5.4 1.3.7 2.7.5 3.6-.4l.7-.7c.3-.3.3-.9 0-1.2l-1.3-1.3c-.3-.3-.9-.3-1.2 0l-.8.6z" />
          </svg>
          <span className="whitespace-nowrap">Request Help</span>
          {arrow}
        </Link>
        <Link href="/donation" target="_blank" rel="noopener noreferrer" className={`${btn} h-[38px] px-3.5 text-[13px] lg:text-[calc(var(--k)*13.5)]`}>
          <svg viewBox="0 0 24 24" className="h-[23px] w-[23px] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 4.2c-1.3-1.6-3.3-1.6-4.5 0-1.4 1.5-.5 3.3 4.5 6.4 5-3.1 5.9-4.9 4.5-6.4-1.2-1.6-3.2-1.6-4.5 0z" />
            <rect x="2" y="11" width="3.2" height="7" rx="1" />
            <rect x="18.8" y="11" width="3.2" height="7" rx="1" />
            <path d="M5.2 13h2.3l2.8 2.2c.7.5 1.7.5 2.4 0l2.8-2.2h2.3" />
            <path d="M5.2 16h3.2l2.3 1.5c.8.5 1.8.5 2.6 0l2.3-1.5h3.2" />
          </svg>
          <span className="whitespace-nowrap">Donate Now</span>
          {arrow}
        </Link>
        <Link href="/volunteer/register" target="_blank" rel="noopener noreferrer" className={`${btn} h-[38px] px-3.5 text-[13px] lg:text-[calc(var(--k)*13.5)]`}>
          <svg viewBox="0 0 24 24" className="h-[23px] w-[23px] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="7" r="2.8" />
            <path d="M8 18.5v-2.2c0-2 1.8-3.5 4-3.5s4 1.5 4 3.5v2.2" />
            <circle cx="6" cy="9.5" r="2.2" />
            <path d="M2.5 18.5v-1.8c0-1.5 1.2-2.7 2.7-3" />
            <circle cx="18" cy="9.5" r="2.2" />
            <path d="M21.5 18.5v-1.8c0-1.5-1.2-2.7-2.7-3" />
          </svg>
          <span className="whitespace-nowrap">Become a Volunteer</span>
          {arrow}
        </Link>
      </div>
    </div>
  );
}

export default function ContactFooter() {
  const txt = "text-white";
  return (
    <footer className="relative isolate bg-[#1B1A16] text-white [container-type:inline-size]">
      {/* ================= DESKTOP: pixel-positioned canvas ================= */}
      <div className="relative hidden w-full lg:block" style={{ ["--k" as string]: "calc(100cqw / 1584)", height: "calc(var(--k) * 566)" } as React.CSSProperties}>
        <ActionBand />

        {/* main dark panel */}
        <div
          className="absolute inset-x-0"
          style={{ top: k(60.5), height: k(370), background: "linear-gradient(90deg,#27221b 0%,#191814 26%,#181713 55%,#1b1a16 100%)" }}
        />
        <Image src={`${A}/left-photo-2.png`} alt="Varanasi ghat at sunset" width={176} height={368} className="absolute" style={{ left: 0, top: k(62), width: k(176), height: k(368) }} />

        {/* brand column */}
        <Image src="/homelogo/mok-footer-white.png" alt="Moksha Sewa" width={558} height={447} className="absolute h-auto" style={{ left: k(172), top: k(80), width: k(128) }} />
        <p className="absolute -translate-x-1/2 whitespace-nowrap font-medium" style={{ left: k(236), top: k(193), fontSize: k(13.5), lineHeight: k(18), color: "#E6CD4A" }}>
          A Namo Gange Trust Initiative
        </p>
        <Divider cx={236} y={223} half={86} lotusW={20} />
        <p className={`absolute -translate-x-1/2 text-center ${txt}`} style={{ left: k(236), top: k(241), width: k(214), fontSize: k(11.8), lineHeight: k(16.3) }}>
          We stand with the forgotten, the unclaimed and the helpless to ensure every life&rsquo;s final journey is dignified, peaceful and respectful.
        </p>
        <Image src="/assets/namo-gange-logo.webp" alt="Namo Gange" width={366} height={150} className="absolute h-auto" style={{ left: k(146), top: k(317), width: k(186) }} />

        {/* column separators */}
        {[504, 740, 978].map((x) => (
          <span key={x} className="absolute" style={{ left: k(x), top: k(76), height: k(340), width: 1.5, background: "linear-gradient(180deg,transparent,#8A7350 10%,#8A7350 90%,transparent)" }} />
        ))}

        {/* quick links */}
        <ColumnHead cx={432} icon="h-infinity" iw={62} ih={62} title="Quick Links" lineHalf={52} />
        {quickLinks.map((l, i) => (
          <Link key={l.label} href={l.href} className={`group absolute flex items-center ${txt} transition hover:text-[#E9C46A]`} style={{ left: k(373), top: k(208 + i * 26.5 - 11), height: k(22), fontSize: k(11.8) }}>
            <svg viewBox="0 0 10 10" style={{ width: k(7), height: k(9), marginRight: k(11) }} fill="none" stroke="#E7B84A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 1.5 6.5 5 3 8.5" /></svg>
            {l.label}
          </Link>
        ))}

        {/* services */}
        <ColumnHead cx={622} icon="h-hands" iw={64} ih={64} title="Our Services" lineHalf={52} />
        {services.map((s, i) => (
          <Link key={s.label.join(" ")} href={s.href} className={`absolute ${txt} transition hover:text-[#E9C46A]`} style={{ left: k(518), top: k(s.cy - 18), width: k(190), height: k(36) }}>
            <Image src={`${A}/s${i + 1}.png`} alt="" width={144} height={144} className="absolute left-0 top-0 h-auto" style={{ width: k(36) }} />
            <span className="absolute flex flex-col justify-center" style={{ left: k(43), top: 0, height: k(36), fontSize: k(11.8), lineHeight: k(14.5) }}>
              {s.label.map((ln) => (<span key={ln} className="whitespace-nowrap">{ln}</span>))}
            </span>
          </Link>
        ))}

        {/* seva initiatives */}
        <ColumnHead cx={861} icon="h-lotus" iw={64} ih={64} title="Our Seva Initiatives" lineHalf={52} />
        {initiatives.map((s, i) => (
          <Link key={s.label.join(" ")} href={s.href} className={`absolute ${txt} transition hover:text-[#E9C46A]`} style={{ left: k(755), top: k(s.cy - 18), width: k(215), height: k(36) }}>
            <Image src={`${A}/i${i + 1}.png`} alt="" width={144} height={144} className="absolute left-0 top-0 h-auto" style={{ width: k(36) }} />
            <span className="absolute flex flex-col justify-center" style={{ left: k(46), top: 0, height: k(36), fontSize: k(11.8), lineHeight: k(14.5) }}>
              {s.label.map((ln) => (<span key={ln} className="whitespace-nowrap">{ln}</span>))}
            </span>
          </Link>
        ))}

        {/* our presence panel */}
        <Image src={`${A}/presence-art.png`} alt="Offices in London, Delhi-NCR and Visakhapatnam" width={600} height={346} className="absolute" style={{ left: k(984), top: k(72), width: k(600), height: k(346) }} />
        <Image src={`${A}/pin.png`} alt="" width={128} height={152} className="absolute h-auto" style={{ left: k(1000), top: k(88), width: k(27) }} />
        <h3 className="absolute whitespace-nowrap font-serif font-bold text-[#FFFDF6]" style={{ left: k(1038), top: k(86), fontSize: k(26.5), lineHeight: k(36) }}>
          Our Presence
        </h3>
        <Divider cx={1119} y={132} half={104} lotusW={22} />
        <p className="absolute text-white" style={{ left: k(1006), top: k(149), width: k(250), fontSize: k(13.2), lineHeight: k(18) }}>
          A connected network to support families in India and internationally.
        </p>
        {socials.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="absolute rounded-full" style={{ left: k(s.cx - 21), top: k(s.cy - 21), width: k(42), height: k(42) }} />
        ))}
        <span className="pointer-events-none absolute" style={{ left: k(1080), top: k(300), width: 0, height: 0 }} />

        {/* values band */}
        <div className="absolute inset-x-0" style={{ top: k(430), height: k(61), background: "#211C16", borderTop: "2px solid", borderBottom: "1.5px solid", borderImage: "linear-gradient(90deg,#D68E39,#927C57 45%,#B8934F) 1" }} />
        {[325, 627, 942, 1256].map((x) => (
          <span key={x} className="absolute" style={{ left: k(x), top: k(440), width: 1.5, height: k(41), background: "#7A6B54" }} />
        ))}
        {values.map((v) => (
          <div key={v.title}>
            <Image src={`${A}/${v.icon}.png`} alt="" width={184} height={184} className="absolute h-auto" style={{ left: k(v.x), top: k(436), width: k(46) }} />
            <p className="absolute font-bold uppercase" style={{ left: k(v.tx), top: k(441), fontSize: k(14), lineHeight: k(19), color: "#EFCA79" }}>{v.title}</p>
            <p className="absolute whitespace-nowrap text-white" style={{ left: k(v.tx), top: k(460), fontSize: k(11.2), lineHeight: k(16) }}>{v.desc}</p>
          </div>
        ))}

        {/* legal row */}
        <div className="absolute inset-x-0 bottom-0" style={{ height: k(75), background: "#1D1A15" }} />
        <div className="absolute flex items-center whitespace-nowrap text-white" style={{ left: k(82), top: k(507), height: k(22), fontSize: k(12.6) }}>
          <span>&copy; 2026 Moksha Sewa &ndash; Dignified Last Rites &amp; Support</span>
          <span style={{ width: 1, height: k(14), background: "#8F7650", margin: `0 ${k(15)}` }} />
          <span>A Initiative of Namo Gange Trust</span>
          <span style={{ width: 1, height: k(14), background: "#8F7650", margin: `0 ${k(15)}` }} />
          <span>All Rights Reserved.</span>
        </div>
        <div className="absolute flex items-center whitespace-nowrap text-white" style={{ left: k(863), top: k(507), height: k(22), fontSize: k(11.9) }}>
          <Link href="/sitemap.xml" className="hover:text-[#E9C46A]">Sitemap</Link>
          <span style={{ width: 1, height: k(14), background: "#8F7650", margin: `0 ${k(12)}` }} />
          <Link href="/privacy-policy" className="hover:text-[#E9C46A]">Privacy Policy</Link>
          <span style={{ width: 1, height: k(14), background: "#8F7650", margin: `0 ${k(12)}` }} />
          <Link href="/terms" className="hover:text-[#E9C46A]">Terms &amp; Conditions</Link>
          <span style={{ width: 1, height: k(14), background: "#8F7650", margin: `0 ${k(12)}` }} />
          <span>Designed &amp; Developed by</span>
        </div>
        <div className="absolute overflow-hidden" style={{ left: k(1343), top: k(502), width: k(118), height: k(36), borderRadius: k(6), background: "linear-gradient(180deg,#BB201F 0%,#C41E20 100%)" }}>
          <Image src={`${A}/encodency-white.png`} alt="enCodency Pvt. Ltd." width={2047} height={306} className="absolute h-auto" style={{ left: k(9), top: k(10.5), width: k(100) }} />
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="absolute flex items-center justify-center text-[#2B1700] transition hover:scale-105"
          style={{ left: k(1480), top: k(505), width: k(27), height: k(27), borderRadius: k(5), background: "linear-gradient(180deg,#F2B94B,#D9923A)" }}
        >
          <svg viewBox="0 0 20 20" style={{ width: k(14), height: k(14) }} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M10 16V4M4.5 9.5 10 4l5.5 5.5" /></svg>
        </button>
      </div>

      {/* ================= MOBILE / TABLET: stacked ================= */}
      <div className="lg:hidden">
        <ActionBand />
        <div className="space-y-8 bg-[linear-gradient(180deg,#27221b,#181713)] px-6 py-9 text-center">
          <div className="flex flex-col items-center gap-3">
            <Image src="/homelogo/mok-footer-white.png" alt="Moksha Sewa" width={558} height={447} className="h-auto w-[120px]" />
            <p className="font-medium text-[#E6CD4A]">A Namo Gange Trust Initiative</p>
            <p className="max-w-[300px] text-[13px] leading-5 text-white">
              We stand with the forgotten, the unclaimed and the helpless to ensure every life&rsquo;s final journey is dignified, peaceful and respectful.
            </p>
            <Image src="/assets/namo-gange-logo.webp" alt="Namo Gange" width={366} height={150} className="h-auto w-[180px]" />
          </div>

          <div>
            <h3 className="mb-3 text-[15px] font-bold uppercase text-white">Quick Links</h3>
            <ul className="space-y-2 text-[13px]">
              {quickLinks.map((l) => (
                <li key={l.label}><Link href={l.href} className="text-white">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-[15px] font-bold uppercase text-white">Our Services</h3>
            <ul className="space-y-2 text-[13px]">
              {services.map((s) => (
                <li key={s.label.join(" ")}><Link href={s.href} className="text-white">{s.label.join(" ")}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-[15px] font-bold uppercase text-white">Our Seva Initiatives</h3>
            <ul className="space-y-2 text-[13px]">
              {initiatives.map((s) => (
                <li key={s.label.join(" ")}><Link href={s.href} className="text-white">{s.label.join(" ")}</Link></li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#735F3A]">
            <h3 className="pt-4 font-serif text-[22px] font-bold text-white">Our Presence</h3>
            <p className="px-4 pb-2 text-[13px] text-white">A connected network to support families in India and internationally.</p>
            <div className="relative mx-auto aspect-[600/346] w-full">
              <Image src={`${A}/presence-art.png`} alt="Offices in London, Delhi-NCR and Visakhapatnam" fill sizes="100vw" className="object-cover" />
            </div>
          </div>
        </div>

        <div className="space-y-4 border-y border-[#B8934F] bg-[#211C16] px-6 py-6">
          {values.map((v) => (
            <div key={v.title} className="flex items-center gap-4">
              <Image src={`${A}/${v.icon}.png`} alt="" width={184} height={184} className="h-auto w-[44px]" />
              <div>
                <p className="text-[14px] font-bold uppercase text-[#EFCA79]">{v.title}</p>
                <p className="text-[12.5px] text-white">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-3 bg-[#1D1A15] px-6 py-6 text-center text-[12.5px] text-white">
          <p>&copy; 2026 Moksha Sewa &ndash; Dignified Last Rites &amp; Support</p>
          <p>A Initiative of Namo Gange Trust &middot; All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <Link href="/sitemap.xml">Sitemap</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms &amp; Conditions</Link>
          </div>
          <div className="flex items-center gap-2">
            <span>Designed &amp; Developed by</span>
            <span className="flex items-center rounded-md bg-gradient-to-b from-[#BB201F] to-[#C41E20] px-2.5 py-2.5">
              <Image src={`${A}/encodency-white.png`} alt="enCodency Pvt. Ltd." width={2047} height={306} className="h-auto w-[100px]" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
