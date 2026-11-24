"use client";

import Image from "next/image";
import { isOptimizableSrc } from "@/lib/imageSrc";
import React, { useEffect, useRef, useState, type CSSProperties } from "react";
import {
  ArrowLeft,
  Bell,
  BellOff,
  ChevronRight,
  Info,
  LogOut,
  MessageCircleMore,
  Mic,
  MicOff,
  Minus,
  Pause,
  Phone,
  PhoneOff,
  Play,
  Send,
  Shield,
  ThumbsDown,
  ThumbsUp,
  Volume2,
  VolumeX,
  X,
  UserCheck,
} from "lucide-react";
import { fetchSettingsJson } from "@/lib/clientSettings";
import { CHAT_URL, type ChatConfig } from "./chatConfig";
import { CONTACT, STEPS, TEAM, TEXT, TOPICS } from "./chatContent";
import {
  ABUSE_REPLY,
  NAME_REPLY,
  hasAbuse,
  isAbusive,
  abuseWarning,
  abuseBlocked,
  isUrgent,
  isPricingQuery,
  PRICING_RESPONSE,
  otpIn,
  cleanMobile,
  nameProblem,
  parseName,
  typedEmailProblem,
  typedPhoneProblem,
  type Lang,
  type LeadValues,
} from "./chatGuards";
import { clearChatSession, newSessionId, readChatSession, saveChatSession } from "./chatSession";
import { chatSounds } from "./chatSounds";
import ChatLeadForm from "./ChatLeadForm";
import ChatMessageText from "./ChatMessageText";

type Message = {
  role: "user" | "assistant";
  content: string;
  by?: string;
  step?: string;
  sent?: boolean;
  menu?: boolean;
  divider?: string;
};

const LANG_KEY = "mokshaMitraLang";
const BLOCK_KEY = "moksha_chat_block";

const readLang = (fallback: string): Lang => {
  if (typeof window === "undefined") return fallback === "hi" ? "hi" : "en";
  try {
    const saved = window.localStorage.getItem(LANG_KEY);
    if (saved === "hi" || saved === "en") return saved;
  } catch {}
  return fallback === "hi" ? "hi" : "en";
};

const saveLang = (lang: Lang) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(LANG_KEY, lang);
  } catch {}
};

const readBlock = (): { strikes: number; until: number } => {
  if (typeof window === "undefined") return { strikes: 0, until: 0 };
  try {
    const raw = localStorage.getItem(BLOCK_KEY);
    if (!raw) return { strikes: 0, until: 0 };
    const parsed = JSON.parse(raw);
    return { strikes: Number(parsed.strikes) || 0, until: Number(parsed.until) || 0 };
  } catch {
    return { strikes: 0, until: 0 };
  }
};

const storeBlock = (strikes: number, until: number) => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(BLOCK_KEY, JSON.stringify({ strikes, until }));
  } catch {}
};

const countdown = (ms: number) => {
  const seconds = Math.max(0, Math.ceil(ms / 1000));
  return [Math.floor(seconds / 3600), Math.floor(seconds / 60) % 60, seconds % 60]
    .map((n) => String(n).padStart(2, "0"))
    .join(":");
};

const maskPhone = (phone: string) => (phone.length >= 10 ? `XXXXXX${phone.slice(-4)}` : phone);

const shortDate = (iso: string | undefined, lang: Lang) => {
  const d = iso ? new Date(iso) : null;
  return d && !Number.isNaN(d.getTime()) ? d.toLocaleDateString(lang === "hi" ? "hi-IN" : "en-IN", { day: "numeric", month: "short" }) : "";
};

const HINGLISH = new Set(
  "hai hain kya kaise kaisa kab kahan kitna kitne kitni mujhe mera meri mere aap aapka aapki aapke kripya nahi nahin chahiye karna karni karo kar batao bataiye haan ho hoga hogi sakta sakte ke ki ka liye mein se ko bhi toh tha thi hum hamare humein hamara koi kuch abhi jaldi ghar par wala wali dijiye kijiye antim sanskar asthi visarjan pandit shav van seva maut dehant guzar nidhan samagri ambulance freezer".split(" ")
);
const ENGLISH = new Set("the is are what how please my you your can do does need want for of to and with about when where which there have has will would could should".split(" "));

const detectLang = (text: string): Lang | null => {
  if (/[ऀ-ॿ]/.test(text)) return "hi";
  const words = text.toLowerCase().match(/[a-z]+/g) || [];
  const hi = words.filter((w) => HINGLISH.has(w)).length;
  const en = words.filter((w) => ENGLISH.has(w)).length;
  if (hi >= 1 && hi >= en) return "hi";
  if (en >= 2 && en > hi) return "en";
  return null;
};

// Sacred lotus mark matching Moksha Voyage
const LotusMark = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 20" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
    <path d="M16 2c3 4 3 9 0 14c-3-5-3-10 0-14z" />
    <path d="M16 16c-5-1-9-5-10-10c5 1 9 5 10 10z" />
    <path d="M16 16c5-1 9-5 10-10c-5 1-9 5-10 10z" />
    <path d="M3 13c4 5 22 5 26 0" />
  </svg>
);

const BUBBLE = "rounded-[18px] rounded-tl-[6px] border border-[#ecd3a6] bg-[#fffaf1]/95 px-3.5 py-2.5 text-[13px] leading-[1.6] font-medium text-[#4a2a1a] shadow-[0_8px_18px_-12px_rgba(110,40,20,0.4)]";
const USER_BUBBLE = "rounded-[18px] rounded-tr-[6px] bg-[linear-gradient(135deg,#8B6A3E,#73532F)] px-3.5 py-2.5 text-[13px] leading-[1.5] font-medium text-white shadow-[0_8px_18px_-10px_rgba(115,83,47,0.7)]";
const AGENT_BUBBLE = "rounded-[18px] rounded-tl-[6px] border border-[#d9a441] bg-[#fffbf2] px-3.5 py-2.5 text-[13px] leading-[1.6] font-medium text-[#3d2414] shadow-[0_8px_18px_-12px_rgba(110,40,20,0.5)]";

const BotAvatar: React.FC<{ avatar: string; speaking?: boolean }> = ({ avatar, speaking }) => {
  const src = avatar || "/images/chatbot/aarohi-avatar.png";
  return (
    <span
      className={`relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#fff3df] shadow-[0_4px_10px_-4px_rgba(110,40,20,0.5)] ring-2 ring-[#d9a441] ${
        speaking ? "mv-speaking" : ""
      }`}
      aria-hidden="true"
    >
      <img src={src} alt="Aarohi" className="h-full w-full object-cover" />
    </span>
  );
};

type Props = { open: boolean; onClose: () => void; config: ChatConfig | null };

