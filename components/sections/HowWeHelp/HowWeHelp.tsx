// "use client";

// import Image from "next/image";
// import type { ReactElement } from "react";

// interface CustomIconProps {
//   name: string;
//   className?: string;
// }

// const CustomIcon = ({
//   name,
//   className = "h-6 w-6",
// }: CustomIconProps) => {
//   const icons: Record<string, ReactElement> = {
//     FaWoodStack: (
//       <svg
//         className={className}
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.65"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <circle cx="7" cy="8" r="2.4" />
//         <circle cx="12" cy="6" r="2.4" />
//         <circle cx="17" cy="8" r="2.4" />
//         <circle cx="8.5" cy="13" r="2.4" />
//         <circle cx="15.5" cy="13" r="2.4" />
//         <circle cx="12" cy="17.5" r="2.4" />
//         <path d="M4.5 20h15" />
//       </svg>
//     ),

//     FaPriestOutline: (
//       <svg
//         className={className}
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.65"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <circle cx="12" cy="7" r="3.1" />
//         <path d="M5.2 21c.55-4.35 2.85-6.7 6.8-6.7s6.25 2.35 6.8 6.7" />
//         <path d="M9.2 4.9c.8-.8 1.75-1.2 2.8-1.2s2 .4 2.8 1.2" />
//         <path d="M9.4 14.8 12 18.6l2.6-3.8" />
//         <path d="M8 21v-2.2M16 21v-2.2" />
//       </svg>
//     ),

//     FaHearseVan: (
//       <svg
//         className={className}
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.65"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M3 7h11.5v9H3z" />
//         <path d="M14.5 10h3.2l3.3 3.3V16h-6.5z" />
//         <circle cx="7" cy="18" r="2" />
//         <circle cx="18" cy="18" r="2" />
//         <path d="M6.2 10.5h4.4M8.4 8.3v4.4" />
//       </svg>
//     ),

//     FaVolunteersOutline: (
//       <svg
//         className={className}
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.65"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <circle cx="12" cy="7" r="2.8" />
//         <circle cx="5.8" cy="9" r="2.2" />
//         <circle cx="18.2" cy="9" r="2.2" />
//         <path d="M7.2 20c.35-4 1.95-6.1 4.8-6.1s4.45 2.1 4.8 6.1" />
//         <path d="M1.9 20c.3-3.3 1.6-5 3.9-5 1.35 0 2.35.55 3 1.55" />
//         <path d="M22.1 20c-.3-3.3-1.6-5-3.9-5-1.35 0-2.35.55-3 1.55" />
//       </svg>
//     ),

//     FaArrowRight: (
//       <svg
//         className={className}
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.8"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M5 12h13" />
//         <path d="m14 8 4 4-4 4" />
//       </svg>
//     ),

//     FaClockOutline: (
//       <svg
//         className={className}
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.7"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <circle cx="12" cy="12" r="8.5" />
//         <path d="M12 7.2v5l3.2 2" />
//       </svg>
//     ),

//     FaFamiliesOutline: (
//       <svg
//         className={className}
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.7"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <circle cx="9" cy="8" r="2.5" />
//         <circle cx="16.5" cy="8.5" r="2.1" />
//         <path d="M3.5 20c.4-4 2.2-6.2 5.5-6.2s5.1 2.2 5.5 6.2" />
//         <path d="M14 14.4c.7-.4 1.5-.6 2.5-.6 2.6 0 4 2 4.4 6.2" />
//       </svg>
//     ),

//     FaShieldOutline: (
//       <svg
//         className={className}
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.7"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M12 3 19 6v5c0 4.8-2.8 8-7 10-4.2-2-7-5.2-7-10V6l7-3Z" />
//         <path d="m9.1 12 1.9 1.9 4-4.2" />
//       </svg>
//     ),

//     FaMapPinOutline: (
//       <svg
//         className={className}
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.7"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
//         <circle cx="12" cy="10" r="2.4" />
//       </svg>
//     ),
//   };

//   return icons[name] ?? <span className={className}>•</span>;
// };

// interface CardItem {
//   icon: string;
//   title: string;
//   desc: string;
//   features: string[];
//   image?: string;
//   href?: string;
// }

// interface StatItem {
//   icon: string;
//   value: string;
//   label: string;
// }

// const decorativePattern = {
//   backgroundImage:
//     "radial-gradient(circle at 18% 18%, rgba(164,112,48,0.08) 0 1px, transparent 1.2px), radial-gradient(circle at 82% 38%, rgba(164,112,48,0.06) 0 1px, transparent 1.2px)",
//   backgroundSize: "20px 20px, 26px 26px",
// };

