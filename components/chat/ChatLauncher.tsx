"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { MessageCircle, X } from "lucide-react";
import { loadChatConfig, type ChatConfig } from "./chatConfig";
import { readChatSession } from "./chatSession";

const ChatPanel = dynamic(() => import("./ChatPanel"), { ssr: false });

const CHAT_URL =
  process.env.NEXT_PUBLIC_CHAT_API_URL ||
  (process.env.NEXT_PUBLIC_API_URL ? `${process.env.NEXT_PUBLIC_API_URL}/chat` : "/api/v1/chat");

const GREETING_TEXT =
  "नमो गंगे, नमस्कार! मैं आरोही, मोक्ष सेवा से। किसी भी सेवा की जानकारी या सहायता के लिए नीचे दिए बटन पर क्लिक करें और मुझसे बात करें।";

const AAROHI_IMAGE = "/images/chatbot/aarohi-cutout.png";

const ChatLauncher: React.FC = () => {
  const [ready, setReady] = useState(false);
  const [config, setConfig] = useState<ChatConfig | null>(null);
  const [open, setOpen] = useState(false);
  const [opened, setOpened] = useState(false);
  const [panelKey, setPanelKey] = useState(0);
  const [dismissed, setDismissed] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    loadChatConfig().then((c) => {
      setConfig(c);
      setReady(true);
    });
  }, []);

  const toggle = () => {
    if (speaking) stopVoice();
    if (!open && opened && readChatSession().status === "expired") setPanelKey((k) => k + 1);
    setOpened(true);
    setOpen((v) => !v);
  };

  const close = () => {
    setOpen(false);
  };

  const stopVoice = () => {
    if (audioRef.current) {
      try {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      } catch { }
      audioRef.current = null;
    }
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      try {
        window.speechSynthesis.cancel();
      } catch { }
    }
    setSpeaking(false);
    setShowSubtitle(false);
    if (typeof window !== "undefined") {
      (window as any).__MOKSHA_IS_AAROHI_SPEAKING__ = false;
      window.dispatchEvent(new CustomEvent("moksha:voice", { detail: { speaking: false } }));
      (window as any).__MOKSHA_RESUME_BG_MUSIC__?.();
    }
  };

  const playVoice = async () => {
    if (speaking) {
      stopVoice();
      return;
    }

    setSpeaking(true);
    setShowSubtitle(true);
    if (typeof window !== "undefined") {
      (window as any).__MOKSHA_IS_AAROHI_SPEAKING__ = true;
      (window as any).__MOKSHA_PAUSE_BG_MUSIC__?.();
      window.dispatchEvent(new CustomEvent("moksha:voice", { detail: { speaking: true } }));
      try {
        document.querySelectorAll("audio, video").forEach((el) => {
          const m = el as HTMLMediaElement;
          if (!m.paused && m !== audioRef.current) m.pause();
        });
      } catch {}
    }

    try {
      const res = await fetch(`${CHAT_URL}/speak`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: GREETING_TEXT }),
      });

      if (res.ok) {
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        const player = new Audio(url);
        audioRef.current = player;

        player.onplay = () => {
          setSpeaking(true);
          setShowSubtitle(true);
          if (typeof window !== "undefined") {
            (window as any).__MOKSHA_IS_AAROHI_SPEAKING__ = true;
            (window as any).__MOKSHA_PAUSE_BG_MUSIC__?.();
          }
        };
        player.onended = () => {
          stopVoice();
        };
        player.onerror = () => {
          fallbackWebSpeech();
        };

        await player.play().catch(() => fallbackWebSpeech());
        return;
      }
    } catch {
      fallbackWebSpeech();
    }
  };

  const fallbackWebSpeech = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setTimeout(() => stopVoice(), 4500);
      return;
    }
    try {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(GREETING_TEXT);
      utter.lang = "hi-IN";
      utter.rate = 0.95;
      utter.onstart = () => {
        if (typeof window !== "undefined") {
          (window as any).__MOKSHA_IS_AAROHI_SPEAKING__ = true;
          (window as any).__MOKSHA_PAUSE_BG_MUSIC__?.();
        }
      };
      utter.onend = () => stopVoice();
      utter.onerror = () => stopVoice();
      window.speechSynthesis.speak(utter);
    } catch {
      stopVoice();
    }
  };

  if (!ready || (config && !config.enabled) || dismissed) return null;

  return (
    <>
      <style>{`
        /* Aarohi Standing Character Launcher matching Moksha Voyage */
        .ms-aarohi-launcher {
          position: fixed;
          right: 14px;
          bottom: 0px;
          z-index: 45;
          display: flex;
          flex-direction: column;
          align-items: center;
          pointer-events: none;
          transition: opacity 0.3s ease, visibility 0.3s ease;
          -webkit-tap-highlight-color: transparent;
        }

        @media (max-width: 600px) {
          .ms-aarohi-launcher {
            right: 6px;
            bottom: calc(4.25rem + env(safe-area-inset-bottom));
          }
        }

        .ms-aarohi-launcher.ms-hidden {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }

        /* Character figure button */
        .ms-aarohi-figure {
          position: relative;
          display: block;
          width: 155px;
          padding: 0;
          border: 0;
          margin: 0;
          background: none;
          pointer-events: auto;
          cursor: pointer;
          outline: none;
          transition: transform 0.25s ease;
        }

        .ms-aarohi-figure:hover {
          transform: scale(1.025);
        }

        .ms-aarohi-figure img {
          display: block;
          width: 100%;
          height: auto;
          max-height: 240px;
          object-fit: contain;
          object-position: 50% 100%;
          filter: drop-shadow(0 10px 24px rgba(20, 10, 10, 0.42));
        }

        @media (max-width: 600px) {
          .ms-aarohi-figure {
            width: 118px;
          }
          .ms-aarohi-figure img {
            max-height: 180px;
          }
        }

        /* Dismiss '✕' button */
        .ms-aarohi-close {
          position: absolute;
          top: 6px;
          right: 2px;
          width: 22px;
          height: 22px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          border: 1.5px solid #fff;
          cursor: pointer;
          background: #560d18;
          color: #fbe7b0;
          box-shadow: 0 4px 10px rgba(90, 14, 25, 0.45);
          transition: transform 0.2s ease, background 0.2s ease;
          z-index: 50;
          pointer-events: auto;
        }

        .ms-aarohi-close:hover {
          background: #76192a;
          transform: scale(1.1);
        }

        /* '🔊 आवाज़ सुनें' badge */
        .ms-aarohi-sound {
          position: absolute;
          top: 34%;
          left: 50%;
          transform: translateX(-50%);
          z-index: 50;
          pointer-events: auto;
          white-space: nowrap;
          border: 1.5px solid #e8b85a;
          border-radius: 999px;
          padding: 5px 12px;
          font-size: 11px;
          font-weight: 700;
          color: #fff;
          cursor: pointer;
          background: rgba(86, 13, 24, 0.9);
          box-shadow: 0 6px 14px rgba(0, 0, 0, 0.35);
          animation: ms-sound-pulse 1.8s ease-in-out infinite;
          backdrop-filter: blur(4px);
          transition: transform 0.15s ease, background 0.15s ease;
        }

        .ms-aarohi-sound:hover {
          background: #76192a;
          transform: translateX(-50%) scale(1.05);
        }

        /* Subtitles pill */
        .ms-aarohi-sub {
          position: absolute;
          left: 50%;
          bottom: 48px;
          transform: translateX(-50%);
          z-index: 50;
          width: 220px;
          margin: 0;
          pointer-events: none;
          padding: 7px 11px;
          border-radius: 12px;
          text-align: center;
          font-size: 11.5px;
          line-height: 1.45;
          font-weight: 600;
          color: #fcd98a;
          background: rgba(30, 8, 12, 0.94);
          border: 1px solid rgba(232, 184, 90, 0.5);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(6px);
          animation: ms-sub-in 0.25s ease-out both;
        }

        /* 'Chat here' button underneath */
        .ms-aarohi-actions {
          position: relative;
          z-index: 50;
          display: flex;
          justify-content: center;
          margin-top: -12px;
          pointer-events: auto;
        }

        .ms-aarohi-chatbtn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          height: 33px;
          padding: 0 14px;
          border-radius: 999px;
          cursor: pointer;
          font-size: 12.5px;
          font-weight: 700;
          white-space: nowrap;
          color: #fff;
          border: 1.5px solid #e8b85a;
          background: linear-gradient(135deg, #76192a, #8f2433);
          box-shadow: 0 6px 14px -6px rgba(90, 14, 25, 0.7);
          animation: ms-ring-pulse 2.2s ease-out infinite;
          transition: transform 0.15s ease, filter 0.2s ease;
        }

        .ms-aarohi-chatbtn:hover {
          transform: translateY(-2px);
          filter: brightness(1.12);
        }

        @keyframes ms-ring-pulse {
          0% { box-shadow: 0 6px 14px -6px rgba(90, 14, 25, 0.7), 0 0 0 0 rgba(232, 184, 90, 0.6); }
          70%, 100% { box-shadow: 0 6px 14px -6px rgba(90, 14, 25, 0.7), 0 0 0 10px rgba(232, 184, 90, 0); }
        }

        @keyframes ms-sound-pulse {
          0%, 100% { transform: translateX(-50%) scale(1); }
          50% { transform: translateX(-50%) scale(1.06); }
        }

        @keyframes ms-sub-in {
          from { opacity: 0; transform: translate(-50%, 6px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
      `}</style>

      {/* Main chat conversation panel */}
      {opened && <ChatPanel key={panelKey} open={open} onClose={close} config={config} />}

      {/* Standing Character cutout launcher matching Moksha Voyage Image 2 */}
      <div className={`ms-aarohi-launcher ${open ? "ms-hidden" : ""}`}>
        {/* Close '✕' button */}
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Hide assistant"
          title="Hide"
          className="ms-aarohi-close"
        >
          <X className="h-3 w-3" strokeWidth={2.5} />
        </button>

        {/* '🔊 आवाज़ सुनें' button */}
        {/* <button
          type="button"
          onClick={playVoice}
          className="ms-aarohi-sound"
          title="Click to hear Aarohi's greeting"
        >
          {speaking ? "🔊 बोल रही हैं…" : "🔊 आवाज़ सुनें"}
        </button> */}

        {/* Subtitle box during voice greeting */}
        {showSubtitle && (
          <p className="ms-aarohi-sub">
            नमो गंगे, नमस्कार! मैं आरोही, आपकी मोक्ष सेवा साथी हूँ...
          </p>
        )}

        {/* Full figure cutout of Aarohi */}
        <button
          type="button"
          onClick={toggle}
          aria-label="Talk with Aarohi"
          className="ms-aarohi-figure"
        >
          <img
            src={AAROHI_IMAGE}
            alt="Aarohi - Moksha Sewa Assistant"
            loading="eager"
          />
        </button>

        {/* 'Chat here' button matching Moksha Voyage */}
        <div className="ms-aarohi-actions">
          <button
            type="button"
            onClick={toggle}
            aria-label="Open chat"
            className="ms-aarohi-chatbtn"
          >
            <MessageCircle className="h-3.5 w-3.5" strokeWidth={2.4} />
            Chat here
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatLauncher;