const ChatPanel: React.FC<Props> = ({ open, onClose, config }) => {
  const [initial] = useState(readChatSession);
  const [sessionId, setSessionId] = useState(() => (initial.status === "active" ? initial.sessionId : newSessionId()));
  const [visitorName, setVisitorName] = useState<string | null>(initial.status === "active" ? initial.name || null : null);
  const [phone, setPhone] = useState(initial.status === "active" ? initial.phone : "");
  const [lang, setLangState] = useState<Lang>(() => readLang(config?.defaultLanguage ?? ""));
  const t = TEXT[lang];
  const botName = config?.name?.trim() || (lang === "hi" ? "आरोही" : "Aarohi");
  const avatar = config?.avatar?.trim() || "/images/chatbot/aarohi-avatar.png";

  // 24-hr abuse block tracking
  const [blockedTill, setBlockedTill] = useState(() => readBlock().until);
  const [clock, setClock] = useState(() => Date.now());

  useEffect(() => {
    if (blockedTill <= Date.now()) return;
    const timer = setInterval(() => {
      const now = Date.now();
      setClock(now);
      if (now >= blockedTill) {
        setBlockedTill(0);
        storeBlock(0, 0);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [blockedTill]);

  const isBlocked = blockedTill > clock;

  // Live Chat Monitoring & Admin Agent Takeover state
  const [teamLive, setTeamLive] = useState(false);
  const teamSinceRef = useRef<number>(Date.now() - 120000);
  const teamCheckingRef = useRef(false);

  // OTP Callback verification state
  const [otpStep, setOtpStep] = useState<{
    phone: string;
    status: "idle" | "awaiting_otp" | "verified";
    resendCount: number;
  }>({
    phone: "",
    status: "idle",
    resendCount: 0,
  });

  const [pending, setPending] = useState<{ message: string; topic: string } | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [ended, setEnded] = useState(false);

  const [nameStep, setNameStep] = useState(() => !(initial.status === "active" && initial.name));
  const askingName = nameStep && !visitorName && !ended;
  const [nameError, setNameError] = useState("");

  const dismissNameStep = (name = "") => {
    setNameStep(false);
    const finalName = name || "Mitr";
    setVisitorName(finalName);
    saveChatSession(sessionId, finalName);
  };

  const [restored, setRestored] = useState(false);
  const [shown, setShown] = useState(false);

  // Two-way continuous voice conversation
  const [voiceOn, setVoiceOn] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    try {
      return window.localStorage.getItem("moksha_voice_on") === "1";
    } catch {
      return false;
    }
  });
  const [voiceMode, setVoiceMode] = useState(false);
  const voiceModeRef = useRef(false);
  const [callMuted, setCallMuted] = useState(false);
  const callMutedRef = useRef(false);
  const [callOnHold, setCallOnHold] = useState(false);
  const callOnHoldRef = useRef(false);
  const [speaking, setSpeaking] = useState(false);
  const speakingRef = useRef(false);
  const loadingRef = useRef(false);
  const endedRef = useRef(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const silenceRetriesRef = useRef(0);
  const autoListenTimerRef = useRef<any>(null);

  const [listening, setListening] = useState(false);
  const [transcribing, setTranscribing] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const recordTimerRef = useRef<any>(null);
  const recognitionRef = useRef<any>(null);
  const recognizedRef = useRef<string>("");

  useEffect(() => {
    loadingRef.current = loading;
  }, [loading]);

  useEffect(() => {
    endedRef.current = ended;
  }, [ended]);

  const setLang = (next: Lang) => {
    setLangState(next);
    saveLang(next);
  };

  const [soundMuted, setSoundMuted] = useState(false);
  const toggleMute = () => {
    setSoundMuted((v) => {
      const next = !v;
      chatSounds.setMuted(next);
      return next;
    });
  };

  /**
   * Pauses all other audio/video media on the page so the microphone
   * hears only the speaker without background music interference.
   */
  const pauseAllSiteMedia = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("moksha:voice", { detail: { speaking: true } }));
      window.dispatchEvent(new CustomEvent("moksha:mic", { detail: { listening: true } }));
    }
    if (typeof document === "undefined") return;
    try {
      const mediaElements = document.querySelectorAll("audio, video");
      mediaElements.forEach((el) => {
        const media = el as HTMLMediaElement;
        if (media !== audioRef.current && !media.paused) {
          media.pause();
        }
      });
    } catch {}
  };

  const resumeAllSiteMedia = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("moksha:voice", { detail: { speaking: false } }));
      window.dispatchEvent(new CustomEvent("moksha:mic", { detail: { listening: false } }));
    }
  };

  const stopSpeaking = () => {
    clearTimeout(autoListenTimerRef.current);
    if (audioRef.current) {
      try {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      } catch {}
      audioRef.current = null;
    }
    if (typeof window !== "undefined" && window.speechSynthesis) {
      try {
        window.speechSynthesis.cancel();
      } catch {}
    }
    setSpeaking(false);
    speakingRef.current = false;
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("moksha:voice", { detail: { speaking: false } }));
    }
  };

  /** Automatically resumes listening when Moksha Mitra finishes speaking (two-way conversational loop) */
  const triggerAutoListen = () => {
    clearTimeout(autoListenTimerRef.current);
    if (!voiceModeRef.current || endedRef.current || callOnHoldRef.current || teamLive) return;
    autoListenTimerRef.current = setTimeout(() => {
      if (voiceModeRef.current && !speakingRef.current && !loadingRef.current && !endedRef.current && !callOnHoldRef.current && !teamLive) {
        void startVoiceInput();
      }
    }, 350);
  };

  /**
   * Reads a reply aloud in Moksha Mitra's voice (ElevenLabs Tripti / Sarvam AI / Web Speech fallback).
   * Optional onStart callback fires as soon as audio playback actually begins,
   * so text and speech appear synchronized without premature text dumping.
   */
  const speak = async (rawText: string, onStart?: () => void) => {
    if (typeof window === "undefined" || !rawText) {
      onStart?.();
      if (voiceModeRef.current) triggerAutoListen();
      return;
    }
    const clean = rawText
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/https?:\/\/\S+/g, "")
      .replace(/[*_#`~>]/g, "")
      .replace(/[\p{Extended_Pictographic}️‍]/gu, "")
      .replace(/\s+/g, " ")
      .trim();

    if (!clean) {
      onStart?.();
      if (voiceModeRef.current) triggerAutoListen();
      return;
    }

    pauseAllSiteMedia();
    stopSpeaking();
    setSpeaking(true);
    speakingRef.current = true;
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("moksha:voice", { detail: { speaking: true } }));
    }

    try {
      const res = await fetch(`${CHAT_URL}/speak`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: clean.slice(0, 1500) }),
      });

      if (res.ok) {
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        const player = new Audio(url);
        audioRef.current = player;
        player.onplay = () => {
          onStart?.();
        };
        player.onended = () => {
          setSpeaking(false);
          speakingRef.current = false;
          URL.revokeObjectURL(url);
          audioRef.current = null;
          if (typeof window !== "undefined") {
            window.dispatchEvent(new CustomEvent("moksha:voice", { detail: { speaking: false } }));
          }
          triggerAutoListen();
        };
        player.onerror = () => {
          onStart?.();
          setSpeaking(false);
          speakingRef.current = false;
          URL.revokeObjectURL(url);
          audioRef.current = null;
          if (typeof window !== "undefined") {
            window.dispatchEvent(new CustomEvent("moksha:voice", { detail: { speaking: false } }));
          }
          triggerAutoListen();
        };
        await player.play();
        return;
      }
    } catch {}

    // Fallback: Web Speech API
    if (typeof window !== "undefined" && window.speechSynthesis) {
      try {
        window.speechSynthesis.resume();
        const utterance = new SpeechSynthesisUtterance(clean);
        utterance.lang = /[ऀ-ॿ]/.test(clean) ? "hi-IN" : lang === "hi" ? "hi-IN" : "en-IN";
        utterance.rate = 0.95;
        utterance.pitch = 1.0;
        utterance.onstart = () => {
          onStart?.();
        };
        utterance.onend = () => {
          setSpeaking(false);
          speakingRef.current = false;
          triggerAutoListen();
        };
        utterance.onerror = () => {
          onStart?.();
          setSpeaking(false);
          speakingRef.current = false;
          triggerAutoListen();
        };
        window.speechSynthesis.speak(utterance);
        return;
      } catch {
        onStart?.();
        setSpeaking(false);
        speakingRef.current = false;
        triggerAutoListen();
      }
    } else {
      onStart?.();
      setSpeaking(false);
      speakingRef.current = false;
      triggerAutoListen();
    }
  };

  const toggleVoice = () => {
    const next = !voiceOn;
    setVoiceOn(next);
    try {
      window.localStorage.setItem("moksha_voice_on", next ? "1" : "0");
    } catch {}
    if (!next) {
      stopSpeaking();
      setVoiceMode(false);
      voiceModeRef.current = false;
    } else {
      const lastBot = [...messages].reverse().find((m) => m.role === "assistant" && m.content)?.content;
      const initialLine =
        lang === "hi"
          ? "नमो गंगे नमस्कार! 🙏 मैं आरोही हूँ, मोक्ष सेवा की ओर से आपका स्वागत करती हूँ। बताइए, मैं आपकी क्या सहायता कर सकती हूँ?"
          : "Namo Gange Namaskar 🙏 I am Aarohi from Moksha Sewa. How may I assist you today?";
      void speak(lastBot || initialLine);
    }
  };

  const handleSpokenOrTypedMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    if (askingName) {
      const parsed = parseName(trimmed);
      const isPlainName = parsed && !nameProblem(trimmed, parsed) && trimmed.split(/\s+/).length <= 3;
      if (isPlainName) {
        startWithName(parsed, true);
        return;
      }
      dismissNameStep("");
      sendMessage(trimmed);
      return;
    }

    sendMessage(trimmed);
  };

  const startVoiceInput = async () => {
    if (callOnHoldRef.current || callMutedRef.current || teamLive) return;
    pauseAllSiteMedia();
    stopSpeaking();
    recognizedRef.current = "";

    const SpeechRec =
      typeof window !== "undefined" &&
      ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition);

    if (SpeechRec) {
      try {
        const rec = new SpeechRec();
        recognitionRef.current = rec;
        rec.lang = lang === "hi" ? "hi-IN" : "en-IN";
        rec.continuous = false;
        rec.interimResults = true;
        rec.maxAlternatives = 1;

        rec.onstart = () => {
          setListening(true);
          if (typeof window !== "undefined") {
            window.dispatchEvent(new CustomEvent("moksha:mic", { detail: { listening: true } }));
          }
        };

        rec.onresult = (e: any) => {
          let interim = "";
          let final = "";
          for (let i = 0; i < e.results.length; i++) {
            if (e.results[i].isFinal) final += e.results[i][0].transcript;
            else interim += e.results[i][0].transcript;
          }
          const spoken = (final || interim).trim();
          if (spoken) {
            setInput(spoken);
            recognizedRef.current = spoken;
          }
        };

        rec.onspeechend = () => {
          try {
            rec.stop();
          } catch {}
        };

        rec.onerror = (e: any) => {
          setListening(false);
          if (typeof window !== "undefined") {
            window.dispatchEvent(new CustomEvent("moksha:mic", { detail: { listening: false } }));
          }
          if (e?.error === "not-allowed" || e?.error === "service-not-allowed") {
            const permissionNotice =
              lang === "hi"
                ? "माफ़ कीजिए, माइक्रोफ़ोन की अनुमति नहीं है। कृपया ब्राउज़र एड्रेस बार में 🔒 या माइक्रोफ़ोन आइकन से Allow / चालू करें।"
                : "Microphone permission is blocked. Please tap the 🔒 or mic icon in your address bar to Allow microphone access.";
            setMessages((prev) => [...prev, { role: "assistant", content: permissionNotice }]);
            endVoiceCall();
          }
        };

        rec.onend = () => {
          setListening(false);
          if (typeof window !== "undefined") {
            window.dispatchEvent(new CustomEvent("moksha:mic", { detail: { listening: false } }));
          }
          const finalSaid = recognizedRef.current.trim();
          if (finalSaid) {
            setInput("");
            silenceRetriesRef.current = 0;
            if (!voiceOn) setVoiceOn(true);
            handleSpokenOrTypedMessage(finalSaid);
          } else if (voiceModeRef.current && !speakingRef.current && !loadingRef.current && !endedRef.current && !callOnHoldRef.current && !teamLive) {
            silenceRetriesRef.current++;
            if (silenceRetriesRef.current === 8) {
              const checkLine =
                lang === "hi"
                  ? "जी, क्या आप लाइन पर हैं? आप बोलिए, मैं सुन रहा हूँ।"
                  : "Are you still there? Please go ahead, I'm listening.";
              void speak(checkLine);
            } else if (silenceRetriesRef.current >= 20) {
              const idleLine =
                lang === "hi"
                  ? "काफ़ी देर से कोई आवाज़ नहीं आई, इसलिए कॉल बंद कर दी। बात करनी हो तो माइक दबाइए।"
                  : "I ended the call because it was quiet for a while. Tap the mic to talk again.";
              void speak(idleLine);
              endVoiceCall();
            } else {
              triggerAutoListen();
            }
          }
        };

        rec.start();
        return;
      } catch (err: any) {
        console.warn("SpeechRecognition fallback to MediaRecorder:", err?.message);
      }
    }

    // Fallback: MediaRecorder + Whisper backend transcription
    if (typeof navigator !== "undefined" && navigator.mediaDevices?.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true } });
        const mimeType =
          ["audio/webm;codecs=opus", "audio/webm", "audio/mp4", "audio/ogg"].find(
            (m) => typeof MediaRecorder !== "undefined" && MediaRecorder.isTypeSupported?.(m)
          ) || "";

        const recorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);
        mediaRecorderRef.current = recorder;
        audioChunksRef.current = [];

        recorder.ondataavailable = (e) => {
          if (e.data.size > 0) audioChunksRef.current.push(e.data);
        };

        recorder.onstop = async () => {
          stream.getTracks().forEach((track) => track.stop());
          clearTimeout(recordTimerRef.current);
          setListening(false);
          if (typeof window !== "undefined") {
            window.dispatchEvent(new CustomEvent("moksha:mic", { detail: { listening: false } }));
          }
          setTranscribing(true);

          const blob = new Blob(audioChunksRef.current, { type: recorder.mimeType || "audio/webm" });
          if (blob.size < 1200) {
            setTranscribing(false);
            if (voiceModeRef.current && !speakingRef.current && !loadingRef.current && !endedRef.current && !callOnHoldRef.current && !teamLive) {
              triggerAutoListen();
            }
            return;
          }

          try {
            const formData = new FormData();
            formData.append("audio", blob, "recording.webm");
            const res = await fetch(`${CHAT_URL}/transcribe`, { method: "POST", body: formData });
            const data = await res.json().catch(() => null);
            setTranscribing(false);

            const text = String(data?.data?.text || "").trim();
            if (text) {
              silenceRetriesRef.current = 0;
              if (!voiceOn) setVoiceOn(true);
              handleSpokenOrTypedMessage(text);
            } else if (voiceModeRef.current && !speakingRef.current && !loadingRef.current && !endedRef.current && !teamLive) {
              triggerAutoListen();
            }
          } catch {
            setTranscribing(false);
            if (voiceModeRef.current && !teamLive) triggerAutoListen();
          }
        };

        recorder.start();
        setListening(true);
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("moksha:mic", { detail: { listening: true } }));
        }
        recordTimerRef.current = setTimeout(() => {
          if (recorder.state === "recording") recorder.stop();
        }, 12000);
      } catch {
        setListening(false);
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("moksha:mic", { detail: { listening: false } }));
        }
        endVoiceCall();
      }
    }
  };

  const endVoiceCall = () => {
    setVoiceMode(false);
    voiceModeRef.current = false;
    setListening(false);
    setTranscribing(false);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("moksha:voice", { detail: { speaking: false } }));
      window.dispatchEvent(new CustomEvent("moksha:mic", { detail: { listening: false } }));
    }
    setCallOnHold(false);
    callOnHoldRef.current = false;
    clearTimeout(autoListenTimerRef.current);
    clearTimeout(recordTimerRef.current);
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      try {
        mediaRecorderRef.current.stop();
      } catch {}
      mediaRecorderRef.current = null;
    }
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {}
      recognitionRef.current = null;
    }
    stopSpeaking();
  };

  const toggleCallMute = () => {
    const next = !callMuted;
    setCallMuted(next);
    callMutedRef.current = next;
    if (next) {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch {}
      }
      setListening(false);
    } else {
      triggerAutoListen();
    }
  };

  const toggleCallHold = () => {
    const next = !callOnHold;
    setCallOnHold(next);
    callOnHoldRef.current = next;
    if (next) {
      stopSpeaking();
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch {}
      }
      setListening(false);
    } else {
      const resumeLine =
        lang === "hi"
          ? "कॉल जारी है। बताइए, मैं आपकी किस प्रकार सहायता करूँ?"
          : "Resuming call. How may I assist you?";
      void speak(resumeLine);
    }
  };

  const toggleMic = () => {
    if (typeof window === "undefined" || isBlocked) return;
    pauseAllSiteMedia();

    // 1. Barge-in: if Moksha Mitra is speaking aloud and user taps mic, interrupt immediately
    if (speaking) {
      stopSpeaking();
      setVoiceMode(true);
      voiceModeRef.current = true;
      silenceRetriesRef.current = 0;
      void startVoiceInput();
      return;
    }

    // 2. If already in call, hang up
    if (voiceMode || listening) {
      endVoiceCall();
      return;
    }

    // 3. Initiate voice conversation
    setVoiceMode(true);
    voiceModeRef.current = true;
    if (!voiceOn) setVoiceOn(true);
    silenceRetriesRef.current = 0;

    if (askingName) {
      dismissNameStep("");
    }

    const isHindi = lang === "hi";
    const displayName = visitorName && visitorName !== "Mitr" ? `${visitorName} ${isHindi ? "जी" : "ji"}` : "";
    const welcomeLine = isHindi
      ? displayName
        ? `नमो गंगे नमस्कार ${displayName}! बताइए, आज मैं आपकी क्या सहायता कर सकती हूँ?`
        : `नमो गंगे नमस्कार! मैं आरोही हूँ, मोक्ष सेवा से। बताइए, मैं आपकी क्या सहायता कर सकती हूँ?`
      : displayName
      ? `Namo Gange Namaskar ${displayName}! How may I help you today?`
      : `Namo Gange Namaskar! I am Aarohi from Moksha Sewa. How may I assist you today?`;

    // Speak welcome out loud. Bubble appears as soon as audio starts playing!
    setLoading(true);
    void speak(welcomeLine, () => {
      setLoading(false);
      setMessages((prev) => {
        const hasGreeting = prev.some(
          (m) =>
            m.role === "assistant" &&
            (m.content.includes("नमो गंगे") || m.content.includes("Namo Gange") || m.content.includes("Aarohi"))
        );
        if (!hasGreeting) {
          return [...prev, { role: "assistant", content: welcomeLine, menu: true }];
        }
        return prev;
      });
    });
  };

  // Live Chat Monitoring Polling (`GET /chat/updates`)
  const checkTeam = async () => {
    if (teamCheckingRef.current || document.hidden || !sessionId) return;
    teamCheckingRef.current = true;
    try {
      const res = await fetch(`${CHAT_URL}/updates?session=${encodeURIComponent(sessionId)}&since=${teamSinceRef.current}`, { cache: "no-store" });
      const json = res.ok ? await res.json().catch(() => null) : null;
      const data = json?.data;
      if (!data) return;

      if (data.gone) {
        clearChatSession();
        setSessionId(newSessionId());
        setMessages([]);
        return;
      }

      if (data.blocked === false && isBlocked) {
        storeBlock(0, 0);
        setBlockedTill(0);
      }

      if (data.agent !== teamLive) {
        setTeamLive(Boolean(data.agent));
        if (data.agent) {
          endVoiceCall();
        }
      }

      if (data.messages?.length) {
        teamSinceRef.current = Math.max(teamSinceRef.current, data.serverTime - 15000);
        const newAgentMsgs: Message[] = data.messages.map((m: any) => ({
          role: "assistant",
          content: m.text,
          by: m.by || (lang === "hi" ? "मोक्ष टीम" : "Moksha Team"),
          divider: m.event ? (m.event === "joined" ? "Moksha Team joined the chat" : "Moksha Team left the chat") : undefined,
        }));
        setMessages((prev) => [...prev, ...newAgentMsgs]);
        chatSounds.receive();
      }
    } catch {
    } finally {
      teamCheckingRef.current = false;
    }
  };

  useEffect(() => {
    if (!open) return;
    const interval = setInterval(checkTeam, 4000);
    return () => clearInterval(interval);
  }, [open, sessionId, teamLive, isBlocked]);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const soundReady = useRef(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setShown(open));
    return () => cancelAnimationFrame(id);
  }, [open]);

  useEffect(() => {
    if (soundReady.current) (open ? chatSounds.open : chatSounds.close)();
    soundReady.current = true;
    if (!open) {
      stopSpeaking();
      endVoiceCall();
    } else {
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  const setLastReply = (fn: (current: string) => string) => {
    setMessages((prev) => {
      const copy = [...prev];
      const i = copy.length - 1;
      if (i >= 0 && copy[i].role === "assistant") {
        copy[i] = { ...copy[i], content: fn(copy[i].content) };
      }
      return copy;
    });
  };

  const postLead = async (values: LeadValues, silent = false) => {
    try {
      const res = await fetch(`${CHAT_URL}/lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          name: values.name,
          phone: values.phone,
          preferredTime: values.time || "",
          language: lang === "hi" ? "Hindi" : "English",
        }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        return body?.message || (lang === "hi" ? "संपर्क विवरण भेजने में समस्या आई।" : "Failed to send details.");
      }
      setPhone(values.phone);
      if (!silent) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              lang === "hi"
                ? `धन्यवाद ${values.name} जी! आपका नंबर दर्ज कर लिया गया है। हमारी टीम जल्द ही आपसे संपर्क करेगी।`
                : `Thank you ${values.name} ji! Your details have been received. Our team will contact you shortly.`,
          },
        ]);
      }
      return null;
    } catch {
      return lang === "hi" ? "संपर्क विवरण भेजने में समस्या आई।" : "Failed to send details.";
    }
  };

  const sendMessage = async (text: string, topic = "", name = visitorName ?? "", sid = sessionId) => {
    const message = text.trim().slice(0, 1000);
    if (!message || loading || isBlocked) return;
    const activeName = name || visitorName || "Website Visitor";

    // Dynamic language auto-detection
    const detected = detectLang(message);
    if (detected && detected !== lang) {
      setLangState(detected);
      saveLang(detected);
    }
    const currentLang = detected || lang;

    // 1. Abuse & Progressive Strikes Guard
    const { strikes } = readBlock();
    if (isAbusive(message)) {
      const newStrikes = strikes + 1;
      const isNowBlocked = newStrikes >= 4;
      const newUntil = isNowBlocked ? Date.now() + 24 * 60 * 60 * 1000 : 0;
      storeBlock(newStrikes, newUntil);
      if (isNowBlocked) setBlockedTill(newUntil);

      fetch(`${CHAT_URL}/abuse`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId: sid, message, strikes: newStrikes, blocked: isNowBlocked }),
      }).catch(() => {});

      const warningReply = isNowBlocked
        ? abuseBlocked(false, visitorName || "", currentLang)
        : abuseWarning(newStrikes, visitorName || "", currentLang);

      setInput("");
      setMessages((prev) => [
        ...prev,
        { role: "user", content: message },
        { role: "assistant", content: warningReply },
      ]);

      if (voiceOn || voiceModeRef.current) void speak(warningReply);
      if (isNowBlocked) endVoiceCall();
      return;
    }

    // 2. OTP Verification Step
    if (otpStep.status === "awaiting_otp") {
      const lower = message.toLowerCase().trim();
      const isSkip = /^(skip|baad|later|nahi|nahin|nhi|छोड़ें|छोड़ो|बाद में)/i.test(lower);
      const isResend = /^(resend|phir se|dobara|फिर से|दोबारा)/i.test(lower);
      const enteredOtp = otpIn(message);

      if (isSkip) {
        setOtpStep({ phone: "", status: "idle", resendCount: 0 });
        const skipReply =
          currentLang === "hi"
            ? "कोई बात नहीं! हमारा प्रतिनिधि शीघ्र ही आपके नंबर पर संपर्क करेगा। बताइए, इसके अलावा मैं आपकी क्या सहायता करूँ?"
            : "No problem! Our representative will contact you shortly. How else may I assist you?";
        setInput("");
        setMessages((prev) => [
          ...prev,
          { role: "user", content: message },
          { role: "assistant", content: skipReply },
        ]);
        if (voiceOn || voiceModeRef.current) void speak(skipReply);
        return;
      }

      if (isResend) {
        fetch(`${CHAT_URL}/otp/send`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone: otpStep.phone, name: visitorName }),
        }).catch(() => {});

        const resendReply =
          currentLang === "hi"
            ? `आपके नंबर ${maskPhone(otpStep.phone)} पर नया OTP भेज दिया गया है। कृपया 6-अंकों का कोड यहाँ लिखें:`
            : `A new OTP has been sent to ${maskPhone(otpStep.phone)}. Please enter the 6-digit code here:`;
        setInput("");
        setMessages((prev) => [
          ...prev,
          { role: "user", content: message },
          { role: "assistant", content: resendReply },
        ]);
        if (voiceOn || voiceModeRef.current) void speak(resendReply);
        return;
      }

      if (enteredOtp) {
        setInput("");
        setLoading(true);
        try {
          const verifyRes = await fetch(`${CHAT_URL}/otp/verify`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ phone: otpStep.phone, otp: enteredOtp }),
          });
          const verifyData = await verifyRes.json().catch(() => null);

          if (verifyRes.ok && verifyData?.success) {
            setOtpStep({ phone: otpStep.phone, status: "verified", resendCount: 0 });
            setPhone(otpStep.phone);
            postLead({ name: visitorName || "Mitr", phone: otpStep.phone }, true);

            const successReply =
              currentLang === "hi"
                ? `धन्यवाद! आपका नंबर ${maskPhone(otpStep.phone)} सफलतापूर्वक सत्यापित हो गया है। 🙏 हमारी टीम शीघ्र ही आपसे संपर्क करेगी। क्या आप मोक्ष सेवा की किसी अन्य सेवा के बारे में जानना चाहते हैं?`
                : `Thank you! Your mobile number ${maskPhone(otpStep.phone)} has been successfully verified. 🙏 Our team will contact you shortly. Is there anything else about Moksha Sewa I can help you with?`;

            setMessages((prev) => [
              ...prev,
              { role: "user", content: message },
              { role: "assistant", content: successReply },
            ]);
            if (voiceOn || voiceModeRef.current) void speak(successReply);
            return;
          } else {
            const failReply =
              currentLang === "hi"
                ? "माफ़ कीजिए, यह OTP सही नहीं है। कृपया सही 6-अंकों का कोड दर्ज करें (या 'skip' लिखें):"
                : "Sorry, that OTP is incorrect. Please enter the valid 6-digit code (or type 'skip'):";
            setMessages((prev) => [
              ...prev,
              { role: "user", content: message },
              { role: "assistant", content: failReply },
            ]);
            if (voiceOn || voiceModeRef.current) void speak(failReply);
            return;
          }
        } catch {
          const errReply =
            currentLang === "hi"
              ? "सत्यापन में समस्या आई। कृपया पुनः प्रयास करें या 'skip' लिखें।"
              : "Verification issue. Please try again or type 'skip'.";
          setMessages((prev) => [
            ...prev,
            { role: "user", content: message },
            { role: "assistant", content: errReply },
          ]);
          if (voiceOn || voiceModeRef.current) void speak(errReply);
          return;
        } finally {
          setLoading(false);
        }
      }
    }

    // 3. Phone Number Detection & Emergency Bypass
    const extractedPhone = cleanMobile(message);
    if (extractedPhone && extractedPhone.length === 10 && /^[6-9]/.test(extractedPhone)) {
      const urgent = isUrgent(message);
      setInput("");

      if (urgent) {
        // Urgent emergency case (accident, death, ambulance, hearse van):
        // Bypass OTP! Save lead immediately and alert admins!
        postLead({ name: visitorName || "Urgent Mitr", phone: extractedPhone }, true);
        const urgentReply =
          currentLang === "hi"
            ? `यह एक अत्यंत आवश्यक स्थिति है। हमारी टीम तुरंत आपके नंबर ${maskPhone(extractedPhone)} पर संपर्क कर रही है। आप तत्काल हमारे 24×7 आपातकालीन हेल्पलाइन नंबर 92201 47229 पर भी सीधे कॉल कर सकते हैं।`
            : `This is an urgent situation. Our team is contacting your number ${maskPhone(extractedPhone)} immediately. You can also directly call our 24×7 emergency helpline at 92201 47229 right now.`;

        setMessages((prev) => [
          ...prev,
          { role: "user", content: message },
          { role: "assistant", content: urgentReply },
        ]);
        if (voiceOn || voiceModeRef.current) void speak(urgentReply);
        return;
      } else {
        // Non-urgent: send OTP
        setOtpStep({ phone: extractedPhone, status: "awaiting_otp", resendCount: 0 });
        fetch(`${CHAT_URL}/otp/send`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone: extractedPhone, name: visitorName }),
        }).catch(() => {});

        const otpPrompt =
          currentLang === "hi"
            ? `धन्यवाद! आपके नंबर ${maskPhone(extractedPhone)} पर 6-अंकों का OTP भेजा गया है। कृपया कोड यहाँ लिखें (या 'skip' लिखें):`
            : `Thank you! A 6-digit OTP has been sent to ${maskPhone(extractedPhone)}. Please enter the code here (or type 'skip'):`;

        setMessages((prev) => [
          ...prev,
          { role: "user", content: message },
          { role: "assistant", content: otpPrompt },
        ]);
        if (voiceOn || voiceModeRef.current) void speak(otpPrompt);
        return;
      }
    }

    // 4. Invalid Phone or Email Format Checks
    if (!topic) {
      const phoneProb = typedPhoneProblem(message, currentLang);
      const emailProb = typedEmailProblem(message, currentLang);
      if (phoneProb || emailProb) {
        const probReply = phoneProb || emailProb;
        setInput("");
        setMessages((prev) => [
          ...prev,
          { role: "user", content: message },
          { role: "assistant", content: probReply },
        ]);
        if (voiceOn || voiceModeRef.current) void speak(probReply);
        return;
      }
    }

    // 4b. Strict Zero-Pricing Guard: Under no circumstances quote pricing/fees/charges
    if (isPricingQuery(message)) {
      const priceReply = PRICING_RESPONSE[currentLang];
      saveChatSession(sid, activeName);
      chatSounds.send();
      setInput("");
      setMessages((prev) => [
        ...prev,
        { role: "user", content: topic || message },
        { role: "assistant", content: priceReply },
      ]);
      fetch(CHAT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId: sid, message, pageUrl: window.location.href, targetLang: currentLang }),
      }).catch(() => {});
      if (voiceOn || voiceModeRef.current) void speak(priceReply);
      return;
    }

    // 5. Send message to backend AI stream
    saveChatSession(sid, activeName);
    chatSounds.send();

    setInput("");
    setLoading(true);

    // If voiceMode or voiceOn is active: keep user bubble, but delay assistant bubble until audio starts playing
    // so text doesn't appear long before speech starts!
    const isSpeakingResponse = voiceModeRef.current || voiceOn;
    if (!isSpeakingResponse) {
      setMessages((prev) => [...prev, { role: "user", content: topic || message }, { role: "assistant", content: "" }]);
    } else {
      setMessages((prev) => [...prev, { role: "user", content: topic || message }]);
    }

    try {
      const res = await fetch(CHAT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId: sid, message, pageUrl: window.location.href, targetLang: currentLang }),
      });

      if (!res.ok || !res.body) {
        const json = await res.json().catch(() => null);
        const fallbackText = (res.status === 429 && json?.message) || t.fallback;
        if (!isSpeakingResponse) {
          setLastReply(() => fallbackText);
        } else {
          setMessages((prev) => [...prev, { role: "assistant", content: fallbackText }]);
        }
        if (isSpeakingResponse) void speak(fallbackText);
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let gotText = false;
      let accumulatedReply = "";

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        const events = buffer.split("\n\n");
        buffer = events.pop() || "";
        for (const evt of events) {
          const line = evt.split("\n").find((l) => l.startsWith("data:"));
          if (!line) continue;
          let data: { delta?: string; done?: boolean; error?: string };
          try {
            data = JSON.parse(line.slice(5).trim());
          } catch {
            continue;
          }
          if (data.delta) {
            if (!gotText) chatSounds.receive();
            gotText = true;
            accumulatedReply += data.delta;
            if (!isSpeakingResponse) {
              setLastReply((current) => current + data.delta);
            }
          } else if (data.error) {
            if (!isSpeakingResponse) {
              setLastReply((current) => (current ? `${current}\n\n${data.error}` : data.error!));
            }
            gotText = true;
          }
        }
      }

      if (!gotText) {
        const fallback = t.fallback;
        if (!isSpeakingResponse) setLastReply(() => fallback);
        else setMessages((prev) => [...prev, { role: "assistant", content: fallback }]);
        if (isSpeakingResponse) void speak(fallback);
      } else if (accumulatedReply.trim()) {
        if (isSpeakingResponse) {
          // Voice mode or voice replies on: speak reply, and reveal the text bubble synchronized with audio playback!
          void speak(accumulatedReply, () => {
            setLoading(false);
            setMessages((prev) => [...prev, { role: "assistant", content: accumulatedReply }]);
          });
        }
      }
    } catch {
      const fallback = t.fallback;
      if (!isSpeakingResponse) setLastReply((current) => current || fallback);
      else setMessages((prev) => [...prev, { role: "assistant", content: fallback }]);
      if (isSpeakingResponse) void speak(fallback);
      else if (voiceModeRef.current) triggerAutoListen();
    } finally {
      if (!isSpeakingResponse) setLoading(false);
    }
  };

  const startWithName = async (name: string, typed: boolean) => {
    setLoading(true);
    setNameError("");
    if (typed) {
      setInput("");
      setMessages((prev) => [...prev, { role: "user", content: name }]);
    }
    let next: { sid: string; question: { message: string; topic: string } | null } | null = null;
    let welcomeLine = "";
    try {
      const res = await fetch(`${CHAT_URL}/start`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, name, targetLang: lang }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.message || (lang === "hi" ? "चैट शुरू करने में समस्या आई।" : "Failed to start chat."));
      }
      const body = await res.json();
      const sid = body?.data?.sessionId || sessionId;
      const earlier: Array<{ role: "user" | "assistant"; content: string; createdAt?: string }> = body?.data?.messages || [];
      setSessionId(sid);
      setVisitorName(name);
      saveChatSession(sid, name);
      setNameStep(false);

      welcomeLine =
        lang === "hi"
          ? `${name} जी, बताइए, किस तरह मदद कर सकता हूँ?`
          : `Namo Gange Namaskar, ${name} ji. How may I assist you today?`;

      setMessages((prev) => {
        const nameBubble: Message[] = typed ? [{ role: "user", content: name }] : [];
        const welcome: Message = { role: "assistant", content: welcomeLine, menu: true };
        if (!earlier.length) return [...nameBubble, welcome];
        return [
          { role: "assistant", content: "", divider: t.earlierChat(shortDate(earlier[0].createdAt, lang)) },
          ...earlier.map((m) => ({ role: m.role, content: m.content })),
          { role: "assistant", content: "", divider: t.today },
          ...nameBubble,
          welcome,
        ];
      });
      next = { sid, question: pending };
      setPending(null);
    } catch (err) {
      if (typed) {
        setMessages((prev) => prev.slice(0, -1));
        setInput(name);
        setNameError((err as Error).message || t.genericError);
      }
    } finally {
      setLoading(false);
    }

    if (next?.question) {
      sendMessage(next.question.message, next.question.topic, name, next.sid);
    } else if (welcomeLine && (voiceOn || voiceModeRef.current)) {
      void speak(welcomeLine);
    }
  };

  const submitName = () => {
    if (loading || isBlocked) return;
    setRestored(true);
    const name = parseName(input);
    const problem = nameProblem(input, name);
    if (problem) {
      setNameError(NAME_REPLY[lang][problem]);
      return;
    }
    startWithName(name, true);
  };

  useEffect(() => {
    if (!open || !visitorName || restored || messages.length) return;
    const id = window.setTimeout(() => {
      setRestored(true);
      startWithName(visitorName, false);
    }, 0);
    return () => window.clearTimeout(id);
  }, [open, visitorName, restored]);

  const runStep = (id: string) => {
    if (askingName) {
      dismissNameStep("");
    }
    const step = STEPS[id];
    if (!step || loading || isBlocked) return;
    const say = step.label[lang];
    const content = step.content[lang];

    setMessages((prev) => [
      ...prev,
      { role: "user", content: say },
      { role: "assistant", content, step: id, menu: false },
    ]);
    if (voiceOn || voiceModeRef.current) void speak(content);
  };

  const endChat = () => {
    stopSpeaking();
    endVoiceCall();
    clearChatSession();
    setSessionId(newSessionId());
    setVisitorName(null);
    setPhone("");
    setEnded(true);
  };

  const restartChat = () => {
    setEnded(false);
    setMessages([]);
    setNameStep(true);
    setNameError("");
    setSessionId(newSessionId());
    setVisitorName(null);
    setPhone("");
  };

  const last = messages[messages.length - 1];
  const canShowMainMenu = !loading && last?.role === "assistant" && !last.menu && !!last.content;
  const inChat = messages.length > 0 || !!visitorName;

  const topicCards = (
    <>
      <div className="relative grid grid-cols-2 gap-2 pt-0.5">
        {TOPICS.map(({ id, icon: Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => runStep(id)}
            disabled={loading || isBlocked}
            className="group flex min-h-[56px] items-center gap-2.5 rounded-xl border border-[#C9A574]/40 bg-white px-2.5 py-2 text-left shadow-[0_1px_2px_rgba(44,24,16,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#8B6A3E]/60 hover:shadow-[0_10px_22px_-12px_rgba(44,24,16,0.45)] disabled:pointer-events-none"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#fbf5ea] text-[#8B6A3E] transition-colors group-hover:bg-[#8B6A3E] group-hover:text-white">
              <Icon className="h-[17px] w-[17px]" strokeWidth={1.9} aria-hidden="true" />
            </span>
            <span className="text-[12px] font-medium leading-tight text-[#2C1810]">{STEPS[id].label[lang]}</span>
          </button>
        ))}
      </div>

      <div className="relative flex items-center gap-3 pt-0.5">
        <span className="h-px flex-1 bg-[#d9a441]/30" aria-hidden="true" />
        <button
          type="button"
          onClick={() => runStep(TEAM.id)}
          disabled={loading || isBlocked}
          className="group inline-flex items-center gap-1.5 rounded-full border border-[#d9a441]/70 bg-[#fffaf1] px-3.5 py-1.5 text-[12.5px] font-semibold text-[#73532F] shadow-[0_2px_6px_-3px_rgba(110,40,20,0.25)] transition hover:border-[#d9a441] hover:bg-[#fbecd2]"
        >
          <TEAM.icon className="h-4 w-4" strokeWidth={1.9} aria-hidden="true" />
          {STEPS[TEAM.id].label[lang]}
          <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </button>
        <span className="h-px flex-1 bg-[#d9a441]/30" aria-hidden="true" />
      </div>
    </>
  );

  return (
    <>
      <style>{`
        @keyframes mvChatIn {
          0% { opacity: 0; transform: translate(18px, 36px) scale(.88); filter: blur(6px); }
          65% { opacity: 1; filter: blur(0); }
          100% { opacity: 1; transform: none; }
        }
        @keyframes mvHeadIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: none; } }
        @keyframes mvBodyIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        @keyframes mvMsgIn {
          0% { opacity: 0; transform: translateY(8px) scale(.95); }
          100% { opacity: 1; transform: none; }
        }
        @keyframes mvDot { 0%, 80%, 100% { transform: translateY(0); opacity: .45; } 40% { transform: translateY(-4px); opacity: 1; } }
        @keyframes mvRing { 0% { box-shadow: 0 0 0 0 rgba(217,164,65,.8); } 100% { box-shadow: 0 0 0 10px rgba(217,164,65,0); } }
        @keyframes mvRec { 0% { box-shadow: 0 0 0 0 rgba(220,38,38,.65); } 100% { box-shadow: 0 0 0 12px rgba(220,38,38,0); } }
        .mv-chat-in { animation: mvChatIn .35s cubic-bezier(.2,.9,.25,1) both; }
        .mv-head-in { animation: mvHeadIn .35s ease-out both; }
        .mv-body-in { animation: mvBodyIn .35s ease-out both; }
        .mv-msg-in { animation: mvMsgIn .3s cubic-bezier(.2,.9,.3,1.1) both; }
        .mv-dot { animation: mvDot 1.1s infinite ease-in-out; }
        .mv-speaking { animation: mvRing 1.2s infinite; }
        .mv-recording { animation: mvRec 1.1s infinite; }
        @media (prefers-reduced-motion: reduce) {
          .mv-chat-in, .mv-head-in, .mv-body-in, .mv-msg-in, .mv-speaking, .mv-recording { animation: none !important; }
        }
      `}</style>

      <div
        role="dialog"
        aria-modal="false"
        aria-label={`${botName} chat`}
        aria-hidden={!open}
        inert={!open}
        lang={lang}
        className={`fixed bottom-4 right-4 z-[110] flex h-[590px] max-h-[calc(100svh-32px)] w-[385px] origin-bottom-right flex-col overflow-hidden rounded-[24px] bg-[#fdf7ec] text-[13.5px] leading-[1.55] shadow-[0_24px_60px_-12px_rgba(90,14,25,0.45),0_0_0_1px_rgba(143,36,51,0.14)] transition-[opacity,transform,visibility] duration-300 ease-out sm:right-6 max-[480px]:inset-x-0 max-[480px]:bottom-0 max-[480px]:h-[88svh] max-[480px]:max-h-none max-[480px]:w-full max-[480px]:rounded-b-none motion-reduce:transition-none ${
          shown ? "visible translate-y-0 scale-100 opacity-100" : "invisible pointer-events-none translate-y-6 scale-95 opacity-0"
        }`}
      >
        {/* Header: sacred deep maroon gradient with gold lotus, avatar in gold ring with pulse, and gold wave divider */}
        <header className="mv-head-in relative shrink-0 bg-[linear-gradient(135deg,#560d18_0%,#76192a_55%,#8f2433_100%)] px-3.5 pt-4 pb-6 text-white">
          <LotusMark className="pointer-events-none absolute top-1 left-1/2 h-[14px] w-[24px] -translate-x-1/2 text-[#e8b85a]" />

          <div className="relative flex items-center gap-2.5">
            <div className="relative shrink-0">
              <span
                className={`relative flex h-[50px] w-[50px] items-center justify-center overflow-hidden rounded-full bg-[#fff3df] ring-[3px] ring-[#e8b85a] transition-shadow ${
                  speaking ? "mv-speaking" : ""
                }`}
              >
                <img
                  src={avatar || "/images/chatbot/aarohi-avatar.png"}
                  alt={botName}
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4" title={lang === "hi" ? "ऑनलाइन" : "Online"}>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34d399] opacity-60" />
                <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-white bg-[#22c55e]" />
              </span>
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-[18px] font-bold leading-tight">{teamLive ? (lang === "hi" ? "मोक्ष टीम" : "Moksha Team") : botName}</p>
              <p className={`truncate text-[11px] font-semibold ${teamLive || speaking || listening || voiceMode || loading ? "text-[#fcd98a]" : "text-white/85"}`}>
                {teamLive ? (
                  <span className="flex items-center gap-1 font-semibold text-amber-300">
                    <UserCheck className="h-3 w-3" />
                    {lang === "hi" ? "हमारी टीम आपसे बात कर रही है" : "Our team is chatting with you"}
                  </span>
                ) : speaking ? (
                  <span className="flex items-center gap-1 font-semibold text-[#fcd98a]">
                    <span className="h-1.5 w-1.5 animate-ping rounded-full bg-[#fcd98a]" />
                    {lang === "hi" ? "बोल रहे हैं…" : "speaking…"}
                  </span>
                ) : listening ? (
                  <span className="flex items-center gap-1 font-semibold text-emerald-300">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    {lang === "hi" ? "सुन रहा हूँ, बोलिए…" : "listening…"}
                  </span>
                ) : voiceMode ? (
                  <span className="flex items-center gap-1 font-semibold text-emerald-300">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    {lang === "hi" ? "कॉल चालू · सुन रहा हूँ" : "On call · listening"}
                  </span>
                ) : loading ? (
                  t.typing(botName)
                ) : (
                  config?.subtitle?.trim() || t.subtitle
                )}
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-1">
              <button
                type="button"
                onClick={toggleVoice}
                title={voiceOn ? (lang === "hi" ? "बोलकर जवाब चालू" : "Voice replies on") : (lang === "hi" ? "बोलकर जवाब बंद" : "Voice replies off")}
                aria-label={voiceOn ? "Voice replies on" : "Voice replies off"}
                aria-pressed={voiceOn}
                className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-white ring-1 ring-white/10 transition hover:bg-white/25 ${
                  voiceOn ? "bg-white/25 ring-white/30 text-white" : "bg-white/15"
                }`}
              >
                {voiceOn ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
              </button>

              <div className="flex shrink-0 items-center rounded-full bg-white/15 p-0.5 text-[10.5px] ring-1 ring-white/10">
                {(["en", "hi"] as const).map((l) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => setLang(l)}
                    aria-pressed={lang === l}
                    className={`rounded-full px-2 py-0.5 font-bold transition ${
                      lang === l ? "bg-white text-[#73532F] shadow-sm" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {l === "en" ? "EN" : "हिं"}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label={t.minimize}
                title={t.minimize}
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/10 transition hover:bg-white/25"
              >
                <Minus className="h-4 w-4" strokeWidth={2.5} />
              </button>

              <button
                type="button"
                onClick={onClose}
                aria-label={t.close}
                title={t.close}
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/10 transition hover:bg-white/25"
              >
                <X className="h-4 w-4" strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* Curved organic wave divider matching Moksha Voyage */}
          <svg aria-hidden viewBox="0 0 360 20" preserveAspectRatio="none" className="absolute -bottom-px left-0 h-[20px] w-full">
            <path d="M0 20V12C80 24 190 -2 360 8V20Z" fill="#fdf7ec" />
            <path d="M0 12C80 24 190 -2 360 8" fill="none" stroke="#e1aa4b" strokeWidth="2.4" />
          </svg>
        </header>

        {/* 24-hr Countdown Banner for Blocked State */}
        {isBlocked && (
          <div className="bg-red-600 px-3 py-1.5 text-center text-[12px] font-bold text-white shadow-inner">
            ⚠️ {lang === "hi" ? "चैट 24 घंटे के लिए ब्लॉक है" : "Chat blocked for 24 hours"} · {countdown(blockedTill - clock)}
          </div>
        )}

        {ended ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fbecd2] text-[#8B6A3E] shadow-inner">
              <LogOut className="h-7 w-7" />
            </span>
            <div>
              <p className="text-[17px] font-bold text-[#2C1810]">{lang === "hi" ? "चैट समाप्त हो गई है" : "Chat has ended"}</p>
              <p className="mt-1 text-[13px] text-[#73532F]">{lang === "hi" ? "संपर्क करने के लिए धन्यवाद। नमो गंगे नमः।" : "Thank you for reaching out. Namo Gange Namah."}</p>
            </div>
            <button
              type="button"
              onClick={restartChat}
              className="mt-2 rounded-full bg-[linear-gradient(135deg,#8B6A3E,#73532F)] px-6 py-2.5 text-[13px] font-bold text-white shadow hover:brightness-110"
            >
              {lang === "hi" ? "नई चैट शुरू करें" : "Start New Chat"}
            </button>
          </div>
        ) : (
          <>
            {/* Messages over the sacred ghat artwork matching Moksha Voyage */}
            <div className="relative min-h-0 flex-1 bg-[linear-gradient(#fdf7ec,#f7ead3)] overflow-hidden">
              <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-12 -left-16 h-44 w-44 bg-contain bg-no-repeat opacity-35" style={{ backgroundImage: "url('/images/chatbot/mandala.svg')" }} />
                <div className="absolute top-0 right-0 h-[72px] w-[48%] bg-contain bg-right-top bg-no-repeat opacity-75" style={{ backgroundImage: "url('/images/chatbot/temple-top.svg')" }} />
                <span className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[150px] leading-none text-[#c99a4a] opacity-[0.07] select-none pointer-events-none">ॐ</span>
                <div className="absolute inset-x-0 bottom-0 h-[62%] bg-bottom bg-no-repeat [background-size:100%_auto]" style={{ backgroundImage: "url('/images/chatbot/bg.svg')" }} />
              </div>

              {/* Scrollable messages container */}
              <div ref={scrollRef} className="absolute inset-0 space-y-3.5 overflow-y-auto overscroll-contain px-4 pt-3.5 pb-2" data-lenis-prevent>
                <div className="my-1 text-center text-[11.5px] font-semibold tracking-[0.06em] text-[#8a4b16]/80" lang="sa">
                  ॐ शान्तिः शान्तिः शान्तिः
                </div>

                {/* Bot Welcome Bubble (if no messages yet) */}
                {!messages.length && (
                  <div className="mv-msg-in flex items-start gap-2.5">
                    <BotAvatar avatar={avatar} speaking={speaking} />
                    <div className="flex flex-col gap-2 max-w-[85%]">
                      <div className={BUBBLE}>
                        {lang === "hi"
                          ? "नमो गंगे नमस्कार! 🙏 मैं आरोही हूँ, मोक्ष सेवा की ओर से आपका स्वागत करती हूँ।"
                          : "Namo Gange Namaskar! 🙏 I am Aarohi, here to assist you on behalf of Moksha Sewa."}
                      </div>
                      {askingName && (
                        <div className={BUBBLE}>
                          {lang === "hi" ? "आपको किस नाम से बुलाऊँ?" : "What may I call you?"}
                        </div>
                      )}

                      {/* 3 Suggestion Chips under welcome matching Moksha Voyage */}
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {(lang === "hi"
                          ? [
                              { label: "तुरंत सहायता", query: "मुझे तुरंत सहायता चाहिए" },
                              { label: "सेवाओं की जानकारी", query: "मोक्ष सेवा की सेवाओं की जानकारी दीजिए" },
                              { label: "अंतिम संस्कार सेवा", query: "अंतिम संस्कार और शव वाहन सेवा के बारे में बताएं" },
                            ]
                          : [
                              { label: "Immediate Help", query: "I need immediate help" },
                              { label: "About Our Services", query: "Tell me about Moksha Sewa services" },
                              { label: "Antim Sanskar Sewa", query: "Tell me about funeral and hearse van service" },
                            ]
                        ).map((chip) => (
                          <button
                            key={chip.label}
                            type="button"
                            onClick={() => sendMessage(chip.query)}
                            disabled={loading || isBlocked}
                            className="cursor-pointer rounded-full border border-[#d9a441]/60 bg-[#fffaf1] px-3 py-1.5 text-left text-[12px] leading-tight font-semibold text-[#6b1420] shadow-[0_2px_6px_-3px_rgba(110,40,20,0.35)] transition hover:border-[#d9a441] hover:bg-[#fbecd2]"
                          >
                            {chip.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Render message bubbles */}
                {messages.map((m, idx) => {
                  if (m.divider) {
                    return (
                      <div key={idx} className="my-2 flex items-center gap-3 text-[11px] font-semibold text-[#8B6A3E]/70">
                        <span className="h-px flex-1 bg-[#8B6A3E]/20" />
                        <span>{m.divider}</span>
                        <span className="h-px flex-1 bg-[#8B6A3E]/20" />
                      </div>
                    );
                  }

                  const isUser = m.role === "user";
                  const isAgent = Boolean(m.by);
                  return (
                    <div key={idx} className={`mv-msg-in flex items-start gap-2.5 ${isUser ? "justify-end" : "justify-start"}`}>
                      {!isUser && <BotAvatar avatar={avatar} speaking={speaking && idx === messages.length - 1} />}
                      <div className={`flex flex-col gap-1.5 max-w-[85%]`}>
                        {isAgent && (
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#9b2a3a]">
                            {m.by}
                          </span>
                        )}
                        <div className={isUser ? USER_BUBBLE : isAgent ? AGENT_BUBBLE : BUBBLE}>
                          <ChatMessageText text={m.content} />
                        </div>
                        {m.menu && topicCards}
                      </div>
                    </div>
                  );
                })}

                {/* Typing / Waiting indicator */}
                {loading && (
                  <div className="flex items-start gap-2.5">
                    <BotAvatar avatar={avatar} speaking={speaking} />
                    <div className={`${BUBBLE} flex items-center gap-1.5 py-3`}>
                      <span className="mv-dot h-2 w-2 rounded-full bg-[#8B6A3E]" />
                      <span className="mv-dot h-2 w-2 rounded-full bg-[#8B6A3E]" style={{ animationDelay: "0.2s" }} />
                      <span className="mv-dot h-2 w-2 rounded-full bg-[#8B6A3E]" style={{ animationDelay: "0.4s" }} />
                    </div>
                  </div>
                )}

                {canShowMainMenu && topicCards}
              </div>
            </div>

            {/* Input area */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (isBlocked) return;
                if (askingName) submitName();
                else sendMessage(input);
              }}
              className="mv-body-in relative shrink-0 border-t border-[#ead6b4]/80 bg-[#fffaf1]/90 px-3 pt-2.5 pb-3"
            >
              {/* Active Voice Call Status Bar */}
              {voiceMode && (
                <div className="mb-2 flex items-center justify-between gap-2 rounded-xl bg-[linear-gradient(135deg,#560d18,#76192a)] px-3 py-1.5 text-white shadow">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    </span>
                    <span className="text-[12px] font-semibold text-[#fcd98a]">
                      {speaking
                        ? (lang === "hi" ? "आरोही बोल रही हैं…" : "Aarohi is speaking…")
                        : listening
                        ? (lang === "hi" ? "सुन रही हूँ, बोलिए..." : "Listening, speak now...")
                        : (lang === "hi" ? "कॉल चालू · बोलिए..." : "On call · speak...")}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={toggleCallMute}
                      title={callMuted ? "Unmute mic" : "Mute mic"}
                      className={`flex h-7 w-7 items-center justify-center rounded-full transition ${
                        callMuted ? "bg-white/30 text-white" : "bg-white/15 text-white hover:bg-white/25"
                      }`}
                    >
                      {callMuted ? <MicOff className="h-3.5 w-3.5" /> : <Mic className="h-3.5 w-3.5" />}
                    </button>
                    <button
                      type="button"
                      onClick={toggleCallHold}
                      title={callOnHold ? "Resume call" : "Hold call"}
                      className={`flex h-7 w-7 items-center justify-center rounded-full transition ${
                        callOnHold ? "bg-amber-500 text-white" : "bg-white/15 text-white hover:bg-white/25"
                      }`}
                    >
                      {callOnHold ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
                    </button>
                    <button
                      type="button"
                      onClick={endVoiceCall}
                      title={lang === "hi" ? "कॉल समाप्त करें" : "End call"}
                      className="flex h-7 items-center gap-1 rounded-full bg-red-600 px-2.5 text-[11px] font-bold text-white shadow hover:bg-red-700"
                    >
                      <PhoneOff className="h-3.5 w-3.5" />
                      {lang === "hi" ? "कॉल काटें" : "End call"}
                    </button>
                  </div>
                </div>
              )}

              <div
                className={`flex items-center gap-2 rounded-full border bg-white py-1.5 pr-1.5 pl-3 shadow-[0_10px_24px_-14px_rgba(110,40,20,0.55)] transition ${
                  isBlocked
                    ? "opacity-60 border-red-500"
                    : voiceMode || listening
                    ? "border-red-400 ring-2 ring-red-100"
                    : "border-[#ead6b4] focus-within:border-[#d9a441] focus-within:ring-2 focus-within:ring-[#d9a441]/20"
                }`}
              >
                <LotusMark className="h-[16px] w-[26px] shrink-0 text-[#8f2433]" />

                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    if (nameError) setNameError("");
                  }}
                  disabled={loading || isBlocked}
                  maxLength={1000}
                  placeholder={
                    isBlocked
                      ? (lang === "hi" ? "यह चैट ब्लॉक है" : "This chat is blocked")
                      : teamLive
                      ? (lang === "hi" ? "मोक्ष टीम को संदेश लिखें..." : "Message Moksha Team...")
                      : speaking
                      ? (lang === "hi" ? "आरोही बोल रही हैं…" : "Aarohi is speaking…")
                      : loading
                      ? t.typing(botName)
                      : transcribing
                      ? (lang === "hi" ? "आवाज़ समझ रही हूँ..." : "Understanding what you said...")
                      : listening || voiceMode
                      ? (lang === "hi" ? "सुन रही हूँ, बस बोलिए… या यहाँ लिखिए" : "I'm listening, just speak… or type here")
                      : askingName
                      ? (lang === "hi" ? "अपना नाम यहाँ लिखिए..." : "Type your name here...")
                      : (lang === "hi" ? "अपना संदेश या ज़रूरत यहाँ लिखें..." : "Type your message or need here...")
                  }
                  aria-label={t.inputLabel}
                  className="min-w-0 flex-1 bg-transparent text-[13.5px] text-[#2C1810] outline-none placeholder:text-[#9c8a74] disabled:cursor-not-allowed"
                />

                {/* Talk with voice / Microphone button */}
                <button
                  type="button"
                  onClick={toggleMic}
                  disabled={isBlocked || teamLive}
                  aria-label={voiceMode ? "End voice call" : "Talk with Voice"}
                  title={
                    voiceMode
                      ? (lang === "hi" ? "कॉल समाप्त करें" : "End voice conversation")
                      : (lang === "hi" ? "आरोही से बात कीजिए (Talk with voice)" : "Talk to Aarohi (hands-free call)")
                  }
                  className={`flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full transition disabled:opacity-40 ${
                    voiceMode || listening
                      ? "mv-recording bg-red-500 text-white shadow-md"
                      : "border border-[#8f2433]/30 text-[#8f2433] hover:bg-[#fbecd2]"
                  }`}
                >
                  {transcribing ? (
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#8f2433] border-t-transparent" />
                  ) : voiceMode || listening ? (
                    <MicOff className="h-4 w-4" />
                  ) : (
                    <Mic className="h-4 w-4" />
                  )}
                </button>

                {/* Send button */}
                <button
                  type="submit"
                  disabled={loading || !input.trim() || isBlocked}
                  aria-label={t.send}
                  className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[linear-gradient(135deg,#9b2a3a,#6b1420)] text-white shadow-[0_6px_14px_-6px_rgba(107,20,32,0.8)] transition hover:scale-105 hover:brightness-110 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
                >
                  <Send className="-ml-0.5 h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
                </button>
              </div>

              {askingName && nameError ? (
                <p role="alert" className="mt-1.5 px-2 text-[11.5px] text-red-600">
                  {nameError}
                </p>
              ) : inChat ? (
                <div className="mt-1.5 flex items-center justify-between px-2 text-[10.5px] text-[#6f5a43]">
                  <div className="flex items-center gap-1.5 truncate">
                    <Shield className="h-3.5 w-3.5 shrink-0 text-[#c08a2e]" />
                    <span className="truncate">{t.footerShort}</span>
                  </div>
                  <button
                    type="button"
                    onClick={endChat}
                    disabled={loading}
                    className="shrink-0 inline-flex items-center gap-1 font-medium text-[#73532F] underline underline-offset-2 hover:text-[#8B6A3E] disabled:opacity-50"
                  >
                    <LogOut className="h-3 w-3" aria-hidden="true" />
                    {t.endChat}
                  </button>
                </div>
              ) : (
                <div className="mt-1.5 flex items-center justify-center gap-1.5 text-[10.5px] font-medium text-[#6f5a43]">
                  <Shield className="h-3.5 w-3.5 shrink-0 text-[#c08a2e]" />
                  <span className="truncate">{lang === "hi" ? "आपकी जानकारी सुरक्षित और निजी है।" : "Your details are secure and private."}</span>
                  <span
                    title={lang === "hi" ? "चैट और IP एड्रेस फ़ॉलो-अप के लिए सुरक्षित सेव होते हैं।" : "Chats and IP address are saved securely so our team can follow up."}
                    aria-label="Privacy info"
                    className="flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded-full text-[#6b1420] hover:text-[#9b2a3a]"
                  >
                    <Info className="h-3.5 w-3.5" />
                  </span>
                  <button
                    type="button"
                    onClick={toggleMute}
                    title={soundMuted ? (lang === "hi" ? "नोटिफ़िकेशन साउंड चालू" : "Notification sound on") : (lang === "hi" ? "नोटिफ़िकेशन साउंड बंद" : "Notification sound off")}
                    aria-label="Sound chime toggle"
                    className="flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded-full text-[#6b1420] transition hover:bg-[#fbecd2]"
                  >
                    {soundMuted ? <BellOff className="h-3.5 w-3.5 opacity-40" /> : <Bell className="h-3.5 w-3.5 text-[#8f2433]" />}
                  </button>
                </div>
              )}
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default ChatPanel;
