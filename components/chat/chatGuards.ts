// Checks the chat runs on what the visitor types, before anything is saved or sent to the AI:
// comprehensive abusive language detection (English, Hindi, Hinglish), name verification,
// Indian 10-digit mobile number validation, email validation, emergency detection and OTP extraction.

export type Lang = "en" | "hi";

/* ───────────────────────── Abusive, Vulgar & Nudity Language ───────────────────────── */

// Common character swaps used to dodge filters: "f@ck", "sh1t", "b!tch", "a$$"
const LEET: Record<string, string> = { "@": "a", "4": "a", "0": "o", "1": "i", "!": "i", "3": "e", "$": "s", "5": "s", "7": "t" };

// Lower-case, undo the swaps and squeeze repeated letters ("fuuuuck" -> "fuck", "asshole" -> "ashole")
const squeeze = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFC")
    .replace(/!+(?![\p{L}@4013$57])/gu, " ")
    .replace(/[@4013!$57]/g, (c) => LEET[c] ?? c)
    .replace(/(\p{L})\1+/gu, "$1");

// Whole words only: English, Hinglish, Hindi vulgarities, nudity and sexual terms
const EXACT_WORDS = [
  // English
  "ass", "dick", "dik", "shit", "shitty", "bullshit", "fck", "wtf", "stfu", "idiot", "stupid", "dumbass", "jackass",
  "porn", "nude", "nudes", "boobs", "pussy", "cock", "twat", "prick", "sex", "sexy", "sexual", "horny",
  // Hinglish
  "harami", "haramzada", "haramzadi", "kamina", "kamine", "kameena", "kameene", "kutta", "kutte", "kuttiya", "suar", "suwar",
  "gand", "gaand", "gandu", "gaandu", "lund", "lauda", "laude", "lavda", "lavde", "lawda", "lawde", "lodu", "loda", "lode", "lodey", "randi",
  "randiya", "randwa", "chodu", "chut", "chinal", "bsdk", "bkl", "mkc", "mkb", "tharki", "bc", "mc", "chudai", "chudwa",
  "chudwana", "chodunga", "chodenge", "jhant", "jhaant", "kutti", "pagal", "ullu", "gadha", "gadhe", "bewakoof", "bewkoof", "kaminey", "bastord", "bastad",
  // Hindi
  "गांड", "गाँड", "गांडू", "लंड", "लौड़ा", "लोड़ा", "रंडी", "हरामी", "हरामज़ादा", "कमीना", "कमीने", "कुत्ता", "कुत्ते", "कुतिया",
  "सुअर", "चूत", "छिनाल", "ठरकी", "सेक्स", "सेक्सी", "चुदाई", "झांट", "झाँट", "लौड़े", "लोड़े", "लौडे", "लोडे", "लोडू", "लंडू", "बास्टर्ड", "फक",
  // English words written in Devanagari
  "बुलशिट", "बुलशीट", "शिट", "बस्टर्ड", "बास्टड", "बैस्टर्ड", "फ़क", "फकिंग", "फ़किंग", "फक्ड", "बिच", "बिचेस", "बास्टर्ड्स", "इडियट", "स्टूपिड", "स्टुपिड",
  "एसहोल", "ऐसहोल", "असहोल", "डिकहेड", "स्लट", "रिटार्ड",
].map(squeeze);

// Word beginnings that are always abusive
const WORD_STARTS = [
  "fuck", "fuk", "motherf", "bitch", "bastard", "asshole", "cunt", "slut", "whore", "dickhead", "retard", "nigg",
  "chutiy", "chutia", "chootiy", "madarch", "maderch", "madarj", "mdrch", "behench", "behnch", "bahench", "bahanch", "bhench", "bhnch",
  "benchod", "banchod", "bhosd", "bhosad", "bosd", "bosad", "bhadw", "bhadv", "jhaatu", "jhantu", "haramkh",
  "चूतिय", "चुतिय", "मादरच", "बहनच", "बहेनच", "भेनच", "भोसड", "भोसड़", "हरामख", "भड़व", "भडव", "चोद", "मदरफ", "मादरफ",
].map(squeeze);

const EXACT_SET = new Set(EXACT_WORDS);

