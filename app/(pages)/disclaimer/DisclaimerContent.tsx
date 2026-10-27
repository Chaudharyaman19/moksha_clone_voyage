"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  LuFileText,
  LuHeartHandshake,
  LuMapPin,
  LuFileCheck,
  LuAmbulance,
  LuHandHeart,
  LuUsers,
  LuImage,
  LuExternalLink,
  LuShieldCheck,
  LuRotateCw,
} from "react-icons/lu";
import { PiHandsPraying } from "react-icons/pi";
import { FiInfo } from "react-icons/fi";

interface DisclaimerItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const disclaimerItems: DisclaimerItem[] = [
  {
    id: 1,
    title: "General Information",
    description:
      "The information on this website is for general awareness and information about our activities. While we strive for accuracy, we do not guarantee that all content is always complete, current or error-free.",
    icon: <LuFileText className="h-[22px] w-[22px] text-[#2C1810]" strokeWidth={1.8} />,
  },
  {
    id: 2,
    title: "Nature of Our Services",
    description:
      "Moksha Sewa supports economically disadvantaged families and legally authorised unclaimed deceased-person cases with dignified cremation, transportation, essential materials, priest support and more, subject to verification, resource availability and applicable laws.",
    icon: <LuHeartHandshake className="h-[23px] w-[23px] text-[#2C1810]" strokeWidth={1.8} />,
  },
  {
    id: 3,
    title: "Service Availability & Eligibility",
    description:
      "We currently provide operational assistance in Ghaziabad, Uttar Pradesh. Services in Delhi, Noida and other regions are planned for future expansion. Submitting a request does not guarantee assistance. Each request is assessed based on eligibility, urgency and available resources.",
    icon: <LuMapPin className="h-[22px] w-[22px] text-[#2C1810]" strokeWidth={1.8} />,
  },
  {
    id: 4,
    title: "Legal Permissions & Documentation",
    description:
      "We do not replace the authority of hospitals, police departments, municipal bodies or other government institutions. All assistance is provided only after necessary permissions and documentation from competent authorities.",
    icon: <LuFileCheck className="h-[22px] w-[22px] text-[#2C1810]" strokeWidth={1.8} />,
  },
  {
    id: 5,
    title: "Religious & Cultural Sensitivity",
    description:
      "We respect all religious beliefs and traditions. Ritual assistance is coordinated as per the family's preferences, applicable customs and legal requirements. We do not guarantee any specific spiritual or religious outcome.",
    icon: <PiHandsPraying className="h-[23px] w-[23px] text-[#2C1810]" />,
  },
  {
    id: 6,
    title: "Emergency & Professional Assistance",
    description:
      "Information on this website is not a substitute for emergency medical services, police assistance, legal advice or other professional intervention. In an emergency, please contact the appropriate authorities.",
    icon: <LuAmbulance className="h-[23px] w-[23px] text-[#2C1810]" strokeWidth={1.8} />,
  },
  {
    id: 7,
    title: "Donations & Contributions",
    description:
      "Donations support our humanitarian mission and do not guarantee assistance to any specific individual or case. Tax benefits are subject to applicable laws and valid documentation.",
    icon: <LuHandHeart className="h-[22px] w-[22px] text-[#2C1810]" strokeWidth={1.8} />,
  },
  {
    id: 8,
    title: "Volunteers & Third-Party Service Providers",
    description:
      "We may work with volunteers, transport providers, priests and other authorised partners. While we take reasonable care, we are not responsible for the independent services of third parties.",
    icon: <LuUsers className="h-[23px] w-[23px] text-[#2C1810]" strokeWidth={1.8} />,
  },
  {
    id: 9,
    title: "Images, Stories & Personal Dignity",
    description:
      "Photos, videos and case stories are for awareness purposes. Some may be illustrative. We respect the privacy and dignity of deceased individuals and families, and do not publish sensitive information without proper consent or legal basis.",
    icon: <LuImage className="h-[22px] w-[22px] text-[#2C1810]" strokeWidth={1.8} />,
  },
  {
    id: 10,
    title: "External Links",
    description:
      "Our website may contain links to third-party websites. We do not control their content or privacy practices and are not responsible for their activities.",
    icon: <LuExternalLink className="h-[22px] w-[22px] text-[#2C1810]" strokeWidth={1.8} />,
  },
  {
    id: 11,
    title: "Limitation of Liability",
    description:
      "While we make reasonable efforts to provide accurate information and responsible assistance, Moksha Sewa and Namo Gange Trust shall not be liable for losses arising from reliance on website information or circumstances beyond our control, to the extent permitted by law.",
    icon: <LuShieldCheck className="h-[22px] w-[22px] text-[#2C1810]" strokeWidth={1.8} />,
  },
  {
    id: 12,
    title: "Changes to This Disclaimer",
    description:
      "We may review, amend or update this Disclaimer when necessary. Updated provisions will be published on this website with the applicable revision date.",
    icon: <LuRotateCw className="h-[22px] w-[22px] text-[#2C1810]" strokeWidth={1.8} />,
  },
];

