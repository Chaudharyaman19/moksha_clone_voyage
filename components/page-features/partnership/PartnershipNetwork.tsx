"use client";

import Image from "next/image";
import { PartnershipIcon } from "./PartnershipIcons";

const groups = [
  ["Hospital", "Hospitals &\nInstitutions", "Explore appropriate referral and coordination pathways for eligible cases."],
  ["Community", "NGOs &\nCommunity Networks", "Strengthen community reach, referrals and humanitarian coordination."],
  ["Gear", "Service & Professional\nPartners", "Contribute relevant logistics, final-journey services, professional expertise or operational capabilities."],
  ["Volunteer", "Volunteer &\nSupport Networks", "Create suitable opportunities for organised participation and community Sewa."],
] as const;

export default function PartnershipNetwork() {
  return (
    <section id="partnership-network" className="bg-[#fbf8f2] px-5 py-9">
      <div className="mx-auto max-w-[1344px] text-center">
        <p className="text-[16px] font-bold uppercase tracking-[0.08em] text-[#b47b22]">Work Together</p>
        <h2 className="mt-3 text-[38px] font-medium text-[#064335] sm:text-[46px]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
          Different Strengths. One Human Purpose.
        </h2>
        <p className="mx-auto mt-4 max-w-[780px] text-[16px] font-medium leading-[1.5] text-[#464c4d]">
          Moksha Sewa seeks to work with organisations and professionals whose
          capabilities, services or networks can responsibly strengthen humanitarian support.
        </p>

        <div className="mt-8 grid grid-cols-1 items-center gap-4 md:grid-cols-2 xl:grid-cols-[1fr_76px_1fr_130px_1fr_76px_1fr]">
          {groups.map(([icon, title, text], index) => (
            <div key={title} className="contents">
              <div className="text-center">
                <span className="mx-auto grid h-[92px] w-[92px] place-items-center rounded-full border border-[#d5c29e] bg-[#fffdf8] text-[#0b4b3b]">
                  <PartnershipIcon name={icon} className="h-12 w-12" />
                </span>
                <h3 className="mt-3 whitespace-pre-line text-[18px] font-bold leading-[1.15] text-[#0a4b3b]">{title}</h3>
                <p className="mt-3 text-[16px] leading-[1.4] text-[#4d5352]">{text}</p>
              </div>

              {index < groups.length - 1 && index !== 1 && (
                <div className="hidden items-center xl:flex">
                  <span className="h-px flex-1 border-t border-dashed border-[#a7a182]" />
                  <span className="grid h-7 w-7 place-items-center rounded-full border border-[#0a5a44] bg-[#fbf8f2] text-[#0a5a44]">↔</span>
                </div>
              )}

              {index === 1 && (
                <div className="hidden xl:flex items-center justify-center">
                  <span className="grid h-[112px] w-[112px] place-items-center rounded-full bg-[#004b39] text-white shadow-[0_7px_18px_rgba(0,62,45,.16)]">
                    <div>
                      <Image src="/assets/footer-moksha-mark.png" alt="Moksha Sewa" width={48} height={48} className="mx-auto h-auto w-[48px]" />
                      <p className="mt-2 text-[16px] font-bold">MOKSHA SEWA</p>
                    </div>
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <a href="#partnership-enquiry" className="mx-auto mt-7 inline-flex h-[50px] min-w-[265px] items-center justify-between rounded-[6px] bg-[#004b39] px-6 text-[16px] font-bold uppercase text-white">
          Explore a Partnership
          <PartnershipIcon name="ArrowRight" className="h-5 w-5" />
        </a>

        <div className="mx-auto mt-5 flex max-w-[850px] items-start gap-3 rounded-[8px] bg-[#f1efe8] px-5 py-4 text-left">
          <PartnershipIcon name="ShieldCheck" className="h-8 w-8 shrink-0 text-[#b37b25]" />
          <p className="text-[16px] leading-[1.45] text-[#4a504f]">
            Potential partner categories do not imply an existing affiliation, endorsement or formal partnership with any institution or authority.
          </p>
        </div>
      </div>
    </section>
  );
}
