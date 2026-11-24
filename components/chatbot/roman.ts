/* Devanagari → Roman letters, letter by letter, for the live preview of what the visitor is saying in a call
   (components/chatbot/Chatbot.tsx). Rough on purpose: as soon as they finish, the server's proper Hinglish replaces it. */

const CONSONANTS: Record<string, string> = {
  क: "k", ख: "kh", ग: "g", घ: "gh", ङ: "n", च: "ch", छ: "chh", ज: "j", झ: "jh", ञ: "n",
  ट: "t", ठ: "th", ड: "d", ढ: "dh", ण: "n", त: "t", थ: "th", द: "d", ध: "dh", न: "n",
  प: "p", फ: "ph", ब: "b", भ: "bh", म: "m", य: "y", र: "r", ल: "l", ळ: "l", व: "v",
  श: "sh", ष: "sh", स: "s", ह: "h", क़: "q", ख़: "kh", ग़: "gh", ज़: "z", ड़: "r", ढ़: "rh", फ़: "f", य़: "y",
};
// With a nukta (़) after them
const NUKTA: Record<string, string> = { क: "q", ख: "kh", ग: "gh", ज: "z", ड: "r", ढ: "rh", फ: "f", य: "y" };
const VOWEL_SIGNS: Record<string, string> = { "ा": "aa", "ि": "i", "ी": "ee", "ु": "u", "ू": "oo", "ृ": "ri", "े": "e", "ै": "ai", "ो": "o", "ौ": "au", "ॅ": "e", "ॉ": "o" };
const VOWELS: Record<string, string> = { अ: "a", आ: "aa", इ: "i", ई: "ee", उ: "u", ऊ: "oo", ऋ: "ri", ए: "e", ऐ: "ai", ओ: "o", औ: "au", ऑ: "o", ऍ: "e" };
const MARKS: Record<string, string> = { "ं": "n", "ँ": "n", "ः": "h", "।": ".", "॥": "." };
const VIRAMA = "्";

// One syllable: a consonant (or none) and its vowel; `inherent` is the unwritten "a" Hindi often drops
type Unit = { c: string; v: string; inherent: boolean; tail: string };

const word = (text: string): string => {
  const units: Unit[] = [];
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (CONSONANTS[ch] !== undefined) {
      let c = CONSONANTS[ch];
      if (text[i + 1] === "़") {
        c = NUKTA[ch] ?? c;
        i++;
      }
      const next = text[i + 1];
      if (next === VIRAMA) {
        units.push({ c, v: "", inherent: false, tail: "" });
        i++;
      } else if (next && VOWEL_SIGNS[next] !== undefined) {
        units.push({ c, v: VOWEL_SIGNS[next], inherent: false, tail: "" });
        i++;
      } else units.push({ c, v: "a", inherent: true, tail: "" });
    } else if (VOWELS[ch] !== undefined) units.push({ c: "", v: VOWELS[ch], inherent: false, tail: "" });
    else if (MARKS[ch] !== undefined && units.length) units[units.length - 1].tail += MARKS[ch];
    else if (ch >= "०" && ch <= "९") units.push({ c: String(ch.charCodeAt(0) - 0x966), v: "", inherent: false, tail: "" });
    else units.push({ c: ch, v: "", inherent: false, tail: "" });
  }
  // The unwritten "a" is dropped at the end of a word, and between two syllables that keep their vowel (कर्‍ना → karna)
  const last = units.length - 1;
  if (last > 0 && units[last].inherent && !units[last].tail) units[last].v = "";
  // ...and a long vowel at the end is written short, as people type it (मेरा → mera, जी → ji)
  if (last >= 0 && units[last].c && !units[last].tail) units[last].v = units[last].v === "aa" ? "a" : units[last].v === "ee" ? "i" : units[last].v;
  for (let i = last - 1; i > 0; i--) {
    const u = units[i];
    if (u.inherent && !u.tail && units[i - 1].v && units[i + 1].c && units[i + 1].v) u.v = "";
  }
  // "में" → "mein", "हैं" → "hain"
  return units.map((u) => u.c + (u.v === "e" && u.tail === "n" ? "ein" : u.v + u.tail)).join("");
};

/** Hindi in Devanagari written in Roman letters (other text is left as it is) */
export const toRoman = (text: string) => text.replace(/[ऀ-ॿ]+/g, word);
