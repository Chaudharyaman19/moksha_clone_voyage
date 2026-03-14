"use client";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaCalendarAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { useState, useEffect } from "react";

export default function SacredJourney() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const circleStyles = [
    { width: "28px", height: "28px", left: "10%", top: "20%" },
    { width: "36px", height: "26px", left: "30%", top: "70%" },
    { width: "22px", height: "36px", left: "50%", top: "30%" },
    { width: "36px", height: "26px", left: "70%", top: "50%" },
    { width: "24px", height: "36px", left: "85%", top: "10%" },
  ];

  return (
    <section className="w-full relative py-7 md:py-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FCF9F3] via-[#F8F4EC] to-[#F5F1E9]"></div>

        {circleStyles.map((style, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#8B6A3E]/10"
            style={style}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <div
          className={`text-center mb-8 transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <span className="text-[#8B6A3E] tracking-widest uppercase text-[11px] font-medium">
            24/7 Care Coordination
          </span>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-[#3A2A1F] leading-snug mt-2 mb-2">
            A Journey Guided by Love
          </h2>

          <p className="text-xs sm:text-sm text-[#6E4B3A]/90 max-w-xl mx-auto font-light leading-relaxed">
            One trusted contact. Complete care. First response within 15
            minutes, 24 hours a day, 365 days a year.
          </p>
        </div>

        <div
          className={`transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#8B6A3E] text-white text-sm hover:bg-[#7A5A2E] transition shadow-md hover:shadow-lg">
              <FaPhoneAlt className="text-xs" />
              Get Immediate Support
            </button>

            <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#25D366] text-white text-sm hover:bg-[#128C7E] transition shadow-md hover:shadow-lg">
              <FaWhatsapp className="text-sm" />
              WhatsApp Chat
            </button>

            <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-[#8B6A3E] text-[#8B6A3E] text-sm hover:bg-[#F8F4EC] transition">
              <FaEnvelope className="text-xs" />
              Plan Ahead for Your Family
            </button>
          </div>

          <div className="text-center mt-6">
            <p className="text-[12px] text-[#6E4B3A] font-light">
              Toll-free 24/7 Helpline • Real-Time Family Tracking • Radical
              Pricing Transparency
            </p>
          </div>

          <div className="flex justify-center gap-6 mt-4">
            <span className="text-xs text-[#8B6A3E] font-medium">
              ✓ Response Time SLA: 15 min
            </span>
            <span className="text-xs text-[#8B6A3E] font-medium">
              ✓ Verified Network
            </span>
            <span className="text-xs text-[#8B6A3E] font-medium">
              ✓ No Hidden Charges
            </span>
          </div>
        </div>

        <div
          className={`text-center mt-8 transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <p className="text-sm sm:text-base font-light italic text-[#5A4030] px-4 max-w-lg mx-auto border-l-2 border-[#8B6A3E] pl-4">
            "You should not have to navigate this alone, and with Moksha Voyage,
            you never will."
          </p>
          <p className="text-[10px] text-[#8B6A3E] mt-2">
            — From our Empathy Section
          </p>
        </div>
      </div>
    </section>
  );
}
