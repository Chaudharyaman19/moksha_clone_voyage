"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Heart,
  Leaf,
  MapPin,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import { FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import { EligibilityModal } from "./submit-resume/page";
import { ApplicationFormModal } from "./application-form/page";
import { ReviewSubmitModal } from "./review-submit/page";
import JobCardButtons from "./JobCardButtons";

const heroImage = "/assets/careers/careers-hero-banner-new.png";
const emptyOpeningsImage = "/newcarrierimage/image copy 2.png";
const careerFooterImage = "/newcarrierimage/image copy.png";
const leafLeft = "/assets/finalcomplete/leaf-left.png";
const leafRight = "/assets/finalcomplete/leaf-right.png";
const mokshaLogo = "/homelogo/mok.png";
const openingsBg = "/assets/careers/openings-bg-exact.png";
const whyWorkBg = "/assets/careers/why-work-bg-exact.png";
const lifeAtMokshaBg = "/assets/careers/life-at-moksha-bg-clean.png";

type JobOpening = {
  id: string;
  slug?: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  icon: LucideIcon;
  company?: string;
  responsibilities?: string[];
  requirements?: string[];
  preferredQualifications?: string[];
  skills?: string[];
  education?: string;
  eligibilityThreshold?: number;
};

type ApiJob = {
  _id: string;
  slug?: string;
  title: string;
  department?: string;
  location?: string;
  employmentType?: string;
  experienceMin?: number;
  experienceMax?: number;
  description?: string;
  company?: string;
  responsibilities?: string[];
  requirements?: string[];
  preferredQualifications?: string[];
  skills?: string[];
  educationRequirements?: string;
  eligibilityThreshold?: number;
};

// Custom SVG icons to match the design exactly (fully solid filled amber/gold icons)
function LotusIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      {/* Fully solid, bold, filled lotus flower matching reference image */}
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
      {/* Center leader */}
      <circle cx="12" cy="6.5" r="3.2" />
      <path d="M7 18.5C7 14.8 9.2 12.5 12 12.5C14.8 12.5 17 14.8 17 18.5H7Z" />
      {/* Left team member */}
      <circle cx="5.2" cy="9" r="2.4" />
      <path d="M1.5 18.5C1.5 15.8 3.2 14.2 5.5 14.2C6.6 14.2 7.6 14.7 8.3 15.6C7.5 16.4 7 17.4 7 18.5H1.5Z" />
      {/* Right team member */}
      <circle cx="18.8" cy="9" r="2.4" />
      <path d="M22.5 18.5C22.5 15.8 20.8 14.2 18.5 14.2C17.4 14.2 16.4 14.7 15.7 15.6C16.5 16.4 17 17.4 17 18.5H22.5Z" />
    </svg>
  );
}

function BarChartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      {/* 3 Solid filled bars with upward trend */}
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

const workReasons = [
  {
    label: "Purpose-Driven Work",
    description: "Contribute to a cause that brings dignity and support to families.",
    icon: LotusIcon,
  },
  {
    label: "Supportive Team\nEnvironment",
    description:
      "Work with compassionate and dedicated individuals who share a common purpose.",
    icon: TeamIcon,
  },
  {
    label: "Learning & Growth",
    description:
      "Enhance your skills with continuous learning and exposure to meaningful social initiatives.",
    icon: BarChartIcon,
  },
  {
    label: "Better Spaces,\nBetter Lives",
    description:
      "Be part of a mission that improves how people live, work and heal.",
    icon: HeartFilledIcon,
  },
];

const jobImages: Record<string, string> = {
  "product-designer": "/assets/volunteer-card-1.png",
  "operations-executive": "/assets/volunteer-card-2.png",
  "community-outreach-specialist": "/assets/volunteer-card-3.png",
  "wellness-services-coordinator": "/assets/volunteer-card-5.png",
  "telemarketing-executive": "/assets/volunteer-card-1.png",
  "web-developer": "/assets/volunteer-card-4.png",
};

const lifeAtMoksha = [
  "/assets/volunteer-card-1.png",
  "/hero-images/volunteer-team-shirts.png",
  "/assets/volunteer-card-2.png",
  "/assets/volunteer-card-3.png",
  "/assets/volunteer-card-5.png",
];

