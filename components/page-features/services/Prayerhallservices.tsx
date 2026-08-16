import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import Image from "next/image";
import { 
  FaHandHoldingHeart, FaOm, FaStar
} from "react-icons/fa";
import { 
  GiLotusFlower, GiCandleHolder
} from "react-icons/gi";
import { BsTelephone } from "react-icons/bs";
import { MdOutlinePeopleAlt, MdHandshake, MdOutlineLocalFlorist } from "react-icons/md";
import { BiBuildingHouse } from "react-icons/bi";
import { TbHeartHandshake } from "react-icons/tb";

const supportCards = [
  { src: "/assets/prayerhallservices/support-1.png", title: "Ground Booking" },
  { src: "/assets/prayerhallservices/support-2.png", title: "Floral Setup" },
  { src: "/assets/prayerhallservices/support-3.png", title: "Seating Arrangements" },
  { src: "/assets/prayerhallservices/support-4.png", title: "Audio & Mic Setup" },
  { src: "/assets/prayerhallservices/support-5.png", title: "Pandit Ji Coordination" },
  { src: "/assets/prayerhallservices/support-6.png", title: "Guest Management" },
];

export default function PrayerHallServices() {
  return (
    <div className="min-h-screen bg-[#FAF8F4] font-sans text-[#321A10]">
      <Topbar />
      <Navbar />

      <main className="pb-6 lg:pb-6 overflow-hidden">
        <section className="relative w-full aspect-[16/5] min-h-[350px] sm:min-h-[530px] overflow-hidden">
          <div className="absolute inset-0">
            <Image 
              src="/assets/prayerhallservices/hero-real.png"
              alt="Prayer Hall Setup"
              fill
              priority
              quality={100}
              className="object-cover object-right"
            />
          </div>
        
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(90deg, rgba(250,248,244,1) 0%, rgba(250,248,244,0.9) 35%, rgba(250,248,244,0.40) 60%, rgba(250,248,244,0.05) 85%)"
            }}
          />

          <div className="relative mx-auto flex h-full w-full max-w-7xl items-center px-4 lg:px-0 pt-16 sm:pt-20 lg:pt-24">
            <div className="max-w-[540px]">
              <div className="mb-1 text-sm text-[#321A10] font-medium tracking-wide flex items-center gap-2">
                <span className="opacity-70">Moksha Sewa</span> 
                <span className="opacity-50">›</span> 
                <span className="opacity-70">Our Services</span> 
                <span className="opacity-50">›</span> 
                <span className="font-semibold text-[#C99A4A]">Ground & Prayer Support</span>
              </div>
              
              <div className="flex items-center gap-2 mb-4 text-[#C99A4A]">
                <GiLotusFlower className="w-5 h-5" />
                <span className="font-medium text-[15px] tracking-wide">Creating A Space For Peace.</span>
              </div>
              
              <h1 className="text-[38px] sm:text-[46px] lg:text-[52px] font-serif text-[#321A10] mb-5 leading-[1.1]">
                Ground & Prayer Support
              </h1>
              
              <p className="text-[15px] sm:text-[16px] text-[#321A10]/80 leading-relaxed mb-8 max-w-[480px]">
                Finding the right place to grieve and pray is essential. We assist with cremation-ground coordination, setting up serene prayer halls, and providing calm guidance for the entire family.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <a href="/request-help" className="inline-flex items-center justify-center gap-2 bg-[#321A10] text-[#FAF8F4] px-6 md:px-8 py-3 rounded-md font-semibold text-sm hover:bg-[#4A2E1B] transition-all shadow-sm">
                  <GiLotusFlower className="w-4 h-4 text-[#C99A4A]" />
                  Request Support
                </a>
                <a href="/donation" className="donate-nav-sparkle relative inline-flex h-[46px] min-w-[190px] items-center justify-center gap-2 overflow-hidden rounded-full border border-[#F4C46A] bg-gradient-to-r from-[#B76B16] via-[#E5A93E] to-[#B76B16] px-6 text-sm font-bold text-white shadow-[0_0_18px_rgba(229,169,62,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(229,169,62,0.72)]">
                  <span className="donate-nav-shine" aria-hidden />
                  <GiCandleHolder className="relative z-10 w-5 h-5" />
                  <span className="relative z-10">Donate for Support</span>
                  <FaStar className="donate-star donate-star-one" aria-hidden />
                  <FaStar className="donate-star donate-star-two" aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Cards (Compact, equal height, single row) */}
        <section className="max-w-7xl mx-auto px-4 lg:px-0 mb-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 h-full">
            <FeatureCard 
              imageSrc="/assets/prayerhallservices/feature-ground.png"
              title="Ground Coordination"
              desc="Seamless logistics with staff"
            />
            <FeatureCard 
              imageSrc="/assets/prayerhallservices/feature-setup.png"
              title="Prayer Setup"
              desc="Beautiful, serene arrangements"
            />
            <FeatureCard 
              imageSrc="/assets/prayerhallservices/feature-family.png"
              title="Family Support"
              desc="Guiding members gently"
            />
            <FeatureCard 
              imageSrc="/assets/prayerhallservices/feature-peace.png"
              title="Peaceful Environment"
              desc="Calm space for mourning"
            />
          </div>
        </section>

        {/* How It Works Section */}
        <section className="pt-2 pb-4 bg-[#FAF8F4] relative">
          <div className="max-w-7xl mx-auto px-4 lg:px-0">
            <div className="text-center mb-6 relative">
              <h2 className="text-[28px] md:text-[34px] font-serif text-[#321A10] inline-flex items-center gap-3">
                <span className="text-[#C99A4A]/80 text-xl">✹</span>
                How It Works
                <span className="text-[#C99A4A]/80 text-xl">✹</span>
              </h2>
            </div>
            
            <div className="relative">
              {/* Dotted Line connector */}
              <div className="hidden lg:block absolute top-[36px] left-[15%] right-[15%] border-t-[1.5px] border-dashed border-[#C99A4A]/40" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                <StepItem 
                  num="1" 
                  icon={<BsTelephone className="w-6 h-6 text-[#321A10]" />} 
                  title="Call or Request Support" 
                />
                <StepItem 
                  num="2" 
                  icon={<BiBuildingHouse className="w-7 h-7 text-[#321A10]" />} 
                  title="Ground Coordination" 
                />
                <StepItem 
                  num="3" 
                  icon={<MdOutlineLocalFlorist className="w-7 h-7 text-[#321A10]" />} 
                  title="Prayer Hall Setup" 
                />
                <StepItem 
                  num="4" 
                  icon={<MdHandshake className="w-7 h-7 text-[#321A10]" />} 
                  title="Guidance During Ceremony" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Complete Support (Marquee) */}
        <section className="w-full max-w-7xl mx-auto px-4 lg:px-0 pt-4 pb-2 overflow-hidden">
          <SectionHeader title="Our Complete Support" />
          
          <style>{`
            @keyframes scrollMarquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-track {
              display: flex;
              width: max-content;
              animation: scrollMarquee 25s linear infinite reverse;
            }
            .marquee-track:hover {
              animation-play-state: paused;
            }
          `}</style>
          
          <div className="mt-8 relative w-full overflow-hidden">
            <div className="marquee-track gap-4 lg:gap-5">
              {[...supportCards, ...supportCards].map((card, idx) => (
                <div key={idx} className="w-[160px] sm:w-[180px] shrink-0">
                  <MarqueeCircleCard src={card.src} title={card.title} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ground Support Roles (4x1 Grid) */}
        <section className="max-w-7xl mx-auto px-4 lg:px-0 pt-0 pb-2 mb-2">
          <SectionHeader title="Ground Support Roles" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-6">
            <RoleSquareCard 
              src="/assets/prayerhallservices/roles-1.png" 
              title="Venue Coordination" 
              desc="Right venue for every sacred ritual." 
            />
            <RoleSquareCard 
              src="/assets/prayerhallservices/roles-2.png" 
              title="Setup & Decor" 
              desc="Arrangements conducted with peace." 
            />
            <RoleSquareCard 
              src="/assets/prayerhallservices/roles-3.png" 
              title="Guest Assistance" 
              desc="Simple guidance at every step." 
            />
            <RoleSquareCard 
              src="/assets/prayerhallservices/roles-4.png" 
              title="Post-Prayer Cleanup" 
              desc="Respectful clearing after rituals." 
            />
          </div>
        </section>

        {/* Trust Cards (3 items) */}
        <section className="max-w-7xl mx-auto px-4 lg:px-0 mt-2 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <TrustCard 
              icon={<FaHandHoldingHeart className="w-10 h-10 text-[#C99A4A]" />}
              title="Compassionate Guidance"
              desc="Care, sensitivity and respect in every moment."
            />
            <TrustCard 
              icon={<FaOm className="w-10 h-10 text-[#C99A4A]" />}
              title="Authentic Arrangements"
              desc="Setups tailored to Shastra and tradition."
            />
            <TrustCard 
              icon={<TbHeartHandshake className="w-10 h-10 text-[#C99A4A]" />}
              title="Support Beyond Ceremony"
              desc="Continued spiritual guidance after the ceremony."
            />
          </div>
        </section>

        {/* Final Donation CTA */}
        <section className="max-w-7xl mx-auto px-4 lg:px-0">
          <div className="bg-[#E7D5B8]/30 rounded-none overflow-hidden border border-[#E7D5B8] flex flex-col lg:flex-row items-stretch shadow-sm">
            
            {/* Left Image (Decorative crop) */}
            <div className="w-full lg:w-1/5 h-[160px] lg:h-auto relative hidden lg:block">
              <Image 
                src="/assets/prayerhallservices/hero.png" 
                alt="Decorative brass items" 
                fill
                className="object-cover object-bottom opacity-90"
              />
            </div>

            {/* Center Content */}
            <div className="flex-1 p-6 lg:p-8 flex flex-col justify-center items-center text-center lg:text-left lg:items-start z-10 bg-gradient-to-r from-[#FAF8F4] via-transparent to-transparent">
              <h2 className="text-2xl lg:text-[28px] font-serif text-[#321A10] mb-5 max-w-lg leading-tight">
                Your Support Helps Families Receive Dignified & Sacred Final Rites
              </h2>
              <a href="/donation" className="donate-nav-sparkle relative inline-flex h-[46px] min-w-[190px] items-center justify-center gap-2 overflow-hidden rounded-full border border-[#F4C46A] bg-gradient-to-r from-[#B76B16] via-[#E5A93E] to-[#B76B16] px-6 text-[15px] font-bold text-white shadow-[0_0_18px_rgba(229,169,62,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(229,169,62,0.72)]">
                <span className="donate-nav-shine" aria-hidden />
                <span className="relative z-10">Donate for Support</span>
                <FaStar className="donate-star donate-star-one" aria-hidden />
                <FaStar className="donate-star donate-star-two" aria-hidden />
              </a>
            </div>
            
            {/* Right Side Icon & Text */}
            <div className="w-full lg:w-1/4 p-6 flex flex-col justify-center items-center text-center border-t lg:border-t-0 lg:border-l border-[#E7D5B8]/50 bg-[#FAF8F4]/50">
              <FaHandHoldingHeart className="w-10 h-10 text-[#C99A4A] mb-3" />
              <p className="text-[#321A10] font-medium text-[16px] leading-relaxed max-w-[150px]">
                Every act of kindness becomes a blessing for many.
              </p>
            </div>
            
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

// ---------------- Components ----------------

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="text-center flex items-center justify-center gap-4 mb-4">
      <GiLotusFlower className="w-5 h-5 text-[#C99A4A] opacity-60 rotate-90" />
      <h2 className="text-3xl lg:text-4xl font-serif text-[#321A10]">{title}</h2>
      <GiLotusFlower className="w-5 h-5 text-[#C99A4A] opacity-60 -rotate-90" />
    </div>
  );
}

