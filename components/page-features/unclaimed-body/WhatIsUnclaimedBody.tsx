import { UBSIcon } from "./UnclaimedBodyIcons";

export default function WhatIsUnclaimedBody() {
  return (
    <section className="relative overflow-hidden bg-[#faf6ef] px-5 py-9">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-8 lg:grid-cols-[58%_42%]">
        <div className="relative rounded-[16px] bg-[#fffaf2] px-8 py-8">
          <div className="flex items-center gap-4 text-[#ad7421]">
            <span className="h-px w-14 bg-[#c28d35]" />
            <span className="text-[16px] font-bold uppercase tracking-[0.1em]">Understanding The Sewa</span>
          </div>
          <h2
            className="mt-5 text-[42px] font-medium leading-[1.03] text-[#064335] sm:text-[52px]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            What Is Unclaimed
            <br />
            Body Sewa?
          </h2>
          <p className="mt-6 max-w-[720px] text-[17px] font-medium leading-[1.55] text-[#41484a]">
            In some circumstances, a deceased person may remain unclaimed or
            may have no available family or support system to undertake the
            final journey.
          </p>
          <p className="mt-4 max-w-[720px] text-[17px] font-medium leading-[1.55] text-[#41484a]">
            Moksha Sewa seeks to support eligible cases after the required legal
            or administrative process and appropriate authorisation from the
            competent authority.
          </p>
        </div>

        <div className="rounded-[16px] border border-[#dfd3c2] bg-[#f0f1e9] px-8 py-8">
          <div className="flex items-center gap-4">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-[#004b39] text-[#d6a139]">
              <UBSIcon name="ShieldCheck" className="h-10 w-10" />
            </span>
            <div>
              <p className="text-[16px] font-bold uppercase tracking-[0.08em] text-[#b27b20]">Important Information</p>
              <h3 className="mt-1 text-[24px] font-semibold text-[#064335]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                Moksha Sewa provides humanitarian assistance.
              </h3>
            </div>
          </div>
          <p className="mt-5 text-[16px] font-medium leading-[1.55] text-[#454b4a]">
            It does not determine whether a body is legally “unclaimed” or
            replace the authority of police, hospitals, municipal bodies or
            other competent authorities.
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[14px] bg-[#004735]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-[14px] h-[4px] bg-[#c69330]" />
    </section>
  );
}
