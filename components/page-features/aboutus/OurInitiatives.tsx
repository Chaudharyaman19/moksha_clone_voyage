"use client";

import React from "react";
import Image from "next/image";
import { itemOrFallback, textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";

const defaultInitiatives = [
  { title: "Meri Beti Mera Abhiman", image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165232/moksha-sewa/assets/initiatives/meri%20beti%20mera%20abhiman.webp" },
  { title: "Arogya Mantra", image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165212/moksha-sewa/assets/initiatives/Arogya%20Mantra.webp" },
  { title: "The Yogshala Expo", image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165229/moksha-sewa/assets/initiatives/The%20Yogshala%20Expo.webp" },
  { title: "The Yogshala Jobs", image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165230/moksha-sewa/assets/initiatives/The%20Yogshala%20Jobs.webp" },
  { title: "Swachh Bharat Sankalp", image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165225/moksha-sewa/assets/initiatives/Swachh%20Bharat%20Sankalp.webp" },
  { title: "Indian Contemporary Art", image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165220/moksha-sewa/assets/initiatives/Indian%20Contemporary%20Art.webp" },
  { title: "ICOA", image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165219/moksha-sewa/assets/initiatives/ICOA.webp" },
  { title: "Acharaya ji Online", image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165209/moksha-sewa/assets/initiatives/Acharaya%20ji%20Online.webp" },
  { title: "Aviral Ganga", image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165214/moksha-sewa/assets/initiatives/Aviral%20Ganga.webp" },
  { title: "Arogya Film Festival", image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165211/moksha-sewa/assets/initiatives/Arogya%20Film%20Festival.webp" },
  { title: "Indo Himalayan Expo", image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165221/moksha-sewa/assets/initiatives/Indo%20Himalayan%20Expo.webp" },
  { title: "Anna Sewa", image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165210/moksha-sewa/assets/initiatives/Anna%20Sewa.webp" },
  { title: "NGT Farms", image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165223/moksha-sewa/assets/initiatives/NGT%20Farms.webp" },
  { title: "The Grand Master of Yoga", image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165226/moksha-sewa/assets/initiatives/The%20Grand%20Master%20of%20Yoga.webp" },
  { title: "Arogya Sangoshti", image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165213/moksha-sewa/assets/initiatives/Arogya%20Sangoshti.webp" },
  { title: "Bachchan Ki Rangshala", image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165217/moksha-sewa/assets/initiatives/Bachchan%20Ki%20Rangshala.webp" },
  { title: "Ayush Mitra", image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165216/moksha-sewa/assets/initiatives/Ayush%20Mitra.webp" },
  { title: "Vaidhyashala", image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165231/moksha-sewa/assets/initiatives/Vaidhyashala.webp" },
  { title: "Global Eco-Tech Expo", image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165218/moksha-sewa/assets/initiatives/Global%20Eco-Tech%20Expo.webp" },
  { title: "Ayush Abhinandanam", image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165215/moksha-sewa/assets/initiatives/Ayush%20Abhinandanam.webp" },
  { title: "MP Development Expo", image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165222/moksha-sewa/assets/initiatives/MP%20Development%20Expo.webp" },
  { title: "Shrimad Bhagwat Katha", image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165224/moksha-sewa/assets/initiatives/Shrimad%20Bhagwat%20Katha.webp" },
  { title: "The Yogshala Clinic", image: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165228/moksha-sewa/assets/initiatives/The%20Yogshala%20Clinic.webp" },
];

export default function OurInitiatives() {
  const section = useWebsiteSection("about-our-initiatives");
  const eyebrow = textOrFallback(section?.eyebrow, "Our Expanding Horizon", 60);
  const title = textOrFallback(section?.title, "Our Namo Gange Initiatives", 80);

  const initiatives = defaultInitiatives.map((def, i) => {
    const item = itemOrFallback(section?.items, i, { title: def.title, image: def.image });
    return {
      title: item.title || def.title,
      image: item.image || def.image,
    };
  });

  return (
    <section className="bg-[#FBF8F3] py-2 lg:py-3 overflow-hidden border-t border-[#8B6A3E]/10">
      <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12">
        <header className="mx-auto mb-2 flex flex-col items-center justify-center text-center">
          <div className="mb-2 inline-flex items-center gap-2">
            <span className="h-[1px] w-8 bg-[#8B6A3E]" />
            <span className="text-[14px] font-semibold uppercase tracking-[0.2em] text-[#8B6A3E]">
              {eyebrow}
            </span>
            <span className="h-[1px] w-8 bg-[#8B6A3E]" />
          </div>
          <h2
            className="text-[32px] font-normal leading-tight text-[#2C1810] sm:text-[38px] md:text-[44px]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            {title}
          </h2>
        </header>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Fades for Smooth Scrolling */}
          <div className="absolute bottom-0 left-0 top-0 z-10 w-24 bg-gradient-to-r from-[#FBF8F3] to-transparent" />
          <div className="absolute bottom-0 right-0 top-0 z-10 w-24 bg-gradient-to-l from-[#FBF8F3] to-transparent" />

          <div className="overflow-hidden py-1">
            <div className="marquee-track marquee-track-initiatives">
              {[...initiatives, ...initiatives].map((item, index) => (
                <div
                  key={`${item.title}-${index}`}
                  className="group flex items-center pr-10 pl-6"
                  title={item.title}
                  aria-hidden={index >= initiatives.length}
                >
                  <Image
                    src={item.image}
                    alt={index >= initiatives.length ? "" : item.title}
                    width={160}
                    height={96}
                    sizes="160px"
                    className="h-16 w-auto object-contain drop-shadow-sm transition-all duration-300 hover:scale-105 sm:h-20 md:h-24"
                  />
                  {/* Vertical Divider */}
                  <div className="ml-10 h-14 w-[1px] bg-[#D9B681]/30" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
