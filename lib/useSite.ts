"use client";

/**
 * Moksha Sewa's contact details as the chat window shows them (the 24×7 helpline, e-mail and WhatsApp). The chatbot's own
 * helpline (admin → Chatbot Manager) takes precedence in the chat; these are the built-in defaults.
 */
const PHONE = "+91 92201 47229";
const WHATSAPP = "919220147229";
const WHATSAPP_MESSAGE = "Hello Moksha Sewa, I need assistance.";

export function useSiteContact() {
  return {
    name: "Moksha Sewa",
    tagline: "Dignified last rites for every family",
    phone: PHONE,
    phoneHref: `tel:+${WHATSAPP}`,
    email: "info@mokshasewa.org",
    whatsappHref: `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  };
}
