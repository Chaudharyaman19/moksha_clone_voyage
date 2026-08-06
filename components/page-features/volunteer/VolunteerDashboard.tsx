"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import { FaCheckCircle, FaTimesCircle, FaClock, FaMapMarkerAlt, FaHandsHelping, FaUserCircle } from "react-icons/fa";
import { useAppSelector } from "@/store/hooks";
import { volunteerApi, VolunteerAssignment, VolunteerProfile } from "@/lib/volunteerApi";
import { ApiRequestError } from "@/lib/api";

const STATUS_META: Record<VolunteerAssignment["status"], { label: string; className: string }> = {
  ASSIGNED: { label: "Awaiting Your Response", className: "bg-amber-50 text-amber-700" },
  ACCEPTED: { label: "Accepted", className: "bg-green-50 text-green-700" },
  DECLINED: { label: "Declined", className: "bg-red-50 text-red-700" },
  COMPLETED: { label: "Completed", className: "bg-blue-50 text-blue-700" },
  WITHDRAWN: { label: "Withdrawn", className: "bg-gray-100 text-gray-600" },
};

const PRIORITY_META: Record<"LOW" | "NORMAL" | "HIGH" | "CRITICAL", { label: string; className: string }> = {
  LOW: { label: "Low", className: "bg-gray-100 text-gray-600" },
  NORMAL: { label: "Normal", className: "bg-gray-100 text-gray-600" },
  HIGH: { label: "High", className: "bg-amber-50 text-amber-700" },
  CRITICAL: { label: "Critical", className: "bg-red-50 text-red-700" },
};

const AVAILABILITY_OPTIONS: { value: VolunteerProfile["availability"]; label: string }[] = [
  { value: "AVAILABLE", label: "Available" },
  { value: "BUSY", label: "Busy" },
  { value: "UNAVAILABLE", label: "Unavailable" },
];

const VOLUNTEER_STATUS_META: Record<VolunteerProfile["status"], { label: string; className: string }> = {
  ACTIVE: { label: "Active", className: "bg-green-50 text-green-700" },
  INACTIVE: { label: "Inactive", className: "bg-gray-100 text-gray-600" },
  BLACKLISTED: { label: "Blacklisted", className: "bg-red-50 text-red-700" },
};

function humanize(value: string): string {
  return value
    .split("_")
    .map((w) => w[0] + w.slice(1).toLowerCase())
    .join(" ");
}

function AssignmentCard({
  assignment,
  busy,
  onRespond,
}: {
  assignment: VolunteerAssignment;
  busy: boolean;
  onRespond: (id: string, response: "ACCEPTED" | "DECLINED") => void;
}) {
  const kase = assignment.case;
  return (
    <div className="rounded-2xl border border-[#E6D6BF] bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-serif text-base text-[#2C1810]">
            {kase ? kase.caseId : "Case"} <span className="font-sans text-xs font-normal text-[#8A7460]">— {assignment.role}</span>
          </p>
          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#8A7460]">
            {kase && (
              <span className="flex items-center gap-1">
                <FaMapMarkerAlt className="h-2.5 w-2.5" /> {kase.city}
              </span>
            )}
            <span>
              Assigned {new Date(assignment.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
            </span>
          </div>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-1.5">
          <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${STATUS_META[assignment.status].className}`}>
            {STATUS_META[assignment.status].label}
          </span>
          {kase && (kase.priority === "HIGH" || kase.priority === "CRITICAL") && (
            <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${PRIORITY_META[kase.priority].className}`}>
              {PRIORITY_META[kase.priority].label}
            </span>
          )}
        </div>
      </div>

      {kase && (
        <p className="mt-2 text-xs text-[#6B584B]">
          Case status: <span className="font-medium text-[#2C1810]">{humanize(kase.status)}</span>
        </p>
      )}
      {assignment.note && <p className="mt-2 text-xs text-[#6B584B]">{assignment.note}</p>}

      {assignment.status === "ASSIGNED" && (
        <>
          <div className="mt-3 flex gap-2">
            <button
              onClick={() => onRespond(assignment._id, "ACCEPTED")}
              disabled={busy}
              className="flex items-center gap-1.5 rounded-lg bg-[#8B6A3E] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#73532F] disabled:opacity-60"
            >
              <FaCheckCircle className="h-3 w-3" /> Accept
            </button>
            <button
              onClick={() => onRespond(assignment._id, "DECLINED")}
              disabled={busy}
              className="flex items-center gap-1.5 rounded-lg border border-[#E4D5BE] px-3 py-1.5 text-xs font-semibold text-[#5F4630] hover:border-[#C9A574] disabled:opacity-60"
            >
              <FaTimesCircle className="h-3 w-3" /> Decline
            </button>
          </div>
          <p className="mt-2 flex items-center gap-1 text-[10px] text-[#A8937E]">
            <FaClock className="h-2.5 w-2.5" /> Please respond as soon as you can
          </p>
        </>
      )}
    </div>
  );
}