// export default function HowWeCanHelp() {
//   const cards: CardItem[] = [
//     {
//       icon: "FaHearseVan",
//       title: "Final Journey & Transport",
//       desc:
//         "Ambulance, hearse van and respectful body transport coordinated from hospital, home or public place.",
//       features: [
//         "Ambulance Support",
//         "Hearse Van",
//         "Body Transport",
//       ],
//       image: "/assets/how-we-help/five.png",
//       href: "/ambulanceservices",
//     },

//     {
//       icon: "FaWoodStack",
//       title: "Cremation & Last Rites",
//       desc:
//         "Cremation-ground coordination with essential arrangements for a dignified and respectful final farewell.",
//       features: [
//         "Cremation Coordination",
//         "Final Rites",
//         "Essential Arrangements",
//       ],
//       image: "/assets/how-we-help/four.png",
//       href: "/furalservices",
//     },

//     {
//       icon: "FaPriestOutline",
//       title: "Ritual & Priest Support",
//       desc:
//         "Priest guidance with wood, cloth, flowers and ritual essentials arranged according to local customs.",
//       features: [
//         "Priest Guidance",
//         "Wood, Cloth & Flowers",
//         "Ritual Essentials",
//       ],
//       image: "/assets/how-we-help/pandit.png",
//       href: "/panditservices",
//     },

//     {
//       icon: "FaVolunteersOutline",
//       title: "Family & On-Ground Support",
//       desc:
//         "Documentation guidance, volunteers and family coordination throughout the case with compassionate on-ground support.",
//       features: [
//         "Documentation Guidance",
//         "Volunteer Support",
//         "Family Coordination",
//       ],
//       image: "/assets/how-we-help/three.png",
//       href: "/prayerhallservices",
//     },
//   ];

//   const stats: StatItem[] = [
//     {
//       icon: "FaClockOutline",
//       value: "24/7",
//       label: "Immediate Assistance",
//     },
//     {
//       icon: "FaFamiliesOutline",
//       value: "Verified",
//       label: "Case Support",
//     },
//     {
//       icon: "FaShieldOutline",
//       value: "100%",
//       label: "Respectful Care",
//     },
//     {
//       icon: "FaMapPinOutline",
//       value: "Delhi NCR",
//       label: "Launch Region",
//     },
//   ];

//   return (
//     <section className="relative w-full overflow-hidden bg-[#FCF8F0] px-4 py-7 sm:px-5 lg:px-6 lg:py-8">
//       {/* BACKGROUND */}

//       <div
//         className="pointer-events-none absolute inset-0 opacity-50"
//         style={decorativePattern}
//       />

//       <div className="pointer-events-none absolute -left-20 top-8 h-72 w-72 rounded-full border border-[#C59658]/10" />

//       <div className="pointer-events-none absolute -right-24 top-2 h-96 w-96 rounded-full border border-[#C59658]/10" />

//       <div className="pointer-events-none absolute bottom-0 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full border border-[#C59658]/10" />

//       <div className="relative z-10 mx-auto w-full max-w-[1344px]">
//         {/* HEADER */}

//         <header className="mx-auto mb-5 max-w-4xl text-center">
//           <div className="mb-0 inline-flex items-center gap-4">
//             <span className="h-px w-20 bg-gradient-to-r from-transparent via-[#A66F2C] to-[#A66F2C]" />

//             <span className="rotate-45 text-[16px] leading-none text-[#A66F2C]">
//               ◇
//             </span>

//             <span className="text-[16px] font-semibold uppercase tracking-[0.32em] text-[#9A6426]">
//               Moksha Sewa Support
//             </span>

//             <span className="rotate-45 text-[16px] leading-none text-[#A66F2C]">
//               ◇
//             </span>

//             <span className="h-px w-20 bg-gradient-to-l from-transparent via-[#A66F2C] to-[#A66F2C]" />
//           </div>

//           <h2 className="font-serif text-[24px] font-normal leading-tight text-[#2C180F] sm:text-[28px] lg:text-[30px]">
//             Four Ways We Stand Beside You
//           </h2>

//           <p className="mt-1 font-serif text-[16px] leading-snug text-[#855426] sm:text-[18px]">
//             From the first call to the final prayer — support that stays with
//             the family
//           </p>

//           <div className="mt-0.5 flex items-center justify-center gap-2 text-[#A66F2C]">
//             <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#A66F2C]" />

//             <span className="text-[16px]">◇</span>

//             <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#A66F2C]" />
//           </div>
//         </header>

//         {/* CARDS */}

//         <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 lg:grid-cols-4">
//           {cards.map((card) => (
//             <article
//               key={card.title}
//               className="
//                 group
//                 relative
//                 flex
//                 h-[440px]
//                 flex-col
//                 overflow-hidden
//                 rounded-[26px]
//                 bg-[#F4EBDD]
//                 shadow-[0_12px_28px_rgba(78,47,20,0.10)]
//                 ring-1
//                 ring-[#DDBD8C]/70
//                 transition-all
//                 duration-300
//                 hover:-translate-y-1
//                 hover:shadow-[0_18px_34px_rgba(78,47,20,0.14)]
//               "
//             >
//               {/* IMAGE - NO GLOW */}

