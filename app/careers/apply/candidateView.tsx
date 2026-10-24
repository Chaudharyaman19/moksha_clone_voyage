"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  BriefcaseBusiness,
  Building2,
  GraduationCap,
  MapPin,
  Target,
  TrendingUp,
  User,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { CandidateProfileData } from "../submit-resume/page";

/**
 * Everything the /careers/apply screens show about a candidate or a job is read through
 * these helpers, so a value that is not in the CV or the job record is shown as missing
 * (or left out) instead of being replaced by sample text.
 */

export const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";

/**
 * Photos and CVs are normally full Cloudinary URLs; when the backend had to keep a file on
 * its own disk the stored value is a "/uploads/..." path, which lives on the API's origin.
 */
export const toAssetUrl = (url?: string | null): string => {
  if (!url) return "";
  if (/^(https?:|data:|blob:)/i.test(url)) return url;
  const origin = API_BASE.replace(/\/api\/v\d+\/?$/, "");
  return `${origin}${url.startsWith("/") ? "" : "/"}${url}`;
};

/** Shown wherever the CV simply did not contain the value. */
export const NOT_IN_CV = "Not mentioned in CV";

/** Session key every apply screen reads the analysed candidate from. */
export const CANDIDATE_STORAGE_KEY = "candidateData";

export type ApplyCandidate = CandidateProfileData & {
  gender?: string | null;
  dateOfBirth?: string | null;
  /** ISO time the CV was uploaded. */
  cvUploadedAt?: string | null;
  fullProfile?: any;
  jobId?: string;
  analysisId?: string;
  applicationId?: string;
  breakdown?: any;
};

export const readStoredCandidate = (): ApplyCandidate | null => {
  try {
    const stored = sessionStorage.getItem(CANDIDATE_STORAGE_KEY);
    return stored ? (JSON.parse(stored) as ApplyCandidate) : null;
  } catch {
    return null;
  }
};

export const storeCandidate = (candidate: ApplyCandidate) => {
  try {
    // `cvFile` is a File and cannot be serialised; the uploaded copy is referenced by cvUrl.
    const { cvFile: _cvFile, ...serialisable } = candidate as any;
    sessionStorage.setItem(CANDIDATE_STORAGE_KEY, JSON.stringify(serialisable));
  } catch {}
};

/** Backend field names for the details a candidate can edit on the apply screens. */
const toServerEdits = (updated: Partial<ApplyCandidate>): Record<string, unknown> => {
  const body: Record<string, unknown> = {};
  if (updated.candidateName !== undefined) body.name = updated.candidateName;
  if (updated.email !== undefined) body.email = updated.email;
  if (updated.phone !== undefined) body.phone = updated.phone;
  if (updated.phones !== undefined) body.phones = updated.phones;
  if (updated.verifiedPhone !== undefined) body.verifiedPhone = updated.verifiedPhone;
  if (updated.location !== undefined) body.location = updated.location;
  if (updated.linkedin !== undefined) body.linkedin = updated.linkedin;
  if (updated.gender === "male" || updated.gender === "female") body.gender = updated.gender;
  if (updated.image) body.photo = updated.image;
  return body;
};

/**
 * Applies an edit to the candidate in the session and saves it on the backend profile,
 * which is what the admin screens and the emails read from.
 */
