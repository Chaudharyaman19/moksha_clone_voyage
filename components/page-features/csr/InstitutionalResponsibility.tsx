"use client";

import { CSRIcon, type CSRIconName } from "./CSRIcons";
import { imageOrFallback, itemOrFallback, textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";

const defaultPillars = [
  { icon: "Institution", title: "Governance", text: "Upholding transparent systems,\nethical practices and strong\ninstitutional governance." },
  { icon: "People", title: "Social Service", text: "Working for community welfare\nand creating inclusive, compassionate\nand meaningful social impact." },
  { icon: "HeartHands", title: "Humanitarian Action", text: "Extending timely support and relief\nto those in need with dignity,\ncare and respect." },
  { icon: "Handshake", title: "Responsible Partnerships", text: "Building accountable partnerships\nthat create sustainable impact\nand long-term shared value." },
] as const;

export default function InstitutionalResponsibility() {
  const section = useWebsiteSection("csr-responsibility");
  const eyebrow = textOrFallback(section?.eyebrow, "The Organisation Behind Moksha Sewa", 60);
  const title = textOrFallback(section?.title, "Institutional Responsibility\nBehind the Mission.", 150);
  const description = textOrFallback(section?.description, "Moksha Sewa is an initiative of Namo Gange Trust.\nThrough this institutional framework, the initiative\nseeks to build responsible humanitarian collaborations\ncentred on dignity, service and accountability.", 500);
  const bgImage = imageOrFallback(section?.image, "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165104/moksha-sewa/assets/csr/institutional-responsibility-bg.jpg");
  const buttonLabel = textOrFallback(section?.buttonLabel, "Know Namo Gange Trust", 50);
  const buttonHref = section?.buttonHref || "#";
  const supportTitle = textOrFallback(section?.supportTitle, "Our Institutional Pillars", 50);
  const partnerLogo = imageOrFallback(section?.partnerLogoImage, "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788164958/moksha-sewa/hero-images/namo-gange-logo.webp");

  return (
    <section id="organisation" className="relative overflow-hidden bg-[#fbf6ed] px-5 py-3">
      <div className="relative mx-auto max-w-7xl overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 h-[340px] bg-cover bg-center"
          style={{ backgroundImage: `url('${bgImage}')` }}
        />
        <div
          className="pointer-events-none absolute left-[28%] top-0 z-[1] hidden h-[340px] w-[47%] lg:block"
          style={{ background: "linear-gradient(90deg,#fbf6ed 0%,rgba(251,246,237,.94) 45%,rgba(251,246,237,.55) 72%,transparent 100%)" }}
        />
        <div className="relative z-10 grid min-h-[280px] grid-cols-1 gap-5 lg:grid-cols-[30%_70%]">
          <div className="flex items-center justify-center pt-[28px]">
            <img
              src={partnerLogo}
              alt="Namo Gange Trust"
              className="mx-auto h-auto w-full max-w-[320px] object-contain"
            />
          </div>
          <div className="pt-3">
            <div className="flex items-center justify-start gap-4 text-[16px] font-bold uppercase tracking-[0.08em] text-[#a66f19]">
              <span className="h-px w-10 bg-[#bd8b35]" /><CSRIcon name="Lotus" className="h-6 w-6" /><span className="h-px w-10 bg-[#bd8b35]" />
            </div>
            <p className="mt-1.5 text-left text-[16px] font-bold uppercase tracking-[0.08em] text-[#a66f19]">{eyebrow}</p>
            <h2
              className="mt-2 text-left text-[30px] font-medium leading-[1.05] text-[#064335] lg:text-[36px]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              {title.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </h2>
            <span className="mt-2 block h-[2px] w-[105px] bg-[#b88027]" />
            <p className="mt-2 max-w-[680px] text-left text-[16px] font-medium leading-[1.4] text-[#3e4343]">
              {description.split("\n").map((line, i) => {
                const parts = line.split("Namo Gange Trust");
                if (parts.length > 1) {
                  return (
                    <span key={i}>
                      {parts[0]}<strong className="text-[#b67914]">Namo Gange Trust</strong>{parts.slice(1).join("Namo Gange Trust")}
                      <br />
                    </span>
                  );
                }
                return (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                );
              })}
            </p>
          </div>
        </div>

        <div className="relative z-20 mt-6 rounded-[12px] bg-[#004c39] px-4 pb-4 pt-12 text-white sm:pb-3 sm:pt-8">
          <div className="absolute left-1/2 top-[-18px] w-[calc(100%-32px)] max-w-[340px] -translate-x-1/2 rounded-[7px] bg-[#e7b752] px-4 py-2 text-center text-[16px] font-bold uppercase tracking-[0.04em] text-[#164534] shadow sm:w-auto sm:max-w-none sm:px-10">
            {supportTitle}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            {defaultPillars.map((defaultPillar, index) => {
              const item = itemOrFallback(section?.items, index, { title: defaultPillar.title, description: defaultPillar.text, value: defaultPillar.icon });
              const title = item.title || defaultPillar.title;
              const text = item.description || defaultPillar.text;
              const icon = (item.value || defaultPillar.icon) as CSRIconName;
              return (
              <div key={title} className={`min-h-[150px] px-6 py-4 text-center sm:py-2 ${index ? "sm:border-l sm:border-[#8b8a55]" : ""}`}>
                <span className="mx-auto grid h-[58px] w-[58px] place-items-center rounded-full border-2 border-[#c69431] text-[#d6a33d]">
                  <CSRIcon name={icon} className="h-11 w-11" />
                </span>
                <h3 className="mt-2.5 text-[19px] font-semibold leading-[1.2] sm:mt-1.5" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>{title}</h3>
                <span className="mx-auto mt-2 block h-[2px] w-10 bg-[#c89633] sm:mt-1.5" />
                <p className="mt-2 whitespace-pre-line text-[16px] leading-[1.35] text-[#f1eee4] sm:mt-1.5 sm:leading-[1.3]">{text}</p>
              </div>
            )})}
          </div>
        </div>

        <div className="relative z-20 mt-2 flex items-center justify-center gap-4">
          <span className="hidden h-px flex-1 bg-[#c29139] sm:block" /><span className="text-[#bc842d]">◇</span>
          <a href={buttonHref} className="inline-flex h-[48px] w-full max-w-[390px] items-center justify-between rounded-[7px] border border-[#c6912f] bg-[#004938] px-5 text-[16px] font-bold uppercase text-white shadow">
            <span className="inline-flex items-center gap-4"><CSRIcon name="ShieldCheck" className="h-9 w-9 text-[#d6a33a]" />{buttonLabel}</span>
            <CSRIcon name="ArrowRight" className="h-7 w-7 text-[#d6a33a]" />
          </a>
          <span className="text-[#bc842d]">◇</span><span className="hidden h-px flex-1 bg-[#c29139] sm:block" />
        </div>
      </div>
    </section>
  );
}
