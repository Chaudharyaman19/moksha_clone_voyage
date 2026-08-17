
// "use client";

// import Image from "next/image";
// import { ComponentType, useCallback, useEffect, useMemo, useState } from "react";
// import {
//   FaArrowRight,
//   FaChevronLeft,
//   FaChevronRight,
//   FaLandmark,
//   FaShieldAlt,
//   FaSmile,
//   FaUsers,
//   FaHandsHelping,
//   FaRegHeart,
// } from "react-icons/fa";
// import { PiFlowerLotus } from "react-icons/pi";

// function AnimatedNumber({ endString }: { endString: string }) {
//   const shouldAnimate = !/[^0-9,%+]/.test(endString);
//   const end = parseInt(endString.replace(/,/g, "").replace(/\D/g, ""), 10);
//   const suffix = endString.replace(/[0-9,]/g, "");
//   const formatComma = endString.includes(",");

//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (!shouldAnimate) return;

//     let startTimestamp: number | null = null;
//     const duration = 2000;

//     const step = (timestamp: number) => {
//       if (!startTimestamp) startTimestamp = timestamp;
//       const progress = Math.min((timestamp - startTimestamp) / duration, 1);
//       const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
//       setCount(Math.floor(easeProgress * end));

//       if (progress < 1) {
//         window.requestAnimationFrame(step);
//       }
//     };

//     window.requestAnimationFrame(step);
//   }, [end, shouldAnimate]);

//   if (!shouldAnimate) {
//     return <span>{endString}</span>;
//   }

//   return (
//     <span>
//       {formatComma && end > 999 ? count.toLocaleString("en-IN") : count}
//       {suffix}
//     </span>
//   );
// }

// type StatItem = {
//   value: string;
//   label: string;
//   icon: ComponentType<{ className?: string; strokeWidth?: number }>;
// };

// type SlideContent = {
//   heading: string[];
//   description: string;
//   descriptionHighlight?: string;
//   alt: string;
//   primaryButton?: {
//     label: string;
//     href: string;
//   };
//   secondaryButton?: {
//     label: string;
//     href: string;
//   };
// };

// export default function Hero() {
//   const images = useMemo(
//     () => [
//       "/hero-images/dignity-in-every-final-journey-bg.png",
//       "/hero-images/8.png",
//       "/hero-images/1.png",
//       "/hero-images/2.png",
//       "/hero-images/3.png",
//       "/hero-images/4.png",
//       "/hero-images/9.png",
//     ],
//     [],
//   );

//   const slideContent = useMemo<SlideContent[]>(
//     () => [
//             {
//             heading: ["Dignity in Every", "Final Journey"],
//               description:
//                 "Supporting economically weaker families and legally authorised unclaimed cases with compassionate last-rites assistance.",
//               descriptionHighlight: "compassionate last-rites assistance.",
//               alt: "Moksha Sewa team helping a helpless family with a dignified final journey",
//               primaryButton: {
//                 label: "Request Sewa Help",
//                 href: "/request-help",
//               },
//               secondaryButton: {
//                 label: "Support This Mission",
//                 href: "/donation",
//               },
//             },
//             {
//               heading: ["Transport Support", "Handled With Care"],
//               description:
//                 "We help coordinate ambulance and hearse-van support for verified cases, subject to location, availability and required local formalities.",
//               descriptionHighlight: "location, availability and required local formalities.",
//               alt: "Moksha Sewa team arranging hearse van support for a grieving family",
//               primaryButton: {
//                 label: "Call Helpline",
//                 href: "tel:+919220147229",
//               },
//               secondaryButton: {
//                 label: "Request Sewa Help",
//                 href: "/request-help",
//               },
//             },
//             {
//               heading: ["Essential Ritual Materials", "Arranged With Care"],
//               description:
//                 "For eligible families, we help arrange essential ritual materials such as wood, shroud cloth, flowers, lamps and basic final-rites items.",
//               descriptionHighlight: "basic final-rites items.",
//               alt: "Moksha Sewa volunteers supporting a needy family at the cremation ground",
//               primaryButton: {
//                 label: "Support This Mission",
//                 href: "/donation",
//               },
//               secondaryButton: {
//                 label: "Request Sewa Help",
//                 href: "/request-help",
//               },
//             },
//             {
//               heading: ["Ritual Guidance", "With Sensitivity"],
//               description:
//                 "We help eligible families coordinate priest guidance and basic ritual support according to local customs and availability.",
//               descriptionHighlight: "local customs and availability.",
//               alt: "Moksha Sewa volunteers arranging priest and ritual materials",
//               primaryButton: {
//                 label: "Request Sewa Help",
//                 href: "/request-help",
//               },
//               secondaryButton: {
//                 label: "Support This Mission",
//                 href: "/donation",
//               },
//             },
//             {
//               heading: ["Unclaimed & Abandoned Cases", "Never Without Respect"],
//               description:
//                 "Support is undertaken only after completion of applicable police, hospital, municipal or other competent-authority formalities.",
//               descriptionHighlight: "competent-authority formalities.",
//               alt: "Moksha Sewa team giving respectful final farewell support",
//               primaryButton: {
//                 label: "Report Eligible Case",
//                 href: "/request-help",
//               },
//               secondaryButton: {
//                 label: "Support This Mission",
//                 href: "/donation",
//               },
//             },
//             {
//               heading: ["Volunteers on Ground", "For Verified Cases"],
//               description:
//                 "Our volunteers support case-based coordination, documentation guidance, materials and cremation-ground assistance where approved and available.",
//               descriptionHighlight: "where approved and available.",
//               alt: "Moksha Sewa volunteers doing on-ground service near the cremation ground",
//               primaryButton: {
//                 label: "Become Volunteer",
//                 href: "/volunteer/register",
//               },
//               secondaryButton: {
//                 label: "Support This Mission",
//                 href: "/donation",
//               },
//             },
//             {
//               heading: ["Food and Basic Support", "Case-Based Relief"],
//               description:
//                 "Where verified need exists, we help coordinate food, water and basic relief support for families facing immediate hardship.",
//               descriptionHighlight: "families facing immediate hardship.",
//               alt: "Namo Gange volunteers serving food as part of community food service",
//               primaryButton: {
//                 label: "Support This Mission",
//                 href: "/donation",
//               },
//               secondaryButton: {
//                 label: "Donate for Relief",
//                 href: "/donation",
//               },
//             },
//           ]
//     ,
//     [],
//   );

