"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import {
  FaFire,
  FaAmbulance,
  FaUtensils,
  FaChevronRight,
  FaChevronDown,
  FaCheckCircle,
  FaHandHoldingHeart,
  FaShieldAlt,
  FaMapMarkedAlt,
  FaHandsHelping,
} from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { PiFlowerLotus } from "react-icons/pi";
import { api, ApiRequestError } from "@/lib/api";
import { openRazorpayCheckout, RazorpaySuccessResponse } from "@/lib/razorpay";
import SuccessPopup from "@/components/common/SuccessPopup";

type Cause = {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  price: number;
  features: string[];
  badge?: string;
};

const CAUSES: Cause[] = [
  {
    id: "general",
    title: "Support a Final Journey",
    description: "Indicative contribution toward verified last-rites assistance and related programme needs.",
    icon: PiFlowerLotus,
    image: "/assets/namo-gange/vol2.png",
    price: 1100,
    features: ["Case support", "Most needed", "Mission fund", "General support"],
  },
  {
    id: "cremation",
    title: "Last-Rites Assistance",
    description: "Indicative contribution toward essential ritual materials and case-based support.",
    icon: FaFire,
    image: "/assets/namo-gange/vol3.png",
    price: 2100,
    badge: "MISSION NEED",
    features: ["Ritual support", "Guidance", "Materials", "Case care"],
  },
  {
    id: "ambulance",
    title: "Transport Support",
    description: "Indicative contribution toward ambulance or hearse-van coordination for verified cases.",
    icon: FaAmbulance,
    image: "/assets/namo-gange/vol4.png",
    price: 5100,
    features: ["Readiness", "Transport care", "Helpline support", "Coordination"],
  },
  {
    id: "annadan",
    title: "Family Relief Support",
    description: "Indicative contribution toward food, water and basic relief where verified need exists.",
    icon: FaUtensils,
    image: "/assets/namo-gange/vol5.png",
    price: 11000,
    features: ["Meal support", "Family relief", "Essentials", "Community care"],
  },
];

const FAQS = [
  {
    q: "Will I receive a receipt for my donation?",
    a: "Yes. A donation receipt is generated for every contribution and emailed to you — please keep it for your records.",
  },
  {
    q: "How is my donation used?",
    a: "Your selected amount is an indicative contribution toward programme activities. Actual utilisation may vary according to verified case requirements, availability and applicable local or legal requirements.",
  },
  {
    q: "Can I donate in memory of someone?",
    a: "Yes — add their name in the ‘Donate in memory of’ field and we will honour it respectfully in our records.",
  },
  {
    q: "Is my payment secure?",
    a: "Yes. Payments are processed through encrypted, secure payment gateways — your card and bank details are never stored on our servers.",
  },
  {
    q: "Can I set up a monthly donation?",
    a: "Yes — choose ‘Monthly’ while donating and our team will coordinate recurring contributions on your behalf.",
  },
];

const STATS = [
  { icon: FaHandHoldingHeart, value: "Verified", label: "Case Support" },
  { icon: FaMapMarkedAlt, value: "Delhi • Ghaziabad • Noida", label: "Launch Region" },
  { icon: FaUtensils, value: "Need-Based", label: "Relief Assistance" },
  { icon: FaHandsHelping, value: "Trust-Led", label: "Sewa Mission" },
];

