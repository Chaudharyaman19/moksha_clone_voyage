import { UBSIcon } from "./UnclaimedBodyIcons";

export default function WhatIsUnclaimedBody() {
  return (
    <section className="relative overflow-hidden bg-[#faf6ef] px-5 pb-5 pt-2">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 lg:grid-cols-[58%_42%]">
        <div className="relative rounded-[16px] bg-[#fffaf2] px-6 py-2">
          <div className="flex items-center gap-4 text-[#ad7421]">
            <span className="h-px w-14 bg-[#c28d35]" />
            <span className="text-[16px] font-bold uppercase tracking-[0.1em]">Understanding The Sewa</span>
          </div>
          <h2
            className="mt-1.5 text-[38px] font-medium leading-[1] text-[#064335] sm:text-[46px]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            What Is Unclaimed
            <br />
            Body Sewa?
          </h2>
          <p className="mt-1.5 max-w-[720px] text-[16px] font-medium leading-[1.3] text-[#41484a]">
            In some circumstances, a deceased person may remain unclaimed or
            may have no available family or support system to undertake the
            final journey.
          </p>
          <p className="mt-1 max-w-[720px] text-[16px] font-medium leading-[1.3] text-[#41484a]">
            Moksha Sewa seeks to support eligible cases after the required legal
            or administrative process and appropriate authorisation from the
            competent authority.
          </p>
        </div>

        <div className="rounded-[16px] border border-[#dfd3c2] bg-[#f0f1e9] px-6 py-2">
          <div className="flex items-center gap-4">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-[#004b39] text-[#d6a139]">
              <UBSIcon name="ShieldCheck" className="h-8 w-8" />
            </span>
            <div>
              <p className="text-[16px] font-bold uppercase tracking-[0.08em] text-[#b27b20]">Important Information</p>
              <h3 className="mt-0.5 text-[21px] font-semibold leading-[1.15] text-[#064335]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
                Moksha Sewa provides humanitarian assistance.
              </h3>
            </div>
          </div>
          <p className="mt-1.5 text-[16px] font-medium leading-[1.3] text-[#454b4a]">
            It does not determine whether a body is legally “unclaimed” or
            replace the authority of police, hospitals, municipal bodies or
            other competent authorities.
          </p>
          <ul className="mt-1.5 grid gap-1 text-[16px] leading-[1.25] text-[#454b4a]">
            <li className="flex gap-2"><span className="text-[#b27b20]">•</span><span>Support proceeds only after the required verification and authorisation from the competent authority.</span></li>
            <li className="flex gap-2"><span className="text-[#b27b20]">•</span><span>Police, hospital, municipal and legal procedures must be completed wherever applicable.</span></li>
            <li className="flex gap-2"><span className="text-[#b27b20]">•</span><span>Case information and documents are handled responsibly, with privacy and dignity.</span></li>
          </ul>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[14px] bg-[#004735]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-[14px] h-[4px] bg-[#c69330]" />
    </section>
  );
}
