"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import { FaReceipt, FaHandHoldingHeart } from "react-icons/fa";
import { useAppSelector } from "@/store/hooks";
import { donationApi, MyDonation } from "@/lib/donationApi";
import { api } from "@/lib/api";

const STATUS_META: Record<MyDonation["status"], { label: string; className: string }> = {
  PENDING: { label: "Pending", className: "bg-amber-50 text-amber-700" },
  SUCCESS: { label: "Successful", className: "bg-green-50 text-green-700" },
  FAILED: { label: "Failed", className: "bg-red-50 text-red-700" },
  REFUNDED: { label: "Refunded", className: "bg-gray-100 text-gray-600" },
  CANCELLED: { label: "Cancelled", className: "bg-gray-100 text-gray-600" },
};

function DonationHistory() {
  const router = useRouter();
  const { user, hydrated } = useAppSelector((state) => state.auth);
  const [donations, setDonations] = useState<MyDonation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (hydrated && (!user || user.userType !== "DONOR")) {
      router.replace("/login?redirect=/donation/history");
    }
  }, [hydrated, user, router]);

  useEffect(() => {
    if (hydrated && user?.userType === "DONOR") {
      donationApi
        .myDonations()
        .then(setDonations)
        .catch(() => setDonations([]))
        .finally(() => setLoading(false));
    }
  }, [hydrated, user]);

  const viewReceipt = async (donationId: string) => {
    try {
      const html = await api.getHtml(`/donations/me/receipts/${donationId}`);
      const win = window.open("", "_blank");
      if (win) {
        win.document.write(html);
        win.document.close();
      }
    } catch {
      /* receipt not available yet — silently ignore, the button only shows for eligible donations */
    }
  };

  if (!hydrated || !user || user.userType !== "DONOR") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#FBF8F3]">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#8B6A3E] border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FBF8F3] text-[#2C1810]">
      <Topbar />
      <Navbar />

      <main className="mx-auto w-full max-w-3xl px-4 pb-14 pt-28 sm:px-6 lg:pt-32 xl:px-0">
        <div className="mb-6">
          <h1 className="font-serif text-2xl text-[#2C1810]">
            Your <span className=" text-[#8B6A3E]">Donation History</span>
          </h1>
          <p className="mt-1 text-sm text-[#6B584B]">Namaste, {user.name}.</p>
        </div>

        {loading ? (
          <div className="flex justify-center py-12">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#8B6A3E] border-t-transparent" />
          </div>
        ) : donations.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-[#E4D5BE] bg-white p-10 text-center">
            <FaHandHoldingHeart className="mx-auto h-6 w-6 text-[#C9A574]" />
            <p className="mt-3 text-sm text-[#7A685B]">No donations under this email yet.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {donations.map((d) => (
              <div key={d._id} className="flex items-center justify-between rounded-2xl border border-[#E6D6BF] bg-white p-4 shadow-sm">
                <div>
                  <p className="font-serif text-lg text-[#2C1810]">
                    ₹{d.amount.toLocaleString("en-IN")}
                    <span className="ml-2 text-[14px] font-sans font-semibold uppercase tracking-wide text-[#8A7460]">
                      {d.type === "RECURRING" ? "Monthly" : d.type === "OFFLINE" ? "Offline" : "One-Time"}
                    </span>
                  </p>
                  <p className="mt-0.5 text-[14px] text-[#8A7460]">
                    {d.cause} · {new Date(d.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`rounded-full px-3 py-1 text-[14px] font-semibold ${STATUS_META[d.status].className}`}>
                    {STATUS_META[d.status].label}
                  </span>
                  {d.status === "SUCCESS" && d.receiptId && (
                    <button
                      onClick={() => viewReceipt(d._id)}
                      className="flex items-center gap-1.5 rounded-lg border border-[#E4D5BE] px-3 py-1.5 text-[14px] font-semibold text-[#5F4630] hover:border-[#C9A574]"
                    >
                      <FaReceipt className="h-3 w-3" /> Receipt
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default DonationHistory;
