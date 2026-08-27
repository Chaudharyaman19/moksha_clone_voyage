"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { lookupPincode } from "@/lib/pincode";

import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import { itemOrFallback, textOrFallback, imageOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";

import {
  FaCalendarAlt,
  FaCheckCircle,
  FaClipboardCheck,
  FaClock,
  FaEnvelope,
  FaFileAlt,
  FaGraduationCap,
  FaHandHoldingHeart,
  FaHandsHelping,
  FaHeart,
  FaIdCard,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegClock,
  FaShieldAlt,
  FaStar,
  FaTruck,
  FaUser,
  FaUserCheck,
  FaUserFriends,
  FaUsers,
} from "react-icons/fa";

import { PiFlowerLotus } from "react-icons/pi";

import { useAppDispatch } from "@/store/hooks";
import { setCredentials } from "@/store/slices/authSlice";
import {
  volunteerApi,
  VolunteerGender,
  VolunteerBloodGroup,
  VolunteerSchedulePreference,
  VolunteerPreferredRole,
} from "@/lib/volunteerApi";
import { ApiRequestError } from "@/lib/api";
import SuccessPopup from "@/components/common/SuccessPopup";
import { X } from "lucide-react";
import {
  ConductBanner,
  ConductDeclaration,
  ConductGrid,
} from "./VolunteerCodeOfConduct";

interface VolunteerForm {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;

  dateOfBirth: string;
  gender: string;
  bloodGroup: string;

  address: string;
  city: string;
  state: string;
  pincode: string;

  motivation: string;
  experience: string;
  availability: string;
  preferredRole: string;
  whatsappPhone: string;
  occupation: string;
  organisation: string;
  languagesKnown: string;
  hoursPerWeek: string;
  emergencyOnCall: string;
  canParticipateFieldCases: string;
  ownVehicle: string;
  volunteeredBefore: string;
  previousOrganisationRole: string;
  emergencyContactName: string;
  emergencyContactRelationship: string;
  emergencyContactPhone: string;
  idProofType: string;
  idProofNumber: string;
}

interface TrustItem {
  title: string;
  description: string;
  icon: React.ComponentType<{
    className?: string;
  }>;
}

const EMPTY_FORM: VolunteerForm = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  password: "",

  dateOfBirth: "",
  gender: "",
  bloodGroup: "",

  address: "",
  city: "",
  state: "",
  pincode: "",

  motivation: "",
  experience: "",
  availability: "",
  preferredRole: "",
  whatsappPhone: "", occupation: "", organisation: "", languagesKnown: "", hoursPerWeek: "",
  emergencyOnCall: "", canParticipateFieldCases: "", ownVehicle: "", volunteeredBefore: "",
  previousOrganisationRole: "", emergencyContactName: "", emergencyContactRelationship: "",
  emergencyContactPhone: "", idProofType: "", idProofNumber: "",
};

const SUGGESTED_SKILLS = [
  "Driving",
  "First Aid",
  "Documentation Help",
  "Ritual Assistance",
  "Translation",
];
const SERVICE_AREAS = ["Field Volunteer", "Hospital & Authority Coordination", "Cremation & Ritual Assistance", "Unclaimed Body Support", "Economically Weaker Family Support", "24×7 Helpline Support", "Ambulance / Logistics Support", "Documentation & Case Support", "Community Awareness", "Social Media / Digital Volunteering", "Photography / Videography / Content", "Fundraising & Donor Outreach", "Professional / Pro-Bono Support", "Events & Campaign Support"];

const REGISTRATION_STEPS = [
  { title: "Basic Details", subtitle: "Tell us about yourself" },
  { title: "Choose Your Seva", subtitle: "How would you like to serve?" },
  { title: "Verification & Consent", subtitle: "Review & submit" },
];

const trustItems: TrustItem[] = [
  {
    title: "Make a Real Difference",
    description: "Your time and compassion can bring dignity and peace.",
    icon: FaUsers,
  },
  {
    title: "Serve with Respect",
    description: "Be part of a mission that honours every life.",
    icon: FaHeart,
  },
  {
    title: "Learn & Grow",
    description: "Receive training, guidance and real-life experience.",
    icon: FaGraduationCap,
  },
  {
    title: "Be Part of a Family",
    description: "Join a compassionate community that stands together.",
    icon: FaHandsHelping,
  },
];

const inputClass =
  "h-[36px] w-full rounded-[6px] border border-[#E6D8C9] bg-white px-3 text-[16px] font-normal text-[#35241B] outline-none transition placeholder:text-[#9E9186] focus:border-[#EC711A] focus:ring-2 focus:ring-[#EC711A]/10";

const iconInputClass =
  "h-[36px] w-full rounded-[6px] border border-[#E6D8C9] bg-white pl-9 pr-3 text-[16px] font-normal text-[#35241B] outline-none transition placeholder:text-[#9E9186] focus:border-[#EC711A] focus:ring-2 focus:ring-[#EC711A]/10";

const labelClass =
  "mb-0.5 block text-[16px] font-medium leading-none text-[#3B2A20]";

function LotusOrnament({
  className = "h-8 w-11",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 72 50"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M36 4c-7 8-9 15-7 22 2 5 7 9 7 9s5-4 7-9c2-7 0-14-7-22Z"
        stroke="#ED6B13"
        strokeWidth="1.8"
      />

      <path
        d="M12 17c9 0 16 3 20 9 3 5 3 10 3 10s-6 0-12-4c-6-4-9-9-11-15Z"
        stroke="#ED6B13"
        strokeWidth="1.8"
      />

      <path
        d="M60 17c-9 0-16 3-20 9-3 5-3 10-3 10s6 0 12-4c6-4 9-9 11-15Z"
        stroke="#ED6B13"
        strokeWidth="1.8"
      />

      <path
        d="M20 12c7 2 12 6 15 12 2 5 1 10 1 10s-6-2-10-7c-4-5-6-10-6-15Z"
        stroke="#ED6B13"
        strokeWidth="1.8"
      />

      <path
        d="M52 12c-7 2-12 6-15 12-2 5-1 10-1 10s6-2 10-7c4-5 6-10 6-15Z"
        stroke="#ED6B13"
        strokeWidth="1.8"
      />

      <path
        d="M8 31c9 8 18 12 28 12s19-4 28-12"
        stroke="#ED6B13"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mb-1.5 flex items-center gap-2">
      <span className="h-px w-4 bg-[#ED6B13]" />

      <h3 className="font-serif text-[16px] font-normal text-[#3C251B]">
        {children}
      </h3>
    </div>
  );
}

