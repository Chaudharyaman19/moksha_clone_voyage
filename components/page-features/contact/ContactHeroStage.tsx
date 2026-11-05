"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { Source_Sans_3, Source_Serif_4, Work_Sans } from "next/font/google";

const sans = Source_Sans_3({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });
const serif = Source_Serif_4({ subsets: ["latin"], weight: ["600", "700"], display: "swap" });
const body = Work_Sans({ subsets: ["latin"], weight: ["400", "500"], display: "swap" });

/*
 * Desktop hero for /contact, laid out on the 1584x792 design grid.
 * Every graphic is its own file in /public/assets/contact/hero, so any one of them can be swapped:
 *   scene.jpg      photo, sky glow, header bars, button + card shapes (no copy, no icons)
 *   logo-mark.png  navbar lotus + wave        emblem.png  Namo Gange Trust seal
 *   ic-*.png       single-colour icons
 * All copy is live text placed over the same grid.
 */
// The real Topbar/Navbar sit above; the stage only covers the hero content (design y >= CROP_TOP).
const CROP_TOP = 143;
const px = (n: number) => `${n / 15.84}cqw`;

const at = (x: number, cy: number, fs: number, lh: number, extra?: CSSProperties): CSSProperties => ({
  position: "absolute",
  left: px(x),
  top: px(cy - lh / 2),
  fontSize: px(fs),
  lineHeight: px(lh),
  whiteSpace: "nowrap",
  ...extra,
});

const box = (x: number, y: number, w: number, h: number, extra?: CSSProperties): CSSProperties => ({
  position: "absolute",
  left: px(x),
  top: px(y),
  width: px(w),
  height: px(h),
  ...extra,
});

// [file, x, y, w, h] in design pixels
const art: [string, number, number, number, number][] = [
  ["ic-family", 132, 658, 72, 52],
  ["ic-lotus", 470, 656, 77, 54],
  ["ic-truck", 842, 660, 74, 50],
  ["ic-headset", 1196, 656, 64, 58],
];

// [x, y, w, h, colour]
const rules: [number, number, number, number, string][] = [
  [283, 215, 95, 2, "#cc984f"],
  [422, 660, 1.4, 52, "#a68e7e"],
  [787, 660, 1.4, 52, "#b49c8a"],
  [1144, 660, 1.4, 52, "#ad9684"],
];

const strip: { x: number; lines: string[]; ly: number }[] = [
  { x: 228, lines: ["Family Support"], ly: 685 },
  { x: 568, lines: ["Ritual & Cremation", "Assistance"], ly: 672 },
  { x: 938, lines: ["Respectful", "Transportation"], ly: 672 },
  { x: 1287, lines: ["Guidance &", "Coordination"], ly: 672 },
];

export default function ContactHeroStage({ phone = "9220147229" }: { phone?: string }) {
  return (
    <div className="hidden w-full bg-[#FEF5EC] pt-[113px] lg:block">
      <div data-stage className="relative w-full overflow-hidden" style={{ containerType: "inline-size", aspectRatio: `1584 / ${792 - CROP_TOP}` }}>
        <div style={{ position: "absolute", left: 0, top: px(-CROP_TOP), width: "100%", aspectRatio: "1584 / 792" }}>
        <Image src="/assets/contact/hero/scene.jpg" alt="" fill priority unoptimized sizes="100vw" className="object-cover" />

        {art.map(([name, x, y, w, h]) => (
          <Image key={name} src={`/assets/contact/hero/${name}.png`} alt="" width={w * 4} height={h * 4} unoptimized style={box(x, y, w, h)} />
        ))}
        {rules.map(([x, y, w, h, c], i) => (
          <span key={i} aria-hidden="true" style={box(x, y, w, h, { background: c })} />
        ))}

        {/* hero copy */}
        <p className={`${sans.className} font-bold uppercase text-[#360f06]`} style={at(80, 216, 20, 24, { letterSpacing: ".225em" })}>Get in Touch</p>
        <h1 className={`${serif.className} font-semibold text-[#3f1604]`} style={at(78, 277, 78, 84, { letterSpacing: "-.005em" })}>
          Contact <span className="text-[#e48e04]">Us</span>
        </h1>
        <p className={`${body.className} text-[#39120b]`} style={at(80, 350, 26.3, 35.7, { letterSpacing: ".01em" })}>
          {["We’re here to support individuals", "and families in need with free", "last-rites assistance, guidance", "and coordination, with dignity and care."].map((l) => (
            <span key={l} className="block">{l}</span>
          ))}
        </p>

        {/* buttons: CSS shapes with their own icon + text, so each can be edited or moved on its own */}
        <a
          href={`tel:+91${phone}`}
          aria-label="Call helpline"
          className="block transition hover:brightness-110"
          style={box(78, 506, 279, 74, {
            borderRadius: px(18),
            background: "linear-gradient(180deg,#8a4313 0%,#843a02 22%,#6f2d03 62%,#5b2209 100%)",
            boxShadow: "inset 0 0 0 1px rgba(255,190,140,.18), 0 2px 4px rgba(90,30,0,.14)",
          })}
        >
          <Image src="/assets/contact/hero/ic-phone-btn.png" alt="" width={176} height={172} unoptimized style={box(19, 13, 44, 43)} />
          <span className={`${sans.className} pointer-events-none font-semibold text-[#fff7ee]`} style={at(77, 22, 20.2, 24)}>Call Helpline</span>
          <span className={`${sans.className} pointer-events-none font-bold text-[#fff9f3]`} style={at(77, 49, 22.4, 26)}>
            {phone} <span className="text-[17.6px] font-medium">(24×7)</span>
          </span>
        </a>
        <a
          href="#contact-form-desktop"
          aria-label="Request Sewa, free assistance"
          className="block transition hover:bg-[#fff8f0]"
          style={box(377, 506, 283, 75, {
            borderRadius: px(18),
            background: "linear-gradient(180deg,#FEFEFE 0%,#FDFDFD 70%,#FBF8F8 100%)",
            border: "1.5px solid #6d4a42",
            boxShadow: "0 1px 3px rgba(95,37,0,.12)",
          })}
        >
          <Image src="/assets/contact/hero/ic-calendar.png" alt="" width={176} height={172} unoptimized style={box(19, 12, 44, 43)} />
          <span className={`${sans.className} pointer-events-none font-bold text-[#3a0e08]`} style={at(79, 23, 20.2, 24)}>Request Sewa</span>
          <span className={`${sans.className} pointer-events-none font-medium text-[#361310]`} style={at(79, 47, 18.9, 22)}>(Free Assistance)</span>
          <Image src="/assets/contact/hero/ic-arrow.png" alt="" width={136} height={116} unoptimized style={box(232, 20, 34, 29)} />
        </a>

        {/* service strip */}
        {strip.map((s) => (
          <p key={s.x} className={`${sans.className} font-bold text-[#3d1206]`} style={at(s.x, s.ly, 19.9, 25)}>
            {s.lines.map((l) => (
              <span key={l} className="block">{l}</span>
            ))}
          </p>
        ))}
        </div>
      </div>
    </div>
  );
}
