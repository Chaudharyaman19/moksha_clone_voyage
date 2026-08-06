"use client";

import { createPortal } from "react-dom";
import { FaTimes } from "react-icons/fa";

interface VolunteerModalProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

// Portaled straight to <body> — Navbar in this app uses backdrop-blur, which per spec creates a
// containing block for `fixed` descendants and would otherwise silently break a plain fixed-overlay
// modal's centering if it ever ended up nested in that subtree. A portal sidesteps that entirely.
export default function VolunteerModal({ title, onClose, children, footer }: VolunteerModalProps) {
  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative max-h-[85vh] w-full max-w-md overflow-hidden rounded-2xl border border-[#E6D6BF] bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-[#F1E7D6] px-5 py-3.5">
          <h2 className="font-serif text-base text-[#2C1810]">{title}</h2>
          <button
            onClick={onClose}
            className="flex h-7 w-7 items-center justify-center rounded-lg text-[#8A7460] transition-colors hover:bg-[#F6EEDF] hover:text-[#2C1810]"
          >
            <FaTimes className="h-3.5 w-3.5" />
          </button>
        </div>
        <div className="max-h-[calc(85vh-116px)] overflow-y-auto px-5 py-4">{children}</div>
        {footer && <div className="flex justify-end gap-2 border-t border-[#F1E7D6] px-5 py-3.5">{footer}</div>}
      </div>
    </div>,
    document.body
  );
}
