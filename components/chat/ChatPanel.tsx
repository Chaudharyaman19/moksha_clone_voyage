"use client";

import Image from "next/image";
import { isOptimizableSrc } from "@/lib/imageSrc";
import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowUpRight, ChevronRight, CheckCheck, LogOut, MessageCircleMore, Minus, Phone, Send, ThumbsDown, ThumbsUp, X } from "lucide-react";
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

const BUBBLE = "rounded-2xl rounded-tl-md border border-[#C9A574]/30 bg-white px-3.5 py-2 text-[13.5px] text-[#2C1810] shadow-[0_1px_2px_rgba(44,24,16,0.08)]";
const PILL =
  "rounded-full border border-[#8B6A3E] bg-white px-2 py-2 text-[13px] font-medium leading-tight text-[#2C1810] transition hover:bg-[#8B6A3E] hover:text-white disabled:pointer-events-none";
const TEXT_LINK = "inline-flex items-center gap-1.5 text-[13px] font-medium text-[#73532F] underline underline-offset-2 hover:text-[#8B6A3E]";

const BotAvatar: React.FC<{ avatar: string }> = ({ avatar }) => (
  <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#8B6A3E] text-white shadow-sm ring-2 ring-[#C9A574]/50" aria-hidden="true">
    {avatar ? (
      <Image src={avatar} alt="" width={32} height={32} unoptimized={!isOptimizableSrc(avatar)} className="h-full w-full object-cover" />
    ) : (
      <MessageCircleMore className="h-[18px] w-[18px]" />
    )}
  </div>
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
  const askingName = !visitorName && !ended;
  const [nameStep, setNameStep] = useState(() => !(initial.status === "active" && initial.name));
  const [nameError, setNameError] = useState("");
  // "May I know your name?" follows the greeting as a second message (straight away once a name is known)
  const [askNameShown, setAskNameShown] = useState(() => !!visitorName);
  // An earlier conversation was loaded (or tried) for this visitor
  const [restored, setRestored] = useState(false);
  const [whatsapp, setWhatsapp] = useState(CONTACT.whatsapp);
  // Drives the open / close transition (set one frame after `open` changes so the first open animates too)
  const [shown, setShown] = useState(false);

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
    if (!message || loading || !name) return;

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
    saveChatSession(sid, name);
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
        // The server wants name + mobile before answering more questions
        if (res.status === 403 && json?.code === "DETAILS_REQUIRED") {
          setMessages((prev) => prev.slice(0, -2));
          setPending({ message, topic: topic || message });
          setAskDetails(true);
          setVisitorName(null);
          return;
        }
        setLastReply(() => (res.status === 429 && json?.message) || t.fallback);
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let gotText = false;

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
            setLastReply((current) => current + data.delta);
          } else if (data.error) {
            setLastReply((current) => (current ? `${current}\n\n${data.error}` : data.error!));
            gotText = true;
          }
        }
      }
      if (!gotText) setLastReply(() => t.fallback);
    } catch {
      setLastReply((current) => current || t.fallback);
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

      const welcome: Message = { role: "assistant", content: earlier.length ? t.welcomeBackName(name) : t.greetingName(name), menu: true };
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
    if (next?.question) sendMessage(next.question.message, next.question.topic, name, next.sid);
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
        <span className="h-px flex-1 bg-[#C9A574]/40" aria-hidden="true" />
        <button
          type="button"
          onClick={() => runStep(TEAM.id)}
          disabled={loading}
          className="group inline-flex items-center gap-1.5 rounded-full border border-[#C9A574] bg-white px-3.5 py-1.5 text-[12.5px] font-medium text-[#73532F] shadow-[0_1px_2px_rgba(44,24,16,0.06)] transition-colors hover:border-[#8B6A3E] hover:bg-[#8B6A3E] hover:text-white"
        >
          <TEAM.icon className="h-4 w-4" strokeWidth={1.9} aria-hidden="true" />
          {STEPS[TEAM.id].label[lang]}
          <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </button>
        <span className="h-px flex-1 bg-[#C9A574]/40" aria-hidden="true" />
      </div>
    </>
  );

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label={`${botName} chat`}
      aria-hidden={!open}
      inert={!open}
      lang={lang}
      className={`fixed bottom-4 right-4 z-[110] flex h-[580px] max-h-[calc(100svh-32px)] w-[380px] origin-bottom-right flex-col overflow-clip rounded-[20px] bg-gradient-to-b from-[#fffaf1] to-[#f6ecda] text-[13.5px] leading-[1.55] shadow-[0_30px_80px_-20px_rgba(44,24,16,0.55),0_0_0_1px_rgba(139,106,62,0.12)] transition-[opacity,transform,visibility] duration-300 ease-out sm:right-6 max-[480px]:inset-x-0 max-[480px]:bottom-0 max-[480px]:h-[88svh] max-[480px]:max-h-none max-[480px]:w-full max-[480px]:rounded-b-none motion-reduce:transition-none ${
        shown ? "visible translate-y-0 scale-100 opacity-100" : "invisible pointer-events-none translate-y-6 scale-95 opacity-0"
      }`}
    >
      {/* Header */}
      <div className="relative shrink-0 overflow-clip bg-gradient-to-br from-[#8B6A3E] via-[#7c5d36] to-[#73532F] text-white">
        <span className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-[#C9A574] via-[#D54200] to-[#C9A574] opacity-80" aria-hidden="true" />
        <div className="relative flex items-center gap-2.5 py-3 pl-3.5 pr-2.5">
          <div className="relative flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-white/15 ring-2 ring-white/30">
            {avatar ? (
              <Image src={avatar} alt="" width={42} height={42} unoptimized={!isOptimizableSrc(avatar)} className="h-full w-full rounded-full object-cover" />
            ) : (
              <MessageCircleMore className="h-6 w-6" aria-hidden="true" />
            )}
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-[#4ade80] ring-2 ring-[#7c5d36]" aria-hidden="true" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="whitespace-nowrap text-[15.5px] font-semibold leading-tight">{botName}</p>
            <p className="mt-0.5 truncate text-[11px] leading-snug text-white/85">{config?.subtitle?.trim() || t.subtitle}</p>
          </div>

          <div className="flex shrink-0 items-center rounded-full bg-white/10 p-0.5 text-[10.5px]" role="group" aria-label={t.language}>
            {(["en", "hi"] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`rounded-full px-2 py-0.5 font-semibold transition-colors ${lang === l ? "bg-white text-[#73532F] shadow-sm" : "text-white/75 hover:text-white"}`}
              >
                {l === "en" ? "EN" : "हिं"}
              </button>
            ))}
          </div>

          {/* Both keep the conversation; "End Chat" in the footer clears it */}
          <div className="flex shrink-0 items-center gap-1">
            <button
              type="button"
              onClick={onClose}
              aria-label={t.minimize}
              title={t.minimize}
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <Minus className="h-4 w-4" strokeWidth={2.5} />
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label={t.close}
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X className="h-4 w-4" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>

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
          <div ref={scrollRef} className="relative flex flex-1 flex-col gap-2.5 overflow-y-auto overflow-x-hidden overscroll-contain px-3.5 pb-3 pt-3.5" data-lenis-prevent aria-live="polite">
            <div className="relative flex items-start gap-2.5">
              <BotAvatar avatar={avatar} />
              <div className={`max-w-[82%] ${BUBBLE}`}>
                {(nameStep ? t.intro(botName) : visitorName && !showWelcome ? t.greetingName(visitorName) : greeting || t.greeting).split("\n").map((line, i) =>
                  i === 0 ? (
                    <p key={i} className="font-semibold text-[#2C1810]">
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
              <div className="relative ml-[42px] flex">
                <div className={`max-w-[82%] ${BUBBLE}`}>
                  {askNameShown ? (
                    <p>{t.askName}</p>
                  ) : (
                    <span className="flex items-center gap-1 py-1.5" aria-label={t.typing(botName)}>
                      {[0, 1, 2].map((dot) => (
                        <span key={dot} className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#8B6A3E]/60" style={{ animationDelay: `${dot * 0.15}s` }} />
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
                    <span className="h-px flex-1 bg-[#C9A574]/40" aria-hidden="true" />
                    {m.divider}
                    <span className="h-px flex-1 bg-[#C9A574]/40" aria-hidden="true" />
                  </div>
                );
              }
              if (m.role === "user") {
                return (
                  <div key={i} className="relative flex max-w-[85%] items-end gap-1 self-end">
                    <div className="whitespace-pre-wrap break-words rounded-2xl rounded-tr-md bg-[#8B6A3E] px-4 py-2.5 text-white shadow-sm">{m.content}</div>
                    <CheckCheck className="h-4 w-4 shrink-0 text-[#8B6A3E]" aria-label={t.sent} />
                  </div>
                );
              }
              if (!m.content) return null;
              return (
                <div key={i} className="relative flex flex-col gap-2.5">
                  <div className="flex items-start gap-2.5">
                    <BotAvatar avatar={avatar} />
                    <div className={`${step?.link ? "flex-1" : ""} max-w-[80%] break-words ${BUBBLE} px-4 py-2.5`}>
                      <ChatMessageText text={m.content} />
                      {step?.link && (
                        <a
                          href={step.link.href}
                          onClick={onClose}
                          className="mb-0.5 mt-2.5 flex items-center justify-center gap-2 rounded-lg bg-[#8B6A3E] px-4 py-2.5 text-[14px] font-medium text-white transition hover:bg-[#73532F]"
                        >
                          {step.link.label[lang]}
                          <ArrowUpRight className="h-[18px] w-[18px]" aria-hidden="true" />
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
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-[#8B6A3E] bg-white px-2 py-2 text-[13px] font-medium leading-tight text-[#2C1810] transition hover:bg-[#fbf5ea]"
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
              <div className="relative flex items-start gap-2.5" aria-label={t.typing(botName)}>
                <BotAvatar avatar={avatar} />
                <div className="flex gap-1.5 rounded-2xl rounded-tl-md border border-[#C9A574]/30 bg-white px-4 py-3.5 shadow-sm">
                  {["#8B6A3E", "#C9A574", "#D54200"].map((c, d) => (
                    <span key={c} className="h-2 w-2 animate-bounce rounded-full" style={{ background: c, animationDelay: `${d * 150}ms` }} />
                  ))}
                </div>
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (askingName) submitName();
              else sendMessage(input);
            }}
            className="shrink-0 border-t border-[#C9A574]/30 bg-white/60 px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur-sm"
          >
            <div className="flex items-center gap-2 rounded-full border border-[#C9A574]/40 bg-white py-1 pl-4 pr-1 shadow-[0_4px_14px_-8px_rgba(44,24,16,0.3)] transition focus-within:border-[#8B6A3E] focus-within:ring-4 focus-within:ring-[#8B6A3E]/15">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  if (nameError) setNameError("");
                }}
                disabled={loading}
                maxLength={askingName ? 60 : 1000}
                autoComplete={askingName ? "name" : "off"}
                aria-invalid={askingName && !!nameError}
                placeholder={loading ? t.typing(botName) : askingName ? t.namePh : t.placeholder}
                aria-label={t.inputLabel}
                className="min-w-0 flex-1 bg-transparent text-[13.5px] text-[#2C1810] outline-none placeholder:text-[#2C1810]/40 disabled:cursor-not-allowed"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label={t.send}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#8B6A3E] to-[#73532F] text-white shadow-md transition hover:brightness-110 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send className="-ml-0.5 h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
              </button>
            </div>
            {askingName && nameError ? (
              <p role="alert" className="mt-1.5 px-2 text-[11.5px] text-red-600">
                {nameError}
              </p>
            ) : inChat ? (
              <div className="mt-1.5 flex items-center justify-between px-2 text-[11px] text-[#2C1810]/60">
                <span>{t.footerShort}</span>
                {/* Ends this conversation; on a shared computer the next person starts fresh */}
                <button type="button" onClick={endChat} disabled={loading} className="inline-flex items-center gap-1 font-medium text-[#73532F] underline underline-offset-2 hover:text-[#8B6A3E] disabled:opacity-50">
                  <LogOut className="h-3.5 w-3.5" aria-hidden="true" />
                  {t.endChat}
                </button>
              </div>
            ) : (
              <p className="mt-1.5 text-center text-[10.5px] text-[#2C1810]/60">{t.footer}</p>
            )}
          </form>
        </>
      )}
    </div>
  );
};

export default ChatPanel;
