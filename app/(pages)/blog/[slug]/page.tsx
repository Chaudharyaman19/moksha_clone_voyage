import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import { blogsApi, BlogPost } from "@/lib/blogsApi";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, languageAlternates } from "@/lib/seo";
import { toOgImage } from "@/lib/cloudinary";
import ShareBar from "@/components/page-features/blog/ShareBar";
import { PiFlowerLotus } from "@/lib/icons/pi";
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

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await blogsApi.getBySlug(slug);
  if (!blog) return { title: { absolute: "Blog Not Found - Moksha Sewa" } };

  const rawTitle = blog.seo?.metaTitle || blog.title;
  const cleanTitle = rawTitle
    .replace(/\s*[\|–-]\s*Moksha Sewa\s*$/i, "")
    .replace(/^\s*Moksha Sewa\s*[\|–-]\s*/i, "")
    .trim();
  const finalTitle = cleanTitle && cleanTitle.toLowerCase() !== "moksha sewa" ? cleanTitle : rawTitle;
  const canonicalUrl = blog.seo?.canonicalUrl || `https://mokshasewa.org/blog/${blog.slug}`;
  const ogImg = blog.seo?.ogImage || blog.bannerImage || blog.coverImage || "/assets/og/logo-moksha-seva-og.png";
  const desc = blog.seo?.metaDescription || blog.excerpt || (blog.content ? blog.content.replace(/<[^>]*>/g, "").substring(0, 160).trim() : "");
  const fullOgImage = toOgImage(ogImg.startsWith("http") ? ogImg : `https://mokshasewa.org${ogImg.startsWith("/") ? "" : "/"}${ogImg}`);
  const ogImageAlt = blog.seo?.ogImageAlt || blog.bannerImageAlt || blog.coverImageAlt || finalTitle;

  return {
    title: { absolute: `${finalTitle} | Moksha Sewa` },
    description: desc,
    keywords: blog.seo?.metaKeywords || blog.tags?.join(", "),
    alternates: {
      canonical: canonicalUrl,
      languages: languageAlternates(canonicalUrl),
    },
    openGraph: {
      type: "article",
      locale: "en_IN",
      title: blog.seo?.ogTitle || finalTitle,
      description: blog.seo?.ogDescription || desc,
      url: canonicalUrl,
      siteName: "Moksha Sewa",
      images: [
        {
          url: fullOgImage,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
      publishedTime: blog.publishedAt || blog.createdAt,
      modifiedTime: blog.updatedAt || blog.publishedAt || blog.createdAt,
      authors: [blog.author || "Moksha Sewa"],
      section: blog.category || "Moksha Sewa",
      tags: blog.tags || [],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.seo?.ogTitle || finalTitle,
      description: blog.seo?.ogDescription || desc,
      images: [fullOgImage],
    },
    robots: {
      index: blog.seo?.robotsIndex !== false,
      follow: blog.seo?.robotsFollow !== false,
      googleBot: {
        index: blog.seo?.robotsIndex !== false,
        follow: blog.seo?.robotsFollow !== false,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
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

  const currentUrl = blog.seo?.canonicalUrl || `https://mokshasewa.org/blog/${blog.slug}`;
  const ogImg = blog.seo?.ogImage || blog.coverImage || "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165264/moksha-sewa/assets/og/logo-moksha-seva-og.png";
  const fullOgImage = toOgImage(ogImg.startsWith("http") ? ogImg : `https://mokshasewa.org${ogImg.startsWith("/") ? "" : "/"}${ogImg}`);

  // Complete Google-recommended BlogPosting schema
  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${currentUrl}#article`,
    inLanguage: "en-IN",
    isPartOf: {
      "@type": "Blog",
      "@id": "https://mokshasewa.org/blog#blog",
      name: "Moksha Sewa Blog",
      publisher: {
        "@type": "Organization",
        name: "Moksha Sewa",
        url: "https://mokshasewa.org",
      },
    },
    headline: blog.title,
    description: blog.seo?.metaDescription || blog.excerpt || (blog.content ? blog.content.replace(/<[^>]*>/g, "").substring(0, 160).trim() : ""),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": currentUrl,
    },
    image: [fullOgImage],
    datePublished: blog.publishedAt || blog.createdAt,
    dateModified: blog.updatedAt || blog.publishedAt || blog.createdAt,
    author: [
      {
        "@type": "Person",
        name: blog.author || "Moksha Sewa",
        url: "https://mokshasewa.org/about",
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "Moksha Sewa",
      url: "https://mokshasewa.org",
      logo: {
        "@type": "ImageObject",
        url: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165236/moksha-sewa/assets/logo-moksha-seva.png",
      },
    },
    articleSection: blog.category || "Moksha Sewa",
    keywords: blog.seo?.metaKeywords || blog.tags?.join(", ") || "antim sanskar, cremation, sewa",
  };

  let parsedCustomSchema = null;
  if (blog.seo?.schemaMarkup) {
    try {
      parsedCustomSchema = JSON.parse(blog.seo.schemaMarkup);
    } catch {
      // fallback to blogPostingJsonLd
    }
  }

  // Clean content from excessive empty paragraphs and multiple consecutive breaks
  const cleanContent = blog.content
    ? blog.content
        .replace(/(<p>(?:\s|&nbsp;|<br\s*\/?>)*<\/p>\s*)+/gi, "")
        .replace(/(<br\s*\/?>\s*){2,}/gi, "<br>")
        .replace(/\n{3,}/g, "\n\n")
    : "";

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
      <JsonLd data={parsedCustomSchema || blogPostingJsonLd} />

      {/* ===================== HERO HEADER (COMPACT & TIGHT SPACING) ===================== */}
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

        <div className="blog-header-1366 relative z-20 mx-auto h-full max-w-7xl px-4 sm:px-5 lg:px-0 2xl:px-8 pb-3 sm:pb-3.5 pt-28 sm:pt-30 lg:pt-32">
          {/* Breadcrumb navigation */}
          <nav className="flex items-center gap-1.5 text-xs font-medium text-[#8B6A3E]/90 mb-2 flex-wrap">
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
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#8B6A3E]/20 bg-white/90 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[#8B6A3E] shadow-2xs">
              <PiFlowerLotus className="h-3 w-3 text-[#C9873A]" />
              {blog.category || "Moksha Sewa"}
            </span>

            <span className="inline-flex items-center gap-1.5 text-[11px] text-[#8B6A3E] font-medium bg-white/80 px-2.5 py-0.5 rounded-full border border-[#E7D5C2]">
              <FiClock className="h-3 w-3 text-[#C9873A]" />
              {readTimeMinutes} min read
            </span>

            <span className="inline-flex items-center gap-1.5 text-[11px] text-[#5A3E2B]/85 font-medium bg-white/70 px-2.5 py-0.5 rounded-full border border-[#E7D5C2]/80">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Verified Sewa Guidance
            </span>
          </div>

          {/* Title */}
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-[34px] leading-snug tracking-tight text-[#2C1810] max-w-4xl">
            {blog.title.replace(/\s*[\|–-]\s*Moksha Sewa\s*$/i, "").trim() || blog.title}
          </h1>

          {/* Lead Subtitle / Excerpt */}
          {blog.excerpt && (
            <p className="mt-2 max-w-3xl text-sm sm:text-base text-[#5A3E2B]/90 leading-relaxed font-normal">
              {blog.excerpt}
            </p>
          )}

          {/* Quick Mission Highlight Badges */}
          <div className="mt-2.5 flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs">
            <span className="inline-flex items-center gap-1 rounded-md bg-[#FAF0E4]/90 border border-[#E2C99E] px-2.5 py-0.5 text-[#8B6A3E] font-medium">
              🕊️ Dignified Farewell Mission
            </span>
            <span className="inline-flex items-center gap-1 rounded-md bg-white/80 border border-[#E7D5C2] px-2.5 py-0.5 text-[#5A3E2B] font-medium">
              📍 Delhi • Ghaziabad • Noida
            </span>
            <span className="inline-flex items-center gap-1 rounded-md bg-white/80 border border-[#E7D5C2] px-2.5 py-0.5 text-[#5A3E2B] font-medium">
              ✨ 24×7 On-Ground Support
            </span>
          </div>

          {/* Author & Date metadata bar */}
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-[#E7D5C2]/80 pt-2.5 text-xs text-[#5A3E2B] w-full">
            <div className="flex items-center gap-2.5">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-[#8B6A3E] text-white font-semibold text-xs shadow-xs">
                {(blog.author || "M")[0]}
              </div>
              <div>
                <p className="font-semibold text-[#2C1810] text-xs sm:text-[13px]">{blog.author || "Moksha Sewa"}</p>
                <p className="text-[10.5px] sm:text-[11px] text-[#8B6A3E]/85">Humanitarian Sewa Team • Namo Gange Trust</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-[#8B6A3E]">
              <div className="inline-flex items-center gap-1.5 font-medium">
                <FiCalendar className="h-3.5 w-3.5 text-[#C9873A]" />
                <span>Published on {formattedDate}</span>
              </div>
              <span className="text-[#E7D5C2] hidden sm:inline">•</span>
              <div className="inline-flex items-center gap-1.5 text-[#5A3E2B]/80 font-medium">
                <FiClock className="h-3 w-3 text-[#C9873A]" />
                <span>~{wordCount} words</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ===================== MAIN BODY: 2-COLUMN LAYOUT (MAX-W-7XL) ===================== */}
      <main className="blog-container-1366 relative z-20 mx-auto h-full max-w-7xl px-4 sm:px-5 lg:px-0 2xl:px-8 mt-3 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-start">
          {/* LEFT: MAIN ARTICLE CONTENT (8 COLUMNS) */}
          <div className="lg:col-span-8 min-w-0">
            {/* Detail Banner Image */}
            {(blog.bannerImage || blog.coverImage) && (
              <div className="relative aspect-[16/5] w-full overflow-hidden rounded-xl border border-[#E7D5C2] bg-[#F0E8D5] shadow-xs mb-3">
                <Image
                  src={blog.bannerImage || blog.coverImage!}
                  alt={blog.bannerImageAlt || blog.coverImageAlt || blog.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 850px"
                  className="object-cover"
                />
              </div>
            )}

            {/* Formatted Content with tight typography */}
            <article className="prose max-w-none text-[#5A3E2B] text-sm sm:text-[15px] leading-relaxed prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-[#2C1810] prose-h1:text-2xl prose-h1:mt-3 prose-h1:mb-1 prose-h2:text-lg sm:prose-h2:text-xl prose-h2:mt-3 prose-h2:mb-1 prose-h3:text-base sm:prose-h3:text-lg prose-h3:mt-2.5 prose-h3:mb-1 prose-p:text-[#5A3E2B] prose-p:leading-relaxed prose-p:mb-1.5 [&_p:empty]:hidden [&_p:has(>br:only-child)]:hidden [&_br+br]:hidden prose-li:text-[#5A3E2B] prose-li:my-0.5 prose-blockquote:border-l-3 prose-blockquote:border-[#C99A4B] prose-blockquote:bg-[#FAF7F2] prose-blockquote:text-[#5A3E2B] prose-blockquote:italic prose-blockquote:py-1.5 prose-blockquote:px-3 prose-blockquote:my-2 prose-blockquote:rounded-r-lg prose-a:text-[#8B6A3E] prose-a:font-semibold hover:prose-a:underline">
              {cleanContent.includes("<") ? (
                <div dangerouslySetInnerHTML={{ __html: cleanContent }} />
              ) : (
                <div className="space-y-1.5 whitespace-pre-line text-[#5A3E2B] text-sm sm:text-[15px] leading-relaxed">
                  {cleanContent}
                </div>
              )}
            </article>

            {/* Tags List */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="mt-3 pt-2.5 border-t border-[#E7D5C2] flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-semibold text-[#8B6A3E] inline-flex items-center gap-1 mr-1">
                  <FiTag className="h-3 w-3 text-[#C9873A]" /> Tags:
                </span>
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white px-2.5 py-0.5 text-[11px] font-medium text-[#5A3E2B] border border-[#E7D5C2] shadow-2xs hover:border-[#8B6A3E] transition"
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
            <div className="mt-2.5 pt-1">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-lg border border-[#E7D5C2] bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-[#8B6A3E] hover:bg-[#FAF7F2] transition shadow-2xs"
              >
                <FiArrowLeft className="h-3.5 w-3.5" />
                Back to All Articles
              </Link>
            </div>
          </div>

          {/* RIGHT: FIT SCREEN SIDEBAR (4 COLUMNS) */}
          <aside className="lg:col-span-4 space-y-3 lg:sticky lg:top-24">
            {/* Mission & Organization Card */}
            <div className="rounded-xl border border-[#E7D5C2] bg-white p-3.5 sm:p-4 shadow-xs">
              <div className="flex items-center gap-2.5 pb-2.5 border-b border-[#F0E8D5]">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-[#8B6A3E] text-white shrink-0 shadow-2xs">
                  <PiFlowerLotus className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-[#2C1810]">
                    Moksha Sewa Mission
                  </h3>
                  <p className="text-[11px] text-[#8B6A3E]">By Namo Gange Trust</p>
                </div>
              </div>

              <p className="mt-2.5 text-xs sm:text-[13px] leading-relaxed text-[#5A3E2B]/85">
                Providing dignified last rites, holy river asthi visarjan, ambulance transport, and verified pandit assistance with compassion and transparency.
              </p>

              <div className="mt-3 pt-2.5 border-t border-[#F0E8D5] flex items-center justify-between text-xs">
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
            <div className="rounded-xl border border-[#E7D5C2] bg-gradient-to-br from-[#2C1810] to-[#3D2216] p-3.5 sm:p-4 text-white shadow-md">
              <div className="flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-widest text-[#E7D5C2]">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                24×7 Active Helpline
              </div>

              <h3 className="mt-2 text-base sm:text-lg font-semibold leading-snug">
                Immediate Last Rites &amp; Ambulance Support
              </h3>

              <p className="mt-1.5 text-xs text-white/80 leading-relaxed">
                Facing an emergency or loss of a loved one? Our on-ground coordinators are available day and night.
              </p>

              <a
                href="tel:+919654900525"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#C9873A] px-3.5 py-2.5 text-xs sm:text-sm font-bold text-white shadow hover:bg-[#b0732e] transition"
              >
                <FiPhoneCall className="h-3.5 w-3.5" />
                Call Helpline: +91 96549 00525
              </a>
            </div>

            {/* Quick Article Highlights Card */}
            <div className="rounded-xl border border-[#E7D5C2] bg-white p-3.5 sm:p-4 shadow-xs">
              <h3 className="text-sm sm:text-base font-semibold text-[#2C1810] flex items-center gap-2">
                <FiBookmark className="h-4 w-4 text-[#8B6A3E]" />
                Article Overview
              </h3>

              <div className="mt-2.5 space-y-2 text-xs text-[#5A3E2B]/85">
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Topic: {blog.category || "Guidance & Tradition"}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Reading Time: ~{readTimeMinutes} minutes</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Author: {blog.author || "Moksha Sewa"}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Published: {formattedDate}</span>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* ===================== RELATED ARTICLES ===================== */}
        {relatedBlogs.length > 0 && (
          <section className="mt-3.5 pt-2.5 border-t border-[#E7D5C2]">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-3">
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <PiFlowerLotus className="h-3.5 w-3.5 text-[#C9873A]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8B6A3E]">
                    Related Reflections
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#2C1810]">
                  Related Articles
                </h2>
                <p className="text-xs text-[#5A3E2B]/80 mt-0.5">
                  Continue exploring reflections and ritual guidance from our team
                </p>
              </div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#8B6A3E] hover:text-[#2C1810] hover:underline"
              >
                View all articles
                <FiArrowRight className="h-3.5 w-3.5 text-[#C9873A]" />
              </Link>
            </div>

            {/* Single row me 2 blogs: Left Image, Right Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-2">
              {relatedBlogs.map((item) => (
                <article
                  key={item._id}
                  className="flex flex-col sm:flex-row bg-white rounded-xl border border-[#E7D5C2] overflow-hidden shadow-2xs hover:shadow-sm hover:border-[#C9873A]/60 transition-all duration-300 group"
                >
                  {/* Left: Image */}
                  <Link
                    href={`/blog/${item.slug}`}
                    className="relative sm:w-[40%] min-h-[160px] sm:min-h-[180px] shrink-0 overflow-hidden bg-[#F0E8D5] block"
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
                        <PiFlowerLotus className="h-6 w-6" />
                      </div>
                    )}
                    <span className="absolute left-2.5 top-2.5 rounded-full bg-[#8B6A3E]/90 px-2 py-0.5 text-[9.5px] font-semibold text-white uppercase tracking-wider shadow-2xs">
                      {item.category || "Moksha Sewa"}
                    </span>
                  </Link>

                  {/* Right: Details */}
                  <div className="flex flex-col justify-between p-3.5 sm:p-3 w-full">
                    <div>
                      <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#8B6A3E]/85">
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

                      <Link href={`/blog/${item.slug}`} className="block mt-1.5">
                        <h4 className="text-sm sm:text-base font-semibold leading-snug text-[#2C1810] group-hover:text-[#8B6A3E] transition-colors ms-clamp-2">
                          {item.title}
                        </h4>
                      </Link>

                      <p className="mt-1 text-xs text-[#5A3E2B]/80 ms-clamp-2 leading-relaxed">
                        {item.excerpt || item.content.replace(/<[^>]*>/g, "").slice(0, 110) + "..."}
                      </p>
                    </div>

                    <div className="mt-2.5 pt-2 border-t border-[#F0E8D5] flex items-center justify-between">
                      <span className="text-[10px] text-[#8B6A3E]/70 uppercase tracking-wider font-semibold">
                        Article
                      </span>
                      <Link
                        href={`/blog/${item.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#8B6A3E] group-hover:text-[#2C1810] group-hover:gap-2 transition-all"
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
