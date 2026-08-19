"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
  FaMapMarkerAlt,
  FaHandsHelping,
  FaUserCircle,
  FaPen,
  FaKey,
  FaInfoCircle,
  FaPhoneAlt,
  FaCloudUploadAlt,
  FaFileAlt,
  FaDirections,
} from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { logout, updateUser } from "@/store/slices/authSlice";
import {
  volunteerApi,
  VolunteerAssignment,
  VolunteerAssignmentDetail,
  VolunteerProfile,
  VolunteerDocumentType,
  VOLUNTEER_PREFERRED_ROLES,
  VOLUNTEER_SCHEDULE_PREFERENCES,
  VOLUNTEER_DOCUMENT_TYPES,
} from "@/lib/volunteerApi";
import { userApi } from "@/lib/userApi";
import { authApi } from "@/lib/authApi";
import { directionsUrl } from "@/lib/maps";
import { lookupPincode } from "@/lib/pincode";
import { ApiRequestError } from "@/lib/api";
import VolunteerModal from "./VolunteerModal";

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

const INPUT_CLASSES =
  "w-full rounded-lg border border-[#E4D5BE] bg-white px-3 py-2 text-sm text-[#2C1810] placeholder:text-[#A8937E] focus:border-[#8B6A3E] focus:outline-none focus:ring-2 focus:ring-[#8B6A3E]/15";