function Donation() {
  const [selectedCause, setSelectedCause] = useState(CAUSES[0].id);
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pan: "",
    dedication: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const activeCause = CAUSES.find((c) => c.id === selectedCause) ?? CAUSES[0];
  const effectiveAmount = customAmount ? Number(customAmount) : activeCause.price;
  const impactNote =
    activeCause.id === "general"
      ? "Supports the General Sewa Fund wherever verified help is needed most"
      : activeCause.id === "cremation"
        ? "Supports essential last-rites assistance for eligible cases"
        : activeCause.id === "ambulance"
          ? "Supports transport coordination and emergency response readiness"
          : "Supports food, water and basic relief for verified families";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePackageSelect = (cause: Cause) => {
    setSelectedCause(cause.id);
    setCustomAmount("");
  };

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 7);
    setCustomAmount(value);
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", phone: "", pan: "", dedication: "" });
    setSelectedCause(CAUSES[0].id);
    setCustomAmount("");
    setIsAnonymous(false);
  };

  const completeDonation = async (donationId: string, payment: RazorpaySuccessResponse) => {
    setIsSubmitting(true);
    try {
      await api.post("/donations/verify", { donationId, ...payment });
      setSubmitStatus({
        type: "success",
        message: "🙏 Thank you for your generosity. Your contribution has been received.",
      });
      setShowSuccessPopup(true);
      resetForm();
    } catch (err) {
      setSubmitStatus({
        type: "error",
        message:
          err instanceof ApiRequestError
            ? err.message
            : "Payment went through but verification failed — please contact us with your payment details.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!effectiveAmount || effectiveAmount < 50) {
      setSubmitStatus({
        type: "error",
        message: "Please select an amount or enter a custom amount of at least ₹50.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const { donationId, order, subscriptionId, razorpayKeyId } = await api.post<{
        donationId: string;
        order?: { id: string; amount: number; currency: string };
        subscriptionId?: string;
        razorpayKeyId?: string;
      }>("/donations", {
        donorName: formData.name,
        donorEmail: formData.email,
        donorPhone: formData.phone,
        pan: formData.pan || undefined,
        dedication: formData.dedication || undefined,
        isAnonymous,
        cause: selectedCause,
        amount: effectiveAmount,
        frequency,
      });

      setIsSubmitting(false);

      await openRazorpayCheckout({
        key: razorpayKeyId ?? process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ?? "",
        amount: order?.amount,
        currency: order?.currency ?? "INR",
        order_id: order?.id,
        subscription_id: subscriptionId,
        name: "Moksha Sewa",
        description: `Donation — ${activeCause.title}`,
        prefill: { name: formData.name, email: formData.email, contact: formData.phone },
        theme: { color: "#8B6A3E" },
        handler: (payment) => {
          void completeDonation(donationId, payment);
        },
        modal: {
          ondismiss: () =>
            setSubmitStatus({
              type: "error",
              message: "Payment was not completed. You can try again anytime.",
            }),
        },
      });
    } catch (err) {
      setIsSubmitting(false);
      setSubmitStatus({
        type: "error",
        message: err instanceof ApiRequestError ? err.message : "Something went wrong. Please try again.",
      });
    }
  };

  const inputClass =
    "w-full rounded-lg border border-[#E4D5BE] bg-[#FBF8F3] px-3 py-3 text-sm text-[#2C1810] placeholder:text-[#A8937E] transition-all focus:border-[#C9A574] focus:outline-none focus:ring-2 focus:ring-[#C9A574]/40";

  const labelClass =
    "mb-1 block text-[14px] font-semibold uppercase tracking-[0.08em] text-[#4A3428]";

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FBF8F3] text-[#2C1810]">
      <Topbar />
      <Navbar />

      <main className="[&_a]:text-[max(16px,1em)] [&_button]:text-[max(16px,1em)] [&_input]:text-[max(16px,1em)] [&_label]:text-[max(16px,1em)] [&_p]:text-[max(16px,1em)] [&_select]:text-[max(16px,1em)] [&_span]:text-[max(16px,1em)] [&_textarea]:text-[max(16px,1em)]">
        {/* ============ HERO ============ */}
        <section className="relative h-[600px] overflow-hidden bg-[#F4EDE3]">
          <div className="absolute inset-0">
            <Image
              src="/hero-images/3.png"
              alt="Donate to Moksha Sewa"
              fill
              priority
              quality={100}
              sizes="100vw"
              className="scale-[1.02] object-cover"
            />
          </div>

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(247,240,231,0.98) 0%, rgba(247,240,231,0.93) 24%, rgba(247,240,231,0.62) 42%, rgba(247,240,231,0.20) 60%, rgba(247,240,231,0.02) 76%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/8 via-transparent to-transparent" />

          {/* Devanagari watermark — "Daan" (donation) */}
          <div className="pointer-events-none absolute -left-6 top-1/2 hidden -translate-y-[58%] select-none font-serif text-[280px] leading-none text-[#8B6A3E]/[0.07] lg:block">
            दान
          </div>

          <div className="relative mx-auto flex h-full w-full max-w-7xl items-center px-4 sm:px-6 xl:px-0">
            <div className="max-w-[560px] translate-y-6 lg:translate-y-10">
              <div className="mb-4 inline-flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B6A3E] text-white">
                  <PiFlowerLotus className="h-4 w-4" />
                </span>
                <span className="text-[14px] font-semibold uppercase tracking-[0.3em] text-[#8B6A3E]">
                  दान · A Namo Gange Trust Initiative
                </span>
              </div>

              <h1 className="whitespace-nowrap font-serif text-[30px] leading-none text-[#2C1810] sm:text-[44px] lg:text-[50px]">
                Support a <span className="text-[#8B6A3E]">Final Journey</span>
              </h1>

              {/* diya flourish */}
              <div className="mt-4 flex items-center gap-2">
                <span className="h-[2px] w-12 bg-[#8B6A3E]" />
                <span className="h-2 w-2 rotate-45 border border-[#8B6A3E] bg-[#C9A574]" />
                <span className="h-px w-20 bg-gradient-to-r from-[#C9A574] to-transparent" />
              </div>

              <p className="mt-5 max-w-[460px] text-sm leading-6 text-[#4F3A2D] sm:text-[15px]">
                Your contribution supports a humanitarian end-of-life mission
                for economically weaker families and legally authorised
                unclaimed cases.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
                {["Secure Payments", "Receipt Provided", "Verified Utilisation"].map(
                  (chip) => (
                    <span
                      key={chip}
                      className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#5F4630]"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#8B6A3E]/12">
                        <MdVerified className="h-3 w-3 text-[#8B6A3E]" />
                      </span>
                      {chip}
                    </span>
                  )
                )}
              </div>

              <a
                href="#donate-form"
                className="group mt-6 inline-flex items-center gap-2 rounded-lg bg-[#8B6A3E] px-5 py-2.5 text-[14px] font-semibold text-white shadow-md transition duration-300 hover:bg-[#73532F] hover:shadow-lg"
              >
                Donate Now
                <FaChevronRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          {/* floating impact card — bottom right */}
          <div className="group absolute bottom-24 right-16 hidden items-center gap-3 rounded-2xl border border-white/40 bg-[#2C1810]/70 px-4 py-3 text-white shadow-[0_16px_40px_rgba(44,24,16,0.35)] backdrop-blur-md lg:flex lg:right-24 xl:right-32">
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#C9A574] text-[#2C1810]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C9A574]/50" />
              <FaHandHoldingHeart className="relative h-4 w-4" />
            </span>
            <span>
              <span className="block text-[14px] uppercase tracking-[0.2em] text-[#E8D2AC]">
                Together, So Far
              </span>
              <span className="block font-serif text-sm">A Namo Gange Trust Initiative</span>
            </span>
          </div>
        </section>

        {/* ============ QUICK STATS — dark bar overlapping hero ============ */}
        <section className="w-full bg-gradient-to-r from-[#8B6A3E] via-[#9C794C] to-[#8B6A3E] py-1 shadow-md border-b border-[#73532F]">
          <div className="mx-auto grid max-w-[1600px] grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {STATS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`group/stat flex items-center justify-center gap-3 px-4 py-1.5 ${index > 0 ? "border-t border-white/20 sm:border-t-0 md:border-l" : ""
                    } ${index > 1 ? "sm:border-t sm:border-white/20 md:border-t-0" : ""}`}
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition-transform duration-300 group-hover/stat:scale-110 shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]">
                    <Icon className="h-4 w-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]" />
                  </div>
                  <div className="min-w-0 text-left">
                    <div
                      className="truncate whitespace-nowrap text-[17px] font-medium leading-none text-white lg:text-[19px] drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]"
                      style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                    >
                      {item.value}
                    </div>
                    <div className="mt-1 whitespace-nowrap text-[16px] font-medium uppercase tracking-[0.08em] text-white/90">
                      {item.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ============ SUPPORT PACKAGES — exact package selector layout ============ */}
        <section className="relative overflow-hidden bg-[#FBF8F3] pb-3 pt-4 lg:pb-4 lg:pt-4">
          {/* subtle corner mandala feel */}
          <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full border border-[#C9A574]/10" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-[#C9A574]/10" />

          <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 xl:px-0">
            <div className="mb-0 flex items-center justify-center gap-3 text-[16px] font-semibold uppercase tracking-[0.24em] text-[#8B6A3E]">
              <span className="h-px w-10 bg-[#C9A574]" />
              <span>ॐ Where Your Donation Goes ॐ</span>
              <span className="h-px w-10 bg-[#C9A574]" />
            </div>

            <h2 className="-mt-0.5 text-center font-serif text-[30px] leading-[1.02] text-[#2C1810] sm:text-[36px]">
              Support a <span className="text-[#A36B2B]">Final Journey</span>
            </h2>

            <p className="mx-auto mt-0 max-w-3xl text-center text-[13px] leading-5 text-[#6E5A4C] sm:text-[14px]">
              Amounts are indicative contributions toward programme activities; actual utilisation may vary according to verified case requirements.
            </p>

            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4 mt-5">
              {CAUSES.map((cause) => {
                const Icon = cause.icon;
                const isSelected = cause.id === selectedCause;

                return (
                  <button
                    key={cause.id}
                    type="button"
                    onClick={() => handlePackageSelect(cause)}
                    aria-pressed={isSelected}
                    className={`group relative overflow-visible rounded-[16px] border bg-[#FFFDF9] text-left shadow-[0_8px_20px_rgba(70,47,31,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(70,47,31,0.15)] ${isSelected
                      ? "border-[#B8792D] ring-2 ring-[#D9B681]/35"
                      : "border-[#E2C99F]"
                      }`}
                  >
                    {cause.badge && (
                      <span className="absolute left-1/2 top-0 z-30 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-[#B8782D] via-[#D6A24F] to-[#B8782D] px-3 py-0.5 text-[10px] font-semibold tracking-[0.08em] text-white shadow-md">
                        ★ {cause.badge} ★
                      </span>
                    )}

                    {/* package image */}
                    <div className="relative h-[205px] overflow-hidden rounded-t-[15px] sm:h-[215px]">
                      <Image
                        src={cause.image}
                        alt={cause.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/15 via-transparent to-transparent" />
                    </div>

                    {/* floating icon */}
                    <div className="absolute left-1/2 top-[205px] z-20 -translate-x-1/2 -translate-y-1/2 sm:top-[215px]">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D7A44E] bg-[#FFF8E9] text-[#B77325] shadow-[0_4px_12px_rgba(109,66,29,0.16)]">
                        <Icon className="h-4 w-4" />
                      </span>
                    </div>

                    <div className="flex min-h-[205px] flex-col px-3 pb-2.5 pt-6">
                      <h3 className="text-center font-serif text-[16px] font-semibold leading-tight text-[#2C1810]">
                        {cause.title}
                      </h3>

                      {/* price */}
                      <div className="mt-0.5 flex items-center justify-center gap-1.5">
                        <span className="h-px w-7 bg-[#C78C3B]/70" />
                        <span className="font-serif text-[20px] font-semibold leading-none text-[#B5742A]">
                          ₹ {cause.price.toLocaleString("en-IN")}
                        </span>
                        <span className="h-px w-7 bg-[#C78C3B]/70" />
                      </div>

                      <p className="mx-auto mt-1 min-h-[32px] max-w-[285px] text-center text-[10px] leading-3.5 text-[#5F5046] sm:text-[11px]">
                        {cause.description}
                      </p>

                      <div className="mt-1.5 grid grid-cols-2 gap-x-2 gap-y-1">
                        {cause.features.map((feature) => (
                          <span
                            key={feature}
                            className="inline-flex items-center gap-1 text-[9.5px] font-medium leading-3.5 text-[#5F5046] sm:text-[10px]"
                          >
                            <FaCheckCircle className="h-2.5 w-2.5 shrink-0 text-[#D18A24]" />
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto pt-1.5">
                        <div
                          className={`flex h-[34px] w-full items-center justify-center gap-1.5 rounded-lg border text-[12px] font-semibold transition ${isSelected
                            ? "border-[#B56C20] bg-gradient-to-r from-[#A75A1D] via-[#C67F2B] to-[#A75A1D] text-white shadow-md"
                            : "border-[#D9A35A] bg-[#FFFDF9] text-[#9A5B24] group-hover:bg-[#FFF5E7]"
                            }`}
                        >
                          <Icon className="h-4 w-4" />
                          {isSelected ? "Selected Amount" : "Choose Amount"}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============ FORM + IMPACT ============ */}
        <section id="donate-form" className="pb-6 lg:pb-8">
          <div className="mx-auto grid w-full max-w-7xl gap-2 px-4 sm:px-6 xl:px-0 lg:grid-cols-2">
            {/* -------- form card -------- */}
            <div className="relative overflow-hidden rounded-2xl border border-[#E6D6BF] bg-white p-6 shadow-[0_16px_42px_rgba(73,49,31,0.08)]">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#C9A574] to-transparent" />

              <div className="mb-4 mt-[160px] sm:mt-0">
                <div className="flex items-center gap-2 text-[16px] font-semibold uppercase tracking-[0.22em] text-[#8B6A3E]">
                  <span>Make a Donation</span>
                  <span className="h-px w-7 bg-[#C9A574]" />
                </div>
                <h3 className="mt-2 font-serif text-2xl text-[#2C1810]">
                  Your Support, <span className=" text-[#8B6A3E]">Their Dignity</span>
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-[#E6D6BF] bg-[#FBF8F3] px-2.5 py-1 text-[16px] font-semibold text-[#8B6A3E]">
                    <activeCause.icon className="h-3 w-3" />
                    Selected: {activeCause.title}
                  </div>
                  <div className="inline-flex items-center rounded-full bg-[#8B6A3E] px-3 py-1 text-[16px] font-semibold text-white">
                    ₹{activeCause.price.toLocaleString("en-IN")}
                  </div>
                </div>
              </div>

              {/* Floating QR Code */}
              <div className="absolute right-4 top-2 h-40 w-40 shrink-0 overflow-hidden rounded-xl border border-[#E6D6BF] shadow-sm">
                <Image
                  src="/assets/qr.jpeg"
                  alt="Donate QR"
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* frequency toggle */}
                <div>
                  <label className={labelClass}>Donation Frequency</label>
                  <div className="grid grid-cols-2 gap-2">
                    {(["once", "monthly"] as const).map((freq) => (
                      <button
                        key={freq}
                        type="button"
                        onClick={() => setFrequency(freq)}
                        className={`rounded-lg border px-3 py-2.5 text-sm font-semibold transition-all ${frequency === freq
                          ? "border-[#8B6A3E] bg-[#8B6A3E] text-white shadow-md"
                          : "border-[#E4D5BE] bg-[#FBF8F3] text-[#5F4630] hover:border-[#C9A574]"
                          }`}
                      >
                        {freq === "once" ? "One-Time" : "Monthly"}
                      </button>
                    ))}
                  </div>
                </div>

                {/* selected package price */}
                <div>
                  <label className={labelClass}>Donation Amount</label>
                  <div className="flex min-h-[48px] items-center justify-between rounded-lg border border-[#D7B98C] bg-[#FBF8F3] px-4 py-2.5">
                    <div className="flex items-center gap-2">
                      <activeCause.icon className="h-4 w-4 text-[#8B6A3E]" />
                      <span className="text-[13px] font-semibold text-[#4A3428]">
                        {activeCause.title}
                      </span>
                    </div>
                    <span className="font-serif text-[20px] font-semibold text-[#8B6A3E]">
                      ₹{activeCause.price.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <div className="mt-2">
                    <label className={labelClass}>Custom Amount (optional)</label>
                    <div className="relative">
                      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-[#A8937E]">
                        ₹
                      </span>
                      <input
                        type="text"
                        inputMode="numeric"
                        value={customAmount}
                        onChange={handleCustomAmount}
                        placeholder={`Enter amount or use ₹${activeCause.price.toLocaleString("en-IN")}`}
                        className={`${inputClass} pl-7`}
                      />
                    </div>
                    <p className="mt-1 text-[11px] text-[#8A7460]">
                      Leave blank to donate the selected suggested amount.
                    </p>
                  </div>
                </div>

                {/* donor details */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="col-span-2 sm:col-span-1">
                    <label className={labelClass}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className={labelClass}>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="you@example.com"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="col-span-2 sm:col-span-1">
                    <label className={labelClass}>PAN (optional, for receipt)</label>
                    <input
                      type="text"
                      name="pan"
                      value={formData.pan}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="ABCDE1234F"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className={labelClass}>Donate in Memory Of (optional)</label>
                    <input
                      type="text"
                      name="dedication"
                      value={formData.dedication}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="A loved one's name"
                    />
                  </div>
                </div>

                <label className="flex cursor-pointer items-center gap-2.5 text-[14px] text-[#5F4630]">
                  <input
                    type="checkbox"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="h-4 w-4 rounded border-[#E4D5BE] text-[#8B6A3E] focus:ring-[#C9A574]/40"
                  />
                  Keep my donation anonymous
                </label>

                {submitStatus.type && (
                  <div
                    className={`rounded-lg border p-3 text-sm font-medium ${submitStatus.type === "success"
                      ? "border-green-200 bg-green-50 text-green-700"
                      : "border-red-200 bg-red-50 text-red-700"
                      }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-2 rounded-lg bg-[#8B6A3E] px-4 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#73532F] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <FaHandHoldingHeart className="transition-transform duration-300 group-hover:scale-110" />
                      Donate {effectiveAmount > 0 ? `₹${effectiveAmount.toLocaleString("en-IN")}` : ""}{" "}
                      {frequency === "monthly" ? "Monthly" : "Now"}
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* -------- right column -------- */}
            <div className="space-y-1.5">
              {/* impact — dark card */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#3B2B21] to-[#2C1810] p-4 text-white shadow-[0_18px_48px_rgba(44,24,16,0.3)] sm:p-5">
                <span className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-[#C9A574] via-[#D9B681] to-[#C9A574]" />
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-[#C9A574]/15" />

                <div className="flex items-start gap-4">
                  <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C9A574] text-[#2C1810]">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C9A574]/40" />
                    <FaHandHoldingHeart className="relative h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-[16px] font-semibold uppercase tracking-[0.22em] text-[#D9B681]">
                      Your Impact
                    </div>
                    <h4 className="mt-1 font-serif text-xl">
                      {effectiveAmount > 0 ? (
                        <>
                          <span className=" text-[#D9B681]">
                            ₹{effectiveAmount.toLocaleString("en-IN")}
                          </span>{" "}
                          {frequency === "monthly" ? "every month" : "today"}
                        </>
                      ) : (
                        "Choose an amount to see your impact"
                      )}
                    </h4>
                    <p className="mt-1 text-sm leading-5 text-[#E8D2AC]">{impactNote}</p>
                  </div>
                </div>
              </div>

              {/* unified trust & info block */}
              <div className="rounded-2xl border border-[#E6D6BF] bg-white shadow-sm overflow-hidden">
                <div className="p-4 sm:p-5 space-y-4">
                  {/* Tax & Security */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#8B6A3E]/10 text-[#8B6A3E] font-serif font-semibold text-[14px]">
                        80G
                      </span>
                      <div>
                        <span className="block text-[14px] font-semibold uppercase tracking-[0.14em] text-[#8A7460]">Tax Receipt</span>
                        <span className="block text-[14px] text-[#2C1810] mt-0.5 leading-tight">Subject to applicable 80G approval.</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#8B6A3E]/10 text-[#8B6A3E]">
                        <FaShieldAlt className="h-4 w-4" />
                      </span>
                      <div>
                        <span className="block text-[14px] font-semibold uppercase tracking-[0.14em] text-[#8A7460]">Secure Payment</span>
                        <span className="block text-[14px] text-[#2C1810] mt-0.5 leading-tight">100% encrypted & safe.</span>
                      </div>
                    </div>
                  </div>

                  <div className="h-px w-full bg-[#E6D6BF]" />

                  {/* transparency & reassurance note */}
                  <div className="flex items-start gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#8B6A3E] text-white mt-0.5">
                      <PiFlowerLotus className="h-3.5 w-3.5" />
                    </span>
                    <p className="text-[14px] leading-[1.45] text-[#5F4A3D]">
                      <span className="font-serif text-[14px]  text-[#8B6A3E]">
                        Daan se badhkar koi punya nahi.
                      </span>
                      <br />
                      Moksha Sewa is an initiative of Namo Gange Trust. Donations are used for verified programme requirements.
                    </p>
                  </div>

                  <div className="h-px w-full bg-[#E6D6BF]" />

                  {/* Prefer Another Way */}
                  <div>
                    <p className="text-[14px] leading-5 text-[#7A685B]">
                      Have questions about corporate giving, or want to volunteer instead?
                    </p>
                    <Link
                      href="/contact"
                      className="group mt-1.5 inline-flex items-center gap-1 text-[14px] font-semibold text-[#8B6A3E] hover:underline"
                    >
                      Get in Touch
                      <FaChevronRight className="h-2 w-2 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* closing image */}
              <div className="relative h-[280px] w-full overflow-hidden rounded-2xl border border-[#E6D6BF] shadow-sm lg:h-[320px]">
                <Image
                  src="/assets/namo-gange/vol6.png"
                  alt="Moksha Sewa team helping community"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section className="border-t border-[#E9DCCB] bg-[#FBF7F0] py-8 lg:py-10">
          <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 xl:px-0">
            <div className="text-center">
              <p className="text-[14px] font-semibold uppercase tracking-[0.28em] text-[#8B6A3E] sm:text-[15px]">
                FAQs
              </p>
              <h2 className="mt-1 font-serif text-[28px] font-normal leading-tight text-[#2C1810] sm:text-[32px]">
                Donation <span className=" text-[#8B6A3E]">Questions</span>
              </h2>
            </div>

            <div className="mt-6 divide-y divide-[#E8DED2] border-y border-[#E8DED2]">
              {FAQS.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={item.q} className="bg-white/25">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex min-h-[52px] w-full items-center justify-between gap-5 px-3 py-3 text-left sm:min-h-[56px] sm:px-4"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm font-semibold text-[#2C1810] sm:text-[15px]">
                        {item.q}
                      </span>
                      <FaChevronDown
                        className={`h-3.5 w-3.5 shrink-0 text-[#8B6A3E] transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-3 pb-4 text-[14px] leading-5 text-[#6B584B] sm:px-4 sm:text-[15px]">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <SuccessPopup
        open={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
        title="Thank You for Your Generosity!"
        message="Your contribution has been received. A receipt has been emailed to you."
      />
    </div>
  );
}

export default Donation;
