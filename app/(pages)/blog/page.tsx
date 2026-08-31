import Image from "next/image";
import Link from "next/link";
import DynamicH1 from "@/components/seo/DynamicH1";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createDynamicMetadata } from "@/lib/seo";
import { blogsApi } from "@/lib/blogsApi";

export async function generateMetadata() {
  return createDynamicMetadata("/blog", "landing");
}

export default async function BlogPage() {
  const blogs = await blogsApi.getAllPublic();

  return (
    <div className="bg-[#f8f1e7] min-h-screen pt-32 pb-20">
      <DynamicH1 pageKey="landing" fallback="Our Blog" />
      <JsonLd data={breadcrumbJsonLd("/blog")} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#123d32] mb-4">Our Latest Insights</h2>
          <p className="text-[#4a6b5d] text-lg max-w-2xl mx-auto">
            Stay updated with our latest news, sewa activities, and community outreach efforts.
          </p>
        </div>

        {blogs.length === 0 ? (
          <div className="text-center py-20 text-[#4a6b5d]">
            No blog posts found. Check back later!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link key={blog._id} href={`/blog/${blog.slug}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 border border-[#e8dcc8]">
                <div className="relative h-64 w-full bg-[#f0e8d5]">
                  {blog.coverImage ? (
                    <Image
                      src={blog.coverImage}
                      alt={blog.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-[#c2a678]">
                      No Image Available
                    </div>
                  )}
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#b88645] mb-3">
                    <span>{new Date(blog.publishedAt || blog.createdAt).toLocaleDateString()}</span>
                  </div>
                  <h3 className="text-2xl font-serif text-[#123d32] mb-3 line-clamp-2 group-hover:text-[#b88645] transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-[#5c7a6e] leading-relaxed line-clamp-3 mb-6">
                    {blog.excerpt || blog.content.substring(0, 150) + "..."}
                  </p>
                  <div className="flex items-center text-[#b88645] font-semibold group-hover:gap-2 transition-all">
                    Read More <span className="text-xl leading-none ml-1">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
