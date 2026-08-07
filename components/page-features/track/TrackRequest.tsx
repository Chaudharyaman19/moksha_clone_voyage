"use client";

import React, { useState } from "react";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import {
  FaSearch,
  FaCheckCircle,
  FaClock,
  FaPhoneAlt,
  FaFileAlt,
  FaExclamationCircle,
  FaShieldAlt,
  FaKeyboard,
  FaHourglassHalf,
  FaLock,
} from "react-icons/fa";
import { requestApi, TrackedCase } from "@/lib/requestApi";
import { ApiRequestError } from "@/lib/api";

const inputClass =
  "h-[46px] w-full rounded-[9px] border border-[#E2C79F] bg-[#FFFCF7] px-3.5 text-[13px] text-[#2C1810] placeholder:text-[#A99A8C] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-all focus:border-[#B9843E] focus:outline-none focus:ring-2 focus:ring-[#C9A574]/25";

const labelClass =
  "mb-1.5 block text-[10px] font-medium uppercase tracking-[0.12em] text-[#3E2A1F]";

const STATUS_LABELS: Record<string, string> = {
  NEW: "Request Received",
  UNDER_VERIFICATION: "Verifying Details",
  APPROVED: "Approved — Arranging Support",
  VOLUNTEER_ASSIGNED: "Volunteer Assigned",
  TRANSPORT_ARRANGED: "Transport Arranged",
  CREMATION_IN_PROGRESS: "Cremation In Progress",
  CREMATION_COMPLETED: "Cremation Completed",
  DOCS_UPLOADED: "Documents Uploaded",
  CLOSED: "Case Closed",
  REJECTED: "Request Could Not Be Approved",
  CANCELLED: "Request Cancelled",
  SUBMITTED: "Under Review",
};

const STATUS_ORDER = [
  "NEW",
  "UNDER_VERIFICATION",
  "APPROVED",
  "VOLUNTEER_ASSIGNED",
  "TRANSPORT_ARRANGED",
  "CREMATION_IN_PROGRESS",
  "CREMATION_COMPLETED",
  "DOCS_UPLOADED",
  "CLOSED",
];

