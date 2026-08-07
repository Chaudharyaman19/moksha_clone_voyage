"use client";

import { FaEnvelope, FaPhoneAlt, FaUser, FaShieldAlt, FaSearch, FaFileAlt } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

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
      className="fixed top-0 left-0 w-full bg-[#2A1A0F] text-white z-[60] border-b border-white/10 font-sans"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-1.5 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="flex items-center gap-1.5 group">
            <FaEnvelope size={16} className="text-[#D4B996]" />
            <a
              href="mailto:info@mokshasewa.org"
              className="sm:text-sm lg:text-[13px] text-white/90 hover:text-white transition-colors whitespace-nowrap"
            >
              info@mokshasewa.org
            </a>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 group">
            <FaPhoneAlt size={16} className="text-[#D4B996]" />
            <a
              href="tel:+919654900525"
              className="text-xs lg:text-[13px] text-white/90 hover:text-white transition-colors whitespace-nowrap"
            >
              9220147229
            </a>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          {/* Music Button */}

          <button
            onClick={toggleMusic}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-[#8B6A3E] hover:bg-[#755735] transition-all duration-300"
            aria-label="Toggle Music"
          >
            {isMusicOn ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 9l6 6M15 9l-6 6"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5L6 9H3v6h3l5 4V5z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5L6 9H3v6h3l5 4V5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 9a3 3 0 010 6m3-8a7 7 0 010 10"
                />
              </svg>
            )}
          </button>

          {/* Track Request */}
          <Link
            href="/track"
            className="flex items-center justify-center w-7 h-7 md:w-auto md:h-auto md:px-2.5 md:py-1 rounded bg-[#8B6A3E] hover:bg-[#755735] text-white transition-colors"
          >
            <FaSearch size={14} className="md:hidden" />
            <span className="hidden md:inline text-[11px]">Track Request</span>
          </Link>

          {/* Mortal Records */}
          <Link
            href="/records"
            className="flex items-center justify-center w-7 h-7 md:w-auto md:h-auto md:px-2.5 md:py-1 rounded bg-[#8B6A3E] hover:bg-[#755735] text-white transition-colors"
          >
            <FaFileAlt size={14} className="md:hidden" />
            <span className="hidden md:inline text-[11px]">Mortal Records</span>
          </Link>

          {/* User Login */}

          <Link
            href="/login"
            className="flex items-center justify-center w-7 h-7 md:w-auto md:h-auto md:px-2.5 md:py-1 rounded bg-[#8B6A3E] hover:bg-[#755735] text-white transition-colors"
          >
            <FaUser size={14} className="md:hidden" />
            <span className="hidden md:inline text-[11px]">User Login</span>
          </Link>

          {/* Admin Login — separate admin app; not built yet, so this points at where it will
              be hosted (NEXT_PUBLIC_ADMIN_URL) and won't resolve until that app exists. */}

          <a
            href={`${process.env.NEXT_PUBLIC_ADMIN_URL ?? "http://localhost:3001"}/login`}
            className="flex items-center justify-center w-7 h-7 md:w-auto md:h-auto md:px-2.5 md:py-1 rounded bg-[#8B6A3E] hover:bg-[#755735] text-white transition-colors"
          >
            <FaShieldAlt size={14} className="md:hidden" />
            <span className="hidden md:inline text-[11px]">Admin Login</span>
          </a>
        </div>
      </div>
    </div>
  );
}
