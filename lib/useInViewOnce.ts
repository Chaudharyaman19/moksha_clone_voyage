"use client";

import { useEffect, useRef, useState } from "react";

// True once the element is within rootMargin of the viewport. Used to defer below-the-fold CSS background images so they don't compete with the LCP image on load.
export function useInViewOnce<T extends HTMLElement>(rootMargin = "600px") {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    if (typeof IntersectionObserver === "undefined") {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setSeen(true);
          io.disconnect();
        }
      },
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [seen, rootMargin]);

  return [ref, seen] as const;
}
