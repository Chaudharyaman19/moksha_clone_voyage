"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";

import {
  FaAmbulance,
  FaCalendarAlt,
  FaCheckCircle,
  FaClipboardList,
  FaFileAlt,
  FaFire,
  FaPhoneAlt,
  FaRegClock,
  FaShieldAlt,
  FaShoppingBasket,
  FaUser,
} from "react-icons/fa";

import { PiFlowerLotus } from "react-icons/pi";

import { requestApi } from "@/lib/requestApi";
import { ApiRequestError } from "@/lib/api";
import { lookupPincode } from "@/lib/pincode";

type RequestType = "NORMAL" | "EMERGENCY";

type AssistanceType =
  | "Cremation Support"
  | "Ambulance / Transport"
  | "Ritual Arrangements"
  | "Pandit Support"
  | "Samagri (Materials)"
  | "Documentation Help";

interface FormState {
  requesterName: string;
  requesterPhone: string;
  requesterEmail: string;
  relation: string;

  deceasedName: string;
  deceasedAge: string;
  deceasedGender: string;

  address: string;
  city: string;
  state: string;
  pincode: string;

  assistanceType: AssistanceType;
  preferredDate: string;
  urgency: string;
  notes: string;
}

interface AssistanceOption {
  title: AssistanceType;
  icon: React.ComponentType<{
    className?: string;
  }>;
}

interface TrustItem {
  title: string;
  description: string;
  icon: React.ComponentType<{
    className?: string;
  }>;
}

const inputClass =
  "h-[42px] w-full rounded-[7px] border border-[#E6D8C7] bg-white px-3 text-[14px] font-normal text-[#35241B] outline-none transition placeholder:text-[#A59689] focus:border-[#E47B22] focus:ring-2 focus:ring-[#E47B22]/10";

const labelClass =
  "mb-1.5 block text-[14px] font-medium leading-none text-[#3A291F]";

const EMPTY_FORM: FormState = {
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

  assistanceType: "Cremation Support",
  preferredDate: "",
  urgency: "",
  notes: "",
};

const assistanceOptions: AssistanceOption[] = [
  {
    title: "Cremation Support",
    icon: FaFire,
  },
  {
    title: "Ambulance / Transport",
    icon: FaAmbulance,
  },
  {
    title: "Ritual Arrangements",
    icon: PiFlowerLotus,
  },
  {
    title: "Pandit Support",
    icon: FaUser,
  },
  {
    title: "Samagri (Materials)",
    icon: FaShoppingBasket,
  },
  {
    title: "Documentation Help",
    icon: FaFileAlt,
  },
];

const trustItems: TrustItem[] = [
  {
    title: "24/7 Immediate Support",
    description:
      "We are available round the clock whenever you need us.",
    icon: FaPhoneAlt,
  },
  {
    title: "Verified & Compassionate Team",
    description:
      "Trained professionals you can trust, with experience and empathy.",
    icon: FaShieldAlt,
  },
  {
    title: "Transparent Guidance",
    description:
      "Clear information, an honest process and no hidden charges.",
    icon: FaClipboardList,
  },
  {
    title: "Dignified & Respectful Service",
    description:
      "Every service is carried out with dignity, care and respect.",
    icon: PiFlowerLotus,
  },
];