function JobCard({ job }: { job: JobOpening }) {
  // Format summary cleanly into a narrative paragraph like the reference design
  const displayDesc = (() => {
    if (!job.description) return "";
    if (job.description.includes("•")) {
      const parts = job.description
        .split("•")
        .map((p) => p.trim().replace(/\.+$/, ""))
        .filter(Boolean);
      return parts.slice(0, 3).join(". ") + ".";
    }
    return job.description;
  })();

  return (
    <article className="group flex flex-col overflow-hidden rounded-[16px] border border-[#e5d2b3] bg-[#fffbf2]/40 backdrop-blur-[2px] shadow-[0_4px_16px_rgba(74,49,18,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#c98b2f] hover:shadow-[0_10px_22px_rgba(74,49,18,0.08)]">
      {/* Compact image container with reduced height */}
      <div className="relative h-[142px] w-full overflow-hidden sm:h-[152px] lg:h-[150px]">
        <Image
          src={jobImages[job.id] ?? jobImages[job.slug || ""] ?? "/assets/volunteer-card-1.png"}
          alt="Moksha Sewa team member at work"
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between pt-2 pb-3 px-3 sm:pt-2.5 sm:pb-3.5 sm:px-3.5">
        <div>
          {/* Exact Job Title: Serif, semi-bold/bold, dark green with increased font size */}
          <h3 className="font-serif text-[18.5px] font-bold leading-tight tracking-[-0.01em] text-[#002219] sm:text-[19.5px]">
            {job.title}
          </h3>

          {/* Location & Type row with larger icons and text, wrapping prevented and whitespace preserved */}
          <div className="mt-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[13.5px] font-semibold text-[#46544d] sm:text-[14.5px]">
            <span className="inline-flex items-center gap-1.5">
              <FaMapMarkerAlt className="h-[14px] w-[14px] shrink-0 text-[#cc7806]" />
              <span>{job.location}</span>
            </span>
            <span className="text-[#dec4a4]">•</span>
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
              <FaBriefcase className="h-[13px] w-[13px] shrink-0 text-[#cc7806]" />
              <span>{job.type}</span>
            </span>
          </div>

          {/* Clean narrative description with increased font size */}
          <p className="mt-2 text-[14px] font-normal leading-[1.5] text-[#343e39] sm:text-[15px]">
            {displayDesc}
          </p>
        </div>

        <div className="pt-3">
          <JobCardButtons job={{ ...job, icon: undefined }} />
        </div>
      </div>
    </article>
  );
}

function EmptyOpenings() {
  return (
    <div className="grid w-full grid-cols-[80px_minmax(0,1fr)_1px_300px] items-center gap-[clamp(18px,2vw,32px)] rounded-[24px] bg-[#fff8ed]/90 px-4 py-2">
      <span className="grid h-[clamp(62px,5.2vw,82px)] w-[clamp(62px,5.2vw,82px)] place-items-center rounded-full bg-[#f4e4cc] text-[#8b6a3e]">
        <BriefcaseBusiness className="h-[40px] w-[40px]" strokeWidth={1.8} />
      </span>

      <div>
        <h3 className="text-lg font-semibold leading-tight text-[#2c1810] lg:text-2xl">
          No open positions at the moment
        </h3>
        <p className="mt-2 max-w-[720px] text-sm leading-relaxed text-[#33475b] lg:text-[15px]">
          We are not hiring for any specific roles right now. But we are always
          on the lookout for passionate individuals who want to make a
          difference.
        </p>
      </div>

      <span className="h-[70%] w-px bg-[#eadcc8]" />

      <div>
        <p className="text-[15px] leading-relaxed text-[#43556c]">
          We will keep your profile on file and reach out when a suitable
          opportunity arises.
        </p>
      </div>
    </div>
  );
}

