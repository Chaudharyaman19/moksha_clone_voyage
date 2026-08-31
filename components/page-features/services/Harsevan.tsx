"use client";

import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import { imageOrFallback, textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";
import {
  FaHandHoldingHeart,
  FaLeaf,
  FaPhoneAlt,
  FaCarSide,
} from "react-icons/fa";
import Image from "next/image";
import { MdOutlineLocalPhone } from "react-icons/md";
import { GiSteeringWheel } from "react-icons/gi";

export default function HearseVanServices() {
  const section = useWebsiteSection("harsevan-hero");
  const heroImage = imageOrFallback(section?.image, "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165438/moksha-sewa/assets/serving/emergency-transport.png");
  const title = textOrFallback(section?.title, "Hearse Van (Shav Vahan)", 60);
  const subtitle = textOrFallback(section?.subtitle, "For a Dignified Final Journey.", 150);
  const description = textOrFallback(section?.description, "The final journey should be carried out with the utmost dignity. We help coordinate Hearse Van (Shav Vahan) support for eligible cases, subject to verification, location and availability.", 600);
  const primaryLabel = textOrFallback(section?.buttonLabel, "Request Hearse Van", 60);
  const primaryHref = section?.buttonHref || "/request-help";
  const secondaryLabel = textOrFallback(section?.secondaryButtonLabel, "24x7 Helpline", 60);
  const secondaryHref = section?.secondaryButtonHref || "tel:+919999999999";
  
  const servicesSection = useWebsiteSection("harsevan-how-it-works");
  const servicesTitle = textOrFallback(servicesSection?.title, "How We Assist You", 60);
  const servicesItems = servicesSection?.items?.length ? servicesSection.items.map(it => ({ title: it.title || "", desc: it.description || "", label: it.label || "car" })) : [
    { title: "Immediate Availability", desc: "Our hearse vans are coordinated promptly across service areas to provide timely and dignified transportation when families need support.", label: "car" },
    { title: "Professional Drivers", desc: "Experienced and empathetic drivers understand the sensitivity of the moment and ensure every journey is handled carefully and respectfully.", label: "wheel" },
    { title: "Seamless Coordination", desc: "Our volunteers help coordinate between the family, hospital and cremation ground to reduce confusion and unnecessary logistical burden.", label: "phone" }
  ];

  const emotionalSection = useWebsiteSection("harsevan-trust");
  const emotionalQuote = textOrFallback(emotionalSection?.title, "&quot;We ensure their final journey is as peaceful and dignified as the life they lived.&quot;", 600);
  const emotionalDesc = textOrFallback(emotionalSection?.description, "You should never have to worry about transportation logistics while mourning. Moksha Sewa stands ready to help you navigate this difficult time.", 600);
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
                <FaCarSide className="h-8 w-8 text-[#A0522D]" />
              </div>

              <h2 className="pb-[20px] pt-[8px] font-serif text-[30px] leading-[1.1] tracking-tight text-[#3E2723]">
                {title}

                <span className="mt-1 block text-[30px] font-medium text-[#8D6E63]">
                  {subtitle}
                </span>
              </h2>

              <p className="mb-8 text-[18px] leading-relaxed text-[#5D4037] opacity-95">
                {description}
              </p>

              <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                <a
                  href={primaryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 whitespace-nowrap rounded-full bg-[#8B6A3E] px-6 py-3 text-[20px] font-medium text-white shadow-[0_8px_20px_-6px_rgba(139,106,62,0.5)] transition-all duration-300 hover:bg-[#73532F] md:px-8"
                >
                  <FaHandHoldingHeart className="h-5 w-5 transition-transform group-hover:scale-110" />

                  <span>{primaryLabel}</span>
                </a>

                <a
                  href={secondaryHref}
                  className="flex items-center justify-center gap-3 whitespace-nowrap rounded-full border border-[#D7CCC8] bg-white px-6 py-3 text-[24px] font-medium text-[#8B6A3E] shadow-sm transition-all duration-300 hover:bg-[#F9F5F0] md:px-8"
                >
                  <FaPhoneAlt className="h-4 w-4" />

                  <span>{secondaryLabel}</span>
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative order-1 h-[400px] w-full overflow-hidden rounded-[2.5rem] shadow-2xl lg:order-2 lg:h-[550px]">
              <Image
                src={heroImage}
                alt="Moksha Sewa Hearse Van"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
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
              {servicesTitle}
            </h2>

            <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-transparent via-[#8B6A3E] to-transparent" />
          </div>

          <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-3">
            {servicesItems.map((item, idx) => (
              <ItemCard
                key={idx}
                icon={item.label === "wheel" ? <GiSteeringWheel className="h-8 w-8" /> : item.label === "phone" ? <MdOutlineLocalPhone className="h-8 w-8" /> : <FaCarSide className="h-8 w-8" />}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>
        </section>

        {/* Emotional Connect */}
        <section className="w-full border-t border-[#E8DCC8] bg-gradient-to-br from-[#F5F0EA] to-[#FDFBF7] px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <FaLeaf className="mx-auto mb-8 h-10 w-10 text-[#A0522D]/30" />

            <h3 className="py-[20px] text-[20px] font-semibold leading-relaxed text-[#5D4037]" dangerouslySetInnerHTML={{ __html: emotionalQuote.replace(/\n/g, '<br />') }} />

            <p className="mx-auto max-w-2xl text-[18px] leading-relaxed text-[#795548]">
              {emotionalDesc}
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

      <h4 className="mb-4 min-h-[69px] text-[20px] font-semibold leading-[1.15] text-[#3E2723]">
        {title}
      </h4>

      <p className="flex-1 text-[18px] leading-relaxed text-[#6D4C41] opacity-90">
        {desc}
      </p>
    </div>
  );
}
