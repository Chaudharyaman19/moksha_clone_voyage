"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface CityLink {
  city: string;
  slug: string;
  pageTitle: string;
}
type CityLinkGroups = Record<string, CityLink[]>;

const API_BASE = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1").replace(/\/api\/v1\/?$/, "");

/** Footer ke upar category-wise city links (sirf Published location pages).
 *  Home page aur khud ke location page pe skip — waha pehle se pills/footer block hain. */
export default function FooterCityLinks({ maxPerCategory = 12 }: { maxPerCategory?: number }) {
  const pathname = usePathname();
  const [groups, setGroups] = useState<CityLinkGroups>({});

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/api/v1/location-pages/city-links`, { cache: "no-store" });
        const json = res.ok ? await res.json() : null;
        const data = (json?.data?.categories ?? {}) as CityLinkGroups;
        if (!cancelled) setGroups(data);
      } catch {
        /* silent — footer links non-critical */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const blocks = Object.entries(groups)
    .map(([name, links]) => ({ name, links: links.filter((l) => l.slug).slice(0, maxPerCategory) }))
    .filter((b) => b.links.length > 0);
  if (!blocks.length) return null;

  const current = (pathname || "/").replace(/^\//, "");
  if (pathname === "/" || blocks.some((b) => b.links.some((l) => l.slug === current))) return null;

  return (
    <div className="border-b border-white/10 bg-[#050706]">
      <div className="mx-auto w-full max-w-7xl px-4 py-7 sm:px-6">
        <h3 className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#C6953E]">Our Services by City</h3>
        <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-4">
          {blocks.map((b) => (
            <div key={b.name}>
              <p className="text-[13px] font-semibold text-white">+ {b.name}</p>
              <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                {b.links.map((l) => (
                  <li key={l.slug}>
                    <Link
                      href={`/${l.slug}`}
                      title={l.pageTitle}
                      className="text-[12px] text-white/60 transition hover:text-[#C6953E] hover:underline"
                    >
                      {l.city}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