// Abusive phrases matched as whole consecutive words
const PHRASES = [
  // English
  "go to hell", "go 2 hell", "go hell", "get lost", "get the hell out", "fuck off", "piss off", "burn in hell", "rot in hell", "screw you", "shut up bitch", "kill yourself", "son of a bitch",
  // Hinglish
  "teri maa ki", "teri ma ki", "teri maa ka", "teri ma ka", "teri maa ke", "teri ma ke", "tere maa ki", "teri mummy ki",
  "teri behen ki", "teri bahen ki", "teri behan ki", "teri bhen ki", "teri behen ka", "teri bhen ka",
  "maa ki chut", "ma ki chut", "maa ki aankh", "maa chod", "ma chod", "maa chuda", "ma chuda",
  "maa ki choot", "ma ki choot", "bhen ki choot", "behen ki choot", "bahen ki choot", "behan ki choot",
  "bhen ki chut", "behen ki chut", "bahen ki chut", "behan ki chut", "gaand marwa", "gand marwa", "fuck u", "fuck you",
  "behen chod", "bahen chod", "behan chod", "bhen chod", "behen ke lode", "bhen ke lode", "bhen ke laude", "behen ke laude",
  "maa ke lode", "ma ke lode", "maa ke laude", "tere baap ki", "bhaad me ja", "bhaad mein ja", "bhad me ja", "bhad mein ja",
  "bhaad me jao", "bhaad mein jao", "bhad me jao", "bhad mein jao", "jahannum me ja", "bkl", "bc mc",
  // Hindi
  "तेरी माँ की", "तेरी मां की", "तेरी माँ का", "तेरी मां का", "तेरी बहन की", "तेरी बहन का", "माँ की चूत", "मां की चूत",
  "बहन के लौड़े", "माँ के लौड़े", "भाड़ में जा", "भाड़ में जाओ", "भाड़ मे जा", "नरक में जा", "जहन्नुम में जा",
  "बहन की चूत", "बहेन की चूत", "भेन की चूत", "गांड मरवा", "गांड मार",
  // English in Devanagari
  "गो टू हेल", "गो टु हेल", "गो टू हैल", "गो टु हैल", "गो हेल", "गेट लॉस्ट", "गेट लोस्ट", "गेट लास्ट", "बर्न इन हेल", "फक यू", "फ़क यू", "फक यु", "फ़क यु",
  "मदर फकर", "मदर फ़कर", "बुल शिट", "सन ऑफ अ बिच", "सन ऑफ़ अ बिच", "शट अप बिच", "स्क्रू यू", "किल योरसेल्फ",
];

const UNSQUEEZED_WORDS = new Set(["saale", "saala", "saali"]);

const tokensOf = (text: string) => squeeze(text).split(/[^\p{L}\p{M}*]+/u).filter(Boolean);

let phraseKeys: string[] | null = null;
const hasBadPhrase = (tokens: string[]) => {
  phraseKeys = phraseKeys || PHRASES.map((phrase) => ` ${tokensOf(phrase).join(" ")} `);
  const line = ` ${tokens.join(" ")} `;
  return phraseKeys.some((key) => line.includes(key));
};

const isBadWord = (token: string) => {
  if (token.includes("*")) {
    const pattern = new RegExp(`^${token.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".?")}$`, "u");
    return EXACT_WORDS.some((w) => pattern.test(w)) || WORD_STARTS.some((w) => pattern.test(w));
  }
  return EXACT_SET.has(token) || WORD_STARTS.some((start) => token.startsWith(start));
};

/** True if the text contains an abusive, vulgar, sexual or nudity word */
export function isAbusive(text: string): boolean {
  if (!text) return false;
  if (text.toLowerCase().split(/[^\p{L}]+/u).some((w) => UNSQUEEZED_WORDS.has(w))) return true;
  const tokens = tokensOf(text);
  if (tokens.some(isBadWord) || hasBadPhrase(tokens)) return true;

  // Letters typed one by one ("f u c k")
  let run = "";
  for (const token of [...tokens, ""]) {
    if ([...token].length === 1) {
      run += token;
      continue;
    }
    if (run.length >= 3 && isBadWord(run)) return true;
    run = "";
  }
  return false;
}

export const hasAbuse = isAbusive;

