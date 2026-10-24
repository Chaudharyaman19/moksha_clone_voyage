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

export function GlobalAudioProvider({ children }: { children: React.ReactNode }) {
  const [isMusicOn, setIsMusicOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    let audio = audioRef.current;
    if (!audio) {
      audio = new Audio("/audio/moksha-bg-audio.mp3");
      audio.loop = true;
      audio.volume = 0.3;
      audioRef.current = audio;
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

