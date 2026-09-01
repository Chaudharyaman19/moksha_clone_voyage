"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  FaArrowRight,
  FaPlay,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";
import {
  PiFlowerLotus,
  PiHandHeart,
  PiHandsPraying,
  PiUsersThree,
} from "react-icons/pi";
import { itemOrFallback, textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";

const missionLinks = [
  { eyebrow: "WHAT", label: "We Do", icon: PiHandHeart },
  { eyebrow: "WHY", label: "We Exist", icon: PiFlowerLotus },
  { eyebrow: "WHO", label: "We Serve", icon: PiUsersThree },
  { eyebrow: "HOW", label: "We Serve", icon: PiHandsPraying },
  { eyebrow: "NAMO GANGE TRUST", label: "Our Foundation", icon: PiFlowerLotus },
];

export default function BehindMission() {
  const section = useWebsiteSection("about-behind-mission");
  const linkItems = missionLinks.map((link, index) => ({
    ...link,
    eyebrow: itemOrFallback(section?.items, index, { title: link.eyebrow }).title || link.eyebrow,
    label: itemOrFallback(section?.items, index, { label: link.label }).label || link.label,
  }));
  const videoRef = useRef<HTMLVideoElement>(null);
  const mountedRef = useRef(false);
  const hasAutoUnmutedRef = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);
  useEffect(() => {
    // Only real user-gesture events (click/tap/key) count toward a browser's
    // "user activation" — a scroll event does not, and unmuting off one gets
    // the browser to silently pause playback instead of allowing audio.
    const unmuteOnFirstInteraction = () => {
      if (hasAutoUnmutedRef.current) return;
      hasAutoUnmutedRef.current = true;
      const video = videoRef.current;
      if (video) {
        video.muted = false;
        if (video.paused) void video.play();
      }
      if (mountedRef.current) setMuted(false);
    };

    const events: (keyof DocumentEventMap)[] = ["click", "touchstart", "keydown"];
    events.forEach((event) =>
      document.addEventListener(event, unmuteOnFirstInteraction, { once: true, passive: true }),
    );

    return () => {
      events.forEach((event) =>
        document.removeEventListener(event, unmuteOnFirstInteraction),
      );
    };
  }, []);

  const updatePlaying = (value: boolean) => {
    setTimeout(() => {
      if (mountedRef.current) setPlaying(value);
    }, 0);
  };

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play();
      updatePlaying(true);
    } else {
      video.pause();
      updatePlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    hasAutoUnmutedRef.current = true;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  return (
    <section className="relative overflow-hidden bg-[#F8F2E8] px-6 py-7 lg:px-8 lg:py-8 2xl:px-0">
      {/* subtle decorative corner lotuses */}
      <div className="pointer-events-none absolute -left-12 bottom-3 text-[#C7AA6C]/15">
        <PiFlowerLotus className="h-44 w-44" />
      </div>
      <div className="pointer-events-none absolute -right-12 -top-8 text-[#C7AA6C]/12">
        <PiFlowerLotus className="h-48 w-48 rotate-[-20deg]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        {/* MAIN TOP AREA */}
        <div className="grid items-center gap-7 lg:grid-cols-[0.78fr_1.62fr] lg:gap-10">
          {/* LEFT COPY */}
          <div className="mx-auto w-full max-w-[330px] lg:mx-0">
            {/* top decorative lotus */}
            <div className="flex items-center justify-center gap-3 text-[#C18C36] lg:justify-start">
              <span className="h-px w-12 bg-[#C6A25C]" />
              <PiFlowerLotus className="h-8 w-8" />
              <span className="h-px w-12 bg-[#C6A25C]" />
            </div>

            {/* 06 video */}
            <div className="mt-0 flex items-center justify-center gap-2 text-[16px] font-semibold tracking-[0.08em] text-[#24483D] lg:justify-start">
              {/* <span className="h-px w-10 bg-[#C6A25C]" /> */}
              <span>{textOrFallback(section?.eyebrow, "VIDEO", 60)}</span>
              <span className="h-px w-10 bg-[#C6A25C]" />
            </div>

            <p className="mt-4 text-center font-sans text-[16px] font-semibold uppercase text-[#A67532] lg:text-left">
              {textOrFallback(section?.subtitle, "See the Mission", 60)}
            </p>

            <h2 className="mt-2 text-center font-sans text-[24px] font-semibold leading-[1.05] text-[#123E32] sm:text-[30px] lg:text-left">
              <span className="whitespace-pre-line">{textOrFallback(section?.title, "Behind\nMoksha Sewa", 60)}</span>
            </h2>

            <p className="mt-5 text-center text-[16px] leading-[1.62] text-[#334A43] lg:text-left">
              {textOrFallback(section?.description, "Every final journey carries a story. This is the story of a mission built around responsibility, compassion and the belief that no one should be left without dignity.", 600)}
            </p>

            <div className="relative mt-6 flex justify-center lg:justify-start">
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 h-14 w-[250px] -translate-x-1/2 -translate-y-1/2 opacity-75 blur-2xl lg:left-[120px]"
                style={{
                  background:
                    "radial-gradient(circle, rgba(214,162,61,0.34) 0%, rgba(214,162,61,0.14) 48%, transparent 76%)",
                }}
              />
              <Link
                href={textOrFallback(section?.buttonHref, "/mokshagallery", 60)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[52px] items-center gap-3 bg-[#0E4B3A] px-5 text-[16px] font-medium text-white shadow-[0_7px_14px_rgba(22,67,52,0.22)] transition hover:bg-[#0A3C2E]"
              >
                <PiFlowerLotus className="h-6 w-6 text-[#D1A23E]" />
                <span>{textOrFallback(section?.buttonLabel, "Explore Our Work", 60)}</span>
                <FaArrowRight className="ml-1 h-3.5 w-3.5 text-[#D1A23E]" />
              </Link>
            </div>
          </div>

          {/* VIDEO CARD */}
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-x-6 -inset-y-5 opacity-80 blur-2xl"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(214,162,61,0.30) 0%, rgba(214,162,61,0.16) 34%, rgba(214,162,61,0.06) 58%, transparent 78%)",
              }}
            />
            <div className="relative aspect-[1.98/1] overflow-hidden border border-[#B9893E] bg-[#10281F] shadow-[0_10px_22px_rgba(45,35,21,0.26),0_0_28px_rgba(202,145,46,0.16)]">
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                poster={textOrFallback(section?.secondaryImage, "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788164962/moksha-sewa/hero-images/support-mission-ghat.png", 150)}
                autoPlay
                muted={muted}
                loop
                playsInline
                preload="auto"
                onPlay={() => updatePlaying(true)}
                onPause={() => updatePlaying(false)}
                onEnded={() => updatePlaying(false)}
              >
                <source src={textOrFallback(section?.image, "/vedio/taniya.mp4", 60)} type="video/mp4" />
              </video>

              {/* time badge */}
              <span className="absolute right-4 top-4 border border-[#D2AA4F] bg-[#113C31]/90 px-3 py-1 text-[16px] font-medium text-white">
                {textOrFallback(section?.availabilityText, "60-90 seconds", 60)}
              </span>

              {/* central play */}
              {!playing && (
                <button
                  type="button"
                  onClick={toggleVideo}
                  aria-label="Play mission video"
                  className="absolute left-1/2 top-1/2 grid h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 place-items-center border-2 border-[#D1A84C] bg-[#0A332A]/95 text-white shadow-[0_4px_14px_rgba(0,0,0,.35)]"
                >
                  <FaPlay className="ml-1 h-8 w-8" />
                </button>
              )}

              {/* control bar */}
              <div className="absolute inset-x-0 bottom-0 flex h-12 items-center gap-3 bg-gradient-to-t from-black/80 to-transparent px-5 text-white">
                <button
                  type="button"
                  onClick={toggleVideo}
                  aria-label={playing ? "Pause video" : "Play video"}
                  className="text-[16px]"
                >
                  {playing ? "Ⅱ" : <FaPlay className="h-3.5 w-3.5" />}
                </button>

                <span className="flex-1" />

                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={muted ? "Unmute video" : "Mute video"}
                >
                  {muted ? (
                    <FaVolumeMute className="h-4 w-4" />
                  ) : (
                    <FaVolumeUp className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM MISSION LINKS */}
        <div className="mt-7 grid overflow-hidden border border-[#B78938] bg-[#0D4939] px-3 py-1.5 text-white shadow-[0_7px_16px_rgba(22,60,46,.22)] sm:grid-cols-5 sm:px-4">
          {linkItems.map(({ eyebrow, label, icon: Icon }, index) => (
            <div
              key={`${eyebrow}-${label}`}
              className={`flex min-h-[58px] items-center justify-center gap-3 px-4 py-1 ${index
                ? "border-t border-[#C29B50]/35 sm:border-l sm:border-t-0"
                : ""
                }`}
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center border border-[#D1A64B] text-[#D1A64B]">
                <Icon className="h-6 w-6" />
              </span>

              <span className="min-w-0">
                <span className="block whitespace-nowrap text-[16px] font-semibold text-[#D4AA52]">
                  {eyebrow}
                </span>
                <span className="block whitespace-nowrap font-serif text-[16px] text-white">
                  {label}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
