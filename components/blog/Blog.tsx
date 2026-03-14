"use client";
import React, { useState } from "react";
import Topbar from "@/components/topbar/Topbar";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import Mantra from "../Mantra/Mantra";
import Link from "next/link";
import {
  FiSearch,
  FiCalendar,
  FiArrowRight,
  FiShare2,
  FiBookmark,
  FiClock,
  FiUser,
} from "react-icons/fi";
import { BsEye, BsChat, BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { PiFlowerLotus } from "react-icons/pi";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [savedPosts, setSavedPosts] = useState<number[]>([]);

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development in 2024",
      excerpt:
        "Explore the latest trends and technologies shaping the future of web development, from AI integration to WebAssembly.",
      author: "John Doe",
      date: "Mar 15, 2024",
      readTime: "6 min",
      category: "Technology",
      image: "/assets/two.jpg",
      views: 1250,
      comments: 24,
      featured: true,
    },
    {
      id: 2,
      title: "Mastering React Performance Optimization",
      excerpt:
        "Learn advanced techniques to optimize your React applications for better performance and user experience.",
      author: "Sarah Johnson",
      date: "Mar 10, 2024",
      readTime: "8 min",
      category: "Web Development",
      image: "/assets/one.jpg",
      views: 890,
      comments: 18,
      featured: true,
    },
    {
      id: 3,
      title: "Building Scalable APIs with Next.js",
      excerpt:
        "A comprehensive guide to creating robust and scalable APIs using Next.js API routes and best practices.",
      author: "Mike Chen",
      date: "Mar 5, 2024",
      readTime: "10 min",
      category: "Backend",
      image: "/assets/c.jpg",
      views: 750,
      comments: 12,
      featured: false,
    },
    {
      id: 4,
      title: "UI/UX Design Principles for Developers",
      excerpt:
        "Essential design principles that every developer should know to create better user interfaces and experiences.",
      author: "Emma Wilson",
      date: "Feb 28, 2024",
      readTime: "7 min",
      category: "Design",
      image: "/assets/two.jpg",
      views: 1100,
      comments: 31,
      featured: false,
    },
    {
      id: 5,
      title: "Getting Started with TypeScript in 2024",
      excerpt:
        "A beginner-friendly introduction to TypeScript and why it's becoming essential for modern web development.",
      author: "Alex Rivera",
      date: "Feb 22, 2024",
      readTime: "5 min",
      category: "Programming",
      image: "/assets/one.jpg",
      views: 950,
      comments: 15,
      featured: false,
    },
    {
      id: 6,
      title: "The Complete Guide to SEO for Single Page Applications",
      excerpt:
        "Learn how to optimize your SPAs for search engines with practical techniques and tools.",
      author: "David Kim",
      date: "Feb 18, 2024",
      readTime: "9 min",
      category: "SEO",
      image: "/assets/c.jpg",
      views: 680,
      comments: 9,
      featured: false,
    },
  ];

  const categories = [
    "All",
    "Technology",
    "Web Development",
    "Design",
    "Programming",
    "Backend",
    "SEO",
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter((post) => post.featured);

  const toggleSave = (postId: number) => {
    setSavedPosts((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId],
    );
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
              Wisdom & Insights
            </span>
          </div>

          <h1 className="flex flex-row items-center justify-center text-4xl md:text-5xl font-light text-[#2C1810] mb-4 tracking-tight">
            Moksha
            <span className="block text-5xl md:text-6xl font-serif text-[#8B6A3E] mt-2">
              Blog
            </span>
          </h1>

          <p className="text-base text-[#5A3E2B]/70 max-w-2xl mx-auto mb-8">
            Discover articles on spirituality, wellness, and sacred journeys.
            Ancient wisdom for modern souls.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <div className="relative flex items-center">
              <FiSearch className="absolute left-3 text-[#8B6A3E]/40 text-lg" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 text-sm bg-white rounded-xl border border-[#E7D5C2] focus:border-[#8B6A3E] focus:ring-2 focus:ring-[#8B6A3E]/20 outline-none transition"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "text-white shadow-md"
                    : "bg-white text-[#5A3E2B] hover:bg-[#F5E9D9] border border-[#E7D5C2]"
                }`}
                onClick={() => setSelectedCategory(category)}
                style={
                  selectedCategory === category
                    ? { backgroundColor: themeColor }
                    : {}
                }
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}

      {/* All Posts Section */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-sm tracking-[0.3em] uppercase text-[#8B6A3E] mb-1 block">
              Latest Posts
            </span>
            <h2 className="text-2xl font-serif text-[#2C1810]">
              {selectedCategory === "All" ? "All Articles" : selectedCategory}
            </h2>
          </div>
          <div className="text-sm text-[#5A3E2B]/60">
            {filteredPosts.length} articles found
          </div>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#8B6A3E]/10 rounded-full flex items-center justify-center">
              <PiFlowerLotus className="text-2xl text-[#8B6A3E]" />
            </div>
            <h3 className="text-lg font-serif text-[#2C1810] mb-2">
              No articles found
            </h3>
            <p className="text-sm text-[#5A3E2B]/60 mb-4">
              Try adjusting your search or filter to find what you're looking
              for.
            </p>
            <button
              className="px-4 py-2 bg-[#8B6A3E] text-white text-sm rounded-lg hover:bg-[#5A3E2B] transition"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <Link
                  href={`/blog/${post.id}`}
                  className="block relative h-40 overflow-hidden"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3">
                    <span
                      className="px-2 py-1 text-[10px] font-medium text-white rounded-full"
                      style={{ backgroundColor: themeColor }}
                    >
                      {post.category}
                    </span>
                  </div>
                </Link>

                <div className="p-4">
                  <div className="flex items-center gap-2 text-[10px] text-[#5A3E2B]/60 mb-2">
                    <span className="flex items-center gap-1">
                      <FiCalendar className="text-[10px]" /> {post.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <FiClock className="text-[10px]" /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-serif text-[#2C1810] mb-2 line-clamp-2">
                    <Link
                      href={`/blog/${post.id}`}
                      className="hover:text-[#8B6A3E] transition"
                    >
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-[#5A3E2B]/70 mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-[#F5E9D9]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 rounded-full bg-[#8B6A3E]/10 flex items-center justify-center">
                        <span className="text-[8px] font-bold text-[#8B6A3E]">
                          {post.author.charAt(0)}
                        </span>
                      </div>
                      <span className="text-[10px] font-medium text-[#2C1810]">
                        {post.author}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 text-[#5A3E2B]/40 text-[8px]">
                        <BsEye className="text-[8px]" />
                        <span>{post.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[#5A3E2B]/40 text-[8px]">
                        <BsChat className="text-[8px]" />
                        <span>{post.comments}</span>
                      </div>
                      <button
                        onClick={() => toggleSave(post.id)}
                        className="p-1 hover:text-[#8B6A3E] transition"
                      >
                        {savedPosts.includes(post.id) ? (
                          <BsBookmarkFill className="text-[10px] text-[#8B6A3E]" />
                        ) : (
                          <BsBookmark className="text-[10px] text-[#5A3E2B]/40" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Pagination */}
        {filteredPosts.length > 0 && (
          <div className="flex justify-center mt-10">
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#E7D5C2] text-[#5A3E2B] text-sm hover:bg-[#F5E9D9] transition">
                &laquo;
              </button>
              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm transition ${
                    page === 1
                      ? "bg-[#8B6A3E] text-white"
                      : "border border-[#E7D5C2] text-[#5A3E2B] hover:bg-[#F5E9D9]"
                  }`}
                >
                  {page}
                </button>
              ))}
              <span className="px-1 text-[#5A3E2B]/40 text-sm">...</span>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#E7D5C2] text-[#5A3E2B] text-sm hover:bg-[#F5E9D9] transition">
                &raquo;
              </button>
            </div>
          </div>
        )}
      </section>

      <Mantra />

      {/* Newsletter Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C1810] to-[#8B6A3E]"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/pattern.png')] bg-repeat"></div>
          </div>
        </div>

        <div className="relative max-w-3xl mx-auto text-center px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm mb-5">
            <PiFlowerLotus className="w-3.5 h-3.5 text-white" />
            <span className="text-[10px] tracking-wider text-white">
              STAY CONNECTED
            </span>
          </div>

          <h2 className="text-3xl font-serif text-white mb-3">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-white/80 text-sm mb-6 max-w-md mx-auto">
            Receive weekly wisdom, spiritual insights, and updates on sacred
            journeys.
          </p>

          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <div className="relative flex-grow">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 pl-10 text-sm bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <button className="px-6 py-3 bg-white text-[#8B6A3E] text-sm font-medium rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Subscribe
            </button>
          </div>

          <p className="text-white/60 text-sm mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Blog;
