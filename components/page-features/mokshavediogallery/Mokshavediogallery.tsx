"use client";
import React, { useState, useEffect, useRef } from "react";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import {
  FiUser,
  FiCalendar,
  FiDownload,
  FiX,
  FiEye,
  FiPlay,
  FiClock,
  FiLoader,
} from "react-icons/fi";
import { PiFlowerLotus } from "react-icons/pi";
import { publicGalleryApi } from "@/lib/galleryApi";

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
  // Only 5 videos now - one for each unique image
];

function MokshaGallery() {
  const [managedVideos, setManagedVideos] = useState<GalleryVideo[]>([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const videos = managedVideos.length > 0 ? managedVideos : fallbackVideos;

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedVideo, setSelectedVideo] = useState<GalleryVideo | null>(null);
  const [columns, setColumns] = useState(4);
  const [downloading, setDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState("");

  // Update columns based on screen size
  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) {
        setColumns(1);
      } else if (window.innerWidth < 1024) {
        setColumns(2);
      } else if (window.innerWidth < 1280) {
        setColumns(3);
      } else {
        setColumns(4);
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  useEffect(() => {
    publicGalleryApi.list("video").then((items) => setManagedVideos(items.map((item, index) => ({
      id: item._id, src: item.url, poster: item.thumbnailUrl, alt: item.alt || item.caption || "Moksha Sewa gallery video",
      category: item.category || "services", title: item.caption || item.alt,
      description: item.description || "Moksha Sewa video gallery", videographer: item.credit || "Moksha Sewa Team",
      likes: 0, date: new Date(item.createdAt).getFullYear().toString(), height: [380, 440, 410, 470][index % 4],
    })))).catch(() => setManagedVideos([]));
  }, []);

  const allFilteredVideos =
    selectedCategory === "all"
      ? videos
      : videos.filter((vid) => vid.category === selectedCategory);
  const filteredVideos = allFilteredVideos.slice(0, visibleCount);

  useEffect(() => {
    document.body.style.overflow = selectedVideo ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedVideo]);

  useEffect(() => { setVisibleCount(12); }, [selectedCategory, managedVideos]);
  useEffect(() => {
    const node = loadMoreRef.current;
    if (!node || visibleCount >= allFilteredVideos.length) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) setVisibleCount((count) => Math.min(count + 8, allFilteredVideos.length));
    }, { rootMargin: "600px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, [visibleCount, allFilteredVideos.length]);

  const getMasonryColumns = () => {
    const columnHeights = new Array(columns).fill(0);
    const columnVideos: GalleryVideo[][] = Array.from(
      { length: columns },
      () => [],
    );

    filteredVideos.forEach((video) => {
      const shortestColumn = columnHeights.indexOf(Math.min(...columnHeights));
      columnVideos[shortestColumn].push(video);
      columnHeights[shortestColumn] += video.height;
    });

    return columnVideos;
  };

  const categories = [{ id: "all", name: `All Videos (${videos.length})` }, ...Array.from(new Set(videos.map((video) => video.category))).map((category) => ({ id: category, name: category.charAt(0).toUpperCase() + category.slice(1) }))];

  const masonryColumns = getMasonryColumns();

  const downloadSelectedVideo = async () => {
    if (!selectedVideo || downloading) return;
    setDownloading(true);
    setDownloadError("");
    try {
      const response = await fetch(selectedVideo.src);
      if (!response.ok) throw new Error("Download failed");
      const blob = await response.blob();
      if (typeof selectedVideo.id === "string") await publicGalleryApi.registerDownload(selectedVideo.id);
      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = `${selectedVideo.title.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").toLowerCase() || "moksha-sewa-video"}.${blob.type.split("/")[1] || "mp4"}`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(objectUrl);
    } catch {
      setDownloadError("Video could not be downloaded. Please try again.");
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF7F2] to-white">
      <Topbar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-4 md:pt-32 md:pb-5 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#8B6A3E] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#5A3E2B] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#8B6A3E]/5 rounded-full border border-[#8B6A3E]/10 mb-3">
            <PiFlowerLotus className="w-3.5 h-3.5 text-[#8B6A3E]" />
            <span className="text-[14px] tracking-[0.2em] uppercase text-[#8B6A3E]">
              Visual Stories
            </span>
          </div>

          <h1 className="flex flex-col items-center text-center justify-center text-3xl sm:text-4xl md:text-5xl font-light text-[#2C1810] mb-2 tracking-tight">
            Moksha
            <span className="block text-4xl sm:text-5xl md:text-6xl font-serif text-[#8B6A3E] mt-1">
              Video Gallery
            </span>
          </h1>

          <p className="text-base text-[#5A3E2B]/70 max-w-2xl mx-auto leading-relaxed">
            Watch our services in action - respectful, dignified, and
            compassionate care captured on video.
          </p>
        </div>
      </section>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-6 mb-3">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-300 ${selectedCategory === category.id
                  ? "bg-[#8B6A3E] text-white shadow-md"
                  : "bg-white text-[#5A3E2B] border border-[#E7D5C2] hover:bg-[#F5E9D9]"
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        {filteredVideos.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-[#5A3E2B]/60">
              No videos found in this category.
            </p>
          </div>
        ) : (
          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns: `repeat(${Math.min(columns, filteredVideos.length)}, minmax(0, 1fr))`,
            }}
          >
            {masonryColumns.map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-4">
                {column.map((video) => (
                  <div
                    key={video.id}
                    className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 bg-white cursor-pointer hover:-translate-y-1"
                    onClick={() => setSelectedVideo(video)}
                  >
                    <div className="relative w-full overflow-hidden bg-black">
                      <video
                        src={video.src}
                        poster={video.poster}
                        preload="metadata"
                        muted
                        playsInline
                        aria-label={video.alt}
                        className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
                      />

                      {/* Gradient overlay — always visible on mobile (no hover there), reveals on hover from sm+ */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Category tag */}
                      <div className="absolute top-3 left-3 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500">
                        <span className="px-2.5 py-1 bg-[#8B6A3E] text-white rounded-full text-[14px] font-medium shadow-lg">
                          {video.category.charAt(0).toUpperCase() +
                            video.category.slice(1)}
                        </span>
                      </div>

                      {/* Duration badge */}
                      {video.duration && (
                        <div className="absolute top-3 right-3 px-2.5 py-1 bg-black/60 text-white text-[14px] font-medium rounded-full backdrop-blur-sm z-10 flex items-center gap-1">
                          <FiClock className="w-2.5 h-2.5" />
                          {video.duration}
                        </div>
                      )}

                      {/* Play button overlay — always visible on mobile so it's clear these are videos */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#8B6A3E]/80 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/50 transform sm:group-hover:scale-110 transition-transform">
                          <FiPlay className="w-5 h-5 sm:w-6 sm:h-6 text-white ml-1" />
                        </div>
                      </div>

                      {/* Info panel — shown by default on touch devices, hover-reveal on sm+ */}
                      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 transform translate-y-0 sm:translate-y-full sm:group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <div className="space-y-2">
                          <div>
                            <h3 className="text-sm font-serif text-white mb-1 line-clamp-1">
                              {video.title}
                            </h3>
                            <p className="hidden sm:block text-white/80 text-[14px] line-clamp-2 mb-2">
                              {video.description}
                            </p>
                          </div>

                          <div className="flex items-center justify-between pt-2 border-t border-white/20">
                            <span className="text-white/70 text-[14px] flex items-center gap-1">
                              <FiUser className="w-2.5 h-2.5" />
                              {video.videographer}
                            </span>
                            <span className="text-white/70 text-[14px] flex items-center gap-1">
                              <FiCalendar className="w-2.5 h-2.5" />
                              {video.date}
                            </span>
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedVideo(video);
                            }}
                            className="w-full mt-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-[14px] font-medium py-1.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-1 border border-white/30"
                          >
                            <FiEye className="w-3 h-3" />
                            Watch Video
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

      </div>

      <div ref={loadMoreRef} className="h-px" aria-hidden="true" />

      {/* Modal with video player */}
      {selectedVideo && (
        <div
          className="gallery-modal-overlay fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="gallery-modal-panel relative max-w-5xl w-full max-h-[92vh] bg-white rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-20 text-gray-700 bg-white/90 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              aria-label="Close modal"
            >
              <FiX className="w-5 h-5" />
            </button>

            <div className="flex flex-col lg:flex-row h-full">
              {/* Video section */}
              <div className="relative lg:w-3/5 h-[42vh] lg:h-[82vh] bg-black">
                <video
                  key={selectedVideo.id}
                  src={selectedVideo.src}
                  poster={selectedVideo.poster}
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                  playsInline
                />
              </div>

              {/* Details section */}
              <div className="lg:w-2/5 p-6 lg:p-8 bg-gradient-to-b from-white to-[#FBF8F3] overflow-y-auto">
                <div className="space-y-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-[#8B6A3E] text-white rounded-full text-[14px] font-medium mb-3 tracking-wide">
                      {selectedVideo.category.charAt(0).toUpperCase() +
                        selectedVideo.category.slice(1)}
                    </span>
                    <h2 className="text-2xl lg:text-3xl font-serif text-[#2C1810] mb-2 leading-snug">
                      {selectedVideo.title}
                    </h2>
                    <p className="text-[#5A3E2B]/70 text-sm leading-relaxed">
                      {selectedVideo.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-4 border-y border-[#F5E9D9]">
                    <div>
                      <p className="text-[14px] text-[#5A3E2B]/60 mb-1 flex items-center gap-1">
                        <FiUser className="w-3 h-3" /> Videographer
                      </p>
                      <p className="text-sm font-medium text-[#2C1810]">
                        {selectedVideo.videographer}
                      </p>
                    </div>
                    <div>
                      <p className="text-[14px] text-[#5A3E2B]/60 mb-1 flex items-center gap-1">
                        <FiCalendar className="w-3 h-3" /> Year
                      </p>
                      <p className="text-sm font-medium text-[#2C1810]">
                        {selectedVideo.date}
                      </p>
                    </div>
                    <div>
                      <p className="text-[14px] text-[#5A3E2B]/60 mb-1">
                        Duration
                      </p>
                      <p className="text-sm font-medium text-[#2C1810] flex items-center gap-1">
                        <FiClock className="w-4 h-4 text-[#8B6A3E]" />
                        {selectedVideo.duration}
                      </p>
                    </div>
                  </div>

                  {downloadError && <p className="text-[14px] font-medium text-red-600">{downloadError}</p>}
                  <button
                    onClick={downloadSelectedVideo}
                    disabled={downloading}
                    className="w-full py-3 bg-[#8B6A3E] text-white rounded-lg hover:bg-[#5A3E2B] transition-colors duration-200 font-medium text-sm flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-60 shadow-sm hover:shadow-md"
                  >
                    {downloading ? (
                      <FiLoader className="w-4 h-4 animate-spin" />
                    ) : (
                      <FiDownload className="w-4 h-4" />
                    )}
                    {downloading ? "Downloading..." : "Download Video"}
                  </button>
                </div>
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
