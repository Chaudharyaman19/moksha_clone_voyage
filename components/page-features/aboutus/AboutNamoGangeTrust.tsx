"use client";

import { FaArrowRight, FaGlobeAmericas, FaShieldAlt, FaUsers } from "react-icons/fa";
import { PiFlowerLotus, PiHandHeart } from "react-icons/pi";
import { itemOrFallback, textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";

const trustValues = [
  { label: "Social Service", icon: PiHandHeart },
  { label: "Community Welfare", icon: FaUsers },
  { label: "Humanitarian Action", icon: FaGlobeAmericas },
  { label: "Responsible Governance", icon: FaShieldAlt },
];

export default function AboutNamoGangeTrust() {
  const section = useWebsiteSection("about-namo-gange");
  const valueItems = trustValues.map((value, index) => ({ ...value, label: itemOrFallback(section?.items, index, { label: value.label }).label || value.label }));

  return (
    <section className="relative overflow-hidden bg-[#faf4e9] px-6 lg:px-8 2xl:px-0">
      <div className="mx-auto grid min-h-[410px] w-full max-w-7xl lg:grid-cols-2">
        <div className="relative min-h-[330px] overflow-hidden lg:min-h-[410px]">
          <video
            src={textOrFallback(section?.image, "/assets/videos/namoGange.mp4", 60)}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#322413]/10 via-transparent to-[#faf4e9]/25" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#1f2f24]/35 to-transparent" />

        </div>

        <div className="relative flex items-center px-6 py-8 sm:px-10 lg:px-12 lg:py-7 xl:px-16">
          <PiFlowerLotus className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rotate-[-20deg] text-[#c5aa70]/15" />
          <PiFlowerLotus className="pointer-events-none absolute -bottom-12 right-5 h-36 w-36 text-[#c5aa70]/12" />

          <div className="relative z-10 w-full">
            <div className="flex items-center gap-3 font-sans text-[16px] font-semibold uppercase text-[#24483d]">
              <span className="h-px w-9 bg-[#c49a4e]" />
              <span>{textOrFallback(section?.eyebrow, "The Organisation Behind Moksha Sewa", 150)}</span>
              <span className="h-px flex-1 bg-[#c49a4e]" />
            </div>

            <h2 className="mt-4 font-sans text-[24px] font-semibold leading-[1.05] text-[#123d31] sm:text-[30px]">
              <span className="whitespace-pre-line">{textOrFallback(section?.title, "Rooted in Service.\nDriven by Responsibility.", 150)}</span>
            </h2>

            <div className="mt-4 flex items-center gap-2 text-[#b98735]">
              <span className="h-px w-16 bg-[#cba45c]" />
              <PiFlowerLotus className="h-4 w-4" />
              <span className="h-px w-16 bg-[#cba45c]" />
            </div>

            <div className="mt-4 max-w-[590px] space-y-3 text-[13px] leading-[1.5] text-[#31463f] sm:text-[14px]">
              <p>
                {textOrFallback(section?.description, "Moksha Sewa is an initiative of Namo Gange Trust, an organisation committed to social service, community welfare and meaningful humanitarian action.", 600)}
              </p>
              <p>
                {textOrFallback(section?.secondaryDescription, "Through Moksha Sewa, Namo Gange Trust extends this commitment to one of the most sensitive moments of human life - the final journey.", 600)}
              </p>
            </div>

            <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-4">
                {valueItems.map(({ label, icon: Icon }) => (
                  <div key={label} className="text-center">
                    <span className="mx-auto grid h-12 w-12 place-items-center border border-[#d8c59e] bg-[#fbf7ef]/75 text-[#174a3b] shadow-[0_3px_7px_rgba(66,52,31,.08)]">
                      <Icon className="h-7 w-7" />
                    </span>
                    <span className="mx-auto mt-1.5 block max-w-[100px] text-[10px] font-semibold leading-[1.15] text-[#263e36] sm:text-[11px]">{label}</span>
                    <span className="mx-auto mt-2 block h-px w-5 bg-[#c79a48]" />
                  </div>
                ))}
              </div>

              <a
                href={textOrFallback(section?.buttonHref, "https://www.namogange.org/", 60)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 shrink-0 items-center justify-center gap-4 bg-[#0d4939] px-5 font-serif text-[14px] text-white shadow-[0_5px_10px_rgba(20,63,48,.25)] transition hover:bg-[#093c2f]"
              >
                {textOrFallback(section?.buttonLabel, "Know Namo Gange Trust", 60)}
                <FaArrowRight className="h-3 w-3 text-[#d2a342]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
