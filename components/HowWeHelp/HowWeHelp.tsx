"use client";
import { useState, ReactElement } from "react";
import Mantra from "../Mantra/Mantra";

interface CustomIconProps {
  name: string;
  className?: string;
}

const CustomIcon = ({ name, className = "w-6 h-6" }: CustomIconProps) => {
  const icons: Record<string, ReactElement> = {
    FaFireAlt: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
      </svg>
    ),
    FaGlobeAsia: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
    FaPrayingHands: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.89 14.75c-.29-.29-.76-.29-1.06 0-.29.29-.29.77 0 1.06l3 3c.29.29.77.29 1.06 0 .29-.29.29-.77 0-1.06l-3-3zM12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z" />
      </svg>
    ),
    FaVideo: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
      </svg>
    ),
    FaArrowRight: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
      </svg>
    ),
    FaHeart: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    FaUsers: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
      </svg>
    ),
    FaClock: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
      </svg>
    ),
    FaStar: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ),
  };

  return icons[name] || <div className={className}>●</div>;
};

interface CardItem {
  icon: string;
  title: string;
  desc: string;
  color: string;
  features: string[];
}

interface StatItem {
  icon: string;
  value: string;
  label: string;
}

export default function HowWeCanHelp() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const cards: CardItem[] = [
    {
      icon: "FaFireAlt",
      title: "Cremation Services",
      desc: "End-to-end cremation coordination with verified providers, ritual materials, and cremation ground booking.",
      color: "from-[#8B6A3E] to-[#A88B5E]",
      features: [
        "Cremation Ground Booking",
        "Pandit Services",
        "Ritual Materials",
      ],
    },
    {
      icon: "FaGlobeAsia",
      title: "NRI Cross-Border",
      desc: "Dedicated local representatives managing all logistics for families abroad with real-time updates.",
      color: "from-[#5C4033] to-[#7A5B46]",
      features: [
        "Family Representative",
        "Legal Documentation",
        "Body/Ash Repatriation",
      ],
    },
    {
      icon: "FaPrayingHands",
      title: "Grief Support",
      desc: "Professional counselling, peer support communities, and post-funeral ritual guidance.",
      color: "from-[#4A716C] to-[#5E8B83]",
      features: ["Grief Counselling", "Peer Communities", "Ritual Continuity"],
    },
    {
      icon: "FaVideo",
      title: "Digital Legacy",
      desc: "Permanent digital memorials, document vault, and video tributes to preserve memories.",
      color: "from-[#6B7D6E] to-[#8A9B8C]",
      features: ["Digital Memorials", "Document Vault", "Obituary Publishing"],
    },
  ];

  const stats: StatItem[] = [
    { icon: "FaClock", value: "24/7", label: "Care Coordinators" },
    { icon: "FaUsers", value: "30M+", label: "NRI Community Served" },
    {
      icon: "FaHeart",
      value: "100%",
      label: "Pricing Transparency",
    },
    { icon: "FaStar", value: "12,000 Cr", label: "Indian Funeral Market" },
  ];

  const circleStyles = [
    {
      width: "80px",
      height: "80px",
      left: "10%",
      top: "20%",
      background:
        "radial-gradient(circle at 30% 30%, #E8DBC520, transparent 70%)",
    },
    {
      width: "100px",
      height: "100px",
      left: "20%",
      top: "70%",
      background:
        "radial-gradient(circle at 30% 30%, #D4C1A620, transparent 70%)",
    },
    {
      width: "60px",
      height: "60px",
      left: "40%",
      top: "30%",
      background:
        "radial-gradient(circle at 30% 30%, #8B6A3E20, transparent 70%)",
    },
    {
      width: "90px",
      height: "90px",
      left: "60%",
      top: "10%",
      background:
        "radial-gradient(circle at 30% 30%, #E8DBC520, transparent 70%)",
    },
    {
      width: "70px",
      height: "70px",
      left: "70%",
      top: "60%",
      background:
        "radial-gradient(circle at 30% 30%, #D4C1A620, transparent 70%)",
    },
    {
      width: "110px",
      height: "110px",
      left: "85%",
      top: "40%",
      background:
        "radial-gradient(circle at 30% 30%, #8B6A3E20, transparent 70%)",
    },
    {
      width: "75px",
      height: "75px",
      left: "5%",
      top: "50%",
      background:
        "radial-gradient(circle at 30% 30%, #E8DBC520, transparent 70%)",
    },
    {
      width: "85px",
      height: "85px",
      left: "90%",
      top: "80%",
      background:
        "radial-gradient(circle at 30% 30%, #D4C1A620, transparent 70%)",
    },
  ];

  return (
    <section className="w-full relative py-8 md:py-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FCF9F3] via-white to-[#F8F4EC]"></div>

        {circleStyles.map((style, i) => (
          <div key={i} className="absolute rounded-full" style={style} />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#8B6A3E] to-transparent"></div>
            <span className="text-[#8B6A3E] font-medium tracking-widest uppercase text-xs">
              Our Services
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#8B6A3E] to-transparent"></div>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-3xl font-light text-[#3A2A1F] leading-tight mb-4">
            <span className="block">End-to-End Cremation &</span>
            <span className="relative inline-block">
              Ritual Services
              <svg
                className="absolute -bottom-2 left-0 w-full h-2.5 text-[#E8DBC5]/70"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,5 Q25,0 50,5 T100,5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </span>
          </h2>

          <p className="text-lg md:text-sm text-[#6E4B3A]/80 max-w-3xl mx-auto font-light leading-relaxed">
            Verified Service Network · NRI Cross-Border Coordination · Radical
            Pricing Transparency
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-5 border border-[#E8DBC5] h-full flex flex-col overflow-hidden">
                <div className="relative mb-4">
                  <div className="relative w-14 h-14 mx-auto">
                    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-white to-[#F8F4EC] border-4 border-white flex items-center justify-center shadow-lg">
                      <div className="text-[#8B6A3E]">
                        <CustomIcon name={card.icon} className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-base font-light text-[#3A2A1F] mb-3 text-center">
                  {card.title}
                </h3>

                <p className="text-[#6E4B3A] leading-relaxed mb-4 text-center text-sm flex-grow">
                  {card.desc}
                </p>

                <div className="space-y-2 mb-4">
                  {card.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${card.color} flex-shrink-0`}
                      ></div>
                      <span className="text-xs text-[#6E4B3A]">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-auto">
                  <button className="inline-flex items-center justify-center space-x-1 text-[#8B6A3E] px-3 py-1.5 rounded-lg border border-[#E8DBC5] w-full text-xs hover:bg-[#F8F4EC] transition-colors">
                    <span>Learn More</span>
                    <CustomIcon name="FaArrowRight" className="w-2.5 h-2.5" />
                  </button>
                </div>

                <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[#E8DBC5] rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-[#E8DBC5] rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              <div className="bg-white/50 backdrop-blur-sm rounded-lg p-3 border border-[#E8DBC5]">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E8DBC5] to-[#F8F4EC] flex items-center justify-center">
                    <div className="text-[#8B6A3E]">
                      <CustomIcon name={stat.icon} className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-light text-[#8B6A3E]">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#6E4B3A] whitespace-normal">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="relative inline-block">
            <button className="relative px-6 py-3 md:px-8 md:py-3 bg-gradient-to-br from-[#8B6A3E] to-[#A88B5E] text-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative z-10 flex items-center justify-center space-x-2">
                <span className="text-base font-medium">
                  Explore All Services
                </span>
                <CustomIcon name="FaArrowRight" className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>

          <p className="text-[#6E4B3A] mt-6 text-sm md:text-base font-light">
            Need immediate assistance?{" "}
            <a
              href="tel:+9118001234567"
              className="text-[#8B6A3E] font-normal hover:underline"
            >
              Call our 24/7 helpline
            </a>
          </p>
        </div>
      </div>

      <div style={{ marginTop: "40px" }}>
        <Mantra />
      </div>
    </section>
  );
}
