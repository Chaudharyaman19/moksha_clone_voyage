import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createDynamicMetadata, getPageSchemaMarkup } from "@/lib/seo";
import { blogsApi } from "@/lib/blogsApi";
import Blog from "@/components/page-features/blog/Blog";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateMetadata() {
  return createDynamicMetadata("/blog", "blog");
}

export default async function BlogPage() {
  const [blogs, customSchema] = await Promise.all([
    blogsApi.getAllPublic(),
    getPageSchemaMarkup("/blog", "blog").catch(() => null),
  ]);

  const blogCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://mokshasewa.org/blog#blog",
    name: "Moksha Sewa Blog: Last-Rites Guidance & Awareness",
    description:
      "Read guides on antim sanskar, cremation help, unclaimed body procedure and how to get support in Delhi, Ghaziabad and Noida.",
    url: "https://mokshasewa.org/blog",
    publisher: {
      "@type": "Organization",
      name: "Moksha Sewa",
      url: "https://mokshasewa.org",
      logo: {
        "@type": "ImageObject",
        url: "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165236/moksha-sewa/assets/logo-moksha-seva.png",
      },
    },
    blogPost: blogs.slice(0, 10).map((b) => ({
      "@type": "BlogPosting",
      headline: b.title,
      url: `https://mokshasewa.org/blog/${b.slug}`,
      datePublished: b.publishedAt || b.createdAt,
      dateModified: b.updatedAt || b.publishedAt || b.createdAt,
      description: b.excerpt || b.seo?.metaDescription || "",
      image: b.coverImage || "https://res.cloudinary.com/dr8mld4i0/image/upload/v1788165264/moksha-sewa/assets/og/logo-moksha-seva-og.png",
      author: {
        "@type": "Person",
        name: b.author || "Moksha Sewa",
      },
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd("/blog", "Moksha Sewa Blogs")} id="schema-breadcrumb" />
      {customSchema && <JsonLd data={customSchema} id="schema-custom" />}
      <Blog initialBlogs={blogs} />
    </>
  );
}