//               <div className="relative h-[165px] shrink-0 overflow-hidden">
//                 <Image
//                   src={card.image!}
//                   alt={card.title}
//                   fill
//                   quality={95}
//                   sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
//                   className="object-cover transition-transform duration-700 group-hover:scale-[1.055]"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-[#2C180F]/45 via-[#2C180F]/5 to-transparent" />
//               </div>

//               {/* FLOATING ICON */}

//               <div
//                 className="
//                   absolute
//                   left-5
//                   top-[139px]
//                   z-20
//                   flex
//                   h-[52px]
//                   w-[52px]
//                   items-center
//                   justify-center
//                   rounded-[16px]
//                   border
//                   border-[#E3C79D]
//                   bg-[#FFF9EF]
//                   text-[#A66B22]
//                   shadow-[0_8px_18px_rgba(82,48,18,0.15)]
//                   transition-transform
//                   duration-300
//                   group-hover:-rotate-3
//                   group-hover:scale-105
//                 "
//               >
//                 <CustomIcon
//                   name={card.icon}
//                   className="h-7 w-7"
//                 />
//               </div>

//               {/* CONTENT PANEL - ONLY THIS PART GLOWS */}

//               <div
//                 className="
//                   relative
//                   z-[5]
//                   flex
//                   flex-1
//                   flex-col
//                   overflow-hidden
//                   rounded-t-[26px]
//                   bg-[#FFFDF9]
//                   px-5
//                   pb-[14px]
//                   pt-[30px]

//                   ring-1
//                   ring-inset
//                   ring-[#E8BF7B]/25

//                   shadow-[0_-12px_32px_rgba(213,151,55,0.18),0_8px_22px_rgba(164,101,25,0.10),inset_0_1px_0_rgba(255,255,255,1)]

//                   transition-all
//                   duration-300

//                   group-hover:ring-[#DCA54B]/45

//                   group-hover:shadow-[0_-15px_38px_rgba(214,151,53,0.27),0_10px_28px_rgba(164,101,25,0.15),inset_0_1px_0_rgba(255,255,255,1)]
//                 "
//               >
//                 {/* LEFT CONTENT GLOW */}

//                 <div
//                   className="
//                     pointer-events-none
//                     absolute
//                     -left-10
//                     -top-9

//                     h-32
//                     w-32

//                     rounded-full

//                     bg-[#F3C86D]/18

//                     blur-[34px]

//                     transition-all
//                     duration-300

//                     group-hover:bg-[#F3C86D]/28
//                   "
//                 />

//                 {/* RIGHT CONTENT GLOW */}

//                 <div
//                   className="
//                     pointer-events-none
//                     absolute
//                     -right-10
//                     top-7

//                     h-32
//                     w-32

//                     rounded-full

//                     bg-[#E9AE49]/12

//                     blur-[36px]

//                     transition-all
//                     duration-300

//                     group-hover:bg-[#E9AE49]/22
//                   "
//                 />

//                 {/* GOLD TOP LIGHT ON CONTENT */}

//                 <div
//                   className="
//                     pointer-events-none
//                     absolute
//                     left-1/2
//                     top-0

//                     h-[2px]
//                     w-[55%]

//                     -translate-x-1/2

//                     bg-gradient-to-r

//                     from-transparent
//                     via-[#E0A946]/65
//                     to-transparent

//                     opacity-80

//                     transition-all
//                     duration-300

//                     group-hover:w-[70%]
//                     group-hover:via-[#DA982D]/90
//                   "
//                 />

//                 {/* ACTUAL CONTENT ABOVE GLOW */}

//                 <div className="relative z-10 flex flex-1 flex-col">
//                   {/* DESCRIPTION */}

//                   <div
//                     className="
//                       flex
//                       h-[82px]
//                       shrink-0
//                       items-start
//                       rounded-[15px]
//                       border
//                       border-[#EBCB91]
//                       bg-white/75
//                       px-3
//                       py-2.5
//                       shadow-[0_4px_12px_rgba(105,68,30,0.04)]
//                       backdrop-blur-[2px]
//                     "
//                   >
//                     <p className="text-[13.5px] leading-[1.42] text-[#4A3528]">
//                       {card.desc}
//                     </p>
//                   </div>

//                   {/* DIVIDER */}

//                   <div className="mb-[6px] mt-[6px] flex h-[7px] shrink-0 items-center gap-2">
//                     <span className="h-px flex-1 bg-gradient-to-r from-[#C48A3A]/70 to-transparent" />

//                     <span className="h-1.5 w-1.5 rotate-45 bg-[#C48A3A] shadow-[0_0_8px_rgba(196,138,58,0.35)]" />
//                   </div>

