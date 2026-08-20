import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home, LifeBuoy } from "lucide-react";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";

export default function NotFound() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F8F1E7] text-[#123D32]">
      <Topbar />
      <Navbar />

      <main className="relative isolate flex min-h-[680px] items-center overflow-hidden pt-24 lg:min-h-[760px] lg:pt-28">
        <Image
          src="/assets/404/moksha-sewa-404-bg.png"
          alt="Sacred riverside ghat illuminated by diyas at sunset"
          fill
          priority
          sizes="100vw"
          className="-z-30 object-cover object-center"
        />
        <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#F9F1E6]/90 via-[#F9F1E6]/70 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#082F28]/30 via-transparent to-white/10" />

        <div className="pointer-events-none absolute -left-16 bottom-0 h-72 w-72 rounded-full border border-[#C7922F]/20" />
        <div className="pointer-events-none absolute -left-6 bottom-10 h-52 w-52 rounded-full border border-[#C7922F]/15" />

        <div className="mx-auto w-full max-w-[1320px] px-5 py-16 sm:px-8 lg:px-10">
          <div className="max-w-[680px]">
            <div className="mb-5 flex items-center gap-3 text-[14px] font-semibold uppercase tracking-[0.22em] text-[#A06F21]">
              <span className="h-px w-12 bg-[#C89231]" />
              The path ends here
              <span className="h-px w-12 bg-[#C89231]" />
            </div>

            <div className="relative mb-2 w-fit">
              <p className="font-serif text-[112px] leading-[0.8] tracking-[-0.07em] text-[#0A493B] sm:text-[150px] lg:text-[190px]">
                404
              </p>
              <div className="absolute -right-8 top-1/2 hidden h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full border border-[#D2AA65] bg-[#FFF9EF]/90 text-[#B47D25] shadow-[0_12px_30px_rgba(44,30,13,0.12)] sm:flex">
                <LifeBuoy className="h-7 w-7" strokeWidth={1.5} />
              </div>
            </div>

            <h1 className="max-w-[620px] font-serif text-4xl leading-[1.08] text-[#123D32] sm:text-5xl lg:text-[58px]">
              This page has completed its journey.
            </h1>
            <div className="my-6 flex max-w-[530px] items-center gap-3">
              <span className="h-px flex-1 bg-[#C99742]/60" />
              <span className="text-xl text-[#C18A2B]">◇</span>
              <span className="h-px flex-1 bg-[#C99742]/60" />
            </div>
            <p className="max-w-[580px] text-[17px] leading-7 text-[#35574E] sm:text-lg">
              The page you are looking for may have moved or no longer exists. Let us guide you back to Moksha Sewa.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#075443] px-6 text-[15px] font-semibold uppercase tracking-[0.05em] text-white shadow-[0_12px_28px_rgba(7,84,67,0.2)] transition hover:bg-[#063E33]"
              >
                <Home className="h-4 w-4" /> Return Home <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/request-help"
                className="inline-flex min-h-12 items-center justify-center gap-3 border border-[#B68435] bg-[#FFF9EF]/85 px-6 text-[15px] font-semibold uppercase tracking-[0.05em] text-[#805A20] transition hover:bg-white"
              >
                Request Sewa Help <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <p className="mt-7 text-[14px] text-[#61766F]">
              Need assistance? Call our Sewa team or visit the contact page for guidance.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
