"use client";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import { FaHandHoldingHeart, FaLeaf, FaPhoneAlt, FaCarSide } from "react-icons/fa";
import Image from "next/image";
import { MdOutlineLocalPhone } from "react-icons/md";
import { GiSteeringWheel } from "react-icons/gi";

export default function HearseVanServices() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-[#4A3D36]">
      <Topbar />
      <Navbar />

      <main className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        {/* Hero Section */}
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Text Content */}
            <div className="flex flex-col items-start relative z-10 order-2 lg:order-1">
              <div className="inline-flex items-center justify-center p-4 bg-white/80 rounded-full shadow-sm mb-6 backdrop-blur-md border border-[#E8DCC8]">
                <FaCarSide className="w-8 h-8 text-[#A0522D]" />
              </div>
              <h1 className="text-[38px] sm:text-[46px] lg:text-[52px] font-serif text-[#3E2723] mb-5 leading-[1.1] tracking-tight">
                Hearse Van (Shav Vahan)
                <span className="font-medium text-[#8D6E63]  mt-1 block text-[28px] md:text-[34px]">For a Dignified Final Journey.</span>
              </h1>
              <p className="text-[15px] sm:text-[16px] text-[#5D4037] leading-relaxed opacity-95 mb-8">
                The final journey should be carried out with the utmost dignity. We help coordinate Hearse Van (Shav Vahan) support for eligible cases, subject to verification, location and availability.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a href="/request-help" className="px-6 md:px-8 py-3 bg-[#8B6A3E] text-white rounded-full font-medium text-sm shadow-[0_8px_20px_-6px_rgba(139,106,62,0.5)] hover:bg-[#73532F] transition-all duration-300 flex items-center justify-center gap-3 group">
                  <FaHandHoldingHeart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Request Hearse Van
                </a>
                <a href="tel:+919999999999" className="px-6 md:px-8 py-3 bg-white text-[#8B6A3E] border border-[#D7CCC8] rounded-full font-medium text-sm shadow-sm hover:bg-[#F9F5F0] transition-all duration-300 flex items-center justify-center gap-3">
                  <FaPhoneAlt className="w-4 h-4" />
                  24x7 Helpline
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[400px] lg:h-[550px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl order-1 lg:order-2">
              <Image 
                src="/assets/serving/emergency-transport.png"
                alt="Moksha Sewa Hearse Van"
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
            <h2 className="text-[28px] md:text-[34px] font-serif text-[#4A3D36] mb-4">How We Assist You</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#8B6A3E] to-transparent mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ItemCard 
              icon={<FaCarSide className="w-8 h-8" />}
              title="Immediate Availability"
              desc="Our vans are on standby across the city to ensure prompt transportation when you need it most."
            />
            <ItemCard 
              icon={<GiSteeringWheel className="w-8 h-8" />}
              title="Professional Drivers"
              desc="Empathetic drivers who understand the sensitivity of the moment and drive with caution and respect."
            />
            <ItemCard 
              icon={<MdOutlineLocalPhone className="w-8 h-8" />}
              title="Seamless Coordination"
              desc="Our volunteers coordinate with the hospital and the cremation ground so you don't have to."
            />
          </div>
        </section>

        {/* Emotional Connect */}
        <section className="w-full bg-gradient-to-br from-[#F5F0EA] to-[#FDFBF7] py-24 px-4 sm:px-6 lg:px-8 border-t border-[#E8DCC8]">
          <div className="max-w-4xl mx-auto text-center">
            <FaLeaf className="w-10 h-10 text-[#A0522D]/30 mx-auto mb-8" />
            <h3 className="text-[24px] md:text-[28px] font-light text-[#5D4037] mb-8  leading-relaxed">
              &quot;We ensure their final journey is as peaceful and dignified as the life they lived.&quot;
            </h3>
            <p className="text-[15px] sm:text-[16px] text-[#795548] leading-relaxed max-w-2xl mx-auto">
              You should never have to worry about transportation logistics while mourning. Moksha Sewa stands ready to help you navigate this difficult time.
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
      <h4 className="text-[15px] font-semibold text-[#3E2723] mb-4">{title}</h4>
      <p className="text-[14px] text-[#6D4C41] leading-relaxed opacity-90">{desc}</p>
    </div>
  );
}
