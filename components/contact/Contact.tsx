"use client";

import React, { useState } from "react";
import Topbar from "@/components/topbar/Topbar";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import {
  FaBuilding,
  FaMapMarkerAlt, 
  FaPhoneAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaPaperPlane,
  FaHeadset,
  FaChevronRight,
  FaRegBuilding,
  FaStar,
  FaClock,
} from "react-icons/fa";
import { MdVerified, MdEmail } from "react-icons/md";
import { PiFlowerLotus } from "react-icons/pi";
import { GiPrayerBeads } from "react-icons/gi";

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

  const officeLocations = [
    {
      city: "Head Office",
      address: "12/52 Sunrise Industrial Area, Mohan Nagar, Ghaziabad",
      pincode: "201007",
      type: "main",
      icon: FaBuilding,
      color: "from-amber-500 to-orange-500",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop",
    },
    {
      city: "Ghaziabad",
      address: "KK-1, Surdas Marg, Sector 17A, Kavi Nagar Industrial Area",
      pincode: "201001",
      type: "branch",
      icon: FaRegBuilding,
      color: "from-blue-500 to-cyan-500",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop",
    },
    {
      city: "Delhi",
      address: "Ground Floor, Main Market, E-1, opposite KFC, Kalkaji",
      pincode: "110019",
      type: "branch",
      icon: FaRegBuilding,
      color: "from-purple-500 to-pink-500",
      image:
        "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&auto=format&fit=crop",
    },
    {
      city: "Mumbai",
      address: "212 Bussa Industrial Estate, Lower Parel",
      pincode: "400013",
      state: "Maharashtra",
      type: "branch",
      icon: FaRegBuilding,
      color: "from-emerald-500 to-teal-500",
      image:
        "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDF8F2]">
      <Topbar />
      <Navbar />

      <section className="relative h-[600px] md:h-[650px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/assets/chatgpt.png"
            alt="Contact Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/0"></div>
        </div>

        {/* Decorative Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C89B6D] rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>

        {/* Contact With Us Text - Left Side */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-lg">
              <div className="flex items-center gap-2 text-[#5A3E2B] mb-3">
                <PiFlowerLotus className="text-2xl" />
                <span className="text-sm tracking-widest">संपर्क करें</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-serif text-[#5A3E2B] mb-4 leading-tight">
                Contact
                <span className="text-[#C89B6D]"> With Us</span>
              </h1>

              <p className="text-[#5A3E2B] text-lg max-w-md font-light leading-relaxed">
                Get in touch with our team for any inquiries or assistance.
                We're here to help you 24/7.
              </p>

              <button className="mt-6 px-6 py-3 bg-[#5A3E2B] text-white rounded-lg font-medium hover:bg-black hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Get in Touch
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#FDF8F2"
            />
          </svg>
        </div>
      </section>

      <section className="py-6 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-20 h-20 opacity-10">
            <PiFlowerLotus className="w-full h-full text-[#8B5E3C]" />
          </div>
          <div className="relative">
            <span className="text-[#C89B6D] tracking-widest text-sm">
              ॐ OUR PRESENCE ॐ
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#5A3E2B] mt-3 mb-4">
              Office Locations
            </h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-px bg-[#C89B6D]"></div>
              <FaStar className="text-sm text-[#C89B6D]" />
              <div className="w-10 h-px bg-[#C89B6D]"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {officeLocations.map((location, index) => {
            const Icon = location.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5A3E2B] to-transparent z-10"></div>
                  <Image
                    src={location.image}
                    alt={location.city}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Type Badge */}
                  {location.type === "main" && (
                    <span className="absolute top-3 left-3 z-20 px-3 py-1 bg-[#8B5E3C] text-white text-xs font-bold rounded-full shadow-lg">
                      HQ
                    </span>
                  )}

                  {/* Icon */}
                  <div
                    className={`absolute top-3 right-3 z-20 w-10 h-10 rounded-lg bg-gradient-to-br ${location.color} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="text-white text-lg" />
                  </div>

                  {/* City Name */}
                  <div className="absolute bottom-3 left-3 z-20">
                    <h3 className="text-xl font-serif text-white drop-shadow-lg">
                      {location.city}
                    </h3>
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-sm text-[#7B5E47] mb-3 leading-relaxed">
                    {location.address}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-[#F5E9D9]">
                    <span className="text-xs text-[#8B5E3C] font-medium">
                      PIN: {location.pincode}
                    </span>
                    {location.state && (
                      <span className="text-xs text-[#8B5E3C] font-medium">
                        {location.state}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="mb-6">
              <h3 className="text-2xl font-serif text-[#5A3E2B] mb-2">
                Send us a message
              </h3>
              <p className="text-sm text-[#7B5E47]">
                Our team will respond within 1-2 business days.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#5A3E2B] mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-3 bg-[#FDF8F2] border border-[#E7D5C2] rounded-lg focus:ring-2 focus:ring-[#C89B6D] focus:border-[#C89B6D] transition-all text-sm"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#5A3E2B] mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-3 bg-[#FDF8F2] border border-[#E7D5C2] rounded-lg focus:ring-2 focus:ring-[#C89B6D] focus:border-[#C89B6D] transition-all text-sm"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#5A3E2B] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-3 bg-[#FDF8F2] border border-[#E7D5C2] rounded-lg focus:ring-2 focus:ring-[#C89B6D] focus:border-[#C89B6D] transition-all text-sm"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#5A3E2B] mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-3 bg-[#FDF8F2] border border-[#E7D5C2] rounded-lg focus:ring-2 focus:ring-[#C89B6D] focus:border-[#C89B6D] transition-all text-sm"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#5A3E2B] mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-3 bg-[#FDF8F2] border border-[#E7D5C2] rounded-lg focus:ring-2 focus:ring-[#C89B6D] focus:border-[#C89B6D] transition-all text-sm"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#5A3E2B] mb-1">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-3 bg-[#FDF8F2] border border-[#E7D5C2] rounded-lg focus:ring-2 focus:ring-[#C89B6D] focus:border-[#C89B6D] transition-all text-sm resize-none"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              {submitStatus.type && (
                <div
                  className={`p-3 rounded-lg text-sm font-medium ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#8B5E3C] to-[#5A3E2B] text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm disabled:opacity-70 disabled:cursor-not-allowed group hover:shadow-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Side - Contact Cards */}
          <div className="space-y-5">
            {/* Emergency Contact Card */}
            <div className="bg-gradient-to-r from-[#8B5E3C] to-[#5A3E2B] rounded-xl shadow-lg p-6 text-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <FaHeadset className="text-2xl" />
                </div>
                <div>
                  <h4 className="text-xl font-serif mb-2">Emergency Support</h4>
                  <p className="text-white/80 text-sm mb-2">
                    Available 24/7 for urgent inquiries
                  </p>
                  <a
                    href="tel:+919654900525"
                    className="text-2xl font-medium hover:underline"
                  >
                    +91-9654900525
                  </a>
                </div>
              </div>
            </div>

            {/* Social Connect Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h4 className="text-xl font-serif text-[#5A3E2B] mb-3">
                Connect With Us
              </h4>
              <p className="text-[#7B5E47] text-sm mb-4">
                Follow us on social media for updates, events, and more.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: FaFacebook, color: "bg-[#1877F2]" },
                  { icon: FaTwitter, color: "bg-[#1DA1F2]" },
                  { icon: FaLinkedin, color: "bg-[#0A66C2]" },
                  { icon: FaYoutube, color: "bg-[#FF0000]" },
                ].map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href="#"
                      className={`w-10 h-10 ${social.color} rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-md`}
                    >
                      <Icon className="text-white text-xl" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl shadow-lg p-4 text-center">
                <FaClock className="text-2xl text-[#8B5E3C] mx-auto mb-2" />
                <div className="text-2xl font-serif text-[#8B5E3C] mb-1">
                  24/7
                </div>
                <div className="text-[#7B5E47] text-sm">Support</div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-4 text-center">
                <FaHeadset className="text-2xl text-[#8B5E3C] mx-auto mb-2" />
                <div className="text-2xl font-serif text-[#8B5E3C] mb-1">
                  15min
                </div>
                <div className="text-[#7B5E47] text-sm">Avg Response</div>
              </div>
            </div>

            {/* Email Contact */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#F5E9D9] rounded-lg flex items-center justify-center">
                  <MdEmail className="text-2xl text-[#8B5E3C]" />
                </div>
                <div>
                  <p className="text-sm text-[#7B5E47] mb-1">Email Us</p>
                  <a
                    href="mailto:info@mokshavoyage.com"
                    className="text-lg text-[#5A3E2B] hover:underline font-medium"
                  >
                    info@mokshavoyage.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Contact */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#F5E9D9] rounded-lg flex items-center justify-center">
                  <FaPhoneAlt className="text-2xl text-[#8B5E3C]" />
                </div>
                <div>
                  <p className="text-sm text-[#7B5E47] mb-1">Call Us</p>
                  <a
                    href="tel:+911234567890"
                    className="text-lg text-[#5A3E2B] hover:underline font-medium"
                  >
                    +91 123 456 7890
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Map */}
      <section className="w-full h-[450px] relative mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.534949739743!2d77.24169897530307!3d28.635675075660614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd4ef652492d%3A0x30a0a03d7b1764f5!2sBharat%20Mandapam%20(Pragati%20Maidan)!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="w-full h-full"
          title="Bharat Mandapam Location"
        ></iframe>

        <div className="absolute bottom-6 left-6 bg-white rounded-lg shadow-lg p-4 max-w-[300px]">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-[#8B5E3C] rounded flex items-center justify-center">
              <FaMapMarkerAlt className="text-white text-sm" />
            </div>
            <div>
              <h4 className="font-serif text-[#5A3E2B] text-base mb-1">
                Bharat Mandapam
              </h4>
              <p className="text-[#7B5E47] text-sm mb-2">
                Hall No. 11, Pragati Maidan, New Delhi
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8B5E3C] text-sm font-medium hover:underline flex items-center gap-1"
              >
                Get Directions
                <FaChevronRight className="text-xs" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
