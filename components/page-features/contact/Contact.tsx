"use client";
import React, { useState } from "react";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/ContactFooter";
import Image from "next/image";
import { trackEvent } from "@/lib/analytics";
import { enquiryApi } from "@/lib/enquiryApi";
import { ApiRequestError } from "@/lib/api";
import SuccessPopup from "@/components/common/SuccessPopup";
import { textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";

const pu = (px: number) => `calc(var(--u) * ${(px / 15.84).toFixed(3)})`;

const officeCards = [
  {
    title: ["Head Office", "Delhi–NCR"],
    sub: "(Ghaziabad, India)",
    left: 62,
    w: 360,
    icon: { src: "office-gate", iw: 296, ih: 296, x: 38, y: 5, w: 74 },
    textLeft: 130,
    textTop: 7.5,
    pinX: 41,
    pinTop: 23,
    bodyLeft: 73,
    addrTop: 15,
    addrLh: 20,
    address: ["Plot No. 12/29, Site II Industrial", "Area, Mohan Nagar, Ghaziabad –", "201007, Uttar Pradesh, India."],
    phoneY: 102,
    phones: ["+91 96549 00525", "+91 98102 47319"],
    mailY: 133,
    email: "info@mokshavoyage.vaidhyashala.in",
  },
  {
    title: ["Regional Office", "Visakhapatnam"],
    sub: "(Andhra Pradesh, India)",
    left: 444,
    w: 348,
    icon: { src: "office-temple", iw: 344, ih: 304, x: 30, y: 4, w: 86 },
    textLeft: 127,
    textTop: 6.5,
    pinX: 37,
    pinTop: 23,
    bodyLeft: 72,
    addrTop: 10,
    addrLh: 19,
    address: ["Door No. 36-46-51, 2nd Floor,", "Main Road, Kancharapalem,", "Visakhapatnam – 530008,", "Andhra Pradesh, India."],
    phoneY: 107,
    phones: ["+91 96549 00525"],
    mailY: 134,
    email: "info@mokshavoyage.vaidhyashala.in",
  },
  {
    title: ["Global Office", "London (UK)"],
    sub: "",
    left: 813,
    w: 350,
    icon: { src: "office-bridge", iw: 448, ih: 272, x: 15, y: 11, w: 112 },
    textLeft: 140,
    textTop: 14.5,
    pinX: 40,
    pinTop: 21,
    bodyLeft: 75,
    addrTop: 10,
    addrLh: 19,
    address: ["Namo Gange Wellness Ltd.", "6 Liddel Close, Luton,", "Bedfordshire, LU3 1TW,", "United Kingdom."],
    phoneY: 104,
    phones: ["+44 74248 78417"],
    mailY: 133,
    email: "uk@mokshavoyage.vaidhyashala.in",
  },
];

const locationOptions = ["Ghaziabad", "Delhi NCR", "Noida", "Other"];
const assistanceOptions = [
  "Last Rites & Cremation",
  "Transportation",
  "Guidance & Coordination",
  "Family Support",
  "Other",
];

function Contact() {
  const heroSection = useWebsiteSection("contact-hero");
  const formSection = useWebsiteSection("contact-form");

  const CONTACT = {
    helpline: { label: `+91 ${textOrFallback(heroSection?.phoneNumber, "9220147229", 20)}`, href: `tel:+91${textOrFallback(heroSection?.phoneNumber, "9220147229", 20).replace(/\D/g, "")}` },
    altPhone: { label: `+91 ${textOrFallback(heroSection?.altPhoneNumber, "6281482342", 20)}`, href: `tel:+91${textOrFallback(heroSection?.altPhoneNumber, "6281482342", 20).replace(/\D/g, "")}` },
    email: { label: textOrFallback(heroSection?.contactEmail, "info@mokshasewa.org", 50), href: `mailto:${textOrFallback(heroSection?.contactEmail, "info@mokshasewa.org", 50)}` },
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    assistanceType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const value =
      e.target.name === "phone"
        ? e.target.value.replace(/\D/g, "").slice(0, 10)
        : e.target.value;

    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const metaParts = [
      formData.assistanceType ? `Type of assistance: ${formData.assistanceType}` : "",
      formData.location ? `Location: ${formData.location}` : "",
    ].filter(Boolean);
    const composedMessage = metaParts.length
      ? `${metaParts.join(" | ")}\n\n${formData.message}`
      : formData.message;

    try {
      await enquiryApi.create({
        name: formData.name.trim(),
        phone: formData.phone,
        email: formData.email || undefined,
        message: composedMessage,
      });
      trackEvent("contact_form_submit", { form_name: "contact", status: "success" });
      setSubmitStatus({
        type: "success",
        message: "Message sent. Our team will get back to you shortly.",
      });
      setShowSuccessPopup(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        location: "",
        assistanceType: "",
        message: "",
      });
    } catch (err) {
      setSubmitStatus({
        type: "error",
        message:
          err instanceof ApiRequestError
            ? err.message
            : "Message could not be sent. Please try again, or call our helpline.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ---------------- shared class tokens ---------------- */
  const fieldWrap =
    "relative block h-[calc(var(--u)*2.9)] rounded-[calc(var(--u)*1)] border border-[#E6D9C9] bg-[#FFFDFA] shadow-[0_3px_7px_rgba(110,70,30,0.2)]";
  const fieldInput =
    "h-full w-full bg-transparent pl-[calc(var(--u)*3.85)] pr-[calc(var(--u)*1)] text-[calc(var(--u)*0.88)] text-[#3F3A36] outline-none placeholder:text-[#3F3A36]";

  const eyebrowClass =
    "inline-flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.16em] text-[#8B6A3E]";

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FBF8F3] text-[#2C1810]">
      <Topbar />
      <Navbar />

      <main>
        {/* ============================= HERO ============================= */}
        <section className="relative w-full overflow-hidden bg-[linear-gradient(180deg,transparent_84%,#FCEAD4_100%),linear-gradient(90deg,#FEF5EC_0%,#FCEADC_38%)] pt-[113px] [--u:11px] sm:[--u:13px] lg:h-[calc(var(--u)*41+113px)] lg:[--u:min(1vw,16px)]">
          <div
            className="absolute inset-0 lg:inset-x-auto lg:right-0 lg:top-[113px] lg:h-[calc(var(--u)*31.3)] lg:w-[calc(var(--u)*61.7)]"
            style={{ maskImage: "linear-gradient(to right, transparent 0%, #000 22%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, #000 22%)" }}
          >
            <Image
              src="/assets/contact/contact-hero-photo-2.png"
              alt="Haridwar ghat at sunset"
              fill
              priority
              fetchPriority="high"
              sizes="(min-width: 1024px) 62vw, 100vw"
              className="object-cover object-right"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#FDF4EB]/95 via-[#FDF4EB]/80 to-[#FDF4EB]/35 lg:hidden" />

          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-[calc(var(--u)*8.02)] bg-[url('/assets/contact/hero-wave-bottom-10.png')] bg-[length:100%_100%]"
            aria-hidden
          />

          <div className="relative z-10 px-4 pt-[calc(var(--u)*3.9)] sm:px-6 lg:pl-[calc(var(--u)*5)] lg:pr-0">
            <div className="flex items-center gap-[calc(var(--u)*1.2)] text-[calc(var(--u)*1.2)] font-bold uppercase leading-[calc(var(--u)*1.5)] tracking-[0.22em] text-[#2A0A02]">
              Get in Touch
              <span className="h-px w-[calc(var(--u)*6)] bg-[#D1954C]" />
            </div>

            <h1 className="mt-[calc(var(--u)*0.65)] font-serif text-[calc(var(--u)*5)] font-bold leading-none tracking-[0.01em] text-[#2F0E03]">
              Contact <span className="text-[#F09A0B]">Us</span>
            </h1>

            <p className="mt-[calc(var(--u)*0.95)] text-[calc(var(--u)*1.65)] font-normal tracking-[0.03em] leading-[calc(var(--u)*2.24)] text-[#34150A]">
              We&apos;re here to support individuals<br className="hidden lg:block" />{" "}
              and families in need with free<br className="hidden lg:block" />{" "}
              last-rites assistance, guidance<br className="hidden lg:block" />{" "}
              and coordination, with dignity and care.
            </p>

            <div className="mt-[calc(var(--u)*1.9)] flex flex-wrap items-center gap-[calc(var(--u)*1.33)]">
              <a
                href={CONTACT.helpline.href}
                className="flex h-[calc(var(--u)*4.8)] w-[calc(var(--u)*17.6)] items-center gap-[calc(var(--u)*0.75)] rounded-[calc(var(--u)*0.95)] bg-gradient-to-b from-[#833B00] to-[#5F2500] pl-[calc(var(--u)*1.25)] text-white shadow-[0_3px_8px_rgba(95,37,0,0.2)] transition hover:brightness-110"
              >
                <Image src="/assets/contact/icons/phone-white.png" alt="" width={184} height={176} className="h-auto w-[calc(var(--u)*2.9)]" />
                <span className="flex flex-col leading-[1.25]">
                  <span className="text-[calc(var(--u)*1.22)] font-semibold">Call Helpline</span>
                  <span className="whitespace-nowrap text-[calc(var(--u)*1.34)] font-bold">
                    {CONTACT.helpline.label.replace(/^\+91\s*/, "")} <span className="text-[calc(var(--u)*1.0)] font-medium">(24×7)</span>
                  </span>
                </span>
              </a>
              <a
                href="#contact-form"
                className="flex h-[calc(var(--u)*4.8)] w-[calc(var(--u)*17.8)] items-center gap-[calc(var(--u)*0.7)] rounded-[calc(var(--u)*0.95)] border border-[#D9C4AD] bg-white pl-[calc(var(--u)*1)] pr-[calc(var(--u)*1)] text-[#280501] shadow-[0_2px_6px_rgba(95,37,0,0.08)] transition hover:bg-[#FFF8F0]"
              >
                <Image src="/assets/contact/icons/calendar.png" alt="" width={200} height={184} className="h-auto w-[calc(var(--u)*3.15)]" />
                <span className="flex flex-1 flex-col leading-[1.25]">
                  <span className="whitespace-nowrap text-[calc(var(--u)*1.22)] font-bold">Request Sewa</span>
                  <span className="whitespace-nowrap text-[calc(var(--u)*1.1)] font-medium">(Free Assistance)</span>
                </span>
                <Image src="/assets/contact/icons/arrow-orange.png" alt="" width={152} height={128} className="h-auto w-[calc(var(--u)*2.4)]" />
              </a>
            </div>
          </div>

          <div className="relative z-10 mx-4 mb-[calc(var(--u)*7)] mt-[calc(var(--u)*2.5)] grid grid-cols-2 gap-y-4 rounded-[calc(var(--u)*2.6)] border border-white/70 bg-[#FEF1E5] py-4 shadow-none sm:mx-6 lg:absolute lg:left-[calc(var(--u)*3.9)] lg:top-[calc(var(--u)*31.25+113px)] lg:m-0 lg:h-[calc(var(--u)*6.1)] lg:w-[calc(var(--u)*91.7)] lg:grid-cols-4 lg:gap-y-0 lg:py-0">
            {[
              { src: "family-support", w: 5.2, h: 232, iw: 328, label: <>Family Support</> },
              { src: "lotus", w: 5.05, h: 240, iw: 320, label: <>Ritual &amp; Cremation<br />Assistance</> },
              { src: "truck", w: 4.9, h: 208, iw: 312, label: <>Respectful<br />Transportation</> },
              { src: "headset", w: 4.4, h: 248, iw: 280, label: <>Guidance &amp;<br />Coordination</> },
            ].map((item, i) => (
              <div
                key={item.src}
                className={`relative flex items-center justify-center gap-[calc(var(--u)*1.5)] px-2 ${i > 0 ? "lg:before:absolute lg:before:left-0 lg:before:top-1/2 lg:before:h-[calc(var(--u)*3.4)] lg:before:w-px lg:before:-translate-y-1/2 lg:before:bg-[#C9A27A]" : ""} ${i % 2 === 1 ? "border-l border-[#C9A27A]/60 lg:border-l-0" : ""}`}
              >
                <Image
                  src={`/assets/contact/icons/${item.src}.png`}
                  alt=""
                  width={item.iw}
                  height={item.h}
                  className="h-auto w-[calc(var(--u)*3.6)] lg:w-[calc(var(--u)*var(--w))]"
                  style={{ "--w": item.w } as React.CSSProperties}
                />
                <span className="text-[calc(var(--u)*1.2)] font-bold leading-[1.3] text-[#2C0A02] lg:text-[calc(var(--u)*1.12)] lg:leading-[calc(var(--u)*1.55)]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ================= WE'RE HERE TO SUPPORT YOU ================= */}
        <section
          id="contact-form"
          className="relative scroll-mt-24 overflow-hidden bg-[radial-gradient(ellipse_14%_40%_at_100%_18%,#F7E5D1,transparent),radial-gradient(ellipse_16%_16%_at_0%_100%,#FCE6CE,transparent),linear-gradient(90deg,#FFF8F0_0%,#FDF6EE_60%,#FBF0E5_100%)] px-4 pb-[calc(var(--u)*8)] pt-10 [--u:14px] sm:px-6 sm:[--u:15px] lg:h-[calc(var(--u)*50)] lg:p-0 lg:[--u:min(1vw,16px)]"
        >
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[calc(var(--u)*2.4)] bg-[url('/assets/contact/support-wave-bottom.png')] bg-[length:100%_100%]" aria-hidden />

          <div className="lg:relative lg:mx-auto lg:h-full lg:w-[calc(var(--u)*100)]">

          <div
            className="pointer-events-none absolute left-[calc(var(--u)*31.6)] top-0 hidden h-[calc(var(--u)*40.5)] w-[calc(var(--u)*68.4)] lg:block"
            style={{ maskImage: "linear-gradient(to right, transparent 0%, #000 6%)", WebkitMaskImage: "linear-gradient(to right, transparent 0%, #000 6%)" }}
          >
            <Image src="/assets/contact/support-photo-3.png" alt="Moksha Sewa volunteer comforting an elderly woman" fill sizes="70vw" className="object-fill" />
          </div>

          <div className="relative z-10 lg:absolute lg:left-[calc(var(--u)*4.67)] lg:top-[calc(var(--u)*3)]">
            <div className="flex items-center gap-[calc(var(--u)*1.6)] text-[calc(var(--u)*1.1)] font-bold uppercase leading-[calc(var(--u)*1.5)] tracking-[0.12em] text-[#2A0A02]">
              We&apos;re Here to Help
              <span className="h-px w-[calc(var(--u)*6)] bg-[#C79A57]" />
            </div>
            <h2 className="mt-[calc(var(--u)*1.24)] font-serif text-[calc(var(--u)*3.5)] font-bold leading-[calc(var(--u)*3.47)] tracking-[0.02em] text-[#3A1305]">
              We&apos;re Here to<br />
              <span className="text-[#C9780A]">Support You</span>
            </h2>
            <p className="mt-[calc(var(--u)*1.3)] text-[calc(var(--u)*1.07)] leading-[calc(var(--u)*1.55)] tracking-[0.005em] text-[#2B1D17]">
              Whether you need immediate assistance, guidance<br className="hidden lg:block" />{" "}
              on our services, or support for a loved one, our team<br className="hidden lg:block" />{" "}
              is available 24 × 7 to help you and your family<br className="hidden lg:block" />{" "}
              with care and compassion.
            </p>

            <div className="mt-[calc(var(--u)*1)] flex flex-col gap-[calc(var(--u)*1.2)]">
              {[
                { src: "hand-heart", w: 3.4, iw: 216, ih: 208, title: "Compassionate Support", lines: ["Sensitivity, dignity and care", "for every individual."] },
                { src: "shield-check", w: 3.0, iw: 192, ih: 224, title: "Trusted & Transparent", lines: ["Clear information and ethical", "processes at every step."] },
                { src: "users-group", w: 3.5, iw: 224, ih: 192, title: "Local Assistance", lines: ["On-ground support and coordination", "in your area."] },
              ].map((p) => (
                <div key={p.src} className="flex items-center gap-[calc(var(--u)*2)]">
                  <span className="flex h-[calc(var(--u)*5.18)] w-[calc(var(--u)*5.18)] shrink-0 items-center justify-center rounded-full bg-[#FEE9CF]">
                    <Image src={`/assets/contact/icons/${p.src}.png`} alt="" width={p.iw} height={p.ih} className="h-auto" style={{ width: `calc(var(--u) * ${p.w})` }} />
                  </span>
                  <span>
                    <span className="block text-[calc(var(--u)*1.33)] font-bold leading-[calc(var(--u)*1.7)] text-[#3A0F05]">{p.title}</span>
                    <span className="block text-[calc(var(--u)*1.07)] leading-[calc(var(--u)*1.52)] text-[#2B1D17]">
                      {p.lines[0]}<br className="hidden lg:block" />{" "}{p.lines[1]}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 mx-auto my-6 aspect-[468/642] w-full max-w-[320px] overflow-hidden rounded-3xl lg:hidden">
            <Image src="/assets/contact/support-photo-3.png" alt="Moksha Sewa volunteer comforting an elderly woman" width={1084} height={642} className="absolute left-0 top-0 h-full w-auto max-w-none" />
          </div>

          <form
            onSubmit={handleSubmit}
            className="relative z-10 rounded-[calc(var(--u)*2.45)] border border-white/70 bg-gradient-to-b from-[#FEFDFB] via-[#FDFCF8] to-[#FEF6EE] p-[calc(var(--u)*1.77)] shadow-[0_0_0_1px_rgba(170,130,90,0.16),0_6px_16px_rgba(160,100,50,0.13),0_22px_44px_rgba(160,100,50,0.10)] lg:absolute lg:left-[calc(var(--u)*61.2)] lg:top-[calc(var(--u)*2.9)] lg:h-[calc(var(--u)*35.5)] lg:w-[calc(var(--u)*36.5)] lg:px-[calc(var(--u)*1.77)] lg:pb-0 lg:pt-[calc(var(--u)*2)]"
          >
            <div className="flex items-center gap-[calc(var(--u)*1.6)] pl-[calc(var(--u)*0.9)] text-[calc(var(--u)*1.1)] font-bold uppercase leading-[calc(var(--u)*1.5)] tracking-[0.15em] text-[#2A0A02]">
              Send Us an Enquiry
              <span className="h-px w-[calc(var(--u)*10.2)] bg-[#C79A57]" />
            </div>
            <h3 className="mt-[calc(var(--u)*0.7)] pl-[calc(var(--u)*0.9)] font-serif text-[calc(var(--u)*2.75)] font-bold leading-[calc(var(--u)*2.75)] text-[#3A1305]">
              Get in Touch with Us
            </h3>
            <p className="mt-[calc(var(--u)*0.7)] pl-[calc(var(--u)*0.9)] text-[calc(var(--u)*1.07)] leading-[calc(var(--u)*1.5)] text-[#2B1D17]">
              Fill in the form below and our team will get back to you shortly.
            </p>

            <div className="mt-[calc(var(--u)*1.2)] grid gap-[calc(var(--u)*0.9)]">
              <div className="grid gap-[calc(var(--u)*1)] sm:grid-cols-2">
                <label className={fieldWrap}>
                  <Image src="/assets/contact/icons/field-user.png" alt="" width={120} height={120} className="pointer-events-none absolute left-[calc(var(--u)*1.2)] top-1/2 h-auto w-[calc(var(--u)*1.55)] -translate-y-1/2" />
                  <input name="name" value={formData.name} onChange={handleChange} required placeholder="Your Name *" className={fieldInput} />
                </label>
                <label className={fieldWrap}>
                  <Image src="/assets/contact/icons/field-phone.png" alt="" width={120} height={120} className="pointer-events-none absolute left-[calc(var(--u)*1.2)] top-1/2 h-auto w-[calc(var(--u)*1.55)] -translate-y-1/2" />
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    inputMode="numeric"
                    maxLength={10}
                    pattern="[6-9][0-9]{9}"
                    title="Enter a valid 10-digit mobile number"
                    placeholder="Mobile Number *"
                    className={fieldInput}
                  />
                </label>
              </div>

              <div className="grid gap-[calc(var(--u)*1)] sm:grid-cols-2">
                <label className={fieldWrap}>
                  <Image src="/assets/contact/icons/field-mail.png" alt="" width={128} height={104} className="pointer-events-none absolute left-[calc(var(--u)*1.2)] top-1/2 h-auto w-[calc(var(--u)*1.65)] -translate-y-1/2" />
                  <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email Address (Optional)" className={fieldInput} />
                </label>
                <label className={fieldWrap}>
                  <Image src="/assets/contact/icons/field-pin.png" alt="" width={112} height={120} className="pointer-events-none absolute left-[calc(var(--u)*1.2)] top-1/2 h-auto w-[calc(var(--u)*1.45)] -translate-y-1/2" />
                  <select name="location" value={formData.location} onChange={handleChange} required className={`${fieldInput} appearance-none !pr-[calc(var(--u)*3)]`}>
                    <option value="" disabled>Your Location *</option>
                    {locationOptions.map((loc) => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                  <Image src="/assets/contact/icons/chevron-down.png" alt="" width={88} height={60} className="pointer-events-none absolute right-[calc(var(--u)*1.35)] top-1/2 h-auto w-[calc(var(--u)*1.35)] -translate-y-1/2" />
                </label>
              </div>

              <label className={fieldWrap}>
                <Image src="/assets/contact/icons/field-list.png" alt="" width={128} height={104} className="pointer-events-none absolute left-[calc(var(--u)*1.2)] top-1/2 h-auto w-[calc(var(--u)*1.65)] -translate-y-1/2" />
                <select name="assistanceType" value={formData.assistanceType} onChange={handleChange} required className={`${fieldInput} appearance-none !pr-[calc(var(--u)*3)]`}>
                  <option value="" disabled>Type of Assistance *</option>
                  {assistanceOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                <Image src="/assets/contact/icons/chevron-down.png" alt="" width={88} height={60} className="pointer-events-none absolute right-[calc(var(--u)*1.35)] top-1/2 h-auto w-[calc(var(--u)*1.35)] -translate-y-1/2" />
              </label>

              <label className={`${fieldWrap} !h-[calc(var(--u)*6.8)]`}>
                <Image src="/assets/contact/icons/field-chat.png" alt="" width={128} height={120} className="pointer-events-none absolute left-[calc(var(--u)*1.2)] top-[calc(var(--u)*1.1)] h-auto w-[calc(var(--u)*1.65)]" />
                <svg viewBox="0 0 12 12" className="pointer-events-none absolute bottom-[calc(var(--u)*0.5)] right-[calc(var(--u)*0.5)] h-[calc(var(--u)*0.9)] w-[calc(var(--u)*0.9)]" aria-hidden>
                  <path d="M11 2 L2 11 M11 6 L6 11" stroke="#8C7B6B" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                </svg>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message *"
                  className="h-full w-full resize-none bg-transparent pl-[calc(var(--u)*4)] pr-3 pt-[calc(var(--u)*1.05)] text-[calc(var(--u)*0.88)] text-[#3F3A36] outline-none placeholder:text-[#3F3A36]"
                />
              </label>

              {submitStatus.type && (
                <div
                  role="status"
                  className={`rounded-xl border px-3 py-2 text-[13px] font-medium ${submitStatus.type === "success"
                    ? "border-[#BBD9BE] bg-[#F1F8F1] text-[#3F6B45]"
                    : "border-[#E8C4BC] bg-[#FCF2F0] text-[#9C4A38]"
                    }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-[calc(var(--u)*0.5)] flex h-[calc(var(--u)*3.9)] w-full items-center justify-center gap-[calc(var(--u)*1.2)] rounded-full bg-gradient-to-b from-[#9A471A] via-[#873A10] to-[#6E2606] text-[calc(var(--u)*1.45)] font-semibold text-white shadow-[0_6px_14px_rgba(110,38,6,0.2)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                ) : (
                  <>
                    <Image src="/assets/contact/icons/paper-plane.png" alt="" width={176} height={152} className="h-auto w-[calc(var(--u)*2.2)]" />
                    Send Enquiry
                    <Image src="/assets/contact/icons/arrow-right-white.png" alt="" width={136} height={80} className="ml-[calc(var(--u)*0.4)] h-auto w-[calc(var(--u)*1.8)]" />
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="relative z-10 mt-8 grid grid-cols-1 gap-5 rounded-[calc(var(--u)*3.44)] border border-white/80 bg-[#FFF8F0]/90 p-5 shadow-[0_6px_20px_rgba(150,90,30,0.08)] lg:absolute lg:left-[calc(var(--u)*7.5)] lg:top-[calc(var(--u)*40.6)] lg:m-0 lg:h-[calc(var(--u)*6.9)] lg:w-[calc(var(--u)*85.7)] lg:grid-cols-[400fr_388fr_570fr] lg:gap-0 lg:p-0">
            <Image src="/assets/contact/icons/lotus-faint.png" alt="" width={640} height={368} className="pointer-events-none absolute bottom-[calc(var(--u)*0.4)] right-[calc(var(--u)*1.5)] hidden h-auto w-[calc(var(--u)*10)] lg:block" />
            <a href={CONTACT.helpline.href} className="flex items-center gap-[calc(var(--u)*1.6)] lg:pl-[calc(var(--u)*3)]">
              <span className="flex h-[calc(var(--u)*4.4)] w-[calc(var(--u)*4.4)] shrink-0 items-center justify-center rounded-full bg-[#FEEBD6]">
                <Image src="/assets/contact/icons/strip-phone.png" alt="" width={168} height={160} className="h-auto w-[calc(var(--u)*2.65)]" />
              </span>
              <span>
                <span className="block text-[calc(var(--u)*1.17)] font-bold leading-[calc(var(--u)*1.6)] text-[#2A0A02]">Call Our Helpline</span>
                <span className="block text-[calc(var(--u)*1.08)] leading-[calc(var(--u)*1.6)] text-[#2B1D17]">24 × 7 Support</span>
                <span className="block text-[calc(var(--u)*1.9)] font-bold leading-[calc(var(--u)*2.1)] text-[#5B1A05]">{CONTACT.helpline.label.replace(/^\+91\s*/, "")}</span>
              </span>
            </a>
            <a href={CONTACT.email.href} className="relative flex items-center gap-[calc(var(--u)*1.2)] lg:pl-[calc(var(--u)*2.85)] lg:before:absolute lg:before:left-0 lg:before:top-1/2 lg:before:h-[calc(var(--u)*3.7)] lg:before:w-px lg:before:-translate-y-1/2 lg:before:bg-[#B79A82]">
              <span className="flex h-[calc(var(--u)*4.4)] w-[calc(var(--u)*4.4)] shrink-0 items-center justify-center rounded-full bg-[#FEEBD6]">
                <Image src="/assets/contact/icons/strip-mail.png" alt="" width={184} height={120} className="h-auto w-[calc(var(--u)*2.9)]" />
              </span>
              <span>
                <span className="block text-[calc(var(--u)*1.17)] font-bold leading-[calc(var(--u)*1.6)] text-[#2A0A02]">Email Us</span>
                <span className="block text-[calc(var(--u)*1.08)] leading-[calc(var(--u)*1.6)] text-[#2B1D17]">{CONTACT.email.label}</span>
              </span>
            </a>
            <div className="relative flex items-center gap-[calc(var(--u)*1.6)] lg:pl-[calc(var(--u)*2.45)] lg:before:absolute lg:before:left-0 lg:before:top-1/2 lg:before:h-[calc(var(--u)*3.7)] lg:before:w-px lg:before:-translate-y-1/2 lg:before:bg-[#B79A82]">
              <span className="flex h-[calc(var(--u)*4.4)] w-[calc(var(--u)*4.4)] shrink-0 items-center justify-center rounded-full bg-[#FEEBD6]">
                <Image src="/assets/contact/icons/strip-clock.png" alt="" width={192} height={192} className="h-auto w-[calc(var(--u)*3)]" />
              </span>
              <span>
                <span className="block text-[calc(var(--u)*1.17)] font-bold leading-[calc(var(--u)*1.6)] text-[#2A0A02]">Office Hours</span>
                <span className="block text-[calc(var(--u)*1.08)] leading-[calc(var(--u)*1.6)] text-[#2B1D17]">Mon – Sat: 9:00 AM – 7:00 PM</span>
                <span className="block text-[calc(var(--u)*1.08)] leading-[calc(var(--u)*1.6)] text-[#2B1D17]">Sun: By Appointment</span>
              </span>
            </div>
          </div>
          </div>
        </section>

        {/* ======================= OFFICES & GLOBAL PRESENCE ====================== */}
        <section className="relative overflow-hidden bg-[linear-gradient(90deg,#FDF4EA_0%,#FCF7F1_35%,#FEFAF6_100%)] px-4 pb-[calc(var(--u)*5)] pt-10 [--u:14px] sm:px-6 sm:[--u:15px] lg:h-[calc(var(--u)*50)] lg:p-0 lg:[--u:min(1vw,16px)]">
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[calc(var(--u)*3.16)] bg-[url('/assets/contact/offices-wave-bottom.png')] bg-[length:100%_100%]" aria-hidden />

          <div className="lg:relative lg:mx-auto lg:h-full lg:w-[calc(var(--u)*100)]">
            <div
              className="pointer-events-none absolute left-[calc(var(--u)*63.1)] top-0 hidden h-[calc(var(--u)*41)] w-[calc(var(--u)*36.9)] lg:block"
            >
              <Image src="/assets/contact/offices-photo-2.png" alt="Ganga ghat at sunset" fill sizes="40vw" className="object-fill" />
            </div>
            <Image
              src="/assets/contact/lotus-watermark-2.png"
              alt=""
              width={980}
              height={540}
              className="pointer-events-none absolute left-[calc(var(--u)*46.1)] top-[calc(var(--u)*5.8)] hidden h-auto w-[calc(var(--u)*15.5)] opacity-50 lg:block"
            />

            <div className="relative z-10 lg:absolute lg:left-[calc(var(--u)*3.79)] lg:top-[calc(var(--u)*2.23)]">
              <div className="flex items-center gap-[calc(var(--u)*1)] text-[calc(var(--u)*1.3)] font-bold uppercase leading-[calc(var(--u)*1.6)] tracking-[0.12em] lg:tracking-[0.19em] text-[#2A0A02]">
                Our Offices &amp; Global Presence
                <span className="h-px w-[calc(var(--u)*6.25)] bg-[#D37515]" />
              </div>
              <h2 className="mt-[calc(var(--u)*1)] font-serif text-[calc(var(--u)*2.7)] font-bold leading-[1.2] tracking-[0.005em] lg:text-[calc(var(--u)*3.65)] lg:leading-[calc(var(--u)*3.85)] text-[#2A0A02]">
                Serving Families, Across<br />
                <span className="text-[#DF7200]">India <span style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 700 }}>&amp;</span> the UK</span>
              </h2>
              <p className="ml-[calc(var(--u)*0.3)] mt-[calc(var(--u)*0.47)] text-[calc(var(--u)*1.22)] leading-[calc(var(--u)*1.64)] tracking-[0.045em] text-[#2B1D17]">
                Our offices ensure timely support, coordination and assistance<br className="hidden lg:block" />{" "}
                for families in India and internationally.
              </p>
            </div>

            <div className="relative z-10 mt-8 flex flex-col items-center gap-5 lg:mt-0 lg:block">
              {officeCards.map((c) => (
                <article
                  key={c.title[0]}
                  className="relative h-[calc(var(--u)*16.6)] w-[var(--w)] lg:absolute lg:left-[var(--l)] lg:top-[calc(var(--u)*18.1)]"
                  style={{ "--w": pu(c.w), "--l": pu(c.left) } as React.CSSProperties}
                >
                  <div className="absolute inset-0 rounded-[calc(var(--u)*1.15)] shadow-[0_12px_30px_rgba(120,70,30,0.14),0_2px_6px_rgba(120,70,30,0.08)]" />
                  <div
                    className="absolute inset-x-0 top-0 h-[calc(var(--u)*6.6)] rounded-t-[calc(var(--u)*1.15)]"
                    style={{ background: "linear-gradient(135deg,#7E3A12 0%,#6B2F0A 58%,#5C2A10 100%)" }}
                  >
                    <Image
                      src={`/assets/contact/${c.icon.src}.png`}
                      alt=""
                      width={c.icon.iw}
                      height={c.icon.ih}
                      className="absolute h-auto"
                      style={{ left: pu(c.icon.x), top: pu(c.icon.y), width: pu(c.icon.w) }}
                    />
                    <div className="absolute" style={{ left: pu(c.textLeft), top: pu(c.textTop) }}>
                      {c.title.map((line) => (
                        <div key={line} className="whitespace-nowrap text-[calc(var(--u)*1.2)] font-bold leading-[calc(var(--u)*1.58)] text-[#FFF4E6]">
                          {line}
                        </div>
                      ))}
                      {c.sub && (
                        <div className="whitespace-nowrap text-[calc(var(--u)*0.95)] leading-[calc(var(--u)*1.4)] text-[#F3DDC4]">{c.sub}</div>
                      )}
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 top-[calc(var(--u)*5.43)] rounded-[calc(var(--u)*1.15)] bg-[#FDFCF8]">
                    <Image src="/assets/contact/office-pin.png" alt="" width={104} height={112} className="absolute h-auto w-[calc(var(--u)*1.3)]" style={{ left: pu(c.pinX - 10), top: pu(c.pinTop) }} />
                    <p className="absolute whitespace-nowrap text-[calc(var(--u)*1)] text-[#1E1410]" style={{ left: pu(c.bodyLeft), top: pu(c.addrTop), lineHeight: pu(c.addrLh) }}>
                      {c.address.map((line, i) => (
                        <span key={line}>
                          {i > 0 && <br />}
                          {line}
                        </span>
                      ))}
                    </p>
                    <Image src="/assets/contact/office-phone.png" alt="" width={120} height={112} className="absolute h-auto w-[calc(var(--u)*1.5)]" style={{ left: pu(c.pinX - 12), top: pu(c.phoneY - 12) }} />
                    <div className="absolute flex items-center whitespace-nowrap text-[calc(var(--u)*0.94)] text-[#1E1410]" style={{ left: pu(c.bodyLeft), top: pu(c.phoneY - 11) }}>
                      {c.phones.map((p, i) => (
                        <React.Fragment key={p}>
                          {i > 0 && <span className="mx-[calc(var(--u)*0.7)] h-[calc(var(--u)*1)] w-[2px] bg-[#E8A23C]" />}
                          <a href={`tel:${p.replace(/\s/g, "")}`} className="hover:text-[#C96822]">{p}</a>
                        </React.Fragment>
                      ))}
                    </div>
                    <Image src="/assets/contact/office-mail.png" alt="" width={120} height={96} className="absolute h-auto w-[calc(var(--u)*1.5)]" style={{ left: pu(c.pinX - 12), top: pu(c.mailY - 9) }} />
                    <a href={`mailto:${c.email}`} className="absolute whitespace-nowrap text-[calc(var(--u)*0.94)] text-[#1E1410] hover:text-[#C96822]" style={{ left: pu(c.bodyLeft), top: pu(c.mailY - 11) }}>
                      {c.email}
                    </a>
                    <span className="absolute inset-x-[calc(var(--u)*1.45)] bottom-[calc(var(--u)*0.5)] h-[calc(var(--u)*0.2)] rounded-full bg-gradient-to-r from-[#F0AA3A] via-[#E9A02A] to-[#F5D9A6]" />
                  </div>
                </article>
              ))}
            </div>

            <div className="relative z-10 mt-6 flex flex-col gap-4 rounded-[calc(var(--u)*3.2)] border border-white/80 bg-[linear-gradient(90deg,rgba(255,252,248,0.96)_0%,rgba(254,248,241,0.95)_60%,rgba(254,248,241,0.45)_100%)] p-5 shadow-[0_8px_24px_rgba(150,90,30,0.08)] lg:absolute lg:left-[calc(var(--u)*3.8)] lg:top-[calc(var(--u)*36.5)] lg:m-0 lg:block lg:h-[calc(var(--u)*10.2)] lg:w-[calc(var(--u)*92.2)] lg:p-0">
              <div className="flex items-center gap-[calc(var(--u)*1.4)] lg:contents">
                <Image src="/assets/contact/presence-globe.png" alt="" width={336} height={320} className="h-auto w-[calc(var(--u)*5.3)] lg:absolute lg:left-[calc(var(--u)*2.15)] lg:top-[calc(var(--u)*2.7)]" />
                <span className="h-[calc(var(--u)*4.5)] w-px bg-[#C9824F] lg:absolute lg:left-[calc(var(--u)*8.7)] lg:top-[calc(var(--u)*3)]" />
                <h3 className="font-serif text-[calc(var(--u)*2.4)] font-bold leading-[calc(var(--u)*2.5)] text-[#2A0A02] lg:absolute lg:left-[calc(var(--u)*10.4)] lg:top-[calc(var(--u)*2.66)]">
                  Our Presence<br />at a Glance
                </h3>
              </div>

              <div className="relative w-full [container-type:inline-size] lg:absolute lg:left-[calc(var(--u)*28.1)] lg:top-[calc(var(--u)*0.44)] lg:w-[calc(var(--u)*48)]" style={{ aspectRatio: "760 / 153" }}>
                <Image src="/assets/contact/presence-map-2.png" alt="Map showing offices in London, Delhi-NCR and Visakhapatnam" fill sizes="50vw" className="object-fill" />
                {[
                  { x: 169, y: 20, w: 128, h: 38, lines: ["London (UK)"] },
                  { x: 537, y: 14, w: 136, h: 53, lines: ["Delhi–NCR", "(Ghaziabad)"] },
                  { x: 553, y: 87, w: 167, h: 42, lines: ["Visakhapatnam"] },
                ].map((p) => (
                  <div
                    key={p.lines[0]}
                    className="absolute flex flex-col items-center justify-center rounded-full bg-white text-center shadow-[0_3px_8px_rgba(150,90,40,0.18)]"
                    style={{ left: `${(p.x / 760) * 100}%`, top: `${(p.y / 153) * 100}%`, width: `${(p.w / 760) * 100}%`, height: `${(p.h / 153) * 100}%` }}
                  >
                    <span className="text-[2.2cqw] font-bold leading-[1.15] text-[#3A1305]">{p.lines[0]}</span>
                    {p.lines[1] && <span className="text-[1.9cqw] font-medium leading-[1.15] text-[#4A2A1A]">{p.lines[1]}</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <SuccessPopup
        open={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
        message="Message sent. Our team will get back to you shortly."
      />
    </div>
  );
}

export default Contact;
