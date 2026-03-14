"use client";

import { useEffect, useState, useCallback, useMemo, useRef } from "react";
import { ChevronLeft, ChevronRight, Play, Pause, Shield } from "lucide-react";
import shlokas from "@/types/shlokas.json";

export default function Hero() {
  const images = useMemo(
    () => [
      "/assets/im5.jpeg",
      "/assets/im2.jpeg",
      "/assets/im3.jpeg",
      "/assets/im4.jpeg",
    ],
    [],
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mantra, setMantra] = useState<any>(null);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const [audioLoading, setAudioLoading] = useState(false);
  const [hasAudio, setHasAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const slideMantras = useMemo(() => {
    return [shlokas[0], shlokas[1], shlokas[2], shlokas[3]];
  }, []);

  useEffect(() => {
    setMantra(slideMantras[currentIndex] || shlokas[0]);
  }, [currentIndex, slideMantras]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  // Check if mantra has valid audio
  useEffect(() => {
    if (mantra && mantra.audio) {
      // Check if audio file exists by trying to load it
      const audio = new Audio();
      audio.src = mantra.audio;

      audio.oncanplaythrough = () => {
        setHasAudio(true);
        setAudioError(false);
      };

      audio.onerror = () => {
        console.log(`Audio file not found: ${mantra.audio}`);
        setHasAudio(false);
        setAudioError(true);
      };

      return () => {
        audio.oncanplaythrough = null;
        audio.onerror = null;
      };
    } else {
      setHasAudio(false);
      setAudioError(true);
    }
  }, [mantra]);

  useEffect(() => {
    if (!mantra || !audioRef.current || !hasAudio) return;

    const audio = audioRef.current;

    // Reset states
    setAudioError(false);
    setAudioLoading(true);

    // Set up audio event listeners
    const handleCanPlay = () => {
      console.log("Audio can play now");
      setAudioLoading(false);
    };

    const handlePlay = () => {
      console.log("Audio playing");
      setAudioPlaying(true);
    };

    const handlePause = () => {
      console.log("Audio paused");
      setAudioPlaying(false);
    };

    const handleEnded = () => {
      console.log("Audio ended");
      setAudioPlaying(false);
    };

    const handleError = (e: Event) => {
      const target = e.target as HTMLAudioElement;
      console.log("Audio unavailable for this mantra");
      setAudioError(true);
      setAudioLoading(false);
      setAudioPlaying(false);
      setHasAudio(false);
    };

    const handleLoadedMetadata = () => {
      console.log("Audio metadata loaded");
    };

    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    // Set audio source
    audio.src = mantra.audio;
    audio.load();

    return () => {
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.pause();
      audio.src = "";
    };
  }, [mantra, hasAudio]);

  // ---------------- AUDIO CONTROL ----------------
  const toggleAudio = async () => {
    if (!audioRef.current || !hasAudio) return;

    const audio = audioRef.current;

    try {
      if (audio.paused) {
        setAudioLoading(true);
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log("Playback started successfully");
              setAudioLoading(false);
            })
            .catch((error) => {
              console.log("Playback failed:", error);
              setAudioError(true);
              setAudioLoading(false);
            });
        }
      } else {
        audio.pause();
      }
    } catch (err) {
      console.log("Audio error:", err);
      setAudioError(true);
      setAudioLoading(false);
    }
  };

  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              i === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Audio Element */}
      <audio ref={audioRef} preload="metadata" />

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === currentIndex
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 z-20">
        <div className="max-w-4xl text-center space-y-6">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm">
            <Shield className="w-4 h-4 text-amber-200" />
            <span className="text-xs sm:text-sm text-white font-medium tracking-wider">
              TRUSTED SINCE 2005
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white">
            A Journey Guided{" "}
            <span className="block text-amber-300">by Love</span>
          </h1>

          {/* Mantra Section */}
          {mantra && (
            <div className="mt-8 rounded-xl p-6 ">
              {/* Mantra Title */}
              <h3 className="text-amber-200 text-lg sm:text-xl font-semibold mb-4 flex items-center justify-center gap-3">
                <span>🌼</span>
                {currentIndex === 0
                  ? "Morning Mantra"
                  : currentIndex === 1
                    ? "Evening Mantra"
                    : currentIndex === 2
                      ? "Peace Mantra"
                      : "Blessing Mantra"}
                <span>🌼</span>
              </h3>

              {/* Sanskrit Mantra */}
              <p className="text-white text-xl sm:text-2xl md:text-3xl font-serif leading-relaxed">
                {mantra.sanskrit}
              </p>

              {/* Hindi Translation */}
              <p className="text-white/80 text-sm sm:text-base mt-4 italic">
                {mantra.hindi}
              </p>

              {/* Audio Control Button - Only show if audio exists */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