//   const stats: StatItem[] = [
//     { value: "24/7", label: "Helpline Guidance", icon: FaUsers },
//     { value: "Delhi NCR", label: "Launch Region", icon: FaLandmark },
//     { value: "Verified", label: "Case-Based Support", icon: FaSmile },
//     { value: "Subject", label: "To Eligibility", icon: FaShieldAlt },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const activeSlide = slideContent[currentIndex] ?? slideContent[0];
//   const activeImage = images[currentIndex] ?? images[0];

//   const nextSlide = useCallback(() => {
//     setCurrentIndex((previous) => (previous + 1) % images.length);
//   }, [images.length]);

//   const previousSlide = useCallback(() => {
//     setCurrentIndex(
//       (previous) => (previous - 1 + images.length) % images.length,
//     );
//   }, [images.length]);

//   useEffect(() => {
//     const timer = window.setInterval(nextSlide, 55500);
//     return () => window.clearInterval(timer);
//   }, [nextSlide]);

//   return (
//     <>
//       <section
//       className="group relative w-full min-h-[720px] overflow-hidden bg-[#fbf5ea] sm:min-h-[690px] md:aspect-[16/10] md:min-h-[620px] lg:aspect-[20/9] lg:min-h-[600px]"
//     >
//       {/* HD image slider: image is kept on the right, so it is not stretched across the full page. */}
//       <div
//         className={`absolute inset-y-0 left-0 overflow-hidden ${
//           currentIndex === 0 ? "right-0" : "right-0 md:right-[-80px]"
//         }`}
//       >
//         <div className="absolute inset-0 min-w-full transition-opacity duration-1000 ease-out">
//           <Image
//             key={activeImage}
//             src={activeImage}
//             alt={activeSlide.alt}
//             fill
//             priority={currentIndex === 0}
//             fetchPriority={currentIndex === 0 ? "high" : "auto"}
//             quality={75}
//             sizes="100vw"
//             className="object-cover object-[68%_center] transition-transform duration-[6000ms] ease-out sm:object-[72%_center] md:object-[76%_center]"
//           />
//         </div>
//       </div>

//       {/* Smooth content-to-image blend: no visible vertical division */}
//       <div
//         className="pointer-events-none absolute inset-0 hidden md:block"
//         style={{
//           background:
//             "linear-gradient(90deg, #fbf5ea 0%, #fbf5ea 24%, rgba(251,245,234,0.96) 31%, rgba(251,245,234,0.78) 38%, rgba(251,245,234,0.42) 45%, rgba(251,245,234,0.12) 51%, rgba(251,245,234,0) 57%)",
//         }}
//       />

//       {/* Mobile content readability without covering the complete image */}
//       <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#fbf5ea]/92 via-[#fbf5ea]/68 to-[#fbf5ea]/16 md:hidden" />

//       {/* Devanagari watermark — same signature as the rest of the site */}
//       <div className="pointer-events-none absolute left-16 top-1/2 z-10 hidden -translate-y-[55%] select-none font-serif text-[240px] leading-none text-[#8B6A3E]/[0.06] lg:block xl:left-24">
//         मोक्ष
//       </div>

//       {/* soft ornamental rings behind the content */}
//       <div className="pointer-events-none absolute -left-24 top-1/2 z-10 hidden h-[380px] w-[380px] -translate-y-1/2 rounded-full border border-[#C9A574]/20 lg:block" />
//       <div className="pointer-events-none absolute -left-10 top-1/2 z-10 hidden h-[270px] w-[270px] -translate-y-1/2 rounded-full border border-[#C9A574]/12 lg:block" />

//       {/* Slider controls */}
//       <button
//         type="button"
//         onClick={previousSlide}
//         aria-label="Previous hero image"
//         className="absolute left-3 top-1/2 z-40 hidden -translate-y-1/2 rounded-full border border-[#C9A574]/60 bg-[#2C1810]/25 p-2 text-white opacity-0 backdrop-blur-sm transition hover:bg-[#2C1810]/45 group-hover:opacity-100 lg:flex"
//       >
//         <FaChevronLeft className="h-5 w-5" />
//       </button>

//       <button
//         type="button"
//         onClick={nextSlide}
//         aria-label="Next hero image"
//         className="absolute right-3 top-1/2 z-40 hidden -translate-y-1/2 rounded-full border border-[#C9A574]/60 bg-[#2C1810]/25 p-2 text-white opacity-0 backdrop-blur-sm transition hover:bg-[#2C1810]/45 group-hover:opacity-100 lg:flex"
//       >
//         <FaChevronRight className="h-5 w-5" />
//       </button>

//       {/* Main content */}
//       <div className="relative z-20 mx-auto h-full max-w-7xl px-4 sm:px-5 lg:px-0">
//         <div className="flex h-full items-start pt-[66px] sm:pt-[72px] md:pt-[78px] lg:pt-[82px] xl:pt-[86px]">
//           <div className="w-full max-w-[720px] md:w-[68%] lg:w-[56%] xl:w-[54%]">
//             {/* Changeable Namo Gange logo — same position on every slide */}
//             <div className="mb-4 w-[190px] sm:w-[220px] lg:w-[250px]">
//               <Image
//                 src="/hero-images/image.png"
//                 alt="Namo Gange"
//                 width={420}
//                 height={150}
//                 priority
//                 sizes="250px"
//                 className="h-auto w-full object-contain object-left"
//               />
//             </div>

