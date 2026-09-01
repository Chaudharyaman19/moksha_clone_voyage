"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaHandshake, FaUsers } from "react-icons/fa";
import { PiFlowerLotus, PiHandHeart, PiHandsPraying } from "react-icons/pi";
import { imageOrFallback, itemOrFallback, textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";

const actions = [
  { label: "Be a\nVolunteer", icon: FaUsers },
  { label: "Partner\nWith Us", icon: FaHandshake },
  { label: "Support the\nMission", icon: PiHandHeart },
];

export default function HeartOfMoksha() {
  const section = useWebsiteSection("about-heart");
  const actionItems = actions.map((action, index) => ({ ...action, label: itemOrFallback(section?.items, index, { label: action.label }).label || action.label }));

  return (
    <section className="relative min-h-[620px] w-full overflow-hidden bg-[#003a2f] sm:min-h-[560px] lg:aspect-[4/1] lg:min-h-0">
        <Image
          src={imageOrFallback(section?.image, "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165038/moksha-sewa/assets/about-reference/heart-of-moksha-sewa.png")}
          alt="Moksha Sewa volunteers beside a sacred river ghat at sunset"
          fill
          sizes="(max-width: 1344px) 100vw, 1344px"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003b2f]/45 via-transparent to-transparent" />

        <div className="absolute inset-0 z-10">
          <div className="mx-auto flex h-full w-full max-w-7xl items-center px-5 py-10 sm:px-6 lg:px-8 lg:py-0 2xl:px-0">
            <div className="flex h-full w-full items-center text-left text-white lg:w-[61%] max-lg:bg-[#003a2f]/82 max-lg:p-5 max-lg:backdrop-blur-[1px] sm:max-lg:p-7">
              <div className="flex w-full items-center justify-start gap-[4%]">
            <div className="hidden shrink-0 items-center gap-5 lg:flex">
              <PiHandsPraying className="h-16 w-16 text-[#d3a13e]" />
              <span className="h-24 w-px bg-[#d0a14d]/75" />
            </div>

            <div className="flex w-full max-w-[650px] flex-col items-start text-left">
              <p className="font-sans text-[16px] font-semibold uppercase text-[#d8a43d]">
                {textOrFallback(section?.eyebrow, "The Heart of Moksha Sewa", 60)}
              </p>

              <div className="mt-2 flex w-full max-w-[260px] items-center justify-start gap-2 text-[#cda24a] sm:max-w-none">
                <span className="h-px flex-1 bg-[#cda24a]/65 sm:w-24 sm:flex-none" />
                <PiFlowerLotus className="h-5 w-5" />
                <span className="h-px flex-1 bg-[#cda24a]/65 sm:w-24 sm:flex-none" />
              </div>

              <h2 className="mt-3 w-full text-left font-sans text-[26px] font-semibold leading-tight sm:text-[30px]">
                <span className="whitespace-pre-line">{textOrFallback(section?.title, "When Someone Has No One,\nHumanity Must Stand Beside Them.", 150)}</span>
              </h2>

              <p className="mt-4 w-full max-w-[610px] text-left text-[16px] leading-7 text-white/90">
                {textOrFallback(section?.description, "Because the final journey is not only about how life ends. It is about how we choose to stand beside one another until the very end.", 600)}
              </p>

              <div className="mt-5 flex w-full flex-col items-start gap-5 xl:flex-row xl:items-center xl:justify-start">
                <Link href={textOrFallback(section?.buttonHref, "/volunteer/register", 60)} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 w-fit items-center gap-4 bg-[#dda546] px-6 text-[16px] font-bold uppercase tracking-[0.08em] text-[#113e31] shadow-[0_4px_8px_rgba(0,0,0,.2)] transition hover:bg-[#ebba61]">
                  {textOrFallback(section?.buttonLabel, "Join the Mission", 60)}
                  <FaArrowRight className="h-3 w-3" />
                </Link>

                <div className="grid w-full grid-cols-3 items-stretch sm:w-auto">
                  {actionItems.map(({ label, icon: Icon }, index) => (
                    <div key={label} className={`flex min-w-0 flex-col items-center px-2 text-center sm:min-w-[92px] sm:px-3 ${index ? "border-l border-[#d4aa53]/35" : ""}`}>
                      <span className="grid h-9 w-9 place-items-center border border-[#d0a346] text-[#d0a346]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="mt-1 whitespace-pre-line text-[13px] leading-[1.15] text-white sm:text-[16px]">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>

        <PiFlowerLotus className="pointer-events-none absolute -bottom-10 -left-8 h-36 w-36 text-[#d0a14d]/[.07]" />
    </section>
  );
}
