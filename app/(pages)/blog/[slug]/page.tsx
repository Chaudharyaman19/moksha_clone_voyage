import Image from "next/image";
import { notFound } from "next/navigation";
import { blogsApi } from "@/lib/blogsApi";
import DynamicH1 from "@/components/seo/DynamicH1";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const blog = await blogsApi.getBySlug(params.slug);
  if (!blog) return { title: "Blog Not Found - Moksha Sewa" };

  return {
    title: blog.seo?.metaTitle || `${blog.title} - Moksha Sewa`,
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
    }
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const blog = await blogsApi.getBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  // Create Article JSON-LD
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    image: [blog.coverImage || "https://mokshasewa.org/assets/og/logo-moksha-seva-og.png"],
    datePublished: blog.publishedAt || blog.createdAt,
    dateModified: blog.updatedAt,
    author: [{
      "@type": "Person",
      name: blog.author || "Moksha Sewa",
    }],
    publisher: {
      "@type": "Organization",
      name: "Moksha Sewa",
      logo: {
        "@type": "ImageObject",
        url: "https://mokshasewa.org/assets/logo-moksha-seva.png"
      }
    }
  };

  return (
    <div className="bg-[#f8f1e7] min-h-screen pt-32 pb-20">
      <h1 className="sr-only">{blog.seo?.h1Tag || blog.title}</h1>
      <JsonLd data={breadcrumbJsonLd(`/blog/${blog.slug}`, blog.title)} />
      <JsonLd data={blog.seo?.schemaMarkup ? JSON.parse(blog.seo.schemaMarkup) : articleJsonLd} />

      <article className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-[#e8dcc8]">
        {blog.coverImage && (
          <div className="relative h-[400px] md:h-[500px] w-full bg-[#f0e8d5]">
            <Image
              src={blog.coverImage}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
        
        <div className="px-6 py-12 md:px-16 md:py-16">
          <div className="flex items-center gap-4 text-sm font-semibold uppercase tracking-wider text-[#b88645] mb-6">
            <span>{new Date(blog.publishedAt || blog.createdAt).toLocaleDateString()}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4c3a5]"></span>
            <span>By {blog.author}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-[#123d32] mb-8 leading-tight">
            {blog.title}
          </h2>

          <div 
            className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-[#123d32] prose-p:text-[#4a6b5d] prose-a:text-[#b88645] prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-[#f0e8d5]">
              <div className="flex flex-wrap gap-2">
                {blog.tags.map(tag => (
                  <span key={tag} className="px-4 py-2 bg-[#f8f1e7] text-[#5c7a6e] text-sm rounded-full border border-[#e8dcc8]">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
