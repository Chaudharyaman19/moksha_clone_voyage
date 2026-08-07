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
} from "react-icons/fa";
import { requestApi, TrackedCase } from "@/lib/requestApi";
import { ApiRequestError } from "@/lib/api";

const inputClass =
  "w-full rounded-lg border border-[#E4D5BE] bg-[#FBF8F3] px-3 py-3 text-sm text-[#2C1810] placeholder:text-[#A8937E] transition-all focus:border-[#C9A574] focus:outline-none focus:ring-2 focus:ring-[#C9A574]/40";
const labelClass = "mb-1 block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#4A3428]";
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
  // Pre-conversion states — result.caseId is null while these are the status (see caseId===null
  // branch below), so these two never collide with the actual Case status enum above.
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
  { icon: FaKeyboard, text: "Enter your Case ID or Request Number with your phone number." },
  { icon: FaHourglassHalf, text: "We match it against your submission — no login, no waiting on hold." },
  { icon: FaCheckCircle, text: "See exactly where things stand, updated the moment our team acts." },
];

function LotusOrnament({ className = "h-8 w-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 72 50" className={className} fill="none" aria-hidden="true">
      <path d="M36 4c-7 8-9 15-7 22 2 5 7 9 7 9s5-4 7-9c2-7 0-14-7-22Z" stroke="#8B6A3E" strokeWidth="1.8" />
      <path d="M12 17c9 0 16 3 20 9 3 5 3 10 3 10s-6 0-12-4c-6-4-9-9-11-15Z" stroke="#8B6A3E" strokeWidth="1.8" />
      <path d="M60 17c-9 0-16 3-20 9-3 5-3 10-3 10s6 0 12-4c6-4 9-9 11-15Z" stroke="#8B6A3E" strokeWidth="1.8" />
      <path d="M20 12c7 2 12 6 15 12 2 5 1 10 1 10s-6-2-10-7c-4-5-6-10-6-15Z" stroke="#8B6A3E" strokeWidth="1.8" />
      <path d="M52 12c-7 2-12 6-15 12-2 5-1 10-1 10s6-2 10-7c4-5 6-10 6-15Z" stroke="#8B6A3E" strokeWidth="1.8" />
      <path d="M8 31c9 8 18 12 28 12s19-4 28-12" stroke="#8B6A3E" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
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
          : "We couldn't find a case with that ID and phone number. Please check and try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const currentStepIndex = result ? STATUS_ORDER.indexOf(result.status) : -1;
  const isTerminalNegative = result?.status === "REJECTED" || result?.status === "CANCELLED";
  const isPending = result?.caseId === null;

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FCF8F1] text-[#2C1810]">
      <Topbar />
      <Navbar />

      <main className="relative overflow-hidden pb-14 pt-28 lg:pb-16 lg:pt-32">
        {/* Side ornaments */}
        <div className="pointer-events-none absolute -left-16 top-[30%] hidden opacity-[0.07] lg:block">
          <LotusOrnament className="h-60 w-60" />
        </div>
        <div className="pointer-events-none absolute -right-16 top-[46%] hidden opacity-[0.07] lg:block">
          <LotusOrnament className="h-60 w-60" />
        </div>

        <div className="relative mx-auto w-full max-w-2xl px-4 text-center sm:px-6 xl:px-0">
          <div className="flex items-center justify-center gap-4">
            <span className="hidden h-px w-20 bg-gradient-to-r from-transparent to-[#C9A574] sm:block" />
            <LotusOrnament className="h-9 w-13" />
            <span className="hidden h-px w-20 bg-gradient-to-l from-transparent to-[#C9A574] sm:block" />
          </div>

          <h1 className="mt-2 font-serif leading-[1.05]">
            <span className="block text-[32px] text-[#2C1810] sm:text-[42px] lg:text-[48px]">Track Your</span>
            <span className="mt-1 block text-[38px] italic text-[#8B6A3E] sm:text-[48px] lg:text-[54px]">Request</span>
          </h1>

          <div className="mt-3 flex items-center justify-center gap-2.5">
            <span className="h-px w-14 bg-[#C9A574]" />
            <span className="h-2 w-2 rotate-45 border border-[#8B6A3E]" />
            <span className="h-px w-14 bg-[#C9A574]" />
          </div>

          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#4F3A2D] sm:text-[15px]">
            Enter your Case ID or the Request Number you received when you submitted, along with your phone
            number, to see the latest status.
          </p>
        </div>

        <div className="relative mx-auto mt-8 w-full max-w-5xl px-4 sm:px-6 xl:px-0">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_300px]">
            {/* Main column: search + result */}
            <div>
              <div className="relative overflow-hidden rounded-2xl border border-[#E6D6BF] bg-white p-6 shadow-[0_16px_42px_rgba(73,49,31,0.08)]">
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#C9A574] to-transparent" />

                <div className="mb-4 flex items-center gap-2.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#8B6A3E]/10 text-[#8B6A3E]">
                    <FaSearch className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <h2 className="font-serif text-base text-[#2C1810]">Find Your Status</h2>
                    <p className="text-[11px] text-[#8A7460]">No login required — just two details</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className={labelClass}>Case ID or Request Number *</label>
                    <input
                      type="text"
                      value={caseId}
                      onChange={(e) => setCaseId(e.target.value)}
                      required
                      className={inputClass}
                      placeholder="MS-2026-000125 or REQ-2026-000125"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Phone Number Used in the Request *</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      pattern="[6-9][0-9]{9}"
                      title="10-digit mobile number"
                      className={inputClass}
                      placeholder="98765 43210"
                    />
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
                    className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[#8B6A3E] px-4 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#73532F] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isLoading ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Searching...
                      </>
                    ) : (
                      <>
                        <FaSearch className="h-3.5 w-3.5" />
                        Track Status
                      </>
                    )}
                  </button>
                </form>
              </div>

              {result && isPending && (
                <div className="relative mt-5 overflow-hidden rounded-2xl border border-[#E6D6BF] bg-white p-6 shadow-[0_16px_42px_rgba(73,49,31,0.08)]">
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#C9A574] to-transparent" />

                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${result.status === "REJECTED" ? "bg-red-50 text-red-600" : "bg-[#8B6A3E]/10 text-[#8B6A3E]"
                          }`}
                      >
                        {result.status === "REJECTED" ? (
                          <FaExclamationCircle className="h-4 w-4" />
                        ) : (
                          <FaHourglassHalf className="h-4 w-4" />
                        )}
                      </span>
                      <div>
                        <p className="font-serif text-lg text-[#2C1810]">{result.requestNo}</p>
                        <p className="text-[11px] text-[#8A7460]">Request Number</p>
                      </div>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold ${result.status === "REJECTED" ? "bg-red-50 text-red-700" : "bg-[#8B6A3E]/10 text-[#8B6A3E]"
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

              {result && !isPending && (
                <div className="relative mt-5 overflow-hidden rounded-2xl border border-[#E6D6BF] bg-white p-6 shadow-[0_16px_42px_rgba(73,49,31,0.08)]">
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#C9A574] to-transparent" />

                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${isTerminalNegative
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
                        <p className="font-serif text-lg text-[#2C1810]">{result.caseId}</p>
                        <p className="text-[11px] text-[#8A7460]">Case ID · {result.requestNo}</p>
                      </div>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-3 py-1 text-[11px] font-semibold ${isTerminalNegative
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
                        const isDone = currentStepIndex >= 0 && index <= currentStepIndex;
                        const isLast = index === STATUS_ORDER.length - 1;
                        return (
                          <div key={status} className="flex gap-3">
                            <div className="flex flex-col items-center">
                              <span
                                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${isDone ? "bg-[#8B6A3E] text-white" : "bg-[#F0E5D3] text-[#A8937E]"
                                  }`}
                              >
                                {isDone ? <FaCheckCircle className="h-3 w-3" /> : <FaClock className="h-3 w-3" />}
                              </span>
                              {!isLast && (
                                <span className={`w-px flex-1 ${isDone ? "bg-[#8B6A3E]" : "bg-[#F0E5D3]"}`} style={{ minHeight: "20px" }} />
                              )}
                            </div>
                            <div className="pb-4">
                              <p className={`text-sm font-semibold ${isDone ? "text-[#2C1810]" : "text-[#A8937E]"}`}>
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
                      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8B6A3E]">Recent Updates</p>
                      <div className="space-y-2">
                        {[...result.timeline].reverse().slice(0, 5).map((entry, i) => (
                          <div key={i} className="text-xs leading-5 text-[#6B584B]">
                            <span className="font-semibold text-[#2C1810]">
                              {new Date(entry.at).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
                            </span>{" "}
                            — {entry.note || STATUS_LABELS[entry.toStatus ?? ""] || entry.event}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Sidebar: how it works + helpline */}
            <aside className="space-y-4">
              <div className="rounded-2xl border border-[#E6D6BF] bg-white/70 p-5">
                <h3 className="flex items-center gap-2 font-serif text-sm text-[#2C1810]">
                  <FaShieldAlt className="h-3.5 w-3.5 text-[#8B6A3E]" />
                  How Tracking Works
                </h3>
                <div className="mt-4 space-y-4">
                  {HOW_IT_WORKS.map(({ icon: Icon, text }, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#8B6A3E]/10 text-[#8B6A3E]">
                        <Icon className="h-3 w-3" />
                      </span>
                      <p className="text-xs leading-5 text-[#5F4A3D]">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-[#E6D6BF] bg-[#F6EFE6] p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#8B6A3E] text-white">
                  <FaPhoneAlt className="h-3.5 w-3.5" />
                </span>
                <p className="mt-3 text-sm font-semibold text-[#2C1810]">Need help instead?</p>
                <p className="mt-1 text-[11px] leading-[1.5] text-[#5F4A3D]">
                  Can&apos;t find your Case ID or have questions? Our helpline is available 24/7.
                </p>
                <a
                  href="tel:+919220147229"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#8B6A3E] hover:underline"
                >
                  9220147229
                </a>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default TrackRequest;
