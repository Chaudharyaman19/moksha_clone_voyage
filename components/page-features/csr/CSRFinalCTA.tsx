"use client";

import { CSRIcon } from "./CSRIcons";
import { textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";

export default function CSRFinalCTA() {
  const section = useWebsiteSection("csr-cta");
  const eyebrow = textOrFallback(section?.eyebrow, "Purpose Meets Responsibility", 60);
  const title = textOrFallback(section?.title, "Create Meaningful Human Impact With Us.", 100);
  const description = textOrFallback(section?.description, "Explore a responsible collaboration that brings corporate participation\nand humanitarian service together with dignity and accountability.", 300);
  const buttonLabel = textOrFallback(section?.buttonLabel, "Discuss a CSR Partnership", 50);
  const buttonHref = section?.buttonHref || "#csr-enquiry";
  const secondaryButtonLabel = textOrFallback(section?.secondaryButtonLabel, "Request Organisation Profile", 50);
  const secondaryButtonHref = section?.secondaryButtonHref || "#organisation";

  return (
    <section className="relative overflow-hidden bg-[#002f28] px-5 py-3 text-white">
      <CSRIcon name="Lotus" className="pointer-events-none absolute -left-6 top-12 h-48 w-48 text-[#0d493f]/30" />
      <CSRIcon name="Lotus" className="pointer-events-none absolute -right-6 top-12 h-48 w-48 text-[#0d493f]/30" />
      <div className="mx-auto max-w-7xl text-center">
        <div className="flex items-center justify-center gap-5 text-[17px] uppercase tracking-[0.06em] text-[#d39a2d]">
          <span className="h-px w-16 bg-[#c28a31]" />
          <CSRIcon name="Lotus" className="h-8 w-8" />
          {eyebrow}
          <span className="h-px w-16 bg-[#c28a31]" />
        </div>
        <h2 className="mt-1.5 text-[40px] font-medium leading-[1.05] sm:text-[48px]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
          {title.replace(/\.$/, "")}<span className="text-[#d4942d]">{title.endsWith(".") ? "." : ""}</span>
        </h2>
        <div className="mt-2 flex items-center justify-center gap-3 text-[#c99330]">
          <span className="h-px w-16 bg-[#c99330]" /><span>◆</span><span className="h-px w-16 bg-[#c99330]" />
        </div>
        <p className="mx-auto mt-2 max-w-[780px] text-[18px] leading-[1.4] text-[#f1eee8]">
          {description.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>
        <div className="mt-3 flex flex-wrap justify-center gap-3">
          <a href={buttonHref} className="inline-flex h-[46px] w-full max-w-[290px] items-center justify-between rounded-[7px] bg-[#f0b64e] px-5 text-[13px] font-bold uppercase text-[#0a4335]">
            {buttonLabel}
            <CSRIcon name="ArrowRight" className="h-7 w-7" />
          </a>
          <a href={secondaryButtonHref} className="inline-flex h-[46px] w-full max-w-[320px] items-center justify-between rounded-[7px] border-2 border-[#c89132] bg-transparent px-5 text-[13px] font-bold uppercase text-white">
            {secondaryButtonLabel}
            <CSRIcon name="ArrowRight" className="h-7 w-7" />
          </a>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-[#bb8a35]" />
    </section>
  );
}
