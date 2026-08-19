"use client";

import { PartnershipIcon } from "./PartnershipIcons";

const principles = [
  ["HeartHands", "Dignity First", "Human dignity remains central."],
  ["Clipboard", "Defined Roles", "Roles and expectations are clearly understood."],
  ["Lock", "Privacy & Accountability", "Information is handled responsibly."],
  ["People", "Responsible Representation", "Partnerships are represented only after approval."],
] as const;

export default function PartnershipResponsibility() {
  return (
    <section className="bg-[#fbf8f2] px-5 py-9">
      <div className="mx-auto max-w-[1344px]">
        <div className="text-center">
          <p className="text-[16px] font-bold uppercase tracking-[0.08em] text-[#b27a22]">Trust &amp; Responsibility</p>
          <h2 className="mt-2 text-[36px] font-medium text-[#064335] sm:text-[44px]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            Partnerships Built on Purpose. Guided by Responsibility.
          </h2>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {principles.map(([icon, title, text]) => (
            <div key={title} className="flex items-center gap-4 px-4">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#004b39] text-[#d4a03a]">
                <PartnershipIcon name={icon} className="h-9 w-9" />
              </span>
              <div>
                <h3 className="text-[16px] font-bold text-[#0b4b3b]">{title}</h3>
                <p className="mt-1 text-[16px] leading-[1.4] text-[#555b59]">{text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-7 rounded-[10px] bg-[#004132] px-6 py-7 text-white">
          <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-[28%_44%_28%]">
            <div className="text-center">
              <PartnershipIcon name="Lotus" className="mx-auto h-14 w-14 text-[#d1a03b]" />
              <h3 className="mt-2 text-[22px] font-bold">MOKSHA SEWA</h3>
              <p className="text-[16px] text-[#e7e1d8]">A Namo Gange Trust Initiative</p>
            </div>
            <div className="border-y border-[#7d7958] py-5 text-center lg:border-x lg:border-y-0 lg:px-7 lg:py-0">
              <h3 className="text-[20px] font-bold">MOKSHA SEWA</h3>
              <p className="mx-auto mt-3 max-w-[520px] text-[16px] leading-[1.45] text-[#ece8df]">
                Moksha Sewa operates within the institutional framework of Namo Gange Trust, bringing responsible processes and humanitarian service together.
              </p>
              <div className="mt-4 flex justify-center gap-6 text-[#d2a03c]">
                <PartnershipIcon name="Building" className="h-9 w-9" />
                <PartnershipIcon name="ShieldCheck" className="h-9 w-9" />
                <PartnershipIcon name="Handshake" className="h-9 w-9" />
                <PartnershipIcon name="HeartHands" className="h-9 w-9" />
              </div>
            </div>
            <div className="text-center">
              <PartnershipIcon name="Lotus" className="mx-auto h-14 w-14 text-[#d1a03b]" />
              <h3 className="mt-2 text-[22px] font-bold">NAMO GANGE TRUST</h3>
              <p className="text-[16px] text-[#e7e1d8]">A Journey to Healthy World...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
