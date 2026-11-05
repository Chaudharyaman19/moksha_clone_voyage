"use client";

import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
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

const cards = [
  {
    x: 63, w: 359,
    head: [{ t: "Head Office", cy: 306, fs: 20.5 }, { t: "Delhi–NCR", cy: 332, fs: 21 }, { t: "(Ghaziabad, India)", cy: 354, fs: 16.5, sub: true }],
    headX: 192,
    address: { x: 135, cy: 398, lh: 20, lines: ["Plot No. 12/29, Site II Industrial", "Area, Mohan Nagar, Ghaziabad –", "201007, Uttar Pradesh, India."] },
    phones: { x: 135, cy: 475, list: ["+91 96549 00525", "+91 98102 47319"] },
    mail: { x: 135, cy: 506, v: "info@mokshavoyage.vaidhyashala.in" },
  },
  {
    x: 445, w: 346,
    head: [{ t: "Regional Office", cy: 306, fs: 20.5 }, { t: "Visakhapatnam", cy: 331, fs: 21 }, { t: "(Andhra Pradesh, India)", cy: 354, fs: 16.5, sub: true }],
    headX: 571,
    address: { x: 516, cy: 394, lh: 18.8, lines: ["Door No. 36-46-51, 2nd Floor,", "Main Road, Kancharapalem,", "Visakhapatnam – 530008,", "Andhra Pradesh, India."] },
    phones: { x: 516, cy: 481, list: ["+91 96549 00525"] },
    mail: { x: 516, cy: 507, v: "info@mokshavoyage.vaidhyashala.in" },
  },
  {
    x: 813, w: 350,
    head: [{ t: "Global Office", cy: 314, fs: 20.5 }, { t: "London (UK)", cy: 339, fs: 21 }],
    headX: 953,
    address: { x: 888, cy: 393, lh: 18.7, lines: ["Namo Gange Wellness Ltd.", "6 Liddel Close, Luton,", "Bedfordshire, LU3 1TW,", "United Kingdom."] },
    phones: { x: 888, cy: 477, list: ["+44 74248 78417"] },
    mail: { x: 888, cy: 506, v: "uk@mokshavoyage.vaidhyashala.in" },
  },
];

const pills = [
  { x: 674, y: 605, w: 129, h: 39, lines: [{ t: "London (UK)", fs: 17.5, b: true }] },
  { x: 1043, y: 600, w: 135, h: 50, lines: [{ t: "Delhi–NCR", fs: 17, b: true }, { t: "(Ghaziabad)", fs: 15.2, b: false }] },
  { x: 1058, y: 673, w: 166, h: 40, lines: [{ t: "Visakhapatnam", fs: 17.5, b: true }] },
];

export default function ContactOfficesStage(): ReactNode {
  return (
    <div className="hidden w-full bg-[#FEFAF6] lg:block lg:px-14">
      <div data-stage className="relative w-full overflow-hidden" style={{ containerType: "inline-size", aspectRatio: "1584 / 792" }}>
        <Image src="/assets/contact/offices/scene.jpg" alt="Ganga ghat at sunset" fill unoptimized sizes="100vw" className="object-cover" />

        {/* lotus watermark + presence map sit behind the copy */}
        {art.slice(0, 1).map(([name, x, y, w, h]) => (
          <Image key={name} src={`/assets/contact/offices/${name}.png`} alt="" width={w * 2} height={h * 2} unoptimized style={box(x, y, w, h)} />
        ))}

        {/* ---------- heading ---------- */}
        <p className={`${inter.className} font-bold uppercase text-[#300404]`} style={at(60, 48, 21.4, 28, { letterSpacing: ".1em" })}>Our Offices &amp; Global Presence</p>
        <span aria-hidden="true" style={box(549, 49, 99, 2.4, { background: "linear-gradient(90deg,#c98a3d,#d9a35a)" })} />
        <h2 className={`${serif.className} font-bold`} style={at(60, 108, 55.8, 60, { letterSpacing: "-.005em" })}>
          <span className="block text-[#2d0703]">Serving Families, Across</span>
          <span className="block" style={{ background: "linear-gradient(180deg,#d8801a,#bd6507)", WebkitBackgroundClip: "text", color: "transparent" }}>India &amp; the UK</span>
        </h2>
        <p className={`${inter.className} text-[#181717]`} style={at(65, 232, 20.4, 26)}>
          <span className="block">Our offices ensure timely support, coordination and assistance</span>
          <span className="block">for families in India and internationally.</span>
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

        {cards.map((c) => (
          <div key={`t-${c.x}`}>
            {c.head.map((l) => (
              <p key={l.t} className={`${sans.className} font-bold ${l.sub ? "text-[#ffebdc] !font-semibold" : "text-[#fffaf1]"}`} style={at(c.headX, l.cy, l.fs, 26)}>{l.t}</p>
            ))}
            <p className={`${inter.className} text-[#171717]`} style={at(c.address.x, c.address.cy, 15.8, c.address.lh, { letterSpacing: "-.003em" })}>
              {c.address.lines.map((l) => (
                <span key={l} className="block">{l}</span>
              ))}
            </p>
            <p className={`${inter.className} text-[#161616]`} style={at(c.phones.x, c.phones.cy, 14.7, 22)}>
              {c.phones.list.map((p, i) => (
                <span key={p}>
                  {i > 0 && <span aria-hidden="true" className="mx-[.9em] inline-block h-[1em] w-[2px] translate-y-[2px] bg-[#e8a23c]" />}
                  <a href={`tel:${p.replace(/\s/g, "")}`}>{p}</a>
                </span>
              ))}
            </p>
            <a href={`mailto:${c.mail.v}`} className={`${inter.className} text-[#171616]`} style={at(c.mail.x, c.mail.cy, 15.1, 22)}>{c.mail.v}</a>
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
          <Image key={`m-${name}`} src={`/assets/contact/offices/${name}.png`} alt="Map showing offices in London, Delhi-NCR and Visakhapatnam" width={w * 2} height={h * 2} unoptimized style={box(x, y, w, h)} />
        ))}
        <Image src="/assets/contact/offices/globe.png" alt="" width={304} height={296} unoptimized style={box(97, 624, 76, 74)} />
        <span aria-hidden="true" style={box(197, 625, 2.2, 70, { background: "#cc8046" })} />
        <h3 className={`${serif.className} font-bold text-[#340704]`} style={at(225, 640, 37.2, 41, { letterSpacing: "-.003em" })}>
          <span className="block">Our Presence</span>
          <span className="block">at a Glance</span>
        </h3>

        {art.slice(15).map(([name, x, y, w, h]) => (
          <Image key={name} src={`/assets/contact/offices/${name}.png`} alt="" width={w * 4} height={h * 4} unoptimized style={box(x, y, w, h)} />
        ))}
        {pills.map((p) => (
          <div
            key={p.lines[0].t}
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
