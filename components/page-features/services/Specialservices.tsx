"use client";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaCheck,
  FaClipboardCheck,
  FaCommentDots,
  FaHandHoldingHeart,
  FaHeart,
  FaPhoneAlt,
  FaStar,
  FaUserFriends,
  FaUsers,
} from "react-icons/fa";
import Marquee from "react-fast-marquee";

export default function FamilySupport() {
  return (
    <div className="min-h-screen font-sans text-[#4A3D36] bg-[#FDFBF7]">
      <Topbar />
      <Navbar />

      <main className="pt-24 lg:pt-24">

        {/* HERO SECTION */}
        <section className="relative w-full aspect-[16/5] min-h-[350px] sm:min-h-[400px] overflow-hidden bg-[#F4EDE3]">
          <div className="absolute inset-0">
            <Image
              src="/assets/family-support/hero-bg-2.png"
              alt="Family Support"
              fill
              priority
              quality={100}
              className="object-cover object-center"
            />
          </div>

          {/* Gradient to ensure text readability on the left */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(90deg, rgba(247,240,231,0.98) 0%, rgba(247,240,231,0.85) 30%, rgba(247,240,231,0.40) 50%, rgba(247,240,231,0.05) 75%)"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/8 via-transparent to-transparent" />

          <div className="relative mx-auto flex h-full w-full max-w-7xl items-center px-4 pt-4 sm:pt-4 lg:px-0 lg:pt-4">
            <div className="max-w-[540px]">

              {/* eyebrow */}
              <div className="mb-2 inline-flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B6A3E] text-white">
                  <FaUserFriends className="h-3.5 w-3.5" />
                </span>
                <span className="text-[14px] font-semibold uppercase tracking-[0.3em] text-[#8B6A3E]">
                  Extended Family Support
                </span>
              </div>

              {/* layered display type */}
              <h1
                className="leading-[0.95] mb-4"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                <span className="block text-[38px] text-[#2C1810] sm:text-[46px] lg:text-[52px]">
                  Family Support
                </span>
                <span className="mt-1 block text-[28px]  text-[#8B6A3E] md:text-[34px]">
                  Standing Beside You.
                </span>
              </h1>

              {/* diya-style flourish */}
              <div className="mb-6 flex items-center gap-2">
                <span className="h-[2px] w-12 bg-[#8B6A3E]" />
                <span className="h-2 w-2 rotate-45 border border-[#8B6A3E] bg-[#C9A574]" />
                <span className="h-px w-20 bg-gradient-to-r from-[#C9A574] to-transparent" />
              </div>

              <p className="mb-3 max-w-[480px] text-[15px] leading-relaxed text-[#4F3A2D] sm:text-[16px]">
                Beyond the final rites, Moksha Sewa helps eligible families with case-based guidance, relief coordination and compassionate support, subject to verification and availability.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto">
                <Link href="/request-help" className="inline-flex items-center justify-center gap-2 bg-[#8B6A3E] text-white px-6 md:px-8 py-3 rounded-md font-semibold hover:bg-[#73532F] transition-colors shadow-sm text-sm">
                  <FaHandHoldingHeart size={16} /> Request Support
                </Link>
                <a href="tel:+919220147229" className="inline-flex items-center justify-center gap-2 bg-white text-[#8B6A3E] border border-[#E8DCC8] px-6 md:px-8 py-3 rounded-md font-semibold hover:bg-[#F9F5F0] transition-colors shadow-sm text-sm">
                  <FaPhoneAlt size={14} /> 24x7 Helpline
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES MARQUEE */}
        <section className="max-w-7xl mx-auto px-4 lg:px-0 overflow-hidden pt-0 pb-1">
          <Marquee speed={40} pauseOnHover={true} gradient={false} className="py-1">
            <div className="flex gap-2 px-1">
              <div className="w-[240px]">
                <FeatureCard
                  imageSrc="/assets/serving/counseling-support.png"
                  title="Emotional Support"
                  desc="Counseling and a sympathetic ear for grieving families."
                />
              </div>
              <div className="w-[240px]">
                <FeatureCard
                  imageSrc="/assets/serving/food-essentials.png"
                  title="Tehravi Khana"
                  desc="Respectful management of the 13th-day meal."
                />
              </div>
              <div className="w-[240px]">
                <FeatureCard
                  imageSrc="/assets/serving/document-assistance.png"
                  title="Formalities"
                  desc="Help with death certificates & legal procedures."
                />
              </div>
              <div className="w-[240px]">
                <FeatureCard
                  imageSrc="/assets/serving/emergency-transport.png"
                  title="Ambulance"
                  desc="Transport support subject to case verification."
                />
              </div>
              <div className="w-[240px]">
                <FeatureCard
                  imageSrc="/assets/serving/community-outreach.png"
                  title="Eligibility Based"
                  desc="Assistance depends on verification and availability."
                />
              </div>
              <div className="w-[240px]">
                <FeatureCard
                  imageSrc="/assets/serving/hospital-support.png"
                  title="Hospital Care"
                  desc="On-ground assistance with hospital discharge."
                />
              </div>
              <div className="w-[240px]">
                <FeatureCard
                  imageSrc="/assets/serving/on-ground-support.png"
                  title="Ground Help"
                  desc="Volunteers assisting families at every single step."
                />
              </div>
              <div className="w-[240px]">
                <FeatureCard
                  imageSrc="/assets/serving/rural-remote-reach.png"
                  title="Remote Reach"
                  desc="Extending dignified support even to remote areas."
                />
              </div>
            </div>
          </Marquee>
        </section>

        {/* HOW IT WORKS */}
        <section className="max-w-7xl mx-auto px-4 lg:px-0 pt-1 pb-1">
          <div className="text-center mb-1">
            <h2 className="font-serif text-[28px] md:text-[34px] text-[#3A2418]">How We Extend Our Help</h2>
            <div className="h-1 w-24 bg-[#DCC4A5] mx-auto mt-3 rounded-full" />
          </div>

          <div className="relative flex flex-col md:flex-row justify-between items-stretch gap-1 md:gap-1 lg:gap-1 pt-1">
            <StepCard num={1} icon={<FaPhoneAlt size={22} />} title="Contact Us" desc="Reach out via our 24x7 helpline when you need post-cremation assistance." />
            <div className="hidden md:flex text-[#DCC4A5] self-center z-10"><FaArrowRight size={18} /></div>

            <StepCard num={2} icon={<FaCommentDots size={22} />} title="Needs Assessment" desc="We carefully listen to understand your family's specific financial and emotional needs." />
            <div className="hidden md:flex text-[#DCC4A5] self-center z-10"><FaArrowRight size={18} /></div>

            <StepCard num={3} icon={<FaClipboardCheck size={22} />} title="Arrange Support" desc="We organize the Tehravi meal, handle paperwork, and provide grief counseling." />
            <div className="hidden md:flex text-[#DCC4A5] self-center z-10"><FaArrowRight size={18} /></div>

            <StepCard num={4} icon={<FaUsers size={22} />} title="Ongoing Care" desc="Our service doesn't end at the cremation ground. We stand beside you to help you rebuild." />
          </div>
        </section>

        {/* NAMO GANGE VOLUNTEERS */}
        <section className="max-w-7xl mx-auto px-4 lg:px-0 py-1 mt-1 mb-1 overflow-hidden">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center">
            <div className="lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left shrink-0">
              <div className="mb-4">
                <Image src="/assets/namo-gange-logo.webp" alt="Namo Gange Trust" width={280} height={120} className="object-contain" />
              </div>
              <h2 className="font-serif text-[28px] md:text-[34px] text-[#3A2418] leading-tight mb-3">
                Empowered by <br className="hidden lg:block" />
                <span className="text-[#9A6A31]">Namo Gange Volunteers</span>
              </h2>
              <p className="text-[#624C3F] text-[15px] leading-relaxed max-w-[400px]">
                Our widespread network of dedicated volunteers is always ready to mobilize.
                They step forward to organize meals, manage hospital formalities, and with grieving families.
              </p>
            </div>

            <div className="lg:w-2/3 w-full">
              <Marquee gradient={false} speed={40} className="py-2" pauseOnHover>
                <div className="flex gap-3 px-2">
                  {[
                    "/assets/namo-gange/vol1.png",
                    "/assets/namo-gange/vol2.png",
                    "/assets/namo-gange/vol3.png",
                    "/assets/namo-gange/vol4.png",
                    "/assets/namo-gange/vol5.png",
                    "/assets/namo-gange/vol6.png",
                    "/assets/namo-gange/vol7.png",
                  ].map((src, i) => (
                    <div key={i} className="relative w-[300px] h-[300px] rounded-none overflow-hidden shadow-sm border border-[#E8DCC8]">
                      <Image src={src} alt={`Namo Gange Volunteer ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              </Marquee>
            </div>
          </div>
        </section>

        {/* COMPASSION SECTION */}
        <section className="max-w-7xl mx-auto px-4 lg:px-0 py-1">
          <div className="bg-[#FAF7F2] rounded-none border border-[#E8DCC8] overflow-hidden flex flex-col lg:flex-row shadow-sm">
            <div className="p-4 lg:p-6 lg:w-1/2 flex flex-col justify-center">
              <span className="text-[#9A6A31] text-[14px] font-semibold uppercase tracking-widest mb-3">Holistic Support System</span>
              <h2 className="font-serif text-[28px] md:text-[34px] text-[#3A2418] leading-[1.15] mb-5">
                An Extended Family <br />
                <span className="text-[#9A6A31]">For Those Who Need One</span>
              </h2>
              <p className="text-[#624C3F] mb-6 leading-relaxed  text-[16px] max-w-[500px]">
                &quot;Our service does not end at the cremation ground. We believe in providing holistic support that helps a family get back on its feet while remembering their departed with love and peace.&quot;
              </p>

              <ul className="flex flex-col gap-3.5 mb-8">
                {[
                  "Sympathetic ear for intense grief and trauma",
                  "Assistance with death certificates and formalities",
                  "Relief coordination for verified family needs",
                  "Assistance subject to eligibility and availability",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[#4A3D36] text-[15px] font-medium">
                    <div className="w-5 h-5 rounded-full bg-[#9A6A31] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <FaCheck size={10} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="group/cta inline-flex h-[46px] min-w-[182px] items-center justify-center gap-2.5 rounded-lg bg-[#8B6A3E] px-6 text-[14px] font-semibold text-white shadow-[0_8px_20px_rgba(107,74,32,0.22)] transition hover:-translate-y-0.5 hover:bg-[#73532F] hover:shadow-[0_12px_26px_rgba(107,74,32,0.28)] w-fit">
                Know More About Our Work <FaArrowRight className="h-[14px] w-[14px] transition-transform duration-300 group-hover/cta:translate-x-0.5" />
              </Link>
            </div>

            <div className="lg:w-1/2 relative min-h-[340px] lg:min-h-auto">
              <Image src="/assets/serving/hospital-support.png" alt="Compassion Support" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* BOTTOM CTA BANNER */}
        <section className="max-w-7xl mx-auto px-4 lg:px-0 py-1 pb-4">
          <div className="bg-[#4E3827] rounded-none overflow-hidden relative flex flex-col md:flex-row shadow-sm">
            <div className="p-4 lg:p-6 md:w-3/5 z-10 flex flex-col justify-center">
              <h2 className="font-serif text-[28px] md:text-[34px] text-[#EED8A1] mb-4 leading-[1.2]">
                Your Support Helps Us <br /> Feed Grieving Families
              </h2>
              <p className="text-[#FDFBF7] text-[16px] leading-relaxed opacity-90 mb-8 max-w-[480px]">
                By donating, you help us organize Tehravi Khana and provide continued assistance for families who cannot afford the post-cremation rituals and meals.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/donation" className="donate-nav-sparkle relative inline-flex h-[46px] min-w-[198px] items-center justify-center gap-2.5 overflow-hidden rounded-full border border-[#F4C46A] bg-gradient-to-r from-[#B76B16] via-[#E5A93E] to-[#B76B16] px-6 text-[14px] font-semibold text-white shadow-[0_0_18px_rgba(229,169,62,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(229,169,62,0.72)]">
                  <span className="donate-nav-shine" aria-hidden />
                  <FaHeart className="relative z-10 h-[14px] w-[14px]" />
                  <span className="relative z-10">Donate to Moksha Sewa</span>
                  <FaStar className="donate-star donate-star-one" aria-hidden />
                  <FaStar className="donate-star donate-star-two" aria-hidden />
                </Link>
                <Link href="/volunteer/register" className="group/cta inline-flex h-[46px] min-w-[182px] items-center justify-center gap-3 rounded-lg border border-[#B89564] bg-transparent px-6 text-[14px] font-semibold text-white transition hover:border-[#EED8A1] hover:bg-white/10">
                  Support Our Seva <FaArrowRight className="h-[14px] w-[14px] transition-transform duration-300 group-hover/cta:translate-x-0.5" />
                </Link>
              </div>
            </div>

            <div className="md:w-2/5 min-h-[300px] relative">
              <Image src="/assets/serving/counseling-support.png" alt="Donate Support" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#4E3827] via-[#4E3827]/80 to-transparent md:hidden" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#4E3827] via-[#4E3827]/40 to-transparent hidden md:block" />
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

// ---------------- SUBS ----------------

function FeatureCard({ imageSrc, title, desc }: { imageSrc: string, title: string, desc: string }) {
  return (
    <div className="group relative rounded-none overflow-hidden h-[220px] flex flex-col justify-end shadow-sm cursor-pointer">
      {/* Background Image */}
      <Image src={imageSrc} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 group-hover:via-black/70 group-hover:to-black/30 transition-all duration-500" />

      {/* Content Container */}
      <div className="relative z-10 p-6 flex flex-col items-center text-center">
        <h3 className="font-serif font-medium text-[15px] text-white transition-transform duration-500 group-hover:-translate-y-2">{title}</h3>

        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out w-full">
          <div className="overflow-hidden">
            <p className="text-[#FDFBF7] text-[14px] leading-relaxed pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepCard({ num, icon, title, desc }: { num: number, icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex flex-col items-center text-center w-full max-w-[260px] mx-auto z-10 bg-white border border-[#E8DCC8] rounded-none p-6 shadow-sm hover:border-[#DCC4A5] transition-colors duration-300 relative">
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#8B6A3E] text-white flex items-center justify-center font-semibold text-[14px] border-2 border-white z-20">
        {num}
      </div>
      <div className="text-[#8B6A3E] mb-3 mt-2">
        {icon}
      </div>
      <h3 className="font-serif text-[15px] text-[#3A2418] mb-1.5">{title}</h3>
      <p className="text-[14px] text-[#624C3F] leading-relaxed">{desc}</p>
    </div>
  );
}
