"use client";

import { Children, useCallback, useEffect, useState, type ReactNode } from "react";
import Link from "next/link";

export interface CityLink {
  city: string;
  slug: string;
  pageTitle: string;
}

export interface CityLinkGroups {
  [category: string]: CityLink[];
}

export interface LocationPage {
  pageTitle: string;
  slug: string;
  serviceCategory: string;
  city: string;
  h1?: string;
  highlightedHeading?: string;
  shortSummary?: string;
  detailedDescription?: string;
  faqs: { question: string; answer: string }[];
  mainImage?: string;
  mainImageAlt?: string;
  gallery: { src: string; alt?: string }[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    metaKeywords?: string;
    canonicalUrl?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    ogImageAlt?: string;
    twitterTitle?: string;
    twitterDescription?: string;
    twitterImage?: string;
    schemaMarkup?: string;
  };
}

const API_BASE = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1").replace(/\/api\/v1\/?$/, "");

async function fetchLocationPage(slug: string): Promise<LocationPage | null> {
  try {
    const res = await fetch(`${API_BASE}/api/v1/location-pages/${encodeURIComponent(slug)}`, { cache: "no-store" });
    if (!res.ok) return null;
    const json = await res.json();
    return (json?.data ?? null) as LocationPage | null;
  } catch {
    return null;
  }
}

/** Heading me city ka last occurrence highlight karo — "…Home in <u>Delhi</u>" (DesignHouse style). */
function highlightCity(text: string, city: string) {
  if (!city) return text;
  const idx = text.toLowerCase().lastIndexOf(city.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <span className="text-[#c9761a] underline decoration-[#c9761a]/60 decoration-2 underline-offset-[6px]">
        {text.slice(idx, idx + city.length)}
      </span>
      {text.slice(idx + city.length)}
    </>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 11.1V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
}

function LocationHero({ page }: { page: LocationPage }) {
  return (
    <section className="relative h-[320px] w-full overflow-hidden md:h-[560px]">
      {page.mainImage ? (
        <img src={page.mainImage} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-[#075443] via-[#0a6a55] to-[#8c6b1d]" />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="max-w-[1000px] font-serif text-[24px] font-semibold leading-tight text-white drop-shadow-lg md:text-[36px]">
          {page.h1 || page.pageTitle}
        </h1>
        <span className="mt-4 flex h-8 w-5 items-start justify-center rounded-full border border-white/70 p-1.5" aria-hidden>
          <span className="h-1.5 w-1 animate-bounce rounded-full bg-white" />
        </span>
      </div>
    </section>
  );
}

function LocationContent({ page }: { page: LocationPage | null }) {
  if (!page)
    return (
      <div className="text-[15px] text-[#6b5214]">
        Page not found.{" "}
        <Link href="/" className="text-[#8c6b1d] underline">
          Go home
        </Link>
      </div>
    );

  const heading = page.highlightedHeading
    ? `${page.highlightedHeading} ${page.city}`
    : page.h1 || page.pageTitle;
  const images = page.gallery?.length
    ? page.gallery
    : page.mainImage
      ? [{ src: page.mainImage, alt: page.mainImageAlt || page.pageTitle }]
      : [];

  return (
    <article>
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <h2 className="font-serif text-[22px] font-bold leading-tight text-[#0f172a] md:text-[30px]">
          {highlightCity(heading, page.city)}
        </h2>
        <div className="flex flex-wrap items-center gap-2.5 md:shrink-0">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#075443]/25 bg-[#075443]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#075443]">
            <PinIcon />
            {page.city}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#8c6b1d]/35 bg-[#8c6b1d]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#8c6b1d]">
            <CheckIcon />
            {page.serviceCategory}
          </span>
        </div>
      </div>

      <hr className="mt-4 border-slate-200" />

      <div className="mt-5 grid gap-6 md:grid-cols-5">
        <div className={images.length ? "md:col-span-3" : "md:col-span-5"}>
          {page.shortSummary ? (
            <p className="mb-3 border-l-4 border-[#c9761a] pl-4 text-[15px] italic leading-relaxed text-[#0b3d2e]">
              {page.shortSummary}
            </p>
          ) : null}
          {page.detailedDescription ? (
            <div className="lp-content" dangerouslySetInnerHTML={{ __html: page.detailedDescription }} />
          ) : null}
        </div>

        {images.length ? (
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 gap-2">
              {images.slice(0, 4).map((g, i) => (
                <img
                  key={i}
                  src={g.src}
                  alt={g.alt || `${page.pageTitle} ${i + 1}`}
                  className="h-[110px] w-full rounded-xl object-cover shadow-sm md:h-[135px]"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>

      {page.faqs?.length ? (
        <div className="mt-7">
          <h2 className="font-serif text-[19px] font-bold text-[#0f172a] md:text-[22px]">Frequently Asked Questions</h2>
          <div className="mt-3 grid gap-2 md:grid-cols-2">
            {page.faqs.map((f, i) => (
              <details key={i} className="rounded-lg border border-slate-200 bg-white px-3 py-2.5 shadow-sm transition hover:border-[#8c6b1d]/40">
                <summary className="cursor-pointer list-none text-[14px] font-semibold text-[#0f172a]">
                  <span className="mr-2 text-[#8c6b1d]">{i + 1}.</span>
                  {f.question}
                </summary>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      ) : null}
    </article>
  );
}

/** Client boundary for a Service x City location page — DesignHouse-style single template.
 *  header / footer / pills / footerLinks are SERVER-rendered props passed from app/[slug]/page.tsx. */
export default function LocationViewer({
  slug,
  initialPage,
  header,
  footer,
  pills,
  footerLinks,
}: {
  slug?: string;
  initialPage?: LocationPage | null;
  header?: ReactNode;
  footer?: ReactNode;
  pills?: ReactNode;
  footerLinks?: ReactNode;
}) {
  const [page, setPage] = useState<LocationPage | null>(initialPage ?? null);
  const [loading, setLoading] = useState(!initialPage);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async (target: string) => {
    try {
      setLoading(true);
      setError(null);
      const p = await fetchLocationPage(target);
      setPage(p);
      if (!p) setError("Page not found.");
    } catch {
      setError("Failed to load location data.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (slug && !initialPage) load(slug);
    if (!slug) setLoading(false);
  }, [slug, initialPage, load]);

  if (!slug && !page) return null;

  return (
    <div className="min-h-screen bg-white">
      {Children.toArray(header)}
      {!loading && page ? <LocationHero page={page} /> : null}
      <main className="mx-auto w-full max-w-[1200px] px-4 py-6 md:px-6">
        {loading ? (
          <div className="py-16 text-center">
            <span className="inline-block h-7 w-7 animate-spin rounded-full border-2 border-[#8c6b1d] border-t-transparent" />
          </div>
        ) : error && !page ? (
          <div className="py-16 text-center text-[#6b5214]">
            <p>{error}</p>
            <Link href="/" className="mt-4 inline-block text-[#8c6b1d] underline">
              Go home
            </Link>
          </div>
        ) : (
          <>
            <LocationContent page={page} />
            <div className="mt-4">{Children.toArray(pills)}</div>
          </>
        )}
      </main>
      {Children.toArray(footerLinks)}
      {Children.toArray(footer)}
    </div>
  );
}
