"use client";

import Image from "next/image";

const galleryImages = [
  "/assets/im1.jpeg",
  "/assets/im2.jpeg",
  "/assets/im3.jpeg",
  "/assets/im4.jpeg",
  "/assets/im5.jpeg",
  "/assets/four.jpg",
  "/assets/one.jpg",
  "/assets/two.jpg",
  "/assets/three.jpg",
];

export default function GlimpseOfJourney() {
  return (
    <section className="relative w-full overflow-hidden border-t border-[#E9DDCF] bg-[#FFFCF8] py-2 md:py-3">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-0">
        
        <header className="mb-4 text-center">
          <div className="mb-2 inline-flex items-center space-x-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#8B6A3E] to-transparent" />
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#8B6A3E]">
              MOMENTS OF SERVICE
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#8B6A3E] to-transparent" />
          </div>
          <h2 className="font-serif text-[20px] font-normal leading-none text-[#2F1D14] sm:text-[28px] md:text-[24px] lg:whitespace-nowrap lg:text-[30px] xl:text-[32px]">
            A Glimpse of Our Journey
          </h2>
        </header>

        {/* Marquee Wrapper */}
        <div className="relative mt-2 flex w-full overflow-hidden pb-4 pt-2">
          {/* Gradient Masks */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-2 bg-gradient-to-r from-[#FFFCF8] to-transparent sm:w-3 lg:w-4" />
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-2 bg-gradient-to-l from-[#FFFCF8] to-transparent sm:w-3 lg:w-4" />

          <div className="flex w-max animate-scroll gap-3 sm:gap-4 md:gap-5 hover:[animation-play-state:paused]">
            {/* Double the array for seamless scrolling */}
            {[...galleryImages, ...galleryImages].map((imgSrc, index) => (
              <article
                key={`gallery-${index}`}
                className="group relative h-[140px] w-[200px] shrink-0 overflow-hidden rounded-[12px] border border-[#E9DED2] bg-white shadow-[0_4px_14px_rgba(66,43,24,0.055)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(66,43,24,0.09)] sm:h-[160px] sm:w-[240px] md:h-[180px] md:w-[280px]"
              >
                <Image
                  src={imgSrc}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  quality={90}
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                />
              </article>
            ))}
          </div>
        </div>

        <div className="mt-3 flex justify-center md:mt-4">
          <button
            type="button"
            className="inline-flex h-10 min-w-[200px] items-center justify-center gap-2 rounded-md border border-[#C78B4D] bg-white px-6 text-[13px] font-medium text-[#A86722] transition-colors hover:bg-[#FBF4EA]"
          >
            <span>View Full Gallery</span>
          </button>
        </div>

      </div>
    </section>
  );
}
