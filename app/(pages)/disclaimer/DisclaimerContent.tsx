"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiInfo,
  FiFileText,
  FiHeart,
  FiMapPin,
  FiCheckSquare,
  FiShield,
  FiAlertCircle,
  FiUsers,
  FiImage,
  FiExternalLink,
  FiRefreshCw,
  FiMail,
  FiPhone,
  FiGlobe,
} from "react-icons/fi";
import { PiFlowerLotus } from "react-icons/pi";

interface DisclaimerItem {
  id: number;
  title: string;
  description: string;
  iconImg: string;
}

const disclaimerItems: DisclaimerItem[] = [
  {
    id: 1,
    title: "General Information",
    description:
      "The information on this website is for general awareness and information about our activities. While we strive for accuracy, we do not guarantee that all content is always complete, current or error-free.",
    iconImg: "/disclaimer/icons/icon_1.png",
  },
  {
    id: 2,
    title: "Nature of Our Services",
    description:
      "Moksha Sewa supports economically disadvantaged families and legally authorised unclaimed deceased-person cases with dignified cremation, transportation, essential materials, priest support and more, subject to verification, resource availability and applicable laws.",
    iconImg: "/disclaimer/icons/icon_2.png",
  },
  {
    id: 3,
    title: "Service Availability & Eligibility",
    description:
      "We currently provide operational assistance in Ghaziabad, Uttar Pradesh. Services in Delhi, Noida and other regions are planned for future expansion. Submitting a request does not guarantee assistance. Each request is assessed based on eligibility, urgency and available resources.",
    iconImg: "/disclaimer/icons/icon_3.png",
  },
  {
    id: 4,
    title: "Legal Permissions & Documentation",
    description:
      "We do not replace the authority of hospitals, police departments, municipal bodies or other government institutions. All assistance is provided only after necessary permissions and documentation from competent authorities.",
    iconImg: "/disclaimer/icons/icon_4.png",
  },
  {
    id: 5,
    title: "Religious & Cultural Sensitivity",
    description:
      "We respect all religious beliefs and traditions. Ritual assistance is coordinated as per the family's preferences, applicable customs and legal requirements. We do not guarantee any specific spiritual or religious outcome.",
    iconImg: "/disclaimer/icons/icon_5.png",
  },
  {
    id: 6,
    title: "Emergency & Professional Assistance",
    description:
      "Information on this website is not a substitute for emergency medical services, police assistance, legal advice or other professional intervention. In an emergency, please contact the appropriate authorities.",
    iconImg: "/disclaimer/icons/icon_6.png",
  },
  {
    id: 7,
    title: "Donations & Contributions",
    description:
      "Donations support our humanitarian mission and do not guarantee assistance to any specific individual or case. Tax benefits are subject to applicable laws and valid documentation.",
    iconImg: "/disclaimer/icons/icon_7.png",
  },
  {
    id: 8,
    title: "Volunteers & Third-Party Service Providers",
    description:
      "We may work with volunteers, transport providers, priests and other authorised partners. While we take reasonable care, we are not responsible for the independent services of third parties.",
    iconImg: "/disclaimer/icons/icon_8.png",
  },
  {
    id: 9,
    title: "Images, Stories & Personal Dignity",
    description:
      "Photos, videos and case stories are for awareness purposes. Some may be illustrative. We respect the privacy and dignity of deceased individuals and families, and do not publish sensitive information without proper consent or legal basis.",
    iconImg: "/disclaimer/icons/icon_9.png",
  },
  {
    id: 10,
    title: "External Links",
    description:
      "Our website may contain links to third-party websites. We do not control their content or privacy practices and are not responsible for their activities.",
    iconImg: "/disclaimer/icons/icon_10.png",
  },
  {
    id: 11,
    title: "Limitation of Liability",
    description:
      "While we make reasonable efforts to provide accurate information and responsible assistance, Moksha Sewa and Namo Gange Trust shall not be liable for losses arising from reliance on website information or circumstances beyond our control, to the extent permitted by law.",
    iconImg: "/disclaimer/icons/icon_11.png",
  },
  {
    id: 12,
    title: "Changes to This Disclaimer",
    description:
      "We may review, amend or update this Disclaimer when necessary. Updated provisions will be published on this website with the applicable revision date.",
    iconImg: "/disclaimer/icons/icon_12.png",
  },
];

