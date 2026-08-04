import Image from "next/image";
import { FaQuoteLeft, FaHandHoldingHeart } from "react-icons/fa";

const aboutImages = {
  storyMain: "/assets/about-story-1.png",
  storyRitualItems: "/assets/about-story-2.png",
  storyTemple: "/assets/about-story-3.png",
};

export default function AboutMokshaSewa() {
  return (
    <section className="bg-[#FBF8F3] py-4 lg:py-6">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-0 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
        <div className="relative">
          <FaQuoteLeft className="pointer-events-none absolute -left-4 -top-6 h-20 w-20 text-[#C9A574]/15" />

          <div className="mb-4 inline-flex items-center gap-3">
            <span className="h-[1px] w-10 bg-[#8B6A3E]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8B6A3E]">
              Our Story
            </span>
          </div>

          <h2 
            className="mb-6 max-w-[420px] text-3xl leading-[1.08] text-[#2C1810] sm:text-4xl md:text-[42px]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Compassion, Care &{" "}
            <span className="italic text-[#8B6A3E]">Complete Support</span>
          </h2>

          {/* Diya Flourish */}
          <div className="mb-8 flex items-center gap-2">
            <span className="h-[2px] w-12 bg-[#8B6A3E]" />
            <span className="h-2 w-2 rotate-45 border border-[#8B6A3E] bg-[#C9A574]" />
            <span className="h-[1px] w-12 bg-gradient-to-r from-[#C9A574] to-transparent" />
          </div>

          <p className="max-w-[470px] text-base leading-relaxed text-[#5F4A3D] sm:text-lg">
            Moksha Sewa was founded with one simple belief: every family
            deserves support and respect during life's most difficult
            moments. We coordinate the practical arrangements and sacred
            customs, so families can focus on remembering their loved one.
          </p>

          {/* signed note */}
          <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-[#E6D6BF] bg-white px-5 py-4 shadow-sm">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8B6A3E] text-white">
              <FaHandHoldingHeart className="h-5 w-5" />
            </span>
            <span>
              <span className="block font-serif text-xl italic leading-tight text-[#8B6A3E]">
                Serving with Devotion
              </span>
              <span className="block text-[11px] uppercase tracking-[0.18em] text-[#8A7460] mt-1">
                Team Moksha Sewa
              </span>
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="grid h-[400px] grid-cols-[1.2fr_1fr] grid-rows-2 gap-2 sm:h-[500px]">
            {/* Main Image (Left) */}
            <div className="group relative row-span-2 h-full w-full overflow-hidden rounded-none shadow-lg ring-1 ring-[#E6D6BF]">
              <Image
                src={aboutImages.storyMain}
                alt="Pandits performing traditional rituals"
                fill
                quality={100}
                sizes="(max-width: 1024px) 45vw, 30vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect width='100%25' height='100%25' fill='%23E9DDCF'/%3E%3C/svg%3E";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/40 via-transparent to-transparent" />
            </div>

            {/* Top Right Image */}
            <div className="group relative h-full w-full overflow-hidden rounded-none shadow-md ring-1 ring-[#E6D6BF]">
              <Image
                src={aboutImages.storyRitualItems}
                alt="Traditional ritual samagri"
                fill
                quality={100}
                sizes="(max-width: 1024px) 30vw, 20vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect width='100%25' height='100%25' fill='%23E9DDCF'/%3E%3C/svg%3E";
                }}
              />
            </div>

            {/* Bottom Right Image */}
            <div className="group relative h-full w-full overflow-hidden rounded-none shadow-md ring-1 ring-[#E6D6BF]">
              <Image
                src={aboutImages.storyTemple}
                alt="Sacred temple ghat"
                fill
                quality={100}
                sizes="(max-width: 1024px) 30vw, 20vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect width='100%25' height='100%25' fill='%23E9DDCF'/%3E%3C/svg%3E";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