export default function DisclaimerContent() {
  return (
    <div className="w-full bg-[#FFFFFF]">
      {/* ==================== HERO HEADER BANNER ==================== */}
      <div className="relative w-full overflow-hidden bg-[#FBF5EA] min-h-[260px] sm:min-h-[300px] lg:min-h-[340px] pt-[115px] pb-14 sm:pt-[130px] sm:pb-16 lg:pt-[145px] lg:pb-18 flex items-center">
        {/* Full width Diya River Banner Image from reference */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/disclaimer/disclaimer_banner_cropped.png"
            alt="Disclaimer Header Banner"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right"
          />
          {/* Subtle soft gradient on left so text stays 100% readable while the full image and diya remain 100% crisp and clear */}
          <div className="absolute inset-y-0 left-0 w-full sm:w-[58%] lg:w-[50%] bg-gradient-to-r from-[#FBF5EA] via-[#FBF5EA]/85 to-transparent pointer-events-none" />
        </div>

        {/* Content container */}
        <div className="relative z-10 w-full mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[15.5px] sm:text-[17px] text-[#8C6D46]">
            <Link href="/" className="transition-colors hover:text-[#2A1B0E]">
              Home
            </Link>
            <span className="text-[#A89078] font-bold">&gt;</span>
            <span className="font-semibold text-[#2A1B0E]">Disclaimer</span>
          </div>

          {/* Heading */}
          <h1 className="mt-4 font-serif text-[48px] sm:text-[58px] lg:text-[68px] font-bold tracking-tight text-[#112E47] leading-[1.08]">
            Disclaimer
          </h1>

          {/* Subtitle */}
          <p className="mt-3 text-[17.5px] sm:text-[20px] lg:text-[22px] font-medium text-[#5A452B]">
            Transparency, Responsibility &amp; Compassion in Every Sewa
          </p>
        </div>
      </div>

      {/* ==================== MAIN BODY ==================== */}
      <div className="mx-auto max-w-[1240px] px-4 py-6 sm:px-6 sm:py-7">
        {/* Yellow Notice Banner */}
        <div className="mb-6 flex items-start gap-3 rounded-[8px] border border-[#F3DFC1] bg-[#FDF6E9] p-3 sm:p-3.5 text-[#4A3B29]">
          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C7872A] text-white">
            <FiInfo className="h-3.5 w-3.5" />
          </div>
          <div className="text-[12px] sm:text-[12.5px] leading-relaxed">
            <span className="font-bold text-[#2A1B0E]">Last Updated:</span> 25 October 2026
            <p className="mt-0.5 text-[#5A452B]">
              Please read this Disclaimer carefully before using our website, requesting assistance, volunteering or making a donation.
            </p>
          </div>
        </div>

        {/* Section Title & Subheading */}
        <div className="mb-5">
          <h2 className="font-serif text-[17px] sm:text-[19px] font-bold text-[#112E47]">
            Moksha Sewa — An Initiative of Namo Gange Trust
          </h2>
          <p className="mt-1 text-[12px] sm:text-[12.5px] leading-relaxed text-[#555555]">
            At Moksha Sewa, we believe that every individual deserves dignity, compassion and respect in their final journey. We are committed to providing responsible humanitarian assistance while maintaining transparency, sensitivity and compliance with applicable laws.
          </p>
        </div>

        {/* 12 Cards Grid (2 Columns on tablet/desktop) */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5">
          {disclaimerItems.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-3 rounded-[10px] border border-[#E8E2D5] bg-[#FAF7F2] p-3 sm:p-3.5 shadow-[0_2px_6px_rgba(44,24,16,0.03)] transition-all hover:bg-[#FDFBF7] hover:border-[#D6A54E]/70 hover:shadow-[0_4px_14px_rgba(214,165,78,0.1)]"
            >
              {/* Number Badge */}
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F3E7D3] border border-[#E6D4B8] text-[11px] font-bold text-[#8C6225]">
                {item.id}
              </div>

              {/* Crisp transparent vector icon matching the design */}
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center">
                {item.icon}
              </div>

              {/* Text */}
              <div className="min-w-0 flex-1">
                <h3 className="font-serif text-[14.5px] sm:text-[15px] font-bold leading-tight text-[#112E47]">
                  {item.title}
                </h3>
                <p className="mt-0.5 text-[12px] sm:text-[12.5px] leading-[1.4] text-[#555555]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
