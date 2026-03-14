"use client";

import { useState, useEffect } from "react";

export default function CompassionSection() {
  return (
    <section className="w-full relative overflow-hidden min-h-[650px] md:min-h-[700px] lg:min-h-[750px]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-no-repeat"
            style={{
              backgroundImage: "url('/assets/chatgpt.png')",
              backgroundPosition: "right center",
              backgroundSize: "contain",
            }}
          />

          {/* Single, balanced gradient overlay - this controls brightness */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8F4EC] via-[#F8F4EC]/20 to-[#F8F4EC]/0"></div>
        </div>

        {/* Blur elements with reduced opacity for subtle depth */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#E8DBC5] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4C1A6] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute top-40 right-40 w-80 h-80 bg-[#C9B696] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="relative z-10 h-full min-h-[650px] md:min-h-[700px] lg:min-h-[750px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-full min-h-[650px] md:min-h-[700px] lg:min-h-[750px] flex items-center">
          <div className="max-w-3xl py-12 md:py-16">
            <div className="inline-flex items-center space-x-2 mb-5">
              <div className="w-12 h-0.5 bg-[#8B6A3E]"></div>
              <span className="text-[#8B6A3E] font-medium tracking-wide uppercase text-xs">
                Our Mission
              </span>
            </div>

            <h2 className="text-4xl md:text-4xl font-normal text-[#3A2A1F] leading-tight mb-5">
              <span className="block mb-2">A Journey Guided by Love</span>
              <span className="block font-light text-[#4A3A2F] text-3xl md:text-3xl">
                with Peace of Mind
              </span>
            </h2>

            <div className="mb-7">
              <svg
                className="w-28 h-2 text-[#D4B68A] mb-4"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,5 Q25,0 50,5 T100,5"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  fill="none"
                />
              </svg>
            </div>

            <p className="text-[#5A4030] text-base leading-relaxed mb-8 max-w-2xl font-light">
              At{" "}
              <span className="font-semibold text-[#8B6A3E]">
                Moksha Voyage
              </span>
              To build a trusted, transparent digital ecosystem that connects
              families with verified end-of-life service providers, provides
              step-by-step emotional and ritual guidance, and ensures no one
              navigates life's most profound transition alone or without
              dignity. Our mission is to create a trusted digital ecosystem that
              supports families during life’s most difficult moments by
              connecting them with verified end-of-life service providers and
              offering compassionate guidance through every emotional and ritual
              step with dignity and care.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-7 py-3.5 bg-[#8B6A3E] text-white text-sm rounded-md font-medium hover:bg-[#7A5A2E] transition-colors shadow-sm hover:shadow-md">
                Learn More
              </button>
              <button className="px-7 py-3.5 border border-[#8B6A3E] text-[#8B6A3E] text-sm rounded-md font-medium hover:bg-[#8B6A3E]/10 transition-colors">
                Contact Our Team
              </button>
            </div>

            <div className="mt-9 flex items-center space-x-8">
              <div className="flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-full bg-[#8B6A3E]/10 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-[#8B6A3E]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm text-[#5A4030] font-medium">
                  24/7 Support
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-full bg-[#8B6A3E]/10 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-[#8B6A3E]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 3a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm0 3a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm0 3a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm text-[#5A4030] font-medium">
                  Cultural Sensitivity
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
