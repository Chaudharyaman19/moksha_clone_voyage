"use client";
import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import {
  FiUser,
  FiCalendar,
  FiDownload,
  FiX,
  FiPlay,
  FiClock,
  FiLoader,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { PiFlowerLotus } from "react-icons/pi";
import { publicGalleryApi } from "@/lib/galleryApi";

/* ------------------------------------------------------------------ *
 * Types
 * ------------------------------------------------------------------ */

interface GalleryVideo {
  id: string | number;
  src: string;
  poster?: string;
  alt: string;
  category: string;
  title: string;
  description: string;
  videographer: string;
  likes: number;
  date: string;
  height: number;
  duration?: string;
}

/* ------------------------------------------------------------------ *
 * Design tokens — single source of truth for the palette
 * ------------------------------------------------------------------ */

const T = {
  ink: "#2C1810", // headings
  bark: "#5A3E2B", // body
  brass: "#8B6A3E", // primary accent
  marigold: "#C9873A", // secondary accent, used sparingly
  sand: "#E7D5C2", // borders
  shell: "#F5E9D9", // tinted surface
  cream: "#FAF7F2", // page base
};

/* ------------------------------------------------------------------ *
 * Fallback data
 * ------------------------------------------------------------------ */

const fallbackVideos: GalleryVideo[] = [
  {
    id: 1,
    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    poster: "/assets/route-optimized/video-body-transport.webp",
    alt: "Body Transport Service",
    category: "services",
    title: "Dignified Body Transport Service",
    description:
      "Respectful and compassionate body transport services with trained professionals handling all logistics with care.",
    videographer: "Moksha Sewa Team",
    likes: 234,
    date: "2024",
    height: 380,
    duration: "2:45",
  },
  {
    id: 2,
    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    poster: "/assets/route-optimized/video-funeral-decoration.webp",
    alt: "Funeral Decoration",
    category: "services",
    title: "Traditional Funeral Decoration",
    description:
      "Beautiful floral arrangements and traditional decor for funeral ceremonies, creating a serene and sacred atmosphere.",
    videographer: "Moksha Sewa Team",
    likes: 567,
    date: "2024",
    height: 520,
    duration: "3:30",
  },
  {
    id: 3,
    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    poster: "/assets/route-optimized/video-hearse.webp",
    alt: "Hearse Van Service",
    category: "services",
    title: "Hearse Van Transport",
    description:
      "Well-maintained hearse vans for respectful transportation, ensuring dignity throughout the journey.",
    videographer: "Moksha Sewa Team",
    likes: 189,
    date: "2024",
    height: 420,
    duration: "2:15",
  },
  {
    id: 4,
    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    poster: "/assets/route-optimized/video-prayer-hall.webp",
    alt: "Prayer Hall",
    category: "facilities",
    title: "Sacred Prayer Hall",
    description:
      "Peaceful and serene prayer hall for last rites and ceremonies, accommodating families with comfort and dignity.",
    videographer: "Moksha Sewa Team",
    likes: 892,
    date: "2024",
    height: 480,
    duration: "4:20",
  },
  {
    id: 5,
    src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    poster: "/assets/route-optimized/video-calling-relative.webp",
    alt: "Calling Relatives",
    category: "support",
    title: "Family Notification Services",
    description:
      "Compassionate assistance in notifying and coordinating with family members during difficult times.",
    videographer: "Moksha Sewa Team",
    likes: 445,
    date: "2024",
    height: 350,
    duration: "3:45",
  },
];

/* ------------------------------------------------------------------ *
 * Helpers
 * ------------------------------------------------------------------ */

const clamp = (n: number, min: number, max: number) =>
  Math.min(max, Math.max(min, n));

/**
 * Turn the authored `height` hint into a real CSS aspect-ratio (w / h).
 * The old masonry summed `height` values while the cards rendered at their
 * intrinsic video height, so the columns never actually balanced.
 * Locking an aspect-ratio makes the packing math true.
 */
const aspectFor = (height: number, columns: number) => {
  if (columns === 1) return 3 / 2; // single column reads better as landscape
  return clamp(430 / height, 0.66, 1.45);
};

const formatDuration = (seconds: number) => {
  if (!Number.isFinite(seconds) || seconds <= 0) return "";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
};

const titleCase = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);

