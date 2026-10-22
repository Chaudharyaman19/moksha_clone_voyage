"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  Calendar,
  Check,
  CheckCircle2,
  ChevronRight,
  Download,
  FileText,
  GraduationCap,
  Home,
  Lightbulb,
  LockKeyhole,
  Mail,
  MapPin,
  Pencil,
  Phone,
  RefreshCw,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import { EligibilityModal, CandidateProfileData, defaultCandidateData } from "../../submit-resume/page";
import { ApplicationFormModal } from "../../application-form/page";
import { ReviewSubmitModal } from "../../review-submit/page";

const heroBg = "/newcarrierimage/apply-hero-exact.png";
const personImage = "/newcarrierimage/image copy 12.png";
const togetherText = "/newcarrierimage/image copy 13.png";
const rightPeople = "/separated-assets/career-right-people.png";

function ProgressSteps() {
  const steps = [
    { label: "Upload CV", sub: "Completed", active: false, done: true },
    { label: "AI Analysis", sub: "Completed", active: false, done: true },
    { label: "Eligibility Result", sub: "Current Step", active: true, done: false },
    { label: "Apply for Job", sub: "Next", active: false, done: false },
  ];

  return (
    <div className="flex items-center justify-center gap-0 py-4">
      {steps.map((step, i) => (
        <div key={step.label} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`grid h-[36px] w-[36px] place-items-center rounded-full text-[14px] font-bold ${
                step.done
                  ? "bg-[#0d5c46] text-white"
                  : step.active
                  ? "bg-[#c4881f] text-white"
                  : "border-2 border-[#d0d0d0] bg-white text-[#888]"
              }`}
            >
              {step.done ? <Check className="h-5 w-5" strokeWidth={3} /> : i + 1}
            </div>
            <span className={`mt-1 text-[11px] font-semibold ${step.active ? "text-[#c4881f]" : step.done ? "text-[#0d5c46]" : "text-[#888]"}`}>
              {step.label}
            </span>
            <span className={`text-[10px] ${step.active ? "text-[#c4881f]" : step.done ? "text-[#0d5c46]/70" : "text-[#aaa]"}`}>
              {step.sub}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div className={`mx-3 mb-6 h-[2px] w-[80px] ${step.done ? "bg-[#0d5c46]" : "bg-[#d0d0d0]"}`} />
          )}
        </div>
      ))}
    </div>
  );
}

function ScoreRing({ score }: { score: number }) {
  const color = score >= 70 ? "#0d5c46" : score >= 50 ? "#f08000" : "#dc1017";
  const bg = score >= 70 ? "#d0ddd8" : score >= 50 ? "#fde8cc" : "#fdd5d5";

  return (
    <div className="relative grid h-[140px] w-[140px] shrink-0 place-items-center">
      <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full -rotate-90">
        <circle cx="60" cy="60" r="52" fill="none" stroke={bg} strokeWidth="12" />
        <circle
          cx="60" cy="60" r="52" fill="none"
          stroke={color} strokeWidth="12"
          strokeDasharray={`${(score / 100) * 2 * Math.PI * 52} ${2 * Math.PI * 52}`}
          strokeLinecap="round"
        />
      </svg>
      <div className="text-center">
        <span className="text-[36px] font-bold text-[#0c3d30]">{score}%</span>
        <span className="block text-[11px] font-semibold text-[#5a6a7a]">Match Score</span>
      </div>
    </div>
  );
}

