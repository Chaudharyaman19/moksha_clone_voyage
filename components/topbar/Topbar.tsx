"use client";

import { Mail, Phone, User, Users, Shield } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Cinzel, Inter } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
});

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

  const [currentTrack, setCurrentTrack] = useState(getTodayTrack());

  const toggleMusic = async () => {
    try {
      const todayTrack = getTodayTrack();
      setCurrentTrack(todayTrack);

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
      className={`fixed top-0 left-0 w-full bg-[#2A1A0F] text-white z-[60] border-b border-white/10 ${inter.className}`}
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 py-1.5 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center gap-1.5 group">
            <Mail size={16} className="text-[#D4B996]" />
            <a
              href="mailto:info@mokshayatra.org"
              className="sm:text-sm lg:text-[13px] text-white/90 hover:text-white transition-colors whitespace-nowrap"
            >
              info@mokshayatra.org
            </a>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 group">
            <Phone size={16} className="text-[#D4B996]" />
            <a
              href="tel:+919654900525"
              className="text-xs lg:text-[13px] text-white/90 hover:text-white transition-colors whitespace-nowrap"
            >
              +91 96549 00525
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2">
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

          {/* User Login */}

          <Link
            href="/login"
            className={`flex items-center justify-center w-7 h-7 md:w-auto md:h-auto md:px-1.5 md:py-0.5 rounded bg-[#8B6A3E] hover:bg-[#755735] text-white transition-colors ${cinzel.className}`}
          >
            <User size={14} className="md:hidden" />
            <span className="hidden md:inline text-[11px]">User Login</span>
          </Link>

          <div className="hidden md:block w-px h-3 bg-white/20"></div>

          {/* Vendor Login */}

          <Link
            href="/vendorlogin"
            className={`flex items-center justify-center w-7 h-7 md:w-auto md:h-auto md:px-1.5 md:py-0.5 rounded bg-[#8B6A3E] hover:bg-[#755735] text-white transition-colors ${cinzel.className}`}
          >
            <Users size={14} className="md:hidden" />
            <span className="hidden md:inline text-[11px]">Vendor Login</span>
          </Link>

          <div className="hidden md:block w-px h-3 bg-white/20"></div>

          {/* Moksha Seva */}

          <Link
            href="/login"
            className={`flex items-center justify-center w-7 h-7 md:w-auto md:h-auto md:px-1.5 md:py-0.5 rounded bg-[#8B6A3E] hover:bg-[#755735] text-white transition-colors ${cinzel.className}`}
          >
            <Shield size={14} className="md:hidden" />
            <span className="hidden md:inline text-[11px]">Moksha Seva</span>
          </Link>

          <div className="hidden md:block w-px h-3 bg-white/20"></div>

          {/* Mortal Records */}

          <Link
            href="/login"
            className={`flex items-center justify-center w-7 h-7 md:w-auto md:h-auto md:px-1.5 md:py-0.5 rounded bg-[#8B6A3E] hover:bg-[#755735] text-white transition-colors ${cinzel.className}`}
          >
            <Shield size={14} className="md:hidden" />
            <span className="hidden md:inline text-[11px]">Mortal Records</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
