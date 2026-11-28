"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

import { chatFont } from "./chatFont";
import type { OpenMode } from "./Chatbot";
import { startAvatar, type RealAvatar } from "./saumyaRealAvatar";
import "./SaumyaAvatar.css";

// The chat window and everything behind it: only needed once the page is idle, or Garima is clicked
const Chatbot = dynamic(() => import("./Chatbot"), { ssr: false });

/* Garima in the corner: her video (public/videobot.mp4, its backdrop taken out: videobot-alpha.webm, VP9 with
   transparency), saying who she is and asking the visitor to talk to her, with her words as subtitles and a "Chat here"
   button under her. Safari can't show a see-through WebM, so there she stands in a small card (videobot-card.mp4).
   She speaks once per page load, whole and with her voice: at once if the browser lets the page play sound, else from
   the visitor's first tap or key anywhere (until then she stands smiling — her first second, looped). Not again after:
   once she has spoken (or the chat has been opened) the drawn Garima takes her place (SaumyaButton below, from the
   designer's page public/moksha-ai-assistant-real.html), also on the next pages.
   The designer's GIF is in public/images/chatbot/saumya-launcher.webp, the 3D "Moksha Aunty" in moksha-aunty-avatar/. */
const VIDEO_ALPHA = "/garima-videobot-alpha.webm";
const VIDEO_CARD = "/Garima_videobot.mp4";
const POSTER = "/garima-videobot-poster.webp";

/* What she says, each word with the second she starts it, a line at a time. She speaks Hindi; the subtitles show it in
   English letters (Hinglish), word for word, so each word still lights up as she says it. */
const LINES: { end: number; words: [string, number][] }[] = [
  { end: 3.28, words: [["Namo", 1.52], ["Gange,", 1.92], ["Namaskar.", 2.56]] },
  { end: 5.44, words: [["Main", 3.28], ["Garima,", 3.52], ["aapki", 4.16], ["Moksha", 4.56], ["Saathi", 4.88], ["hoon.", 5.28]] },
  { end: 8.32, words: [["Sevaon", 5.44], ["ki", 5.84], ["jaankari", 6.08], ["lene", 6.48], ["ya", 6.8], ["book", 7.04], ["karwane", 7.28], ["ke", 7.68], ["liye", 7.84]] },
  { end: 11.04, words: [["aap", 8.32], ["chahein", 8.64], ["to", 8.96], ["mujhse", 9.2], ["bhi", 9.44], ["baat", 9.68], ["kar", 9.92], ["sakte", 10.08], ["hain.", 10.32]] },
  { end: 14, words: [["Neeche", 11.04], ["diye", 11.36], ["button", 11.6], ["par", 11.92], ["click", 12.16], ["karein", 12.4], ["aur", 12.64], ["mujhse", 12.88], ["baat", 13.12], ["karein.", 13.36]] },
];
// Before she speaks: the first second, smiling, looped
const IDLE_END = 1.35;
// After: the video held on her namaste (hands folded, lips closed, smiling) until the drawn Garima takes her place
const NAMASTE_AT = 2.33;

/** The video held on her namaste, silent */
const holdNamaste = (video: HTMLVideoElement) => {
  video.pause();
  video.muted = true;
  video.currentTime = NAMASTE_AT;
};
const GESTURES = ["pointerdown", "keydown", "touchend"] as const;

// She speaks once per page load (with her voice, once the browser allows it)
let spoken = false;
// Her video is over (said, or the chat was opened): from then on, the drawn Garima stands here
let videoOver = false;

/** Music and the like pause while she talks (components/layout/MusicToggle) */
const announceVoice = (speaking: boolean) => window.dispatchEvent(new CustomEvent("moksha:voice", { detail: { speaking } }));

/** Safari (and every iPhone browser) can't show a WebM with transparency */
const seeThroughVideo = () => {
  const ua = navigator.userAgent;
  const apple = /iP(hone|ad|od)/.test(ua) || (/^((?!chrome|chromium|android|edg|crios|fxios).)*safari/i.test(ua) && !/chrome/i.test(ua));
  return !apple && document.createElement("video").canPlayType('video/webm; codecs="vp9"') !== "";
};