function LotusOrnament({
  className = "h-8 w-11",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 72 50"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M36 4c-7 8-9 15-7 22 2 5 7 9 7 9s5-4 7-9c2-7 0-14-7-22Z"
        stroke="#E86F1A"
        strokeWidth="1.8"
      />

      <path
        d="M12 17c9 0 16 3 20 9 3 5 3 10 3 10s-6 0-12-4c-6-4-9-9-11-15Z"
        stroke="#E86F1A"
        strokeWidth="1.8"
      />

      <path
        d="M60 17c-9 0-16 3-20 9-3 5-3 10-3 10s6 0 12-4c6-4 9-9 11-15Z"
        stroke="#E86F1A"
        strokeWidth="1.8"
      />

      <path
        d="M20 12c7 2 12 6 15 12 2 5 1 10 1 10s-6-2-10-7c-4-5-6-10-6-15Z"
        stroke="#E86F1A"
        strokeWidth="1.8"
      />

      <path
        d="M52 12c-7 2-12 6-15 12-2 5-1 10-1 10s6-2 10-7c4-5 6-10 6-15Z"
        stroke="#E86F1A"
        strokeWidth="1.8"
      />

      <path
        d="M8 31c9 8 18 12 28 12s19-4 28-12"
        stroke="#E86F1A"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function RequestHelp() {
  const [requestType, setRequestType] =
    useState<RequestType>("NORMAL");

  const [form, setForm] =
    useState<FormState>(EMPTY_FORM);

  const [consent, setConsent] =
    useState(false);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [result, setResult] =
    useState<{ requestNo: string } | null>(
      null,
    );

  const [error, setError] =
    useState<string | null>(null);

  const [pincodeStatus, setPincodeStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  // Pincode-first lookup: once 6 digits are typed, auto-fill state/city — a grieving family
  // shouldn't have to type more than they must. Both stay editable in case it's wrong.
  useEffect(() => {
    if (!/^\d{6}$/.test(form.pincode)) {
      setPincodeStatus("idle");
      return;
    }
    let cancelled = false;
    setPincodeStatus("loading");
    lookupPincode(form.pincode).then((result) => {
      if (cancelled) return;
      if (result) {
        setForm((current) => ({ ...current, city: result.city, state: result.state }));
        setPincodeStatus("done");
      } else {
        setPincodeStatus("error");
      }
    });
    return () => {
      cancelled = true;
    };
  }, [form.pincode]);

  const handleChange = (
    event: React.ChangeEvent<
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const selectAssistance = (
    assistanceType: AssistanceType,
  ) => {
    setForm((current) => ({
      ...current,
      assistanceType,
    }));
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setError(null);

    if (!consent) {
      setError(
        "Please confirm consent so our team can contact and assist you.",
      );
      return;
    }

    setIsSubmitting(true);

    const additionalInformation = [
      `Assistance required: ${form.assistanceType}`,
      form.preferredDate
        ? `Preferred date and time: ${form.preferredDate}`
        : "",
      form.urgency
        ? `Urgency: ${form.urgency}`
        : "",
      form.notes
        ? `Special instructions: ${form.notes}`
        : "",
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const request = await requestApi.submit({
        type: requestType,

        requester: {
          name: form.requesterName,
          phone: form.requesterPhone,
          email:
            form.requesterEmail ||
            undefined,
          relation:
            form.relation ||
            "Not specified",
        },

        deceased: {
          name:
            form.deceasedName ||
            "Not provided",
          age: form.deceasedAge
            ? Number(form.deceasedAge)
            : undefined,
          gender:
            form.deceasedGender ||
            undefined,
        },

        location: {
          address: form.address,
          city: form.city,
          state:
            form.state ||
            "Not specified",
          pincode:
            form.pincode ||
            "000000",
        },

        notes:
          additionalInformation ||
          undefined,

        consent: {
          dataProcessing: consent,
          publishStory: false,
        },
      });

      setResult({
        requestNo: request.requestNo,
      });

      setForm(EMPTY_FORM);
      setConsent(false);
      setRequestType("NORMAL");
    } catch (caughtError) {
      setError(
        caughtError instanceof ApiRequestError
          ? caughtError.message
          : "Something went wrong. Please call our helpline instead.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FCF8F1] text-[#302017]">
      <Topbar />
      <Navbar />

      <main className="relative overflow-hidden px-3 pb-6 pt-6 sm:px-4 lg:px-5 lg:pb-8 lg:pt-7">
        {/* Side ornaments */}
        <div className="pointer-events-none absolute -left-14 top-[38%] hidden opacity-[0.08] lg:block">
          <LotusOrnament className="h-64 w-64" />
        </div>

        <div className="pointer-events-none absolute -right-14 top-[42%] hidden opacity-[0.08] lg:block">
          <LotusOrnament className="h-64 w-64" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl">
          {/* Page heading */}
          <header className="mb-3 text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="hidden h-px w-24 bg-gradient-to-r from-transparent to-[#E57A20] sm:block" />

              <LotusOrnament className="h-8 w-12" />

              <span className="hidden h-px w-24 bg-gradient-to-l from-transparent to-[#E57A20] sm:block" />
            </div>

            <h1 className="mt-1 font-serif text-[24px] font-normal leading-tight text-[#351B12] sm:text-[28px] lg:text-[30px]">
              Request Cremation Assistance
            </h1>

            <div className="mt-2 flex items-center justify-center gap-2.5">
              <span className="h-px w-14 bg-[#E39856]" />

              <span className="h-2 w-2 rotate-45 border border-[#E17820]" />

              <span className="h-px w-14 bg-[#E39856]" />
            </div>

            <p className="mx-auto mt-2 max-w-[680px] text-[14px] leading-5 text-[#665246] sm:text-[15px]">
              We are here to support you
              with compassion, dignity and
              care in your time of need.
            </p>
          </header>

          <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
            {/* Main form */}
            <section className="relative overflow-hidden rounded-[15px] border border-[#E7D9C9] bg-white/95 px-4 py-4 shadow-[0_14px_38px_rgba(93,55,30,0.08)] sm:px-5">
              {result ? (
                <div className="flex min-h-[510px] flex-col items-center justify-center text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-[#E87520]/10 text-[#E87520]">
                    <FaCheckCircle className="h-7 w-7" />
                  </span>

                  <h2 className="mt-4 font-serif text-[24px] font-normal leading-tight text-[#351B12] sm:text-[28px] lg:text-[30px]">
                    Request Received
                  </h2>

                  <p className="mt-2 max-w-md text-[14px] leading-6 text-[#69554A]">
                    Our assistance team will
                    contact you shortly. Keep
                    your request number safe for
                    future reference.
                  </p>

                  <div className="mt-4 rounded-lg border border-[#E7D5C0] bg-[#FCF7EF] px-5 py-2 font-serif text-[18px] text-[#D76816]">
                    {result.requestNo}
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setResult(null)
                    }
                    className="mt-5 text-[14px] font-medium text-[#D76816] hover:underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-3"
                >
                  {/* Form title */}
                  <div className="flex items-center gap-2 border-b border-[#EEE2D3] pb-2">
                    <LotusOrnament className="h-6 w-8" />

                    <h2 className="font-serif text-[24px] font-normal leading-tight text-[#3A2117] sm:text-[28px] lg:text-[30px]">
                      Request Assistance
                    </h2>

                    <div className="ml-auto flex rounded-md border border-[#E7D9C9] bg-[#FCF8F2] p-0.5">
                      <button
                        type="button"
                        onClick={() =>
                          setRequestType(
                            "NORMAL",
                          )
                        }
                        className={`rounded px-3 py-1 text-[14px] transition ${
                          requestType ===
                          "NORMAL"
                            ? "bg-[#E87520] text-white"
                            : "text-[#725A4B]"
                        }`}
                      >
                        Normal
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setRequestType(
                            "EMERGENCY",
                          )
                        }
                        className={`rounded px-3 py-1 text-[14px] transition ${
                          requestType ===
                          "EMERGENCY"
                            ? "bg-[#D94124] text-white"
                            : "text-[#725A4B]"
                        }`}
                      >
                        Emergency
                      </button>
                    </div>
                  </div>

                  {/* Personal Details */}
                  <fieldset>
                    <legend className="mb-2 flex items-center gap-2 font-serif text-[14px] text-[#472C20]">
                      <span className="h-px w-4 bg-[#E87520]" />
                      Personal Details
                    </legend>

                    <div className="grid gap-2.5 sm:grid-cols-3">
                      <div>
                        <label
                          className={
                            labelClass
                          }
                        >
                          Full Name *
                        </label>

                        <input
                          type="text"
                          name="requesterName"
                          value={
                            form.requesterName
                          }
                          onChange={
                            handleChange
                          }
                          required
                          className={
                            inputClass
                          }
                          placeholder="Enter full name"
                        />
                      </div>

                      <div>
                        <label
                          className={
                            labelClass
                          }
                        >
                          Mobile Number *
                        </label>

                        <input
                          type="tel"
                          name="requesterPhone"
                          value={
                            form.requesterPhone
                          }
                          onChange={
                            handleChange
                          }
                          required
                          pattern="[6-9][0-9]{9}"
                          title="Enter a valid 10-digit mobile number"
                          className={
                            inputClass
                          }
                          placeholder="Enter 10 digit mobile number"
                        />
                      </div>

                      <div>
                        <label
                          className={
                            labelClass
                          }
                        >
                          Email Address
                        </label>

                        <input
                          type="email"
                          name="requesterEmail"
                          value={
                            form.requesterEmail
                          }
                          onChange={
                            handleChange
                          }
                          className={
                            inputClass
                          }
                          placeholder="Enter email address"
                        />
                      </div>
                    </div>

                    <div className="mt-2.5 grid gap-2.5 sm:grid-cols-3">
                      <div>
                        <label className={labelClass}>
                          Pincode *
                        </label>

                        <input
                          type="text"
                          name="pincode"
                          value={form.pincode}
                          onChange={handleChange}
                          required
                          inputMode="numeric"
                          pattern="[0-9]{6}"
                          title="Enter a valid 6-digit pincode"
                          className={inputClass}
                          placeholder="6-digit pincode"
                        />
                      </div>

                      <div>
                        <label
                          className={
                            labelClass
                          }
                        >
                          State *
                        </label>

                        <input
                          type="text"
                          name="state"
                          value={form.state}
                          onChange={handleChange}
                          required
                          className={inputClass}
                          placeholder="Auto-filled from pincode"
                        />
                      </div>

                      <div>
                        <label
                          className={
                            labelClass
                          }
                        >
                          City *
                        </label>

                        <input
                          type="text"
                          name="city"
                          value={form.city}
                          onChange={
                            handleChange
                          }
                          required
                          className={
                            inputClass
                          }
                          placeholder="Auto-filled from pincode"
                        />
                      </div>
                    </div>

                    {pincodeStatus === "loading" && (
                      <p className="mt-1 text-[14px] text-[#A59689]">Looking up state and city…</p>
                    )}
                    {pincodeStatus === "done" && (
                      <p className="mt-1 text-[14px] text-emerald-600">
                        Found: {form.city}, {form.state}
                      </p>
                    )}
                    {pincodeStatus === "error" && (
                      <p className="mt-1 text-[14px] text-[#E47B22]">
                        Couldn&apos;t find this pincode — please enter state and city manually.
                      </p>
                    )}

                    <div className="mt-2.5">
                      <label
                        className={
                          labelClass
                        }
                      >
                        Service Location *
                      </label>

                      <input
                        type="text"
                        name="address"
                        value={
                          form.address
                        }
                        onChange={
                          handleChange
                        }
                        required
                        className={
                          inputClass
                        }
                        placeholder="Complete address for service"
                      />
                    </div>
                  </fieldset>

                  {/* Assistance Types */}
                  <fieldset>
                    <legend className="mb-2 flex items-center gap-2 font-serif text-[14px] text-[#472C20]">
                      <span className="h-px w-4 bg-[#E87520]" />
                      Type of Assistance *
                    </legend>

                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-6">
                      {assistanceOptions.map(
                        (option) => {
                          const Icon =
                            option.icon;

                          const selected =
                            form.assistanceType ===
                            option.title;

                          return (
                            <button
                              key={
                                option.title
                              }
                              type="button"
                              onClick={() =>
                                selectAssistance(
                                  option.title,
                                )
                              }
                              className={`relative flex min-h-[78px] flex-col items-center justify-center rounded-[8px] border px-2 py-2 text-center transition ${
                                selected
                                  ? "border-[#E87520] bg-[#FFF9F2] shadow-[0_5px_14px_rgba(226,112,29,0.10)]"
                                  : "border-[#E8DDD0] bg-white hover:border-[#E7A164]"
                              }`}
                            >
                              <span
                                className={`absolute right-2 top-2 h-3 w-3 rounded-full border ${
                                  selected
                                    ? "border-[#E87520] bg-[#E87520] shadow-[inset_0_0_0_3px_white]"
                                    : "border-[#CDBCAE]"
                                }`}
                              />

                              <Icon className="h-5 w-5 text-[#E87520]" />

                              <span className="mt-1.5 font-serif text-[14px] leading-[1.12] text-[#39251C]">
                                {
                                  option.title
                                }
                              </span>
                            </button>
                          );
                        },
                      )}
                    </div>
                  </fieldset>

                  {/* Date and urgency */}
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    <div>
                      <label
                        className={labelClass}
                      >
                        Preferred Date & Time *
                      </label>

                      <div className="relative">
                        <FaCalendarAlt className="pointer-events-none absolute left-3 top-1/2 h-3 w-3 -translate-y-1/2 text-[#936D56]" />

                        <input
                          type="datetime-local"
                          name="preferredDate"
                          value={
                            form.preferredDate
                          }
                          onChange={
                            handleChange
                          }
                          required
                          className={`${inputClass} pl-9`}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        className={labelClass}
                      >
                        Urgency *
                      </label>

                      <div className="relative">
                        <FaRegClock className="pointer-events-none absolute left-3 top-1/2 h-3 w-3 -translate-y-1/2 text-[#936D56]" />

                        <select
                          name="urgency"
                          value={form.urgency}
                          onChange={
                            handleChange
                          }
                          required
                          className={`${inputClass} appearance-none pl-9`}
                        >
                          <option value="">
                            Select urgency
                          </option>

                          <option value="Immediate">
                            Immediate
                          </option>

                          <option value="Within 2 Hours">
                            Within 2 Hours
                          </option>

                          <option value="Today">
                            Today
                          </option>

                          <option value="Planning Ahead">
                            Planning Ahead
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Additional API details */}
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    <input
                      type="text"
                      name="relation"
                      value={form.relation}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Relation"
                    />

                    <input
                      type="text"
                      name="deceasedName"
                      value={
                        form.deceasedName
                      }
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Deceased name"
                    />
                  </div>

                  <div>
                    <label
                      className={labelClass}
                    >
                      Message / Special
                      Instructions
                    </label>

                    <textarea
                      name="notes"
                      value={form.notes}
                      onChange={handleChange}
                      rows={2}
                      className="min-h-[58px] w-full resize-none rounded-[7px] border border-[#E6D8C7] bg-white px-3 py-2 text-[14px] text-[#35241B] outline-none placeholder:text-[#A59689] focus:border-[#E47B22] focus:ring-2 focus:ring-[#E47B22]/10"
                      placeholder="Please share any details that may help us serve you better..."
                    />
                  </div>

                  <label className="flex cursor-pointer items-start gap-2 text-[14px] leading-4 text-[#6A5548]">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(event) =>
                        setConsent(
                          event.target.checked,
                        )
                      }
                      className="mt-0.5 h-3.5 w-3.5 rounded border-[#D8C6B5] text-[#E87520] focus:ring-[#E87520]/20"
                    />

                    I consent to Moksha Sewa
                    using these details only to
                    provide the requested
                    cremation assistance.
                  </label>

                  {error && (
                    <div className="rounded-[7px] border border-red-200 bg-red-50 px-3 py-2 text-[14px] text-red-700">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex h-[44px] w-full items-center justify-center gap-3 rounded-[7px] bg-gradient-to-r from-[#F06C16] to-[#E04D0D] px-4 text-[14px] font-medium text-white shadow-[0_7px_18px_rgba(225,78,13,0.20)] transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <PiFlowerLotus className="h-5 w-5" />
                        Request Assistance Now
                        <span className="transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </>
                    )}
                  </button>

                  <p className="flex items-center justify-center gap-2 text-center text-[14px] text-[#76665B]">
                    <FaShieldAlt className="text-[#6F746F]" />
                    Your information is safe
                    and secure with us. We
                    provide confidential
                    support.
                  </p>
                </form>
              )}
            </section>

            {/* Right trust panel */}
            <aside className="overflow-hidden rounded-[15px] border border-[#EDD9BF] bg-[#FFF8EC] p-4 shadow-[0_14px_36px_rgba(106,65,29,0.09)]">
              <h2 className="text-center font-serif text-[24px] font-normal leading-tight text-[#40271B] sm:text-[28px] lg:text-[30px]">
                Why Families Trust Moksha Sewa
              </h2>

              <div className="mx-auto mt-2 h-px w-20 bg-gradient-to-r from-transparent via-[#E28737] to-transparent" />

              <div className="mt-3 divide-y divide-[#EBDCC9]">
                {trustItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex gap-3 py-2.5 first:pt-0"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#EBD5BA] bg-white text-[#E87520] shadow-[0_4px_12px_rgba(89,57,31,0.07)]">
                        <Icon className="h-4.5 w-4.5" />
                      </span>

                      <div>
                        <h3 className="font-serif text-[14px] leading-tight text-[#3E261B]">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-[14px] leading-[1.45] text-[#715C4E]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="relative mt-2 h-[150px] overflow-hidden rounded-[11px]">
                <Image
                  src="/assets/images/why-families-trust-ritual.png"
                  alt="A peaceful ritual lamp representing compassionate cremation assistance"
                  fill
                  priority
                  sizes="320px"
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#4A2719]/25 to-transparent" />
              </div>

              <blockquote className="relative px-3 pb-1 pt-3 text-center">
                <span className="font-serif text-[23px] leading-none text-[#E17A25]">
                  “
                </span>

                <p className="font-serif text-[14px]  leading-5 text-[#5B3827]">
                  In Sewa, we find peace.
                  <br />
                  In supporting each other,
                  <br />
                  we honor life.
                </p>

                <LotusOrnament className="mx-auto mt-2 h-5 w-8" />
              </blockquote>
            </aside>
          </div>

          {/* Bottom message */}
          <div className="mt-3 text-center">
            <p className="font-serif text-[14px] text-[#D16521]">
              ॥ अन्तिम सेवा, हमारी श्रद्धा और
              आपका विश्वास ॥
            </p>

            <p className="mt-0.5 text-[14px] text-[#78665A]">
              With Sewa in our heart, we walk
              with you in this journey.
            </p>
          </div>

          <div className="mt-2 flex justify-center">
            <Link
              href="/track"
              className="text-[14px] font-medium text-[#B85B20] hover:underline"
            >
              Already submitted? Track your
              request →
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
