"use client";

import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type FormEvent, type ReactNode, type RefObject } from "react";
import Image from "next/image";
import Link from "next/link";

import { isAbusive } from "@/lib/chatGuards";
import { chatFont } from "./chatFont";
import { canCall, openCall, openPipelineCall, type Call } from "./chatCall";
import { toRoman } from "./roman";
import CallMeCard from "./CallMeCard";
import { useSiteContact } from "@/lib/useSite";

/* Aarohi ("Aapki Moksha Saathi"), the website's chat assistant: Design House's chat window in Moksha Sewa's
   colours. Her lines follow the approved script (Aarohi_Final_Chatbot_Script_and_Guidelines.docx): "Namo Gange
   Namaskar", then the name and how the visitor likes to be addressed ("Vijay ji"), except in an urgent case, which is
   answered at once. The conversation lives on the backend (backend/src/modules/chat): Aarohi answers from Moksha
   Sewa's services (OpenAI, streamed while she writes) and every chat is saved for the team (admin → AI Chatbot).
   The admin's Chatbot Manager sets the name, welcome and quick buttons (GET /chat/config). */

const API = (process.env.NEXT_PUBLIC_API_URL || (process.env.NODE_ENV === "production" ? "https://api.mokshasewa.org/api/v1" : "http://localhost:5003/api/v1")).replace(/\/+$/, "");
// The pipeline call's WebSocket (Deepgram + OpenAI + Sarvam on the backend), with its one-time token
const callSocketUrl = (token: string) => {
  const url = new URL(`${API}/chat/call/ws`, window.location.href);
  url.protocol = url.protocol === "https:" ? "wss:" : "ws:";
  url.searchParams.set("token", token);
  return url.toString();
};
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://mokshasewa.org").replace(/\/+$/, "");

type Lang = "en" | "hi";

const COPY = {
  en: {
    subtitle: "Your Moksha Saathi",
    placeholder: "Type your message...",
    namePlaceholder: "Type your name...",
    blockedPlaceholder: "This chat is blocked",
    blockedNote: "Chat blocked for offensive language",
    blockedOpensIn: "It opens again in",
    abuseHint: "Please avoid offensive words. Sending this counts as a warning.",
    // Said (and shown) after each abusive message, by stage (Aarohi's manual): a polite request, a warning, the final
    // warning; the next one closes the chat
    abuseWarning: (n: number, name: string) =>
      named(n <= 1 ? `⚠️ ${name} Ji, may I make a small request? Please avoid using such words. We can have a pleasant and respectful conversation, can't we? Please tell me how I can help you.` : n === 2 ? `⚠️ ${name} Ji, I just made a polite request to avoid such language. If something is bothering you, please feel free to tell me. I'm here to help. However, if this behaviour continues, I may have to bring it to the attention of our senior team. I hope you understand.` : `⚠️ ${name} Ji, I would once again respectfully request you to maintain appropriate and respectful communication. I sincerely hope our conversation does not lead to a formal complaint or further action. However, if this behaviour continues, I will have to suspend your chat access for 24 hours and report this conversation to our senior team. I hope you understand and that such action will not be necessary.`, name),
    // Said (and shown) when the chat closes for abusive words; permanent: the second time, until the team opens it
    abuseBlocked: (permanent: boolean, name: string) => named(permanent ? `${name} Ji, I\'m sorry that despite my repeated requests, you have used such language again. Your chat access has now been suspended (only our team can restore it), and the details of this conversation have been forwarded to our senior team for review. For urgent service assistance, you may still contact our official helpline. Take care. Namo Gange Namaskar.` : `${name} Ji, I\'m sorry that despite my repeated requests, you have continued to use inappropriate language. Your chat access has now been suspended for 24 hours, and the details of this conversation have been forwarded to our senior team for review. I hope our next conversation will be pleasant and respectful. For urgent service assistance, you may still contact our official helpline. Take care. Namo Gange Namaskar.`, name),
    offline: (phone: string) => `Sorry, the chat isn't available right now. Please call or WhatsApp ${phone} (24×7).`,
    tooFast: (phone: string) => `You're sending messages too quickly. Please wait a minute, or call ${phone} (24×7).`,
    footer: "Your details are secure and private.",
    privacy: "Chats and IP address are saved so our team can follow up.",
    mantra: "ॐ शान्तिः शान्तिः शान्तिः",
    voiceOn: "Voice replies on",
    voiceOff: "Voice replies off",
    speaking: "speaking…",
    micStart: "Speak your message",
    micStop: "Stop and send",
    listening: "Listening… tap the mic to send",
    transcribing: "Understanding what you said…",
    micDenied: "Microphone access is blocked. Please allow the microphone in your browser, or type your message here.",
    micFailed: "Sorry, I couldn't hear that clearly. Please try again, or type your message.",
    blockedByTeam: "For anything genuine, please call our 24×7 helpline.",
    callStart: (bot: string) => `Talk to ${bot}`,
    callEnd: "End call",
    callHold: "Hold",
    callResume: "Resume",
    onHold: "Call on hold",
    onHoldHint: (min: number) => `Call on hold · ends in ${min} min unless you tap Resume`,
    holdNote: "Call on hold, tap ▶ to carry on",
    holdResume: "Resume call",
    callMute: "Mute your mic",
    callUnmute: "Unmute your mic",
    inCall: "On call · listening",
    connecting: "Connecting the call…",
    listeningCall: "I'm listening, just speak… or type here",
    interruptHint: "Speak any time, I'll stop and listen",
    muted: "Your mic is muted",
    noise: "Noise cancellation",
    noiseOnHint: "On: background noise and voices further away are filtered out",
    noiseOffHint: "Off: your mic is heard as it is",
    micNotFound: "No microphone was found on this device. You can type here.",
    callFailed: "Sorry, the voice call couldn't connect. You can type here.",
    callDropped: "The call ended. Tap the mic to talk again.",
    callIdle: "I ended the call because it was quiet for a while. Tap the mic to talk again.",
    // Said aloud when nothing has been heard for a while, before the call goes on hold
    stillThere: "Are you still there? Please go ahead, I'm listening.",
    callHoldEnded: (min: number) => `The call ended after ${min} minutes on hold. You can carry on typing here, or tap the mic to talk again.`,
    callEnding: "The call reached its time limit. You can carry on by typing here, or tap the mic to talk again.",
    callEnded: "Call ended. You can carry on typing here.",
    teamTitle: "Moksha Team",
    teamStatus: "Our team is chatting with you",
    teamName: "Moksha Sewa Team",
    teamJoined: "Moksha Sewa team joined the chat",
    teamLeft: (bot: string) => `Our team left the chat. ${bot} will reply from here.`,
    teamOnCall: "Our team is chatting with you here. Please type your message.",
    openFile: "Open file",
    online: "Online",
    typing: "typing…",
    soundOn: "Notification sound on",
    soundOff: "Notification sound off",
    chatEnded: "This chat has ended.",
    resume: "Resume chat",
    greeting: "Namo Gange Namaskar 🙏",
    intro: (bot: string) => `I'm ${bot}. I welcome you on behalf of Moksha Sewa.`,
    askName: "What may I call you?",
    nameFirst: "Of course, I'll tell you. First, what may I call you?",
    badName: "Sorry, I couldn't catch your name clearly. Could you tell me once more?",
    // The name is confirmed as they like to be called ("Vijay Sharma" → "May I call you Vijay ji?")
    confirmSalutation: (first: string) => `May I call you ${first} ji?`,
    askSalutation: "What would you like me to call you?",
    noName: "No problem. You can ask your question.",
    welcome: (name: string) => (name ? `${name} ji, please tell me, how can I help?` : "Please tell me, how can I help?"),
    welcomeBack: (name: string) => `Namo Gange Namaskar, ${name} ji. Welcome back. What can I help you with today?`,
    thanks: (name: string) => `Thank you, ${name} ji.`,
    team: (phone: string) =>
      `Please type your 10-digit mobile number here and our team will call you back shortly. For anything urgent, call or WhatsApp our 24×7 helpline ${phone}.`,
    openPage: "Open page",
    // Her intro, as a video call over the whole chat window
    introSkip: "Skip",
    // After asking their name, on the video call: she waits for it
    introListening: "Go ahead, I'm listening…",
    introSound: "Tap to hear her",
    introMute: "Mute her voice",
    introUnmute: "Turn her voice on",
  },
  // Hindi as people type it in chats (Roman letters), like Aarohi's own Hindi replies
  hi: {
    subtitle: "आपकी मोक्ष साथी",
    placeholder: "यहाँ लिखिए...",
    namePlaceholder: "अपना नाम लिखिए...",
    blockedPlaceholder: "यह चैट ब्लॉक है",
    blockedNote: "गलत भाषा की वजह से चैट ब्लॉक है",
    blockedOpensIn: "चैट फिर से शुरू होगी",
    abuseHint: "कृपया गलत शब्द इस्तेमाल न करें। भेजने पर आपको वॉर्निंग मिलेगी।",
    abuseWarning: (n: number, name: string) =>
      named(n <= 1 ? `⚠️ ${name} जी, आपसे एक छोटा-सा अनुरोध है। कृपया ऐसे शब्दों का इस्तेमाल न करें। हम अच्छे और सम्मानजनक तरीके से भी बात कर सकते हैं ना? बताइए, मैं आपकी क्या मदद कर सकती हूँ?` : n === 2 ? `⚠️ ${name} जी, मैंने अभी आपसे बहुत विनम्रता से अनुरोध किया था कि इस तरह की भाषा का इस्तेमाल न करें। यदि आप किसी बात से परेशान हैं, तो बेझिझक मुझे बताइए। मैं आपकी सहायता करना चाहती हूँ। लेकिन यदि ऐसा व्यवहार जारी रहता है, तो मुझे इसकी जानकारी अपनी वरिष्ठ टीम को देनी पड़ सकती है। उम्मीद है, आप मेरी बात समझेंगे।` : `⚠️ ${name} जी, मैं आपसे एक बार फिर सम्मानपूर्वक अनुरोध करती हूँ कि कृपया बातचीत में मर्यादा बनाए रखें। मैं नहीं चाहती कि हमारी बातचीत किसी शिकायत या कार्रवाई तक पहुँचे। लेकिन यदि आप दोबारा इस तरह का व्यवहार करते हैं, तो मुझे आपकी चैट सुविधा 24 घंटे के लिए बंद करनी पड़ेगी और इसकी जानकारी हमारी वरिष्ठ टीम को देनी होगी। उम्मीद है, आप मेरी बात समझेंगे और ऐसी कार्रवाई की आवश्यकता नहीं पड़ेगी।`, name),
    abuseBlocked: (permanent: boolean, name: string) => named(permanent ? `${name} जी, मुझे खेद है कि मेरे बार-बार अनुरोध करने के बावजूद आपने फिर से इस तरह की भाषा का इस्तेमाल किया। आपकी चैट सुविधा अब बंद कर दी गई है (इसे अब हमारी टीम ही दोबारा शुरू कर सकती है) और इस बातचीत का विवरण हमारी वरिष्ठ टीम को समीक्षा के लिए भेज दिया गया है। किसी अत्यावश्यक सेवा के लिए आप हमारी आधिकारिक हेल्पलाइन से संपर्क कर सकते हैं। अपना ख्याल रखिएगा। नमो गंगे नमस्कार।` : `${name} जी, मुझे खेद है कि मेरे बार-बार अनुरोध करने के बावजूद आपने इस तरह की भाषा का इस्तेमाल जारी रखा। आपकी चैट सुविधा अब 24 घंटे के लिए बंद कर दी गई है और इस बातचीत का विवरण हमारी वरिष्ठ टीम को समीक्षा के लिए भेज दिया गया है। आशा है कि अगली बार हमारी बातचीत अच्छे और सम्मानजनक वातावरण में होगी। किसी अत्यावश्यक सेवा के लिए आप हमारी आधिकारिक हेल्पलाइन से संपर्क कर सकते हैं। अपना ख्याल रखिएगा। नमो गंगे नमस्कार।`, name),
    offline: (phone: string) => `माफ़ कीजिए, चैट अभी उपलब्ध नहीं है। कृपया ${phone} पर कॉल या व्हाट्सऐप करें (24×7)।`,
    tooFast: (phone: string) => `आप बहुत जल्दी मैसेज भेज रहे हैं। कृपया एक मिनट रुककर लिखिए, या ${phone} पर कॉल करें (24×7)।`,
    footer: "आपकी जानकारी सुरक्षित और निजी है।",
    privacy: "चैट और IP एड्रेस फ़ॉलो-अप के लिए सेव होते हैं।",
    mantra: "ॐ शान्तिः शान्तिः शान्तिः",
    voiceOn: "बोलकर जवाब चालू",
    voiceOff: "बोलकर जवाब बंद",
    speaking: "speaking…",
    micStart: "बोलकर लिखिए",
    micStop: "रोकिए और भेजिए",
    listening: "सुन रही हूँ… भेजने के लिए माइक दबाइए",
    transcribing: "समझ रही हूँ…",
    micDenied: "माइक्रोफ़ोन की अनुमति नहीं है। कृपया ब्राउज़र में माइक्रोफ़ोन चालू कीजिए, या यहाँ लिख दीजिए।",
    micFailed: "आपकी आवाज़ का यह हिस्सा साफ़ नहीं आया। क्या एक बार फिर कह सकते हैं, या लिख दीजिए।",
    blockedByTeam: "सच में कोई काम हो तो हमारी 24×7 हेल्पलाइन पर कॉल कीजिए।",
    callStart: (bot: string) => `${bot} से बात कीजिए`,
    callEnd: "End call",
    callHold: "Hold",
    callResume: "Resume",
    onHold: "Call on hold",
    onHoldHint: (min: number) => `कॉल होल्ड पर है · Resume न दबाने पर ${min} मिनट में बंद हो जाएगी`,
    holdNote: "कॉल होल्ड पर है, ▶ दबाकर जारी रखें",
    holdResume: "कॉल जारी रखें",
    callMute: "अपना माइक बंद कीजिए",
    callUnmute: "अपना माइक चालू कीजिए",
    inCall: "On call · listening",
    connecting: "Connecting the call…",
    listeningCall: "सुन रही हूँ, बस बोलिए… या यहाँ लिखिए",
    interruptHint: "कभी भी बोलिए, मैं रुककर सुनूँगी",
    muted: "आपका माइक बंद है",
    noise: "Noise cancellation",
    noiseOnHint: "चालू: आस-पास का शोर और दूर की आवाज़ें फ़िल्टर होती हैं",
    noiseOffHint: "बंद: आपका माइक जैसा है वैसा सुना जाता है",
    micNotFound: "इस डिवाइस पर माइक्रोफ़ोन नहीं मिला। आप यहाँ लिख सकते हैं।",
    callFailed: "माफ़ कीजिए, कॉल जुड़ नहीं पाई। आप यहाँ लिख सकते हैं।",
    callDropped: "कॉल बंद हो गई। बात करनी हो तो माइक दबाइए।",
    callIdle: "काफ़ी देर से कोई आवाज़ नहीं आई, इसलिए कॉल बंद कर दी। बात करनी हो तो माइक दबाइए।",
    stillThere: "जी, क्या आप लाइन पर हैं? आप बोलिए, मैं सुन रही हूँ।",
    callHoldEnded: (min: number) => `कॉल ${min} मिनट होल्ड पर रहने के बाद बंद हो गई। आप यहाँ लिखकर बात जारी रख सकते हैं, या माइक दबाकर फिर से बात कर सकते हैं।`,
    callEnding: "कॉल का समय पूरा हो गया। आगे यहाँ लिख सकते हैं, या माइक दबाकर फिर बात कर सकते हैं।",
    callEnded: "कॉल बंद हो गई। आप यहाँ लिखकर बात जारी रख सकते हैं।",
    teamTitle: "मोक्ष टीम",
    teamStatus: "हमारी टीम आपसे बात कर रही है",
    teamName: "मोक्ष सेवा टीम",
    teamJoined: "Moksha Sewa team joined the chat",
    teamLeft: (bot: string) => `हमारी टीम चैट से चली गई। अब ${bot} जवाब देंगी।`,
    teamOnCall: "हमारी टीम यहाँ आपसे बात कर रही है। कृपया अपना मैसेज लिखिए।",
    openFile: "फ़ाइल खोलिए",
    online: "ऑनलाइन",
    typing: "लिख रही हैं…",
    soundOn: "नोटिफ़िकेशन साउंड चालू",
    soundOff: "नोटिफ़िकेशन साउंड बंद",
    chatEnded: "यह चैट बंद हो गई है।",
    resume: "चैट फिर शुरू करें",
    greeting: "नमो गंगे नमस्कार 🙏",
    intro: (bot: string) => `मैं ${bot} हूँ। मोक्ष सेवा की ओर से आपका स्वागत करती हूँ।`,
    askName: "आपको किस नाम से बुलाऊँ?",
    nameFirst: "जी, मैं ज़रूर बताऊँगी। पहले बता दीजिए, आपको किस नाम से बुलाऊँ?",
    badName: "माफ़ कीजिए, आपका नाम साफ़ समझ नहीं आया। क्या एक बार फिर बताएँगे?",
    confirmSalutation: (first: string) => `क्या मैं आपको ${first} जी कहकर बुला सकती हूँ?`,
    askSalutation: "आपको किस नाम से बुलाना पसंद होगा?",
    noName: "कोई बात नहीं जी। आप अपना सवाल पूछ सकते हैं।",
    welcome: (name: string) => (name ? `${name} जी, बताइए, किस तरह मदद कर सकती हूँ?` : "बताइए, किस तरह मदद कर सकती हूँ?"),
    welcomeBack: (name: string) => `नमो गंगे नमस्कार, ${name} जी। आपका पुनः स्वागत है। आज किस बारे में सहायता चाहिए?`,
    thanks: (name: string) => `धन्यवाद, ${name} जी।`,
    team: (phone: string) =>
      `कृपया अपना 10 अंकों का मोबाइल नंबर यहाँ लिखिए, हमारी टीम आपको जल्दी कॉल करेगी। कुछ ज़रूरी हो तो हमारी 24×7 हेल्पलाइन ${phone} पर कॉल या व्हाट्सऐप करें।`,
    openPage: "पेज खोलिए",
    introSkip: "आगे बढ़ें",
    introListening: "बोलिए, मैं सुन रही हूँ…",
    introSound: "आवाज़ सुनने के लिए दबाएँ",
    introMute: "आवाज़ बंद करें",
    introUnmute: "आवाज़ चालू करें",
  },
};

/* ───────────────────────── Messages ───────────────────────── */

// Quick buttons under the welcome: "ask" goes to Aarohi as the visitor's question, "answer" is a reply the team
// wrote in the Chatbot Manager, "team" asks for a number to call back
type Chip =
  | { kind: "ask"; label: string }
  | { kind: "answer"; label: string; reply: string; options?: string[]; target?: string }
  | { kind: "team"; label: string };

interface Line {
  title?: string;
  text: string;
  chips?: Chip[];
  link?: { href: string; label: string };
}
// A photo or document the team sent in a live chat
interface ChatFile {
  href: string;
  label: string;
  type?: string;
  size?: number;
}
interface Message extends Line {
  id: number;
  // "agent": someone from the team who took the chat over in the admin (Chat Conversations)
  from: "bot" | "user" | "agent";
  by?: string; // agent: the team member
  event?: "joined" | "left"; // agent: the team joined or left (a note, not a bubble)
  files?: ChatFile[];
  at?: number; // when it appeared (shown under the bubble)
  live?: boolean; // Aarohi is still writing it (or, in a call, someone is still speaking)
  key?: string; // in a call: the conversation item this bubble shows
  pending?: boolean; // in a call: said in Hindi, waiting for its Hinglish text from the server
  callOffer?: { verified: boolean; last4: string }; // her offer of a call now: the "call me now / call back" card under it
}