const DEFAULT_STATIC_JOBS: JobOpening[] = [
  {
    id: "telemarketing-executive",
    slug: "telemarketing-executive",
    title: "Telemarketing Executive",
    department: "Ghaziabad, Uttar Pradesh",
    location: "Ghaziabad, Uttar Pradesh",
    type: "Full time",
    experience: "0 - 10 Years",
    description:
      "Strong communication and persuasive skills. Experience in cold calling, lead generation, client interaction, and achieving community outreach goals.",
    icon: Users,
  },
  {
    id: "web-developer",
    slug: "web-developer",
    title: "Web Developer",
    department: "Ghaziabad, Uttar Pradesh",
    location: "Ghaziabad, Uttar Pradesh",
    type: "Full time",
    experience: "0 - 10 Years",
    description:
      "Strong communication and persuasive skills. Experience in frontend and full-stack web development with React, Next.js, APIs, and modern responsive design.",
    icon: Users,
  },
  {
    id: "community-outreach-specialist",
    slug: "community-outreach-specialist",
    title: "Community Outreach Specialist",
    department: "Delhi NCR",
    location: "Delhi NCR",
    type: "Full Time",
    experience: "0 - 5 Years",
    description:
      "Build community relationships, create awareness and contribute to the growth of Moksha Sewa's innovative services and social initiatives.",
    icon: Users,
  },
  {
    id: "wellness-services-coordinator",
    slug: "wellness-services-coordinator",
    title: "Wellness Services Coordinator",
    department: "Delhi NCR",
    location: "Delhi NCR",
    type: "Full Time",
    experience: "1 - 5 Years",
    description:
      "Coordinate wellness services and family client support to ensure smooth, respectful, and compassionate service delivery across regions.",
    icon: Users,
  },
];

function WaveDivider() {
  return (
    <svg
      viewBox="0 0 1440 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="pointer-events-none absolute bottom-0 left-0 h-[60px] w-full lg:h-[80px]"
      preserveAspectRatio="none"
    >
      <path
        d="M0 40C240 80 480 0 720 30C960 60 1200 70 1440 20V80H0V40Z"
        fill="#dfece4"
        opacity="0.55"
      />
      <path
        d="M0 55C300 90 540 20 800 40C1060 60 1260 75 1440 35V80H0V55Z"
        fill="#c5dcc8"
        opacity="0.45"
      />
    </svg>
  );
}