function VideoBot({
  hidden,
  leaving,
  onOpen,
  onDismiss,
  onDone,
}: {
  hidden: boolean;
  // Handing over to the drawn Garima: she fades and shrinks a little into her (see .vb-leaving)
  leaving: boolean;
  onOpen: (mode: OpenMode) => void;
  onDismiss: () => void;
  onDone: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [load, setLoad] = useState(false);
  const [card, setCard] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [rising, setRising] = useState(false);
  // "idle": smiling (the first second, looped); "speaking"; "done": she has said it, and stands in namaste
  const [phase, setPhase] = useState<"idle" | "speaking" | "done">("idle");
  const phaseRef = useRef<"idle" | "speaking" | "done">("idle");
  // Speaking without sound (the browser held it back): a tap anywhere starts her again, heard
  const [silent, setSilent] = useState(false);
  const [time, setTime] = useState(0);
  const voiceOnRef = useRef(false);

  const setPhaseBoth = (next: "idle" | "speaking" | "done") => {
    phaseRef.current = next;
    setPhase(next);
  };
  const voice = (on: boolean) => {
    if (voiceOnRef.current === on) return;
    voiceOnRef.current = on;
    announceVoice(on);
  };

  // Her video: asked for once the page is idle
  useEffect(() => {
    const start = () => {
      setCard(!seeThroughVideo());
      setLoad(true);
    };
    const idle = "requestIdleCallback" in window ? window.requestIdleCallback(start, { timeout: 2500 }) : 0;
    const timer = idle ? undefined : setTimeout(start, 1200);
    return () => {
      if (idle) window.cancelIdleCallback(idle);
      clearTimeout(timer);
    };
  }, []);

  /** She stands with her hands folded (namaste), silent and still */
  const rest = () => {
    setPhaseBoth("done");
    if (videoRef.current) holdNamaste(videoRef.current);
  };

  /** She says her lines from the start, with her voice; if the browser won't play sound yet, she waits smiling for a tap */
  const speak = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.muted = false;
    setPhaseBoth("speaking");
    setSilent(false);
    voice(true);
    video.play().then(
      () => {
        spoken = true;
      },
      () => {
        // Sound not allowed yet: she stands smiling (muted) until the visitor taps
        voice(false);
        setPhaseBoth("idle");
        setSilent(true);
        video.muted = true;
        video.currentTime = 0;
        void video.play().catch(() => undefined);
      }
    );
  };

  // Ready: she rises, then speaks (once per page load)
  const onReady = () => {
    if (ready) return;
    setReady(true);
    setRising(true);
    const video = videoRef.current;
    if (!video) return;
    if (!spoken && !hidden) speak();
    // Already heard on an earlier page: her namaste
    else if (spoken) rest();
    else {
      video.muted = true;
      void video.play().catch(() => undefined);
    }
  };

  // She speaks from the visitor's first tap or key anywhere (when the browser held her voice back)
  useEffect(() => {
    if (!silent) return;
    const tap = (e: Event) => {
      // Her own buttons do their own thing
      if ((e.target as Element)?.closest?.(".vb-actions, .vb-stage, .sv-close")) return;
      speak();
    };
    GESTURES.forEach((type) => window.addEventListener(type, tap, { capture: true, once: true }));
    return () => GESTURES.forEach((type) => window.removeEventListener(type, tap, { capture: true }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [silent]);

  /** Her buttons open the chat: she stops talking first (the chat has her voice now) */
  const open = (mode: OpenMode) => {
    videoRef.current?.pause();
    voice(false);
    setPhaseBoth("done");
    setSilent(false);
    onOpen(mode);
    // Back from the chat, the drawn Garima is there
    videoOver = true;
    onDone();
  };

  // While the chat is open she waits; back from it, she stands in namaste
  const wasHiddenRef = useRef(false);
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !ready) return;
    if (hidden) {
      wasHiddenRef.current = true;
      video.pause();
      voice(false);
    } else if (wasHiddenRef.current) {
      wasHiddenRef.current = false;
      holdNamaste(video);
    }
  }, [hidden, ready]);

  useEffect(() => () => voice(false), []);

  const onTime = () => {
    const video = videoRef.current;
    if (!video) return;
    if (phaseRef.current === "speaking") setTime(video.currentTime);
    // Waiting to speak: the smiling first second, over and over (after, she holds her namaste)
    else if (phaseRef.current === "idle" && video.currentTime >= IDLE_END) video.currentTime = 0.05;
  };

  // Said all of it: the drawn Garima takes her place
  const onEnded = () => {
    voice(false);
    setSilent(false);
    rest();
    videoOver = true;
    onDone();
  };

  const line = phase === "speaking" ? LINES.find((l) => time < l.end && time >= l.words[0][1] - 0.15) : undefined;

  return (
    // Phones: above the bottom tab bar. Tablets and up: in the corner, left of the social buttons on the right edge.
    <div
      className={`sv-bot vb-bot ${ready ? "vb-ready" : ""} ${failed ? "mv-failed" : ""} ${rising && !leaving ? "vb-intro" : ""} ${leaving ? "vb-leaving" : ""} ${phase === "done" ? "vb-rest" : ""} ${hidden ? "sv-hidden" : ""} ${card ? "vb-card" : ""} ${chatFont.className} right-1 bottom-[calc(4.25rem+env(safe-area-inset-bottom))] z-[45] md:right-2 md:bottom-0`}
      aria-hidden={hidden || undefined}
    >
      <button type="button" className="vb-stage" onClick={() => open("auto")} tabIndex={hidden ? -1 : 0} aria-label="Talk to Garima">
        {load && (
          <video
            ref={videoRef}
            className="vb-video"
            poster={POSTER}
            playsInline
            muted
            preload="auto"
            onCanPlay={onReady}
            onTimeUpdate={onTime}
            onEnded={onEnded}
            onError={() => {
              console.warn("[Garima] launcher video unavailable");
              setFailed(true);
            }}
          >
            <source src={card ? VIDEO_CARD : VIDEO_ALPHA} type={card ? "video/mp4" : "video/webm"} />
          </video>
        )}
      </button>

      {!hidden && (
        <button type="button" onClick={onDismiss} aria-label="Hide Garima (she comes back when the page is reloaded)" title="Hide" className="sv-close">
          <svg viewBox="0 0 12 12" aria-hidden="true">
            <path d="M3 3l6 6M9 3l-6 6" />
          </svg>
        </button>
      )}

      {/* Her voice held back by the browser: a tap anywhere (or here) and she says it all, heard */}
      {silent && phase === "idle" && ready && (
        <button type="button" className="vb-sound" onClick={() => speak()} tabIndex={hidden ? -1 : 0}>
          🔊 आवाज़ सुनें
        </button>
      )}

      {/* What she is saying */}
      {line && (
        <p className="vb-sub" lang="hi-Latn" key={line.end}>
          {line.words.map(([word, at]) => (
            <span key={at} className={time >= at ? "vb-said" : undefined}>
              {word}{" "}
            </span>
          ))}
        </p>
      )}

      <div className="vb-actions">
        <button type="button" className="vb-btn vb-talk" onClick={() => open("auto")} tabIndex={hidden ? -1 : 0}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.5-4.6A8 8 0 1 1 21 12Z" />
          </svg>
          Chat here
        </button>
      </div>

      <span className="mv-fallback" aria-hidden>
        ॐ
      </span>
    </div>
  );
}

