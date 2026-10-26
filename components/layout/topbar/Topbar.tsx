"use client";

import { FaChevronDown, FaUser, FaShieldAlt } from "react-icons/fa";
import Link from "next/link";
import { itemOrFallback, textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";

const utilityLink =
  "flex items-center justify-center gap-1.5 rounded-md text-white/90 transition-all hover:bg-white/10 hover:text-white active:scale-95 h-7 w-7 shrink-0 md:h-auto md:w-auto md:px-2.5 md:py-1.5";

export default function TopInfoBar() {
  const websiteSection = useWebsiteSection("topbar");
  const userLoginItem = itemOrFallback(websiteSection?.items, 0, { label: "User Login", href: "/login" });
  const adminLoginItem = itemOrFallback(websiteSection?.items, 1, { label: "Admin Login", href: "admin" });
  const adminLoginHref =
    adminLoginItem.href && adminLoginItem.href !== "admin"
      ? adminLoginItem.href
      : `${process.env.NEXT_PUBLIC_ADMIN_URL ?? "http://localhost:3001"}/login`;

  return (
    <div
      id="topbar"
      className="fixed top-0 left-0 z-[60] h-11 w-full bg-gradient-to-r from-[#26170D] via-[#2E1C10] to-[#26170D] text-white font-sans"
    >
      {/* Explicit h-11 (44px) above — Navbar hardcodes its own top-11 offset assuming exactly
          this height, so this can't be left to size itself from content (padding/icon tweaks
          here would silently reopen a gap between the two bars otherwise). */}
      <div className="mx-auto flex h-full w-full max-w-7xl items-center gap-3 px-4 sm:px-5 lg:gap-5 lg:px-0">
        <div className="min-w-0 flex-1 truncate text-left text-[12px] font-medium text-white/90 sm:text-[14px] lg:text-[16px]">
          {textOrFallback(websiteSection?.title, "Sewa Available in Delhi • Ghaziabad • Noida | 24×7 Last-Rites Assistance | Unclaimed & Needy Family Support", 220)}
        </div>

        {/* Utilities */}
        <div className="ml-auto flex shrink-0 items-center justify-end gap-1 md:gap-1.5">

          <details className="group/login relative">
            <summary className={`${utilityLink} cursor-pointer list-none [&::-webkit-details-marker]:hidden`}>
              <FaUser className="h-3 w-3" />
              <span className="hidden text-[16px] md:inline">{textOrFallback(websiteSection?.secondaryTitle, "Login", 30)}</span>
              <FaChevronDown className="hidden h-2.5 w-2.5 transition-transform group-open/login:rotate-180 md:block" />
            </summary>

            <div className="absolute right-0 top-full z-[70] mt-2 w-[180px] overflow-hidden rounded-lg border border-[#D8B982]/40 bg-[#2E1C10] p-1.5 shadow-[0_12px_30px_rgba(0,0,0,0.28)]">
              <Link
                href={userLoginItem.href || "/login"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-md px-3 py-2.5 text-[16px] text-white/90 transition hover:bg-white/10 hover:text-white"
              >
                <FaUser className="h-3.5 w-3.5 text-[#D4B996]" />
                {textOrFallback(userLoginItem.label, "User Login", 40)}
              </Link>

              <a
                href={adminLoginHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-md px-3 py-2.5 text-[16px] text-white/90 transition hover:bg-white/10 hover:text-white"
              >
                <FaShieldAlt className="h-3.5 w-3.5 text-[#D4B996]" />
                {textOrFallback(adminLoginItem.label, "Admin Login", 40)}
              </a>
            </div>
          </details>
        </div>
      </div>

      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#C9A574]/40 to-transparent"
      />
    </div>
  );
}
