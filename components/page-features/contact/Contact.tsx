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
} from "react-icons/fa";
import { MdVerified, MdEmail } from "react-icons/md";
import { PiFlowerLotus } from "react-icons/pi";

/* Temple (shikhara) shape — same signature as the About page */
const templeMed =
  "polygon(50% 0%, 78% 6%, 100% 16%, 100% 100%, 0% 100%, 0% 16%, 22% 6%)";

/* Kalash finial — the small gold urn-dot on a mandir peak */
function Kalash({ size = "md" }: { size?: "sm" | "md" }) {
  const s = size === "sm" ? "h-1.5 w-1.5" : "h-2 w-2";
  return (
    <span className="pointer-events-none absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
      <span className={`block ${s} rounded-full border border-[#8B6A3E] bg-[#D9B681]`} />
    </span>
  );
}

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
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-[#E4D5BE] bg-[#FBF8F3] px-3 py-3 text-sm text-[#2C1810] placeholder:text-[#A8937E] transition-all focus:border-[#C9A574] focus:outline-none focus:ring-2 focus:ring-[#C9A574]/40";

  const labelClass =
    "mb-1 block text-[11px] font-semibold uppercase tracking-[0.08em] text-[#4A3428]";

  const officeLocations = [
    {
      city: "Head Office",
      address: "12/52, Site - 2, Sunrise Industrial Area, Mohan Nagar, Sahibabad, Ghaziabad, Uttar Pradesh",
      pincode: "201007",
      type: "main",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop",
    },
    {
      city: "Ghaziabad",
      address: "KK-1, Surdas Marg, Sector 17A, Kavi Nagar Industrial Area",
      pincode: "201001",
      type: "branch",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop",
    },
    {
      city: "Delhi",
      address: "Ground Floor, Main Market, E-1, opposite KFC, Kalkaji",
      pincode: "110019",
      type: "branch",
      image:
        "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&auto=format&fit=crop",
    },
    {
      city: "Mumbai",
      address: "212 Bussa Industrial Estate, Lower Parel",
      pincode: "400013",
      state: "Maharashtra",
      type: "branch",
      image:
        "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FBF8F3] text-[#2C1810]">
      <Topbar />
      <Navbar />

      <main>
        {/* ============ HERO — matches the About page language ============ */}
        <section className="relative h-[600px] overflow-hidden bg-[#F4EDE3]">
          <div className="absolute inset-0">
            <Image
              src="/assets/chatgpt.png"
              alt="Contact Moksha Sewa"
              fill
              priority
              quality={100}
              sizes="100vw"
              className="scale-[1.02] object-cover"
            />
          </div>

          {/* cream gradient from the left so text stays readable */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(247,240,231,0.98) 0%, rgba(247,240,231,0.93) 24%, rgba(247,240,231,0.62) 42%, rgba(247,240,231,0.20) 60%, rgba(247,240,231,0.02) 76%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/8 via-transparent to-transparent" />

          {/* Devanagari watermark — page signature */}
          <div className="pointer-events-none absolute -left-6 top-1/2 hidden -translate-y-[58%] select-none font-serif text-[280px] leading-none text-[#8B6A3E]/[0.07] lg:block">
            संपर्क
          </div>

          <div className="relative mx-auto flex h-full w-full max-w-7xl items-center px-4 sm:px-6 xl:px-0">
            <div className="max-w-[540px] -translate-y-2 lg:-translate-y-4">
              {/* eyebrow */}
              <div className="mb-1 inline-flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B6A3E] text-white">
                  <PiFlowerLotus className="h-4 w-4" />
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8B6A3E]">
                  संपर्क करें · We&apos;re Listening
                </span>
              </div>

              {/* layered display type */}
              <h1 className="font-serif leading-[0.95]">
                <span className="block text-[38px] text-[#2C1810] sm:text-[46px] lg:text-[52px]">
                  Contact
                </span>
                <span className="mt-1 block text-[46px] italic text-[#8B6A3E] sm:text-[58px] lg:text-[68px]">
                  With Us
                </span>
              </h1>

              {/* diya flourish */}
              <div className="mt-1 flex items-center gap-2">
                <span className="h-[2px] w-12 bg-[#8B6A3E]" />
                <span className="h-2 w-2 rotate-45 border border-[#8B6A3E] bg-[#C9A574]" />
                <span className="h-px w-20 bg-gradient-to-r from-[#C9A574] to-transparent" />
              </div>

              <p className="mt-1 max-w-[455px] text-sm leading-6 text-[#4F3A2D] sm:text-[15px]">
                Get in touch with our team for any inquiries or assistance. A
                caring team is available round the clock — reach out and we
                will handle the rest.
              </p>

              {/* trust row */}
              <div className="mt-1 flex flex-wrap items-center gap-x-6 gap-y-2">
                {["24/7 Support", "15 Min Response", "Pan India Teams"].map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#5F4630]"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#8B6A3E]/12">
                      <MdVerified className="h-3 w-3 text-[#8B6A3E]" />
                    </span>
                    {chip}
                  </span>
                ))}
              </div>

              <a
                href="#contact-form"
                className="group mt-1 inline-flex items-center gap-2 rounded-lg bg-[#8B6A3E] px-5 py-2.5 text-xs font-semibold text-white shadow-md transition duration-300 hover:bg-[#73532F] hover:shadow-lg"
              >
                Send a Message
                <FaChevronRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          {/* floating helpline card — bottom right, same as About */}
          <a
            href="tel:+919654900525"
            className="group absolute bottom-24 right-16 hidden items-center gap-3 rounded-2xl border border-white/40 bg-[#2C1810]/70 px-4 py-3 text-white shadow-[0_16px_40px_rgba(44,24,16,0.35)] backdrop-blur-md transition hover:bg-[#2C1810]/85 lg:flex lg:right-24 xl:right-32"
          >
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#C9A574] text-[#2C1810]">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C9A574]/50" />
              <FaPhoneAlt className="relative h-4 w-4" />
            </span>
            <span>
              <span className="block text-[9px] uppercase tracking-[0.2em] text-[#E8D2AC]">
                24/7 Helpline
              </span>
              <span className="block font-serif text-sm">+91 96549 00525</span>
            </span>
          </a>
        </section>

        {/* ============ QUICK CONTACT — dark bar overlapping hero ============ */}
        <section className="relative z-20 -mt-8 sm:-mt-10">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 xl:px-0">
            <div className="relative overflow-hidden rounded-2xl border border-[#5B432F] bg-gradient-to-r from-[#2C1810] via-[#3B2B21] to-[#2C1810] px-4 py-3 shadow-[0_18px_48px_rgba(44,24,16,0.35)] md:px-5 md:py-3.5">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#D9B681] to-transparent" />
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full border border-[#C9A574]/15" />
              <div className="pointer-events-none absolute -bottom-12 -left-8 h-36 w-36 rounded-full border border-[#C9A574]/10" />

              <div className="relative grid grid-cols-2 gap-y-3 md:grid-cols-4 md:divide-x md:divide-white/10">
                {[
                  {
                    icon: FaPhoneAlt,
                    value: "+91 96549 00525",
                    title: "Emergency Helpline",
                    href: "tel:+919654900525",
                  },
                  {
                    icon: MdEmail,
                    value: "info@mokshasewa.com",
                    title: "Write to Us",
                    href: "mailto:info@mokshasewa.com",
                  },
                  { icon: FaClock, value: "24/7", title: "Always Available" },
                  { icon: FaHeadset, value: "15 Min", title: "Avg Response Time" },
                ].map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <>
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C9A574]/50 bg-[#C9A574]/10 text-[#D9B681] transition-all duration-300 group-hover:bg-[#C9A574] group-hover:text-[#2C1810]">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="truncate font-serif text-[15px] leading-tight text-[#E8D2AC]">
                          {item.value}
                        </div>
                        <div className="mt-0.5 text-[10px] font-semibold text-white/70">
                          {item.title}
                        </div>
                      </div>
                    </>
                  );
                  return item.href ? (
                    <a
                      key={item.title}
                      href={item.href}
                      className="group flex items-center gap-2.5 px-0 md:justify-center md:px-3"
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      key={item.title}
                      className="group flex items-center gap-2.5 px-0 md:justify-center md:px-3"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ============ OFFICE LOCATIONS — temple gateway cards ============ */}
        <section className="pt-6 pb-3 lg:pt-8 lg:pb-4">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 xl:px-0">
            <div className="mb-1 flex items-center justify-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8B6A3E]">
              <span className="h-px w-8 bg-[#C9A574]" />
              <span>ॐ Our Presence ॐ</span>
              <span className="h-px w-8 bg-[#C9A574]" />
            </div>
            <h2 className="text-center font-serif text-3xl text-[#2C1810] sm:text-4xl">
              Office <span className="italic text-[#8B6A3E]">Locations</span>
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-2 pt-2 sm:grid-cols-2 lg:grid-cols-4">
              {officeLocations.map((location) => (
                <div
                  key={location.city}
                  className="group relative transition-transform duration-300 hover:-translate-y-1.5 [filter:drop-shadow(0_8px_16px_rgba(70,47,31,0.12))] hover:[filter:drop-shadow(0_16px_28px_rgba(70,47,31,0.2))]"
                >
                  <Kalash size="sm" />
                  {/* border layer */}
                  <div
                    className="rounded-b-xl bg-[#E4D5BE] p-[1px] transition-colors duration-300 group-hover:bg-[#C9A574]"
                    style={{ clipPath: templeMed }}
                  >
                    {/* card layer */}
                    <div
                      className="overflow-hidden rounded-b-xl bg-white"
                      style={{ clipPath: templeMed }}
                    >
                      {/* image — the temple peak crops it beautifully */}
                      <div className="relative h-44 w-full overflow-hidden">
                        <Image
                          src={location.image}
                          alt={location.city}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/75 via-[#2C1810]/10 to-transparent" />

                        {location.type === "main" && (
                          <span className="absolute right-3 top-[26%] z-20 rounded-full bg-[#8B6A3E] px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em] text-white shadow">
                            HQ
                          </span>
                        )}

                        <div className="absolute bottom-2.5 left-3 z-20">
                          <h3 className="font-serif text-lg text-white drop-shadow">
                            {location.city}
                          </h3>
                          <span className="mt-0.5 block h-px w-6 bg-[#D9B681] transition-all duration-300 group-hover:w-10" />
                        </div>
                      </div>

                      <div className="p-4">
                        <p className="min-h-[40px] text-xs leading-5 text-[#6B584B]">
                          {location.address}
                        </p>
                        <div className="mt-1 flex items-center justify-between border-t border-[#F0E5D3] pt-3">
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#8B6A3E]">
                            <FaMapMarkerAlt className="h-2.5 w-2.5" />
                            PIN: {location.pincode}
                          </span>
                          {location.state && (
                            <span className="text-[10px] font-semibold text-[#8B6A3E]">
                              {location.state}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ FORM + CONTACT CARDS ============ */}
        <section id="contact-form" className="pb-6 lg:pb-8">
          <div className="mx-auto grid w-full max-w-7xl gap-4 px-4 sm:px-6 xl:px-0 lg:grid-cols-2">
            {/* -------- form card -------- */}
            <div className="relative overflow-hidden rounded-2xl border border-[#E6D6BF] bg-white p-6 shadow-[0_16px_42px_rgba(73,49,31,0.08)]">
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#C9A574] to-transparent" />

              <div className="mb-1">
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8B6A3E]">
                  <span>Send a Message</span>
                  <span className="h-px w-7 bg-[#C9A574]" />
                </div>
                <h3 className="mt-1 font-serif text-2xl text-[#2C1810]">
                  We&apos;d Love to <span className="italic text-[#8B6A3E]">Hear From You</span>
                </h3>
                <p className="mt-1 text-xs text-[#7A685B]">
                  Our team will respond within 1–2 business days.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="Doe"
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
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className={labelClass}>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className={labelClass}>Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={inputClass}
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className={labelClass}>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us about your inquiry..."
                  />
                </div>

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
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* -------- right column -------- */}
            <div className="space-y-2">
              {/* emergency — dark card like About's Sacred Promise */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#3B2B21] to-[#2C1810] p-3 text-white shadow-[0_18px_48px_rgba(44,24,16,0.3)] sm:p-4">
                <span className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-[#C9A574] via-[#D9B681] to-[#C9A574]" />
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-[#C9A574]/15" />

                <div className="flex items-start gap-4">
                  <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C9A574] text-[#2C1810]">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C9A574]/40" />
                    <FaHeadset className="relative h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D9B681]">
                      Emergency Support
                    </div>
                    <h4 className="mt-1 font-serif text-xl">
                      Available <span className="italic text-[#D9B681]">24/7</span> for Urgent Help
                    </h4>
                    <a
                      href="tel:+919654900525"
                      className="mt-1 inline-block font-serif text-2xl text-[#E8D2AC] transition hover:text-white"
                    >
                      +91 96549 00525
                    </a>
                  </div>
                </div>
              </div>

              {/* email + phone rows */}
              <div className="grid gap-2 sm:grid-cols-2">
                <a
                  href="mailto:info@mokshasewa.com"
                  className="group flex items-center gap-2.5 rounded-2xl border border-[#E6D6BF] bg-white px-3 py-2.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C9A574] hover:shadow-md"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#8B6A3E]/10 text-[#8B6A3E] transition-colors duration-300 group-hover:bg-[#8B6A3E] group-hover:text-white">
                    <MdEmail className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8A7460]">
                      Email Us
                    </span>
                    <span className="block truncate font-serif text-sm text-[#2C1810]">
                      info@mokshasewa.com
                    </span>
                  </span>
                </a>

                <a
                  href="tel:+911234567890"
                  className="group flex items-center gap-2.5 rounded-2xl border border-[#E6D6BF] bg-white px-3 py-2.5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#C9A574] hover:shadow-md"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#8B6A3E]/10 text-[#8B6A3E] transition-colors duration-300 group-hover:bg-[#8B6A3E] group-hover:text-white">
                    <FaPhoneAlt className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8A7460]">
                      Call Us
                    </span>
                    <span className="block truncate font-serif text-sm text-[#2C1810]">
                      +91 9568259784
                    </span>
                  </span>
                </a>
              </div>

              {/* social connect */}
              <div className="rounded-2xl border border-[#E6D6BF] bg-white p-3 shadow-sm">
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8B6A3E]">
                  <span>Connect With Us</span>
                  <span className="h-px w-7 bg-[#C9A574]" />
                </div>
                <p className="mt-1 text-xs leading-5 text-[#7A685B]">
                  Follow us on social media for updates, events, and more.
                </p>
                <div className="mt-1 flex gap-2.5">
                  {[FaFacebook, FaTwitter, FaLinkedin, FaYoutube].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DEC9A8] text-[#8B6A3E] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8B6A3E] hover:bg-[#8B6A3E] hover:text-white hover:shadow-md"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* reassurance note */}
              <div className="flex items-center gap-2.5 rounded-2xl border border-[#E6D6BF] bg-[#F6EFE6] px-3 py-2">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#8B6A3E] text-white">
                  <PiFlowerLotus className="h-4 w-4" />
                </span>
                <p className="text-[11px] leading-4 text-[#5F4A3D]">
                  <span className="font-serif text-sm italic text-[#8B6A3E]">
                    Har sawaal ka jawab, poori shraddha ke saath.
                  </span>
                  <br />
                  No query is too small — our team treats every message with care.
                </p>
              </div>

              {/* ============ MAP ============ */}
              <div className="relative h-[240px] overflow-hidden rounded-2xl border border-[#E6D6BF] shadow-sm sm:h-[280px]">
                <iframe
                  src="https://maps.google.com/maps?q=12/52,%20Site%20-%202,%20Sunrise%20Industrial%20Area,%20Mohan%20Nagar,%20Sahibabad,%20Ghaziabad&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="h-full w-full"
                  title="Head Office Location"
                />

                {/* themed info card */}
                <div className="absolute bottom-3 left-3 right-3 max-w-none overflow-hidden rounded-xl border border-[#E6D6BF] bg-white/95 p-3 shadow-lg backdrop-blur-sm sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-[280px]">
                  <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#C9A574] to-transparent" />
                  <div className="flex items-start gap-2.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#8B6A3E] text-white">
                      <FaMapMarkerAlt className="h-3 w-3" />
                    </span>
                    <div>
                      <h4 className="font-serif text-[15px] text-[#2C1810]">Head Office</h4>
                      <p className="mt-0.5 text-[11px] leading-4 text-[#6B584B]">
                        12/52, Sunrise Industrial Area, Ghaziabad
                      </p>
                      <a
                        href="https://maps.google.com/maps?q=12/52,%20Site%20-%202,%20Sunrise%20Industrial%20Area,%20Mohan%20Nagar,%20Sahibabad,%20Ghaziabad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group mt-1.5 inline-flex items-center gap-1 text-[11px] font-semibold text-[#8B6A3E] hover:underline"
                      >
                        Get Directions
                        <FaChevronRight className="h-2 w-2 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </a>
                    </div>
                  </div>
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