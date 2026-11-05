"use client";
import { fetchSettingsJson } from "@/lib/clientSettings";
import { useEffect, useState } from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPhoneAlt,
} from "@/lib/icons/fa";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";
import { PiFlowerLotus } from "@/lib/icons/pi";

const SocialSidebar = () => {
  const [whatsappNumber, setWhatsappNumber] = useState("917702045502");

  useEffect(() => {
    fetchSettingsJson()
      .then((body) => {
        if (body?.data?.whatsappNumber) {
          setWhatsappNumber(body.data.whatsappNumber.replace(/[^\d]/g, ""));
        }
      })
      .catch(() => {});
  }, []);

  const whatsappLink = {
    url: `https://wa.me/${whatsappNumber || "917702045502"}?text=Namaste%2C%20I%20would%20like%20to%20know%20more%20about%20Moksha%20Sewa%27s%20services.%20Please%20guide%20me.`,
    color: "#25D366",
    label: "WhatsApp",
  };

  const phoneLink = {
    url: "tel:+919220147229",
    color: "#4CAF50",
    label: "Call Us 24/7",
    hoverColor: "#3D8B40",
  };

  // Twitter removed per user request; only Facebook, Instagram, LinkedIn, YouTube
  const socialLinks = [
    {
      icon: <FaFacebook size={26} />,
      url: "https://www.facebook.com/mokshasewa/",
      color: "#1877F2",
      label: "Facebook",
      hoverColor: "#0E5FBF",
    },
    {
      icon: <FaInstagram size={26} />,
      url: "https://www.instagram.com/mokshasewa/",
      color: "#E4405F",
      label: "Instagram",
      hoverColor: "#C13584",
    },
    {
      icon: <FaLinkedin size={26} />,
      url: "https://www.linkedin.com/company/moksha-sewaorg/",
      color: "#0077B5",
      label: "LinkedIn",
      hoverColor: "#005582",
    },
    {
      icon: <FaYoutube size={26} />,
      url: "https://www.youtube.com/@Mokshasewa",
      color: "#FF0000",
      label: "YouTube",
      hoverColor: "#CC0000",
    },
  ];

  const trackClick = (label: string, category: string = "Contact") => {
    const normalized = label.toLowerCase();
    const event: AnalyticsEvent =
      category === "Social"
        ? "social_click"
        : normalized.includes("whatsapp")
          ? "whatsapp_click"
          : normalized.includes("call")
            ? "phone_click"
            : normalized.includes("email")
              ? "email_click"
              : "enquiry_click";

    trackEvent(event, {
      button_name: label,
      location: normalized.includes("mobile") ? "sideicon_mobile" : "sideicon",
    });
  };

  return (
    <>
      <div className="side-icon-fixed-root fixed inset-0 pointer-events-none z-40 hidden md:block">
        {/* Right Side - Social Icons (Hover expands cleanly with reduced font size so content never cuts) */}
        <div className="absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-auto transition-all duration-300 opacity-100 translate-x-0">
          <div className="flex flex-col gap-3.5 items-end">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group relative flex min-h-[40px] min-w-[40px] items-center justify-end"
                onClick={() => trackClick(social.label, "Social")}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.18)] transition-all duration-300 ease-out hover:w-[132px] hover:justify-between hover:px-3.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
                  style={{ backgroundColor: social.color }}
                >
                  <span
                    className="max-w-0 overflow-hidden whitespace-nowrap text-[12px] font-semibold tracking-wide uppercase opacity-0 transition-all duration-300 group-hover:max-w-[90px] group-hover:opacity-100 text-white"
                  >
                    {social.label}
                  </span>
                  <span
                    className="shrink-0 transition-transform duration-300 group-hover:scale-110 text-white"
                  >
                    {social.icon}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Left Side - Phone & WhatsApp (top aligned with the Facebook icon on the right, same spacing) */}
        <div className="absolute left-1.5 top-[calc(50%-101px)] pointer-events-auto flex flex-col gap-3.5 items-start transition-all duration-300 opacity-100 translate-x-0">
          {/* Phone (Call Us 24/7) */}
          <a
            href={phoneLink.url}
            aria-label={phoneLink.label}
            className="group relative flex min-h-[40px] min-w-[40px] items-center justify-start"
            onClick={() => trackClick("Call 24/7")}
          >
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-all duration-300 ease-out hover:w-[132px] hover:justify-between hover:px-3.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
              style={{ backgroundColor: phoneLink.color }}
            >
              <span className="shrink-0 transition-transform duration-300 group-hover:scale-110 text-white">
                <FaPhoneAlt size={24} />
              </span>
              <span className="max-w-0 overflow-hidden whitespace-nowrap text-[12px] font-semibold tracking-wide uppercase opacity-0 transition-all duration-300 group-hover:max-w-[90px] group-hover:opacity-100 text-white text-right">
                {phoneLink.label}
              </span>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href={whatsappLink.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message Moksha Sewa on WhatsApp"
            className="group relative flex min-h-[40px] min-w-[40px] items-center justify-start"
            onClick={() => trackClick("WhatsApp")}
          >
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-all duration-300 ease-out hover:w-[132px] hover:justify-between hover:px-3.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
              style={{ backgroundColor: whatsappLink.color }}
            >
              <span className="shrink-0 transition-transform duration-300 group-hover:scale-110 text-white">
                <FaWhatsapp size={29} />
              </span>
              <span className="max-w-0 overflow-hidden whitespace-nowrap text-[12px] font-semibold tracking-wide uppercase opacity-0 transition-all duration-300 group-hover:max-w-[90px] group-hover:opacity-100 text-white text-right">
                {whatsappLink.label}
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Mobile View - Bottom Bar */}
      <div className="hidden">
        <div className="flex items-center justify-around py-2 px-1">
          {/* WhatsApp */}
          <a
            href={whatsappLink.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message Moksha Sewa on WhatsApp"
            className="flex min-h-11 min-w-11 flex-col items-center gap-1 group"
            onClick={() => trackClick("WhatsApp - Mobile")}
          >
            <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]">
              <FaWhatsapp
                size={16}
                className="text-[#25D366] group-hover:text-white"
              />
            </div>
            <span className="text-[12px] font-medium text-[#16823E]">
              WHATSAPP
            </span>
          </a>

          {/* Phone */}
          <a
            href={phoneLink.url}
            aria-label="Call Moksha Sewa emergency support"
            className="flex min-h-11 min-w-11 flex-col items-center gap-1 group"
            onClick={() => trackClick("Emergency Call - Mobile")}
          >
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-600">
              <FaPhoneAlt
                size={16}
                className="text-emerald-600 group-hover:text-white"
              />
            </div>
            <span className="text-[12px] font-medium text-emerald-600">
              CALL 24/7
            </span>
          </a>

          {/* Social Menu Trigger */}
          <div className="group relative">
            <button className="flex min-h-11 min-w-11 flex-col items-center gap-1" aria-label="Open social links">
              <div className="w-10 h-10 rounded-full bg-[#8B6A3E] flex items-center justify-center">
                <PiFlowerLotus size={16} className="text-white" />
              </div>
              <span className="text-[12px] font-medium text-[#8B6A3E]">
                SOCIAL
              </span>
            </button>

            {/* Social Menu Dropdown */}
            <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block">
              <div className="bg-white rounded-lg shadow-xl border border-[#8B6A3E]/20 p-2 min-w-[120px]">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-2 hover:bg-[#F5E9D9] rounded-lg"
                    onClick={() => trackClick(social.label + " - Mobile", "Social")}
                  >
                    <div style={{ color: social.color }}>{social.icon}</div>
                    <span className="text-[13px] text-[#5A3E2B]">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialSidebar;