//                   {/* FEATURES */}

//                   <div className="h-[79px] shrink-0">
//                     <div className="grid grid-rows-3 gap-[4px]">
//                       {card.features.map((feature) => (
//                         <div
//                           key={feature}
//                           className="
//                             flex
//                             h-[25px]
//                             w-full
//                             items-center
//                             gap-1.5
//                             rounded-[8px]
//                             border
//                             border-[#E6CFAD]
//                             bg-[#FFF8EC]/90
//                             px-2.5
//                             text-[11.5px]
//                             font-semibold
//                             leading-none
//                             text-[#5B3B22]
//                             shadow-[0_2px_6px_rgba(89,57,25,0.035)]
//                           "
//                         >
//                           <span
//                             className="
//                               flex
//                               h-4
//                               w-4
//                               shrink-0
//                               items-center
//                               justify-center
//                               rounded-full
//                               bg-gradient-to-br
//                               from-[#D89524]
//                               to-[#B66B15]
//                               text-[9px]
//                               font-bold
//                               text-white
//                               shadow-[0_2px_5px_rgba(183,107,21,0.24)]
//                             "
//                           >
//                             ✓
//                           </span>

//                           <span className="truncate">
//                             {feature}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* BUTTON */}

//                   <a
//                     href={card.href || "/request-help"}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="
//                       group/button
//                       mt-[10px]
//                       inline-flex
//                       h-[40px]
//                       w-full
//                       shrink-0
//                       items-center
//                       justify-between
//                       rounded-[11px]
//                       border
//                       border-[#DFA849]
//                       bg-gradient-to-r
//                       from-[#A95F13]
//                       via-[#D89425]
//                       to-[#B96F18]
//                       px-4
//                       font-serif
//                       text-[13.5px]
//                       font-bold
//                       text-white
//                       shadow-[0_8px_18px_rgba(181,111,24,0.22)]
//                       transition-all
//                       duration-300
//                       hover:shadow-[0_12px_24px_rgba(181,111,24,0.38)]
//                     "
//                   >
//                     <span>Explore This Sewa</span>

//                     <span
//                       className="
//                         flex
//                         h-7
//                         w-7
//                         items-center
//                         justify-center
//                         rounded-full
//                         bg-white/15
//                         transition-all
//                         duration-300
//                         group-hover/button:translate-x-[2px]
//                         group-hover/button:bg-white/25
//                       "
//                     >
//                       <CustomIcon
//                         name="FaArrowRight"
//                         className="h-3.5 w-3.5"
//                       />
//                     </span>
//                   </a>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* STATS */}

//         <div className="mt-5 overflow-hidden rounded-[2px] border border-[#D9B983] bg-[#FFFDF9]/90 shadow-[0_12px_28px_rgba(86,52,22,0.10)] backdrop-blur-sm">
//           <div className="grid grid-cols-1 divide-y divide-[#DEC49C] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
//             {stats.map((stat) => (
//               <div
//                 key={stat.label}
//                 className="flex min-h-[52px] items-center justify-center gap-2 px-4 py-2"
//               >
//                 <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D5B47D] bg-[#FFF9EE] text-[#9A6426] shadow-[0_4px_10px_rgba(91,54,20,0.08)]">
//                   <CustomIcon
//                     name={stat.icon}
//                     className="h-[18px] w-[18px]"
//                   />
//                 </div>

//                 <div className="min-w-0 text-left">
//                   <div className="font-serif text-[16px] leading-none text-[#2F1D14]">
//                     {stat.value}
//                   </div>

//                   <div className="mt-0.5 text-[16px] leading-tight text-[#432D20]">
//                     {stat.label}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* BOTTOM DECORATION */}

//         <div className="mx-auto mt-4 flex w-fit items-center gap-3 text-[#B07B36] opacity-80">
//           <span className="h-px w-24 bg-gradient-to-r from-transparent to-[#B07B36]" />

//           <svg
//             viewBox="0 0 64 32"
//             className="h-7 w-14"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="1.2"
//           >
//             <path d="M32 28c-12-4-20-11-20-20 9 1 16 5 20 13 4-8 11-12 20-13 0 9-8 16-20 20Z" />

//             <path d="M32 21c-7-6-10-12-6-19 4 2 6 6 6 11 0-5 2-9 6-11 4 7 1 13-6 19Z" />

//             <path d="M14 29h36" />
//           </svg>

//           <span className="h-px w-24 bg-gradient-to-l from-transparent to-[#B07B36]" />
//         </div>
//       </div>
//     </section>
//   );
// }"use client";

import Image from "next/image";
import type { ReactElement } from "react";

interface CustomIconProps {
  name: string;
  className?: string;
}