export const abuseWarning = (n: number, name: string, lang: Lang) => {
  const salutation = name && name !== "Mitr" ? (lang === "hi" ? `${name} जी` : `${name} ji`) : (lang === "hi" ? "श्रीमान" : "friend");
  if (lang === "hi") {
    return n <= 1
      ? `⚠️ पहली चेतावनी: ${salutation}, आप एक सभ्य व्यक्ति हैं, ऐसे शब्द आप पर शोभा नहीं देते। कृपया सम्मान से बात कीजिए, मैं आपकी पूरी मदद करूँगा।`
      : n === 2
      ? `⚠️ दूसरी चेतावनी: ${salutation}, मैंने अभी आपसे सम्मान से बात करने का अनुरोध किया था, फिर भी आप ऐसी भाषा इस्तेमाल कर रहे हैं। कोई परेशानी है तो बताइए, मैं मदद करूँगा।`
      : `⚠️ तीसरी और अंतिम चेतावनी: ${salutation}, अब आप हद से ज़्यादा बोल रहे हैं। मैं आख़िरी बार कह रहा हूँ, अगर ऐसे शब्द फिर से आए तो मुझे आपको 24 घंटे के लिए ब्लॉक करना पड़ेगा।`;
  }
  return n <= 1
    ? `⚠️ First warning: ${salutation}, you are a decent person, and words like these don't suit you. Please speak respectfully, and I'll help you fully.`
    : n === 2
    ? `⚠️ Second warning: ${salutation}, I just asked you to speak respectfully, yet you are still using such language. If something is troubling you, tell me and I'll help.`
    : `⚠️ Third and final warning: ${salutation}, this has gone too far. I'm saying it one last time: if such words come again, I will have to block you for 24 hours.`;
};

export const abuseBlocked = (permanent: boolean, name: string, lang: Lang) => {
  const salutation = name && name !== "Mitr" ? (lang === "hi" ? `${name} जी` : `${name} ji`) : (lang === "hi" ? "श्रीमान" : "friend");
  if (lang === "hi") {
    return permanent
      ? `${salutation}, तीन बार समझाने के बाद भी आपने फिर से ऐसी भाषा इस्तेमाल की। इसलिए मैं आपको हमेशा के लिए ब्लॉक कर रहा हूँ, और आपकी शिकायत भी दर्ज की जाएगी। नमो गंगे नमस्ते।`
      : `${salutation}, आपको तीन बार समझाया गया, फिर भी आपने ऐसे शब्द इस्तेमाल किए। इसलिए मैं आपको 24 घंटे के लिए ब्लॉक कर रहा हूँ, और आपकी शिकायत भी दर्ज की जाएगी। आगे भी ऐसा हुआ तो आपको हमेशा के लिए ब्लॉक कर दिया जाएगा। नमो गंगे नमस्ते।`;
  }
  return permanent
    ? `${salutation}, even after three warnings you used such language again. So I am blocking you permanently, and a complaint will also be filed. Namo Gange Namaste.`
    : `${salutation}, you were asked three times, yet you used such words again. So I am blocking you for 24 hours, and a complaint will also be filed. If it happens again, you will be blocked permanently. Namo Gange Namaste.`;
};

export const ABUSE_REPLY: Record<Lang, string> = {
  en: "I don't respond to that kind of language. Please keep it respectful. 🙏\nI'm happy to help with anything about Moksha Sewa.",
  hi: "मैं ऐसे शब्दों का जवाब नहीं देता। कृपया सभ्य भाषा का प्रयोग करें। 🙏\nमोक्ष सेवा से जुड़ी किसी भी जानकारी में मैं ज़रूर मदद करूँगा।",
};

/* ───────────────────────── Emergency Detection ───────────────────────── */

const URGENT_REGEX =
  /accident|एक्सीडेंट|ऐक्सीडेंट|दुर्घटना|ambulance|एम्बुलेंस|एंबुलेंस|ऐम्बुलेंस|\bchot\b|चोट|injur|ghayal|घायल|bleed|khoon|खून|behosh|बेहोश|unconscious|emergency|इमरजेंसी|heart attack|हार्ट अटैक|dehant|देहांत|nidhan|निधन|guzar gaye|guzar gayi|गुज़र गए|गुजर गए|गुज़र गईं|गुजर गई|passed away|\bdied\b|expired|मृत्यु|\bmaut\b|मौत|nahi rahe|नहीं रहे|नहीं रहीं|freezer|shav vahan|शव वाहन/i;
const LONG_AGO_REGEX = /saal pehle|sal pehle|years? ago|barsi|बरसी|पिछले साल|साल पहले|mahine pehle|महीने पहले|pichhle saal/i;

export const isUrgent = (text: string) => URGENT_REGEX.test(text) && !LONG_AGO_REGEX.test(text);

/* ───────────────────────── OTP in Text ───────────────────────── */

