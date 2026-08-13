// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import {
//   FaChevronRight,
//   FaFacebook,
//   FaFire,
//   FaGlobe,
//   FaHeart,
//   FaInstagram,
//   FaLeaf,
//   FaLink,
//   FaEnvelope,
//   FaMapMarkerAlt,
//   FaPhoneAlt,
//   FaPaperPlane,
//   FaShieldAlt,
//   FaTwitter,
//   FaYoutube,
// } from "react-icons/fa";
// import { useState } from "react";
// import mokshalogo from "../../../public/assets/logoreal.jpeg";
// import mokshaSevaLogo from "../../../public/assets/logo-moksha-seva.png";
// import { newsletterApi } from "@/lib/newsletterApi";

// interface FooterProps {}

// /* Kalash finial — same signature as About & Contact pages */
// function Kalash() {
//   return (
//     <span className="pointer-events-none absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
//       <span className="block h-1.5 w-1.5 rounded-full border border-[#8B6A3E] bg-[#D9B681]" />
//     </span>
//   );
// }

// const socialLinks = [
//   { label: "Facebook", href: "#", icon: FaFacebook },
//   { label: "Instagram", href: "#", icon: FaInstagram },
//   { label: "Twitter", href: "#", icon: FaTwitter },
//   { label: "YouTube", href: "#", icon: FaYoutube },
// ];

// const quickLinks = [
//   { label: "Home", href: "/" },
//   { label: "About", href: "/about" },
//   { label: "Volunteer", href: "/volunteer/register" },
//   { label: "Contact", href: "/contact" },
// ];

// export default function Footer({}: FooterProps) {
//   const [email, setEmail] = useState("");
//   const [subscribed, setSubscribed] = useState(false);

//   const brandName = "Moksha Sewa";
//   const tagline = "Dignified Funeral & Ritual Services";
//   const description = "Complete funeral, cremation, pandit, ambulance, hearse van, prayer hall and family support services with dignity, tradition and care.";
//   const contactEmail = "info@mokshasewa.org";
//   const contactNumber = "9220147229";

//   const services = [
//     { label: "Wood & Ritual Items", href: "/furalservices" },
//     { label: "Priest Support", href: "/panditservices" },
//     { label: "Ambulance", href: "/ambulanceservices" },
//     { label: "Ground & Prayer Support", href: "/prayerhallservices" },
//     { label: "Family Support", href: "/specialservices" },
//   ];

//   const handleSubscribe = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     if (!email.trim()) return;

//     try {
//       await newsletterApi.subscribe(email.trim(), "footer-request-support");
//       setSubscribed(true);
//       setEmail("");

//       window.setTimeout(() => {
//         setSubscribed(false);
//       }, 2500);
//     } catch {
//       // Silently ignored — the footer has no space for an error state, and this is a
//       // low-stakes lead-capture form: a failed submit here shouldn't block the visitor.
//     }
//   };

//   return (
//     <footer className="relative overflow-hidden bg-[#170E09] text-[#F8F2E9]">
//       {/* fine gold line marking the start of the footer */}
//       <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#D9B681] to-transparent" />

