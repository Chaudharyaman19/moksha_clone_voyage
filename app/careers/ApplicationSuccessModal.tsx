"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { lockScroll, unlockScroll } from "@/lib/scrollLock";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  ClipboardList,
  FileCheck,
  Globe,
  Leaf,
  Mail,
  Phone,
  Quote,
  Trophy,
  Users,
  X,
  Check,
} from "lucide-react";

const finalAsset = (file: string) => `/assets/finalcomplete/${file}`;

const assets = {
  logo: finalAsset("logo.png"),
  topSlogan: finalAsset("top-slogan.png"),
  successCheck: finalAsset("success-check.png"),
  leafLeft: finalAsset("leaf-left.png"),
  leafRight: finalAsset("leaf-right.png"),
  quoteLeaf: finalAsset("quote-leaf.png"),
  rightPanel: "/career-submit-resume-assets/image copy 7.png",
};

const brandHeader = {
  title: "Moksha Sewa",
  tagline: "Dignity • Compassion • Service for a Conscious Tomorrow",
};

const applicationData = {
  id: "MOKSHA2026-000458",
  candidateName: "Vijay Sharma",
  position: "Web Developer",
  submittedOn: "14 September 2026, 04:32 PM",
  aiMatchScore: 72,
};

const recruitmentSteps = [
  {
    num: 1,
    icon: ClipboardList,
    title: "Application\nReceived",
    desc: "Your application\nis submitted",
    active: true,
  },
  {
    num: 2,
    icon: Users,
    title: "HR Review",
    desc: "Our team will\nreview your profile",
    active: false,
  },
  {
    num: 3,
    icon: FileCheck,
    title: "Shortlisted",
    desc: "You will be contacted\nif shortlisted",
    active: false,
  },
  {
    num: 4,
    icon: CalendarDays,
    title: "Interview",
    desc: "Online or in-person\ninteraction",
    active: false,
  },
  {
    num: 5,
    icon: Trophy,
    title: "Final Decision",
    desc: "Selection and\noffer process",
    active: false,
  },
];

