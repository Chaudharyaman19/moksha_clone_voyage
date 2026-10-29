"use client";

import { useEffect, useId } from "react";
import { cleanJsonLdContent } from "@/lib/cleanJsonLd";

export { cleanJsonLdContent };

type JsonLdProps = {
  data?: Record<string, unknown> | string | null;
  id?: string;
};

export default function JsonLd({ data, id }: JsonLdProps) {
  const autoId = useId();
  const scriptId = id || `schema-${autoId.replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const content = cleanJsonLdContent(data);

  useEffect(() => {
    if (typeof document === "undefined") return;

    const existingInHead = document.head.querySelector(`script#${CSS.escape(scriptId)}`);

    // If data is empty / removed from admin, immediately remove the script from <head>
    if (!content) {
      if (existingInHead && existingInHead.parentNode) {
        existingInHead.parentNode.removeChild(existingInHead);
      }
      return;
    }

    // 1. If script with this ID already exists in <head>, update its content in place
    if (existingInHead) {
      if (existingInHead.innerHTML.trim() !== content.trim()) {
        existingInHead.innerHTML = content;
      }
      return;
    }

    // 2. Deduplicate: if identical JSON-LD content is already in <head>, tag with ID and keep it
    const allHeadScripts = document.head.querySelectorAll('script[type="application/ld+json"]');
    for (const s of allHeadScripts) {
      if (s.innerHTML.trim() === content.trim()) {
        s.id = scriptId;
        return;
      }
    }

    // 3. Inject cleanly into <head>
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = scriptId;
    script.innerHTML = content;
    document.head.appendChild(script);

    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [content, scriptId]);

  // Return null so React Virtual DOM renders nothing in <body>
  return null;
}

export function ServerJsonLd({ data, id }: JsonLdProps) {
  const content = cleanJsonLdContent(data);
  if (!content) return null;
  return (
    <script
      type="application/ld+json"
      id={id}
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  );
}
