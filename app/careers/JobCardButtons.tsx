"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function JobCardButtons({ job }: { job: any }) {
  const router = useRouter();

  const handleViewDetails = () => {
    const slug = job.slug || job.id || job._id || "web-developer";
    router.push(`/careers/apply?job=${slug}`);
  };

  return (
    <div className="mt-auto">
      <button
        onClick={handleViewDetails}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#d89c3b] bg-transparent py-2.5 text-[15px] font-bold text-[#b8761a] transition-all hover:bg-[#fff7ea] hover:border-[#b8761a] sm:text-[15.5px]"
      >
        View Details <ArrowRight className="h-[16px] w-[16px]" strokeWidth={2.4} />
      </button>
    </div>
  );
}
