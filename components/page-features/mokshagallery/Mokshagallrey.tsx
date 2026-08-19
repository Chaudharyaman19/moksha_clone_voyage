"use client";
import React, { useState, useEffect, useRef } from "react";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import Image from "next/image";
import {
  FiUser,
  FiCalendar,
  FiDownload,
  FiX,
  FiEye,
  FiLoader,
} from "react-icons/fi";
import { PiFlowerLotus } from "react-icons/pi";
import { publicGalleryApi } from "@/lib/galleryApi";

interface GalleryImage {
  id: string | number;
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
  const [managedImages, setManagedImages] = useState<GalleryImage[]>([]);
  const [visibleCount, setVisibleCount] = useState(16);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const images = managedImages.length > 0 ? managedImages : galleryImages;

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [downloading, setDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState("");
  const [columns, setColumns] = useState(4);
  const containerRef = useRef<HTMLDivElement>(null);

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
    publicGalleryApi.list("image").then((items) => {
      setManagedImages(items.map((item, index) => ({
        id: item._id, src: item.url, alt: item.alt || item.caption || "Moksha Sewa gallery image", category: item.category || "Gallery",
        title: item.caption || item.alt, description: item.description || "Moksha Sewa gallery",
        photographer: item.credit || "Moksha Sewa Team", likes: 0,
        date: new Date(item.createdAt).getFullYear().toString(), height: [340, 390, 430, 370][index % 4],
      })));
    }).catch(() => setManagedImages([]));
  }, []);

  const allFilteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);
  const filteredImages = allFilteredImages.slice(0, visibleCount);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedImage]);

  useEffect(() => { setVisibleCount(16); }, [selectedCategory, managedImages]);
  useEffect(() => {
    const node = loadMoreRef.current;
    if (!node || visibleCount >= allFilteredImages.length) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) setVisibleCount((count) => Math.min(count + 12, allFilteredImages.length));
    }, { rootMargin: "500px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, [visibleCount, allFilteredImages.length]);

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

  const categories = [{ id: "all", name: `All Images (${images.length})` }, ...Array.from(new Set(images.map((image) => image.category))).map((category) => ({ id: category, name: category }))];

  const masonryColumns = getMasonryColumns();

  const downloadSelectedImage = async () => {
    if (!selectedImage || downloading) return;
    setDownloading(true);
    setDownloadError("");
    try {
      const response = await fetch(selectedImage.src);
      if (!response.ok) throw new Error("Download failed");
      const blob = await response.blob();
      if (typeof selectedImage.id === "string") await publicGalleryApi.registerDownload(selectedImage.id);
      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = `${selectedImage.title.replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").toLowerCase() || "moksha-sewa-image"}.${blob.type.split("/")[1]?.replace("jpeg", "jpg") || "jpg"}`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(objectUrl);
    } catch {
      setDownloadError("Image could not be downloaded. Please try again.");
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
                >
                  <div className="relative w-full overflow-hidden bg-[#EFE8DD]">
                    {/* Native dimensions preserve portrait, square and ultra-wide uploads without cropping. */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      decoding="async"
                      className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Category tag */}
                    <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="px-2.5 py-1 bg-[#8B6A3E] text-white rounded-full text-[14px] font-medium shadow-lg">
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

                        {/* Photographer and date */}
                        <div className="flex items-center justify-between pt-2 border-t border-white/20">
                          <span className="text-white/70 text-[14px] flex items-center gap-1">
                            <FiUser className="w-2.5 h-2.5" />
                            {image.photographer}
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

        <div ref={loadMoreRef} className="h-px" aria-hidden="true" />

      </div>

      {/* Enhanced Modal with more information */}
      {selectedImage && (
        <div
          className="gallery-modal-overlay fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="gallery-modal-panel relative max-w-5xl w-full max-h-[92vh] bg-white rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 text-gray-700 bg-white/90 hover:bg-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              aria-label="Close modal"
            >
              <FiX className="w-5 h-5" />
            </button>

            <div className="flex flex-col lg:flex-row h-full">
              {/* Image section */}
              <div className="relative lg:w-3/5 h-[42vh] lg:h-[82vh] bg-[#EFE8DD]">
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
              <div className="lg:w-2/5 p-6 lg:p-8 bg-gradient-to-b from-white to-[#FBF8F3] overflow-y-auto">
                <div className="space-y-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-[#8B6A3E] text-white rounded-full text-[14px] font-medium mb-3 tracking-wide">
                      {selectedImage.category.charAt(0).toUpperCase() +
                        selectedImage.category.slice(1)}
                    </span>
                    <h2 className="text-2xl lg:text-3xl font-serif text-[#2C1810] mb-2 leading-snug">
                      {selectedImage.title}
                    </h2>
                    <p className="text-[#5A3E2B]/70 text-sm leading-relaxed">
                      {selectedImage.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-[#F5E9D9]">
                    <div>
                      <p className="text-[14px] text-[#5A3E2B]/60 mb-1 flex items-center gap-1">
                        <FiUser className="w-3 h-3" /> Photographer
                      </p>
                      <p className="text-sm font-medium text-[#2C1810]">
                        {selectedImage.photographer}
                      </p>
                    </div>
                    <div>
                      <p className="text-[14px] text-[#5A3E2B]/60 mb-1 flex items-center gap-1">
                        <FiCalendar className="w-3 h-3" /> Year
                      </p>
                      <p className="text-sm font-medium text-[#2C1810]">
                        {selectedImage.date}
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

                  {downloadError && <p className="text-[14px] font-medium text-red-600">{downloadError}</p>}
                  <button
                    onClick={downloadSelectedImage}
                    disabled={downloading}
                    className="w-full py-3 bg-[#8B6A3E] text-white rounded-lg hover:bg-[#5A3E2B] transition-colors duration-200 font-medium text-sm flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-60 shadow-sm hover:shadow-md"
                  >
                    {downloading ? (
                      <FiLoader className="w-4 h-4 animate-spin" />
                    ) : (
                      <FiDownload className="w-4 h-4" />
                    )}
                    {downloading ? "Downloading..." : "Download High Resolution"}
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