export const saveCandidateEdits = async (
  candidate: ApplyCandidate,
  updated: Partial<ApplyCandidate>
): Promise<{ candidate: ApplyCandidate; saved: boolean }> => {
  const next = { ...candidate, ...updated };
  storeCandidate(next);

  if (!candidate.candidateId) return { candidate: next, saved: false };

  try {
    const res = await fetch(`${API_BASE}/careers/candidates/${candidate.candidateId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(toServerEdits(updated)),
    });
    return { candidate: next, saved: res.ok };
  } catch {
    return { candidate: next, saved: false };
  }
};

/** Uploads a new profile photo for the candidate and returns its stored URL. */
export const uploadCandidatePhoto = async (candidateId: string, file: File): Promise<string> => {
  const form = new FormData();
  form.append("photo", file);
  const res = await fetch(`${API_BASE}/careers/candidates/${candidateId}/photo`, {
    method: "POST",
    body: form,
  });
  const json = await res.json().catch(() => null);
  if (!res.ok || !json?.success || !json?.data?.photo) {
    throw new Error(json?.message || "Your photo could not be uploaded. Please try again.");
  }
  return String(json.data.photo);
};

export const formatDateTime = (value?: string | null): string => {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

export const formatGender = (value?: string | null): string =>
  value ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase() : "";

/** Candidate photo (from the CV or the one they uploaded), or a neutral icon when there is none. */
export function CandidatePhoto({
  src,
  alt = "Candidate Photo",
  className,
}: {
  src?: string | null;
  alt?: string;
  className?: string;
}) {
  if (!src) {
    return (
      <div className="absolute inset-0 grid place-items-center text-white/70">
        <User className="h-10 w-10" />
      </div>
    );
  }
  return <Image src={toAssetUrl(src)} alt={alt} fill unoptimized priority className={className} />;
}

export type BreakdownRow = { label: string; desc: string; score: number; icon: LucideIcon };

const clampScore = (value: unknown) => {
  const n = Number(value);
  return Number.isFinite(n) ? Math.max(0, Math.min(100, Math.round(n))) : 0;
};

/**
 * The six dimensions the backend actually scores a CV on, each with the CV evidence behind it.
 * Accepts both shapes the apply flow has stored (backend keys, or the older popup keys).
 */
export const breakdownRows = (candidate: ApplyCandidate): BreakdownRow[] => {
  const b = candidate.breakdown || {};
  const notes = candidate.breakdownNotes || {};
  const pick = (...keys: string[]) => {
    for (const key of keys) if (b[key] !== undefined && b[key] !== null) return b[key];
    return 0;
  };
  const note = (...keys: string[]) => {
    for (const key of keys) if (notes[key]) return notes[key];
    return "";
  };

  return [
    {
      label: "Educational Qualification",
      desc: note("education", "Educational Qualification"),
      score: clampScore(pick("education", "educationalQualification")),
      icon: GraduationCap,
    },
    {
      label: "Relevant Experience",
      desc: note("relevantExperience", "Relevant Experience"),
      score: clampScore(pick("relevantExperience")),
      icon: BriefcaseBusiness,
    },
    {
      label: "Key Skills",
      desc: note("skills", "Key Skills"),
      score: clampScore(pick("skills", "keySkills")),
      icon: Users,
    },
    {
      label: "Industry Experience",
      desc: note("industryExperience", "Industry Experience"),
      score: clampScore(pick("industryExperience")),
      icon: Building2,
    },
    {
      label: "Role Fit",
      desc: note("roleFit", "Role Fit"),
      score: clampScore(pick("roleFit")),
      icon: Target,
    },
    {
      label: "Location Preference",
      desc: note("location", "Location Preference"),
      score: clampScore(pick("location", "locationPreference")),
      icon: MapPin,
    },
  ];
};

export type JobSummaryRow = { icon: LucideIcon; label: string; value: string };

/** The applied job's own details; rows the job record does not carry are left out. */
export const jobSummaryRows = (candidate: ApplyCandidate): JobSummaryRow[] => {
  const j = candidate.jobDetails || {};
  const rows: JobSummaryRow[] = [
    { icon: BriefcaseBusiness, label: "Position", value: j.title || "" },
    { icon: Building2, label: "Organization", value: j.company || "" },
    { icon: MapPin, label: "Location", value: j.location || "" },
    { icon: BriefcaseBusiness, label: "Employment Type", value: j.type || "" },
    { icon: TrendingUp, label: "Experience Required", value: j.experience || "" },
    { icon: GraduationCap, label: "Qualification", value: j.education || "" },
  ];
  return rows.filter((row) => row.value.trim());
};

export type SupportContact = { email: string; phone: string };

/** HR support contact set in admin Career Settings → Result Messages. */
export function useSupportContact(): SupportContact {
  const [contact, setContact] = useState<SupportContact>({ email: "", phone: "" });

  useEffect(() => {
    let cancelled = false;
    fetch(`${API_BASE}/careers/result-messages`)
      .then((r) => r.json())
      .then((json) => {
        if (cancelled || !json?.success) return;
        setContact({
          email: String(json.data?.supportEmail || "").trim(),
          phone: String(json.data?.supportPhone || "").trim(),
        });
      })
      .catch(() => undefined);
    return () => {
      cancelled = true;
    };
  }, []);

  return contact;
}

/** `tel:` link target for a display phone number. */
export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;

/**
 * Score bands for the eligibility result. The lower edge is the job's own minimum score
 * (set in admin when the job is created), so the candidate sees the same verdict the
 * backend and the admin screens record.
 */
export const matchBands = (candidate: { threshold?: number }) => {
  const raw = Number(candidate.threshold);
  const threshold = Number.isFinite(raw) && raw > 0 ? Math.min(100, Math.round(raw)) : 40;
  return { threshold, strong: Math.max(70, threshold) };
};

export type MatchLevel = "high" | "moderate" | "low";

export const matchLevelFor = (candidate: { score?: number; threshold?: number }): MatchLevel => {
  const { threshold, strong } = matchBands(candidate);
  const score = Number(candidate.score) || 0;
  return score < threshold ? "low" : score < strong ? "moderate" : "high";
};

/** Result screen route for a candidate's verdict. */
export const resultPathFor = (candidate: { score?: number; threshold?: number }, jobSlug: string): string => {
  const level = matchLevelFor(candidate);
  const base = "/careers/apply/result";
  const suffix = level === "low" ? "/not-eligible" : level === "moderate" ? "/partial" : "";
  return `${base}${suffix}?job=${encodeURIComponent(jobSlug)}`;
};

/** Legend rows for the score ring, following the same bands. */
export const matchLegend = (candidate: { threshold?: number }) => {
  const { threshold, strong } = matchBands(candidate);
  return [
    { dot: "bg-[#16a34a]", range: `${strong} – 100%`, label: "Strong Match" },
    { dot: "bg-[#eab308]", range: strong - 1 > threshold ? `${threshold} – ${strong - 1}%` : `${threshold}%`, label: "Moderate Match" },
    { dot: "bg-[#dc2626]", range: `Below ${threshold}%`, label: "Not Eligible" },
  ];
};

const PHOTO_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_PHOTO_BYTES = 5 * 1024 * 1024;

/**
 * Lets the candidate replace the photo that was read from their CV. `input` must be
 * rendered once by the caller; `open()` shows the file picker.
 */
export function useChangePhoto(
  candidate: ApplyCandidate,
  onUpdated: (next: ApplyCandidate) => void
) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const handleFile = async (file?: File | null) => {
    if (!file) return;
    if (!PHOTO_TYPES.includes(file.type)) {
      setError("Please choose a JPG, PNG or WEBP photo.");
      return;
    }
    if (file.size > MAX_PHOTO_BYTES) {
      setError("The photo must be 5 MB or smaller.");
      return;
    }
    if (!candidate.candidateId) {
      setError("Your session has expired. Please upload your CV again.");
      return;
    }

    setBusy(true);
    setError("");
    try {
      const url = await uploadCandidatePhoto(candidate.candidateId, file);
      const next = { ...candidate, image: url };
      storeCandidate(next);
      onUpdated(next);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Your photo could not be uploaded. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  const input = (
    <input
      ref={inputRef}
      type="file"
      accept={PHOTO_TYPES.join(",")}
      className="hidden"
      onChange={(event) => {
        void handleFile(event.target.files?.[0]);
        // Allow picking the same file again after an error.
        event.target.value = "";
      }}
    />
  );

  return { open: () => inputRef.current?.click(), busy, error, input };
}
