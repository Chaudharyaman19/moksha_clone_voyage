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
  category?: string;
  views?: number;
  featured?: boolean;
  isAwareness?: boolean;
  isPublished: boolean;
  publishedAt?: string;
  seo?: ISeoOptions;
  createdAt: string;
  updatedAt: string;
}

export const FALLBACK_BLOGS: BlogPost[] = [
  {
    _id: "fb-1",
    title: "Why Dignified Final Rites Matter for Every Human",
    slug: "why-dignified-final-rites-matter",
    excerpt:
      "Every departed soul deserves honor, care, and peaceful passage regardless of circumstances or economic background.",
    content: `
<p>At Moksha Sewa, we hold sacred the belief that the final journey is the most profound rite of passage for every human being. Across cultures and centuries, rituals for the departed have served as a testament to the value of life itself.</p>

<h3>The Sacred Duty of Antyesti</h3>
<p>In traditional customs, Antyesti is not just a ceremony — it is an act of ultimate surrender and spiritual release. When an individual passes away, ensuring that their last rites are conducted with purity, reverence, and Vedic traditions is a duty owed to humanity.</p>

<blockquote>"Dignity in death is not charity; it is an inherent human right that every individual deserves."</blockquote>

<h3>Our On-Ground Experience</h3>
<p>Through our volunteer teams stationed at Haridwar, Varanasi, Gaya, and other sacred ghats, we encounter countless families facing sudden heartbreak. With compassionate guidance, free transportation, samagri provision, and dedicated pandit sewa, we ensure no soul goes unhonored.</p>

<p>Every small contribution and volunteer hour helps uphold this timeless tradition of empathy and community brotherhood.</p>
    `.trim(),
    coverImage:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=80",
    author: "Moksha Sewa",
    tags: ["Dignity", "Sewa", "Tradition"],
    category: "Moksha Sewa",
    views: 1245,
    featured: true,
    isAwareness: false,
    isPublished: true,
    publishedAt: "2026-05-28T10:00:00.000Z",
    createdAt: "2026-05-28T10:00:00.000Z",
    updatedAt: "2026-05-28T10:00:00.000Z",
  },
  {
    _id: "fb-2",
    title: "How Our Volunteers Bring Hope to Families in Need",
    slug: "how-our-volunteers-bring-hope",
    excerpt:
      "Real stories from the ground where compassion, presence, and selfless sewa turn grief into healing and solace.",
    content: `
<p>Grief can be overwhelming and disorienting. When a family loses a loved one, having someone step forward to handle the logistical complexities of hospital release, ambulance transport, and crematorium arrangements brings immeasurable relief.</p>

<h3>Standing Beside Families</h3>
<p>Our volunteer network operates 24×7. Day or night, rain or heat, volunteers arrive with a spirit of quiet devotion. They do not merely coordinate paperwork; they sit with the bereaved, offer water, guide them through the steps, and whisper words of courage.</p>

<h3>Unclaimed Souls Sewa</h3>
<p>One of the most sacred branches of our mission is conducting respectful last rites for unidentified and unclaimed bodies in partnership with municipal authorities. To stand in as the family of someone who passed away alone is perhaps the highest expression of compassion.</p>
    `.trim(),
    coverImage:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80",
    author: "Volunteer Team",
    tags: ["Volunteers", "Compassion", "Community"],
    category: "Stories",
    views: 980,
    featured: false,
    isAwareness: false,
    isPublished: true,
    publishedAt: "2026-05-26T14:30:00.000Z",
    createdAt: "2026-05-26T14:30:00.000Z",
    updatedAt: "2026-05-26T14:30:00.000Z",
  },
  {
    _id: "fb-3",
    title: "The Spiritual Significance of Last Rites in Hindu Tradition",
    slug: "spiritual-significance-of-last-rites",
    excerpt:
      "Understanding the ancient customs, mantras, and deep philosophical meaning behind holy cremation and asthi visarjan.",
    content: `
<p>The Vedic perspective views life not as a beginning and an end, but as a continuous cycle of the Atman (soul). The cremation ritual — Agni Sanskar — represents returning the five elements (Panchamahabhutas) of the physical vessel back to the cosmos.</p>

<h3>The Meaning Behind the Fire</h3>
<p>Agni (Fire) is venerated as the pure messenger of the deities. By entrusting the physical body to Agni with proper Vedic chants, the subtle ties to physical existence are dissolved, freeing the soul for its onward transition.</p>

<h3>Asthi Visarjan in the Holy Rivers</h3>
<p>Immersion of the sacred ashes in holy waters like the Ganga or Yamuna at Haridwar, Prayagraj, or Varanasi carries immense reverence. It symbolizes eternal purification and peace for the departed ancestors.</p>
    `.trim(),
    coverImage:
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80",
    author: "Moksha Sewa",
    tags: ["Rituals", "Traditions", "Spiritual"],
    category: "Awareness",
    views: 1560,
    featured: true,
    isAwareness: true,
    isPublished: true,
    publishedAt: "2026-05-24T09:00:00.000Z",
    createdAt: "2026-05-24T09:00:00.000Z",
    updatedAt: "2026-05-24T09:00:00.000Z",
  },
  {
    _id: "fb-4",
    title: "Supporting Families Beyond Cremation: A Guide to Healing",
    slug: "supporting-families-beyond-cremation",
    excerpt:
      "Navigating the crucial 13-day mourning period, shraddha rituals, and finding long-term strength together.",
    content: `
<p>The conclusion of the cremation marks the beginning of the intense mourning period for immediate family members. In our traditions, this period is structured to allow feelings to unfold naturally while surrounding the family with support.</p>

<h3>Navigating the Thirteen Days</h3>
<p>From the collection of ashes on the second or third day to the Tehravin feast on the thirteenth day, each ritual serves a psychological and spiritual purpose. It helps family members process denial, channel their sorrow into prayers, and gradually reintegrate into daily life.</p>

<h3>Community Support Desk</h3>
<p>Moksha Sewa continues to offer guidance for families who need help locating verified pandits for shraddha ceremonies or arranging travel for holy immersions.</p>
    `.trim(),
    coverImage:
      "https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=1200&q=80",
    author: "Counseling Desk",
    tags: ["Guidance", "Healing", "Bereavement"],
    category: "Guidance",
    views: 820,
    featured: false,
    isAwareness: false,
    isPublished: true,
    publishedAt: "2026-05-20T11:00:00.000Z",
    createdAt: "2026-05-20T11:00:00.000Z",
    updatedAt: "2026-05-20T11:00:00.000Z",
  },
];

export const blogsApi = {
  getAllPublic: async (): Promise<BlogPost[]> => {
    try {
      const res = await fetch(`${API_URL}/blog`, {
        cache: "no-store",
      });
      if (res.ok) {
        const body = await res.json();
        if (Array.isArray(body.data) && body.data.length > 0) {
          return body.data;
        }
      }
    } catch (err) {
      console.warn("Public blog fetch error, using fallback:", err);
    }
    return FALLBACK_BLOGS;
  },

  getBySlug: async (slug: string): Promise<BlogPost | null> => {
    try {
      const res = await fetch(`${API_URL}/blog/${encodeURIComponent(slug)}`, {
        cache: "no-store",
      });
      if (res.ok) {
        const body = await res.json();
        if (body.data) return body.data;
      }
    } catch (err) {
      console.warn("Public blog slug fetch error, checking fallback:", err);
    }

    const fallback = FALLBACK_BLOGS.find(
      (b) => b.slug === slug || b.slug.toLowerCase() === slug.toLowerCase()
    );
    return fallback || null;
  },
};
