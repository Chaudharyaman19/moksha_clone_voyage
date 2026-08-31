const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";

export interface ISeoOptions {
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  schemaMarkup?: string;
  h1Tag?: string;
  breadcrumbName?: string;
  internalLinks?: { label: string; url: string }[];
  robotsIndex?: boolean;
  robotsFollow?: boolean;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  coverImage?: string;
  author: string;
  tags: string[];
  isPublished: boolean;
  publishedAt?: string;
  seo?: ISeoOptions;
  createdAt: string;
  updatedAt: string;
}

export const blogsApi = {
  getAllPublic: async (): Promise<BlogPost[]> => {
    try {
      const res = await fetch(`${API_URL}/blogs`, { next: { revalidate: 60 } } as RequestInit & { next?: any });
      if (!res.ok) return [];
      const body = await res.json();
      return body.data || [];
    } catch {
      return [];
    }
  },
  getBySlug: async (slug: string): Promise<BlogPost | null> => {
    try {
      const res = await fetch(`${API_URL}/blogs/${slug}`, { next: { revalidate: 60 } } as RequestInit & { next?: any });
      if (!res.ok) return null;
      const body = await res.json();
      return body.data || null;
    } catch {
      return null;
    }
  }
};
