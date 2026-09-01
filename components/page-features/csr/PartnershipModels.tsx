"use client";

import Image from "next/image";
import { CSRIcon, type CSRIconName } from "./CSRIcons";
import { imageOrFallback, itemOrFallback, textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";

const defaultModels = [
  {
    image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165114/moksha-sewa/assets/csr/model-project.jpg",
    icon: "Handshake" as CSRIconName,
    title: "Project Partnership",
    text: "Support a defined humanitarian programme with mutually agreed objectives, scope and reporting.",
  },
  {
    image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165116/moksha-sewa/assets/csr/model-volunteering.jpg",
    icon: "People" as CSRIconName,
    title: "Employee Volunteering",
    text: "Create suitable opportunities for employees to contribute their time, skills and participation.",
  },
  {
    image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165113/moksha-sewa/assets/csr/model-institutional.jpg",
    icon: "Institution" as CSRIconName,
    title: "Institutional Partnership",
    text: "Collaborate through hospitals, institutions, organisations and community networks where appropriate.",
  },
];

export default function PartnershipModels() {
  const section = useWebsiteSection("csr-models");
  const eyebrow = textOrFallback(section?.eyebrow, "Partnership Models", 60);
  const title = textOrFallback(section?.title, "Built Around Responsible Collaboration.", 100);
  const description = textOrFallback(section?.description, "Moksha Sewa works with organisations and institutions to create responsible partnerships\nthat strengthen dignified humanitarian support where it is needed most.", 300);
  const buttonLabel = textOrFallback(section?.buttonLabel, "Discuss a CSR Partnership", 50);
  const buttonHref = section?.buttonHref || "#csr-enquiry";

  return (
    <section className="bg-[#fbf8f2] px-5 py-5">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-[18px] font-bold uppercase tracking-[0.25em] text-[#0b4a3b]">{eyebrow}</p>
          <div className="mt-1 flex items-center justify-center gap-10 text-[#b77c1f]">
            <span className="h-px w-20 bg-[#bd8732]" /><span className="text-2xl">◇</span><span className="h-px w-20 bg-[#bd8732]" />
          </div>
          <h2
            className="mt-0.5 text-[40px] font-medium leading-[1.05] text-[#064436] sm:text-[48px]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            {title}
          </h2>
          <div className="mt-2 flex justify-center"><span className="h-px w-44 bg-[#c69849]" /></div>
          <p className="mx-auto mt-3 max-w-[780px] text-[18px] font-medium leading-[1.45] text-[#3d4142]">
            {description.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {defaultModels.map((defaultModel, index) => {
            const item = itemOrFallback(section?.items, index, { title: defaultModel.title, description: defaultModel.text, value: defaultModel.icon, image: defaultModel.image });
            const title = item.title || defaultModel.title;
            const text = item.description || defaultModel.text;
            const icon = (item.value || defaultModel.icon) as CSRIconName;
            const image = imageOrFallback(item.image, defaultModel.image);
            return (
            <article key={defaultModel.title} className="overflow-hidden rounded-[16px] border border-[#d8c49b] bg-[#fffdf8]">
              <div className="relative h-[220px]">
                <Image src={image} alt="" fill className="object-cover" sizes="33vw" />
              </div>
              <div className="relative min-h-[165px] px-6 pb-7 pt-5">
                <div className="flex gap-4">
                  <span className="grid h-[72px] w-[72px] shrink-0 place-items-center rounded-full border-[3px] border-[#c58c2b] bg-[#00503e] text-white">
                    <CSRIcon name={icon} className="h-11 w-11" />
                  </span>
                  <span className="mt-1 h-[76px] w-px bg-[#d5b775]" />
                  <div>
                    <h3
                      className="text-[22px] font-semibold leading-[1.1] text-[#064536]"
                      style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                    >
                      {title}
                    </h3>
                    <p className="mt-2 text-[16px] font-medium leading-[1.4] text-[#3c4041]">{text}</p>
                  </div>
                </div>
                <div className="absolute bottom-2 left-4 right-4 flex items-center justify-center gap-4 text-[#c28b2b]">
                  <span className="h-px flex-1 bg-[#d3b56e]" /><span>◇</span><span className="h-px flex-1 bg-[#d3b56e]" />
                </div>
              </div>
            </article>
          )})}
        </div>

        <div className="mt-3 flex justify-center">
          <a href={buttonHref} className="inline-flex h-[48px] w-full max-w-[340px] items-center justify-between rounded-[7px] border border-[#c79231] bg-[#004a38] px-5 text-[16px] font-bold uppercase text-white shadow">
            {buttonLabel}
            <CSRIcon name="ArrowRight" className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
