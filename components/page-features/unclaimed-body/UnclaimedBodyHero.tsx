"use client";

import { UBSIcon } from "./UnclaimedBodyIcons";
import { imageOrFallback, textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";
const proof = [
  ["ShieldCheck", "Verification"],
  ["FileCheck", "Authorisation"],
  ["People", "Responsible Coordination"],
  ["HeartHands", "Dignified Final Journey"],
] as const;

export default function UnclaimedBodyHero() {
  const section = useWebsiteSection("unclaimed-hero");
  const eyebrow = textOrFallback(section?.eyebrow, "Unclaimed Body Sewa", 60);
  const heroImage = imageOrFallback(section?.image, "/assets/unclaimed-body/first.png");
  const title = textOrFallback(section?.title, "Unclaimed Body Sewa\nWith Dignity &\nResponsible Support", 150);
  const description = textOrFallback(section?.description, "Because every human being deserves a respectful final journey.\n\nMoksha Sewa, an initiative of Namo Gange Trust, supports eligible and legally authorised unclaimed-body cases through responsible coordination, cremation and last-rites assistance, subject to verification and applicable formalities.", 600);
  const buttonLabel = textOrFallback(section?.buttonLabel, "Report Unclaimed Case", 36);
  const buttonHref = section?.buttonHref || "#request-unclaimed-help";

  const titleParts = title.split("\n");

  return (
    <section className="relative overflow-hidden bg-[#fbf6ec]">
      <div className="relative min-h-[600px] w-full overflow-hidden">

        <div
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[55%] bg-no-repeat lg:block"
          style={{
            backgroundImage: `url('${heroImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "right center",
          }}
        />

        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-[1] hidden w-[63%] lg:block"
          style={{
            background:
              "linear-gradient(90deg,#fbf6ec 0%,#fbf6ec 63%,rgba(251,246,236,.96) 74%,rgba(251,246,236,.68) 86%,transparent 100%)",
          }}
        />


        <div
          className="pointer-events-none absolute inset-0 z-0 bg-no-repeat lg:hidden"
          style={{
            backgroundImage: `url('${heroImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "right bottom",
          }}
        />


        <div
          className="pointer-events-none absolute inset-0 z-[1] lg:hidden"
          style={{
            background:
              "linear-gradient(180deg, #fbf6ec 0%, rgba(251,246,236,.98) 38%, rgba(251,246,236,.88) 58%, rgba(251,246,236,.35) 78%, rgba(251,246,236,.06) 100%)",
          }}
        />


        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-6 pt-16 lg:px-0 lg:pt-28">
          <div className="flex items-center gap-3 text-[16px] font-bold uppercase tracking-[0.1em] text-[#0b4b3b]">
            <UBSIcon
              name="Lotus"
              className="h-8 w-8 text-[#b67c22]"
            />

            {eyebrow}
          </div>

          <h1
            className="mt-2 text-[40px] font-medium leading-[1.02] text-[#064335] sm:text-[48px] lg:text-[54px]"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            {titleParts[0]}
            <br />
            {titleParts[1] || ""}
            <br />

            <span className="text-[#b87a16]">
              {titleParts[2] || ""}
            </span>
          </h1>

          <div className="mt-2 flex max-w-[520px] items-center gap-3 text-[#bd8934]">
            <span className="h-px flex-1 bg-[#c59b56]" />

            <UBSIcon
              name="Lotus"
              className="h-7 w-7"
            />

            <span className="h-px flex-1 bg-[#c59b56]" />
          </div>

          <p className="mt-2 max-w-[620px] whitespace-pre-wrap text-[16px] font-medium leading-[1.4] text-[#454a4c]">
            {description}
          </p>

          {/* BUTTONS */}
          <div className="mt-3 flex flex-wrap gap-3">
            <a
              href={buttonHref}
              className="inline-flex h-[56px] min-w-[245px] items-center justify-between rounded-[7px] bg-[#004b39] px-6 text-[16px] font-bold uppercase text-white"
            >
              {buttonLabel}

              <UBSIcon
                name="ArrowRight"
                className="h-6 w-6 text-[#d3a03b]"
              />
            </a>

            <a
              href="/about"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[56px] min-w-[245px] items-center justify-between rounded-[7px] border border-[#c9a66b] bg-[#fffaf2]/90 px-6 text-[16px] font-bold uppercase text-[#16483a]"
            >
              How The Sewa Works

              <UBSIcon
                name="ArrowRight"
                className="h-6 w-6"
              />
            </a>
          </div>

          {/* PROOF ITEMS */}
          <div className="mt-3 grid max-w-[760px] grid-cols-2 gap-2 sm:grid-cols-4">
            {proof.map(([icon, label]) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-[8px] bg-[#fffdf7]/80 px-3 py-3"
              >
                <UBSIcon
                  name={icon}
                  className="h-7 w-7 shrink-0 text-[#0c4c3b]"
                />

                <span className="text-[16px] font-semibold text-[#3d4443]">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* MOBILE IMAGE VISIBILITY SPACE */}
          <div className="h-[260px] lg:hidden" />
        </div>
      </div>
    </section>
  );
}