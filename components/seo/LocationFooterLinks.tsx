import Link from "next/link";

const API_BASE = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1").replace(/\/api\/v1\/?$/, "");

/** DesignHouse-style Service x City footer block — SERVER rendered (SEO internal linking).
 * 1 fast API call, sirf Published pages. existing footers untouched. */
export default async function LocationFooterLinks({ currentSlug }: { currentSlug?: string }) {
  let groups: Record<string, { city: string; slug: string; pageTitle: string }[]> = {};
  try {
    const res = await fetch(`${API_BASE}/api/v1/location-pages/city-links`, { cache: "no-store" });
    const j = res.ok ? await res.json() : null;
    groups = (j?.data?.categories ?? {}) as typeof groups;
    for (const k of Object.keys(groups)) groups[k] = groups[k].filter((l) => l.slug !== currentSlug).slice(0, 12);
    groups = Object.fromEntries(Object.entries(groups).filter(([, v]) => v.length));
  } catch { groups = {}; }
  const cats = Object.keys(groups);
  if (!cats.length) return null;
  return (
    <div className="mt-8 rounded-lg border bg-slate-50 px-5 py-4">
      <h3 className="text-[13px] font-bold uppercase tracking-wide">Our Services by City</h3>
      <div className="mt-3 grid grid-cols-2 gap-x-5 gap-y-3 md:grid-cols-4">
        {cats.map((c) => (
          <div key={c}>
            <p className="text-[13px] font-bold">+ {c}</p>
            <ul className="mt-2 space-y-1">
              {groups[c].map((l) => (
                <li key={l.slug}><Link href={`/${l.slug}`} className="text-[12px] text-slate-600 hover:underline">{l.pageTitle}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
