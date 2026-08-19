"use client";

import { PartnershipIcon } from "./PartnershipIcons";

export default function PartnershipFooter() {
  return (
    <footer className="bg-[#001f1a] px-5 py-6 text-white">
      <div className="mx-auto grid max-w-[1344px] grid-cols-1 gap-7 lg:grid-cols-[26%_16%_18%_18%_22%]">
        <div>
          <PartnershipIcon name="Lotus" className="h-14 w-14 text-[#d2a03b]" />
          <h3 className="mt-2 text-[26px] font-bold">MOKSHA SEWA</h3>
          <p className="mt-1 text-[16px] text-[#ddd9cf]">A Namo Gange Trust Initiative</p>
          <p className="mt-4 text-[16px] leading-[1.45] text-[#c9c6bf]">We stand with compassion, coordination and dignity so no final journey is forgotten.</p>
        </div>
        {[
          ["Quick Links", ["Home", "About Us", "Gallery", "Blog", "Contact Us"]],
          ["Our Services", ["Request Sewa Help", "Transport", "Cremation", "Ritual Material Support", "Priest Guidance", "Family Guidance"]],
          ["Our Initiatives", ["Unclaimed Bodies Support", "Volunteer Program", "Awareness & Outreach"]],
        ].map(([heading, items]) => (
          <div key={heading as string}>
            <h4 className="text-[16px] font-bold uppercase text-[#d2a03b]">{heading}</h4>
            <ul className="mt-4 space-y-2 text-[16px] text-[#d9d6ce]">
              {(items as string[]).map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
        <div>
          <h4 className="text-[16px] font-bold uppercase text-[#d2a03b]">Need Sewa Support?</h4>
          <div className="mt-4 rounded-[8px] border border-[#6e674a] bg-[#0a3d34] p-4">
            <p className="text-[16px] leading-[1.4] text-[#e4e0d6]">Request help or connect with our team.</p>
            <a href="#" className="mt-4 inline-flex h-[42px] w-full items-center justify-between rounded-[5px] bg-[#d2a03b] px-4 text-[16px] font-bold uppercase text-[#073a30]">Send Request<PartnershipIcon name="ArrowRight" className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
