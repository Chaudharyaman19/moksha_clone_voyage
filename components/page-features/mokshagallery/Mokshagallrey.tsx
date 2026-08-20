"use client";
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import Image from "next/image";
import {
  FiUser,
  FiCalendar,
  FiDownload,
  FiX,
  FiMaximize2,
  FiLoader,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { PiFlowerLotus } from "react-icons/pi";
import { publicGalleryApi } from "@/lib/galleryApi";

/* ------------------------------------------------------------------ *
 * Types
 * ------------------------------------------------------------------ */

interface GalleryImage {
  id: string | number;
  src: string;
  fallbackSrc?: string;
  alt: string;
  category: string;
  title: string;
  description: string;
  photographer: string;
  likes: number;
  date: string;
  height: number;
}

/* ------------------------------------------------------------------ *
 * Source list
 * ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ *
 * Copy: folder names are how the codebase is organised, not how a
 * grieving family thinks. Map them to language people recognise.
 * ------------------------------------------------------------------ */

const CATEGORY_LABELS: Record<string, string> = {
  "how-we-help": "How we help",
  serving: "On the ground",
  "about-reference": "Sacred places",
  gallary: "Ceremonies",
  "hero-images": "Moments",
};

const CATEGORY_BLURBS: Record<string, string> = {
  "how-we-help":
    "From the first call to the final rite — the arrangements our team handles for you.",
  serving:
    "Our teams at work: transport, hospital paperwork, essentials and counselling for the family.",
  "about-reference":
    "The ghats and temples where we accompany families for immersion and last rites.",
  gallary: "Ceremonies conducted with full ritual observance and dignity.",
  "hero-images": "Quiet moments from the services we have been trusted with.",
};

/* ------------------------------------------------------------------ *
 * Helpers
 * ------------------------------------------------------------------ */

const clamp = (n: number, min: number, max: number) =>
  Math.min(max, Math.max(min, n));

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
  const fileName = src.split("/").pop() ?? "Gallery image";
  return titleCase(fileName);
};

/** Raw folder key — this stays the stable filter id. */
const getCategoryKey = (src: string) => {
  const parts = src.split("/").filter(Boolean);
  if (parts[0] === "assets" && parts.length > 2) return parts[1];
  return parts[0] ?? "gallery";
};

const labelFor = (key: string) => CATEGORY_LABELS[key] ?? titleCase(key);

const blurbFor = (key: string) =>
  CATEGORY_BLURBS[key] ?? "A moment from the services Moksha Sewa has carried out.";

const slugify = (value: string) =>
  value
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();

/** Placeholder ratio used only until the real image reports its size. */
const hintAspect = (height: number, columns: number) =>
  columns === 1 ? 4 / 3 : clamp(400 / height, 0.72, 1.3);

/* ------------------------------------------------------------------ *
 * Static gallery
 * ------------------------------------------------------------------ */

const galleryImages: GalleryImage[] = galleryImageSources.map((src, index) => {
  const key = getCategoryKey(src);
  return {
    id: index + 1,
    src: toOptimizedGallerySrc(src),
    fallbackSrc: src,
    alt: getImageTitle(src),
    category: key,
    title: getImageTitle(src),
    description: blurbFor(key),
    photographer: "Moksha Sewa Team",
    likes: 120 + ((index * 37) % 280),
    date: "2026",
    height: [340, 390, 430, 370, 460, 410][index % 6],
  };
});

/* ------------------------------------------------------------------ *
 * Card
 * ------------------------------------------------------------------ */

interface ImageCardProps {
  image: GalleryImage;
  aspect: number;
  eager: boolean;
  onOpen: (image: GalleryImage, trigger: HTMLElement) => void;
  onMeasure: (id: string | number, ratio: number) => void;
}

