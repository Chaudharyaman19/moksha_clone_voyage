"use client";
import React, { useState } from "react";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import Image from "next/image";
import {
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
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
  altPhone: { label: "+91 96549 00525", href: "tel:+919654900525" },
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
    image: "/assets/contact/im.png",
    imageWidth: 1448,
    imageHeight: 1086,
    mapQuery: HEAD_OFFICE_QUERY,
    orgName: "Namo Gange Trust",
  },
  {
    city: "London Office",
    region: "Luton, England",
    country: "United Kingdom",
    address:
      "Registration address: 6 Liddel Close, Luton, Bedfordshire, United Kingdom LU3 1TW",
    pincode: "LU3 1TW",
    hours: "Mon-Sat · 9:00 am - 6:00 pm GMT",
    type: "branch",
    image: "/assets/contact/en.png",
    imageWidth: 1448,
    imageHeight: 1086,
    mapQuery: "6 Liddel Close, Luton, Bedfordshire LU3 1TW, United Kingdom",
    orgName: "enCodency Pvt. Ltd.",
  },
];

const socials = [
  {
    Icon: FaFacebook,
    label: "Facebook",
    href: "https://www.facebook.com/mokshasewa/",
  },
  {
    Icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/mokshasewa/",
  },
  { Icon: FaTwitter, label: "X (Twitter)", href: "https://x.com/mokshasewa" },
  {
    Icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/moksha-sewaorg/",
  },
  {
    Icon: FaYoutube,
    label: "YouTube",
    href: "https://www.youtube.com/@Mokshasewa",
  },
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
    "w-full rounded-none border border-[#E4D5BE] bg-[#FBF8F3] px-3.5 py-2.5 text-[16px] text-[#2C1810] placeholder:text-[#B3A18D] transition-all focus:border-[#C9A574] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A574]/35";

  const labelClass =
    "mb-1.5 block text-[16px] font-semibold uppercase tracking-[0.08em] text-[#6B584B]";

  const eyebrowClass =
    "inline-flex items-center gap-3 text-[16px] font-semibold uppercase tracking-[0.16em] text-[#8B6A3E]";

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FBF8F3] text-[#2C1810]">
      <Topbar />
      <Navbar />

      <main className="[&_a]:text-[max(16px,1em)] [&_button]:text-[max(16px,1em)] [&_input]:text-[max(16px,1em)] [&_label]:text-[max(16px,1em)] [&_p]:text-[max(16px,1em)] [&_select]:text-[max(16px,1em)] [&_span]:text-[max(16px,1em)] [&_textarea]:text-[max(16px,1em)]">
        {/* ============================= HERO ============================= */}
        <section className="relative flex aspect-[4/5] w-full flex-col justify-center overflow-hidden bg-[#F4EDE3] md:aspect-auto md:h-[500px] lg:h-[520px]">
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

          <div className="relative mx-auto flex h-full w-full max-w-7xl items-center px-4 pt-28 sm:px-6 lg:pt-32 xl:px-0">
            <div className="max-w-[540px]">
              <div className="inline-flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B6A3E] text-white">
                  <PiFlowerLotus className="h-4 w-4" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#8B6A3E]">
                  संपर्क करें · We&apos;re Listening
                </span>
              </div>

              <h1 className="mt-3 whitespace-nowrap font-serif text-[32px] leading-none text-[#2C1810] sm:text-[46px] lg:text-[52px]">
                Contact <span className="text-[#8B6A3E]">Us</span>
              </h1>

              <div className="mt-2 flex items-center gap-2">
                <span className="h-[2px] w-12 bg-[#8B6A3E]" />
                <span className="h-2 w-2 rotate-45 border border-[#8B6A3E] bg-[#C9A574]" />
                <span className="h-px w-20 bg-gradient-to-r from-[#C9A574] to-transparent" />
              </div>

              <p className="mt-3 hidden max-w-[460px] text-[15px] leading-6 text-[#4F3A2D] md:block">
                Ek call ya ek message — baaki sab hum sambhaal lenge. Our team
                answers round the clock and stays with you until the last ritual
                is complete.
              </p>

              <div className="mt-3.5 flex flex-wrap items-center gap-x-5 gap-y-1.5">
                {["24/7 guidance", "Delhi NCR launch", "Verified cases"].map(
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

              <div className="mt-4 flex flex-wrap items-center gap-2.5">
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

              const base = `group/stat flex items-center gap-2.5 px-3 py-2.5 md:justify-center ${index > 0 ? "md:border-l md:border-white/20" : ""
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
        <section className="relative overflow-hidden pb-3 pt-5 lg:pb-4 lg:pt-6">
          <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#C9A574]/8 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#8B6A3E]/6 blur-3xl" />

          <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 xl:px-0">
            <div className="mb-4 flex flex-col items-center text-center">
              <div className={eyebrowClass}>
                <span className="hidden h-px w-10 bg-[#C9A574] sm:block" />
                <span>ॐ Our presence ॐ</span>
                <span className="hidden h-px w-10 bg-[#C9A574] sm:block" />
              </div>
              <h2 className="mt-1.5 font-serif text-[30px] leading-none text-[#2C1810] sm:text-[36px]">
                Office <span className="text-[#8B6A3E]">Locations</span>
              </h2>
              <div className="mt-3 flex items-center gap-2">
                <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#C9A574]" />
                <PiFlowerLotus className="h-5 w-5 text-[#C98924]" />
                <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#C9A574]" />
              </div>
            </div>

            <div className="grid gap-3 lg:grid-cols-2">
              {officeLocations.map((location) => {
                const isMain = location.type === "main";

                return (
                  <article
                    key={location.city}
                    className="group relative overflow-hidden border border-[#E7D9C7] bg-white shadow-[0_12px_40px_rgba(69,45,28,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D6B98E] hover:shadow-[0_20px_48px_rgba(69,45,28,0.13)]"
                  >
                    <div className="grid min-h-[270px] sm:grid-cols-[0.88fr_1.12fr]">
                      <div className="relative aspect-[4/3] overflow-hidden bg-[#E7D9C7] sm:aspect-auto sm:h-full sm:min-h-[270px]">
                        <Image
                          src={location.image}
                          alt={`${location.city}, ${location.region}`}
                          width={location.imageWidth}
                          height={location.imageHeight}
                          sizes="(max-width: 640px) 100vw, 42vw"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/24 via-transparent to-transparent" />

                        <span
                          className={`absolute left-4 top-4 inline-flex items-center rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white shadow-md ${isMain ? "bg-[#E56A18]" : "bg-[#567F2C]"
                            }`}
                        >
                          {isMain ? "Head Office" : "Branch Office"}
                        </span>
                      </div>

                      <div className="relative flex min-w-0 flex-col p-4 sm:p-5">
                        <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full border border-[#C9A574]/15" />

                        <div className="flex items-start gap-3">
                          <span
                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border ${isMain
                              ? "border-[#F3C8A5] bg-[#FFF7F0] text-[#E56A18]"
                              : "border-[#CADDBB] bg-[#F4F9EF] text-[#567F2C]"
                              }`}
                          >
                            <FaMapMarkerAlt className="h-4 w-4" />
                          </span>

                          <div className="min-w-0">
                            <h3 className="font-serif text-[23px] leading-tight text-[#2C1810]">
                              {location.orgName}
                            </h3>
                            <p
                              className={`mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${isMain ? "text-[#C96822]" : "text-[#567F2C]"
                                }`}
                            >
                              {location.region}, {location.country}
                            </p>
                          </div>
                        </div>

                        <p className="mt-3 text-[13px] leading-5 text-[#5F4A3D]">
                          {location.address}
                        </p>

                        <div className="mt-auto pt-3">
                          <div className="grid grid-cols-[1fr_auto] overflow-hidden rounded-xl border border-[#E9DDCE] bg-[#FCFAF7]">
                            <div className="flex min-w-0 items-center gap-2 px-3 py-2.5">
                              <FaClock
                                className={`h-4 w-4 shrink-0 ${isMain ? "text-[#E56A18]" : "text-[#567F2C]"
                                  }`}
                              />
                              <span className="truncate text-[12px] font-medium text-[#4F4036]">
                                {location.hours}
                              </span>
                            </div>
                            <div className="flex items-center border-l border-[#E9DDCE] px-3 py-2.5">
                              <span className="whitespace-nowrap text-[11px] font-semibold tracking-[0.08em] text-[#7C6249]">
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
                            className={`mt-2.5 flex h-9 w-full items-center justify-center gap-2 rounded-xl border text-[11px] font-semibold uppercase tracking-[0.16em] transition-all duration-300 ${isMain
                              ? "border-[#E56A18] text-[#C95C15] hover:bg-[#E56A18] hover:text-white"
                              : "border-[#6C913E] text-[#567F2C] hover:bg-[#567F2C] hover:text-white"
                              }`}
                          >
                            <FaDirections className="h-3.5 w-3.5" />
                            Get directions
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= MODERN CONTACT EXPERIENCE ================= */}
        <section id="contact-form" className="scroll-mt-24 pb-7 pt-0 lg:pb-9">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 xl:px-0">
            <div className="grid items-stretch gap-3 xl:grid-cols-[1.18fr_0.58fr_0.98fr]">
              {/* MESSAGE FORM */}
              <div className="relative overflow-hidden border border-[#E7D9C7] bg-white p-4 shadow-[0_12px_34px_rgba(69,45,28,0.07)] sm:p-5">
                <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[#C9A574]/10 blur-2xl" />

                <div className="relative mb-4">
                  <div className="inline-flex items-center gap-2 text-[16px] font-semibold uppercase tracking-[0.14em] text-[#C96822]">
                    <MdEmail className="h-4 w-4" />
                    Send a message
                  </div>
                  <h3 className="mt-1.5 font-serif text-[27px] leading-tight text-[#2C1810]">
                    We&apos;d love to{" "}
                    <span className="text-[#E56A18]">hear from you</span>
                  </h3>
                  <p className="mt-1.5 max-w-[500px] text-[13px] leading-5 text-[#7A685B]">
                    We reply within one business day. For anything urgent, the
                    helpline is answered day and night.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="relative grid gap-3">
                  <div className="grid gap-3 sm:grid-cols-2">
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
                        className={`${inputClass} rounded-xl`}
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
                        className={`${inputClass} rounded-xl`}
                        placeholder="Sharma"
                      />
                    </div>
                  </div>

                  <div className="grid gap-3.5 sm:grid-cols-2">
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
                        className={`${inputClass} rounded-xl`}
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
                        inputMode="numeric"
                        maxLength={10}
                        pattern="[6-9][0-9]{9}"
                        title="Enter a valid 10-digit mobile number"
                        className={`${inputClass} rounded-xl`}
                        placeholder="Enter 10 digit mobile number"
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
                      className={`${inputClass} rounded-xl`}
                      placeholder="What do you need help with?"
                    />
                  </div>

                  <div>
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
                      className={`${inputClass} min-h-[95px] resize-none rounded-xl`}
                      placeholder="Share the details — city, timing, and what you need arranged."
                    />
                  </div>

                  {submitStatus.type && (
                    <div
                      role="status"
                      className={`rounded-xl border p-3 text-[16px] font-medium ${submitStatus.type === "success"
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
                    className="group flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D76A1D] to-[#F07A24] px-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-white shadow-[0_10px_24px_rgba(218,105,29,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(218,105,29,0.28)] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Sending
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                        Send message
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* CONTACT RAIL */}
              <div className="flex flex-col overflow-hidden border border-[#E7D9C7] bg-[#2D211A] text-white shadow-[0_14px_42px_rgba(69,45,28,0.10)]">
                <div className="relative p-4 sm:p-5">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border border-[#D9B681]/15" />
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C99858] text-white">
                    <FaHeadset className="h-4 w-4" />
                  </span>
                  <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D9B681]">
                    24/7 Emergency Support
                  </p>
                  <a
                    href={CONTACT.helpline.href}
                    className="mt-1 block font-serif text-[24px] leading-tight text-white transition hover:text-[#E9C58F]"
                  >
                    {CONTACT.helpline.label}
                  </a>
                </div>

                <div className="mx-4 h-px bg-white/10" />

                <div className="space-y-4 p-4 sm:p-5">
                  <a
                    href={CONTACT.email.href}
                    className="group flex items-start gap-3"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/8 text-[#D9B681] transition group-hover:bg-[#D9B681] group-hover:text-[#2D211A]">
                      <MdEmail className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[9px] font-semibold uppercase tracking-[0.18em] text-white/55">
                        Email
                      </span>
                      <span className="mt-0.5 block break-all font-serif text-[14px] text-white/95">
                        {CONTACT.email.label}
                      </span>
                    </span>
                  </a>

                  <a
                    href={CONTACT.altPhone.href}
                    className="group flex items-start gap-3"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/8 text-[#D9B681] transition group-hover:bg-[#D9B681] group-hover:text-[#2D211A]">
                      <FaPhoneAlt className="h-3.5 w-3.5" />
                    </span>
                    <span>
                      <span className="block text-[9px] font-semibold uppercase tracking-[0.18em] text-white/55">
                        Alternate line
                      </span>
                      <span className="mt-0.5 block font-serif text-[15px] text-white/95">
                        {CONTACT.altPhone.label}
                      </span>
                    </span>
                  </a>

                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/8 text-[#D9B681]">
                      <FaClock className="h-3.5 w-3.5" />
                    </span>
                    <span>
                      <span className="block text-[9px] font-semibold uppercase tracking-[0.18em] text-white/55">
                        We are available
                      </span>
                      <span className="mt-0.5 block font-serif text-[15px] text-white/95">
                        24/7 for you
                      </span>
                    </span>
                  </div>

                  <div className="pt-2">
                    <p className="font-serif text-[16px] text-[#E9C58F]">
                      Har sawaal ka jawab.
                    </p>
                    <p className="mt-1 text-[12px] leading-5 text-white/65">
                      Every query handled with care.
                    </p>
                  </div>
                </div>

                <div className="mt-auto border-t border-white/10 p-4 sm:p-5">
                  <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45">
                    Follow us
                  </p>
                  <div className="flex gap-2">
                    {socials.map(({ Icon, label, href }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/75 transition hover:-translate-y-0.5 hover:border-[#D9B681] hover:bg-[#D9B681] hover:text-[#2D211A]"
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* MAP */}
              <div className="group relative min-h-[360px] overflow-hidden border border-[#E7D9C7] bg-white shadow-[0_14px_42px_rgba(69,45,28,0.08)]">
                <iframe
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    HEAD_OFFICE_QUERY,
                  )}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 h-full w-full grayscale-[0.08] transition duration-500 group-hover:grayscale-0"
                  title="Head office location on map"
                />

                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#2C1810]/16 to-transparent" />

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    HEAD_OFFICE_QUERY,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/95 px-3.5 py-2 text-[11px] font-semibold text-[#73532F] shadow-md backdrop-blur transition hover:bg-[#8B6A3E] hover:text-white"
                >
                  <FaDirections className="h-3.5 w-3.5" />
                  Open in Maps
                </a>
              </div>
            </div>

            {/* SMALL CLOSING STRIP */}

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
