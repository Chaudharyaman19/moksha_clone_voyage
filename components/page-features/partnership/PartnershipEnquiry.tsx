"use client";

import { FormEvent, useState } from "react";
import { websiteSubmissionsApi } from "@/lib/websiteSubmissionsApi";
import { PartnershipIcon } from "./PartnershipIcons";

const types = [
  ["People", "Purpose-Driven Partnerships", "We collaborate with organisations that share our commitment to dignity and humanitarian service."],
  ["ShieldCheck", "Clear Roles & Responsibility", "Partnerships are built on transparency, defined roles and mutual understanding."],
  ["Handshake", "Responsible & Accountable", "We ensure all collaboration follows due process, privacy and accountability standards."],
  ["HeartHands", "Mission First", "Every partnership supports our mission to ensure dignity in the final journey of those in need."],
] as const;

export default function PartnershipEnquiry() {
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setSubmitState("loading");
    setSubmitMessage("");
    try {
      await websiteSubmissionsApi.partnership({
        name: data.get("name"), organization: data.get("organization"), email: data.get("email"),
        phone: data.get("phone"), interest: data.get("interest"), city: data.get("city"),
        message: data.get("message"), consent: data.get("consent") === "on",
      });
      form.reset();
      setSubmitState("success");
      setSubmitMessage("Thank you. Your partnership enquiry has been received.");
    } catch (error) {
      setSubmitState("error");
      setSubmitMessage(error instanceof Error ? error.message : "Could not submit your enquiry.");
    }
  }
  return (
    <section id="partnership-enquiry" className="bg-[#fbf7ef] px-5 py-5">
      <div className="mx-auto grid max-w-[1344px] grid-cols-1 gap-5 lg:grid-cols-[44%_56%]">
        <div className="px-2">
          <p className="text-[16px] font-bold uppercase tracking-[0.08em] text-[#b37a20]"><span className="mr-3">—</span> Start a Conversation</p>
          <h2 className="mt-3 text-[42px] font-medium leading-[1.03] text-[#064335] sm:text-[50px]" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            Let’s Explore What
            <br />
            We Can Do Together.
          </h2>
          <p className="mt-3 max-w-[520px] text-[16px] font-medium leading-[1.45] text-[#444a49]">
            Tell us about your organisation and how you would like to collaborate. Our team will review your enquiry and get back to you.
          </p>

          <div className="mt-4 space-y-3">
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

          <div className="mt-4 rounded-[8px] bg-[#004b39] px-5 py-3 text-white">
            <p className="text-[16px] leading-[1.45]">Submitting an enquiry does not constitute acceptance, affiliation or formal partnership with Moksha Sewa or Namo Gange Trust.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[14px] bg-white p-5 shadow-[0_8px_25px_rgba(50,38,20,.08)]">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {[
              ["name", "Full Name", "Enter your full name", "text"],
              ["organization", "Organisation / Institution", "Enter organisation / institution", "text"],
              ["email", "Official Email", "Enter official email address", "email"],
              ["phone", "Phone Number", "Enter 10-digit phone number", "tel"],
            ].map(([name, label, placeholder, type]) => (
              <label key={label} className="block">
                <span className="mb-1.5 block text-[16px] font-semibold text-[#222]">{label} <span className="text-red-600">*</span></span>
                <input
                  name={name}
                  type={type}
                  required
                  placeholder={placeholder}
                  maxLength={name === "phone" ? 10 : undefined}
                  inputMode={name === "phone" ? "numeric" : undefined}
                  onInput={
                    name === "phone"
                      ? (e) => {
                          e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "").slice(0, 10);
                        }
                      : undefined
                  }
                  className="h-[50px] w-full rounded-[6px] border border-[#e0ccb0] px-4 text-[16px] outline-none focus:border-[#a97a31]"
                />
              </label>
            ))}

            <label className="block">
              <span className="mb-1.5 block text-[16px] font-semibold text-[#222]">Partnership Interest <span className="text-red-600">*</span></span>
              <select name="interest" required defaultValue="" className="h-[50px] w-full rounded-[6px] border border-[#e0ccb0] bg-white px-4 text-[16px] text-[#777]">
                <option value="" disabled>Select partnership interest</option>
                <option>Institutional Collaboration</option>
                <option>CSR Partnership</option>
                <option>Volunteer Network</option>
              </select>
            </label>

            <label className="block">
              <span className="mb-1.5 block text-[16px] font-semibold text-[#222]">City / Area</span>
              <input name="city" placeholder="Enter city / area" className="h-[50px] w-full rounded-[6px] border border-[#e0ccb0] px-4 text-[16px] outline-none focus:border-[#a97a31]" />
            </label>
          </div>

          <label className="mt-3 block">
            <span className="mb-1.5 block text-[16px] font-semibold text-[#222]">Message / Partnership Proposal <span className="text-red-600">*</span></span>
            <textarea name="message" required placeholder="Tell us about your organisation and how you would like to collaborate..." className="h-[92px] w-full resize-none rounded-[6px] border border-[#e0ccb0] p-4 text-[16px] outline-none focus:border-[#a97a31]" />
          </label>

          <label className="mt-3 flex gap-3 text-[16px] leading-[1.4] text-[#3e4443]">
            <input name="consent" required type="checkbox" className="mt-1 h-5 w-5 shrink-0" />
            <span>I consent to being contacted regarding this enquiry and acknowledge the Privacy Policy.</span>
          </label>

          <button type="submit" disabled={submitState === "loading"} className="mt-4 inline-flex h-[50px] w-full items-center justify-between rounded-[6px] bg-[#004b39] px-6 text-[16px] font-bold uppercase text-white disabled:opacity-60">
            {submitState === "loading" ? "Submitting..." : "Submit Partnership Enquiry"}
            <PartnershipIcon name="ArrowRight" className="h-5 w-5" />
          </button>

          <p className="mt-2 text-center text-[16px] text-[#666]">Your information is secure and will only be used for partnership communication.</p>
          {submitMessage && <p role="status" className={`mt-2 text-center text-[16px] ${submitState === "error" ? "text-red-700" : "text-[#0a4b3b]"}`}>{submitMessage}</p>}
        </form>
      </div>
    </section>
  );
}