/** What the admin's Chatbot Manager publishes for the website (GET /chat/config) */
interface ChatConfig {
  enabled: boolean;
  name: string;
  subtitle: string;
  launcher: string;
  avatar: string;
  messages: Partial<Record<Lang, { welcomeGreeting?: string; welcomeMessage?: string }>> | null;
  buttons: Array<{ label: string; hindi?: string; action: string; reply?: string; options?: string[]; target?: string }> | null;
  /** Admin → AI Training: the greeting the team saved ({name} = the visitor's name), null until then */
  greeting?: Record<Lang, { title: string; chat: string; again: string }> | null;
  /** Admin → AI Training → Contact details: the helpline the chat gives out */
  helpline?: string;
  /** Admin → Chatbot Settings: a call on hold ends after this many minutes */
  holdMinutes?: number;
  /** Admin → Chatbot Settings: the name in Devanagari, for the Hindi lines */
  nameHi?: string;
  /** Admin → Chatbot Settings: a call nobody talks in ends after this many seconds */
  callIdleSeconds?: number;
  /** Admin → Chatbot Settings: a call nobody talks in goes on hold after this many seconds (0 = never by itself) */
  callHoldAfterSeconds?: number;
  /** Admin → Chatbot Settings: the chat window's background — "default" (cream with the ghat artwork) or "white" */
  background?: "default" | "white";
}

// The suggestions from Aarohi's script ("Turant Sahayata · Sevaon Ki Jaankari · Parivar Ke Liye Sahayata"): shortcuts only,
// the visitor can always type or speak instead
const DEFAULT_CHIPS: Record<Lang, Chip[]> = {
  en: [
    { kind: "ask", label: "Immediate Help" },
    { kind: "ask", label: "About Our Services" },
    { kind: "ask", label: "Help for My Family" },
  ],
  hi: [
    { kind: "ask", label: "तुरंत सहायता" },
    { kind: "ask", label: "सेवाओं की जानकारी" },
    { kind: "ask", label: "परिवार के लिए सहायता" },
  ],
};

const BOT_NAME = "Aarohi";
const BOT_NAME_HI = "आरोही";
/** The chatbot's name (admin → Chatbot Settings) as the lines in this language write it */
const botNameFor = (config: { name?: string; nameHi?: string } | null, lang: Lang) =>
  lang === "hi" ? config?.nameHi || config?.name || BOT_NAME_HI : config?.name || BOT_NAME;
// The chat header's avatar picture (Aarohi's photograph), unless the Chatbot Manager uploaded another avatar
const AVATAR = "/images/chatbot/aarohi-avatar.png";
// The chat's artwork: the ghat at the bottom, distant temples top right, a faint mandala in the corner
const CHAT_BG = "/images/chatbot/bg.svg";
// Aarohi's intro (a 10-second video with her voice): in a video-call window, the first time the chat opens on a page
// The visitor asks her to speak louder ("zor se boliye", "awaaz badhaiye", "can you speak loudly?") or softer
const LOUDER = /(?:tez|tej|zor|jor|ऊँच|ऊंच|तेज़?|ज़ोर|जोर)\s*(?:se|से|awaaz|आवाज़?)?\s*(?:bol|बोल)|(?:aawaz|awaaz|awaz|aavaz|आवाज़?|volume|वॉल्यूम)\s*(?:thod[ai]\s*|थोड़[ाी]\s*)?(?:badha|badhao|badhaiye|tez|tej|unchi|बढ़ा|बढ़ाओ|बढ़ाइए|बढ़ाइये|तेज़?|ऊँची|ऊंची|up)|(?:sunai|सुनाई)\s*(?:nahi|nahin|नहीं)\s*(?:de|दे)|(?:kam|कम|dheemi|धीमी)\s*(?:sunai|सुनाई)|\b(?:louder|speak\s+(?:up|loud(?:ly|er)?)|can'?t\s+hear|cannot\s+hear|volume\s+up|turn\s+(?:it\s+)?up)\b/i;
const SOFTER = /(?:aawaz|awaaz|awaz|आवाज़?|volume|वॉल्यूम)\s*(?:thod[ai]\s*|थोड़[ाी]\s*)?(?:kam|कम|dheemi|धीमी|down)|\b(?:too\s+loud|speak\s+(?:softly|softer|quietly)|lower\s+(?:your\s+)?voice|volume\s+down|turn\s+(?:it\s+)?down)\b/i;

// Her video call when the chat opens (public/callbot.mp4, with its own voice): she thanks them and asks their name
const INTRO_VIDEO = "/callbot.mp4";
// Moksha Sewa has no intro video for Aarohi (her photograph is her avatar): the intro stays off
let introPlayed = true;
// What she says in it, each word with the second she starts saying it: captions on the video, then in the chat
const INTRO_WORDS: [string, number][] = [
  ["मुझसे", 1.2], ["बात", 1.68], ["करने", 2.0], ["के", 2.24], ["लिए", 2.48], ["धन्यवाद।", 2.72],
  ["आपको", 4.08], ["किस", 4.48], ["नाम", 4.8], ["से", 5.04], ["संबोधित", 5.2], ["करूँ?", 5.76],
];
const INTRO_TEXT = INTRO_WORDS.map(([word]) => word).join(" ");
// How long the video is (the call's clock stops there)
const INTRO_SECONDS = 7;
/* After asking their name she stays on the video call, held on this moment (smiling, eyes open, hands folded: the
   video's last frames are a blink), and listens; she goes back into her avatar only once she has heard their name
   (or they tap "आगे बढ़ें", or the call ends) */
const INTRO_LISTEN_AT = 6.6;
/** "0:07", "1:05" */
const callClock = (seconds: number) => `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;
// Her words by sentence, for the captions on the video (each sentence while she says it)
const INTRO_LINES = INTRO_WORDS.reduce<{ word: string; at: number; i: number }[][]>((lines, [word, at], i) => {
  const last = lines[lines.length - 1];
  if (!last || /[।?.!]$/.test(last[last.length - 1].word)) lines.push([]);
  lines[lines.length - 1].push({ word, at, i });
  return lines;
}, []);
/* The intro video fills the chat window like a video call. It grows out of her avatar (top left) and, once she has
   finished, goes back into it: a circle around her face that closes onto the avatar, her face landing in it. */
const INTRO_SIZE = { w: 1080, h: 1920 };
const INTRO_FOCUS_Y = 0.2; // object-position: her face stays in view when the window is shorter than the video
const INTRO_FACE = { x: 0.54, y: 0.235, w: 0.33 }; // her face in the video, as parts of its width / height

/** Where her avatar is in the chat window, and where (and how big) her face is in the video filling it */
const introGeometry = (box: HTMLElement, avatar: HTMLElement) => {
  let x = avatar.offsetWidth / 2;
  let y = avatar.offsetHeight / 2;
  for (let n: HTMLElement | null = avatar; n && n !== box.offsetParent; n = n.offsetParent as HTMLElement | null) {
    x += n.offsetLeft;
    y += n.offsetTop;
  }
  const W = box.offsetWidth;
  const H = box.offsetHeight;
  const k = Math.max(W / INTRO_SIZE.w, H / INTRO_SIZE.h);
  const faceX = (W - INTRO_SIZE.w * k) / 2 + INTRO_FACE.x * INTRO_SIZE.w * k;
  const faceY = (H - INTRO_SIZE.h * k) * INTRO_FOCUS_Y + INTRO_FACE.y * INTRO_SIZE.h * k;
  const r = avatar.offsetWidth / 2;
  // Her face, shrunk to fill the avatar's circle and moved onto it
  const s = (2.3 * r) / (INTRO_FACE.w * INTRO_SIZE.w * k);
  return {
    small: `circle(${r}px at ${x}px ${y}px)`,
    full: `circle(${Math.ceil(Math.hypot(Math.max(x, W - x), Math.max(y, H - y)))}px at ${x}px ${y}px)`,
    inAvatar: `translate(${x - faceX * s}px, ${y - faceY * s}px) scale(${s})`,
  };
};
const TEMPLE_TOP = "/images/chatbot/temple-top.svg";
const MANDALA = "/images/chatbot/mandala.svg";
const VOICE_KEY = "mv_chat_voice";
const NOISE_KEY = "mv_chat_noise";
const CALL_IDLE_MS = 120000; // a call ends itself after this long without anyone talking, unless admin → Chatbot Settings set another time
// Her goodbye cut off before its end (the visitor talked over it, or a noise did): the call waits this long for their words
const GOODBYE_CUT_WAIT_MS = 6000;
// Nobody has spoken for a minute: the call goes on hold by itself (sooner if admin → Chatbot Settings says so)
const AUTO_HOLD_MS = 60000;
const callIdleMs = (config: { callIdleSeconds?: number } | null) => {
  const n = Number(config?.callIdleSeconds);
  return Number.isFinite(n) && n >= 30 ? n * 1000 : CALL_IDLE_MS;
};
/* Nobody has spoken for 30 seconds: the call goes on hold (she asks once, halfway, whether they are still there), unless
   admin → Chatbot Settings set another time; 0 there = never by itself (as before: the minute above) */
const HOLD_AFTER_SECONDS = 30;
const holdAfterMs = (config: { callHoldAfterSeconds?: number } | null) => {
  const n = Number(config?.callHoldAfterSeconds);
  return (Number.isFinite(n) && n >= 0 && n <= 600 ? n : HOLD_AFTER_SECONDS) * 1000;
};
const HOLD_MINUTES = 3; // a call on hold ends after this long, unless admin → Chatbot Settings set another time
const holdMinutesOf = (config: { holdMinutes?: number } | null) => {
  const n = Number(config?.holdMinutes);
  return Number.isFinite(n) && n >= 1 && n <= 60 ? n : HOLD_MINUTES;
};
// Live chat: while the chat is open it asks this often whether the team wrote or took the chat over
const TEAM_CHECK_MS = 4000;
// The first check after the page loads shows only what the team wrote this recently (older ones come with the history)
const TEAM_RECENT_MS = 2 * 60 * 1000;
// A message as the server keeps it (POST /chat/start, /chat/resume)
type SavedMessage = { role: string; content: string; createdAt?: string; by?: string; event?: "joined" | "left"; files?: ChatFile[] };
type TeamUpdates = { agent: boolean; blocked?: boolean; gone?: boolean; serverTime: number; messages: Array<{ text: string; by?: string; event?: "joined" | "left"; files?: ChatFile[]; at: number }> };
const isImageFile = (file: ChatFile) => (file.type || "").startsWith("image/") || /\.(jpe?g|png|webp|gif)$/i.test(file.label || "");
// A cough, a click or chopped sound comes back from the transcriber as words of some other language, or with low
// confidence: never shown or answered (as in the Design House chat). Letters of the languages visitors speak are allowed.
const FOREIGN_LETTERS = new RegExp(
  "(?![\\p{Script=Latin}\\p{Script=Devanagari}\\p{Script=Arabic}\\p{Script=Gurmukhi}\\p{Script=Gujarati}\\p{Script=Bengali}\\p{Script=Tamil}\\p{Script=Telugu}\\p{Script=Kannada}\\p{Script=Malayalam}\\p{Script=Oriya}])\\p{L}",
  "u"
);
// Typed in answer to "talk or type?": the choice itself, not a message
const WANTS_TO_TYPE = /\b(likh\w*|type\w*|typing|text|chat)\b|लिख/i;
const WANTS_TO_TALK = /\b(talk|speak|voice|call|bol\w*|baat)\b|बोल|बात/i;
const LEAST_CONFIDENCE = -0.7; // the transcriber's average log-probability: real speech stays above this, noise below
const misheard = (text: string, logprobs?: Array<{ logprob: number }>) =>
  FOREIGN_LETTERS.test(text) || Boolean(logprobs?.length && logprobs.reduce((sum, w) => sum + w.logprob, 0) / logprobs.length < LEAST_CONFIDENCE);
const SESSION_KEY = "mv_chat_session";
const NAME_KEY = "mv_chat_name";
const SALUTATION_KEY = "mv_chat_salutation"; // how the visitor confirmed they like to be addressed ("Vijay" → "Vijay ji")
const MUTED_KEY = "mv_chat_muted";
const BLOCK_KEY = "mv_chat_block";
const STRIKES_TO_BLOCK = 4; // abusive messages before the chat blocks itself (three warnings first: Aarohi's manual)
const BLOCK_MS = 24 * 60 * 60 * 1000;
const MAX_NAME_ASKS = 3; // after this many tries the chat carries on without a name
const CHAT_END_AFTER_GOODBYE_MS = 10000; // the chat ends this long after the goodbye, unless the visitor carries on

interface CallEvent {
  type: string;
  item_id?: string;
  delta?: string;
  transcript?: string;
  text?: string; // pipeline.heard: what the visitor has said so far
  logprobs?: Array<{ logprob: number }>;
  item?: { id: string; type: string; role?: string; content?: Array<{ type: string }> };
  response?: { status?: string; output?: Array<{ type: string; name?: string; call_id?: string; arguments?: string }> };
  error?: { code?: string; message?: string };
  // pipeline.warned: her own warning for abusive words, counted on the server (the fourth closes the chat)
  blocked?: boolean;
  blockedFor?: number | null;
  said?: boolean;
}

/* ───────────────────────── Helpers ───────────────────────── */

/* A warning or closing line for abusive words with their name ("Vansh जी, …"); without one: "जी," left out */
const named = (line: string, name: string) =>
  name.trim() ? line : line.replace(/(^|:\s|⚠️\s)\s*(?:जी|ji),\s*/iu, "$1").replace(/^\s*/, "").replace(/(^|:\s|⚠️\s)(\p{Ll})/u, (_, a, c) => a + c.toUpperCase());

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const now = () => Date.now();

// localStorage can throw (private windows, blocked storage): the chat then just doesn't remember
const stored = (key: string) => {
  try {
    return localStorage.getItem(key) || "";
  } catch {
    return "";
  }
};
const store = (key: string, value: string) => {
  try {
    if (value) localStorage.setItem(key, value);
    else localStorage.removeItem(key);
  } catch {
    // not remembered
  }
};

const newSessionId = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `mv-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;

const readBlock = (): { strikes: number; until: number } => {
  try {
    const saved = JSON.parse(stored(BLOCK_KEY) || "{}");
    return { strikes: Number(saved.strikes) || 0, until: Number(saved.until) || 0 };
  } catch {
    return { strikes: 0, until: 0 };
  }
};
const blockedUntil = () => {
  const { until } = readBlock();
  return until > Date.now() ? until : 0;
};

// 86399000 → "23:59:59"
const countdown = (ms: number) => {
  const seconds = Math.max(0, Math.ceil(ms / 1000));
  return [Math.floor(seconds / 3600), Math.floor(seconds / 60) % 60, seconds % 60].map((n) => String(n).padStart(2, "0")).join(":");
};

// "11:30 am" under a bubble
const timeOf = (at: number) => new Date(at).toLocaleTimeString("en-IN", { hour: "numeric", minute: "2-digit", hour12: true });

/* The language of the visitor's message: Devanagari or Hinglish words switch the chat's own text to Hinglish,
   a plain English sentence switches it back. Unclear messages ("ok", a name) leave it as it is. */
const HINGLISH = new Set(
  "hai hain kya kaise kaisa kab kahan kitna kitne kitni mujhe mera meri mere aap aapka aapki aapke kripya nahi nahin chahiye karna karni karo kar batao bataiye haan ho hoga hogi sakta sakte ke ki ka liye mein se ko bhi toh tha thi hum hamare humein hamara koi kuch abhi jaldi ghar par wala wali dijiye kijiye".split(" ")
);
const ENGLISH = new Set("the is are what how please my you your can do does need want for of to and with about when where which there have has will would could should".split(" "));
const detectLang = (text: string): Lang | null => {
  if (/[ऀ-ॿ]/.test(text)) return "hi";
  const words = text.toLowerCase().match(/[a-z]+/g) || [];
  const hi = words.filter((w) => HINGLISH.has(w)).length;
  const en = words.filter((w) => ENGLISH.has(w)).length;
  if (hi >= 2 && hi > en) return "hi";
  if (en >= 2 && en > hi) return "en";
  return null;
};

/* ── The visitor's name, asked before anything else ── */
const GREETING = /^(hi+|hello+|helo|hey+|hlo|namaste|namaskar|namaskaar|pranam|good (morning|afternoon|evening|day)|ok(ay)?|yes|haa?n?|ji|hmm+|thanks?|thank you)[\s!.🙏]*$/iu;
const REFUSES = /\b(no|nope|nahi|nhi|nahin|skip|later|baad (me|mein)|kyu|kyun|kyon|why|not now)\b/i;
const NAME_INTRO = /^(?:my name is|my name's|name is|i am|i'm|im|this is|it's|its|myself|mera naam|mera nam|naam|main|mai)\s+(.+)$/i;
// 1–3 words that are a question or a service, not a name ("cremation cost", "asthi visarjan")
const NOT_A_NAME = new Set(
  (
    "what how when where why who which price prices cost rate rates charges need want help service services cremation funeral booking book " +
    "kya kaise kab kahan kitna kitne kaun chahiye karna batao bataiye please plz mujhe hume hamein is are the a an do does can you " +
    "asthi visarjan pind daan antim sanskar shradh tarpan terahvi barsi pandit purohit mortuary ambulance hearse van samagri donation volunteer " +
    "sewa pre death dead died passed body urgent emergency call contact number phone address location office freezer box documents certificate " +
    "hi hello hey namaste namaskar ok okay yes no haan ji thanks thank sir madam mam"
  ).split(" ")
);
// Answers to "Kya main aapko Vijay ji kehkar sambodhit kar sakti hoon?"
const SAYS_YES = /^(ha+n?|haa+|han ji|haan ji|ji|ji ha+n|ji haan|yes|yeah|yup|ok(ay)?|sure|bilkul|zaroor|theek hai|thik hai|sahi hai|hmm+|kar sakti hain?)\b[\s!.🙏]*/iu;
const SAYS_NO = /^(nahi+n?|nhi|nahin|na|no|nope|ji nahi+n?)\b[\s,.!]*/iu;
// Words around the preferred form ("mujhe Sharma ji kahiye", "please call me Vijay Sharma")
const ADDRESS_WORDS = /\b(mujhe|muje|aap|please|plz|kahiye|kahein|kahe|kaho|bulaiye|bulayein|bulao|bula|bulana|boliye|bolo|call me|kehkar|keh kar|sambodhit|kariye|karein|ji|jee)\b/giu;
// A death, an urgent need or distress in the first message: help first, the name later
const URGENT =
  /(dehant|dehaant|nidhan|guzar|gujar|expire|died|dead|death|passed away|mar gay|mar gai|maut|ambulance|hearse|body|shav|parthiv|urgent|emergency|turant|jaldi|abhi chahiye|देहांत|निधन|गुज़र|गुजर|मृत्यु|मौत|शव|पार्थिव|एम्बुलेंस|तुरंत|जल्दी)/iu;
const extractName = (text: string): string | null => {
  let name = text.trim().replace(/[\s.!🙏]+$/u, "");
  const intro = name.match(NAME_INTRO);
  if (intro) name = intro[1];
  name = name
    .replace(/\s+(?:hai|hain|hu|hoon|hun|here)$/i, "")
    .replace(/\s+(?:ji|jee|जी)$/i, "")
    .replace(/\s+/g, " ")
    .trim();
  if (name.length < 2 || name.length > 40 || !/^\p{L}[\p{L}\p{M} .'-]*$/u.test(name)) return null;
  const words = name.split(" ");
  if (words.length > 3 || words.some((w) => NOT_A_NAME.has(w.toLowerCase()))) return null;
  return words.map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
};


// "ok thanks", "bye", "dhanyavaad": the visitor is done
const VISITOR_DONE = /^(ok(ay)?|thanks?|thank (you|u)|ty|bye|good ?bye|dhanyavaad|dhanyawad|dhanywad|shukriya|theek hai|thik hai|bas|nothing( else)?|no thanks?)\b[\s\w!.🙏]*$/iu;

/* ── Links in Aarohi's replies: [label](url), **bold**, bare URLs and "- " bullets ── */
// The live site, and the old staging address that older replies may still link to
const SITE_HOSTS = new Set(["mokshasewa.org", "www.mokshasewa.org", "mokshasewa.vaidhyashala.in", "www.mokshasewa.vaidhyashala.in", new URL(SITE_URL).host]);
// A page of this website opens in the same tab (and stays on localhost while testing); other sites open in a new one
const internalPath = (href: string) => {
  if (href.startsWith("/")) return href;
  try {
    const url = new URL(/^https?:\/\//i.test(href) ? href : `https://${href}`);
    if (SITE_HOSTS.has(url.host) || url.host === window.location.host) return `${url.pathname}${url.search}${url.hash}` || "/";
  } catch {
    // not a URL
  }
  return null;
};
const LINK_CLASS = "font-semibold text-[#9a5b06] underline decoration-[#e0901f]/50 underline-offset-2 [overflow-wrap:anywhere] hover:decoration-[#e0901f]";
function ChatLink({ href, children, onNavigate }: { href: string; children: ReactNode; onNavigate: () => void }) {
  const path = internalPath(href);
  if (path)
    return (
      <Link href={path} onClick={onNavigate} className={LINK_CLASS}>
        {children}
      </Link>
    );
  return (
    <a href={/^https?:\/\//i.test(href) ? href : `https://${href}`} target="_blank" rel="noopener noreferrer" className={LINK_CLASS}>
      {children}
    </a>
  );
}
// [label](url) | **bold** | a bare URL | a phone number (tap to call: families often need the helpline at once)
const TOKEN = /\[([^\]\n]+)\]\(((?:https?:\/\/|\/)[^\s)]+)\)|\*\*([^*\n]+)\*\*|(https?:\/\/[^\s<>()]*[^\s<>().,!?;:'"])|(\+(?:91|44)[\s-]?\d{2,5}(?:[\s-]?\d{2,5}){1,3})/g;
const prettyUrl = (url: string) => url.replace(/^https?:\/\/(www\.)?/i, "").replace(/\/$/, "");
function RichText({ text, onNavigate }: { text: string; onNavigate: () => void }) {
  return (
    <>
      {text.split("\n").map((raw, i) => {
        const line = raw.replace(/^\s*#{1,6}\s+/, "");
        if (!line.trim()) return <span key={i} className="block h-1.5" />;
        const bullet = /^\s*[-*•]\s+/.test(line);
        const body = bullet ? line.replace(/^\s*[-*•]\s+/, "") : line;
        const parts: ReactNode[] = [];
        let last = 0;
        for (const m of body.matchAll(TOKEN)) {
          const at = m.index ?? 0;
          if (at > last) parts.push(body.slice(last, at));
          if (m[3]) parts.push(<strong key={at} className="font-semibold text-[#0b2a6b]">{m[3]}</strong>);
          else if (m[5])
            parts.push(
              <a key={at} href={`tel:${m[5].replace(/[^\d+]/g, "")}`} className={`${LINK_CLASS} whitespace-nowrap`}>
                {m[5]}
              </a>
            );
          else
            parts.push(
              <ChatLink key={at} href={m[2] || m[4]} onNavigate={onNavigate}>
                {m[1] || prettyUrl(m[4])}
              </ChatLink>
            );
          last = at + m[0].length;
        }
        if (last < body.length) parts.push(body.slice(last));
        return bullet ? (
          <span key={i} className="flex gap-2">
            <span aria-hidden className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-[#e0901f]" />
            <span className="min-w-0">{parts}</span>
          </span>
        ) : (
          <span key={i} className="block">
            {parts}
          </span>
        );
      })}
    </>
  );
}

/* ───────────────────────── Icons (inline, so the chat needs no icon font) ───────────────────────── */

const Svg = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
    {children}
  </svg>
);
const CloseIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M18 6 6 18M6 6l12 12" />
  </Svg>
);
const MinusIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M5 12h14" />
  </Svg>
);
const SendIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </Svg>
);
const BellIcon = ({ off, className }: { off: boolean; className?: string }) => (
  <Svg className={className}>
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    {off ? (
      <>
        <path d="M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5" />
        <path d="M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7" />
        <path d="m2 2 20 20" />
      </>
    ) : (
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    )}
  </Svg>
);
const BanIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="m4.9 4.9 14.2 14.2" />
  </Svg>
);

const VolumeIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M11 5 6 9H2v6h4l5 4z" />
    <path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14" />
  </Svg>
);
const VolumeOffIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M11 5 6 9H2v6h4l5 4z" />
    <path d="m22 9-6 6M16 9l6 6" />
  </Svg>
);
const HeadsetIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
  </Svg>
);
const FileIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6M8 13h8M8 17h5" />
  </Svg>
);
const MicIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <rect x="9" y="2" width="6" height="12" rx="3" />
    <path d="M5 10a7 7 0 0 0 14 0M12 17v5M8 22h8" />
  </Svg>
);
const SpinnerIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M21 12a9 9 0 1 1-6.2-8.56" />
  </Svg>
);
const PauseIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <rect x="6" y="5" width="4" height="14" rx="1" />
    <rect x="14" y="5" width="4" height="14" rx="1" />
  </svg>
);

const PlayIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" />
  </svg>
);

const PhoneOffIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M10.7 13.3a16 16 0 0 0 3.4 2.6l1.3-1.3a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 4.2 2 2 0 0 1 5.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.9 9.7" />
    <path d="M22 2 2 22" />
  </Svg>
);
const MicOffIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M2 2l20 20M9 9v1a3 3 0 0 0 5.1 2.1M15 9.3V5a3 3 0 0 0-5.9-.7M17 16.9A7 7 0 0 1 5 10M19 10a7 7 0 0 1-.1 1.2M12 17v5M8 22h8" />
  </Svg>
);
const ShieldIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </Svg>
);
const InfoIcon = ({ className }: { className?: string }) => (
  <Svg className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4M12 8h.01" />
  </Svg>
);
// Lotus outline (header and the message box)
const LotusMark = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 20" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
    <path d="M16 2c3 4 3 9 0 14c-3-5-3-10 0-14z" />
    <path d="M16 16c-5-1-9-5-10-10c5 1 9 5 10 10z" />
    <path d="M16 16c5-1 9-5 10-10c-5 1-9 5-10 10z" />
    <path d="M3 13c4 5 22 5 26 0" />
  </svg>
);

/* ───────────────────────── The chat window ───────────────────────── */

interface ChatbotProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  openRef: RefObject<((mode?: OpenMode) => void) | null>; // the launcher (ChatbotLauncher) opens the chat through this, inside its click
  openAtOnce: OpenMode | false; // the launcher was clicked (and how) before this code had arrived
  onConfig: (settings: { enabled: boolean; label: string }) => void; // the robot's label, or hidden when switched off
}

/** How the chat opens: "auto" / "call" — her intro video the first time, then the voice call; "chat" — the typed chat only */
export type OpenMode = "auto" | "call" | "chat";

