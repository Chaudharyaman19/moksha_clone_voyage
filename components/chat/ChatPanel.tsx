"use client";

import Image from "next/image";
import { isOptimizableSrc } from "@/lib/imageSrc";
import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowUpRight, ChevronRight, CheckCheck, LogOut, MessageCircleMore, Mic, MicOff, Minus, Phone, PhoneCall, PhoneOff, Send, Shield, ThumbsDown, ThumbsUp, Volume2, VolumeX, X } from "lucide-react";
import { fetchSettingsJson } from "@/lib/clientSettings";
import { CHAT_URL, type ChatConfig } from "./chatConfig";
import { CONTACT, STEPS, TEAM, TEXT, TOPICS } from "./chatContent";
import { ABUSE_REPLY, NAME_REPLY, hasAbuse, nameProblem, parseName, typedEmailProblem, typedPhoneProblem, type Lang, type LeadValues } from "./chatGuards";
import { clearChatSession, newSessionId, readChatSession, saveChatSession } from "./chatSession";
import { chatSounds } from "./chatSounds";
import ChatLeadForm from "./ChatLeadForm";
import ChatMessageText from "./ChatMessageText";

type Message = {
  role: "user" | "assistant";
  content: string;
  /** Scripted answer: the link, call / WhatsApp buttons, callback form and pills come from STEPS */
  step?: string;
  /** Callback form of this message was submitted */
  sent?: boolean;
  /** Shows the main menu cards under the bubble */
  menu?: boolean;
  /** A centred "Earlier chat · 9 Oct" / "Today" line between conversations (no bubble) */
  divider?: string;
};

const LANG_KEY = "mokshaMitraLang";

const readLang = (fallback: string): Lang => {
  try {
    const saved = window.localStorage.getItem(LANG_KEY);
    if (saved === "hi" || saved === "en") return saved;
  } catch {
    // ignore
  }
  return fallback === "hi" ? "hi" : "en";
};

const saveLang = (lang: Lang) => {
  try {
    window.localStorage.setItem(LANG_KEY, lang);
  } catch {
    // ignore
  }
};

const shortDate = (iso: string | undefined, lang: Lang) => {
  const d = iso ? new Date(iso) : null;
  return d && !Number.isNaN(d.getTime()) ? d.toLocaleDateString(lang === "hi" ? "hi-IN" : "en-IN", { day: "numeric", month: "short" }) : "";
};

const WHATSAPP_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

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
const PILL =
  "cursor-pointer rounded-full border border-[#d9a441]/60 bg-[#fffaf1] px-3 py-1.5 text-left text-[12px] leading-tight font-semibold text-[#73532F] shadow-[0_2px_6px_-3px_rgba(110,40,20,0.35)] transition hover:border-[#d9a441] hover:bg-[#fbecd2] disabled:pointer-events-none";
const TEXT_LINK = "inline-flex items-center gap-1.5 text-[13px] font-medium text-[#73532F] underline underline-offset-2 hover:text-[#8B6A3E]";

const BotAvatar: React.FC<{ avatar: string; speaking?: boolean }> = ({ avatar, speaking }) => (
  <span
    className={`flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#fff3df] shadow-[0_4px_10px_-4px_rgba(110,40,20,0.5)] ring-2 ring-[#d9a441]/80 ${
      speaking ? "mv-speaking" : ""
    }`}
    aria-hidden="true"
  >
    {avatar ? (
      <Image src={avatar} alt="" width={36} height={36} unoptimized={!isOptimizableSrc(avatar)} className="h-full w-full object-cover" />
    ) : (
      <MessageCircleMore className="h-5 w-5 text-[#8B6A3E]" />
    )}
  </span>
);

type Props = { open: boolean; onClose: () => void; config: ChatConfig | null };