const LABEL_CLASSES = "mb-1 block text-[14px] font-semibold uppercase tracking-wide text-[#8A7460]";

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
  onViewDetails,
}: {
  assignment: VolunteerAssignment;
  busy: boolean;
  onRespond: (id: string, response: "ACCEPTED" | "DECLINED") => void;
  onViewDetails: (assignment: VolunteerAssignment) => void;
}) {
  const kase = assignment.case;
  return (
    <div className="rounded-2xl border border-[#E6D6BF] bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-serif text-base text-[#2C1810]">
            {kase ? kase.caseId : "Case"} <span className="font-sans text-[14px] font-normal text-[#8A7460]">— {assignment.role}</span>
          </p>
          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[14px] text-[#8A7460]">
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
          <span className={`rounded-full px-3 py-1 text-[14px] font-semibold ${STATUS_META[assignment.status].className}`}>
            {STATUS_META[assignment.status].label}
          </span>
          {kase && (kase.priority === "HIGH" || kase.priority === "CRITICAL") && (
            <span className={`rounded-full px-2.5 py-0.5 text-[14px] font-semibold ${PRIORITY_META[kase.priority].className}`}>
              {PRIORITY_META[kase.priority].label}
            </span>
          )}
        </div>
      </div>

      {kase && (
        <p className="mt-2 text-[14px] text-[#6B584B]">
          Case status: <span className="font-medium text-[#2C1810]">{humanize(kase.status)}</span>
        </p>
      )}
      {assignment.note && <p className="mt-2 text-[14px] text-[#6B584B]">{assignment.note}</p>}

      <div className="mt-3 flex flex-wrap gap-2">
        {assignment.status === "ASSIGNED" && (
          <>
            <button
              onClick={() => onRespond(assignment._id, "ACCEPTED")}
              disabled={busy}
              className="flex items-center gap-1.5 rounded-lg bg-[#8B6A3E] px-3 py-1.5 text-[14px] font-semibold text-white hover:bg-[#73532F] disabled:opacity-60"
            >
              <FaCheckCircle className="h-3 w-3" /> Accept
            </button>
            <button
              onClick={() => onRespond(assignment._id, "DECLINED")}
              disabled={busy}
              className="flex items-center gap-1.5 rounded-lg border border-[#E4D5BE] px-3 py-1.5 text-[14px] font-semibold text-[#5F4630] hover:border-[#C9A574] disabled:opacity-60"
            >
              <FaTimesCircle className="h-3 w-3" /> Decline
            </button>
          </>
        )}
        {kase && (
          <button
            onClick={() => onViewDetails(assignment)}
            className="flex items-center gap-1.5 rounded-lg border border-[#E4D5BE] px-3 py-1.5 text-[14px] font-semibold text-[#5F4630] hover:border-[#C9A574]"
          >
            <FaInfoCircle className="h-3 w-3" /> View Details
          </button>
        )}
      </div>
      {assignment.status === "ASSIGNED" && (
        <p className="mt-2 flex items-center gap-1 text-[14px] text-[#A8937E]">
          <FaClock className="h-2.5 w-2.5" /> Please respond as soon as you can
        </p>
      )}
    </div>
  );
}

interface EditForm {
  name: string;
  email: string;
  city: string;
  skills: string;
  address: string;
  state: string;
  pincode: string;
  schedulePreference: string;
  preferredRole: string;
}

function VolunteerDashboard() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { user, hydrated } = useAppSelector((state) => state.auth);
  const [profile, setProfile] = useState<VolunteerProfile | null>(null);
  const [assignments, setAssignments] = useState<VolunteerAssignment[]>([]);
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [availabilitySaving, setAvailabilitySaving] = useState(false);
  const [error, setError] = useState("");

  const [showEditProfile, setShowEditProfile] = useState(false);
  const [editForm, setEditForm] = useState<EditForm | null>(null);
  const [editSaving, setEditSaving] = useState(false);
  const [editError, setEditError] = useState("");
  const [pincodeStatus, setPincodeStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  // Pincode-first lookup: once 6 digits are typed, auto-fill state/city so there's less to retype.
  // Both stay editable afterward in case the lookup gets it wrong.
  useEffect(() => {
    const pincode = editForm?.pincode ?? "";
    if (!/^\d{6}$/.test(pincode)) {
      setPincodeStatus("idle");
      return;
    }
    let cancelled = false;
    setPincodeStatus("loading");
    lookupPincode(pincode).then((result) => {
      if (cancelled) return;
      if (result) {
        setEditForm((current) => (current ? { ...current, city: result.city, state: result.state } : current));
        setPincodeStatus("done");
      } else {
        setPincodeStatus("error");
      }
    });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editForm?.pincode]);

  const [showChangePassword, setShowChangePassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pwSaving, setPwSaving] = useState(false);
  const [pwError, setPwError] = useState("");

  const [viewingAssignment, setViewingAssignment] = useState<VolunteerAssignment | null>(null);
  const [assignmentDetail, setAssignmentDetail] = useState<VolunteerAssignmentDetail | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [detailError, setDetailError] = useState("");

  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploadDocType, setUploadDocType] = useState<VolunteerDocumentType>("CREMATION_PROOF");
  const [uploadIsProof, setUploadIsProof] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [uploadedDocs, setUploadedDocs] = useState<{ fileName: string; docType: string }[]>([]);

  useEffect(() => {
    if (hydrated && (!user || user.userType !== "VOLUNTEER")) {
      router.replace("/login?redirect=/volunteer/dashboard");
    }
  }, [hydrated, user, router]);

  const load = () => {
    setLoading(true);
    setError("");
    Promise.all([volunteerApi.myProfile(), volunteerApi.myAssignments()])
      .then(([p, a]) => {
        setProfile(p);
        setAssignments(a);
      })
      .catch((err) => {
        setProfile(null);
        setAssignments([]);
        setError(err instanceof ApiRequestError ? err.message : "Could not load your volunteer dashboard. Please try again.");
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

  const openEditProfile = () => {
    if (!profile) return;
    setEditForm({
      name: profile.name ?? "",
      email: profile.email ?? "",
      city: profile.city,
      skills: profile.skills.join(", "),
      address: profile.address ?? "",
      state: profile.state ?? "",
      pincode: profile.pincode ?? "",
      schedulePreference: profile.schedulePreference ?? "",
      preferredRole: profile.preferredRole ?? "",
    });
    setEditError("");
    setPincodeStatus("idle");
    setShowEditProfile(true);
  };

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editForm) return;
    setEditSaving(true);
    setEditError("");
    try {
      await Promise.all([
        userApi.updateMyProfile({ name: editForm.name, email: editForm.email }),
        volunteerApi.updateProfile({
          city: editForm.city,
          skills: editForm.skills
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean),
          address: editForm.address || undefined,
          state: editForm.state || undefined,
          pincode: editForm.pincode || undefined,
          schedulePreference: (editForm.schedulePreference || undefined) as VolunteerProfile["schedulePreference"],
          preferredRole: (editForm.preferredRole || undefined) as VolunteerProfile["preferredRole"],
        }),
      ]);
      dispatch(updateUser({ name: editForm.name, email: editForm.email }));
      setShowEditProfile(false);
      load();
    } catch (err) {
      setEditError(err instanceof ApiRequestError ? err.message : "Could not save your profile.");
    } finally {
      setEditSaving(false);
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setPwError("");
    if (newPassword !== confirmPassword) {
      setPwError("New passwords do not match.");
      return;
    }
    setPwSaving(true);
    try {
      await authApi.changePassword(currentPassword, newPassword);
      // Changing password revokes every session for this account, including the current one.
      dispatch(logout());
      router.push("/login?passwordChanged=1");
    } catch (err) {
      setPwError(err instanceof ApiRequestError ? err.message : "Could not change password.");
    } finally {
      setPwSaving(false);
    }
  };

  const openAssignmentDetail = (assignment: VolunteerAssignment) => {
    setViewingAssignment(assignment);
    setAssignmentDetail(null);
    setDetailError("");
    setDetailLoading(true);
    setUploadFile(null);
    setUploadError("");
    setUploadedDocs([]);
    volunteerApi
      .assignmentDetail(assignment._id)
      .then(setAssignmentDetail)
      .catch((err) => setDetailError(err instanceof ApiRequestError ? err.message : "Could not load assignment details."))
      .finally(() => setDetailLoading(false));
  };

  const handleUploadDocument = async () => {
    if (!viewingAssignment || !uploadFile) return;
    setUploading(true);
    setUploadError("");
    try {
      const doc = await volunteerApi.uploadDocument(viewingAssignment._id, uploadFile, uploadDocType, uploadIsProof);
      setUploadedDocs((prev) => [...prev, { fileName: doc.fileName, docType: doc.docType }]);
      setUploadFile(null);
    } catch (err) {
      setUploadError(err instanceof ApiRequestError ? err.message : "Could not upload this file.");
    } finally {
      setUploading(false);
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
        <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="font-serif text-2xl text-[#2C1810]">
              Namaste, <span className=" text-[#8B6A3E]">{user.name}</span>
            </h1>
            <p className="mt-1 text-sm text-[#6B584B]">Here's your volunteer profile and assigned cases.</p>
          </div>
          <button
            onClick={() => setShowChangePassword(true)}
            className="flex items-center gap-1.5 rounded-lg border border-[#E4D5BE] bg-white px-3 py-1.5 text-[14px] font-semibold text-[#5F4630] hover:border-[#C9A574]"
          >
            <FaKey className="h-3 w-3" /> Change Password
          </button>
        </div>

        {error && (
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-red-200 bg-red-50 p-3 text-sm font-medium text-red-700">
            <span>{error}</span>
            {!loading && !profile && (
              <button type="button" onClick={load} className="rounded-md border border-red-300 px-3 py-1 text-[14px] hover:bg-red-100">
                Try Again
              </button>
            )}
          </div>
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
                      <img
                        src={profile.avatarUrl}
                        alt={`${profile.name ?? "Volunteer"} profile`}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                    ) : (
                      <FaUserCircle className="h-12 w-12 text-[#C9A574]" />
                    )}
                    <div>
                      <p className="font-serif text-lg text-[#2C1810]">{profile.name}</p>
                      <p className="flex items-center gap-1 text-[14px] text-[#8A7460]">
                        <FaMapMarkerAlt className="h-2.5 w-2.5" /> {profile.city}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`rounded-full px-3 py-1 text-[14px] font-semibold ${VOLUNTEER_STATUS_META[profile.status].className}`}
                    >
                      {VOLUNTEER_STATUS_META[profile.status].label}
                    </span>
                    <button
                      onClick={openEditProfile}
                      className="flex h-7 w-7 items-center justify-center rounded-lg border border-[#E4D5BE] text-[#5F4630] hover:border-[#C9A574]"
                      aria-label="Edit profile"
                    >
                      <FaPen className="h-3 w-3" />
                    </button>
                  </div>
                </div>

                {profile.skills.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {profile.skills.map((skill) => (
                      <span key={skill} className="rounded-full bg-[#F6EEDF] px-2.5 py-1 text-[14px] font-medium text-[#6B584B]">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-4 flex items-center gap-1.5 text-[14px] text-[#6B584B]">
                  <FaHandsHelping className="h-3 w-3 text-[#8B6A3E]" />
                  <span className="font-semibold text-[#2C1810]">{profile.totalAssignments}</span> assignments accepted
                </div>

                <div className="mt-4 border-t border-[#F1E7D6] pt-4">
                  <p className="mb-2 text-[14px] font-semibold uppercase tracking-wide text-[#8A7460]">Your Availability</p>
                  <div className="flex gap-2">
                    {AVAILABILITY_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => handleAvailabilityChange(opt.value)}
                        disabled={availabilitySaving}
                        className={`rounded-lg px-3 py-1.5 text-[14px] font-semibold transition-colors disabled:opacity-60 ${
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

            {profile && assignments.length === 0 ? (
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
                        <AssignmentCard
                          key={a._id}
                          assignment={a}
                          busy={busyId === a._id}
                          onRespond={handleRespond}
                          onViewDetails={openAssignmentDetail}
                        />
                      ))}
                    </div>
                  </section>
                )}

                {active.length > 0 && (
                  <section>
                    <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#8A7460]">Active Assignments</h2>
                    <div className="space-y-3">
                      {active.map((a) => (
                        <AssignmentCard
                          key={a._id}
                          assignment={a}
                          busy={busyId === a._id}
                          onRespond={handleRespond}
                          onViewDetails={openAssignmentDetail}
                        />
                      ))}
                    </div>
                  </section>
                )}

                {history.length > 0 && (
                  <section>
                    <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[#8A7460]">History</h2>
                    <div className="space-y-3">
                      {history.map((a) => (
                        <AssignmentCard
                          key={a._id}
                          assignment={a}
                          busy={busyId === a._id}
                          onRespond={handleRespond}
                          onViewDetails={openAssignmentDetail}
                        />
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

      {showEditProfile && editForm && (
        <VolunteerModal
          title="Edit Profile"
          onClose={() => setShowEditProfile(false)}
          footer={
            <>
              <button
                onClick={() => setShowEditProfile(false)}
                className="rounded-lg border border-[#E4D5BE] px-3.5 py-2 text-[14px] font-semibold text-[#5F4630] hover:border-[#C9A574]"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveProfile}
                disabled={editSaving}
                className="rounded-lg bg-[#8B6A3E] px-3.5 py-2 text-[14px] font-semibold text-white hover:bg-[#73532F] disabled:opacity-60"
              >
                {editSaving ? "Saving..." : "Save Changes"}
              </button>
            </>
          }
        >
          <form onSubmit={handleSaveProfile} className="space-y-3">
            <div>
              <label className={LABEL_CLASSES}>Name</label>
              <input
                className={INPUT_CLASSES}
                value={editForm.name}
                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label className={LABEL_CLASSES}>Email</label>
              <input
                type="email"
                className={INPUT_CLASSES}
                value={editForm.email}
                onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                required
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className={LABEL_CLASSES}>Pincode</label>
                <input
                  className={INPUT_CLASSES}
                  value={editForm.pincode}
                  onChange={(e) => setEditForm({ ...editForm, pincode: e.target.value })}
                  inputMode="numeric"
                  pattern="[0-9]{6}"
                  placeholder="6-digit pincode"
                />
              </div>
              <div>
                <label className={LABEL_CLASSES}>State</label>
                <input
                  className={INPUT_CLASSES}
                  value={editForm.state}
                  onChange={(e) => setEditForm({ ...editForm, state: e.target.value })}
                  placeholder="Auto-filled from pincode"
                />
              </div>
              <div>
                <label className={LABEL_CLASSES}>City</label>
                <input
                  className={INPUT_CLASSES}
                  value={editForm.city}
                  onChange={(e) => setEditForm({ ...editForm, city: e.target.value })}
                  required
                  placeholder="Auto-filled from pincode"
                />
              </div>
            </div>
            {pincodeStatus === "loading" && <p className="text-[14px] text-[#8A7460]">Looking up state and city…</p>}
            {pincodeStatus === "done" && (
              <p className="text-[14px] text-emerald-600">
                Found: {editForm.city}, {editForm.state}
              </p>
            )}
            {pincodeStatus === "error" && (
              <p className="text-[14px] text-red-600">Couldn&apos;t find this pincode — please enter state and city manually.</p>
            )}
            <div>
              <label className={LABEL_CLASSES}>Address</label>
              <input
                className={INPUT_CLASSES}
                value={editForm.address}
                onChange={(e) => setEditForm({ ...editForm, address: e.target.value })}
              />
            </div>
            <div>
              <label className={LABEL_CLASSES}>Skills (comma-separated)</label>
              <input
                className={INPUT_CLASSES}
                value={editForm.skills}
                onChange={(e) => setEditForm({ ...editForm, skills: e.target.value })}
                placeholder="First Aid, Driving, Translation"
              />
            </div>
            <div>
              <label className={LABEL_CLASSES}>Schedule Preference</label>
              <select
                className={INPUT_CLASSES}
                value={editForm.schedulePreference}
                onChange={(e) => setEditForm({ ...editForm, schedulePreference: e.target.value })}
              >
                <option value="">Not set</option>
                {VOLUNTEER_SCHEDULE_PREFERENCES.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={LABEL_CLASSES}>Preferred Role</label>
              <select
                className={INPUT_CLASSES}
                value={editForm.preferredRole}
                onChange={(e) => setEditForm({ ...editForm, preferredRole: e.target.value })}
              >
                <option value="">Not set</option>
                {VOLUNTEER_PREFERRED_ROLES.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            {editError && <p className="text-[14px] font-medium text-red-600">{editError}</p>}
          </form>
        </VolunteerModal>
      )}

      {showChangePassword && (
        <VolunteerModal
          title="Change Password"
          onClose={() => setShowChangePassword(false)}
          footer={
            <>
              <button
                onClick={() => setShowChangePassword(false)}
                className="rounded-lg border border-[#E4D5BE] px-3.5 py-2 text-[14px] font-semibold text-[#5F4630] hover:border-[#C9A574]"
              >
                Cancel
              </button>
              <button
                onClick={handleChangePassword}
                disabled={pwSaving}
                className="rounded-lg bg-[#8B6A3E] px-3.5 py-2 text-[14px] font-semibold text-white hover:bg-[#73532F] disabled:opacity-60"
              >
                {pwSaving ? "Saving..." : "Change Password"}
              </button>
            </>
          }
        >
          <form onSubmit={handleChangePassword} className="space-y-3">
            <div>
              <label className={LABEL_CLASSES}>Current Password</label>
              <input
                type="password"
                className={INPUT_CLASSES}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label className={LABEL_CLASSES}>New Password</label>
              <input
                type="password"
                className={INPUT_CLASSES}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                minLength={8}
                required
              />
            </div>
            <div>
              <label className={LABEL_CLASSES}>Confirm New Password</label>
              <input
                type="password"
                className={INPUT_CLASSES}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                minLength={8}
                required
              />
            </div>
            <p className="text-[14px] text-[#8A7460]">At least 8 characters. You'll be signed out of every session after this.</p>
            {pwError && <p className="text-[14px] font-medium text-red-600">{pwError}</p>}
          </form>
        </VolunteerModal>
      )}

      {viewingAssignment && (
        <VolunteerModal title={viewingAssignment.case?.caseId ?? "Assignment Details"} onClose={() => setViewingAssignment(null)}>
          {detailLoading ? (
            <div className="flex justify-center py-8">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-[#8B6A3E] border-t-transparent" />
            </div>
          ) : detailError ? (
            <p className="text-sm font-medium text-red-600">{detailError}</p>
          ) : assignmentDetail ? (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`rounded-full px-3 py-1 text-[14px] font-semibold ${STATUS_META[assignmentDetail.assignment.status].className}`}>
                  {STATUS_META[assignmentDetail.assignment.status].label}
                </span>
                <span className="rounded-full bg-[#F6EEDF] px-3 py-1 text-[14px] font-semibold text-[#6B584B]">
                  {humanize(assignmentDetail.case.status)}
                </span>
              </div>

              {assignmentDetail.pickup && (
                <div>
                  <p className={LABEL_CLASSES}>Pickup Location</p>
                  <p className="flex items-start gap-1.5 text-sm text-[#2C1810]">
                    <FaMapMarkerAlt className="mt-0.5 h-3 w-3 shrink-0 text-[#8B6A3E]" />
                    {assignmentDetail.pickup.address}, {assignmentDetail.pickup.area}, {assignmentDetail.pickup.city},{" "}
                    {assignmentDetail.pickup.state} - {assignmentDetail.pickup.pincode}
                  </p>
                  <a
                    href={directionsUrl(
                      assignmentDetail.pickup.address,
                      assignmentDetail.pickup.area,
                      assignmentDetail.pickup.city,
                      assignmentDetail.pickup.state,
                      assignmentDetail.pickup.pincode
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#8B6A3E] hover:underline"
                  >
                    <FaDirections className="h-3 w-3" /> Get Directions
                  </a>
                </div>
              )}

              {assignmentDetail.contact && (
                <div>
                  <p className={LABEL_CLASSES}>Family Contact</p>
                  <p className="text-sm text-[#2C1810]">{assignmentDetail.contact.name}</p>
                  <a
                    href={`tel:${assignmentDetail.contact.phone}`}
                    className="mt-0.5 flex items-center gap-1.5 text-sm font-medium text-[#8B6A3E]"
                  >
                    <FaPhoneAlt className="h-2.5 w-2.5" /> {assignmentDetail.contact.phone}
                  </a>
                </div>
              )}

              {assignmentDetail.caseManager && (
                <div>
                  <p className={LABEL_CLASSES}>Case Manager</p>
                  <p className="text-sm text-[#2C1810]">{assignmentDetail.caseManager.name}</p>
                  <a
                    href={`tel:${assignmentDetail.caseManager.phone}`}
                    className="mt-0.5 flex items-center gap-1.5 text-sm font-medium text-[#8B6A3E]"
                  >
                    <FaPhoneAlt className="h-2.5 w-2.5" /> {assignmentDetail.caseManager.phone}
                  </a>
                </div>
              )}

              {assignmentDetail.timeline.length > 0 && (
                <div>
                  <p className={LABEL_CLASSES}>Timeline</p>
                  <div className="space-y-2 border-l-2 border-[#F1E7D6] pl-3">
                    {assignmentDetail.timeline.map((t, i) => (
                      <div key={i}>
                        <p className="text-[14px] font-semibold text-[#2C1810]">{t.note || humanize(t.event)}</p>
                        <p className="text-[14px] text-[#A8937E]">
                          {new Date(t.at).toLocaleString("en-IN", { day: "numeric", month: "short", hour: "numeric", minute: "2-digit" })}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {(assignmentDetail.assignment.status === "ACCEPTED" || assignmentDetail.assignment.status === "COMPLETED") && (
                <div className="border-t border-[#F1E7D6] pt-4">
                  <p className={LABEL_CLASSES}>Upload a Document or Photo</p>
                  <p className="mb-2 text-[14px] text-[#6B584B]">e.g. cremation proof, bills, or ID/consent documents for this case.</p>

                  {uploadedDocs.length > 0 && (
                    <div className="mb-2 space-y-1">
                      {uploadedDocs.map((d, i) => (
                        <p key={i} className="flex items-center gap-1.5 text-[14px] text-green-700">
                          <FaCheckCircle className="h-2.5 w-2.5" /> {d.fileName} uploaded ({humanize(d.docType)})
                        </p>
                      ))}
                    </div>
                  )}

                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <select
                        className="flex-1 rounded-lg border border-[#E4D5BE] bg-white px-2 py-1.5 text-[14px] text-[#2C1810] focus:border-[#8B6A3E] focus:outline-none"
                        value={uploadDocType}
                        onChange={(e) => setUploadDocType(e.target.value as VolunteerDocumentType)}
                      >
                        {VOLUNTEER_DOCUMENT_TYPES.map((t) => (
                          <option key={t} value={t}>
                            {humanize(t)}
                          </option>
                        ))}
                      </select>
                      <label className="flex items-center gap-1.5 text-[14px] text-[#6B584B]">
                        <input type="checkbox" checked={uploadIsProof} onChange={(e) => setUploadIsProof(e.target.checked)} />
                        Proof doc
                      </label>
                    </div>

                    <label className="flex cursor-pointer items-center gap-2 rounded-lg border border-dashed border-[#E4D5BE] px-3 py-2.5 text-[14px] text-[#8A7460] hover:border-[#C9A574]">
                      <FaCloudUploadAlt className="h-4 w-4 shrink-0" />
                      {uploadFile ? (
                        <span className="flex items-center gap-1 text-[#2C1810]">
                          <FaFileAlt className="h-3 w-3" /> {uploadFile.name}
                        </span>
                      ) : (
                        "Choose a file to upload"
                      )}
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) => setUploadFile(e.target.files?.[0] ?? null)}
                      />
                    </label>

                    {uploadError && <p className="text-[14px] font-medium text-red-600">{uploadError}</p>}

                    <button
                      onClick={handleUploadDocument}
                      disabled={!uploadFile || uploading}
                      className="flex items-center gap-1.5 rounded-lg bg-[#8B6A3E] px-3 py-1.5 text-[14px] font-semibold text-white hover:bg-[#73532F] disabled:opacity-60"
                    >
                      {uploading ? "Uploading..." : "Upload"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </VolunteerModal>
      )}
    </div>
  );
}

export default VolunteerDashboard;
