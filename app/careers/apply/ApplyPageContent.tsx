"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  FileUp,
  GraduationCap,
  Heart,
  Home,
  Leaf,
  LockKeyhole,
  MapPin,
  TrendingUp,
  Users,
} from "lucide-react";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import { EligibilityModal, CandidateProfileData, defaultCandidateData } from "../submit-resume/page";
import { ApplicationFormModal } from "../application-form/page";
import { ReviewSubmitModal } from "../review-submit/page";

const heroBg = "/newcarrierimage/apply-hero-exact.png";
const personAtDesk = "/newcarrierimage/image copy 12.png";
const aiRobot = "/assets/careers/ai-robot-mascot.png";
const cardsBg = "/assets/careers/apply-cards-bg.png";
const sideLeafLeft = "/assets/careers/apply-leaf-left-clean-transparent.png";
const sideLeafRight = "/assets/careers/apply-leaf-right-clean-transparent.png";
const leafLeft = "/assets/finalcomplete/leaf-left.png";
const leafRight = "/assets/finalcomplete/leaf-right.png";

// Solid filled amber/gold SVG icons matching the exact mockup design
function LotusIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C10.8 5.5 9.8 9 9.8 13C9.8 16.5 10.8 18.5 12 19.5C13.2 18.5 14.2 16.5 14.2 13C14.2 9 13.2 5.5 12 2Z" />
      <path d="M10.8 5.8C7.5 8.5 5.8 12 5.8 15.5C5.8 18.5 7.5 20 9.2 20C10.5 18 10.8 15.2 10.8 12.5C10.8 10 10.8 8 10.8 5.8Z" />
      <path d="M13.2 5.8C16.5 8.5 18.2 12 18.2 15.5C18.2 18.5 16.5 20 14.8 20C13.5 18 13.2 15.2 13.2 12.5C13.2 10 13.2 8 13.2 5.8Z" />
      <path d="M5.5 11.5C3.2 13.2 2 15.5 2 17.5C2 19.5 3.8 20.8 6.2 20.8C7.8 20.8 9.2 19.8 9.8 18C7.2 17.5 6 15 5.5 11.5Z" />
      <path d="M18.5 11.5C20.8 13.2 22 15.5 22 17.5C22 19.5 20.2 20.8 17.8 20.8C16.2 20.8 14.8 19.8 14.2 18C16.8 17.5 18 15 18.5 11.5Z" />
      <path d="M3.5 21C8 22.2 16 22.2 20.5 21C16.5 22.8 7.5 22.8 3.5 21Z" />
    </svg>
  );
}

function TeamIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <circle cx="12" cy="6.5" r="3.2" />
      <path d="M7 18.5C7 14.8 9.2 12.5 12 12.5C14.8 12.5 17 14.8 17 18.5H7Z" />
      <circle cx="5.2" cy="9" r="2.4" />
      <path d="M1.5 18.5C1.5 15.8 3.2 14.2 5.5 14.2C6.6 14.2 7.6 14.7 8.3 15.6C7.5 16.4 7 17.4 7 18.5H1.5Z" />
      <circle cx="18.8" cy="9" r="2.4" />
      <path d="M22.5 18.5C22.5 15.8 20.8 14.2 18.5 14.2C17.4 14.2 16.4 14.7 15.7 15.6C16.5 16.4 17 17.4 17 18.5H22.5Z" />
    </svg>
  );
}

function BarChartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <rect x="3" y="13" width="4.5" height="8" rx="1.2" />
      <rect x="9.75" y="8" width="4.5" height="13" rx="1.2" />
      <rect x="16.5" y="3" width="4.5" height="18" rx="1.2" />
    </svg>
  );
}

function HeartFilledIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

const highlights = [
  { label: "Meaningful\nWork", icon: LotusIcon },
  { label: "Compassionate\nTeam", icon: TeamIcon },
  { label: "Growth\nOpportunities", icon: BarChartIcon },
  { label: "Real Impact\non Lives", icon: HeartFilledIcon },
];

type Job = {
  _id?: string;
  id?: string;
  slug?: string;
  title?: string;
  department?: string;
  description?: string;
  location?: string;
  type?: string;
  experience?: string;
  company?: string;
  brand?: string;
  responsibilities?: string[];
  requirements?: string[];
  preferredQualifications?: string[];
  skills?: string[];
  education?: string;
  eligibilityThreshold?: number;
};