/** Extracts 6-digit OTP code typed on its own or with label ("482913", "OTP 482913") */
export const otpIn = (said: string): string | undefined => {
  if (!said || said.length > 50) return undefined;
  const groups = said.match(/\d+/g) || [];
  const digits = groups.join("");
  return digits.length === 6 && groups.every((g) => g.length <= 6) ? digits : undefined;
};

/* ───────────────────────── Name Checks ───────────────────────── */

const GREETING_WORDS = new Set([
  "hi", "hii", "hiii", "hello", "helo", "hellow", "hey", "heyy", "hy", "hlo", "hlw", "hola", "yo", "namaste", "namaskar", "namaskaar",
  "pranam", "gm", "good", "morning", "afternoon", "evening", "night",
  "नमस्ते", "नमस्कार", "प्रणाम", "राम", "जय"
]);
const NOT_NAME_WORDS = new Set([
  "ok", "okay", "okk", "k", "yes", "yeah", "yep", "no", "nope", "nahi", "nhi", "haan", "han", "ha", "ji", "sir", "madam", "mam", "maam",
  "bhai", "bro", "dear", "friend", "team", "anyone", "there", "what", "why", "how", "when", "where", "who", "which", "kya", "kyu", "kyun",
  "kyon", "kaise", "kab", "kahan", "kaun", "help", "info", "information", "detail", "details", "price", "cost", "rate", "rates", "service",
  "services", "donate", "donation", "volunteer", "ambulance", "free", "contact", "number", "phone", "mobile", "email", "call", "whatsapp", "test", "testing", "demo", "abc",
  "abcd", "xyz", "asdf", "asd", "qwerty", "qwe", "zxc", "name", "naam", "mera", "my", "me", "i", "am", "is", "the", "a", "an", "you",
  "your", "aap", "tum", "please", "pls", "plz", "thanks", "thank", "thankyou", "bye", "nothing", "none", "nil", "na", "user", "guest",
  "anonymous", "unknown", "admin", "bot", "chatbot", "want", "need", "chahiye", "batao", "bataiye", "tell", "know", "about",
  "सेवा", "मोक्ष", "मुख", "बारे", "बताओ", "बताइए", "चाहिए", "मदद", "सहायता", "अंतिम", "संस्कार", "अस्थि", "विसर्जन", "पंडित", "श्राद्ध", "मृत्यु", "देहांत", "निधन", "शव", "एम्बुलेंस", "गाड़ी", "जानकारी", "प्रणाम", "नमस्ते", "नमस्कार", "हाँ", "नहीं", "ना", "क्या", "कहाँ", "कब", "कैसे", "क्यों"
]);

export const REFUSES = /^(?:no|nope|nahi|nhi|nahin|skip|later|baad (?:me|mein)|kyu|kyun|kyon|why|not now|chodo|rehnde|chhodo|नहीं|ना|बाद में|छोड़ो|नाम नहीं बताना)[\s!.🙏]*$/iu;

export type NameProblem = "abuse" | "greeting" | "not-a-name" | "";

export const nameProblem = (raw: string, parsed: string): NameProblem => {
  if (isAbusive(raw)) return "abuse";
  const words = raw.toLowerCase().split(/[^\p{L}\p{M}]+/u).filter(Boolean);
  if (words.length && words.every((w) => GREETING_WORDS.has(w))) return "greeting";
  if (!parsed || /[@\d]/.test(raw) || /[?@\d]/.test(parsed)) return "not-a-name";
  const nameWords = parsed.toLowerCase().split(/\s+/);
  if (nameWords.some((w) => GREETING_WORDS.has(w) || NOT_NAME_WORDS.has(w))) return "not-a-name";
  for (const w of nameWords) {
    if (/^[a-z]+$/.test(w)) {
      if (w.length >= 3 && !/[aeiouy]/.test(w)) return "not-a-name";
      if (/^(.)\1+$/.test(w)) return "not-a-name";
      if (/asdf|sdfg|dfgh|fghj|hjkl|qwer|wert|erty|zxcv|xcvb|abcd|wxyz/.test(w)) return "not-a-name";
    }
  }
  return "";
};

export const NAME_REPLY: Record<Lang, Record<Exclude<NameProblem, "">, string>> = {
  en: {
    abuse: "Please keep it respectful. 🙏 Type your real name to start the chat.",
    greeting: "Hello! 🙏 Please type your real name first (for example: Rohit Kumar).",
    "not-a-name": "That doesn't look like a name. Please type your real name (for example: Rohit Kumar).",
  },
  hi: {
    abuse: "कृपया सभ्य भाषा का प्रयोग करें। 🙏 चैट शुरू करने के लिए अपना असली नाम लिखें।",
    greeting: "नमस्कार! 🙏 कृपया पहले अपना असली नाम लिखें (जैसे: रोहित कुमार)।",
    "not-a-name": "यह नाम जैसा नहीं लग रहा। कृपया अपना असली नाम लिखें (जैसे: रोहित कुमार)।",
  },
};

