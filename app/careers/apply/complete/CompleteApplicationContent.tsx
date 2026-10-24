"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Calendar,
  Check,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  FileText,
  Home,
  Loader2,
  LockKeyhole,
  Mail,
  MapPin,
  Pencil,
  Phone,
  Send,
  User,
  Users,
  X,
} from "lucide-react";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import { CandidateProfileData, defaultCandidateData } from "../../submit-resume/page";

const heroBg = "/newcarrierimage/apply-hero-exact.png";
const sideLeafLeft = "/assets/careers/apply-leaf-left-clean-transparent.png";
const sideLeafRight = "/assets/careers/apply-leaf-right-clean-transparent.png";

function ProgressSteps() {
  const steps = [
    { label: "Upload CV", sub: "Completed", active: false, done: true },
    { label: "AI Analysis", sub: "Completed", active: false, done: true },
    { label: "Review Details", sub: "Completed", active: false, done: true },
    { label: "Submit Application", sub: "Current Step", active: true, done: false },
  ];

  return (
    <div className="relative w-full max-w-[700px] px-6 sm:px-8 md:pl-[84px] md:pr-6 py-2">
      <div className="absolute top-[26px] left-[42px] right-[42px] md:left-[102px] md:right-[42px] h-[2.5px] z-0 -translate-y-1/2 flex">
        <div className="flex-1 bg-[#0d5c46] h-full" />
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

function SectionIcon({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <span className="grid h-[30px] w-[30px] shrink-0 place-items-center rounded-full bg-[#0d5c46] text-white shadow-xs">
      <Icon className="h-4 w-4" />
    </span>
  );
}

function InputLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="mb-0.5 block text-[12px] font-semibold text-[#0c3d30]">
      {children} {required && <span className="text-[#dc1017]">*</span>}
    </label>
  );
}

function SelectField({ label, value, required }: { label: string; value: string; required?: boolean }) {
  return (
    <div>
      <InputLabel required={required}>{label}</InputLabel>
      <div className="relative">
        <select
          defaultValue={value}
          className="w-full appearance-none rounded-lg border border-[#d4c9b0] bg-white px-2.5 py-1.5 text-[12.5px] text-[#2d3748] outline-none focus:border-[#0d5c46] focus:ring-1 focus:ring-[#0d5c46]/30"
        >
          <option>{value}</option>
        </select>
        <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#64748b]" />
      </div>
    </div>
  );
}

function TextField({ label, value, placeholder }: { label: string; value?: string; placeholder?: string }) {
  return (
    <div>
      <InputLabel>{label}</InputLabel>
      <input
        type="text"
        defaultValue={value}
        placeholder={placeholder}
        className="w-full rounded-lg border border-[#d4c9b0] bg-white px-2.5 py-1.5 text-[12.5px] text-[#2d3748] outline-none placeholder:text-[#94a3b8] focus:border-[#0d5c46] focus:ring-1 focus:ring-[#0d5c46]/30"
      />
    </div>
  );
}

const skills = [
  { label: "Community Service", checked: true },
  { label: "Crisis Support / Family Support", checked: true },
  { label: "Counselling", checked: true },
  { label: "Patient Care", checked: false },
  { label: "Event Coordination", checked: false },
  { label: "Social Work", checked: false },
  { label: "Documentation", checked: false },
  { label: "Other (Please specify)", checked: false },
];

const confirmations = [
  "I confirm that all the information provided is correct and complete.",
  "I authorize Moksha Sewa to verify my information if required.",
  "I agree to be contacted for future opportunities.",
  "I have read and agree to the Privacy Policy and Terms & Conditions.",
];

