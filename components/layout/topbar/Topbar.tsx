"use client";

import { FaChevronDown, FaEnvelope, FaPhoneAlt, FaUser, FaShieldAlt, FaSearch, FaFileAlt } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const utilityLink =
  "flex items-center justify-center gap-1.5 rounded-md text-white/90 transition-all hover:bg-white/10 hover:text-white active:scale-95 h-7 w-7 shrink-0 md:h-auto md:w-auto md:px-2.5 md:py-1.5";

export default function TopInfoBar() {
  const [isMusicOn, setIsMusicOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playlist = [
    "/audio/om.mp3",
    "/audio/no.mp3",
    "/audio/nour.mp3",
    "/audio/semara.mp3",
    "/audio/shiv.mp3",
  ];

  const getTodayTrack = () => {
    const today = new Date();
    const base = new Date(2024, 0, 1);

    const diffDays = Math.floor(
      (today.getTime() - base.getTime()) / (1000 * 60 * 60 * 24),
    );

    return diffDays % playlist.length;
  };

  const toggleMusic = async () => {
    try {
      const todayTrack = getTodayTrack();

      if (!audioRef.current) {
        audioRef.current = new Audio(playlist[todayTrack]);
        audioRef.current.loop = true;
        audioRef.current.volume = 0.3;
      }

      if (!isMusicOn) {
        audioRef.current.src = playlist[todayTrack];
        await audioRef.current.play();
        setIsMusicOn(true);
      } else {
        audioRef.current.pause();
        setIsMusicOn(false);
      }
    } catch (error) {
      console.log("Browser blocked audio:", error);
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <div
      id="topbar"
      className="fixed top-0 left-0 z-[60] h-11 w-full bg-gradient-to-r from-[#26170D] via-[#2E1C10] to-[#26170D] text-white font-sans"
    >
      {/* Explicit h-11 (44px) above — Navbar hardcodes its own top-11 offset assuming exactly
          this height, so this can't be left to size itself from content (padding/icon tweaks
          here would silently reopen a gap between the two bars otherwise). */}
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-2 px-3 sm:px-4 lg:px-6">
        {/* Contact */}
        <div className="flex min-w-0 items-center gap-2 md:gap-3">
          <div className="flex min-w-0 items-center gap-1.5">
            <FaEnvelope className="h-3 w-3 shrink-0 text-[#D4B996] sm:h-3.5 sm:w-3.5" />
            <a
              href="mailto:info@mokshasewa.org"
              className="min-w-0 truncate text-[16px] text-white/90 transition-colors hover:text-white sm:text-[16px] lg:text-[16px]"
            >
              info@mokshasewa.org
            </a>
          </div>

          <span aria-hidden className="hidden h-3.5 w-px shrink-0 bg-white/15 sm:block" />

          <div className="hidden shrink-0 items-center gap-1.5 sm:flex">
            <FaPhoneAlt className="h-3 w-3 text-[#D4B996] sm:h-3.5 sm:w-3.5" />
            <a
              href="tel:+919220147229"
              className="whitespace-nowrap text-[16px] text-white/90 transition-colors hover:text-white lg:text-[16px]"
            >
              9220147229
            </a>
          </div>
        </div>

        {/* Utilities */}
        <div className="flex shrink-0 items-center gap-1 md:gap-1.5">
          <button
            onClick={toggleMusic}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#8B6A3E] transition-all hover:bg-[#755735] active:scale-95"
            aria-label="Toggle Music"
            aria-pressed={isMusicOn}
          >
            {isMusicOn ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l6 6M15 9l-6 6" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5L6 9H3v6h3l5 4V5z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5L6 9H3v6h3l5 4V5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9a3 3 0 010 6m3-8a7 7 0 010 10" />
              </svg>
            )}
          </button>

          <span aria-hidden className="hidden h-3.5 w-px shrink-0 bg-white/15 md:block" />

          <Link href="/track" className={utilityLink} aria-label="Track request">
            <FaSearch className="h-3 w-3" />
            <span className="hidden text-[16px] md:inline">Track Request</span>
          </Link>

          <Link href="/mortal-records" className={utilityLink} aria-label="Mortal records">
            <FaFileAlt className="h-3 w-3" />
            <span className="hidden text-[16px] md:inline">Mortal Records</span>
          </Link>

          <span aria-hidden className="hidden h-3.5 w-px shrink-0 bg-white/15 md:block" />

          <details className="group/login relative">
            <summary className={`${utilityLink} cursor-pointer list-none [&::-webkit-details-marker]:hidden`}>
              <FaUser className="h-3 w-3" />
              <span className="hidden text-[16px] md:inline">Login</span>
              <FaChevronDown className="hidden h-2.5 w-2.5 transition-transform group-open/login:rotate-180 md:block" />
            </summary>

            <div className="absolute right-0 top-full z-[70] mt-2 w-[180px] overflow-hidden rounded-lg border border-[#D8B982]/40 bg-[#2E1C10] p-1.5 shadow-[0_12px_30px_rgba(0,0,0,0.28)]">
              <Link
                href="/login"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-md px-3 py-2.5 text-[16px] text-white/90 transition hover:bg-white/10 hover:text-white"
              >
                <FaUser className="h-3.5 w-3.5 text-[#D4B996]" />
                User Login
              </Link>

              <a
                href={`${process.env.NEXT_PUBLIC_ADMIN_URL ?? "http://localhost:3001"}/login`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-md px-3 py-2.5 text-[16px] text-white/90 transition hover:bg-white/10 hover:text-white"
              >
                <FaShieldAlt className="h-3.5 w-3.5 text-[#D4B996]" />
                Admin Login
              </a>
            </div>
          </details>
        </div>
      </div>

      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C9A574]/40 to-transparent"
      />
    </div>
  );
}
