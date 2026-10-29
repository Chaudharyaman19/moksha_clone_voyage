import { Flower2, HandHeart, Headset, LayoutGrid, Search, Siren, Users, type LucideIcon } from "lucide-react";
import type { Lang } from "./chatGuards";

export type Localized = Record<Lang, string>;

export const CONTACT = {
  phone: "+919220147229",
  phoneLabel: "+91 92201 47229",
  whatsapp: "919220147229",
  support: "+91 98183 53841",
  email: "info@mokshasewa.org",
};

const ELIGIBILITY: Localized = {
  en: "Our services are for eligible families, verified needy cases and legally authorised unclaimed cases. Our team confirms eligibility.",
  hi: "हमारी सेवाएँ पात्र परिवारों, सत्यापित ज़रूरतमंद मामलों और कानूनी रूप से अधिकृत लावारिस मामलों के लिए हैं। पात्रता की पुष्टि हमारी टीम करती है।",
};

const withEligibility = (text: Localized): Localized => ({
  en: `${text.en}\n\n${ELIGIBILITY.en}`,
  hi: `${text.hi}\n\n${ELIGIBILITY.hi}`,
});

/**
 * A scripted answer. It is the visitor's bubble (`label`), then the reply (`content`) with an
 * optional link button, call / WhatsApp buttons, the callback form and follow-up pills (`next`).
 */
export type Step = {
  label: Localized;
  content: Localized;
  link?: { label: Localized; href: string };
  contact?: boolean;
  callback?: boolean;
  next?: string[];
};

