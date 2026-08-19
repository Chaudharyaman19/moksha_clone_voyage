"use client";

import { PartnershipIcon } from "./PartnershipIcons";

const types = [
  ["People", "Purpose-Driven Partnerships", "We collaborate with organisations that share our commitment to dignity and humanitarian service."],
  ["ShieldCheck", "Clear Roles & Responsibility", "Partnerships are built on transparency, defined roles and mutual understanding."],
  ["Handshake", "Responsible & Accountable", "We ensure all collaboration follows due process, privacy and accountability standards."],
  ["HeartHands", "Mission First", "Every partnership supports our mission to ensure dignity in the final journey of those in need."],
] as const;

export default function PartnershipEnquiry() {
  return (
    <section id="partnership-enquiry" className="bg-[#fbf7ef] px-5 py-9">
      <div className="mx-auto grid max-w-[1344px] grid-cols-1 gap-7 lg:grid-cols-[44%_56%]">
        <div className="px-2">
          <p className="text-[16px] font-bold uppercase tracking-[0.08em] text-[#b37a20]"><span className="mr-3">—</span> Start a Conversation</p>
          <h2 className="mt-5 text-[42px] font-medium leading-[1.03] text-[#064335] sm:text-[50px]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            Let’s Explore What
            <br />
            We Can Do Together.
          </h2>
          <p className="mt-5 max-w-[520px] text-[16px] font-medium leading-[1.5] text-[#444a49]">
            Tell us about your organisation and how you would like to collaborate. Our team will review your enquiry and get back to you.
          </p>

          <div className="mt-6 space-y-4">
            {types.map(([icon, title, text]) => (
              <div key={title} className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#004b39] text-[#d3a03a]">
                  <PartnershipIcon name={icon} className="h-8 w-8" />
                </span>
                <div>
                  <h3 className="text-[16px] font-bold text-[#0b4a3b]">{title}</h3>
                  <p className="mt-1 text-[16px] leading-[1.4] text-[#505554]">{text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[8px] bg-[#004b39] px-5 py-4 text-white">
            <p className="text-[16px] leading-[1.45]">Submitting an enquiry does not constitute acceptance, affiliation or formal partnership with Moksha Sewa or Namo Gange Trust.</p>
          </div>
        </div>

        <form className="rounded-[14px] bg-white p-6 shadow-[0_8px_25px_rgba(50,38,20,.08)]">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              ["Full Name", "Enter your full name"],
              ["Organisation / Institution", "Enter organisation / institution"],
              ["Official Email", "Enter official email address"],
              ["Phone Number", "Enter phone number"],
            ].map(([label, placeholder]) => (
              <label key={label} className="block">
                <span className="mb-2 block text-[16px] font-semibold text-[#222]">{label} <span className="text-red-600">*</span></span>
                <input placeholder={placeholder} className="h-[50px] w-full rounded-[6px] border border-[#e0ccb0] px-4 text-[16px] outline-none focus:border-[#a97a31]" />
              </label>
            ))}

            <label className="block">
              <span className="mb-2 block text-[16px] font-semibold text-[#222]">Partnership Interest <span className="text-red-600">*</span></span>
              <select className="h-[50px] w-full rounded-[6px] border border-[#e0ccb0] bg-white px-4 text-[16px] text-[#777]">
                <option>Select partnership interest</option>
                <option>Institutional Collaboration</option>
                <option>CSR Partnership</option>
                <option>Volunteer Network</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-[16px] font-semibold text-[#222]">City / Area</span>
              <input placeholder="Enter city / area" className="h-[50px] w-full rounded-[6px] border border-[#e0ccb0] px-4 text-[16px] outline-none focus:border-[#a97a31]" />
            </label>
          </div>

          <label className="mt-4 block">
            <span className="mb-2 block text-[16px] font-semibold text-[#222]">Message / Partnership Proposal <span className="text-red-600">*</span></span>
            <textarea placeholder="Tell us about your organisation and how you would like to collaborate..." className="h-[110px] w-full resize-none rounded-[6px] border border-[#e0ccb0] p-4 text-[16px] outline-none focus:border-[#a97a31]" />
          </label>

          <label className="mt-4 flex gap-3 text-[16px] leading-[1.45] text-[#3e4443]">
            <input type="checkbox" className="mt-1 h-5 w-5 shrink-0" />
            <span>I consent to being contacted regarding this enquiry and acknowledge the Privacy Policy.</span>
          </label>

          <button type="submit" className="mt-5 inline-flex h-[52px] w-full items-center justify-between rounded-[6px] bg-[#004b39] px-6 text-[16px] font-bold uppercase text-white">
            Submit Partnership Enquiry
            <PartnershipIcon name="ArrowRight" className="h-5 w-5" />
          </button>

          <p className="mt-3 text-center text-[16px] text-[#666]">Your information is secure and will only be used for partnership communication.</p>
        </form>
      </div>
    </section>
  );
}
