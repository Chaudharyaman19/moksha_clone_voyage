"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import {
  CalendarDays,
  History,
  ShieldCheck,
  Globe2,
} from "lucide-react";

const PrivacyHero = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const imageWrapperRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const contentRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const decorationRef = useRef<HTMLDivElement | null>(null);
  const descriptionRef = useRef<HTMLDivElement | null>(null);
  const leafRef = useRef<HTMLDivElement | null>(null);

  const infoBannerRef = useRef<HTMLDivElement | null>(null);
  const infoItemsRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      /*
       * -----------------------------------------
       * INITIAL STATES
       * -----------------------------------------
       */

      gsap.set(imageWrapperRef.current, {
        clipPath: "inset(0 100% 0 0)",
      });

      gsap.set(imageRef.current, {
        scale: 1.12,
      });

      gsap.set(contentRef.current, {
        opacity: 0,
        x: -70,
      });

      gsap.set(
        [
          titleRef.current,
          decorationRef.current,
          descriptionRef.current,
        ],
        {
          opacity: 0,
          y: 30,
        }
      );

      gsap.set(leafRef.current, {
        opacity: 0,
        scale: 0.5,
        rotate: -20,
      });

      gsap.set(infoBannerRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.96,
      });

      gsap.set(infoItemsRef.current, {
        opacity: 0,
        y: 15,
      });

      /*
       * -----------------------------------------
       * 1. IMAGE REVEAL
       * -----------------------------------------
       */

      tl.to(imageWrapperRef.current, {
        clipPath: "inset(0 0% 0 0)",
        duration: 1.5,
        ease: "power4.inOut",
      });

      /*
       * -----------------------------------------
       * 2. IMAGE ZOOM
       * -----------------------------------------
       */

      tl.to(
        imageRef.current,
        {
          scale: 1,
          duration: 1.8,
          ease: "power3.out",
        },
        "<"
      );

      /*
       * -----------------------------------------
       * 3. LEFT CONTENT
       * -----------------------------------------
       */

      tl.to(
        contentRef.current,
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.65"
      );

      /*
       * -----------------------------------------
       * 5. TITLE
       * -----------------------------------------
       */

      tl.to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power4.out",
        },
        "-=0.15"
      );

      /*
       * -----------------------------------------
       * 6. DECORATION
       * -----------------------------------------
       */

      tl.to(
        decorationRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        "-=0.35"
      );

      /*
       * -----------------------------------------
       * 7. LEAF
       * -----------------------------------------
       */

      tl.to(
        leafRef.current,
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.65,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      );

      /*
       * -----------------------------------------
       * 8. DESCRIPTION
       * -----------------------------------------
       */

      tl.to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.2"
      );

      /*
       * -----------------------------------------
       * 9. FLOATING INFO BANNER
       * -----------------------------------------
       */

      tl.to(
        infoBannerRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "back.out(1.2)",
        },
        "-=0.15"
      );

      /*
       * -----------------------------------------
       * 10. INFO ITEMS STAGGER
       * -----------------------------------------
       */

      tl.to(
        infoItemsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.35"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addInfoItem = (el: HTMLDivElement | null) => {
    if (el && !infoItemsRef.current.includes(el)) {
      infoItemsRef.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        min-h-[735px]
        overflow-visible
        bg-[#fbf5ea]
        sm:min-h-[705px]
        md:aspect-[16/10]
        md:min-h-[635px]
        lg:aspect-[20/9]
        lg:min-h-[615px]
      "
    >
      {/* =====================================================
          HERO IMAGE
      ====================================================== */}

      <div
        ref={imageWrapperRef}
        className="
          absolute
          inset-y-0
          left-0
          right-0
          z-10
          overflow-hidden
        "
      >
        <Image
          src="/assets/privacy-policy/privacy.webp"
          alt="Privacy Policy"
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-center
          "
          ref={imageRef}
        />

        {/* Soft image overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#fbf5ea]/20
            via-transparent
            to-black/5
            pointer-events-none
          "
        />
      </div>

      {/* =====================================================
          LEFT CONTENT
      ====================================================== */}

      {/* Smooth content-to-image blend */}
        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            z-[15]
            hidden
            w-[68%]
            md:block
          "
          style={{
            background:
              "linear-gradient(90deg, #fbf5ea 0%, #fbf5ea 42%, rgba(251,245,234,0.95) 50%, rgba(251,245,234,0.78) 57%, rgba(251,245,234,0.40) 64%, rgba(251,245,234,0.08) 70%, rgba(251,245,234,0) 74%)",
          }}
        />

        {/* Mobile content readability */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[15]
            bg-gradient-to-r
            from-[#fbf5ea]/95
            via-[#fbf5ea]/70
            to-transparent
            md:hidden
          "
        />

        <div
          ref={contentRef}
          className="
            relative
            z-20
            mx-auto
            flex
            h-full
            min-h-[735px]
            w-full
            max-w-7xl
            items-center
            sm:min-h-[705px]
            md:min-h-[635px]
            lg:min-h-[615px]
          "
        >
        <div
          className="
            relative
            h-full
            min-h-[735px]
            w-[58%]
            flex
            items-center
            sm:min-h-[705px]
            md:min-h-[635px]
            lg:min-h-[615px]
          "
        >
          {/* =================================================
              CONTENT
          ================================================== */}

          <div
            className="
              relative
              z-20
              max-w-[680px]
              px-4
              py-12
              sm:px-5
              lg:px-0
            "
          >
            {/* Heading */}

            <h1
              ref={titleRef}
              className="
                m-0
                font-serif
                text-[42px]
                font-semibold
                leading-[0.95]
                tracking-[-2px]
                text-[#2C1810]
                sm:text-[48px]
                md:text-[52px]
                lg:text-[56px]
              "
            >
              Privacy Policy
            </h1>

            {/* =================================================
                DECORATIVE LINE
            ================================================== */}

            <div
              ref={decorationRef}
              className="
                mt-5
                flex
                items-center
                gap-3
              "
            >
              <div
                className="
                  h-[1px]
                  w-[80px]
                  bg-[#C9A574]/60
                "
              />

              <div
                ref={leafRef}
                className="
                  relative
                  h-[20px]
                  w-[34px]
                "
              >
                <span
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[16px]
                    w-[10px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rotate-[-25deg]
                    rounded-[100%_0]
                    border
                    border-[#C9A574]
                  "
                />

                <span
                  className="
                    absolute
                    left-[9px]
                    top-[4px]
                    h-[16px]
                    w-[10px]
                    rotate-[25deg]
                    rounded-[100%_0]
                    border
                    border-[#C9A574]/70
                  "
                />

                <span
                  className="
                    absolute
                    right-[4px]
                    top-[7px]
                    h-[13px]
                    w-[8px]
                    rotate-[55deg]
                    rounded-[100%_0]
                    border
                    border-[#C9A574]/50
                  "
                />
              </div>

              <div
                className="
                  h-[1px]
                  w-[45px]
                  bg-[#C9A574]/40
                "
              />
            </div>

            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <div
              ref={descriptionRef}
              className="
                mt-5
                max-w-[490px]
                text-[#2C1810]
              "
            >
              <p
                className="
                  mb-3
                  text-[15px]
                  font-semibold
                  leading-relaxed
                  sm:text-[16px]
                "
              >
                Your privacy is important to us.
              </p>

              <p
                className="
                  max-w-[480px]
                  text-[13px]
                  leading-[1.8]
                  text-[#5B4635]
                  sm:text-[14px]
                "
              >
                This Privacy Policy explains how Moksh Sewa
                (an initiative of Namo Gange Trust) collects,
                uses, protects, and shares your personal
                information when you visit our website or use
                our services.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          FLOATING INFORMATION BANNER
      ====================================================== */}

      <div
        ref={infoBannerRef}
        className="
          absolute
          bottom-0
          left-1/2
          z-50
          w-full
          max-w-[1600px]
          -translate-x-1/2
          translate-y-1/2
          border-b
          border-[#73532F]
          bg-gradient-to-r
          from-[#8B6A3E]
          via-[#9C794C]
          to-[#8B6A3E]
          shadow-md
        "
      >
        <div
          className="
            grid
            grid-cols-2
            lg:grid-cols-4
          "
        >
          {/* ===============================================
              EFFECTIVE DATE
          ================================================ */}

          <div
            ref={addInfoItem}
            className="
              flex
              items-center
              justify-center
              gap-2
              px-2
              py-1.5
              sm:gap-3
              sm:px-4
              lg:px-5
            "
          >
            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-white/15
                text-white
                shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]
                sm:h-10
                sm:w-10
              "
            >
              <CalendarDays
                size={25}
                strokeWidth={1.7}
              />
            </div>

            <div>
              <p
                className="
                  text-[8px]
                  text-white/90
                  sm:text-[9px]
                  lg:text-[10px]
                "
              >
                Effective Date
              </p>

              <p
                className="
                  mt-0.5
                  whitespace-nowrap
                  text-[9px]
                  font-semibold
                  text-white
                  drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]
                  sm:text-[10px]
                  lg:text-[11px]
                "
              >
                17 August 2026
              </p>
            </div>
          </div>

          {/* ===============================================
              LAST UPDATED
          ================================================ */}

          <div
            ref={addInfoItem}
            className="
              flex
              items-center
              gap-2
              px-2
              sm:gap-3
              sm:px-4
              lg:px-5
              md:border-l
              md:border-white/20
            "
          >
            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-white/15
                text-white
                shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]
                sm:h-10
                sm:w-10
              "
            >
              <History
                size={25}
                strokeWidth={1.7}
              />
            </div>

            <div>
              <p
                className="
                  text-[8px]
                  text-white/90
                  sm:text-[9px]
                  lg:text-[10px]
                "
              >
                Last Updated
              </p>

              <p
                className="
                  mt-0.5
                  whitespace-nowrap
                  text-[9px]
                  font-semibold
                  text-white
                  drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]
                  sm:text-[10px]
                  lg:text-[11px]
                "
              >
                17 August 2026
              </p>
            </div>
          </div>

          {/* ===============================================
              GOVERNING LAW
          ================================================ */}

          <div
            ref={addInfoItem}
            className="
              flex
              items-center
              gap-2
              px-2
              sm:gap-3
              sm:px-4
              lg:px-5
              border-t
              border-white/20
              md:border-l
              md:border-white/20
              md:border-t-0
            "
          >
            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-white/15
                text-white
                shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]
                sm:h-10
                sm:w-10
              "
            >
              <ShieldCheck
                size={25}
                strokeWidth={1.7}
              />
            </div>

            <div>
              <p
                className="
                  text-[8px]
                  text-white/90
                  sm:text-[9px]
                  lg:text-[10px]
                "
              >
                Governing Law
              </p>

              <p
                className="
                  mt-0.5
                  whitespace-nowrap
                  text-[9px]
                  font-semibold
                  text-white
                  drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]
                  sm:text-[10px]
                  lg:text-[11px]
                "
              >
                Laws of India
              </p>
            </div>
          </div>

          {/* ===============================================
              APPLIES TO
          ================================================ */}

          <div
            ref={addInfoItem}
            className="
              flex
              items-center
              gap-2
              px-2
              sm:gap-3
              sm:px-4
              lg:px-5
              border-t
              border-white/20
              md:border-l
              md:border-white/20
              md:border-t-0
            "
          >
            <div
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-white/15
                text-white
                shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]
                sm:h-10
                sm:w-10
              "
            >
              <Globe2
                size={25}
                strokeWidth={1.7}
              />
            </div>

            <div>
              <p
                className="
                  text-[8px]
                  text-white/90
                  sm:text-[9px]
                  lg:text-[10px]
                "
              >
                Applies To
              </p>

              <p
                className="
                  mt-0.5
                  whitespace-nowrap
                  text-[9px]
                  font-semibold
                  text-white
                  drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]
                  sm:text-[10px]
                  lg:text-[11px]
                "
              >
                Website &amp; All Services
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyHero;