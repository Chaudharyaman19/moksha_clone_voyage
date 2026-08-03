import React from "react";
import { ArrowRight, HeartHandshake, Leaf, Users } from "lucide-react";

export default function AboutNamoGange() {
  return (
    <section className="relative w-full bg-[#fbf5ea] py-10 md:py-12 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B6A3E]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8B6A3E]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
      
      {/* Subtle Watermark */}
      <div className="pointer-events-none absolute left-[55%] top-[15%] select-none text-[180px] font-bold leading-none text-[#8B6A3E]/[0.03]" style={{ fontFamily: "Georgia, serif" }}>
        NAMO
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          
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
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-10 h-[1px] bg-[#8B6A3E]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8B6A3E]">
                Our Parent Organization
              </span>
            </div>

            <h2 
              className="text-4xl md:text-4xl lg:text-[46px] font-normal leading-[1.1] mb-4 bg-gradient-to-br from-[#2C1810] to-[#5F4630] bg-clip-text text-transparent"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Namo Gange Trust
            </h2>

            {/* Diya flourish (same as Hero) */}
            <div className="mb-4 flex items-center gap-2">
              <span className="h-[2px] w-12 bg-[#8B6A3E]" />
              <span className="h-2 w-2 rotate-45 border border-[#8B6A3E] bg-[#C9A574]" />
              <span className="h-px w-20 bg-gradient-to-r from-[#C9A574] to-transparent" />
            </div>

            <p className="text-[#4F3A2D] text-[15px] md:text-[16px] leading-relaxed mb-6">
              <strong className="font-semibold text-[#2C1810]">Moksha Sewa</strong> is a sacred initiative operated under the divine guidance of the <strong className="font-semibold text-[#2C1810]">Namo Gange Trust</strong>. For years, the trust has been a guiding light for humanity, rooted deeply in the ancient Vedic philosophies of compassion, spiritual wellness, and <span className="italic">Nishkam Sewa</span> (selfless service). From promoting holistic Ayurveda globally to supporting grieving families during their darkest hours—the trust works tirelessly to preserve Indian cultural heritage while uplifting society.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              <div className="flex gap-3 group/feature">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#8B6A3E]/10 text-[#8B6A3E] transition-all duration-300 group-hover/feature:bg-[#8B6A3E] group-hover/feature:text-white group-hover/feature:shadow-md">
                  <HeartHandshake className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-[#2C1810] mb-0.5">Nishkam Sewa</h4>
                  <p className="text-[13px] text-[#5F4630] leading-snug">Serving society selflessly, ensuring every soul is treated with utmost dignity.</p>
                </div>
              </div>
              
              <div className="flex gap-3 group/feature">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[#8B6A3E]/10 text-[#8B6A3E] transition-all duration-300 group-hover/feature:bg-[#8B6A3E] group-hover/feature:text-white group-hover/feature:shadow-md">
                  <Leaf className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[14px] font-semibold text-[#2C1810] mb-0.5">Holistic Wellness</h4>
                  <p className="text-[13px] text-[#5F4630] leading-snug">A global movement for health, environment, and preserving Indian traditions.</p>
                </div>
              </div>
            </div>

            <a 
              href="https://namogange.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group/cta inline-flex h-[46px] min-w-[182px] items-center justify-center gap-2.5 rounded-lg bg-[#8B6A3E] px-6 text-[14px] font-semibold text-white shadow-[0_8px_20px_rgba(107,74,32,0.22)] transition hover:-translate-y-0.5 hover:bg-[#73532F] hover:shadow-[0_12px_26px_rgba(107,74,32,0.28)]"
            >
              <span>Discover Namo Gange</span>
              <ArrowRight className="h-[17px] w-[17px] transition-transform duration-300 group-hover/cta:translate-x-0.5" strokeWidth={1.7} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