//             {/* eyebrow */}
//             <div className="mb-4 flex max-w-[520px] items-center gap-3">
//               <span className="h-px w-8 bg-[#73532F]/70" />
//               <span className="text-[16px] font-bold tracking-[0.01em] text-[#2C1810] sm:text-[16px]">
//                Moksha Sewa — An Initiative of Namo Gange Trust
//               </span>
//               <span className="h-px w-8 bg-[#73532F]/70" />
//             </div>

//             <h1
//               className="text-[38px] leading-[0.98] sm:text-[46px] md:text-[50px] lg:text-[56px] xl:text-[60px]"
//               style={{
//                 fontWeight: 500,
//               }}
//             >
//               {activeSlide.heading.map((line, index) => (
//                 <span
//                   key={line}
//                   className={`block ${index === 0 ? "text-[#2C1810] lg:whitespace-nowrap" : "mt-1 text-[#C85117]"}`}
//                 >
//                   {line}
//                 </span>
//               ))}
//             </h1>

//             {/* reference-style flourish */}
//             <div className="mt-5 flex max-w-[500px] items-center gap-3">
//               <span className="h-px flex-1 bg-[#C85117]/65" />
//               <PiFlowerLotus className="h-6 w-6 shrink-0 text-[#C85117]" />
//               <span className="h-px flex-1 bg-[#C85117]/65" />
//             </div>

//             <p className="mt-4 max-w-[545px] text-[16px] font-semibold leading-[1.55] text-[#2C1810] sm:text-[17px]">
//               {activeSlide.descriptionHighlight &&
//               activeSlide.description.includes(activeSlide.descriptionHighlight) ? (
//                 <>
//                   {activeSlide.description.replace(activeSlide.descriptionHighlight, "")}
//                   <span className="font-bold text-[#C85117]">
//                     {activeSlide.descriptionHighlight}
//                   </span>
//                 </>
//               ) : (
//                 activeSlide.description
//               )}
//             </p>

//             <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
//               <a
//                 href={activeSlide.primaryButton?.href ?? "/sevas"}
//                 className="group/cta inline-flex h-[56px] w-full items-center justify-between rounded-[9px] bg-[#D95A06] px-4 text-[16px] font-bold text-white shadow-[0_10px_24px_rgba(190,74,0,0.20)] transition hover:-translate-y-0.5 hover:bg-[#C94F03] sm:w-[255px]"
//               >
//                 <span className="flex items-center gap-3">
//                   <FaHandsHelping className="h-6 w-6" />
//                   <span>{activeSlide.primaryButton?.label ?? "Request Sewa Help"}</span>
//                 </span>
//                 <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/75">
//                   <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:translate-x-0.5" />
//                 </span>
//               </a>

//               <a
//                 href={activeSlide.secondaryButton?.href ?? "/sevas"}
//                 className="group/cta inline-flex h-[56px] w-full items-center justify-between rounded-[9px] border border-[#E8D9C8] bg-white/90 px-4 text-[16px] font-bold text-[#2C1810] shadow-[0_8px_18px_rgba(73,49,31,0.08)] backdrop-blur-[2px] transition hover:-translate-y-0.5 hover:border-[#D95A06] hover:bg-white sm:w-[255px]"
//               >
//                 <span className="flex items-center gap-3">
//                   <FaRegHeart className="h-6 w-6 text-[#D95A06]" />
//                   <span>{activeSlide.secondaryButton?.label ?? "Support This Mission"}</span>
//                 </span>
//                 <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D95A06] text-[#D95A06]">
//                   <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:translate-x-0.5" />
//                 </span>
//               </a>
//             </div>


//           </div>
//         </div>
//       </div>
//     </section>

//     {/* Mission Stats Band Below Hero */}
//       <div className="w-full border-b border-[#73532F] bg-gradient-to-r from-[#8B6A3E] via-[#9C794C] to-[#8B6A3E] py-1 shadow-md">
//         <div className="mx-auto grid max-w-[1600px] grid-cols-2 md:grid-cols-4">
//           {stats.map((stat, index) => {
//             const Icon = stat.icon;
//             return (
//               <div
//                 key={stat.label}
//                 className={`group/stat flex items-center justify-center gap-3 px-4 py-1.5 ${index > 0 ? "md:border-l md:border-white/20" : ""
//                   } ${index > 1 ? "border-t border-white/20 md:border-t-0" : ""}`}
//               >
//                 <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition-transform duration-300 group-hover/stat:scale-110 shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]">
//                   <Icon className="h-4 w-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]" />
//                 </div>
//                 <div className="min-w-0 text-left">
//                   <div
//                     className="text-[17px] font-medium leading-none text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)] lg:text-[19px]"
//                   >
//                     <AnimatedNumber endString={stat.value} />
//                   </div>
//                   <div className="mt-1 max-w-[120px] text-[16px] font-medium uppercase leading-tight tracking-[0.06em] text-white/90 lg:max-w-none lg:text-[16px]">
//                     {stat.label}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }
"use client";

import Image from "next/image";
import { ComponentType, useCallback, useEffect, useMemo, useState } from "react";
import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaLandmark,
  FaShieldAlt,
  FaSmile,
  FaUsers,
  FaHandsHelping,
  FaRegHeart,
  FaPrayingHands,
  FaHandHoldingHeart,
  FaAmbulance,
} from "react-icons/fa";
import { PiFlowerLotus } from "react-icons/pi";

