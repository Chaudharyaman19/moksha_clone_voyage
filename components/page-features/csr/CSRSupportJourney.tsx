"use client";

import Image from "next/image";
import { CSRIcon, type CSRIconName } from "./CSRIcons";
import { imageOrFallback, itemOrFallback, textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";

const defaultSteps: {
  no: string;
  icon: CSRIconName;
  image: string;
  title: string;
  text: string;
  accent: string;
}[] = [
  { no: "01", icon: "Ambulance", image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165105/moksha-sewa/assets/csr/journey-1.jpg", title: "Final-Journey\nTransport", text: "Dignified and respectful\ntransport for the departed.", accent: "#00513f" },
  { no: "02", icon: "Fire", image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165106/moksha-sewa/assets/csr/journey-2.jpg", title: "Cremation &\nLast-Rites Support", text: "Coordination of cremation\nand last-rites with care.", accent: "#b86f05" },
  { no: "03", icon: "Ritual", image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165107/moksha-sewa/assets/csr/journey-3.jpg", title: "Ritual\nEssentials", text: "Providing essential materials\nrequired for rituals.", accent: "#00513f" },
  { no: "04", icon: "Family", image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165109/moksha-sewa/assets/csr/journey-4.jpg", title: "Family\nGuidance", text: "Supporting families with guidance\nand necessary formalities.", accent: "#b86f05" },
  { no: "05", icon: "HeartHands", image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165110/moksha-sewa/assets/csr/journey-5.jpg", title: "On-Ground\nAssistance", text: "On-ground support with compassion,\ndignity and respect.", accent: "#00513f" },
];

export default function CSRSupportJourney() {
  const section = useWebsiteSection("csr-support-journey");
  const eyebrow = textOrFallback(section?.eyebrow, "Where Your CSR Support Helps", 60);
  const title = textOrFallback(section?.title, "Meaningful Support at a Deeply Human Moment.", 150);
  const description = textOrFallback(section?.description, "CSR collaborations can help strengthen essential final-journey\nassistance for eligible and verified humanitarian cases.", 500);
  const backgroundImage = imageOrFallback(section?.image, "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165112/moksha-sewa/assets/csr/meaningful-support-bg.jpg");
  const bottomStatement = textOrFallback(section?.bottomStatement, "Important Note:\nSupport is case-based and subject to verification, applicable formalities, availability and the mutually agreed project scope.", 300);

  const bottomStatementParts = bottomStatement.split("\n");

  return (
    <section className="relative overflow-hidden bg-[#fbf8f1] px-5 py-5">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-5 text-[18px] font-bold uppercase tracking-[0.12em] text-[#064b3a]">
            <span className="h-px w-16 bg-[#c08b31]" />
            <CSRIcon name="HeartHands" className="h-10 w-10" />
            {eyebrow}
            <span className="h-px w-16 bg-[#c08b31]" />
          </div>
          <h2
            className="mt-2 text-[42px] font-medium leading-[1.08] text-[#064235] sm:text-[54px]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            {title}
          </h2>
          <div className="mt-2 flex items-center justify-center gap-3 text-[#b27a20]">
            <span className="h-px w-16 bg-[#c58e35]" /><CSRIcon name="Lotus" className="h-6 w-6" /><span className="h-px w-16 bg-[#c58e35]" />
          </div>
          <p className="mx-auto mt-2 max-w-[800px] text-[19px] font-medium leading-[1.45] text-[#3b4550]">
            {description.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>

        <div className="relative mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-5 xl:gap-4">
          {defaultSteps.map((defaultStep, index) => {
            const item = itemOrFallback(section?.items, index, { title: defaultStep.title, description: defaultStep.text, value: defaultStep.icon, image: defaultStep.image });
            const title = item.title || defaultStep.title;
            const text = item.description || defaultStep.text;
            const icon = (item.value || defaultStep.icon) as CSRIconName;
            const image = imageOrFallback(item.image, defaultStep.image);
            return (
            <div key={defaultStep.no} className="relative text-center">
              {index < defaultSteps.length - 1 && (
                <div className="pointer-events-none absolute left-[72%] top-[125px] hidden w-[58%] items-center xl:flex">
                  <span className="h-px flex-1 border-t border-dashed border-[#9f9c7d]" />
                  <span className="grid h-7 w-7 place-items-center rounded-full border-2 border-[#0a5a44] bg-[#fbf8f1] text-[#0a5a44]">›</span>
                </div>
              )}
              <div className="relative mx-auto h-[180px] w-[205px] overflow-hidden rounded-[42px] border-2 border-[#ceb581] bg-white">
                <Image src={image} alt="" fill className="object-cover" sizes="205px" />
              </div>
              <div
                className="absolute left-1/2 top-[-25px] grid h-[68px] w-[68px] -translate-x-1/2 place-items-center rounded-full border-4 border-[#f8f2e8] text-white shadow"
                style={{ backgroundColor: defaultStep.accent }}
              >
                <CSRIcon name={icon} className="h-10 w-10" />
              </div>
              <div
                className="relative mx-auto -mt-5 grid h-11 w-11 place-items-center rounded-full border-2 border-[#d1ad65] text-[16px] font-bold text-white"
                style={{ backgroundColor: defaultStep.accent }}
              >
                {defaultStep.no}
              </div>
              <h3
                className="mt-2 whitespace-pre-line text-[20px] font-semibold leading-[1.1]"
                style={{ color: defaultStep.accent, fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                {title}
              </h3>
              <p className="mt-1.5 whitespace-pre-line text-[16px] font-medium leading-[1.35] text-[#4a5051]">{text}</p>
            </div>
          )})}
        </div>

        <div className="mt-4 flex min-h-[76px] flex-col items-start gap-3 rounded-[14px] border border-[#ded4c3] bg-[#f7f4ed]/95 px-5 py-3 sm:flex-row sm:items-center sm:px-7">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-[#f1efe7] text-[#0b4d3b]">
            <CSRIcon name="ShieldCheck" className="h-9 w-9" />
          </span>
          <span className="hidden h-12 w-px bg-[#ccb58e] sm:block" />
          <p className="text-[17px] leading-[1.45] text-[#44504e]">
            {bottomStatementParts.length > 1 ? (
              <>
                <strong className="mr-3 uppercase tracking-[0.05em] text-[#0a4a39]">{bottomStatementParts[0]}</strong>
                {bottomStatementParts.slice(1).join(" ")}
              </>
            ) : (
              bottomStatement
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
