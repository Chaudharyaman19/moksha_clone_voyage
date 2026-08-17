"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import {
  CalendarDays,
  Clock3,
  Globe2,
  History,
  Scale,
  ShieldCheck,
} from "lucide-react";

interface PolicyMetaItem {
  icon: React.ElementType;
  label: string;
  value: string;
}

interface PolicyHeroProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  showInfoBanner?: boolean;
  policyMeta?: PolicyMetaItem[];
}

export const defaultPolicyMeta: PolicyMetaItem[] = [
  {
    icon: CalendarDays,
    label: "Effective Date",
    value: "17 August 2026",
  },
  {
    icon: History,
    label: "Last Updated",
    value: "17 August 2026",
  },
  {
    icon: Scale,
    label: "Governing Law",
    value: "Laws of India",
  },
  {
    icon: Globe2,
    label: "Applies To",
    value: "Website & All Services",
  },
];

export const termsPolicyMeta: PolicyMetaItem[] = [
  {
    icon: CalendarDays,
    label: "Effective Date",
    value: "17 August 2026",
  },
  {
    icon: Clock3,
    label: "Last Updated",
    value: "17 August 2026",
  },
  {
    icon: Scale,
    label: "Governing Law",
    value: "Laws of India",
  },
  {
    icon: Globe2,
    label: "Applies To",
    value: "Website & All Services",
  },
];

export const refundPolicyMeta: PolicyMetaItem[] = [
  {
    icon: CalendarDays,
    label: "Effective Date",
    value: "17 August 2026",
  },
  {
    icon: Clock3,
    label: "Last Updated",
    value: "17 August 2026",
  },
  {
    icon: Scale,
    label: "Governing Law",
    value: "Laws of India",
  },
  {
    icon: Globe2,
    label: "Applies To",
    value: "Donations & Transactions",
  },
];

const PolicyHero = ({
  title,
  subtitle,
  description,
  imageSrc = "/assets/privacy-policy/privacy.webp",
  imageAlt,
  showInfoBanner = true,
  policyMeta = defaultPolicyMeta,
}: PolicyHeroProps) => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);

  const imageWrapperRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const contentRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const decorationRef = useRef<HTMLDivElement | null>(null);
  const descriptionRef = useRef<HTMLDivElement | null>(null);

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

      if (showInfoBanner) {
        gsap.set(infoBannerRef.current, {
          opacity: 0,
          y: 40,
        });

        gsap.set(infoItemsRef.current, {
          opacity: 0,
          y: 15,
        });
      }

      /*
       * -----------------------------------------
       * 1. IMAGE REVEAL
       * -----------------------------------------
       */

      tl.to(imageWrapperRef.current, {
        clipPath: "inset(0 0% 0 0)",
        duration: 0.7,
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
          duration: 0.9,
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
          duration: 0.5,
          ease: "power3.out",
        },
        0.4
      );

      /*
       * -----------------------------------------
       * 4. TITLE
       * -----------------------------------------
       */

      tl.to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "power4.out",
        },
        0.5
      );

      /*
       * -----------------------------------------
       * 5. DECORATION
       * -----------------------------------------
       */

      tl.to(
        decorationRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
        },
        0.55
      );

      /*
       * -----------------------------------------
       * 6. DESCRIPTION
       * -----------------------------------------
       */

      tl.to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
        },
        0.6
      );

      /*
       * -----------------------------------------
       * 8. FLOATING INFO BANNER
       * -----------------------------------------
       */

      if (showInfoBanner) {
        tl.to(
          infoBannerRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            ease: "back.out(1.2)",
          },
          0.65
        );

        /*
         * -----------------------------------------
         * 9. INFO ITEMS STAGGER
         * -----------------------------------------
         */

        tl.to(
          infoItemsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.35,
            stagger: 0.05,
            ease: "power3.out",
          },
          0.75
        );
      }
    }, rootRef);

    return () => ctx.revert();
  }, [showInfoBanner]);

  const addInfoItem = (el: HTMLDivElement | null) => {
    if (el && !infoItemsRef.current.includes(el)) {
      infoItemsRef.current.push(el);
    }
  };

  return (
    <div ref={rootRef}>
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        min-h-[735px]
        overflow-visible
        bg-[#fbf5ea]
        sm:min-h-[570px]
        md:min-h-[570px]
        lg:min-h-[550px]
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
          src={imageSrc}
          alt={imageAlt ?? title}
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
            sm:min-h-[570px]
            md:min-h-[570px]
            lg:min-h-[550px]
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
            sm:min-h-[570px]
            md:min-h-[570px]
            lg:min-h-[550px]
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
              pt-16
              pb-10
              sm:px-5
              lg:pt-24
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
                drop-shadow-[0_2px_8px_rgba(92,58,27,0.06)]
                sm:text-[48px]
                md:text-[52px]
                lg:text-[56px]
              "
            >
              {title}
            </h1>

            {/* =================================================
                DECORATIVE LINE
            ================================================== */}

            <div
              ref={decorationRef}
              className="
                mt-2.5
                flex
                items-center
              "
            >
              <Image
                src="/assets/privacy-policy/title_decoration.webp"
                alt=""
                width={200}
                height={40}
                className="h-8 w-auto object-contain sm:h-10"
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
                  text-[20px]
                  font-bold
                  leading-relaxed
                  text-[#D95A06]
                  sm:text-[20px]
                "
              >
                {subtitle}
              </p>

              <p
                className="
                  max-w-[480px]
                  text-[16px]
                  font-semibold
                  leading-[1.8]
                  text-[#5B4635]
                  drop-shadow-[0_1px_3px_rgba(92,58,27,0.1)]
                  sm:text-[16px]
                "
              >
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {showInfoBanner && (
      /* =====================================================
          INFORMATION BANNER
      ====================================================== */

      <div
        ref={infoBannerRef}
        className="
          w-full
          border-b
          border-[#73532F]
          bg-gradient-to-r
          from-[#8B6A3E]
          via-[#9C794C]
          to-[#8B6A3E]
          py-2
          shadow-md
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-[1600px]
            grid-cols-2
            pr-4
            pl-0
            md:grid-cols-4
            sm:pr-6
            sm:pl-0
          "
        >
          {policyMeta.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                ref={addInfoItem}
                className={`
                  flex
                  items-center
                  justify-center
                  gap-3
                  py-0.5
                  ${index === 0 ? "pr-4" : "px-4"}
                  ${
                    index > 0
                      ? "md:border-l md:border-white/20"
                      : ""
                  }
                  ${
                    index > 1
                      ? "border-t border-white/20 md:border-t-0"
                      : ""
                  }
                `}
              >
                <div
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white/15
                    text-white
                    shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]
                  "
                >
                  <Icon
                    size={16}
                    strokeWidth={1.7}
                    className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
                  />
                </div>

                <div className="min-w-0 text-left">
                  <p
                    className="
                      max-w-[150px]
                      text-[16px]
                      font-medium
                      leading-tight
                      tracking-[0.02em]
                      text-white/90
                      lg:max-w-none
                      lg:text-[16px]
                    "
                  >
                    {item.label}
                  </p>

                  <p
                    className="
                      mt-1
                      text-[17px]
                      font-medium
                      leading-none
                      text-white
                      drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]
                      lg:text-[19px]
                    "
                  >
                    {item.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )}
    </div>
  );
};

export default PolicyHero;