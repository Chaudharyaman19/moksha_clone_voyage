"use client";

import { useEffect } from "react";

export default function HeadCode({ code }: { code?: string }) {
  useEffect(() => {
    if (!code || typeof document === "undefined") return;
    const container = document.createElement("div");
    container.innerHTML = code.trim();
    const elements: Node[] = [];

    Array.from(container.children).forEach((child) => {
      const cloned = child.cloneNode(true);
      document.head.appendChild(cloned);
      elements.push(cloned);
    });

    return () => {
      elements.forEach((el) => {
        if (el.parentNode) el.parentNode.removeChild(el);
      });
    };
  }, [code]);

  return null;
}