//       {/* Soft layered background */}
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(190,132,49,0.11),transparent_30%),radial-gradient(circle_at_85%_25%,rgba(190,132,49,0.08),transparent_26%),linear-gradient(180deg,#21140D_0%,#170E09_100%)]" />

//       {/* Devanagari watermark */}
//       <div className="pointer-events-none absolute -right-8 top-1/2 hidden -translate-y-1/2 select-none font-serif text-[160px] leading-none text-[#D9B681]/[0.05] lg:block">
//         मोक्ष
//       </div>

//       {/* Decorative rings */}
//       <div className="pointer-events-none absolute -left-20 top-24 h-56 w-56 rounded-full border border-[#C79545]/10" />
//       <div className="pointer-events-none absolute -right-24 top-8 h-64 w-64 rounded-full border border-[#C79545]/10" />

//       <div className="relative z-10 mx-auto max-w-7xl px-0 py-5 lg:py-6">
//         {/* ---------- Top section: brand + support ---------- */}
//         <div className="grid items-center gap-4 lg:grid-cols-[1fr_1fr] lg:gap-6">
//           {/* Brand */}
//           <div>
//             <div className="flex items-center gap-3.5">
//               {/* logo tile crowned with a kalash */}
//               <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16">
//                 <Kalash />
//                 <div className="relative h-full w-full overflow-hidden rounded-xl border border-[#D5A451]/30 bg-white p-1.5 shadow-[0_10px_28px_rgba(0,0,0,0.25)]">
//                   <Image
//                     src={mokshaSevaLogo}
//                     alt={brandName}
//                     fill
//                     priority
//                     sizes="64px"
//                     className="object-contain p-1.5"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <h2 className="font-serif text-2xl leading-none text-white">
//                   Moksha <span className=" text-[#E4B75F]">Sewa</span>
//                 </h2>
//                 <p className="mt-1 text-[14px] font-medium tracking-wide text-[#D9A84F] sm:text-[15px]">
//                   {tagline}
//                 </p>
//               </div>
//             </div>

//             <p className="mt-3 max-w-xl text-[14px] leading-6 text-white/70">
//               {description}
//             </p>

//             <div className="mt-3 flex flex-wrap items-center gap-2.5">
//               {socialLinks.map((social) => {
//                 const Icon = social.icon;

//                 return (
//                   <a
//                     key={social.label}
//                     href={social.href}
//                     aria-label={social.label}
//                     className="group flex h-9 w-9 items-center justify-center rounded-full border border-[#D3A14D]/55 bg-white/[0.025] text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#E4B75F] hover:bg-[#D3A14D] hover:text-[#1A100A]"
//                   >
//                     <Icon className="h-4 w-4" />
//                   </a>
//                 );
//               })}

//               {/* helpline sits inline with socials — no separate ribbon needed */}
//               <a
//                 href={`tel:${contactNumber.replace(/\s/g, "")}`}
//                 className="group ml-1 inline-flex items-center gap-2 rounded-lg bg-gradient-to-b from-[#E5B85F] to-[#C78B32] px-3.5 py-2 text-[14px] font-semibold text-[#24150C] shadow-md transition duration-300 hover:brightness-110"
//               >
//                 <span className="relative flex h-3.5 w-3.5 items-center justify-center">
//                   <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#24150C]/25" />
//                   <FaPhoneAlt className="relative h-3.5 w-3.5" />
//                 </span>
//                 {contactNumber}
//               </a>
//             </div>
//           </div>

//           {/* Request support — slim card */}
//           <div className="relative overflow-hidden rounded-2xl border border-[#C99645]/50 bg-white/[0.035] p-4 shadow-[0_16px_40px_rgba(0,0,0,0.24)] backdrop-blur-sm sm:p-5">
//             <span className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-[#C9A574] via-[#E4B75F] to-[#C9A574]" />
//             <div className="pointer-events-none absolute -right-14 -top-12 h-44 w-44 rounded-full border border-[#D3A14D]/10" />

//             <div className="relative">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D3A14D]/65 text-[#E4B75F]">
//                   <FaEnvelope className="h-4 w-4" />
//                 </div>
//                 <div>
//                   <h3 className="font-serif text-lg leading-tight text-white">
//                     Request <span className=" text-[#E4B75F]">Support</span>
//                   </h3>
//                   <p className="mt-0.5 text-[14px] leading-4 text-white/55">
//                     Share your email and our support team will contact you.
//                   </p>
//                 </div>
//               </div>

//               <form
//                 onSubmit={handleSubscribe}
//                 className="mt-3 flex flex-col gap-2 sm:flex-row"
//               >
//                 <label htmlFor="footer-email" className="sr-only">
//                   Email address
//                 </label>
//                 <input
//                   id="footer-email"
//                   type="email"
//                   value={email}
//                   onChange={(event) => setEmail(event.target.value)}
//                   placeholder="Family contact email"
//                   className="min-h-10 flex-1 rounded-lg border border-[#B88846]/55 bg-white/[0.045] px-3.5 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-[#E4B75F] focus:bg-white/[0.07]"
//                   required
//                 />
//                 <button
//                   type="submit"
//                   className={`group inline-flex min-h-10 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition duration-300 ${subscribed
//                     ? "bg-emerald-600 text-white"
//                     : "bg-gradient-to-b from-[#E5B85F] to-[#C78B32] text-[#24150C] hover:brightness-110"
//                     }`}
//                 >
//                   {subscribed ? "Submitted" : "Send"}
//                   {!subscribed && (
//                     <FaPaperPlane className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
//                   )}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>

//         {/* ---------- Divider with diya medallion ---------- */}
//         <div className="my-4 flex items-center gap-3 lg:my-5">
//           <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#B17C37]/55" />
//           <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#B17C37]/40 text-[#E4B75F]">
//             <FaFire className="h-3.5 w-3.5" />
//           </div>
//           <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#B17C37]/55" />
//         </div>

//         {/* ---------- Navigation columns ---------- */}
//         <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
//           <div>
//             <FooterColumnTitle icon={FaLink} title="Quick Links" />
//             <ul className="mt-2.5 space-y-1.5">
//               {quickLinks.map((item) => (
//                 <li key={item.href}>
//                   <Link
//                     href={item.href}
//                     className="group inline-flex items-center gap-1.5 text-[14px] text-white/70 transition hover:text-[#E4B75F]"
//                   >
//                     <FaChevronRight className="h-3.5 w-3.5 text-[#D3A14D] transition group-hover:translate-x-0.5" />
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <FooterColumnTitle icon={FaLeaf} title="Services" />
//             <ul className="mt-2.5 space-y-1.5">
//               {services.map((service) => (
//                 <li key={service.label}>
//                   <Link
//                     href={service.href}
//                     className="group inline-flex items-center gap-1.5 text-[14px] text-white/70 transition hover:text-[#E4B75F]"
//                   >
//                     <FaChevronRight className="h-3.5 w-3.5 text-[#D3A14D] transition group-hover:translate-x-0.5" />
//                     {service.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <FooterColumnTitle icon={FaMapMarkerAlt} title="Contact" />
//             <ul className="mt-2.5 space-y-1.5 text-[14px] text-white/70">
//               <li className="flex items-start gap-2">
//                 <FaMapMarkerAlt className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#D3A14D]" />
//                 <span>Delhi NCR</span>
//               </li>
//               <li className="flex items-start gap-2">
//                 <FaEnvelope className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#D3A14D]" />
//                 <a
//                   href={`mailto:${contactEmail}`}
//                   className="break-all transition hover:text-[#E4B75F]"
//                 >
//                   {contactEmail}
//                 </a>
//               </li>
//               <li className="flex items-start gap-2">
//                 <FaPhoneAlt className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#D3A14D]" />
//                 <a
//                   href={`tel:${contactNumber.replace(/\s/g, "")}`}
//                   className="transition hover:text-[#E4B75F]"
//                 >
//                   {contactNumber}
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <FooterColumnTitle icon={FaHeart} title="Values" />
//             <ul className="mt-2.5 space-y-1.5 text-[14px] text-white/70">
//               {[
//                 { icon: FaHeart, label: "Compassion" },
//                 { icon: FaShieldAlt, label: "Trust" },
//                 { icon: FaLeaf, label: "Respect" },
//                 { icon: FaGlobe, label: "Service" },
//               ].map((value) => {
//                 const Icon = value.icon;

//                 return (
//                   <li key={value.label} className="flex items-center gap-2">
//                     <Icon className="h-3.5 w-3.5 text-[#D3A14D]" />
//                     <span>{value.label}</span>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         </div>

//         {/* ---------- Bottom bar (shanti + copyright in one row) ---------- */}
//         <div className="mt-4 border-t border-[#B17C37]/25 pt-3 lg:mt-5">
//           <div className="flex flex-col items-center justify-between gap-2 text-center text-[14px] text-white/45 sm:flex-row sm:text-left">
//             <p>
//               © {new Date().getFullYear()} {brandName} • All rights reserved
//             </p>
//             <p className="font-serif text-[14px] tracking-[0.25em] text-[#D9A84F]/40">
//               ॐ शांति शांति शांति ॐ
//             </p>
//             <div className="flex items-center gap-4">
//               <Link href="/privacy-policy" className="transition hover:text-[#E4B75F]">
//                 Privacy Policy
//               </Link>
//               <span className="h-3 w-px bg-white/15" />
//               <Link href="/terms" className="transition hover:text-[#E4B75F]">
//                 Terms & Conditions
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// interface FooterColumnTitleProps {
//   icon: React.ElementType;
//   title: string;
// }

// function FooterColumnTitle({ icon: Icon, title }: FooterColumnTitleProps) {
//   return (
//     <div>
//       <div className="flex items-center gap-2">
//         <Icon className="h-4 w-4 text-[#E4B75F]" />
//         <h3 className="font-serif text-base text-white">{title}</h3>
//       </div>
//       <div className="mt-1.5 flex items-center gap-1.5">
//         <span className="h-px w-12 bg-gradient-to-r from-[#D3A14D] to-transparent" />
//         <span className="h-1 w-1 rotate-45 bg-[#D3A14D]/60" />
//       </div>
//     </div>
//   );
// }
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaChevronRight,
  FaFacebook,
  FaGlobe,
  FaHeart,
  FaInstagram,
  FaLeaf,
  FaLink,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
  FaShieldAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { useState } from "react";
import mokshaSevaLogo from "../../../public/assets/logo-moksha-seva.png";
import { newsletterApi } from "@/lib/newsletterApi";

interface FooterProps {}

const socialLinks = [
  { label: "Facebook", href: "#", icon: FaFacebook },
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "Twitter", href: "#", icon: FaTwitter },
  { label: "YouTube", href: "#", icon: FaYoutube },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Volunteer", href: "/volunteer/register" },
  { label: "Contact", href: "/contact" },
];