export default function DisclaimerContent() {
  return (
    <div className="w-full bg-[#FFFFFF]">
      {/* ==================== HERO HEADER BANNER ==================== */}
      <div className="relative w-full overflow-hidden bg-[#FBF5EB] min-h-[160px] sm:min-h-[185px] lg:min-h-[205px]">
        {/* Right side Diya & Holy river sunset artwork */}
        <div className="absolute inset-y-0 right-0 w-full sm:w-[65%] lg:w-[58%] pointer-events-none">
          <Image
            src="/disclaimer/diya_river_artwork_sized.png"
            alt="Disclaimer Header Banner"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right"
          />
          {/* Smooth gradient blend into left cream background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FBF5EB] via-[#FBF5EB]/70 to-transparent" />
        </div>

        {/* Content container */}
        <div className="relative z-10 mx-auto max-w-[1240px] px-5 py-7 sm:px-8 sm:py-8 lg:py-9">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-[12.5px] text-[#8C6D46]">
            <Link href="/" className="transition-colors hover:text-[#2A1B0E]">
              Home
            </Link>
            <span>&gt;</span>
            <span className="font-medium text-[#2A1B0E]">Disclaimer</span>
          </div>

          {/* Heading */}
          <h1 className="mt-2.5 font-serif text-[32px] sm:text-[38px] lg:text-[44px] font-bold tracking-tight text-[#112E47]">
            Disclaimer
          </h1>

          {/* Subtitle */}
          <p className="mt-1 text-[13.5px] sm:text-[14.5px] font-medium text-[#5A452B]">
            Transparency, Responsibility &amp; Compassion in Every Sewa
          </p>
        </div>
      </div>

      {/* ==================== MAIN BODY ==================== */}
      <div className="mx-auto max-w-[1240px] px-4 py-8 sm:px-6 sm:py-9">
        {/* Yellow Notice Banner */}
        <div className="mb-8 flex items-start gap-3 rounded-[8px] border border-[#F3DFC1] bg-[#FDF6E9] p-3.5 sm:p-4 text-[#4A3B29]">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center">
            <Image
              src="/disclaimer/icons/info_icon.png"
              alt=""
              width={22}
              height={22}
              className="h-5 w-5 object-contain"
            />
          </div>
          <div className="text-[12px] sm:text-[12.5px] leading-relaxed">
            <span className="font-bold text-[#2A1B0E]">Last Updated:</span> 25 October 2026
            <p className="mt-0.5 text-[#5A452B]">
              Please read this Disclaimer carefully before using our website, requesting assistance, volunteering or making a donation.
            </p>
          </div>
        </div>

        {/* Section Title & Subheading */}
        <div className="mb-6">
          <h2 className="font-serif text-[18px] sm:text-[20px] font-bold text-[#112E47]">
            Moksha Sewa — An Initiative of Namo Gange Trust
          </h2>
          <p className="mt-1 text-[12.5px] sm:text-[13px] leading-relaxed text-[#555555]">
            At Moksha Sewa, we believe that every individual deserves dignity, compassion and respect in their final journey. We are committed to providing responsible humanitarian assistance while maintaining transparency, sensitivity and compliance with applicable laws.
          </p>
        </div>

        {/* 12 Cards Grid (2 Columns on tablet/desktop) */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 lg:gap-4">
          {disclaimerItems.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-3 rounded-[10px] border border-[#ECECEC] bg-[#FFFFFF] p-4 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all hover:border-[#D6A54E]/60 hover:shadow-[0_4px_12px_rgba(214,165,78,0.08)]"
            >
              {/* Number Badge */}
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FBF0DD] text-[11.5px] font-bold text-[#8C6225]">
                {item.id}
              </div>

              {/* Exact Cropped Icon from screenshot */}
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center">
                <Image
                  src={item.iconImg}
                  alt=""
                  width={24}
                  height={24}
                  className="h-full w-auto object-contain"
                />
              </div>

              {/* Text */}
              <div className="min-w-0 flex-1">
                <h3 className="font-serif text-[14px] sm:text-[14.5px] font-bold text-[#112E47]">
                  {item.title}
                </h3>
                <p className="mt-1 text-[11.5px] sm:text-[12px] leading-[1.45] text-[#555555]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ==================== CONTACT US CARD ==================== */}
        <div className="mt-8 rounded-[10px] border border-[#D5E3EE] bg-[#EAF2F8] p-4 sm:p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Left: Contact Us + query prompt */}
            <div className="flex items-center gap-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center">
                <Image
                  src="/disclaimer/icons/contact_icon.png"
                  alt=""
                  width={34}
                  height={34}
                  className="h-8 w-8 object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif text-[15px] sm:text-[16px] font-bold text-[#112E47]">
                  Contact Us
                </h3>
                <p className="mt-0.5 text-[11.5px] sm:text-[12px] text-[#555555]">
                  For questions regarding this Disclaimer or clarification about our services, please contact:
                </p>
              </div>
            </div>

            {/* Right: Office details */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#D0DFEB] pt-3 text-[11.5px] sm:text-[12px] text-[#333333] lg:border-t-0 lg:pt-0">
              {/* Address */}
              <div className="flex items-start gap-2">
                <FiMapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#112E47]" />
                <div>
                  <div className="font-bold text-[#112E47]">Moksha Sewa</div>
                  <div className="text-[10.5px] text-[#666666]">An Initiative of Namo Gange Trust</div>
                  <div className="text-[#555555]">
                    Plot No. 12/52, Site II Industrial Area, Mohan Nagar, Ghaziabad – 201007, Uttar Pradesh, India.
                  </div>
                </div>
              </div>

              {/* Phone & Website */}
              <div className="space-y-1">
                <a
                  href="tel:+919220147229"
                  className="inline-flex items-center gap-1.5 font-medium text-[#112E47] transition hover:text-[#C7872A]"
                >
                  <FiPhone className="h-3.5 w-3.5" />
                  <span>+91 9220147229</span>
                </a>
                <br />
                <a
                  href="https://mokshasewa.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-[#112E47] transition hover:text-[#C7872A]"
                >
                  <FiGlobe className="h-3.5 w-3.5" />
                  <span>https://mokshasewa.org/</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== OUR COMMITMENT FOOTER BANNER ==================== */}
        <div className="relative mt-10 pb-6 text-center">
          {/* Golden Lotus Icon from screenshot */}
          <div className="mb-2 flex items-center justify-center">
            <div className="relative">
              <Image
                src="/disclaimer/icons/lotus_divider.png"
                alt=""
                width={32}
                height={22}
                className="h-5 w-auto object-contain"
              />
            </div>
          </div>

          <h3 className="font-serif text-[17px] sm:text-[18px] font-bold text-[#112E47]">
            Our Commitment
          </h3>

          <p className="mt-2 text-[13px] sm:text-[13.5px] font-serif italic text-[#8B6227]">
            Every life deserves dignity. Every family deserves compassion.
          </p>
          <p className="mt-0.5 text-[13px] sm:text-[13.5px] font-serif italic text-[#8B6227]">
            Every act of service must be guided by humanity, transparency and responsibility.
          </p>
        </div>
      </div>
    </div>
  );
}
