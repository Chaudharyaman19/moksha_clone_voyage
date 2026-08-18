"use client";

import Image from "next/image";

export default function WhyWeExist() {
  return (
    <section
      className="
        relative
        w-full
        bg-[#F8F2E7]
        px-4
        py-[16px]
        sm:px-5
        lg:px-6
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1344px]
          overflow-hidden
          border
          border-[#E4D7C4]
          bg-[#F9F3E8]
          shadow-[0_8px_24px_rgba(73,44,20,0.07)]
        "
      >
        <Image
          src="/assets/why-we-exist.png"
          alt="Why We Exist - Moksha Sewa"
          width={1536}
          height={1024}
          priority
          quality={100}
          sizes="100vw"
          className="
            block
            h-auto
            w-full
          "
        />
      </div>
    </section>
  );
}