function GoldCheck({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-[13.5px] leading-[1.5] text-[#2a3a4a]">
      <span className="mt-[3px] grid h-[17px] w-[17px] shrink-0 place-items-center rounded-full bg-[#0d5c46]">
        <Check className="h-[11px] w-[11px] text-white" strokeWidth={3} />
      </span>
      {children}
    </li>
  );
}

export default function ResultPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const jobSlug = searchParams.get("job") || "web-developer";

  const [candidate, setCandidate] = useState<CandidateProfileData>(defaultCandidateData);
  const [isAppFormOpen, setIsAppFormOpen] = useState(false);
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem("candidateData");
      if (stored) setCandidate(JSON.parse(stored));
    } catch {}
  }, []);

  const score = candidate.score ?? 72;
  const matchLevel = score >= 70 ? "high" : score >= 50 ? "moderate" : "low";
  const firstName = candidate.firstName || candidate.candidateName?.split(" ")[0] || "Candidate";
  const jobTitle = candidate.jobDetails?.title || "this position";

  const requirements = (candidate.requirementsMet?.length
    ? candidate.requirementsMet
    : [
        "Experience in frontend and full-stack web development",
        "Proficiency in React, Next.js, and TypeScript",
        "Knowledge of REST APIs",
        "Strong technical skills in web development",
        "Experience with responsive design and user-friendly interfaces",
      ]) as string[];

  const breakdownData = [
    { label: "Educational Qualification", desc: "Bachelor's Degree", score: 90, icon: GraduationCap },
    { label: "Relevant Experience", desc: "Community/Operations Experience", score: 85, icon: BriefcaseBusiness },
    { label: "Social Service Orientation", desc: "Compassion & Empathy", score: 80, icon: Users },
    { label: "Communication Skills", desc: "Interpersonal & Client Handling", score: 88, icon: Users },
    { label: "Documentation Skills", desc: "Report Writing & Record Keeping", score: 75, icon: FileText },
    { label: "Role Fit", desc: "Team Alignment & Work Approach", score: 80, icon: Target },
  ];

  return (
    <div>
      <Topbar />
      <Navbar />

      <main className="bg-[#fdf6ea]">
        {/* ── Hero ── */}
        <section className="relative isolate pt-28 lg:pt-32">
          <div className="absolute inset-0 -z-10">
            <Image src={heroBg} alt="" fill priority unoptimized sizes="100vw" className="object-cover object-center" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(253,246,234,.97)_0%,rgba(253,246,234,.85)_30%,rgba(253,246,234,.1)_55%,rgba(0,0,0,0)_70%)]" />
          </div>

          <div className="mx-auto w-full max-w-[1440px] px-5 pb-6 lg:px-12">
            {/* Breadcrumb */}
            <div className="mb-2 flex items-center gap-1.5 text-[12px] text-[#5a6a7a]">
              <Home className="h-3 w-3 text-[#0d5c46]" />
              <ChevronRight className="h-3 w-3" />
              <Link href="/careers" className="hover:text-[#0d5c46]">Careers</Link>
              <ChevronRight className="h-3 w-3" />
              <Link href={`/careers/apply?job=${jobSlug}`} className="hover:text-[#0d5c46]">Apply for Position</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="font-medium text-[#0c3d30]">AI Screening Result</span>
            </div>

            <button
              onClick={() => router.push(`/careers/apply?job=${jobSlug}`)}
              className="mb-2 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0c3d30] hover:text-[#0d5c46]"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Job Details
            </button>

            <h1 className="font-serif text-[34px] font-bold leading-[1.08] text-[#0c3d30] lg:text-[44px]">
              AI Screening <span className="text-[#c4881f]">Result</span>
            </h1>
            <p className="mt-1 text-[13.5px] text-[#3a4a5c]">
              Here is your profile match and analysis for the applied position.
            </p>
          </div>
        </section>

        {/* ── Content ── */}
        <section className="mx-auto w-full max-w-[1440px] px-4 pb-14 lg:px-10">
          <ProgressSteps />

          <div className="mt-2 grid gap-5 lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_360px] lg:items-start">
            {/* Left: Results */}
            <div className="space-y-4">
              {/* Great News Card */}
              <div className="overflow-hidden rounded-2xl border border-[#e8d5b5] bg-white shadow-sm">
                <div className="grid md:grid-cols-[240px_1fr]">
                  <div className="relative min-h-[220px]">
                    <Image src={personImage} alt="" fill sizes="240px" className="object-cover object-center" />
                  </div>
                  <div className="relative p-5">
                    <div className="pointer-events-none absolute right-4 top-4 h-[60px] w-[140px] opacity-60">
                      <Image src={togetherText} alt="" fill sizes="140px" className="object-contain" />
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="grid h-[44px] w-[44px] shrink-0 place-items-center rounded-full bg-[#0d5c46]">
                        <Check className="h-6 w-6 text-white" strokeWidth={3} />
                      </span>
                      <div>
                        <h2 className="font-serif text-[26px] font-bold leading-tight text-[#0c3d30]">
                          Great News, {firstName}!
                        </h2>
                        <p className="mt-1 text-[14px] font-semibold text-[#0d5c46]">
                          You are eligible to apply for this position.
                        </p>
                        <p className="mt-2 text-[13px] leading-[1.55] text-[#3a4a5c]">
                          Your profile matches the key requirements at Moksha Sewa. We appreciate your interest in contributing to a more compassionate and dignified society.
                        </p>
                        <p className="mt-2 text-[13px] italic text-[#5a6a7a]">
                          — Talent Acquisition Team<br />
                          <span className="font-semibold not-italic text-[#0c3d30]">Moksha Sewa</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 border-t border-[#e8d5b5] px-5 py-4">
                  <button
                    onClick={() => setIsAppFormOpen(true)}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#0d5c46] px-5 py-2.5 text-[14px] font-semibold text-white shadow-sm transition hover:bg-[#0a4535]"
                  >
                    Continue &amp; Apply for This Job <ArrowRight className="h-4 w-4" />
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-lg border border-[#0d5c46] px-5 py-2.5 text-[14px] font-semibold text-[#0d5c46] transition hover:bg-[#f0f7f4]">
                    <Download className="h-4 w-4" /> Download Result (PDF)
                  </button>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {/* Profile Match */}
                <div className="rounded-2xl border border-[#e8d5b5] bg-white p-5 shadow-sm">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="grid h-[28px] w-[28px] place-items-center rounded-full bg-[#fdf6ea]">
                      <Award className="h-[15px] w-[15px] text-[#c4881f]" />
                    </span>
                    <h3 className="text-[17px] font-bold text-[#0c3d30]">Your Profile Match</h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <ScoreRing score={score} />
                    <div className="space-y-1.5">
                      {[
                        { color: "#0d5c46", range: "70 – 100%", label: "Strong Match" },
                        { color: "#f08000", range: "50 – 69%", label: "Moderate Match" },
                        { color: "#dc1017", range: "Below 50%", label: "Not Eligible" },
                      ].map((l) => (
                        <div key={l.label} className="flex items-center gap-2 text-[13px]">
                          <span className="h-3 w-3 rounded-full" style={{ background: l.color }} />
                          <span className="font-semibold text-[#2a3a4a] w-[70px]">{l.range}</span>
                          <span className="font-semibold" style={{ color: l.color }}>{l.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Key Requirements */}
                <div className="rounded-2xl border border-[#e8d5b5] bg-white p-5 shadow-sm">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="grid h-[28px] w-[28px] place-items-center rounded-full bg-[#fdf6ea]">
                      <Target className="h-[15px] w-[15px] text-[#c4881f]" />
                    </span>
                    <h3 className="text-[17px] font-bold text-[#0c3d30]">You Meet the Key Requirements</h3>
                  </div>
                  <ul className="space-y-2">
                    {requirements.slice(0, 6).map((r) => (
                      <GoldCheck key={r}>{r}</GoldCheck>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Match Breakdown */}
              <div className="rounded-2xl border border-[#e8d5b5] bg-white p-5 shadow-sm">
                <div className="mb-3 flex items-center gap-2">
                  <span className="grid h-[28px] w-[28px] place-items-center rounded-full bg-[#fdf6ea]">
                    <BarChart3 className="h-[15px] w-[15px] text-[#c4881f]" />
                  </span>
                  <div>
                    <h3 className="text-[17px] font-bold text-[#0c3d30]">Match Breakdown</h3>
                    <p className="text-[12.5px] text-[#5a6a7a]">Here's how your profile aligns with the job requirements:</p>
                  </div>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  {breakdownData.map((item) => (
                    <div key={item.label} className="flex items-center gap-3 rounded-xl border border-[#e8d5b5] bg-[#fffbf2] px-3.5 py-2.5">
                      <span className="grid h-[34px] w-[34px] shrink-0 place-items-center rounded-lg bg-white">
                        <item.icon className="h-[17px] w-[17px] text-[#0d5c46]" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[13px] font-bold text-[#0c3d30]">{item.label}</p>
                        <p className="truncate text-[11.5px] text-[#5a6a7a]">{item.desc}</p>
                        <div className="mt-1 h-[5px] overflow-hidden rounded-full bg-[#e0d5c0]">
                          <div className="h-full rounded-full bg-[#0d5c46] transition-all" style={{ width: `${item.score}%` }} />
                        </div>
                      </div>
                      <span className="shrink-0 text-[14px] font-bold text-[#0d5c46]">{item.score}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Sidebar */}
            <div className="space-y-4">
              {/* Your Profile */}
              <div className="rounded-2xl border border-[#e8d5b5] bg-white p-5 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-[17px] font-bold text-[#0c3d30]">Your Profile</h3>
                  <button className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#0d5c46]">
                    <Pencil className="h-3.5 w-3.5" /> Edit
                  </button>
                </div>
                <div className="flex items-start gap-4">
                  <div className="grid h-[80px] w-[80px] shrink-0 place-items-center overflow-hidden rounded-xl bg-[#fdf6ea]">
                    {candidate.image ? (
                      <Image src={candidate.image} alt="" width={80} height={80} className="h-full w-full object-cover" />
                    ) : (
                      <span className="text-[24px] font-bold text-[#c4881f]">
                        {(candidate.candidateName || "AC").split(" ").map((w) => w[0]).slice(0, 2).join("")}
                      </span>
                    )}
                  </div>
                  <div className="min-w-0 space-y-1.5">
                    <p className="text-[16px] font-bold text-[#0c3d30]">{candidate.candidateName || "Candidate"}</p>
                    {candidate.email && (
                      <p className="flex items-center gap-1.5 text-[13px] text-[#3a4a5c]">
                        <Mail className="h-3.5 w-3.5 text-[#0d5c46]" /> <span className="truncate">{candidate.email}</span>
                      </p>
                    )}
                    {(candidate.phones?.[0] || candidate.phone) && (
                      <p className="flex items-center gap-1.5 text-[13px] text-[#3a4a5c]">
                        <Phone className="h-3.5 w-3.5 text-[#0d5c46]" /> {candidate.phones?.[0] || candidate.phone}
                      </p>
                    )}
                    <p className="flex items-center gap-1.5 text-[13px] text-[#3a4a5c]">
                      <MapPin className="h-3.5 w-3.5 text-[#0d5c46]" /> Delhi NCR
                    </p>
                    {candidate.linkedin && (
                      <p className="flex items-center gap-1.5 text-[13px] text-[#3a4a5c]">
                        <svg className="h-3.5 w-3.5 text-[#0d5c46]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        <span className="truncate">{candidate.linkedin}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Your CV */}
              <div className="rounded-2xl border border-[#e8d5b5] bg-white p-5 shadow-sm">
                <h3 className="mb-3 text-[17px] font-bold text-[#0c3d30]">Your CV</h3>
                <div className="flex items-center gap-3 rounded-xl bg-[#f0f7f4] p-3">
                  <span className="grid h-[44px] w-[44px] shrink-0 place-items-center rounded-lg bg-white">
                    <FileText className="h-5 w-5 text-[#0d5c46]" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-[14px] font-bold text-[#0c3d30]">{candidate.cvName || "No file"}</p>
                    <p className="text-[12px] text-[#5a6a7a]">{candidate.cvSize || ""}</p>
                  </div>
                </div>
                <div className="mt-2 flex gap-4">
                  <button className="text-[13px] font-semibold text-[#0d5c46] hover:underline">View File</button>
                  <button className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#0d5c46] hover:underline">
                    <RefreshCw className="h-3.5 w-3.5" /> Upload Different CV
                  </button>
                </div>
              </div>

              {/* Job Summary */}
              <div className="rounded-2xl border border-[#e8d5b5] bg-white p-5 shadow-sm">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-[17px] font-bold text-[#0c3d30]">Job Summary</h3>
                  <button className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#0d5c46]">
                    <Pencil className="h-3.5 w-3.5" /> Edit
                  </button>
                </div>
                <div className="space-y-2.5">
                  {[
                    { icon: Building2, label: "Organization", value: "Moksha Sewa" },
                    { icon: MapPin, label: "Location", value: candidate.jobDetails?.location || "Ghaziabad, Uttar Pradesh" },
                    { icon: BriefcaseBusiness, label: "Employment Type", value: candidate.jobDetails?.type || "Full Time" },
                    { icon: TrendingUp, label: "Experience Required", value: candidate.jobDetails?.experience || "0 - 10 Years" },
                    { icon: GraduationCap, label: "Qualification", value: candidate.jobDetails?.education || "Graduate (MBA/PGDM Preferred)" },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center gap-2.5 text-[13px]">
                      <row.icon className="h-4 w-4 shrink-0 text-[#0d5c46]" />
                      <span className="w-[130px] shrink-0 font-medium text-[#5a6a7a]">{row.label}</span>
                      <span className="font-semibold text-[#0c3d30]">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() => setIsAppFormOpen(true)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0d5c46] py-3.5 text-[15px] font-bold text-white shadow-md transition hover:bg-[#0a4535]"
              >
                Continue &amp; Apply for This Job <ArrowRight className="h-4 w-4" />
              </button>

              <div className="flex items-start gap-2 rounded-xl border border-[#e8d5b5] bg-white p-3.5 text-[12.5px] text-[#5a6a7a]">
                <LockKeyhole className="mt-0.5 h-4 w-4 shrink-0 fill-[#0d5c46] text-white" />
                Your data is secure and will only be used for recruitment purposes.
              </div>
            </div>
          </div>
        </section>

        {/* Modals */}
        <ApplicationFormModal
          isOpen={isAppFormOpen}
          candidateData={candidate}
          onBack={() => setIsAppFormOpen(false)}
          onClose={() => setIsAppFormOpen(false)}
          onNext={(data) => { if (data) setCandidate(data); setIsAppFormOpen(false); setIsReviewOpen(true); }}
        />
        <ReviewSubmitModal
          isOpen={isReviewOpen}
          candidateData={candidate}
          onBack={() => { setIsReviewOpen(false); setIsAppFormOpen(true); }}
          onClose={() => setIsReviewOpen(false)}
        />
      </main>

      <Footer />
    </div>
  );
}