const HOW_IT_WORKS = [
  {
    icon: FaKeyboard,
    text: "Enter your Case ID or Request Number with your phone number.",
  },
  {
    icon: FaHourglassHalf,
    text: "We match it against your submission — no login, no waiting on hold.",
  },
  {
    icon: FaCheckCircle,
    text: "See exactly where things stand, updated the moment our team acts.",
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
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 17c9 0 16 3 20 9 3 5 3 10 3 10s-6 0-12-4c-6-4-9-9-11-15Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M60 17c-9 0-16 3-20 9-3 5-3 10-3 10s6 0 12-4c6-4 9-9 11-15Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M20 12c7 2 12 6 15 12 2 5 1 10 1 10s-6-2-10-7c-4-5-6-10-6-15Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M52 12c-7 2-12 6-15 12-2 5-1 10-1 10s6-2 10-7c-4-5-6-10-6-15Z"
        stroke="currentColor"
        strokeWidth="0"
      />
      <path
        d="M52 12c-7 2-12 6-15 12-2 5-1 10-1 10s6-2 10-7c4-5 6-10 6-15Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8 31c9 8 18 12 28 12s19-4 28-12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FineDiamond() {
  return (
    <span className="h-[7px] w-[7px] rotate-45 border border-[#B9833D]" />
  );
}

function TrackRequest() {
  const [caseId, setCaseId] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<TrackedCase | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setResult(null);
    setIsLoading(true);

    try {
      const tracked = await requestApi.track(caseId.trim(), phone.trim());
      setResult(tracked);
    } catch (err) {
      setError(
        err instanceof ApiRequestError
          ? err.message
          : "We couldn't find a case with that ID and phone number. Please check and try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const currentStepIndex = result
    ? STATUS_ORDER.indexOf(result.status)
    : -1;

  const isTerminalNegative =
    result?.status === "REJECTED" || result?.status === "CANCELLED";

  const isPending = result?.caseId === null;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FCF8F1] text-[#2C1810]">
      <Topbar />
      <Navbar />

      <main className="relative overflow-hidden bg-[#FCF8F1] pb-7 pt-10 lg:pb-9 lg:pt-14">
        {/* Soft background glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_8%,rgba(255,255,255,0.9),transparent_38%),radial-gradient(circle_at_18%_65%,rgba(201,165,116,0.08),transparent_32%),radial-gradient(circle_at_85%_70%,rgba(201,165,116,0.07),transparent_30%)]" />

        {/* Large faint lotus ornaments */}
        <div className="pointer-events-none absolute -left-12 top-[24%] hidden text-[#B88A4B] opacity-[0.075] xl:block">
          <LotusOrnament className="h-[250px] w-[250px]" />
        </div>
        <div className="pointer-events-none absolute -right-10 top-[54%] hidden text-[#B88A4B] opacity-[0.075] xl:block">
          <LotusOrnament className="h-[235px] w-[235px]" />
        </div>

        {/* HERO */}
        <section className="relative z-10 mx-auto max-w-[980px] px-4 text-center sm:px-6">
          <div className="flex flex-col items-center">
            <LotusOrnament className="h-[52px] w-[76px] text-[#A66E2E]" />

            <div className="-mt-1 flex items-center justify-center gap-3">
              <span className="h-px w-24 bg-gradient-to-r from-transparent to-[#B9833D] sm:w-36" />
              <span
                className="font-serif text-[14px] font-medium tracking-[0.04em] text-[#2B170F]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                MOKSHA SEWA
              </span>
              <span className="h-px w-24 bg-gradient-to-l from-transparent to-[#B9833D] sm:w-36" />
            </div>

            <div className="mt-3 flex items-center gap-2">
              <span className="h-px w-24 bg-gradient-to-r from-transparent to-[#C79A58]" />
              <FineDiamond />
              <span className="h-px w-24 bg-gradient-to-l from-transparent to-[#C79A58]" />
            </div>
          </div>

          <h1
            className="mt-1.5 text-[36px] font-normal leading-[1] text-[#2C1810] sm:text-[43px] lg:text-[48px]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Track Your{" "}
            <span className="text-[#A07032]">Request</span>
          </h1>

          <div className="mt-1.5 flex items-center justify-center gap-2 text-[#A66E2E]">
            <span className="h-px w-20 bg-gradient-to-r from-transparent to-[#C79A58]" />
            <LotusOrnament className="h-7 w-10" />
            <span className="h-px w-20 bg-gradient-to-l from-transparent to-[#C79A58]" />
          </div>

          <p className="mx-auto mt-2 max-w-[620px] text-[12px] leading-5 text-[#4F382A] sm:text-[13px]">
            Enter your Case ID or Request Number along with your phone number
            <br className="hidden sm:block" /> to check the latest status of your
            support request.
          </p>
        </section>

        {/* Curved gold separator */}
        {/* <div className="pointer-events-none relative z-[5] mx-auto mt-0 h-8 w-[116%] -translate-x-[7%] overflow-hidden">
          <div className="absolute left-1/2 top-[-136px] h-[165px] w-[112%] -translate-x-1/2 rounded-[50%] border-b-2 border-[#D8B16F]/80" />
        </div> */}

        {/* MAIN TRACKING LAYOUT */}
        <section className="relative z-10 mx-auto -mt-3 w-full max-w-[1260px] px-4 sm:px-6 xl:px-0 mt-4">
          <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.95fr)]">
            {/* LEFT FORM */}
            <div>
              <div className="relative overflow-hidden rounded-[18px] border border-[#E6CFAE] bg-white/88 px-6 pb-5 pt-5 shadow-[0_18px_45px_rgba(84,53,27,0.09)] backdrop-blur-[2px] sm:px-7 sm:pb-5 sm:pt-5">
                <div className="pointer-events-none absolute -bottom-10 -left-8 text-[#C89B5B] opacity-[0.13]">
                  <LotusOrnament className="h-28 w-36" />
                </div>

                <div className="relative flex items-start gap-3">
                  <span className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border border-[#E8D1AE] bg-[#FFF7E9] text-[#A16A27] shadow-[0_7px_18px_rgba(126,80,28,0.08)]">
                    <FaSearch className="h-5 w-5" />
                  </span>

                  <div className="min-w-0 pt-1">
                    <h2
                      className="text-[21px] font-normal leading-tight text-[#2C1810]"
                      style={{
                        fontFamily: "Georgia, 'Times New Roman', serif",
                      }}
                    >
                      Find Your Status
                    </h2>
                    <p className="mt-0.5 text-[12px] text-[#765A43]">
                      No login required — just two details
                    </p>
                  </div>
                </div>

                <div className="my-3 flex items-center gap-2">
                  <span className="h-px flex-1 bg-[#E6D4BC]" />
                  <LotusOrnament className="h-5 w-8 text-[#B98642]" />
                  <span className="h-px flex-1 bg-[#E6D4BC]" />
                </div>

                <form onSubmit={handleSubmit} className="relative space-y-3.5">
                  <div>
                    <label className={labelClass}>
                      Case ID or Request Number *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={caseId}
                        onChange={(e) => setCaseId(e.target.value)}
                        required
                        className={`${inputClass} pr-12`}
                        placeholder="MS-2026-000125 or REQ-2026-000125"
                      />
                      <LotusOrnament className="pointer-events-none absolute right-3 top-1/2 h-6 w-8 -translate-y-1/2 text-[#C89B5B] opacity-55" />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>
                      Phone Number Used in the Request *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        pattern="[6-9][0-9]{9}"
                        title="10-digit mobile number"
                        className={`${inputClass} pr-12`}
                        placeholder="98765 43210"
                      />
                      <FaPhoneAlt className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 rotate-[-10deg] text-[#C79A58]/70" />
                    </div>
                  </div>

                  {error && (
                    <div className="flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 p-3 text-sm font-medium text-red-700">
                      <FaExclamationCircle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group mx-auto flex h-[44px] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#A66D24] via-[#9A6427] to-[#84531E] px-6 text-[13px] font-medium text-white shadow-[0_7px_18px_rgba(126,77,22,0.18)] transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_10px_22px_rgba(126,77,22,0.24)] disabled:cursor-not-allowed disabled:opacity-70 sm:w-[230px]"
                  >
                    {isLoading ? (
                      <>
                        <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Searching...
                      </>
                    ) : (
                      <>
                        <LotusOrnament className="h-6 w-9 text-white" />
                        Track Status
                      </>
                    )}
                  </button>
                </form>

                <div className="relative mt-2.5 flex items-center justify-center gap-2 text-[9px] text-[#7D6A5B] sm:text-[11px]">
                  <FaShieldAlt className="h-3.5 w-3.5 text-[#A66E2E]" />
                  <span>
                    Your information is secure and used only to fetch your
                    request status.
                  </span>
                </div>
              </div>

              {/* RESULT - PENDING */}
              {result && isPending && (
                <div className="relative mt-5 overflow-hidden rounded-[18px] border border-[#E6CFAE] bg-white/90 p-6 shadow-[0_16px_38px_rgba(73,49,31,0.08)]">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                          result.status === "REJECTED"
                            ? "bg-red-50 text-red-600"
                            : "bg-[#8B6A3E]/10 text-[#8B6A3E]"
                        }`}
                      >
                        {result.status === "REJECTED" ? (
                          <FaExclamationCircle className="h-4 w-4" />
                        ) : (
                          <FaHourglassHalf className="h-4 w-4" />
                        )}
                      </span>
                      <div>
                        <p
                          className="text-lg text-[#2C1810]"
                          style={{
                            fontFamily:
                              "Georgia, 'Times New Roman', serif",
                          }}
                        >
                          {result.requestNo}
                        </p>
                        <p className="text-[11px] text-[#8A7460]">
                          Request Number
                        </p>
                      </div>
                    </div>

                    <span
                      className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold ${
                        result.status === "REJECTED"
                          ? "bg-red-50 text-red-700"
                          : "bg-[#8B6A3E]/10 text-[#8B6A3E]"
                      }`}
                    >
                      {STATUS_LABELS[result.status] ?? result.status}
                    </span>
                  </div>

                  <p className="mt-4 border-t border-[#F0E5D3] pt-4 text-sm leading-6 text-[#4F3A2D]">
                    {result.status === "REJECTED"
                      ? "We're sorry — this request could not be approved. Please call our helpline if you'd like to discuss this."
                      : "Our team is reviewing your request. A Case ID will be created and emailed to you (if you gave us an email) once someone begins working on it — keep checking back here with this Request Number in the meantime."}
                  </p>
                </div>
              )}

              {/* RESULT - ACTIVE CASE */}
              {result && !isPending && (
                <div className="relative mt-5 overflow-hidden rounded-[18px] border border-[#E6CFAE] bg-white/90 p-6 shadow-[0_16px_38px_rgba(73,49,31,0.08)]">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                          isTerminalNegative
                            ? "bg-red-50 text-red-600"
                            : result.status === "CLOSED"
                              ? "bg-green-50 text-green-600"
                              : "bg-[#8B6A3E]/10 text-[#8B6A3E]"
                        }`}
                      >
                        {isTerminalNegative ? (
                          <FaExclamationCircle className="h-4 w-4" />
                        ) : (
                          <FaFileAlt className="h-4 w-4" />
                        )}
                      </span>

                      <div>
                        <p
                          className="text-lg text-[#2C1810]"
                          style={{
                            fontFamily:
                              "Georgia, 'Times New Roman', serif",
                          }}
                        >
                          {result.caseId}
                        </p>
                        <p className="text-[11px] text-[#8A7460]">
                          Case ID · {result.requestNo}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold ${
                        isTerminalNegative
                          ? "bg-red-50 text-red-700"
                          : result.status === "CLOSED"
                            ? "bg-green-50 text-green-700"
                            : "bg-[#8B6A3E]/10 text-[#8B6A3E]"
                      }`}
                    >
                      {STATUS_LABELS[result.status] ?? result.status}
                    </span>
                  </div>

                  {!isTerminalNegative && (
                    <div className="mt-5 space-y-0 border-t border-[#F0E5D3] pt-5">
                      {STATUS_ORDER.map((status, index) => {
                        const isDone =
                          currentStepIndex >= 0 && index <= currentStepIndex;
                        const isLast =
                          index === STATUS_ORDER.length - 1;

                        return (
                          <div key={status} className="flex gap-3">
                            <div className="flex flex-col items-center">
                              <span
                                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                                  isDone
                                    ? "bg-[#8B6A3E] text-white"
                                    : "bg-[#F0E5D3] text-[#A8937E]"
                                }`}
                              >
                                {isDone ? (
                                  <FaCheckCircle className="h-3 w-3" />
                                ) : (
                                  <FaClock className="h-3 w-3" />
                                )}
                              </span>

                              {!isLast && (
                                <span
                                  className={`w-px flex-1 ${
                                    isDone
                                      ? "bg-[#8B6A3E]"
                                      : "bg-[#F0E5D3]"
                                  }`}
                                  style={{ minHeight: "20px" }}
                                />
                              )}
                            </div>

                            <div className="pb-4">
                              <p
                                className={`text-sm font-semibold ${
                                  isDone
                                    ? "text-[#2C1810]"
                                    : "text-[#A8937E]"
                                }`}
                              >
                                {STATUS_LABELS[status]}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {result.timeline.length > 0 && (
                    <div className="mt-2 border-t border-[#F0E5D3] pt-4">
                      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8B6A3E]">
                        Recent Updates
                      </p>

                      <div className="space-y-2">
                        {[...result.timeline]
                          .reverse()
                          .slice(0, 5)
                          .map((entry, i) => (
                            <div
                              key={i}
                              className="text-xs leading-5 text-[#6B584B]"
                            >
                              <span className="font-semibold text-[#2C1810]">
                                {new Date(entry.at).toLocaleDateString(
                                  "en-IN",
                                  {
                                    day: "numeric",
                                    month: "short",
                                  },
                                )}
                              </span>{" "}
                              —{" "}
                              {entry.note ||
                                STATUS_LABELS[entry.toStatus ?? ""] ||
                                entry.event}
                            </div>
                          ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* RIGHT COLUMN */}
            <aside className="space-y-4">
              {/* How tracking works */}
              <div className="relative overflow-hidden rounded-[18px] border border-[#E6CFAE] bg-white/82 px-5 pb-4 pt-4 shadow-[0_14px_34px_rgba(73,49,31,0.06)]">
                <div className="pointer-events-none absolute -bottom-7 -right-7 text-[#C89B5B] opacity-[0.12]">
                  <LotusOrnament className="h-28 w-32" />
                </div>

                <h3
                  className="relative text-center text-[17px] font-normal text-[#2C1810]"
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                  }}
                >
                  How Tracking Works
                </h3>

                <div className="mt-1 flex items-center justify-center gap-2">
                  <span className="h-px w-14 bg-[#C79A58]" />
                  <FineDiamond />
                  <span className="h-px w-14 bg-[#C79A58]" />
                </div>

                <div className="relative mt-3 space-y-3">
                  {HOW_IT_WORKS.map(({ icon: Icon, text }, i) => (
                    <div key={i} className="relative flex gap-4">
                      {i < HOW_IT_WORKS.length - 1 && (
                        <span className="absolute left-[19px] top-[36px] h-[20px] border-l border-dashed border-[#CDAA75]" />
                      )}

                      <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-[#E6CFAE] bg-[#FFF7E9] text-[#A16A27]">
                        <Icon className="h-4 w-4" />
                      </span>

                      <p className="pt-0.5 text-[11px] leading-[1.5] text-[#3F2C21]">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Need help + sample preview */}
              <div className="overflow-hidden rounded-[18px] border border-[#E6CFAE] bg-white/84 shadow-[0_14px_34px_rgba(73,49,31,0.06)]">
                <div className="relative flex h-[44px] items-center gap-2.5 bg-gradient-to-r from-[#8A5C2A] to-[#9C6D3C] px-6 text-white">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-white/10">
                    <FaPhoneAlt className="h-4 w-4" />
                  </span>

                  <h3
                    className="text-[16px] font-normal"
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                    }}
                  >
                    Need help instead?
                  </h3>

                  <LotusOrnament className="pointer-events-none absolute right-4 top-1/2 h-12 w-16 -translate-y-1/2 text-white opacity-10" />
                </div>

                <div className="grid min-h-[118px] grid-cols-1 divide-y divide-[#E6D4BC] md:grid-cols-[1.1fr_0.9fr] md:divide-x md:divide-y-0">
                  <div className="p-4">
                    <p className="text-[11px] leading-[1.45] text-[#3E2B20]">
                      Can&apos;t find your Case ID or have questions?
                      <br />
                      Our helpline is available 24/7.
                    </p>

                    <a
                      href="tel:+919220147229"
                      className="mt-2.5 inline-flex h-9 items-center gap-3 rounded-full border border-[#E4C697] bg-[#FFF7E9] px-4 text-[16px] font-medium text-[#8F5E27] shadow-[0_5px_15px_rgba(114,72,24,0.08)]"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#A16A27] text-white">
                        <FaPhoneAlt className="h-3.5 w-3.5" />
                      </span>
                      9220147229
                    </a>
                  </div>

                  <div className="p-4">
                    <p className="text-[10px] font-medium text-[#3A271C]">
                      Sample Status Preview
                    </p>

                    <div className="mt-2 space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-green-500 text-white">
                          <FaCheckCircle className="h-2.5 w-2.5" />
                        </span>
                        <span className="text-[10px] text-[#5A4334]">
                          Request Received
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="h-4 w-4 rounded-full border-[3px] border-[#D7A44E] bg-white" />
                        <span className="text-[10px] text-[#5A4334]">
                          Under Review
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="h-4 w-4 rounded-full border border-[#C9BCA9] bg-white" />
                        <span className="text-[10px] text-[#8D8174]">
                          Resolved
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Bottom ornament */}
        <div className="relative z-10 mx-auto mt-2 flex w-fit items-center gap-3 text-[#A66E2E] opacity-80">
          <span className="h-px w-28 bg-gradient-to-r from-transparent to-[#C79A58]" />
          <LotusOrnament className="h-7 w-10" />
          <span className="h-px w-28 bg-gradient-to-l from-transparent to-[#C79A58]" />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default TrackRequest;