"use client";
import { useState, useEffect } from "react";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import { FaHandHoldingHeart, FaLeaf, FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";
import { MdOutlineLocalFlorist, MdNaturePeople } from "react-icons/md";
import { GiFlowerHat } from "react-icons/gi";

export default function Furaldecoration() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-[#4A3D36]">
      <Topbar />
      <Navbar variant="seva" />

      <main className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        {/* Hero Section */}
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Text Content */}
            <div className="flex flex-col items-start relative z-10 order-2 lg:order-1">
              <div className="inline-flex items-center justify-center p-4 bg-white/80 rounded-full shadow-sm mb-6 backdrop-blur-md border border-[#E8DCC8]">
                <GiFlowerHat className="w-8 h-8 text-[#A0522D]" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#3E2723] mb-6 leading-tight tracking-tight">
                Funeral Decoration
                <span className="font-medium text-[#8D6E63] italic mt-2 block text-3xl md:text-4xl">A Beautiful Final Journey.</span>
              </h1>
              <p className="text-lg md:text-xl text-[#5D4037] leading-relaxed opacity-95 mb-8">
                We believe in bidding farewell with utmost respect and serenity. Our volunteers arrange traditional floral decorations for the hearse van, pyre, and prayer hall using fresh and sacred flowers to honor the departed soul.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a href="/request-help" className="px-8 py-4 bg-[#8B6A3E] text-white rounded-full font-medium text-lg shadow-[0_8px_20px_-6px_rgba(139,106,62,0.5)] hover:bg-[#73532F] transition-all duration-300 flex items-center justify-center gap-3 group">
                  <FaHandHoldingHeart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Request Decoration
                </a>
                <a href="tel:+919999999999" className="px-8 py-4 bg-white text-[#8B6A3E] border border-[#D7CCC8] rounded-full font-medium text-lg shadow-sm hover:bg-[#F9F5F0] transition-all duration-300 flex items-center justify-center gap-3">
                  <FaPhoneAlt className="w-4 h-4" />
                  24x7 Helpline
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[400px] lg:h-[550px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl order-1 lg:order-2">
              <Image 
                src="/assets/how-we-help/three.png"
                alt="Funeral Floral Decoration"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </section>

        {/* Essential Services */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-medium text-[#4A3D36] mb-4">Our Decoration Services</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#8B6A3E] to-transparent mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ItemCard 
              icon={<MdOutlineLocalFlorist className="w-8 h-8" />}
              title="Hearse Van Decoration"
              desc="Elegant and respectful floral decoration for the ambulance or hearse van carrying your loved one."
            />
            <ItemCard 
              icon={<FaLeaf className="w-8 h-8" />}
              title="Pyre & Pathway Setup"
              desc="Arranging flowers and sacred leaves around the cremation area to create a pure and peaceful environment."
            />
            <ItemCard 
              icon={<MdNaturePeople className="w-8 h-8" />}
              title="Prayer Hall Serenity"
              desc="Calming floral arrangements for the Shanti Path (Peace Prayer) to provide solace to grieving guests."
            />
          </div>
        </section>

        {/* Emotional Connect */}
        <section className="w-full bg-gradient-to-br from-[#F5F0EA] to-[#FDFBF7] py-24 px-4 sm:px-6 lg:px-8 border-t border-[#E8DCC8]">
          <div className="max-w-4xl mx-auto text-center">
            <GiFlowerHat className="w-10 h-10 text-[#A0522D]/30 mx-auto mb-8" />
            <h3 className="text-2xl md:text-3xl font-light text-[#5D4037] mb-8 italic leading-relaxed">
              "Flowers speak the language of peace, honoring a beautiful life that has moved on."
            </h3>
            <p className="text-lg text-[#795548] leading-relaxed max-w-2xl mx-auto">
              Our volunteers carefully handpick fresh flowers, ensuring the final journey of your loved one is surrounded by purity, respect, and unconditional love.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function ItemCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] border border-[#F0E6D9] hover:shadow-[0_8px_30px_-4px_rgba(139,106,62,0.12)] hover:-translate-y-1 transition-all duration-500 group">
      <div className="w-16 h-16 bg-[#FDFBF7] border border-[#F0E6D9] rounded-2xl flex items-center justify-center text-[#8B6A3E] mb-6 group-hover:scale-110 group-hover:bg-[#8B6A3E] group-hover:text-white transition-all duration-500">
        {icon}
      </div>
      <h4 className="text-xl font-semibold text-[#3E2723] mb-4">{title}</h4>
      <p className="text-[#6D4C41] leading-relaxed opacity-90">{desc}</p>
    </div>
  );
}