export default function CareersClientContent() {
  const [selectedScore, setSelectedScore] = useState<number | null>(null);
  const [isNoneModalOpen, setIsNoneModalOpen] = useState(false);
  const [isAmanModalOpen, setIsAmanModalOpen] = useState(false);
  const [showAllJobs, setShowAllJobs] = useState(false);
  const [fetchedJobs, setFetchedJobs] = useState<JobOpening[]>(DEFAULT_STATIC_JOBS);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";
    fetch(`${apiUrl}/careers/jobs`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (data && data.success && Array.isArray(data.data) && data.data.length > 0) {
          const mappedJobs: JobOpening[] = data.data.map((j: ApiJob) => ({
            _id: j._id,
            id: j._id,
            slug: j.slug,
            title: j.title,
            department: j.department || "General",
            location: j.location || "Delhi NCR",
            type: j.employmentType || "Full time",
            experience: `${j.experienceMin ?? 0} - ${j.experienceMax ?? 10} Years`,
            description:
              j.description || j.responsibilities?.[0] || j.requirements?.[0] || j.title,
            company: j.company,
            responsibilities: j.responsibilities,
            requirements: j.requirements,
            preferredQualifications: j.preferredQualifications,
            skills: j.skills,
            education: j.educationRequirements,
            eligibilityThreshold: j.eligibilityThreshold,
            icon: Users,
          }));

          // Always ensure at least 4 cards are displayed matching the 4-column layout perfectly
          if (mappedJobs.length < 4) {
            const complementary = DEFAULT_STATIC_JOBS.filter(
              (dj) => !mappedJobs.some((mj) => mj.title.toLowerCase() === dj.title.toLowerCase())
            );
            setFetchedJobs([...mappedJobs, ...complementary].slice(0, 4));
          } else {
            setFetchedJobs(mappedJobs);
          }
        }
      })
      .catch((err) => {
        console.warn("Express Backend jobs fetch note (using static defaults):", err);
      });
  }, []);

  const activeJobOpenings = fetchedJobs;
  const openingCount = activeJobOpenings.length;
  const displayedJobs = showAllJobs ? activeJobOpenings : activeJobOpenings.slice(0, 8);

  return (
    <div>
      <Topbar />
      <Navbar />
      <main className="bg-[#faf7f2] text-[#0a1831]">
        <div className="flex min-h-screen w-full flex-col bg-[#fdfaf4]">
          {/* ========== HERO ========== */}
          <section className="relative isolate overflow-hidden">
            <Image
              src={heroImage}
              alt="Moksha Sewa Career Team"
              fill
              priority
              unoptimized
              sizes="100vw"
              className="-z-20 object-fill object-center"
            />

            <div className="mx-auto w-full max-w-[1720px] px-6 pb-6 pt-28 md:px-10 md:pb-8 md:pt-32 lg:px-16 lg:pb-10 lg:pt-36 xl:px-20 xl:pb-12 xl:pt-36">
              <div className="max-w-[700px]">
                {/* 1. Subtitle: All Caps, bold, tracked, gold color */}
                <div className="flex items-center gap-2.5 mt-2.5 sm:mt-3">
                  <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#d28c2c] sm:text-[13px] lg:text-[14px]">
                    Careers at Moksha Sewa
                  </p>
                  <span className="h-[1.5px] w-6 rounded-full bg-[#d28c2c]/70" />
                </div>

                {/* 2. Main Heading: Playfair Display serif, font-bold, leading-tight, exact colors */}
                <h1 className="mt-2 font-serif text-[38px] font-bold leading-[1.02] tracking-[-0.02em] text-[#002017] sm:text-[46px] md:text-[50px] lg:text-[56px] xl:text-[60px]">
                  Be a Part of a
                  <br />
                  More <span className="text-[#cc7501]">Compassionate</span>
                  <br />
                  <span className="text-[#cc7501]">Tomorrow</span>
                </h1>

                {/* 3. Paragraph: Clean sans-serif, regular weight (font-normal), slate-charcoal color */}
                <p className="mt-2 max-w-[640px] text-[16px] font-normal leading-[1.5] text-[#282e2d] sm:text-[17px] md:text-[18px]">
                  Join Moksha Sewa and contribute to a cause that brings dignity<br></br> care and respect to families in their most difficult times through <br></br> innovative  services and meaningful solutions.
                </p>

                {/* 4. Button: Deep Forest Green (#003528), font-semibold, white text */}
                <a
                  href="#current-openings"
                  className="mt-3 inline-flex items-center gap-2.5 rounded-xl bg-[#003528] px-6 py-2.5 text-[15px] font-semibold text-white shadow-sm transition hover:bg-[#00281e]"
                >
                  Explore Opportunities
                  <ArrowRight className="h-4 w-4" />
                </a>

                {/* 5. Highlights row: 4 solid filled amber icons + 2-line labels */}
                <div className="mt-6 sm:mt-7 grid max-w-[640px] grid-cols-4 divide-x divide-[#e2cfb7]">
                  {highlights.map(({ label, icon: Icon }) => (
                    <div key={label} className="flex flex-col items-center px-2 text-center first:pl-0 last:pr-0">
                      <span className="grid h-[54px] w-[54px] place-items-center rounded-full border-[1.5px] border-[#cb7502] bg-[#fff8eb]/90 text-[#cb7502] shadow-xs sm:h-[60px] sm:w-[60px] md:h-[64px] md:w-[64px]">
                        <Icon className="h-[28px] w-[28px] sm:h-[30px] sm:w-[30px] md:h-[32px] md:w-[32px]" />
                      </span>
                      <span className="mt-2 block whitespace-pre-line text-[13.5px] font-bold leading-[1.25] text-[#242b26] sm:text-[14.5px] md:text-[15px]">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ========== CURRENT OPENINGS ========== */}
          <section
            id="current-openings"
            className="relative isolate overflow-hidden bg-[#faf5ec] pt-2 pb-4 sm:pt-2.5 sm:pb-4.5 lg:pt-3 lg:pb-5"
          >
            {/* The exact background image uploaded by user */}
            <Image
              src={openingsBg}
              alt=""
              fill
              priority
              sizes="100vw"
              className="-z-10 object-cover object-center"
            />

            {openingCount === 0 ? (
              <Image
                src={emptyOpeningsImage}
                alt="Moksha Sewa at the Ghat"
                fill
                sizes="100vw"
                className="-z-10 object-fill"
              />
            ) : null}

            <div className="relative z-10 mx-auto w-full max-w-[1720px] px-6 md:px-10 lg:px-16 xl:px-20">
              {/* Header aligned to 4-column grid: left spans cards 1 & 2, right spans cards 3 & 4 */}
              <div className="mb-3.5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 items-end">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-2.5">
                    <p className="text-[14px] font-bold uppercase tracking-[0.22em] text-[#c7821e] sm:text-[15px]">
                      Current Openings
                    </p>
                    <span className="h-[2px] w-8 bg-[#c7821e]/80" />
                  </div>
                  <h2 className="mt-1 font-serif text-[34px] font-bold leading-tight tracking-[-0.02em] text-[#002219] sm:text-[40px] lg:text-[46px]">
                    <span className="relative inline-block pb-1.5">
                      Explore
                      <span className="absolute bottom-0 left-0 h-[2px] w-[95%] rounded-full bg-[#dec49a]" />
                    </span>{" "}
                    <span className="text-[#c97b0a]">Opportunities</span>
                  </h2>
                </div>

                <div className="lg:col-span-2 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <p className="max-w-[420px] text-[15px] font-normal leading-[1.45] text-[#343e39] sm:text-[16px]">
                    Join our team and contribute to creating compassionate support
                    systems through our services, operations and community initiatives.
                  </p>

                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setShowAllJobs(!showAllJobs);
                    }}
                    className="inline-flex shrink-0 items-center gap-2 self-start text-[16px] font-bold text-[#002219] hover:text-[#c97b0a] transition-colors sm:text-[17px] sm:pt-0.5"
                  >
                    {showAllJobs ? "View Less Roles" : "View all roles"}
                    <ArrowRight className="h-[18px] w-[18px]" strokeWidth={2.5} />
                  </button>
                </div>
              </div>

              <div className="flex-1">
                {openingCount > 0 ? (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {displayedJobs.map((job) => (
                      <JobCard key={job.id} job={job} />
                    ))}
                  </div>
                ) : (
                  <EmptyOpenings />
                )}
              </div>
            </div>
          </section>

          {/* ========== WHY WORK (A Career with Purpose) ========== */}
          <section className="relative isolate overflow-hidden bg-[#faf5ec] pt-2 pb-2.5 sm:pt-2.5 sm:pb-3 lg:pt-3 lg:pb-3.5">
            {/* The exact background image with side leaf vines uploaded by user */}
            <Image
              src={whyWorkBg}
              alt=""
              fill
              priority
              sizes="100vw"
              className="-z-10 object-cover object-center"
            />

            <div className="relative z-10 mx-auto w-full max-w-[1720px] px-6 md:px-10 lg:px-16 xl:px-20">
              {/* WHY WORK heading with tight spacing aligned across 4 columns */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 items-end">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-2">
                    <p className="text-[13.5px] font-bold uppercase tracking-[0.2em] text-[#c7821e] sm:text-[14.5px]">
                      Why work with Moksha Sewa
                    </p>
                    <span className="h-[1.5px] w-7 bg-[#c7821e]/80" />
                  </div>
                  <h2 className="mt-0.5 font-serif text-[32px] font-bold leading-tight tracking-[-0.02em] text-[#002219] sm:text-[38px] lg:text-[44px]">
                    A Career with Purpose
                  </h2>
                </div>
                <div className="lg:col-span-2 lg:pl-12 xl:pl-16">
                  <p className="max-w-[480px] text-[14.5px] font-normal leading-[1.45] text-[#343e39] sm:text-[15.5px]">
                    At Moksha Sewa, you will be part of a compassionate and
                    <br className="hidden sm:inline" />
                    dedicated team that serves families with dignity, care and respect,
                    <br className="hidden sm:inline" />
                    creating a more humane and supportive society.
                  </p>
                </div>
              </div>

              {/* WHY WORK items with exact 4 filled amber icons & dividers */}
              <div className="mt-2.5 sm:mt-3 grid grid-cols-1 divide-y divide-[#e2cfb7] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
                {workReasons.map(({ label, description, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center px-3 py-1.5 text-center first:pl-0 last:pr-0 lg:px-5"
                  >
                    <span className="grid h-[64px] w-[64px] place-items-center rounded-full border-[1.5px] border-[#cb7502] bg-[#fff8eb]/90 text-[#cb7502] shadow-xs sm:h-[70px] sm:w-[70px] md:h-[76px] md:w-[76px]">
                      <Icon className="h-[32px] w-[32px] sm:h-[35px] sm:w-[35px] md:h-[38px] md:w-[38px]" />
                    </span>
                    <h3 className="mt-2 whitespace-pre-line font-serif text-[19px] font-bold leading-snug tracking-[-0.01em] text-[#002219] sm:text-[21px] md:text-[22px]">
                      {label}
                    </h3>
                    <p className="mt-1 text-[14px] font-normal leading-[1.45] text-[#343e39] sm:text-[14.5px] md:text-[15px]">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ========== LIFE AT MOKSHA SEWA ========== */}
          <section className="relative isolate overflow-hidden bg-[#faf5ec] pt-4 pb-8 sm:pt-4.5 sm:pb-10 lg:pt-5 lg:pb-12">
            {/* The exact background image with leaves and golden waves matching the design */}
            <Image
              src={lifeAtMokshaBg}
              alt=""
              fill
              priority
              sizes="100vw"
              className="-z-10 object-cover object-bottom"
            />

            <div className="relative z-10 mx-auto w-full max-w-[1720px] px-6 md:px-10 lg:px-16 xl:px-20">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2.5">
                    <p className="text-[14px] font-bold uppercase tracking-[0.22em] text-[#c7821e] sm:text-[15px]">
                      Life at Moksha Sewa
                    </p>
                    <span className="h-[2px] w-8 bg-[#c7821e]/80" />
                  </div>
                  <h2 className="mt-1 font-serif text-[34px] font-bold leading-[1.1] tracking-[-0.02em] text-[#002219] sm:text-[40px] lg:text-[46px]">
                    People. Ideas. Better Lives.
                  </h2>
                </div>
                <p className="max-w-[500px] text-right text-[15px] leading-[1.45] text-[#343e39] sm:text-[15.5px] hidden sm:block">
                  Our team works with empathy, respect and commitment
                  <br className="hidden sm:inline" />
                  to support families, serve communities and create a
                  <br className="hidden sm:inline" />
                  kinder, more compassionate society.
                </p>
              </div>

              {/* Image strip */}
              <div className="mt-4 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-5">
                {lifeAtMoksha.map((src) => (
                  <div key={src} className="relative h-[115px] overflow-hidden rounded-[14px] border border-[#ecd9be] shadow-xs sm:h-[130px] lg:h-[142px]">
                    <Image
                      src={src}
                      alt="Moksha Sewa team and community"
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                ))}
              </div>

              {/* CTA row matching exact typography and style with reduced width */}
              <div className="mt-6 mx-auto flex max-w-[1060px] flex-col items-center gap-4 md:flex-row md:justify-between md:gap-0">
                <div className="flex shrink-0 items-center gap-4 sm:gap-5">
                  <Image
                    src={mokshaLogo}
                    alt="Moksha Sewa Logo"
                    width={120}
                    height={120}
                    className="h-[90px] w-[90px] shrink-0 object-contain sm:h-[105px] sm:w-[105px] lg:h-[115px] lg:w-[115px]"
                  />
                  <h3 className="font-serif text-[22px] font-bold leading-[1.15] tracking-[-0.01em] text-[#002219] sm:text-[25px] lg:text-[28px]">
                    Be Part of Something
                    <br />
                    <span className="text-[#c97b0a]">More Meaningful.</span>
                  </h3>
                </div>

                <span className="hidden h-[54px] w-px bg-[#dfd0ba] md:mx-4 md:block lg:mx-6" />

                <p className="max-w-[400px] text-center text-[14.5px] leading-[1.45] text-[#343e39] sm:text-[15px] md:text-left">
                  Join Moksha Sewa and help us create a
                  <br className="hidden md:inline" />
                  more compassionate and dignified tomorrow
                  <br className="hidden md:inline" />
                  for families across India.
                </p>

                <div className="md:ml-4 lg:ml-6 shrink-0">
                  <a
                    href="#current-openings"
                    className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#b57317] px-5 py-2.5 text-[14.5px] font-semibold text-white shadow-sm transition hover:bg-[#9a600f] sm:text-[15.5px]"
                  >
                    Share Your Profile
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Modal removed: Pages are linked directly via /careers/apply */}
      </main>
      <Footer />
    </div>
  );
}
