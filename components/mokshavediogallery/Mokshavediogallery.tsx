"use client";
import React, { useState, useEffect, useRef } from "react";
import Topbar from "@/components/topbar/Topbar";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import {
  FiHeart,
  FiUser,
  FiCalendar,
  FiShare2,
  FiDownload,
  FiX,
  FiEye,
  FiPlay,
  FiClock,
} from "react-icons/fi";
import { PiFlowerLotus } from "react-icons/pi";
import { FaFacebook, FaTwitter, FaPinterest, FaLinkedin } from "react-icons/fa";

interface GalleryVideo {
  id: number;
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

function MokshaGallery() {
  const [videos] = useState<GalleryVideo[]>([
    {
      id: 1,
      src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      poster: "/assets/bodytransport.jpeg",
      alt: "Body Transport Service",
      category: "services",
      title: "Dignified Body Transport Service",
      description:
        "Respectful and compassionate body transport services with trained professionals handling all logistics with care.",
      videographer: "Moksha Voyage Team",
      likes: 234,
      date: "2024",
      height: 380,
      duration: "2:45",
    },
    {
      id: 2,
      src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      poster: "/assets/funeraldecoration.jpeg",
      alt: "Funeral Decoration",
      category: "services",
      title: "Traditional Funeral Decoration",
      description:
        "Beautiful floral arrangements and traditional decor for funeral ceremonies, creating a serene and sacred atmosphere.",
      videographer: "Moksha Voyage Team",
      likes: 567,
      date: "2024",
      height: 520,
      duration: "3:30",
    },
    {
      id: 3,
      src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      poster: "/assets/normalharse.jpeg",
      alt: "Hearse Van Service",
      category: "services",
      title: "Hearse Van Transport",
      description:
        "Well-maintained hearse vans for respectful transportation, ensuring dignity throughout the journey.",
      videographer: "Moksha Voyage Team",
      likes: 189,
      date: "2024",
      height: 420,
      duration: "2:15",
    },
    {
      id: 4,
      src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      poster: "/assets/prayerhall.jpeg",
      alt: "Prayer Hall",
      category: "facilities",
      title: "Sacred Prayer Hall",
      description:
        "Peaceful and serene prayer hall for last rites and ceremonies, accommodating families with comfort and dignity.",
      videographer: "Moksha Voyage Team",
      likes: 892,
      date: "2024",
      height: 480,
      duration: "4:20",
    },
    {
      id: 5,
      src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      poster: "/assets/callingrelative.jpeg",
      alt: "Calling Relatives",
      category: "support",
      title: "Family Notification Services",
      description:
        "Compassionate assistance in notifying and coordinating with family members during difficult times.",
      videographer: "Moksha Voyage Team",
      likes: 445,
      date: "2024",
      height: 350,
      duration: "3:45",
    },
    // Only 5 videos now - one for each unique image
  ]);

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedVideo, setSelectedVideo] = useState<GalleryVideo | null>(null);
  const [columns, setColumns] = useState(4);
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement }>({});

  // Update columns based on screen size
  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) {
        setColumns(2);
      } else if (window.innerWidth < 1024) {
        setColumns(3);
      } else {
        setColumns(4);
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  // Pause all videos when modal opens/closes
  useEffect(() => {
    if (selectedVideo) {
      Object.values(videoRefs.current).forEach((video) => {
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      });
      setPlayingVideoId(null);
    }
  }, [selectedVideo]);

  const filteredVideos =
    selectedCategory === "all"
      ? videos
      : videos.filter((vid) => vid.category === selectedCategory);

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

  const categories = [
    { id: "all", name: "All Videos" },
    { id: "services", name: "Funeral Services" },
    { id: "facilities", name: "Facilities" },
    { id: "support", name: "Family Support" },
  ];

  const masonryColumns = getMasonryColumns();

  const handleVideoMouseEnter = async (videoId: number) => {
    const video = videoRefs.current[videoId];
    if (video && !selectedVideo) {
      try {
        if (playingVideoId && playingVideoId !== videoId) {
          const prevVideo = videoRefs.current[playingVideoId];
          if (prevVideo) {
            prevVideo.pause();
            prevVideo.currentTime = 0;
          }
        }

        await video.play();
        setPlayingVideoId(videoId);
      } catch (error) {
        console.log("Autoplay prevented:", error);
      }
    }
  };

  const handleVideoMouseLeave = (videoId: number) => {
    const video = videoRefs.current[videoId];
    if (video && !selectedVideo) {
      video.pause();
      video.currentTime = 0;
      setPlayingVideoId(null);
    }
  };

  const themeColor = "#8B6A3E";
  const themeColorLight = "#F5E9D9";
  const themeColorDark = "#5A3E2B";

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF7F2] to-white">
      <Topbar />
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#8B6A3E] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#5A3E2B] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#8B6A3E]/5 rounded-full border border-[#8B6A3E]/10 mb-5">
            <PiFlowerLotus className="w-3.5 h-3.5 text-[#8B6A3E]" />
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#8B6A3E]">
              Visual Stories
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-light text-[#2C1810] mb-4 tracking-tight">
            Moksha
            <span className="block text-5xl md:text-6xl font-serif text-[#8B6A3E] mt-2">
              Video Gallery
            </span>
          </h1>

          <p className="text-base text-[#5A3E2B]/70 max-w-2xl mx-auto">
            Watch our services in action - respectful, dignified, and
            compassionate care captured on video.
          </p>
        </div>
      </section>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                selectedCategory === category.id
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
            ref={containerRef}
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
                    onMouseEnter={() => handleVideoMouseEnter(video.id)}
                    onMouseLeave={() => handleVideoMouseLeave(video.id)}
                    style={{
                      height: `${video.height}px`,
                    }}
                  >
                    <div className="relative w-full h-full overflow-hidden">
                      <video
                        ref={(el) => {
                          if (el) videoRefs.current[video.id] = el;
                        }}
                        src={video.src}
                        poster={video.poster}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      />

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Category tag */}
                      <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="px-2 py-1 bg-[#8B6A3E] text-white rounded-full text-[10px] font-medium shadow-lg">
                          {video.category.charAt(0).toUpperCase() +
                            video.category.slice(1)}
                        </span>
                      </div>

                      {/* Duration badge */}
                      {video.duration && (
                        <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 text-white text-[10px] font-medium rounded-full backdrop-blur-sm z-10 flex items-center gap-1">
                          <FiClock className="w-2.5 h-2.5" />
                          {video.duration}
                        </div>
                      )}

                      {/* Play button overlay */}
                      {playingVideoId !== video.id && (
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="w-12 h-12 bg-[#8B6A3E]/80 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/50 transform group-hover:scale-110 transition-transform">
                            <FiPlay className="w-6 h-6 text-white ml-1" />
                          </div>
                        </div>
                      )}

                      {/* Hover overlay with details */}
                      <div className="absolute inset-x-0 bottom-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <div className="space-y-2">
                          <div>
                            <h3 className="text-sm font-serif text-white mb-1 line-clamp-1">
                              {video.title}
                            </h3>
                            <p className="text-white/80 text-[10px] line-clamp-2 mb-2">
                              {video.description}
                            </p>
                          </div>

                          <div className="flex items-center justify-between pt-2 border-t border-white/20">
                            <span className="text-white/70 text-[9px] flex items-center gap-1">
                              <FiUser className="w-2.5 h-2.5" />
                              {video.videographer}
                            </span>
                            <span className="text-white/70 text-[9px] flex items-center gap-1">
                              <FiHeart className="w-2.5 h-2.5" />
                              {video.likes}
                            </span>
                            <span className="text-white/70 text-[9px] flex items-center gap-1">
                              <FiCalendar className="w-2.5 h-2.5" />
                              {video.date}
                            </span>
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedVideo(video);
                            }}
                            className="w-full mt-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-[9px] font-medium py-1.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-1 border border-white/30"
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

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#8B6A3E] text-white rounded-lg text-sm font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <span>View Complete Portfolio</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal with video player */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-20 text-gray-700 bg-white/90 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
              aria-label="Close modal"
            >
              <FiX className="w-5 h-5" />
            </button>

            <div className="flex flex-col lg:flex-row h-full">
              {/* Video section */}
              <div className="relative lg:w-3/5 h-[40vh] lg:h-[80vh] bg-black">
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
              <div className="lg:w-2/5 p-6 lg:p-8 bg-white overflow-y-auto">
                <div className="space-y-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-[#8B6A3E] text-white rounded-full text-xs font-medium mb-3">
                      {selectedVideo.category.charAt(0).toUpperCase() +
                        selectedVideo.category.slice(1)}
                    </span>
                    <h2 className="text-2xl lg:text-3xl font-serif text-[#2C1810] mb-2">
                      {selectedVideo.title}
                    </h2>
                    <p className="text-[#5A3E2B]/70 text-sm">
                      {selectedVideo.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-[#F5E9D9]">
                    <div>
                      <p className="text-[10px] text-[#5A3E2B]/60 mb-1">
                        Videographer
                      </p>
                      <p className="text-sm font-medium text-[#2C1810]">
                        {selectedVideo.videographer}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] text-[#5A3E2B]/60 mb-1">Year</p>
                      <p className="text-sm font-medium text-[#2C1810]">
                        {selectedVideo.date}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] text-[#5A3E2B]/60 mb-1">
                        Duration
                      </p>
                      <p className="text-sm font-medium text-[#2C1810] flex items-center gap-1">
                        <FiClock className="w-4 h-4 text-[#8B6A3E]" />
                        {selectedVideo.duration}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] text-[#5A3E2B]/60 mb-1">
                        Likes
                      </p>
                      <p className="text-sm font-medium text-[#2C1810] flex items-center gap-1">
                        <FiHeart className="w-4 h-4 text-red-500" />
                        {selectedVideo.likes.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-serif text-[#2C1810] mb-3">
                      Share this video
                    </h3>
                    <div className="flex gap-2">
                      {[
                        { icon: FaFacebook, color: "#1877F2" },
                        { icon: FaTwitter, color: "#1DA1F2" },
                        { icon: FaPinterest, color: "#E60023" },
                        { icon: FaLinkedin, color: "#0A66C2" },
                      ].map((social, idx) => {
                        const Icon = social.icon;
                        return (
                          <button
                            key={idx}
                            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#8B6A3E] hover:text-white transition-colors duration-200 flex items-center justify-center text-gray-600"
                            style={{ color: social.color }}
                          >
                            <Icon className="w-5 h-5" />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <button className="w-full py-3 bg-[#8B6A3E] text-white rounded-lg hover:bg-[#5A3E2B] transition-colors duration-200 font-medium text-sm flex items-center justify-center gap-2">
                    <FiDownload className="w-4 h-4" />
                    Download High Resolution
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
