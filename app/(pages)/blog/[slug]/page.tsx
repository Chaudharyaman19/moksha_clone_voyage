import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import { blogsApi, BlogPost } from "@/lib/blogsApi";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";
import ShareBar from "@/components/page-features/blog/ShareBar";
import { PiFlowerLotus } from "react-icons/pi";
import {
  FiCalendar,
  FiUser,
  FiArrowLeft,
  FiArrowRight,
  FiTag,
  FiPhoneCall,
  FiClock,
  FiBookmark,
  FiHelpCircle,
} from "react-icons/fi";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await blogsApi.getBySlug(slug);
  if (!blog) return { title: "Blog Not Found - Moksha Sewa" };

  return {
    title: blog.seo?.metaTitle || `${blog.title} | Moksha Sewa`,
    description: blog.seo?.metaDescription || blog.excerpt || blog.content.substring(0, 150),
    keywords: blog.seo?.metaKeywords || blog.tags?.join(", "),
    openGraph: {
      title: blog.seo?.ogTitle || blog.title,
      description: blog.seo?.ogDescription || blog.excerpt,
      images: [blog.seo?.ogImage || blog.coverImage || "/assets/og/logo-moksha-seva-og.png"],
    },
    alternates: {
      canonical: blog.seo?.canonicalUrl || `https://mokshasewa.org/blog/${blog.slug}`,
    },
    robots: {
      index: blog.seo?.robotsIndex !== false,
      follow: blog.seo?.robotsFollow !== false,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await blogsApi.getBySlug(slug);

  if (!blog) {
    notFound();
  }

  // Fetch all public blogs to display related articles
  const allBlogs = await blogsApi.getAllPublic();
  const relatedBlogs = allBlogs
    .filter((b) => b.slug !== blog.slug)
    .slice(0, 2);

  const formattedDate = blog.publishedAt || blog.createdAt
    ? new Date(blog.publishedAt || blog.createdAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "Recent";

  // Approximate reading time
  const wordCount = blog.content ? blog.content.split(/\s+/).length : 200;
  const readTimeMinutes = Math.max(1, Math.ceil(wordCount / 180));

  // Article JSON-LD
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    image: [blog.coverImage || "https://mokshasewa.org/assets/og/logo-moksha-seva-og.png"],
    datePublished: blog.publishedAt || blog.createdAt,
    dateModified: blog.updatedAt || blog.createdAt,
    author: [
      {
        "@type": "Person",
        name: blog.author || "Moksha Sewa",
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "Moksha Sewa",
      logo: {
        "@type": "ImageObject",
        url: "https://mokshasewa.org/assets/logo-moksha-seva.png",
      },
    },
  };

  const currentUrl = `https://mokshasewa.org/blog/${blog.slug}`;

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#FAF7F2] text-[#2C1810] antialiased">
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

      <JsonLd data={breadcrumbJsonLd(`/blog/${blog.slug}`, blog.title)} />
      <JsonLd data={blog.seo?.schemaMarkup ? JSON.parse(blog.seo.schemaMarkup) : articleJsonLd} />

      {/* ===================== HERO HEADER (FIT SCREEN MAX-W-7XL) ===================== */}
      <header className="relative w-full overflow-hidden border-b border-[#E7D5C2]/70">
        <div className="ms-weave absolute inset-0" aria-hidden="true" />
        <div
          className="absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-[#C9873A]/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-48 -left-24 h-[420px] w-[420px] rounded-full bg-[#8B6A3E]/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pb-8 pt-36 sm:pb-12 sm:pt-40 lg:pt-44">
          {/* Breadcrumb navigation */}
          <nav className="flex items-center gap-2 text-xs font-medium text-[#8B6A3E]/80 mb-5">
            <Link href="/" className="hover:text-[#2C1810] transition">
              Home
            </Link>
            <span>›</span>
            <Link href="/blog" className="hover:text-[#2C1810] transition">
              Blog
            </Link>
            <span>›</span>
            <span className="text-[#2C1810] truncate max-w-xs sm:max-w-md font-semibold">
              {blog.title}
            </span>
          </nav>

          {/* Category Pill & Reading Time */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="rounded-full bg-[#8B6A3E] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white shadow-xs">
              {blog.category || "Moksha Sewa"}
            </span>

            <span className="inline-flex items-center gap-1.5 text-xs text-[#8B6A3E] font-medium bg-white/70 px-3 py-1 rounded-full border border-[#E7D5C2]/80">
              <FiClock className="h-3 w-3 text-[#C9873A]" />
              {readTimeMinutes} min read
            </span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] tracking-[-0.02em] text-[#2C1810] w-full">
            {blog.title}
          </h1>

          {/* Author & Date metadata row */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#E7D5C2] pt-4 text-xs text-[#5A3E2B] w-full">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-[#8B6A3E] text-white font-serif font-bold text-sm shadow-xs">
                {(blog.author || "M")[0]}
              </div>
              <div>
                <p className="font-semibold text-[#2C1810] text-[13px]">{blog.author || "Moksha Sewa"}</p>
                <p className="text-[11px] text-[#8B6A3E]/80">Humanitarian Sewa Team</p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 font-medium text-[#8B6A3E]">
              <FiCalendar className="h-4 w-4 text-[#C9873A]" />
              <span>Published on {formattedDate}</span>
            </div>
          </div>
        </div>
      </header>

      {/* ===================== MAIN BODY: 2-COLUMN FULL SCREEN LAYOUT (MAX-W-7XL) ===================== */}
      <main className="mx-auto max-w-7xl px-5 sm:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* LEFT: MAIN ARTICLE CONTENT (8 COLUMNS) */}
          <div className="lg:col-span-8 min-w-0">
            {/* Cover Image */}
            {blog.coverImage && (
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#E7D5C2] bg-[#F0E8D5] shadow-xs mb-8">
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 850px"
                  className="object-cover"
                />
              </div>
            )}

            {/* Lead Excerpt */}
            {blog.excerpt && (
              <div className="rounded-xl border-l-4 border-[#8B6A3E] bg-[#F5EDE1]/70 p-5 sm:p-6 mb-8 text-[15px] sm:text-[17px] italic leading-relaxed text-[#5A3E2B]">
                &ldquo;{blog.excerpt}&rdquo;
              </div>
            )}

            {/* Formatted Content */}
            <article className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-normal prose-headings:text-[#2C1810] prose-p:text-[#4F3A2D] prose-p:leading-relaxed prose-p:text-[16px] prose-li:text-[#4F3A2D] prose-blockquote:border-l-[#8B6A3E] prose-blockquote:bg-[#FAF7F2] prose-blockquote:text-[#5A3E2B] prose-a:text-[#8B6A3E] prose-a:font-semibold hover:prose-a:underline">
              {blog.content.includes("<") ? (
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              ) : (
                <div className="space-y-4 whitespace-pre-line text-[#4F3A2D] text-[16px] leading-relaxed">
                  {blog.content}
                </div>
              )}
            </article>

            {/* Tags List */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="mt-10 pt-6 border-t border-[#E7D5C2] flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-[#8B6A3E] inline-flex items-center gap-1 mr-1">
                  <FiTag className="h-3 w-3" /> Tags:
                </span>
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white px-3.5 py-1 text-xs font-medium text-[#5A3E2B] border border-[#E7D5C2] shadow-2xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Social Share Bar */}
            <div className="mt-6 pt-4 border-t border-[#E7D5C2]">
              <ShareBar title={blog.title} url={currentUrl} />
            </div>

            {/* Back Button */}
            <div className="mt-8 pt-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-xl border border-[#E7D5C2] bg-white px-5 py-2.5 text-xs font-semibold text-[#8B6A3E] hover:bg-slate-50 transition shadow-2xs"
              >
                <FiArrowLeft className="h-3.5 w-3.5" />
                Back to All Articles
              </Link>
            </div>
          </div>

          {/* RIGHT: FIT SCREEN SIDEBAR (4 COLUMNS) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* Mission & Organization Card */}
            <div className="rounded-2xl border border-[#E7D5C2] bg-white p-6 shadow-xs">
              <div className="flex items-center gap-3 pb-4 border-b border-[#F0E8D5]">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[#8B6A3E] text-white shrink-0">
                  <PiFlowerLotus className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-medium text-[#2C1810]">
                    Moksha Sewa Mission
                  </h3>
                  <p className="text-[11px] text-[#8B6A3E]">By Namo Gange Trust</p>
                </div>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-[#5A3E2B]/85">
                Providing dignified last rites, holy river asthi visarjan, ambulance transport, and verified pandit assistance with compassion and transparency.
              </p>

              <div className="mt-5 pt-4 border-t border-[#F0E8D5] flex items-center justify-between text-xs">
                <span className="font-medium text-[#8B6A3E]">Need assistance?</span>
                <Link
                  href="/contact"
                  className="font-bold text-[#2C1810] hover:text-[#8B6A3E] underline transition"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* 24x7 Helpline Card */}
            <div className="rounded-2xl border border-[#E7D5C2] bg-gradient-to-br from-[#2C1810] to-[#432619] p-6 text-white shadow-md">
              <div className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-widest text-[#E7D5C2]">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                24×7 Active Helpline
              </div>

              <h3 className="mt-3 font-serif text-xl font-normal leading-snug">
                Immediate Last Rites &amp; Ambulance Support
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-white/80">
                Facing an emergency or loss of a loved one? Our on-ground coordinators are available day and night.
              </p>

              <a
                href="tel:+919654900525"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#C9873A] px-4 py-3 text-xs font-bold text-white shadow hover:bg-[#b0732e] transition"
              >
                <FiPhoneCall className="h-4 w-4" />
                Call Helpline: +91 96549 00525
              </a>
            </div>

            {/* Quick Article Highlights Card */}
            <div className="rounded-2xl border border-[#E7D5C2] bg-white p-6 shadow-xs">
              <h3 className="font-serif text-base font-medium text-[#2C1810] flex items-center gap-2">
                <FiBookmark className="h-4 w-4 text-[#8B6A3E]" />
                Article Overview
              </h3>

              <div className="mt-4 space-y-3 text-xs text-[#5A3E2B]/85">
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 text-emerald-600 font-bold">✓</span>
                  <span>Topic: {blog.category || "Guidance & Tradition"}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 text-emerald-600 font-bold">✓</span>
                  <span>Reading Time: ~{readTimeMinutes} minutes</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 text-emerald-600 font-bold">✓</span>
                  <span>Author: {blog.author || "Moksha Sewa"}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 text-emerald-600 font-bold">✓</span>
                  <span>Published: {formattedDate}</span>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* ===================== RELATED ARTICLES (2-PER-ROW: LEFT IMAGE, RIGHT DETAILS) ===================== */}
        {relatedBlogs.length > 0 && (
          <section className="mt-16 pt-12 border-t border-[#E7D5C2]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#2C1810]">
                  Related Articles
                </h2>
                <p className="text-xs sm:text-sm text-[#5A3E2B]/75 mt-1">
                  Continue exploring reflections and ritual guides
                </p>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#8B6A3E] hover:underline"
              >
                View all articles
                <FiArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Single row me 2 blogs: Left Image, Right Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {relatedBlogs.map((item) => (
                <article
                  key={item._id}
                  className="flex flex-col sm:flex-row bg-white rounded-2xl border border-[#E7D5C2]/85 overflow-hidden shadow-[0_2px_12px_rgba(44,24,16,0.03)] hover:shadow-xl hover:border-[#C9873A]/60 transition-all duration-300 group"
                >
                  {/* Left: Image */}
                  <Link
                    href={`/blog/${item.slug}`}
                    className="relative sm:w-[44%] min-h-[200px] sm:min-h-[220px] shrink-0 overflow-hidden bg-[#F0E8D5] block"
                  >
                    {item.coverImage ? (
                      <Image
                        src={item.coverImage}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 grid place-items-center bg-[#F4EDE3] text-[#8B6A3E]/60">
                        <PiFlowerLotus className="h-7 w-7" />
                      </div>
                    )}
                    <span className="absolute left-3 top-3 rounded-full bg-[#8B6A3E]/90 px-2.5 py-0.5 text-[9.5px] font-semibold text-white uppercase tracking-wider">
                      {item.category || "Moksha Sewa"}
                    </span>
                  </Link>

                  {/* Right: Details */}
                  <div className="flex flex-col justify-between p-5 w-full">
                    <div>
                      <div className="flex items-center gap-2 text-[11px] font-medium text-[#8B6A3E]/80">
                        <FiCalendar className="h-3 w-3 text-[#C9873A]" />
                        <span>
                          {item.publishedAt || item.createdAt
                            ? new Date(item.publishedAt || item.createdAt).toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              })
                            : "Recent"}
                        </span>
                      </div>

                      <Link href={`/blog/${item.slug}`} className="block mt-2">
                        <h4 className="font-serif text-lg font-medium leading-snug text-[#2C1810] group-hover:text-[#8B6A3E] transition-colors ms-clamp-2">
                          {item.title}
                        </h4>
                      </Link>

                      <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-[#5A3E2B]/80 ms-clamp-2">
                        {item.excerpt || item.content.replace(/<[^>]*>/g, "").slice(0, 110) + "..."}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#F0E8D5] flex items-center justify-between">
                      <span className="text-[10px] text-[#8B6A3E]/60 uppercase tracking-wider font-semibold">
                        Article
                      </span>
                      <Link
                        href={`/blog/${item.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8B6A3E] group-hover:text-[#2C1810] group-hover:gap-2.5 transition-all"
                      >
                        Read Article <FiArrowRight className="h-3.5 w-3.5 text-[#C9873A]" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
