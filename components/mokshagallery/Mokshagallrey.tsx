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
} from "react-icons/fi";
import { PiFlowerLotus } from "react-icons/pi";
import { FaFacebook, FaTwitter, FaPinterest, FaLinkedin } from "react-icons/fa";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
  photographer: string;
  likes: number;
  date: string;
  height: number;
}

function MokshaGallery() {
  const [images] = useState<GalleryImage[]>([
    {
      id: 1,
      src: "/assets/bodytransport.jpeg",
      alt: "Body Transport Service",
      category: "services",
      title: "Dignified Body Transport",
      description:
        "Respectful and compassionate body transport services with trained professionals",
      photographer: "Moksha Voyage Team",
      likes: 189,
      date: "2024",
      height: 420,
    },
    {
      id: 2,
      src: "/assets/funeraldecoration.jpeg",
      alt: "Funeral Decoration",
      category: "services",
      title: "Traditional Funeral Decoration",
      description:
        "Beautiful floral arrangements and traditional decor for funeral ceremonies",
      photographer: "Moksha Voyage Team",
      likes: 234,
      date: "2024",
      height: 380,
    },
    {
      id: 3,
      src: "/assets/normalharse.jpeg",
      alt: "Hearse Van Service",
      category: "services",
      title: "Hearse Van Transport",
      description: "Well-maintained hearse vans for respectful transportation",
      photographer: "Moksha Voyage Team",
      likes: 156,
      date: "2024",
      height: 450,
    },
    {
      id: 4,
      src: "/assets/prayerhall.jpeg",
      alt: "Prayer Hall",
      category: "facilities",
      title: "Sacred Prayer Hall",
      description:
        "Peaceful and serene prayer hall for last rites and ceremonies",
      photographer: "Moksha Voyage Team",
      likes: 312,
      date: "2024",
      height: 400,
    },
    {
      id: 5,
      src: "/assets/callingrelative.jpeg",
      alt: "Calling Relatives",
      category: "support",
      title: "Family Notification Services",
      description:
        "Compassionate assistance in notifying and coordinating with family members",
      photographer: "Moksha Voyage Team",
      likes: 278,
      date: "2024",
      height: 390,
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [columns, setColumns] = useState(4);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  // Distribute images into columns for masonry layout
  const getMasonryColumns = () => {
    const columnHeights = new Array(columns).fill(0);
    const columnImages: GalleryImage[][] = Array.from(
      { length: columns },
      () => [],
    );

    filteredImages.forEach((image) => {
      const shortestColumn = columnHeights.indexOf(Math.min(...columnHeights));
      columnImages[shortestColumn].push(image);
      columnHeights[shortestColumn] += image.height;
    });

    return columnImages;
  };

  const categories = [
    { id: "all", name: "All Services" },
    { id: "services", name: "Funeral Services" },
    { id: "facilities", name: "Facilities" },
    { id: "support", name: "Family Support" },
  ];

  const masonryColumns = getMasonryColumns();

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

          <h1 className="flex items-center text-center justify-center text-4xl md:text-5xl font-light text-[#2C1810] mb-4 tracking-tight">
            Moksha
            <span className="block text-5xl md:text-6xl font-serif text-[#8B6A3E] mt-2">
              Gallery
            </span>
          </h1>

          <p className="text-base text-[#5A3E2B]/70 max-w-2xl mx-auto">
            A glimpse into our compassionate services and sacred facilities
            dedicated to dignified farewells.
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

      {/* Pinterest-style masonry grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div
          ref={containerRef}
          className="grid gap-4"
          style={{
            gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          }}
        >
          {masonryColumns.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-4">
              {column.map((image) => (
                <div
                  key={image.id}
                  className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 bg-white cursor-pointer hover:-translate-y-1"
                  onClick={() => setSelectedImage(image)}
                  style={{
                    height: `${image.height}px`,
                  }}
                >
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes={`(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw`}
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Category tag */}
                    <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="px-2 py-1 bg-[#8B6A3E] text-white rounded-full text-[10px] font-medium shadow-lg">
                        {image.category.charAt(0).toUpperCase() +
                          image.category.slice(1)}
                      </span>
                    </div>

                    {/* Hover overlay with detailed info */}
                    <div className="absolute inset-x-0 bottom-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <div className="space-y-2">
                        {/* Title and description */}
                        <div>
                          <h3 className="text-sm font-serif text-white mb-1 line-clamp-1">
                            {image.title}
                          </h3>
                          <p className="text-white/80 text-[10px] line-clamp-2 mb-2">
                            {image.description}
                          </p>
                        </div>

                        {/* Photographer and likes */}
                        <div className="flex items-center justify-between pt-2 border-t border-white/20">
                          <span className="text-white/70 text-[9px] flex items-center gap-1">
                            <FiUser className="w-2.5 h-2.5" />
                            {image.photographer}
                          </span>
                          <span className="text-white/70 text-[9px] flex items-center gap-1">
                            <FiHeart className="w-2.5 h-2.5" />
                            {image.likes}
                          </span>
                          <span className="text-white/70 text-[9px] flex items-center gap-1">
                            <FiCalendar className="w-2.5 h-2.5" />
                            {image.date}
                          </span>
                        </div>

                        {/* View button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(image);
                          }}
                          className="w-full mt-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-[9px] font-medium py-1.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-1 border border-white/30"
                        >
                          <FiEye className="w-3 h-3" />
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

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

      {/* Enhanced Modal with more information */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 text-gray-700 bg-white/90 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center transition-all shadow-lg hover:shadow-xl"
              aria-label="Close modal"
            >
              <FiX className="w-5 h-5" />
            </button>

            <div className="flex flex-col lg:flex-row h-full">
              {/* Image section */}
              <div className="relative lg:w-3/5 h-[40vh] lg:h-[80vh] bg-black/5">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="60vw"
                  priority
                />
              </div>

              {/* Details section */}
              <div className="lg:w-2/5 p-6 lg:p-8 bg-white overflow-y-auto">
                <div className="space-y-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-[#8B6A3E] text-white rounded-full text-xs font-medium mb-3">
                      {selectedImage.category.charAt(0).toUpperCase() +
                        selectedImage.category.slice(1)}
                    </span>
                    <h2 className="text-2xl lg:text-3xl font-serif text-[#2C1810] mb-2">
                      {selectedImage.title}
                    </h2>
                    <p className="text-[#5A3E2B]/70 text-sm">
                      {selectedImage.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-[#F5E9D9]">
                    <div>
                      <p className="text-[10px] text-[#5A3E2B]/60 mb-1">
                        Photographer
                      </p>
                      <p className="text-sm font-medium text-[#2C1810]">
                        {selectedImage.photographer}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] text-[#5A3E2B]/60 mb-1">Year</p>
                      <p className="text-sm font-medium text-[#2C1810]">
                        {selectedImage.date}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] text-[#5A3E2B]/60 mb-1">
                        Likes
                      </p>
                      <p className="text-sm font-medium text-[#2C1810] flex items-center gap-1">
                        <FiHeart className="w-4 h-4 text-red-500" />
                        {selectedImage.likes.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] text-[#5A3E2B]/60 mb-1">
                        Category
                      </p>
                      <p className="text-sm font-medium text-[#2C1810]">
                        {selectedImage.category}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-serif text-[#2C1810] mb-3">
                      Share this image
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
