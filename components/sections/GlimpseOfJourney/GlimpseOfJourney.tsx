"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

const galleryImages = [
  "/gallary/g1.png",
  "/gallary/g2.png",
  "/gallary/g3.png",
  "/gallary/g4.png",
  "/gallary/gg5.png",
  "/gallary/g6.png",
];

export default function GlimpseOfJourney() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#fbf5ea] to-[#FDFBF7] px-3 py-4 shadow-[inset_0_1px_0_rgba(139,106,62,0.1)] sm:px-4 md:py-5 lg:px-5">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#8B6A3E]/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-0">
        
        <header className="mb-3 flex flex-col items-center text-center">
          <div className="mb-2 inline-flex items-center space-x-3">
            <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#8B6A3E]" />
            <span className="text-[16px] font-bold uppercase tracking-[0.3em] text-[#8B6A3E]">
              Sewa Moments
            </span>
            <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#8B6A3E]" />
          </div>
          <h2 
            className="text-[24px] font-normal leading-tight text-[#2C1810] sm:text-[28px] lg:text-[30px]"
          >
            Real Moments of Help and Antim Sewa
          </h2>
          
          {/* Diya Flourish */}
          <div className="mt-2 flex items-center gap-2">
            <span className="h-[2px] w-12 bg-[#8B6A3E]" />
            <span className="h-2 w-2 rotate-45 border border-[#8B6A3E] bg-[#C9A574]" />
            <span className="h-[1px] w-12 bg-gradient-to-r from-[#C9A574] to-transparent" />
          </div>
        </header>

        {/* Marquee Wrapper */}
        <div className="relative mt-2 flex w-full overflow-hidden pb-2 pt-1">
          {/* Gradient Masks for smooth fading edges */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-12 bg-gradient-to-r from-[#fbf5ea] to-transparent sm:w-20 lg:w-32" />
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-12 bg-gradient-to-l from-[#fbf5ea] to-transparent sm:w-20 lg:w-32" />

          <Marquee speed={45} pauseOnHover={true} gradient={false} className="overflow-y-hidden">
            {galleryImages.map((imgSrc, index) => (
              <article
                key={`gallery-${index}`}
                onClick={() => setSelectedImage(imgSrc)}
                className="group relative h-[150px] w-[220px] shrink-0 cursor-pointer overflow-hidden rounded-[16px] border border-[#E9DED2] bg-[#2C1810] shadow-[0_4px_14px_rgba(66,43,24,0.055)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(139,106,62,0.2)] sm:h-[180px] sm:w-[260px] md:h-[220px] md:w-[320px] mx-[2px] sm:mx-1 md:mx-1"
              >
                <Image
                  src={imgSrc}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  quality={90}
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                
                {/* Stylish Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white shadow-lg backdrop-blur-sm border border-white/30">
                    <FaSearch className="h-6 w-6" />
                  </div>
                </div>
              </article>
            ))}
          </Marquee>
        </div>

        <div className="mt-2 flex justify-center">
          <button
            type="button"
            onClick={() => window.open("/mokshagallery", "_blank", "noopener,noreferrer")}
            className="inline-flex h-10 w-fit items-center justify-center gap-2 rounded-md border border-[#F4C46A] bg-gradient-to-r from-[#B76B16] via-[#E5A93E] to-[#B76B16] px-6 text-[16px] font-bold text-white shadow-[0_0_18px_rgba(229,169,62,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(229,169,62,0.72)]"
          >
            <span>View Sewa Gallery</span>
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white/70 transition-colors hover:bg-white/20 hover:text-white focus:outline-none"
            onClick={() => setSelectedImage(null)}
          >
            <FaTimes className="h-6 w-6" />
          </button>
          <div
            className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-xl shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Expanded view"
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