function AnimatedNumber({ endString }: { endString: string }) {
  const shouldAnimate = !/[^0-9,%+]/.test(endString);
  const end = parseInt(endString.replace(/,/g, "").replace(/\D/g, ""), 10);
  const suffix = endString.replace(/[0-9,]/g, "");
  const formatComma = endString.includes(",");

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;

    let startTimestamp: number | null = null;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [end, shouldAnimate]);

  if (!shouldAnimate) {
    return <span>{endString}</span>;
  }

  return (
    <span>
      {formatComma && end > 999 ? count.toLocaleString("en-IN") : count}
      {suffix}
    </span>
  );
}

type StatItem = {
  value: string;
  label: string;
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
};

type SlideContent = {
  heading: string[];
  headingHighlight?: string;
  description: string;
  descriptionHighlight?: string;
  alt: string;
  showMissionExtras?: boolean;
  familySupportLayout?: boolean;
  journeyPrayerLayout?: boolean;
  volunteerImpactLayout?: boolean;
  primaryButton?: {
    label: string;
    href: string;
  };
  secondaryButton?: {
    label: string;
    href: string;
  };
};

export default function Hero() {
  const images = useMemo(
    () => [
      "/hero-images/dignity-in-every-final-journey-bg.png",
      "/hero-images/image2.png",
      "/hero-images/image3.png",
      "/hero-images/image7.png",
      "/hero-images/image8.png",
      "/hero-images/volunteer-impact-v2.png",
      // "/hero-images/1.png",
      // "/hero-images/2.png",
      // "/hero-images/3.png",
      // "/hero-images/4.png",
      // "/hero-images/9.png",
    ],
    [],
  );

  const slideContent = useMemo<SlideContent[]>(
    () => [
      {
        heading: ["Dignity in Every", "Final Journey"],
        description:
          "Supporting economically weaker families and legally authorised unclaimed cases with compassionate last-rites assistance.",
        descriptionHighlight: "compassionate last-rites assistance.",
        alt: "Moksha Sewa team helping a helpless family with a dignified final journey",
        primaryButton: {
          label: "Request Sewa Help",
          href: "/request-help",
        },
        secondaryButton: {
          label: "Support This Mission",
          href: "/donation",
        },
      },
      {
        heading: ["No One Should Leave", "This World", "Without Dignity."],
        description:
          "We provide legally authorised, dignified last rites for unclaimed and abandoned bodies with complete respect and compassion.",
        descriptionHighlight: "respect and compassion.",
        alt: "Moksha Sewa volunteers providing dignified last rites support for an authorised unclaimed case",
        primaryButton: {
          label: "Know Our Mission",
          href: "/about",
        },
        secondaryButton: {
          label: "Support This Mission",
          href: "/donation",
        },
      },
      {
        heading: ["Be the Reason Someone", "Receives a", "Dignified Farewell"],
        headingHighlight: "Dignified Farewell",
        description:
          "Your time, compassion or contribution can bring dignity to someone’s final journey.",
        descriptionHighlight: "dignity",
        alt: "Moksha Sewa volunteers supporting an elderly couple with dignity and compassion",
        primaryButton: {
          label: "Support This Mission",
          href: "/donation",
        },
        secondaryButton: {
          label: "Become a Volunteer",
          href: "/volunteer/register",
        },
      },
      {
        heading: [
          "When a Family Cannot",
          "Afford a Final Farewell,",
          "Humanity Must Stand Beside Them.",
        ],
        headingHighlight: "Final Farewell,",
        description: "",
        alt: "Moksha Sewa volunteers standing beside a grieving family with dignity and compassion",
        familySupportLayout: true,
        primaryButton: {
          label: "Request Support",
          href: "/request-help",
        },
        secondaryButton: {
          label: "Support a Family",
          href: "/donation",
        },
      },
      {
        heading: [
          "From the Final Journey",
          "to the Final Prayer,",
          "We Stand Beside Them.",
        ],
        headingHighlight: "We Stand Beside Them.",
        description: "",
        alt: "Moksha Sewa transport, rituals and family support during a dignified final journey",
        journeyPrayerLayout: true,
        primaryButton: {
          label: "Explore Our Sewa",
          href: "/sevas",
        },
        secondaryButton: {
          label: "Support This Mission",
          href: "/donation",
        },
      },
      {
        heading: [
          "Be the Reason",
          "Someone Receives a",
          "Dignified Farewell.",
        ],
        headingHighlight: "Dignified Farewell.",
        description:
          "Your time can bring comfort, care and compassion.",
        alt: "Moksha Sewa volunteers serving with compassion and dignity",
        volunteerImpactLayout: true,
        primaryButton: {
          label: "Become a Volunteer",
          href: "/volunteer/register",
        },
        secondaryButton: {
          label: "Support This Mission",
          href: "/donation",
        },
      },
      {
        heading: ["Food and Basic Support", "Case-Based Relief"],
        description:
          "Where verified need exists, we help coordinate food, water and basic relief support for families facing immediate hardship.",
        descriptionHighlight: "families facing immediate hardship.",
        alt: "Namo Gange volunteers serving food as part of community food service",
        primaryButton: {
          label: "Support This Mission",
          href: "/donation",
        },
        secondaryButton: {
          label: "Donate for Relief",
          href: "/donation",
        },
      },
    ]
    ,
    [],
  );

  const stats: StatItem[] = [
    { value: "24/7", label: "Helpline Guidance", icon: FaUsers },
    { value: "Delhi NCR", label: "Launch Region", icon: FaLandmark },
    { value: "Verified", label: "Case-Based Support", icon: FaSmile },
    { value: "Subject", label: "To Eligibility", icon: FaShieldAlt },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const activeSlide = slideContent[currentIndex] ?? slideContent[0];
  const activeImage = images[currentIndex] ?? images[0];
  const isFamilySupportSlide = activeSlide.familySupportLayout === true;
  const isJourneyPrayerSlide = activeSlide.journeyPrayerLayout === true;
  const isVolunteerImpactSlide = activeSlide.volunteerImpactLayout === true;

  const nextSlide = useCallback(() => {
    setCurrentIndex((previous) => (previous + 1) % images.length);
  }, [images.length]);

  const previousSlide = useCallback(() => {
    setCurrentIndex(
      (previous) => (previous - 1 + images.length) % images.length,
    );
  }, [images.length]);

  useEffect(() => {
    const timer = window.setInterval(nextSlide, 5500);
    return () => window.clearInterval(timer);
  }, [nextSlide]);

  return (
    <>
      <section
        className="group relative w-full min-h-[735px] overflow-hidden bg-[#fbf5ea] sm:min-h-[705px] md:aspect-[16/10] md:min-h-[635px] lg:aspect-[20/9] lg:min-h-[615px]"
      >
        {/* HD image slider: image is kept on the right, so it is not stretched across the full page. */}
        <div
          className={`absolute inset-y-0 overflow-hidden ${isFamilySupportSlide
              ? "left-0 right-0 md:left-[42%]"
              : isJourneyPrayerSlide
                ? "left-0 right-0 md:left-[40%]"
                : isVolunteerImpactSlide
                  ? "left-0 right-0 md:left-[36%]"
                  : `left-0 ${currentIndex === 0 ? "right-0" : "right-0 md:right-[-80px]"}`
            }`}
        >
          <div className="absolute inset-0 min-w-full transition-opacity duration-1000 ease-out">
            <Image
              key={activeImage}
              src={activeImage}
              alt={activeSlide.alt}
              fill
              priority={currentIndex === 0}
              fetchPriority={currentIndex === 0 ? "high" : "auto"}
              quality={75}
              sizes="100vw"
              className={
                isFamilySupportSlide || isJourneyPrayerSlide || isVolunteerImpactSlide
                  ? "object-cover object-right transition-transform duration-[6000ms] ease-out"
                  : "object-cover object-[68%_center] transition-transform duration-[6000ms] ease-out sm:object-[72%_center] md:object-[76%_center]"
              }
            />
          </div>
        </div>

        {/* Smooth content-to-image blend */}
        <div
          className="pointer-events-none absolute inset-0 hidden md:block"
          style={{
            background: isFamilySupportSlide
              ? "linear-gradient(90deg, #fbf5ea 0%, #fbf5ea 34%, rgba(251,245,234,0.98) 40%, rgba(251,245,234,0.86) 46%, rgba(251,245,234,0.40) 53%, rgba(251,245,234,0.08) 59%, rgba(251,245,234,0) 64%)"
              : isJourneyPrayerSlide
                ? "linear-gradient(90deg, #fbf5ea 0%, #fbf5ea 33%, rgba(251,245,234,0.98) 39%, rgba(251,245,234,0.84) 45%, rgba(251,245,234,0.38) 52%, rgba(251,245,234,0.08) 58%, rgba(251,245,234,0) 63%)"
                : isVolunteerImpactSlide
                  ? "linear-gradient(90deg, #fbf5ea 0%, #fbf5ea 30%, rgba(251,245,234,0.98) 35%, rgba(251,245,234,0.86) 41%, rgba(251,245,234,0.42) 48%, rgba(251,245,234,0.10) 54%, rgba(251,245,234,0) 59%)"
                  : "linear-gradient(90deg, #fbf5ea 0%, #fbf5ea 24%, rgba(251,245,234,0.96) 31%, rgba(251,245,234,0.78) 38%, rgba(251,245,234,0.42) 45%, rgba(251,245,234,0.12) 51%, rgba(251,245,234,0) 57%)",
          }}
        />

        {/* Mobile content readability */}
        <div
          className={`pointer-events-none absolute inset-0 md:hidden ${isFamilySupportSlide || isJourneyPrayerSlide || isVolunteerImpactSlide
              ? "bg-gradient-to-b from-[#fbf5ea]/95 via-[#fbf5ea]/88 to-[#fbf5ea]/54"
              : "bg-gradient-to-b from-[#fbf5ea]/92 via-[#fbf5ea]/68 to-[#fbf5ea]/16"
            }`}
        />

        {/* Devanagari watermark — same signature as the rest of the site */}
        {!isFamilySupportSlide && !isJourneyPrayerSlide && !isVolunteerImpactSlide && (
          <>
            <div className="pointer-events-none absolute left-16 top-1/2 z-10 hidden -translate-y-[55%] select-none font-serif text-[240px] leading-none text-[#8B6A3E]/[0.06] lg:block xl:left-24">
              मोक्ष
            </div>

            {/* soft ornamental rings behind the content */}
            <div className="pointer-events-none absolute -left-24 top-1/2 z-10 hidden h-[380px] w-[380px] -translate-y-1/2 rounded-full border border-[#C9A574]/20 lg:block" />
            <div className="pointer-events-none absolute -left-10 top-1/2 z-10 hidden h-[270px] w-[270px] -translate-y-1/2 rounded-full border border-[#C9A574]/12 lg:block" />
          </>
        )}

        {/* Slider controls */}
        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous hero image"
          className="absolute bottom-5 right-14 z-40 hidden rounded-full border border-[#C9A574]/60 bg-[#2C1810]/25 p-2 text-white opacity-0 backdrop-blur-sm transition hover:bg-[#2C1810]/45 group-hover:opacity-100 lg:flex"
        >
          <FaChevronLeft className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next hero image"
          className="absolute bottom-5 right-3 z-40 hidden rounded-full border border-[#C9A574]/60 bg-[#2C1810]/25 p-2 text-white opacity-0 backdrop-blur-sm transition hover:bg-[#2C1810]/45 group-hover:opacity-100 lg:flex"
        >
          <FaChevronRight className="h-5 w-5" />
        </button>

        {/* Main content */}
        <div className="relative z-20 mx-auto h-full max-w-7xl px-4 sm:px-5 lg:px-0">
          <div
            className={`flex h-full items-start ${isFamilySupportSlide || isJourneyPrayerSlide || isVolunteerImpactSlide
                ? "pt-[104px] sm:pt-[140px]"
                : activeSlide.showMissionExtras
                  ? "pt-[104px] sm:pt-[132px]"
                  : "pt-[104px] sm:pt-[140px]"
              }`}
          >
            <div
              className={`w-full max-w-[720px] md:w-[68%] ${isFamilySupportSlide || isJourneyPrayerSlide || isVolunteerImpactSlide
                  ? "lg:w-[58%] xl:w-[56%]"
                  : "lg:w-[56%] xl:w-[54%]"
                }`}
            >
              {/* Changeable Namo Gange logo — centered over the text below */}
              <div className="mb-2 flex w-fit flex-col items-center">
                <div className="w-[190px] sm:w-[220px] lg:w-[250px]">
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

                {/* eyebrow — starts from the left */}
                <div className="mt-2 flex w-fit items-center gap-3">
                  <span className="h-px w-8 bg-[#73532F]/70" />
                  <span className="text-[16px] font-bold tracking-[0.01em] text-[#2C1810] sm:text-[16px]">
                    Moksha Sewa — An Initiative of Namo Gange Trust
                  </span>
                  <span className="h-px w-8 bg-[#73532F]/70" />
                </div>
              </div>

              {isFamilySupportSlide ? (
                <h1
                  className="max-w-[650px] text-[#2C1810]"
                  style={{
                    fontWeight: 500,
                  }}
                >
                  <span className="block text-[36px] leading-[1.02] sm:text-[42px] lg:text-[46px]">
                    When a Family Cannot
                  </span>
                  <span className="mt-1 block text-[36px] leading-[1.02] sm:text-[42px] lg:text-[46px]">
                    Afford a{" "}
                    <span className="text-[#C85117]">Final Farewell,</span>
                  </span>
                  <span className="mt-2 block text-[22px] font-semibold leading-[1.12] sm:text-[25px] lg:text-[28px]">
                    Humanity Must Stand Beside Them.
                  </span>
                </h1>
              ) : isJourneyPrayerSlide ? (
                <h1
                  className="max-w-[650px] text-[#2C1810]"
                  style={{
                    fontWeight: 500,
                  }}
                >
                  <span className="block text-[36px] leading-[1.02] sm:text-[42px] lg:text-[46px]">
                    From the Final Journey
                  </span>
                  <span className="mt-1 block text-[36px] leading-[1.02] sm:text-[42px] lg:text-[46px]">
                    to the Final Prayer,
                  </span>
                  <span className="mt-2 block text-[36px] font-semibold leading-[1.02] text-[#C85117] sm:text-[42px] lg:text-[46px]">
                    We Stand Beside Them.
                  </span>
                </h1>
              ) : isVolunteerImpactSlide ? (
                <h1
                  className="max-w-[650px] text-[#2C1810]"
                  style={{
                    fontWeight: 500,
                  }}
                >
                  <span className="block text-[38px] leading-[1.02] sm:text-[44px] lg:text-[48px]">
                    Be the Reason
                  </span>
                  <span className="mt-1 block text-[38px] leading-[1.02] sm:text-[44px] lg:text-[48px]">
                    Someone Receives a
                  </span>
                  <span className="mt-2 block text-[38px] font-semibold leading-[1.02] text-[#C85117] sm:text-[44px] lg:text-[48px]">
                    Dignified Farewell.
                  </span>
                </h1>
              ) : (
                <h1
                  className="text-[36px] leading-[0.98] sm:text-[44px] md:text-[48px] lg:text-[54px] xl:text-[58px]"
                  style={{
                    fontWeight: 500,
                  }}
                >
                  {activeSlide.heading.map((line, index) => {
                    const isLastLine = index === activeSlide.heading.length - 1;
                    const highlightedHeading =
                      isLastLine &&
                      activeSlide.headingHighlight &&
                      line.includes(activeSlide.headingHighlight);

                    return (
                      <span
                        key={line}
                        className={`block ${isLastLine ? "mt-1" : ""
                          } text-[#2C1810] lg:whitespace-nowrap`}
                      >
                        {highlightedHeading ? (
                          <>
                            {line.replace(activeSlide.headingHighlight!, "")}
                            <span className="text-[#C85117]">
                              {activeSlide.headingHighlight}
                            </span>
                          </>
                        ) : (
                          <span className={isLastLine ? "text-[#C85117]" : ""}>
                            {line}
                          </span>
                        )}
                      </span>
                    );
                  })}
                </h1>
              )}

              {/* reference-style flourish */}
              <div className="mt-3 flex max-w-[500px] items-center gap-3">
                <span className="h-px flex-1 bg-[#C85117]/65" />
                <PiFlowerLotus className="h-6 w-6 shrink-0 text-[#C85117]" />
                <span className="h-px flex-1 bg-[#C85117]/65" />
              </div>

              {!isFamilySupportSlide && !isJourneyPrayerSlide && (
                <p className="mt-3 max-w-[545px] text-[16px] font-semibold leading-[1.5] text-[#2C1810] sm:text-[17px]">
                  {activeSlide.descriptionHighlight &&
                    activeSlide.description.includes(activeSlide.descriptionHighlight) ? (
                    <>
                      {activeSlide.description.replace(activeSlide.descriptionHighlight, "")}
                      <span className="font-bold text-[#C85117]">
                        {activeSlide.descriptionHighlight}
                      </span>
                    </>
                  ) : (
                    activeSlide.description
                  )}
                </p>
              )}

              {isFamilySupportSlide ? (
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="/request-help"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/cta flex h-[54px] w-full items-center gap-3 rounded-[9px] border border-[#F4C46A] bg-gradient-to-r from-[#B76B16] via-[#E5A93E] to-[#B76B16] px-4 text-white shadow-[0_0_18px_rgba(229,169,62,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(229,169,62,0.72)] sm:w-[265px]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center text-white">
                      <FaHandHoldingHeart className="h-8 w-8" />
                    </span>
                    <span className="text-left">
                      <span className="block text-[16px] font-bold leading-tight">
                        Request Support
                      </span>
                    </span>
                  </a>

                  <a
                    href="/donation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/cta flex h-[54px] w-full items-center gap-3 rounded-[9px] border border-[#F4C46A] bg-gradient-to-r from-[#B76B16] via-[#E5A93E] to-[#B76B16] px-4 text-white shadow-[0_0_18px_rgba(229,169,62,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(229,169,62,0.72)] sm:w-[265px]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center text-white">
                      <FaHandsHelping className="h-8 w-8" />
                    </span>
                    <span className="text-left">
                      <span className="block text-[16px] font-bold leading-tight text-white">
                        Support a Family
                      </span>
                    </span>
                  </a>
                </div>
              ) : isJourneyPrayerSlide ? (
                <div className="mt-4">
                  <div className="flex flex-wrap items-center gap-y-4">
                    <div className="flex min-w-[145px] items-center gap-3 border-r border-[#D8B58B] pr-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F7E4C6] text-[#D95A06]">
                        <FaAmbulance className="h-5 w-5" />
                      </span>
                      <span className="text-[16px] font-extrabold leading-[1.18] text-[#2C1810]">
                        Transport
                        <br />
                        <span className="font-medium normal-case text-[#6C5547]">with care</span>
                      </span>
                    </div>

                    <div className="flex min-w-[145px] items-center gap-3 border-r border-[#D8B58B] px-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F7E4C6] text-[#D95A06]">
                        <FaPrayingHands className="h-5 w-5" />
                      </span>
                      <span className="text-[16px] font-extrabold leading-[1.18] text-[#2C1810]">
                        Rituals
                        <br />
                        <span className="font-medium normal-case text-[#6C5547]">with dignity</span>
                      </span>
                    </div>

                    <div className="flex min-w-[175px] items-center gap-3 px-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F7E4C6] text-[#D95A06]">
                        <FaUsers className="h-5 w-5" />
                      </span>
                      <span className="text-[16px] font-extrabold leading-[1.18] text-[#2C1810]">
                        Supporting Families
                        <br />
                        <span className="font-medium normal-case text-[#6C5547]">every step</span>
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <a
                      href={activeSlide.primaryButton?.href ?? "/sevas"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/cta inline-flex h-[54px] w-fit items-center justify-center rounded-[9px] border border-[#F4C46A] bg-gradient-to-r from-[#B76B16] via-[#E5A93E] to-[#B76B16] px-5 text-[16px] font-bold text-white shadow-[0_0_18px_rgba(229,169,62,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(229,169,62,0.72)]"
                    >
                      <span className="whitespace-nowrap">{activeSlide.primaryButton?.label}</span>
                      {/* <span className="ml-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/75">
                      <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:translate-x-0.5" />
                    </span> */}
                    </a>
                    <a
                      href={activeSlide.secondaryButton?.href ?? "/donation"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/cta inline-flex h-[54px] w-fit items-center justify-center rounded-[9px] border border-[#F4C46A] bg-gradient-to-r from-[#B76B16] via-[#E5A93E] to-[#B76B16] px-5 text-[16px] font-bold text-white shadow-[0_0_18px_rgba(229,169,62,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(229,169,62,0.72)]"
                    >
                      <span className="whitespace-nowrap">{activeSlide.secondaryButton?.label}</span>
                      {/* <span className="ml-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D95A06] text-[#D95A06]">
                      <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:translate-x-0.5" />
                    </span> */}
                    </a>
                  </div>
                </div>
              ) : isVolunteerImpactSlide ? (
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={activeSlide.primaryButton?.href ?? "/volunteer/register"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/cta inline-flex h-[54px] w-fit items-center justify-center rounded-[9px] border border-[#F4C46A] bg-gradient-to-r from-[#B76B16] via-[#E5A93E] to-[#B76B16] px-5 text-[16px] font-bold text-white shadow-[0_0_18px_rgba(229,169,62,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(229,169,62,0.72)]"
                  >
                    <span className="flex items-center gap-3">
                      <FaUsers className="h-6 w-6 shrink-0" />
                      <span className="whitespace-nowrap">{activeSlide.primaryButton?.label}</span>
                    </span>
                    {/* <span className="ml-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/75">
                    <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:translate-x-0.5" />
                  </span> */}
                  </a>
                  <a
                    href={activeSlide.secondaryButton?.href ?? "/donation"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/cta inline-flex h-[54px] w-fit items-center justify-center rounded-[9px] border border-[#F4C46A] bg-gradient-to-r from-[#B76B16] via-[#E5A93E] to-[#B76B16] px-5 text-[16px] font-bold text-white shadow-[0_0_18px_rgba(229,169,62,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(229,169,62,0.72)]"
                  >
                    <span className="flex items-center gap-3">
                      <FaRegHeart className="h-6 w-6 shrink-0 text-white" />
                      <span className="whitespace-nowrap">{activeSlide.secondaryButton?.label}</span>
                    </span>
                    {/* <span className="ml-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D95A06] text-[#D95A06]">
                    <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:translate-x-0.5" />
                  </span> */}
                  </a>
                </div>
              ) : (
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={activeSlide.primaryButton?.href ?? "/sevas"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/cta inline-flex h-[54px] w-fit items-center justify-center rounded-[9px] border border-[#F4C46A] bg-gradient-to-r from-[#B76B16] via-[#E5A93E] to-[#B76B16] px-5 text-[16px] font-bold text-white shadow-[0_0_18px_rgba(229,169,62,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(229,169,62,0.72)]"
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <FaHandHoldingHeart className="h-6 w-6 shrink-0" />
                      <span className="whitespace-nowrap">{activeSlide.primaryButton?.label ?? "Request Sewa Help"}</span>
                    </span>
                    {/* <span className="ml-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/75">
                    <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:translate-x-0.5" />
                  </span> */}
                  </a>

                  <a
                    href={activeSlide.secondaryButton?.href ?? "/sevas"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/cta inline-flex h-[54px] w-fit items-center justify-center rounded-[9px] border border-[#F4C46A] bg-gradient-to-r from-[#B76B16] via-[#E5A93E] to-[#B76B16] px-5 text-[16px] font-bold text-white shadow-[0_0_18px_rgba(229,169,62,0.45)] backdrop-blur-[2px] transition hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(229,169,62,0.72)]"
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      {activeSlide.secondaryButton?.label === "Become a Volunteer" ? (
                        <FaUsers className="h-6 w-6 shrink-0 text-white" />
                      ) : (
                        <FaRegHeart className="h-6 w-6 shrink-0 text-white" />
                      )}
                      <span className="whitespace-nowrap">{activeSlide.secondaryButton?.label ?? "Support This Mission"}</span>
                    </span>
                    {/* <span className="ml-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D95A06] text-[#D95A06]">
                    <FaArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:translate-x-0.5" />
                  </span> */}
                  </a>
                </div>
              )}

              {activeSlide.showMissionExtras && (
                <div className="mt-1 hidden max-w-[690px] items-center gap-0 lg:flex">
                  <div className="flex min-w-[215px] items-center gap-2.5 border-r border-[#D8B58B] pr-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F7E4C6] text-[#D95A06]">
                      <FaHandHoldingHeart className="h-5 w-5" />
                    </span>
                    <span className="text-[16px] font-extrabold leading-[1.18] tracking-[0.01em] text-[#2C1810]">
                      Your Compassion
                      <br />
                      Brings Dignity
                    </span>
                  </div>

                  <div className="flex min-w-[215px] items-center gap-2.5 border-r border-[#D8B58B] px-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F7E4C6] text-[#D95A06]">
                      <FaUsers className="h-5 w-5" />
                    </span>
                    <span className="text-[16px] font-extrabold leading-[1.18] tracking-[0.01em] text-[#2C1810]">
                      Your Time
                      <br />
                      Creates Impact
                    </span>
                  </div>

                  <div className="flex min-w-[215px] items-center gap-2.5 pl-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F7E4C6] text-[#D95A06]">
                      <FaHandHoldingHeart className="h-5 w-5" />
                    </span>
                    <span className="text-[16px] font-extrabold leading-[1.18] tracking-[0.01em] text-[#2C1810]">
                      Your Support
                      <br />
                      Gives Respect
                    </span>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

        {activeSlide.showMissionExtras && !isFamilySupportSlide && !isJourneyPrayerSlide && !isVolunteerImpactSlide && (
          <div className="absolute bottom-5 right-5 z-30 hidden w-[640px] border border-[#E2AE73] bg-[#FFF8EE]/95 px-5 py-4 shadow-[0_10px_30px_rgba(95,61,30,0.12)] backdrop-blur-sm xl:block">
            <div className="grid grid-cols-3 divide-x divide-[#D8B58B]">
              <div className="flex items-center gap-3 px-3">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#E2AE73] text-[#D95A06]">
                  <FaPrayingHands className="h-7 w-7" />
                </span>
                <span className="text-[16px] font-extrabold leading-[1.25] text-[#2C1810]">
                  Volunteer
                  <br />
                  For Sewa
                </span>
              </div>

              <div className="flex items-center gap-3 px-4">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#E2AE73] text-[#D95A06]">
                  <FaHandHoldingHeart className="h-7 w-7" />
                </span>
                <span className="text-[16px] font-extrabold leading-[1.25] text-[#2C1810]">
                  Donate
                  <br />
                  With Heart
                </span>
              </div>

              <div className="flex items-center gap-3 px-4">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#E2AE73] text-[#D95A06]">
                  <FaUsers className="h-7 w-7" />
                </span>
                <span className="text-[16px] font-extrabold leading-[1.25] text-[#2C1810]">
                  Share
                  <br />
                  The Mission
                </span>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-2 border-t border-[#E7CDAE] pt-3">
              <PiFlowerLotus className="h-5 w-5 shrink-0 text-[#D95A06]" />
              <p className="text-[16px] font-medium text-[#5B4635]">
                Together, we ensure{" "}
                <span className="font-bold text-[#D95A06]">
                  no one is left without dignity
                </span>{" "}
                in their final journey.
              </p>
            </div>
          </div>
        )}
      </section>

      {/* Mission Stats Band Below Hero */}
      <div className="w-full border-b border-[#73532F] bg-gradient-to-r from-[#8B6A3E] via-[#9C794C] to-[#8B6A3E] py-1 shadow-md">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 md:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`group/stat flex items-center justify-center gap-3 px-4 py-1.5 ${index > 0 ? "md:border-l md:border-white/20" : ""
                  } ${index > 1 ? "border-t border-white/20 md:border-t-0" : ""}`}
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition-transform duration-300 group-hover/stat:scale-110 shadow-[inset_0_1px_2px_rgba(255,255,255,0.2)]">
                  <Icon className="h-4 w-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]" />
                </div>
                <div className="min-w-0 text-left">
                  <div
                    className="text-[17px] font-medium leading-none text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)] lg:text-[19px]"
                  >
                    <AnimatedNumber endString={stat.value} />
                  </div>
                  <div className="mt-1 max-w-[120px] text-[16px] font-medium leading-tight tracking-[0.02em] text-white/90 lg:max-w-none lg:text-[16px]">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
