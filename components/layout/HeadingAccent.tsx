"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/*
 * Inner pages: gives every section heading the same two-tone theme as the landing page
 * (dark text + orange last part). The landing page does this itself with <AccentTitle>.
 * Only plain-text headings are touched; headings that already have their own coloured
 * span, sit on a dark/photo background, or live in forms, dialogs, nav, footer or
 * fixed-layout "stage" blocks are left alone.
 */
const ACCENT = "#D54200";
const SKIP = "nav, footer, form, [role='dialog'], [aria-modal='true'], [data-stage], [data-no-accent]";

function luminance(rgb: string) {
  const m = rgb.match(/[\d.]+/g);
  if (!m) return 1;
  const [r, g, b] = m.map(Number);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}

/* headings made of several lines / spans: same dark base, accent on the last line (or the existing accent span) */
function processStructured(h: HTMLElement) {
  if (luminance(getComputedStyle(h).color) > 0.55) return;
  const kids = Array.from(h.childNodes);
  const elems = kids.filter((n) => n.nodeType === 1) as HTMLElement[];
  const onlySimple = elems.every((e) => e.tagName === "BR" || (e.tagName === "SPAN" && e.children.length === 0));
  if (!onlySimple) return;
  const spans = elems.filter((e) => e.tagName === "SPAN");
  const hColor = getComputedStyle(h).color;
  const accented = spans.filter((e) => getComputedStyle(e).color !== hColor);
  if (accented.length === 1 && spans.length <= 2) {
    accented[0].style.setProperty("color", ACCENT, "important");
  } else if (spans.length >= 2 && accented.length === 0) {
    spans[spans.length - 1].style.setProperty("color", ACCENT, "important");
  } else if (spans.length === 0 && elems.some((e) => e.tagName === "BR")) {
    const last = kids[kids.length - 1];
    if (!last || last.nodeType !== 3 || !(last as Text).data.trim()) return;
    const span = document.createElement("span");
    span.dataset.ttAccent = "1";
    span.textContent = (last as Text).data;
    span.style.setProperty("color", ACCENT, "important");
    last.after(span);
    (last as Text).data = "";
  } else if (accented.length === 0) {
    return;
  }
  h.dataset.ttDone = "1";
  h.classList.add("tt-dark");
}

function processHeading(h: HTMLElement) {
  if (h.closest(SKIP)) return;
  const stored = h.dataset.ttFirst;

  if (stored !== undefined) {
    // already split: if React rewrote the text node, redo the split
    const hostEl = h.dataset.ttHost === "1" ? (h.firstElementChild as HTMLElement | null) : h;
    const f = hostEl?.firstChild;
    if (f && f.nodeType === 3 && (f as Text).data === stored) return;
    hostEl?.querySelectorAll(":scope > [data-tt-accent]").forEach((n) => n.remove());
    delete h.dataset.ttFirst;
    h.classList.remove("tt-dark");
  }

  if (h.dataset.ttDone) return;
  // heading whose only child is one plain <span>text</span>: split inside that span
  if (h.childNodes.length === 1 && h.children.length === 1) {
    const inner = h.children[0] as HTMLElement;
    if (inner.tagName === "SPAN" && inner.children.length === 0 && inner.childNodes.length === 1 && inner.childNodes[0].nodeType === 3) {
      splitText(h, inner, inner.childNodes[0] as Text);
      return;
    }
  }
  if (h.children.length > 0 || h.childNodes.length !== 1 || h.childNodes[0].nodeType !== 3) {
    processStructured(h);
    return;
  }
  splitText(h, h, h.childNodes[0] as Text);
}

