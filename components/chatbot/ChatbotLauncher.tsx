"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

import { chatFont } from "./chatFont";
import type { OpenMode } from "./Chatbot";
import "./AarohiAvatar.css";

// The chat window and everything behind it: only needed once the page is idle, or Aarohi is clicked
const Chatbot = dynamic(() => import("./Chatbot"), { ssr: false });

/* Aarohi in the corner: her photograph (public/images/chatbot/aarohi-cutout.webp, hands folded in namaste) with a
   "Chat here" button under her. She rises once per page load, a click on her (or the button) opens the chat. Her ✕ takes her
   (and the chat) off the page until it is reloaded. Opening and closing the chat is announced ("moksha:chat"), so the
   background music pauses for it. */
const PHOTO = "/images/chatbot/aarohi-cutout.webp";

// She rises with a namaste once per page load
let introPlayed = false;

export const CHAT_EVENT = "moksha:chat";

function AarohiButton({ onClick, hidden }: { onClick: () => void; hidden: boolean }) {
  const [rising] = useState(() => !introPlayed);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    introPlayed = true;
  }, []);

  return (
    // Phones: above the bottom tab bar. Tablets and up: in the corner, left of the social buttons on the right edge.
    <button
      type="button"
      onClick={onClick}
      tabIndex={hidden ? -1 : 0}
      aria-hidden={hidden || undefined}
      className={`al-bot ${rising ? "al-intro" : ""} ${failed ? "al-failed" : ""} ${hidden ? "sv-hidden" : ""} ${chatFont.className} right-1 bottom-[calc(4.25rem+env(safe-area-inset-bottom))] z-[45] md:right-2 md:bottom-0`}
      aria-label="Open chat with Aarohi"
    >
      <span className="al-stage" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={PHOTO} alt="" draggable={false} className="al-photo" onError={() => setFailed(true)} />
      </span>
      <span className="al-fallback" aria-hidden>
        ॐ
      </span>
    </button>
  );
}

export function ChatbotLauncher() {
  const [isOpen, setIsOpen] = useState(false);
  // ✕ pressed: gone for this visit only (back when the page is reloaded)
  const [dismissed, setDismissed] = useState(false);
  const [loadChat, setLoadChat] = useState(false);
  // Clicked before the chat's code had arrived: how to open it once it has
  const [clickedEarly, setClickedEarly] = useState<OpenMode | false>(false);
  // From the admin's Chatbot Manager: no chat at all when it is switched off
  const [settings, setSettings] = useState({ enabled: true, label: "" });
  const openChat = useRef<((mode?: OpenMode) => void) | null>(null);

  useEffect(() => {
    const load = () => setLoadChat(true);
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(load, { timeout: 5000 });
      return () => window.cancelIdleCallback(id);
    }
    const timer = setTimeout(load, 3000);
    return () => clearTimeout(timer);
  }, []);

  const onOpen = (mode: OpenMode) => {
    if (openChat.current) openChat.current(mode);
    else {
      setLoadChat(true);
      setClickedEarly(mode);
    }
  };

  const setOpen = (open: boolean) => {
    setIsOpen(open);
    if (open) setClickedEarly(false);
    window.dispatchEvent(new CustomEvent(CHAT_EVENT, { detail: { open } }));
  };

  if (!settings.enabled || dismissed) return null;

  return (
    <>
      <AarohiButton onClick={() => onOpen("auto")} hidden={isOpen} />
      {!isOpen && (
        <>
          {/* "Chat here" stays under her */}
          <div className="al-actions right-1 bottom-[calc(4.25rem+env(safe-area-inset-bottom))] z-[46] md:right-2 md:bottom-0">
            <button type="button" className={`vb-btn vb-talk ${chatFont.className}`} onClick={() => onOpen("auto")}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.5-4.6A8 8 0 1 1 21 12Z" />
              </svg>
              Chat here
            </button>
          </div>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label="Hide Aarohi (she comes back when the page is reloaded)"
            title="Hide"
            className="sv-close right-1 bottom-[calc(4.25rem+env(safe-area-inset-bottom))] z-[46] md:right-2 md:bottom-0"
          >
            <svg viewBox="0 0 12 12" aria-hidden="true">
              <path d="M3 3l6 6M9 3l-6 6" />
            </svg>
          </button>
        </>
      )}
      {loadChat && <Chatbot isOpen={isOpen} setIsOpen={setOpen} openRef={openChat} openAtOnce={clickedEarly} onConfig={setSettings} />}
    </>
  );
}
