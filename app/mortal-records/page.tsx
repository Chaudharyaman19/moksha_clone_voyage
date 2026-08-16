import React from "react";
import Navbar from "@/components/layout/navbar/Navbar";
import Topbar from "@/components/layout/topbar/Topbar";
import Footer from "@/components/layout/Footer/FooterNew";

export default function MortalRecordsPage() {
  return (
    <div className="min-h-screen bg-[#FBF8F3] text-[#2C1810]">
      <Topbar />
      <Navbar />

      <main className="flex-1">
        <section className="relative px-4 py-20 sm:px-6 lg:px-8 xl:px-0">
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h1 className="font-serif text-4xl text-[#2C1810] sm:text-5xl lg:text-6xl">
                Mortal <span className="text-[#8B6A3E]">Records</span>
              </h1>
              <p className="mt-6 text-lg text-[#5F4A3D]">
                Page coming soon...
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
