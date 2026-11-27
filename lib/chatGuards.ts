/* Input checks for the website chat (components/chatbot/Chatbot.tsx): blocking abusive
   language (English, Hindi and Hinglish). */

/* ───────────────────────── Abusive language ───────────────────────── */

// Common character swaps used to dodge filters: "f@ck", "sh1t", "b!tch", "a$$"
const LEET: Record<string, string> = { "@": "a", "4": "a", "0": "o", "1": "i", "!": "i", "3": "e", "$": "s", "5": "s", "7": "t" };

// Lower-case, undo the swaps and squeeze repeated letters ("fuuuuck" → "fuck", "asshole" → "ashole").
// The word lists below go through the same squeeze, so both sides compare the same way.
const squeeze = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFC")
    // "!" ending a word is punctuation ("hell!!"), not an "i"
    .replace(/!+(?![\p{L}@4013$57])/gu, " ")
    .replace(/[@4013!$57]/g, (c) => LEET[c] ?? c)
    .replace(/(\p{L})\1+/gu, "$1");

// Whole words only, so ordinary words and names that merely contain them stay allowed
// ("class", "Dickson", "Gandhi", "Kamini", "Scunthorpe").
const EXACT_WORDS = [
  // English
  "ass", "dick", "dik", "shit", "shitty", "bullshit", "fck", "wtf", "stfu", "idiot", "stupid", "dumbass", "jackass",
  "porn", "nude", "nudes", "boobs", "pussy", "cock", "twat", "prick", "sex", "sexy", "sexual", "horny",
  // Hinglish
  "harami", "haramzada", "haramzadi", "kamina", "kamine", "kameena", "kameene", "kutta", "kutte", "kuttiya", "suar", "suwar",
  "gand", "gaand", "gandu", "gaandu", "lund", "lauda", "laude", "lavda", "lavde", "lawda", "lawde", "lodu", "loda", "lode", "lodey", "randi",
  "randiya", "randwa", "chodu", "chut", "chinal", "bsdk", "bkl", "mkc", "mkb", "tharki", "bc", "mc", "chudai", "chudwa",
  "chudwana", "chodunga", "chodenge", "jhant", "jhaant", "kutti",
  "pagal", "ullu", "gadha", "gadhe", "bewakoof", "bewkoof", "kaminey", "bastord", "bastad",
  // Hindi
  "गांड", "गाँड", "गांडू", "लंड", "लौड़ा", "लोड़ा", "रंडी", "हरामी", "हरामज़ादा", "कमीना", "कमीने", "कुत्ता", "कुत्ते", "कुतिया",
  "सुअर", "चूत", "छिनाल", "ठरकी", "सेक्स", "सेक्सी", "चुदाई", "झांट", "झाँट", "लौड़े", "लोड़े", "लौडे", "लोडे", "लौड़ा", "लोडू", "लंडू", "बास्टर्ड", "फक",
  // English ones as they come written in Devanagari (a Hindi keyboard, or a voice call's words): "बुलशिट", "फकिंग"
  // (not "शीट", a sheet, nor "बीच", between)
  "बुलशिट", "बुलशीट", "शिट", "बस्टर्ड", "बास्टड", "बैस्टर्ड", "फ़क", "फकिंग", "फ़किंग", "फक्ड", "बिच", "बिचेस", "बास्टर्ड्स", "इडियट", "स्टूपिड", "स्टुपिड",
  "एसहोल", "ऐसहोल", "असहोल", "डिकहेड", "स्लट", "रिटार्ड",
].map(squeeze);

// Word beginnings that are always abusive ("fucking", "bitches", "chutiyapa", "bhosdike")
const WORD_STARTS = [
  "fuck", "fuk", "motherf", "bitch", "bastard", "asshole", "cunt", "slut", "whore", "dickhead", "retard", "nigg",
  "chutiy", "chutia", "chootiy", "madarch", "maderch", "madarj", "mdrch", "behench", "behnch", "bahench", "bahanch", "bhench", "bhnch",
  "benchod", "banchod", "bhosd", "bhosad", "bosd", "bosad", "bhadw", "bhadv",
  "jhaatu", "jhantu", "haramkh",
  "चूतिय", "चुतिय", "मादरच", "बहनच", "बहेनच", "भेनच", "भोसड", "भोसड़", "हरामख", "भड़व", "भडव", "चोद",
  // "motherfucker" in Devanagari ("मदरफकर", "मादरफ़कर")
  "मदरफ", "मादरफ",
].map(squeeze);

