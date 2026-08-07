"use client";

import React, { useState } from "react";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import { FaSearch, FaCheckCircle, FaClock, FaPhoneAlt } from "react-icons/fa";
import { requestApi, TrackedCase } from "@/lib/requestApi";
import { ApiRequestError } from "@/lib/api";

const inputClass =
  "w-full rounded-lg border border-[#E4D5BE] bg-[#FBF8F3] px-3 py-3 text-sm text-[#2C1810] placeholder:text-[#A8937E] transition-all focus:border-[#C9A574] focus:outline-none focus:ring-2 focus:ring-[#C9A574]/40";
const labelClass = "mb-1 block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#4A3428]";

// Family-facing labels for the 11 Case statuses — deliberately reworded from the internal enum
// so the tracking page reads like reassurance, not a system log.
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

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FBF8F3] text-[#2C1810]">
      <Topbar />
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-[#F4EDE3] pb-6 pt-28 lg:pt-32">
          <div className="relative mx-auto w-full max-w-2xl px-4 text-center sm:px-6 xl:px-0">
            <div className="mb-3 inline-flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B6A3E] text-white">
                <FaSearch className="h-3.5 w-3.5" />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8B6A3E]">
                No Login Required
              </span>
            </div>
            <h1 className="font-serif leading-[1.05]">
              <span className="block text-[32px] text-[#2C1810] sm:text-[42px] lg:text-[48px]">
                Track Your
              </span>
              <span className="mt-1 block text-[38px]  text-[#8B6A3E] sm:text-[48px] lg:text-[54px]">
                Request
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#4F3A2D] sm:text-[15px]">
              Enter your Case ID or the Request Number you received when you submitted, along with
              your phone number, to see the latest status.
            </p>
          </div>
        </section>

        <section className="pb-10 pt-6 lg:pb-14">
          <div className="mx-auto w-full max-w-xl px-4 sm:px-6 xl:px-0">
            <div className="relative overflow-hidden rounded-2xl border border-[#E6D6BF] bg-white p-6 shadow-[0_16px_42px_rgba(73,49,31,0.08)]">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#C9A574] to-transparent" />

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
                  <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm font-medium text-red-700">
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

            {result && result.caseId === null && (
              <div className="relative mt-4 overflow-hidden rounded-2xl border border-[#E6D6BF] bg-white p-6 shadow-[0_16px_42px_rgba(73,49,31,0.08)]">
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#C9A574] to-transparent" />

                <div className="flex items-center justify-between">
                  <span className="font-serif text-lg text-[#2C1810]">{result.requestNo}</span>
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                      result.status === "REJECTED" ? "bg-red-50 text-red-700" : "bg-[#8B6A3E]/10 text-[#8B6A3E]"
                    }`}
                  >
                    {STATUS_LABELS[result.status] ?? result.status}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-[#4F3A2D]">
                  {result.status === "REJECTED"
                    ? "We're sorry — this request could not be approved. Please call our helpline below if you'd like to discuss this."
                    : "Our team is reviewing your request. A Case ID will be created and emailed to you (if you gave us an email) once someone begins working on it — you can keep checking back here with this Request Number in the meantime."}
                </p>
              </div>
            )}

            {result && result.caseId !== null && (
              <div className="relative mt-4 overflow-hidden rounded-2xl border border-[#E6D6BF] bg-white p-6 shadow-[0_16px_42px_rgba(73,49,31,0.08)]">
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#C9A574] to-transparent" />

                <div className="flex items-center justify-between">
                  <span className="font-serif text-lg text-[#2C1810]">{result.caseId}</span>
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-semibold ${isTerminalNegative
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
                  <div className="mt-5 space-y-0">
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
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#8B6A3E]">
                      Recent Updates
                    </p>
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

            <div className="mt-4 flex items-center gap-2.5 rounded-2xl border border-[#E6D6BF] bg-[#F6EFE6] px-4 py-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#8B6A3E] text-white">
                <FaPhoneAlt className="h-3.5 w-3.5" />
              </span>
              <p className="text-[11px] leading-[1.4] text-[#5F4A3D]">
                Can't find your Case ID or have questions? Call our 24/7 helpline at{" "}
                <a href="tel:+919654900525" className="font-semibold hover:underline">
                  9220147229
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default TrackRequest;
