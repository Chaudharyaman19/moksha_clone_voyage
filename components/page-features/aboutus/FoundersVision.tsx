import Image from "next/image";
import { Quote } from "lucide-react";

export default function FoundersVision() {
  return (
    <section className="relative overflow-hidden bg-[#FBF8F3] py-3 md:py-4">
      {/* Decorative background circle */}
      <div className="absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/3 translate-x-1/3 rounded-full bg-[#8B6A3E]/[0.03] blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-0">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10 items-center">
          
          {/* Left: Founder's Image */}
          <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
            <div className="relative z-10 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-xl">
              <div className="relative aspect-square md:aspect-[4/3] lg:aspect-[1.25/1] w-full">
                {/* Placeholder for Vijay Sharma's photo */}
                <Image
                  src="/assets/vijay_sharma.jpg"
                  alt="Vijay Sharma - Founder"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    // Fallback to a solid color if image is not yet provided
                    const target = e.target as HTMLImageElement;
                    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500'%3E%3Crect width='100%25' height='100%25' fill='%23E9DDCF'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20px' fill='%238B6A3E'%3EVijay Sharma Photo%3C/text%3E%3C/svg%3E";
                  }}
                />
                
                {/* Elegant overlay gradient at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                
                <div className="absolute bottom-6 left-6">
                  <h3 className="font-serif text-2xl font-medium text-white sm:text-3xl">Vijay Sharma</h3>
                  <p className="text-sm font-medium tracking-wider text-[#D9B681] uppercase">Founder & COO</p>
                </div>
              </div>
            </div>
            {/* Background frame */}
            <div className="absolute -left-4 -top-4 bottom-4 right-4 z-0 rounded-2xl border border-[#C9A574]/30 bg-[#F4EDE3]" />
          </div>

          {/* Right: Vision Content */}
          <div className="relative">
            <Quote className="absolute -left-6 -top-6 h-16 w-16 text-[#C9A574]/15" />
            
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="h-[1px] w-8 bg-[#8B6A3E]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8B6A3E]">
                Founder's Vision
              </span>
            </div>

            <h2 
              className="mb-3 text-[26px] font-normal leading-[1.2] text-[#2C1810] sm:text-[32px] md:text-[38px]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              The Thought Behind <span className="italic text-[#8B6A3E]">Moksha Sewa</span>
            </h2>

            {/* Diya Flourish */}
            <div className="mb-4 flex items-center gap-2">
              <span className="h-[2px] w-10 bg-[#8B6A3E]" />
              <span className="h-1.5 w-1.5 rotate-45 border border-[#8B6A3E] bg-[#C9A574]" />
              <span className="h-[1px] w-10 bg-gradient-to-r from-[#C9A574] to-transparent" />
            </div>

            <div className="space-y-3 text-[14px] leading-relaxed text-[#5F4A3D] sm:text-[15px]">
              <p>
                "When a family loses a loved one, they are overwhelmed with grief. 
                At that critical moment, dealing with the logistics of rituals, cremation, 
                and arrangements should not add to their burden. Moksha Sewa was born out 
                of this very realization."
              </p>
              <p>
                "Our vision is to provide absolute dignity, complete transparency, and 
                compassionate care to families during their toughest times. Every ritual 
                is guided by deep respect for our traditions, ensuring that the final journey 
                is peaceful and honorable."
              </p>
            </div>

            <div className="mt-4">
              <p className="font-serif text-lg italic text-[#8B6A3E]">Vijay Sharma</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8A7460] mt-0.5">Founder & COO, Moksha Sewa</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
