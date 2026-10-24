"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Briefcase,
  Building2,
  Calendar,
  Check,
  ChevronRight,
  ClipboardList,
  FileText,
  Home,
  Lightbulb,
  LockKeyhole,
  Mail,
  MapPin,
  Pencil,
  Phone,
  Send,
  User,
  Users,
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
    { label: "Upload CV", sub: "Completed", active: false, done: true },
    { label: "AI Analysis", sub: "Completed", active: false, done: true },
    { label: "Review Details", sub: "Current Step", active: true, done: false },
    { label: "Submit Application", sub: "Next", active: false, done: false },
  ];

  return (
    <div className="relative w-full max-w-[700px] px-6 sm:px-8 md:pl-[84px] md:pr-6 py-2">
      <div className="absolute top-[26px] left-[42px] right-[42px] md:left-[102px] md:right-[42px] h-[2.5px] z-0 -translate-y-1/2 flex">
        <div className="flex-1 bg-[#0d5c46] h-full" />
        <div className="flex-1 bg-[#0d5c46] h-full" />
        <div className="flex-1 bg-[#cbd5e1] h-full" />
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
            <span className={`mt-1.5 text-[12px] font-semibold tracking-tight ${step.active ? "text-[#0c3d30]" : step.done ? "text-[#0d5c46]" : "text-[#64748b]"}`}>
              {step.label}
            </span>
            <span className={`text-[10.5px] ${step.active ? "text-[#d97706] font-semibold" : step.done ? "text-[#0d5c46]/80" : "text-[#94a3b8]"}`}>
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

function EditBtn() {
  return (
    <button className="inline-flex items-center gap-1 rounded-md border border-[#ebdcc4] bg-[#fcf8ee] px-2 py-0.5 text-[11.5px] font-medium text-gray-600 transition hover:border-[#0d5c46] hover:text-[#0d5c46]">
      <Pencil className="h-3 w-3" /> Edit
    </button>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-2 border-b border-[#f0e8d8] py-1 last:border-0">
      <span className="text-[12px] font-medium text-[#5a6a7a]">{label}</span>
      <span className="text-right text-[12.5px] font-semibold text-[#0c3d30]">{value}</span>
    </div>
  );
}

const education = [
  { qual: "Bachelor's Degree", inst: "Delhi University", year: "2018", pct: "78%", spec: "Psychology" },
  { qual: "Diploma (Optional)", inst: "IGNOU", year: "2020", pct: "82%", spec: "Counselling" },
  { qual: "Certification", inst: "Indian Red Cross Society", year: "2022", pct: "–", spec: "First Aid & Community Care" },
];

const work = [
  { org: "Seva Foundation", desig: "Volunteer", dur: "2022 – Present (2.5 Years)", resp: "Community support, family assistance, event coordination" },
  { org: "Helping Hands NGO", desig: "Volunteer", dur: "2020 – 2022 (2 Years)", resp: "Counselling support, logistics assistance" },
  { org: "Community Care Initiative", desig: "Volunteer", dur: "2019 – 2020 (1 Year)", resp: "Patient & family support, awareness drives" },
];

const skills = [
  { label: "Communication Skills", score: 90 },
  { label: "Empathy & Compassion", score: 88 },
  { label: "Community Service", score: 85 },
  { label: "Counselling Skills", score: 80 },
  { label: "Documentation", score: 75 },
  { label: "Teamwork", score: 85 },
  { label: "Problem Solving", score: 80 },
];

const certs = [
  "First Aid Certification – Indian Red Cross (2022)",
  "Basic Life Support (BLS) – St. John Ambulance (2021)",
  "Counselling Skills Workshop (2020)",
  "Volunteer Training Program (2019)",
];

const docs = [
  { name: "Resume.pdf", size: "2.4 MB" },
  { name: "Educational Certificates.pdf", size: "1.8 MB" },
  { name: "Experience Letter.pdf", size: "1.2 MB" },
  { name: "Certification.pdf", size: "1.1 MB" },
  { name: "ID Proof (Aadhaar).pdf", size: "0.8 MB" },
];

const strengths = [
  "Relevant volunteer or community service experience",
  "Compassionate approach to people in difficult times",
  "Good communication and interpersonal skills",
  "Willingness to work in field-based environment",
  "Sensitivity and empathy towards families",
  "Willing to work from Delhi NCR",
];

const improvements = [
  "Add more field or on-ground support experience",
  "Highlight relevant certifications (caregiving, counselling)",
  "Include more details on communication and people-handling skills",
];

export default function ReviewDetailsContent() {
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

  const candName = candidate.candidateName || candidate.firstName || "Ananya Sharma";
  const candEmail = candidate.email || "ananya.sharma@gmail.com";
  const candPhone = candidate.verifiedPhone || candidate.phone || "+91 98765 43210";
  const candLocation = candidate.location || "Delhi NCR";
  const jobTitle = candidate.jobDetails?.title || "Volunteer (Field Support)";
  const score = candidate.score ?? 85;

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
            <div className="mb-3 flex flex-wrap items-center gap-2 text-[14px] sm:text-[15px] lg:text-[16px] text-[#5a6a7a]">
              <Home className="h-4.5 w-4.5 text-[#0d5c46]" />
              <ChevronRight className="h-4 w-4 text-[#8a9aa8]" />
              <Link href="/careers" className="hover:text-[#0d5c46]">Home</Link>
              <ChevronRight className="h-4 w-4 text-[#8a9aa8]" />
              <Link href="/careers" className="hover:text-[#0d5c46]">Careers</Link>
              <ChevronRight className="h-4 w-4 text-[#8a9aa8]" />
              <Link href="/careers/apply" className="hover:text-[#0d5c46]">Apply for Position</Link>
              <ChevronRight className="h-4 w-4 text-[#8a9aa8]" />
              <Link href="/careers/apply/result" className="hover:text-[#0d5c46]">CV Analysis</Link>
              <ChevronRight className="h-4 w-4 text-[#8a9aa8]" />
              <span className="font-semibold text-[#0c3d30]">Review Details</span>
            </div>
            <p className="mb-1 text-[12px] font-bold uppercase tracking-[0.12em] text-[#d97706] sm:text-[13px]">Careers at Moksha Sewa</p>
            <h1 className="font-serif text-[38px] font-bold leading-[1.06] text-[#0c3d30] sm:text-[46px] lg:text-[52px]">
              Review Your <span className="text-[#c4881f]">Details</span>
            </h1>
            <p className="mt-1.5 text-[15px] font-medium text-[#2c3e50] sm:text-[16px] lg:text-[17.5px]">
              Please review your information below before submitting your application.
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
              {/* Left */}
              <div className="space-y-2 order-2 lg:order-1 min-w-0 max-w-full">
                {/* Candidate Profile + Position Details */}
                <div className="grid gap-2 md:grid-cols-2">
                  {/* Candidate Profile */}
                  <div className="rounded-2xl border border-[#ebdcc4] bg-[#fdfaf1] p-3 sm:p-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <SectionIcon icon={User} />
                        <h3 className="text-[15.5px] font-bold text-[#0c3d30]">Candidate Profile</h3>
                      </div>
                      <EditBtn />
                    </div>
                    <div className="flex items-stretch gap-3">
                      <div className="shrink-0 self-stretch w-[110px] sm:w-[120px] min-h-[150px]">
                        <div className="relative h-full w-full overflow-hidden rounded-xl border border-[#ebdcc4]">
                          <Image src="/newcarrierimage/profile-female-ananya.png" alt="Photo" fill unoptimized priority className="object-cover object-top scale-[1.2]" />
                          <button className="absolute bottom-1.5 left-1/2 flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-lg bg-white/95 px-2 py-1 text-[10px] font-bold text-[#0c3d30] shadow-md transition hover:bg-white">
                            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            Change Photo
                          </button>
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <InfoRow label="Full Name" value={candName} />
                        <InfoRow label="Email Address" value={candEmail} />
                        <InfoRow label="Mobile Number" value={candPhone} />
                        <InfoRow label="Date of Birth" value="14 Nov 1998" />
                        <InfoRow label="Gender" value="Female" />
                        <InfoRow label="Current Location" value={candLocation} />
                        <InfoRow label="Permanent Address" value="B-101, Green Park, New Delhi – 110016" />
                      </div>
                    </div>
                  </div>

                  {/* Position Details */}
                  <div className="rounded-2xl border border-[#ebdcc4] bg-[#fdfaf1] p-3 sm:p-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <SectionIcon icon={Briefcase} />
                        <h3 className="text-[15.5px] font-bold text-[#0c3d30]">Position Details</h3>
                      </div>
                      <EditBtn />
                    </div>
                    <InfoRow label="Position Applied For" value={jobTitle} />
                    <InfoRow label="Location Preference" value={candLocation} />
                    <InfoRow label="Employment Type" value="Voluntary (Free Seva)" />
                    <InfoRow label="Expected Joining" value="Within 1 Month" />
                    <InfoRow label="Expected Availability" value="As per discussion" />
                    <InfoRow label="Notice Period" value="15 Days" />
                    <InfoRow label="How did you hear about us?" value="Social Media" />
                    <InfoRow label="Willing to Relocate?" value="Yes" />
                  </div>
                </div>

                {/* Education + Work Experience */}
                <div className="grid gap-2 md:grid-cols-2">
                  {/* Education */}
                  <div className="rounded-2xl border border-[#ebdcc4] bg-[#fdfaf1] p-3 sm:p-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <SectionIcon icon={BookOpen} />
                        <h3 className="text-[15.5px] font-bold text-[#0c3d30]">Education Details</h3>
                      </div>
                      <EditBtn />
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-[11.5px]">
                        <thead>
                          <tr className="border-b border-[#e8dcc8] text-[#5a6a7a]">
                            <th className="py-1 pr-2 font-semibold">Qualification</th>
                            <th className="py-1 pr-2 font-semibold">Institute</th>
                            <th className="py-1 pr-2 font-semibold">Year</th>
                            <th className="py-1 pr-2 font-semibold">%</th>
                            <th className="py-1 font-semibold">Specialization</th>
                          </tr>
                        </thead>
                        <tbody>
                          {education.map((e) => (
                            <tr key={e.qual} className="border-b border-[#f0e8d8] last:border-0">
                              <td className="py-1.5 pr-2 font-semibold text-[#0c3d30]">{e.qual}</td>
                              <td className="py-1.5 pr-2 text-[#3a4a5c]">{e.inst}</td>
                              <td className="py-1.5 pr-2 text-[#3a4a5c]">{e.year}</td>
                              <td className="py-1.5 pr-2 text-[#3a4a5c]">{e.pct}</td>
                              <td className="py-1.5 text-[#3a4a5c]">{e.spec}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Work Experience */}
                  <div className="rounded-2xl border border-[#ebdcc4] bg-[#fdfaf1] p-3 sm:p-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <SectionIcon icon={Building2} />
                        <h3 className="text-[15.5px] font-bold text-[#0c3d30]">Work Experience</h3>
                      </div>
                      <EditBtn />
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-[11.5px]">
                        <thead>
                          <tr className="border-b border-[#e8dcc8] text-[#5a6a7a]">
                            <th className="py-1 pr-2 font-semibold">Organization</th>
                            <th className="py-1 pr-2 font-semibold">Designation</th>
                            <th className="py-1 pr-2 font-semibold">Duration</th>
                            <th className="py-1 font-semibold">Key Responsibilities</th>
                          </tr>
                        </thead>
                        <tbody>
                          {work.map((w) => (
                            <tr key={w.org} className="border-b border-[#f0e8d8] last:border-0">
                              <td className="py-1.5 pr-2 font-semibold text-[#0c3d30]">{w.org}</td>
                              <td className="py-1.5 pr-2 text-[#3a4a5c]">{w.desig}</td>
                              <td className="py-1.5 pr-2 text-[#3a4a5c]">{w.dur}</td>
                              <td className="py-1.5 text-[#3a4a5c]">{w.resp}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Skills + Certs + Docs */}
                <div className="grid gap-2 md:grid-cols-3">
                  {/* Skills */}
                  <div className="rounded-2xl border border-[#ebdcc4] bg-[#fdfaf1] p-3 sm:p-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <SectionIcon icon={Award} />
                        <h3 className="text-[15.5px] font-bold text-[#0c3d30]">Skills</h3>
                      </div>
                      <EditBtn />
                    </div>
                    <div className="space-y-1.5">
                      {skills.map((s) => (
                        <div key={s.label} className="flex items-center gap-2">
                          <span className="min-w-0 flex-1 truncate text-[12px] font-medium text-[#0c3d30]">{s.label}</span>
                          <div className="h-[6px] w-[80px] shrink-0 overflow-hidden rounded-full bg-[#e5e7eb]">
                            <div className="h-full rounded-full bg-[#0d5c46]" style={{ width: `${s.score}%` }} />
                          </div>
                          <span className="w-[32px] shrink-0 text-right text-[12px] font-bold text-[#0c3d30]">{s.score}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="rounded-2xl border border-[#ebdcc4] bg-[#fdfaf1] p-3 sm:p-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <SectionIcon icon={Award} />
                        <h3 className="text-[15.5px] font-bold text-[#0c3d30]">Certifications</h3>
                      </div>
                      <EditBtn />
                    </div>
                    <ul className="space-y-1.5">
                      {certs.map((c) => (
                        <li key={c} className="flex items-start gap-1.5 text-[11.5px] leading-snug text-[#2d3748]">
                          <FileText className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0d5c46]" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Documents */}
                  <div className="rounded-2xl border border-[#ebdcc4] bg-[#fdfaf1] p-3 sm:p-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <SectionIcon icon={ClipboardList} />
                        <h3 className="text-[15.5px] font-bold text-[#0c3d30]">Documents</h3>
                      </div>
                      <EditBtn />
                    </div>
                    <ul className="space-y-1.5">
                      {docs.map((d) => (
                        <li key={d.name} className="flex items-center gap-1.5 text-[11.5px] text-[#2d3748]">
                          <FileText className="h-3.5 w-3.5 shrink-0 text-[#0d5c46]" />
                          <span className="min-w-0 flex-1 truncate">{d.name}</span>
                          <span className="shrink-0 text-[10.5px] text-[#94a3b8]">{d.size}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right: Sidebar */}
              <div className="space-y-2.5 order-1 lg:order-2 lg:-mt-[100px] relative z-20">
                {/* Banner */}
                <div className="relative h-[120px] overflow-hidden rounded-2xl border border-[#ebdcc4]">
                  <Image src={sideBanner} alt="Service Beyond Goodbye" fill unoptimized priority className="object-cover object-center" />
                </div>

                {/* Application Summary */}
                <div className="rounded-2xl border border-[#ebdcc4] bg-[#fdfaf1] p-3.5 sm:p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-[15.5px] font-bold text-[#0c3d30]">Application Summary</h3>
                    <EditBtn />
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-full bg-[#0d5c46]/10 text-[#0d5c46]">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 2C10.8 5.5 9.8 9 9.8 13C9.8 16.5 10.8 18.5 12 19.5C13.2 18.5 14.2 16.5 14.2 13C14.2 9 13.2 5.5 12 2Z" /><path d="M10.8 5.8C7.5 8.5 5.8 12 5.8 15.5C5.8 18.5 7.5 20 9.2 20C10.5 18 10.8 15.2 10.8 12.5C10.8 10 10.8 8 10.8 5.8Z" /><path d="M13.2 5.8C16.5 8.5 18.2 12 18.2 15.5C18.2 18.5 16.5 20 14.8 20C13.5 18 13.2 15.2 13.2 12.5C13.2 10 13.2 8 13.2 5.8Z" /></svg>
                    </span>
                    <div>
                      <p className="text-[14px] font-bold text-[#0c3d30]">{jobTitle}</p>
                      <p className="text-[11.5px] text-[#5a6a7a]">Voluntary (Free Seva)</p>
                    </div>
                  </div>
                  <div className="mt-1.5 flex items-center gap-3 text-[11.5px] text-[#5a6a7a]">
                    <span className="flex items-center gap-1"><MapPin className="h-3 w-3 text-[#d97706]" /> {candLocation}</span>
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3 text-[#d97706]" /> Flexible</span>
                  </div>
                </div>

                {/* Profile Match */}
                <div className="rounded-2xl border border-[#ebdcc4] bg-[#fdfaf1] p-3.5 sm:p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-[15px] font-bold text-[#0c3d30]">Profile Match</h3>
                    <span className="rounded-full bg-[#fef3c7] px-2.5 py-0.5 text-[11px] font-bold text-[#b45309]">⭐ Strong Match</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="relative grid h-[90px] w-[90px] shrink-0 place-items-center">
                      <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full -rotate-90">
                        <circle cx="60" cy="60" r="48" fill="none" stroke="#e5e7eb" strokeWidth="12" />
                        <circle cx="60" cy="60" r="48" fill="none" stroke="#0d5c46" strokeWidth="12" strokeDasharray={`${(score / 100) * 2 * Math.PI * 48} ${2 * Math.PI * 48}`} strokeLinecap="round" />
                      </svg>
                      <div className="text-center leading-tight">
                        <span className="text-[18px] font-bold text-[#0c3d30]">{score}%</span>
                        <span className="block text-[8.5px] font-medium text-[#5a6a7a]">Match Score</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-[12px] leading-[1.45] text-[#3a4a5c]">Your profile matches well with the volunteer role requirements.</p>
                      <p className="mt-0.5 text-[11px] text-[#64748b]">Based on your skills, experience and interests derived from your CV.</p>
                    </div>
                  </div>
                </div>

                {/* Key Strengths */}
                <div className="rounded-2xl border border-[#ebdcc4] bg-[#fdfaf1] p-3.5 sm:p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="grid h-[26px] w-[26px] place-items-center rounded-full bg-[#0d5c46] text-white"><Check className="h-3.5 w-3.5" strokeWidth={3} /></span>
                    <h3 className="text-[14.5px] font-bold text-[#0c3d30]">Key Strengths Identified</h3>
                  </div>
                  <ul className="space-y-1">
                    {strengths.map((s) => (
                      <li key={s} className="flex items-start gap-1.5 text-[11.5px] leading-snug text-[#2d3748]">
                        <Check className="mt-0.5 h-3 w-3 shrink-0 text-[#0d5c46]" strokeWidth={3} />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Areas for Improvement */}
                <div className="rounded-2xl border border-[#ebdcc4] bg-[#fdfaf1] p-3.5 sm:p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="grid h-[26px] w-[26px] place-items-center rounded-full bg-[#d97706] text-white"><Lightbulb className="h-3.5 w-3.5" /></span>
                    <h3 className="text-[14.5px] font-bold text-[#0c3d30]">Areas for Improvement <span className="font-normal text-[#5a6a7a]">(Optional)</span></h3>
                  </div>
                  <ol className="space-y-1">
                    {improvements.map((imp, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-[11.5px] leading-snug text-[#2d3748]">
                        <span className="mt-[1px] grid h-[15px] w-[15px] shrink-0 place-items-center rounded-full bg-[#d97706] text-[9px] font-bold text-white">{i + 1}</span>
                        {imp}
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Buttons */}
                <div className="pt-0.5">
                  <button
                    onClick={() => router.push(`/careers/apply/complete?job=${encodeURIComponent(jobSlug)}`)}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0b4d3b] py-2.5 text-[14px] font-bold text-white transition hover:bg-[#073629]"
                  >
                    Submit Application <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
                <div className="pt-0.5">
                  <button
                    onClick={() => router.push(`/careers/apply/result?job=${encodeURIComponent(jobSlug)}`)}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-[#0b4d3b] bg-[#fdfaf1] py-2 text-[13px] font-bold text-[#0b4d3b] transition hover:bg-[#f2ebe0]"
                  >
                    <ArrowLeft className="h-4 w-4" /> Back to AI Analysis
                  </button>
                </div>

                <div className="flex items-center justify-center gap-1.5 pt-0.5 text-[11px] text-gray-500">
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
