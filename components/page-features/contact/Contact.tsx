"use client";
import React, { useState } from "react";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import Image from "next/image";
import {
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaPaperPlane,
  FaHeadset,
  FaChevronRight,
  FaMapMarkerAlt,
  FaClock,
  FaDirections,
} from "react-icons/fa";
import { MdVerified, MdEmail } from "react-icons/md";
import { PiFlowerLotus } from "react-icons/pi";
import { enquiryApi } from "@/lib/enquiryApi";
import { ApiRequestError } from "@/lib/api";

/* ---------- one source of truth so numbers never mismatch ---------- */
const CONTACT = {
  helpline: { label: "+91 92201 47229", href: "tel:+919220147229" },
  altPhone: { label: "+91 95682 59784", href: "tel:+919568259784" },
  email: { label: "info@mokshasewa.org", href: "mailto:info@mokshasewa.org" },
};

const HEAD_OFFICE_QUERY =
  "12/52, Site - 2, Sunrise Industrial Area, Mohan Nagar, Sahibabad, Ghaziabad";

const officeLocations = [
  {
    city: "Head Office",
    region: "Ghaziabad, Uttar Pradesh",
    country: "India",
    address:
      "12/52, Site - 2, Sunrise Industrial Area, Mohan Nagar, Sahibabad, Ghaziabad, Uttar Pradesh, India",
    pincode: "201007",
    hours: "Open 24 hours · every day",
    type: "main",
    image: "/assets/contact/image.png",
    mapQuery: HEAD_OFFICE_QUERY,
    orgName: "Namo Gange Trust",
  },
  {
    city: "London Office",
    region: "Luton, England",
    country: "United Kingdom",
    address: "6 Liddel Close, Luton, England, United Kingdom",
    pincode: "LU3 1TW",
    hours: "Mon–Sat · 9:00 am – 6:00 pm GMT",
    type: "branch",
     image: "/assets/contact/encodency.png",
    mapQuery: "6 Liddel Close, Luton, England LU3 1TW",
    orgName: "enCodency Pvt. Ltd.",
  },
];