function ImageCard({
  image,
  aspect,
  eager,
  onOpen,
  onMeasure,
}: ImageCardProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [src, setSrc] = useState(image.src);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setSrc(image.src);
  }, [image.src]);

  const measure = useCallback(
    (el: HTMLImageElement | null) => {
      if (!el || !el.naturalWidth || !el.naturalHeight) return;
      setReady(true);
      onMeasure(image.id, el.naturalWidth / el.naturalHeight);
    },
    [image.id, onMeasure],
  );

  // Cached images can finish before React attaches onLoad.
  useEffect(() => {
    if (imgRef.current?.complete) measure(imgRef.current);
  }, [measure, src]);

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={() => onOpen(image, buttonRef.current as HTMLElement)}
      aria-label={`Open ${image.title}`}
      className="ms-card group relative block w-full overflow-hidden rounded-[18px] bg-[#EFE8DD] text-left ring-1 ring-black/5 outline-none transition-[transform,box-shadow] duration-500 ease-out hover:-translate-y-[3px] hover:shadow-[0_22px_45px_-24px_rgba(44,24,16,0.65)] focus-visible:ring-2 focus-visible:ring-[#C9873A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF7F2] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      style={{ aspectRatio: aspect }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src={src}
        alt={image.alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        onLoad={(event) => measure(event.currentTarget)}
        onError={() => {
          if (image.fallbackSrc && src !== image.fallbackSrc) {
            setSrc(image.fallbackSrc);
          }
        }}
        className={`absolute inset-0 h-full w-full object-cover transition-[transform,opacity] duration-[900ms] ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100 ${ready ? "opacity-100" : "opacity-0"
          }`}
      />

      {/* Scrim */}
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#150D08]/88 via-[#150D08]/20 to-[#150D08]/5 transition-opacity duration-500 group-hover:from-[#150D08]/94" />

      {/* Category chip */}
      <span className="pointer-events-none absolute left-3 top-3 rounded-full border border-white/20 bg-white/12 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur-md">
        {labelFor(image.category)}
      </span>

      {/* Signature: the lotus ring — lotus at rest, expand mark on intent */}
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="relative grid h-14 w-14 place-items-center rounded-full border border-white/40 bg-white/10 opacity-0 backdrop-blur-md transition-all duration-500 ease-out group-hover:scale-105 group-hover:border-[#C9873A]/80 group-hover:bg-[#8B6A3E]/60 group-hover:opacity-100 group-focus-visible:opacity-100 sm:h-16 sm:w-16 motion-reduce:transition-none">
          <PiFlowerLotus className="absolute h-6 w-6 text-white/85 transition-all duration-300 group-hover:scale-50 group-hover:opacity-0 sm:h-7 sm:w-7 motion-reduce:transition-none" />
          <FiMaximize2 className="absolute h-5 w-5 scale-50 text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 sm:h-[22px] sm:w-[22px] motion-reduce:transition-none" />
        </span>
      </span>

      {/* Caption */}
      <span className="absolute inset-x-0 bottom-0 block p-3 sm:p-4">
        <span className="block font-serif text-[15px] leading-snug text-white sm:text-base">
          <span className="ms-clamp-2 block">{image.title}</span>
        </span>

        <span className="mt-2.5 flex items-center gap-3 border-t border-white/15 pt-2.5 text-[11px] tracking-wide text-white/65">
          <span className="flex min-w-0 items-center gap-1.5">
            <FiUser className="h-3 w-3 shrink-0" aria-hidden="true" />
            <span className="truncate">{image.photographer}</span>
          </span>
          <span className="ml-auto flex shrink-0 items-center gap-1.5 tabular-nums">
            <FiCalendar className="h-3 w-3" aria-hidden="true" />
            {image.date}
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
  const [managedImages, setManagedImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(16);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [columns, setColumns] = useState(4);
  const [downloading, setDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState("");
  const [ratios, setRatios] = useState<Record<string, number>>({});

  const loadMoreRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLElement | null>(null);
  const modalPanelRef = useRef<HTMLDivElement>(null);

  const images = managedImages.length > 0 ? managedImages : galleryImages;

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

  /* ---------- fetch managed images ---------- */
  useEffect(() => {
    let alive = true;
    publicGalleryApi
      .list("image")
      .then((items) => {
        if (!alive) return;
        setManagedImages(
          items.map((item, index) => {
            const key = item.category || "gallary";
            return {
              id: item._id,
              src: item.url,
              alt: item.alt || item.caption || "Moksha Sewa gallery image",
              category: key,
              title: item.caption || item.alt,
              description: item.description || blurbFor(key),
              photographer: item.credit || "Moksha Sewa Team",
              likes: 0,
              date: new Date(item.createdAt).getFullYear().toString(),
              height: [340, 390, 430, 370][index % 4],
            };
          }),
        );
      })
      .catch(() => {
        if (alive) setManagedImages([]);
      })
      .finally(() => {
        if (alive) setLoading(false);
      });
    return () => {
      alive = false;
    };
  }, []);

  /* ---------- measured aspect ratios keep the masonry honest ---------- */
  const registerRatio = useCallback((id: string | number, ratio: number) => {
    const key = String(id);
    setRatios((prev) => (prev[key] ? prev : { ...prev, [key]: ratio }));
  }, []);

  const aspectFor = useCallback(
    (image: GalleryImage) => {
      const measured = ratios[String(image.id)];
      if (measured) return clamp(measured, 0.55, 2);
      return hintAspect(image.height, columns);
    },
    [ratios, columns],
  );

  /* ---------- filtering ---------- */
  const allFilteredImages = useMemo(
    () =>
      selectedCategory === "all"
        ? images
        : images.filter((img) => img.category === selectedCategory),
    [images, selectedCategory],
  );

  const filteredImages = useMemo(
    () => allFilteredImages.slice(0, visibleCount),
    [allFilteredImages, visibleCount],
  );

  useEffect(() => {
    setVisibleCount(16);
  }, [selectedCategory, managedImages]);

  /* ---------- infinite scroll ---------- */
  useEffect(() => {
    const node = loadMoreRef.current;
    if (!node || visibleCount >= allFilteredImages.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisibleCount((count) =>
            Math.min(count + 12, allFilteredImages.length),
          );
        }
      },
      { rootMargin: "500px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [visibleCount, allFilteredImages.length]);

  /* ---------- masonry packing using real rendered heights ---------- */
  const masonryColumns = useMemo(() => {
    const heights = new Array(columns).fill(0);
    const buckets: GalleryImage[][] = Array.from({ length: columns }, () => []);
    filteredImages.forEach((image) => {
      const shortest = heights.indexOf(Math.min(...heights));
      buckets[shortest].push(image);
      heights[shortest] += 1 / aspectFor(image);
    });
    return buckets;
  }, [filteredImages, columns, aspectFor]);

  /* ---------- categories with counts ---------- */
  const categories = useMemo(() => {
    const keys = Array.from(new Set(images.map((image) => image.category)));
    return [
      { id: "all", name: "All images", count: images.length },
      ...keys.map((key) => ({
        id: key,
        name: labelFor(key),
        count: images.filter((image) => image.category === key).length,
      })),
    ];
  }, [images]);

  /* ---------- lightbox ---------- */
  const openImage = useCallback((image: GalleryImage, trigger: HTMLElement) => {
    lastTriggerRef.current = trigger;
    setDownloadError("");
    setSelectedImage(image);
  }, []);

  const closeImage = useCallback(() => {
    setSelectedImage(null);
    lastTriggerRef.current?.focus();
  }, []);

  const stepImage = useCallback(
    (delta: number) => {
      if (!selectedImage) return;
      const index = allFilteredImages.findIndex(
        (img) => img.id === selectedImage.id,
      );
      if (index === -1) return;
      const next =
        (index + delta + allFilteredImages.length) % allFilteredImages.length;
      setDownloadError("");
      setSelectedImage(allFilteredImages[next]);
    },
    [selectedImage, allFilteredImages],
  );

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  useEffect(() => {
    if (selectedImage) closeButtonRef.current?.focus();
  }, [selectedImage]);

  useEffect(() => {
    if (!selectedImage) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeImage();
        return;
      }
      if (event.key === "ArrowRight") stepImage(1);
      if (event.key === "ArrowLeft") stepImage(-1);
      if (event.key === "Tab") {
        const panel = modalPanelRef.current;
        if (!panel) return;
        const focusable = panel.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
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
  }, [selectedImage, closeImage, stepImage]);

  /* ---------- download ---------- */
  const downloadSelectedImage = async () => {
    if (!selectedImage || downloading) return;
    setDownloading(true);
    setDownloadError("");
    try {
      const response = await fetch(selectedImage.src);
      if (!response.ok) throw new Error("Download failed");
      const blob = await response.blob();
      if (typeof selectedImage.id === "string") {
        await publicGalleryApi.registerDownload(selectedImage.id);
      }
      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = `${slugify(selectedImage.title) || "moksha-sewa-image"}.${blob.type.split("/")[1]?.replace("jpeg", "jpg") || "jpg"
        }`;
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

  const activeIndex = selectedImage
    ? allFilteredImages.findIndex((img) => img.id === selectedImage.id)
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
        .ms-rail { scrollbar-width: none; -ms-overflow-style: none; }
        .ms-rail::-webkit-scrollbar { display: none; }
        .ms-shimmer {
          background: linear-gradient(100deg, #F5E9D9 20%, #FFFFFF 40%, #F5E9D9 60%);
          background-size: 220% 100%;
          animation: ms-slide 1.6s ease-in-out infinite;
        }
        @keyframes ms-slide {
          0%   { background-position: 140% 0; }
          100% { background-position: -40% 0; }
        }
        .ms-weave {
          background-image: repeating-linear-gradient(
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
    Gallery
  </span>
</h1>

          <p className="mt-4 mx-auto max-w-xl text-[15px] leading-relaxed text-[#5A3E2B]/80 sm:text-base">
            The ghats, the rituals, the people. A record of how we accompany
            families through a dignified farewell — photographed as it happened.
          </p>

          <dl className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-[#E7D5C2] pt-6">
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8B6A3E]/70">
                Photographs
              </dt>
              <dd className="mt-1 font-serif text-2xl tabular-nums text-[#2C1810]">
                {images.length}
              </dd>
            </div>
            <div className="h-9 w-px bg-[#E7D5C2]" aria-hidden="true" />
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8B6A3E]/70">
                Collections
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
        aria-label="Filter photographs by collection"
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
        {loading && managedImages.length === 0 ? (
          <div
            className="grid gap-4 sm:gap-5"
            style={{
              gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
            }}
            aria-busy="true"
            aria-label="Loading photographs"
          >
            {Array.from({ length: columns }).map((_, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-4 sm:gap-5">
                {[1.1, 0.82, 1.25].map((aspect, i) => (
                  <CardSkeleton
                    key={i}
                    aspect={columns === 1 ? 4 / 3 : aspect}
                  />
                ))}
              </div>
            ))}
          </div>
        ) : filteredImages.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-[#E7D5C2] bg-white/60 px-6 py-16 text-center">
            <PiFlowerLotus
              className="mx-auto h-8 w-8 text-[#C9873A]/60"
              aria-hidden="true"
            />
            <p className="mt-4 font-serif text-xl text-[#2C1810]">
              Nothing in {labelFor(selectedCategory)} yet
            </p>
            <p className="mx-auto mt-2 max-w-sm text-sm text-[#5A3E2B]/70">
              This collection is still being added to. Browse the full gallery
              in the meantime.
            </p>
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className="mt-6 rounded-full bg-[#8B6A3E] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#5A3E2B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9873A] focus-visible:ring-offset-2"
            >
              Show all images
            </button>
          </div>
        ) : (
          <div
            className="grid gap-4 sm:gap-5"
            style={{
              gridTemplateColumns: `repeat(${Math.min(
                columns,
                filteredImages.length,
              )}, minmax(0, 1fr))`,
            }}
          >
            {masonryColumns.map((column, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-4 sm:gap-5">
                {column.map((image, i) => (
                  <ImageCard
                    key={image.id}
                    image={image}
                    aspect={aspectFor(image)}
                    eager={i < 2}
                    onOpen={openImage}
                    onMeasure={registerRatio}
                  />
                ))}
              </div>
            ))}
          </div>
        )}

        {visibleCount < allFilteredImages.length && (
          <p className="mt-10 flex items-center justify-center gap-2 text-[13px] text-[#5A3E2B]/60">
            <FiLoader className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />
            Loading more photographs
          </p>
        )}

        <div ref={loadMoreRef} className="h-px" aria-hidden="true" />
      </main>

      {/* ========================== LIGHTBOX ========================== */}
      {selectedImage && (
        <div
          className="gallery-modal-overlay fixed inset-0 z-[100] flex items-center justify-center bg-[#150D08]/92 p-0 backdrop-blur-sm sm:p-4"
          onClick={closeImage}
        >
          <div
            ref={modalPanelRef}
            role="dialog"
            aria-modal="true"
            aria-label={selectedImage.title}
            className="gallery-modal-panel relative flex h-[100dvh] w-full max-w-6xl flex-col overflow-hidden bg-white shadow-2xl ring-1 ring-black/10 sm:h-[92dvh] sm:rounded-2xl lg:flex-row"
            onClick={(event) => event.stopPropagation()}
          >
            {/* ---- Image pane ---- */}
            <div className="relative shrink-0 bg-[#1B1310] lg:h-full lg:w-[62%]">
              <div className="relative h-[38dvh] w-full sm:h-[46dvh] lg:h-full">
                <Image
                  key={String(selectedImage.id)}
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 62vw"
                  priority
                />
              </div>

              {allFilteredImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => stepImage(-1)}
                    aria-label="Previous image"
                    className="absolute left-2 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/45 text-white backdrop-blur-md transition hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9873A] sm:left-3"
                  >
                    <FiChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => stepImage(1)}
                    aria-label="Next image"
                    className="absolute right-2 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/45 text-white backdrop-blur-md transition hover:bg-black/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9873A] sm:right-3"
                  >
                    <FiChevronRight className="h-5 w-5" />
                  </button>
                  <span className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/55 px-3 py-1 text-[11px] tabular-nums text-white/80 backdrop-blur-md">
                    {activeIndex + 1} / {allFilteredImages.length}
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
                  {labelFor(selectedImage.category)}
                </span>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closeImage}
                  aria-label="Close image"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#E7D5C2] bg-white text-[#5A3E2B] transition hover:border-[#C9873A] hover:text-[#2C1810] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9873A]"
                >
                  <FiX className="h-5 w-5" />
                </button>
              </div>

              <div className="flex-1 px-5 py-6 sm:px-7">
                <h2 className="font-serif text-[clamp(1.35rem,4vw,2rem)] leading-tight text-[#2C1810]">
                  {selectedImage.title}
                </h2>
                <p className="mt-3 text-[14px] leading-relaxed text-[#5A3E2B]/80">
                  {selectedImage.description}
                </p>

                <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5 border-y border-[#F1E4D2] py-5 sm:grid-cols-3">
                  <div>
                    <dt className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8B6A3E]/70">
                      <FiUser className="h-3 w-3" aria-hidden="true" />
                      Photographer
                    </dt>
                    <dd className="mt-1.5 text-[14px] font-medium text-[#2C1810]">
                      {selectedImage.photographer}
                    </dd>
                  </div>
                  <div>
                    <dt className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8B6A3E]/70">
                      <FiCalendar className="h-3 w-3" aria-hidden="true" />
                      Year
                    </dt>
                    <dd className="mt-1.5 text-[14px] font-medium tabular-nums text-[#2C1810]">
                      {selectedImage.date}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8B6A3E]/70">
                      Collection
                    </dt>
                    <dd className="mt-1.5 text-[14px] font-medium text-[#2C1810]">
                      {labelFor(selectedImage.category)}
                    </dd>
                  </div>
                </dl>
              </div>

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
                  onClick={downloadSelectedImage}
                  disabled={downloading}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#8B6A3E] py-3.5 text-sm font-medium text-white shadow-[0_10px_24px_-14px_rgba(139,106,62,1)] transition-colors hover:bg-[#5A3E2B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9873A] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {downloading ? (
                    <FiLoader className="h-4 w-4 animate-spin" />
                  ) : (
                    <FiDownload className="h-4 w-4" />
                  )}
                  {downloading ? "Downloading" : "Download image"}
                </button>
                <p className="mt-2 text-center text-[11px] text-[#5A3E2B]/55">
                  Use arrow keys to move between images · Esc to close
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