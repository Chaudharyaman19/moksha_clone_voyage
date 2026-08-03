"use client";

import React, { useState } from "react";
import Link from "next/link";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import {
  FaPhoneAlt,
  FaHandsHelping,
  FaShieldAlt,
  FaCheckCircle,
  FaSearchLocation,
} from "react-icons/fa";
import { PiFlowerLotus } from "react-icons/pi";
import { requestApi } from "@/lib/requestApi";
import { ApiRequestError } from "@/lib/api";

const inputClass =
  "w-full rounded-lg border border-[#E4D5BE] bg-[#FBF8F3] px-3 py-3 text-sm text-[#2C1810] placeholder:text-[#A8937E] transition-all focus:border-[#C9A574] focus:outline-none focus:ring-2 focus:ring-[#C9A574]/40";
const labelClass = "mb-1 block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#4A3428]";

const EMPTY_FORM = {
  requesterName: "",
  requesterPhone: "",
  requesterEmail: "",
  relation: "",
  deceasedName: "",
  deceasedAge: "",
  deceasedGender: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
  notes: "",
};

function RequestHelp() {
  const [isEmergency, setIsEmergency] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ requestNo: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!consent) {
      setError("Please confirm consent to share these details so our team can help.");
      return;
    }

    setIsSubmitting(true);
    try {
      const request = await requestApi.submit({
        type: isEmergency ? "EMERGENCY" : "NORMAL",
        requester: {
          name: form.requesterName,
          phone: form.requesterPhone,
          email: form.requesterEmail || undefined,
          relation: form.relation,
        },
        deceased: {
          name: form.deceasedName,
          age: form.deceasedAge ? Number(form.deceasedAge) : undefined,
          gender: form.deceasedGender || undefined,
        },
        location: {
          address: form.address,
          city: form.city,
          state: form.state,
          pincode: form.pincode,
        },
        notes: form.notes || undefined,
        consent: { dataProcessing: consent, publishStory: false },
      });
      setResult({ requestNo: request.requestNo });
      setForm(EMPTY_FORM);
      setConsent(false);
    } catch (err) {
      setError(err instanceof ApiRequestError ? err.message : "Something went wrong. Please call our helpline instead.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FBF8F3] text-[#2C1810]">
      <Topbar />
      <Navbar />

      <main>
        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden bg-[#F4EDE3] pb-6 pt-28 lg:pt-32">
          <div className="pointer-events-none absolute -left-6 top-1/2 hidden -translate-y-1/2 select-none font-serif text-[220px] leading-none text-[#8B6A3E]/[0.06] lg:block">
            सेवा
          </div>

          <div className="relative mx-auto w-full max-w-4xl px-4 text-center sm:px-6 xl:px-0">
            <div className="mb-3 inline-flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B6A3E] text-white">
                <FaHandsHelping className="h-4 w-4" />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8B6A3E]">
                Free · Confidential · No Payment Ever
              </span>
            </div>

            <h1 className="font-serif leading-[1.05]">
              <span className="block text-[32px] text-[#2C1810] sm:text-[42px] lg:text-[48px]">
                Request Cremation
              </span>
              <span className="mt-1 block text-[38px] italic text-[#8B6A3E] sm:text-[48px] lg:text-[54px]">
                Assistance
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#4F3A2D] sm:text-[15px]">
              Moksha Sewa never charges a family for this help. Share a few details below and our
              team will call you back to guide you through every step, free of cost.
            </p>

            <a
              href="tel:+919654900525"
              className="mt-5 inline-flex items-center gap-2.5 rounded-2xl border border-white/40 bg-[#2C1810]/90 px-5 py-3 text-white shadow-[0_16px_40px_rgba(44,24,16,0.25)]"
            >
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[#C9A574] text-[#2C1810]">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C9A574]/50" />
                <FaPhoneAlt className="relative h-3.5 w-3.5" />
              </span>
              <span className="text-left">
                <span className="block text-[9px] uppercase tracking-[0.2em] text-[#E8D2AC]">
                  Need help right now? Call our 24/7 helpline
                </span>
                <span className="block font-serif text-base">9220147229</span>
              </span>
            </a>
          </div>
        </section>

        {/* ============ FORM ============ */}
        <section className="pb-10 pt-6 lg:pb-14">
          <div className="mx-auto grid w-full max-w-5xl gap-4 px-4 sm:px-6 xl:px-0 lg:grid-cols-[1fr_280px]">
            <div className="relative overflow-hidden rounded-2xl border border-[#E6D6BF] bg-white p-6 shadow-[0_16px_42px_rgba(73,49,31,0.08)]">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#C9A574] to-transparent" />

              {result ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#8B6A3E]/10 text-[#8B6A3E]">
                    <FaCheckCircle className="h-7 w-7" />
                  </span>
                  <h3 className="mt-4 font-serif text-2xl text-[#2C1810]">Request Received</h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-[#6B584B]">
                    Our team will call you shortly. Please save your reference number for your
                    records — you can use it later with the Case ID (once assigned) to track
                    progress.
                  </p>
                  <div className="mt-4 rounded-lg border border-[#E4D5BE] bg-[#FBF8F3] px-4 py-2 font-serif text-lg text-[#8B6A3E]">
                    {result.requestNo}
                  </div>
                  <button
                    type="button"
                    onClick={() => setResult(null)}
                    className="mt-5 text-xs font-semibold text-[#8B6A3E] hover:underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className={labelClass}>This is</label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { key: false, label: "A Normal Request" },
                        { key: true, label: "An Emergency" },
                      ].map((opt) => (
                        <button
                          key={String(opt.key)}
                          type="button"
                          onClick={() => setIsEmergency(opt.key)}
                          className={`rounded-lg border px-3 py-2.5 text-sm font-semibold transition-all ${isEmergency === opt.key
                              ? "border-[#8B6A3E] bg-[#8B6A3E] text-white shadow-md"
                              : "border-[#E4D5BE] bg-[#FBF8F3] text-[#5F4630] hover:border-[#C9A574]"
                            }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="col-span-2 sm:col-span-1">
                      <label className={labelClass}>Your Name *</label>
                      <input
                        type="text"
                        name="requesterName"
                        value={form.requesterName}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label className={labelClass}>Your Phone Number *</label>
                      <input
                        type="tel"
                        name="requesterPhone"
                        value={form.requesterPhone}
                        onChange={handleChange}
                        required
                        pattern="[6-9][0-9]{9}"
                        title="10-digit mobile number"
                        className={inputClass}
                        placeholder="98765 43210"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="col-span-2 sm:col-span-1">
                      <label className={labelClass}>Your Relation to the Deceased *</label>
                      <input
                        type="text"
                        name="relation"
                        value={form.relation}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="e.g. Son, Daughter, Neighbour"
                      />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <label className={labelClass}>Email (optional)</label>
                      <input
                        type="email"
                        name="requesterEmail"
                        value={form.requesterEmail}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="border-t border-[#F0E5D3] pt-4">
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8B6A3E]">
                      About the Deceased
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="col-span-2 sm:col-span-1">
                        <label className={labelClass}>Name *</label>
                        <input
                          type="text"
                          name="deceasedName"
                          value={form.deceasedName}
                          onChange={handleChange}
                          required
                          className={inputClass}
                          placeholder="Full name"
                        />
                      </div>
                      <div className="col-span-1">
                        <label className={labelClass}>Age</label>
                        <input
                          type="number"
                          name="deceasedAge"
                          value={form.deceasedAge}
                          onChange={handleChange}
                          min={0}
                          className={inputClass}
                          placeholder="Age"
                        />
                      </div>
                      <div className="col-span-1">
                        <label className={labelClass}>Gender</label>
                        <input
                          type="text"
                          name="deceasedGender"
                          value={form.deceasedGender}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder="Male / Female"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-[#F0E5D3] pt-4">
                    <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8B6A3E]">
                      Location
                    </p>
                    <div className="space-y-3">
                      <div>
                        <label className={labelClass}>Address *</label>
                        <input
                          type="text"
                          name="address"
                          value={form.address}
                          onChange={handleChange}
                          required
                          className={inputClass}
                          placeholder="House / street / landmark"
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        <div>
                          <label className={labelClass}>City *</label>
                          <input
                            type="text"
                            name="city"
                            value={form.city}
                            onChange={handleChange}
                            required
                            className={inputClass}
                            placeholder="City"
                          />
                        </div>
                        <div>
                          <label className={labelClass}>State *</label>
                          <input
                            type="text"
                            name="state"
                            value={form.state}
                            onChange={handleChange}
                            required
                            className={inputClass}
                            placeholder="State"
                          />
                        </div>
                        <div>
                          <label className={labelClass}>Pincode *</label>
                          <input
                            type="text"
                            name="pincode"
                            value={form.pincode}
                            onChange={handleChange}
                            required
                            pattern="[0-9]{6}"
                            title="6-digit pincode"
                            className={inputClass}
                            placeholder="302001"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Anything else we should know? (optional)</label>
                    <textarea
                      name="notes"
                      value={form.notes}
                      onChange={handleChange}
                      rows={3}
                      className={`${inputClass} resize-none`}
                      placeholder="Any details that will help our team respond faster"
                    />
                  </div>

                  <label className="flex cursor-pointer items-start gap-2.5 text-xs leading-5 text-[#5F4630]">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-0.5 h-4 w-4 rounded border-[#E4D5BE] text-[#8B6A3E] focus:ring-[#C9A574]/40"
                    />
                    I consent to Moksha Sewa storing and using these details to provide cremation
                    assistance. This information is encrypted and never shared without my consent.
                  </label>

                  {error && (
                    <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm font-medium text-red-700">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[#8B6A3E] px-4 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#73532F] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <FaHandsHelping className="transition-transform duration-300 group-hover:scale-110" />
                        Submit Request — It's Free
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* -------- right column -------- */}
            <div className="space-y-3">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#3B2B21] to-[#2C1810] p-4 text-white shadow-[0_18px_48px_rgba(44,24,16,0.3)]">
                <span className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-[#C9A574] via-[#D9B681] to-[#C9A574]" />
                <FaShieldAlt className="h-5 w-5 text-[#D9B681]" />
                <h4 className="mt-2 font-serif text-lg">Always Free</h4>
                <p className="mt-1 text-xs leading-5 text-[#E8D2AC]">
                  We never collect any payment from a family, under any circumstance. This service
                  is funded entirely by donations.
                </p>
              </div>

              <div className="rounded-2xl border border-[#E6D6BF] bg-white p-4 shadow-sm">
                <FaSearchLocation className="h-5 w-5 text-[#8B6A3E]" />
                <h4 className="mt-2 font-serif text-base text-[#2C1810]">Already Submitted?</h4>
                <p className="mt-1 text-xs leading-5 text-[#6B584B]">
                  Track the status of a request once our team has assigned a Case ID.
                </p>
                <Link
                  href="/track"
                  className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#8B6A3E] hover:underline"
                >
                  Track Your Request →
                </Link>
              </div>

              <div className="flex items-start gap-2.5 rounded-2xl border border-[#E6D6BF] bg-[#F6EFE6] px-4 py-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#8B6A3E] text-white">
                  <PiFlowerLotus className="h-4 w-4" />
                </span>
                <p className="text-[11px] leading-[1.4] text-[#5F4A3D]">
                  Every detail you share is encrypted and only ever seen by the team helping your
                  family — never sold, never public.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default RequestHelp;
