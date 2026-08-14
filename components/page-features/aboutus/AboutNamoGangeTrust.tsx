import Image from "next/image";

export default function AboutNamoGangeTrust() {
  return (
    <section className="bg-white py-3 md:py-4">
      <div className="mx-auto w-full max-w-7xl px-0">
        
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr] lg:gap-10 items-center">
          
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="h-[1px] w-8 bg-[#8B6A3E]" />
              <span className="text-[14px] font-semibold uppercase tracking-[0.2em] text-[#8B6A3E]">
                Our Parent Organization
              </span>
            </div>

            <h2 
              className="mb-4 text-[28px] font-normal leading-[1.2] text-[#2C1810] sm:text-[34px] md:text-[38px]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Namo Gange Trust
            </h2>

            {/* Diya Flourish */}
         

            <div className="space-y-4 text-[14px] leading-relaxed text-[#5F4A3D] sm:text-[15px]">
              <p>
                Moksha Sewa operates under the aegis of the Namo Gange Trust, a dedicated non-profit 
                organization committed to preserving our rich cultural heritage and serving humanity.
              </p>
              <p>
                The trust has been at the forefront of various social initiatives, deeply rooted in 
                Vedic traditions and modern welfare. Through Moksha Sewa, the trust extends its 
                compassion to families dealing with loss, ensuring that every soul's final journey 
                is honored with dignity, transparency, and deep respect for our ancient rituals.
              </p>
            </div>
            
            <div className="mt-6">
              <a 
                href="https://www.namogange.org/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-[#8B6A3E] bg-transparent px-6 text-[14px] font-medium text-[#8B6A3E] transition-all hover:bg-[#8B6A3E] hover:text-white"
              >
                Visit Namo Gange Trust
              </a>
            </div>
          </div>

          {/* Right: Video (previously Logo) */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end w-full">
            <div className="relative group w-full max-w-[650px] lg:max-w-none">
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
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
