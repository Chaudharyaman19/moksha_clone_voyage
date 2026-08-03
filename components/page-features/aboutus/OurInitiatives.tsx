import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const initiatives = [
  { title: "Meri Beti Mera Abhiman", image: "/assets/initiatives/meri beti mera abhiman.webp" },
  { title: "Arogya Mantra", image: "/assets/initiatives/Arogya Mantra.webp" },
  { title: "The Yogshala Expo", image: "/assets/initiatives/The Yogshala Expo.webp" },
  { title: "The Yogshala Jobs", image: "/assets/initiatives/The Yogshala Jobs.webp" },
  { title: "Swachh Bharat Sankalp", image: "/assets/initiatives/Swachh Bharat Sankalp.webp" },
  { title: "Indian Contemporary Art", image: "/assets/initiatives/Indian Contemporary Art.webp" },
  { title: "ICOA", image: "/assets/initiatives/ICOA.webp" },
  { title: "Acharaya ji Online", image: "/assets/initiatives/Acharaya ji Online.webp" },
  { title: "Aviral Ganga", image: "/assets/initiatives/Aviral Ganga.webp" },
  { title: "Arogya Film Festival", image: "/assets/initiatives/Arogya Film Festival.webp" },
  { title: "Indo Himalayan Expo", image: "/assets/initiatives/Indo Himalayan Expo.webp" },
  { title: "Anna Sewa", image: "/assets/initiatives/Anna Sewa.webp" },
  { title: "NGT Farms", image: "/assets/initiatives/NGT Farms.webp" },
  { title: "The Grand Master of Yoga", image: "/assets/initiatives/The Grand Master of Yoga.webp" },
  { title: "Arogya Sangoshti", image: "/assets/initiatives/Arogya Sangoshti.webp" },
  { title: "Bachchan Ki Rangshala", image: "/assets/initiatives/Bachchan Ki Rangshala.webp" },
  { title: "Ayush Mitra", image: "/assets/initiatives/Ayush Mitra.webp" },
  { title: "Vaidhyashala", image: "/assets/initiatives/Vaidhyashala.webp" },
  { title: "Global Eco-Tech Expo", image: "/assets/initiatives/Global Eco-Tech Expo.webp" },
  { title: "Ayush Abhinandanam", image: "/assets/initiatives/Ayush Abhinandanam.webp" },
  { title: "MP Development Expo", image: "/assets/initiatives/MP Development Expo.webp" },
  { title: "Shrimad Bhagwat Katha", image: "/assets/initiatives/Shrimad Bhagwat Katha.webp" },
  { title: "The Yogshala Clinic", image: "/assets/initiatives/The Yogshala Clinic.webp" }
];

export default function OurInitiatives() {
  return (
    <section className="bg-[#FBF8F3] py-2 lg:py-3 overflow-hidden border-t border-[#8B6A3E]/10">
      <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12">
        <header className="mx-auto mb-2 flex flex-col items-center justify-center text-center">
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
        </header>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Fades for Smooth Scrolling */}
          <div className="absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-[#FBF8F3] to-transparent" />
          <div className="absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-[#FBF8F3] to-transparent" />

          <Marquee speed={45} gradient={false} pauseOnHover={true} className="py-1">
            {initiatives.map((item, index) => (
              <div 
                key={index}
                className="group flex items-center pr-10 pl-6"
                title={item.title}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-all duration-300 hover:scale-105 drop-shadow-sm"
                />
                {/* Vertical Divider */}
                <div className="ml-10 h-14 w-[1px] bg-[#D9B681]/30" />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
