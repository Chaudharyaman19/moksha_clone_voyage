"use client";

import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import {
  FaHandHoldingHeart,
  FaLeaf,
  FaPhoneAlt,
} from "react-icons/fa";
import Image from "next/image";
import {
  MdOutlineLocalFlorist,
  MdNaturePeople,
} from "react-icons/md";
import { GiFlowerHat } from "react-icons/gi";

export default function Furaldecoration() {
  return (
    <div className="service-page min-h-screen bg-[#FDFBF7] font-sans text-[#4A3D36]">
      <Topbar />
      <Navbar />

      <main className="pt-28 pb-16 lg:pt-32 lg:pb-24">
        {/* Hero Section */}
        <section className="service-banner relative mx-auto mb-24 w-full max-w-7xl px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
            {/* Text Content */}
            <div className="relative z-10 order-2 flex flex-col items-start lg:order-1">
              <div className="mb-[8px] inline-flex items-center justify-center rounded-full border border-[#E8DCC8] bg-white/80 p-4 shadow-sm backdrop-blur-md">
                <GiFlowerHat className="h-8 w-8 text-[#A0522D]" />
              </div>

              <h1 className="pb-[20px] pt-[8px] font-serif text-[30px] leading-[1.1] tracking-tight text-[#3E2723]">
                Funeral Decoration
                <span className="mt-1 block text-[30px] font-medium text-[#8D6E63]">
                  A Beautiful Final Journey.
                </span>
              </h1>

              <p className="mb-8 text-[18px] leading-relaxed text-[#5D4037] opacity-95">
                We believe in bidding farewell with utmost respect and serenity.
                Our volunteers arrange traditional floral decorations for the
                hearse van, pyre, and prayer hall using fresh and sacred flowers
                to honor the departed soul.
              </p>

              <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                <a
                  href="/request-help"
                  className="group flex items-center justify-center gap-3 rounded-full bg-[#8B6A3E] px-6 py-3 text-[20px] font-medium text-white shadow-[0_8px_20px_-6px_rgba(139,106,62,0.5)] transition-all duration-300 hover:bg-[#73532F] md:px-8"
                >
                  <FaHandHoldingHeart className="h-5 w-5 transition-transform group-hover:scale-110" />
                  Request Decoration
                </a>

                <a
                  href="tel:+919999999999"
                  className="flex items-center justify-center gap-3 whitespace-nowrap rounded-full border border-[#D7CCC8] bg-white px-6 py-3 text-[24px] font-medium text-[#8B6A3E] shadow-sm transition-all duration-300 hover:bg-[#F9F5F0] md:px-8"
                >
                  <FaPhoneAlt className="h-4 w-4" />
                  24x7 Helpline
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative order-1 h-[400px] w-full overflow-hidden rounded-[2.5rem] shadow-2xl lg:order-2 lg:h-[550px]">
              <Image
                src="/assets/how-we-help/three.png"
                alt="Funeral Floral Decoration"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </section>

        {/* Essential Services */}
        <section className="mx-auto mb-24 max-w-7xl px-4 sm:px-6 lg:px-0">
          <div className="mb-16 text-center">
            <h2 className="py-[20px] font-serif text-[30px] text-[#4A3D36]">
              Our Decoration Services
            </h2>

            <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-transparent via-[#8B6A3E] to-transparent" />
          </div>

          <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-3">
            <ItemCard
              icon={<MdOutlineLocalFlorist className="h-8 w-8" />}
              title="Hearse Van Decoration"
              desc="Elegant and respectful floral decoration for the ambulance or hearse van, creating a dignified setting for the final journey."
            />

            <ItemCard
              icon={<FaLeaf className="h-8 w-8" />}
              title="Pyre & Pathway Setup"
              desc="Fresh flowers and sacred leaves are arranged around the cremation area to create a peaceful and respectful environment."
            />

            <ItemCard
              icon={<MdNaturePeople className="h-8 w-8" />}
              title="Prayer Hall Serenity"
              desc="Calming floral arrangements for the Shanti Path and prayer area, creating a serene atmosphere for family and grieving guests."
            />
          </div>
        </section>

        {/* Emotional Connect */}
        <section className="w-full border-t border-[#E8DCC8] bg-gradient-to-br from-[#F5F0EA] to-[#FDFBF7] px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <GiFlowerHat className="mx-auto mb-8 h-10 w-10 text-[#A0522D]/30" />

            <h3 className="py-[20px] text-[30px] font-light leading-relaxed text-[#5D4037]">
              &quot;Flowers speak the language of peace, honoring a beautiful
              life that has moved on.&quot;
            </h3>

            <p className="mx-auto max-w-2xl text-[18px] leading-relaxed text-[#795548]">
              Our volunteers carefully handpick fresh flowers, ensuring the
              final journey of your loved one is surrounded by purity, respect,
              and unconditional love.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function ItemCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="group flex h-full flex-col rounded-3xl border border-[#F0E6D9] bg-white p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_-4px_rgba(139,106,62,0.12)]">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#F0E6D9] bg-[#FDFBF7] text-[#8B6A3E] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#8B6A3E] group-hover:text-white">
        {icon}
      </div>

      <h4 className="mb-4 min-h-[69px] text-[30px] font-semibold leading-[1.15] text-[#3E2723]">
        {title}
      </h4>

      <p className="flex-1 text-[18px] leading-relaxed text-[#6D4C41] opacity-90">
        {desc}
      </p>
    </div>
  );
}