function VolunteerDashboard() {
  const router = useRouter();
  const { user, hydrated } = useAppSelector((state) => state.auth);
  const [profile, setProfile] = useState<VolunteerProfile | null>(null);
  const [assignments, setAssignments] = useState<VolunteerAssignment[]>([]);
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [availabilitySaving, setAvailabilitySaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (hydrated && (!user || user.userType !== "VOLUNTEER")) {
      router.replace("/login?redirect=/volunteer/dashboard");
    }
  }, [hydrated, user, router]);

  const load = () => {
    setLoading(true);
    Promise.all([volunteerApi.myProfile(), volunteerApi.myAssignments()])
      .then(([p, a]) => {
        setProfile(p);
        setAssignments(a);
      })
      .catch(() => {
        setProfile(null);
        setAssignments([]);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (hydrated && user?.userType === "VOLUNTEER") load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated, user]);

  const handleRespond = async (assignmentId: string, response: "ACCEPTED" | "DECLINED") => {
    setBusyId(assignmentId);
    setError("");
    try {
      await volunteerApi.respondToAssignment(assignmentId, response);
      load();
    } catch (err) {
      setError(err instanceof ApiRequestError ? err.message : "Could not record your response.");
    } finally {
      setBusyId(null);
    }
  };

  const handleAvailabilityChange = async (availability: VolunteerProfile["availability"]) => {
    if (!profile || availability === profile.availability) return;
    setAvailabilitySaving(true);
    setError("");
    try {
      const updated = await volunteerApi.updateAvailability(availability);
      setProfile((prev) => (prev ? { ...prev, availability: updated.availability } : prev));
    } catch (err) {
      setError(err instanceof ApiRequestError ? err.message : "Could not update your availability.");
    } finally {
      setAvailabilitySaving(false);
    }
  };

  if (!hydrated || !user || user.userType !== "VOLUNTEER") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#FBF8F3]">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#8B6A3E] border-t-transparent" />
      </div>
    );
  }

  const needsResponse = assignments.filter((a) => a.status === "ASSIGNED");
  const active = assignments.filter((a) => a.status === "ACCEPTED");
  const history = assignments.filter((a) => ["COMPLETED", "DECLINED", "WITHDRAWN"].includes(a.status));

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FBF8F3] text-[#2C1810]">
      <Topbar />
      <Navbar />

      <main className="mx-auto w-full max-w-3xl px-4 pb-14 pt-28 sm:px-6 lg:pt-32 xl:px-0">
        <div className="mb-6">
          <h1 className="font-serif text-2xl text-[#2C1810]">
            Namaste, <span className=" text-[#8B6A3E]">{user.name}</span>
          </h1>
          <p className="mt-1 text-sm text-[#6B584B]">Here's your volunteer profile and assigned cases.</p>
        </div>

        {error && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm font-medium text-red-700">{error}</div>
        )}

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#8B6A3E] border-t-transparent" />
          </div>
        ) : (
          <>
            {profile && (
              <div className="mb-6 rounded-2xl border border-[#E6D6BF] bg-white p-5 shadow-sm">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    {profile.avatarUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={profile.avatarUrl} alt="" className="h-12 w-12 rounded-full object-cover" />
                    ) : (
                      <FaUserCircle className="h-12 w-12 text-[#C9A574]" />
                    )}
                    <div>
                      <p className="font-serif text-lg text-[#2C1810]">{profile.name}</p>
                      <p className="flex items-center gap-1 text-xs text-[#8A7460]">
                        <FaMapMarkerAlt className="h-2.5 w-2.5" /> {profile.city}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-semibold ${VOLUNTEER_STATUS_META[profile.status].className}`}
                  >
                    {VOLUNTEER_STATUS_META[profile.status].label}
                  </span>
                </div>

                {profile.skills.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {profile.skills.map((skill) => (
                      <span key={skill} className="rounded-full bg-[#F6EEDF] px-2.5 py-1 text-[11px] font-medium text-[#6B584B]">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-4 flex items-center gap-1.5 text-xs text-[#6B584B]">
                  <FaHandsHelping className="h-3 w-3 text-[#8B6A3E]" />
                  <span className="font-semibold text-[#2C1810]">{profile.totalAssignments}</span> assignments completed
                </div>

                <div className="mt-4 border-t border-[#F1E7D6] pt-4">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-[#8A7460]">Your Availability</p>
                  <div className="flex gap-2">
                    {AVAILABILITY_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => handleAvailabilityChange(opt.value)}
                        disabled={availabilitySaving}
                        className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors disabled:opacity-60 ${
                          profile.availability === opt.value
                            ? "bg-[#8B6A3E] text-white"
                            : "border border-[#E4D5BE] text-[#5F4630] hover:border-[#C9A574]"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {assignments.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-[#E4D5BE] bg-white p-10 text-center">
                <p className="text-sm text-[#7A685B]">No assignments yet — our team will reach out when a case near you needs support.</p>
              </div>
            ) : (
              <div className="space-y-8">
                {needsResponse.length > 0 && (
                  <section>
                    <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#8A7460]">Needs Your Response</h2>
                    <div className="space-y-3">
                      {needsResponse.map((a) => (
                        <AssignmentCard key={a._id} assignment={a} busy={busyId === a._id} onRespond={handleRespond} />
                      ))}
                    </div>
                  </section>
                )}

                {active.length > 0 && (
                  <section>
                    <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#8A7460]">Active Assignments</h2>
                    <div className="space-y-3">
                      {active.map((a) => (
                        <AssignmentCard key={a._id} assignment={a} busy={busyId === a._id} onRespond={handleRespond} />
                      ))}
                    </div>
                  </section>
                )}

                {history.length > 0 && (
                  <section>
                    <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#8A7460]">History</h2>
                    <div className="space-y-3">
                      {history.map((a) => (
                        <AssignmentCard key={a._id} assignment={a} busy={busyId === a._id} onRespond={handleRespond} />
                      ))}
                    </div>
                  </section>
                )}
              </div>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default VolunteerDashboard;
