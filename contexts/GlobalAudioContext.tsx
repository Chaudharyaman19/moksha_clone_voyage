"use client";

import React, { createContext, useContext, useEffect, useRef, useState, useCallback } from "react";

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
  const explicitlyPausedRef = useRef<boolean>(false);

  const activeSrc = audioUrl?.trim() || "/audio/moksha-bg-audio.mp3";

  const toggleMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused || audio.muted) {
      explicitlyPausedRef.current = false;
      audio.muted = false;
      audio
        .play()
        .then(() => {
          setIsMusicOn(true);
        })
        .catch((e) => console.log("Audio play error:", e));
    } else {
      explicitlyPausedRef.current = true;
      audio.pause();
      setIsMusicOn(false);
    }
  }, []);

  useEffect(() => {
    let audio = audioRef.current;
    if (!audio) {
      audio = new Audio();
      audio.preload = "auto";
      audio.src = activeSrc;
      audio.loop = true;
      audio.volume = 0.35;
      audioRef.current = audio;
    } else if (audio.src !== activeSrc && !audio.src.endsWith(activeSrc)) {
      const wasPlaying = !audio.paused;
      audio.src = activeSrc;
      if (wasPlaying && !explicitlyPausedRef.current) {
        audio.play().catch(() => {});
      }
    }

    const onPlay = () => setIsMusicOn(true);
    const onPause = () => {
      if (explicitlyPausedRef.current || (audioRef.current && audioRef.current.paused)) {
        setIsMusicOn(false);
      }
    };

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    const unlockAndPlay = () => {
      if (explicitlyPausedRef.current) return;
      const currentAudio = audioRef.current;
      if (!currentAudio) return;

      currentAudio.muted = false;
      currentAudio
        .play()
        .then(() => {
          setIsMusicOn(true);
          cleanup();
        })
        .catch(() => {});
    };

    const cleanup = () => {
      const events = [
        "pointerdown",
        "mousedown",
        "pointermove",
        "mousemove",
        "touchstart",
        "touchend",
        "click",
        "scroll",
        "wheel",
        "keydown",
        "focus",
        "visibilitychange",
      ];
      events.forEach((ev) => {
        window.removeEventListener(ev, unlockAndPlay, true);
        document.removeEventListener(ev, unlockAndPlay, true);
      });
    };

    // 1. Immediately attempt unmuted autoplay when URL opens
    audio.muted = false;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsMusicOn(true);
          cleanup();
        })
        .catch(() => {
          // If browser restricts unmuted autoplay before user interaction:
          // Listen to ANY micro-interaction (mouse movement, touch, click, scroll, focus)
          // so the music starts IMMEDIATELY without waiting for page navigation.
          const events = [
            "pointerdown",
            "mousedown",
            "pointermove",
            "mousemove",
            "touchstart",
            "touchend",
            "click",
            "scroll",
            "wheel",
            "keydown",
            "focus",
            "visibilitychange",
          ];
          events.forEach((ev) => {
            window.addEventListener(ev, unlockAndPlay, { capture: true, passive: true });
            document.addEventListener(ev, unlockAndPlay, { capture: true, passive: true });
          });
        });
    }

    return () => {
      cleanup();
      audio?.removeEventListener("play", onPlay);
      audio?.removeEventListener("pause", onPause);
    };
  }, [activeSrc]);

  return (
    <AudioContext.Provider value={{ isMusicOn, toggleMusic }}>
      {children}
    </AudioContext.Provider>
  );
}