function SuccessSidebar({ onClose }: { onClose: () => void }) {
  const points = [
    { icon: Leaf, title: "Meaningful Work" },
    { icon: Users, title: "Collaborative Team" },
    { icon: BarChart3, title: "Growth Opportunities" },
    { icon: Globe, title: "Contribute to a Conscious Tomorrow" },
  ];

  return (
    <aside className="relative flex h-full min-h-0 flex-col overflow-hidden bg-[#fff8ed]">
      {/* Background Image (gowimage.png) */}
      <Image
        src={assets.rightPanel}
        alt=""
        fill
        priority
        className="object-cover object-center"
      />

      {/* Top Controls: Close X button on top right */}
      <div className="relative z-20 flex shrink-0 items-end justify-end px-[16px] pt-[14px]">
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="grid h-[28px] w-[28px] place-items-center rounded-full bg-white/80 text-[#5a3e2b] shadow-sm hover:bg-[#8b6a3e] hover:text-white transition-colors"
        >
          <X className="h-[17px] w-[17px]" />
        </button>
      </div>

      {/* Middle Content Overlay (4 Points List) */}
      <div className="relative z-20 mt-[260px] pl-[46px] pr-[16px]">
        <div className="space-y-[13px]">
          {points.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-center gap-[11px]">
                <div className="grid h-[30px] w-[30px] shrink-0 place-items-center rounded-full bg-[#8b6a3e] text-white shadow-sm">
                  <Icon className="h-[17px] w-[17px]" strokeWidth={2.4} />
                </div>
                <span className="text-[13px] font-semibold text-[#5a3e2b]">
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

/* =========================================================
   APPLICATION SUCCESS MODAL
   ========================================================= */

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  applicationData?: {
    id: string;
    candidateName: string;
    position: string;
    submittedOn: string;
    aiMatchScore: number;
  };
}

export default function ApplicationSuccessModal({ isOpen, onClose, applicationData: propAppDetails }: SuccessModalProps) {
  const currentAppDetails = propAppDetails || applicationData;
  const matchScoreVal = currentAppDetails.aiMatchScore ?? 72;
  const circumference = 2 * Math.PI * 38;
  const offset = circumference - (matchScoreVal / 100) * circumference;

  useEffect(() => {
    if (isOpen) lockScroll();
    return () => {
      if (isOpen) unlockScroll();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3">
      <div className="absolute inset-0 bg-slate-950/45 backdrop-blur-[5px]" />
      <div className="relative z-10 flex max-h-[95vh] w-[85%] max-w-[1300px] overflow-hidden rounded-[18px] bg-white shadow-[0_30px_90px_rgba(0,0,0,.28)]">

        {/* ===== LEFT SIDE ===== */}
        <div className="relative flex w-[76.2%] flex-col overflow-hidden px-[38px] pb-[16px] pt-[18px]">

          {/* HEADER LOGO & TAGLINE */}
          <div className="flex shrink-0 items-center gap-[8px] relative z-10">
            <Image
              src="/assets/logo-moksha-seva.png"
              alt=""
              width={82}
              height={92}
              priority
              className="h-[40px] w-[37px] shrink-0 object-contain"
            />

            <div className="min-w-0">
              <div className="text-[22px] font-semibold leading-[1.15] text-[#5a3e2b]">
                {brandHeader.title}
              </div>
              <div className="mt-[2px] text-[11.5px] font-semibold leading-[1.2] text-[#8b6a3e]">
                {brandHeader.tagline}
              </div>
            </div>
          </div>



          {/* BIG CHECK MARK */}
          <div className="relative mt-[10px] mb-[16px] flex shrink-0 justify-center items-center gap-[24px]">
            <Leaf className="h-[46px] w-[46px] text-[#8b6a3e] opacity-70 transform -scale-x-100" strokeWidth={1.5} />
            <div className="grid h-[104px] w-[104px] place-items-center rounded-full bg-[#fff8ed] border-[4px] border-[#8b6a3e] shadow-sm">
              <Check className="h-[52px] w-[52px] text-[#8b6a3e]" strokeWidth={3.5} />
            </div>
            <Leaf className="h-[46px] w-[46px] text-[#8b6a3e] opacity-70" strokeWidth={1.5} />
          </div>

          {/* SUCCESS TITLE */}
          <h1 className="mt-[2px] shrink-0 text-center text-[30px] font-semibold text-[#5a3e2b] leading-tight">
            Application Submitted Successfully!
          </h1>

          <p className="shrink-0 text-center text-[15px] font-semibold text-[#5a3e2b] mt-[3px]">
            Thank you for your interest in joining our team.
          </p>

          <p className="shrink-0 text-center text-[12.5px] text-[#8b6a3e] mt-[2px] max-w-[540px] mx-auto leading-[1.35]">
            Your application has been received and is under review. Our HR team will get in touch with you if your profile is shortlisted.
          </p>

          {/* APPLICATION DETAILS + QUOTE */}
          <div className="shrink-0 mt-[12px] grid grid-cols-[1fr_260px] gap-[18px] rounded-[10px] border border-[#eadcc8] bg-[#fff8ed] px-[20px] py-[10px]">
            <div className="space-y-[4px]">
              <div className="grid grid-cols-[160px_1fr] gap-[8px]">
                <span className="text-[13px] font-semibold text-[#8b6a3e]">Application ID</span>
                <span className="text-[14px] font-semibold text-[#5a3e2b]">{currentAppDetails.id}</span>
              </div>
              <div className="grid grid-cols-[160px_1fr] gap-[8px]">
                <span className="text-[13px] font-semibold text-[#8b6a3e]">Candidate Name</span>
                <span className="text-[14px] font-semibold text-[#5a3e2b]">{currentAppDetails.candidateName}</span>
              </div>
              <div className="grid grid-cols-[160px_1fr] gap-[8px]">
                <span className="text-[13px] font-semibold text-[#8b6a3e]">Position Applied</span>
                <span className="text-[14px] font-semibold text-[#5a3e2b]">{currentAppDetails.position}</span>
              </div>
              <div className="grid grid-cols-[160px_1fr] gap-[8px]">
                <span className="text-[13px] font-semibold text-[#8b6a3e]">Submitted On</span>
                <span className="text-[14px] font-semibold text-[#5a3e2b]">{currentAppDetails.submittedOn}</span>
              </div>
              <div className="grid grid-cols-[160px_1fr] gap-[8px] items-center">
                <span className="text-[13px] font-semibold text-[#8b6a3e]">AI Match Score</span>
                <div className="flex items-center gap-[10px]">
                  <div className="relative h-[38px] w-[38px]">
                    <svg className="h-full w-full -rotate-90" viewBox="0 0 90 90">
                      <circle cx="45" cy="45" r="38" fill="none" stroke="#eadcc8" strokeWidth="7" />
                      <circle
                        cx="45" cy="45" r="38" fill="none" stroke="#8b6a3e" strokeWidth="7"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[12px] font-semibold text-[#5a3e2b]">{matchScoreVal}%</span>
                    </div>
                  </div>
                  <span className="text-[14px] font-semibold text-[#8b6a3e]">
                    {matchScoreVal >= 70 ? "Strong Match!" : matchScoreVal >= 50 ? "Moderate Match!" : "Application Under Review"}
                  </span>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="flex flex-col items-center justify-center border-l border-[#eadcc8] px-[16px] text-center">
              <Quote className="mb-[12px] h-[48px] w-[48px] text-[#8b6a3e] opacity-40" strokeWidth={1.5} />
              <p className="text-[13.5px] italic leading-[1.35] font-semibold text-[#5a3e2b]">
                &ldquo;People with compassion create a dignified tomorrow.&rdquo;
              </p>
            </div>
          </div>

          {/* WHAT HAPPENS NEXT */}
          <div className="shrink-0 mt-[8px]">
            <h2 className="text-[16px] font-semibold text-[#5a3e2b]">What Happens Next?</h2>
            <p className="mt-[2px] text-[12.5px] text-[#8b6a3e]">Here is our typical recruitment process:</p>

            <div className="mt-[10px] relative">
              {/* Connecting line */}
              <div className="absolute left-[40px] right-[40px] top-[18px] h-[2px] bg-[#eadcc8]" />
              <div className="absolute left-[40px] top-[18px] h-[2px] w-[calc(25%-20px)] bg-[#8b6a3e]" />

              <div className="grid grid-cols-5 gap-[6px]">
                {recruitmentSteps.map((step) => {
                  const StepIcon = step.icon;
                  return (
                    <div key={step.num} className="flex flex-col items-center text-center">
                      <div
                        className={`relative z-10 grid h-[32px] w-[32px] place-items-center rounded-full text-[13px] font-semibold ${step.active
                          ? "bg-[#8b6a3e] text-white shadow-[0_2px_8px_rgba(139,106,62,0.3)]"
                          : "bg-[#eadcc8] text-[#5a3e2b]"
                          }`}
                      >
                        {step.num}
                      </div>
                      <div className="mt-[6px] grid h-[34px] w-[34px] place-items-center rounded-[8px] bg-[#fff8ed] border border-[#eadcc8]">
                        <StepIcon className="h-[18px] w-[18px] text-[#8b6a3e]" strokeWidth={2} />
                      </div>
                      <span className="mt-[4px] text-[11.5px] font-semibold text-[#5a3e2b] leading-tight whitespace-pre-line">
                        {step.title}
                      </span>
                      <span className="mt-[1px] text-[9.5px] text-[#8b6a3e]/80 leading-tight whitespace-pre-line">
                        {step.desc}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* EMAIL NOTE + HELP */}
          <div className="shrink-0 mt-[10px] flex items-center justify-between rounded-[8px] border border-[#eadcc8] bg-[#fff8ed] px-[14px] py-[8px]">
            <div className="flex items-center gap-[8px]">
              <div className="grid h-[30px] w-[30px] place-items-center rounded-full bg-white">
                <Mail className="h-[16px] w-[16px] text-[#8b6a3e]" />
              </div>
              <p className="text-[12px] text-[#5a3e2b] leading-[1.4]">
                You will receive an email confirmation with the application details shortly.
                <br />
                Please also check your spam/junk folder.
              </p>
            </div>
            <div className="flex items-center gap-[6px] shrink-0 ml-[16px]">
              <span className="text-[12px] font-semibold text-[#8b6a3e]">Need Help?</span>
              <Phone className="h-[13px] w-[13px] text-[#8b6a3e]" />
              <span className="text-[13px] font-semibold text-[#5a3e2b]">+91 92056 45544</span>
            </div>
          </div>

          {/* BOTTOM BUTTONS */}
          <div className="mt-[12px] flex shrink-0 items-center justify-end">
            <Link
              href="/careers"
              onClick={onClose}
              className="flex items-center gap-[8px] rounded-[8px] bg-[#8b6a3e] px-[22px] py-[10px] text-[14px] font-semibold text-white shadow-md hover:bg-[#5a3e2b] transition-colors"
            >
              Explore More Opportunities
              <ArrowRight className="h-[16px] w-[16px]" />
            </Link>
          </div>
        </div>

        {/* ===== RIGHT SIDEBAR ===== */}
        <div className="w-[23.8%] shrink-0 self-stretch">
          <SuccessSidebar onClose={onClose} />
        </div>
      </div>
    </div>
  );
}
