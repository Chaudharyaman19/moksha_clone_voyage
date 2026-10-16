"use client";

import { useState } from "react";
import Link from "next/link";

export interface PillLink {
  city: string;
  slug: string;
  pageTitle: string;
}

const PER = 4;

/** Client pager — har category row me sirf PER buttons; right side me 1/2 + ‹ ›. */
export default function CityPillsPager({ links }: { links: PillLink[] }) {
  const [page, setPage] = useState(0);
  const pages = Math.max(1, Math.ceil(links.length / PER));
  const view = links.slice(page * PER, page * PER + PER);
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 py-0.5">
      <div className="flex flex-wrap gap-2.5">
        {view.map((l) => (
          <Link
            key={l.slug}
            href={`/${l.slug}`}
            title={l.pageTitle}
            className="rounded-md bg-[#8c6b1d] px-5 py-2 text-[13px] font-semibold text-white shadow-sm transition hover:bg-[#6b5214] hover:shadow"
          >
            {l.city}
          </Link>
        ))}
      </div>
      {pages > 1 ? (
        <div className="ml-auto flex items-center gap-1.5">
          <button
            type="button"
            aria-label="Previous cities"
            disabled={page === 0}
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            className="rounded-md border border-slate-300 bg-white px-2 py-1.5 text-[13px] font-semibold text-slate-600 transition hover:border-[#8c6b1d] disabled:opacity-40"
          >
            ‹
          </button>
          <span className="text-[11px] font-semibold text-slate-500">
            {page + 1}/{pages}
          </span>
          <button
            type="button"
            aria-label="Next cities"
            disabled={page === pages - 1}
            onClick={() => setPage((p) => Math.min(pages - 1, p + 1))}
            className="rounded-md border border-slate-300 bg-white px-2 py-1.5 text-[13px] font-semibold text-slate-600 transition hover:border-[#8c6b1d] disabled:opacity-40"
          >
            ›
          </button>
        </div>
      ) : null}
    </div>
  );
}
