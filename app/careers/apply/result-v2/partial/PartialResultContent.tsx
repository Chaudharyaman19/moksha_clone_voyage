"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Bookmark,
  Briefcase,
  BriefcaseBusiness,
  Building2,
  Calendar,
  Check,
  ChevronRight,
  Clock,
  Download,
  Eye,
  FileText,
  GraduationCap,
  Headphones,
  Home,
  Leaf,
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
import { CandidateProfileData, defaultCandidateData } from "../../../submit-resume/page";

const heroBg = "/newcarrierimage/apply-hero-exact.png";
const personImage = "/newcarrierimage/candidate-partially-matched.png";
const rightCardDecoration = "/newcarrierimage/hero-diya-together.png";
const sideLeafLeft = "/assets/careers/apply-leaf-left-clean-transparent.png";
const sideLeafRight = "/assets/careers/apply-leaf-right-clean-transparent.png";

function LotusBadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-white">
      <path d="M12 2C10.8 5.5 9.8 9 9.8 13C9.8 16.5 10.8 18.5 12 19.5C13.2 18.5 14.2 16.5 14.2 13C14.2 9 13.2 5.5 12 2Z" />
      <path d="M10.8 5.8C7.5 8.5 5.8 12 5.8 15.5C5.8 18.5 7.5 20 9.2 20C10.5 18 10.8 15.2 10.8 12.5C10.8 10 10.8 8 10.8 5.8Z" />
      <path d="M13.2 5.8C16.5 8.5 18.2 12 18.2 15.5C18.2 18.5 16.5 20 14.8 20C13.5 18 13.2 15.2 13.2 12.5C13.2 10 13.2 8 13.2 5.8Z" />
      <path d="M6 13C3.5 14.5 2 17 2 19C4 20 6.5 19.5 8 18C7.2 16.5 6.5 14.8 6 13Z" />
      <path d="M18 13C20.5 14.5 22 17 22 19C20 20 17.5 19.5 16 18C16.8 16.5 17.5 14.8 18 13Z" />
    </svg>
  );
}