const slugify = (value: string) =>
  value
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();

/* ------------------------------------------------------------------ *
 * Card
 * ------------------------------------------------------------------ */

interface VideoCardProps {
  video: GalleryVideo;
  aspect: number;
  eager: boolean;
  onOpen: (video: GalleryVideo, trigger: HTMLElement) => void;
}

function VideoCard({ video, aspect, eager, onOpen }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [duration, setDuration] = useState(video.duration ?? "");
  const [previewing, setPreviewing] = useState(false);
  const canPreview = useRef(false);

  useEffect(() => {
    canPreview.current =
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const startPreview = useCallback(() => {
    const el = videoRef.current;
    if (!el || !canPreview.current) return;
    el.play()
      .then(() => setPreviewing(true))
      .catch(() => setPreviewing(false));
  }, []);

  const stopPreview = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;
    el.pause();
    el.currentTime = 0;
    setPreviewing(false);
  }, []);

  useEffect(() => stopPreview, [stopPreview]);

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={() => onOpen(video, buttonRef.current as HTMLElement)}
      onMouseEnter={startPreview}
      onMouseLeave={stopPreview}
      onFocus={startPreview}
      onBlur={stopPreview}
      aria-label={`Watch ${video.title}`}
      className="ms-card group relative block w-full overflow-hidden rounded-[18px] bg-[#151011] text-left ring-1 ring-black/5 outline-none transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-[3px] hover:shadow-[0_22px_45px_-24px_rgba(44,24,16,0.65)] focus-visible:ring-2 focus-visible:ring-[#C9873A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F2] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      style={{ aspectRatio: aspect }}
    >
      <video
        ref={videoRef}
        src={video.src}
        poster={video.poster}
        preload={eager ? "metadata" : "none"}
        muted
        loop
        playsInline
        tabIndex={-1}
        aria-hidden="true"
        onLoadedMetadata={(event) => {
          if (video.duration) return;
          setDuration(formatDuration(event.currentTarget.duration));
        }}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />

      {/* Legibility scrim — always on, deepens on hover */}
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#150D08]/90 via-[#150D08]/25 to-[#150D08]/10 transition-opacity duration-500 group-hover:from-[#150D08]/95" />

      {/* Top rail: category + duration */}
      <span className="pointer-events-none absolute inset-x-3 top-3 flex items-start justify-between gap-2">
        <span className="rounded-full border border-white/20 bg-white/12 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur-md">
          {titleCase(video.category)}
        </span>
        {duration && (
          <span className="flex items-center gap-1 rounded-full bg-[#150D08]/65 px-2 py-1 text-[11px] font-medium tabular-nums text-white/90 backdrop-blur-md">
            <FiClock className="h-3 w-3 text-[#C9873A]" aria-hidden="true" />
            {duration}
          </span>
        )}
      </span>

      {/* Signature: the lotus ring — a lotus at rest, a play mark on intent */}
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span
          className={`ms-ring relative grid h-14 w-14 place-items-center rounded-full border border-white/45 bg-white/10 backdrop-blur-md transition-all duration-500 ease-out sm:h-16 sm:w-16 ${previewing
              ? "scale-90 opacity-0"
              : "opacity-100 group-hover:scale-105 group-hover:border-[#C9873A]/80 group-hover:bg-[#8B6A3E]/60"
            } motion-reduce:transition-none`}
        >
          <PiFlowerLotus className="absolute h-6 w-6 text-white/85 transition-all duration-300 group-hover:scale-50 group-hover:opacity-0 sm:h-7 sm:w-7 motion-reduce:transition-none" />
          <FiPlay className="absolute ml-0.5 h-5 w-5 scale-50 text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 sm:h-6 sm:w-6 motion-reduce:transition-none" />
        </span>
      </span>

      {/* Caption block */}
      <span className="absolute inset-x-0 bottom-0 block p-3 sm:p-4">
        <span className="block font-serif text-[15px] leading-snug text-white sm:text-base">
          <span className="ms-clamp-2 block">{video.title}</span>
        </span>

        <span className="mt-1.5 hidden text-[13px] leading-relaxed text-white/70 sm:block">
          <span className="ms-clamp-2 block">{video.description}</span>
        </span>

        <span className="mt-2.5 flex items-center gap-3 border-t border-white/15 pt-2.5 text-[11px] tracking-wide text-white/65">
          <span className="flex min-w-0 items-center gap-1.5">
            <FiUser className="h-3 w-3 shrink-0" aria-hidden="true" />
            <span className="truncate">{video.videographer}</span>
          </span>
          <span className="ml-auto flex shrink-0 items-center gap-1.5 tabular-nums">
            <FiCalendar className="h-3 w-3" aria-hidden="true" />
            {video.date}
          </span>
        </span>
      </span>
    </button>
  );
}

