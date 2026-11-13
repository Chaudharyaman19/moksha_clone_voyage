"use client";

import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { useContactFields } from "@/lib/contactFields";
import { Inter, Source_Sans_3, Source_Serif_4 } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });
const sans = Source_Sans_3({ subsets: ["latin"], weight: ["600", "700"], display: "swap" });
const serif = Source_Serif_4({ subsets: ["latin"], weight: ["600", "700"], display: "swap" });

/*
 * Desktop "Our offices & global presence" block on the 1584x792 design grid.
 *   scene.jpg   ONLY the photo + soft background (no cards, no strip, no icons, no copy)
 *   *.png       every icon / the map / the lotus watermark is its own file in /public/assets/contact/offices
 * The three office cards, the presence strip and the map pills are CSS shapes, so they can be resized or restyled.
 * All copy is live text.
 */
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
  ["lotus", 712, 84, 282, 154],
  ["map", 505, 590, 763, 148],
  ["h-gate", 104, 295, 63, 66],
  ["h-temple", 479, 294, 76, 67],
  ["h-bridge", 833, 302, 100, 59],
  ["i-pin1", 90, 393, 26, 31],
  ["i-phone1", 89, 462, 28, 27],
  ["i-mail1", 89, 496, 30, 23],
  ["i-pin2", 469, 391, 25, 31],
  ["i-phone2", 468, 467, 28, 27],
  ["i-mail2", 468, 497, 30, 25],
  ["i-pin3", 840, 391, 26, 31],
  ["i-phone3", 840, 464, 27, 27],
  ["i-mail3", 839, 496, 31, 23],
  ["globe", 97, 624, 76, 74],
  ["p-london", 647, 586, 31, 48],
  ["p-delhi", 1015, 608, 29, 42],
  ["p-visak", 1030, 671, 30, 40],
];

const CARD_Y = 287;
const CARD_H = 264;

// Geometry of the 3 cards. The text (headings, address, phones, email) comes from the admin: office1..3.*
const cards = [
  { x: 63, w: 359, headX: 192, heads: [306, 332, 354], headSize: [20.5, 21, 16.5], addr: { x: 135, cy: 398, lh: 20 }, phonePos: { x: 135, cy: 475 }, mailPos: { x: 135, cy: 506 } },
  { x: 445, w: 346, headX: 571, heads: [306, 331, 354], headSize: [20.5, 21, 16.5], addr: { x: 516, cy: 394, lh: 18.8 }, phonePos: { x: 516, cy: 481 }, mailPos: { x: 516, cy: 507 } },
  { x: 813, w: 350, headX: 953, heads: [314, 339, 361], headSize: [20.5, 21, 16.5], addr: { x: 888, cy: 393, lh: 18.7 }, phonePos: { x: 888, cy: 477 }, mailPos: { x: 888, cy: 506 } },
];

// Geometry of the 3 map labels (text comes from the admin: presence.london / delhi / visakhapatnam)
const pillGeo = [
  { x: 674, y: 605, w: 129, h: 39, fs: [17.5, 15.2] },
  { x: 1043, y: 600, w: 135, h: 50, fs: [17, 15.2] },
  { x: 1058, y: 673, w: 166, h: 40, fs: [17.5, 15.2] },
];

