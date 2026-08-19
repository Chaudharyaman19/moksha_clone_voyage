"use client";
import React, { useState } from "react";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import Image from "next/image";
import HowItWorks from "@/components/sections/HowItWorks/HowItWorks";
import Link from "next/link";
import {
  FiSearch,
  FiCalendar,
  FiArrowRight,
  FiClock,
} from "react-icons/fi";
import { BsEye, BsChat, BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { PiFlowerLotus } from "react-icons/pi";

const blogImages = {
  hero: "/assets/blog/blog.png",
};

function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [savedPosts, setSavedPosts] = useState<number[]>([]);

  const blogPosts = [
    {
      id: 1,
      title: "Pind Daan in Gaya: A Complete Guide for Families",
      excerpt:
        "Everything you need to know about performing Pind Daan at Gaya — the rituals, the right time, and how to prepare your family for this sacred duty.",
      author: "Pandit Ramesh Sharma",
      date: "Mar 15, 2024",
      readTime: "6 min",
      category: "Rituals",
      image: "/assets/route-optimized/blog-two.webp",
      views: 1250,
      comments: 24,
      featured: true,
    },
    {
      id: 2,
      title: "Why Varanasi is Called the City of Moksha",
      excerpt:
        "From the ghats of Ganga to the eternal flame of Manikarnika — understanding why Kashi holds the promise of liberation in Hindu tradition.",
      author: "Anjali Mishra",
      date: "Mar 10, 2024",
      readTime: "8 min",
      category: "Pilgrimage",
      image: "/assets/route-optimized/blog-one.webp",
      views: 890,
      comments: 18,
      featured: true,
    },
    {
      id: 3,
      title: "The 13 Days After: Rituals, Meaning & Support",
      excerpt:
        "A gentle guide to the terahvin period — what each ritual signifies, and how families can find peace and closure through tradition.",
      author: "Pandit Suresh Tripathi",
      date: "Mar 5, 2024",
      readTime: "10 min",
      category: "Guidance",
      image: "/assets/route-optimized/blog-c.webp",
      views: 750,
      comments: 12,
      featured: false,
    },
    {
      id: 4,
      title: "Asthi Visarjan at Haridwar: Step by Step",
      excerpt:
        "How to perform asthi visarjan at Har Ki Pauri with dignity — timings, arrangements, and what to carry for the ceremony.",
      author: "Kavita Joshi",
      date: "Feb 28, 2024",
      readTime: "7 min",
      category: "Rituals",
      image: "/assets/route-optimized/blog-two.webp",
      views: 1100,
      comments: 31,
      featured: false,
    },
    {
      id: 5,
      title: "Shraddha & Tarpan: Honouring Our Ancestors",
      excerpt:
        "The meaning behind Pitru Paksha, and why offering shraddha and tarpan remains one of the most sacred duties in our tradition.",
      author: "Pandit Ramesh Sharma",
      date: "Feb 22, 2024",
      readTime: "5 min",
      category: "Ancestors",
      image: "/assets/route-optimized/blog-one.webp",
      views: 950,
      comments: 15,
      featured: false,
    },
    {
      id: 6,
      title: "Preparing for a Sacred Yatra: A Family Checklist",
      excerpt:
        "From documents to samagri — a practical checklist so your family can focus on devotion, not logistics, during the yatra.",
      author: "Anjali Mishra",
      date: "Feb 18, 2024",
      readTime: "9 min",
      category: "Pilgrimage",
      image: "/assets/route-optimized/blog-c.webp",
      views: 680,
      comments: 9,
      featured: false,
    },
  ];

  const categories = ["All", "Rituals", "Pilgrimage", "Ancestors", "Guidance"];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find((post) => post.featured);
  const showFeatured =
    featuredPost && selectedCategory === "All" && searchQuery === "";

  const toggleSave = (postId: number) => {
    setSavedPosts((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId],
    );
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FBF8F3] text-[#2C1810]">
      <Topbar />
      <Navbar />

      <main>
        {/* ============ HERO — visual banner first ============ */}
        <section className="relative w-full aspect-[16/6] min-h-[400px] overflow-hidden bg-[#F4EDE3]">
          <div className="absolute inset-0">
            <Image
              src={blogImages.hero}
              alt="Moksha Sewa ritual guidance and sacred stories"
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              className="scale-[1.02] object-cover object-center"
            />
          </div>

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(247,240,231,0.98) 0%, rgba(247,240,231,0.93) 24%, rgba(247,240,231,0.62) 42%, rgba(247,240,231,0.20) 60%, rgba(247,240,231,0.02) 76%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/8 via-transparent to-transparent" />

          <div className="pointer-events-none absolute -left-6 top-1/2 hidden -translate-y-[58%] select-none font-serif text-[300px] leading-none text-[#8B6A3E]/[0.07] lg:block">
            ज्ञान
          </div>

          <div className="relative mx-auto flex h-full w-full max-w-7xl items-center px-0 pt-28 lg:pt-32">
            <div className="max-w-[540px] translate-y-2 lg:translate-y-3">
              <div className="inline-flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8B6A3E] text-white">
                  <PiFlowerLotus className="h-4 w-4" />
                </span>
                <span className="text-[14px] font-semibold uppercase tracking-[0.3em] text-[#8B6A3E]">
                  Wisdom & Insights
                </span>
              </div>

              <h1
                className="mt-3 leading-[0.95]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                <span className="block text-[38px] text-[#2C1810] sm:text-[46px] lg:text-[52px]">
                  The Moksha   Blog
                </span>

              </h1>

              <div className="mt-2 flex items-center gap-2">
                <span className="h-[2px] w-12 bg-[#8B6A3E]" />
                <span className="h-2 w-2 rotate-45 border border-[#8B6A3E] bg-[#C9A574]" />
                <span className="h-px w-20 bg-gradient-to-r from-[#C9A574] to-transparent" />
              </div>

              <p className="mt-3 max-w-[455px] text-sm leading-6 text-[#4F3A2D] sm:text-[20px]">
                Articles on rituals, pilgrimage,
                sacred traditions, funeral guidance, and spiritual practices — timeless wisdom explained with warmth,
                clarity, and compassion for modern families seeking understanding, comfort,
                and meaningful cultural connection.
              </p>
            </div>
          </div>
        </section>

        {/* ============ FILTER TOOLBAR ============ */}
        <section className="border-b border-[#E9DDCD] bg-[#F8F3EC] py-5">
          <div className="mx-auto w-full max-w-7xl px-0">
            <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-[#E4D5BE] bg-white p-3 shadow-[0_14px_36px_rgba(73,49,31,0.10)] sm:p-3.5">
              <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#C9A574] to-transparent" />

              <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
                {/* search */}
                <div className="relative lg:w-[320px] lg:shrink-0">
                  <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8B6A3E]/50" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full rounded-xl border border-[#E4D5BE] bg-[#FBF8F3] py-2.5 pl-10 pr-4 text-sm text-[#2C1810] outline-none transition placeholder:text-[#A8937E] focus:border-[#C9A574] focus:ring-2 focus:ring-[#C9A574]/40"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <span className="hidden h-8 w-px bg-[#EADDC8] lg:block" />

                {/* categories */}
                <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`rounded-full px-4 py-1.5 text-[14px] font-semibold transition-all duration-300 ${selectedCategory === category
                        ? "bg-[#8B6A3E] text-white shadow-md"
                        : "border border-[#E4D5BE] bg-[#FBF8F3] text-[#5F4630] hover:border-[#C9A574] hover:bg-[#F6EFE6]"
                        }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ FEATURED SPOTLIGHT ============ */}
        {showFeatured && (
          <section className="pt-5 lg:pt-6">
            <div className="mx-auto w-full max-w-7xl px-0">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#3B2B21] to-[#2C1810] text-white shadow-[0_18px_48px_rgba(44,24,16,0.3)]">
                <span className="absolute inset-y-0 left-0 z-10 w-[3px] bg-gradient-to-b from-[#C9A574] via-[#D9B681] to-[#C9A574]" />
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-[#C9A574]/15" />

                <div className="grid lg:grid-cols-[1fr_0.9fr]">
                  {/* content */}
                  <div className="flex flex-col justify-center p-5 sm:p-7 lg:p-8">
                    <div className="flex items-center gap-2 text-[14px] font-semibold uppercase tracking-[0.22em] text-[#D9B681]">
                      <span>Featured Read</span>
                      <span className="h-px w-8 bg-[#C9A574]" />
                    </div>

                    <span className="mt-3 w-fit rounded-full border border-[#D9B681]/40 bg-[#D9B681]/10 px-3 py-1 text-[14px] font-semibold text-[#E8D2AC]">
                      {featuredPost.category}
                    </span>

                    <h2 className="mt-3 font-serif text-2xl leading-tight sm:text-3xl">
                      {featuredPost.title}
                    </h2>

                    <p className="mt-3 max-w-lg text-sm leading-6 text-white/70">
                      {featuredPost.excerpt}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[14px] text-white/60">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C9A574] text-[14px] font-semibold text-[#2C1810]">
                          {featuredPost.author.charAt(0)}
                        </span>
                        {featuredPost.author}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <FiCalendar /> {featuredPost.date}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <FiClock /> {featuredPost.readTime} read
                      </span>
                    </div>

                    <Link
                      href={`/blog/${featuredPost.id}`}
                      className="group mt-5 inline-flex w-fit items-center gap-2 rounded-lg bg-[#D9B681] px-5 py-2.5 text-[14px] font-semibold text-[#2C1810] shadow-md transition duration-300 hover:bg-[#E8D2AC] hover:shadow-lg"
                    >
                      Read Full Article
                      <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
                    </Link>
                  </div>

                  {/* image — clean rounded frame */}
                  <div className="relative m-4 h-[240px] overflow-hidden rounded-xl border border-white/15 sm:h-[280px] lg:m-5 lg:h-auto lg:min-h-[340px]">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      priority
                      fetchPriority="high"
                      sizes="(max-width: 1024px) 100vw, 560px"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/40 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ============ ALL POSTS ============ */}
        <section className="py-5 lg:py-6">
          <div className="mx-auto w-full max-w-7xl px-0">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <div>
                <div className="flex items-center gap-2 text-[14px] font-semibold uppercase tracking-[0.22em] text-[#8B6A3E]">
                  <span>Latest Posts</span>
                  <span className="h-px w-7 bg-[#C9A574]" />
                </div>
                <h2 className="mt-2 font-serif text-2xl text-[#2C1810] sm:text-3xl">
                  {selectedCategory === "All" ? (
                    <>
                      All <span className=" text-[#8B6A3E]">Articles</span>
                    </>
                  ) : (
                    <span className=" text-[#8B6A3E]">{selectedCategory}</span>
                  )}
                </h2>
              </div>
              <span className="rounded-full border border-[#DECBAC] bg-white px-3 py-1 text-[14px] font-semibold text-[#6A4F32]">
                {filteredPosts.length} articles found
              </span>
            </div>

            {filteredPosts.length === 0 ? (
              /* ---- empty state ---- */
              <div className="rounded-2xl border border-[#E6D6BF] bg-white py-14 text-center shadow-sm">
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#DEC9A8] bg-[#FBF8F3]">
                  <span className="absolute inset-1.5 rounded-full border border-dashed border-[#C9A574]/60" />
                  <PiFlowerLotus className="text-2xl text-[#8B6A3E]" />
                </div>
                <h3 className="mt-4 font-serif text-xl text-[#2C1810]">
                  No articles found
                </h3>
                <p className="mx-auto mt-1 max-w-sm text-sm text-[#7A685B]">
                  Try adjusting your search or filter to find what you&apos;re
                  looking for.
                </p>
                <button
                  className="mt-5 rounded-lg bg-[#8B6A3E] px-5 py-2.5 text-[14px] font-semibold text-white shadow-md transition hover:bg-[#73532F]"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              /* ---- normal rounded article cards ---- */
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group overflow-hidden rounded-xl border border-[#E6D6BF] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C9A574] hover:shadow-[0_16px_32px_rgba(70,47,31,0.14)]"
                  >
                    <div className="relative block h-44 w-full overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 390px"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/60 via-transparent to-transparent" />
                      <span className="absolute bottom-2.5 left-3 z-10 rounded-full bg-[#8B6A3E] px-2.5 py-0.5 text-[14px] font-semibold uppercase tracking-[0.1em] text-white shadow">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-4">
                      <div className="flex items-center gap-2 text-[14px] text-[#8A7460]">
                        <span className="flex items-center gap-1">
                          <FiCalendar /> {post.date}
                        </span>
                        <span className="h-0.5 w-0.5 rounded-full bg-[#C9A574]" />
                        <span className="flex items-center gap-1">
                          <FiClock /> {post.readTime} read
                        </span>
                      </div>

                      <h3 className="mt-2 line-clamp-2 font-serif text-base leading-snug text-[#2C1810]">
                        {post.title}
                      </h3>

                      <p className="mt-1.5 line-clamp-2 text-[14px] leading-5 text-[#6B584B]">
                        {post.excerpt}
                      </p>

                      <div className="mt-3 flex items-center justify-between border-t border-[#F0E5D3] pt-3">
                        <div className="flex items-center gap-1.5">
                          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#8B6A3E] text-[14px] font-semibold text-white">
                            {post.author.charAt(0)}
                          </span>
                          <span className="text-[14px] font-semibold text-[#4A3428]">
                            {post.author}
                          </span>
                        </div>

                        <div className="flex items-center gap-2.5 text-[14px] text-[#A8937E]">
                          <span className="flex items-center gap-1">
                            <BsEye />
                            {post.views.toLocaleString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <BsChat />
                            {post.comments}
                          </span>
                          <button
                            onClick={() => toggleSave(post.id)}
                            aria-label={
                              savedPosts.includes(post.id)
                                ? "Remove bookmark"
                                : "Save article"
                            }
                            className="transition hover:text-[#8B6A3E]"
                          >
                            {savedPosts.includes(post.id) ? (
                              <BsBookmarkFill className="text-[#8B6A3E]" />
                            ) : (
                              <BsBookmark />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* ---- pagination ---- */}
            {filteredPosts.length > 0 && (
              <div className="mt-8 flex justify-center">
                <div className="flex items-center gap-1.5">
                  <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E4D5BE] bg-white text-sm text-[#5F4630] transition hover:border-[#C9A574] hover:bg-[#F6EFE6]">
                    &laquo;
                  </button>
                  {[1, 2, 3].map((page) => (
                    <button
                      key={page}
                      className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm transition ${page === 1
                        ? "bg-[#8B6A3E] font-semibold text-white shadow-md"
                        : "border border-[#E4D5BE] bg-white text-[#5F4630] hover:border-[#C9A574] hover:bg-[#F6EFE6]"
                        }`}
                    >
                      {page}
                    </button>
                  ))}
                  <span className="px-1 text-sm text-[#A8937E]">...</span>
                  <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E4D5BE] bg-white text-sm text-[#5F4630] transition hover:border-[#C9A574] hover:bg-[#F6EFE6]">
                    &raquo;
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>


        {/* ============ NEWSLETTER — dark gold section ============ */}

      </main>

      <Footer />
    </div>
  );
}

export default Blog;
