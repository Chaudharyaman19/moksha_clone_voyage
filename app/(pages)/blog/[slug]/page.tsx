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

      {/* ===================== HERO HEADER (MAX-W-7XL MATCHING HOME & SITE) ===================== */}
      <header className="relative w-full overflow-hidden border-b border-[#E7D5C2]/70 bg-[#FAF7F2]">
        <div className="ms-weave absolute inset-0" aria-hidden="true" />
        <div
          className="absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-[#C9873A]/10 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-48 -left-24 h-[420px] w-[420px] rounded-full bg-[#8B6A3E]/10 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-20 mx-auto h-full max-w-7xl px-4 sm:px-5 lg:px-0 pb-6 pt-44">
          {/* Breadcrumb navigation - clears logo comfortably */}
          <nav className="flex items-center gap-2 text-xs sm:text-[13px] font-medium text-[#8B6A3E]/90 mb-4 flex-wrap">
            <Link href="/" className="hover:text-[#2C1810] transition">
              Home
            </Link>
            <span className="text-[#C9873A]">›</span>
            <Link href="/blog" className="hover:text-[#2C1810] transition">
              Blog
            </Link>
            <span className="text-[#C9873A]">›</span>
            <span className="text-[#2C1810] truncate max-w-xs sm:max-w-md font-semibold">
              {blog.title}
            </span>
          </nav>

          {/* Category Pill & Reading Time */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-3.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#8B6A3E]/20 bg-white/90 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#8B6A3E] shadow-2xs">
              <PiFlowerLotus className="h-3.5 w-3.5 text-[#C9873A]" />
              {blog.category || "Moksha Sewa"}
            </span>

            <span className="inline-flex items-center gap-1.5 text-xs text-[#8B6A3E] font-medium bg-white/80 px-3 py-1 rounded-full border border-[#E7D5C2]">
              <FiClock className="h-3 w-3 text-[#C9873A]" />
              {readTimeMinutes} min read
            </span>

            <span className="inline-flex items-center gap-1.5 text-xs text-[#5A3E2B]/85 font-medium bg-white/70 px-3 py-1 rounded-full border border-[#E7D5C2]/80">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Verified Sewa Guidance
            </span>
          </div>

          {/* Title matching Home page headline standards */}
          <h1 className="font-semibold text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] leading-[1.2] tracking-tight text-[#2C1810] max-w-4xl">
            {blog.title}
          </h1>

          {/* Lead Subtitle / Excerpt */}
          {blog.excerpt && (
            <p className="mt-3.5 max-w-3xl text-base sm:text-lg text-[#5A3E2B]/85 leading-relaxed font-normal">
              {blog.excerpt}
            </p>
          )}

          {/* Quick Mission Highlight Badges */}
          <div className="mt-5 flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#FAF0E4]/90 border border-[#E2C99E] px-3 py-1 text-[#8B6A3E] font-medium">
              🕊️ Dignified Farewell Mission
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/80 border border-[#E7D5C2] px-3 py-1 text-[#5A3E2B] font-medium">
              📍 Delhi • Ghaziabad • Noida
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/80 border border-[#E7D5C2] px-3 py-1 text-[#5A3E2B] font-medium">
              ✨ 24×7 On-Ground Support
            </span>
          </div>

          {/* Author & Date metadata bar */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#E7D5C2]/80 pt-4 text-xs sm:text-[13px] text-[#5A3E2B] w-full">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-[#8B6A3E] text-white font-semibold text-sm shadow-xs">
                {(blog.author || "M")[0]}
              </div>
              <div>
                <p className="font-semibold text-[#2C1810] text-xs sm:text-sm">{blog.author || "Moksha Sewa"}</p>
                <p className="text-[11px] sm:text-xs text-[#8B6A3E]/85">Humanitarian Sewa Team • Namo Gange Trust</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-[#8B6A3E]">
              <div className="inline-flex items-center gap-1.5 font-medium">
                <FiCalendar className="h-4 w-4 text-[#C9873A]" />
                <span>Published on {formattedDate}</span>
              </div>
              <span className="text-[#E7D5C2] hidden sm:inline">•</span>
              <div className="inline-flex items-center gap-1.5 text-[#5A3E2B]/80 font-medium">
                <FiClock className="h-3.5 w-3.5 text-[#C9873A]" />
                <span>~{wordCount} words</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ===================== MAIN BODY: 2-COLUMN LAYOUT (MAX-W-7XL) ===================== */}
      <main className="relative z-20 mx-auto h-full max-w-7xl px-4 sm:px-5 lg:px-0 mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-4 items-start">
          {/* LEFT: MAIN ARTICLE CONTENT (8 COLUMNS) */}
          <div className="lg:col-span-8 min-w-0">
            {/* Cover Image */}
            {blog.coverImage && (
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#E7D5C2] bg-[#F0E8D5] shadow-xs mb-4">
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
              <div className="rounded-xl border-l-4 border-[#8B6A3E] bg-[#FDFBF7] p-4 mb-4 text-base sm:text-[17px] italic leading-relaxed text-[#5A3E2B] border-r border-t border-b border-[#E7D5C2]/70 shadow-2xs">
                &ldquo;{blog.excerpt}&rdquo;
              </div>
            )}

            {/* Formatted Content */}
            <article className="prose prose-lg max-w-none text-[#5A3E2B] text-base sm:text-[16px] leading-[1.75] prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-[#2C1810] prose-h2:text-2xl sm:prose-h2:text-[26px] prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl sm:prose-h3:text-[22px] prose-h3:mt-6 prose-h3:mb-3 prose-p:text-[#5A3E2B] prose-p:leading-[1.75] prose-p:mb-5 prose-li:text-[#5A3E2B] prose-blockquote:border-l-4 prose-blockquote:border-[#C99A4B] prose-blockquote:bg-[#FAF7F2] prose-blockquote:text-[#5A3E2B] prose-blockquote:italic prose-blockquote:p-4 prose-blockquote:rounded-r-xl prose-a:text-[#8B6A3E] prose-a:font-semibold hover:prose-a:underline">
              {blog.content.includes("<") ? (
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              ) : (
                <div className="space-y-5 whitespace-pre-line text-[#5A3E2B] text-base sm:text-[16px] leading-[1.75]">
                  {blog.content}
                </div>
              )}
            </article>

            {/* Tags List */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="mt-2 pt-2 border-t border-[#E7D5C2] flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-[#8B6A3E] inline-flex items-center gap-1.5 mr-1">
                  <FiTag className="h-3 w-3 text-[#C9873A]" /> Tags:
                </span>
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white px-3.5 py-1 text-xs font-medium text-[#5A3E2B] border border-[#E7D5C2] shadow-2xs hover:border-[#8B6A3E] transition"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Social Share Bar */}
            <div className="mt-2 pt-2 border-t border-[#E7D5C2]">
              <ShareBar title={blog.title} url={currentUrl} />
            </div>

            {/* Back Button */}
            <div className="mt-2 pt-2">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-xl border border-[#E7D5C2] bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#8B6A3E] hover:bg-[#FAF7F2] transition shadow-2xs"
              >
                <FiArrowLeft className="h-3.5 w-3.5" />
                Back to All Articles
              </Link>
            </div>
          </div>

          {/* RIGHT: FIT SCREEN SIDEBAR (4 COLUMNS) */}
          <aside className="lg:col-span-4 space-y-4 lg:sticky lg:top-24">
            {/* Mission & Organization Card */}
            <div className="rounded-2xl border border-[#E7D5C2] bg-white p-4 shadow-xs">
              <div className="flex items-center gap-3 pb-4 border-b border-[#F0E8D5]">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[#8B6A3E] text-white shrink-0 shadow-2xs">
                  <PiFlowerLotus className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#2C1810]">
                    Moksha Sewa Mission
                  </h3>
                  <p className="text-xs text-[#8B6A3E]">By Namo Gange Trust</p>
                </div>
              </div>

              <p className="mt-4 text-xs sm:text-[13px] leading-relaxed text-[#5A3E2B]/85">
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
            <div className="rounded-2xl border border-[#E7D5C2] bg-gradient-to-br from-[#2C1810] to-[#3D2216] p-4 text-white shadow-md">
              <div className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-widest text-[#E7D5C2]">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                24×7 Active Helpline
              </div>

              <h3 className="mt-3 text-lg sm:text-xl font-semibold leading-snug">
                Immediate Last Rites &amp; Ambulance Support
              </h3>

              <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-white/80">
                Facing an emergency or loss of a loved one? Our on-ground coordinators are available day and night.
              </p>

              <a
                href="tel:+919654900525"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#C9873A] px-4 py-3 text-xs sm:text-sm font-bold text-white shadow hover:bg-[#b0732e] transition"
              >
                <FiPhoneCall className="h-4 w-4" />
                Call Helpline: +91 96549 00525
              </a>
            </div>

            {/* Quick Article Highlights Card */}
            <div className="rounded-2xl border border-[#E7D5C2] bg-white p-4 shadow-xs">
              <h3 className="text-base font-semibold text-[#2C1810] flex items-center gap-2">
                <FiBookmark className="h-4 w-4 text-[#8B6A3E]" />
                Article Overview
              </h3>

              <div className="mt-4 space-y-3 text-xs sm:text-[13px] text-[#5A3E2B]/85">
                <div className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Topic: {blog.category || "Guidance & Tradition"}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Reading Time: ~{readTimeMinutes} minutes</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Author: {blog.author || "Moksha Sewa"}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Published: {formattedDate}</span>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* ===================== RELATED ARTICLES (2-PER-ROW: LEFT IMAGE, RIGHT DETAILS) ===================== */}
        {relatedBlogs.length > 0 && (
          <section className="mt-2 pt-2 border-t border-[#E7D5C2]">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <PiFlowerLotus className="h-4 w-4 text-[#C9873A]" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8B6A3E]">
                    Related Reflections
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#2C1810]">
                  Related Articles
                </h2>
                <p className="text-xs sm:text-sm text-[#5A3E2B]/80 mt-1">
                  Continue exploring reflections and ritual guidance from our team
                </p>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#8B6A3E] hover:text-[#2C1810] hover:underline"
              >
                View all articles
                <FiArrowRight className="h-3.5 w-3.5 text-[#C9873A]" />
              </Link>
            </div>

            {/* Single row me 2 blogs: Left Image, Right Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
              {relatedBlogs.map((item) => (
                <article
                  key={item._id}
                  className="flex flex-col sm:flex-row bg-white rounded-2xl border border-[#E7D5C2] overflow-hidden shadow-[0_2px_12px_rgba(44,24,16,0.03)] hover:shadow-md hover:border-[#C9873A]/60 transition-all duration-300 group"
                >
                  {/* Left: Image */}
                  <Link
                    href={`/blog/${item.slug}`}
                    className="relative sm:w-[42%] min-h-[200px] sm:min-h-[230px] shrink-0 overflow-hidden bg-[#F0E8D5] block"
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
                    <span className="absolute left-3 top-3 rounded-full bg-[#8B6A3E]/90 px-2.5 py-0.5 text-[10px] font-semibold text-white uppercase tracking-wider shadow-2xs">
                      {item.category || "Moksha Sewa"}
                    </span>
                  </Link>

                  {/* Right: Details */}
                  <div className="flex flex-col justify-between p-5 sm:p-4 w-full">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-medium text-[#8B6A3E]/85">
                        <FiCalendar className="h-3.5 w-3.5 text-[#C9873A]" />
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

                      <Link href={`/blog/${item.slug}`} className="block mt-4">
                        <h4 className="text-lg font-semibold leading-snug text-[#2C1810] group-hover:text-[#8B6A3E] transition-colors ms-clamp-2">
                          {item.title}
                        </h4>
                      </Link>

                      <p className="mt-1.5 text-xs sm:text-[13px] leading-relaxed text-[#5A3E2B]/80 ms-clamp-2">
                        {item.excerpt || item.content.replace(/<[^>]*>/g, "").slice(0, 110) + "..."}
                      </p>
                    </div>

                    <div className="mt-4 pt-3.5 border-t border-[#F0E8D5] flex items-center justify-between">
                      <span className="text-[10.5px] text-[#8B6A3E]/70 uppercase tracking-wider font-semibold">
                        Article
                      </span>
                      <Link
                        href={`/blog/${item.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#8B6A3E] group-hover:text-[#2C1810] group-hover:gap-2.5 transition-all"
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
