"use client";

import React from "react";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import Image from "next/image";
import Link from "next/link";
import { imageOrFallback, textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";
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
  const section = useWebsiteSection("specialService-hero");
  const heroImage = imageOrFallback(section?.image, "/assets/family-support/hero-bg-2.png");
  const eyebrow = textOrFallback(section?.eyebrow, "Extended Family Support", 60);
  const title = textOrFallback(section?.title, "Family Support", 60);
  const subtitle = textOrFallback(section?.subtitle, "Standing Beside You.", 60);
  const description = textOrFallback(section?.description, "Beyond the final rites, Moksha Sewa helps eligible families with case-based guidance, relief coordination and compassionate support, subject to verification and availability.", 600);
  const primaryLabel = textOrFallback(section?.buttonLabel, "Request Support", 60);
  const primaryHref = section?.buttonHref || "/request-help";
  const secondaryLabel = textOrFallback(section?.secondaryButtonLabel, "24x7 Helpline", 60);
  const secondaryHref = section?.secondaryButtonHref || "tel:+919220147229";
  return (
    <div className="service-page min-h-screen bg-[#FDFBF7] font-sans text-[#4A3D36]">
      <Topbar />
      <Navbar />

      <main className="pt-24 lg:pt-24">
        {/* HERO SECTION */}
        <section className="service-banner relative min-h-[500px] w-full overflow-hidden bg-[#F4EDE3]">
          <div className="absolute inset-0">
              <Image
              src={heroImage}
              alt={title}
              fill
              priority
              quality={100}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(247,240,231,0.98) 0%, rgba(247,240,231,0.85) 30%, rgba(247,240,231,0.40) 50%, rgba(247,240,231,0.05) 75%)",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/8 via-transparent to-transparent" />

          <div className="relative mx-auto flex min-h-[500px] w-full max-w-7xl items-center px-4 py-[20px] lg:px-0">
            <div className="max-w-[540px]">
              {/* Eyebrow */}
              <div className="mb-[2px] inline-flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B6A3E] text-white">
                  <FaUserFriends className="h-3.5 w-3.5" />
                </span>

                <span className="text-[18px] font-semibold uppercase tracking-[0.3em] text-[#8B6A3E]">
                  {eyebrow}
                </span>
              </div>

              {/* Hero Heading */}
              <h1
                className="pb-[20px] pt-[8px] leading-[0.95]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                <span className="block text-[30px] text-[#2C1810]">
                  {title}
                </span>

                <span className="mt-1 block text-[30px] text-[#8B6A3E]">
                  {subtitle}
                </span>
              </h1>

              <div className="mb-6 flex items-center gap-2">
                <span className="h-[2px] w-12 bg-[#8B6A3E]" />
                <span className="h-2 w-2 rotate-45 border border-[#8B6A3E] bg-[#C9A574]" />
                <span className="h-px w-20 bg-gradient-to-r from-[#C9A574] to-transparent" />
              </div>

              <p className="mb-3 max-w-[480px] text-[18px] leading-relaxed text-[#4F3A2D]">
                {description}
              </p>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row md:gap-4">
                <Link
                  href={primaryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-[#8B6A3E] px-6 py-3 text-[20px] font-semibold text-white shadow-sm transition-colors hover:bg-[#73532F] md:px-8"
                >
                  <FaHandHoldingHeart size={16} />
                  <span>{primaryLabel}</span>
                </Link>

                <a
                  href={secondaryHref}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border border-[#E8DCC8] bg-white px-6 py-3 text-[24px] font-semibold text-[#8B6A3E] shadow-sm transition-colors hover:bg-[#F9F5F0] md:px-8"
                >
                  <FaPhoneAlt size={14} />
                  <span>{secondaryLabel}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES MARQUEE */}
        <section className="mx-auto max-w-7xl overflow-hidden px-4 pb-1 pt-0 lg:px-0">
          <Marquee
            speed={40}
            pauseOnHover={true}
            gradient={false}
            className="py-1"
          >
            <div className="flex gap-2 px-1">
              {(useWebsiteSection("specialService-highlights")?.items || [
                { title: "Emotional Support", description: "Counseling and a sympathetic ear for grieving families.", image: "/assets/serving/counseling-support.png" },
                { title: "Tehravi Khana", description: "Respectful management of the 13th-day meal for grieving families.", image: "/assets/serving/food-essentials.png" },
                { title: "Formalities", description: "Help with death certificates and important legal procedures.", image: "/assets/serving/document-assistance.png" },
                { title: "Ambulance", description: "Transport support for eligible cases after required verification.", image: "/assets/serving/emergency-transport.png" },
                { title: "Eligibility Based", description: "Assistance is provided subject to verification and availability.", image: "/assets/serving/community-outreach.png" },
                { title: "Hospital Care", description: "On-ground help and coordination during hospital discharge formalities.", image: "/assets/serving/hospital-support.png" },
                { title: "Ground Help", description: "Volunteers support and guide families carefully at every step.", image: "/assets/serving/on-ground-support.png" },
                { title: "Remote Reach", description: "Extending compassionate and dignified support to remote areas.", image: "/assets/serving/rural-remote-reach.png" }
              ]).map((item, idx) => (
                <div className="w-[240px]" key={idx}>
                  <FeatureCard
                    imageSrc={imageOrFallback(item.image, "/assets/serving/counseling-support.png")}
                    title={item.title || ""}
                    desc={item.description || ""}
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </section>

        {/* HOW IT WORKS */}
        <section className="mx-auto max-w-7xl px-4 pb-1 pt-1 lg:px-0">
          <div className="mb-1 text-center">
            <h2 className="pt-[20px] font-serif text-[30px] text-[#3A2418]">
              {textOrFallback(useWebsiteSection("specialService-how-it-works")?.title, "How We Extend Our Help", 60)}
            </h2>

            <div className="mx-auto mt-3 mb-4 h-1 w-24 rounded-full bg-[#DCC4A5]" />
          </div>

          <div className="relative flex flex-col items-stretch justify-between gap-1 pt-1 md:flex-row md:gap-1 lg:gap-1">
            {(useWebsiteSection("specialService-how-it-works")?.items || [
              { title: "Contact Us", description: "Reach out through our 24x7 helpline whenever your family needs help.", label: "phone" },
              { title: "Needs Assessment", description: "We understand your family's emotional, practical and financial needs.", label: "comment" },
              { title: "Arrange Support", description: "We arrange meals, paperwork and compassionate support for your family.", label: "clipboard" },
              { title: "Ongoing Care", description: "Our support continues beyond the cremation ground with care each step.", label: "users" }
            ]).map((item, idx) => (
              <React.Fragment key={idx}>
                <StepCard
                  num={idx + 1}
                  icon={
                    item.label === "phone" ? <FaPhoneAlt size={22} /> :
                    item.label === "comment" ? <FaCommentDots size={22} /> :
                    item.label === "clipboard" ? <FaClipboardCheck size={22} /> :
                    <FaUsers size={22} />
                  }
                  title={item.title || ""}
                  desc={item.description || ""}
                />

                {idx < ((useWebsiteSection("specialService-how-it-works")?.items?.length) || 4) - 1 && (
                  <div className="z-10 hidden self-center text-[#DCC4A5] md:flex">
                    <FaArrowRight size={18} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* NAMO GANGE VOLUNTEERS */}
        <section className="mx-auto mb-1 mt-1 max-w-7xl overflow-hidden px-4 py-1 lg:px-0">
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-8">
            <div className="flex shrink-0 flex-col items-center text-center lg:w-1/3 lg:items-start lg:text-left">
              <div className="mb-4">
                <Image
                  src="/assets/namo-gange-logo.webp"
                  alt="Namo Gange Trust"
                  width={280}
                  height={120}
                  className="object-contain"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>

              <h2 className="py-[20px] font-serif text-[30px] leading-tight text-[#3A2418]" dangerouslySetInnerHTML={{ __html: textOrFallback(useWebsiteSection("specialService-support")?.title, "Empowered by <br class=\"hidden lg:block\" /><span class=\"text-[#9A6A31]\">Namo Gange Volunteers</span>", 600) }} />

              <p className="max-w-[400px] text-[18px] leading-relaxed text-[#624C3F]">
                {textOrFallback(useWebsiteSection("specialService-support")?.description, "Our widespread network of dedicated volunteers is always ready to mobilize. They step forward to organize meals, manage hospital formalities, and support grieving families.", 600)}
              </p>
            </div>

            <div className="w-full lg:w-2/3">
              <Marquee
                gradient={false}
                speed={40}
                className="py-2"
                pauseOnHover
              >
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
                    <div
                      key={i}
                      className="relative h-[300px] w-[300px] overflow-hidden rounded-none border border-[#E8DCC8] shadow-sm"
                    >
                      <Image
                        src={src}
                        alt={`Namo Gange Volunteer ${i + 1}`}
                        fill
                        sizes="300px"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </Marquee>
            </div>
          </div>
        </section>

        {/* COMPASSION SECTION */}
        <section className="mx-auto max-w-7xl px-4 py-1 lg:px-0">
          <div className="flex flex-col overflow-hidden rounded-none border border-[#E8DCC8] bg-[#FAF7F2] shadow-sm lg:flex-row">
            <div className="flex flex-col justify-center p-4 lg:w-1/2 lg:p-6">
              <span className="mb-3 text-[18px] font-semibold uppercase tracking-widest text-[#9A6A31]">
                {textOrFallback(useWebsiteSection("specialService-receive")?.eyebrow, "Holistic Support System", 60)}
              </span>

              <h2 className="py-[20px] font-serif text-[30px] leading-[1.15] text-[#3A2418]" dangerouslySetInnerHTML={{ __html: textOrFallback(useWebsiteSection("specialService-receive")?.title, "An Extended Family <br /><span class=\"text-[#9A6A31]\">For Those Who Need One</span>", 600) }} />

              <p className="mb-6 max-w-[500px] text-[18px] leading-relaxed text-[#624C3F]">
                {textOrFallback(useWebsiteSection("specialService-receive")?.description, "&quot;Our service does not end at the cremation ground. We believe in providing holistic support that helps a family get back on its feet while remembering their departed with love and peace.&quot;", 600)}
              </p>

              <ul className="mb-8 flex flex-col gap-3.5">
                {(useWebsiteSection("specialService-receive")?.items?.length ? useWebsiteSection("specialService-receive")!.items!.map(it => it.title) : [
                  "Sympathetic ear for intense grief and trauma",
                  "Assistance with death certificates and formalities",
                  "Relief coordination for verified family needs",
                  "Assistance subject to eligibility and availability",
                ]).map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-[18px] font-medium text-[#4A3D36]"
                  >
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#9A6A31] text-white">
                      <FaCheck size={10} />
                    </div>

                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href={useWebsiteSection("specialService-receive")?.buttonHref || "/contact"}
                target="_blank"
                rel="noopener noreferrer"
                className="group/cta inline-flex h-[46px] w-fit min-w-[182px] items-center justify-center gap-2.5 whitespace-nowrap rounded-lg bg-[#8B6A3E] px-6 text-[20px] font-semibold text-white shadow-[0_8px_20px_rgba(107,74,32,0.22)] transition hover:-translate-y-0.5 hover:bg-[#73532F] hover:shadow-[0_12px_26px_rgba(107,74,32,0.28)]"
              >
                {textOrFallback(useWebsiteSection("specialService-receive")?.buttonLabel, "Know More About Our Work", 60)}

                <FaArrowRight className="h-[14px] w-[14px] transition-transform duration-300 group-hover/cta:translate-x-0.5" />
              </Link>
            </div>

            <div className="relative min-h-[340px] lg:min-h-0 lg:w-1/2">
              <Image
                src={imageOrFallback(useWebsiteSection("specialService-receive")?.image, "/assets/serving/hospital-support.png")}
                alt="Compassion Support"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* BOTTOM CTA BANNER */}
        <section className="mx-auto max-w-7xl px-4 pb-4 pt-1 lg:px-0">
          <div className="relative flex flex-col overflow-hidden rounded-none bg-[#4E3827] shadow-sm md:flex-row">
            <div className="z-10 flex flex-col justify-center p-4 md:w-3/5 lg:p-6">
              <h2 className="py-[20px] font-serif text-[30px] leading-[1.2] text-[#EED8A1]" dangerouslySetInnerHTML={{ __html: textOrFallback(useWebsiteSection("specialService-donation")?.title, "Your Support Helps Us <br />Feed Grieving Families", 150) }} />

              <p className="mb-8 max-w-[480px] text-[18px] leading-relaxed text-[#FDFBF7] opacity-90">
                {textOrFallback(useWebsiteSection("specialService-donation")?.description, "By donating, you help us organize Tehravi Khana and provide continued assistance for families who cannot afford the post-cremation rituals and meals.", 600)}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href={useWebsiteSection("specialService-donation")?.buttonHref || "/donation"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="donate-nav-sparkle relative inline-flex h-[46px] min-w-[198px] items-center justify-center gap-2.5 overflow-hidden whitespace-nowrap rounded-full border border-[#F4C46A] bg-gradient-to-r from-[#B76B16] via-[#E5A93E] to-[#B76B16] px-6 text-[20px] font-semibold text-white shadow-[0_0_18px_rgba(229,169,62,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(229,169,62,0.72)]"
                >
                  <span className="donate-nav-shine" aria-hidden />

                  <FaHeart className="relative z-10 h-[14px] w-[14px]" />

                  <span className="relative z-10 whitespace-nowrap">
                    {textOrFallback(useWebsiteSection("specialService-donation")?.buttonLabel, "Donate to Moksha Sewa", 60)}
                  </span>

                  <FaStar
                    className="donate-star donate-star-one"
                    aria-hidden
                  />

                  <FaStar
                    className="donate-star donate-star-two"
                    aria-hidden
                  />
                </Link>

                <Link
                  href={useWebsiteSection("specialService-donation")?.secondaryButtonHref || "/volunteer/register"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/cta inline-flex h-[46px] min-w-[182px] items-center justify-center gap-3 whitespace-nowrap rounded-lg border border-[#B89564] bg-transparent px-6 text-[20px] font-semibold text-white transition hover:border-[#EED8A1] hover:bg-white/10"
                >
                  {textOrFallback(useWebsiteSection("specialService-donation")?.secondaryButtonLabel, "Support Our Seva", 60)}

                  <FaArrowRight className="h-[14px] w-[14px] transition-transform duration-300 group-hover/cta:translate-x-0.5" />
                </Link>
              </div>
            </div>

            <div className="relative min-h-[300px] md:w-2/5">
              <Image
                src={imageOrFallback(useWebsiteSection("specialService-donation")?.image, "/assets/serving/counseling-support.png")}
                alt="Donate Support"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-[#4E3827] via-[#4E3827]/80 to-transparent md:hidden" />

              <div className="absolute inset-0 hidden bg-gradient-to-r from-[#4E3827] via-[#4E3827]/40 to-transparent md:block" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// ---------------- SUBS ----------------

function FeatureCard({
  imageSrc,
  title,
  desc,
}: {
  imageSrc: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="group relative flex h-[260px] flex-col justify-end overflow-hidden rounded-none shadow-sm cursor-pointer">
      <Image
        src={imageSrc}
        alt={title}
        fill
        sizes="240px"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500 group-hover:from-black/90 group-hover:via-black/70 group-hover:to-black/30" />

      <div className="relative z-10 flex min-h-[125px] flex-col items-center justify-end p-6 text-center">
        <h3 className="flex min-h-[69px] items-end justify-center font-serif text-[20px] font-semibold leading-[1.15] text-white transition-transform duration-500 group-hover:-translate-y-2">
          {title}
        </h3>

        <div className="grid w-full grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-in-out group-hover:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <p className="min-h-[44px] pt-2 text-[18px] leading-relaxed text-[#FDFBF7] opacity-0 transition-opacity delay-100 duration-700 group-hover:opacity-100">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepCard({
  num,
  icon,
  title,
  desc,
}: {
  num: number;
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="relative z-10 mx-auto flex h-full min-h-[240px] w-full max-w-[260px] flex-1 flex-col items-center rounded-none border border-[#E8DCC8] bg-white p-6 text-center shadow-sm transition-colors duration-300 hover:border-[#DCC4A5]">
      <div className="absolute -top-4 left-1/2 z-20 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white bg-[#8B6A3E] text-[20px] font-semibold text-white">
        {num}
      </div>

      <div className="mb-3 mt-2 text-[#8B6A3E]">
        {icon}
      </div>

      <h3 className="mb-1.5 flex items-center justify-center font-serif text-[20px] font-semibold leading-[1.15] text-[#3A2418]">
        {title}
      </h3>

      <p className="flex-1 text-[18px] leading-relaxed text-[#624C3F]">
        {desc}
      </p>
    </div>
  );
}