function ProgressSteps() {
  const steps = [
    { label: "Upload CV", sub: "Completed", active: false, done: true },
    { label: "AI Analysis", sub: "Completed", active: false, done: true },
    { label: "Eligibility Result", sub: "Current Step", active: true, done: false },
    { label: "Apply for Job", sub: "Next", active: false, done: false },
  ];

  return (
    <div className="relative w-full max-w-[700px] px-6 sm:px-8 md:pl-[84px] md:pr-6 py-2">
      <div className="absolute top-[26px] left-[42px] right-[42px] md:left-[102px] md:right-[42px] h-[2.5px] z-0 -translate-y-1/2 flex">
        <div className="flex-1 bg-[#0d5c46] h-full" />
        <div className="flex-1 bg-[#0d5c46] h-full" />
        <div className="flex-1 bg-[#cbd5e1] h-full" />
      </div>

      <div className="relative z-10 flex items-start justify-between">
        {steps.map((step, i) => (
          <div key={step.label} className="flex flex-col items-center">
            <div
              className={`grid h-[36px] w-[36px] place-items-center rounded-full text-[13.5px] font-bold shadow-xs ${
                step.done
                  ? "bg-[#0d5c46] text-white"
                  : step.active
                  ? "bg-[#d97706] text-white"
                  : "border-2 border-[#cbd5e1] bg-[#fdfaf1] text-[#64748b]"
              }`}
            >
              {step.done ? <Check className="h-4 w-4 text-white" strokeWidth={3} /> : i + 1}
            </div>
            <span
              className={`mt-1.5 text-[12px] font-semibold tracking-tight ${
                step.active ? "text-[#0c3d30]" : step.done ? "text-[#0d5c46]" : "text-[#64748b]"
              }`}
            >
              {step.label}
            </span>
            <span
              className={`text-[10.5px] ${
                step.active ? "text-[#d97706] font-semibold" : step.done ? "text-[#0d5c46]/80" : "text-[#94a3b8]"
              }`}
            >
              {step.sub}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScoreRing({ score }: { score: number }) {
  const color = score >= 70 ? "#0d5c46" : score >= 50 ? "#f08000" : "#dc1017";
  const bg = "#e5e7eb";

  return (
    <div className="relative grid h-[105px] w-[105px] shrink-0 place-items-center">
      <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full -rotate-90">
        <circle cx="60" cy="60" r="48" fill="none" stroke={bg} strokeWidth="12" />
        <circle
          cx="60"
          cy="60"
          r="48"
          fill="none"
          stroke={color}
          strokeWidth="12"
          strokeDasharray={`${(score / 100) * 2 * Math.PI * 48} ${2 * Math.PI * 48}`}
          strokeLinecap="round"
        />
      </svg>
      <div className="text-center leading-tight">
        <span className="text-[22px] font-bold text-[#0c3d30]">{score}%</span>
        <span className="block text-[9.5px] font-medium text-[#5a6a7a]">Match Score</span>
      </div>
    </div>
  );
}

export default function PartialResultContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const jobSlug = searchParams.get("job") || "web-developer";

  const [candidate, setCandidate] = useState<CandidateProfileData>(defaultCandidateData);

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem("candidateData");
      if (stored) setCandidate(JSON.parse(stored));
    } catch {}
  }, []);

  const score = 58;
  const rawFirstName = candidate.firstName || candidate.candidateName?.split(" ")[0] || "Ram";
  const firstName = rawFirstName.charAt(0).toUpperCase() + rawFirstName.slice(1);
  const rawCandidateName = candidate.candidateName || candidate.firstName || "Ram";
  const formattedCandidateName = rawCandidateName
    .trim()
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const barColor = (s: number) => (s >= 70 ? "#0d5c46" : s >= 50 ? "#d97706" : "#dc1017");

  return (
    <div className="result-screen bg-[#fdf6ea] overflow-x-hidden">
      <Topbar />
      <Navbar />
      <main className="bg-[#fdf6ea] overflow-x-hidden">
        {/* ── Hero ── */}
        <section className="relative isolate pt-40 sm:pt-44 lg:min-h-[440px] lg:pt-48 pb-10 lg:pb-14 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image
              src={heroBg}
              alt=""
              fill
              priority
              unoptimized
              sizes="100vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(253,246,234,0.92)_0%,rgba(253,246,234,0.75)_35%,rgba(253,246,234,0.2)_65%,rgba(253,246,234,0)_100%)]" />
          </div>

          <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-12 pb-6 relative z-10">
            <div className="mb-3.5 flex flex-wrap items-center gap-2 text-[14px] sm:text-[15px] lg:text-[16px] text-[#5a6a7a]">
              <Home className="h-4.5 w-4.5 text-[#0d5c46]" />
              <ChevronRight className="h-4 w-4 text-[#8a9aa8]" />
              <Link href="/careers" className="hover:text-[#0d5c46]">Careers</Link>
              <ChevronRight className="h-4 w-4 text-[#8a9aa8]" />
              <Link href={`/careers/apply?job=${jobSlug}`} className="hover:text-[#0d5c46]">Apply for Position</Link>
              <ChevronRight className="h-4 w-4 text-[#8a9aa8]" />
              <span className="font-semibold text-[#0c3d30]">AI Screening Result</span>
            </div>

            <button
              onClick={() => router.push(`/careers/apply?job=${jobSlug}`)}
              className="mb-3.5 inline-flex items-center gap-2 text-[15.5px] sm:text-[16.5px] lg:text-[18px] font-semibold text-[#0c3d30] transition hover:text-[#0d5c46]"
            >
              <ArrowLeft className="h-5 w-5" /> Back to Job Details
            </button>

            <h1 className="font-serif text-[44px] font-bold leading-[1.06] text-[#0c3d30] sm:text-[54px] lg:text-[62px]">
              AI Screening <span className="text-[#c4881f]">Result</span>
            </h1>
            <p className="mt-2 text-[17px] font-medium text-[#2c3e50] sm:text-[18.5px] lg:text-[20px]">
              Here is your profile match and analysis for the applied position.
            </p>
          </div>
        </section>

        {/* ── Content ── */}
        <section className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-12 pb-10">
          <div className="pointer-events-none absolute -left-2 sm:-left-3 lg:-left-4 xl:-left-6 top-6 z-0 h-[760px] w-[85px] sm:w-[110px] lg:w-[135px] xl:w-[155px]">
            <Image src={sideLeafLeft} alt="" fill unoptimized priority className="object-contain object-left" />
          </div>
          <div className="pointer-events-none absolute -right-2 sm:-right-3 lg:-right-4 xl:-right-6 top-6 z-0 h-[760px] w-[85px] sm:w-[110px] lg:w-[135px] xl:w-[155px]">
            <Image src={sideLeafRight} alt="" fill unoptimized priority className="object-contain object-right" />
          </div>

          <div className="relative z-10 pt-2 sm:pt-3.5 mb-2">
            <ProgressSteps />

            <div className="mt-2.5 grid gap-3 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-stretch xl:grid-cols-[minmax(0,1fr)_340px]">
              {/* Left: Results */}
              <div className="space-y-2.5 min-w-0 max-w-full">
                {/* Banner Card */}
                <div className="overflow-hidden rounded-2xl border border-[#ebdcc4] bg-[#fdfaf1] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative h-[180px] w-full md:h-auto md:w-[235px] lg:w-[265px] xl:w-[280px] shrink-0">
                      <Image
                        src={personImage}
                        alt="Candidate"
                        fill
                        priority
                        unoptimized
                        sizes="(max-width: 768px) 100vw, 280px"
                        className="object-cover object-center"
                      />
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-3 sm:py-3.5 sm:pl-3.5 sm:pr-2 lg:py-4 lg:pl-4 lg:pr-1.5">
                      <div>
                        <h2 className="font-serif text-[24px] font-bold leading-tight text-[#0c3d30] sm:text-[27px] lg:text-[30px]">
                          You&apos;re a <span className="text-[#d97706] font-bold">Partially Matched</span> Candidate, {firstName}!
                        </h2>
                        <p className="mt-1.5 text-[15px] font-semibold text-[#0c3d30] lg:text-[16px]">
                          Your profile shows good potential, but a few key areas need improvement.
                        </p>
                        <p className="mt-1.5 text-[13px] leading-[1.5] text-[#3a4a5c] max-w-[480px] lg:text-[14px]">
                          You can still apply after reviewing the suggestions below and updating your profile or CV. We appreciate your interest in contributing to a more compassionate and dignified society.
                        </p>
                      </div>

                      <div className="mt-3.5 flex flex-row items-center flex-nowrap gap-2 sm:gap-2.5 pt-0.5">
                        <button className="shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 sm:gap-2 rounded-lg bg-[#0b4d3b] px-3.5 sm:px-4 py-2 text-[12.5px] sm:text-[13px] font-semibold text-white shadow-xs transition hover:bg-[#073629]">
                          Continue &amp; Apply for This Job <ArrowRight className="h-3.5 w-3.5" />
                        </button>
                        <button className="shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 sm:gap-2 rounded-lg border-2 border-[#0b4d3b] bg-[#fdfaf1] px-3.5 sm:px-4 py-2 text-[12.5px] sm:text-[13px] font-semibold text-[#0b4d3b] transition hover:bg-[#f3ede0]">
                          <Download className="h-3.5 w-3.5" /> Download Result (PDF)
                        </button>
                      </div>
                    </div>

                    <div className="relative hidden w-[265px] shrink-0 lg:block xl:w-[300px]">
                      <Image
                        src={rightCardDecoration}
                        alt="Together for a More Compassionate Tomorrow"
                        fill
                        unoptimized
                        priority
                        className="object-contain object-right lg:scale-105"
                      />
                    </div>
                  </div>
                </div>

                {/* Score & Suggestions Grid */}
                <div className="grid gap-2.5 md:grid-cols-2">
                  {/* Profile Match */}
                  <div className="rounded-2xl border border-[#ebdcc4] bg-[#fdfaf1] p-3.5 sm:p-4.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                    <div className="mb-2.5 flex items-center gap-2">
                      <span className="grid h-[28px] w-[28px] place-items-center rounded-full bg-[#d97706] text-white shadow-xs">
                        <LotusBadgeIcon />
                      </span>
                      <h3 className="text-[17px] font-bold text-[#0c3d30]">Your Profile Match</h3>
                    </div>
                    <div className="flex items-center gap-4">
                      <ScoreRing score={score} />
                      <div className="space-y-1.5">
                        {[
                          { dot: "bg-[#16a34a]", range: "70 – 100%", label: "Strong Match" },
                          { dot: "bg-[#eab308]", range: "50 – 69%", label: "Moderate Match" },
                          { dot: "bg-[#dc2626]", range: "Below 50%", label: "Not Eligible" },
                        ].map((l) => (
                          <div key={l.label} className="flex items-center gap-2 text-[13px]">
                            <span className={`h-2.5 w-2.5 rounded-full shrink-0 ${l.dot}`} />
                            <span className="w-[75px] shrink-0 font-medium text-[#0c3d30]">{l.range}</span>
                            <span className="font-semibold text-[#0c3d30]">{l.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Key Suggestions */}
                  <div className="relative overflow-hidden rounded-2xl border border-[#ebdcc4] bg-[#fdfaf1] p-3.5 sm:p-4.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                    <div className="mb-2.5 flex items-center gap-2">
                      <span className="grid h-[28px] w-[28px] place-items-center rounded-full bg-[#d97706] text-white shadow-xs">
                        <Target className="h-4 w-4" />
                      </span>
                      <h3 className="text-[17px] font-bold text-[#0c3d30]">Key Suggestions to Improve Your Match</h3>
                    </div>
                    <ul className="space-y-1.5 relative z-10">
                      {[
                        "Gain more experience in end-of-life care support or community service.",
                        "Highlight relevant volunteer work or field experience.",
                        "Add certifications related to caregiving, counseling or social service.",
                        "Include more details on your communication and people-handling skills.",
                      ].map((r, i) => (
                        <li key={i} className="flex items-center gap-2 text-[13px] leading-snug text-[#2d3748]">
                          <span className="grid h-[17px] w-[17px] shrink-0 place-items-center rounded-full bg-[#d97706] text-[10px] font-bold text-white">
                            {i + 1}
                          </span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Match Breakdown */}
                <div className="rounded-2xl border border-[#ebdcc4] bg-[#fdfaf1] p-3.5 sm:p-4.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <div className="mb-2.5 flex items-center gap-2">
                    <span className="grid h-[28px] w-[28px] place-items-center rounded-full bg-[#d97706] text-white shadow-xs">
                      <BarChart3 className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="text-[17px] font-bold text-[#0c3d30]">Match Breakdown</h3>
                      <p className="text-[12.5px] text-[#5a6a7a]">Here&apos;s how your profile aligns with the job requirements:</p>
                    </div>
                  </div>

                  <div className="grid gap-x-5 gap-y-2.5 md:grid-cols-2 pt-1">
                    {[
                      { label: "Educational Qualification", desc: "Bachelor's Degree", score: 70, icon: GraduationCap },
                      { label: "Communication Skills", desc: "Interpersonal & Client Handling", score: 68, icon: Users },
                      { label: "Relevant Experience", desc: "Community/Operations Experience", score: 55, icon: BriefcaseBusiness },
                      { label: "Documentation Skills", desc: "Report Writing & Record Keeping", score: 52, icon: FileText },
                      { label: "Social Service Orientation", desc: "Compassion & Empathy", score: 60, icon: Leaf },
                      { label: "Role Fit", desc: "Team Alignment & Work Approach", score: 56, icon: Target },
                    ].map((item) => (
                      <div key={item.label} className="flex items-center gap-2.5">
                        <item.icon className="h-5 w-5 shrink-0 text-[#0d5c46]" />
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-[14.5px] font-bold text-[#0c3d30]">{item.label}</p>
                          <p className="truncate text-[12.5px] text-[#64748b]">{item.desc}</p>
                        </div>
                        <div className="h-[7px] w-[85px] sm:w-[110px] overflow-hidden rounded-full bg-[#e5e7eb] shrink-0">
                          <div className="h-full rounded-full" style={{ width: `${item.score}%`, backgroundColor: barColor(item.score) }} />
                        </div>
                        <span className="w-[38px] shrink-0 text-right text-[14.5px] font-bold" style={{ color: barColor(item.score) }}>
                          {item.score}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Sidebar */}
              <div className="relative h-full">
                <div
                  style={{ top: "-70px", bottom: "0px" }}
                  className="space-y-2.5 lg:space-y-0 lg:absolute lg:top-[-70px] lg:bottom-0 lg:left-0 lg:right-0 lg:w-full flex flex-col justify-between"
                >
                {/* Your Profile */}
                <div className="rounded-2xl border border-[#ebdcc4] bg-[#fdfaf1] p-3.5 sm:p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <div className="mb-2.5 flex items-center justify-between">
                    <h3 className="text-[16px] font-bold text-[#0c3d30]">Your Profile</h3>
                    <button className="inline-flex items-center gap-1 rounded-md border border-[#ebdcc4] bg-[#fcf8ee] px-2 py-0.5 text-[11.5px] font-medium text-gray-600 transition hover:border-[#0d5c46] hover:text-[#0d5c46]">
                      <Pencil className="h-3 w-3" /> Edit
                    </button>
                  </div>
                  <div className="flex items-stretch gap-3">
                    <div className="relative w-[90px] sm:w-[100px] shrink-0 overflow-hidden rounded-xl border border-[#ebdcc4]">
                      <Image
                        src="/newcarrierimage/profile-male-vijay.png"
                        alt="Candidate Photo"
                        fill
                        unoptimized
                        priority
                        className="object-cover object-center scale-115"
                      />
                    </div>
                    <div className="min-w-0 flex-1 space-y-1">
                      <p className="truncate text-[15.5px] font-bold text-[#0c3d30] capitalize">
                        {formattedCandidateName}
                      </p>
                      <p className="flex items-center gap-1.5 text-[12px] text-[#3a4a5c]">
                        <Mail className="h-3.5 w-3.5 text-[#0d5c46] shrink-0" />
                        <span className="truncate">{candidate.email || "chaudharyaman1920@gmail.com"}</span>
                      </p>
                      <p className="flex items-center gap-1.5 text-[12px] text-[#3a4a5c]">
                        <Phone className="h-3.5 w-3.5 text-[#0d5c46] shrink-0" />
                        <span>{candidate.phones?.[0] || candidate.phone || "+91 93102 19283"}</span>
                      </p>
                      <p className="flex items-center gap-1.5 text-[12px] text-[#3a4a5c]">
                        <MapPin className="h-3.5 w-3.5 text-[#0d5c46] shrink-0" />
                        <span>Delhi NCR</span>
                      </p>
                      <p className="flex items-center gap-1.5 text-[11.5px] text-[#5a6a7a]">
                        <Calendar className="h-3.5 w-3.5 text-[#0d5c46] shrink-0" />
                        <span>14 Nov 1995 &nbsp;|&nbsp; Male</span>
                      </p>
                      <p className="flex items-center gap-1.5 text-[11.5px] text-[#0077b5]">
                        <svg className="h-3.5 w-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        <span className="truncate">linkedin.com/in/vijay-sharma</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Your CV */}
                <div className="rounded-2xl border border-[#ebdcc4] bg-[#fdfaf1] p-3.5 sm:p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <h3 className="mb-2 text-[16px] font-bold text-[#0c3d30]">Your CV</h3>
                  <div className="flex items-center gap-3 rounded-xl border border-[#bde0d4] bg-[#f3f9f6] p-2.5">
                    <div className="relative grid h-[40px] w-[40px] shrink-0 place-items-center rounded-lg border border-[#e2e8f0] bg-white">
                      <FileText className="h-5 w-5 text-[#0d5c46]" />
                      <span className="absolute -bottom-1 -right-1 grid h-[16px] w-[16px] place-items-center rounded-full bg-[#0d5c46] text-white">
                        <Check className="h-2 w-2" strokeWidth={3} />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[13px] font-bold text-[#0c3d30]">
                        {candidate.cvName || "ram.docx"}
                      </p>
                      <p className="text-[11px] text-[#64748b]">
                        {candidate.cvSize || "11 KB"} &nbsp;|&nbsp; 17 Oct 2026, 10:24 AM
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-4 text-[12px] font-semibold text-[#0d5c46]">
                    <button className="inline-flex items-center gap-1 transition hover:underline">
                      <Eye className="h-3.5 w-3.5" /> View File
                    </button>
                    <button className="inline-flex items-center gap-1 transition hover:underline">
                      <RefreshCw className="h-3.5 w-3.5" /> Upload Different CV
                    </button>
                  </div>
                </div>

                {/* Job Summary */}
                <div className="rounded-2xl border border-[#ebdcc4] bg-[#fdfaf1] p-3.5 sm:p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-[16px] font-bold text-[#0c3d30]">Job Summary</h3>
                    <button className="inline-flex items-center gap-1 rounded-md border border-[#ebdcc4] bg-[#fcf8ee] px-2 py-0.5 text-[11.5px] font-medium text-gray-600 transition hover:border-[#0d5c46] hover:text-[#0d5c46]">
                      <Pencil className="h-3 w-3" /> Edit
                    </button>
                  </div>
                  <div className="space-y-1.5 text-[12.5px]">
                    {[
                      { icon: Briefcase, label: "Position", value: "Operations Associate" },
                      { icon: Building2, label: "Organization", value: "Moksha Sewa" },
                      { icon: MapPin, label: "Location", value: "Ghaziabad, Uttar Pradesh" },
                      { icon: BriefcaseBusiness, label: "Employment Type", value: "Full time" },
                      { icon: TrendingUp, label: "Experience Required", value: "2 – 5 Years" },
                      { icon: GraduationCap, label: "Qualification", value: "Graduate (MBA/PGDM Preferred)" },
                      { icon: Clock, label: "Joining Preference", value: "Within 1 Month" },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <row.icon className="h-3.5 w-3.5 shrink-0 text-[#0d5c46]" />
                          <span className="font-medium text-[#5a6a7a]">{row.label}</span>
                        </div>
                        <span className="font-semibold text-[#0c3d30] text-right">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons & Security Note */}
                <div className="space-y-1.5 pt-0.5">
                  <button className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-[#0b4d3b] bg-[#fdfaf1] py-2 text-[13.5px] font-bold text-[#0b4d3b] transition hover:bg-[#f2ebe0]">
                    <Bookmark className="h-4 w-4" /> Save for Later
                  </button>
                  <div className="flex items-center justify-center gap-2 text-[12px] font-medium text-gray-600">
                    <span className="grid h-4.5 w-4.5 shrink-0 place-items-center rounded-full bg-[#0d5c46] text-white">
                      <LockKeyhole className="h-2.5 w-2.5" />
                    </span>
                    <span>Your data is secure and will only be used for recruitment purposes.</span>
                  </div>
                </div>

                {/* Assistance Box */}
                <div className="flex items-start gap-2.5 rounded-2xl border border-[#bde0d4] bg-[#f3f9f6] p-3.5">
                  <span className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-full bg-[#0d5c46] text-white">
                    <Headphones className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <p className="text-[14px] font-bold text-[#0c3d30]">Need Any Assistance?</p>
                    <p className="text-[12px] leading-[1.45] text-[#3a4a5c]">
                      Feel free to reach out to our HR team at{" "}
                      <a href="mailto:careers@mokshasewa.org" className="font-semibold text-[#0d5c46] underline">careers@mokshasewa.org</a>
                    </p>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