function FeatureCard({ imageSrc, title, desc }: { imageSrc: string, title: string, desc: string }) {
  return (
    <div className="relative w-full aspect-[5/4] rounded-sm overflow-hidden group cursor-pointer border border-black/10">
      <Image 
        src={imageSrc} 
        alt={title} 
        fill 
        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/5 flex flex-col justify-end items-center p-5 text-center">
        <h4 className="text-[20px] font-semibold text-white mb-2">{title}</h4>
        {desc && (
          <p className="text-white/90 text-[16px] leading-snug">
            {desc}
          </p>
        )}
      </div>
    </div>
  );
}

function StepItem({ num, icon, title }: { num: string, icon: React.ReactNode, title: string }) {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="relative mb-4">
        <div className="w-[72px] h-[72px] rounded-full bg-white border border-[#E7D5B8]/80 flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.03)] group-hover:shadow-[0_4px_15px_rgba(0,0,0,0.06)] transition-all">
          {icon}
        </div>
        <div className="absolute -top-1 -right-1 w-[26px] h-[26px] bg-[#C99A4A] rounded-full flex items-center justify-center text-white text-[14px] font-bold border-2 border-white">
          {num}
        </div>
      </div>
      <h4 className="text-[15px] font-medium text-[#321A10] leading-[1.3] px-2 max-w-[150px] mx-auto">{title}</h4>
    </div>
  );
}

