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

// Header icons (gate, temple, bridge) in design pixels [file, x, y, w, h]
const headerIcons: [string, number, number, number, number][] = [
  ["h-gate", 104, 295, 63, 66],
  ["h-temple", 479, 294, 76, 67],
  ["h-bridge", 833, 302, 100, 59],
];

// Presence pins for map in design pixels
const presencePins: [string, number, number, number, number][] = [
  ["p-london", 647, 586, 31, 48],
  ["p-delhi", 1015, 608, 29, 42],
  ["p-visak", 1030, 671, 30, 40],
];

// Card body icon assets and intrinsic design sizes
const officeIcons = [
  { pin: { name: "i-pin1", w: 26, h: 31 }, phone: { name: "i-phone1", w: 28, h: 27 }, mail: { name: "i-mail1", w: 30, h: 23 } },
  { pin: { name: "i-pin2", w: 25, h: 31 }, phone: { name: "i-phone2", w: 28, h: 27 }, mail: { name: "i-mail2", w: 30, h: 25 } },
  { pin: { name: "i-pin3", w: 26, h: 31 }, phone: { name: "i-phone3", w: 27, h: 27 }, mail: { name: "i-mail3", w: 31, h: 23 } },
];

const CARD_Y = 287;
const CARD_H = 270;

