"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { MessageCircleMore, X } from "lucide-react";
import { loadChatConfig, type ChatConfig } from "./chatConfig";
import { readChatSession } from "./chatSession";

// The panel (form, chat, streaming) is only downloaded the first time someone opens it,
// so the chatbot adds almost nothing to page load.
const ChatPanel = dynamic(() => import("./ChatPanel"), { ssr: false });

const ChatLauncher: React.FC = () => {
  // The launcher appears once the browser is idle and the on/off setting is known
  const [ready, setReady] = useState(false);
  const [config, setConfig] = useState<ChatConfig | null>(null);
  const [open, setOpen] = useState(false);
  const [opened, setOpened] = useState(false);
  const [panelKey, setPanelKey] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const start = () =>
      loadChatConfig().then((c) => {
        setConfig(c);
        setReady(true);
      });
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(start, { timeout: 4000 });
      return () => window.cancelIdleCallback(id);
    }
    const id = window.setTimeout(start, 2000);
    return () => window.clearTimeout(id);
  }, []);

  const toggle = () => {
    // Previous visitor's chat timed out (30 min idle / browser restarted) — start fresh
    if (!open && opened && readChatSession().status === "expired") setPanelKey((k) => k + 1);
    setOpened(true);
    setOpen((v) => !v);
  };

  const close = () => {
    setOpen(false);
    buttonRef.current?.focus();
  };

  if (!ready || (config && !config.enabled)) return null;

  const name = config?.name?.trim() || "Moksha Mitra";

  return (
    <>
      <style>{`
        @keyframes mitra-pop { from { opacity: 0; transform: translateY(6px) scale(0.95); } to { opacity: 1; transform: none; } }
        @keyframes mitra-ring { 0% { transform: scale(1); opacity: 0.5; } 70%, 100% { transform: scale(1.55); opacity: 0; } }
        @media (prefers-reduced-motion: reduce) { .mitra-anim { animation: none !important; } }
      `}</style>

      {/* Stays mounted after the first open so the conversation survives closing the panel */}
      {opened && <ChatPanel key={panelKey} open={open} onClose={close} config={config} />}

      {/* Above the 24x7 call button that sits at the bottom right on larger screens */}
      <div className={`fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-[100] md:bottom-[76px] ${open ? "max-[480px]:hidden" : ""}`}>
        <button
          ref={buttonRef}
          type="button"
          onClick={toggle}
          aria-label={open ? `Close ${name} chat` : `Chat with ${name}`}
          aria-expanded={open}
          className="group relative block"
        >
          {!open && (
            <span className="mitra-anim pointer-events-none absolute bottom-full right-0 mb-2.5 animate-[mitra-pop_0.35s_ease-out] whitespace-nowrap rounded-xl border border-[#C9A574]/60 bg-white px-3 py-1.5 text-[12px] font-semibold text-[#73532F] shadow-lg transition-transform duration-200 group-hover:-translate-y-1 lg:text-[13px]">
              {config?.launcher?.trim() || "May I help you?"}
              <span className="absolute -bottom-[5px] right-5 h-2.5 w-2.5 rotate-45 border-b border-r border-[#C9A574]/60 bg-white" aria-hidden="true" />
            </span>
          )}
          <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#8B6A3E] to-[#73532F] text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-2xl">
            {!open && <span className="mitra-anim absolute inset-0 animate-[mitra-ring_2.4s_ease-out_infinite] rounded-full bg-[#C9A574]" aria-hidden="true" />}
            {open ? <X className="relative h-6 w-6" strokeWidth={2.5} aria-hidden="true" /> : <MessageCircleMore className="relative h-7 w-7" strokeWidth={2} aria-hidden="true" />}
          </span>
        </button>
      </div>
    </>
  );
};

export default ChatLauncher;
