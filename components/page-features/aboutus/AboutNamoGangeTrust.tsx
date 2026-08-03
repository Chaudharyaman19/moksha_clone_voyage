import Image from "next/image";

export default function AboutNamoGangeTrust() {
  return (
    <section className="bg-white py-4 md:py-6">
      <div className="mx-auto w-full max-w-7xl px-0">
        
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:gap-10 items-center">
          
          {/* Left: Text Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="h-[1px] w-8 bg-[#8B6A3E]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8B6A3E]">
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
            <div className="mb-5 flex items-center gap-2">
              <span className="h-[2px] w-10 bg-[#8B6A3E]" />
              <span className="h-1.5 w-1.5 rotate-45 border border-[#8B6A3E] bg-[#C9A574]" />
              <span className="h-[1px] w-10 bg-gradient-to-r from-[#C9A574] to-transparent" />
            </div>

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
                className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-[#8B6A3E] bg-transparent px-6 text-[13px] font-medium text-[#8B6A3E] transition-all hover:bg-[#8B6A3E] hover:text-white"
              >
                Visit Namo Gange Trust
              </a>
            </div>
          </div>

          {/* Right: Namo Gange Logo / Visuals */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative flex items-center justify-center p-4 lg:pr-8 w-full max-w-[450px]">
              <Image
                src="/assets/namogange-logo.webp"
                alt="Namo Gange Trust Logo"
                width={450}
                height={180}
                className="object-contain drop-shadow-lg transition-transform hover:scale-105 duration-500 w-full h-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='450' height='180'%3E%3Crect width='100%25' height='100%25' fill='%23F4EDE3'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16px' fill='%238B6A3E'%3ENamo Gange Logo%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