const CustomIcon = ({ name, className = "h-6 w-6" }: CustomIconProps) => {
  const icons: Record<string, ReactElement> = {
    FaWoodStack: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="7" cy="8" r="2.4" />
        <circle cx="12" cy="6" r="2.4" />
        <circle cx="17" cy="8" r="2.4" />
        <circle cx="8.5" cy="13" r="2.4" />
        <circle cx="15.5" cy="13" r="2.4" />
        <circle cx="12" cy="17.5" r="2.4" />
        <path d="M4.5 20h15" />
      </svg>
    ),

    FaPriestOutline: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="7" r="3.1" />
        <path d="M5.2 21c.55-4.35 2.85-6.7 6.8-6.7s6.25 2.35 6.8 6.7" />
        <path d="M9.2 4.9c.8-.8 1.75-1.2 2.8-1.2s2 .4 2.8 1.2" />
        <path d="M9.4 14.8 12 18.6l2.6-3.8" />
        <path d="M8 21v-2.2M16 21v-2.2" />
      </svg>
    ),

    FaHearseVan: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 7h11.5v9H3z" />
        <path d="M14.5 10h3.2l3.3 3.3V16h-6.5z" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
        <path d="M6.2 10.5h4.4M8.4 8.3v4.4" />
      </svg>
    ),

    FaVolunteersOutline: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="7" r="2.8" />
        <circle cx="5.8" cy="9" r="2.2" />
        <circle cx="18.2" cy="9" r="2.2" />

        <path d="M7.2 20c.35-4 1.95-6.1 4.8-6.1s4.45 2.1 4.8 6.1" />

        <path d="M1.9 20c.3-3.3 1.6-5 3.9-5 1.35 0 2.35.55 3 1.55" />

        <path d="M22.1 20c-.3-3.3-1.6-5-3.9-5-1.35 0-2.35.55-3 1.55" />
      </svg>
    ),

    FaArrowRight: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h13" />
        <path d="m14 8 4 4-4 4" />
      </svg>
    ),

    FaClockOutline: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.2v5l3.2 2" />
      </svg>
    ),

    FaFamiliesOutline: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="9" cy="8" r="2.5" />
        <circle cx="16.5" cy="8.5" r="2.1" />

        <path d="M3.5 20c.4-4 2.2-6.2 5.5-6.2s5.1 2.2 5.5 6.2" />

        <path d="M14 14.4c.7-.4 1.5-.6 2.5-.6 2.6 0 4 2 4.4 6.2" />
      </svg>
    ),

    FaShieldOutline: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3 19 6v5c0 4.8-2.8 8-7 10-4.2-2-7-5.2-7-10V6l7-3Z" />
        <path d="m9.1 12 1.9 1.9 4-4.2" />
      </svg>
    ),

    FaMapPinOutline: (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.4" />
      </svg>
    ),
  };

  return icons[name] ?? <span className={className}>•</span>;
};

interface CardItem {
  icon: string;
  title: string;
  desc: string;
  features: string[];
  image?: string;
  href?: string;
}

interface StatItem {
  icon: string;
  value: string;
  label: string;
}

const decorativePattern = {
  backgroundImage:
    "radial-gradient(circle at 18% 18%, rgba(164,112,48,0.08) 0 1px, transparent 1.2px), radial-gradient(circle at 82% 38%, rgba(164,112,48,0.06) 0 1px, transparent 1.2px)",
  backgroundSize: "20px 20px, 26px 26px",
};

