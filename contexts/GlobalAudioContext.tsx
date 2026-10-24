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

    const tryPlay = () => {
      if (audio && audio.paused) {
        audio.play().then(() => {
          setIsMusicOn(true);
          cleanupListeners();
        }).catch(() => {
          // Autoplay policy waiting for user gesture
        });
      }
    };

    const cleanupListeners = () => {
      window.removeEventListener("pointerdown", tryPlay);
      window.removeEventListener("click", tryPlay);
      window.removeEventListener("touchstart", tryPlay);
      window.removeEventListener("keydown", tryPlay);
      window.removeEventListener("scroll", tryPlay);
    };

    // Try playing immediately
    tryPlay();

    // Listen for any user gesture across the entire window
    window.addEventListener("pointerdown", tryPlay, { passive: true });
    window.addEventListener("click", tryPlay, { passive: true });
    window.addEventListener("touchstart", tryPlay, { passive: true });
    window.addEventListener("keydown", tryPlay, { passive: true });
    window.addEventListener("scroll", tryPlay, { passive: true });

    return () => {
      cleanupListeners();
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
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
