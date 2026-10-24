"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Check,
  ChevronRight,
  Clock,
  Cog,
  FileText,
  GraduationCap,
  Home,
  LockKeyhole,
  Search,
  Sparkles,
  User,
} from "lucide-react";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import { CandidateProfileData, defaultCandidateData } from "../../submit-resume/page";

const heroBg = "/newcarrierimage/apply-hero-exact.png";
const sideLeafLeft = "/assets/careers/apply-leaf-left-clean-transparent.png";
const sideLeafRight = "/assets/careers/apply-leaf-right-clean-transparent.png";
const sideBanner = "/newcarrierimage/service-beyond-goodbye.png";

function ProgressSteps() {
  const steps = [
    { label: "Upload CV", sub: "Completed", state: "done" },
    { label: "AI Analysis", sub: "In Progress", state: "active" },
    { label: "Review Details", sub: "Pending", state: "pending" },
    { label: "Submit Application", sub: "Pending", state: "pending" },
  ];

  return (
    <div className="relative w-full max-w-[760px] px-4 sm:px-6 py-2">
      <div className="absolute top-[27px] left-[35px] right-[35px] sm:left-[43px] sm:right-[43px] h-[2.5px] z-0 -translate-y-1/2 flex">
        <div className="flex-1 bg-[#0d5c46] h-full" />
        <div className="flex-1 bg-[#cbd5e1] h-full" />
        <div className="flex-1 bg-[#cbd5e1] h-full" />
      </div>
      <div className="relative z-10 flex items-start justify-between">
        {steps.map((step, i) => (
          <div key={step.label} className="flex flex-col items-center">
            <div
              className={`grid h-[38px] w-[38px] place-items-center rounded-full text-[14px] font-bold shadow-xs ${
                step.state === "done"
                  ? "bg-[#0d5c46] text-white"
                  : step.state === "active"
                  ? "bg-[#d97706] text-white"
                  : "border-2 border-[#cbd5e1] bg-[#fdfaf1] text-[#64748b]"
              }`}
            >
              {step.state === "done" ? <Check className="h-4.5 w-4.5" strokeWidth={3} /> : i + 1}
            </div>
            <span className={`mt-1.5 text-[13px] font-bold tracking-tight ${step.state === "active" ? "text-[#0c3d30]" : step.state === "done" ? "text-[#0d5c46]" : "text-[#0c3d30]"}`}>
              {step.label}
            </span>
            <span className={`text-[11px] ${step.state === "active" ? "text-[#d97706] font-semibold" : step.state === "done" ? "text-[#0d5c46]" : "text-[#94a3b8]"}`}>
              {step.sub}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScoreRing({ score }: { score: number }) {
  return (
    <div className="relative grid h-[175px] w-[175px] shrink-0 place-items-center">
      <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full -rotate-90">
        <circle cx="60" cy="60" r="48" fill="none" stroke="#f3e8d0" strokeWidth="11" />
        <circle
          cx="60"
          cy="60"
          r="48"
          fill="none"
          stroke="#d97706"
          strokeWidth="11"
          strokeDasharray={`${(score / 100) * 2 * Math.PI * 48} ${2 * Math.PI * 48}`}
          strokeLinecap="round"
        />
        <circle
          cx="60"
          cy="60"
          r="48"
          fill="none"
          stroke="#0d5c46"
          strokeWidth="11"
          strokeDasharray={`${(score / 100) * 2 * Math.PI * 48 * 0.4} ${2 * Math.PI * 48}`}
          strokeLinecap="round"
          opacity="0.9"
        />
      </svg>
      <div className="text-center leading-tight px-2">
        <span className="block text-[36px] font-bold leading-none text-[#0c3d30]">{score}%</span>
        <span className="mt-1 block text-[14.5px] font-bold text-[#d97706]">Analyzing...</span>
        <div className="mt-1 text-[9.5px] sm:text-[10px] leading-[1.3] text-[#5a6a7a] font-medium">
          <span className="block">Extracting skills,</span>
          <span className="block">experience and</span>
          <span className="block">qualifications</span>
        </div>
      </div>
    </div>
  );
}

type TaskState = "done" | "loading" | "pending";

function TaskCard({
  icon: Icon,
  title,
  desc,
  state,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  state: TaskState;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-[#ebdcc4] bg-[#fdfaf1] px-3.5 py-3">
      <span className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-xl bg-[#e7f2ec] text-[#0d5c46]">
        <Icon className="h-5.5 w-5.5" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[14.5px] font-bold text-[#0c3d30]">{title}</p>
        <p className="text-[12.5px] leading-snug text-[#64748b]">{desc}</p>
      </div>
      {state === "done" ? (
        <span className="grid h-[24px] w-[24px] shrink-0 place-items-center rounded-full bg-[#16a34a] text-white">
          <Check className="h-3.5 w-3.5" strokeWidth={3} />
        </span>
      ) : state === "loading" ? (
        <span className="h-[20px] w-[20px] shrink-0 animate-spin rounded-full border-[2.5px] border-[#fde68a] border-t-[#d97706]" />
      ) : (
        <span className="h-[20px] w-[20px] shrink-0 rounded-full border-2 border-[#cbd5e1] bg-white" />
      )}
    </div>
  );
}

const nextSteps = [
  { title: "AI Profile Analysis", desc: "We analyze your CV for relevant skills, qualifications and experience." },
  { title: "Review Your Details", desc: "You may be asked to verify or add additional information if required." },
  { title: "Application Submission", desc: "Once confirmed, your application will be submitted to our team." },
  { title: "Confirmation", desc: "You will receive a confirmation email with your application details." },
];

export default function ApplicationProgressContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const jobSlug = searchParams.get("job") || "web-developer";

  const [candidate, setCandidate] = useState<CandidateProfileData>(defaultCandidateData);
  const [animScore, setAnimScore] = useState(0);
  const [taskStep, setTaskStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem("candidateData");
      if (stored) {
        setCandidate(JSON.parse(stored));
      }
    } catch {}
  }, []);

  // Smooth progress animation that finishes and unlocks the Next button
  useEffect(() => {
    const finalScore = typeof candidate.score === "number" ? candidate.score : 0;

    const interval = setInterval(() => {
      setAnimScore((prev) => {
        if (prev < finalScore) {
          const nextVal = prev + Math.ceil(Math.max(1, (finalScore - prev) / 4));
          return Math.min(nextVal, finalScore);
        }
        return prev;
      });
    }, 300);

    const t1 = setTimeout(() => setTaskStep(2), 1000);
    const t2 = setTimeout(() => setTaskStep(3), 1800);
    const t3 = setTimeout(() => setTaskStep(4), 2600);
    const t4 = setTimeout(() => {
      setTaskStep(5);
      setIsCompleted(true);
    }, 3200);

    return () => {
      clearInterval(interval);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [candidate]);

  const handleProceed = () => {
    const score = typeof candidate.score === "number" ? candidate.score : 0;
    if (score < 50) {
      router.push(`/careers/apply/result/not-eligible?job=${encodeURIComponent(jobSlug)}`);
    } else if (score < 70) {
      router.push(`/careers/apply/result/partial?job=${encodeURIComponent(jobSlug)}`);
    } else {
      router.push(`/careers/apply/result?job=${encodeURIComponent(jobSlug)}`);
    }
  };

  const jobTitle = candidate.jobDetails?.title || "Operations Associate";
  const jobLocation = candidate.jobDetails?.location || "Delhi NCR";
  const jobType = candidate.jobDetails?.type || "Full Time";
  const jobEducation = candidate.jobDetails?.education || "Bachelor's Degree";
  const cvFileName = candidate.cvName || "Vijay_Sharma_CV.pdf";
  const cvFileSize = candidate.cvSize || "2.4 MB";
  const targetScore = typeof candidate.score === "number"
    ? candidate.score
    : 0;

  const scoreMessage = targetScore >= 70
    ? "Based on your experience, skills and qualifications, you are a strong match for this position."
    : targetScore >= 50
    ? "Based on your experience, you partially match this position. Some required skills are missing."
    : "Based on our AI review, your experience does not align with the core requirements of this role.";

  return (
    <div className="result-screen bg-[#fdf6ea] overflow-x-hidden">
      <Topbar />
      <Navbar />
      <main className="bg-[#fdf6ea] overflow-x-hidden">
        {/* ── Hero ── */}
        <section className="relative isolate pt-40 sm:pt-44 lg:min-h-[340px] lg:pt-48 pb-8 lg:pb-10 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image src={heroBg} alt="" fill priority unoptimized sizes="100vw" className="object-cover object-top" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(253,246,234,0.92)_0%,rgba(253,246,234,0.75)_35%,rgba(253,246,234,0.2)_65%,rgba(253,246,234,0)_100%)]" />
          </div>
          <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-12 pb-4 relative z-10">
            <p className="mb-1 text-[12px] font-bold uppercase tracking-[0.12em] text-[#d97706] sm:text-[13px]">Careers at Moksha Sewa</p>
            <h1 className="font-serif text-[38px] font-bold leading-[1.06] text-[#0c3d30] sm:text-[46px] lg:text-[52px]">
              Application in <span className="text-[#c4881f]">Progress</span>
            </h1>
            <p className="mt-1.5 max-w-[560px] text-[15px] font-medium text-[#2c3e50] sm:text-[16px] lg:text-[17px]">
              We&apos;re excited to have you on board! Your application is under review. Here&apos;s an update on your progress so far.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-[14px] text-[#5a6a7a] sm:text-[15px]">
              <Home className="h-4.5 w-4.5 text-[#0d5c46]" />
              <ChevronRight className="h-4 w-4 text-[#8a9aa8]" />
              <Link href="/careers" className="hover:text-[#0d5c46]">Careers</Link>
              <ChevronRight className="h-4 w-4 text-[#8a9aa8]" />
              <span className="font-semibold text-[#0c3d30]">Application in Progress</span>
            </div>
          </div>
        </section>

        {/* ── Content ── */}
        <section className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-12 pb-10 overflow-hidden">
          <div className="pointer-events-none absolute -left-2 sm:-left-3 lg:-left-4 xl:-left-6 top-6 z-0 h-[760px] w-[85px] sm:w-[110px] lg:w-[135px] xl:w-[155px]">
            <Image src={sideLeafLeft} alt="" fill unoptimized priority className="object-contain object-left" />
          </div>
          <div className="pointer-events-none absolute -right-2 sm:-right-3 lg:-right-4 xl:-right-6 top-6 z-0 h-[760px] w-[85px] sm:w-[110px] lg:w-[135px] xl:w-[155px]">
            <Image src={sideLeafRight} alt="" fill unoptimized priority className="object-contain object-right" />
          </div>

          <div className="relative z-10 -mt-2 sm:-mt-3 lg:-mt-3.5 mb-2">
            <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_340px] lg:items-stretch">
              {/* Left */}
              <div className="rounded-2xl border border-[#ebdcc4] bg-[#fdfaf1] p-4 sm:p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] order-2 lg:order-1 min-w-0 max-w-full">
                <ProgressSteps />

                {/* CV Row */}
                <div className="mt-3 grid gap-2 md:grid-cols-[1fr_280px]">
                  <div className="flex items-center gap-3 rounded-xl border border-[#ebdcc4] bg-white px-3 py-2.5">
                    <span className="grid h-[44px] w-[38px] shrink-0 place-items-center rounded-lg bg-[#dc1017] text-[11px] font-black text-white">PDF</span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[15.5px] font-bold text-[#0c3d30]">{cvFileName}</p>
                      <p className="text-[12.5px] text-[#64748b]">Uploaded successfully &nbsp;|&nbsp; PDF &nbsp;|&nbsp; {cvFileSize}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl border border-[#bbe5cf] bg-[#f0faf5] px-3 py-2.5">
                    <span className="grid h-[30px] w-[30px] shrink-0 place-items-center rounded-full bg-[#16a34a] text-white">
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </span>
                    <div>
                      <p className="text-[14.5px] font-bold text-[#0c3d30]">CV Received</p>
                      <p className="text-[12.5px] text-[#5a6a7a]">Our AI is now analysing your profile.</p>
                    </div>
                  </div>
                </div>

                {/* AI Analysis Header */}
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <Sparkles className="mt-1 h-8 w-8 shrink-0 text-[#d97706]" />
                    <div>
                      <h3 className="text-[23px] sm:text-[25px] font-bold text-[#0c3d30]">AI Analysis in Progress</h3>
                      <p className="text-[15px] sm:text-[16px] text-[#5a6a7a]">Please wait while we analyze your profile against the job requirements.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl bg-[#f0f7f4] px-4 py-2.5 border border-[#cbe4d7]">
                    <Clock className="h-6 w-6 text-[#0d5c46] shrink-0" />
                    <p className="text-[14px] sm:text-[14.5px] leading-snug text-[#3a4a5c]">
                      This usually takes<br />
                      <span className="font-bold text-[#0c3d30]">10 – 20 seconds.</span>
                    </p>
                  </div>
                </div>

                {/* Tasks + Center Ring */}
                <div className="mt-3 grid items-center gap-3 md:grid-cols-[1fr_auto_1fr]">
                  <div className="space-y-2">
                    <TaskCard
                      icon={FileText}
                      title="Reading Your CV"
                      desc="Extracting key information from your profile..."
                      state="done"
                    />
                    <TaskCard
                      icon={Search}
                      title="Matching Skills"
                      desc="Comparing your skills with job requirements..."
                      state={taskStep >= 2 ? "done" : "loading"}
                    />
                    <TaskCard
                      icon={Briefcase}
                      title="Checking Experience"
                      desc="Analyzing relevant work experience..."
                      state={taskStep >= 3 ? "done" : taskStep === 2 ? "loading" : "pending"}
                    />
                  </div>

                  <div className="flex justify-center">
                    <ScoreRing score={animScore} />
                  </div>

                  <div className="space-y-2">
                    <TaskCard
                      icon={GraduationCap}
                      title="Verifying Education"
                      desc="Checking qualifications and certifications..."
                      state={taskStep >= 4 ? "done" : taskStep >= 2 ? "loading" : "pending"}
                    />
                    <TaskCard
                      icon={Cog}
                      title="Analyzing Competencies"
                      desc="Assessing role-specific skills and expertise..."
                      state={taskStep >= 4 ? "done" : "loading"}
                    />
                    <TaskCard
                      icon={BarChart3}
                      title="Calculating Match Score"
                      desc="Generating eligibility score..."
                      state={taskStep >= 5 ? "done" : "loading"}
                    />
                  </div>
                </div>

                {/* Bottom Status / Proceed Button */}
                <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-[#f5e3c0] bg-[#fdf6ea] px-5 py-4">
                  <div className="flex items-start gap-4">
                    <span className="grid h-[44px] w-[44px] shrink-0 place-items-center rounded-full bg-[#fef3c7] text-[#d97706]">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                    </span>
                    <div>
                      <p className="text-[17px] sm:text-[18px] font-bold text-[#d97706]">
                        {isCompleted ? "Analysis Complete!" : "Please keep this page open"}
                      </p>
                      <p className="mt-0.5 text-[14px] sm:text-[14.5px] leading-[1.5] text-[#3a4a5c]">
                        {isCompleted
                          ? "Your CV analysis has been finished successfully. Click the button to view your screening result."
                          : "Do not refresh or close this page while the analysis is in progress."}
                      </p>
                    </div>
                  </div>

                  <div className="w-full sm:w-auto shrink-0">
                    <button
                      onClick={handleProceed}
                      disabled={!isCompleted}
                      className={`flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl px-6 py-3 text-[14.5px] font-bold transition shadow-sm ${
                        isCompleted
                          ? "bg-[#0d5c46] text-white hover:bg-[#094736] active:scale-[0.98] cursor-pointer ring-2 ring-[#0d5c46]/20"
                          : "bg-[#e2d5c1] text-[#7d705c] cursor-not-allowed opacity-80"
                      }`}
                    >
                      {isCompleted ? (
                        <>
                          <span>View Eligibility Result</span>
                          <ArrowRight className="h-4.5 w-4.5" />
                        </>
                      ) : (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#7d705c] border-t-transparent" />
                          <span>Analyzing...</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Right: Sidebar */}
              <div className="flex flex-col gap-2.5 order-1 lg:order-2 relative z-20 h-full">
                {/* Banner */}
                <div className="relative h-[130px] overflow-hidden rounded-2xl border border-[#ebdcc4]">
                  <Image src={sideBanner} alt="Service Beyond Goodbye" fill unoptimized priority className="object-cover object-center" />
                </div>

                {/* Position */}
                <div className="rounded-2xl border border-[#ebdcc4] bg-[#fdfaf1] p-3.5 sm:p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-xl bg-[#0d5c46] text-white">
                      <User className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-[12px] text-[#5a6a7a]">Position Applied For</p>
                      <p className="text-[16px] font-bold text-[#0c3d30]">{jobTitle}</p>
                    </div>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-[11.5px] text-[#5a6a7a]">
                    <span className="rounded-md bg-[#fef9ee] px-2 py-0.5 font-medium">📍 {jobLocation}</span>
                    <span className="rounded-md bg-[#fef9ee] px-2 py-0.5 font-medium">📅 {jobType}</span>
                    <span className="rounded-md bg-[#fef9ee] px-2 py-0.5 font-medium">🎓 {jobEducation}</span>
                  </div>
                </div>

                {/* What Happens Next */}
                <div className="rounded-2xl border border-[#ebdcc4] bg-[#fdfaf1] p-3.5 sm:p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <h3 className="mb-2.5 text-[16px] font-bold text-[#0c3d30]">What Happens Next?</h3>
                  <ol className="space-y-2.5">
                    {nextSteps.map((s, i) => (
                      <li key={s.title} className="relative flex items-start gap-2.5">
                        {i < nextSteps.length - 1 && (
                          <span className="absolute left-[10.5px] top-[26px] bottom-[-21px] w-[2.5px] rounded-full bg-[#cbd5e1]" />
                        )}
                        <span
                          className={`relative z-10 mt-[1px] grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full text-[11px] font-bold ${
                            i === 0 ? "bg-[#0d5c46] text-white" : "border-2 border-[#cbd5e1] bg-white text-[#94a3b8]"
                          }`}
                        >
                          {i + 1}
                        </span>
                        <div>
                          <p className="text-[13px] font-bold text-[#0c3d30]">{s.title}</p>
                          <p className="text-[11.5px] leading-snug text-[#5a6a7a]">{s.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Profile Match */}
                <div className={`rounded-2xl border p-3.5 sm:p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] ${
                  targetScore >= 70
                    ? "border-[#f5e3c0] bg-[#fdf6ea]"
                    : targetScore >= 50
                    ? "border-[#fef08a] bg-[#fefce8]"
                    : "border-[#fecaca] bg-[#fef2f2]"
                }`}>
                  <div className="flex items-center gap-3.5">
                    <div className="relative grid h-[80px] w-[80px] shrink-0 place-items-center">
                      <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full -rotate-90">
                        <circle cx="60" cy="60" r="48" fill="none" stroke="#e5e7eb" strokeWidth={12} />
                        <circle
                          cx="60"
                          cy="60"
                          r="48"
                          fill="none"
                          stroke={targetScore >= 70 ? "#0d5c46" : targetScore >= 50 ? "#d97706" : "#dc2626"}
                          strokeWidth={12}
                          strokeDasharray={`${(targetScore / 100) * 2 * Math.PI * 48} ${2 * Math.PI * 48}`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className={`text-[17px] font-bold ${
                        targetScore >= 70 ? "text-[#0c3d30]" : targetScore >= 50 ? "text-[#d97706]" : "text-[#dc2626]"
                      }`}>
                        {targetScore}%
                      </span>
                    </div>
                    <div>
                      <p className={`text-[14px] font-bold ${
                        targetScore >= 70 ? "text-[#0c3d30]" : targetScore >= 50 ? "text-[#92400e]" : "text-[#991b1b]"
                      }`}>
                        Your Profile Match
                      </p>
                      <p className="text-[11.5px] leading-[1.45] text-[#3a4a5c]">
                        {scoreMessage}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-center gap-1.5 pt-0.5 text-[11px] text-gray-500">
                  <span className="grid h-3.5 w-3.5 place-items-center rounded-full bg-[#0d5c46] text-white"><LockKeyhole className="h-2 w-2" /></span>
                  <span>Your data is secure and will only be used for recruitment purposes.</span>
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