// The drawn Garima's namaste plays once per page load
let drawnIntroPlayed = false;
// How long the video and the drawn Garima cross-fade (as .vb-leaving / .mv-arriving in SaumyaAvatar.css)
const HANDOVER_MS = 900;
// Her drawing (its layers): fetched while the video plays, so she is ready the moment it ends
const AVATAR_SVG = "/moksha-chatbot/saumya-real.svg";

/* The drawn Garima (the designer's page, public/moksha-ai-assistant-real.html) after the video: she rises with a
   namaste, blinks, glances around and turns her head a little towards the pointer; a click opens the chat. If she
   can't load, an ॐ badge stands in. */
function SaumyaButton({
  onClick,
  hidden,
  waiting = false,
  arriving = false,
}: {
  onClick: () => void;
  hidden: boolean;
  // While the video plays: drawn and ready, but not shown (so nothing has to load when it ends)
  waiting?: boolean;
  // Taking the video's place: she grows into it (see .mv-arriving) and folds her hands, as the video's Garima did
  arriving?: boolean;
}) {
  const rootRef = useRef<HTMLButtonElement>(null);
  const waitingRef = useRef(waiting);
  // Shown after waiting behind the video: her first appearance is a namaste, not the usual nod
  const cameFromVideoRef = useRef(waiting);
  const figRef = useRef<HTMLSpanElement>(null);
  const avatarRef = useRef<RealAvatar | null>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [rising, setRising] = useState(false);

  // Her drawing, brought to life; freed when she goes
  useEffect(() => {
    let cancelled = false;
    let avatar: RealAvatar | null = null;
    const start = async () => {
      try {
        const res = await fetch(AVATAR_SVG);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const svg = await res.text();
        if (cancelled || !figRef.current || !rootRef.current) return;
        figRef.current.innerHTML = svg;
        const fig = figRef.current.querySelector("svg");
        if (!fig) throw new Error("not an SVG");
        avatar = startAvatar(rootRef.current, fig);
        avatarRef.current = avatar;
        setReady(true);
        // She rises with a namaste, once per page load (behind the video she waits: her namaste comes when she appears)
        if (!drawnIntroPlayed && !waitingRef.current) {
          drawnIntroPlayed = true;
          setRising(true);
          void avatar.namaste();
        }
      } catch (error) {
        console.warn("[Garima] avatar unavailable:", error);
        if (!cancelled) setFailed(true);
      }
    };
    // Behind the video: fetched a little later, once the page has settled
    const timer = setTimeout(() => void start(), waitingRef.current ? 2500 : 0);
    return () => {
      cancelled = true;
      clearTimeout(timer);
      avatar?.destroy();
      avatarRef.current = null;
    };
  }, []);

  // While the chat is open (or the video still plays) she is hidden and still; back again with a nod — or, the first
  // time after the video, with a namaste
  useEffect(() => {
    waitingRef.current = waiting;
    const avatar = avatarRef.current;
    if (!avatar) return;
    const off = hidden || waiting;
    avatar.setPaused(off);
    if (off) return;
    if (cameFromVideoRef.current) {
      cameFromVideoRef.current = false;
      drawnIntroPlayed = true;
      void avatar.namaste();
    } else avatar.nod();
  }, [hidden, waiting, ready]);

  return (
    // Phones: above the bottom tab bar. Tablets and up: in the corner, left of the social buttons on the right edge.
    <button
      ref={rootRef}
      type="button"
      onClick={() => {
        avatarRef.current?.nod();
        onClick();
      }}
      tabIndex={hidden || waiting ? -1 : 0}
      aria-hidden={hidden || waiting || undefined}
      className={`sv-bot mv-bot ${ready ? "mv-ready" : ""} ${failed ? "mv-failed" : ""} ${rising ? "mv-intro" : ""} ${arriving ? "mv-arriving" : ""} ${hidden || waiting ? "sv-hidden" : ""} ${chatFont.className} right-1 bottom-[calc(4.25rem+env(safe-area-inset-bottom))] z-[45] md:right-2 md:bottom-0`}
      aria-label="Open chat with Garima"
    >
      <span className="mv-stage" aria-hidden>
        <span ref={figRef} className="mv-tilt" />
      </span>
      <span className="mv-fallback" aria-hidden>
        ॐ
      </span>
    </button>
  );
}

