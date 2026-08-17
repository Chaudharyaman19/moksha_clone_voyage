"use client";
import React, { useState, useEffect, useRef } from "react";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import Image from "next/image";
import {
  FiHeart,
  FiUser,
  FiCalendar,
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

const galleryImageSources = [

  "/assets/how-we-help/five.png",
  "/assets/how-we-help/four.png",
  "/assets/how-we-help/one.png",
  "/assets/how-we-help/pandit.png",
  "/assets/how-we-help/prayer.png",
  "/assets/how-we-help/samagri.png",
  "/assets/how-we-help/three.png",
  "/assets/how-we-help/two.png",
  "/assets/serving/community-outreach.png",
  "/assets/serving/counseling-support.png",
  "/assets/serving/document-assistance.png",
  "/assets/serving/emergency-transport.png",
  "/assets/serving/food-essentials.png",
  "/assets/serving/hospital-support.png",
  "/assets/serving/on-ground-support.png",
  "/assets/serving/rural-remote-reach.png",
  "/assets/about-reference/cremation_ritual_new.png",
  "/assets/about-reference/family_support_new.png",
  "/assets/about-reference/gaya.png",
  "/assets/about-reference/haridwar.png",
  "/assets/about-reference/hero-priest-ghat.png",

  "/assets/about-reference/location-gaya.png",
  "/assets/about-reference/location-haridwar.png",
  "/assets/about-reference/location-nashik.png",
  "/assets/about-reference/location-rishikesh.png",
  "/assets/about-reference/location-varanasi.png",

  "/assets/about-reference/nasik.png",
  "/assets/about-reference/pandit_ji_new.png",
  "/assets/about-reference/rishikesh.png",
  "/assets/about-reference/story-evening-ghat.png",
  "/assets/about-reference/story-ghat-temple.png",
  "/assets/about-reference/story-main.png",
  "/assets/about-reference/story-ritual-items.png",
  "/assets/about-reference/tehrvi_feast.png",
  "/assets/about-reference/testimonial-image.png",
  "/assets/about-reference/varanasi.png",
  "/gallary/g1.png",
  "/gallary/g2.png",
  "/gallary/g3.png",
  "/gallary/g4.png",
  "/gallary/g6.png",
  "/gallary/gg5.png",
  "/hero-images/1.png",
  "/hero-images/2.png",
  "/hero-images/3.png",
  "/hero-images/4.png",
  "/hero-images/5.png",
  "/hero-images/6.png",
  "/hero-images/7.png",
  "/hero-images/8.png",
  "/hero-images/9.png",
];

const toOptimizedGallerySrc = (src: string) =>
  `/assets/route-optimized/gallery-${src
    .replace(/^\//, "")
    .replace(/\.[^.]+$/, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase()}.webp`;

const titleCase = (value: string) =>
  value
    .replace(/\.[^/.]+$/, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

const getImageTitle = (src: string) => {
  const fileName = src.split("/").pop() ?? "Gallery Image";
  return titleCase(fileName);
};

const getImageCategory = (src: string) => {
  const parts = src.split("/").filter(Boolean);
  const folder =
    parts[0] === "assets" && parts.length > 2
      ? parts[1]
      : parts[0] ?? "gallery";
  return titleCase(folder);
};

const galleryImages: GalleryImage[] = galleryImageSources.map((src, index) => ({
  id: index + 1,
  src: toOptimizedGallerySrc(src),
  alt: getImageTitle(src),
  category: getImageCategory(src),
  title: getImageTitle(src),
  description: "Moksha gallery image from our local asset collection.",
  photographer: "Moksha Sewa Team",
  likes: 120 + ((index * 37) % 280),
  date: "2026",
  height: [340, 390, 430, 370, 460, 410][index % 6],
}));

function MokshaGallery() {
  const images = galleryImages;

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
    { id: "all", name: `All Images (${images.length})` },
  ];

  const masonryColumns = getMasonryColumns();

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

          <h1 className="flex items-center text-center justify-center text-4xl md:text-5xl font-light text-[#2C1810] mb-2 tracking-tight">
            Moksha
            <span className="block text-5xl md:text-6xl font-serif text-[#8B6A3E] mt-1">
              Gallery
            </span>
          </h1>

          <p className="text-base text-[#5A3E2B]/70 max-w-2xl mx-auto leading-relaxed">
            A glimpse into our compassionate services and sacred facilities
            dedicated to dignified farewells.
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
              className={`px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-300 ${
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
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 300px"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Category tag */}
                    <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="px-0 py-1 bg-[#8B6A3E] text-white rounded-full text-[14px] font-medium shadow-lg">
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
                          <p className="text-white/80 text-[14px] line-clamp-2 mb-2">
                            {image.description}
                          </p>
                        </div>

                        {/* Photographer and likes */}
                        <div className="flex items-center justify-between pt-2 border-t border-white/20">
                          <span className="text-white/70 text-[14px] flex items-center gap-1">
                            <FiUser className="w-2.5 h-2.5" />
                            {image.photographer}
                          </span>
                          <span className="text-white/70 text-[14px] flex items-center gap-1">
                            <FiHeart className="w-2.5 h-2.5" />
                            {image.likes}
                          </span>
                          <span className="text-white/70 text-[14px] flex items-center gap-1">
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
                          className="w-full mt-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-[14px] font-medium py-1.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-1 border border-white/30"
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
                    <span className="inline-block px-3 py-1 bg-[#8B6A3E] text-white rounded-full text-[14px] font-medium mb-3">
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
                      <p className="text-[14px] text-[#5A3E2B]/60 mb-1">
                        Photographer
                      </p>
                      <p className="text-sm font-medium text-[#2C1810]">
                        {selectedImage.photographer}
                      </p>
                    </div>
                    <div>
                      <p className="text-[14px] text-[#5A3E2B]/60 mb-1">Year</p>
                      <p className="text-sm font-medium text-[#2C1810]">
                        {selectedImage.date}
                      </p>
                    </div>
                    <div>
                      <p className="text-[14px] text-[#5A3E2B]/60 mb-1">
                        Likes
                      </p>
                      <p className="text-sm font-medium text-[#2C1810] flex items-center gap-1">
                        <FiHeart className="w-4 h-4 text-red-500" />
                        {selectedImage.likes.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-[14px] text-[#5A3E2B]/60 mb-1">
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