export default function Footer({}: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const brandName = "Moksha Sewa";
  const tagline = "Dignified Funeral & Ritual Services";
  const description =
    "Complete funeral, cremation, pandit, ambulance, hearse van, prayer hall and family support services with dignity, tradition and care.";
  const contactEmail = "info@mokshasewa.org";
  const contactNumber = "9220147229";

  const services = [
    { label: "Wood & Ritual Items", href: "/furalservices" },
    { label: "Priest Support", href: "/panditservices" },
    { label: "Ambulance", href: "/ambulanceservices" },
    { label: "Ground & Prayer Support", href: "/prayerhallservices" },
    { label: "Family Support", href: "/specialservices" },
  ];

  const values = [
    { icon: FaHeart, label: "Compassion" },
    { icon: FaShieldAlt, label: "Trust" },
    { icon: FaLeaf, label: "Respect" },
    { icon: FaGlobe, label: "Service" },
  ];

  const handleSubscribe = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) return;

    try {
      await newsletterApi.subscribe(email.trim(), "footer-request-support");
      setSubscribed(true);
      setEmail("");

      window.setTimeout(() => {
        setSubscribed(false);
      }, 2500);
    } catch {
      // Keep footer submission non-blocking.
    }
  };

  return (
    <footer className="relative overflow-hidden bg-[#F7E9CF] text-[#352116]">
      {/* subtle background depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_5%,rgba(255,255,255,0.95),transparent_20%),radial-gradient(circle_at_82%_10%,rgba(255,220,150,0.34),transparent_24%),radial-gradient(circle_at_45%_90%,rgba(196,124,45,0.15),transparent_34%),linear-gradient(135deg,#FFFDF8_0%,#F9ECD5_32%,#F1D7AE_68%,#F8E8CF_100%)]" />

      {/* slim top accent */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#D89A32] to-transparent shadow-[0_0_14px_rgba(216,154,50,0.55)]" />

      {/* glossy warm highlights */}
      <div className="pointer-events-none absolute -left-16 -top-20 h-64 w-64 rounded-full bg-white/45 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#F0BD64]/18 blur-3xl" />

      {/* watermark */}
      <div className="pointer-events-none absolute -right-4 top-10 hidden select-none font-serif text-[140px] leading-none text-[#A96B2B]/[0.055] lg:block">
        मोक्ष
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        {/* TOP: brand + support */}
        <div className="grid items-start gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden  border border-[#B77A39]/30 bg-white/80 p-1.5 shadow-[0_6px_18px_rgba(76,42,17,0.10)]">
                  <Image
                    src={mokshaSevaLogo}
                    alt={brandName}
                    fill
                    priority
                    sizes="56px"
                    className="object-contain p-1"
                  />
                </div>

                <div>
                  <h2 className="font-serif text-[25px] font-bold leading-none tracking-[-0.02em] text-[#3A2215]">
                    Moksha <span className="text-[#A15B22]">Sewa</span>
                  </h2>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em] text-[#6B391A] sm:text-[12px]">
                    {tagline}
                  </p>
                </div>
              </div>

              <p className="mt-3 max-w-2xl text-[13px] font-medium leading-5 text-[#5A3A29]">
                {description}
              </p>
            </div>

          </div>

          {/* Support card */}
          <div className="relative self-start overflow-hidden rounded-2xl border border-white/90 bg-white/72 px-3 py-2.5 shadow-[0_10px_30px_rgba(123,72,24,0.16)] ring-1 ring-[#DDAA55]/20 backdrop-blur-md">
            <div className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-[#C98C2D] via-[#A96024] to-[#7B431D]" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#E7BC6B]/24" />

            <div className="relative flex items-start gap-2.5">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#D58A2F] via-[#B96A22] to-[#7E421A] text-white shadow-[0_4px_12px_rgba(126,66,26,0.24)]">
                <FaEnvelope className="h-3.5 w-3.5" />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-serif text-[17px] font-bold leading-tight text-[#3A2215]">
                  Request <span className="text-[#A15B22]">Support</span>
                </h3>
                <p className="mt-0 text-[11px] font-medium leading-4 text-[#654A3A]">
                  Share your email and our support team will contact you.
                </p>

                <form
                  onSubmit={handleSubscribe}
                  className="mt-2 flex flex-col gap-1.5 sm:flex-row"
                >
                  <label htmlFor="footer-email" className="sr-only">
                    Email address
                  </label>

                  <input
                    id="footer-email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Family contact email"
                    className="!h-8 !min-h-0 flex-1 rounded-lg border border-[#B99B76]/55 bg-white/95 px-3 py-0 shadow-inner text-[12px] font-medium leading-none text-[#3F281B] outline-none transition placeholder:text-[#9A887B] focus:border-[#8D5426]"
                    required
                  />

                  <button
                    type="submit"
                    className={`inline-flex !h-8 !min-h-0 items-center justify-center gap-1.5 rounded-lg px-3.5 py-0 text-[12px] font-bold transition ${
                      subscribed
                        ? "bg-emerald-600 text-white"
                        : "bg-gradient-to-b from-[#D58A2F] via-[#B96A22] to-[#7E421A] text-white shadow-[0_4px_12px_rgba(126,66,26,0.24)] hover:brightness-110"
                    }`}
                  >
                    {subscribed ? "Submitted" : "Send"}
                    {!subscribed && <FaPaperPlane className="h-3 w-3" />}
                  </button>
                </form>

                {/* Social + phone moved here to use the empty support-card space */}
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="flex h-7 w-7 items-center justify-center rounded-full border border-[#7A4A27]/20 bg-white/82 text-[#4A2B1B] shadow-[0_2px_8px_rgba(109,66,29,0.10)] transition duration-300 hover:-translate-y-0.5 hover:border-[#8D5426]/45 hover:bg-[#F1CF91]"
                      >
                        <Icon className="h-3 w-3" />
                      </a>
                    );
                  })}

                  <a
                    href={`tel:${contactNumber.replace(/\s/g, "")}`}
                    className="ml-1 inline-flex h-7 items-center gap-1.5 rounded-full bg-[#8D5426] px-3 text-[11px] font-bold text-white shadow-[0_3px_10px_rgba(91,52,22,0.14)] transition hover:brightness-110"
                  >
                    <FaPhoneAlt className="h-2.5 w-2.5" />
                    {contactNumber}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN DIVIDER */}
        <div className="my-4 flex items-center gap-3">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#B8792D]/45 to-transparent" />
          <span className="h-1.5 w-1.5 rotate-45 bg-[#C97924] shadow-[0_0_8px_rgba(201,121,36,0.35)]" />
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#B8792D]/45 to-transparent" />
        </div>

        {/* LINK COLUMNS */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <FooterBlock icon={FaLink} title="Quick Links">
            <ul className="mt-2 space-y-1.5">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-[13px] font-medium text-[#4A3023] transition hover:text-[#A35E22]"
                  >
                    <FaChevronRight className="h-2.5 w-2.5 text-[#4B2A18] transition group-hover:translate-x-0.5" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterBlock>

          <FooterBlock icon={FaLeaf} title="Services">
            <ul className="mt-2 space-y-1.5">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="group inline-flex items-center gap-2 text-[13px] font-medium text-[#4A3023] transition hover:text-[#A35E22]"
                  >
                    <FaChevronRight className="h-2.5 w-2.5 text-[#4B2A18] transition group-hover:translate-x-0.5" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterBlock>

          <FooterBlock icon={FaMapMarkerAlt} title="Contact">
            <ul className="mt-2 space-y-2 text-[13px] font-medium text-[#4A3023]">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="h-3 w-3 shrink-0 text-[#4B2A18]" />
                <span>Delhi NCR</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="h-3 w-3 shrink-0 text-[#4B2A18]" />
                <a
                  href={`mailto:${contactEmail}`}
                  className="break-all transition hover:text-[#A35E22]"
                >
                  {contactEmail}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="h-3 w-3 shrink-0 text-[#4B2A18]" />
                <a
                  href={`tel:${contactNumber.replace(/\s/g, "")}`}
                  className="transition hover:text-[#A35E22]"
                >
                  {contactNumber}
                </a>
              </li>
            </ul>
          </FooterBlock>

          <FooterBlock icon={FaHeart} title="Values">
            <ul className="mt-2 space-y-2 text-[13px] font-medium text-[#4A3023]">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <li key={value.label} className="flex items-center gap-2">
                    <Icon className="h-3 w-3 text-[#4B2A18]" />
                    <span>{value.label}</span>
                  </li>
                );
              })}
            </ul>
          </FooterBlock>
        </div>

        {/* BOTTOM */}
        <div className="mt-4 border-t border-[#B8792D]/35 pt-3">
          <div className="flex flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
            <p className="text-[11px] font-medium tracking-[0.02em] text-[#654A3A]">
              © {new Date().getFullYear()} {brandName} • All rights reserved
            </p>

            <p className="font-serif text-[12px] font-bold tracking-[0.18em] text-[#7A431E]">
              ॐ शांति शांति शांति ॐ
            </p>

            <div className="flex items-center gap-4 text-[11px] font-medium text-[#654A3A]">
              <Link
                href="/privacy-policy"
                className="transition hover:text-[#A35E22]"
              >
                Privacy Policy
              </Link>
              <span className="h-3 w-px bg-[#B8792D]/35" />
              <Link href="/terms" className="transition hover:text-[#A35E22]">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

interface FooterBlockProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

function FooterBlock({ icon: Icon, title, children }: FooterBlockProps) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-white/70 to-[#E5B767]/28 shadow-[0_2px_8px_rgba(121,76,35,0.08)]">
          <Icon className="h-3.5 w-3.5 text-[#4B2A18]" />
        </span>

        <h3 className="font-serif text-[15px] font-bold uppercase tracking-[0.055em] text-[#3D2518]">
          {title}
        </h3>
      </div>

      <div className="mt-1.5 h-px w-10 bg-gradient-to-r from-[#A96024]/65 to-[#D4A24A]/35" />
      {children}
    </div>
  );
}