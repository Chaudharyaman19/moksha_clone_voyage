import CityPillsPager from "./CityPillsPager";

export interface CityLink { city: string; slug: string; pageTitle: string; }
export interface CityLinkGroups { [category: string]: CityLink[]; }

const API_BASE = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1").replace(/\/api\/v1\/?$/, "");

async function fetchGroups(): Promise<CityLinkGroups> {
  try {
    const res = await fetch(`${API_BASE}/api/v1/location-pages/city-links`, { cache: "no-store" });
    if (!res.ok) return {};
    const json = await res.json();
    return (json?.data?.categories ?? {}) as CityLinkGroups;
  } catch { return {}; }
}

/** Category-wise city pills — STRICT scope.
 * category = sirf us category ki cities. Chaho to alsoShow se aur categories jodo.
 * Home page: <LocationCityPills category="Home" /> → sirf Home ki cities.
 * Service page: <LocationCityPills category="Funeral Service" /> → sirf Funeral ki cities. */
export default async function LocationCityPills({
  category, alsoShow = [], currentSlug, full = false,
}: { category: string; alsoShow?: string[]; currentSlug?: string; full?: boolean }) {
  const groups = await fetchGroups();
  const keys = Object.keys(groups);
  // Category match: exact, phir case-insensitive fallback (admin me typing farq ho to bhi chale).
  const resolve = (name: string) =>
    keys.find((k) => k.trim().toLowerCase() === name.trim().toLowerCase()) ?? name;
  const cats = [category, ...alsoShow]
    .map(resolve)
    .filter((c, i, a) => a.indexOf(c) === i && !!groups[c]);
  const blocks = cats
    .map((c) => ({ name: c, links: (groups[c] ?? []).filter((l) => l.slug !== currentSlug) }))
    .filter((b) => b.links.length > 0);
  if (!blocks.length) return null;
  return (
    <section aria-label="Available cities" className={full ? "w-full px-4 py-1 sm:px-6" : `mx-auto w-full max-w-[1200px] px-4 py-1`}>
      <div className={full ? "mx-auto w-full max-w-[1400px]" : ""}>
        {blocks.map((b) => (
          <div key={b.name} className="flex flex-wrap items-center gap-x-3 gap-y-1 py-0.5">
            <CityPillsPager links={b.links} />
          </div>
        ))}
      </div>
    </section>
  );
}