export default function VolunteerRegister() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const heroSection = useWebsiteSection("volunteer-hero");
  const registerSection = useWebsiteSection("volunteer-register");

  const stepsSection = useWebsiteSection("volunteer-registration-steps");
  const skillsSection = useWebsiteSection("volunteer-skills");
  const areasSection = useWebsiteSection("volunteer-service-areas");

  const activeSteps = React.useMemo(() => {
    const rawItems = stepsSection?.items?.length ? stepsSection.items : [
      { title: "Basic Details", description: "Tell us about yourself" },
      { title: "Choose Your Seva", description: "How would you like to serve?" },
      { title: "Verification & Consent", description: "Review & submit" },
    ];
    return rawItems.map(item => ({ title: item.title || "", subtitle: item.description || "" }));
  }, [stepsSection]);

  const activeSkills = React.useMemo(() => {
    const rawItems = skillsSection?.items?.length ? skillsSection.items : SUGGESTED_SKILLS.map(s => ({ title: s }));
    return rawItems.map(item => item.title || "");
  }, [skillsSection]);

  const activeAreas = React.useMemo(() => {
    const rawItems = areasSection?.items?.length ? areasSection.items : SERVICE_AREAS.map(s => ({ title: s }));
    return rawItems.map(item => item.title || "");
  }, [areasSection]);

  const [form, setForm] =
    useState<VolunteerForm>(EMPTY_FORM);

  const [skills, setSkills] =
    useState<string[]>([]);
  const [volunteerAreas, setVolunteerAreas] = useState<string[]>([]);
  const [availabilityDays, setAvailabilityDays] = useState<string[]>([]);
  const [preferredTimes, setPreferredTimes] = useState<string[]>([]);
  const [photograph, setPhotograph] = useState<File | null>(null);
  const [idProof, setIdProof] = useState<File | null>(null);

  const [consent, setConsent] =
    useState(false);

  const [conductAgreed, setConductAgreed] = useState(false);

  const conductAgreedRef = useRef(false);

  useEffect(() => {
    conductAgreedRef.current = conductAgreed;
  }, [conductAgreed]);

  const closeConductModal = useCallback(() => {
    setShowConductModal(false);
    if (!conductAgreedRef.current) {
      setConsent(false);
    }
  }, []);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [error, setError] =
    useState("");

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const [showConductModal, setShowConductModal] = useState(false);

  useEffect(() => {
    if (!showConductModal) return;

    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousHtmlOverscrollBehavior = document.documentElement.style.overscrollBehavior;
    const previousOverflow = document.body.style.overflow;
    const previousOverscrollBehavior = document.body.style.overscrollBehavior;
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.overscrollBehavior = "none";
    document.body.style.overflow = "hidden";
    document.body.style.overscrollBehavior = "none";

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.documentElement.style.overscrollBehavior = previousHtmlOverscrollBehavior;
      document.body.style.overflow = previousOverflow;
      document.body.style.overscrollBehavior = previousOverscrollBehavior;
    };
  }, [showConductModal]);

  const [pincodeStatus, setPincodeStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  const [step, setStep] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);

  const scrollToForm = () => {
    if (!formRef.current) return;
    const top = formRef.current.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const goToNextStep = () => {
    if (formRef.current && !formRef.current.checkValidity()) {
      formRef.current.reportValidity();
      return;
    }
    setStep((current) => Math.min(current + 1, REGISTRATION_STEPS.length - 1));
    scrollToForm();
  };

  const goToPreviousStep = () => {
    setStep((current) => Math.max(current - 1, 0));
    scrollToForm();
  };

  const [heroSlide, setHeroSlide] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setHeroSlide((current) => (current + 1) % 2);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (!showConductModal) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeConductModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [showConductModal, closeConductModal]);

  // Pincode-first lookup: once 6 digits are typed, auto-fill state/city so the volunteer doesn't
  // have to type them by hand. Both stay editable afterward in case the lookup gets it wrong.
  useEffect(() => {
    if (!/^\d{6}$/.test(form.pincode)) {
      setPincodeStatus("idle");
      return;
    }
    let cancelled = false;
    setPincodeStatus("loading");
    lookupPincode(form.pincode).then((result) => {
      if (cancelled) return;
      if (result) {
        setForm((current) => ({ ...current, city: result.city, state: result.state }));
        setPincodeStatus("done");
      } else {
        setPincodeStatus("error");
      }
    });
    return () => {
      cancelled = true;
    };
  }, [form.pincode]);

  const toggleSkill = (skill: string) => {
    setSkills((current) =>
      current.includes(skill)
        ? current.filter(
          (item) => item !== skill,
        )
        : [...current, skill],
    );
  };
  const toggleList = (setter: React.Dispatch<React.SetStateAction<string[]>>, value: string) => setter((items) => items.includes(value) ? items.filter((item) => item !== value) : [...items, value]);

  const handleChange = (
    event: React.ChangeEvent<
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement
    >,
  ) => {
    const { name } = event.target;
    let { value } = event.target;

    if (["phone", "whatsappPhone", "emergencyContactPhone"].includes(name)) {
      value = value.replace(/\D/g, "").slice(0, 10);
    }

    if (name === "pincode") {
      value = value.replace(/\D/g, "").slice(0, 6);
    }

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const submitRegistration = async () => {
    setError("");

    setIsSubmitting(true);

    try {
      const result =
        await volunteerApi.register({
          name: `${form.firstName} ${form.lastName}`.trim(),
          phone: form.phone,
          email: form.email,
          password: form.password,
          city: form.city,
          skills,
          dateOfBirth: form.dateOfBirth || undefined,
          gender: (form.gender || undefined) as VolunteerGender | undefined,
          bloodGroup: (form.bloodGroup || undefined) as VolunteerBloodGroup | undefined,
          address: form.address || undefined,
          state: form.state || undefined,
          pincode: form.pincode || undefined,
          motivation: form.motivation || undefined,
          experience: form.experience || undefined,
          schedulePreference: (form.availability || undefined) as VolunteerSchedulePreference | undefined,
          preferredRole: (form.preferredRole || undefined) as VolunteerPreferredRole | undefined,
          whatsappPhone: form.whatsappPhone || undefined,
          occupation: form.occupation || undefined,
          organisation: form.organisation || undefined,
          volunteerAreas,
          availabilityDays,
          preferredTimes,
          emergencyOnCall: form.emergencyOnCall === "Yes",
          canParticipateFieldCases: form.canParticipateFieldCases === "Yes",
          ownVehicle: form.ownVehicle === "Yes",
          languagesKnown: form.languagesKnown || undefined,
          hoursPerWeek: form.hoursPerWeek || undefined,
          volunteeredBefore: form.volunteeredBefore === "Yes",
          previousOrganisationRole: form.previousOrganisationRole || undefined,
          emergencyContact: { name: form.emergencyContactName, relationship: form.emergencyContactRelationship, phone: form.emergencyContactPhone || undefined },
          idProofType: form.idProofType || undefined,
          idProofNumber: form.idProofNumber || undefined,
          declarationAccepted: true,
          photograph: photograph || undefined,
          idProof: idProof || undefined,
        });

      dispatch(
        setCredentials({
          user: {
            ...result.user,
            userType: "VOLUNTEER",
          },
          accessToken:
            result.accessToken,
          refreshToken:
            result.refreshToken,
        }),
      );

      setShowSuccessPopup(true);
    } catch (caughtError) {
      setError(
        caughtError instanceof
          ApiRequestError
          ? caughtError.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setError("");

    if (!consent || !conductAgreed) {
      setShowConductModal(true);
      return;
    }

    await submitRegistration();
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FCF8F1] text-[#302017]">
      <Topbar />
      <Navbar />

      <main className="relative overflow-hidden px-3 pb-6 pt-0 sm:px-5 lg:px-7 lg:pb-8">
        {/* Side decorations */}
        <div className="pointer-events-none absolute -left-14 top-[38%] hidden opacity-[0.08] lg:block">
          <LotusOrnament className="h-64 w-64" />
        </div>

        <div className="pointer-events-none absolute -right-14 top-[42%] hidden opacity-[0.08] lg:block">
          <LotusOrnament className="h-64 w-64" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl">
          {/* Volunteer hero */}
          <section className="relative left-1/2 mb-5 aspect-[16/6.2] min-h-[430px] w-screen -translate-x-1/2 overflow-hidden bg-[#F4EDE3] lg:min-h-[680px]">
            <div
              className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${heroSlide * 100}%)` }}
            >
              <div className="relative h-full w-full shrink-0">
                <Image
                  src="/hero-images/volunteer-elderly-woman.png"
                  alt="Moksha Sewa volunteer sitting with and comforting an elderly woman"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="relative h-full w-full shrink-0">
                <Image
                  src="/hero-images/volunteer-hero-second.png"
                  alt="Moksha Sewa volunteer carrying ritual materials at a sacred river ghat"
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, rgba(247,240,231,0.98) 0%, rgba(247,240,231,0.93) 24%, rgba(247,240,231,0.62) 42%, rgba(247,240,231,0.20) 60%, rgba(247,240,231,0.02) 76%)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/8 via-transparent to-transparent" />

       <div className="relative mx-auto flex h-full w-full max-w-7xl items-center px-4 sm:px-5 lg:px-0">
  <div className="max-w-[540px] translate-y-2 sm:translate-y-5">
    <div className="mb-1 flex w-full max-w-[440px] flex-col items-start text-left sm:mb-2">
      <div className="hidden w-[150px] self-center sm:block sm:w-[190px] lg:w-[220px]">
        <Image
          src="/hero-images/image6.png"
          alt="Namo Gange"
          width={420}
          height={150}
          priority
          sizes="220px"
          className="h-auto w-full object-contain"
        />
      </div>

      <div className="relative top-[12px] mt-0 flex flex-col items-start text-left sm:top-0 sm:mt-[30px]">
        <span className="text-[14px] font-semibold leading-[1.1] text-[#2C1810] sm:text-[16px]">
          {textOrFallback(heroSection?.eyebrow, "Moksha Sewa", 50)}
        </span>

        <span className="mt-[2px] text-[13px] font-medium leading-[1.15] text-[#8F5A21] sm:text-[16px]">
          {textOrFallback(heroSection?.subtitle, "An Initiative of Namo Gange Trust", 60)}
        </span>
      </div>
    </div>

    <h1 className="mt-3 font-serif text-[27px] font-medium leading-[1.02] text-[#102B44] sm:mt-0 sm:text-[42px] lg:text-[52px]">
      {textOrFallback(heroSection?.title, "Be the Reason Someone Receives a Dignified Farewell.", 100)}
    </h1>

    <div className="mt-1 flex items-center gap-1.5 sm:gap-2">
      <span className="h-[2px] w-10 bg-[#DC671F] sm:w-14" />
      <span className="h-1.5 w-1.5 rotate-45 bg-[#DC671F] sm:h-2 sm:w-2" />
      <span className="h-px w-14 bg-gradient-to-r from-[#DC671F] to-transparent sm:w-20" />
    </div>

    <p className="mt-1.5 max-w-[510px] text-[14px] leading-[1.4] text-[#17283A] sm:mt-2 sm:text-[17px] sm:leading-6">
      {textOrFallback(heroSection?.description, "Your time can bring comfort, care and compassion to families when they need it most.", 200)}
    </p>

    <div className="mt-2 flex flex-wrap gap-2 sm:mt-1 sm:gap-2.5">
      <a
        href={heroSection?.buttonHref || "#volunteer-registration"}
        onClick={(e) => {
          if (!heroSection?.buttonHref || heroSection.buttonHref.startsWith("#")) {
            e.preventDefault();
            const el = document.getElementById("volunteer-registration");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="flex h-[42px] items-center justify-center rounded-[6px] bg-[#DC671F] px-5 text-[15px] font-semibold text-white shadow-sm transition hover:bg-[#C25816] sm:h-[48px] sm:px-6 sm:text-[16px]"
      >
        {textOrFallback(heroSection?.buttonLabel, "Register as a Volunteer", 40)}
      </a>

      <a
        href="/donation"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-[40px] items-center justify-center border border-[#C6520A] bg-[#D95A06] px-3 text-[14px] font-semibold text-white shadow-[0_8px_18px_rgba(190,74,0,0.18)] transition hover:-translate-y-0.5 hover:bg-[#C94F03] sm:h-[46px] sm:px-5 sm:text-[16px]"
      >
        Support This Mission
      </a>
    </div>
  </div>
</div>
          </section>

          {/* Our Volunteers Primarily Support */}
          <section className="mb-6 grid gap-3 border border-[#E7D9C9] bg-[#FBF3E7] p-3.5 lg:grid-cols-[1fr_0.32fr] lg:gap-4">
            <div>
              <h2 className="mb-2 text-center font-serif text-[20px] font-semibold text-[#3B2A20]">
                Our Volunteers Primarily Support
              </h2>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { icon: FaHandHoldingHeart, title: "Unclaimed Bodies", description: "Ensuring dignity for those with no one left by their side." },
                  { icon: FaUserFriends, title: "People Without Family", description: "Standing beside those who have no family to call their own." },
                  { icon: FaHandsHelping, title: "Economically Weaker Families", description: "Supporting families in need of a dignified last farewell." },
                  { icon: FaHeart, title: "Humanity & Dignity", description: "Every life deserves respect, every journey deserves dignity." },
                ].map(({ icon: Icon, title, description }) => (
                  <div key={title} className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-[#ED6B13] shadow-[0_4px_10px_rgba(89,57,31,0.08)]">
                        <Icon className="h-4 w-4" />
                      </span>
                      <h3 className="text-[16px] font-semibold leading-tight text-[#3B2A20]">{title}</h3>
                    </div>
                    <p className="text-[16px] leading-[1.35] text-[#75655A]">{description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center border border-[#EDD9BF] bg-white/70 p-3">
              <span className="font-serif text-[26px] leading-none text-[#ED6B13]">&ldquo;</span>
              <p className="mt-1 text-[16px] font-medium leading-[1.4] text-[#3B2A20]">
                Seva towards the last journey is the highest form of humanity.
              </p>
              <p className="mt-1.5 text-[16px] text-[#8F5A21]">– Namo Gange Trust</p>
            </div>
          </section>

          {/* Heading */}
          <header id="volunteer-registration" className="mb-3 scroll-mt-12 text-center">
            <h1 className="font-serif text-[28px] font-semibold text-[#2C1810] sm:text-[34px]">
              {textOrFallback(registerSection?.title, "Volunteer Registration", 50)}
            </h1>
          </header>

          {/* Stepper progress */}
          <div className="mb-4 flex items-start justify-center gap-3 sm:gap-6 lg:gap-10">
            {activeSteps.map((item, index) => {
              const isActive = index === step;
              const isComplete = index < step;

              return (
                <React.Fragment key={item.title}>
                  <div className="flex flex-col items-center text-center">
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border text-[16px] font-semibold transition sm:h-10 sm:w-10 ${isActive
                        ? "border-[#ED6B13] bg-[#ED6B13] text-white shadow-[0_6px_14px_rgba(229,78,11,0.28)]"
                        : isComplete
                          ? "border-[#ED6B13] bg-white text-[#ED6B13]"
                          : "border-[#E2CDB4] bg-white text-[#A88E76]"
                        }`}
                    >
                      {isComplete ? <FaCheckCircle className="h-4 w-4" /> : index + 1}
                    </span>

                    <span className={`mt-1.5 text-[16px] font-medium leading-none ${isActive ? "text-[#3B2A20]" : "text-[#9E9186]"}`}>
                      {item.title}
                    </span>
                    <span className="mt-0.5 hidden text-[16px] leading-none text-[#B0A091] sm:block">
                      {item.subtitle}
                    </span>
                  </div>

                  {index < activeSteps.length - 1 && (
                    <span className={`mt-1 h-px w-8 shrink-0 sm:mt-1 sm:w-16 ${index < step ? "bg-[#ED6B13]" : "bg-[#E2CDB4]"}`} />
                  )}
                </React.Fragment>
              );
            })}
          </div>

          <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[1fr_0.36fr] lg:items-stretch">
            {/* Registration form */}
            <section className="relative overflow-hidden border border-[#E7D9C9] bg-white/95 px-4 py-2.5 shadow-[0_14px_38px_rgba(93,55,30,0.08)] sm:px-5">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-1.5"
              >

                {step === 0 && (
                  <>
                    <div className="mb-2 text-center">
                      <h2 className="text-[16px] font-semibold text-[#3B2A20]">Step 1 of 3: Basic Details</h2>
                      <p className="mt-0.5 text-[16px] text-[#8F7A66]">Please provide your basic information.</p>
                    </div>
                    <div>
                      <div className="mb-1.5 flex items-center gap-2">
                        <LotusOrnament className="h-6 w-8" />
                        <h2 className="font-serif text-[18px] font-normal text-[#382117]">
                          Personal Information
                        </h2>
                      </div>

                      <div className="grid gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
                        <div>
                          <label className={labelClass}>First Name *</label>
                          <div className="relative">
                            <FaUser className="pointer-events-none absolute left-3 top-1/2 h-3 w-3 -translate-y-1/2 text-[#A45331]" />
                            <input name="firstName" value={form.firstName ?? ""} onChange={handleChange} required className={iconInputClass} placeholder="Enter first name" />
                          </div>
                        </div>

                        <div>
                          <label className={labelClass}>Last Name *</label>
                          <div className="relative">
                            <FaUser className="pointer-events-none absolute left-3 top-1/2 h-3 w-3 -translate-y-1/2 text-[#A45331]" />
                            <input name="lastName" value={form.lastName ?? ""} onChange={handleChange} required className={iconInputClass} placeholder="Enter last name" />
                          </div>
                        </div>


                        <div>
                          <label className={labelClass}>Mobile Number *</label>
                          <div className="relative">
                            <FaPhoneAlt className="pointer-events-none absolute left-3 top-1/2 h-3 w-3 -translate-y-1/2 text-[#A45331]" />
                            <input name="phone" type="tel" required inputMode="numeric" maxLength={10} pattern="[6-9][0-9]{9}" value={form.phone ?? ""} onChange={handleChange} className={iconInputClass} placeholder="Enter mobile number" />
                          </div>
                        </div>

                        <div>
                          <label className={labelClass}>Email Address *</label>
                          <div className="relative">
                            <FaEnvelope className="pointer-events-none absolute left-3 top-1/2 h-3 w-3 -translate-y-1/2 text-[#A45331]" />
                            <input name="email" type="email" required value={form.email ?? ""} onChange={handleChange} className={iconInputClass} placeholder="Enter email address" />
                          </div>
                        </div>

                        <div>
                          <label className={labelClass}>Date of Birth *</label>
                          <div className="relative">
                            <FaCalendarAlt className="pointer-events-none absolute left-3 top-1/2 h-3 w-3 -translate-y-1/2 text-[#A45331]" />
                            <input name="dateOfBirth" type="date" required value={form.dateOfBirth ?? ""} onChange={handleChange} className={`${iconInputClass} pr-2`} />
                          </div>
                        </div>

                        <div>
                          <label className={labelClass}>Gender *</label>
                          <select name="gender" value={form.gender ?? ""} onChange={handleChange} required className={`${inputClass} appearance-none`}>
                            <option value="">Select your gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        <div>
                          <label className={labelClass}>Blood Group</label>
                          <select name="bloodGroup" value={form.bloodGroup ?? ""} onChange={handleChange} className={`${inputClass} appearance-none`}>
                            <option value="">Select blood group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-dashed border-[#EDB886] pt-1.5">
                      <SectionTitle>Address Information</SectionTitle>

                      <div className="grid gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
                        <div>
                          <label className={labelClass}>Pincode *</label>
                          <input name="pincode" type="tel" value={form.pincode ?? ""} onChange={handleChange} required inputMode="numeric" maxLength={6} pattern="[0-9]{6}" title="Enter a valid 6-digit pincode" className={inputClass} placeholder="6-digit pincode" />
                        </div>

                        <div>
                          <label className={labelClass}>State *</label>
                          <input name="state" value={form.state ?? ""} onChange={handleChange} required className={inputClass} placeholder="Auto-filled from pincode" />
                        </div>

                        <div>
                          <label className={labelClass}>City *</label>
                          <input name="city" value={form.city ?? ""} onChange={handleChange} required className={inputClass} placeholder="Auto-filled from pincode" />
                        </div>

                        <div>
                          <label className={labelClass}>Address *</label>
                          <div className="relative">
                            <FaMapMarkerAlt className="pointer-events-none absolute left-3 top-1/2 h-3 w-3 -translate-y-1/2 text-[#A45331]" />
                            <input name="address" value={form.address ?? ""} onChange={handleChange} required className={iconInputClass} placeholder="House/flat, street, landmark" />
                          </div>
                        </div>
                      </div>

                      {pincodeStatus === "loading" && (
                        <p className="mt-1 text-[16px] text-[#9E9186]">Looking up state and city…</p>
                      )}
                      {pincodeStatus === "done" && (
                        <p className="mt-1 text-[16px] text-emerald-600">Found: {form.city}, {form.state}</p>
                      )}
                      {pincodeStatus === "error" && (
                        <p className="mt-1 text-[16px] text-[#C1502E]">Couldn&apos;t find this pincode — please enter state and city manually.</p>
                      )}
                    </div>

                    <div className="flex flex-col gap-3 border-t border-dashed border-[#EDB886] mt-1">
                      <div className="flex items-start gap-2 text-[16px] text-[#75655A]">
                        <FaShieldAlt className="mt-0.5 mb-1 h-3.5 w-3.5 shrink-0 text-[#ED6B13]" />
                        <span>
                          <span className="font-semibold text-[#3B2A20]">Your information is safe with us. </span>
                          We respect your privacy and will never share your details without your consent.
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={goToNextStep}
                        className="ml-auto inline-flex h-[39px] items-center justify-center gap-2 rounded-[6px] bg-gradient-to-r from-[#FF6A13] to-[#EF4E0A] px-5 text-[16px] font-medium text-white shadow-[0_7px_18px_rgba(229,78,11,0.22)] transition hover:brightness-95"
                      >
                        Save &amp; Continue
                        <span>→</span>
                      </button>
                    </div>
                  </>
                )}

                {step === 1 && (
                  <>
                    <div className="mb-2 text-center">
                      <h2 className="text-[16px] font-semibold text-[#3B2A20]">Step 2 of 3: Choose Your Seva</h2>
                      <p className="mt-0.5 text-[16px] text-[#8F7A66]">How would you like to serve?</p>
                    </div>
                    <div className="border-t border-dashed border-[#EDB886] pt-1.5">
                      <SectionTitle>About You</SectionTitle>

                      <div className="grid gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
                        <div>
                          <label className={labelClass}>Why Volunteer With Us? *</label>
                          <div className="relative">
                            <FaHeart className="pointer-events-none absolute left-3 top-2.5 h-3 w-3 text-[#A45331]" />
                            <textarea name="motivation" value={form.motivation ?? ""} onChange={handleChange} required rows={1} className="min-h-[36px] w-full resize-none rounded-[6px] border border-[#E6D8C9] bg-white py-1 pl-9 pr-3 text-[16px] text-[#35241B] outline-none placeholder:text-[#9E9186] focus:border-[#EC711A] focus:ring-2 focus:ring-[#EC711A]/10" placeholder="Share your motivation" />
                          </div>
                        </div>

                        <div>
                          <label className={labelClass}>Skills / Experience</label>
                          <div className="relative">
                            <FaStar className="pointer-events-none absolute left-3 top-2.5 h-3 w-3 text-[#A45331]" />
                            <textarea name="experience" value={form.experience ?? ""} onChange={handleChange} rows={1} className="min-h-[36px] w-full resize-none rounded-[6px] border border-[#E6D8C9] bg-white py-1 pl-9 pr-3 text-[16px] text-[#35241B] outline-none placeholder:text-[#9E9186] focus:border-[#EC711A] focus:ring-2 focus:ring-[#EC711A]/10" placeholder="Your skills or experience" />
                          </div>
                        </div>

                        <div>
                          <label className={labelClass}>Availability *</label>
                          <div className="relative">
                            <FaRegClock className="pointer-events-none absolute left-3 top-1/2 h-3 w-3 -translate-y-1/2 text-[#A45331]" />
                            <select name="availability" value={form.availability ?? ""} onChange={handleChange} required className={`${iconInputClass} appearance-none`}>
                              <option value="">Select availability</option>
                              <option value="Weekdays">Weekdays</option>
                              <option value="Weekends">Weekends</option>
                              <option value="Evenings">Evenings</option>
                              <option value="Emergency Support">Emergency Support</option>
                              <option value="Flexible">Flexible</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className={labelClass}>Preferred Role *</label>
                          <select name="preferredRole" value={form.preferredRole ?? ""} onChange={handleChange} required className={`${inputClass} appearance-none`}>
                            <option value="">Select preferred role</option>
                            <option value="Field Volunteer">Field Volunteer</option>
                            <option value="Transport Support">Transport Support</option>
                            <option value="Documentation">Documentation</option>
                            <option value="Family Coordination">Family Coordination</option>
                            <option value="Ritual Assistance">Ritual Assistance</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-dashed border-[#EDB886] pt-1.5">
                      <SectionTitle>Service &amp; Availability Details</SectionTitle>

                      <div className="grid gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
                        {[['whatsappPhone', 'WhatsApp Number', 'tel'], ['occupation', 'Occupation / Profession', 'text'], ['organisation', 'Organisation / Institution', 'text'], ['languagesKnown', 'Languages Known', 'text'], ['hoursPerWeek', 'Approx. Hours / Week', 'text']].map(([name, text, type]) => (
                          <label key={name}>
                            <span className={labelClass}>{text}</span>
                            <input name={name} type={type} value={form[name as keyof VolunteerForm] ?? ""} onChange={handleChange} inputMode={name === 'whatsappPhone' ? 'numeric' : undefined} maxLength={name === 'whatsappPhone' ? 10 : undefined} pattern={name === 'whatsappPhone' ? '[6-9][0-9]{9}' : undefined} className={inputClass} />
                          </label>
                        ))}
                      </div>

                      <p className={`${labelClass} mt-4 border-t border-dashed border-[#EDB886] pt-3`}>Preferred Areas of Volunteering</p>
                      <div className="mt-2 grid gap-x-4 gap-y-2 sm:grid-cols-2 lg:grid-cols-4">
                        {activeAreas.map((area) => (
                          <label key={area} className="flex items-start gap-2 text-[16px] leading-5 text-[#5E4B3F]">
                            <input type="checkbox" checked={volunteerAreas.includes(area)} onChange={() => toggleList(setVolunteerAreas, area)} className="mt-0.5 accent-[#ED6B13]" />
                            {area}
                          </label>
                        ))}
                      </div>

                      <div className="mt-4 grid gap-3 border-t border-dashed border-[#EDB886] pt-3 sm:grid-cols-2 lg:gap-6">
                        <div>
                          <span className={labelClass}>Available Days</span>
                          <div className="mt-1 flex flex-wrap gap-x-4 gap-y-2">
                            {['Weekdays', 'Weekends', 'Flexible'].map(v => (
                              <label key={v} className="text-[16px]"><input type="checkbox" checked={availabilityDays.includes(v)} onChange={() => toggleList(setAvailabilityDays, v)} className="mr-1 accent-[#ED6B13]" />{v}</label>
                            ))}
                          </div>
                        </div>

                        <div>
                          <span className={labelClass}>Preferred Time</span>
                          <div className="mt-1 flex flex-wrap gap-x-4 gap-y-2">
                            {['Morning', 'Day', 'Evening', 'Night'].map(v => (
                              <label key={v} className="text-[16px]"><input type="checkbox" checked={preferredTimes.includes(v)} onChange={() => toggleList(setPreferredTimes, v)} className="mr-1 accent-[#ED6B13]" />{v}</label>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 grid gap-x-4 gap-y-4 border-t border-dashed border-[#EDB886] pt-3 sm:grid-cols-2 lg:grid-cols-[1fr_1.2fr_1fr_1fr]">
                        {[['emergencyOnCall', 'Emergency / On-Call Seva? *'], ['canParticipateFieldCases', 'Can Participate in Field Cases? *'], ['ownVehicle', 'Own Vehicle Available? *'], ['volunteeredBefore', 'NGO Experience? *']].map(([name, text]) => (
                          <label key={name}>
                            <span className={labelClass}>{text}</span>
                            <select name={name} value={form[name as keyof VolunteerForm] ?? ""} onChange={handleChange} required className={inputClass}>
                              <option value="">Select</option>
                              <option>Yes</option>
                              <option>No</option>
                            </select>
                          </label>
                        ))}
                      </div>

                      <div className="mt-1.5">
                        <label>
                          <span className={labelClass}>Previous Organisation &amp; Role</span>
                          <input name="previousOrganisationRole" value={form.previousOrganisationRole ?? ""} onChange={handleChange} className={inputClass} />
                        </label>
                      </div>
                    </div>

                    <div className="flex justify-between border-t border-dashed border-[#EDB886] mt-1">
                      <button
                        type="button"
                        onClick={goToPreviousStep}
                        className="inline-flex h-[39px] items-center justify-center gap-2 rounded-[6px] border border-[#E6D8C9] bg-white px-5 text-[16px] font-medium text-[#674E3E] transition hover:border-[#E9A166]"
                      >
                        <span>←</span>
                        Back
                      </button>

                      <button
                        type="button"
                        onClick={goToNextStep}
                        className="inline-flex h-[39px] items-center justify-center gap-2 rounded-[6px] bg-gradient-to-r from-[#FF6A13] to-[#EF4E0A] px-5 text-[16px] font-medium text-white shadow-[0_7px_18px_rgba(229,78,11,0.22)] transition hover:brightness-95"
                      >
                        Save &amp; Continue
                        <span>→</span>
                      </button>
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <div className="mb-2 text-center">
                      <h2 className="text-[16px] font-semibold text-[#3B2A20]">Step 3 of 3: Verification &amp; Consent</h2>
                      <p className="mt-0.5 text-[16px] text-[#8F7A66]">Review your details and submit.</p>
                    </div>
                    <div className="border-t border-dashed border-[#EDB886] pt-1.5">
                      <SectionTitle>Emergency Contact &amp; KYC Later</SectionTitle>

                      <div className="grid gap-x-4 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
                        {[['emergencyContactName', 'Contact Person *', 'text'], ['emergencyContactRelationship', 'Relationship *', 'text'], ['emergencyContactPhone', 'Emergency Mobile No. *', 'tel']].map(([name, text, type]) => (
                          <label key={name}>
                            <span className={labelClass}>{text}</span>
                            <input name={name} type={type} required value={form[name as keyof VolunteerForm] ?? ""} onChange={handleChange} inputMode={type === 'tel' ? 'numeric' : undefined} maxLength={type === 'tel' ? 10 : undefined} pattern={type === 'tel' ? '[6-9][0-9]{9}' : undefined} className={inputClass} />
                          </label>
                        ))}

                        <label>
                          <span className={labelClass}>ID Proof Type *</span>
                          <select name="idProofType" value={form.idProofType ?? ""} onChange={handleChange} required className={inputClass}>
                            <option value="">Select</option>
                            {['Aadhaar', 'Voter ID', 'Driving Licence', 'Passport', 'Other'].map(v => <option key={v}>{v}</option>)}
                          </select>
                        </label>

                        <label>
                          <span className={labelClass}>ID Proof Number *</span>
                          <input name="idProofNumber" value={form.idProofNumber ?? ""} onChange={handleChange} required className={inputClass} />
                        </label>

                        <label>
                          <span className={labelClass}>Upload Photograph *</span>
                          <input type="file" accept="image/jpeg,image/png,image/webp" required onChange={(e) => setPhotograph(e.target.files?.[0] ?? null)} className={`${inputClass} h-auto py-1.5`} />
                          <span className="mt-0.5 block text-[16px] text-[#75655A]">JPG, PNG or WebP · max 10MB</span>
                        </label>

                        <label className="sm:col-span-2">
                          <span className={labelClass}>Upload ID Proof *</span>
                          <input type="file" accept="image/jpeg,image/png,image/webp,application/pdf" required onChange={(e) => setIdProof(e.target.files?.[0] ?? null)} className={`${inputClass} h-auto py-1.5`} />
                          <span className="mt-0.5 block text-[16px] text-[#75655A]">JPG, PNG, WebP or PDF · max 10MB</span>
                        </label>
                      </div>
                    </div>

                    {/* Password */}
                    <div className="border-t border-dashed border-[#EDB886] pt-1.5">
                      <div className="grid gap-x-4 gap-y-4 sm:grid-cols-[0.75fr_1.25fr]">
                        <div>
                          <label
                            className={labelClass}
                          >
                            Password *
                          </label>

                          <input
                            name="password"
                            type="password"
                            required
                            minLength={8}
                            value={form.password}
                            onChange={handleChange}
                            className={inputClass}
                            placeholder="At least 8 characters"
                          />
                        </div>

                        <div>
                          <label
                            className={labelClass}
                          >
                            Skills
                          </label>

                          <div className="flex min-h-[36px] flex-wrap items-center gap-1">
                            {activeSkills.map((skill) => {
                                const selected =
                                  skills.includes(
                                    skill,
                                  );

                                return (
                                  <button
                                    key={skill}
                                    type="button"
                                    onClick={() =>
                                      toggleSkill(
                                        skill,
                                      )
                                    }
                                    className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[16px] font-medium transition ${selected
                                      ? "border-[#ED6B13] bg-[#ED6B13] text-white"
                                      : "border-[#E6D8C9] bg-[#FCF8F2] text-[#674E3E] hover:border-[#E9A166]"
                                      }`}
                                  >
                                    {selected && (
                                      <FaCheckCircle className="h-2.5 w-2.5" />
                                    )}

                                    {skill}
                                  </button>
                                );
                              },
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <label className="flex cursor-pointer items-start gap-2 border-t border-dashed border-[#EDB886] mt-1 text-[16px] leading-5 text-[#5E4B3F]">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={(event) => {
                          const checked = event.target.checked;
                          setConsent(checked);
                          if (checked) {
                            setConductAgreed(false);
                            setShowConductModal(true);
                          }
                        }}
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 rounded border-[#D6C3B2] text-[#ED6B13] focus:ring-[#ED6B13]/20"
                      />

                      I agree to abide by
                      Moksha Sewa&apos;s volunteer
                      guidelines and code of
                      conduct.
                      <span className="text-red-500">
                        *
                      </span>
                    </label>

                    {error && (
                      <div className="rounded-[6px] border border-red-200 bg-red-50 px-3 py-2 text-[16px] text-red-700">
                        {error}
                      </div>
                    )}

                    <div className="flex gap-2.5">
                      <button
                        type="button"
                        onClick={goToPreviousStep}
                        className="inline-flex h-[39px] shrink-0 items-center justify-center gap-2 rounded-[6px] border border-[#E6D8C9] bg-white px-5 text-[16px] font-medium text-[#674E3E] transition hover:border-[#E9A166]"
                      >
                        <span>←</span>
                        Back
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting || !consent || !conductAgreed}
                        title={!conductAgreed ? "Please agree to the Code of Conduct to continue" : undefined}
                        className="group flex h-[39px] w-full items-center justify-center gap-2.5 rounded-[6px] bg-gradient-to-r from-[#FF6A13] to-[#EF4E0A] px-4 text-[16px] font-medium text-white shadow-[0_7px_18px_rgba(229,78,11,0.22)] transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                            Registering...
                          </>
                        ) : (
                          <>
                            <PiFlowerLotus className="h-5 w-5" />
                            Register as Volunteer
                            <span className="transition-transform group-hover:translate-x-1">
                              →
                            </span>
                          </>
                        )}
                      </button>
                    </div>

                    <p className="flex items-center justify-center gap-2 text-center text-[16px] text-[#75655A]">
                      <FaShieldAlt className="text-[#726D67]" />
                      Your information is safe and
                      secure with us.
                    </p>
                  </>
                )}
              </form>
            </section>

            {/* Right panel */}
            <aside className="flex h-full flex-col overflow-hidden border border-[#EDD9BF] bg-[#FFF8EC] p-4 shadow-[0_14px_36px_rgba(106,65,29,0.09)]">
              <h2 className="font-serif text-[17px] font-semibold text-[#40271B]">
                Why Volunteer With Moksha Sewa?
              </h2>

              <div className="mt-1 flex flex-col gap-3.5">
                {trustItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex items-start gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#E7C59F] bg-white text-[#ED6B13]">
                        <Icon className="h-4 w-4" />
                      </span>

                      <div className="min-w-0">
                        <h3 className="text-[16px] font-semibold leading-tight text-[#3E261B]">
                          {item.title}
                        </h3>

                        <p className="mt-0.5 text-[16px] leading-[1.35] text-[#715C4E]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {step === 1 && (
                <div className="mt-3.5 grid grid-cols-2 gap-2.5 border-t border-dashed border-[#EDB886] pt-3.5">
                  {[
                    { value: "500+", label: "Active Volunteers" },
                    { value: "24×7", label: "Support Available" },
                  ].map((stat) => (
                    <div key={stat.label} className="border border-[#E7C59F] bg-white/70 px-2.5 py-2 text-center">
                      <div className="text-[18px] font-semibold leading-tight text-[#ED6B13]">{stat.value}</div>
                      <div className="mt-0.5 text-[16px] leading-tight text-[#715C4E]">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {step === 1 && (
                <div className="relative mt-3.5 w-full flex-1 min-h-[160px] overflow-hidden">
                  <Image
                    src="/hero-images/image7.png"
                    alt="Moksha Sewa volunteers comforting a grieving family at a river ghat"
                    fill
                    sizes="(min-width: 1024px) 22vw, 90vw"
                    className="object-cover object-[72%_48%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  <p className="absolute bottom-2.5 left-2.5 right-2.5 text-[16px] font-semibold leading-tight text-white">
                    Every act of Seva creates a lasting impact.
                  </p>
                </div>
              )}

              {step === 1 && (
                <div className="mt-3.5 flex items-start gap-2.5 border border-[#E7C59F] bg-white/70 px-3 py-2.5">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#FDEBD3] text-[#ED6B13]">
                    <FaStar className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-[16px] leading-[1.4] text-[#5E4B3F]">
                    Tip: You can select multiple areas of volunteering that interest you.
                  </p>
                </div>
              )}
            </aside>
          </div>

          {/* Step 2 preview + What happens next */}
          <div className="mt-6 grid gap-4 lg:grid-cols-[1.35fr_1fr]">
            <section className="border border-[#E7D9C9] bg-[#FBF3E7] p-4">
              <h2 className="text-[16px] font-semibold text-[#3B2A20]">
                Step 2 Preview: Choose Your Seva
                <span className="ml-2 text-[16px] font-normal text-[#8F7A66]">(You can select multiple)</span>
              </h2>

              <div className="mt-1 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  { icon: FaHandHoldingHeart, title: "Field Sewa", description: "Cremation rites & family assistance" },
                  { icon: FaUserFriends, title: "Unclaimed Body Support", description: "Hospital, police & authority support" },
                  { icon: FaTruck, title: "Transport & Logistics", description: "Ambulance, mortuary & operational help" },
                  { icon: FaPhoneAlt, title: "Helpline & Case Support", description: "Calls, documentation & case support" },
                  { icon: FaUsers, title: "Community & Digital", description: "Awareness, social media & creative work" },
                  { icon: FaUserCheck, title: "Professional Sewa", description: "Legal, medical & counselling expertise" },
                ].map(({ icon: Icon, title, description }) => (
                  <div key={title} className="flex flex-col items-center text-center">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#FDEBD3] text-[#ED6B13]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="mt-1.5 text-[16px] font-semibold leading-tight text-[#3B2A20]">{title}</span>
                    <span className="mt-0.5 text-[16px] leading-[1.3] text-[#8F7A66]">{description}</span>
                  </div>
                ))}
              </div>

              <p className="mt-4 border-t border-dashed border-[#EDB886] pt-2.5 text-center text-[16px] text-[#8F7A66]">
                Flexible time commitment · On-call opportunities · Training &amp; orientation provided
              </p>
            </section>

            <section className="border border-[#E7D9C9] bg-white p-4">
              <h2 className="text-center text-[16px] font-semibold text-[#3B2A20]">What Happens Next?</h2>

              <div className="mt-1 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  { icon: FaFileAlt, title: "Application", description: "Submit your volunteer registration" },
                  { icon: FaShieldAlt, title: "Verification", description: "We carefully verify your details" },
                  { icon: FaGraduationCap, title: "Orientation", description: "Attend our training & orientation" },
                  { icon: FaClipboardCheck, title: "Approval", description: "Approved as an official volunteer" },
                  { icon: FaIdCard, title: "ID & Kit", description: "Receive your ID card & volunteer kit" },
                  { icon: FaHeart, title: "Sewa Assignment", description: "Start serving & make a real impact" },
                ].map(({ icon: Icon, title, description }) => (
                  <div key={title} className="flex flex-col items-center text-center">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#E7C59F] text-[#ED6B13]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="mt-1.5 text-[16px] font-semibold leading-tight text-[#3B2A20]">{title}</span>
                    <span className="mt-0.5 text-[16px] leading-[1.3] text-[#8F7A66]">{description}</span>
                  </div>
                ))}
              </div>

              <p className="mt-1 rounded-[6px] bg-[#FDEBD3] px-3 py-2 text-center text-[16px] text-[#8F5A21]">
                We will contact you after reviewing your application.
              </p>
            </section>
          </div>

          {/* Bottom contact band */}
          <section className="mt-6 grid gap-4 sm:grid-cols-[0.85fr_1fr_0.9fr_1.05fr]">
            <div className="relative min-h-[220px] overflow-hidden border border-[#E7D9C9] bg-[#F4EDE3]">
              <Image
                src="/hero-images/volunteer-team-shirts.png"
                alt="Two Moksha Sewa volunteers in branded polo shirts standing together"
                fill
                sizes="240px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-[16px] font-medium leading-[1.4] text-white">
                Your compassion can bring comfort. Your presence can bring hope. Your seva can bring dignity.
              </p>
            </div>

            <div className="border border-[#E7D9C9] bg-[#FBF3E7] p-5">
              <h3 className="text-[16px] font-semibold text-[#3B2A20]">What We Provide</h3>
              <ul className="mt-3 flex flex-col gap-2.5">
                {["Training & orientation", "Safety guidelines & support", "Identity card & volunteer kit", "Flexible opportunity to serve", "24x7 helpline & field support", "Recognition for your service", "Certificate of appreciation"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[16px] text-[#5E4B3F]">
                    <FaCheckCircle className="mt-0.5 h-3 w-3 shrink-0 text-[#ED6B13]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-[#E7D9C9] bg-[#FBF3E7] p-5">
              <h3 className="text-[16px] font-semibold text-[#3B2A20]">Need Help?</h3>
              <p className="mt-0.5 text-[16px] text-[#8F7A66]">We&apos;re here to help you.</p>
              <div className="mt-3 flex items-start gap-2 text-[16px] text-[#5E4B3F]">
                <FaPhoneAlt className="mt-0.5 h-3 w-3 shrink-0 text-[#ED6B13]" />
                <div>
                  <a href="tel:+919220147229" className="hover:text-[#ED6B13]">+91 92201 47229</a>
                  <div className="text-[16px] text-[#8F7A66]">24x7 Helpline</div>
                </div>
              </div>
              <div className="mt-2.5 flex items-start gap-2 text-[16px] text-[#5E4B3F]">
                <FaEnvelope className="mt-0.5 h-3 w-3 shrink-0 text-[#ED6B13]" />
                <div>
                  <a href="mailto:info@mokshasewa.org" className="hover:text-[#ED6B13]">info@mokshasewa.org</a>
                  <div className="text-[16px] text-[#8F7A66]">Email Us</div>
                </div>
              </div>
              <div className="mt-2.5 flex items-start gap-2 text-[16px] text-[#5E4B3F]">
                <FaClock className="mt-0.5 h-3 w-3 shrink-0 text-[#ED6B13]" />
                <div>
                  Open 24 hours
                  <div className="text-[16px] text-[#8F7A66]">Every day</div>
                </div>
              </div>
            </div>

            <div className="relative min-h-[220px] overflow-hidden border border-[#E7D9C9]">
              <Image
                src="/hero-images/image4.png"
                alt="Moksha Sewa volunteers supporting an elderly couple"
                fill
                sizes="(min-width: 1024px) 22vw, 45vw"
                quality={90}
                className="object-cover object-[80%_65%]"
              />
            </div>
          </section>

          {/* Thank you banner */}
          <section className="mt-6 flex flex-col items-center gap-2.5 border border-[#EDD9BF] bg-gradient-to-r from-[#FBF3E7] to-[#FDEBD3] px-5 py-3 text-center sm:flex-row sm:justify-between sm:gap-3.5 sm:text-left">
            <div className="flex flex-col items-center gap-2.5 sm:flex-row sm:gap-3.5 sm:text-left">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-[#ED6B13] shadow-[0_4px_10px_rgba(89,57,31,0.10)]">
                <FaHandsHelping className="h-5 w-5" />
              </span>
              <div className="leading-snug">
                <p className="text-[16px] font-semibold text-[#3B2A20]">
                  Thank you for taking the first step towards serving humanity.
                </p>
                <p className="text-[16px] text-[#75655A]">
                  Together, let&apos;s ensure that no one is left alone in their final journey.
                </p>
              </div>
            </div>

            <a
              href="#volunteer-registration"
              className="inline-flex h-[39px] shrink-0 items-center justify-center gap-2 rounded-[6px] bg-gradient-to-r from-[#FF6A13] to-[#EF4E0A] px-5 text-[16px] font-medium text-white shadow-[0_7px_18px_rgba(229,78,11,0.22)] transition hover:brightness-95"
            >
              Register Now
              <span>→</span>
            </a>
          </section>

          {/* Bottom message */}

        </div>
      </main>

      <Footer />

      {/* Code of Conduct modal */}
      {showConductModal && (
        <div
          data-lenis-prevent
          data-lenis-prevent-touch
          className="fixed inset-0 z-[80] flex items-center justify-center overflow-hidden bg-black/65 p-2 sm:p-4"
        >
          <div
            data-lenis-prevent
            data-lenis-prevent-touch
            className="flex h-[calc(100dvh-1rem)] min-h-0 w-full flex-col overflow-hidden rounded-[10px] border border-[#C49535] bg-[#FBF8F2] shadow-[0_24px_70px_rgba(0,0,0,0.45)] sm:h-auto sm:max-h-[92dvh] sm:w-[60vw]"
          >
            {/* Modal header */}
            <div className="sticky top-0 z-20 flex shrink-0 items-center justify-between gap-3 border-b-2 border-[#C98A1C] bg-[#004435] px-3 py-2 sm:px-5 sm:py-3 rounded-t-[8px]">
              <div className="min-w-0">
                <h2 className="text-[14px] font-bold uppercase tracking-[0.03em] text-white sm:text-[16px]">
                  Volunteer Code of Conduct
                </h2>
                <p className="mt-0.5 text-[12px] leading-[1.3] text-[#E6DED1] sm:text-[13px]">
                  Please review and agree to continue registration
                </p>
              </div>

              <button
                type="button"
                onClick={closeConductModal}
                aria-label="Close code of conduct"
                className="grid h-8 w-8 shrink-0 cursor-pointer place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/25 sm:h-9 sm:w-9"
              >
                <X className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
              </button>
            </div>

            {/* Modal body */}
            <div
              data-lenis-prevent
              data-lenis-prevent-wheel
              data-lenis-prevent-touch
              className="min-h-0 flex-1 touch-pan-y overflow-y-auto overscroll-contain bg-[#FBF8F2] p-2 [-webkit-overflow-scrolling:touch] sm:p-3"
              tabIndex={0}
              role="region"
              aria-label="Volunteer Code of Conduct details"
            >
              <ConductBanner compact />

              <ConductGrid compact />

              <ConductDeclaration
                compact
                asLink={false}
                submitLabel="Continue"
                onCheckedChange={setConductAgreed}
                onSubmit={() => setShowConductModal(false)}
              />
            </div>
          </div>
        </div>
      )}

      <SuccessPopup
        open={showSuccessPopup}
        onClose={() => {
          setShowSuccessPopup(false);
          router.push("/volunteer/dashboard");
        }}
        title="Welcome to the Team!"
        message="Your volunteer registration has been submitted successfully. Taking you to your dashboard."
      />
    </div>
  );
}
