"use client";

import { useEffect } from "react";
import { FiCheck, FiX } from "react-icons/fi";
import { PiFlowerLotus } from "react-icons/pi";

interface SuccessPopupProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}
export default function SuccessPopup({
  open,
  onClose,
  title = "Thank You!",
  message = "Your form has been submitted successfully.",
}: SuccessPopupProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="gallery-modal-overlay fixed inset-0 z-[100] flex items-center justify-center bg-[#2C1810]/55 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="gallery-modal-panel relative w-full max-w-[248px] overflow-hidden rounded-2xl bg-white text-center shadow-[0_30px_70px_rgba(44,24,16,0.35)] ring-1 ring-[#E6D6BF]"
        onClick={(event) => event.stopPropagation()}
      >
        {/* signature gold accent line, matches other cards site-wide */}
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#C9A574] to-transparent" />

        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-2 top-2.5 flex h-6 w-6 items-center justify-center rounded-full text-[#8B6A3E]/50 transition hover:bg-[#F5E9D9] hover:text-[#8B6A3E]"
        >
          <FiX className="h-3.5 w-3.5" />
        </button>

        <div className="relative overflow-hidden bg-gradient-to-b from-[#FBF8F3] to-white px-5 pb-2 pt-7">
          <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full border border-[#C9A574]/15" />
          <div className="pointer-events-none absolute -left-7 -bottom-4 h-16 w-16 rounded-full border border-[#C9A574]/10" />

          <div className="relative mx-auto flex h-14 w-14 items-center justify-center">
            <span
              className="absolute inset-0 animate-ping rounded-full bg-[#2FA84F]/15"
              style={{ animationDuration: "2.2s" }}
            />
            <span className="absolute inset-0 rounded-full bg-gradient-to-b from-[#EAF8EE] to-[#DCF3E2] shadow-[inset_0_1px_2px_rgba(255,255,255,0.9)]" />
            <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-[#3FC96A] to-[#1F9A45] shadow-[0_8px_16px_rgba(31,154,69,0.35)]">
              <FiCheck className="h-4.5 w-4.5 text-white" strokeWidth={3} />
            </span>
          </div>

          <PiFlowerLotus className="relative mx-auto mt-1.5 h-3 w-3 text-[#C9A574]" />
        </div>

        <div className="px-5 pb-5 pt-2">
          <h3
            className="text-[16px] leading-tight text-[#2C1810]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            {title}
          </h3>
          <p className="mx-auto mt-1.5 text-[12px] leading-relaxed text-[#6B5645]">
            {message}
          </p>

          <button
            onClick={onClose}
            className="mt-4 w-full rounded-lg bg-gradient-to-r from-[#9C794C] to-[#73532F] py-2 text-[12px] font-semibold tracking-wide text-white shadow-[0_8px_18px_rgba(115,83,47,0.3)] transition duration-300 hover:shadow-[0_10px_22px_rgba(115,83,47,0.4)] hover:brightness-105"
          >
            Okay, Got It
          </button>
        </div>
      </div>
    </div>
  );
}
