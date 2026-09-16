"use client";

import React, { useMemo, useState } from "react";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import Image from "next/image";
import Link from "next/link";
import { PiFlowerLotus } from "react-icons/pi";
import { FiCalendar, FiUser, FiArrowRight, FiSearch, FiTag } from "react-icons/fi";
import { BlogPost, FALLBACK_BLOGS } from "@/lib/blogsApi";

interface BlogProps {
  initialBlogs?: BlogPost[];
}

export default function Blog({ initialBlogs }: BlogProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogs = useMemo(() => {
    if (initialBlogs && initialBlogs.length > 0) {
      return initialBlogs;
    }
    return FALLBACK_BLOGS;
  }, [initialBlogs]);

  // Extract unique categories from blogs
  const categories = useMemo(() => {
    const cats = new Set<string>(["All"]);
    blogs.forEach((b) => {
      if (b.category) cats.add(b.category);
    });
    return Array.from(cats);
  }, [blogs]);

  // Filtered blogs
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        blog.title.toLowerCase().includes(q) ||
        (blog.excerpt && blog.excerpt.toLowerCase().includes(q)) ||
        (blog.author && blog.author.toLowerCase().includes(q)) ||
        (blog.tags && blog.tags.some((t) => t.toLowerCase().includes(q)));

      const matchesCategory =
        selectedCategory === "All" || blog.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [blogs, searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C1810] antialiased">
      <style>{`
        .ms-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .ms-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .ms-rail { scrollbar-width: none; -ms-overflow-style: none; }
        .ms-rail::-webkit-scrollbar { display: none; }
        .ms-weave {
          background-image: repeating-linear-gradient(
            -45deg,
            rgba(139,106,62,0.055) 0px,
            rgba(139,106,62,0.055) 1px,
            transparent 1px,
            transparent 9px
          );
        }
      `}</style>

      <Topbar />
      <Navbar />

      {/* ============================ HERO (MATCHING MOKSHAGALLERY) ============================ */}
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

        <div className="relative mx-auto max-w-7xl px-5 pb-6 pt-36 sm:px-8 sm:pb-8 sm:pt-40 lg:pb-10 lg:pt-44 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#8B6A3E]/15 bg-white/70 px-3.5 py-1.5 backdrop-blur-sm">
            <PiFlowerLotus className="h-3.5 w-3.5 text-[#C9873A]" aria-hidden="true" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8B6A3E]">
              Articles &amp; Reflections
            </span>
          </div>

          <h1 className="mt-4 font-serif text-[clamp(2.4rem,9vw,4.6rem)] font-normal leading-[0.95] tracking-[-0.02em] text-[#2C1810]">
            Moksha <span className="text-[#8B6A3E]">Blog</span>
          </h1>

          <p className="mt-4 mx-auto max-w-xl text-[15px] leading-relaxed text-[#5A3E2B]/80 sm:text-base">
            The rituals, the stories, the guidance. A record of how we accompany families through
            a dignified farewell and spiritual solace — written with compassion and reverence.
          </p>

          <dl className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-[#E7D5C2] pt-6">
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8B6A3E]/70">
                Published Articles
              </dt>
              <dd className="mt-1 font-serif text-2xl tabular-nums text-[#2C1810]">
                {blogs.length}
              </dd>
            </div>
            <div className="h-9 w-px bg-[#E7D5C2]" aria-hidden="true" />
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8B6A3E]/70">
                Topics &amp; Guidance
              </dt>
              <dd className="mt-1 font-serif text-2xl tabular-nums text-[#2C1810]">
                {categories.length > 1 ? categories.length - 1 : categories.length}
              </dd>
            </div>
            <div className="h-9 w-px bg-[#E7D5C2]" aria-hidden="true" />
            <div>
              <dt className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8B6A3E]/70">
                Sewa Support
              </dt>
              <dd className="mt-1 font-serif text-2xl text-[#2C1810]">24×7</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* ========================== CATEGORIES & SEARCH TOOLBAR =========================== */}
      <nav
        aria-label="Filter blog posts by category"
        className="sticky top-0 z-30 border-b border-[#E7D5C2]/70 bg-[#FAF7F2]/90 backdrop-blur-md"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-3.5 flex flex-col md:flex-row items-center justify-between gap-3.5">
          {/* Category Pills */}
          <div className="ms-rail flex snap-x snap-mandatory gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                    active
                      ? "bg-[#2C1810] text-[#FAF7F2] shadow-sm"
                      : "bg-white/80 text-[#5A3E2B] border border-[#E7D5C2]/80 hover:bg-white hover:border-[#8B6A3E]/50"
                  }`}
                >
                  {cat === "All" ? "All Articles" : cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64 shrink-0">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8B6A3E]/70 h-3.5 w-3.5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-[#E7D5C2] bg-white/90 py-1.5 pl-9 pr-4 text-xs text-[#2C1810] outline-none placeholder:text-[#8B6A3E]/50 focus:border-[#8B6A3E] focus:ring-1 focus:ring-[#8B6A3E]/30 transition"
            />
          </div>
        </div>
      </nav>

      {/* ========================== BLOG POSTS: SINGLE ROW ME 2 BLOGS =========================== */}
      <main className="mx-auto max-w-7xl px-5 sm:px-8 py-10 sm:py-14">
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-[#E7D5C2] p-8 max-w-lg mx-auto">
            <PiFlowerLotus className="h-10 w-10 text-[#C9873A] mx-auto mb-3 opacity-60" />
            <h3 className="font-serif text-xl text-[#2C1810]">No articles found</h3>
            <p className="mt-2 text-xs text-[#5A3E2B]/75 leading-relaxed">
              We couldn&apos;t find any blog post matching your search. Try changing the category
              or search keywords.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#8B6A3E] hover:underline"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          /* Grid: 2 blogs per row (single row me 2 blogs on lg screen) */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {filteredBlogs.map((blog) => {
              const formattedDate = blog.publishedAt || blog.createdAt
                ? new Date(blog.publishedAt || blog.createdAt).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })
                : "Recent";

              const categoryBadge = blog.category || "Moksha Sewa";

              return (
                <article
                  key={blog._id}
                  className="flex flex-col sm:flex-row bg-white rounded-2xl border border-[#E7D5C2]/85 overflow-hidden shadow-[0_2px_12px_rgba(44,24,16,0.03)] hover:shadow-xl hover:border-[#C9873A]/60 transition-all duration-300 group"
                >
                  {/* LEFT: IMAGE */}
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="relative sm:w-[44%] min-h-[220px] sm:min-h-[260px] shrink-0 overflow-hidden bg-[#F0E8D5] block"
                  >
                    {blog.coverImage ? (
                      <Image
                        src={blog.coverImage}
                        alt={blog.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-[#F4EDE3] text-[#8B6A3E]/60">
                        <PiFlowerLotus className="h-8 w-8 mb-1" />
                        <span className="text-[11px] font-serif">Moksha Sewa</span>
                      </div>
                    )}

                    {/* Floating Category Badge */}
                    <span className="absolute left-3 top-3 z-10 rounded-full bg-[#8B6A3E]/90 backdrop-blur-xs px-2.5 py-0.5 text-[9.5px] font-semibold tracking-wider uppercase text-white shadow-sm">
                      {categoryBadge}
                    </span>
                  </Link>

                  {/* RIGHT: DETAILS */}
                  <div className="flex flex-col justify-between p-5 sm:p-6 w-full">
                    <div>
                      {/* Meta (Date + Author) */}
                      <div className="flex items-center gap-3 text-[11px] font-medium text-[#8B6A3E]/80">
                        <span className="inline-flex items-center gap-1.5">
                          <FiCalendar className="h-3 w-3 text-[#C9873A]" />
                          {formattedDate}
                        </span>
                        <span className="text-[#E7D5C2]">•</span>
                        <span className="inline-flex items-center gap-1.5">
                          <FiUser className="h-3 w-3 text-[#C9873A]" />
                          {blog.author || "Moksha Sewa"}
                        </span>
                      </div>

                      {/* Title */}
                      <Link href={`/blog/${blog.slug}`} className="block group">
                        <h2 className="mt-2.5 font-serif text-lg sm:text-xl font-medium leading-snug text-[#2C1810] group-hover:text-[#8B6A3E] transition-colors ms-clamp-2">
                          {blog.title}
                        </h2>
                      </Link>

                      {/* Excerpt */}
                      <p className="mt-2 text-[13px] sm:text-[13.5px] leading-relaxed text-[#5A3E2B]/80 ms-clamp-3">
                        {blog.excerpt || blog.content.replace(/<[^>]*>/g, "").slice(0, 150) + "..."}
                      </p>
                    </div>

                    {/* Bottom action row */}
                    <div className="mt-5 pt-3.5 border-t border-[#F0E8D5] flex items-center justify-between">
                      {blog.tags && blog.tags.length > 0 ? (
                        <span className="inline-flex items-center gap-1 text-[10.5px] text-[#8B6A3E]/70 font-medium">
                          <FiTag className="h-2.5 w-2.5" />
                          #{blog.tags[0]}
                        </span>
                      ) : (
                        <span className="text-[10px] text-[#8B6A3E]/50 uppercase tracking-widest font-semibold">
                          Guide
                        </span>
                      )}

                      <Link
                        href={`/blog/${blog.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8B6A3E] group-hover:text-[#2C1810] group-hover:gap-2.5 transition-all"
                      >
                        Read Article
                        <FiArrowRight className="h-3.5 w-3.5 text-[#C9873A]" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
