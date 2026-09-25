import DynamicH1 from "@/components/seo/DynamicH1";
import JsonLd from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, createDynamicMetadata } from "@/lib/seo";
import { blogsApi } from "@/lib/blogsApi";
import Blog from "@/components/page-features/blog/Blog";

export async function generateMetadata() {
  return createDynamicMetadata("/blog", "landing");
}

export default async function BlogPage() {
  const blogs = await blogsApi.getAllPublic();

  return (
    <>
      <DynamicH1 pageKey="landing" fallback="Moksha Sewa Blogs" />
      <JsonLd data={breadcrumbJsonLd("/blog", "Moksha Sewa Blogs")} />
      <Blog initialBlogs={blogs} />
    </>
  );
}
