import React from "react";
import { FaArrowRight, FaHandshake, FaLeaf } from "react-icons/fa";

export default function AboutNamoGange() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fbf5ea] px-3 py-6 sm:px-4 md:py-7 lg:px-5">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B6A3E]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8B6A3E]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
      
      {/* Subtle Watermark */}
      <div className="pointer-events-none absolute left-[55%] top-[15%] select-none text-[180px] font-bold leading-none text-[#8B6A3E]/[0.03]" style={{ fontFamily: "Georgia, serif" }}>
        NAMO
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-0">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-8">
          
          {/* Left: Video with offset frame */}
          <div className="w-full lg:w-1/2 relative group">
            {/* Offset decorative box */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#8B6A3E]/20 to-transparent rounded-3xl opacity-50 transition-all duration-700 group-hover:scale-[1.02]" />
            <div className="absolute -inset-2 rounded-2xl border border-[#8B6A3E]/20 translate-x-4 translate-y-4" />
            
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(44,24,16,0.15)] border border-[#D9B681]/40 bg-[#1a0f09] z-10">
              <video
                src="/assets/videos/namoGange.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 relative z-10">
            <div className="mb-2 inline-flex items-center gap-3">
              <span className="w-10 h-[1px] bg-[#8B6A3E]" />
              <span className="text-[14px] font-semibold uppercase tracking-[0.2em] text-[#8B6A3E]">
                Namo Gange Trust Initiative
              </span>
            </div>

            <h2 
              className="mb-3 text-[24px] font-normal leading-tight bg-gradient-to-br from-[#2C1810] to-[#5F4630] bg-clip-text text-transparent sm:text-[28px] lg:text-[30px]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Service, Rituals and Support
            </h2>

            {/* Diya flourish (same as Hero) */}
            <div className="mb-3 flex items-center gap-2">
              <span className="h-[2px] w-12 bg-[#8B6A3E]" />
              <span className="h-2 w-2 rotate-45 border border-[#8B6A3E] bg-[#C9A574]" />
              <span className="h-px w-20 bg-gradient-to-r from-[#C9A574] to-transparent" />
            </div>

            <p className="mb-4 text-[14px] leading-relaxed text-[#4F3A2D] md:text-[15px]">
              <strong className="font-semibold text-[#2C1810]">Moksha Sewa</strong> is an initiative of <strong className="font-semibold text-[#2C1810]">Namo Gange Trust</strong> created for families who cannot arrange final rites on their own. Through this service, we help with priest support, ritual items, ambulance, cremation wood, cremation-ground coordination and food service, so unclaimed, orphaned and needy people can receive a respectful final farewell.
            </p>

            <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex gap-3 group/feature">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#8B6A3E]/10 text-[#8B6A3E] transition-all duration-300 group-hover/feature:bg-[#8B6A3E] group-hover/feature:text-white group-hover/feature:shadow-md">
                  <FaHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-[#2C1810] mb-0.5">Selfless Service</h4>
                  <p className="text-[14px] text-[#5F4630] leading-snug">Free help for helpless families, with dignity in every final rite.</p>
                </div>
              </div>
              
              <div className="flex gap-3 group/feature">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#8B6A3E]/10 text-[#8B6A3E] transition-all duration-300 group-hover/feature:bg-[#8B6A3E] group-hover/feature:text-white group-hover/feature:shadow-md">
                  <FaLeaf className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-[#2C1810] mb-0.5">Ritual Support</h4>
                  <p className="text-[14px] text-[#5F4630] leading-snug">Priest support, ritual items and guidance so final rites are completed properly.</p>
                </div>
              </div>
            </div>

            <a 
              href="https://namogange.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group/cta inline-flex h-[46px] min-w-[182px] items-center justify-center gap-2.5 rounded-lg bg-[#8B6A3E] px-6 text-[14px] font-semibold text-white shadow-[0_8px_20px_rgba(107,74,32,0.22)] transition hover:-translate-y-0.5 hover:bg-[#73532F] hover:shadow-[0_12px_26px_rgba(107,74,32,0.28)]"
            >
              <span>Know About Namo Gange</span>
              <FaArrowRight className="h-[17px] w-[17px] transition-transform duration-300 group-hover/cta:translate-x-0.5" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
