"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { PiFlowerLotus } from "react-icons/pi";
import {
  FaFire,
  FaCheckCircle,
  FaPhoneAlt,
  FaHandHoldingHeart,
} from "react-icons/fa";

export default function AboutHeroSlider() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const total = 2;

  const goNext = () => {
    if (index === total) return;
    setIndex((i) => i + 1);
  };

  useEffect(() => {
    const id = setInterval(goNext, 4000);
    return () => clearInterval(id);
  }, [index]);

  useEffect(() => {
    if (index === total) {
      const t = setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 700);

      const reset = setTimeout(() => setIsTransitioning(true), 750);

      return () => {
        clearTimeout(t);
        clearTimeout(reset);
      };
    }
  }, [index, total]);

  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex ${isTransitioning
          ? "transition-transform duration-700 ease-out"
          : ""
          }`}
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        <div className="w-full shrink-0">
          <NewBanner />
        </div>

        <div className="w-full shrink-0">
          <PreviousBanner />
        </div>

        <div className="w-full shrink-0">
          <NewBanner />
        </div>
      </div>
    </div>
  );
}

function NewBanner() {
  return (
    <section className="relative w-full aspect-[16/7] min-h-[350px] overflow-hidden bg-[#F4EDE3]">
      {/* Main Hero */}
      <div className="relative mx-auto flex h-full w-full max-w-[1600px] items-center overflow-hidden">
        {/* Background / Main Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/about-optimized/about.webp"
            alt="Moksha Sewa compassionate funeral support"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-0">
          <div className="max-w-[540px]">
            {/* Namo Gange logo — centered over the text below */}
            <div className="mb-2 mt-14 flex w-full max-w-[440px] flex-col items-start text-left">
              <div className="w-[190px] self-center sm:w-[220px] lg:w-[250px]">
                <Image
                  src="/hero-images/image6.png"
                  alt="Namo Gange"
                  width={420}
                  height={150}
                  priority
                  sizes="250px"
                  className="h-auto w-full object-contain"
                />
              </div>

              <div className="mt-1 flex flex-col items-start text-left">
                <span className="text-[22px] font-normal leading-tight text-[#2C1810]">
                  Moksha Sewa
                </span>

                <span className="mt-0.5 text-[16px] font-medium leading-tight text-[#8F5A21] sm:text-[16px]">
                  An Initiative of Namo Gange Trust
                </span>
              </div>
            </div>

            {/* Hero Text */}
            <div className="max-w-[540px]">
              <h2
                className="text-[38px] leading-[1.03] text-[#102b44] sm:text-[46px] lg:text-[52px]"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontWeight: 500,
                }}
              >
                Every Life Deserves
                <br />

                <span className="text-[#dc671f]">
                  Dignity. Always.
                  <span className="ml-1 inline-block text-[34px] font-normal sm:text-[42px]">
                    ♡
                  </span>
                </span>
              </h2>

              {/* Decorative divider */}
              <div className="mt-3 flex items-center gap-4">
                <span className="h-[2px] w-44 bg-[#dc671f]" />

                <div className="relative flex h-9 w-9 items-center justify-center">
                  <PiFlowerLotus className="h-9 w-9 text-[#dc671f]" />
                </div>

                <span className="h-[2px] w-44 bg-[#dc671f]" />
              </div>

              <p className="mt-2 max-w-[570px] text-[16px] leading-6 text-[#17283a] sm:text-[17px]">
                Moksha Sewa stands for compassion in action.
                <br />
                We are here for the forgotten, the unclaimed,
                <br />
                and those who have no one.
                <br />

                <strong className="font-semibold">
                  Because no one should face their final journey alone.
                </strong>
              </p>

              <div className="mt-3 flex flex-col gap-2.5 sm:flex-row">
                <a
                  href="/request-help"
                  className="inline-flex h-[46px] items-center justify-center gap-2 rounded-[7px] border border-[#C6520A] bg-[#D95A06] px-4 text-[16px] font-semibold text-white shadow-[0_8px_18px_rgba(190,74,0,0.18)] transition hover:-translate-y-0.5 hover:bg-[#C94F03]"
                >
                  <FaHandHoldingHeart className="h-5 w-5 shrink-0" />
                  <span>Request Help</span>
                </a>

                <a
                  href="/donation"
                  className="inline-flex h-[46px] items-center justify-center gap-2 rounded-[7px] border border-[#C6520A] bg-[#D95A06] px-4 text-[16px] font-semibold text-white shadow-[0_8px_18px_rgba(190,74,0,0.18)] transition hover:-translate-y-0.5 hover:bg-[#C94F03]"
                >
                  <FaFire className="h-5 w-5 shrink-0" />
                  <span>Support This Mission</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Feature Strip — NOT STATS (commented out) */}
      {/* <div className="relative z-30 mx-auto -mt-[95px] max-w-[1470px] px-5 pb-7 sm:px-8 lg:px-10">
        <div className="overflow-hidden rounded-[28px] border border-white/70 bg-white/95 shadow-[0_15px_45px_rgba(10,35,55,0.15)] backdrop-blur-md">
          <div className="grid grid-cols-1 divide-y divide-[#dedbd5] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-5 lg:divide-x">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className={`flex min-h-[112px] items-center gap-4 px-5 py-5 ${
                    index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full bg-[#fff7ef]">
                    <Icon
                      size={31}
                      strokeWidth={1.5}
                      className="text-[#df6b22]"
                    />
                  </div>

                  <div>
                    <h3 className="text-[16px] font-semibold leading-5 text-[#17283a]">
                      {feature.title}
                    </h3>

                    <p className="mt-1 text-[16px] leading-5 text-[#263746]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div> */}
    </section>
  );
}