const socials = [
  { Icon: FaFacebook, label: "Facebook", href: "#" },
  { Icon: FaTwitter, label: "Twitter", href: "#" },
  { Icon: FaLinkedin, label: "LinkedIn", href: "#" },
  { Icon: FaYoutube, label: "YouTube", href: "#" },
];

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      await enquiryApi.create({
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        phone: formData.phone,
        email: formData.email || undefined,
        message: formData.subject
          ? `${formData.subject}\n\n${formData.message}`
          : formData.message,
      });
      setSubmitStatus({
        type: "success",
        message: "Message sent. Our team will get back to you shortly.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
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
  const inputClass =
    "w-full rounded-none border border-[#E4D5BE] bg-[#FBF8F3] px-3.5 py-2.5 text-[14px] text-[#2C1810] placeholder:text-[#B3A18D] transition-all focus:border-[#C9A574] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A574]/35";

  const labelClass =
    "mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6B584B]";

  const eyebrowClass =
    "inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#8B6A3E]";

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FBF8F3] text-[#2C1810]">
      <Topbar />
      <Navbar />

      <main>
        {/* ============================= HERO ============================= */}
        <section className="relative flex aspect-[4/5] w-full flex-col justify-center overflow-hidden bg-[#F4EDE3] md:aspect-auto md:h-[560px] lg:h-[600px]">
          <div className="absolute inset-0">
            {/* Desktop Hero Image */}
            <Image
              src="/assets/contact/contact.png"
              alt="Contact Moksha Sewa"
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              className="hidden scale-[1.02] object-cover md:block"
            />
            {/* Mobile Hero Image (4:5 Aspect Ratio) */}
            <Image
              src="/assets/route-optimized/contact-hero-mobile.png"
              alt="Contact Moksha Sewa Mobile"
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              className="scale-[1.02] object-cover md:hidden"
            />
          </div>

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(247,240,231,0.98) 0%, rgba(247,240,231,0.93) 24%, rgba(247,240,231,0.62) 42%, rgba(247,240,231,0.20) 60%, rgba(247,240,231,0.02) 76%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/10 via-transparent to-transparent" />

          {/* Devanagari watermark — page signature */}
          <div className="pointer-events-none absolute -left-6 top-1/2 hidden -translate-y-[56%] select-none font-serif text-[280px] leading-none text-[#8B6A3E]/[0.07] lg:block">
            संपर्क
          </div>

          <div className="relative mx-auto flex h-full w-full max-w-7xl items-center px-4 sm:px-6 xl:px-0">
            <div className="max-w-[540px]">
              <div className="inline-flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B6A3E] text-white">
                  <PiFlowerLotus className="h-4 w-4" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#8B6A3E]">
                  संपर्क करें · We&apos;re Listening
                </span>
              </div>

              <h1 className="mt-4 font-serif leading-[0.95]">
                <span className="text-[32px] text-[#2C1810] sm:text-[46px] lg:text-[52px]">
                  Contact{" "}
                </span>
                <span className="text-[32px] text-[#8B6A3E] sm:text-[46px] lg:text-[52px]">
                  With Us
                </span>
              </h1>

              <div className="mt-4 flex items-center gap-2">
                <span className="h-[2px] w-12 bg-[#8B6A3E]" />
                <span className="h-2 w-2 rotate-45 border border-[#8B6A3E] bg-[#C9A574]" />
                <span className="h-px w-20 bg-gradient-to-r from-[#C9A574] to-transparent" />
              </div>

              <p className="mt-4 hidden max-w-[460px] text-[15px] leading-7 text-[#4F3A2D] md:block">
                Ek call ya ek message — baaki sab hum sambhaal lenge. Our team
                answers round the clock and stays with you until the last ritual
                is complete.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
                {["24/7 support", "15 min response", "Pan-India teams"].map(
                  (chip) => (
                    <span
                      key={chip}
                      className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#5F4630]"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#8B6A3E]/15">
                        <MdVerified className="h-3 w-3 text-[#8B6A3E]" />
                      </span>
                      {chip}
                    </span>
                  ),
                )}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#contact-form"
                  className="group inline-flex items-center gap-2 rounded-none bg-[#8B6A3E] px-5 py-2.5 text-[14px] font-semibold text-white shadow-md transition duration-300 hover:bg-[#73532F] hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#73532F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4EDE3]"
                >
                  Send a message
                  <FaChevronRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
                <a
                  href={CONTACT.helpline.href}
                  className="inline-flex items-center gap-2 rounded-none border border-[#C9A574] bg-white/70 px-5 py-2.5 text-[14px] font-semibold text-[#73532F] backdrop-blur transition duration-300 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#73532F] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4EDE3]"
                >
                  <FaPhoneAlt className="h-3 w-3" />
                  Call the helpline
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ======================= QUICK CONTACT BAR ====================== */}
        <section className="w-full border-b border-[#73532F] bg-gradient-to-r from-[#8B6A3E] via-[#9C794C] to-[#8B6A3E] shadow-md">
          <div className="mx-auto grid max-w-7xl grid-cols-2 px-4 sm:px-6 md:grid-cols-4 xl:px-0">
            {[
              {
                icon: FaPhoneAlt,
                value: CONTACT.helpline.label,
                title: "Emergency helpline",
                href: CONTACT.helpline.href,
              },
              {
                icon: MdEmail,
                value: CONTACT.email.label,
                title: "Write to us",
                href: CONTACT.email.href,
              },
              { icon: FaClock, value: "24 / 7", title: "Always available" },
              { icon: FaHeadset, value: "15 min", title: "Average response" },
            ].map((item, index) => {
              const Icon = item.icon;
              const content = (
                <>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)] transition-transform duration-300 group-hover/stat:scale-110">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 text-left">
                    <span className="block truncate font-serif text-[16px] leading-tight text-white lg:text-[18px]">
                      {item.value}
                    </span>
                    <span className="mt-0.5 block truncate text-[11px] font-medium uppercase tracking-[0.16em] text-white/85">
                      {item.title}
                    </span>
                  </span>
                </>
              );

              const base = `group/stat flex items-center gap-3 px-4 py-3.5 md:justify-center ${index > 0 ? "md:border-l md:border-white/20" : ""
                } ${index % 2 === 1 ? "border-l border-white/20" : ""} ${index > 1 ? "border-t border-white/20 md:border-t-0" : ""
                }`;

              return item.href ? (
                <a key={item.title} href={item.href} className={base}>
                  {content}
                </a>
              ) : (
                <div key={item.title} className={base}>
                  {content}
                </div>
              );
            })}
          </div>
        </section>

        {/* ======================= OFFICE LOCATIONS ====================== */}
        <section className="pb-2 pt-6 lg:pb-2 lg:pt-8">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 xl:px-0">
            <div className="mb-6 flex flex-col items-center text-center">
              <div className={eyebrowClass}>
                <span className="hidden sm:block h-px w-8 bg-[#C9A574]" />
                <span>ॐ Our presence ॐ</span>
                <span className="hidden sm:block h-px w-8 bg-[#C9A574]" />
              </div>
              <h2 className="mt-2 font-serif text-3xl text-[#2C1810] sm:text-4xl">
                Office <span className="text-[#8B6A3E]">Locations</span>
              </h2>
            </div>

            <div className="grid gap-1 sm:grid-cols-2">
              {officeLocations.map((location) => (
                <article
                  key={location.city}
                  className="group flex flex-col border border-[#E6D6BF] bg-white transition-all duration-300 hover:border-[#C9A574] hover:shadow-md"
                >
                  {/* Image */}
                  <div className="relative h-[380px] w-full overflow-hidden">
                    <Image
                      src={location.image}
                      alt={`${location.city}, ${location.region}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute right-3 top-3 bg-black/60 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
                      {location.type === "main" ? "HQ" : "Branch"}
                    </div>
                  </div>

                  {/* Header / Org Name Bar */}
                  <div className="border-b border-[#E6D6BF] bg-[#FBF8F3] px-4 py-2">
                    <h4 className="font-serif text-[20px] leading-tight text-[#2C1810]">
                      {location.orgName}
                    </h4>
                    <p className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.16em] text-[#8B6A3E]">
                      {location.region}, {location.country}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="flex flex-1 flex-col px-4 pb-3 pt-2">
                    <p className="text-[14px] leading-6 text-[#6B584B]">
                      {location.address}
                    </p>

                    <div className="mt-auto flex flex-col gap-2 border-t border-[#F0E5D3] pt-2 text-[13px] text-[#5F4A3D]">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <FaClock className="text-[#8B6A3E]" /> {location.hours}
                        </span>
                        <span className="font-semibold tracking-wider text-[#8B6A3E]">
                          PIN {location.pincode}
                        </span>
                      </div>
                    </div>

                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(
                        location.mapQuery,
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 flex w-full items-center justify-center gap-2 border border-[#E4D5BE] bg-white px-4 py-2 text-[12px] font-bold uppercase tracking-[0.16em] text-[#73532F] transition-all duration-300 hover:border-[#8B6A3E] hover:bg-[#8B6A3E] hover:text-white"
                    >
                      <FaDirections className="h-3.5 w-3.5" />
                      Get directions
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =================== FORM + CONTACT / MAP COLUMN ================ */}
        <section id="contact-form" className="scroll-mt-24 pb-10 pt-0 lg:pb-14">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 xl:px-0">
            <div className="grid items-stretch gap-1 lg:grid-cols-[1.05fr_0.95fr]">
              {/* ------------------------ FORM CARD ------------------------ */}
              <div className="relative flex flex-col overflow-hidden rounded-none border border-[#E6D6BF] bg-white p-4 shadow-[0_16px_42px_rgba(73,49,31,0.08)] sm:p-5">
                <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#C9A574] to-transparent" />

                <div className="mb-5">
                  <div className={eyebrowClass}>
                    <span>Send a message</span>
                    <span className="h-px w-8 bg-[#C9A574]" />
                  </div>
                  <h3 className="mt-2 font-serif text-2xl text-[#2C1810] sm:text-[28px]">
                    We&apos;d love to{" "}
                    <span className="text-[#8B6A3E]">hear from you</span>
                  </h3>
                  <p className="mt-1.5 text-[13px] text-[#7A685B]">
                    We reply within one business day. For anything urgent, the
                    helpline is answered day and night.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className={labelClass}>
                        First name *
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="Rahul"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className={labelClass}>
                        Last name *
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="Sharma"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="rahul@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        Phone number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className={labelClass}>
                      Subject *
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="What do you need help with?"
                    />
                  </div>

                  <div className="flex flex-1 flex-col">
                    <label htmlFor="message" className={labelClass}>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={`${inputClass} min-h-[120px] flex-1 resize-none`}
                      placeholder="Share the details — city, timing, and what you need arranged."
                    />
                  </div>

                  {submitStatus.type && (
                    <div
                      role="status"
                      className={`rounded-none border p-3 text-[13px] font-medium ${submitStatus.type === "success"
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
                    className="group mt-auto flex w-full items-center justify-center gap-2 rounded-none bg-[#8B6A3E] px-4 py-3 text-[14px] font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#73532F] hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#73532F] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Sending
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        Send message
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* --------------------- RIGHT COLUMN ---------------------- */}
              <div className="flex flex-col gap-1">
                <div className="rounded-none border border-[#E6D6BF] bg-white p-4 shadow-sm">
                  {/* helpline */}
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C9A574] text-white">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C9A574]/40 motion-reduce:hidden" />
                      <FaHeadset className="relative h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8B6A3E]">
                        24/7 emergency support
                      </div>
                      <a
                        href={CONTACT.helpline.href}
                        className="font-serif text-[22px] leading-tight text-[#2C1810] transition hover:text-[#8B6A3E]"
                      >
                        {CONTACT.helpline.label}
                      </a>
                    </div>
                  </div>

                  <div className="my-4 h-px w-full bg-[#F0E5D3]" />

                  {/* email + alternate line */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      {
                        Icon: MdEmail,
                        label: "Email",
                        value: CONTACT.email.label,
                        href: CONTACT.email.href,
                      },
                      {
                        Icon: FaPhoneAlt,
                        label: "Alternate line",
                        value: CONTACT.altPhone.label,
                        href: CONTACT.altPhone.href,
                      },
                    ].map(({ Icon, label, value, href }) => (
                      <a
                        key={label}
                        href={href}
                        className="group flex items-center gap-3"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FBF8F3] text-[#8B6A3E] transition-colors duration-300 group-hover:bg-[#8B6A3E] group-hover:text-white">
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8A7460]">
                            {label}
                          </span>
                          <span className="block truncate font-serif text-[15px] text-[#2C1810] transition-colors group-hover:text-[#8B6A3E]">
                            {value}
                          </span>
                        </span>
                      </a>
                    ))}
                  </div>

                  <div className="my-4 h-px w-full bg-[#F0E5D3]" />

                  {/* socials + line */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex gap-2">
                      {socials.map(({ Icon, label, href }) => (
                        <a
                          key={label}
                          href={href}
                          aria-label={label}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FBF8F3] text-[#8B6A3E] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8B6A3E] hover:text-white hover:shadow-md"
                        >
                          <Icon className="h-3.5 w-3.5" />
                        </a>
                      ))}
                    </div>
                    <p className="text-right text-[13px] leading-5 text-[#5F4A3D]">
                      <span className="font-serif text-[#8B6A3E]">
                        Har sawaal ka jawab.
                      </span>
                      <br />
                      Every query handled with care.
                    </p>
                  </div>
                </div>

                {/* map grows so both columns end level */}
                <div className="relative min-h-[300px] flex-1 overflow-hidden rounded-none border border-[#E6D6BF] shadow-sm">
                  <iframe
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(
                      HEAD_OFFICE_QUERY,
                    )}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="absolute inset-0 h-full w-full"
                    title="Head office location on map"
                  />
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

export default Contact;