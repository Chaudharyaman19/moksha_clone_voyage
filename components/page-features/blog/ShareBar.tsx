"use client";

import React, { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import { FaWhatsapp, FaTwitter, FaFacebook } from "react-icons/fa";

export default function ShareBar({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `${title} - Read more: ${url}`
  )}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    title
  )}&url=${encodeURIComponent(url)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;

  return (
    <div className="flex flex-wrap items-center gap-2 pt-2">
      <span className="text-xs font-semibold text-[#8B6A3E] mr-1">Share this article:</span>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366]/10 px-3 py-1.5 text-xs font-medium text-[#128C7E] hover:bg-[#25D366]/20 transition"
      >
        <FaWhatsapp className="h-3.5 w-3.5" />
        WhatsApp
      </a>

      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full bg-[#1DA1F2]/10 px-3 py-1.5 text-xs font-medium text-[#1DA1F2] hover:bg-[#1DA1F2]/20 transition"
      >
        <FaTwitter className="h-3.5 w-3.5" />
        X / Twitter
      </a>

      <a
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full bg-[#1877F2]/10 px-3 py-1.5 text-xs font-medium text-[#1877F2] hover:bg-[#1877F2]/20 transition"
      >
        <FaFacebook className="h-3.5 w-3.5" />
        Facebook
      </a>

      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center gap-1.5 rounded-full border border-[#E7D5C2] bg-white px-3 py-1.5 text-xs font-medium text-[#5A3E2B] hover:bg-slate-50 transition"
      >
        {copied ? (
          <>
            <FiCheck className="h-3.5 w-3.5 text-emerald-600" />
            <span className="text-emerald-700">Copied!</span>
          </>
        ) : (
          <>
            <FiCopy className="h-3.5 w-3.5 text-[#8B6A3E]" />
            <span>Copy Link</span>
          </>
        )}
      </button>
    </div>
  );
}