function PreviousBanner() {
  return (
    <section className="relative w-full aspect-[16/7] min-h-[350px] overflow-hidden bg-[#F4EDE3]">
      <div className="absolute inset-0">
        <Image
          src="/assets/about-optimized/about-hero-new.webp"
          alt="Moksha Sewa ritual support at a sacred river ghat"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="scale-[1.02] object-cover object-[74%_center]"
        />
      </div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(247,240,231,0.98) 0%, rgba(247,240,231,0.93) 24%, rgba(247,240,231,0.62) 42%, rgba(247,240,231,0.20) 60%, rgba(247,240,231,0.02) 76%)",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/8 via-transparent to-transparent" />

      {/* giant Devanagari watermark — the signature of the page */}
      <div className="pointer-events-none absolute -left-6 top-1/2 hidden -translate-y-[58%] select-none font-serif text-[300px] leading-none text-[#8B6A3E]/[0.07] lg:block">
        मोक्ष
      </div>

      <div className="relative mx-auto flex h-full w-full max-w-7xl items-center px-0">
        <div className="max-w-[540px]">
          {/* Namo Gange logo — centered over the text below */}
          <div className="mb-2 mt-14 flex w-full max-w-[440px] flex-col items-start text-left">
            <div className="w-[190px] self-center sm:w-[220px] lg:w-[250px]">
              <Image
                src="/hero-images/image6.png"
                alt="Namo Gange"
                width={420}
                height={150}
                priority
                sizes="250px"
                className="h-auto w-full object-contain"
              />
            </div>

            <div className="mt-1 flex flex-col items-start text-left">
              <span className="text-[22px] font-normal leading-tight text-[#2C1810]">
                Moksha Sewa
              </span>

              <span className="mt-0.5 text-[16px] font-medium leading-tight text-[#8F5A21] sm:text-[16px]">
                An Initiative of Namo Gange Trust
              </span>
            </div>
          </div>

          {/* layered display type */}
          <h1
            className="leading-[0.95]"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            <span className="block text-[38px] text-[#102b44] sm:text-[46px] lg:text-[52px]">
              A Promise of
            </span>

            <span className="mt-1 block text-[46px] text-[#dc671f] sm:text-[58px] lg:text-[68px]">
              Moksha Sewa
            </span>
          </h1>

          {/* diya-style flourish */}
          <div className="mt-1 flex items-center gap-2">
            <span className="h-[2px] w-12 bg-[#dc671f]" />

            <span className="h-2 w-2 rotate-45 border border-[#dc671f] bg-[#dc671f]" />

            <span className="h-px w-20 bg-gradient-to-r from-[#dc671f] to-transparent" />
          </div>

          <p className="mt-1 max-w-[455px] text-[16px] leading-6 text-[#17283a] sm:text-[16px]">
            Moksha Sewa is a humanitarian end-of-life support mission for
            economically weaker families and legally authorised unclaimed
            cases.
          </p>

          {/* trust row */}
          <div className="mt-1 flex flex-wrap items-center gap-x-6 gap-y-2">
            {[
              "Dignity First",
              "Eligibility-Based",
              "Always Available",
            ].map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-2 text-[16px] font-semibold text-[#17283a]"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#dc671f]/12">
                  <FaCheckCircle className="h-3 w-3 text-[#dc671f]" />
                </span>

                {chip}
              </span>
            ))}
          </div>

          <div className="mt-3 flex flex-col gap-2.5 sm:flex-row">
            <a
              href="/request-help"
              className="inline-flex h-[46px] items-center justify-center gap-2 rounded-[7px] border border-[#C6520A] bg-[#D95A06] px-4 text-[16px] font-semibold text-white shadow-[0_8px_18px_rgba(190,74,0,0.18)] transition hover:-translate-y-0.5 hover:bg-[#C94F03]"
            >
              <FaHandHoldingHeart className="h-5 w-5 shrink-0" />

              <span>Request Help</span>
            </a>

            <a
              href="/donation"
              className="inline-flex h-[46px] items-center justify-center gap-2 rounded-[7px] border border-[#C6520A] bg-[#D95A06] px-4 text-[16px] font-semibold text-white shadow-[0_8px_18px_rgba(190,74,0,0.18)] transition hover:-translate-y-0.5 hover:bg-[#C94F03]"
            >
              <FaFire className="h-5 w-5 shrink-0" />

              <span>Support This Mission</span>
            </a>
          </div>
        </div>
      </div>

      {/* floating helpline card — bottom right */}
      <a
        href="tel:+919220147229"
        className="group absolute bottom-24 right-16 hidden items-center gap-3 rounded-2xl border border-[#E8D9C8] bg-white/95 px-4 py-3 text-[#2C1810] shadow-[0_16px_40px_rgba(44,24,16,0.18)] backdrop-blur-md transition hover:bg-white lg:flex lg:right-24 xl:right-32"
      >
        <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#dc671f] text-white">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#dc671f]/50" />

          <FaPhoneAlt className="relative h-4 w-4" />
        </span>

        <span>
          <span className="block text-[16px] uppercase tracking-[0.2em] text-[#dc671f]">
            24/7 Helpline
          </span>

          <span className="block font-serif text-[16px] text-[#2C1810]">
            +91 9220147229
          </span>
        </span>
      </a>
    </section>
  );
}