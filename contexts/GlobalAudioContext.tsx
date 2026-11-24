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
    const isSpeaking = typeof window !== "undefined" && Boolean((window as any).__MOKSHA_IS_AAROHI_SPEAKING__);
    if (isSpeaking) {
      audio.pause();
      setIsMusicOn(false);
      return;
    }

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
      audio.id = "moksha-global-bg-audio";
      audio.preload = "auto";
      audio.src = activeSrc;
      audio.loop = true;
      audio.volume = 0.35;
      audioRef.current = audio;
      try {
        if (typeof document !== "undefined" && !document.getElementById("moksha-global-bg-audio")) {
          document.body.appendChild(audio);
        }
      } catch {}
    } else if (audio.src !== activeSrc && !audio.src.endsWith(activeSrc)) {
      const wasPlaying = !audio.paused && !audio.muted;
      audio.src = activeSrc;
      try {
        audio.load();
      } catch {}
      const isSpeaking = typeof window !== "undefined" && Boolean((window as any).__MOKSHA_IS_AAROHI_SPEAKING__);
      if (wasPlaying && !explicitlyPausedRef.current && !isSpeaking) {
        audio.play().catch(() => {});
      }
    }

    // Coordinate with chatbot voice & microphone so music pauses during speech & listening
    const pausedForVoiceRef = { chat: false, voice: false, mic: false };
    const isVoiceActive = () => {
      if (typeof window === "undefined") return false;
      if (Boolean((window as any).__MOKSHA_IS_AAROHI_SPEAKING__)) return true;
      if (pausedForVoiceRef.chat || pausedForVoiceRef.voice || pausedForVoiceRef.mic) return true;
      if (window.speechSynthesis && (window.speechSynthesis.speaking || window.speechSynthesis.pending)) return true;
      try {
        const audios = document.querySelectorAll("audio");
        for (let i = 0; i < audios.length; i++) {
          const a = audios[i];
          if (a.id !== "moksha-global-bg-audio" && !a.paused && a.currentTime > 0) {
            return true;
          }
        }
      } catch {}
      return false;
    };

    if (typeof window !== "undefined") {
      (window as any).__MOKSHA_BG_AUDIO__ = audio;
      (window as any).__MOKSHA_PAUSE_BG_MUSIC__ = () => {
        (window as any).__MOKSHA_IS_AAROHI_SPEAKING__ = true;
        const current = audioRef.current || (document.getElementById("moksha-global-bg-audio") as HTMLAudioElement);
        if (current && !current.paused) {
          current.pause();
        }
        setIsMusicOn(false);
      };
      (window as any).__MOKSHA_RESUME_BG_MUSIC__ = () => {
        (window as any).__MOKSHA_IS_AAROHI_SPEAKING__ = false;
        if (explicitlyPausedRef.current) return;
        if (isVoiceActive()) return;
        const current = audioRef.current || (document.getElementById("moksha-global-bg-audio") as HTMLAudioElement);
        if (current && current.paused) {
          current.play().then(() => setIsMusicOn(true)).catch(() => {});
        }
      };
    }

    const onPlay = () => {
      if (isVoiceActive()) {
        audioRef.current?.pause();
        setIsMusicOn(false);
        return;
      }
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

    // Global listener: whenever ANY non-background audio element plays, immediately pause bg music!
    const onAnyAudioPlay = (e: Event) => {
      const target = e.target as HTMLMediaElement;
      if (target && target.tagName === "AUDIO" && target.id !== "moksha-global-bg-audio") {
        (window as any).__MOKSHA_IS_AAROHI_SPEAKING__ = true;
        if (audioRef.current && !audioRef.current.paused) {
          audioRef.current.pause();
        }
        setIsMusicOn(false);
      }
    };

    const onAnyAudioEnd = (e: Event) => {
      const target = e.target as HTMLMediaElement;
      if (target && target.tagName === "AUDIO" && target.id !== "moksha-global-bg-audio") {
        setTimeout(() => {
          if (!isVoiceActive()) {
            (window as any).__MOKSHA_IS_AAROHI_SPEAKING__ = false;
            if (!explicitlyPausedRef.current && audioRef.current && audioRef.current.paused) {
              audioRef.current.play().then(() => setIsMusicOn(true)).catch(() => {});
            }
          }
        }, 150);
      }
    };

    window.addEventListener("play", onAnyAudioPlay, true);
    window.addEventListener("ended", onAnyAudioEnd, true);
    window.addEventListener("pause", onAnyAudioEnd, true);

    const handleVoiceHold = (reason: "chat" | "voice" | "mic", on: boolean) => {
      pausedForVoiceRef[reason] = on;
      const held = on || isVoiceActive();
      const currentAudio = audioRef.current;
      if (!currentAudio) return;

      if (held) {
        if (!currentAudio.paused) {
          currentAudio.pause();
        }
        setIsMusicOn(false);
      } else if (!explicitlyPausedRef.current && currentAudio.paused && !isVoiceActive()) {
        currentAudio.play().then(() => setIsMusicOn(true)).catch(() => {});
      }
    };

    const onChat = (e: Event) => handleVoiceHold("chat", Boolean((e as CustomEvent<{ open?: boolean }>).detail?.open));
    const onVoice = (e: Event) => handleVoiceHold("voice", Boolean((e as CustomEvent<{ speaking?: boolean }>).detail?.speaking));
    const onMic = (e: Event) => handleVoiceHold("mic", Boolean((e as CustomEvent<{ listening?: boolean }>).detail?.listening));

    window.addEventListener("moksha:chat", onChat);
    window.addEventListener("moksha:voice", onVoice);
    window.addEventListener("moksha:mic", onMic);

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
      if (explicitlyPausedRef.current || isVoiceActive()) return;
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
      window.removeEventListener("moksha:chat", onChat);
      window.removeEventListener("moksha:voice", onVoice);
      window.removeEventListener("moksha:mic", onMic);
      window.removeEventListener("play", onAnyAudioPlay, true);
      window.removeEventListener("ended", onAnyAudioEnd, true);
      window.removeEventListener("pause", onAnyAudioEnd, true);
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