const PHONE_WORDS = /phone|mobile|number|numbr|whatsapp|contact|call|नंबर|नम्बर|मोबाइल|फ़ोन|फोन/i;

/**
 * A mobile number typed in the chat that cannot be right (not 10 digits, or doesn't start with 6–9).
 */
export const typedPhoneProblem = (message: string, lang: Lang): string => {
  const match = message.match(/\+?\d[\d\s\-()]{5,}\d/);
  if (!match) return "";
  let digits = match[0].replace(/\D/g, "");
  if (digits.length < 7 || digits.length > 14) return "";
  const rest = message.replace(match[0], "").trim();
  if (rest.length > 25 && !PHONE_WORDS.test(rest)) return "";
  if (digits.length > 10 && digits.startsWith("91")) digits = digits.slice(2);
  else if (digits.length > 10 && digits.startsWith("0")) digits = digits.slice(1);

  if (digits.length !== 10) {
    return lang === "hi"
      ? `यह मोबाइल नंबर सही नहीं लग रहा: इसमें ${digits.length} अंक हैं। मोबाइल नंबर ठीक 10 अंकों का होता है। कृपया जाँच कर दोबारा लिखें।`
      : `This mobile number doesn't look right: it has ${digits.length} digits. An Indian mobile number has exactly 10 digits. Please check it and type it again.`;
  }
  if (!/^[6-9]/.test(digits)) {
    return lang === "hi"
      ? "यह मोबाइल नंबर सही नहीं लग रहा: भारतीय मोबाइल नंबर 6, 7, 8 या 9 से शुरू होता है। कृपया जाँच कर दोबारा लिखें।"
      : "This mobile number doesn't look right: an Indian mobile number starts with 6, 7, 8 or 9. Please check it and type it again.";
  }
  if (/^(\d)\1{9}$/.test(digits)) {
    return lang === "hi"
      ? "यह मोबाइल नंबर असली नहीं लग रहा। कृपया अपना सही नंबर लिखें।"
      : "This doesn't look like a real mobile number. Please type your correct number.";
  }
  return "";
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const EMAIL_TYPOS = /@(gmial|gmai|gmal|gnail|gamil|gmil|gmaill|gmail\.con|yaho|yahooo|hotmial|outlok)\./i;

export const typedEmailProblem = (message: string, lang: Lang): string => {
  const token = message.split(/\s+/).find((part) => part.includes("@"));
  if (!token) return "";
  const email = token.replace(/^[<("']+|[>)"',;:!?]+$/g, "").replace(/\.+$/, "");
  if (EMAIL_PATTERN.test(email) && !EMAIL_TYPOS.test(email)) return "";
  return lang === "hi"
    ? `यह ईमेल पता सही नहीं लग रहा (${email})। कृपया जाँच कर दोबारा लिखें, जैसे name@gmail.com।`
    : `This email address doesn't look right (${email}). Please check it and type it again, for example name@gmail.com.`;
};

const NAME_PATTERN = /^\p{L}[\p{L}\p{M} .'-]*$/u;

export const cleanName = (value: string) => value.replace(/[^\p{L}\p{M} .'-]/gu, "").replace(/^\s+/, "").replace(/\s{2,}/g, " ");

export const cleanMobile = (value: string) => {
  let digits = value.replace(/\D/g, "");
  if (digits.length > 10 && digits.startsWith("91")) digits = digits.slice(2);
  if (digits.length > 10 && digits.startsWith("0")) digits = digits.slice(1);
  return digits.slice(0, 10);
};

const NAME_PREFIX = /^(?:(?:hi+|hello+|hey+|namaste|namaskar|pranam|नमस्ते|नमस्कार|प्रणाम|सुनिए|जी|ji)[\s,!.]*)?(?:my name is|my name's|name is|i am|i'm|im|this is|it's|its|myself|mera naam hai|mera naam|mera nam|naam hai|naam|main|mai|me|मेरा नाम है|मेरा नाम|नाम है|नाम|मैं हूँ|मैं)\s+/iu;
const NAME_SUFFIX = /\s+(?:hai|hain|hu|hoon|hun|here|speaking|this side|bol raha hu|bol rahi hu|bol raha hoon|bol rahi hoon|बात कर रहा हूँ|बात कर रही हूँ|बोल रहा हूँ|बोल रही हूँ|है|हूँ|हू|जी|ji|jee)[.!]*$/iu;

export const parseName = (raw: string): string => {
  let s = raw.trim().replace(/[.!?,🙏]+$/u, "");
  s = s.replace(NAME_PREFIX, "");
  s = s.replace(NAME_SUFFIX, "");
  const n = cleanName(s)
    .trim()
    .replace(/[.'-]+$/, "");
  if (n.length < 2 || n.length > 40 || !NAME_PATTERN.test(n) || n.split(/\s+/).length > 3) return "";
  return n
    .split(" ")
    .map((w) => (w ? w[0].toLocaleUpperCase() + w.slice(1) : w))
    .join(" ");
};

export type LeadValues = { name: string; phone: string; time?: string };
export type LeadErrors = Partial<Record<"name" | "phone", string>>;

const LEAD_ERRORS = {
  en: {
    nameEmpty: "Please enter your name.",
    nameShort: "Name is too short.",
    nameLetters: "Name can contain letters only.",
    nameReal: "Please enter your real name.",
    phoneEmpty: "Please enter your mobile number.",
    phoneLength: "Mobile number must be exactly 10 digits.",
    phoneStart: "Mobile number must start with 6, 7, 8 or 9.",
  },
  hi: {
    nameEmpty: "कृपया अपना नाम लिखें।",
    nameShort: "नाम बहुत छोटा है।",
    nameLetters: "नाम में केवल अक्षर हो सकते हैं।",
    nameReal: "कृपया अपना असली नाम लिखें।",
    phoneEmpty: "कृपया अपना मोबाइल नंबर लिखें।",
    phoneLength: "मोबाइल नंबर ठीक 10 अंकों का होना चाहिए।",
    phoneStart: "मोबाइल नंबर 6, 7, 8 या 9 से शुरू होना चाहिए।",
  },
} as const;

export const validateLead = ({ name, phone }: Pick<LeadValues, "name" | "phone">, lang: Lang): LeadErrors => {
  const e = LEAD_ERRORS[lang];
  const errors: LeadErrors = {};
  const n = name.trim();
  if (!n) errors.name = e.nameEmpty;
  else if (n.length < 2) errors.name = e.nameShort;
  else if (!NAME_PATTERN.test(n)) errors.name = e.nameLetters;
  else if (nameProblem(n, n)) errors.name = e.nameReal;

  if (!phone) errors.phone = e.phoneEmpty;
  else if (phone.length !== 10) errors.phone = e.phoneLength;
  else if (!/^[6-9]/.test(phone)) errors.phone = e.phoneStart;
  return errors;
};

/* ───────────────────────── Strict Zero-Pricing Guard ───────────────────────── */

const PRICING_KEYWORDS = [
  "price", "pricing", "cost", "costing", "charges", "charge", "rate", "rates", "fee", "fees",
  "kharch", "kharcha", "kharche", "paisa", "paise", "rupaye", "rupees", "kitna lagega",
  "kitne lagenge", "package", "rate card", "bill", "quotation", "price list", "discount",
  "कीमत", "दाम", "खर्च", "खर्चा", "पैसे", "रुपये", "चार्ज", "फीस", "पैकेज", "दर", "कितना लगेगा"
];

export const isPricingQuery = (text: string): boolean => {
  if (!text) return false;
  const lower = text.toLowerCase();
  return PRICING_KEYWORDS.some((kw) => lower.includes(kw));
};

export const PRICING_RESPONSE = {
  hi: "मोक्ष सेवा नमो गंगे ट्रस्ट की एक सेवा और सहायता पहल है। सेवाओं के शुल्क, पात्रता या सहायता से जुड़ी विस्तृत जानकारी के लिए कृपया हमारे 24×7 हेल्पलाइन नंबर +91 92201 47229 पर कॉल या व्हाट्सएप करें, या अपना मोबाइल नंबर साझा करें ताकि हमारी समन्वयक टीम आपको पूरी जानकारी प्रदान कर सके।",
  en: "Moksha Sewa is a humanitarian sewa initiative by Namo Gange Trust. For information regarding subsidized arrangements, eligibility, or assistance details, please connect directly with our 24×7 coordination team at +91 92201 47229 (call/WhatsApp) or share your contact number here so our team can guide you.",
};