export const STEPS: Record<string, Step> = {
  help: {
    label: { en: "Request Help", hi: "सहायता का अनुरोध" },
    content: {
      en: "We are sorry for your loss, and we are here with you. Our helpline is open 24x7 for Delhi, Ghaziabad and Noida.\n\nYou can call or WhatsApp us right now, or send a help request online.\n\n" + ELIGIBILITY.en,
      hi: "आपके दुःख में हम आपके साथ हैं। दिल्ली, गाज़ियाबाद और नोएडा के लिए हमारी हेल्पलाइन 24x7 चालू है।\n\nआप अभी हमें कॉल या WhatsApp कर सकते हैं, या ऑनलाइन सहायता का अनुरोध भेज सकते हैं।\n\n" + ELIGIBILITY.hi,
    },
    link: { label: { en: "Request Help Online", hi: "ऑनलाइन सहायता माँगें" }, href: "/request-help" },
    contact: true,
    next: ["services", "track"],
  },
  services: {
    label: { en: "Our Services", hi: "हमारी सेवाएँ" },
    content: withEligibility({
      en: "Moksha Sewa supports families with dignified last rites in Delhi, Ghaziabad and Noida. Choose a service to know more.",
      hi: "मोक्ष सेवा दिल्ली, गाज़ियाबाद और नोएडा में परिवारों को सम्मानजनक अंतिम संस्कार में सहयोग देती है। अधिक जानने के लिए कोई सेवा चुनें।",
    }),
    link: { label: { en: "View All Services", hi: "सभी सेवाएँ देखें" }, href: "/services" },
    next: ["ambulance", "hearse", "pandit", "prayer", "samagri", "decoration", "relatives", "family"],
  },
  ambulance: {
    label: { en: "Ambulance / Mortuary Van", hi: "एम्बुलेंस / मोर्चरी वैन" },
    content: withEligibility({
      en: "We help families with an ambulance or mortuary van to move the body with dignity.",
      hi: "हम परिवारों को सम्मान के साथ पार्थिव शरीर ले जाने के लिए एम्बुलेंस या मोर्चरी वैन की सहायता देते हैं।",
    }),
    link: { label: { en: "Ambulance Service", hi: "एम्बुलेंस सेवा" }, href: "/ambulanceservices" },
    next: ["help", "services"],
  },
  hearse: {
    label: { en: "Hearse Van (Shav Vahan)", hi: "शव वाहन" },
    content: withEligibility({
      en: "A hearse van (shav vahan) to carry the body to the cremation ground or burial place.",
      hi: "पार्थिव शरीर को श्मशान या कब्रिस्तान तक ले जाने के लिए शव वाहन।",
    }),
    link: { label: { en: "Hearse Van Service", hi: "शव वाहन सेवा" }, href: "/harsevanservices" },
    next: ["help", "services"],
  },
  pandit: {
    label: { en: "Pandit Ji", hi: "पंडित जी" },
    content: withEligibility({
      en: "A Pandit ji to perform the last rites with the proper rituals.",
      hi: "विधि-विधान से अंतिम संस्कार कराने के लिए पंडित जी।",
    }),
    link: { label: { en: "Pandit Ji Service", hi: "पंडित जी सेवा" }, href: "/panditservices" },
    next: ["help", "services"],
  },
  prayer: {
    label: { en: "Prayer Hall & Ground Support", hi: "प्रार्थना हॉल और ग्राउंड सहयोग" },
    content: withEligibility({
      en: "A prayer hall and ground support, so the family can bid farewell in peace.",
      hi: "प्रार्थना हॉल और ग्राउंड सहयोग, ताकि परिवार शांति से अंतिम विदाई दे सके।",
    }),
    link: { label: { en: "Prayer Hall Service", hi: "प्रार्थना हॉल सेवा" }, href: "/prayerhallservices" },
    next: ["help", "services"],
  },
  samagri: {
    label: { en: "Funeral Samagri", hi: "अंतिम संस्कार सामग्री" },
    content: withEligibility({
      en: "Funeral samagri: wood, kafan, flowers, ghee and incense.",
      hi: "अंतिम संस्कार सामग्री: लकड़ी, कफ़न, फूल, घी और धूप।",
    }),
    link: { label: { en: "Funeral Samagri", hi: "अंतिम संस्कार सामग्री" }, href: "/furalservices" },
    next: ["help", "services"],
  },
  decoration: {
    label: { en: "Funeral Decoration", hi: "अंतिम यात्रा सजावट" },
    content: withEligibility({
      en: "Respectful funeral decoration for the final journey.",
      hi: "अंतिम यात्रा के लिए सम्मानजनक सजावट।",
    }),
    link: { label: { en: "Funeral Decoration", hi: "अंतिम यात्रा सजावट" }, href: "/furaldecoration" },
    next: ["help", "services"],
  },
  relatives: {
    label: { en: "Calling Relatives", hi: "रिश्तेदारों को सूचना" },
    content: withEligibility({
      en: "We can help inform relatives, so the family does not have to do it alone.",
      hi: "हम रिश्तेदारों को सूचना देने में मदद करते हैं, ताकि परिवार को यह अकेले न करना पड़े।",
    }),
    link: { label: { en: "Calling Relatives", hi: "रिश्तेदारों को सूचना" }, href: "/callingrelativesservices" },
    next: ["help", "services"],
  },
  family: {
    label: { en: "Family Support After Last Rites", hi: "अंतिम संस्कार के बाद परिवार सहयोग" },
    content: withEligibility({
      en: "Support for the family after the last rites are completed.",
      hi: "अंतिम संस्कार पूरा होने के बाद परिवार के लिए सहयोग।",
    }),
    link: { label: { en: "Family Support", hi: "परिवार सहयोग" }, href: "/specialservices" },
    next: ["help", "services"],
  },
  unclaimed: {
    label: { en: "Unclaimed Body (Lawaris Laash) Sewa", hi: "लावारिस लाश सेवा" },
    content: {
      en: "For legally authorised unclaimed bodies, we perform dignified last rites after the police and hospital formalities are completed.\n\nInstitutions such as hospitals and organisations can also partner with us.",
      hi: "कानूनी रूप से अधिकृत लावारिस शवों का अंतिम संस्कार, पुलिस और अस्पताल की औपचारिकताएँ पूरी होने के बाद, हम सम्मान के साथ करते हैं।\n\nअस्पताल और संस्थाएँ भी हमारे साथ जुड़ सकती हैं।",
    },
    link: { label: { en: "Unclaimed Body Sewa", hi: "लावारिस लाश सेवा" }, href: "/unclaimed-body-sewa" },
    next: ["partner", "team"],
  },
  partner: {
    label: { en: "Partner With Us", hi: "हमारे साथ जुड़ें" },
    content: {
      en: "Institutions can partner with Moksha Sewa for unclaimed body sewa. Please see the partnership page.",
      hi: "संस्थाएँ लावारिस लाश सेवा के लिए मोक्ष सेवा के साथ जुड़ सकती हैं। कृपया साझेदारी पेज देखें।",
    },
    link: { label: { en: "Partnership", hi: "साझेदारी" }, href: "/partnership" },
    next: ["unclaimed", "team"],
  },
  donate: {
    label: { en: "Donate", hi: "दान करें" },
    content: {
      en: "Your donation helps fund shav vahan, funeral samagri and last rites for families in need.\n\nPayment is secure, and you receive a receipt.",
      hi: "आपका दान ज़रूरतमंद परिवारों के लिए शव वाहन, अंतिम संस्कार सामग्री और अंतिम संस्कार में सहयोग करता है।\n\nभुगतान सुरक्षित है और आपको रसीद मिलती है।",
    },
    link: { label: { en: "Donate Now", hi: "अभी दान करें" }, href: "/donation" },
    next: ["volunteer", "team"],
  },
  volunteer: {
    label: { en: "Volunteer", hi: "स्वयंसेवक बनें" },
    content: {
      en: "You can serve as a Moksha Sewa volunteer. Training is provided.",
      hi: "आप मोक्ष सेवा के स्वयंसेवक बनकर सेवा कर सकते हैं। प्रशिक्षण दिया जाता है।",
    },
    link: { label: { en: "Register as Volunteer", hi: "स्वयंसेवक पंजीकरण" }, href: "/volunteer/register" },
    next: ["csr", "careers"],
  },
  csr: {
    label: { en: "CSR", hi: "सीएसआर" },
    content: {
      en: "Companies can support Moksha Sewa through CSR. Please see the CSR page.",
      hi: "कंपनियाँ सीएसआर के माध्यम से मोक्ष सेवा का सहयोग कर सकती हैं। कृपया सीएसआर पेज देखें।",
    },
    link: { label: { en: "CSR", hi: "सीएसआर" }, href: "/csr" },
    next: ["volunteer", "careers"],
  },
  careers: {
    label: { en: "Careers", hi: "करियर" },
    content: {
      en: "Interested in working with us? Please see the current openings.",
      hi: "हमारे साथ काम करना चाहते हैं? कृपया वर्तमान अवसर देखें।",
    },
    link: { label: { en: "Careers", hi: "करियर" }, href: "/careers" },
    next: ["volunteer", "csr"],
  },
  track: {
    label: { en: "Track a Request", hi: "अनुरोध ट्रैक करें" },
    content: {
      en: "You can check the status of your request on the tracking page.",
      hi: "आप ट्रैकिंग पेज पर अपने अनुरोध की स्थिति देख सकते हैं।",
    },
    link: { label: { en: "Track Request", hi: "अनुरोध ट्रैक करें" }, href: "/track" },
    next: ["help", "team"],
  },
  team: {
    label: { en: "Talk to the Team", hi: "टीम से बात करें" },
    content: {
      en: `Our team is available 24x7 on ${CONTACT.phoneLabel}. You can call or WhatsApp us, or ask for a callback.\n\nSupport: ${CONTACT.support}\nEmail: ${CONTACT.email}`,
      hi: `हमारी टीम ${CONTACT.phoneLabel} पर 24x7 उपलब्ध है। आप कॉल या WhatsApp कर सकते हैं, या कॉलबैक माँग सकते हैं।\n\nसपोर्ट: ${CONTACT.support}\nईमेल: ${CONTACT.email}`,
    },
    contact: true,
    next: ["callback"],
  },
  callback: {
    label: { en: "Request a Callback", hi: "कॉलबैक का अनुरोध" },
    content: {
      en: "Please share your name and mobile number, and our team will call you back.",
      hi: "कृपया अपना नाम और मोबाइल नंबर बताएँ, हमारी टीम आपको वापस कॉल करेगी।",
    },
    callback: true,
  },
};

