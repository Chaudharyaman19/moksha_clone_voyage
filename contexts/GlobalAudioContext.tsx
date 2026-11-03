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
      try {
        audio.load();
      } catch {}
    } else if (audio.src !== activeSrc && !audio.src.endsWith(activeSrc)) {
      const wasPlaying = !audio.paused && !audio.muted;
      audio.src = activeSrc;
      try {
        audio.load();
      } catch {}
      if (wasPlaying && !explicitlyPausedRef.current) {
        audio.play().catch(() => {});
      }
    }

    const onPlay = () => {
      if (!audioRef.current?.muted) {
        setIsMusicOn(true);
      }
    };
    const onPause = () => {
      if (explicitlyPausedRef.current || (audioRef.current && (audioRef.current.paused || audioRef.current.muted))) {
        setIsMusicOn(false);
      }
    };

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    const cleanup = () => {
      const events = [
        "pointerdown",
        "mousedown",
        "touchstart",
        "touchend",
        "click",
        "scroll",
        "wheel",
        "keydown",
      ];
      events.forEach((ev) => {
        window.removeEventListener(ev, unmuteOnInteraction, true);
        document.removeEventListener(ev, unmuteOnInteraction, true);
      });
    };

    const unmuteOnInteraction = () => {
      if (explicitlyPausedRef.current) return;
      const currentAudio = audioRef.current;
      if (!currentAudio) return;

      currentAudio.muted = false;
      if (currentAudio.paused) {
        currentAudio
          .play()
          .then(() => {
            setIsMusicOn(true);
            cleanup();
          })
          .catch(() => {});
      } else {
        setIsMusicOn(true);
        cleanup();
      }
    };

    // 1. Immediately attempt unmuted autoplay when website opens
    audio.muted = false;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsMusicOn(true);
        })
        .catch(() => {
          // If browser restricts unmuted autoplay before user interaction:
          // Start playing muted immediately so audio pre-buffers in background without delay!
          if (!explicitlyPausedRef.current && audio) {
            audio.muted = true;
            audio.play().catch(() => {});
          }

          // Unmute on the very first user interaction instantly
          const events = [
            "pointerdown",
            "mousedown",
            "touchstart",
            "touchend",
            "click",
            "scroll",
            "wheel",
            "keydown",
          ];
          events.forEach((ev) => {
            window.addEventListener(ev, unmuteOnInteraction, { capture: true, passive: true });
            document.addEventListener(ev, unmuteOnInteraction, { capture: true, passive: true });
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