// Geometry of the 3 cards. The text (headings, address, phones, email) comes from the admin: office1..3.*
const cards = [
  { x: 63, w: 359, headX: 192, heads: [306, 332, 354], headSize: [20.5, 21, 16.5], iconPadLeft: 25, textPadLeft: 16 },
  { x: 445, w: 346, headX: 571, heads: [306, 331, 354], headSize: [20.5, 21, 16.5], iconPadLeft: 24, textPadLeft: 16 },
  { x: 813, w: 350, headX: 953, heads: [314, 339, 361], headSize: [20.5, 21, 16.5], iconPadLeft: 27, textPadLeft: 18 },
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
      icons: officeIcons[i],
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

        {/* lotus watermark behind the copy */}
        <Image src="/assets/contact/offices/lotus.png" alt="" width={282 * 2} height={154 * 2} unoptimized style={box(712, 84, 282, 154)} />

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

        {/* ---------- office cards (CSS background containers) ---------- */}
        {cards.map((c) => (
          <div key={c.x}>
            <div
              style={box(c.x, CARD_Y, c.w, CARD_H, {
                borderRadius: px(18),
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
            <span aria-hidden="true" style={box(c.x + 22, CARD_Y + CARD_H - 11, c.w - 44, 3.6, { borderRadius: px(2), background: "linear-gradient(90deg,rgba(240,190,90,0) 0%,#f0aa3b 14%,#e19630 50%,#e9b059 86%,rgba(249,223,188,0) 100%)" })} />
          </div>
        ))}

        {/* Card header icons */}
        {headerIcons.map(([name, x, y, w, h]) => (
          <Image key={name} src={`/assets/contact/offices/${name}.png`} alt="" width={w * 4} height={h * 4} unoptimized style={box(x, y, w, h)} />
        ))}

        {/* Card header titles */}
        {officeData.map((c) => (
          <div key={`head-${c.x}`}>
            {c.head.map((l) => (
              <p key={l.t} className={`${sans.className} font-bold ${l.sub ? "text-[#ffebdc] !font-semibold" : "text-[#fffaf1]"}`} style={at(c.headX, l.cy, l.fs, 26)}>{l.t}</p>
            ))}
          </div>
        ))}

        {/* Card body content with proper gap and flow layout (Address, Phone, Email) */}
        {officeData.map((c) => {
          const isCompact = c.address.length > 4;
          return (
            <div
              key={`body-${c.x}`}
              style={{
                position: "absolute",
                left: px(c.x),
                top: px(CARD_Y + 90),
                width: px(c.w),
                height: px(CARD_H - 90 - 14),
                paddingLeft: px(c.iconPadLeft),
                paddingRight: px(14),
                paddingTop: px(isCompact ? 6 : 9),
                paddingBottom: px(4),
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Address row */}
              <div style={{ display: "flex", alignItems: "flex-start" }}>
                <div style={{ width: px(30), display: "flex", justifyContent: "center", alignItems: "flex-start", flexShrink: 0, paddingTop: px(1) }}>
                  <Image
                    src={`/assets/contact/offices/${c.icons.pin.name}.png`}
                    alt=""
                    width={c.icons.pin.w * 2}
                    height={c.icons.pin.h * 2}
                    unoptimized
                    style={{ width: px(c.icons.pin.w), height: px(c.icons.pin.h), objectFit: "contain" }}
                  />
                </div>
                <div style={{ flex: 1, minWidth: 0, paddingLeft: px(c.textPadLeft) }}>
                  <p className={`${inter.className} text-[#171717]`} style={{ fontSize: px(14.4), lineHeight: px(17.8), letterSpacing: "-.003em" }}>
                    {c.address.map((l) => (
                      <span key={l} className="block whitespace-nowrap">{l}</span>
                    ))}
                  </p>
                </div>
              </div>

              {/* Phone row */}
              <div style={{ display: "flex", alignItems: "center", marginTop: px(isCompact ? 11 : 14) }}>
                <div style={{ width: px(30), display: "flex", justifyContent: "center", alignItems: "center", flexShrink: 0 }}>
                  <Image
                    src={`/assets/contact/offices/${c.icons.phone.name}.png`}
                    alt=""
                    width={c.icons.phone.w * 2}
                    height={c.icons.phone.h * 2}
                    unoptimized
                    style={{ width: px(c.icons.phone.w), height: px(c.icons.phone.h), objectFit: "contain" }}
                  />
                </div>
                <div style={{ flex: 1, minWidth: 0, paddingLeft: px(c.textPadLeft) }}>
                  <p className={`${inter.className} text-[#161616]`} style={{ fontSize: px(14.4), lineHeight: px(21) }}>
                    {c.phones.map((p, i) => (
                      <span key={p} className="whitespace-nowrap">
                        {i > 0 && <span aria-hidden="true" className="mx-[.8em] inline-block h-[1em] w-[2px] translate-y-[2px] bg-[#e8a23c]" />}
                        <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-[#c96822]">{p}</a>
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              {/* Email row */}
              <div style={{ display: "flex", alignItems: "center", marginTop: px(6) }}>
                <div style={{ width: px(30), display: "flex", justifyContent: "center", alignItems: "center", flexShrink: 0 }}>
                  <Image
                    src={`/assets/contact/offices/${c.icons.mail.name}.png`}
                    alt=""
                    width={c.icons.mail.w * 2}
                    height={c.icons.mail.h * 2}
                    unoptimized
                    style={{ width: px(c.icons.mail.w), height: px(c.icons.mail.h), objectFit: "contain" }}
                  />
                </div>
                <div style={{ flex: 1, minWidth: 0, paddingLeft: px(c.textPadLeft) }}>
                  <a
                    href={`mailto:${c.email}`}
                    className={`${inter.className} block whitespace-nowrap text-[#171616] hover:text-[#c96822]`}
                    style={{ fontSize: px(14.4), lineHeight: px(21) }}
                  >
                    {c.email}
                  </a>
                </div>
              </div>
            </div>
          );
        })}

        {/* ---------- presence strip (CSS) ---------- */}
        <div
          aria-hidden="true"
          style={box(60, 578, 1462, 162, {
            borderRadius: px(46),
            background: "linear-gradient(90deg,#FDFBF8 0%,#FEFBF7 29%,#FDF8F3 58%,#FCF2E9 83%,#FCECDD 93%,#FCEDDE 100%)",
            boxShadow: "0 7px 10px -5px rgba(160,100,60,.22), 0 0 0 1px rgba(240,228,216,.5)",
          })}
        />
        <Image src={o.image("offices.mapImage")} alt={o.get("offices.mapAlt")} width={763 * 2} height={148 * 2} unoptimized style={box(505, 590, 763, 148)} />
        <Image src="/assets/contact/offices/globe.png" alt="" width={304} height={296} unoptimized style={box(97, 624, 76, 74)} />
        <span aria-hidden="true" style={box(197, 625, 2.2, 70, { background: "#cc8046" })} />
        <h3 className={`${serif.className} font-bold text-[#340704]`} style={at(225, 640, 37.2, 41, { letterSpacing: "-.003em" })}>
          {o.lines("presence.title").map((l) => (
            <span key={l} className="block">{l}</span>
          ))}
        </h3>

        {presencePins.map(([name, x, y, w, h]) => (
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
