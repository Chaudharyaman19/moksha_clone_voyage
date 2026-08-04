"use client";
import { useState, useEffect } from "react";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import { FaHandHoldingHeart, FaLeaf, FaPhoneAlt, FaPrayingHands, FaFire } from "react-icons/fa";
import { GiWoodPile, GiCandleHolder } from "react-icons/gi";
import { IoFlower } from "react-icons/io5";

export default function FuralSamagriServices() {
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
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F5EBE0]/80 via-transparent to-[#E8DCC8]/40 rounded-[2.5rem] -z-10" />
          
          <div className="py-20 md:py-28 text-center max-w-4xl mx-auto flex flex-col items-center relative">
            <div className="inline-flex items-center justify-center p-5 bg-white/70 rounded-full shadow-sm mb-8 backdrop-blur-md border border-[#E8DCC8] hover:scale-110 transition-transform duration-500">
              <GiWoodPile className="w-10 h-10 text-[#A0522D]" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#3E2723] mb-8 leading-tight tracking-tight">
              Wood & Ritual Items <br className="hidden md:block" />
              <span className="font-medium text-[#8D6E63] italic mt-2 block text-3xl md:text-4xl">Arranged With Deep Respect.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#5D4037] max-w-2xl mx-auto leading-relaxed opacity-95">
              At Moksha Sewa, we understand the financial and emotional burden of the final rites. 
              We arrange cremation wood, shroud cloth (Kafan), pure flowers, lamps, and all essential prayer items completely free for families in need.
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row gap-5 items-center justify-center w-full">
              <a href="/request-help" className="w-full sm:w-auto px-8 py-4 bg-[#8B6A3E] text-white rounded-full font-medium text-lg shadow-[0_8px_20px_-6px_rgba(139,106,62,0.5)] hover:bg-[#73532F] hover:shadow-[0_12px_25px_-6px_rgba(139,106,62,0.6)] transition-all duration-300 flex items-center justify-center gap-3 group">
                <FaHandHoldingHeart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Request Wood & Items
              </a>
              <a href="tel:+919999999999" className="w-full sm:w-auto px-8 py-4 bg-white text-[#8B6A3E] border border-[#D7CCC8] rounded-full font-medium text-lg shadow-sm hover:bg-[#F9F5F0] hover:border-[#8B6A3E] transition-all duration-300 flex items-center justify-center gap-3">
                <FaPhoneAlt className="w-4 h-4" />
                24x7 Helpline
              </a>
            </div>
          </div>
        </section>

        {/* Essential Items */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-medium text-[#4A3D36] mb-4">What We Arrange</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#8B6A3E] to-transparent mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ItemCard 
              icon={<GiWoodPile className="w-8 h-8" />}
              title="Cremation Wood"
              desc="We provide sufficient, dry wood required for a complete and respectful cremation ceremony without any cost."
            />
            <ItemCard 
              icon={<IoFlower className="w-8 h-8" />}
              title="Shroud & Flowers"
              desc="Pure white shroud cloth (Kafan), garlands, and loose flowers are arranged to honor the departed soul with purity."
            />
            <ItemCard 
              icon={<GiCandleHolder className="w-8 h-8" />}
              title="Prayer Items"
              desc="Ghee, sandalwood, incense, earthen lamps (Diyas), and all necessary Pooja Samagri are carefully put together."
            />
          </div>
        </section>

        {/* Emotional Connect */}
        <section className="w-full bg-gradient-to-br from-[#F5F0EA] to-[#FDFBF7] py-24 px-4 sm:px-6 lg:px-8 border-t border-[#E8DCC8]">
          <div className="max-w-4xl mx-auto text-center">
            <FaLeaf className="w-10 h-10 text-[#A0522D]/30 mx-auto mb-8" />
            <h3 className="text-2xl md:text-3xl font-light text-[#5D4037] mb-8 italic leading-relaxed">
              "We believe that no family should have to worry about the expenses of a final farewell while grieving the loss of their loved one."
            </h3>
            <p className="text-lg text-[#795548] leading-relaxed max-w-2xl mx-auto">
              Our volunteers work tirelessly to ensure that every necessary item reaches the cremation ground on time. 
              You mourn in peace, let us handle the arrangements.
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
