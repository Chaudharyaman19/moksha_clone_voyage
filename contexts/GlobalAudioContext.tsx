"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";

interface AudioContextType {
  isMusicOn: boolean;
  toggleMusic: () => void;
}

const AudioContext = createContext<AudioContextType>({
  isMusicOn: false,
  toggleMusic: () => {},
});

export const useGlobalAudio = () => useContext(AudioContext);

export function GlobalAudioProvider({
  children,
  audioUrl,
}: {
  children: React.ReactNode;
  audioUrl?: string;
}) {
  const [isMusicOn, setIsMusicOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const activeSrc = audioUrl?.trim() || "/audio/moksha-bg-audio.mp3";

  useEffect(() => {
    let audio = audioRef.current;
    if (!audio) {
      audio = new Audio();
      audio.preload = "none";
      audio.src = activeSrc;
      audio.loop = true;
      audio.volume = 0.3;
      audioRef.current = audio;
    } else if (audio.src !== activeSrc && !audio.src.endsWith(activeSrc)) {
      const wasPlaying = !audio.paused;
      audio.src = activeSrc;
      if (wasPlaying) {
        audio.play().catch(() => {});
      }
    }

    const startAudio = () => {
      const currentAudio = audioRef.current;
      if (currentAudio && currentAudio.paused) {
        currentAudio.muted = false;
        currentAudio.play().then(() => {
          setIsMusicOn(true);
          cleanup();
        }).catch(() => {});
      }
    };

    const cleanup = () => {
      const events = ["click", "pointerdown", "mousedown", "touchstart", "touchend", "scroll", "keydown", "wheel"];
      events.forEach((ev) => {
        window.removeEventListener(ev, startAudio, true);
        document.removeEventListener(ev, startAudio, true);
      });
    };

    // Mobile: skip the load-time autoplay attempt so the mp3 isn't fetched during page load (hurts PageSpeed); the listeners below start it on first touch/scroll.
    if (!window.matchMedia("(max-width: 767px)").matches) {
      // 1. Try immediate unmuted play
      audio.play().then(() => {
        setIsMusicOn(true);
      }).catch(() => {
        // 2. If blocked by browser, try muted autoplay (always allowed by browsers) then unmute on ANY activity
        audio.muted = true;
        audio.play().then(() => {
          setIsMusicOn(true);
        }).catch(() => {});
      });
    }

    // 3. Attach listeners everywhere on window and document so the very first touch/scroll/click immediately un-mutes and plays
    const events = ["click", "pointerdown", "mousedown", "touchstart", "touchend", "scroll", "keydown", "wheel"];
    events.forEach((ev) => {
      window.addEventListener(ev, startAudio, { capture: true, passive: true });
      document.addEventListener(ev, startAudio, { capture: true, passive: true });
    });

    return () => {
      cleanup();
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused || audio.muted) {
      audio.muted = false;
      audio.play().then(() => {
        setIsMusicOn(true);
      }).catch((e) => console.log("Audio play error:", e));
    } else {
      audio.pause();
      setIsMusicOn(false);
    }
  };

  return (
    <AudioContext.Provider value={{ isMusicOn, toggleMusic }}>
      {children}
    </AudioContext.Provider>
  );
}