/* ------------------------------------------------------------------ *
 * Skeleton
 * ------------------------------------------------------------------ */

function CardSkeleton({ aspect }: { aspect: number }) {
  return (
    <div
      className="ms-shimmer w-full rounded-[18px] ring-1 ring-[#E7D5C2]/70"
      style={{ aspectRatio: aspect }}
      aria-hidden="true"
    />
  );
}

/* ------------------------------------------------------------------ *
 * Page
 * ------------------------------------------------------------------ */

function MokshaGallery() {
  const [managedVideos, setManagedVideos] = useState<GalleryVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedVideo, setSelectedVideo] = useState<GalleryVideo | null>(null);
  const [columns, setColumns] = useState(4);
  const [downloading, setDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState("");

  const loadMoreRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLElement | null>(null);
  const modalPanelRef = useRef<HTMLDivElement>(null);

  const videos = managedVideos.length > 0 ? managedVideos : fallbackVideos;

  /* ---------- responsive column count ---------- */
  useEffect(() => {
    const updateColumns = () => {
      const w = window.innerWidth;
      if (w < 640) setColumns(1);
      else if (w < 1024) setColumns(2);
      else if (w < 1440) setColumns(3);
      else setColumns(4);
    };
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  /* ---------- fetch managed videos ---------- */
  useEffect(() => {
    let alive = true;
    publicGalleryApi
      .list("video")
      .then((items) => {
        if (!alive) return;
        setManagedVideos(
          items.map((item, index) => ({
            id: item._id,
            src: item.url,
            poster: item.thumbnailUrl,
            alt: item.alt || item.caption || "Moksha Sewa gallery video",
            category: item.category || "services",
            title: item.caption || item.alt,
            description: item.description || "Moksha Sewa video gallery",
            videographer: item.credit || "Moksha Sewa Team",
            likes: 0,
            date: new Date(item.createdAt).getFullYear().toString(),
            height: [380, 470, 410, 520][index % 4],
          })),
        );
      })
      .catch(() => {
        if (alive) setManagedVideos([]);
      })
      .finally(() => {
        if (alive) setLoading(false);
      });
    return () => {
      alive = false;
    };
  }, []);

  /* ---------- filtering ---------- */
  const allFilteredVideos = useMemo(
    () =>
      selectedCategory === "all"
        ? videos
        : videos.filter((vid) => vid.category === selectedCategory),
    [videos, selectedCategory],
  );

  const filteredVideos = useMemo(
    () => allFilteredVideos.slice(0, visibleCount),
    [allFilteredVideos, visibleCount],
  );

  useEffect(() => {
    setVisibleCount(12);
  }, [selectedCategory, managedVideos]);

  /* ---------- infinite scroll ---------- */
  useEffect(() => {
    const node = loadMoreRef.current;
    if (!node || visibleCount >= allFilteredVideos.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisibleCount((count) =>
            Math.min(count + 8, allFilteredVideos.length),
          );
        }
      },
      { rootMargin: "600px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [visibleCount, allFilteredVideos.length]);

  /* ---------- masonry packing (now using the real aspect ratio) ---------- */
  const masonryColumns = useMemo(() => {
    const heights = new Array(columns).fill(0);
    const buckets: GalleryVideo[][] = Array.from({ length: columns }, () => []);
    filteredVideos.forEach((video) => {
      const shortest = heights.indexOf(Math.min(...heights));
      buckets[shortest].push(video);
      heights[shortest] += 1 / aspectFor(video.height, columns);
    });
    return buckets;
  }, [filteredVideos, columns]);

  /* ---------- categories with real counts ---------- */
  const categories = useMemo(() => {
    const seen = Array.from(new Set(videos.map((v) => v.category)));
    return [
      { id: "all", name: "All videos", count: videos.length },
      ...seen.map((category) => ({
        id: category,
        name: titleCase(category),
        count: videos.filter((v) => v.category === category).length,
      })),
    ];
  }, [videos]);

  /* ---------- modal open / close ---------- */
  const openVideo = useCallback((video: GalleryVideo, trigger: HTMLElement) => {
    lastTriggerRef.current = trigger;
    setDownloadError("");
    setSelectedVideo(video);
  }, []);

  const closeVideo = useCallback(() => {
    setSelectedVideo(null);
    lastTriggerRef.current?.focus();
  }, []);

  const stepVideo = useCallback(
    (delta: number) => {
      if (!selectedVideo) return;
      const index = allFilteredVideos.findIndex(
        (v) => v.id === selectedVideo.id,
      );
      if (index === -1) return;
      const next =
        (index + delta + allFilteredVideos.length) % allFilteredVideos.length;
      setDownloadError("");
      setSelectedVideo(allFilteredVideos[next]);
    },
    [selectedVideo, allFilteredVideos],
  );

  useEffect(() => {
    document.body.style.overflow = selectedVideo ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedVideo]);

  useEffect(() => {
    if (!selectedVideo) return;
    closeButtonRef.current?.focus();
  }, [selectedVideo]);

  useEffect(() => {
    if (!selectedVideo) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeVideo();
        return;
      }
      if (event.key === "ArrowRight") stepVideo(1);
      if (event.key === "ArrowLeft") stepVideo(-1);
      if (event.key === "Tab") {
        const panel = modalPanelRef.current;
        if (!panel) return;
        const focusable = panel.querySelectorAll<HTMLElement>(
          'button, [href], video[controls], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedVideo, closeVideo, stepVideo]);

  /* ---------- download ---------- */
  const downloadSelectedVideo = async () => {
    if (!selectedVideo || downloading) return;
    setDownloading(true);
    setDownloadError("");
    try {
      const response = await fetch(selectedVideo.src);
      if (!response.ok) throw new Error("Download failed");
      const blob = await response.blob();
      if (typeof selectedVideo.id === "string") {
        await publicGalleryApi.registerDownload(selectedVideo.id);
      }
      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = `${slugify(selectedVideo.title) || "moksha-sewa-video"
        }.${blob.type.split("/")[1] || "mp4"}`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(objectUrl);
    } catch {
      setDownloadError(
        "The file did not reach your device. Check your connection and start the download again.",
      );
    } finally {
      setDownloading(false);
    }
  };

  const activeIndex = selectedVideo
    ? allFilteredVideos.findIndex((v) => v.id === selectedVideo.id)
    : -1;

  /* ------------------------------------------------------------------ */

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C1810] antialiased">
      <style>{`
        .ms-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .ms-rail {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .ms-rail::-webkit-scrollbar { display: none; }
        .ms-shimmer {
          background: linear-gradient(100deg, ${T.shell} 20%, #FFFFFF 40%, ${T.shell} 60%);
          background-size: 220% 100%;
          animation: ms-slide 1.6s ease-in-out infinite;
        }
        @keyframes ms-slide {
          0%   { background-position: 140% 0; }
          100% { background-position: -40% 0; }
        }
        .ms-weave {
          background-image:
            repeating-linear-gradient(
              -45deg,
              rgba(139,106,62,0.055) 0px,
              rgba(139,106,62,0.055) 1px,
              transparent 1px,
              transparent 9px
            );
        }
        @media (prefers-reduced-motion: reduce) {
          .ms-shimmer { animation: none; }
        }
      `}</style>

      <Topbar />
      <Navbar />

      {/* ============================ HERO ============================ */}
      <header className="relative overflow-hidden border-b border-[#E7D5C2]/70">
        <div className="ms-weave absolute inset-0" aria-hidden="true" />
        <div
          className="absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-[#C9873A]/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-48 -left-24 h-[420px] w-[420px] rounded-full bg-[#8B6A3E]/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-5 pb-6 pt-24 sm:px-8 sm:pb-8 sm:pt-28 lg:pb-10 lg:pt-32 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#8B6A3E]/15 bg-white/70 px-3 py-1.5 backdrop-blur-sm">
            <PiFlowerLotus
              className="h-3.5 w-3.5 text-[#C9873A]"
              aria-hidden="true"
            />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8B6A3E]">
              Visual stories
            </span>
          </div>

     <h1 className="mt-4 font-serif text-[clamp(2.4rem,9vw,4.6rem)] font-normal leading-[0.95] tracking-[-0.02em] text-[#2C1810]">
  Moksha{" "}
  <span className="text-[#8B6A3E]">
    Video Gallery
  </span>
</h1>

          <p className="mt-4 mx-auto max-w-xl text-[15px] leading-relaxed text-[#5A3E2B]/80 sm:text-base">
            Every service we run, recorded as it happens. Watch how the
            transport, the rituals and the family support are actually carried
            out before you call us.
          </p>

          {/* Fact rail — the counts are the real information here */}
          <dl className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-[#E7D5C2] pt-6">
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8B6A3E]/70">
                Recordings
              </dt>
              <dd className="mt-1 font-serif text-2xl tabular-nums text-[#2C1810]">
                {videos.length}
              </dd>
            </div>
            <div className="h-9 w-px bg-[#E7D5C2]" aria-hidden="true" />
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8B6A3E]/70">
                Categories
              </dt>
              <dd className="mt-1 font-serif text-2xl tabular-nums text-[#2C1810]">
                {categories.length - 1}
              </dd>
            </div>
            <div className="h-9 w-px bg-[#E7D5C2]" aria-hidden="true" />
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8B6A3E]/70">
                Availability
              </dt>
              <dd className="mt-1 font-serif text-2xl text-[#2C1810]">24×7</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* ========================== FILTERS =========================== */}
      <nav
        aria-label="Filter videos by category"
        className="border-b border-[#E7D5C2]/70 bg-[#FAF7F2]/85 backdrop-blur-md"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="ms-rail -mx-5 flex snap-x snap-mandatory gap-2 overflow-x-auto px-5 py-3.5 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
            {categories.map((category) => {
              const active = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setSelectedCategory(category.id)}
                  aria-pressed={active}
                  className={`flex shrink-0 snap-start items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-medium transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#C9873A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F2] motion-reduce:transition-none ${active
                      ? "border-[#8B6A3E] bg-[#8B6A3E] text-white shadow-[0_8px_20px_-12px_rgba(139,106,62,0.9)]"
                      : "border-[#E7D5C2] bg-white text-[#5A3E2B] hover:border-[#C9873A]/60 hover:bg-[#F5E9D9]"
                    }`}
                >
                  {active && (
                    <PiFlowerLotus className="h-3.5 w-3.5" aria-hidden="true" />
                  )}
                  {category.name}
                  <span
                    className={`text-[11px] tabular-nums ${active ? "text-white/70" : "text-[#8B6A3E]/70"
                      }`}
                  >
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* =========================== GRID ============================= */}
      <main className="mx-auto max-w-7xl px-5 pb-20 pt-6 sm:px-8 sm:pt-8">
        {loading && managedVideos.length === 0 ? (
          <div
            className="grid gap-4 sm:gap-5"
            style={{
              gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
            }}
            aria-busy="true"
            aria-label="Loading videos"
          >
            {Array.from({ length: columns }).map((_, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-4 sm:gap-5">
                {[0.9, 1.3, 1.05].map((aspect, i) => (
                  <CardSkeleton key={i} aspect={columns === 1 ? 1.5 : aspect} />
                ))}
              </div>
            ))}
          </div>
        ) : filteredVideos.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-[#E7D5C2] bg-white/60 px-6 py-16 text-center">
            <PiFlowerLotus
              className="mx-auto h-8 w-8 text-[#C9873A]/60"
              aria-hidden="true"
            />
            <p className="mt-4 font-serif text-xl text-[#2C1810]">
              Nothing filed under {titleCase(selectedCategory)} yet
            </p>
            <p className="mx-auto mt-2 max-w-sm text-sm text-[#5A3E2B]/70">
              New recordings are added as services are completed. Browse the
              full gallery in the meantime.
            </p>
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className="mt-6 rounded-full bg-[#8B6A3E] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#5A3E2B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9873A] focus-visible:ring-offset-2"
            >
              Show all videos
            </button>
          </div>
        ) : (
          <div
            className="grid gap-4 sm:gap-5"
            style={{
              gridTemplateColumns: `repeat(${Math.min(
                columns,
                filteredVideos.length,
              )}, minmax(0, 1fr))`,
            }}
          >
            {masonryColumns.map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-4 sm:gap-5">
                {column.map((video, i) => (
                  <VideoCard
                    key={video.id}
                    video={video}
                    aspect={aspectFor(video.height, columns)}
                    eager={i < 2}
                    onOpen={openVideo}
                  />
                ))}
              </div>
            ))}
          </div>
        )}

        {visibleCount < allFilteredVideos.length && (
          <p className="mt-10 flex items-center justify-center gap-2 text-[13px] text-[#5A3E2B]/60">
            <FiLoader className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />
            Loading more videos
          </p>
        )}

        <div ref={loadMoreRef} className="h-px" aria-hidden="true" />
      </main>

      {/* =========================== MODAL ============================ */}
      {selectedVideo && (
        <div
          className="gallery-modal-overlay fixed inset-0 z-[100] flex items-center justify-center bg-[#150D08]/92 p-0 backdrop-blur-sm sm:p-4"
          onClick={closeVideo}
        >
          <div
            ref={modalPanelRef}
            role="dialog"
            aria-modal="true"
            aria-label={selectedVideo.title}
            className="gallery-modal-panel relative flex h-[100dvh] w-full max-w-6xl flex-col overflow-hidden bg-white shadow-2xl ring-1 ring-black/10 sm:h-[92dvh] sm:rounded-2xl lg:flex-row"
            onClick={(event) => event.stopPropagation()}
          >
            {/* ---- Video pane ---- */}
            <div className="relative shrink-0 bg-black lg:h-full lg:w-[62%]">
              <video
                key={String(selectedVideo.id)}
                src={selectedVideo.src}
                poster={selectedVideo.poster}
                className="h-[38dvh] w-full object-contain sm:h-[45dvh] lg:h-full"
                controls
                autoPlay
                muted
                playsInline
              />

              {allFilteredVideos.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => stepVideo(-1)}
                    aria-label="Previous video"
                    className="absolute left-2 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/45 text-white backdrop-blur-md transition hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9873A] sm:left-3"
                  >
                    <FiChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => stepVideo(1)}
                    aria-label="Next video"
                    className="absolute right-2 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/45 text-white backdrop-blur-md transition hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9873A] sm:right-3"
                  >
                    <FiChevronRight className="h-5 w-5" />
                  </button>
                  <span className="pointer-events-none absolute bottom-14 left-1/2 -translate-x-1/2 rounded-full bg-black/55 px-3 py-1 text-[11px] tabular-nums text-white/80 backdrop-blur-md lg:bottom-4">
                    {activeIndex + 1} / {allFilteredVideos.length}
                  </span>
                </>
              )}
            </div>

            {/* ---- Details pane ---- */}
            <div
              data-lenis-prevent
              className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain bg-gradient-to-b from-white to-[#FBF8F3]"
            >
              <div className="flex items-start justify-between gap-3 border-b border-[#F1E4D2] px-5 py-4 sm:px-7">
                <span className="mt-1 rounded-full border border-[#8B6A3E]/20 bg-[#F5E9D9] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8B6A3E]">
                  {titleCase(selectedVideo.category)}
                </span>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closeVideo}
                  aria-label="Close video"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#E7D5C2] bg-white text-[#5A3E2B] transition hover:border-[#C9873A] hover:text-[#2C1810] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9873A]"
                >
                  <FiX className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 px-5 py-6 sm:px-7">
                <h2 className="font-serif text-[clamp(1.35rem,4vw,2rem)] leading-tight text-[#2C1810]">
                  {selectedVideo.title}
                </h2>
                <p className="mt-3 text-[14px] leading-relaxed text-[#5A3E2B]/80">
                  {selectedVideo.description}
                </p>

                <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5 border-y border-[#F1E4D2] py-5 sm:grid-cols-3">
                  <div>
                    <dt className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8B6A3E]/70">
                      <FiUser className="h-3 w-3" aria-hidden="true" />
                      Videographer
                    </dt>
                    <dd className="mt-1.5 text-[14px] font-medium text-[#2C1810]">
                      {selectedVideo.videographer}
                    </dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8B6A3E]/70">
                      <FiCalendar className="h-3 w-3" aria-hidden="true" />
                      Year
                    </dt>
                    <dd className="mt-1.5 text-[14px] font-medium tabular-nums text-[#2C1810]">
                      {selectedVideo.date}
                    </dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8B6A3E]/70">
                      <FiClock className="h-3 w-3" aria-hidden="true" />
                      Duration
                    </dt>
                    <dd className="mt-1.5 text-[14px] font-medium tabular-nums text-[#2C1810]">
                      {selectedVideo.duration || "—"}
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Sticky action footer so the button is always reachable */}
              <div className="sticky bottom-0 border-t border-[#F1E4D2] bg-white/95 px-5 py-4 backdrop-blur-md sm:px-7">
                {downloadError && (
                  <p
                    role="alert"
                    className="mb-3 rounded-lg bg-red-50 px-3 py-2 text-[13px] leading-snug text-red-700"
                  >
                    {downloadError}
                  </p>
                )}
                <button
                  type="button"
                  onClick={downloadSelectedVideo}
                  disabled={downloading}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#8B6A3E] py-3.5 text-sm font-medium text-white shadow-[0_10px_24px_-14px_rgba(139,106,62,1)] transition-colors hover:bg-[#5A3E2B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9873A] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {downloading ? (
                    <FiLoader className="h-4 w-4 animate-spin" />
                  ) : (
                    <FiDownload className="h-4 w-4" />
                  )}
                  {downloading ? "Downloading" : "Download video"}
                </button>
                <p className="mt-2 text-center text-[11px] text-[#5A3E2B]/55">
                  Use arrow keys to move between videos · Esc to close
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default MokshaGallery;