/** Main-menu cards, in order (the "Talk to the Team" button sits under them) */
export const TOPICS: { id: string; icon: LucideIcon }[] = [
  { id: "help", icon: Siren },
  { id: "services", icon: LayoutGrid },
  { id: "unclaimed", icon: Flower2 },
  { id: "donate", icon: HandHeart },
  { id: "volunteer", icon: Users },
  { id: "track", icon: Search },
];
export const TEAM = { id: "team", icon: Headset };

export const TEXT = {
  en: {
    subtitle: "Moksha Sewa Assistant",
    greeting: "Namaste! 🙏\nHow can I help you today?",
    greetingName: (name: string) => `Namaste, ${name}! 🙏\nHow can I help you today?`,
    intro: (bot: string) => `Namaste! 🙏\nI'm ${bot}, here to help you.`,
    askName: "May I know your name?",
    namePh: "Type your name...",
    genericError: "Something went wrong. Please try again.",
    welcomeBackName: (name: string) => `Welcome back, ${name}! 🙏\nYour earlier chat is above. How can I help you today?`,
    earlierChat: (date: string) => `Earlier chat · ${date}`,
    today: "Today",
    placeholder: "Type your question...",
    typing: (bot: string) => `${bot} is typing...`,
    footer: "Automated assistant • Details only for follow-up",
    footerShort: "Automated assistant",
    mainMenu: "Main Menu",
    menuPrompt: "What else can I help you with?",
    expired: "The session has ended. Please tell me your name to continue.",
    fallback: `Sorry, I can't reply right now. Please call or WhatsApp us on ${CONTACT.phoneLabel} (24x7).`,
    call: "Call 24x7",
    whatsapp: "WhatsApp",
    whatsappText: "Namaste, I need help from Moksha Sewa.",
    chatEnded: "Chat ended",
    endedThanks: "Thank you for connecting with Moksha Sewa.",
    callbackThanks: "Thank you. Our team will call you back soon.",
    endedBye: "Namaste! 🙏",
    helpful: "Was this chat helpful?",
    yes: "Yes",
    no: "No",
    feedbackOptional: "Feedback is optional.",
    feedbackThanks: "Thanks for your feedback!",
    newChat: "Start a New Chat",
    closeChat: "Close Chat",
    endChat: "End Chat",
    minimize: "Minimize chat",
    close: "Close chat",
    back: "Back",
    send: "Send message",
    inputLabel: "Type your message",
    language: "Language",
    detailsFor: "To help you with",
    detailsForEnd: ", please share your details.",
    detailsGeneric: "Please share your details to continue the chat.",
    safe: "Your details are kept safe with us.",
    sent: "Sent",
  },
  hi: {
    subtitle: "मोक्ष सेवा सहायक",
    greeting: "नमस्ते! 🙏\nमैं आपकी क्या सहायता कर सकता हूँ?",
    greetingName: (name: string) => `नमस्ते, ${name}! 🙏\nमैं आपकी क्या सहायता कर सकता हूँ?`,
    intro: (bot: string) => `नमस्ते! 🙏\nमैं ${bot} हूँ, आपकी सहायता के लिए।`,
    askName: "क्या मैं आपका नाम जान सकता हूँ?",
    namePh: "अपना नाम लिखें...",
    genericError: "कुछ गड़बड़ हो गई। कृपया दोबारा कोशिश करें।",
    welcomeBackName: (name: string) => `वापसी पर स्वागत है, ${name}! 🙏\nआपकी पिछली चैट ऊपर है। मैं आपकी क्या सहायता कर सकता हूँ?`,
    earlierChat: (date: string) => `पिछली चैट · ${date}`,
    today: "आज",
    placeholder: "अपना प्रश्न लिखें...",
    typing: (bot: string) => `${bot} लिख रहा है...`,
    footer: "स्वचालित सहायक • विवरण केवल फ़ॉलो-अप के लिए",
    footerShort: "स्वचालित सहायक",
    mainMenu: "मुख्य मेनू",
    menuPrompt: "और मैं आपकी क्या सहायता कर सकता हूँ?",
    expired: "सेशन समाप्त हो गया। जारी रखने के लिए कृपया अपना नाम बताएँ।",
    fallback: `क्षमा करें, अभी उत्तर नहीं दे पा रहा हूँ। कृपया ${CONTACT.phoneLabel} पर कॉल या WhatsApp करें (24x7)।`,
    call: "24x7 कॉल करें",
    whatsapp: "WhatsApp",
    whatsappText: "नमस्ते, मुझे मोक्ष सेवा से सहायता चाहिए।",
    chatEnded: "चैट समाप्त",
    endedThanks: "मोक्ष सेवा से जुड़ने के लिए धन्यवाद।",
    callbackThanks: "धन्यवाद। हमारी टीम जल्द ही आपको कॉल करेगी।",
    endedBye: "नमस्ते! 🙏",
    helpful: "क्या यह चैट उपयोगी रही?",
    yes: "हाँ",
    no: "नहीं",
    feedbackOptional: "फ़ीडबैक देना वैकल्पिक है।",
    feedbackThanks: "आपके फ़ीडबैक के लिए धन्यवाद!",
    newChat: "नई चैट शुरू करें",
    closeChat: "चैट बंद करें",
    endChat: "चैट समाप्त करें",
    minimize: "चैट छोटी करें",
    close: "चैट बंद करें",
    back: "वापस",
    send: "संदेश भेजें",
    inputLabel: "अपना संदेश लिखें",
    language: "भाषा",
    detailsFor: "आपकी सहायता के लिए",
    detailsForEnd: " कृपया अपना विवरण साझा करें।",
    detailsGeneric: "चैट जारी रखने के लिए कृपया अपना विवरण साझा करें।",
    safe: "आपका विवरण हमारे पास सुरक्षित है।",
    sent: "भेजा गया",
  },
} as const;
