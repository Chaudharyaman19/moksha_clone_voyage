"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import { FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";
import { useAppSelector } from "@/store/hooks";
import { volunteerApi, VolunteerAssignment } from "@/lib/volunteerApi";
import { ApiRequestError } from "@/lib/api";

const STATUS_META: Record<VolunteerAssignment["status"], { label: string; className: string }> = {
  ASSIGNED: { label: "Awaiting Your Response", className: "bg-amber-50 text-amber-700" },
  ACCEPTED: { label: "Accepted", className: "bg-green-50 text-green-700" },
  DECLINED: { label: "Declined", className: "bg-red-50 text-red-700" },
  COMPLETED: { label: "Completed", className: "bg-blue-50 text-blue-700" },
  WITHDRAWN: { label: "Withdrawn", className: "bg-gray-100 text-gray-600" },
};

function VolunteerDashboard() {
  const router = useRouter();
  const { user, hydrated } = useAppSelector((state) => state.auth);
  const [assignments, setAssignments] = useState<VolunteerAssignment[]>([]);
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (hydrated && (!user || user.userType !== "VOLUNTEER")) {
      router.replace("/login?redirect=/volunteer/dashboard");
    }
  }, [hydrated, user, router]);

  const load = () => {
    setLoading(true);
    volunteerApi
      .myAssignments()
      .then(setAssignments)
      .catch(() => setAssignments([]))
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

  if (!hydrated || !user || user.userType !== "VOLUNTEER") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#FBF8F3]">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#8B6A3E] border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FBF8F3] text-[#2C1810]">
      <Topbar />
      <Navbar />

      <main className="mx-auto w-full max-w-3xl px-4 pb-14 pt-28 sm:px-6 lg:pt-32 xl:px-0">
        <div className="mb-6">
          <h1 className="font-serif text-2xl text-[#2C1810]">
            Namaste, <span className="italic text-[#8B6A3E]">{user.name}</span>
          </h1>
          <p className="mt-1 text-sm text-[#6B584B]">Here are the cases assigned to you.</p>
        </div>

        {error && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm font-medium text-red-700">{error}</div>
        )}

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#8B6A3E] border-t-transparent" />
          </div>
        ) : assignments.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-[#E4D5BE] bg-white p-10 text-center">
            <p className="text-sm text-[#7A685B]">No assignments yet — our team will reach out when a case near you needs support.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {assignments.map((a) => (
              <div key={a._id} className="rounded-2xl border border-[#E6D6BF] bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-serif text-base text-[#2C1810]">Role: {a.role}</p>
                    <p className="mt-0.5 text-xs text-[#8A7460]">
                      Assigned {new Date(a.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                    </p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${STATUS_META[a.status].className}`}>
                    {STATUS_META[a.status].label}
                  </span>
                </div>
                {a.note && <p className="mt-2 text-xs text-[#6B584B]">{a.note}</p>}

                {a.status === "ASSIGNED" && (
                  <div className="mt-3 flex gap-2">
                    <button
                      onClick={() => handleRespond(a._id, "ACCEPTED")}
                      disabled={busyId === a._id}
                      className="flex items-center gap-1.5 rounded-lg bg-[#8B6A3E] px-3 py-1.5 text-xs font-semibold text-white hover:bg-[#73532F] disabled:opacity-60"
                    >
                      <FaCheckCircle className="h-3 w-3" /> Accept
                    </button>
                    <button
                      onClick={() => handleRespond(a._id, "DECLINED")}
                      disabled={busyId === a._id}
                      className="flex items-center gap-1.5 rounded-lg border border-[#E4D5BE] px-3 py-1.5 text-xs font-semibold text-[#5F4630] hover:border-[#C9A574] disabled:opacity-60"
                    >
                      <FaTimesCircle className="h-3 w-3" /> Decline
                    </button>
                  </div>
                )}
                {a.status === "ASSIGNED" && (
                  <p className="mt-2 flex items-center gap-1 text-[10px] text-[#A8937E]">
                    <FaClock className="h-2.5 w-2.5" /> Please respond as soon as you can
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default VolunteerDashboard;
