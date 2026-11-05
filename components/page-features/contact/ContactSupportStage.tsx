"use client";

import Image from "next/image";
import type { ChangeEvent, CSSProperties, FormEvent, ReactNode } from "react";
import { IBM_Plex_Sans, Source_Sans_3, Source_Serif_4 } from "next/font/google";

const plex = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });
const sans = Source_Sans_3({ subsets: ["latin"], weight: ["600", "700"], display: "swap" });
const serif = Source_Serif_4({ subsets: ["latin"], weight: ["600", "700"], display: "swap" });

/*
 * Desktop "We're here to support you" block + enquiry form, on the 1584x792 design grid.
 *   scene.jpg       ONLY the photo + soft background (no card, no fields, no button, no copy)
 *   badge-*.png, f-*.png, b-*.png, strip-lotus.png   every icon / ornament is its own file
 * The form card, fields, button and helpline strip are plain CSS shapes, so they can be moved or resized:
 *   - FORM.x / FORM.y / FORM.scale move or resize the whole enquiry form in one go
 *   - STRIP.* does the same for the helpline strip
 * All copy, inputs, selects, textarea and the submit button are live elements.
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

// Where the enquiry form sits (design px) and how big it is. scale 1 = same size as the reference.
const FORM = { x: 971, y: 46, w: 577, h: 563, scale: 1 };
// Where the helpline strip sits.
const STRIP = { x: 118, y: 642, w: 1360, h: 111 };

// [file, x, y, w, h] in design pixels (page space)
const art: [string, number, number, number, number][] = [
  ["badge-heart", 68, 329, 95, 96],
  ["badge-shield", 68, 430, 95, 96],
  ["badge-people", 66, 529, 98, 98],
  ["badge-phone", 161, 656, 84, 84],
  ["badge-mail", 560, 658, 81, 81],
  ["badge-clock", 942, 659, 78, 78],
  ["strip-lotus", 1296, 652, 176, 94],
];

// [file, x, y, w, h] relative to the form card's top-left
const formArt: [string, number, number, number, number][] = [
  ["f-user", 45, 174, 26, 26],
  ["f-phone", 313, 174, 26, 26],
  ["f-mail", 43, 234, 28, 22],
  ["f-pin", 314, 232, 23, 26],
  ["f-list", 43, 294, 28, 24],
  ["f-chat", 44, 356, 28, 26],
  ["f-chevron", 517, 236, 20, 18],
  ["f-chevron2", 517, 297, 20, 18],
];

const points: { cy: number; title: string; lines: string[] }[] = [
  { cy: 352, title: "Compassionate Support", lines: ["Sensitivity, dignity and care", "for every individual."] },
  { cy: 453, title: "Trusted & Transparent", lines: ["Clear information and ethical", "processes at every step."] },
  { cy: 554, title: "Local Assistance", lines: ["On-ground support and coordination", "in your area."] },
];

type FormData = { name: string; phone: string; email: string; location: string; assistanceType: string; message: string };

export type ContactSupportStageProps = {
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  formData: FormData;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onSubmit: (e: FormEvent) => void;
  isSubmitting: boolean;
  status: { type: "success" | "error" | null; message: string };
  locationOptions: string[];
  assistanceOptions: string[];
};

const fieldCls = `${plex.className} absolute bg-transparent text-[#3f3a36] outline-none placeholder:text-[#484748]`;

// shared look of the white input boxes
const fieldShape: CSSProperties = {
  background: "#FDFCFA",
  border: "1px solid #E7E2DC",
  borderRadius: px(14),
  boxShadow: "0 3px 6px rgba(120,80,40,.13), 0 1px 1px rgba(120,80,40,.06)",
};

export default function ContactSupportStage(p: ContactSupportStageProps): ReactNode {
  // positions below are relative to the form card's top-left corner
  const fieldText = (x: number, y: number, w: number, h: number): CSSProperties =>
    box(x, y, w, h, { fontSize: px(15.3), paddingLeft: px(60), paddingRight: px(22), borderRadius: px(14) });

  return (
    <div id="contact-form-desktop" className="hidden w-full scroll-mt-24 bg-[#FDF6EE] lg:block lg:px-14">
      <div data-stage className="relative w-full overflow-hidden" style={{ containerType: "inline-size", aspectRatio: "1584 / 792" }}>
        <Image src="/assets/contact/support/scene.jpg" alt="Moksha Sewa volunteer comforting an elderly woman" fill unoptimized sizes="100vw" className="object-cover" />

        {/* ---------- helpline strip (CSS shape) ---------- */}
        <div
          aria-hidden="true"
          style={box(STRIP.x, STRIP.y, STRIP.w, STRIP.h, {
            borderRadius: px(46),
            background: "linear-gradient(180deg,#FFFCF7 0%,#FEF7EF 35%,#FEF7EF 100%)",
            border: "1px solid #F2E9DF",
            boxShadow: "0 6px 10px -4px rgba(150,90,40,.12)",
          })}
        />
        <span aria-hidden="true" style={box(518.4, 670, 1.6, 58, { background: "#8a7164", opacity: 0.85 })} />
        <span aria-hidden="true" style={box(906.4, 670, 1.6, 58, { background: "#7d6960", opacity: 0.85 })} />

        {/* gold rule under the left eyebrow */}
        <span aria-hidden="true" style={box(326, 59, 96, 2, { background: "#c49e60" })} />

        {art.map(([name, x, y, w, h]) => (
          <Image key={name} src={`/assets/contact/support/${name}.png`} alt="" width={w * 4} height={h * 4} unoptimized style={box(x, y, w, h)} />
        ))}

        {/* ---------- left copy ---------- */}
        <p className={`${sans.className} font-bold uppercase text-[#330907]`} style={at(74, 60, 18.6, 24, { letterSpacing: ".16em" })}>We’re Here to Help</p>
        <h2 className={`${serif.className} font-semibold`} style={at(74, 118, 54.5, 55, { letterSpacing: "-.005em" })}>
          <span className="block text-[#330d04]">We’re Here to</span>
          <span className="block" style={{ background: "linear-gradient(180deg,#b86d0d,#9e570a)", WebkitBackgroundClip: "text", color: "transparent" }}>Support You</span>
        </h2>
        <p className={`${plex.className} text-[#2c2c33]`} style={at(74, 235, 18.25, 24.2)}>
          {["Whether you need immediate assistance, guidance", "on our services, or support for a loved one, our team", "is available 24 × 7 to help you and your family", "with care and compassion."].map((l) => (
            <span key={l} className="block">{l}</span>
          ))}
        </p>
        {points.map((pt) => (
          <div key={pt.title}>
            <p className={`${plex.className} font-semibold text-[#320704]`} style={at(188, pt.cy, 21.9, 28)}>{pt.title}</p>
            <p className={`${plex.className} text-[#3d3b3c]`} style={at(188, pt.cy + 27, 17.1, 24)}>
              {pt.lines.map((l) => (
                <span key={l} className="block">{l}</span>
              ))}
            </p>
          </div>
        ))}

        {/* ---------- enquiry form: one group, move / resize with FORM ---------- */}
        <form
          onSubmit={p.onSubmit}
          aria-label="Send us an enquiry"
          style={box(FORM.x, FORM.y, FORM.w, FORM.h, { transform: `scale(${FORM.scale})`, transformOrigin: "top left" })}
        >
          {/* card */}
          <div
            aria-hidden="true"
            style={box(0, 0, FORM.w, FORM.h, {
              borderRadius: px(34),
              background: "linear-gradient(180deg,#FEFDFB 0%,#FEFDFB 14%,#FEFAF6 30%,#FFF8F0 48%,#FEF7EF 100%)",
              // reference: no outline; soft shadow that falls mostly below / to the right, almost none above
              boxShadow: "0 9px 16px -3px rgba(170,105,55,.20), 4px 5px 12px -4px rgba(170,105,55,.14)",
            })}
          />
          <span aria-hidden="true" style={box(301, 42, 162, 2, { background: "#be935e" })} />

          <p className={`${sans.className} font-bold uppercase text-[#330906]`} style={at(41, 43, 18.2, 24, { letterSpacing: ".175em" })}>Send Us an Enquiry</p>
          <h3 className={`${serif.className} font-semibold text-[#340c05]`} style={at(39, 88, 43, 52, { letterSpacing: "-.005em" })}>Get in Touch with Us</h3>
          <p className={`${plex.className} text-[#282830]`} style={at(39, 133, 18.1, 24)}>Fill in the form below and our team will get back to you shortly.</p>

          {/* input boxes */}
          {[
            [27, 164, 254, 46],
            [297, 164, 254, 46],
            [27, 222, 254, 46],
            [297, 222, 254, 46],
            [27, 283, 524, 46],
            [27, 344, 524, 108],
          ].map(([x, y, w, h]) => (
            <span key={`${x}-${y}`} aria-hidden="true" style={box(x, y, w, h, fieldShape)} />
          ))}

          {formArt.map(([name, x, y, w, h]) => (
            <Image key={name} src={`/assets/contact/support/${name}.png`} alt="" width={w * 4} height={h * 4} unoptimized style={box(x, y, w, h)} />
          ))}

          <input name="name" value={p.formData.name} onChange={p.onChange} required placeholder="Your Name *" aria-label="Your name" className={fieldCls} style={fieldText(27, 164, 254, 46)} />
          <input
            name="phone"
            type="tel"
            value={p.formData.phone}
            onChange={p.onChange}
            required
            inputMode="numeric"
            maxLength={10}
            pattern="[6-9][0-9]{9}"
            title="Enter a valid 10-digit mobile number"
            placeholder="Mobile Number *"
            aria-label="Mobile number"
            className={fieldCls}
            style={fieldText(297, 164, 254, 46)}
          />
          <input name="email" type="email" value={p.formData.email} onChange={p.onChange} placeholder="Email Address (Optional)" aria-label="Email address" className={fieldCls} style={fieldText(27, 222, 254, 46)} />
          <select name="location" value={p.formData.location} onChange={p.onChange} required aria-label="Your location" className={`${fieldCls} appearance-none ${p.formData.location ? "" : "text-[#484748]"}`} style={fieldText(297, 222, 254, 46)}>
            <option value="" disabled>Your Location *</option>
            {p.locationOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
          <select name="assistanceType" value={p.formData.assistanceType} onChange={p.onChange} required aria-label="Type of assistance" className={`${fieldCls} appearance-none ${p.formData.assistanceType ? "" : "text-[#484748]"}`} style={fieldText(27, 283, 524, 46)}>
            <option value="" disabled>Type of Assistance *</option>
            {p.assistanceOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
          <textarea
            name="message"
            value={p.formData.message}
            onChange={p.onChange}
            required
            placeholder="Your Message *"
            aria-label="Your message"
            className={`${fieldCls} resize-none`}
            style={{ ...fieldText(27, 344, 524, 108), paddingLeft: px(65), paddingTop: px(13), paddingRight: px(30) }}
          />
          {/* textarea resize grip */}
          <svg aria-hidden="true" viewBox="0 0 12 12" style={box(531, 433, 12, 12)}>
            <path d="M11 2 L2 11 M11 6.5 L6.5 11" stroke="#6f6760" strokeWidth="1.1" strokeLinecap="round" fill="none" />
          </svg>

          {/* submit */}
          <button
            type="submit"
            disabled={p.isSubmitting}
            aria-label="Send enquiry"
            className="absolute transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
            style={box(27, 475, 524, 62, {
              borderRadius: px(31),
              background: "linear-gradient(180deg,#9D471B 0%,#94401A 22%,#8A390E 55%,#7D2F08 85%,#74290A 100%)",
              boxShadow: "inset 0 1px 0 rgba(255,200,170,.28), 0 4px 9px rgba(110,38,6,.20)",
            })}
          >
            {p.isSubmitting ? (
              <span className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 animate-spin rounded-full border-2 border-white border-t-transparent" />
            ) : (
              <>
                <Image src="/assets/contact/support/b-plane.png" alt="" width={168} height={136} unoptimized style={box(132, 15, 42, 34)} />
                <span className={`${plex.className} font-semibold text-[#fff9f3]`} style={at(193, 31, 24.2, 30)}>Send Enquiry</span>
                <Image src="/assets/contact/support/b-arrow.png" alt="" width={128} height={80} unoptimized style={box(362, 21, 32, 20)} />
              </>
            )}
          </button>

          {p.status.type && (
            <p
              role="status"
              className={`${plex.className} absolute text-center font-medium ${p.status.type === "success" ? "text-[#3F6B45]" : "text-[#9C4A38]"}`}
              style={box(27, 540, 524, 20, { fontSize: px(13.5), lineHeight: px(20) })}
            >
              {p.status.message}
            </p>
          )}
        </form>

        {/* ---------- helpline strip copy ---------- */}
        <a href={p.phoneHref} aria-label="Call our helpline" style={box(130, 648, 380, 98, { borderRadius: px(40) })} />
        <p className={`${sans.className} pointer-events-none font-bold text-[#330805]`} style={at(263, 669, 20.2, 26)}>Call Our Helpline</p>
        <p className={`${plex.className} pointer-events-none text-[#323132]`} style={at(263, 694, 18, 24)}>24 × 7 Support</p>
        <p className={`${sans.className} pointer-events-none font-bold text-[#702e0b]`} style={at(263, 723, 32, 38)}>{p.phoneDisplay}</p>

        <a href={p.emailHref} aria-label="Email us" style={box(540, 648, 360, 98, { borderRadius: px(40) })} />
        <p className={`${sans.className} pointer-events-none font-bold text-[#330805]`} style={at(653, 684, 20.5, 26)}>Email Us</p>
        <p className={`${plex.className} pointer-events-none text-[#341512]`} style={at(653, 709, 19.3, 24)}>{p.email}</p>

        <p className={`${sans.className} font-bold text-[#330805]`} style={at(1041, 669, 20.5, 26)}>Office Hours</p>
        <p className={`${plex.className} text-[#3c2726]`} style={at(1041, 694, 17.4, 24)}>Mon – Sat: 9:00 AM – 7:00 PM</p>
        <p className={`${plex.className} text-[#3c2726]`} style={at(1041, 718, 17.4, 24)}>Sun: By Appointment</p>
      </div>
    </div>
  );
}
