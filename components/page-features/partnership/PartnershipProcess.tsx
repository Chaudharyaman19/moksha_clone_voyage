"use client";

import { PartnershipIcon } from "./PartnershipIcons";

const steps = [
  ["01", "Chat", "Connect", "Tell us about your organisation and interest."],
  ["02", "Search", "Explore", "We assess mission and collaboration alignment."],
  ["03", "Clipboard", "Define", "Scope, responsibilities and processes are clarified."],
  ["04", "Handshake", "Collaborate", "Approved activities proceed within the agreed framework."],
] as const;

export default function PartnershipProcess() {
  return (
    <section className="bg-[#fbf8f2] px-5 py-9">
      <div className="mx-auto max-w-[1344px] rounded-[12px] border border-[#d9c59e] bg-[#fffdf8] px-6 py-7">
        <div className="text-center">
          <p className="text-[16px] font-bold uppercase tracking-[0.08em] text-[#b47c24]">A Responsible Process</p>
          <h2 className="mt-2 text-[38px] font-medium text-[#064335] sm:text-[46px]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            From Conversation to Collaboration.
          </h2>
          <div className="mt-3 flex justify-center gap-3 text-[#c18f37]"><span className="h-px w-16 bg-[#c18f37]" /><PartnershipIcon name="Lotus" className="h-6 w-6" /><span className="h-px w-16 bg-[#c18f37]" /></div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map(([no, icon, title, text], index) => (
            <div key={no} className="relative text-center">
              {index < steps.length - 1 && (
                <span className="absolute left-[70%] top-[48px] hidden h-px w-[60%] border-t border-dashed border-[#b2a684] xl:block" />
              )}
              <span className="absolute left-[22%] top-[-7px] grid h-7 w-7 place-items-center rounded-full bg-[#c88a27] text-[16px] font-bold text-white">{no}</span>
              <span className="mx-auto grid h-[92px] w-[92px] place-items-center rounded-full border-[3px] border-[#d8c394] bg-[#fff] text-[#0b4b3b]">
                <PartnershipIcon name={icon} className="h-11 w-11" />
              </span>
              <h3 className="mt-3 text-[20px] font-bold text-[#0a4a3a]">{title}</h3>
              <p className="mt-2 text-[16px] leading-[1.4] text-[#505655]">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-7 grid grid-cols-4 overflow-hidden rounded-[7px] border border-[#c99d4e] bg-[#004b39] text-white">
          {["CONNECT", "EXPLORE", "DEFINE", "COLLABORATE"].map((x) => (
            <div key={x} className="flex h-[46px] items-center justify-center border-l border-[#8b8253] first:border-l-0 text-[16px] font-bold">{x}</div>
          ))}
        </div>

        <div className="mx-auto mt-5 flex max-w-[760px] items-center gap-3 rounded-[8px] bg-[#f1efe8] px-5 py-4">
          <PartnershipIcon name="ShieldCheck" className="h-8 w-8 shrink-0 text-[#b27b23]" />
          <p className="text-[16px] text-[#4c5251]">Submitting an enquiry does not itself create or imply a formal partnership.</p>
        </div>
      </div>
    </section>
  );
}