export default function ContactOfficesStage(): ReactNode {
  const o = useContactFields("contact-offices");
  const officeData = cards.map((c, i) => {
    const n = i + 1;
    const sub = o.get(`office${n}.sub`).trim();
    return {
      ...c,
      head: [o.get(`office${n}.head1`), o.get(`office${n}.head2`), ...(sub ? [sub] : [])].map((t, k) => ({ t, cy: c.heads[k], fs: c.headSize[k], sub: k === 2 })),
      address: o.lines(`office${n}.address`),
      phones: o.lines(`office${n}.phones`),
      email: o.get(`office${n}.email`),
    };
  });
  const pills = ["presence.london", "presence.delhi", "presence.visakhapatnam"].map((key, i) => ({
    ...pillGeo[i],
    lines: o.lines(key).map((t, k) => ({ t, fs: pillGeo[i].fs[Math.min(k, 1)], b: k === 0 })),
  }));
  return (
    <div className="hidden w-full bg-[#FEFAF6] lg:block lg:px-14">
      <div data-stage className="relative w-full overflow-hidden" style={{ containerType: "inline-size", aspectRatio: "1584 / 792" }}>
        <Image src={o.image("offices.sceneImage")} alt={o.get("offices.sceneAlt")} fill unoptimized sizes="100vw" className="object-cover" />

        {/* lotus watermark + presence map sit behind the copy */}
        {art.slice(0, 1).map(([name, x, y, w, h]) => (
          <Image key={name} src={`/assets/contact/offices/${name}.png`} alt="" width={w * 2} height={h * 2} unoptimized style={box(x, y, w, h)} />
        ))}

        {/* ---------- heading ---------- */}
        <p className={`${inter.className} font-bold uppercase text-[#300404]`} style={at(60, 48, 21.4, 28, { letterSpacing: ".1em" })}>{o.get("offices.eyebrow")}</p>
        <span aria-hidden="true" style={box(549, 49, 99, 2.4, { background: "linear-gradient(90deg,#c98a3d,#d9a35a)" })} />
        <h2 className={`${serif.className} font-bold`} style={at(60, 108, 55.8, 60, { letterSpacing: "-.005em" })}>
          <span className="block text-[#2d0703]">{o.get("offices.title1")}</span>
          <span className="block" style={{ background: "linear-gradient(180deg,#d8801a,#bd6507)", WebkitBackgroundClip: "text", color: "transparent" }}>{o.get("offices.title2")}</span>
        </h2>
        <p className={`${inter.className} text-[#181717]`} style={at(65, 232, 20.4, 26)}>
          {o.lines("offices.description").map((l) => (
            <span key={l} className="block">{l}</span>
          ))}
        </p>

        {/* ---------- office cards (CSS) ---------- */}
        {cards.map((c) => (
          <div key={c.x}>
            <div
              style={box(c.x, CARD_Y, c.w, CARD_H, {
                borderRadius: px(18),
                // the soft shadow around the cards is part of scene.jpg (same as the reference); only the thin white outline is CSS
                boxShadow: `0 0 0 ${px(1.6)} rgba(255,255,255,.95)`,
                background: "#FDFCFA",
              })}
            />
            <div
              aria-hidden="true"
              style={box(c.x, CARD_Y, c.w, 92, {
                borderRadius: `${px(18)} ${px(18)} 0 0`,
                background:
                  "linear-gradient(60deg,rgba(150,72,14,.42) 0%,rgba(0,0,0,0) 38%),linear-gradient(180deg,#7a380e 0%,#6a2e07 52%,#5f2808 100%)",
              })}
            />
            <div
              aria-hidden="true"
              style={box(c.x, CARD_Y + 85, c.w, CARD_H - 85, {
                borderRadius: px(17),
                background: "linear-gradient(180deg,#FEFDFB 0%,#FDFCFA 55%,#FCF9F5 100%)",
              })}
            />
            <span aria-hidden="true" style={box(c.x + 22, CARD_Y + 253, c.w - 44, 3.6, { borderRadius: px(2), background: "linear-gradient(90deg,rgba(240,190,90,0) 0%,#f0aa3b 14%,#e19630 50%,#e9b059 86%,rgba(249,223,188,0) 100%)" })} />
          </div>
        ))}

        {art.slice(2, 5).map(([name, x, y, w, h]) => (
          <Image key={name} src={`/assets/contact/offices/${name}.png`} alt="" width={w * 4} height={h * 4} unoptimized style={box(x, y, w, h)} />
        ))}
        {art.slice(5, 14).map(([name, x, y, w, h]) => (
          <Image key={name} src={`/assets/contact/offices/${name}.png`} alt="" width={w * 4} height={h * 4} unoptimized style={box(x, y, w, h)} />
        ))}

        {officeData.map((c) => (
          <div key={`t-${c.x}`}>
            {c.head.map((l) => (
              <p key={l.t} className={`${sans.className} font-bold ${l.sub ? "text-[#ffebdc] !font-semibold" : "text-[#fffaf1]"}`} style={at(c.headX, l.cy, l.fs, 26)}>{l.t}</p>
            ))}
            <p className={`${inter.className} text-[#171717]`} style={at(c.addr.x, c.addr.cy, 15.8, c.addr.lh, { letterSpacing: "-.003em" })}>
              {c.address.map((l) => (
                <span key={l} className="block">{l}</span>
              ))}
            </p>
            <p className={`${inter.className} text-[#161616]`} style={at(c.phonePos.x, c.phonePos.cy, 14.7, 22)}>
              {c.phones.map((p, i) => (
                <span key={p}>
                  {i > 0 && <span aria-hidden="true" className="mx-[.9em] inline-block h-[1em] w-[2px] translate-y-[2px] bg-[#e8a23c]" />}
                  <a href={`tel:${p.replace(/\s/g, "")}`}>{p}</a>
                </span>
              ))}
            </p>
            <a href={`mailto:${c.email}`} className={`${inter.className} text-[#171616]`} style={at(c.mailPos.x, c.mailPos.cy, 15.1, 22)}>{c.email}</a>
          </div>
        ))}

        {/* ---------- presence strip (CSS) ---------- */}
        <div
          aria-hidden="true"
          style={box(60, 578, 1462, 162, {
            borderRadius: px(46),
            background: "linear-gradient(90deg,#FDFBF8 0%,#FEFBF7 29%,#FDF8F3 58%,#FCF2E9 83%,#FCECDD 93%,#FCEDDE 100%)",
            boxShadow: "0 7px 10px -5px rgba(160,100,60,.22), 0 0 0 1px rgba(240,228,216,.5)",
          })}
        />
        {art.slice(1, 2).map(([name, x, y, w, h]) => (
          <Image key={`m-${name}`} src={o.image("offices.mapImage")} alt={o.get("offices.mapAlt")} width={w * 2} height={h * 2} unoptimized style={box(x, y, w, h)} />
        ))}
        <Image src="/assets/contact/offices/globe.png" alt="" width={304} height={296} unoptimized style={box(97, 624, 76, 74)} />
        <span aria-hidden="true" style={box(197, 625, 2.2, 70, { background: "#cc8046" })} />
        <h3 className={`${serif.className} font-bold text-[#340704]`} style={at(225, 640, 37.2, 41, { letterSpacing: "-.003em" })}>
          {o.lines("presence.title").map((l) => (
            <span key={l} className="block">{l}</span>
          ))}
        </h3>

        {art.slice(15).map(([name, x, y, w, h]) => (
          <Image key={name} src={`/assets/contact/offices/${name}.png`} alt="" width={w * 4} height={h * 4} unoptimized style={box(x, y, w, h)} />
        ))}
        {pills.map((p) => (
          <div
            key={p.x}
            className={`${sans.className} flex flex-col items-center justify-center text-center text-[#330909]`}
            style={box(p.x, p.y, p.w, p.h, { borderRadius: px(p.h / 2 > 22 ? 24 : p.h / 2), background: "#FFFDFB", boxShadow: "0 4px 7px rgba(150,95,50,.26), 0 0 0 1px rgba(235,220,205,.5)" })}
          >
            {p.lines.map((l) => (
              <span key={l.t} className={l.b ? "font-bold" : "font-semibold text-[#391a1b]"} style={{ fontSize: px(l.fs), lineHeight: px(l.fs * 1.2), whiteSpace: "nowrap" }}>{l.t}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