const ChatPanel: React.FC<Props> = ({ open, onClose, config }) => {
  // Resume this browser's chat only while it is still active (see chatSession.ts)
  const [initial] = useState(readChatSession);
  const [sessionId, setSessionId] = useState(() => (initial.status === "active" ? initial.sessionId : newSessionId()));
  const [visitorName, setVisitorName] = useState<string | null>(initial.status === "active" ? initial.name || null : null);
  const [phone, setPhone] = useState(initial.status === "active" ? initial.phone : "");
  const [lang, setLangState] = useState<Lang>(() => readLang(config?.defaultLanguage ?? ""));
  const t = TEXT[lang];
  const published = config?.messages?.[lang];
  const botName = config?.name?.trim() || "Moksha Mitra";
  const avatar = config?.avatar || "";
  const greeting = published?.welcomeGreeting || published?.welcomeMessage ? [published.welcomeGreeting, published.welcomeMessage].filter(Boolean).join("\n") : "";
  const endedBye = published?.closingGreeting || t.endedBye;

  // Shown only when the server asks for details (HTTP 403 DETAILS_REQUIRED) before answering more questions
  const [askDetails, setAskDetails] = useState(false);
  const [pending, setPending] = useState<{ message: string; topic: string } | null>(null);

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  // "Chat ended" screen with optional thumbs up / down
  const [ended, setEnded] = useState(false);
  const [feedback, setFeedback] = useState<"yes" | "no" | null>(null);
  // The chat asks the visitor's name first (typed in the message box)
  const [nameStep, setNameStep] = useState(() => !(initial.status === "active" && initial.name));
  const askingName = nameStep && !visitorName && !ended;
  const [nameError, setNameError] = useState("");

  const dismissNameStep = (name = "") => {
    setNameStep(false);
    const finalName = name || "Mitr";
    setVisitorName(finalName);
    saveChatSession(sessionId, finalName);
  };
  // "May I know your name?" follows the greeting as a second message (straight away once a name is known)
  const [askNameShown, setAskNameShown] = useState(() => !!visitorName);
  // An earlier conversation was loaded (or tried) for this visitor
  const [restored, setRestored] = useState(false);
  const [whatsapp, setWhatsapp] = useState(CONTACT.whatsapp);
  // Drives the open / close transition (set one frame after `open` changes so the first open animates too)
  const [shown, setShown] = useState(false);

  // Voice replies & continuous two-way voice conversation (hands-free call loop like Moksha Voyage)
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
  const [speaking, setSpeaking] = useState(false);
  const speakingRef = useRef(false);
  const loadingRef = useRef(false);
  const endedRef = useRef(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const silenceRetriesRef = useRef(0);
  const autoListenTimerRef = useRef<any>(null);

  useEffect(() => {
    loadingRef.current = loading;
  }, [loading]);

  useEffect(() => {
    endedRef.current = ended;
  }, [ended]);

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
  };

  /** Automatically resumes listening when Moksha Mitra finishes speaking (two-way conversational loop) */
  const triggerAutoListen = () => {
    clearTimeout(autoListenTimerRef.current);
    if (!voiceModeRef.current || endedRef.current) return;
    autoListenTimerRef.current = setTimeout(() => {
      if (voiceModeRef.current && !speakingRef.current && !loadingRef.current && !endedRef.current) {
        void startVoiceInput();
      }
    }, 380);
  };

  /** Reads a reply aloud in Moksha Mitra's voice (via /chat/speak or Web Speech API fallback) */
  const speak = async (rawText: string) => {
    if (typeof window === "undefined" || !rawText) {
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
      if (voiceModeRef.current) triggerAutoListen();
      return;
    }

    stopSpeaking();
    setSpeaking(true);
    speakingRef.current = true;

    try {
      // 1. Try server TTS endpoint (/api/v1/chat/speak)
      const res = await fetch(`${CHAT_URL}/speak`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: clean.slice(0, 1200) }),
      });

      if (res.ok) {
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        const player = new Audio(url);
        audioRef.current = player;
        player.onended = () => {
          setSpeaking(false);
          speakingRef.current = false;
          URL.revokeObjectURL(url);
          audioRef.current = null;
          triggerAutoListen();
        };
        player.onerror = () => {
          setSpeaking(false);
          speakingRef.current = false;
          URL.revokeObjectURL(url);
          audioRef.current = null;
          triggerAutoListen();
        };
        await player.play();
        return;
      }
    } catch {
      // Server TTS unavailable; fallback to browser speech synthesis
    }

    // Fallback: Browser Web Speech API
    if (typeof window !== "undefined" && window.speechSynthesis) {
      try {
        window.speechSynthesis.resume();
        const utterance = new SpeechSynthesisUtterance(clean);
        utterance.lang = /[ऀ-ॿ]/.test(clean) ? "hi-IN" : lang === "hi" ? "hi-IN" : "en-IN";
        utterance.rate = 0.95;
        utterance.pitch = 1.0;
        utterance.onend = () => {
          setSpeaking(false);
          speakingRef.current = false;
          triggerAutoListen();
        };
        utterance.onerror = () => {
          setSpeaking(false);
          speakingRef.current = false;
          triggerAutoListen();
        };
        window.speechSynthesis.speak(utterance);
        return;
      } catch {
        setSpeaking(false);
        speakingRef.current = false;
        triggerAutoListen();
      }
    } else {
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
      // Read the latest message or welcoming greeting so the user hears Moksha Mitra right away
      const lastBot = [...messages].reverse().find((m) => m.role === "assistant" && m.content)?.content;
      const initialLine =
        lang === "hi"
          ? "नमो गंगे नमस्कार 🙏 मैं मोक्ष मित्र हूँ, मोक्ष सेवा की ओर से आपका स्वागत करता हूँ। बताइए, मैं आपकी किस प्रकार सहायता कर सकता हूँ?"
          : "Namo Gange Namaskar 🙏 I am Moksha Mitra. Welcome to Moksha Sewa. How may I assist you today?";
      void speak(lastBot || initialLine);
    }
  };

  // Two-way voice recording (Web Speech API primary + Whisper/MediaRecorder fallback)
  const [listening, setListening] = useState(false);
  const [transcribing, setTranscribing] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const recordTimerRef = useRef<any>(null);
  const recognitionRef = useRef<any>(null);
  const recognizedRef = useRef<string>("");

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
      // If user typed/spoke an emergency need, inquiry or sentence instead of a plain name:
      dismissNameStep("");
      sendMessage(trimmed);
      return;
    }

    sendMessage(trimmed);
  };

  const startVoiceInput = async () => {
    stopSpeaking();
    recognizedRef.current = "";

    // 1. Primary: Browser Web Speech API (instant live transcription as user speaks)
    const SpeechRec =
      typeof window !== "undefined" &&
      ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition);

    if (SpeechRec) {
      try {
        const rec = new SpeechRec();
        recognitionRef.current = rec;
        // en-IN supports Indian English, British/US English and Hinglish; hi-IN transcribes Hindi
        rec.lang = lang === "hi" ? "hi-IN" : "en-IN";
        rec.continuous = false;
        rec.interimResults = true;
        rec.maxAlternatives = 1;

        rec.onstart = () => {
          setListening(true);
        };

        rec.onresult = (e: any) => {
          let interim = "";
          let final = "";
          for (let i = 0; i < e.results.length; i++) {
            if (e.results[i].isFinal) {
              final += e.results[i][0].transcript;
            } else {
              interim += e.results[i][0].transcript;
            }
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
          if (e?.error === "not-allowed" || e?.error === "service-not-allowed") {
            alert(
              lang === "hi"
                ? "माइक्रोफ़ोन की अनुमति नहीं है। कृपया ब्राउज़र एड्रेस बार में माइक्रोफ़ोन चालू करें।"
                : "Microphone permission is blocked. Please allow microphone access in your browser address bar."
            );
          }
        };

        rec.onend = () => {
          setListening(false);
          const finalSaid = recognizedRef.current.trim();
          if (finalSaid) {
            setInput("");
            silenceRetriesRef.current = 0;
            if (!voiceOn) setVoiceOn(true);
            handleSpokenOrTypedMessage(finalSaid);
          } else if (voiceModeRef.current && !speakingRef.current && !loadingRef.current && !endedRef.current) {
            // Keep listening seamlessly during normal conversational pauses (up to 4 silent intervals)
            if (silenceRetriesRef.current < 4) {
              silenceRetriesRef.current++;
              clearTimeout(autoListenTimerRef.current);
              autoListenTimerRef.current = setTimeout(() => {
                if (voiceModeRef.current && !speakingRef.current && !loadingRef.current && !endedRef.current) {
                  void startVoiceInput();
                }
              }, 300);
            } else {
              setVoiceMode(false);
              voiceModeRef.current = false;
            }
          }
        };

        rec.start();
        return;
      } catch (err: any) {
        console.warn("SpeechRecognition init error, falling back to MediaRecorder:", err?.message);
      }
    }

    // 2. Fallback: MediaRecorder + Whisper backend transcription
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
          setTranscribing(true);

          const blob = new Blob(audioChunksRef.current, { type: recorder.mimeType || "audio/webm" });
          if (blob.size < 1200) {
            setTranscribing(false);
            if (voiceModeRef.current && !speakingRef.current && !loadingRef.current && !endedRef.current) {
              triggerAutoListen();
            }
            return;
          }

          try {
            const formData = new FormData();
            formData.append("audio", blob, "speech.webm");
            const res = await fetch(`${CHAT_URL}/transcribe`, { method: "POST", body: formData });
            const json = await res.json().catch(() => null);
            const transcribed = String(json?.data?.text || "").trim();
            if (transcribed) {
              setInput("");
              silenceRetriesRef.current = 0;
              if (!voiceOn) setVoiceOn(true);
              handleSpokenOrTypedMessage(transcribed);
            } else if (voiceModeRef.current && !speakingRef.current && !loadingRef.current && !endedRef.current) {
              triggerAutoListen();
            }
          } catch {
            // Silently fall back if network issue
          } finally {
            setTranscribing(false);
          }
        };

        recorder.start();
        setListening(true);
        // Automatically stop after 10s of continuous recording
        recordTimerRef.current = setTimeout(() => {
          if (recorder.state === "recording") recorder.stop();
        }, 10000);
        return;
      } catch (err: any) {
        console.warn("MediaRecorder mic access error:", err?.message);
        setVoiceMode(false);
        voiceModeRef.current = false;
        alert(
          lang === "hi"
            ? "माइक्रोफ़ोन चालू नहीं हो सका। कृपया ब्राउज़र में अनुमति दें।"
            : "Microphone could not be accessed. Please allow microphone permission in your browser."
        );
      }
    }
  };

  const stopVoiceInput = () => {
    clearTimeout(autoListenTimerRef.current);
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {}
    }
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      try {
        mediaRecorderRef.current.stop();
      } catch {}
    }
    clearTimeout(recordTimerRef.current);
    setListening(false);
  };

  const endVoiceCall = () => {
    setVoiceMode(false);
    voiceModeRef.current = false;
    stopVoiceInput();
    stopSpeaking();
  };

  const toggleMic = () => {
    if (typeof window === "undefined") return;

    // 1. Barge-in: if Moksha Mitra is speaking aloud and user taps mic, immediately stop speech and start listening
    if (speaking) {
      stopSpeaking();
      setVoiceMode(true);
      voiceModeRef.current = true;
      silenceRetriesRef.current = 0;
      void startVoiceInput();
      return;
    }

    // 2. If already in voice mode or listening, turn it off (hang up)
    if (voiceMode || listening) {
      endVoiceCall();
      return;
    }

    // 3. User clicked "Talk with voice" to initiate voice conversation!
    setVoiceMode(true);
    voiceModeRef.current = true;
    if (!voiceOn) setVoiceOn(true);
    silenceRetriesRef.current = 0;

    // Dismiss name step if active so it doesn't block the voice interaction
    if (askingName) {
      dismissNameStep("");
    }

    // Warm spoken welcome greeting matching Moksha Voyage
    const isHindi = lang === "hi";
    const displayName = visitorName && visitorName !== "Mitr" ? `${visitorName} ${isHindi ? "जी" : "ji"}` : "";
    const welcomeLine = isHindi
      ? displayName
        ? `नमो गंगे नमस्कार ${displayName}! बताइए, आज मैं आपकी क्या सहायता करूँ?`
        : `नमो गंगे नमस्कार! मैं मोक्ष मित्र हूँ, मोक्ष सेवा से। बताइए, मैं आपकी क्या सहायता कर सकता हूँ?`
      : displayName
      ? `Namo Gange Namaskar ${displayName}! How may I help you today?`
      : `Namo Gange Namaskar! I am Moksha Mitra from Moksha Sewa. How may I assist you today?`;

    // If starting fresh or no bot greeting yet, add the greeting bubble
    setMessages((prev) => {
      const hasGreeting = prev.some((m) => m.role === "assistant" && (m.content.includes("नमो गंगे") || m.content.includes("Namo Gange") || m.content.includes("Moksha Mitra")));
      if (!hasGreeting) {
        return [...prev, { role: "assistant", content: welcomeLine, menu: true }];
      }
      return prev;
    });

    // Speak the welcome greeting out loud first!
    // When Moksha Mitra finishes speaking this greeting, triggerAutoListen() is called automatically,
    // which then opens the mic and starts listening to the user hands-free!
    void speak(welcomeLine);
  };

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
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch {}
      }
      setListening(false);
    }
  }, [open]);

  // The CMS number is only needed once the chat is opened
  useEffect(() => {
    if (!open) return;
    fetchSettingsJson()
      .then((body) => {
        const number = String(body?.data?.whatsappNumber ?? "").replace(/\D/g, "");
        if (number) setWhatsapp(number);
      })
      .catch(() => {});
  }, [open]);

  useEffect(() => {
    if (!open || !nameStep || askNameShown) return;
    const id = window.setTimeout(() => setAskNameShown(true), 1300);
    return () => window.clearTimeout(id);
  }, [open, nameStep, askNameShown]);

  const showForm = !ended && !visitorName && askDetails;
  const showWelcome = !showForm && messages.length === 0;

  const setLang = (next: Lang) => {
    setLangState(next);
    saveLang(next);
    if (recognitionRef.current) {
      try {
        recognitionRef.current.lang = next === "hi" ? "hi-IN" : "en-IN";
      } catch {}
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el && messages.length) el.scrollTop = el.scrollHeight;
  }, [messages, loading]);

  useEffect(() => {
    if (open && !showForm && !ended && !loading) inputRef.current?.focus();
  }, [open, showForm, ended, loading]);

  // On phones the panel is a full-height sheet: lock the page behind it
  useEffect(() => {
    if (!open || !window.matchMedia("(max-width: 480px)").matches) return;
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = "hidden";
    return () => {
      html.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const setLastReply = (update: (text: string) => string) =>
    setMessages((prev) => {
      const next = [...prev];
      const last = next[next.length - 1];
      next[next.length - 1] = { ...last, content: update(last.content) };
      return next;
    });

  /** Forget the current visitor and go back to the name question for the next person. */
  const startNewChat = (notice = "") => {
    stopSpeaking();
    stopVoiceInput();
    setVoiceMode(false);
    voiceModeRef.current = false;
    clearChatSession();
    setSessionId(newSessionId());
    setVisitorName(null);
    setPhone("");
    setMessages([]);
    setInput("");
    setPending(null);
    setEnded(false);
    setFeedback(null);
    setAskDetails(false);
    setNameStep(true);
    setNameError(notice);
    setRestored(false);
  };

  /** Ends the conversation: the next visitor on this browser starts fresh; the feedback screen is shown */
  const endChat = () => {
    stopSpeaking();
    stopVoiceInput();
    setVoiceMode(false);
    voiceModeRef.current = false;
    clearChatSession();
    setEnded(true);
  };

  /**
   * Saves clicks, scripted replies and feedback for the admin panel. Fire-and-forget: the chat
   * never waits for or breaks on it.
   */
  const track = (items: { role: "user" | "assistant"; content: string }[], feedbackValue?: "yes" | "no") => {
    const toSave = items.filter((m) => m.content.trim()).map((m) => ({ role: m.role, content: m.content.trim().slice(0, 2000) }));
    if (!toSave.length && !feedbackValue) return;
    fetch(`${CHAT_URL}/track`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      keepalive: true,
      body: JSON.stringify({
        sessionId,
        pageUrl: window.location.href,
        ...(toSave.length ? { messages: toSave.slice(0, 10) } : {}),
        ...(feedbackValue ? { feedback: feedbackValue } : {}),
      }),
    }).catch(() => {});
  };

  const sendMessage = async (text: string, topic = "", name = visitorName ?? "", sid = sessionId) => {
    const message = text.trim().slice(0, 1000);
    if (!message || loading) return;
    const activeName = name || visitorName || "Website Visitor";

    // Typed by the visitor (not a menu button): abusive words, or a mobile number / email that
    // cannot be right, get a fixed reply here and are not sent to the AI.
    if (!topic) {
      const blocked = hasAbuse(message) ? ABUSE_REPLY[lang] : typedPhoneProblem(message, lang) || typedEmailProblem(message, lang);
      if (blocked) {
        setInput("");
        setMessages((prev) => [...prev, { role: "user", content: message }, { role: "assistant", content: blocked }]);
        track([
          { role: "user", content: message },
          { role: "assistant", content: blocked },
        ]);
        return;
      }
    }

    // Panel left open for 30+ minutes (or browser restarted) — treat it as a new visitor
    if (readChatSession().status === "expired") {
      startNewChat(t.expired);
      setPending({ message, topic: topic || message });
      return;
    }
    saveChatSession(sid, activeName);
    chatSounds.send();

    setInput("");
    setLoading(true);
    setMessages((prev) => [...prev, { role: "user", content: topic || message }, { role: "assistant", content: "" }]);

    try {
      const res = await fetch(CHAT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId: sid, message, pageUrl: window.location.href }),
      });

      if (!res.ok || !res.body) {
        const json = await res.json().catch(() => null);
        setLastReply(() => (res.status === 429 && json?.message) || t.fallback);
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

        // SSE events are separated by a blank line
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
            setLastReply((current) => current + data.delta);
          } else if (data.error) {
            setLastReply((current) => (current ? `${current}\n\n${data.error}` : data.error!));
            gotText = true;
          }
        }
      }
      if (!gotText) {
        setLastReply(() => t.fallback);
        if (voiceOn || voiceModeRef.current) void speak(t.fallback);
      } else if (accumulatedReply.trim() && (voiceOn || voiceModeRef.current)) {
        void speak(accumulatedReply);
      } else if (voiceModeRef.current) {
        triggerAutoListen();
      }
    } catch {
      setLastReply((current) => current || t.fallback);
      if (voiceOn || voiceModeRef.current) void speak(t.fallback);
      else if (voiceModeRef.current) triggerAutoListen();
    } finally {
      setLoading(false);
    }
  };

  /**
   * Saves the visitor's name (POST /chat/start) and greets them by name. If an earlier chat is
   * resumed, its messages are shown above a "Today" line. `typed` = the name was just typed
   * (shown as the visitor's bubble); otherwise this is a page reload of a named chat.
   */
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
        body: JSON.stringify({ sessionId, name, pageUrl: window.location.href }),
      });
      const json = await res.json().catch(() => null);
      if (!res.ok) throw new Error(json?.errors?.[0]?.split(": ").pop() || json?.message || "");
      const data = json?.data as { sessionId?: string; messages?: { role: "user" | "assistant"; content: string; createdAt?: string }[] };
      const sid = data?.sessionId || sessionId;
      const earlier = (data?.messages || []).filter((m) => m.content?.trim());

      setSessionId(sid);
      saveChatSession(sid, name);
      setVisitorName(name);
      setAskDetails(false);

      welcomeLine = earlier.length ? t.welcomeBackName(name) : t.greetingName(name);
      const welcome: Message = { role: "assistant", content: welcomeLine, menu: true };
      setMessages((prev) => {
        const nameBubble = typed ? prev.slice(-1) : [];
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
    // A question asked before the name was given goes out now, in the (maybe resumed) chat
    if (next?.question) {
      sendMessage(next.question.message, next.question.topic, name, next.sid);
    } else if (welcomeLine && (voiceOn || voiceModeRef.current)) {
      void speak(welcomeLine);
    }
  };

  const submitName = () => {
    if (loading) return;
    setRestored(true);
    const name = parseName(input);
    // "hello", a question, a number, abuse or keyboard mashing is not a name
    const problem = nameProblem(input, name);
    if (problem) {
      setNameError(NAME_REPLY[lang][problem]);
      return;
    }
    startWithName(name, true);
  };

  // A page reload of a named chat: bring its messages back once the panel opens
  useEffect(() => {
    if (!open || !visitorName || restored || messages.length) return;
    const id = window.setTimeout(() => {
      setRestored(true);
      startWithName(visitorName, false);
    }, 0);
    return () => window.clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, visitorName, restored]);

  /** Scripted answer: the visitor's bubble, then the reply after a short "typing" pause */
  const runStep = (id: string, silent = false) => {
    if (askingName) {
      dismissNameStep("");
    }
    const step = STEPS[id];
    if (!step || loading) return;
    const say = step.label[lang];
    const content = step.content[lang];
    track([...(silent ? [] : [{ role: "user" as const, content: say }]), { role: "assistant", content }]);
    if (!silent) setMessages((prev) => [...prev, { role: "user", content: say }]);
    setLoading(true);
    window.setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", content, step: id }]);
      setLoading(false);
      if (voiceOn || voiceModeRef.current) void speak(content);
    }, 700);
  };

  const showMainMenu = () => setMessages((prev) => [...prev, { role: "assistant", content: t.menuPrompt, menu: true }]);

  /** Saves name + mobile as a chat lead; returns an error message, or null when it was sent */
  const postLead = async (values: LeadValues, callback: boolean): Promise<string | null> => {
    try {
      const res = await fetch(`${CHAT_URL}/lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          name: values.name,
          phone: values.phone,
          pageUrl: window.location.href,
          ...(callback ? { enquiryType: "callback", ...(values.time ? { preferredTime: values.time } : {}) } : {}),
        }),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => null);
        return json?.errors?.[0]?.split(": ").pop() || json?.message || t.genericError;
      }
    } catch {
      return t.genericError;
    }
    saveChatSession(sessionId, values.name, values.phone);
    setPhone(values.phone);
    return null;
  };

  const submitDetails = async (values: LeadValues) => {
    const error = await postLead(values, false);
    if (error) return error;
    setVisitorName(values.name);
    setAskDetails(false);
    const question = pending;
    setPending(null);
    if (question) sendMessage(question.message, question.topic, values.name);
    return null;
  };

  const submitCallback = async (index: number, values: LeadValues) => {
    const error = await postLead(values, true);
    if (error) return error;
    setVisitorName((current) => current || values.name);
    setMessages((prev) => prev.map((m, i) => (i === index ? { ...m, sent: true } : m)));
    // The team takes it from here: close this conversation after a moment
    setLoading(true);
    window.setTimeout(() => {
      clearChatSession();
      setEnded(true);
      setLoading(false);
    }, 900);
    return null;
  };

  const whatsappHref = `https://wa.me/${whatsapp}?text=${encodeURIComponent(t.whatsappText)}`;
  const last = messages[messages.length - 1];
  const waitingForFirstWord = loading && (last?.role === "user" || (last?.role === "assistant" && !last.content));
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
            disabled={loading}
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
          disabled={loading}
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
        className={`fixed bottom-4 right-4 z-[110] flex h-[580px] max-h-[calc(100svh-32px)] w-[380px] origin-bottom-right flex-col overflow-hidden rounded-[24px] bg-[linear-gradient(#fffaf1,#f7ead3)] text-[13.5px] leading-[1.55] shadow-[0_24px_60px_-12px_rgba(70,30,10,0.45),0_0_0_1px_rgba(139,106,62,0.18)] transition-[opacity,transform,visibility] duration-300 ease-out sm:right-6 max-[480px]:inset-x-0 max-[480px]:bottom-0 max-[480px]:h-[88svh] max-[480px]:max-h-none max-[480px]:w-full max-[480px]:rounded-b-none motion-reduce:transition-none ${
          shown ? "visible translate-y-0 scale-100 opacity-100" : "invisible pointer-events-none translate-y-6 scale-95 opacity-0"
        }`}
      >
        {/* Header: deep warm terracotta/bronze with lotus mark, avatar in gold ring with pulse, and gold wave divider */}
        <header className="mv-head-in relative shrink-0 bg-[linear-gradient(135deg,#5f3d1f_0%,#7a522a_55%,#8B6A3E_100%)] px-3.5 pt-3.5 pb-6 text-white">
          <LotusMark className="pointer-events-none absolute top-1 left-1/2 h-[14px] w-[24px] -translate-x-1/2 text-[#e8b85a]" />

          <div className="relative flex items-center gap-2.5">
            <div className="relative shrink-0">
              <span
                className={`relative flex h-[48px] w-[48px] items-center justify-center overflow-hidden rounded-full bg-[#fff3df] ring-[3px] ring-[#e8b85a] transition-shadow ${
                  speaking ? "mv-speaking" : ""
                }`}
              >
                {avatar ? (
                  <Image src={avatar} alt="" width={48} height={48} unoptimized={!isOptimizableSrc(avatar)} className="h-full w-full object-cover" />
                ) : (
                  <MessageCircleMore className="h-6 w-6 text-[#73532F]" aria-hidden="true" />
                )}
              </span>
              <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4" title={lang === "hi" ? "ऑनलाइन" : "Online"}>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34d399] opacity-60" />
                <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-white bg-[#22c55e]" />
              </span>
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-[17px] font-bold leading-tight">{botName}</p>
              <p className={`truncate text-[11px] font-semibold ${speaking || listening || voiceMode || loading ? "text-[#fcd98a]" : "text-white/85"}`}>
                {speaking ? (
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
              {/* Voice toggle */}
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

              {/* Language toggle EN / हिं */}
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

              {/* Minimize */}
              <button
                type="button"
                onClick={onClose}
                aria-label={t.minimize}
                title={t.minimize}
                className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/10 transition hover:bg-white/25"
              >
                <Minus className="h-4 w-4" strokeWidth={2.5} />
              </button>

              {/* Close */}
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
            <path d="M0 20V12C80 24 190 -2 360 8V20Z" fill="#fffaf1" />
            <path d="M0 12C80 24 190 -2 360 8" fill="none" stroke="#e1aa4b" strokeWidth="2.4" />
          </svg>
        </header>

        {showForm ? (
          /* Name + mobile, asked only when the server requires them */
          <div className="flex flex-1 flex-col gap-3 overflow-y-auto overflow-x-hidden overscroll-contain px-4 pb-3 pt-3.5" data-lenis-prevent>
            <button
              type="button"
              onClick={() => {
                setAskDetails(false);
                setPending(null);
                setVisitorName(null);
              }}
              className={`self-start ${TEXT_LINK} no-underline`}
            >
              <ArrowLeft className="h-4 w-4" /> {t.back}
            </button>

            <div className="flex items-start gap-2.5">
              <BotAvatar avatar={avatar} />
              <div className={BUBBLE}>
                {pending ? (
                  <>
                    {t.detailsFor} <strong className="text-[#73532F]">{pending.topic}</strong>
                    {t.detailsForEnd}
                  </>
                ) : (
                  t.detailsGeneric
                )}
              </div>
            </div>

            <ChatLeadForm lang={lang} submitLabel={lang === "hi" ? "जारी रखें" : "Continue"} defaultName={visitorName ?? ""} defaultPhone={phone} onSubmit={submitDetails} />

            <p className="flex items-center justify-center gap-1 text-center text-[11px] text-[#2C1810]/60">{t.safe}</p>
          </div>
        ) : ended ? (
          /* Chat ended */
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden overscroll-contain px-5 pb-4 pt-5" data-lenis-prevent>
            <div className="flex items-center gap-3 text-[13px] text-[#2C1810]/60">
              <span className="h-px flex-1 bg-[#C9A574]/40" aria-hidden="true" />
              {t.chatEnded}
              <span className="h-px flex-1 bg-[#C9A574]/40" aria-hidden="true" />
            </div>

            <div className="mt-4 flex items-start gap-2.5">
              <BotAvatar avatar={avatar} />
              <div className="max-w-[85%] rounded-2xl rounded-tl-md border border-[#C9A574]/30 bg-white px-4 py-3 text-[15px] text-[#73532F] shadow-sm">
                {messages.some((m) => m.step === "callback" && m.sent) && <p className="mb-1.5 font-medium">{t.callbackThanks}</p>}
                <p>{t.endedThanks}</p>
                <p className="mt-1 font-semibold">{endedBye}</p>
              </div>
            </div>

            <div className="mt-7 flex flex-col items-center">
              <p className="text-[15px] font-medium text-[#2C1810]">{t.helpful}</p>
              <div className="mt-3 grid w-full max-w-[290px] grid-cols-2 gap-3" role="group" aria-label={t.helpful}>
                {(
                  [
                    ["yes", t.yes, ThumbsUp],
                    ["no", t.no, ThumbsDown],
                  ] as const
                ).map(([value, label, Icon]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => {
                      setFeedback(value);
                      track([], value);
                    }}
                    aria-pressed={feedback === value}
                    className={`inline-flex items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-[14px] font-medium transition ${
                      feedback === value ? "border-[#73532F] bg-[#73532F] text-white" : "border-[#8B6A3E]/70 bg-white text-[#2C1810] hover:bg-[#fbf5ea]"
                    }`}
                  >
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                    {label}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-[12px] text-[#2C1810]/60" aria-live="polite">
                {feedback ? t.feedbackThanks : t.feedbackOptional}
              </p>

              <button
                type="button"
                onClick={() => startNewChat()}
                className="mt-6 inline-flex w-full max-w-[340px] items-center justify-center gap-2.5 rounded-full bg-[#8B6A3E] px-4 py-3 text-[15px] font-medium text-white shadow-md transition hover:bg-[#73532F] active:scale-[0.99]"
              >
                <MessageCircleMore className="h-5 w-5" aria-hidden="true" />
                {t.newChat}
              </button>
              <button
                type="button"
                onClick={() => {
                  startNewChat();
                  onClose();
                }}
                className="mt-3 text-[14px] font-medium text-[#73532F] underline underline-offset-2 hover:text-[#8B6A3E]"
              >
                {t.closeChat}
              </button>
            </div>

            <p className="mt-auto border-t border-[#C9A574]/40 pt-4 text-center text-[11.5px] text-[#2C1810]/60">
              {botName} • {config?.subtitle?.trim() || t.subtitle}
            </p>
          </div>
        ) : (
          <>
            <div ref={scrollRef} className="mv-body-in relative flex flex-1 flex-col gap-2.5 overflow-y-auto overflow-x-hidden overscroll-contain px-3.5 pb-3 pt-2" data-lenis-prevent aria-live="polite">
              {/* Sacred mantra at top matching Moksha Voyage */}
              <p className="mb-1 text-center text-[11.5px] font-semibold tracking-[0.06em] text-[#8a4b16]/80" lang="sa">
                ॐ शान्तिः शान्तिः शान्तिः
              </p>

              <div className="mv-msg-in relative flex items-start gap-2.5">
                <BotAvatar avatar={avatar} />
                <div className={`max-w-[82%] ${BUBBLE}`}>
                  {(nameStep ? t.intro(botName) : visitorName && !showWelcome ? t.greetingName(visitorName) : greeting || t.greeting).split("\n").map((line, i) =>
                    i === 0 ? (
                      <p key={i} className="font-semibold text-[#6b1420]">
                        {line}
                      </p>
                    ) : (
                      <p key={i}>{line}</p>
                    )
                  )}
                </div>
              </div>

              {/* The name question comes as its own message, a moment after the greeting */}
              {nameStep && (
                <div className="mv-msg-in relative ml-[42px] flex">
                  <div className={`max-w-[82%] ${BUBBLE}`}>
                    {askNameShown ? (
                      <p>{t.askName}</p>
                    ) : (
                      <span className="flex items-center gap-1 py-1.5" aria-label={t.typing(botName)}>
                        {[0, 0.15, 0.3].map((d) => (
                          <span key={d} className="mv-dot h-2 w-2 rounded-full bg-[#8B6A3E]" style={{ animationDelay: `${d}s` }} />
                        ))}
                      </span>
                    )}
                  </div>
                </div>
              )}
              {!askingName && showWelcome && topicCards}

              {messages.map((m, i) => {
                const step = m.step ? STEPS[m.step] : undefined;
                if (m.divider) {
                  return (
                    <div key={i} className="relative flex items-center gap-3 py-1 text-[11.5px] font-medium text-[#2C1810]/60">
                      <span className="h-px flex-1 bg-[#d9a441]/30" aria-hidden="true" />
                      {m.divider}
                      <span className="h-px flex-1 bg-[#d9a441]/30" aria-hidden="true" />
                    </div>
                  );
                }
                if (m.role === "user") {
                  return (
                    <div key={i} className="mv-msg-in relative flex max-w-[85%] items-end gap-1.5 self-end">
                      <div className="whitespace-pre-wrap break-words rounded-[18px] rounded-tr-[6px] bg-[linear-gradient(135deg,#8B6A3E,#73532F)] px-3.5 py-2.5 text-[13px] leading-[1.5] font-medium text-white shadow-[0_8px_18px_-10px_rgba(115,83,47,0.7)]">
                        {m.content}
                      </div>
                      <svg viewBox="0 0 24 24" fill="none" stroke="#d9a441" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" className="mb-1 h-3.5 w-3.5 shrink-0" aria-label={t.sent}>
                        <path d="M2 12.5l4.5 4.5L15 8.5M10 16l1 1 8.5-8.5" />
                      </svg>
                    </div>
                  );
                }
                if (!m.content) return null;
                return (
                  <div key={i} className="mv-msg-in relative flex flex-col gap-2.5">
                    <div className="flex items-start gap-2.5">
                      <BotAvatar avatar={avatar} speaking={speaking && i === messages.length - 1} />
                      <div className={`${step?.link ? "flex-1" : ""} max-w-[82%] break-words ${BUBBLE}`}>
                        <ChatMessageText text={m.content} />
                        {step?.link && (
                          <a
                            href={step.link.href}
                            onClick={onClose}
                            className="mb-0.5 mt-2.5 flex items-center justify-center gap-2 rounded-xl bg-[linear-gradient(135deg,#8B6A3E,#73532F)] px-4 py-2 text-[13px] font-semibold text-white shadow transition hover:brightness-110"
                          >
                            {step.link.label[lang]}
                            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                          </a>
                        )}
                      </div>
                    </div>

                    {step?.contact && (
                      <div className="ml-[42px] grid grid-cols-2 gap-2">
                        <a
                          href={`tel:${CONTACT.phone}`}
                          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D54200] px-2 py-2 text-[13px] font-medium leading-tight text-white shadow-sm transition hover:brightness-110"
                        >
                          <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                          {t.call}
                        </a>
                        <a
                          href={whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d9a441]/60 bg-[#fffaf1] px-2 py-2 text-[13px] font-medium leading-tight text-[#2C1810] transition hover:bg-[#fbecd2]"
                        >
                          <svg className="h-[18px] w-[18px] shrink-0 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d={WHATSAPP_PATH} />
                          </svg>
                          {t.whatsapp}
                        </a>
                      </div>
                    )}

                    {step?.callback && (
                      <ChatLeadForm
                        lang={lang}
                        withTime
                        submitLabel={step.label[lang]}
                        defaultName={visitorName ?? ""}
                        defaultPhone={phone}
                        sent={!!m.sent}
                        onSubmit={(values) => submitCallback(i, values)}
                      />
                    )}

                    {step?.next && i === messages.length - 1 && !loading && (
                      <div className="ml-[42px] grid grid-cols-2 gap-2">
                        {step.next.map((id) => (
                          <button key={id} type="button" onClick={() => runStep(id)} className={PILL}>
                            {STEPS[id].label[lang]}
                          </button>
                        ))}
                      </div>
                    )}

                    {m.menu && topicCards}
                  </div>
                );
              })}

              {canShowMainMenu && (
                <button type="button" onClick={showMainMenu} className={`relative -mt-1 ml-[42px] self-start ${TEXT_LINK}`}>
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  {t.mainMenu}
                </button>
              )}
              {waitingForFirstWord && (
                <div className="mv-msg-in relative flex items-start gap-2.5" aria-label={t.typing(botName)}>
                  <BotAvatar avatar={avatar} />
                  <div className="flex items-center gap-1.5 rounded-[18px] rounded-tl-[6px] border border-[#ecd3a6] bg-[#fffaf1] px-3.5 py-3 shadow-[0_8px_18px_-12px_rgba(110,40,20,0.4)]">
                    {[0, 0.15, 0.3].map((d) => (
                      <span key={d} className="mv-dot h-2 w-2 rounded-full bg-[#8B6A3E]" style={{ animationDelay: `${d}s` }} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const textToSend = input.trim();
                if (!textToSend || loading) return;
                setInput("");
                handleSpokenOrTypedMessage(textToSend);
              }}
              className="shrink-0 border-t border-[#ecd3a6]/50 bg-[#fffaf1]/80 px-3 pt-2 pb-[max(0.6rem,env(safe-area-inset-bottom))] backdrop-blur-sm"
            >
              {/* Active Voice Call status bar if voiceMode is on */}
              {voiceMode && (
                <div className="mv-msg-in mb-2 flex items-center justify-between gap-2 rounded-xl border border-[#d9a441]/50 bg-[#fff5e3] px-3 py-1.5 shadow-[0_2px_8px_-4px_rgba(110,40,20,0.25)]">
                  <div className="flex min-w-0 items-center gap-2">
                    <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${speaking ? "bg-[#e8b85a] animate-ping" : listening ? "bg-[#22c55e] animate-pulse" : "bg-[#22c55e]"}`} />
                    <span className="truncate text-[11.5px] font-semibold text-[#73532F]">
                      {speaking
                        ? (lang === "hi" ? "मोक्ष मित्र बोल रहे हैं…" : "Moksha Mitra is speaking…")
                        : listening
                        ? (lang === "hi" ? "सुन रहा हूँ, आप बोलिए…" : "I'm listening, please speak…")
                        : (lang === "hi" ? "आवाज़ बातचीत चालू है" : "Voice call active")}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={endVoiceCall}
                    className="flex items-center gap-1 rounded-full bg-red-600 px-2.5 py-1 text-[11px] font-bold text-white shadow transition hover:bg-red-700 active:scale-95"
                  >
                    <PhoneOff className="h-3 w-3" />
                    <span>{lang === "hi" ? "कॉल समाप्त" : "End call"}</span>
                  </button>
                </div>
              )}

              <div className={`flex items-center gap-2 rounded-full border bg-white py-1.5 pl-3 pr-1.5 shadow-[0_8px_20px_-10px_rgba(44,24,16,0.3)] transition ${
                voiceMode || listening ? "border-red-400 ring-2 ring-red-100" : "border-[#ead6b4] focus-within:border-[#d9a441] focus-within:ring-2 focus-within:ring-[#d9a441]/20"
              }`}>
                <LotusMark className="h-[15px] w-[24px] shrink-0 text-[#8B6A3E]" />

                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    if (nameError) setNameError("");
                  }}
                  disabled={loading}
                  maxLength={1000}
                  placeholder={
                    speaking
                      ? (lang === "hi" ? "मोक्ष मित्र बोल रहे हैं…" : "Moksha Mitra is speaking…")
                      : loading
                      ? t.typing(botName)
                      : transcribing
                      ? (lang === "hi" ? "आवाज़ समझ रहा हूँ..." : "Understanding what you said...")
                      : listening || voiceMode
                      ? (lang === "hi" ? "सुन रहा हूँ, बस बोलिए… या यहाँ लिखिए" : "I'm listening, just speak… or type here")
                      : (lang === "hi" ? "अपना संदेश या ज़रूरत यहाँ लिखें..." : "Type your message or need here...")
                  }
                  aria-label={t.inputLabel}
                  className="min-w-0 flex-1 bg-transparent text-[13.5px] text-[#2C1810] outline-none placeholder:text-[#9c8a74] disabled:cursor-not-allowed"
                />

                {/* Talk with voice / Microphone button */}
                <button
                  type="button"
                  onClick={toggleMic}
                  aria-label={voiceMode ? "End voice call" : "Talk with Voice"}
                  title={
                    voiceMode
                      ? (lang === "hi" ? "कॉल समाप्त करें" : "End voice conversation")
                      : (lang === "hi" ? "मोक्ष मित्र से बात कीजिए (Talk with voice)" : "Talk to Moksha Mitra (hands-free call)")
                  }
                  className={`flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full transition ${
                    voiceMode || listening
                      ? "mv-recording bg-red-500 text-white shadow-md"
                      : "border border-[#8B6A3E]/30 text-[#8B6A3E] hover:bg-[#fbecd2]"
                  }`}
                >
                  {transcribing ? (
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#8B6A3E] border-t-transparent" />
                  ) : voiceMode || listening ? (
                    <MicOff className="h-4 w-4" />
                  ) : (
                    <Mic className="h-4 w-4" />
                  )}
                </button>

                {/* Send button */}
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  aria-label={t.send}
                  className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[linear-gradient(135deg,#8B6A3E,#73532F)] text-white shadow-[0_6px_14px_-6px_rgba(115,83,47,0.8)] transition hover:scale-105 hover:brightness-110 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
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
                  {/* Ends this conversation; on a shared computer the next person starts fresh */}
                  <button type="button" onClick={endChat} disabled={loading} className="shrink-0 inline-flex items-center gap-1 font-medium text-[#73532F] underline underline-offset-2 hover:text-[#8B6A3E] disabled:opacity-50">
                    <LogOut className="h-3 w-3" aria-hidden="true" />
                    {t.endChat}
                  </button>
                </div>
              ) : (
                <div className="mt-1.5 flex items-center justify-center gap-1.5 text-[10.5px] text-[#6f5a43]">
                  <Shield className="h-3.5 w-3.5 shrink-0 text-[#c08a2e]" />
                  <span className="truncate">{t.footer}</span>
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
