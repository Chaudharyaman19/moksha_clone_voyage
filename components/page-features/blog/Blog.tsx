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

      {/* ============================ HERO (MATCHING HOME & SITE STANDARDS) ============================ */}
      <header className="relative overflow-hidden border-b border-[#E7D5C2]/70 bg-[#FAF7F2]">
        <div className="ms-weave absolute inset-0" aria-hidden="true" />
        <div
          className="absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-[#C9873A]/10 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-48 -left-24 h-[420px] w-[420px] rounded-full bg-[#8B6A3E]/10 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-4 pt-44 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#8B6A3E]/20 bg-white/80 px-4 py-1.5 backdrop-blur-sm shadow-2xs">
            <PiFlowerLotus className="h-3.5 w-3.5 text-[#C9873A]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B6A3E]">
              Articles &amp; Reflections
            </span>
          </div>

          <h1 className="font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight text-[#2C1810]">
            Moksha Sewa <span className="text-[#8B6A3E]">Blogs</span>
          </h1>

          <p className="mt-2 mx-auto max-w-2xl text-[15px] sm:text-base leading-relaxed text-[#5A3E2B]/85">
            The rituals, the stories, the guidance. A record of how we accompany families through
            a dignified farewell and spiritual solace — written with compassion and reverence.
          </p>

          <dl className="mt-2 flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 gap-y-4 border-t border-[#E7D5C2] pt-4">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8B6A3E]/80">
                Published Articles
              </dt>
              <dd className="mt-1 text-2xl sm:text-3xl font-bold tabular-nums text-[#2C1810]">
                {blogs.length}
              </dd>
            </div>
            <div className="h-9 w-px bg-[#E7D5C2]" aria-hidden="true" />
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8B6A3E]/80">
                Topics &amp; Guidance
              </dt>
              <dd className="mt-1 text-2xl sm:text-3xl font-bold tabular-nums text-[#2C1810]">
                {categories.length > 1 ? categories.length - 1 : categories.length}
              </dd>
            </div>
            <div className="h-9 w-px bg-[#E7D5C2]" aria-hidden="true" />
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8B6A3E]/80">
                Sewa Support
              </dt>
              <dd className="mt-1 text-2xl sm:text-3xl font-bold text-[#2C1810]">24×7</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* ========================== CATEGORIES & SEARCH TOOLBAR =========================== */}
      <nav
        aria-label="Filter blog posts by category"
        className="sticky top-0 z-30 border-b border-[#E7D5C2]/70 bg-[#FAF7F2]/95 backdrop-blur-md"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Pills */}
          <div className="ms-rail flex snap-x snap-mandatory gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs sm:text-[13px] font-medium transition-all ${active
                    ? "bg-[#2C1810] text-[#FAF7F2] shadow-xs"
                    : "bg-white/80 text-[#5A3E2B] border border-[#E7D5C2]/80 hover:bg-white hover:border-[#8B6A3E]/50"
                    }`}
                >
                  {cat === "All" ? "All Articles" : cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8B6A3E]/70 h-4 w-4" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-[#E7D5C2] bg-white/95 py-2 pl-9 pr-4 text-xs sm:text-sm text-[#2C1810] outline-none placeholder:text-[#8B6A3E]/50 focus:border-[#8B6A3E] focus:ring-1 focus:ring-[#8B6A3E]/30 transition"
            />
          </div>
        </div>
      </nav>

      {/* ========================== BLOG POSTS: SINGLE ROW ME 2 BLOGS =========================== */}
      <main className="relative z-20 mx-auto h-full max-w-7xl px-4 sm:px-5 lg:px-0">
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-[#E7D5C2] p-8 max-w-lg mx-auto shadow-xs">
            <PiFlowerLotus className="h-10 w-10 text-[#C9873A] mx-auto mb-3 opacity-60" />
            <h3 className="text-xl font-semibold text-[#2C1810]">No articles found</h3>
            <p className="mt-2 text-xs sm:text-sm text-[#5A3E2B]/80 leading-relaxed">
              We couldn&apos;t find any blog post matching your search. Try changing the category
              or search keywords.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-5 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#8B6A3E] hover:text-[#2C1810] underline"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          /* Grid: 2 blogs per row (single row me 2 blogs on lg screen) */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 mb-4">
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
                  className="flex flex-col sm:flex-row bg-white rounded-2xl border border-[#E7D5C2] overflow-hidden shadow-[0_2px_12px_rgba(44,24,16,0.03)] hover:shadow-md hover:border-[#C9873A]/60 transition-all duration-300 group"
                >
                  {/* LEFT: IMAGE */}
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="relative sm:w-[42%] min-h-[220px] sm:min-h-[260px] shrink-0 overflow-hidden bg-[#F0E8D5] block"
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
                        <span className="text-[11px] font-medium">Moksha Sewa</span>
                      </div>
                    )}

                    {/* Floating Category Badge */}
                    <span className="absolute left-3 top-3 z-10 rounded-full bg-[#8B6A3E]/90 backdrop-blur-xs px-2.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase text-white shadow-2xs">
                      {categoryBadge}
                    </span>
                  </Link>

                  {/* RIGHT: DETAILS */}
                  <div className="flex flex-col justify-between p-5 sm:p-4 w-full">
                    <div>
                      {/* Meta (Date + Author) */}
                      <div className="flex items-center gap-2.5 text-xs font-medium text-[#8B6A3E]/85">
                        <span className="inline-flex items-center gap-1.5">
                          <FiCalendar className="h-3.5 w-3.5 text-[#C9873A]" />
                          {formattedDate}
                        </span>
                        <span className="text-[#E7D5C2]">•</span>
                        <span className="inline-flex items-center gap-1.5">
                          <FiUser className="h-3.5 w-3.5 text-[#C9873A]" />
                          {blog.author || "Moksha Sewa"}
                        </span>
                      </div>

                      {/* Title */}
                      <Link href={`/blog/${blog.slug}`} className="block group">
                        <h2 className="mt-2.5 text-lg sm:text-xl font-semibold leading-snug text-[#2C1810] group-hover:text-[#8B6A3E] transition-colors ms-clamp-2">
                          {blog.title}
                        </h2>
                      </Link>

                      {/* Excerpt */}
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#5A3E2B]/80 ms-clamp-3">
                        {blog.excerpt || blog.content.replace(/<[^>]*>/g, "").slice(0, 150) + "..."}
                      </p>
                    </div>

                    {/* Bottom action row */}
                    <div className="mt-5 pt-3.5 border-t border-[#F0E8D5] flex items-center justify-between">
                      {blog.tags && blog.tags.length > 0 ? (
                        <span className="inline-flex items-center gap-1 text-xs text-[#8B6A3E]/70 font-medium">
                          <FiTag className="h-3 w-3" />
                          #{blog.tags[0]}
                        </span>
                      ) : (
                        <span className="text-[10.5px] text-[#8B6A3E]/60 uppercase tracking-wider font-semibold">
                          Guide
                        </span>
                      )}

                      <Link
                        href={`/blog/${blog.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#8B6A3E] group-hover:text-[#2C1810] group-hover:gap-2.5 transition-all"
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