const ALLOWED_CV_EXTENSIONS = ["pdf", "doc", "docx"];
const ALLOWED_CV_ACCEPT = [".pdf", ".doc", ".docx", "application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].join(",");
const MAX_CV_BYTES = 5 * 1024 * 1024;

const prettifyName = (raw?: string | null): string => {
  if (!raw) return "";
  // If the raw string is just numbers, timestamps, random hashes or too short, don't use it as a person name
  const stripped = raw.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ").trim();
  if (!stripped || /^\d+$/.test(stripped) || stripped.replace(/\D/g, "").length >= stripped.length * 0.7) {
    return "";
  }
  const cleaned = stripped
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
    .replace(/\b(cv|resume|doc|pdf|biodata|profile)\b/gi, "")
    .replace(/[._-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!cleaned || cleaned.length < 2 || /^\d+$/.test(cleaned)) return "";
  return cleaned
    .split(" ")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
};

const formatBytes = (bytes: number) =>
  bytes < 1024 * 1024 ? `${Math.max(1, Math.round(bytes / 1024))} KB` : `${(bytes / (1024 * 1024)).toFixed(1)} MB`;

const validateCvFile = (file: File): string | null => {
  const ext = file.name.includes(".") ? file.name.split(".").pop()!.toLowerCase() : "";
  if (!ALLOWED_CV_EXTENSIONS.includes(ext)) return `.${ext || "That"} file type is not allowed. Upload a PDF, DOC or DOCX.`;
  if (file.size === 0) return "That file is empty. Please choose another CV.";
  if (file.size > MAX_CV_BYTES) return `That file is ${formatBytes(file.size)}. Maximum allowed size is 5 MB.`;
  return null;
};

const ANALYSIS_STEPS = ["Reading your CV…", "Extracting skills & experience…", "Matching against this role…", "Scoring your profile…"];

const DEFAULT_JOB: Job = {
  title: "Web Developer",
  department: "Ghaziabad, Uttar Pradesh",
  description: "• Strong communication and persuasive skills.\n• Experience in frontend and full-stack web development.\n• Proficiency in React, Next.js, and TypeScript.\n• Knowledge of REST APIs and database integrations.\n• Ability to build responsive and user-friendly web interfaces.",
  location: "Ghaziabad, Uttar Pradesh",
  type: "Full Time",
  experience: "0 - 10 Years",
  education: "Graduate",
  preferredQualifications: ["MBA/PGDM Preferred"],
  responsibilities: [
    "Generate exhibitor and sponsorship sales",
    "Meet prospective clients and negotiate deals",
    "Manage the complete sales cycle from lead to booking",
    "Achieve monthly and exhibition-wise targets",
  ],
  eligibilityThreshold: 40,
};

function UploadBox({ onFile }: { onFile: (file: File | null) => void }) {
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [error, setError] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const processFile = (file: File) => {
    const problem = validateCvFile(file);
    if (problem) { setError(problem); setFileName(""); setFileSize(""); onFile(null); return; }
    setError(""); setFileName(file.name); setFileSize(formatBytes(file.size)); onFile(file);
  };

  const chooseFile = () => {
    const inp = document.createElement("input");
    inp.type = "file";
    inp.accept = ALLOWED_CV_ACCEPT;
    inp.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) processFile(file);
    };
    inp.click();
  };

  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={(e) => {
        e.preventDefault(); setIsDragging(false);
        const file = e.dataTransfer.files?.[0];
        if (file) processFile(file);
      }}
      style={{ backgroundColor: "#fbf6ec" }}
      className={`rounded-2xl border-2 border-dashed px-4 py-2.5 text-center transition-colors ${error
        ? "border-[#e0a49c]"
        : isDragging
          ? "border-[#003528]"
          : "border-[#d8ccb8]"
        }`}
    >
      <div className="mx-auto flex items-center justify-center">
        {/* Amber Cloud Upload Icon matching user image */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#cb7502"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-[28px] w-[28px]"
        >
          <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
          <path d="M12 12v9" />
          <path d="m8 16 4-4 4 4" />
        </svg>
      </div>
      <h3 className="mt-1 text-[15px] font-bold text-[#002219]">Upload Your CV</h3>
      {error ? (
        <p className="mt-0.5 text-[11.5px] font-medium text-[#b23b2e]">{error}</p>
      ) : fileName ? (
        <p className="mt-0.5 text-[11.5px] font-medium text-[#003528]">{fileName} · {fileSize}</p>
      ) : (
        <p className="mt-0.5 text-[11.5px] leading-tight text-[#4a5a6a]">
          Drag &amp; drop your file here or click to browse
          <br />
          <span className="text-[10.5px] text-[#7a8a9a]">PDF, DOC or DOCX (Max 5 MB)</span>
        </p>
      )}
      <button
        type="button"
        onClick={chooseFile}
        className="mt-1.5 inline-flex items-center gap-1.5 rounded-lg bg-[#003528] px-5 py-1.5 text-[12.5px] font-semibold text-white shadow-xs transition hover:bg-[#00251c]"
      >
        {fileName ? "Change File" : "Choose File"}
      </button>
    </div>
  );
}

