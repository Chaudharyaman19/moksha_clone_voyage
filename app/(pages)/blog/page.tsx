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
      <DynamicH1 pageKey="landing" fallback="Moksha Blog" />
      <JsonLd data={breadcrumbJsonLd("/blog", "Moksha Blog")} />
      <Blog initialBlogs={blogs} />
    </>
  );
}
