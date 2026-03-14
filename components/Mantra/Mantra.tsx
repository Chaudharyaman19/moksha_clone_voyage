"use client";

import { useEffect, useState } from "react";

export default function MokshaShlokSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="w-full relative overflow-hidden py-10 md:py-4 lg:py-5 bg-[#F8F4EC]">
      {/* Background Base with subtle texture */}
      <div className="absolute inset-0 bg-[#F8F4EC]">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #8B6A3E 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left side - Content */}
          <div
            className={`w-full lg:w-1/2 transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
          >
            {/* Main content with adjusted spacing for perfect fit */}
            <div className="relative">
              {/* Large decorative quote mark */}
              <div className="absolute -top-6 -left-4 text-8xl text-[#8B6A3E]/20 font-serif">
                "
              </div>

              {/* OM Symbol with enhanced glow */}
              <div className="relative inline-block mb-3">
                <div className="absolute inset-0 blur-xl bg-[#8B6A3E]/30 rounded-full"></div>
                <div className="relative text-5xl text-[#8B6A3E] font-serif drop-shadow-md">
                  ॐ
                </div>
              </div>

              {/* Title with elegant underline */}
              <div className="mb-4">
                <h2 className="text-[#2A1A0F] text-4xl font-light tracking-wide mb-1 drop-shadow-sm">
                  Moksha Voyage
                </h2>
                <div className="flex items-center gap-3">
                  <div className="w-16 h-[2px] bg-[#8B6A3E]/60"></div>
                  <span className="text-[#8B6A3E] text-sm font-medium tracking-[0.25em] uppercase drop-shadow-sm">
                    Sacred Wisdom
                  </span>
                </div>
              </div>

              {/* Small description from PDF */}
              <div className="mb-2 text-[#8B6A3E] text-xs tracking-wider">
                India's First End-to-End Cremation Platform
              </div>

              {/* Shlok with enhanced traditional styling */}
              <div className="mb-3 bg-gradient-to-r from-[#8B6A3E]/10 via-transparent to-transparent p-4 rounded-r-2xl border-l-4 border-[#8B6A3E]/50 shadow-sm">
                <p className="text-[#3A2A1F] text-lg md:text-xl font-bold leading-relaxed whitespace-pre-line drop-shadow-sm">
                  <span className="text-[#8B6A3E] text-2xl mr-1 drop-shadow">
                    ॥
                  </span>
                  सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।
                  {"\n"}
                  अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः।
                  <span className="text-[#8B6A3E] text-2xl ml-1 drop-shadow">
                    ॥
                  </span>
                </p>
              </div>

              {/* Sanskrit transliteration */}
              <div className="mb-2 text-[#4A3A2F]/70 text-xs italic font-medium">
                <p>sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja</p>
                <p>ahaṁ tvāṁ sarva-pāpebhyo mokṣayiṣyāmi mā śucaḥ</p>
              </div>

              {/* Our Promise - from PDF page 7 */}
              <div className="mb-2 p-3 bg-[#8B6A3E]/10 rounded-lg border border-[#8B6A3E]/20">
                <p className="text-[#2A1A0F] text-xs italic font-medium">
                  <span className="text-[#8B6A3E] font-semibold">
                    Our Promise:{" "}
                  </span>
                  "Every family will receive the same standard of care, respect,
                  and transparency we would want for our own loved ones."
                </p>
              </div>

              {/* Meaning with enhanced elegant styling */}
              <div className="relative mb-4 bg-[#8B6A3E]/5 p-4 rounded-lg shadow-[0_6px_18px_rgba(0,0,0,0.08)]">
                <div className="absolute -left-2 top-0 text-3xl text-[#8B6A3E]/40">
                  ❝
                </div>

                <p className="text-[#2A1A0F] text-sm italic font-semibold leading-relaxed pl-6 pr-4 drop-shadow-sm">
                  Abandon all varieties of religion and just surrender unto Me.
                  I shall deliver you from all sinful reactions. Do not fear.
                </p>

                <div className="absolute -right-2 bottom-0 text-3xl text-[#8B6A3E]/40">
                  ❞
                </div>
              </div>

              {/* Core Pillar */}
              <div className="grid grid-cols-5 gap-2 mb-3">
                <div className="text-[15px] text-center text-[#8B6A3E] font-semibold tracking-wide drop-shadow-sm">
                  SIMPLIFY
                </div>

                <div className="text-[12px] text-center text-[#8B6A3E] font-semibold tracking-wide drop-shadow-sm">
                  CONNECT
                </div>

                <div className="text-[12px] text-center text-[#8B6A3E] font-semibold tracking-wide drop-shadow-sm">
                  PROTECT
                </div>

                <div className="text-[12px] text-center text-[#8B6A3E] font-semibold tracking-wide drop-shadow-sm">
                  HONOUR
                </div>

                <div className="text-[12px] text-center text-[#8B6A3E] font-semibold tracking-wide drop-shadow-sm">
                  SERVE
                </div>
              </div>

              {/* Key Benefits Grid - New Addition */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="flex items-center gap-1.5 bg-white/50 p-2 rounded-lg">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B6A3E]"></div>
                  <span className="text-[10px] text-[#5A4030]">
                    24/7 Support
                  </span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/50 p-2 rounded-lg">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B6A3E]"></div>
                  <span className="text-[10px] text-[#5A4030]">
                    Verified Pandits
                  </span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/50 p-2 rounded-lg">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B6A3E]"></div>
                  <span className="text-[10px] text-[#5A4030]">
                    Transparent Pricing
                  </span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/50 p-2 rounded-lg">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B6A3E]"></div>
                  <span className="text-[10px] text-[#5A4030]">
                    Ritual Guidance
                  </span>
                </div>
              </div>

              {/* Decorative footer */}
              <div className="flex items-center gap-4 mt-4">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#8B6A3E]/50 to-transparent"></div>

                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-[#8B6A3E] rounded-full animate-pulse shadow-md"></div>
                  <div className="w-2 h-2 bg-[#8B6A3E]/80 rounded-full"></div>
                  <div className="w-2 h-2 bg-[#8B6A3E]/60 rounded-full"></div>
                </div>

                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#8B6A3E]/50 to-transparent"></div>
              </div>

              {/* Footer Text */}
              <p className="text-center text-[#8B6A3E] text-[12px] tracking-[0.35em] uppercase mt-3 font-bold">
                A JOURNEY GUIDED BY LOVE
              </p>
            </div>
          </div>

          {/* Right side - Image with Stats */}
          <div className="w-full lg:w-1/2">
            <div
              className={`relative transition-all duration-700 ${
                visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-4"
              }`}
            >
              {/* Main Image */}
              <div className="relative h-[600px] rounded-md overflow-hidden shadow-xl mb-6">
                <img
                  src="/assets/grahpravesh.jpg"
                  alt="Sacred"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                {/* Image Overlay Stats */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="grid grid-cols-3 gap-2 text-white">
                    <div className="text-center">
                      <div className="text-xl font-bold text-[#D4B68A]">
                        50+
                      </div>
                      <div className="text-[10px] uppercase tracking-wider">
                        Pandits
                      </div>
                    </div>
                    <div className="text-center border-x border-white/20">
                      <div className="text-xl font-bold text-[#D4B68A]">
                        150+
                      </div>
                      <div className="text-[10px] uppercase tracking-wider">
                        Families
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-[#D4B68A]">
                        24/7
                      </div>
                      <div className="text-[10px] uppercase tracking-wider">
                        Support
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Cards Row */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg text-center">
                  <div className="text-[#8B6A3E] text-lg font-bold">100%</div>
                  <div className="text-[10px] text-[#5A4030]">
                    Verified Services
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg text-center">
                  <div className="text-[#8B6A3E] text-lg font-bold">15+</div>
                  <div className="text-[10px] text-[#5A4030]">Cities</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg text-center">
                  <div className="text-[#8B6A3E] text-lg font-bold">5⭐</div>
                  <div className="text-[10px] text-[#5A4030]">Ratings</div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="mt-4 flex items-center justify-between bg-[#8B6A3E]/10 p-3 rounded-lg">
                <span className="text-xs text-[#5A4030]">
                  Need immediate assistance?
                </span>
                <button className="text-xs bg-[#8B6A3E] text-white px-3 py-1.5 rounded-md hover:bg-[#7A5A2E] transition-colors">
                  Contact Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