/* Garima (bottom right) opens the chat. She is sent with the page, so she doesn't wait for the chat's code; that
   loads afterwards, when the page is idle, without the visitor noticing. She stays on the page (hidden) while the chat
   is open, so her video isn't loaded again each time. Her ✕ takes her (and the chat) off the page until it is
   reloaded. Opening and closing the chat is announced ("moksha:chat"), so the background music pauses for it. */
export const CHAT_EVENT = "moksha:chat";

export function ChatbotLauncher() {
  const [isOpen, setIsOpen] = useState(false);
  // ✕ pressed: gone for this visit only (back when the page is reloaded)
  const [dismissed, setDismissed] = useState(false);
  const [loadChat, setLoadChat] = useState(false);
  // Clicked before the chat's code had arrived: how to open it once it has
  const [clickedEarly, setClickedEarly] = useState<OpenMode | false>(false);
  // From the admin's Chatbot Manager: no chat at all when it is switched off (its launcher text isn't shown any more)
  const [settings, setSettings] = useState({ enabled: true, label: "" });
  const openChat = useRef<((mode?: OpenMode) => void) | null>(null);
  /* "video": her video (the drawn Garima waits behind it, already drawn); "handover": the video fades into her (both
     on screen for a moment, so it reads as one Garima); "drawn": only her. Said on an earlier page: "drawn" at once. */
  const [stage, setStage] = useState<"video" | "handover" | "drawn">(() => (videoOver ? "drawn" : "video"));
  const handOver = () => {
    setStage((now) => (now === "video" ? "handover" : now));
    window.setTimeout(() => setStage("drawn"), HANDOVER_MS);
  };

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
      {stage !== "drawn" && (
        <VideoBot hidden={isOpen} leaving={stage === "handover"} onOpen={onOpen} onDismiss={() => setDismissed(true)} onDone={handOver} />
      )}
      <SaumyaButton onClick={() => onOpen("auto")} hidden={isOpen} waiting={stage === "video"} arriving={stage === "handover"} />
      {stage !== "video" && (
        <>
          {/* "Chat here" stays under her, as under the video */}
          {!isOpen && (
            <div className="mv-actions right-1 bottom-[calc(4.25rem+env(safe-area-inset-bottom))] z-[46] md:right-2 md:bottom-0">
              <button type="button" className={`vb-btn vb-talk ${chatFont.className}`} onClick={() => onOpen("auto")}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.5-4.6A8 8 0 1 1 21 12Z" />
                </svg>
                Chat here
              </button>
            </div>
          )}
          {!isOpen && (
            <button
              type="button"
              onClick={() => setDismissed(true)}
              aria-label="Hide Garima (she comes back when the page is reloaded)"
              title="Hide"
              className="sv-close right-1 bottom-[calc(4.25rem+env(safe-area-inset-bottom))] z-[46] md:right-2 md:bottom-0"
            >
              <svg viewBox="0 0 12 12" aria-hidden="true">
                <path d="M3 3l6 6M9 3l-6 6" />
              </svg>
            </button>
          )}
        </>
      )}
      {loadChat && <Chatbot isOpen={isOpen} setIsOpen={setOpen} openRef={openChat} openAtOnce={clickedEarly} onConfig={setSettings} />}
    </>
  );
}