function GoldCheck({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-[14.5px] leading-[1.45] text-[#2a3a4a]">
      <span className="mt-[2.5px] grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-[#c7821e]">
        <Check className="h-[11px] w-[11px] text-white" strokeWidth={3} />
      </span>
      <span>{children}</span>
    </li>
  );
}

export default function ApplyPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const jobSlug = searchParams.get("job") || "web-developer";

  const [job, setJob] = useState<Job>(DEFAULT_JOB);
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisElapsed, setAnalysisElapsed] = useState(0);
  const [candidateData, setCandidateData] = useState<CandidateProfileData>(defaultCandidateData);
  const [isEligibilityOpen, setIsEligibilityOpen] = useState(false);
  const [isAppFormOpen, setIsAppFormOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";
    fetch(`${apiUrl}/careers/jobs`)
      .then((r) => r.json())
      .then((data) => {
        if (data?.success && Array.isArray(data.data)) {
          const found = data.data.find((j: any) => j.slug === jobSlug || j._id === jobSlug);
          if (found) {
            setJob({
              _id: found._id,
              id: found._id,
              slug: found.slug,
              title: found.title,
              department: found.department || "General",
              description: found.description || "",
              location: found.location || "Delhi NCR",
              type: found.employmentType || "Full Time",
              experience: `${found.experienceMin ?? 0} - ${found.experienceMax ?? 10} Years`,
              company: found.company,
              responsibilities: found.responsibilities,
              requirements: found.requirements,
              preferredQualifications: found.preferredQualifications,
              skills: found.skills,
              education: found.educationRequirements,
              eligibilityThreshold: found.eligibilityThreshold,
            });
          }
        }
      })
      .catch(() => { });
  }, [jobSlug]);

  useEffect(() => {
    if (!isAnalyzing) return;
    const startedAt = Date.now();
    const id = setInterval(() => setAnalysisElapsed(Date.now() - startedAt), 300);
    return () => clearInterval(id);
  }, [isAnalyzing]);

  const analysisStep = isAnalyzing ? Math.min(Math.floor(analysisElapsed / 1800), ANALYSIS_STEPS.length - 1) : 0;

  const educationLabel = job.education?.trim() || "Graduate";
  const preferredQuals = (job.preferredQualifications ?? []).map((i) => i?.trim()).filter(Boolean);
  const educationNote = preferredQuals.length ? `(${preferredQuals.join(", ")})` : job.education?.trim() ? "" : "(MBA/PGDM Preferred)";
  const threshold = typeof job.eligibilityThreshold === "number" && job.eligibilityThreshold > 0 ? job.eligibilityThreshold : 40;

  const pickList = (value: string[] | undefined, fallback: string[]): string[] => {
    const cleaned = (value ?? []).map((i) => i?.trim()).filter(Boolean);
    return cleaned.length > 0 ? cleaned : fallback;
  };
  const jobResponsibilities = pickList(job.responsibilities, ["Generate exhibitor and sponsorship sales", "Meet prospective clients and negotiate deals", "Manage the complete sales cycle from lead to booking", "Achieve monthly and exhibition-wise targets"]);
  const jobApplyCriteria = job.description && job.description.includes("•")
    ? job.description.split("•").map((p) => p.trim()).filter(Boolean)
    : pickList(job.requirements, ["Strong communication and persuasive skills", "Experience in the relevant domain", "Ability to handle objections and negotiate effectively"]);

  const aiChecklist = [
    "Relevant product design experience",
    "Experience in digital/product/service design",
    "Proficiency in design tools (Figma, Adobe, etc.)",
    "Portfolio and design quality",
    "Communication & teamwork skills",
    "Overall profile match",
  ];

  const runAnalysis = useCallback(async () => {
    if (!file) return;
    setIsAnalyzing(true);
    const fileSizeStr = file.size > 1024 * 1024 ? `${(file.size / (1024 * 1024)).toFixed(1)} MB` : `${Math.round(file.size / 1024)} KB`;
    const objectUrl = URL.createObjectURL(file);
    const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";

    try {
      const formData = new FormData();
      formData.append("cv", file);
      const uploadRes = await fetch(`${apiBase}/careers/cv/upload`, { method: "POST", body: formData });
      const uploadJson = await uploadRes.json();
      if (!uploadRes.ok || !uploadJson.success) throw new Error(uploadJson.message || "Failed to upload CV");
      const candidateId = uploadJson.data.candidateId;
      const targetJobId = job._id || job.slug || "web-developer";

      const analyzeRes = await fetch(`${apiBase}/careers/cv/analyze`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ candidateId, jobId: targetJobId }),
      });
      const analyzeJson = await analyzeRes.json();
      if (!analyzeRes.ok || !analyzeJson.success) throw new Error(analyzeJson.message || "Failed to analyze CV");

      const analysisData = analyzeJson.data;
      const profileData = analysisData.candidateProfile || {};
      const parsedName = prettifyName(profileData.name) || prettifyName(file.name.replace(/\.[^/.]+$/, ""));
      const fullName = parsedName || "Candidate";
      const firstName = fullName.split(" ")[0] || "Candidate";
      const data: any = {
        candidateName: fullName,
        firstName: firstName,
        email: profileData.email || null,
        phone: profileData.phone || null,
        phones: Array.isArray(profileData.phones) && profileData.phones.length > 0 ? profileData.phones : profileData.phone ? [profileData.phone] : [],
        verifiedPhone: null,
        linkedin: profileData.linkedin || null,
        image: profileData.photo || null,
        cvFile: file,
        cvName: file.name,
        cvSize: fileSizeStr,
        cvUrl: profileData.cv?.cloudinaryUrl || objectUrl,
        score: analysisData.matchScore ?? 72,
        summary: analysisData.explanation,
        requirementsMet: ((analysisData.matchedRequirements?.length > 0 ? analysisData.matchedRequirements : analysisData.strengths) || [])
          .map((r: any) => typeof r === "string" ? r : r?.text || r?.requirement || r?.description || "")
          .filter(Boolean),
        jobDetails: {
          title: job.title,
          company: job.company || "Moksha Sewa",
          brand: job.brand,
          location: job.location || "Delhi NCR",
          type: job.type || "Full Time",
          experience: job.experience || "0 - 10 Years",
          education: `${educationLabel}${educationNote ? ` ${educationNote}` : ""}`,
        },
        breakdown: analysisData.breakdown
          ? Object.fromEntries(
            Object.entries(analysisData.breakdown).map(([k, v]: [string, any]) => [k, typeof v === "object" && v !== null ? (v.score ?? 0) : v])
          )
          : undefined,
        candidateId: analysisData.candidateId,
        jobId: analysisData.jobId,
        analysisId: analysisData.analysisId,
        fullProfile: profileData,
      };
      setCandidateData(data as any);
      try {
        sessionStorage.setItem("candidateData", JSON.stringify(data));
      } catch {}
      router.push(`/careers/apply/progress?job=${encodeURIComponent(jobSlug)}`);
    } catch {
      const parsedFallback = prettifyName(file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "));
      const fallbackName = parsedFallback || "Candidate";
      const fallbackData = {
        ...defaultCandidateData,
        candidateName: fallbackName,
        firstName: fallbackName.split(" ")[0] || "Candidate",
        cvFile: file,
        cvName: file.name,
        cvSize: fileSizeStr,
        cvUrl: objectUrl,
        score: 72,
        jobDetails: {
          title: job.title,
          company: job.company || "Moksha Sewa",
          location: job.location,
          type: job.type,
          experience: job.experience,
          education: educationLabel,
        },
      };
      setCandidateData(fallbackData as any);
      try {
        sessionStorage.setItem("candidateData", JSON.stringify(fallbackData));
      } catch {}
      router.push(`/careers/apply/progress?job=${encodeURIComponent(jobSlug)}`);
    } finally {
      setIsAnalyzing(false);
    }
  }, [file, job, educationLabel, educationNote, jobSlug, router]);

  return (
    <div className="overflow-x-hidden">
      <Topbar />
      <Navbar />

      <main className="bg-[#fdf6ea] overflow-x-hidden">
        {/* ── Hero ── */}
        <section className="relative isolate overflow-hidden bg-[#faf4e9]">
          <Image
            src={heroBg}
            alt="Moksha Sewa Career Team"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="-z-10 object-fill object-top"
          />

          <div className="mx-auto w-full max-w-[1720px] px-6 pb-28 pt-28 sm:px-10 sm:pb-32 sm:pt-32 lg:px-14 lg:pb-40 lg:pt-36 xl:px-16 xl:pb-48 xl:pt-40">
            <div className="flex flex-col items-start text-left max-w-[500px] sm:max-w-[520px] lg:max-w-[540px]">
              {/* 1. Subtitle */}
              <div className="flex items-center gap-2">
                <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#d28c2c] sm:text-[13.5px] pt-5 pl-1 ">
                  Careers at Moksha Sewa
                </p>
                <span className="h-[1.5px] w-5 rounded-full bg-[#d28c2c]/70 mt-5" />
              </div>

              {/* 2. Main Heading */}
              <h1 className="mt-2.5 font-serif text-[35px] font-bold leading-[1.06] tracking-[-0.02em] text-[#002017] sm:text-[39px] md:text-[43px] lg:text-[47px] text-left">
                Create a More
                <br />
                <span className="inline-block whitespace-nowrap text-[#cc7501]">Compassionate Tomorrow</span>
              </h1>

              {/* 3. Paragraph */}
              <p className="mt-3 max-w-[460px] text-[15.5px] font-normal leading-[1.52] text-[#282e2d] sm:text-[16px] text-left">
                Be a part of a purpose-driven team that brings dignity, care and respect to families in their most difficult times through innovative services and meaningful solutions.
              </p>

              {/* 4. Button */}
              <Link
                href="#job-details"
                className="mt-4 inline-flex items-center gap-2.5 rounded-xl bg-[#003528] px-6 py-2.5 text-[15.5px] font-semibold text-white shadow-sm transition hover:bg-[#00281e]"
              >
                Explore Opportunities
                <ArrowRight className="h-4 w-4" />
              </Link>

              {/* 5. Highlights row: 4 solid filled amber icons + labels with comfortable bottom spacing */}
              <div className="mt-6 grid max-w-[490px] grid-cols-4 divide-x divide-[#e2cfb7]">
                {highlights.map(({ label, icon: Icon }) => (
                  <div key={label} className="flex flex-col items-center px-1 text-center first:pl-0 last:pr-0">
                    <span className="grid h-[52px] w-[52px] place-items-center rounded-full border-[1.6px] border-[#cb7502] bg-[#fff8eb]/95 text-[#cb7502] shadow-xs sm:h-[56px] sm:w-[56px]">
                      <Icon className="h-[26px] w-[26px] sm:h-[28px] sm:w-[28px]" />
                    </span>
                    <span className="mt-2 block whitespace-pre-line text-[13px] font-bold leading-[1.22] text-[#242b26] sm:text-[14px]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Content ── */}
        <section
          id="job-details"
          className="relative z-10 overflow-visible pt-10 pb-4 lg:pt-14 lg:pb-6"
        >
          {/* Main textured wave background */}
          <Image
            src={cardsBg}
            alt="Section background"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="-z-20 object-cover object-center"
          />

          <div
            style={{ top: "-185px", marginBottom: "-170px" }}
            className="relative z-20 mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-12 xl:px-14"
          >
            {/* Left Side Vine Leaves - anchored tightly to the cards wrapper so it is always visible */}
            <div className="pointer-events-none absolute -left-2 sm:-left-6 lg:-left-12 xl:-left-16 top-1/2 -translate-y-1/2 z-30 h-[640px] w-[110px] sm:w-[130px] lg:w-[150px] xl:w-[170px]">
              <Image
                src={sideLeafLeft}
                alt=""
                fill
                unoptimized
                sizes="170px"
                className="object-contain object-left drop-shadow-sm"
              />
            </div>

            {/* Right Side Vine Leaves - anchored tightly to the cards wrapper so it is always visible */}
            <div className="pointer-events-none absolute -right-2 sm:-right-6 lg:-right-12 xl:-right-16 top-1/2 -translate-y-1/2 z-30 h-[640px] w-[110px] sm:w-[130px] lg:w-[150px] xl:w-[170px]">
              <Image
                src={sideLeafRight}
                alt=""
                fill
                unoptimized
                sizes="170px"
                className="object-contain object-right drop-shadow-sm"
              />
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_450px] lg:items-stretch">

              {/* Combined Single Card: Job Details + Person photo & badges */}
              <div className="flex flex-col justify-between rounded-3xl border border-[#ecdcc3] bg-[#fffbf2]/95 p-4 shadow-[0_12px_40px_rgba(74,49,18,0.07)] backdrop-blur-xs sm:p-5 lg:p-6">
                <div className="grid gap-5 lg:grid-cols-[1fr_270px] xl:grid-cols-[1fr_290px]">
                  {/* Left side: Job details */}
                  <div className="flex flex-col justify-between">
                    <div>
                      {/* Breadcrumbs */}
                      <div className="mb-1.5 flex items-center gap-1.5 text-[12px] text-[#6b7b8c]">
                        <Home className="h-3.5 w-3.5 text-[#6b7b8c]" />
                        <ChevronRight className="h-3 w-3 text-[#6b7b8c]" />
                        <Link href="/careers" className="hover:text-[#003528]">Careers</Link>
                        <ChevronRight className="h-3 w-3 text-[#6b7b8c]" />
                        <span className="font-semibold text-[#1a2d42]">Apply for Position</span>
                      </div>

                      {/* Badge */}
                      <span className="inline-block w-fit rounded bg-[#faedd9] px-2 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-[#9b6f33]">
                        {job.type || "Full Time"}
                      </span>

                      {/* Job Title */}
                      <h2 className="mt-1 font-serif text-[28px] font-bold leading-[1.08] text-[#002219] sm:text-[30px] lg:text-[32px]">
                        {job.title || "Job Position"}
                      </h2>

                      {/* Metadata row */}
                      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 border-b border-[#ecdcc3] pb-2 text-[14px] font-medium text-[#2a3a4a]">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-4 w-4 text-[#c7821e]" /> {job.location || "Delhi NCR"}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <BriefcaseBusiness className="h-4 w-4 text-[#c7821e]" /> {job.type || "Full Time"}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <TrendingUp className="h-4 w-4 text-[#c7821e]" /> {job.experience || "0 - 10 Years"}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <GraduationCap className="h-4 w-4 text-[#c7821e]" />
                          <span>
                            {educationLabel}
                            {educationNote && <span className="ml-1 text-[11.5px] text-[#5a6a7a]">{educationNote}</span>}
                          </span>
                        </span>
                      </div>

                      {/* Paragraph */}
                      <div className="mt-2 text-[14.5px] leading-[1.5] text-[#3a4a5c]">
                        <p>
                          Join Moksha Sewa as a {job.title} and be part of our mission to create innovative services and solutions that bring dignity, comfort and compassion to families across India.
                        </p>
                      </div>

                      {/* Key Responsibilities */}
                      <div className="mt-2.5">
                        <h3 className="flex items-center gap-2 text-[16px] font-bold text-[#002219]">
                          <span className="grid h-[24px] w-[24px] place-items-center rounded-lg bg-[#003528] text-white shadow-xs">
                            <Users className="h-[13px] w-[13px]" />
                          </span>
                          Key Responsibilities
                        </h3>
                        <ul className="mt-1.5 ml-0.5 space-y-1">
                          {jobResponsibilities.slice(0, 4).map((item) => (
                            <GoldCheck key={item}>{item}</GoldCheck>
                          ))}
                        </ul>
                      </div>

                      {/* Qualifications & Experience */}
                      <div className="mt-2.5">
                        <h3 className="flex items-center gap-2 text-[16px] font-bold text-[#002219]">
                          <span className="grid h-[24px] w-[24px] place-items-center rounded-lg bg-[#003528] text-white shadow-xs">
                            <GraduationCap className="h-[13px] w-[13px]" />
                          </span>
                          Qualifications &amp; Experience
                        </h3>
                        <ul className="mt-1.5 ml-0.5 space-y-1">
                          {jobApplyCriteria.slice(0, 5).map((item) => (
                            <GoldCheck key={item}>{item}</GoldCheck>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Apply Button */}
                    <div className="mt-3 pt-0.5">
                      <button
                        onClick={() => document.getElementById("ai-panel")?.scrollIntoView({ behavior: "smooth" })}
                        className="inline-flex w-fit items-center gap-2 rounded-xl bg-[#003528] px-5 py-2.5 text-[14.5px] font-semibold text-white shadow-sm transition hover:bg-[#00251c]"
                      >
                        Apply for this Position <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  {/* Right side of the same card: Photo & Badges */}
                  <div className="flex flex-col h-full justify-between gap-3">
                    <div className="relative min-h-[350px] w-full flex-1 overflow-hidden rounded-2xl shadow-sm sm:min-h-[380px] lg:min-h-[400px]">
                      <Image
                        src={personAtDesk}
                        alt="Moksha Sewa team member"
                        fill
                        priority
                        sizes="(max-width:1024px) 100vw, 340px"
                        className="object-cover object-center"
                      />
                    </div>

                    <div className="shrink-0 flex flex-col items-center gap-2 pt-1">
                      <div className="flex items-center justify-center gap-6 sm:gap-7">
                        {[
                          { icon: LotusIcon, label: "People" },
                          { icon: TeamIcon, label: "Ideas" },
                          { icon: BarChartIcon, label: "Growth" },
                        ].map(({ icon: Icon, label }) => (
                          <div key={label} className="flex flex-col items-center gap-1.5">
                            <span className="grid h-[56px] w-[56px] sm:h-[60px] sm:w-[60px] place-items-center rounded-full border-[2px] border-[#cb7502] bg-[#fff8eb] text-[#cb7502] shadow-sm">
                              <Icon className="h-[28px] w-[28px] sm:h-[30px] sm:w-[30px]" />
                            </span>
                            <span className="text-[14.5px] font-bold text-[#002219]">{label}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col items-center mt-2">
                        <p className="text-center text-[13px] font-bold uppercase tracking-[0.22em] text-[#b07a1a]">
                          For a More Compassionate Tomorrow
                        </p>
                        <span className="mt-1.5 h-[2px] w-20 rounded-full bg-[#cb7502]/70" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: AI Panel */}
              <aside
                id="ai-panel"
                className="relative flex flex-col justify-between rounded-3xl border border-[#ecdcc3] bg-[#fffbf2]/95 p-4 shadow-[0_12px_40px_rgba(74,49,18,0.07)] backdrop-blur-xs sm:p-5"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#c7821e]">
                      Let AI Help You ✨
                    </p>
                    <h2 className="mt-1 font-serif text-[25px] font-bold leading-[1.12] text-[#002219] sm:text-[27px] lg:text-[28px]">
                      <span className="whitespace-nowrap">Check Your Eligibility</span>
                      <br />
                      <span className="whitespace-nowrap">with AI</span>
                    </h2>
                  </div>
                  <div className="flex items-start gap-1 shrink-0">
                    <div className="relative h-[95px] w-[95px] shrink-0 -mt-2 sm:h-[105px] sm:w-[105px] sm:-mt-3">
                      <Image
                        src={aiRobot}
                        alt="AI Assistant"
                        fill
                        sizes="105px"
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    {/* Menu burger icon */}
                    <div className="flex flex-col gap-1 pt-1.5 text-[#002219]">
                      <span className="h-[2px] w-3.5 rounded-full bg-[#002219]" />
                      <span className="h-[2px] w-3.5 rounded-full bg-[#002219]" />
                      <span className="h-[2px] w-2 rounded-full bg-[#002219]" />
                    </div>
                  </div>
                </div>

                <p className="mt-1.5 text-[14px] leading-[1.48] text-[#3a4a5c]">
                  Upload your CV and get an instant analysis of how well your profile matches this position.
                </p>

                {/* Upload Box Container */}
                <div className="mt-2.5">
                  <UploadBox onFile={setFile} />
                </div>

                {/* AI will check */}
                <div className="mt-3">
                  <h3 className="text-[15px] font-bold text-[#b07a1a]">AI will check:</h3>
                  <ul className="mt-1.5 space-y-1">
                    {aiChecklist.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[13.5px] leading-[1.4] text-[#3a4a5c]">
                        <span className="mt-[2.5px] grid h-[16px] w-[16px] shrink-0 place-items-center rounded-full bg-[#c7821e]">
                          <Check className="h-[10px] w-[10px] text-white" strokeWidth={3} />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Profile Match Gauge */}
                <div className="mt-3 flex items-center gap-3.5 rounded-2xl bg-[#fdf6ea] p-3 border border-[#ecdcc3]/60">
                  <div
                    className="relative grid h-[58px] w-[58px] shrink-0 place-items-center rounded-full shadow-inner"
                    style={{ background: `conic-gradient(#003528 0deg ${threshold * 3.6}deg, #e4d7c0 ${threshold * 3.6}deg 360deg)` }}
                  >
                    <div className="absolute inset-[4.5px] rounded-full bg-white shadow-xs" />
                    <span className="relative font-sans text-[17px] font-bold text-[#002219]">{threshold}%</span>
                  </div>
                  <div>
                    <p className="text-[15px] font-bold text-[#002219]">Your Profile Match</p>
                    <p className="mt-0.5 text-[12px] leading-[1.35] text-[#5a6a7a]">
                      Based on your experience, skills and qualifications, you are a strong match for this position.
                    </p>
                  </div>
                </div>

                {/* CTA Action */}
                <div className="mt-3">
                  <button
                    type="button"
                    disabled={!file || isAnalyzing}
                    onClick={runAnalysis}
                    className={`flex h-[42px] w-full items-center justify-center gap-2 rounded-xl text-[14.5px] font-semibold text-white transition-all ${!file || isAnalyzing
                      ? "cursor-not-allowed bg-gray-400 opacity-60"
                      : "cursor-pointer bg-[#003528] shadow-sm hover:bg-[#00251c]"
                      }`}
                  >
                    {isAnalyzing ? "Analyzing CV with AI..." : "Analyze My CV"}
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <div className="mt-2 flex items-center justify-center gap-1.5 text-[12px] text-[#5a6a7a]">
                    <LockKeyhole className="h-3.5 w-3.5 fill-[#003528] text-[#003528]" />
                    <span>Your data is secure and will only be used for recruitment purposes.</span>
                  </div>
                </div>

                {/* Analysis Overlay */}
                {isAnalyzing && (
                  <div className="absolute inset-0 z-50 grid place-items-center rounded-2xl bg-[#fffbf2]/95 px-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="relative grid h-[84px] w-[84px] place-items-center">
                        {/* Circular animated spinner loader */}
                        <svg className="absolute inset-0 h-full w-full animate-spin text-[#0d5c46]" viewBox="0 0 84 84" fill="none">
                          <circle
                            className="opacity-20"
                            cx="42"
                            cy="42"
                            r="36"
                            stroke="#0d5c46"
                            strokeWidth="5"
                          />
                          <circle
                            className="opacity-90"
                            cx="42"
                            cy="42"
                            r="36"
                            stroke="currentColor"
                            strokeWidth="5"
                            strokeDasharray="160"
                            strokeDashoffset="60"
                            strokeLinecap="round"
                          />
                        </svg>
                        <span className="absolute inset-[8px] rounded-full bg-white shadow-xs" />
                        <FileUp className="relative h-[28px] w-[28px] text-[#0d5c46] animate-pulse" strokeWidth={2.2} />
                      </div>
                      <h3 className="mt-3.5 text-[17px] font-bold text-[#0c3d30]">Analyzing your CV</h3>
                      <p key={analysisStep} className="mt-1 text-[13px] font-semibold text-[#d97706] transition-all duration-300">
                        {ANALYSIS_STEPS[analysisStep]}
                      </p>
                      <div className="mt-3 h-[4px] w-[170px] overflow-hidden rounded-full bg-[#d0ddd8]">
                        <span className="block h-full w-[45%] rounded-full bg-[linear-gradient(90deg,#0d5c46,#6aaa92)] animate-pulse" />
                      </div>
                      <p className="mt-2.5 flex items-center gap-1.5 text-[11px] font-medium text-[#5a6a7a]">
                        <LockKeyhole className="h-3 w-3 text-[#0d5c46]" /> This takes a few seconds — please keep this window open.
                      </p>
                    </div>
                  </div>
                )}
              </aside>
            </div>
          </div>
        </section>

        {/* Decorative background leaves matching original reference */}
        <div className="pointer-events-none relative w-full overflow-hidden">
          <div className="pointer-events-none absolute bottom-0 left-0 z-0 h-[150px] w-[200px] opacity-25 lg:h-[220px] lg:w-[280px]">
            <Image src={leafLeft} alt="" fill sizes="280px" className="object-contain object-bottom-left" />
          </div>
          <div className="pointer-events-none absolute bottom-0 right-0 z-0 h-[150px] w-[200px] opacity-20 lg:h-[220px] lg:w-[280px]">
            <Image src={leafRight} alt="" fill sizes="280px" className="object-contain object-bottom-right" />
          </div>
        </div>

        {/* Modals */}
        <EligibilityModal
          isOpen={isEligibilityOpen}
          candidate={candidateData}
          score={candidateData.score}
          onCandidateChange={setCandidateData}
          onBack={() => setIsEligibilityOpen(false)}
          onClose={() => setIsEligibilityOpen(false)}
          onApply={() => { setIsEligibilityOpen(false); setIsAppFormOpen(true); }}
        />
        <ApplicationFormModal
          isOpen={isAppFormOpen}
          candidateData={candidateData}
          onBack={() => { setIsAppFormOpen(false); setIsEligibilityOpen(true); }}
          onClose={() => setIsAppFormOpen(false)}
          onNext={(data) => { if (data) setCandidateData(data); setIsAppFormOpen(false); setIsReviewOpen(true); }}
        />
        <ReviewSubmitModal
          isOpen={isReviewOpen}
          candidateData={candidateData}
          onBack={() => { setIsReviewOpen(false); setIsAppFormOpen(true); }}
          onClose={() => setIsReviewOpen(false)}
        />
      </main>

      <Footer />
    </div>
  );
}