export default function HowWeCanHelp() {
  const cards: CardItem[] = [
    {
      icon: "FaHearseVan",
      title: "Final Journey & Transport",
      desc: "Ambulance, hearse van and respectful body transport coordinated from hospital, home or public place.",
      features: ["Ambulance Support", "Hearse Van", "Body Transport"],
      image: "/assets/how-we-help/five.png",
      href: "/ambulanceservices",
    },

    {
      icon: "FaWoodStack",
      title: "Cremation & Last Rites",
      desc: "Cremation-ground coordination with essential arrangements for a dignified and respectful final farewell.",
      features: [
        "Cremation Coordination",
        "Final Rites",
        "Essential Arrangements",
      ],
      image: "/assets/how-we-help/four.png",
      href: "/furalservices",
    },

    {
      icon: "FaPriestOutline",
      title: "Ritual & Priest Support",
      desc: "Priest guidance with wood, cloth, flowers and ritual essentials arranged according to local customs.",
      features: [
        "Priest Guidance",
        "Wood, Cloth & Flowers",
        "Ritual Essentials",
      ],
      image: "/assets/how-we-help/pandit.png",
      href: "/panditservices",
    },

    {
      icon: "FaVolunteersOutline",
      title: "Family & On-Ground Support",
      desc: "Documentation guidance, volunteers and family coordination throughout the case with compassionate on-ground support.",
      features: [
        "Documentation Guidance",
        "Volunteer Support",
        "Family Coordination",
      ],
      image: "/assets/how-we-help/three.png",
      href: "/prayerhallservices",
    },
  ];

  const stats: StatItem[] = [
    {
      icon: "FaClockOutline",
      value: "24/7",
      label: "Immediate Assistance",
    },
    {
      icon: "FaFamiliesOutline",
      value: "Verified",
      label: "Case Support",
    },
    {
      icon: "FaShieldOutline",
      value: "100%",
      label: "Respectful Care",
    },
    {
      icon: "FaMapPinOutline",
      value: "Delhi NCR",
      label: "Launch Region",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#FCF8F0] px-4 py-7 sm:px-5 lg:px-6 lg:py-8">
      {/* BACKGROUND */}

      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={decorativePattern}
      />

      <div className="pointer-events-none absolute -left-20 top-8 h-72 w-72 rounded-full border border-[#C59658]/10" />

      <div className="pointer-events-none absolute -right-24 top-2 h-96 w-96 rounded-full border border-[#C59658]/10" />

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full border border-[#C59658]/10" />

      <div className="relative z-10 mx-auto w-full max-w-[1344px]">
        {/* HEADER */}

        <header className="mx-auto mb-5 max-w-4xl text-center">
          <div className="mb-0 inline-flex items-center gap-4">
            <span className="h-px w-20 bg-gradient-to-r from-transparent via-[#A66F2C] to-[#A66F2C]" />

            <span className="rotate-45 text-[16px] leading-none text-[#A66F2C]">
              ◇
            </span>

            <span className="text-[16px] font-semibold uppercase tracking-[0.32em] text-[#9A6426]">
              Moksha Sewa Support
            </span>

            <span className="rotate-45 text-[16px] leading-none text-[#A66F2C]">
              ◇
            </span>

            <span className="h-px w-20 bg-gradient-to-l from-transparent via-[#A66F2C] to-[#A66F2C]" />
          </div>

          <h2 className="font-serif text-[24px] font-normal leading-tight text-[#2C180F] sm:text-[28px] lg:text-[30px]">
            Four Ways We Stand Beside You
          </h2>

          <p className="mt-1 font-serif text-[16px] leading-snug text-[#855426] sm:text-[18px]">
            From the first call to the final prayer — support that stays with
            the family
          </p>

          <div className="mt-0.5 flex items-center justify-center gap-2 text-[#A66F2C]">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#A66F2C]" />

            <span className="text-[16px]">◇</span>

            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#A66F2C]" />
          </div>
        </header>

        {/* SERVICE CARDS */}

        <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <article
              key={card.title}
              className="
                group
                relative
                flex
                h-[440px]
                flex-col
                overflow-hidden
                rounded-[26px]
                bg-[#F4EBDD]
                shadow-[0_12px_28px_rgba(78,47,20,0.10)]
                ring-1
                ring-[#DDBD8C]/70
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_18px_34px_rgba(78,47,20,0.14)]
              "
            >
              {/* IMAGE */}

              <div className="relative h-[165px] shrink-0 overflow-hidden">
                <Image
                  src={card.image!}
                  alt={card.title}
                  fill
                  quality={95}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-[1.055]
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#2C180F]/45
                    via-[#2C180F]/5
                    to-transparent
                  "
                />
              </div>

              {/* ICON */}

              <div
                className="
                  absolute
                  left-5
                  top-[139px]
                  z-20

                  flex
                  h-[52px]
                  w-[52px]

                  items-center
                  justify-center

                  rounded-[16px]

                  border
                  border-[#E3C79D]

                  bg-[#FFF9EF]

                  text-[#A66B22]

                  shadow-[0_8px_18px_rgba(82,48,18,0.15)]

                  transition-transform
                  duration-300

                  group-hover:-rotate-3
                  group-hover:scale-105
                "
              >
                <CustomIcon name={card.icon} className="h-7 w-7" />
              </div>

              {/* DARKER GLOWING CONTENT PANEL */}

              <div
                className="
                  relative
                  z-[5]

                  flex
                  flex-1
                  flex-col

                  overflow-hidden

                  rounded-t-[26px]

                  bg-[#FFFDF9]

                  px-5
                  pb-[14px]
                  pt-[30px]

                  ring-1
                  ring-inset
                  ring-[#C98A2F]/40

                  shadow-[0_-14px_34px_rgba(157,92,20,0.28),0_10px_26px_rgba(116,65,17,0.16),inset_0_1px_0_rgba(255,255,255,1)]

                  transition-all
                  duration-300

                  group-hover:ring-[#B56C1F]/55

                  group-hover:shadow-[0_-16px_40px_rgba(151,83,16,0.36),0_12px_30px_rgba(105,58,15,0.22),inset_0_1px_0_rgba(255,255,255,1)]
                "
              >
                {/* DARK LEFT GLOW */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -left-10
                    -top-9

                    h-32
                    w-32

                    rounded-full

                    bg-[#C9862D]/24

                    blur-[34px]

                    transition-all
                    duration-300

                    group-hover:bg-[#B66F20]/34
                  "
                />

                {/* DARK RIGHT GLOW */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-10
                    top-7

                    h-32
                    w-32

                    rounded-full

                    bg-[#A9651F]/18

                    blur-[36px]

                    transition-all
                    duration-300

                    group-hover:bg-[#955617]/28
                  "
                />

                {/* DARK GOLD TOP LIGHT */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-0

                    h-[2px]
                    w-[58%]

                    -translate-x-1/2

                    bg-gradient-to-r
                    from-transparent
                    via-[#B66E1D]/75
                    to-transparent

                    transition-all
                    duration-300

                    group-hover:w-[72%]
                    group-hover:via-[#9D5814]/90
                  "
                />

                {/* CONTENT */}

                <div className="relative z-10 flex flex-1 flex-col">
                  {/* DESCRIPTION */}

                  <div
                    className="
                      flex
                      h-[82px]
                      shrink-0

                      items-start

                      rounded-[15px]

                      border
                      border-[#D8A75D]

                      bg-[#FFFDF9]/90

                      px-3
                      py-2.5

                      shadow-[0_4px_14px_rgba(122,69,19,0.08)]

                      backdrop-blur-[2px]
                    "
                  >
                    <p
                      className="
                        text-[13.5px]
                        leading-[1.42]
                        text-[#4A3528]
                      "
                    >
                      {card.desc}
                    </p>
                  </div>

                  {/* DIVIDER */}

                  <div
                    className="
                      mb-[6px]
                      mt-[6px]

                      flex
                      h-[7px]
                      shrink-0

                      items-center

                      gap-2
                    "
                  >
                    <span
                      className="
                        h-px
                        flex-1

                        bg-gradient-to-r

                        from-[#B66E1D]/80

                        to-transparent
                      "
                    />

                    <span
                      className="
                        h-1.5
                        w-1.5

                        rotate-45

                        bg-[#B56C1F]

                        shadow-[0_0_10px_rgba(171,99,25,0.55)]
                      "
                    />
                  </div>

                  {/* FEATURES */}

                  <div className="h-[79px] shrink-0">
                    <div className="grid grid-rows-3 gap-[4px]">
                      {card.features.map((feature) => (
                        <div
                          key={feature}
                          className="
                            flex
                            h-[25px]
                            w-full

                            items-center

                            gap-1.5

                            rounded-[8px]

                            border
                            border-[#DFC08F]

                            bg-[#FFF6E8]/95

                            px-2.5

                            text-[11.5px]

                            font-semibold

                            leading-none

                            text-[#5B3B22]

                            shadow-[0_2px_7px_rgba(110,63,20,0.07)]
                          "
                        >
                          <span
                            className="
                              flex
                              h-4
                              w-4

                              shrink-0

                              items-center
                              justify-center

                              rounded-full

                              bg-gradient-to-br

                              from-[#C9801F]

                              to-[#9B5312]

                              text-[9px]

                              font-bold

                              text-white

                              shadow-[0_2px_6px_rgba(132,70,13,0.30)]
                            "
                          >
                            ✓
                          </span>

                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* BUTTON */}

                  <a
                    href={card.href || "/request-help"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group/button

                      mt-[10px]

                      inline-flex

                      h-[40px]
                      w-full

                      shrink-0

                      items-center
                      justify-between

                      rounded-[11px]

                      border
                      border-[#D39434]

                      bg-gradient-to-r

                      from-[#8D4B0E]

                      via-[#C47A1B]

                      to-[#9D5511]

                      px-4

                      font-serif

                      text-[13.5px]

                      font-bold

                      text-white

                      shadow-[0_8px_18px_rgba(133,70,13,0.28)]

                      transition-all
                      duration-300

                      hover:shadow-[0_12px_26px_rgba(128,64,10,0.42)]
                    "
                  >
                    <span>Explore This Sewa</span>

                    <span
                      className="
                        flex
                        h-7
                        w-7

                        items-center
                        justify-center

                        rounded-full

                        bg-white/15

                        transition-all
                        duration-300

                        group-hover/button:translate-x-[2px]

                        group-hover/button:bg-white/25
                      "
                    >
                      <CustomIcon name="FaArrowRight" className="h-3.5 w-3.5" />
                    </span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* STATS */}

      {/* PREMIUM STATS STRIP */}
<div
  className="
    relative
    mt-5
    overflow-hidden

    rounded-[16px]

    border
    border-[#D2A868]/70

    bg-[linear-gradient(135deg,#FFFDF9_0%,#FFF8EB_48%,#F7E5C7_100%)]

    shadow-[0_12px_30px_rgba(105,63,20,0.12),inset_0_1px_0_rgba(255,255,255,0.95)]

    ring-1
    ring-white/70

    transition-all
    duration-300

    hover:border-[#C48A37]/80

    hover:shadow-[0_16px_36px_rgba(111,63,17,0.17),inset_0_1px_0_rgba(255,255,255,1)]
  "
>
  {/* LEFT BACKGROUND GLOW */}
  <div
    className="
      pointer-events-none
      absolute
      -left-16
      -top-14

      h-40
      w-40

      rounded-full

      bg-[#C9862D]/18

      blur-[42px]
    "
  />

  {/* CENTER GLOW */}
  <div
    className="
      pointer-events-none
      absolute
      left-1/2
      top-1/2

      h-36
      w-72

      -translate-x-1/2
      -translate-y-1/2

      rounded-full

      bg-[#E6AE4B]/10

      blur-[45px]
    "
  />

  {/* RIGHT BACKGROUND GLOW */}
  <div
    className="
      pointer-events-none
      absolute
      -right-16
      -bottom-14

      h-40
      w-40

      rounded-full

      bg-[#A9651F]/15

      blur-[42px]
    "
  />

  {/* TOP PREMIUM LIGHT */}
  <div
    className="
      pointer-events-none
      absolute
      left-1/2
      top-0

      h-[2px]
      w-[45%]

      -translate-x-1/2

      bg-gradient-to-r

      from-transparent

      via-[#C77F24]/65

      to-transparent
    "
  />

  {/* STATS */}
  <div
    className="
      relative
      z-10

      grid
      grid-cols-1

      divide-y
      divide-[#D6B37D]/60

      sm:grid-cols-2
      sm:divide-x
      sm:divide-y-0

      lg:grid-cols-4
    "
  >
    {stats.map((stat) => (
      <div
        key={stat.label}
        className="
          group/stat
          relative

          flex
          min-h-[64px]

          items-center
          justify-center

          gap-3

          px-4
          py-2.5

          transition-all
          duration-300

          hover:bg-white/35
        "
      >
        {/* INDIVIDUAL STAT GLOW */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2

            h-14
            w-28

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-[#D79A3C]/0

            blur-[25px]

            transition-all
            duration-300

            group-hover/stat:bg-[#D79A3C]/12
          "
        />

        {/* ICON */}
        <div
          className="
            relative
            z-10

            flex
            h-[38px]
            w-[38px]

            shrink-0

            items-center
            justify-center

            rounded-full

            border
            border-[#D7B478]

            bg-[linear-gradient(145deg,#FFFDF8_0%,#F8E8CD_100%)]

            text-[#9A6426]

            shadow-[0_5px_12px_rgba(101,60,20,0.10),inset_0_1px_0_rgba(255,255,255,0.9)]

            transition-all
            duration-300

            group-hover/stat:-translate-y-[1px]

            group-hover/stat:border-[#C98B32]

            group-hover/stat:shadow-[0_7px_16px_rgba(124,71,17,0.18)]
          "
        >
          <CustomIcon
            name={stat.icon}
            className="h-[19px] w-[19px]"
          />
        </div>

        {/* TEXT */}
        <div className="relative z-10 min-w-0 text-left">

          <div
            className="
              font-serif

              text-[16px]
              font-semibold

              leading-none

              text-[#2F1D14]
            "
          >
            {stat.value}
          </div>

          <div
            className="
              mt-1

              text-[13px]

              leading-tight

              text-[#604735]
            "
          >
            {stat.label}
          </div>

        </div>

        {/* BOTTOM HOVER LINE */}
        <div
          className="
            pointer-events-none
            absolute

            bottom-0
            left-1/2

            h-[2px]
            w-0

            -translate-x-1/2

            rounded-full

            bg-gradient-to-r

            from-transparent

            via-[#B86D1E]

            to-transparent

            opacity-0

            transition-all
            duration-300

            group-hover/stat:w-[55%]
            group-hover/stat:opacity-70
          "
        />
      </div>
    ))}
  </div>
</div>

        {/* BOTTOM */}

        <div
          className="
            mx-auto
            mt-4

            flex
            w-fit

            items-center

            gap-3

            text-[#B07B36]

            opacity-80
          "
        >
          <span
            className="
              h-px
              w-24

              bg-gradient-to-r

              from-transparent

              to-[#B07B36]
            "
          />

          <svg
            viewBox="0 0 64 32"
            className="h-7 w-14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            <path d="M32 28c-12-4-20-11-20-20 9 1 16 5 20 13 4-8 11-12 20-13 0 9-8 16-20 20Z" />

            <path d="M32 21c-7-6-10-12-6-19 4 2 6 6 6 11 0-5 2-9 6-11 4 7 1 13-6 19Z" />

            <path d="M14 29h36" />
          </svg>

          <span
            className="
              h-px
              w-24

              bg-gradient-to-l

              from-transparent

              to-[#B07B36]
            "
          />
        </div>
      </div>
    </section>
  );
}
