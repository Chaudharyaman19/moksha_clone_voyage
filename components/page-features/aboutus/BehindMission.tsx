"use client";

import { useRef, useState } from "react";
import { FaArrowRight, FaExpand, FaPlay, FaVolumeUp } from "react-icons/fa";
import { PiFlowerLotus, PiHandHeart, PiHandsPraying, PiUsersThree } from "react-icons/pi";

const missionLinks = [
  { eyebrow: "WHAT", label: "We Do", icon: PiHandHeart },
  { eyebrow: "WHY", label: "We Exist", icon: PiFlowerLotus },
  { eyebrow: "WHO", label: "We Serve", icon: PiUsersThree },
  { eyebrow: "HOW", label: "We Serve", icon: PiHandsPraying },
  { eyebrow: "NAMO GANGE TRUST", label: "Our Foundation", icon: PiFlowerLotus },
];

export default function BehindMission() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#fbf5e9] px-4 py-6 sm:px-6 lg:py-8">
      <div className="pointer-events-none absolute -left-10 bottom-5 text-[#c5a968]/20">
        <PiFlowerLotus className="h-40 w-40" />
      </div>
      <div className="pointer-events-none absolute -right-12 -top-9 text-[#c5a968]/15">
        <PiFlowerLotus className="h-44 w-44 rotate-[-22deg]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-6 lg:grid-cols-[.72fr_1.78fr] lg:gap-10">
          <div className="mx-auto w-full max-w-[330px] lg:mx-0">
            <div className="flex items-center gap-2 text-[#214b3d]">
              <span className="h-px w-12 bg-[#c6a25c]" />
              <PiFlowerLotus className="h-8 w-8 text-[#bd842b]" />
              <span className="h-px flex-1 bg-[#c6a25c]" />
            </div>

            <div className="mt-1 flex items-center gap-2 text-[12px] font-bold tracking-[0.12em] text-[#24483d]">
              <span className="h-px w-11 bg-[#c6a25c]" />
              <span>06 — VIDEO</span>
              <span className="h-px flex-1 bg-[#c6a25c]" />
            </div>

            <p className="mt-4 text-[15px] font-semibold tracking-[0.18em] text-[#a67532]">SEE THE MISSION</p>
            <h2 className="mt-2 font-serif text-[42px] font-semibold leading-[.94] tracking-[-0.025em] text-[#123e32] sm:text-[48px]">
              Behind
              <span className="block text-[#9b672e]">Moksha Sewa</span>
            </h2>

            <p className="mt-5 max-w-[300px] text-[14px] leading-[1.7] text-[#334a43]">
              Every final journey carries a story.<br />
              This is the story of a mission built around responsibility, compassion and the belief that no one should be left without dignity.
            </p>

            <button type="button" onClick={toggleVideo} className="mt-6 inline-flex h-12 items-center gap-3 rounded-[10px] bg-[#0f4938] px-5 text-[14px] text-white shadow-[0_7px_13px_rgba(22,67,52,.25)] transition hover:bg-[#0a3c2e]">
              <PiFlowerLotus className="h-6 w-6 text-[#d1a23e]" />
              <span>Explore Our Work</span>
              <FaArrowRight className="ml-1 h-3 w-3 text-[#d1a23e]" />
            </button>
          </div>

          <div className="relative aspect-[1.86/1] overflow-hidden rounded-[20px] border border-[#c19445] bg-[#10281f] shadow-[0_9px_18px_rgba(45,35,21,.35)]">
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              poster="/hero-images/support-mission-ghat.png"
              preload="metadata"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              onEnded={() => setPlaying(false)}
            >
              <source src="/vedio/taniya.mp4" type="video/mp4" />
            </video>

            <span className="absolute right-4 top-4 rounded-full border border-[#d2aa4f] bg-[#113c31]/90 px-3 py-1 text-[10px] font-medium text-white">
              ◷&nbsp; 60–90 seconds
            </span>

            {!playing && (
              <button type="button" onClick={toggleVideo} aria-label="Play mission video" className="absolute left-1/2 top-1/2 grid h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-[#d1a84c] bg-[#0a332a]/95 text-white shadow-[0_4px_12px_rgba(0,0,0,.35)]">
                <FaPlay className="ml-1 h-7 w-7" />
              </button>
            )}

            <div className="absolute inset-x-0 bottom-0 flex h-11 items-center gap-3 bg-gradient-to-t from-black/80 to-transparent px-5 text-white">
              <button type="button" onClick={toggleVideo} aria-label={playing ? "Pause video" : "Play video"} className="text-[15px]">{playing ? "Ⅱ" : <FaPlay className="h-3 w-3" />}</button>
              <span className="text-[11px]">0:00 / 1:20</span>
              <span className="relative h-[3px] flex-1 rounded-full bg-white/45"><span className="absolute left-0 top-0 h-full w-[35%] rounded-full bg-[#d5a74a]" /><span className="absolute left-[35%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#e9c466]" /></span>
              <FaVolumeUp className="h-4 w-4" />
              <span className="text-base">⚙</span>
              <FaExpand className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>

        <div className="mt-7 grid overflow-hidden rounded-[17px] border border-[#b78938] bg-[#0d4939] px-3 py-3 text-white shadow-[0_7px_16px_rgba(22,60,46,.25)] sm:grid-cols-5 sm:px-5">
          {missionLinks.map(({ eyebrow, label, icon: Icon }, index) => (
            <div key={`${eyebrow}-${label}`} className={`flex items-center justify-center gap-3 px-3 py-2 ${index ? "border-t border-[#c29b50]/35 sm:border-l sm:border-t-0" : ""}`}>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#d1a64b] text-[#d1a64b]"><Icon className="h-7 w-7" /></span>
              <span className="min-w-0"><span className="block whitespace-nowrap text-[10px] font-semibold text-[#d4aa52]">{eyebrow}</span><span className="block whitespace-nowrap font-serif text-[15px]">{label}</span></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