const Chatbot = ({ isOpen, setIsOpen, openRef, openAtOnce, onConfig }: ChatbotProps) => {
  const contact = useSiteContact();
  const [config, setConfig] = useState<ChatConfig | null>(null);
  // The intro video: playing, waiting for their name, flying back into her avatar, or gone; how far it has played; muted
  // by the browser
  const [intro, setIntro] = useState<"off" | "on" | "listening" | "leaving">("off");
  const introRef = useRef(intro);
  // Waiting for their name: the messages from then on (shown as captions on the video), and since when
  const [listenFrom, setListenFrom] = useState(0);
  const [listenSince, setListenSince] = useState(0);
  // The call has already started from the video (while it waited for their name)
  const introBegunRef = useRef(false);
  const [introProgress, setIntroProgress] = useState(0);
  const [introTime, setIntroTime] = useState(0);
  // Her intro's words stay in the chat once it has played; the call then doesn't greet again
  const [introSaid, setIntroSaid] = useState(false);
  const introGreetedRef = useRef(false);
  // The call was told the intro video is talking (pipeline.intro), and whether her own voice is playing
  const introOnCallRef = useRef(false);
  const herVoicePlayingRef = useRef(false);
  // How loud her voice plays in this call: raised when the visitor asks her to speak louder
  const callVolumeRef = useRef(1);
  const [introMuted, setIntroMuted] = useState(false);
  // The visitor turned her intro's voice off (the speaker button on the video)
  const [introQuiet, setIntroQuiet] = useState(false);
  const introQuietRef = useRef(false);
  const introVideoRef = useRef<HTMLVideoElement>(null);
  // The video call over the chat window, and her avatar it grows out of and goes back into
  const introBoxRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLSpanElement>(null);
  // She has just gone back into her avatar: it glows for a moment
  const [avatarLanding, setAvatarLanding] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  // Every chat starts in English; a message in Hindi / Hinglish switches the chat's own text
  // Hinglish first, as in Aarohi's script; English when the visitor writes English
  const [lang, setLang] = useState<Lang>("hi");
  const [muted, setMuted] = useState(() => stored(MUTED_KEY) === "1");
  const [messages, setMessages] = useState<Message[]>([]);
  /* The conversation so far is kept on the server (this browser's session): brought back into the chat once per page
     (after a reload, on another page), so closing and opening the chat carries on from its last words, with no new
     greeting and no name asked again (restoreEarlier). `talkedRef`: there is a conversation to carry on. */
  const restoreRef = useRef<Promise<{ history: Message[]; resumed: boolean } | null> | null>(null);
  // This browser already had a chat when the page loaded (its session id was kept): it is brought back at once
  const hadSessionRef = useRef(false);
  const talkedRef = useRef(false);
  useEffect(() => {
    if (messages.some((m) => m.text?.trim())) talkedRef.current = true;
  }, [messages]);
  const [isTyping, setIsTyping] = useState(false);
  const [busy, setBusy] = useState(false); // waiting for (or reading) a reply: no new message until it's done
  const [input, setInput] = useState("");
  const [askingName, setAskingName] = useState(() => !stored(NAME_KEY));
  // Live chat: someone from the team has taken the chat over, so Aarohi isn't replying
  const [teamLive, setTeamLive] = useState(false);
  const teamLiveRef = useRef(false);
  const teamSinceRef = useRef(0); // server time: the team's messages after this are new (0 = not asked yet)
  const teamSeenRef = useRef(new Set<number>()); // the team's messages already in the chat (by their time)
  const checkTeamRef = useRef<() => Promise<void>>(async () => {});
  const [blockedTill, setBlockedTill] = useState(blockedUntil);
  const [clock, setClock] = useState(now);
  const [chatEnded, setChatEnded] = useState(false);
  const [closing, setClosing] = useState(false);

  const configRef = useRef<ChatConfig | null>(null);
  const langRef = useRef<Lang>("hi");
  const mutedRef = useRef(muted);
  const phoneRef = useRef(contact.phone);
  const idRef = useRef(0);
  const aliveRef = useRef(true);
  const activeRef = useRef(false); // on screen: open and not minimised (sounds only play then)
  const startedRef = useRef(false);
  const sessionIdRef = useRef("");
  const sessionOf = useRef(() => sessionIdRef.current).current;
  const nameRef = useRef("");
  const nameAsksRef = useRef(0);
  // "Kya main aapko Vijay ji kehkar sambodhit kar sakti hoon?" was asked: the name it was asked about. `choosing`: they
  // said no, and were asked how they'd like to be addressed.
  const salutationRef = useRef<{ name: string; first: string; choosing?: boolean } | null>(null);
  const pendingRef = useRef(""); // asked before giving the name: answered right after it
  const queueRef = useRef<Promise<void>>(Promise.resolve());
  const audioRef = useRef<AudioContext | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const closingAtRef = useRef<number | null>(null);

  /* ── Aarohi's voice: replies read out in her calm voice (OpenAI), and the visitor can speak ── */
  const [voiceOn, setVoiceOn] = useState(() => stored(VOICE_KEY) !== "0"); // voice replies are on until the visitor switches them off
  const voiceOnRef = useRef(voiceOn);
  const [speaking, setSpeaking] = useState(false);
  const [mic, setMic] = useState<"idle" | "recording" | "transcribing">("idle");
  const [canRecord] = useState(() => typeof MediaRecorder !== "undefined" && Boolean(navigator.mediaDevices?.getUserMedia));
  const speechRef = useRef<{ queue: Promise<void>; audio: HTMLAudioElement | null; abort: AbortController | null; token: number }>({
    queue: Promise.resolve(),
    audio: null,
    abort: null,
    token: 0,
  });
  const recorderRef = useRef<MediaRecorder | null>(null);
  const recordTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  /* ── The spoken call (OpenAI Realtime over WebRTC, as in the Design House chat): the visitor just talks, can talk
     over Aarohi, and both sides appear in the chat as they are said ── */
  const [canTalk] = useState(canCall);
  const [callState, setCallState] = useState<"off" | "connecting" | "on">("off");
  const [micMuted, setMicMuted] = useState(false);
  // Call on hold: her voice stops, the mic is off and the call doesn't end itself for being quiet; Resume carries on
  const [onHold, setOnHold] = useState(false);
  const onHoldRef = useRef(false);
  // When the call was put on hold: it ends once it has been on hold for the admin's hold time
  const holdSinceRef = useRef(0);
  const [noiseOn, setNoiseOn] = useState(() => stored(NOISE_KEY) !== "0");
  const callRef = useRef<Call | null>(null);
  const micRingRef = useRef<HTMLSpanElement>(null);
  const heardRef = useRef(new Map<string, string>());
  const botTextRef = useRef(new Map<string, string>());
  const lastActivityRef = useRef(0);
  const endAfterSpeechRef = useRef(false);
  /* Her goodbye (end_conversation) was cut off before its end: the call goes on if the visitor says something (they had
     more to say: on 19 Nov the call ended as they spoke over it, and their words were lost), and ends if nothing comes */
  const goodbyeCutRef = useRef(false);
  const endTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const callTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const endCallRef = useRef<(note?: string) => void>(() => {});
  // Puts a quiet call on hold (as the Hold button does); Resume carries on
  const autoHoldRef = useRef<() => void>(() => {});
  /* A quiet call: she first asks whether they are still there (they may be talking and not being heard, or waiting for
     her after she went quiet), and only if it stays quiet does it go on hold. Before, the call went on hold at once and
     muted the mic, so what they said next was never heard. Cleared when they speak or type. */
  const askStillThereRef = useRef<() => void>(() => {});
  const checkedInRef = useRef(false);
  const onCallEventRef = useRef<(event: CallEvent) => void>(() => {});
  // The call opened with "talk or type?": typing now (or saying "likhkar") moves to the typed chat
  const choosingRef = useRef(false);
  // The visitor ended the call (or chose typing): opening the chat again doesn't call them again
  const endedByHandRef = useRef(false);
  // Each call attempt gets a number: closing the chat (or ending the call) moves it on, so a call still connecting is
  // hung up the moment it connects, and two calls can never run at once
  const callGenRef = useRef(0);
  const startingRef = useRef(false);
  const inCall = callState === "on";

  const t = COPY[lang];
  const blocked = blockedTill > clock;
  const inputIsAbusive = input.trim().length > 0 && isAbusive(input);
  const botName = config?.name || BOT_NAME;
  // Admin → Chatbot Settings → Chat Window: a plain white window instead of the cream ghat artwork
  const whiteBg = config?.background === "white";
  const panelBg = whiteBg ? "bg-white" : "bg-[#fdf7ec]";
  const avatar = config?.avatar || AVATAR;

  // The chat's own helpline (AI Training → Contact details), else the website's number
  useEffect(() => {
    phoneRef.current = config?.helpline || contact.phone;
  }, [config?.helpline, contact.phone]);

  useEffect(() => {
    activeRef.current = isOpen && !isMinimized;
  }, [isOpen, isMinimized]);

  // The browser remembers the chat (session) and the visitor's name, so a page change or a reload carries on
  useEffect(() => {
    aliveRef.current = true;
    hadSessionRef.current = Boolean(stored(SESSION_KEY));
    sessionIdRef.current = stored(SESSION_KEY) || newSessionId();
    store(SESSION_KEY, sessionIdRef.current);
    nameRef.current = stored(NAME_KEY);
    const speech = speechRef.current;
    return () => {
      aliveRef.current = false;
      void audioRef.current?.close();
      speech.token += 1;
      speech.abort?.abort();
      speech.audio?.pause();
      if (recorderRef.current?.state === "recording") recorderRef.current.stop();
      endCallRef.current();
    };
  }, []);

  // Name, welcome and quick buttons from the admin's Chatbot Manager (built-in ones until they arrive)
  useEffect(() => {
    if (!API) return;
    const controller = new AbortController();
    fetch(`${API}/chat/config`, { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : null))
      .then((body) => {
        const data = body?.data as ChatConfig | undefined;
        if (!data) return;
        configRef.current = data;
        setConfig(data);
        onConfig({ enabled: data.enabled !== false, label: data.launcher || "" });
      })
      .catch(() => {
        // the built-in name and welcome are used
      });
    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep the newest message (and the on-hold note) in view
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping, onHold]);

  // On phones the chat covers the page: stop the page scrolling underneath
  useEffect(() => {
    if (!isOpen || isMinimized || !window.matchMedia("(max-width: 639px)").matches) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen, isMinimized]);

  // A block counts down every second, and the chat opens again when it reaches zero
  useEffect(() => {
    if (!blockedTill) return;
    const tick = setInterval(() => {
      setClock(Date.now());
      if (Date.now() >= blockedTill) setBlockedTill(0);
    }, 1000);
    return () => clearInterval(tick);
  }, [blockedTill]);

  /* ── Sound effects, generated in the browser (no audio files) ──
     Browsers only allow sound that starts from a click, so the audio is unlocked inside click handlers
     (opening the chat, send) and Aarohi's later replies can then play. */
  const audio = () => {
    try {
      const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!Ctx) return null;
      const ctx = (audioRef.current ??= new Ctx());
      if (ctx.state === "suspended") void ctx.resume();
      return ctx;
    } catch {
      return null; // Audio unsupported: the chat works silently
    }
  };

  // Bell-like notes: a sine with a softer octave overtone, quick attack and a ringing fade
  const chime = (notes: Array<[freq: number, at: number]>, volume: number, ring: number) => {
    if (mutedRef.current) return;
    const ctx = audio();
    if (!ctx) return;
    const start = ctx.currentTime + 0.01;
    const out = ctx.createDynamicsCompressor(); // keeps overlapping notes from clipping
    out.connect(ctx.destination);
    notes.forEach(([freq, at]) => {
      [
        { type: "sine" as OscillatorType, mult: 1, level: volume },
        { type: "triangle" as OscillatorType, mult: 2, level: volume * 0.25 },
      ].forEach(({ type, mult, level }) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.value = freq * mult;
        gain.gain.setValueAtTime(0.0001, start + at);
        gain.gain.exponentialRampToValueAtTime(level, start + at + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + at + ring);
        osc.connect(gain).connect(out);
        osc.start(start + at);
        osc.stop(start + at + ring + 0.05);
      });
    });
  };

  // New message from Aarohi: "ding-dong"
  const playIncoming = () => chime([[880, 0], [1318.5, 0.13]], 0.32, 0.55);
  // The chat opens: a soft temple bell (ghanti), its inharmonic overtones ringing out slowly
  const playOpen = () => {
    if (mutedRef.current) return;
    const ctx = audio();
    if (!ctx) return;
    const start = ctx.currentTime + 0.02;
    const out = ctx.createDynamicsCompressor();
    out.connect(ctx.destination);
    // Struck twice, the second softer: "ting… ting"
    [
      { at: 0, level: 0.3 },
      { at: 0.32, level: 0.16 },
    ].forEach(({ at, level }) => {
      [
        { ratio: 1, amp: 1, ring: 2.4 },
        { ratio: 2.0, amp: 0.45, ring: 1.8 },
        { ratio: 2.76, amp: 0.32, ring: 1.4 },
        { ratio: 4.07, amp: 0.18, ring: 0.9 },
        { ratio: 5.4, amp: 0.1, ring: 0.6 },
      ].forEach(({ ratio, amp, ring }) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = 784 * ratio;
        gain.gain.setValueAtTime(0.0001, start + at);
        gain.gain.exponentialRampToValueAtTime(level * amp, start + at + 0.006);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + at + ring);
        osc.connect(gain).connect(out);
        osc.start(start + at);
        osc.stop(start + at + ring + 0.05);
      });
    });
  };

  // Your message sent: a soft "pop" (pitch drops quickly)
  const playSent = () => {
    if (mutedRef.current) return;
    const ctx = audio();
    if (!ctx) return;
    const start = ctx.currentTime + 0.01;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(900, start);
    osc.frequency.exponentialRampToValueAtTime(380, start + 0.09);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(0.22, start + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.12);
    osc.connect(gain).connect(ctx.destination);
    osc.start(start);
    osc.stop(start + 0.15);
  };

  const stopSpeaking = () => {
    const s = speechRef.current;
    s.token += 1;
    s.abort?.abort();
    s.audio?.pause();
    s.audio = null;
    s.queue = Promise.resolve();
    setSpeaking(false);
  };

  // Reads a line out (one after another), unless voice replies are off or the chat is closed
  const speak = (text: string) => {
    if (!API || !voiceOnRef.current || !text.trim() || callRef.current) return;
    const s = speechRef.current;
    const token = s.token;
    s.queue = s.queue.then(async () => {
      if (token !== s.token || !activeRef.current) return;
      const abort = new AbortController();
      s.abort = abort;
      try {
        const res = await fetch(`${API}/chat/speak`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: text.slice(0, 1500) }),
          signal: abort.signal,
        });
        if (!res.ok || token !== s.token) return;
        const url = URL.createObjectURL(await res.blob());
        if (token !== s.token) return URL.revokeObjectURL(url);
        const player = new Audio(url);
        s.audio = player;
        setSpeaking(true);
        await new Promise<void>((resolve) => {
          player.onended = () => resolve();
          player.onerror = () => resolve();
          player.onpause = () => resolve();
          player.play().catch(() => resolve());
        });
        URL.revokeObjectURL(url);
      } catch {
        // the reply stays on screen
      } finally {
        if (token === s.token) {
          s.audio = null;
          setSpeaking(false);
        }
      }
    });
  };

  const setVoice = (on: boolean) => {
    voiceOnRef.current = on;
    setVoiceOn(on);
    store(VOICE_KEY, on ? "1" : "0");
  };

  const toggleVoice = () => {
    audio();
    if (voiceOn) {
      setVoice(false);
      stopSpeaking();
      return;
    }
    setVoice(true);
    // Turned on: the latest reply is read out, so it's clear it works
    const last = [...messages].reverse().find((m) => m.from === "bot" && !m.live);
    if (last) speak([last.title, last.text].filter(Boolean).join(". "));
  };

  // The visitor speaks: recorded in the browser, turned into text by the backend (Hindi or English), then sent
  const startRecording = async () => {
    if (mic !== "idle" || blocked || busy || chatEnded || !API) return;
    stopSpeaking();
    let stream: MediaStream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true } });
    } catch {
      void botSay([{ text: copy().micDenied }]);
      return;
    }
    const type = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4", "audio/ogg"].find((m) => MediaRecorder.isTypeSupported?.(m)) || "";
    const recorder = new MediaRecorder(stream, type ? { mimeType: type } : undefined);
    const parts: Blob[] = [];
    recorder.ondataavailable = (e) => {
      if (e.data.size) parts.push(e.data);
    };
    recorder.onstop = async () => {
      stream.getTracks().forEach((track) => track.stop());
      clearTimeout(recordTimerRef.current);
      recorderRef.current = null;
      const blob = new Blob(parts, { type: recorder.mimeType || "audio/webm" });
      if (!aliveRef.current) return;
      if (blob.size < 1500) {
        setMic("idle");
        return;
      }
      setMic("transcribing");
      try {
        const form = new FormData();
        form.append("audio", blob, `speech.${/mp4/.test(blob.type) ? "m4a" : /ogg/.test(blob.type) ? "ogg" : "webm"}`);
        const res = await fetch(`${API}/chat/transcribe`, { method: "POST", body: form });
        const body = await res.json().catch(() => null);
        const said = String(body?.data?.text || "").trim();
        setMic("idle");
        if (!res.ok || !said) {
          void botSay([{ text: res.status === 429 ? copy().tooFast(phoneRef.current) : copy().micFailed }]);
          return;
        }
        // They spoke, so Aarohi answers aloud too
        if (!voiceOnRef.current) setVoice(true);
        send(said);
      } catch {
        setMic("idle");
        void botSay([{ text: copy().micFailed }]);
      }
    };
    recorderRef.current = recorder;
    recorder.start();
    setMic("recording");
    // At most 30 seconds
    recordTimerRef.current = setTimeout(() => {
      if (recorder.state === "recording") recorder.stop();
    }, 30000);
  };

  // A bubble for something being said in the call, made the moment it starts, so the chat keeps the order things were said
  const updateBubble = (key: string, from: Message["from"], change: Partial<Message>) =>
    setMessages((prev) => {
      const at = prev.findIndex((m) => m.key === key);
      if (at < 0) return [...prev, { id: ++idRef.current, from, key, text: "", at: Date.now(), live: true, ...change }];
      const next = [...prev];
      next[at] = { ...next[at], ...change };
      return next;
    });
  const dropBubble = (key: string) => setMessages((prev) => prev.filter((m) => m.key !== key));

  /* Saves what was said in the call and shows it in its bubble. Hindi (Aarohi speaks from Devanagari, for the accent,
     and the visitor's words are written down in Devanagari) is shown as Hinglish in Roman letters: the bubble waits
     with "typing" dots until the server sends it back rewritten. */
  const saveTurn = (role: "user" | "assistant", text: string, key?: string) => {
    const from: Message["from"] = role === "user" ? "user" : "bot";
    const show = (shown: string) => key && updateBubble(key, from, { text: shown, live: false, pending: false, at: Date.now() });
    if (!API) {
      show(text);
      return;
    }
    if (key) {
      // Shown at once; the server's version (misheard words put right) replaces it
      show(text);
    }
    void fetch(`${API}/chat/call/turn`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId: sessionIdRef.current, role, text }),
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((body) => {
        const shown = body?.data?.text;
        show(typeof shown === "string" && shown ? shown : text);
      })
      .catch(() => show(text));
  };

  // The visitor chose typing (or the call couldn't start): the typed chat carries on, name first
  const continueTyping = () => {
    startedRef.current = true;
    const shown = addressOf();
    if (askingName || !nameRef.current) void botSay([{ text: copy().askName }]);
    else void botSay([{ text: copy().welcome(shown), chips: chips() }]);
  };

  // What Aarohi asked for in the call: save the name / number, search the team's notes, or end the call
  const runCallTools = async (requested: NonNullable<NonNullable<CallEvent["response"]>["output"]>) => {
    let replyAgain = false;
    for (const tool of requested) {
      const call = callRef.current;
      if (!call || !tool.call_id) return;
      if (tool.name === "continue_typing") {
        call.send({ type: "conversation.item.create", item: { type: "function_call_output", call_id: tool.call_id, output: JSON.stringify({ ok: true }) } });
        choosingRef.current = false;
        endedByHandRef.current = true;
        endCallRef.current();
        continueTyping();
        return;
      }
      if (tool.name === "end_conversation") {
        call.send({ type: "conversation.item.create", item: { type: "function_call_output", call_id: tool.call_id, output: JSON.stringify({ ok: true }) } });
        endAfterSpeechRef.current = true;
        goodbyeCutRef.current = false;
        // The call ends when her goodbye has been played; this is only in case that never comes (the whole closing line is ~10 s)
        clearTimeout(endTimerRef.current);
        endTimerRef.current = setTimeout(() => endAfterSpeechRef.current && endCallRef.current(copy().callEnded), 20000);
        continue;
      }
      let output: unknown = { ok: false };
      try {
        let args: unknown = {};
        try {
          args = JSON.parse(tool.arguments || "{}");
        } catch {
          // no arguments
        }
        const res = await fetch(`${API}/chat/call/tool`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId: sessionIdRef.current, name: tool.name, args }),
        });
        const data = (await res.json())?.data;
        output = data?.output ?? output;
        if (data?.name) {
          // Aarohi learned the visitor's name in the call: the typed chat knows it too
          remember(sessionIdRef.current, data.name);
          setAskingName(false);
          pendingRef.current = "";
          // She has heard their name: from the video call back into her avatar
          if (introRef.current === "listening" || introRef.current === "on") finishIntroRef.current();
        }
      } catch {
        // Aarohi carries on without it
      }
      callRef.current?.send({ type: "conversation.item.create", item: { type: "function_call_output", call_id: tool.call_id, output: JSON.stringify(output) } });
      replyAgain = true;
    }
    if (replyAgain) callRef.current?.send({ type: "response.create" });
  };

  const onCallEvent = (event: CallEvent) => {
    switch (event.type) {
      case "conversation.item.added": {
        const { item } = event;
        // Typed messages already have their bubble
        if (item?.type !== "message" || item.content?.some((part) => part.type === "input_text")) break;
        if (item.role === "user") updateBubble(item.id, "user", {});
        else if (item.role === "assistant") updateBubble(item.id, "bot", {});
        break;
      }
      case "pipeline.warned":
        // Her own warning for abusive words, counted on the server: the fourth closes the chat (after her closing line)
        if (event.blocked) closeForAbuse(() => blockFor(event.blockedFor), event.blockedFor === null, Boolean(event.said));
        break;
      case "pipeline.name":
        // Aarohi has heard their name (the pipeline call says so the moment it knows): from the video call into her
        // avatar now, while she answers and saves it (even while the video is still talking: it stops for her answer)
        if (introRef.current === "listening" || introRef.current === "on") finishIntroRef.current();
        break;
      case "input_audio_buffer.speech_started":
        // Any sound (a fan, a TV, a keyboard) starts this: only words heard keep the call off hold
        break;
      case "pipeline.heard":
        // Their words appear as they speak (Hindi in Roman letters for now; the proper Hinglish follows when they finish)
        lastActivityRef.current = Date.now();
        checkedInRef.current = false;
        if (event.item_id && event.text) {
          // Letters of another script while they speak are the live recognizer guessing (it hears Punjabi as Telugu
          // letters): typing dots until the sentence, written down properly, arrives
          if (/[^\p{Script=Latin}\p{Script=Devanagari}\p{N}\p{P}\p{S}\p{M}\s]/u.test(event.text)) {
            updateBubble(event.item_id, "user", { text: "" });
            break;
          }
          // Abusive words are never shown, not even for a moment
          updateBubble(event.item_id, "user", { text: isAbusive(event.text) || isAbusive(toRoman(event.text)) ? "" : event.text });
        }
        break;
      case "conversation.item.input_audio_transcription.delta": {
        if (!event.item_id) break;
        const heard = (heardRef.current.get(event.item_id) || "") + (event.delta || "");
        heardRef.current.set(event.item_id, heard);
        updateBubble(event.item_id, "user", { text: heard });
        break;
      }
      case "conversation.item.input_audio_transcription.completed": {
        if (!event.item_id) break;
        heardRef.current.delete(event.item_id);
        const text = (event.transcript || "").trim();
        if (!text) {
          dropBubble(event.item_id);
          break;
        }
        // A noise heard as words: not shown, not answered
        if (misheard(text, event.logprobs)) {
          dropBubble(event.item_id);
          callRef.current?.send({ type: "response.cancel" });
          callRef.current?.send({ type: "output_audio_buffer.clear" });
          callRef.current?.send({ type: "conversation.item.delete", item_id: event.item_id });
          break;
        }
        // Words, not a noise: the visitor is talking
        lastActivityRef.current = Date.now();
        checkedInRef.current = false;
        choosingRef.current = false;
        // …over her goodbye: they have more to say, so the call goes on
        if (goodbyeCutRef.current) {
          goodbyeCutRef.current = false;
          clearTimeout(endTimerRef.current);
        }
        // Abusive words are never shown or answered (what Aarohi started saying is stopped and they leave the
        // conversation); they count as a warning, as typed ones do, and she says the warning aloud
        if (isAbusive(text)) {
          dropBubble(event.item_id);
          callRef.current?.send({ type: "response.cancel" });
          callRef.current?.send({ type: "output_audio_buffer.clear" });
          callRef.current?.send({ type: "conversation.item.delete", item_id: event.item_id });
          void strike();
          break;
        }
        switchLang(text);
        // "Zor se boliye": her voice is louder from now on (she says so herself)
        if (LOUDER.test(text) || SOFTER.test(text)) {
          callVolumeRef.current = LOUDER.test(text) ? Math.min(2.5, callVolumeRef.current * 1.4) : Math.max(0.5, callVolumeRef.current / 1.4);
          callRef.current?.setVolume?.(callVolumeRef.current);
        }
        saveTurn("user", text, event.item_id);
        break;
      }
      case "conversation.item.input_audio_transcription.failed":
        if (event.item_id) {
          heardRef.current.delete(event.item_id);
          dropBubble(event.item_id);
        }
        break;
      case "response.output_audio_transcript.delta":
        if (event.item_id) {
          const said = (botTextRef.current.get(event.item_id) || "") + (event.delta || "");
          botTextRef.current.set(event.item_id, said);
          updateBubble(event.item_id, "bot", { text: said });
        }
        break;
      case "response.output_audio_transcript.done": {
        if (!event.item_id) break;
        botTextRef.current.delete(event.item_id);
        const text = (event.transcript || "").trim().replace(/^["“”']+|["“”']+$/g, "").trim();
        if (!text) {
          dropBubble(event.item_id);
          break;
        }
        if (activeRef.current) playIncoming();
        saveTurn("assistant", text, event.item_id);
        break;
      }
      case "response.done": {
        // A reply cut short (the visitor spoke over it) keeps what was said of it
        const unfinished = new Map(botTextRef.current);
        botTextRef.current.clear();
        unfinished.forEach((said, key) => {
          if (said.trim()) saveTurn("assistant", said.trim(), key);
        });
        setMessages((prev) => prev.filter((m) => !(m.from === "bot" && m.key && m.live && !m.text && !m.pending)));
        const requested = (event.response?.output || []).filter((item) => item.type === "function_call");
        if (event.response?.status === "completed" && requested.length) void runCallTools(requested);
        break;
      }
      case "output_audio_buffer.started":
        lastActivityRef.current = Date.now();
        setSpeaking(true);
        herVoicePlayingRef.current = true;
        callRef.current?.setAssistantTalking(true);
        // Answering after her goodbye was cut off: the conversation goes on
        if (goodbyeCutRef.current) {
          goodbyeCutRef.current = false;
          clearTimeout(endTimerRef.current);
        }
        break;
      case "output_audio_buffer.stopped":
      case "output_audio_buffer.cleared":
        lastActivityRef.current = Date.now();
        setSpeaking(false);
        herVoicePlayingRef.current = false;
        // (the intro video may still be talking: its voice is hers too)
        if (!introOnCallRef.current) callRef.current?.setAssistantTalking(false);
        if (endAfterSpeechRef.current) {
          // Her goodbye played to its end: the call ends
          if (event.type === "output_audio_buffer.stopped") endCallRef.current(copy().callEnded);
          else {
            // Cut off before its end (they talked over it, or a noise did): the call waits for their words, and ends if
            // none come (see goodbyeCutRef)
            endAfterSpeechRef.current = false;
            goodbyeCutRef.current = true;
            clearTimeout(endTimerRef.current);
            endTimerRef.current = setTimeout(() => goodbyeCutRef.current && endCallRef.current(copy().callEnded), GOODBYE_CUT_WAIT_MS);
          }
        }
        break;
      case "error":
        console.warn("[Aarohi] call:", event.error?.code, event.error?.message);
        break;
      default:
        break;
    }
  };

  const endCall = (note?: string) => {
    callGenRef.current += 1;
    const call = callRef.current;
    if (!call) {
      if (startingRef.current) {
        startingRef.current = false;
        setCallState("off");
      }
      return;
    }
    callRef.current = null;
    endAfterSpeechRef.current = false;
    goodbyeCutRef.current = false;
    clearTimeout(endTimerRef.current);
    onHoldRef.current = false;
    setOnHold(false);
    call.stop();
    clearTimeout(callTimerRef.current);
    heardRef.current.clear();
    botTextRef.current.clear();
    setCallState("off");
    setSpeaking(false);
    setMicMuted(false);
    // Bubbles still waiting for words go; the rest stay as they are
    setMessages((prev) => prev.filter((m) => !(m.key && m.live && !m.text && !m.pending)).map((m) => (m.key && m.live && !m.pending ? { ...m, live: false } : m)));
    if (API) {
      void fetch(`${API}/chat/call/end`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId: sessionIdRef.current }),
      }).catch(() => {});
    }
    if (note && aliveRef.current) void botSay([{ text: note }]);
  };

  useEffect(() => {
    endCallRef.current = endCall;
    autoHoldRef.current = () => {
      if (callRef.current && !onHoldRef.current) toggleHold();
    };
    askStillThereRef.current = () => {
      const call = callRef.current;
      if (!call || onHoldRef.current) return;
      // Asked once already, or their mic is muted (they chose quiet): on hold. Still on the video waiting for their name
      // (the hold's Resume is under it): nobody is there, so the call ends and she goes back into her avatar
      if (checkedInRef.current || micMuted) {
        if (introRef.current === "listening") endCallRef.current(copy().callIdle);
        else autoHoldRef.current();
        return;
      }
      checkedInRef.current = true;
      lastActivityRef.current = Date.now();
      const line = copy().stillThere;
      if (call.say) call.say(line);
      else call.send({ type: "response.create", response: { instructions: `Say only this, warmly and calmly, in one short line: "${line}"` } });
    };
    onCallEventRef.current = onCallEvent;
    checkTeamRef.current = checkTeam;
  });

  // While the chat is open it checks every few seconds whether the team wrote or took the chat over
  useEffect(() => {
    if (!isOpen || !API) return;
    void checkTeamRef.current();
    const timer = setInterval(() => void checkTeamRef.current(), TEAM_CHECK_MS);
    return () => clearInterval(timer);
  }, [isOpen]);

  // Closed: the call ends, so it neither listens nor speaks
  useEffect(() => {
    if (!isOpen) endCallRef.current();
  }, [isOpen]);

  // A call with nobody talking for half the hold-after time (admin → Chatbot Settings, 30 s): she asks whether they are
  // still there; as long again and it goes on hold; on hold for the hold time, it ends
  useEffect(() => {
    if (!inCall) return;
    const timer = setInterval(() => {
      if (onHoldRef.current) {
        const minutes = holdMinutesOf(configRef.current);
        if (Date.now() - holdSinceRef.current > minutes * 60000) endCallRef.current(COPY[langRef.current].callHoldEnded(minutes));
      } else if (herVoicePlayingRef.current) {
        // She is still talking (a long answer): their silence counts from when she stops
        lastActivityRef.current = Date.now();
      } else {
        const holdAfter = holdAfterMs(configRef.current);
        const quietFor = holdAfter ? holdAfter / 2 : Math.min(AUTO_HOLD_MS, callIdleMs(configRef.current));
        if (Date.now() - lastActivityRef.current > quietFor) askStillThereRef.current();
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [inCall]);

  const startCall = async (askTalkOrType = false) => {
    if (callRef.current || startingRef.current || blocked || chatEnded || !API) return;
    startingRef.current = true;
    const gen = ++callGenRef.current;
    stopSpeaking();
    setCallState("connecting");
    let maxSeconds = 600;
    let name = nameRef.current && nameRef.current !== "Visitor" ? nameRef.current : "";
    let greeting = "";
    type Opened = { engine?: string; token?: string; sdp?: string; sessionId: string; maxSeconds: number; name: string; greeting?: string };
    // Asks the backend to open (or ready) the call; what it says about the visitor is kept for the greeting
    const ask = async (request: object): Promise<Opened> => {
      const res = await fetch(`${API}/chat/call`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...request, sessionId: sessionIdRef.current, pageUrl: window.location.pathname, noise: noiseOn }),
      });
      const body = await res.json().catch(() => null);
      if (!res.ok) {
        if (body?.code === "BLOCKED") blockFor(body.blockedFor);
        throw new Error(body?.code || "CALL_FAILED");
      }
      const data = body.data as Opened;
      if (data.engine === "realtime") return data;
      greeting = data.greeting || "";
      if (data.sessionId && data.sessionId !== sessionIdRef.current) {
        sessionIdRef.current = data.sessionId;
        store(SESSION_KEY, data.sessionId);
      }
      // 0: calls have no time limit (admin → Chatbot Settings)
      maxSeconds = typeof data.maxSeconds === "number" ? data.maxSeconds : maxSeconds;
      name = data.name || name;
      return data;
    };
    const callEvents = {
      onEvent: (event: { type: string; [key: string]: unknown }) => onCallEventRef.current(event as unknown as CallEvent),
      onLevel: (level: number) => {
        const ring = micRingRef.current;
        if (ring) ring.style.transform = `scale(${1 + Math.min(level * 14, 0.7)})`;
      },
      onClosed: () => endCallRef.current(COPY[langRef.current].callDropped),
    };
    try {
      // Deepgram hears, OpenAI thinks, Sarvam speaks (in Aarohi's Hindi voice) when the backend offers it;
      // otherwise, or if its connection fails, the OpenAI Realtime call
      let call: Call | null = null;
      // Their earlier conversation first (it may carry on in another session: the team closed this one): whether she
      // greets or carries on depends on it
      if (restoreRef.current) await restoreRef.current;
      const ready = await ask({ engine: "pipeline" });
      if (ready.engine === "pipeline" && ready.token) {
        try {
          call = await openPipelineCall(callSocketUrl(ready.token), callEvents, { noiseCancel: noiseOn });
        } catch (error) {
          const reason = (error as DOMException)?.name;
          if (reason === "NotAllowedError" || reason === "NotFoundError") throw error;
          console.warn("[Aarohi] pipeline call failed, trying the realtime call:", (error as Error)?.message);
        }
      }
      if (!call) call = await openCall({ ...callEvents, connect: async (offer) => (await ask({ sdp: offer })).sdp || "" }, { noiseCancel: noiseOn });
      startingRef.current = false;
      // Closed (or ended) while it was connecting: hang up straight away, nothing is heard or said
      if (gen !== callGenRef.current || !aliveRef.current || !activeRef.current) {
        call.stop();
        void fetch(`${API}/chat/call/end`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId: sessionIdRef.current }),
        }).catch(() => {});
        if (gen === callGenRef.current) setCallState("off");
        return;
      }
      callRef.current = call;
      lastActivityRef.current = Date.now();
      checkedInRef.current = false;
      setCallState("on");
      setMicMuted(false);
      // Aarohi speaks first, in Hindi: opened by the chat, the welcome from AI Training asks "talk or type?"
      choosingRef.current = askTalkOrType;
      const welcome =
        askTalkOrType && greeting
          ? greeting
          : name
            ? `नमो गंगे नमस्कार ${name} जी! बताइए, आज मैं आपकी क्या सहायता करूँ?`
            : `नमो गंगे नमस्कार! मैं ${botNameFor(configRef.current, "hi")}, मोक्ष सेवा से। बताइए, मैं आपकी क्या सहायता कर सकती हूँ?`;
      // The realtime call (no "said") greets on its own, so it can't carry on from the video's question: from the video
      // back into her avatar now, as before
      if ((introRef.current === "listening" || introRef.current === "on") && !call.said) finishIntroRef.current();
      // After her intro video she has greeted them and asked their name: the call just listens (and knows it)
      if (introGreetedRef.current && call.said) {
        introGreetedRef.current = false;
        call.said(INTRO_TEXT);
        // The video is still talking: its voice at the mic is hers, and only their name is answered until it has asked
        if (introRef.current === "on") {
          introOnCallRef.current = true;
          call.send({ type: "pipeline.intro", playing: true });
          call.setAssistantTalking(true);
        }
      }
      // A conversation to carry on (the chat closed and opened again, or the page reloaded): no new greeting and no
      // "talk or type?"; she picks up from where it stopped (the server gives her the conversation so far)
      else if (talkedRef.current) {
        choosingRef.current = false;
        if (call.said) call.send({ type: "pipeline.resume", reopened: true });
        else
          call.send({
            type: "response.create",
            response: {
              instructions:
                "The visitor has come back to this conversation. Don't greet them, introduce yourself or ask their name again: in one or two short sentences, in Hindi written in Devanagari, pick up where you left off and ask how they would like to go on.",
            },
          });
      }
      // Spoken from Devanagari, which gives the voice its natural Hindi accent
      else if (call.say) call.say(welcome);
      else
        call.send({
          type: "response.create",
          response: { instructions: `Greet the visitor now, warmly and naturally in your calm voice, with this welcome and nothing else, in Hindi written in Devanagari: "${welcome}"` },
        });
      clearTimeout(callTimerRef.current);
      if (maxSeconds > 0) callTimerRef.current = setTimeout(() => endCallRef.current(COPY[langRef.current].callEnding), maxSeconds * 1000);
    } catch (error) {
      startingRef.current = false;
      if (gen !== callGenRef.current) return; // closed meanwhile
      setCallState("off");
      if (blockedTill > Date.now()) return;
      // The team has the chat: they are written to here
      const team = (error as Error)?.message === "TEAM";
      if (team) setTeam(true);
      // Opened by the chat itself: no call (mic not allowed, no connection) simply means the typed chat
      if (askTalkOrType) {
        endedByHandRef.current = true;
        if (!messages.length) void startChat();
        else continueTyping();
        return;
      }
      if (team) {
        void botSay([{ text: copy().teamOnCall }]);
        return;
      }
      const reason = (error as DOMException)?.name;
      void botSay([
        { text: reason === "NotAllowedError" ? copy().micDenied : reason === "NotFoundError" ? copy().micNotFound : copy().callFailed },
      ]);
    }
  };

  const setTeam = (on: boolean) => {
    if (teamLiveRef.current === on) return;
    teamLiveRef.current = on;
    setTeamLive(on);
    if (on) {
      stopSpeaking();
      setIsTyping(false);
      endCall();
    }
  };

  const teamChecking = useRef(false);
  const checkTeam = async () => {
    if (teamChecking.current || document.hidden || !sessionIdRef.current || !API) return;
    teamChecking.current = true;
    try {
      const res = await fetch(`${API}/chat/updates?session=${encodeURIComponent(sessionIdRef.current)}&since=${teamSinceRef.current}`, { cache: "no-store" });
      const data = res.ok ? ((await res.json())?.data as TeamUpdates | undefined) : undefined;
      if (!data || !aliveRef.current) return;
      /* The team deleted or emptied this chat (admin → Chat Visitors): what is gone isn't shown any more. A new
         conversation starts (a new session, the name asked again), with the greeting if the chat is open. */
      if (data.gone) {
        endCallRef.current();
        stopSpeaking();
        // …and the name given in it is forgotten here too: asked again, as for anyone new
        remember(newSessionId(), "");
        talkedRef.current = false;
        restoreRef.current = null;
        teamSeenRef.current.clear();
        teamSinceRef.current = 0;
        setMessages([]);
        if (activeRef.current) void startChat();
        return;
      }
      // The team lifted the block (admin → Chat Visitors → Unblock): the chat opens again here too
      if (data.blocked === false && blockedUntil()) {
        store(BLOCK_KEY, JSON.stringify({ strikes: 0, until: 0 }));
        setClock(Date.now());
        setBlockedTill(0);
      }
      const first = teamSinceRef.current === 0;
      const fresh = data.messages.filter((m) => !teamSeenRef.current.has(m.at));
      fresh.forEach((m) => teamSeenRef.current.add(m.at));
      // A little before the server's time, in case a message was being saved just then (seen ones aren't shown twice)
      teamSinceRef.current = Math.max(teamSinceRef.current, data.serverTime - 15000);
      const shown = first ? fresh.filter((m) => m.at > data.serverTime - TEAM_RECENT_MS) : fresh;
      if (shown.length) {
        const bubbles = shown.map((m): Message => ({ id: ++idRef.current, from: "agent", text: m.text, by: m.by, event: m.event, files: m.files, at: m.at }));
        setMessages((prev) => [...prev, ...bubbles]);
        if (activeRef.current) playIncoming();
      }
      setTeam(data.agent);
    } catch {
      // tried again on the next check
    } finally {
      teamChecking.current = false;
    }
  };

  const toggleCallMic = () => {
    const next = !micMuted;
    setMicMuted(next);
    if (!onHoldRef.current) callRef.current?.setMuted(next);
  };

  // Hold: she stops at once and the mic goes off. Resume: the mic as it was, and she picks up where they left off
  // (no new greeting)
  const toggleHold = () => {
    const call = callRef.current;
    if (!call) return;
    const next = !onHoldRef.current;
    onHoldRef.current = next;
    setOnHold(next);
    lastActivityRef.current = Date.now();
    if (next) holdSinceRef.current = Date.now();
    if (next) {
      // Nothing of hers is heard until Resume, not even a reply to what they said just before Hold
      call.hold(true);
      call.setMuted(true);
    } else {
      call.setMuted(micMuted);
      call.hold(false);
      // She carries on at once; if the visitor talks over her, she stops and listens (see resume in chatCall.ts)
      call.resume();
    }
  };

  const toggleNoise = () => {
    const next = !noiseOn;
    setNoiseOn(next);
    store(NOISE_KEY, next ? "" : "0");
    callRef.current?.setNoiseCancel(next);
  };

  // Typed during a call: it goes into the same conversation and Aarohi answers aloud
  const typeInCall = (text: string) => {
    const call = callRef.current;
    if (!call) return;
    userSay(text);
    saveTurn("user", text);
    lastActivityRef.current = Date.now();
    checkedInRef.current = false;
    // Typed while on hold: the call carries on, with her answer to it (on hold she would say nothing)
    if (onHoldRef.current) {
      onHoldRef.current = false;
      setOnHold(false);
      call.setMuted(micMuted);
      call.hold(false);
    }
    call.send({ type: "conversation.item.create", item: { type: "message", role: "user", content: [{ type: "input_text", text }] } });
    call.send({ type: "response.create" });
  };

  // The mic: a spoken call where the browser can make one (as in the Design House chat), otherwise a voice message
  const onMic = () => {
    audio();
    if (teamLiveRef.current && !callRef.current) {
      void botSay([{ text: copy().teamOnCall }]);
      return;
    }
    if (canTalk) {
      if (callRef.current) {
        endedByHandRef.current = true;
        endCall(copy().callEnded);
      } else void startCall();
      return;
    }
    if (mic === "recording") {
      if (recorderRef.current?.state === "recording") recorderRef.current.stop();
    } else void startRecording();
  };

  // Blocked by the backend: for `forMs`, or until the team lifts it (null)
  const blockFor = (forMs: number | null | undefined) => {
    const until = Date.now() + (forMs && forMs > 0 ? forMs : 100 * 365 * BLOCK_MS);
    store(BLOCK_KEY, JSON.stringify({ strikes: 0, until }));
    setClock(Date.now());
    setBlockedTill(until);
  };

  const copy = () => COPY[langRef.current];
  const switchLang = (text: string) => {
    const next = detectLang(text);
    if (!next || next === langRef.current) return;
    langRef.current = next;
    setLang(next);
  };

  /* ── Scripted lines (welcome, name, quick buttons): queued so they appear one after another, each after a
     short "typing..." ── */
  const botSay = (lines: Line[]) => {
    queueRef.current = queueRef.current.then(async () => {
      for (const line of lines) {
        if (!aliveRef.current) return;
        setIsTyping(true);
        await sleep(350 + Math.min(line.text.length * 4, 500));
        if (!aliveRef.current) return;
        setIsTyping(false);
        const bubble: Message = { id: ++idRef.current, from: "bot", at: Date.now(), ...line };
        setMessages((prev) => [...prev, bubble]);
        // A reply that arrives while the chat is closed just waits in the chat, silently
        if (activeRef.current) playIncoming();
        speak([line.title, line.text].filter(Boolean).join(". "));
        await sleep(280);
      }
    });
    return queueRef.current;
  };

  const userSay = (text: string) => {
    stopSpeaking(); // the visitor moved on: don't keep reading the old reply
    setMessages((prev) => [...prev, { id: ++idRef.current, from: "user", text, at: Date.now() }]);
    playSent();
  };

  // Scripted parts of the chat (quick buttons) are saved with it too, so the team sees the whole conversation
  const track = (lines: Array<{ role: "user" | "assistant"; content: string }>) => {
    if (!API || !sessionIdRef.current) return;
    void fetch(`${API}/chat/track`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId: sessionIdRef.current, pageUrl: window.location.pathname, messages: lines.map((l) => ({ ...l, content: l.content.slice(0, 2000) })) }),
    }).catch(() => {});
  };

  // The quick buttons: the ones the team published in the Chatbot Manager, or the built-in ones
  const chips = (): Chip[] => {
    const published = configRef.current?.buttons;
    if (!published?.length) return DEFAULT_CHIPS[langRef.current];
    return published.map((b): Chip => {
      const label = (langRef.current === "hi" && b.hindi) || b.label;
      if (b.action === "Open Form" || b.action === "Talk to Team") return { kind: "team", label };
      if (!b.reply && !(b.action === "Open Link" && b.target)) return { kind: "ask", label };
      return { kind: "answer", label, reply: b.reply || "", options: b.action === "Show Options" ? b.options : undefined, target: b.action === "Open Link" ? b.target : undefined };
    });
  };

  const welcomeLines = (): Line[] => {
    const trained = configRef.current?.greeting?.[langRef.current];
    if (trained?.chat) return [{ title: trained.title || copy().greeting, text: trained.chat }];
    const own = configRef.current?.messages?.[langRef.current] || configRef.current?.messages?.en;
    return [{ title: own?.welcomeGreeting || copy().greeting, text: own?.welcomeMessage || copy().intro(botNameFor(configRef.current, langRef.current)) }];
  };

  const remember = (sessionId: string, name: string, salutation = "") => {
    sessionIdRef.current = sessionId;
    store(SESSION_KEY, sessionId);
    nameRef.current = name;
    store(NAME_KEY, name);
    store(SALUTATION_KEY, salutation);
  };

  // How Aarohi addresses the visitor (with "ji"): the confirmed form, else the name, never "Visitor"
  const addressOf = () => stored(SALUTATION_KEY) || (nameRef.current && nameRef.current !== "Visitor" ? nameRef.current : "");

  // POST /chat/start: saves the name (and how to address them) on the chat. The same name from the same place
  // carries on an earlier chat for the team; its messages come back only in the same browser.
  const startByName = async (name: string, salutation = "") => {
    const res = await fetch(`${API}/chat/start`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId: sessionIdRef.current, name, salutation, pageUrl: window.location.pathname }),
    });
    if (res.status === 400) return { ok: false as const, badName: true };
    if (res.status === 403) {
      const body = await res.json().catch(() => null);
      if (body?.code === "BLOCKED") {
        blockFor(body.blockedFor);
        return { ok: false as const, blocked: true };
      }
    }
    if (!res.ok) throw new Error(String(res.status));
    const data = (await res.json())?.data as {
      sessionId: string;
      resumed?: boolean;
      messages?: SavedMessage[];
    };
    remember(data.sessionId || sessionIdRef.current, name, salutation);
    return { ok: true as const, history: asMessages(data.messages), resumed: Boolean(data.resumed) };
  };

  /** Saved messages as the chat shows them (the team's that the live check already showed aren't shown twice) */
  const asMessages = (saved: SavedMessage[] = []) =>
    saved
      .filter((m) => m.content?.trim() || m.files?.length)
      .filter((m) => !(m.role === "agent" && m.createdAt && teamSeenRef.current.has(Date.parse(m.createdAt))))
      .map((m): Message => {
        const at = m.createdAt ? Date.parse(m.createdAt) : undefined;
        if (m.role !== "agent") return { id: ++idRef.current, from: m.role === "user" ? "user" : "bot", text: m.content, at };
        if (at) teamSeenRef.current.add(at);
        return { id: ++idRef.current, from: "agent", text: m.content, by: m.by, event: m.event, files: m.files, at };
      });

  /** POST /chat/resume: this browser's conversation as it was left, and the name given in it (read only) */
  const resumeSession = async () => {
    const res = await fetch(`${API}/chat/resume`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId: sessionIdRef.current }),
    });
    if (!res.ok) return null;
    return (await res.json())?.data as { found: boolean; forget?: boolean; name: string; salutation: string; messages: SavedMessage[] } | null;
  };

  /* The conversation so far, from the server, into the chat: once per page, whichever starts first (the call or the
     typed chat), and only for a visitor whose name it knows (this browser's chat). None when this page already has a
     conversation in it (it is the one going on). */
  const restoreEarlier = () => {
    if (!restoreRef.current)
      restoreRef.current = (async () => {
        if (!API || talkedRef.current) return null;
        /* This browser's own conversation first (its session id, kept in the browser): its messages and the name given
           in it, even when the browser has lost the name, or never had one. Nothing else is looked up for it. */
        const session = await resumeSession().catch(() => null);
        // The team deleted this chat: this browser forgets it and the name given in it (a new visitor from here on)
        if (session?.forget) {
          remember(newSessionId(), "");
          return null;
        }
        if (session?.found && session.messages.length && !talkedRef.current) {
          if (session.name && !nameRef.current) {
            remember(sessionIdRef.current, session.name, session.salutation);
            setAskingName(false);
          }
          const earlier = asMessages(session.messages);
          talkedRef.current = true;
          setMessages((prev) => [...earlier, ...prev]);
          return { history: earlier, resumed: false };
        }
        // None here: their earlier chat by the name they gave (from this place, as before)
        const saved = nameRef.current;
        if (!saved || talkedRef.current) return null;
        const result = await startByName(saved, stored(SALUTATION_KEY)).catch(() => null);
        if (!result?.ok) return null;
        if (result.history.length) {
          const earlier = result.history;
          talkedRef.current = true;
          setMessages((prev) => [...earlier, ...prev]);
        }
        return { history: result.history, resumed: result.resumed };
      })();
    return restoreRef.current;
  };

  /* A returning visitor (a reload, another page, coming back later): their conversation comes back as the page loads, so
     it is there when the chat opens and carries on from its last words (and the intro, which greets them and asks their
     name, isn't played again) */
  const restoredOnLoadRef = useRef(false);
  useEffect(() => {
    if (restoredOnLoadRef.current) return;
    restoredOnLoadRef.current = true;
    if (hadSessionRef.current) void restoreEarlier();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ── When opened: "Namo Gange Namaskar", then the name; with an earlier conversation, it simply goes on ── */
  const lastStartRef = useRef(0);
  const startChat = async () => {
    // Opened twice in a row (a failed call falling back, a double click): the greeting is said once
    if (Date.now() - lastStartRef.current < 4000) return;
    lastStartRef.current = Date.now();
    const saved = nameRef.current;
    const shown = addressOf();
    if (!saved) {
      await botSay([...welcomeLines(), { text: copy().askName }]);
      return;
    }
    setIsTyping(true);
    const result = await restoreEarlier();
    setIsTyping(false);
    // The team deleted their chat, and with it the name this browser kept: asked again, as for anyone new
    if (!nameRef.current) {
      await botSay([...welcomeLines(), { text: copy().askName }]);
      return;
    }
    // Their earlier conversation is back in the chat: it carries on from its last words, with no new greeting
    if (result?.history.length) return;
    // Picked up by name from another browser (its messages stay with the team): welcomed back
    if (result?.resumed) await botSay([{ text: shown ? copy().welcomeBack(shown) : copy().welcome(""), chips: chips() }]);
    else await botSay([...welcomeLines(), { text: copy().welcome(shown), chips: chips() }]);
  };

  /* ── A question for Aarohi: POST /chat streams the reply (Server-Sent Events) into one bubble ── */
  const ask = async (question: string, retry = true): Promise<void> => {
    await queueRef.current; // let the scripted lines finish first
    let restart = false;
    // The server closed the chat for abusive words (for this long; null: until the team lifts it)
    let closedFor: number | null | undefined;
    // Her offer of a call with the team now (or their asking for one): the card under her reply
    let offer: { verified: boolean; last4: string } | undefined;
    setBusy(true);
    if (!teamLiveRef.current) setIsTyping(true);
    let reply = "";
    let bubbleId = 0;
    const show = (text: string) => {
      if (!aliveRef.current) return;
      if (!bubbleId) {
        const id = ++idRef.current;
        bubbleId = id;
        setIsTyping(false);
        setMessages((prev) => [...prev, { id, from: "bot", text, at: Date.now(), live: true }]);
        if (activeRef.current) playIncoming();
      } else {
        const id = bubbleId;
        setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, text } : m)));
      }
    };
    try {
      if (!API) throw new Error("No API");
      const res = await fetch(`${API}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId: sessionIdRef.current, message: question, pageUrl: window.location.pathname }),
      });
      if (!res.ok || !res.body) {
        const body = await res.json().catch(() => null);
        if (res.status === 403 && body?.code === "BLOCKED") blockFor(body.blockedFor);
        else if (res.status === 409 && body?.code === "CHAT_CLOSED" && retry) restart = true;
        else if (res.status === 403 && body?.code === "DETAILS_REQUIRED") {
          // The chat lost its name (cleared on the server): ask for it again, then answer this
          remember(sessionIdRef.current, "");
          pendingRef.current = question;
          setAskingName(true);
          show(copy().askName);
        } else show(res.status === 429 ? copy().tooFast(phoneRef.current) : copy().offline(phoneRef.current));
        return;
      }
      // The team has taken the chat over: the message went to them and Aarohi doesn't reply
      if ((res.headers.get("content-type") || "").includes("application/json")) {
        const body = await res.json().catch(() => null);
        if (body?.data?.agent) {
          setTeam(true);
          return;
        }
        throw new Error("Unexpected reply");
      }
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      for (;;) {
        const { value, done } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        let cut = buffer.indexOf("\n\n");
        while (cut >= 0) {
          const event = buffer.slice(0, cut);
          buffer = buffer.slice(cut + 2);
          cut = buffer.indexOf("\n\n");
          for (const line of event.split("\n")) {
            if (!line.startsWith("data:")) continue;
            let data: { delta?: string; error?: string; blocked?: boolean; blockedFor?: number | null; offerCall?: { verified: boolean; last4: string } } = {};
            try {
              data = JSON.parse(line.slice(5).trim());
            } catch {
              continue;
            }
            // Abusive words after the final warning: the server closed the chat for a day (shown once her line is in)
            if (data.blocked) {
              closedFor = data.blockedFor ?? null;
              continue;
            }
            if (data.offerCall) {
              offer = data.offerCall;
              continue;
            }
            if (typeof data.delta === "string") reply += data.delta;
            else if (typeof data.error === "string") reply = data.error;
            else continue;
            show(reply);
          }
        }
      }
      if (!reply) show(copy().offline(phoneRef.current));
    } catch {
      if (!reply) show(copy().offline(phoneRef.current));
    } finally {
      setIsTyping(false);
      const id = bubbleId;
      if (id) setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, live: false, ...(offer ? { callOffer: offer } : {}) } : m)));
      setBusy(false);
    }
    // The team closed the chat (admin → Chat Visitors): a new one starts, under the same name, and the question goes again
    if (restart) {
      sessionIdRef.current = newSessionId();
      store(SESSION_KEY, sessionIdRef.current);
      if (nameRef.current) await startByName(nameRef.current).catch(() => null);
      return ask(question, false);
    }
    if (closedFor !== undefined) {
      // (her closing line is the reply just shown)
      closeForAbuse(() => blockFor(closedFor), closedFor === null, true);
      return;
    }
    if (reply) speak(reply);
    // "ok thanks, bye" answered without a question back: the chat ends shortly (it can be resumed)
    if (VISITOR_DONE.test(question.trim()) && reply && !/[?؟]\s*$/.test(reply.trim())) closingAtRef.current = Date.now() + CHAT_END_AFTER_GOODBYE_MS;
  };

  /* ── The name, before the first answer (Aarohi's script: name first, then how they like to be addressed) ── */
  const takeName = async (text: string) => {
    const said = text.trim();

    // Answering "Kya main aapko Vijay ji kehkar bula sakti hoon?" (or "Aapko kis naam se…?")
    const asked = salutationRef.current;
    if (asked) {
      if (!asked.choosing && SAYS_YES.test(said)) return finishName(asked.name, asked.first);
      const preferred = extractName(said.replace(SAYS_NO, "").replace(ADDRESS_WORDS, " ").replace(/\s+/g, " ").trim());
      if (preferred) return finishName(asked.name, preferred);
      if (!asked.choosing) {
        salutationRef.current = { ...asked, choosing: true };
        await botSay([{ text: copy().askSalutation }]);
        return;
      }
      return finishName(asked.name, asked.first);
    }

    // A death, an urgent need or distress: help comes first, the name can wait (it is never a condition for help)
    if (URGENT.test(said)) {
      pendingRef.current = said;
      return finishName("", "");
    }

    // "hi", "hii", "hello", "namaste"… are greetings, never a name
    const name = GREETING.test(said) ? null : extractName(said);
    const refused = !name && REFUSES.test(said) && said.split(/\s+/).length <= 4;
    if (!name && !refused) {
      nameAsksRef.current += 1;
      if (!GREETING.test(said) && said.split(/\s+/).length > 1 && !pendingRef.current) pendingRef.current = said;
      if (nameAsksRef.current < MAX_NAME_ASKS) {
        const again = GREETING.test(said) ? copy().askName : pendingRef.current ? copy().nameFirst : copy().badName;
        await botSay([{ text: again }]);
        return;
      }
    }
    if (!name) return finishName("", "", refused);
    // A full name: confirm how to address them ("Vijay Sharma" → "…Vijay ji kehkar…?"); a single name is used as it is
    const first = name.split(" ")[0];
    if (name.includes(" ")) {
      salutationRef.current = { name, first };
      await botSay([{ text: copy().confirmSalutation(first) }]);
      return;
    }
    return finishName(name, name);
  };

  // The name (and how to address them) is saved and the chat goes on; no name: saved as "Visitor" for the team
  const finishName = async (name: string, salutation: string, refused = false) => {
    salutationRef.current = null;
    setBusy(true);
    let result: Awaited<ReturnType<typeof startByName>> | null = null;
    try {
      result = API ? await startByName(name || "Visitor", salutation) : null;
    } catch {
      result = null;
    }
    setBusy(false);
    if (result && !result.ok) {
      if (!("blocked" in result)) await botSay([{ text: copy().badName }]);
      return;
    }
    if (!result) remember(sessionIdRef.current, name || "Visitor", salutation);
    setAskingName(false);
    const shownName = salutation || name || ""; // never called "Visitor" in the chat
    if (result?.ok && result.history.length) {
      const earlier = result.history;
      setMessages((prev) => [...earlier, ...prev]);
    }
    const pending = pendingRef.current;
    pendingRef.current = "";
    if (pending) {
      if (shownName) await botSay([{ text: copy().thanks(shownName) }]);
      await ask(pending);
    } else {
      const back = result?.ok && (result.history.length || result.resumed) && shownName;
      await botSay([{ text: back ? copy().welcomeBack(shownName) : refused ? copy().noName : copy().welcome(shownName), chips: chips() }]);
    }
  };

  /* ── Opening, closing, ending ── */
  // Whether opening the chat starts the voice call (else the typed chat)
  const callPossible = () => canTalk && Boolean(API) && !endedByHandRef.current && !teamLiveRef.current && blockedUntil() === 0;
  // What opening the chat starts: the voice call, else the typed chat
  const begin = () => {
    if (!activeRef.current || chatEnded || callRef.current) return;
    if (callPossible()) {
      // Their earlier conversation comes back into the chat while the call connects (the call carries on from it)
      void restoreEarlier();
      void startCall(true);
      return;
    }
    if (startedRef.current) return;
    startedRef.current = true;
    void startChat();
  };

  const open = (mode: OpenMode = "auto") => {
    audio(); // inside the click, so replies that arrive later can play
    playOpen();
    setIsOpen(true);
    setIsMinimized(false);
    activeRef.current = true;
    if (window.matchMedia("(min-width: 640px)").matches) setTimeout(() => inputRef.current?.focus(), 450);
    // "चैट करें" (the launcher): the typed chat, with no intro video and no call
    if (mode === "chat") {
      introPlayed = true;
      if (!startedRef.current && !chatEnded && !callRef.current) {
        startedRef.current = true;
        void startChat();
      }
      return;
    }
    // The first time on this page: her intro video, then the call (so her two voices never overlap, and the call's
    // microphone doesn't hear the video). Not for a visitor she knows already: it greets them and asks their name, and
    // their conversation carries on instead (restoreEarlier, startCall)
    if (!introPlayed && !chatEnded && !callRef.current && !nameRef.current && !talkedRef.current) {
      introPlayed = true;
      setIntroProgress(0);
      setIntroTime(0);
      setIntroMuted(false);
      setIntroQuiet(false);
      introQuietRef.current = false;
      introBegunRef.current = false;
      setIntroSaid(true);
      setIntro("on");
      /* The call starts with the video, so it is listening by the time she asks their name and hears a name said while
         she is still talking (it began only after the video, and took ~3 s to connect: a name said meanwhile was lost).
         It knows she has greeted them and asked it, and that the video is talking (see startCall). */
      if (callPossible()) {
        introGreetedRef.current = true;
        void startCall(true);
      }
      return;
    }
    begin();
  };

  /* She has asked their name ("आपको किस नाम से संबोधित करूँ?"): the video stays, held on her smile, and the call starts
     and listens. She goes back into her avatar once she has heard their name (runCallTools), not before — even if this
     browser remembers a name from before (someone else may be at it now; she asked, so their answer counts). Only if
     there can be no call here (no mic, the team has the chat…) does she go back at once, so they can type. */
  const listenForName = () => {
    // (once: seeking the video to her smile sends one more time update before the next render)
    if (intro !== "on" || introBegunRef.current) return;
    const video = introVideoRef.current;
    // (the call itself may be on already: it starts with the video)
    if (!video || isMinimized || !activeRef.current || chatEnded || !callPossible()) {
      finishIntro();
      return;
    }
    video.pause();
    video.muted = true;
    video.currentTime = INTRO_LISTEN_AT;
    setIntroTime(99);
    // The call knows she has greeted them and asked their name, and only listens
    introGreetedRef.current = true;
    introBegunRef.current = true;
    setListenFrom(messages.length);
    setListenSince(Date.now());
    setClock(Date.now());
    setIntro("listening");
    begin();
  };

  // She has finished (or it was skipped, or she has heard their name): the video goes back into her avatar, and the call
  // starts (unless it already has, while she waited for their name)
  const finishIntro = () => {
    if (intro === "listening") {
      setIntro("leaving");
      return;
    }
    if (intro !== "on") return;
    if (introVideoRef.current) introVideoRef.current.muted = true;
    setIntroTime(99);
    introGreetedRef.current = true;
    setIntro("leaving");
  };
  const finishIntroRef = useRef(finishIntro);
  const beginRef = useRef(begin);
  useEffect(() => {
    finishIntroRef.current = finishIntro;
    beginRef.current = begin;
    introRef.current = intro;
  });
  // The video has stopped talking (it asked their name and waits, it is going, or it was skipped): the call is told,
  // and answers what it heard meanwhile; her own voice, if it is playing, still counts as her talking
  useEffect(() => {
    if (intro === "on" || !introOnCallRef.current) return;
    introOnCallRef.current = false;
    callRef.current?.send({ type: "pipeline.intro", playing: false });
    if (!herVoicePlayingRef.current) callRef.current?.setAssistantTalking(false);
  }, [intro]);

  /* Waiting for their name: the call's clock goes on. If the call ends or couldn't start (no mic allowed, the team took
     the chat over, nobody there), she goes back into her avatar at once, so the chat underneath can be used. */
  useEffect(() => {
    if (intro !== "listening") return;
    const tick = setInterval(() => setClock(Date.now()), 1000);
    return () => clearInterval(tick);
  }, [intro]);
  useEffect(() => {
    if (intro === "listening" && callState === "off" && !startingRef.current) finishIntroRef.current();
  }, [intro, callState]);

  /* The video call opens out of her avatar: a circle that grows from it over the whole window, her face coming out of
     the avatar's picture to its place in the video (before the first paint, so the video never flashes in full) */
  useLayoutEffect(() => {
    if (intro !== "on" || isMinimized) return;
    const box = introBoxRef.current;
    const video = introVideoRef.current;
    const avatar = avatarRef.current;
    if (!box || !video || !avatar) return;
    const at = introGeometry(box, avatar);
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timing = { duration: still ? 1 : 820, delay: still ? 0 : 260, easing: "cubic-bezier(.22,.9,.25,1)", fill: "both" as const };
    const opening = box.animate([{ clipPath: at.small }, { clipPath: at.full }], timing);
    const face = video.animate([{ transform: at.inAvatar }, { transform: "none" }], timing);
    // Done: no clipping left (the window may be resized while she talks)
    opening.onfinish = () => {
      opening.cancel();
      face.cancel();
    };
    return () => {
      opening.cancel();
      face.cancel();
    };
    // Once per intro: the window's layout is settled by then (its open animation only scales it)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intro]);

  /* She has finished: the captions fade, and the video closes onto her avatar, her face shrinking into its circle;
     the avatar then glows as she lands, and the call starts */
  useEffect(() => {
    if (intro !== "leaving") return;
    let done = false;
    const land = () => {
      if (done) return;
      done = true;
      introVideoRef.current?.pause();
      setIntro("off");
      setAvatarLanding(true);
      setTimeout(() => setAvatarLanding(false), 900);
      if (!introBegunRef.current) beginRef.current();
    };
    const box = introBoxRef.current;
    const video = introVideoRef.current;
    const avatar = avatarRef.current;
    if (!box || !video || !avatar || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      land();
      return;
    }
    const at = introGeometry(box, avatar);
    // Starts shrinking at once (no delay, a quick start): she goes the moment she has heard their name
    const timing = { duration: 650, delay: 0, easing: "cubic-bezier(.3,0,.2,1)", fill: "forwards" as const };
    const closing = box.animate(
      [
        { clipPath: at.full, opacity: 1 },
        { clipPath: at.small, opacity: 1, offset: 0.9 },
        { clipPath: at.small, opacity: 0 },
      ],
      timing
    );
    video.animate([{ transform: "none" }, { transform: at.inAvatar, offset: 0.9 }, { transform: at.inAvatar }], timing);
    closing.onfinish = land;
    const fallback = setTimeout(land, 1200);
    return () => {
      // Landed, or the chat was closed meanwhile (no call then)
      done = true;
      clearTimeout(fallback);
    };
  }, [intro]);

  /* Her video plays with its own voice (the chat was opened by a click, so the page may play sound). If the browser
     still holds the sound back, it plays silently and a 🔊 lets them hear it. Its words come as captions as she says
     them, and the intro ends when the video does. */
  useEffect(() => {
    if (intro !== "on") return;
    const video = introVideoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.loop = false;
    video.muted = introQuietRef.current;
    video.play().catch(() => {
      video.muted = true;
      setIntroMuted(true);
      void video.play().catch(() => finishIntroRef.current());
    });
    return () => video.pause();
  }, [intro]);

  useEffect(() => {
    openRef.current = open;
  });

  const openedAtOnceRef = useRef(false);
  useEffect(() => {
    if (!openAtOnce || openedAtOnceRef.current) return;
    openedAtOnceRef.current = true;
    open(openAtOnce);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openAtOnce]);

  // The goodbye was a little while ago: the chat ends, unless the visitor is still writing
  useEffect(() => {
    const timer = setInterval(() => {
      const at = closingAtRef.current;
      if (!at || Date.now() < at) return;
      if (inputRef.current?.value.trim()) closingAtRef.current = Date.now() + 500;
      else {
        closingAtRef.current = null;
        setChatEnded(true);
      }
    }, 500);
    return () => clearInterval(timer);
  }, []);

  const resumeChat = () => {
    audio();
    setChatEnded(false);
    // Same session: no second welcome, just carry on (the script: never greet twice)
    void botSay([{ text: copy().welcome(addressOf()), chips: chips() }]);
  };

  // Closing plays the shrink animation first
  const closeChat = () => {
    if (closing) return;
    // Off the screen at once: no reply is spoken and the call (even one still connecting) hangs up
    activeRef.current = false;
    stopSpeaking();
    introVideoRef.current?.pause();
    setIntro("off");
    if (recorderRef.current?.state === "recording") recorderRef.current.stop();
    endCall();
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      setIsOpen(false);
    }, 240);
  };

  // On a phone the chat covers the page: a link to one of the site's pages closes it, so the page is seen
  const onNavigate = () => {
    if (window.matchMedia("(max-width: 639px)").matches) closeChat();
  };

  /* ── Sending ── */
  /* An abusive message: a warning, said aloud in a call and written in the chat ("main aapko pehli warning de rahi
     hoon"); after STRIKES_TO_BLOCK of them the chat closes for a day (the call ends first) */
  const warn = (strikes: number) => {
    const text = copy().abuseWarning(strikes, addressOf());
    const call = callRef.current;
    if (!call) {
      void botSay([{ text }]);
      return;
    }
    lastActivityRef.current = Date.now();
    if (call.say) call.say(text);
    else call.send({ type: "response.create", response: { instructions: `Say only this, calmly and firmly, in the visitor's language (Hindi in Devanagari): "${text}"` } });
  };
  /* The chat closes for abusive words: her closing line first (24 hours, or until the team opens it: `permanent`) — said
     in a call, which ends once it has been heard; written in the typed chat. `said`: she has said it already */
  const closeForAbuse = (block: () => void, permanent = false, said = false) => {
    const line = copy().abuseBlocked(permanent, addressOf());
    const call = callRef.current;
    if (!call) {
      if (!said) botSay([{ text: line }]);
      void queueRef.current.then(block);
      return;
    }
    if (!said) {
      if (call.say) call.say(line);
      else call.send({ type: "response.create", response: { instructions: `Say only this, calmly and firmly, in the visitor's language (Hindi in Devanagari): "${line}"` } });
    }
    // The call ends once her line has been heard (it starts within a moment; at most 20 s in all)
    const since = Date.now();
    const timer = setInterval(() => {
      const waited = Date.now() - since;
      if (waited < 2500 || (herVoicePlayingRef.current && waited < 20000)) return;
      clearInterval(timer);
      endCallRef.current();
      block();
    }, 300);
  };
  const strike = async () => {
    if (API) {
      try {
        const res = await fetch(`${API}/chat/abuse`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId: sessionIdRef.current }),
        });
        const data = res.ok ? (await res.json())?.data : null;
        if (data) {
          if (data.blocked) closeForAbuse(() => blockFor(data.blockedFor), data.blockedFor === null);
          else warn(data.strikes || 1);
          return;
        }
      } catch {
        // counted in this browser instead
      }
    }
    const { strikes } = readBlock();
    const next = strikes + 1;
    const until = next >= STRIKES_TO_BLOCK ? Date.now() + BLOCK_MS : 0;
    store(BLOCK_KEY, JSON.stringify({ strikes: until ? 0 : next, until }));
    if (until)
      closeForAbuse(() => {
        setClock(Date.now());
        setBlockedTill(until);
      });
    else warn(next);
  };

  const send = (text: string) => {
    if (!text || blocked || (busy && !callRef.current) || chatEnded) return;
    closingAtRef.current = null; // the count restarts after the reply to this
    // An abusive message is never shown or sent; a few of them block the chat for a day
    if (isAbusive(text)) {
      void strike();
      return;
    }
    switchLang(text);
    if (callRef.current && choosingRef.current) {
      choosingRef.current = false;
      // "bolkar": the call carries on
      if (WANTS_TO_TALK.test(text) && !WANTS_TO_TYPE.test(text)) {
        typeInCall(text);
        return;
      }
      endedByHandRef.current = true;
      endCall();
      startedRef.current = true;
      // "likhkar": the typed chat starts (name first); anything else is their first message
      if (WANTS_TO_TYPE.test(text) && text.trim().split(/\s+/).length <= 4) {
        userSay(text);
        continueTyping();
        return;
      }
    } else if (callRef.current) {
      typeInCall(text);
      return;
    }
    userSay(text);
    // The team talks to the visitor themselves: no name asked first
    if (askingName && !teamLiveRef.current) void takeName(text);
    else void ask(text);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || blocked || (busy && !callRef.current)) return;
    setInput("");
    send(text);
  };

  const onChip = (chip: Chip) => {
    if (blocked || busy || chatEnded) return;
    audio();
    closingAtRef.current = null;
    if (chip.kind === "ask") {
      userSay(chip.label);
      void ask(chip.label);
      return;
    }
    userSay(chip.label);
    if (chip.kind === "team") {
      const reply = copy().team(phoneRef.current);
      track([
        { role: "user", content: chip.label },
        { role: "assistant", content: reply },
      ]);
      void botSay([{ text: reply }]);
      return;
    }
    const link = chip.target ? { href: chip.target, label: copy().openPage } : undefined;
    track([
      { role: "user", content: chip.label },
      { role: "assistant", content: [chip.reply, chip.target].filter(Boolean).join("\n") },
    ]);
    void botSay([{ text: chip.reply, link, chips: chip.options?.map((label): Chip => ({ kind: "ask", label })) }]);
  };

  const toggleMute = () => {
    const next = !muted;
    setMuted(next);
    mutedRef.current = next;
    store(MUTED_KEY, next ? "1" : "");
    if (!next) playIncoming(); // turning the chime on plays it, so it's clear it works
  };

  // The visitor's message has been read once Aarohi has replied after it (blue ticks)
  const seen = (index: number) => messages.slice(index + 1).some((m) => m.from !== "user");
  // Show the avatar only on the first of consecutive messages from Aarohi
  const showAvatar = (index: number) => messages[index].from === "bot" && messages[index - 1]?.from !== "bot";
  const lastId = messages[messages.length - 1]?.id;
  // Only her latest offer of a call shows its card
  const lastOfferId = [...messages].reverse().find((m) => m.callOffer)?.id;

  const placeholder = blocked
    ? t.blockedPlaceholder
    : callState === "connecting"
      ? t.connecting
      : inCall
        ? onHold
          ? t.onHoldHint(holdMinutesOf(config))
          : micMuted
          ? t.muted
          : speaking
            ? t.interruptHint
            : t.listeningCall
        : mic === "recording"
      ? t.listening
      : mic === "transcribing"
        ? t.transcribing
        : askingName
          ? t.namePlaceholder
          : t.placeholder;
  // Her intro's captions: the sentence she is saying, and how many of its words she has said
  const introWordsSaid = INTRO_WORDS.filter(([, at]) => at <= introTime).length;
  const introLine = introWordsSaid ? INTRO_LINES.find((line) => line[line.length - 1].i >= introWordsSaid - 1) : undefined;
  // Waiting on the video call for their name: what she has said since (else her question stays), and what they are saying
  const sinceListening = intro === "listening" ? messages.slice(listenFrom) : [];
  const listenHer = [...sinceListening].reverse().find((m) => m.from === "bot" && m.text);
  const listenLast = sinceListening[sinceListening.length - 1];
  const listenHeard = listenLast?.from === "user" ? listenLast.text : "";

  const status = teamLive
    ? t.teamStatus
    : onHold && inCall
      ? t.onHold
      : speaking
      ? t.speaking
      : inCall
        ? t.inCall
        : callState === "connecting"
          ? t.connecting
          : isTyping
            ? t.typing
            : config?.subtitle || t.subtitle;
  const blockedForever = blockedTill - clock > 30 * 24 * 60 * 60 * 1000;
  const typingDots = [0, 0.15, 0.3].map((d) => <span key={d} className="mv-dot h-2 w-2 rounded-full bg-[#8f2433]" style={{ animationDelay: `${d}s` }} />);
  const botAvatar = (visible: boolean) => (
    <span className={`flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#fff3df] shadow-[0_4px_10px_-4px_rgba(110,40,20,0.5)] ring-2 ring-[#d9a441]/80 ${visible ? "" : "invisible"}`}>
      <Image src={avatar} alt="" width={40} height={40} className="h-full w-full object-cover" />
    </span>
  );
  const headBtn = "flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/10 transition hover:bg-white/25";

  return (
    <>
      <style>{`
        @keyframes mvChatIn {
          0% { opacity: 0; transform: translate(18px, 36px) scale(.5); filter: blur(10px); border-radius: 48px; }
          55% { opacity: 1; filter: blur(0); }
          75% { transform: translate(0, -5px) scale(1.015); }
          100% { opacity: 1; transform: none; }
        }
        @keyframes mvChatOut {
          0% { opacity: 1; transform: none; }
          100% { opacity: 0; transform: translate(18px, 30px) scale(.55); filter: blur(8px); border-radius: 48px; }
        }
        @keyframes mvHeadIn { from { opacity: 0; transform: translateY(-14px); } to { opacity: 1; transform: none; } }
        @keyframes mvBodyIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
        @keyframes mvMsgIn {
          0% { opacity: 0; transform: translateY(10px) scale(.9); }
          65% { opacity: 1; transform: translateY(-2px) scale(1.01); }
          100% { opacity: 1; transform: none; }
        }
        @keyframes mvDot { 0%, 80%, 100% { transform: translateY(0); opacity: .45; } 40% { transform: translateY(-4px); opacity: 1; } }
        @keyframes mvRing { 0% { box-shadow: 0 0 0 0 rgba(217,164,65,.7); } 100% { box-shadow: 0 0 0 10px rgba(217,164,65,0); } }
        @keyframes mvRec { 0% { box-shadow: 0 0 0 0 rgba(220,38,38,.55); } 100% { box-shadow: 0 0 0 12px rgba(220,38,38,0); } }
        /* Her intro: the video call's captions and buttons come in once it has opened out of her avatar; when she has
           gone back into it, the avatar bounces, gold rings spread from it and sparks fly off */
        @keyframes mvLive { 0%, 100% { opacity: 1; } 50% { opacity: .3; } }
        @keyframes mvIntroUi { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        @keyframes mvLand { 0% { transform: scale(.8); } 45% { transform: scale(1.16); } 70% { transform: scale(.96); } 100% { transform: none; } }
        @keyframes mvLandRing { 0% { opacity: .95; transform: scale(1); } 100% { opacity: 0; transform: scale(2); } }
        @keyframes mvSpark {
          0% { opacity: 0; transform: rotate(var(--a)) translateY(0) scale(.4); }
          25% { opacity: 1; }
          100% { opacity: 0; transform: rotate(var(--a)) translateY(-40px) scale(1); }
        }
        .mv-intro-ui { animation: mvIntroUi .45s .9s ease-out both; }
        .mv-land { animation: mvLand .7s cubic-bezier(.3,1.4,.5,1) both; }
        .mv-land-ring { animation: mvLandRing .85s ease-out both; }
        .mv-land-ring.mv-late { animation-delay: .18s; }
        .mv-spark { animation: mvSpark .8s .08s ease-out both; }
        .mv-live { animation: mvLive 1.1s infinite; }
        @keyframes mvWordIn { from { opacity: 0; transform: translateY(4px); filter: blur(2px); } to { opacity: 1; transform: none; filter: none; } }
        .mv-word-in { animation: mvWordIn .35s ease-out both; }
        .mv-caret { animation: mvLive .8s steps(1) infinite; }
        .mv-chat-in { animation: mvChatIn .55s cubic-bezier(.2,.9,.25,1) both; transform-origin: bottom right; }
        .mv-chat-out { animation: mvChatOut .26s cubic-bezier(.5,0,.75,0) both; transform-origin: bottom right; }
        .mv-head-in { animation: mvHeadIn .45s .12s cubic-bezier(.2,.9,.3,1) both; }
        .mv-body-in { animation: mvBodyIn .45s .2s cubic-bezier(.2,.9,.3,1) both; }
        .mv-msg-in { animation: mvMsgIn .36s cubic-bezier(.2,.9,.3,1.2) both; transform-origin: bottom left; }
        .mv-msg-in.mv-mine { transform-origin: bottom right; }
        .mv-dot { animation: mvDot 1.1s infinite ease-in-out; }
        .mv-speaking { animation: mvRing 1.2s infinite; }
        .mv-recording { animation: mvRec 1.1s infinite; }
        @media (prefers-reduced-motion: reduce) {
          .mv-chat-in, .mv-chat-out, .mv-head-in, .mv-body-in, .mv-msg-in, .mv-speaking, .mv-recording, .mv-word-in, .mv-intro-ui, .mv-land, .mv-land-ring, .mv-spark { animation-duration: .01s; }
        }
      `}</style>

      {isOpen && (
        <>
          <section
            role="dialog"
            aria-label={`${botName} chat`}
            data-lenis-prevent
            onKeyDown={(e) => e.key === "Escape" && closeChat()}
            className={`${closing ? "mv-chat-out" : "mv-chat-in"} fixed z-[1000] flex flex-col overflow-hidden ${panelBg} ${chatFont.className} shadow-[0_24px_60px_-12px_rgba(90,14,25,0.45),0_0_0_1px_rgba(143,36,51,0.14)] inset-x-2 bottom-2 rounded-[24px] sm:inset-x-auto sm:right-5 sm:bottom-[88px] sm:w-[360px] ${
              isMinimized ? "" : "h-[80dvh] sm:h-[540px] sm:max-h-[calc(100vh-108px)]"
            }`}
          >
            {/* Header: deep maroon with a lotus, the avatar in a gold ring, and a gold wave into the cream body */}
            <header className="mv-head-in relative shrink-0 bg-[linear-gradient(135deg,#560d18_0%,#76192a_55%,#8f2433_100%)] px-3.5 pt-4 pb-6 text-white">
              <LotusMark className="pointer-events-none absolute top-1 left-1/2 h-[14px] w-[24px] -translate-x-1/2 text-[#e8b85a]" />
              <div className="relative flex items-center gap-2.5">
                <div className="relative shrink-0">
                  <span
                    ref={avatarRef}
                    className={`relative flex h-[50px] w-[50px] items-center justify-center overflow-hidden rounded-full bg-[#fff3df] ring-[3px] ring-[#e8b85a] ${speaking ? "mv-speaking" : ""} ${avatarLanding ? "mv-land" : ""}`}
                  >
                    <Image src={avatar} alt={botName} width={50} height={50} className="h-full w-full object-cover object-top" />
                  </span>
                  {/* She has just come back into her avatar from the video: gold rings and sparks around it */}
                  {avatarLanding && (
                    <span aria-hidden className="pointer-events-none absolute top-0 left-0 h-[50px] w-[50px]">
                      <span className="mv-land-ring absolute inset-0 rounded-full border-2 border-[#f6d27a]" />
                      <span className="mv-land-ring mv-late absolute inset-0 rounded-full border border-[#fcd98a]" />
                      {Array.from({ length: 8 }, (_, k) => (
                        <span key={k} className="mv-spark absolute top-1/2 left-1/2 -mt-[3px] -ml-[3px] h-1.5 w-1.5 rounded-full bg-[#f6d27a] shadow-[0_0_6px_#fcd98a]" style={{ "--a": `${k * 45}deg` } as CSSProperties} />
                      ))}
                    </span>
                  )}
                  <span className="absolute -right-0.5 -bottom-0.5 flex h-4 w-4" title={t.online}>
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34d399] opacity-60" />
                    <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-white bg-[#22c55e]" />
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  {/* No "AI" label in the header (Aarohi's script); she answers honestly when asked */}
                  <p className="truncate text-[18px] leading-tight font-bold">{teamLive ? t.teamTitle : botName}</p>
                  <p className={`truncate text-[11px] font-semibold ${teamLive || speaking || isTyping || inCall ? "text-[#fcd98a]" : "text-white/85"}`}>{status}</p>
                </div>
                <div className="flex shrink-0 items-center gap-1">
                  <button type="button" onClick={toggleVoice} aria-label={voiceOn ? t.voiceOn : t.voiceOff} title={voiceOn ? t.voiceOn : t.voiceOff} aria-pressed={voiceOn} className={headBtn}>
                    {voiceOn ? <VolumeIcon className="h-4 w-4" /> : <VolumeOffIcon className="h-4 w-4" />}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (intro === "on" || intro === "listening") finishIntro();
                      setIsMinimized((v) => !v);
                    }}
                    aria-label="Minimise chat"
                    className={`${headBtn} hidden sm:flex`}
                  >
                    <MinusIcon className="h-4 w-4" />
                  </button>
                  <button type="button" onClick={closeChat} aria-label="Close chat" className={headBtn}>
                    <CloseIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <svg aria-hidden viewBox="0 0 360 20" preserveAspectRatio="none" className="absolute -bottom-px left-0 h-[20px] w-full">
                <path d="M0 20V12C80 24 190 -2 360 8V20Z" fill={whiteBg ? "#ffffff" : "#fdf7ec"} />
                <path d="M0 12C80 24 190 -2 360 8" fill="none" stroke="#e1aa4b" strokeWidth="2.4" />
              </svg>
            </header>

            {/* Her intro as a video call over the whole window: out of her avatar, and back into it once she has spoken */}
            {intro !== "off" && !isMinimized && (
              <div ref={introBoxRef} className="absolute inset-0 z-30 overflow-hidden">
                <video
                  ref={introVideoRef}
                  src={INTRO_VIDEO}
                  poster="/images/chatbot/aarohi-avatar.png"
                  playsInline
                  preload="auto"
                  muted
                  onEnded={() => listenForName()}
                  onError={() => finishIntro()}
                  onTimeUpdate={(e) => {
                    if (intro !== "on") return;
                    const v = e.currentTarget;
                    setIntroTime(v.currentTime);
                    if (v.duration) setIntroProgress(v.currentTime / v.duration);
                    // She has asked their name: she waits for it, on this moment of the video (before its closing blink)
                    if (v.currentTime >= INTRO_LISTEN_AT - 0.1) listenForName();
                  }}
                  className="absolute inset-0 h-full w-full origin-top-left object-cover object-[50%_20%]"
                  aria-label={`${botName}'s introduction`}
                />
                <div className={`absolute inset-0 text-white transition-opacity duration-200 ${intro === "leaving" ? "opacity-0" : "mv-intro-ui"}`}>
                  {/* Who is on the call, live, and for how long */}
                  <div className="absolute inset-x-0 top-0 flex items-start gap-3 bg-gradient-to-b from-black/65 via-black/30 to-transparent px-4 pt-4 pb-12">
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[18px] leading-tight font-bold [text-shadow:0_1px_6px_rgba(0,0,0,0.5)]">{botName}</p>
                      <p className="truncate text-[11px] font-semibold text-[#fcd98a] [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">{t.subtitle}</p>
                      <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-black/40 px-2 py-[3px] text-[10px] font-bold tracking-[0.08em] backdrop-blur-sm">
                        <span className="mv-live h-1.5 w-1.5 rounded-full bg-[#ef4444]" />
                        LIVE · {callClock(intro === "listening" ? INTRO_LISTEN_AT + Math.max(0, clock - listenSince) / 1000 : Math.min(introTime, INTRO_SECONDS))}
                      </span>
                    </div>
                    <button type="button" onClick={closeChat} aria-label="Close chat" className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-black/35 backdrop-blur-sm transition hover:bg-black/55">
                      <CloseIcon className="h-4 w-4" />
                    </button>
                  </div>

                  {/* The browser held her voice back: one tap starts it (not once the call listens: the mic would hear it) */}
                  {introMuted && intro === "on" && (
                    <button
                      type="button"
                      onClick={() => {
                        setIntroMuted(false);
                        const video = introVideoRef.current;
                        if (!video) return;
                        // From the start, heard
                        video.muted = false;
                        video.currentTime = 0;
                        void video.play().catch(() => undefined);
                      }}
                      className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-black/55 px-4 py-2.5 text-[13px] font-semibold whitespace-nowrap backdrop-blur-md transition hover:bg-black/70"
                    >
                      <VolumeIcon className="h-4 w-4" />
                      {t.introSound}
                    </button>
                  )}

                  {/* Captions (the sentence she is saying), her voice on / off, skip */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/55 to-transparent px-4 pt-20 pb-4">
                    {listenHer ? (
                      <p key={`her-${listenHer.id}`} className="mv-word-in mb-3 text-center text-[15px] leading-[1.55] font-semibold [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]">
                        {listenHer.text}
                      </p>
                    ) : (
                      introLine && (
                        <p key={introLine[0].i} lang="hi" className="mv-word-in mb-3 text-center text-[15px] leading-[1.55] font-semibold [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]">
                          {introLine.map((w) => (
                            <span key={w.i} className={`transition-colors duration-200 ${w.i < introWordsSaid ? "text-white" : "text-white/35"}`}>
                              {w.word}{" "}
                            </span>
                          ))}
                        </p>
                      )
                    )}
                    {/* Waiting for their name: listening, and their words as they say them */}
                    {intro === "listening" && (
                      <p className="mb-3 flex items-center justify-center gap-2 text-center text-[13px] leading-[1.45] font-medium text-white/90 [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
                        <span aria-hidden className="mv-live h-2 w-2 shrink-0 rounded-full bg-[#34d399]" />
                        <span className="line-clamp-2 min-w-0">{listenHeard ? `“${listenHeard}”` : t.introListening}</span>
                      </p>
                    )}
                    <div className="flex items-center justify-center gap-3">
                      {/* Her video's voice on / off (not once it has ended and the call listens) */}
                      {intro !== "listening" && (
                        <button
                          type="button"
                          onClick={() => {
                            const quiet = !introQuiet;
                            introQuietRef.current = quiet;
                            if (introVideoRef.current) introVideoRef.current.muted = quiet;
                            setIntroQuiet(quiet);
                          }}
                          aria-label={introQuiet ? t.introUnmute : t.introMute}
                          aria-pressed={introQuiet}
                          className="grid h-11 w-11 place-items-center rounded-full bg-white/20 backdrop-blur-md transition hover:bg-white/30"
                        >
                          {introQuiet ? <VolumeOffIcon className="h-5 w-5" /> : <VolumeIcon className="h-5 w-5" />}
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={finishIntro}
                        className="h-11 rounded-full bg-[linear-gradient(135deg,#e8b85a,#c98a2b)] px-5 text-[13px] font-bold text-[#3b0b14] shadow-[0_8px_20px_-8px_rgba(0,0,0,0.6)] transition hover:brightness-105"
                      >
                        {t.introSkip} ›
                      </button>
                    </div>
                    <span className="mt-3 block h-[3px] overflow-hidden rounded-full bg-white/25">
                      <span className="block h-full rounded-full bg-[#e8b85a] transition-[width] duration-300 ease-linear" style={{ width: `${intro === "listening" ? 100 : Math.round(introProgress * 100)}%` }} />
                    </span>
                  </div>
                </div>
              </div>
            )}

            {!isMinimized && (
              <>
                {/* Messages over the ghat artwork (the artwork stays put while the messages scroll) */}
                <div className={`relative min-h-0 flex-1 ${whiteBg ? "bg-white" : "bg-[linear-gradient(#fdf7ec,#f7ead3)]"}`}>
                  <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${whiteBg ? "hidden" : ""}`}>
                    <div className="absolute -top-12 -left-16 h-44 w-44 bg-contain bg-no-repeat opacity-35" style={{ backgroundImage: `url(${MANDALA})` }} />
                    <div className="absolute top-0 right-0 h-[72px] w-[48%] bg-contain bg-right-top bg-no-repeat opacity-75" style={{ backgroundImage: `url(${TEMPLE_TOP})` }} />
                    <span className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[150px] leading-none text-[#c99a4a] opacity-[0.07] select-none">ॐ</span>
                    <div className="absolute inset-x-0 bottom-0 h-[62%] bg-bottom bg-no-repeat [background-size:100%_auto]" style={{ backgroundImage: `url(${CHAT_BG})` }} />
                  </div>
                  <div ref={scrollRef} role="log" aria-label={`Chat with ${botName}`} className="mv-body-in absolute inset-0 overflow-x-hidden overflow-y-auto overscroll-contain px-3.5 pt-2 pb-4">
                    <p className="mb-3 text-center text-[11.5px] font-semibold tracking-[0.06em] text-[#8a4b16]/80" lang="sa">
                      {t.mantra}
                    </p>
                    <div className="relative space-y-3">
                      {introSaid && INTRO_WORDS.some(([, at]) => at <= introTime) && (
                        <div className="mv-msg-in flex items-start gap-2">
                          {botAvatar(true)}
                          <div className="max-w-[80%] min-w-0">
                            <div className="relative rounded-[18px] rounded-tl-[6px] border border-[#ecd3a6] bg-[#fffaf1]/95 px-3.5 py-2.5 text-[13px] leading-[1.6] font-medium text-[#4a2a1a] shadow-[0_8px_18px_-12px_rgba(110,40,20,0.4)]">
                              {INTRO_WORDS.filter(([, at]) => at <= introTime).map(([word], k) => (
                                <span key={k} className="mv-word-in inline-block">
                                  {word}&nbsp;
                                </span>
                              ))}
                              {intro === "on" && INTRO_WORDS.some(([, at]) => at > introTime) && <span className="mv-caret ml-0.5 inline-block h-[14px] w-[2px] translate-y-[2px] bg-[#8f2433]" />}
                            </div>
                          </div>
                        </div>
                      )}
                      {messages.map((m, i) =>
                        m.from === "agent" ? (
                          m.event ? (
                            <div key={m.id} className="mv-msg-in flex justify-center">
                              <span className="flex max-w-[90%] items-center gap-1.5 rounded-full border border-[#d9a441]/50 bg-[#fbecd2] px-3 py-1 text-center text-[11px] font-semibold text-[#7a3b12] shadow-[0_2px_6px_-3px_rgba(110,40,20,0.35)]">
                                <HeadsetIcon className="h-3 w-3 shrink-0" />
                                {m.event === "joined" ? t.teamJoined : t.teamLeft(botNameFor(config, lang))}
                              </span>
                            </div>
                          ) : (
                            <div key={m.id} className="mv-msg-in flex items-start gap-2">
                              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#d9a441,#a86b16)] text-white shadow-[0_4px_10px_-4px_rgba(110,40,20,0.5)] ring-2 ring-[#fff3df]">
                                <HeadsetIcon className="h-[18px] w-[18px]" />
                              </span>
                              <div className="max-w-[80%] min-w-0">
                                <p className="mb-0.5 pl-1 text-[10.5px] font-bold text-[#7a3b12]">
                                  {t.teamName}
                                  {m.by ? <span className="font-medium text-[#8d7a66]"> · {m.by}</span> : null}
                                </p>
                                <div className="rounded-[18px] rounded-tl-[6px] border border-[#d9a441]/60 bg-[#fff4df] px-3.5 py-2.5 text-[13px] leading-[1.6] font-medium text-[#4a2a1a] shadow-[0_8px_18px_-12px_rgba(110,40,20,0.4)]">
                                  {m.files?.map((file) =>
                                    isImageFile(file) ? (
                                      <a key={file.href} href={file.href} target="_blank" rel="noopener noreferrer" className="mb-1.5 block overflow-hidden rounded-[12px]">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={file.href} alt={file.label} className="max-h-[200px] w-auto max-w-full object-cover" />
                                      </a>
                                    ) : (
                                      <a
                                        key={file.href}
                                        href={file.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mb-1.5 flex items-center gap-2 rounded-[12px] border border-[#ecd3a6] bg-white/80 px-2.5 py-2 text-[12px] font-semibold text-[#6b1420] transition hover:bg-white"
                                      >
                                        <FileIcon className="h-4 w-4 shrink-0" />
                                        <span className="min-w-0 flex-1 truncate">{file.label}</span>
                                        <span className="shrink-0 text-[10.5px] text-[#8d7a66]">{t.openFile}</span>
                                      </a>
                                    )
                                  )}
                                  {m.text && <p className="whitespace-pre-line [overflow-wrap:anywhere]">{m.text}</p>}
                                </div>
                                {m.at && <p className="mt-1 pl-1 text-[10px] text-[#8d7a66]">{timeOf(m.at)}</p>}
                              </div>
                            </div>
                          )
                        ) : m.from === "bot" ? (
                          <div key={m.id} className="mv-msg-in flex items-start gap-2">
                            {botAvatar(showAvatar(i))}
                            <div className="max-w-[80%] min-w-0">
                              <div
                                className={`relative rounded-[18px] border border-[#ecd3a6] bg-[#fffaf1]/95 px-3.5 py-2.5 text-[13px] leading-[1.6] font-medium text-[#4a2a1a] shadow-[0_8px_18px_-12px_rgba(110,40,20,0.4)] ${
                                  showAvatar(i) ? "rounded-tl-[6px]" : ""
                                }`}
                              >
                                {m.title && <p className="text-[15px] font-bold text-[#6b1420]">{m.title}</p>}
                                {m.text && <RichText text={m.text} onNavigate={onNavigate} />}
                                {m.live && !m.text && <span className="flex items-center gap-1 py-1">{typingDots}</span>}
                                {m.link && (
                                  <span className="mt-2 block">
                                    <ChatLink href={m.link.href} onNavigate={onNavigate}>
                                      {m.link.label} →
                                    </ChatLink>
                                  </span>
                                )}
                              </div>
                              {m.at && !m.live && <p className="mt-1 pl-1 text-[10px] text-[#8d7a66]">{timeOf(m.at)}</p>}
                              {m.callOffer && m.id === lastOfferId && !blocked && !chatEnded ? (
                                <CallMeCard
                                  offer={m.callOffer}
                                  english={lang === "en"}
                                  sessionId={sessionOf}
                                  name={nameRef.current}
                                  disabled={busy}
                                  onCallback={(text) => {
                                    if (blocked || busy || chatEnded) return;
                                    userSay(text);
                                    void ask(text);
                                  }}
                                />
                              ) : null}
                              {m.chips?.length && m.id === lastId && !busy && !blocked && !chatEnded ? (
                                <div className="mt-2 flex flex-wrap gap-1.5">
                                  {m.chips.map((chip) => (
                                    <button
                                      key={chip.label}
                                      type="button"
                                      onClick={() => onChip(chip)}
                                      className="cursor-pointer rounded-full border border-[#d9a441]/60 bg-[#fffaf1] px-3 py-1.5 text-left text-[12px] leading-tight font-semibold text-[#6b1420] shadow-[0_2px_6px_-3px_rgba(110,40,20,0.35)] transition hover:border-[#d9a441] hover:bg-[#fbecd2]"
                                    >
                                      {chip.label}
                                    </button>
                                  ))}
                                </div>
                              ) : null}
                            </div>
                          </div>
                        ) : (
                          <div key={m.id} className="mv-msg-in mv-mine flex flex-col items-end">
                            {m.live ? (
                              // What the visitor is saying in the call, live
                              <p className="max-w-[80%] rounded-[18px] rounded-tr-[6px] border border-dashed border-[#8f2433]/60 bg-[#fffaf1] px-3.5 py-2.5 text-[13px] leading-[1.5] font-medium whitespace-pre-line text-[#6b1420] [overflow-wrap:anywhere]">
                                <MicIcon className="-mt-0.5 mr-1.5 inline h-3.5 w-3.5 animate-pulse text-red-500" />
                                {m.text || <span className="text-[#9c8a74] italic">{t.listeningCall}</span>}
                              </p>
                            ) : (
                              <p className="max-w-[80%] rounded-[18px] rounded-tr-[6px] bg-[linear-gradient(135deg,#8f2433,#6b1420)] px-3.5 py-2.5 text-[13px] leading-[1.5] font-medium whitespace-pre-line text-white shadow-[0_8px_18px_-10px_rgba(107,20,32,0.7)] [overflow-wrap:anywhere]">
                                {m.text}
                              </p>
                            )}
                            {m.at && !m.live && (
                              <span className="mt-1 flex items-center gap-1 pr-1 text-[10px] text-[#8d7a66]">
                                {timeOf(m.at)}
                                <svg
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke={seen(i) ? "#d9a441" : "#b9a58a"}
                                  strokeWidth={2.4}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="h-3.5 w-3.5"
                                  aria-label={seen(i) ? "Seen" : "Sent"}
                                >
                                  <path d="M2 12.5l4.5 4.5L15 8.5M10 16l1 1 8.5-8.5" />
                                </svg>
                              </span>
                            )}
                          </div>
                        )
                      )}

                      {isTyping && (
                        <div className="mv-msg-in flex items-center gap-2" aria-label={`${botName} is typing`}>
                          {botAvatar(messages[messages.length - 1]?.from !== "bot")}
                          <span className="flex items-center gap-1 rounded-[18px] rounded-tl-[6px] border border-[#ecd3a6] bg-[#fffaf1] px-3.5 py-3 shadow-[0_8px_18px_-12px_rgba(110,40,20,0.4)]">{typingDots}</span>
                        </div>
                      )}

                      {/* The call is on hold: a one-line note under the last message, with a small ▶ that carries the call on */}
                      {onHold && inCall && (
                        <div role="status" className="mv-msg-in flex items-center gap-2">
                          {botAvatar(true)}
                          <div className="flex max-w-[80%] min-w-0 items-center gap-2 rounded-[18px] rounded-tl-[6px] border border-[#d9a441]/70 bg-[#fff4df] py-1.5 pr-1.5 pl-3 shadow-[0_8px_18px_-12px_rgba(110,40,20,0.4)]">
                            <p className="text-[12.5px] leading-snug font-medium text-[#6b1420]">{t.holdNote}</p>
                            <button
                              type="button"
                              onClick={toggleHold}
                              aria-label={t.holdResume}
                              title={t.holdResume}
                              className="flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[linear-gradient(135deg,#8f2433,#6b1420)] text-white shadow-[0_4px_10px_-6px_rgba(107,20,32,0.7)] transition hover:brightness-110"
                            >
                              <PlayIcon className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Input */}
                {chatEnded && (
                  <div className={`flex shrink-0 items-center justify-between gap-3 border-t border-[#ecd3a6] ${panelBg} px-4 py-3`}>
                    <span className="text-[13px] font-semibold text-[#6b1420]">{t.chatEnded}</span>
                    <button
                      type="button"
                      onClick={resumeChat}
                      className="shrink-0 cursor-pointer rounded-full bg-[linear-gradient(135deg,#8f2433,#6b1420)] px-4 py-2 text-[12.5px] font-semibold text-white transition hover:brightness-110"
                    >
                      {t.resume}
                    </button>
                  </div>
                )}
                <form onSubmit={onSubmit} className={`relative shrink-0 ${panelBg} px-3 pt-2 pb-1.5 ${chatEnded ? "hidden" : ""}`}>
                  {blocked && (
                    <div role="status" className="mb-2 flex items-center gap-2.5 rounded-xl border border-red-200 bg-red-50 px-3 py-2">
                      <BanIcon className="h-4 w-4 shrink-0 text-red-500" />
                      <div className="min-w-0 flex-1 leading-tight">
                        <p className="text-[11.5px] font-semibold text-red-700">{t.blockedNote}</p>
                        <p className="text-[10.5px] text-red-600/80">{blockedForever ? t.blockedByTeam : t.blockedOpensIn}</p>
                      </div>
                      {!blockedForever && (
                        <span className="shrink-0 rounded-lg bg-red-500 px-2 py-1 font-mono text-[13px] font-bold text-white tabular-nums">{countdown(blockedTill - clock)}</span>
                      )}
                    </div>
                  )}
                  {inCall && (
                    <div className="mb-1.5 flex items-center justify-between gap-2 px-1">
                      <span className="flex min-w-0 items-center gap-1.5 text-[11.5px] font-semibold text-[#6b1420]" title={noiseOn ? t.noiseOnHint : t.noiseOffHint}>
                        <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-[#22c55e]" />
                        <span className="truncate">{t.noise}</span>
                      </span>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={noiseOn}
                        aria-label={t.noise}
                        title={noiseOn ? t.noiseOnHint : t.noiseOffHint}
                        onClick={toggleNoise}
                        className={`relative flex h-[22px] w-[52px] shrink-0 cursor-pointer items-center rounded-full px-1 text-[9px] font-bold transition ${noiseOn ? "bg-[#8f2433] text-white" : "bg-[#eadcc4] text-[#7a6650]"}`}
                      >
                        <span className={`absolute top-[3px] h-4 w-4 rounded-full bg-white shadow transition-all ${noiseOn ? "left-[33px]" : "left-[3px]"}`} />
                        <span className={noiseOn ? "pl-0.5" : "ml-auto pr-0.5"}>{noiseOn ? "ON" : "OFF"}</span>
                      </button>
                    </div>
                  )}
                  <div
                    className={`flex items-center gap-1.5 rounded-full border bg-white py-1.5 pr-1.5 pl-3 shadow-[0_10px_24px_-14px_rgba(110,40,20,0.55)] ${
                      inputIsAbusive
                        ? "border-red-500 ring-2 ring-red-200"
                        : mic === "recording" || (inCall && !micMuted)
                          ? "border-red-400 ring-2 ring-red-100"
                          : "border-[#ead6b4] focus-within:border-[#d9a441]"
                    } ${blocked ? "opacity-60" : ""}`}
                  >
                    <LotusMark className="h-[16px] w-[26px] shrink-0 text-[#8f2433]" />
                    <input
                      ref={inputRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder={placeholder}
                      disabled={blocked || mic !== "idle" || callState === "connecting"}
                      aria-invalid={inputIsAbusive}
                      maxLength={askingName ? 200 : 1000}
                      autoComplete={askingName ? "name" : "off"}
                      enterKeyHint="send"
                      className="min-w-0 flex-1 bg-transparent text-[16px] text-[#3d2a17] outline-none placeholder:text-[#9c8a74] sm:text-[13.5px]"
                      aria-label={placeholder}
                    />
                    {inCall ? (
                      <>
                        {/* During a call: mute your mic (the ring grows with the sound it picks up), hold, or end the call */}
                        <button
                          type="button"
                          onClick={toggleCallMic}
                          title={micMuted ? t.callUnmute : t.callMute}
                          aria-label={micMuted ? t.callUnmute : t.callMute}
                          aria-pressed={micMuted}
                          className={`relative flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full transition ${micMuted ? "bg-[#f1e6d3] text-[#9c8a74]" : "bg-[#fbecd2] text-[#8f2433]"}`}
                        >
                          {!micMuted && <span ref={micRingRef} className="absolute inset-0 rounded-full bg-[#8f2433]/20 transition-transform duration-100" />}
                          {micMuted ? <MicOffIcon className="h-3.5 w-3.5" /> : <MicIcon className="relative h-3.5 w-3.5" />}
                        </button>
                        {/* Hold / Resume: she stops and the mic goes off; Resume carries on where they left off */}
                        <button
                          type="button"
                          onClick={toggleHold}
                          title={onHold ? t.callResume : t.callHold}
                          aria-label={onHold ? t.callResume : t.callHold}
                          aria-pressed={onHold}
                          className={`flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full transition ${onHold ? "bg-[#8f2433] text-white hover:bg-[#7a1d2b]" : "bg-[#fbecd2] text-[#8f2433] hover:bg-[#f6dfb8]"}`}
                        >
                          {onHold ? <PlayIcon className="h-3 w-3" /> : <PauseIcon className="h-3 w-3" />}
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            endedByHandRef.current = true;
                            endCall(copy().callEnded);
                          }}
                          title={t.callEnd}
                          aria-label={t.callEnd}
                          className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-red-600 text-white transition hover:bg-red-700"
                        >
                          <PhoneOffIcon className="h-3.5 w-3.5" />
                        </button>
                      </>
                    ) : (
                      (canTalk || canRecord) &&
                      API && (
                        <button
                          type="button"
                          onClick={onMic}
                          disabled={blocked || (busy && !canTalk) || mic === "transcribing" || callState === "connecting" || chatEnded}
                          aria-label={canTalk ? t.callStart(botNameFor(config, lang)) : mic === "recording" ? t.micStop : t.micStart}
                          title={canTalk ? t.callStart(botNameFor(config, lang)) : mic === "recording" ? t.micStop : t.micStart}
                          className={`flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full transition disabled:cursor-default disabled:opacity-40 ${
                            mic === "recording" ? "mv-recording bg-red-500 text-white" : "border border-[#8f2433]/25 text-[#8f2433] hover:bg-[#fbecd2]"
                          }`}
                        >
                          {mic === "transcribing" || callState === "connecting" ? <SpinnerIcon className="h-4 w-4 animate-spin" /> : <MicIcon className="h-4 w-4" />}
                        </button>
                      )
                    )}
                    <button
                      type="submit"
                      disabled={!input.trim() || (busy && !inCall) || blocked}
                      aria-label="Send"
                      className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[linear-gradient(135deg,#9b2a3a,#6b1420)] text-white shadow-[0_6px_14px_-6px_rgba(107,20,32,0.8)] transition hover:scale-105 hover:brightness-110 disabled:cursor-default disabled:opacity-55 disabled:hover:scale-100"
                    >
                      <SendIcon className="h-4 w-4 -translate-x-px translate-y-px" />
                    </button>
                  </div>
                  {inputIsAbusive && (
                    <p role="alert" className="mt-1 text-center text-[11px] font-semibold text-red-600">
                      {t.abuseHint}
                    </p>
                  )}
                  <div className="mt-1.5 flex items-center justify-center gap-1.5 text-[10.5px] font-medium text-[#6f5a43]">
                    <ShieldIcon className="h-3.5 w-3.5 shrink-0 text-[#c08a2e]" />
                    <span className="truncate">{t.footer}</span>
                    <span title={t.privacy} aria-label={t.privacy} className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[#6b1420]">
                      <InfoIcon className="h-3.5 w-3.5" />
                    </span>
                    {/* Notification chime on/off (remembered in this browser) */}
                    <button
                      type="button"
                      onClick={toggleMute}
                      title={muted ? t.soundOff : t.soundOn}
                      aria-label={muted ? t.soundOff : t.soundOn}
                      aria-pressed={!muted}
                      className="flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded-full text-[#6b1420] transition hover:bg-[#fbecd2]"
                    >
                      <BellIcon off={muted} className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </form>
              </>
            )}
          </section>

          {/* Round close button where the launcher was (desktop) */}
          <button
            type="button"
            onClick={closeChat}
            aria-label="Close chat"
            className="mv-chat-in fixed right-6 bottom-5 z-[1000] hidden h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[linear-gradient(135deg,#8f2433,#560d18)] text-white shadow-[0_8px_20px_rgba(90,14,25,0.4)] ring-2 ring-[#e8b85a]/70 transition hover:scale-105 sm:flex"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </>
      )}
    </>
  );
};

export default Chatbot;
