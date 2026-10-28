"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Check,
  ChevronRight,
  ClipboardCheck,
  HandHeart,
  Headphones,
  Home,
  Leaf,
  Mail,
  MapPin,
  Pencil,
  Phone,
  Search,
  Smartphone,
  Users,
} from "lucide-react";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";

import {
  CandidatePhoto,
  NOT_IN_CV,
  formatGender,
  matchBands,
  telHref,
  useSupportContact,
} from "../candidateView";

const heroBg = "/newcarrierimage/apply-hero-exact.png";
const sectionBg = "/newcarrierimage/apply-section-bg.png";
const thankyouBg = "/newcarrierimage/thankyou-banner-bg.png";
const sideLeafLeft = "/assets/careers/apply-leaf-left-clean-transparent.png";
const sideLeafRight = "/assets/careers/apply-leaf-right-clean-transparent.png";
const thankyouPhoto = "/newcarrierimage/ananya-namaste.png";
const thankyouNamastePhoto = "/newcarrierimage/thankyou-namaste-woman.png";
const rightCardDecoration = "/newcarrierimage/hero-diya-together.png";

function ProgressSteps() {
  const steps = [
    { label: "Upload CV", sub: "Completed", n: 1 },
    { label: "AI Analysis", sub: "Completed", n: 2 },
    { label: "Review Details", sub: "Completed", n: 3 },
    { label: "Submit Application", sub: "Completed", n: 4 },
  ];

  return (
    <div className="relative w-full max-w-[760px] px-4 sm:px-6 py-1.5">
      <div className="absolute top-[24px] left-[32px] right-[32px] sm:left-[40px] sm:right-[40px] h-[2.5px] z-0 -translate-y-1/2 bg-[#0d5c46]" />
      <div className="relative z-10 flex items-start justify-between">
        {steps.map((step) => (
          <div key={step.label} className="flex flex-col items-center">
            <div
              className={`grid h-[34px] w-[34px] place-items-center rounded-full text-[13px] font-bold shadow-xs ${
                step.n === 4
                  ? "border-[2.5px] border-[#0d5c46] bg-[#fdfaf1] text-[#0d5c46]"
                  : "bg-[#0d5c46] text-white"
              }`}
            >
              {step.n}
            </div>
            <span className="mt-1 text-[12px] font-bold tracking-tight text-[#0c3d30]">{step.label}</span>
            <span className="text-[10.5px] font-semibold text-[#0d5c46]">{step.sub}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const nextSteps = [
  {
    icon: ClipboardCheck,
    title: "Application Review",
    desc: "Our team will review your application and AI analysis report.",
    time: "1 – 3 Working Days",
    descColor: "text-[#0d5c46]",
  },
  {
    icon: Users,
    title: "Shortlisting",
    desc: "If your profile matches the requirements, you will be shortlisted.",
    time: "3 – 5 Working Days",
    descColor: "text-[#0e3a5c]",
  },
  {
    icon: Smartphone,
    title: "Interview Process",
    desc: "You will be contacted via email/phone for the next steps.",
    time: "5 – 10 Working Days",
    descColor: "text-[#0e3a5c]",
  },
  {
    icon: Mail,
    title: "Final Update",
    desc: "You will receive the final status of your application by email.",
    time: "Within 2 Weeks",
    descColor: "text-[#0e3a5c]",
  },
];

function LotusIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className || "h-5 w-5"}>
      <path d="M12 2C10.8 5.5 9.8 9 9.8 13C9.8 16.5 10.8 18.5 12 19.5C13.2 18.5 14.2 16.5 14.2 13C14.2 9 13.2 5.5 12 2Z" />
      <path d="M10.8 5.8C7.5 8.5 5.8 12 5.8 15.5C5.8 18.5 7.5 20 9.2 20C10.5 18 10.8 15.2 10.8 12.5C10.8 10 10.8 8 10.8 5.8Z" />
      <path d="M13.2 5.8C16.5 8.5 18.2 12 18.2 15.5C18.2 18.5 16.5 20 14.8 20C13.5 18 13.2 15.2 13.2 12.5C13.2 10 13.2 8 13.2 5.8Z" />
      <path d="M6 13C3.5 14.5 2 17 2 19C4 20 6.5 19.5 8 18C7.2 16.5 6.5 14.8 6 13Z" />
      <path d="M18 13C20.5 14.5 22 17 22 19C20 20 17.5 19.5 16 18C16.8 16.5 17.5 14.8 18 13Z" />
    </svg>
  );
}

const missionChips = [
  { icon: HandHeart, label: "Meaningful\nService", color: "text-[#ea580c]", bg: "bg-[#fff7ed]", border: "border-[#fed7aa]" },
  { icon: Users, label: "Supportive\nCommunity", color: "text-[#0284c7]", bg: "bg-[#f0f9ff]", border: "border-[#bae6fd]" },
  { icon: Leaf, label: "Learning\nOpportunities", color: "text-[#16a34a]", bg: "bg-[#f0fdf4]", border: "border-[#bbf7d0]" },
  { icon: LotusIcon, label: "Positive\nImpact", color: "text-[#ca8a04]", bg: "bg-[#fefce8]", border: "border-[#fde047]" },
];

export default function ApplicationSubmittedContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const jobSlug = searchParams.get("job") || "";
  const support = useSupportContact();

  const [appData, setAppData] = useState({
    applicationId: "",
    candidateName: "",
    firstName: "",
    email: "",
    phone: "",
    position: "",
    location: "",
    score: 0,
    threshold: undefined as number | undefined,
    submittedAt: "",
    image: null as string | null,
    gender: null as string | null,
    dateOfBirth: null as string | null,
    linkedin: null as string | null,
  });

  useEffect(() => {
    let parsed: any = null;
    try {
      const stored = sessionStorage.getItem("submittedApplication");
      parsed = stored ? JSON.parse(stored) : null;
    } catch {}

    // Nothing was submitted in this session, so there is nothing real to show here.
    if (!parsed?.applicationId) {
      router.replace(jobSlug ? `/careers/apply?job=${encodeURIComponent(jobSlug)}` : "/careers");
      return;
    }

    setAppData({
      applicationId: parsed.applicationId,
      candidateName: parsed.candidateName || "",
      firstName: (parsed.candidateName || "").split(" ")[0] || "",
      email: parsed.email || "",
      phone: parsed.phone || "",
      position: parsed.position || "",
      location: parsed.location || "",
      score: parsed.score ?? 0,
      threshold: parsed.threshold,
      submittedAt: parsed.submittedAt || "",
      image: parsed.image || null,
      gender: parsed.gender || null,
      dateOfBirth: parsed.dateOfBirth || null,
      linkedin: parsed.linkedin || null,
    });
  }, [router, jobSlug]);

  const bands = matchBands({ threshold: appData.threshold });
  const matchLevel = appData.score >= bands.strong ? "high" : appData.score >= bands.threshold ? "moderate" : "low";

  return (
    <div className="result-screen bg-[#fdf6ea] overflow-x-hidden">
      <Topbar />
      <Navbar />
      <main className="bg-[#fdf6ea] overflow-x-hidden">
        {/* ── Hero ── */}
        <section className="relative isolate pt-40 sm:pt-44 lg:min-h-[220px] lg:pt-48 pb-3 lg:pb-4 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image src={heroBg} alt="" fill priority unoptimized sizes="100vw" className="object-cover object-top" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(253,246,234,0.92)_0%,rgba(253,246,234,0.75)_35%,rgba(253,246,234,0.2)_65%,rgba(253,246,234,0)_100%)]" />
          </div>
          <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-12 relative z-10">
            <div className="-mt-[30px] flex flex-wrap items-center gap-2 text-[14px] sm:text-[15px] lg:text-[16px] text-[#5a6a7a]">
              <Home className="h-4.5 w-4.5 text-[#0d5c46]" />
              <ChevronRight className="h-4 w-4 text-[#8a9aa8]" />
              <Link href="/careers" className="hover:text-[#0d5c46]">Home</Link>
              <ChevronRight className="h-4 w-4 text-[#8a9aa8]" />
              <Link href="/careers" className="hover:text-[#0d5c46]">Careers</Link>
              <ChevronRight className="h-4 w-4 text-[#8a9aa8]" />
              <Link href="/careers/apply" className="hover:text-[#0d5c46]">Apply for Position</Link>
              <ChevronRight className="h-4 w-4 text-[#8a9aa8]" />
              <span className="font-semibold text-[#0c3d30]">Application Submitted</span>
            </div>
          </div>
        </section>

        {/* ── Content ── */}
        <div className="relative w-full">
        {/* Full-viewport-width background, same width as the hero image above */}
        <div className="pointer-events-none absolute inset-x-0 top-0 bottom-6 z-0 overflow-hidden">
          <Image src={sectionBg} alt="" fill unoptimized priority sizes="100vw" className="object-cover sm:object-fill" />
        </div>
        <section className="relative mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-12 pb-10">

          <div className="relative z-30 -mt-[14px] sm:-mt-[14px] lg:-mt-[14px] mb-2">
            <ProgressSteps />

            <div className="mt-2 grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_340px] lg:items-stretch">
              {/* Left */}
              <div className="space-y-3 order-2 lg:order-1 min-w-0 max-w-full">
                {/* ── Thank You Banner (Image 2 as background) ── */}
                <div className="relative overflow-hidden rounded-2xl border border-[#f0d4a8] shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  {/* Background image — slightly blurred so content reads clearly */}
                  <div className="pointer-events-none absolute inset-0">
                    <Image src={thankyouBg} alt="" fill unoptimized priority sizes="100vw" className="scale-[1.03] object-cover object-center blur-[2.5px]" />
                    {/* soft cream overlay for readability */}
                    <div className="absolute inset-0 bg-[rgba(255,253,247,0.35)]" />
                  </div>
                  <div className="relative flex flex-col md:flex-row">
                    {/* Photo on Left */}
                    <div className="relative h-[200px] w-full shrink-0 md:h-auto md:w-[155px] lg:w-[175px] xl:w-[195px]">
                      <Image
                        src={thankyouNamastePhoto}
                        alt="Moksha Sewa"
                        fill
                        unoptimized
                        priority
                        sizes="(max-width: 768px) 100vw, 195px"
                        className="object-cover object-[center_top]"
                      />
                    </div>

                    {/* Content */}
                    <div className="relative min-w-0 flex-1 p-3 sm:p-3.5 lg:p-4">
                      <div className="flex items-start gap-2.5">
                        <span className="mt-[2px] grid h-[36px] w-[36px] shrink-0 place-items-center rounded-full bg-[#d8efe3]">
                          <Check className="h-5 w-5 text-[#0d5c46]" strokeWidth={3} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <h1 className="font-sans text-[22px] sm:text-[25px] lg:text-[28px] font-bold leading-tight text-[#0c3d30]">
                            Thank You, <span className="text-[#d97706]">{appData.firstName}!</span>
                          </h1>
                          <p className="mt-1 text-[12.5px] sm:text-[13px] font-semibold leading-snug text-[#0c3d30]">
                            Your application for <span className="text-[#0d5c46]">{appData.position}</span> has been submitted successfully.
                          </p>
                          <p className="mt-1 text-[11.5px] sm:text-[12px] leading-[1.5] text-[#3a4a5c]">
                            Thank you for your interest in joining Moksha Sewa. Our team will review your profile and get back to you soon. Together, we can serve people and bring hope to families in their most difficult times.
                          </p>

                          {/* Info boxes — responsive grid */}
                          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                            <div className="flex items-center gap-2 rounded-lg border border-[#ebdcc4] bg-white/80 px-2.5 py-1.5 min-w-0">
                              <span className="grid h-[28px] w-[28px] shrink-0 place-items-center rounded-md bg-[#f0f7f4] text-[#0d5c46]">
                                <ClipboardCheck className="h-4 w-4" />
                              </span>
                              <div className="min-w-0 flex-1 leading-tight">
                                <p className="text-[9.5px] text-[#5a6a7a]">Application ID</p>
                                <p className="text-[12px] font-bold text-[#0d5c46] truncate">{appData.applicationId}</p>
                                <p className="truncate text-[9px] text-[#94a3b8]">Please keep this ID for future reference.</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 rounded-lg border border-[#ebdcc4] bg-white/80 px-2.5 py-1.5 min-w-0">
                              <span className="grid h-[28px] w-[28px] shrink-0 place-items-center rounded-md bg-[#f0f7f4] text-[#0d5c46]">
                                <Calendar className="h-4 w-4" />
                              </span>
                              <div className="min-w-0 flex-1 leading-tight">
                                <p className="text-[9.5px] text-[#5a6a7a]">Submitted On</p>
                                <p className="text-[12px] font-bold text-[#0c3d30] truncate">{appData.submittedAt}</p>
                                <p className="truncate text-[9px] text-[#94a3b8]">A confirmation email has been sent to {appData.email}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right decoration — keep inside bounds */}
                    <div className="relative hidden w-[200px] shrink-0 xl:block xl:w-[220px]">
                      <Image
                        src={rightCardDecoration}
                        alt="Together for a More Compassionate Tomorrow"
                        fill
                        unoptimized
                        priority
                        className="object-contain object-center"
                      />
                    </div>
                  </div>
                </div>

                {/* ── What Happens Next ── */}
                <div className="relative overflow-hidden rounded-2xl border border-[#ebdcc4] bg-transparent px-4 py-3.5 sm:px-5 sm:py-4">
                  <div className="pointer-events-none absolute -top-1 right-2 h-[50px] w-[70px] opacity-60">
                    <Image src={sideLeafRight} alt="" fill unoptimized className="object-contain object-top-right" />
                  </div>
                  <h3 className="font-sans text-[22px] sm:text-[24px] font-bold text-[#0c3d30]">What Happens Next?</h3>
                  <p className="mt-0.5 text-[14px] sm:text-[15px] text-[#5a6a7a]">Here is what you can expect after submitting your application.</p>
                  <div className="relative mt-3.5">
                    <div className="pointer-events-none absolute left-[52px] right-[52px] top-[22px] hidden border-t-2 border-dotted border-[#94a3b8] lg:block" />
                    <div className="relative grid gap-3 sm:gap-0 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-start">
                      {nextSteps.map((s, i) => (
                        <div key={s.title} className="contents">
                          <div className="flex flex-col items-center text-center sm:px-2">
                            <span className="relative z-10 grid h-[44px] w-[44px] place-items-center rounded-full bg-[#0d5c46] text-white shadow-[0_2px_6px_rgba(13,92,70,0.3)]">
                              <s.icon className="h-5 w-5" />
                            </span>
                            <p className="mt-1.5 text-[15px] sm:text-[15.5px] font-bold text-[#0c3d30]">{s.title}</p>
                            <p className={`mt-0.5 max-w-[175px] text-[12.5px] sm:text-[13px] leading-snug font-medium ${s.descColor}`}>{s.desc}</p>
                            <span className="mt-1.5 rounded-md bg-[#d8efe3] px-2.5 py-[3px] text-[11.5px] sm:text-[12px] font-semibold text-[#0c3d30]">
                              {s.time}
                            </span>
                          </div>
                          {i < nextSteps.length - 1 && (
                            <span className="hidden lg:flex items-center pt-[13px] text-[#0c3d30]">
                              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ── Our Mission ── */}
                <div className="relative overflow-hidden rounded-2xl border border-[#ebdcc4]/60 bg-[#fdfaf1]/40 backdrop-blur-sm px-4 py-4 sm:px-6 sm:py-4.5 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
                  <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-4 lg:gap-6">
                    {/* Text in column flow */}
                    <div className="min-w-0 flex-1">
                      <p className="text-[17px] sm:text-[19px] lg:text-[20px] font-bold uppercase tracking-wider text-[#d97706]">Our Mission</p>
                      <h3 className="mt-1 font-sans text-[20px] sm:text-[23px] lg:text-[25px] font-bold italic leading-tight text-[#0c3d30]">
                        Together for a More Compassionate Tomorrow
                      </h3>
                      <p className="mt-2 text-[14px] sm:text-[15px] leading-[1.6] text-[#2d3748]">
                        At Moksha Sewa, we believe in the power of service to create a more compassionate society. We are grateful for your willingness to contribute to our mission of providing free and dignified support to families in their most difficult times.
                      </p>
                    </div>

                    {/* 4 Chips in single row with colorful icons */}
                    <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 shrink-0 self-center md:self-auto">
                      {missionChips.map((c) => (
                        <div key={c.label} className="flex flex-col items-center text-center">
                          <span className={`grid h-[42px] w-[42px] sm:h-[46px] sm:w-[46px] place-items-center rounded-full border shadow-xs ${c.bg} ${c.border} ${c.color}`}>
                            <c.icon className="h-5 w-5" />
                          </span>
                          <span className="mt-1.5 whitespace-pre-line text-[11px] sm:text-[11.5px] font-bold leading-tight text-[#0c3d30]">
                            {c.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Sidebar */}
              <div className="space-y-2.5 order-1 lg:order-2 relative z-20 min-w-0 max-w-full">
                {/* Application Summary */}
                <div className="rounded-2xl border border-[#ebdcc4] bg-[#fdfaf1] p-3 sm:p-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-[15px] font-bold text-[#0c3d30]">Your Application Summary</h3>
                    <button className="inline-flex items-center gap-1 rounded-md border border-[#ebdcc4] bg-[#fcf8ee] px-2 py-0.5 text-[11px] font-medium text-gray-600 transition hover:border-[#0d5c46] hover:text-[#0d5c46]">
                      <Pencil className="h-3 w-3" /> Edit Details
                    </button>
                  </div>
                  <div className="flex items-stretch gap-2.5 sm:gap-3">
                    <div className="relative w-[88px] sm:w-[94px] min-h-[115px] shrink-0 overflow-hidden rounded-xl border border-[#ebdcc4] bg-[#f4ebe1]">
                      <CandidatePhoto
                        src={appData.image}
                        gender={appData.gender}
                        name={appData.candidateName}
                        className="object-cover object-[center_15%] scale-[1.38]"
                      />
                    </div>
                    <div className="min-w-0 flex-1 space-y-[3px]">
                      <p className="text-[14px] font-bold text-[#0c3d30]">{appData.candidateName}</p>
                      <a href={`mailto:${appData.email}`} className="flex items-center gap-1.5 text-[11.5px] text-[#0b57d0] hover:underline">
                        <Mail className="h-3 w-3 shrink-0 text-[#0d5c46]" />
                        <span className="truncate">{appData.email || NOT_IN_CV}</span>
                      </a>
                      <p className="flex items-center gap-1.5 text-[11.5px] text-[#2d3748]">
                        <Phone className="h-3 w-3 shrink-0 text-[#0d5c46]" />
                        {appData.phone || NOT_IN_CV}
                      </p>
                      <p className="flex items-center gap-1.5 text-[11.5px] text-[#2d3748]">
                        <MapPin className="h-3 w-3 shrink-0 text-[#d97706]" />
                        {appData.location || NOT_IN_CV}
                      </p>
                      {(appData.dateOfBirth || appData.gender) && (
                        <p className="flex items-center gap-1.5 text-[11.5px] text-[#2d3748]">
                          <Calendar className="h-3 w-3 shrink-0 text-[#0d5c46]" />
                          {[appData.dateOfBirth, formatGender(appData.gender)].filter(Boolean).join(" | ")}
                        </p>
                      )}
                      {appData.linkedin && (
                      <a href={/^https?:\/\//i.test(appData.linkedin) ? appData.linkedin : `https://${appData.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[11.5px] text-[#0b57d0] hover:underline">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 shrink-0 text-[#0d5c46]"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                        {appData.linkedin}
                      </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Position */}
                <div className="rounded-2xl border border-[#ebdcc4] bg-[#fdfaf1] p-3 sm:p-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-2.5">
                      <span className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-xl bg-[#e7f2ec] text-[#0d5c46]">
                        <Users className="h-4.5 w-4.5" />
                      </span>
                      <div>
                        <p className="text-[14px] font-bold text-[#0c3d30]">{appData.position}</p>
                                                <p className="mt-0.5 flex items-center gap-1 text-[11.5px] text-[#5a6a7a]">
                          <MapPin className="h-3 w-3 text-[#d97706]" /> {appData.location}
                        </p>
                      </div>
                    </div>
                    <button className="inline-flex shrink-0 items-center gap-1 rounded-md border border-[#ebdcc4] bg-[#fcf8ee] px-2 py-0.5 text-[11px] font-medium text-gray-600 transition hover:border-[#0d5c46] hover:text-[#0d5c46]">
                      <Pencil className="h-3 w-3" /> Edit
                    </button>
                  </div>
                </div>

                {/* Profile Match */}
                <div className="rounded-2xl border border-[#ebdcc4] bg-[#fdfaf1] p-3 sm:p-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <div className="flex items-start gap-3">
                    <div className="relative grid h-[85px] w-[85px] shrink-0 place-items-center">
                      <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full -rotate-90">
                        <circle cx="60" cy="60" r="48" fill="none" stroke="#e5e7eb" strokeWidth="12" />
                        <circle cx="60" cy="60" r="48" fill="none" stroke={matchLevel === "high" ? "#0d5c46" : matchLevel === "moderate" ? "#d97706" : "#dc2626"} strokeWidth="12" strokeDasharray={`${(appData.score / 100) * 2 * Math.PI * 48} ${2 * Math.PI * 48}`} strokeLinecap="round" />
                      </svg>
                      <div className="text-center leading-tight">
                        <span className="block text-[20px] font-bold text-[#0c3d30]">{appData.score}%</span>
                        <span className="block text-[8.5px] font-medium text-[#5a6a7a]">Match Score</span>
                      </div>
                    </div>
                    <div className="min-w-0">
                      <div className="mb-1 flex items-center gap-2">
                        <h3 className="text-[14px] font-bold text-[#0c3d30]">Profile Match</h3>
                        <span className="inline-flex items-center gap-1 rounded-full bg-[#fef3c7] px-2 py-0.5 text-[10.5px] font-bold text-[#b45309]">
                          <svg viewBox="0 0 24 24" fill="#f59e0b" className="h-2.5 w-2.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                          {matchLevel === "high" ? "Strong Match" : matchLevel === "moderate" ? "Moderate Match" : "Low Match"}
                        </span>
                      </div>
                      <p className="text-[11.5px] leading-[1.45] text-[#3a4a5c]">
                        Your profile was compared with the requirements of this role. Based on your skills, experience and interests derived from your CV.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Keep Exploring */}
                <div className="rounded-2xl border border-[#ebdcc4] bg-[#fdfaf1] p-3 sm:p-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <div className="flex items-start gap-2.5">
                    <span className="grid h-[34px] w-[34px] shrink-0 place-items-center rounded-full bg-[#fef3c7] text-[#d97706]">
                      <Search className="h-4.5 w-4.5" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-[14px] font-bold text-[#0c3d30]">Keep Exploring Opportunities</h3>
                      <p className="mt-0.5 text-[11.5px] leading-snug text-[#5a6a7a]">
                        Would you like to explore other suitable opportunities? We will notify you about relevant openings.
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/careers"
                    className="mt-2.5 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-[#0b4d3b] bg-[#fdfaf1] py-1.5 text-[12.5px] font-bold text-[#0b4d3b] transition hover:bg-[#f2ebe0]"
                  >
                    View Other Opportunities <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

                {/* Need Help */}
                <div className="rounded-2xl border border-[#ebdcc4] bg-[#fdfaf1] p-3 sm:p-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <div className="flex items-start gap-2.5">
                    <span className="grid h-[34px] w-[34px] shrink-0 place-items-center rounded-full bg-[#0d5c46] text-white">
                      <Headphones className="h-4.5 w-4.5" />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-[14px] font-bold text-[#0c3d30]">Need Help?</h3>
                      <p className="mt-0.5 text-[11.5px] leading-snug text-[#5a6a7a]">
                        If you have any questions regarding your application, feel free to reach out to our HR team.
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11.5px]">
                    {support.email && (
                      <a href={`mailto:${support.email}`} className="flex items-center gap-1.5 font-medium text-[#0b57d0] hover:underline">
                        <Mail className="h-3 w-3 text-[#0d5c46]" /> {support.email}
                      </a>
                    )}
                    {support.phone && (
                      <a href={telHref(support.phone)} className="flex items-center gap-1.5 font-medium text-[#2d3748] hover:text-[#0d5c46]">
                        <Phone className="h-3 w-3 text-[#0d5c46]" /> {support.phone}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