function splitText(h: HTMLElement, host: HTMLElement, node: Text) {
  const text = node.data.replace(/\s+/g, " ").trim();
  const words = text.split(" ");
  if (words.length < 2) return;
  if (luminance(getComputedStyle(h).color) > 0.55) return; // light text = dark background

  const k = words.length > 2 ? Math.ceil(words.length / 2) : 1;
  const head = words.slice(0, words.length - k).join(" ") + " ";
  const tail = words.slice(words.length - k).join(" ");

  node.data = head;
  const span = document.createElement("span");
  span.dataset.ttAccent = "1";
  span.textContent = tail;
  span.style.setProperty("color", ACCENT, "important");
  node.after(span);
  h.dataset.ttFirst = head;
  h.dataset.ttHost = host === h ? "" : "1";
  h.classList.add("tt-dark");
}

/* small uppercase label right above a heading ("WHO WE HELP" style) -> shared eyebrow colour/size */
function findEyebrow(h: HTMLElement): HTMLElement | null {
  let node: HTMLElement | null = h;
  for (let depth = 0; depth < 3 && node; depth++) {
    let sib = node.previousElementSibling as HTMLElement | null;
    for (let steps = 0; steps < 3 && sib; steps++, sib = sib.previousElementSibling as HTMLElement | null) {
      if (/^H[1-6]$/.test(sib.tagName) || sib.querySelector("h1,h2,h3")) continue;
      const ownText = (el: HTMLElement) =>
        Array.from(el.childNodes)
          .filter((n) => n.nodeType === 3)
          .map((n) => (n as Text).data)
          .join("")
          .trim();
      const leaves = [sib, ...Array.from(sib.querySelectorAll<HTMLElement>("span, p, div"))].filter(
        (el) => ownText(el).length > 2,
      );
      for (const el of leaves) {
        const txt = ownText(el);
        const cs = getComputedStyle(el);
        if (txt.length <= 45 && !/[.!?]$/.test(txt) && parseFloat(cs.fontSize) <= 24 && luminance(cs.color) < 0.6 && !el.closest("a, button")) return el;
      }
    }
    node = node.parentElement;
    if (!node || node.tagName === "MAIN" || node.tagName === "SECTION") break;
  }
  return null;
}

function processEyebrow(h: HTMLElement) {
  if (h.closest(SKIP)) return;
  const el = findEyebrow(h);
  if (el && !el.classList.contains("tt-eyebrow")) el.classList.add("tt-eyebrow");
}

/* the paragraph right under a heading -> same subtitle size / weight / colour as the landing page */
function processSubtitle(h: HTMLElement) {
  if (h.closest(SKIP)) return;
  let node: HTMLElement | null = h;
  for (let depth = 0; depth < 3 && node; depth++) {
    let sib = node.nextElementSibling as HTMLElement | null;
    for (let steps = 0; steps < 3 && sib; steps++, sib = sib.nextElementSibling as HTMLElement | null) {
      if (/^H[1-6]$/.test(sib.tagName)) return;
      const p = sib.tagName === "P" ? sib : sib.querySelector<HTMLElement>(":scope > p");
      if (!p || p.closest("a, button")) continue;
      const txt = (p.textContent || "").trim();
      if (txt.length < 15 || txt.length > 320) continue;
      if (luminance(getComputedStyle(p).color) > 0.55) return;
      p.classList.add("tt-subtitle");
      return;
    }
    node = node.parentElement;
    if (!node || node.tagName === "MAIN" || node.tagName === "SECTION") break;
  }
}

function run() {
  document.querySelectorAll<HTMLElement>("main h1, main h2, section h1, section h2").forEach((h) => {
    // headings in narrow cards/panels would overflow at full heading size
    if (!h.closest(SKIP)) h.classList.toggle("tt-compact", h.getBoundingClientRect().width < 400);
    processHeading(h);
    processEyebrow(h);
    processSubtitle(h);
  });
}

export default function HeadingAccent() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") return;
    let raf = 0;
    const schedule = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(run);
    };
    schedule();
    const mo = new MutationObserver(schedule);
    mo.observe(document.body, { childList: true, subtree: true, characterData: true });
    return () => {
      mo.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [pathname]);

  return null;
}
