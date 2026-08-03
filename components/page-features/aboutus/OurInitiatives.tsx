import React from "react";
import Marquee from "react-fast-marquee";

const initiatives = [
  "Meri Beti Mera Abhiman",
  "Arogya Mantra",
  "The Yogshala Expo",
  "The Yogshala Jobs",
  "Swachh Bharat Sankalp",
  "Indian Contemporary Art",
  "ICOA",
  "Acharaya ji Online",
  "Aviral Ganga",
  "Arogya Film Festival",
  "Indo Himalayan Expo",
  "Anna Sewa",
  "NGT Farms",
  "The Grand Master of Yoga",
  "Arogya Sangoshti",
  "Bachchan Ki Rangshala",
  "Ayush Mitra",
  "Vaidhyashala",
  "Global Eco-Tech Expo",
  "Ayush Abhinandanam",
  "MP Development Expo",
  "Shrimad Bhagwat Katha",
  "The Yogshala Clinic"
];

export default function OurInitiatives() {
  return (
    <section className="bg-[#FBF8F3] py-6 lg:py-8 overflow-hidden border-t border-[#8B6A3E]/10">
      <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12">
        <header className="mx-auto mb-6 flex flex-col items-center justify-center text-center">
          <div className="mb-2 inline-flex items-center gap-2">
            <span className="h-[1px] w-8 bg-[#8B6A3E]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8B6A3E]">
              Our Expanding Horizon
            </span>
            <span className="h-[1px] w-8 bg-[#8B6A3E]" />
          </div>
          <h2 
            className="text-[32px] font-normal leading-tight text-[#2C1810] sm:text-[38px] md:text-[44px]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Our Initiatives
          </h2>
          <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-[#5F4A3D] sm:text-[15px]">
            Driven by our parent organization, Namo Gange Trust, we continuously strive to serve humanity through a wide array of impactful programs across health, culture, and social welfare.
          </p>
        </header>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Fades for Smooth Scrolling */}
          <div className="absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-[#FBF8F3] to-transparent" />
          <div className="absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-[#FBF8F3] to-transparent" />

          <Marquee speed={45} gradient={false} pauseOnHover={true} className="py-4">
            {initiatives.map((title, index) => (
              <div 
                key={index}
                className="group mx-4 flex h-24 w-[280px] cursor-pointer flex-col items-center justify-center rounded-xl border border-[#D9B681]/30 bg-white px-4 text-center shadow-[0_4px_15px_rgba(44,24,16,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#8B6A3E]/50 hover:shadow-[0_8px_25px_rgba(139,106,62,0.15)]"
              >
                <div className="mb-2 h-8 w-8 rounded-full bg-[#F4EDE3] flex items-center justify-center group-hover:bg-[#8B6A3E] transition-colors duration-300">
                  <span className="text-[14px] font-serif font-bold text-[#8B6A3E] group-hover:text-white transition-colors duration-300">
                    {title.charAt(0)}
                  </span>
                </div>
                <h3 className="text-[13px] font-semibold tracking-wide text-[#2C1810] group-hover:text-[#8B6A3E] transition-colors duration-300 line-clamp-2">
                  {title}
                </h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