export default function CompleteApplicationContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const jobSlug = searchParams.get("job") || "web-developer";

  const [candidate, setCandidate] = useState<CandidateProfileData>(defaultCandidateData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    try {
      const stored = sessionStorage.getItem("candidateData");
      if (stored) setCandidate(JSON.parse(stored));
    } catch {}
  }, []);

  const [checkedSkills, setCheckedSkills] = useState<Record<string, boolean>>(
    Object.fromEntries(skills.map((s) => [s.label, s.checked]))
  );
  const [checkedConfirm, setCheckedConfirm] = useState<Record<string, boolean>>(
    Object.fromEntries(confirmations.map((c) => [c, true]))
  );
  const [locations, setLocations] = useState(["Delhi NCR", "On-site (Events)"]);
  const [whyText, setWhyText] = useState(
    "I am passionate about serving people and contributing to Moksha Sewa's mission of providing dignified and compassionate support to families in their most difficult times."
  );
  const [skillsText, setSkillsText] = useState(
    "Community support, counselling, event coordination, communication, and cultural sensitivity."
  );

  const candName = candidate.candidateName || candidate.firstName || "Ananya Sharma";
  const candEmail = candidate.email || "ananya.sharma@gmail.com";
  const candPhone = candidate.verifiedPhone || candidate.phone || "+91 98765 43210";
  const candLocation = candidate.location || "Delhi NCR";
  const jobTitle = candidate.jobDetails?.title || "Volunteer (Field Support)";
  const score = candidate.score ?? 85;

  const removeLocation = (loc: string) => setLocations((prev) => prev.filter((l) => l !== loc));

  const handleSubmitApplication = async () => {
    setIsSubmitting(true);
    setSubmitError("");
    const apiBase = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";

    try {
      let targetAppId = candidate.applicationId;
      const candidateId = candidate.candidateId;
      const targetJobId = candidate.jobId || jobSlug || "web-developer";
      const cvAnalysisId = candidate.analysisId;

      if (!targetAppId) {
        const createRes = await fetch(`${apiBase}/careers/applications`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            candidateId,
            jobId: targetJobId,
            cvAnalysisId,
            candidateData: {
              name: candName,
              email: candEmail,
              phone: candPhone,
              verifiedPhone: candidate.verifiedPhone,
              location: candLocation,
            },
            whyInterested: whyText,
          }),
        });

        const createJson = await createRes.json();
        if (createRes.ok && createJson.success) {
          targetAppId = createJson.data.applicationId || createJson.data._id;
        } else {
          // If server fails or is offline, generate local fallback application details
          targetAppId = `MS-CAR-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
        }
      }

      if (targetAppId && !targetAppId.startsWith("MS-CAR-")) {
        const submitRes = await fetch(`${apiBase}/careers/applications/${targetAppId}/submit`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            candidateData: {
              name: candName,
              email: candEmail,
              phone: candPhone,
              verifiedPhone: candidate.verifiedPhone,
              location: candLocation,
            },
            whyInterested: whyText,
          }),
        });
        const submitJson = await submitRes.json();
        if (submitRes.ok && submitJson.success) {
          targetAppId = submitJson.data?.applicationId || targetAppId;
        }
      }

      const submittedDetails = {
        applicationId: targetAppId || `MS-CAR-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`,
        candidateName: candName,
        email: candEmail,
        phone: candPhone,
        position: jobTitle,
        location: candLocation,
        score,
        submittedAt: new Date().toLocaleString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      };

      try {
        sessionStorage.setItem("submittedApplication", JSON.stringify(submittedDetails));
      } catch {}

      router.push(`/careers/apply/submitted?job=${encodeURIComponent(jobSlug)}`);
    } catch {
      const fallbackId = `MS-CAR-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
      const submittedDetails = {
        applicationId: fallbackId,
        candidateName: candName,
        email: candEmail,
        phone: candPhone,
        position: jobTitle,
        location: candLocation,
        score,
        submittedAt: new Date().toLocaleString("en-IN", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      };
      try {
        sessionStorage.setItem("submittedApplication", JSON.stringify(submittedDetails));
      } catch {}

      router.push(`/careers/apply/submitted?job=${encodeURIComponent(jobSlug)}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="result-screen bg-[#fdf6ea] overflow-x-hidden">
      <Topbar />
      <Navbar />
      <main className="bg-[#fdf6ea] overflow-x-hidden">
        {/* ── Hero ── */}
        <section className="relative isolate pt-40 sm:pt-44 lg:min-h-[340px] lg:pt-48 pb-8 lg:pb-10 overflow-hidden">
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

          <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-12 pb-4 relative z-10">
            <div className="mb-3 flex flex-wrap items-center gap-2 text-[14px] sm:text-[15px] lg:text-[16px] text-[#5a6a7a]">
              <Home className="h-4.5 w-4.5 text-[#0d5c46]" />
              <ChevronRight className="h-4 w-4 text-[#8a9aa8]" />
              <Link href="/careers" className="hover:text-[#0d5c46]">Home</Link>
              <ChevronRight className="h-4 w-4 text-[#8a9aa8]" />
              <Link href="/careers" className="hover:text-[#0d5c46]">Careers</Link>
              <ChevronRight className="h-4 w-4 text-[#8a9aa8]" />
              <Link href="/careers/apply" className="hover:text-[#0d5c46]">Apply for Position</Link>
              <ChevronRight className="h-4 w-4 text-[#8a9aa8]" />
              <span className="font-semibold text-[#0c3d30]">Complete Your Application</span>
            </div>

            <p className="mb-1 text-[12px] font-bold uppercase tracking-[0.12em] text-[#d97706] sm:text-[13px]">
              Careers at Moksha Sewa
            </p>
            <h1 className="font-serif text-[38px] font-bold leading-[1.06] text-[#0c3d30] sm:text-[46px] lg:text-[52px]">
              Complete Your Application
            </h1>
            <p className="mt-1.5 text-[15px] font-medium text-[#2c3e50] sm:text-[16px] lg:text-[17.5px]">
              You&apos;re almost there! Please review and confirm your details to submit your application.
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

            <div className="mt-2.5 grid gap-3 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start xl:grid-cols-[minmax(0,1fr)_340px]">
              {/* Left: Forms */}
              <div className="space-y-2 order-2 lg:order-1 min-w-0 max-w-full">
                {/* Application Details */}
                <div className="rounded-2xl border border-[#ebdcc4] bg-[#fdfaf1] p-3 sm:p-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <div className="mb-2 flex items-center gap-2">
                    <SectionIcon icon={Briefcase} />
                    <h3 className="text-[16px] font-bold text-[#0c3d30]">Application Details</h3>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    <SelectField label="Position Applied For" value="Volunteer (Field Support)" required />
                    <div>
                      <InputLabel required>Preferred Location(s)</InputLabel>
                      <div className="flex min-h-[34px] w-full flex-wrap items-center gap-1 rounded-lg border border-[#d4c9b0] bg-white px-2 py-1">
                        {locations.map((loc) => (
                          <span key={loc} className="inline-flex items-center gap-1 rounded-md bg-[#0d5c46]/10 px-2 py-0.5 text-[12px] font-medium text-[#0d5c46]">
                            {loc}
                            <button onClick={() => removeLocation(loc)} className="hover:text-[#dc1017]">
                              <X className="h-3 w-3" />
                            </button>
                          </span>
                        ))}
                        <ChevronDown className="ml-auto h-4 w-4 text-[#64748b]" />
                      </div>
                    </div>
                    <SelectField label="Notice Period" value="15 Days" required />
                    <SelectField label="Expected Availability" value="As per discussion" required />
                    <SelectField label="Joining Preference" value="Within 1 Month" required />
                    <SelectField label="Engagement Type" value="Voluntary (Free Seva)" />
                  </div>
                </div>

                {/* Additional Information */}
                <div className="rounded-2xl border border-[#ebdcc4] bg-[#fdfaf1] p-3 sm:p-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <div className="mb-2 flex items-center gap-2">
                    <SectionIcon icon={FileText} />
                    <h3 className="text-[16px] font-bold text-[#0c3d30]">Additional Information</h3>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <div>
                      <InputLabel required>Why do you want to join Moksha Sewa?</InputLabel>
                      <textarea
                        rows={3}
                        value={whyText}
                        onChange={(e) => setWhyText(e.target.value.slice(0, 285))}
                        className="w-full resize-none rounded-lg border border-[#d4c9b0] bg-white px-3 py-2 text-[13px] leading-[1.5] text-[#2d3748] outline-none focus:border-[#0d5c46] focus:ring-1 focus:ring-[#0d5c46]/30"
                      />
                      <p className="mt-0.5 text-right text-[11px] text-[#94a3b8]">{285 - whyText.length} characters left</p>
                    </div>
                    <div>
                      <InputLabel>Any additional skills or expertise?</InputLabel>
                      <textarea
                        rows={3}
                        value={skillsText}
                        onChange={(e) => setSkillsText(e.target.value.slice(0, 300))}
                        className="w-full resize-none rounded-lg border border-[#d4c9b0] bg-white px-3 py-2 text-[13px] leading-[1.5] text-[#2d3748] outline-none focus:border-[#0d5c46] focus:ring-1 focus:ring-[#0d5c46]/30"
                      />
                      <p className="mt-0.5 text-right text-[11px] text-[#94a3b8]">{300 - skillsText.length} characters left</p>
                    </div>
                  </div>

                  <p className="mb-1.5 mt-2 text-[12px] font-semibold text-[#5a6a7a]">Have you worked with any of these? (Optional)</p>
                  <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:grid-cols-4">
                    {skills.map((s) => (
                      <label
                        key={s.label}
                        className={`flex cursor-pointer items-center gap-1.5 rounded-lg border px-2 py-1 text-[11.5px] font-medium transition ${
                          checkedSkills[s.label]
                            ? "border-[#0d5c46] bg-[#0d5c46]/5 text-[#0c3d30]"
                            : "border-[#e2ddd0] bg-white text-[#64748b]"
                        }`}
                      >
                        <span
                          onClick={() => setCheckedSkills((p) => ({ ...p, [s.label]: !p[s.label] }))}
                          className={`grid h-[16px] w-[16px] shrink-0 place-items-center rounded-[4px] border-2 ${
                            checkedSkills[s.label] ? "border-[#0d5c46] bg-[#0d5c46]" : "border-[#cbd5e1] bg-white"
                          }`}
                        >
                          {checkedSkills[s.label] && <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />}
                        </span>
                        {s.label}
                      </label>
                    ))}
                  </div>
                </div>

                {/* References */}
                <div className="rounded-2xl border border-[#ebdcc4] bg-[#fdfaf1] p-3 sm:p-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <div className="mb-2 flex items-center gap-2">
                    <SectionIcon icon={Users} />
                    <h3 className="text-[16px] font-bold text-[#0c3d30]">References <span className="font-normal text-[#5a6a7a]">(Optional)</span></h3>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      {
                        title: "Reference 1",
                        name: "Dr. Ramesh Gupta",
                        desig: "Social Worker",
                        org: "Seva Foundation",
                        contact: "+91 98100 12345",
                        email: "ramesh.gupta@email.com",
                      },
                      {
                        title: "Reference 2",
                        name: "Ms. Neha Singh",
                        desig: "Program Coordinator",
                        org: "Sahara Seva Trust",
                        contact: "+91 98765 43210",
                        email: "neha.singh@email.com",
                      },
                    ].map((ref) => (
                      <div key={ref.title}>
                        <p className="mb-2 text-[13px] font-bold text-[#0d5c46]">{ref.title}</p>
                        <div className="grid grid-cols-2 gap-2">
                          <TextField label="Name" value={ref.name} />
                          <TextField label="Designation" value={ref.desig} />
                          <TextField label="Organization" value={ref.org} />
                          <TextField label="Contact Number" value={ref.contact} />
                          <div className="col-span-2">
                            <TextField label="Email Address" value={ref.email} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Sidebar */}
              <div className="space-y-2.5 order-1 lg:order-2 lg:-mt-[100px] relative z-20">
                {/* Profile */}
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
                        src="/newcarrierimage/profile-female-ananya.png"
                        alt="Candidate Photo"
                        fill
                        unoptimized
                        priority
                        className="object-cover object-top scale-[1.2]"
                      />
                    </div>
                    <div className="min-w-0 flex-1 space-y-1">
                      <p className="truncate text-[15.5px] font-bold text-[#0c3d30]">{candName}</p>
                      <p className="flex items-center gap-1.5 text-[12px] text-[#3a4a5c]">
                        <Mail className="h-3.5 w-3.5 text-[#0d5c46] shrink-0" />
                        <span className="truncate">{candEmail}</span>
                      </p>
                      <p className="flex items-center gap-1.5 text-[12px] text-[#3a4a5c]">
                        <Phone className="h-3.5 w-3.5 text-[#0d5c46] shrink-0" />
                        <span>{candPhone}</span>
                      </p>
                      <p className="flex items-center gap-1.5 text-[12px] text-[#3a4a5c]">
                        <MapPin className="h-3.5 w-3.5 text-[#0d5c46] shrink-0" />
                        <span>{candLocation}</span>
                      </p>
                      <p className="flex items-center gap-1.5 text-[11.5px] text-[#5a6a7a]">
                        <Calendar className="h-3.5 w-3.5 text-[#0d5c46] shrink-0" />
                        <span>14 Nov 1998 &nbsp;|&nbsp; Female</span>
                      </p>
                      <p className="flex items-center gap-1.5 text-[11.5px] text-[#0077b5]">
                        <svg className="h-3.5 w-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        <span className="truncate">linkedin.com/in/ananya-sharma</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Job Card */}
                <div className="rounded-2xl border border-[#ebdcc4] bg-[#fdfaf1] p-3.5 sm:p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="grid h-[34px] w-[34px] place-items-center rounded-full bg-[#0d5c46] text-white">
                        <User className="h-4 w-4" />
                      </span>
                      <div>
                        <h3 className="text-[14.5px] font-bold text-[#0c3d30]">{jobTitle}</h3>
                        <p className="text-[12px] text-[#5a6a7a]">Voluntary (Free Seva)</p>
                        <p className="flex items-center gap-1 text-[11.5px] text-[#d97706]">
                          <MapPin className="h-3 w-3" /> {candLocation} (On-site)
                        </p>
                      </div>
                    </div>
                    <button className="inline-flex items-center gap-1 rounded-md border border-[#ebdcc4] bg-[#fcf8ee] px-2 py-0.5 text-[11.5px] font-medium text-gray-600 transition hover:border-[#0d5c46] hover:text-[#0d5c46]">
                      <Pencil className="h-3 w-3" /> Edit
                    </button>
                  </div>
                </div>

                {/* Profile Match */}
                <div className="rounded-2xl border border-[#ebdcc4] bg-[#fdfaf1] p-3.5 sm:p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-[15.5px] font-bold text-[#0c3d30]">Profile Match</h3>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#fef3c7] px-2.5 py-0.5 text-[11.5px] font-bold text-[#b45309]">
                      ⭐ Strong Match
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="relative grid h-[95px] w-[95px] shrink-0 place-items-center">
                      <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full -rotate-90">
                        <circle cx="60" cy="60" r="48" fill="none" stroke="#e5e7eb" strokeWidth="12" />
                        <circle
                          cx="60"
                          cy="60"
                          r="48"
                          fill="none"
                          stroke="#0d5c46"
                          strokeWidth="12"
                          strokeDasharray={`${(score / 100) * 2 * Math.PI * 48} ${2 * Math.PI * 48}`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="text-center leading-tight">
                        <span className="text-[20px] font-bold text-[#0c3d30]">{score}%</span>
                        <span className="block text-[9px] font-medium text-[#5a6a7a]">Match Score</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-[12.5px] leading-[1.5] text-[#3a4a5c]">
                        Your profile matches well with the volunteer role requirements.
                      </p>
                      <p className="mt-1 text-[11.5px] text-[#64748b]">
                        Based on your skills, experience and interests derived from your CV.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Before You Submit */}
                <div className="rounded-2xl border border-[#ebdcc4] bg-[#fdfaf1] p-3.5 sm:p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <div className="mb-2.5 flex items-center gap-2">
                    <span className="grid h-[28px] w-[28px] place-items-center rounded-full bg-[#0d5c46] text-white">
                      <ClipboardList className="h-4 w-4" />
                    </span>
                    <h3 className="text-[15.5px] font-bold text-[#0c3d30]">Before You Submit</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {confirmations.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-[12.5px] leading-snug text-[#2d3748]">
                        <span
                          onClick={() => setCheckedConfirm((p) => ({ ...p, [c]: !p[c] }))}
                          className={`mt-[2px] grid h-[16px] w-[16px] shrink-0 place-items-center rounded-[4px] border-2 cursor-pointer ${
                            checkedConfirm[c] ? "border-[#0d5c46] bg-[#0d5c46]" : "border-[#cbd5e1] bg-white"
                          }`}
                        >
                          {checkedConfirm[c] && <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />}
                        </span>
                        <span>
                          {c.includes("Privacy Policy") ? (
                            <>
                              I have read and agree to the{" "}
                              <a href="#" className="font-semibold text-[#0d5c46] underline">Privacy Policy</a> and{" "}
                              <a href="#" className="font-semibold text-[#0d5c46] underline">Terms & Conditions</a>.
                            </>
                          ) : (
                            c
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Submit Buttons */}
                {submitError && (
                  <p className="text-[12px] font-semibold text-red-600 text-center">{submitError}</p>
                )}
                <div className="pt-0.5">
                  <button
                    disabled={isSubmitting}
                    onClick={handleSubmitApplication}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0b4d3b] py-2.5 text-[14px] font-bold text-white transition hover:bg-[#073629] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Submitting Application...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" /> Submit Application <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
                <div className="pt-0.5">
                  <button
                    onClick={() => router.push(`/careers/apply/review?job=${encodeURIComponent(jobSlug)}`)}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-[#0b4d3b] bg-[#fdfaf1] py-2 text-[13.5px] font-bold text-[#0b4d3b] transition hover:bg-[#f2ebe0]"
                  >
                    <ArrowLeft className="h-4 w-4" /> Back to Review Details
                  </button>
                </div>

                <div className="flex items-center justify-center gap-1.5 pt-0.5 text-[11px] text-gray-500">
                  <span className="grid h-3.5 w-3.5 place-items-center rounded-full bg-[#0d5c46] text-white">
                    <LockKeyhole className="h-2 w-2" />
                  </span>
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
