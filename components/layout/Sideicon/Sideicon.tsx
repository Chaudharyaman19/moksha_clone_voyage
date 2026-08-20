import Link from "next/link";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiFlowerLotus } from "react-icons/pi";

const SocialSidebar = () => {
  const whatsappLink = {
    url: "https://wa.me/919220147229?text=Namaste%2C%20I%20would%20like%20to%20know%20more%20about%20Moksha%20Sewa%27s%20services.%20Please%20guide%20me.",
    color: "#25D366",
    label: "WhatsApp",
  };

  const socialLinks = [
    {
      icon: <FaXTwitter size={20} />,
      url: "https://x.com/mokshasewa",
      color: "#000000",
      label: "X",
      hoverColor: "#333333",
    },
    {
      icon: <FaFacebook size={20} />,
      url: "https://www.facebook.com/mokshasewa/",
      color: "#1877F2",
      label: "Facebook",
      hoverColor: "#0E5FBF",
    },
    {
      icon: <FaInstagram size={20} />,
      url: "https://www.instagram.com/mokshasewa/",
      color: "#E4405F",
      label: "Instagram",
      hoverColor: "#C13584",
    },
    {
      icon: <FaLinkedin size={20} />,
      url: "https://www.linkedin.com/company/moksha-sewaorg/",
      color: "#0077B5",
      label: "LinkedIn",
      hoverColor: "#005582",
    },
    {
      icon: <FaYoutube size={20} />,
      url: "https://www.youtube.com/@Mokshasewa",
      color: "#FF0000",
      label: "YouTube",
      hoverColor: "#CC0000",
    },
  ];

  const phoneLink = {
    url: "tel:+919220147229",
    color: "#4CAF50",
    label: "Call Us 24/7",
    hoverColor: "#3D8B40",
  };

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-50 hidden md:block">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-auto">
          <div className="flex flex-col gap-3">
            <div className="group relative">
              <Link
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="px-1 py-5 rounded-r-lg flex flex-col items-center justify-center gap-2 shadow-xl border-l-0 border border-[#8B6A3E]/20 bg-gradient-to-r from-[#8B6A3E] to-[#5A3E2B] hover:from-[#5A3E2B] hover:to-[#8B6A3E]">
                  <FaEnvelope size={14} className="text-white" />
                  <span
                    className="font-semibold text-[16px] tracking-wide text-white"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                    }}
                  >
                    ENQUIRY
                  </span>
                </div>
              </Link>

              <div className="pointer-events-none absolute left-full top-1/2 ml-2 -translate-y-1/2 whitespace-nowrap rounded bg-[#2C1810] px-3 py-1.5 text-[16px] text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                Go to contact page
              </div>
            </div>

            <div className="group relative">
              <a
                href="tel:+919310219283"
                className="block"
              >
                <div className="px-1 py-7 rounded-r-lg flex flex-col items-center justify-center gap-2 shadow-xl border-l-0 border border-red-500/20 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800">
                  <FaPhone size={14} className="text-white" />
                  <span
                    className="font-semibold text-[16px] tracking-wide text-white"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                    }}
                  >
                    EMERGENCY
                  </span>
                </div>
              </a>
              {/* Tooltip */}
              <div className="pointer-events-none absolute left-full top-1/2 ml-2 -translate-y-1/2 whitespace-nowrap rounded bg-red-600 px-3 py-1.5 text-[16px] text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                24/7 Emergency Support
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Social Icons */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-auto">
          <div className="flex flex-col gap-3 items-end">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group relative flex min-h-11 min-w-11 items-center justify-end"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-all duration-300 ease-out hover:w-[115px] hover:justify-between hover:px-3 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
                  style={{ backgroundColor: social.color }}
                >
                  <span
                    className="max-w-0 overflow-hidden whitespace-nowrap text-[16px] font-semibold tracking-wide uppercase opacity-0 transition-all duration-300 group-hover:max-w-[70px] group-hover:opacity-100 text-white"
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

        {/* Bottom Left - WhatsApp */}
        <div className="absolute left-4 bottom-4 pointer-events-auto">
          <a
            href={whatsappLink.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message Moksha Sewa on WhatsApp"
            className="group relative flex min-h-12 min-w-12 items-center justify-start"
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-all duration-300 ease-out hover:w-[135px] hover:justify-between hover:px-4 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
              style={{ backgroundColor: whatsappLink.color }}
            >
              <span className="shrink-0 transition-transform duration-300 group-hover:scale-110 text-white">
                <FaWhatsapp size={22} />
              </span>
              <span className="max-w-0 overflow-hidden whitespace-nowrap text-[16px] font-semibold tracking-wide uppercase opacity-0 transition-all duration-300 group-hover:max-w-[80px] group-hover:opacity-100 text-white text-right">
                {whatsappLink.label}
              </span>
            </div>
          </a>
        </div>

        {/* Bottom Right - Phone */}
        <div className="absolute right-4 bottom-4 pointer-events-auto">
          <a
            href={phoneLink.url}
            aria-label={phoneLink.label}
            className="group relative flex min-h-12 min-w-12 items-center justify-end"
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-all duration-300 ease-out hover:w-[135px] hover:justify-between hover:px-4 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
              style={{ backgroundColor: phoneLink.color }}
            >
              <span className="max-w-0 overflow-hidden whitespace-nowrap text-[16px] font-semibold tracking-wide uppercase opacity-0 transition-all duration-300 group-hover:max-w-[90px] group-hover:opacity-100 text-white">
                {phoneLink.label}
              </span>
              <span className="shrink-0 transition-transform duration-300 group-hover:scale-110 text-white">
                <FaPhone size={19} />
              </span>
            </div>
          </a>
        </div>

      </div>

      {/* Mobile View - Bottom Bar */}
      <div className="hidden">
        <div className="flex items-center justify-around py-2 px-1">
          {/* Enquiry */}
          <Link
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact Moksha Sewa"
            className="flex min-h-11 min-w-11 flex-col items-center gap-1 group"
          >
            <div className="w-10 h-10 rounded-full bg-[#8B6A3E]/10 flex items-center justify-center group-hover:bg-[#8B6A3E] group-hover:text-white">
              <FaEnvelope
                size={16}
                className="text-[#8B6A3E] group-hover:text-white"
              />
            </div>
            <span className="text-[16px] font-medium text-[#5A3E2B]">
              ENQUIRY
            </span>
          </Link>

          {/* Emergency */}
          <a
            href="tel:+919310219283"
            aria-label="Call Moksha Sewa emergency support"
            className="flex min-h-11 min-w-11 flex-col items-center gap-1 group"
          >
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center group-hover:bg-red-600">
              <FaPhone
                size={16}
                className="text-red-600 group-hover:text-white"
              />
            </div>
            <span className="text-[16px] font-medium text-red-600">
              EMERGENCY
            </span>
          </a>

          {/* WhatsApp */}
          <a
            href={whatsappLink.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message Moksha Sewa on WhatsApp"
            className="flex min-h-11 min-w-11 flex-col items-center gap-1 group"
          >
            <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center group-hover:bg-[#25D366]">
              <FaWhatsapp
                size={16}
                className="text-[#25D366] group-hover:text-white"
              />
            </div>
            <span className="text-[16px] font-medium text-[#16823E]">
              WHATSAPP
            </span>
          </a>

          {/* Social Menu Trigger */}
          <div className="group relative">
            <button className="flex min-h-11 min-w-11 flex-col items-center gap-1" aria-label="Open social links">
              <div className="w-10 h-10 rounded-full bg-[#8B6A3E] flex items-center justify-center">
                <PiFlowerLotus size={16} className="text-white" />
              </div>
              <span className="text-[16px] font-medium text-[#8B6A3E]">
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
                  >
                    <div style={{ color: social.color }}>{social.icon}</div>
                    <span className="text-[16px] text-[#5A3E2B]">
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