const EXACT_SET = new Set(EXACT_WORDS);
// Abuse made of ordinary words ("go to hell", "teri maa ki …", "bhen ke …"): matched as whole words in a row
const PHRASES = [
  // English
  "go to hell", "go 2 hell", "go hell", "get lost", "get the hell out", "fuck off", "piss off", "burn in hell", "rot in hell", "screw you", "shut up bitch", "kill yourself", "son of a bitch",
  // Hinglish: maa / behen gaali, "bhaad mein jaa"
  "teri maa ki", "teri ma ki", "teri maa ka", "teri ma ka", "teri maa ke", "teri ma ke", "tere maa ki", "teri mummy ki",
  "teri behen ki", "teri bahen ki", "teri behan ki", "teri bhen ki", "teri behen ka", "teri bhen ka",
  "maa ki chut", "ma ki chut", "maa ki aankh", "maa chod", "ma chod", "maa chuda", "ma chuda",
  // "choot" alone is also an ordinary word (chot, an injury), so only in these phrases
  "maa ki choot", "ma ki choot", "bhen ki choot", "behen ki choot", "bahen ki choot", "behan ki choot",
  "bhen ki chut", "behen ki chut", "bahen ki chut", "behan ki chut", "gaand marwa", "gand marwa", "fuck u", "fuck you",
  "behen chod", "bahen chod", "behan chod", "bhen chod", "behen ke lode", "bhen ke lode", "bhen ke laude", "behen ke laude",
  "maa ke lode", "ma ke lode", "maa ke laude", "tere baap ki", "bhaad me ja", "bhaad mein ja", "bhad me ja", "bhad mein ja",
  "bhaad me jao", "bhaad mein jao", "bhad me jao", "bhad mein jao", "jahannum me ja", "bkl", "bc mc",
  // Hindi
  "तेरी माँ की", "तेरी मां की", "तेरी माँ का", "तेरी मां का", "तेरी बहन की", "तेरी बहन का", "माँ की चूत", "मां की चूत",
  "बहन के लौड़े", "माँ के लौड़े", "भाड़ में जा", "भाड़ में जाओ", "भाड़ मे जा", "नरक में जा", "जहन्नुम में जा",
  "बहन की चूत", "बहेन की चूत", "भेन की चूत", "गांड मरवा", "गांड मार",
  // English ones in Devanagari
  "गो टू हेल", "गो टु हेल", "गो टू हैल", "गो टु हैल", "गो हेल", "गेट लॉस्ट", "गेट लोस्ट", "गेट लास्ट", "बर्न इन हेल", "फक यू", "फ़क यू", "फक यु", "फ़क यु",
  "मदर फकर", "मदर फ़कर", "बुल शिट", "सन ऑफ अ बिच", "सन ऑफ़ अ बिच", "शट अप बिच", "स्क्रू यू", "किल योरसेल्फ",
];
let phraseKeys: string[] | null = null; // squeezed like the text, made on first use (tokensOf is below)
const hasBadPhrase = (tokens: string[]) => {
  phraseKeys = phraseKeys || PHRASES.map((phrase) => ` ${tokensOf(phrase).join(" ")} `);
  const line = ` ${tokens.join(" ")} `;
  return phraseKeys.some((key) => line.includes(key));
};

// These squeeze into ordinary words ("saale" would become "sale"), so they are compared letter for letter
const UNSQUEEZED_WORDS = new Set(["saale", "saala", "saali"]);

// Letters, marks (Hindi vowel signs) and "*" (as in "f*ck"); everything else separates words
const tokensOf = (text: string) => squeeze(text).split(/[^\p{L}\p{M}*]+/u).filter(Boolean);

const isBadWord = (token: string) => {
  if (token.includes("*")) {
    // "f*ck", "sh*t": "*" stands for one hidden letter
    const pattern = new RegExp(`^${token.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".?")}$`, "u");
    return EXACT_WORDS.some((w) => pattern.test(w)) || WORD_STARTS.some((w) => pattern.test(w));
  }
  return EXACT_SET.has(token) || WORD_STARTS.some((start) => token.startsWith(start));
};

/* Said aloud, the speech recognizer now and then writes an ordinary word as one of these: "Sikh" or "sects" as "sex",
   "बीच" as "बिच", "Dixit" as "dick", "छूट" (a discount) as "chut", "load" as "lode", initials as "BC" — and a mild word
   ("pagal", "stupid") may be about anything. In a voice call these never get the filter's warning (27 Nov 2026: a
   tester asking about the Sikh community was warned, and the words weren't even shown): they go to Aarohi, who warns
   only when it really is aimed at her (her rule 5c). */
const SPOKEN_LOOKALIKES = new Set(
  [
    "ass", "dick", "dik", "bc", "mc", "mkc", "mkb", "bkl", "gand", "gaand", "chut", "lund", "loda", "lode", "lodey", "lodu",
    "kutta", "kutte", "kutti", "suar", "suwar", "pagal", "ullu", "gadha", "gadhe", "idiot", "stupid", "cock", "prick",
    "बिच", "फक", "शिट", "इडियट", "स्टूपिड", "स्टुपिड",
  ].map(squeeze)
);
/* "sex", "sexy" in a call: a warning, as typed — except beside a word about a faith or a community ("how about sex
   community", "सेक्स धर्म के लोग"), where it was surely "Sikh" misheard */
const SEX_WORDS = new Set(["sex", "sexy", "sexual", "सेक्स", "सेक्सी"].map(squeeze));
const FAITH_NEAR =
  /communit|religio|faith|samaj|samaaj|dharm|panth|guru|gurdwara|gurudwara|sardar|turban|punjab|people|\blog\b|सिख|समुदाय|समाज|धर्म|पंथ|गुरु|गुरुद्वार|सरदार|पंजाब|लोग/iu;

/** isAbusive for words heard in a voice call: not a word that can be an ordinary one misheard (SPOKEN_LOOKALIKES, or
    "sex" beside a faith or a community: "Sikh") */
export function isAbusiveSpoken(text: string): boolean {
  if (text.toLowerCase().split(/[^\p{L}]+/u).some((w) => UNSQUEEZED_WORDS.has(w))) return true;
  const tokens = tokensOf(text);
  const misheard = (token: string) => SPOKEN_LOOKALIKES.has(token) || (SEX_WORDS.has(token) && FAITH_NEAR.test(text));
  return tokens.some((token) => !misheard(token) && isBadWord(token)) || hasBadPhrase(tokens);
}

/** True if the text contains an abusive word, also when spelled "f u c k", "f.u.c.k" or "f*ck". */
export function isAbusive(text: string): boolean {
  if (text.toLowerCase().split(/[^\p{L}]+/u).some((w) => UNSQUEEZED_WORDS.has(w))) return true;
  const tokens = tokensOf(text);
  if (tokens.some(isBadWord) || hasBadPhrase(tokens)) return true;

  // Letters typed one by one ("f u c k"): join each run of single letters and check it as a word
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