function MarqueeCircleCard({ src, title }: { src: string, title: string }) {
  return (
    <div className="flex flex-col items-center group cursor-pointer px-2">
      <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-[#E7D5B8]/40 group-hover:border-[#C99A4A]/50 shadow-sm transition-all duration-300 mb-3 bg-white">
        <Image src={src} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <h4 className="text-[14px] sm:text-[15px] font-medium text-[#321A10] leading-snug text-center">{title}</h4>
    </div>
  );
}

function RoleSquareCard({ src, title, desc }: { src: string, title: string, desc: string }) {
  return (
    <div className="bg-white rounded-none overflow-hidden border border-[#E7D5B8]/60 flex flex-col hover:shadow-md transition-shadow duration-300 group">
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image src={src} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-4 text-center flex-1 bg-white border-t border-[#E7D5B8]/30">
        <h4 className="text-[15px] font-medium text-[#321A10] mb-1">{title}</h4>
        <p className="text-[#321A10]/70 text-[16px] leading-snug">{desc}</p>
      </div>
    </div>
  );
}

function TrustCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-white p-6 rounded-none border border-[#E7D5B8] flex flex-col lg:flex-row gap-5 items-center lg:items-start text-center lg:text-left h-full">
      <div className="shrink-0 p-3 bg-[#FAF8F4] rounded-full border border-[#E7D5B8]/50">
        {icon}
      </div>
      <div>
        <h4 className="text-base font-semibold text-[#321A10] mb-1">{title}</h4>
        <p className="text-[#321A10]/70 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
