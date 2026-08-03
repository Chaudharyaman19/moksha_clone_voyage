import Image from "next/image";
import { Quote, HandHeart } from "lucide-react";

/*
  TEMPLE (SHIKHARA) SHAPES — pointed mandir peaks, not domes.
  clip-path polygons: peak at top-center, angled shoulders, straight sides.
*/
const templeTall = "polygon(50% 0%, 78% 5%, 100% 13%, 100% 100%, 0% 100%, 0% 13%, 22% 5%)";
const templeMed = "polygon(50% 0%, 78% 6%, 100% 16%, 100% 100%, 0% 100%, 0% 16%, 22% 6%)";

function Kalash({ size = "md" }) {
  const s = size === "sm" ? "h-1.5 w-1.5" : "h-2 w-2";
  return (
    <span className="pointer-events-none absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
      <span className={`block ${s} rounded-full border border-[#8B6A3E] bg-[#D9B681]`} />
    </span>
  );
}

const aboutImages = {
  storyMain: "/assets/about-reference/story-main.png",
  storyRitualItems: "/assets/about-reference/story-ritual-items.png",
  storyTemple: "/assets/about-reference/story-ghat-temple.png",
};

export default function AboutMokshaSewa() {
  return (
    <section className="bg-[#FBF8F3] py-6 lg:py-10">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-0 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
        <div className="relative">
          <Quote className="pointer-events-none absolute -left-4 -top-6 h-20 w-20 text-[#C9A574]/15" />

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
              <HandHeart className="h-5 w-5" />
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
          <div className="grid h-[400px] grid-cols-[1.55fr_1.1fr_0.85fr] grid-rows-2 gap-2 sm:h-[480px]">
            {/* main tile — pointed mandir shikhara top */}
            <div className="group relative row-span-2 [filter:drop-shadow(0_16px_30px_rgba(70,47,31,0.22))]">
              <Kalash />
              <div
                className="absolute inset-0 rounded-b-2xl bg-white"
                style={{ clipPath: templeTall }}
              />
              <div
                className="absolute inset-[3px] overflow-hidden rounded-b-2xl"
                style={{ clipPath: templeTall }}
              >
                <Image
                  src={aboutImages.storyMain}
                  alt="Pandits performing traditional rituals"
                  fill
                  quality={100}
                  sizes="(max-width: 1024px) 45vw, 28vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect width='100%25' height='100%25' fill='%23E9DDCF'/%3E%3C/svg%3E";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/55 via-transparent to-transparent" />
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl border-[3px] border-white shadow-md ring-1 ring-[#E4D5BE]">
              <Image
                src={aboutImages.storyRitualItems}
                alt="Traditional ritual samagri"
                fill
                quality={100}
                sizes="(max-width: 1024px) 30vw, 18vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect width='100%25' height='100%25' fill='%23E9DDCF'/%3E%3C/svg%3E";
                }}
              />
            </div>

            {/* tall right tile — pointed mandir top */}
            <div className="group relative row-span-2 [filter:drop-shadow(0_10px_22px_rgba(70,47,31,0.18))]">
              <Kalash size="sm" />
              <div
                className="absolute inset-0 rounded-b-xl bg-white"
                style={{ clipPath: templeMed }}
              />
              <div
                className="absolute inset-[3px] overflow-hidden rounded-b-xl"
                style={{ clipPath: templeMed }}
              >
                <Image
                  src={aboutImages.storyTemple}
                  alt="Sacred temple ghat illuminated by golden hour light"
                  fill
                  quality={100}
                  sizes="(max-width: 1024px) 24vw, 14vw"
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
      </div>
    </section>
  );
}
