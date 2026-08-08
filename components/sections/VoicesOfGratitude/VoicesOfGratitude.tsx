"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  location: string;
  image: string;
  position?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Moksha Sewa arranged pandit ji and samagri when our family could not manage anything. Their support gave us strength in a very difficult time.",
    name: "Suman Devi",
    location: "Varanasi",
    image: "/assets/girl.jpg",
    position: "50% 38%",
  },
  {
    id: 2,
    quote:
      "They arranged ambulance and ghat support with full respect and care. We did not feel alone at all.",
    name: "Rajesh Sharma",
    location: "Lucknow",
    image: "/assets/man1.jpg",
    position: "72% 35%",
  },
  {
    id: 3,
    quote:
      "Lakdi, kafan, phool and pooja items were arranged on time. Their sewa helped us perform the last rites with peace of mind.",
    name: "Meena Patel",
    location: "Ahmedabad",
    image: "/assets/im1.jpeg",
    position: "50% 50%",
  },
  {
    id: 4,
    quote:
      "Pandit ji guided the kriya karam properly and the team stayed with us at every step.",
    name: "Anil Kumar",
    location: "Delhi",
    image: "/assets/man2.avif",
    position: "50% 32%",
  },
  {
    id: 5,
    quote:
      "Moksha Sewa helped arrange food sewa for the people. It reduced a major burden for our family.",
    name: "Sunita Verma",
    location: "Pune",
    image: "/assets/girl.jpg",
    position: "50% 38%",
  },
  {
    id: 6,
    quote:
      "They help poor and helpless families with dignity, not just service. That matters in such difficult moments.",
    name: "Prakash Singh",
    location: "Mumbai",
    image: "/assets/man1.jpg",
    position: "72% 35%",
  },
];

function LotusMark({
  className = "h-6 w-9",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 72 50"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M36 4c-7 8-9 15-7 22 2 5 7 9 7 9s5-4 7-9c2-7 0-14-7-22Z"
        stroke="#C98B2D"
        strokeWidth="1.7"
      />

      <path
        d="M12 17c9 0 16 3 20 9 3 5 3 10 3 10s-6 0-12-4c-6-4-9-9-11-15Z"
        stroke="#C98B2D"
        strokeWidth="1.7"
      />

      <path
        d="M60 17c-9 0-16 3-20 9-3 5-3 10-3 10s6 0 12-4c6-4 9-9 11-15Z"
        stroke="#C98B2D"
        strokeWidth="1.7"
      />

      <path
        d="M20 12c7 2 12 6 15 12 2 5 1 10 1 10s-6-2-10-7c-4-5-6-10-6-15Z"
        stroke="#C98B2D"
        strokeWidth="1.7"
      />

      <path
        d="M52 12c-7 2-12 6-15 12-2 5-1 10-1 10s6-2 10-7c4-5 6-10 6-15Z"
        stroke="#C98B2D"
        strokeWidth="1.7"
      />

      <path
        d="M8 31c9 8 18 12 28 12s19-4 28-12"
        stroke="#C98B2D"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DecorativeDivider() {
  return (
    <div className="flex items-center gap-1.5" aria-hidden="true">
      <span className="h-px w-[38px] bg-gradient-to-r from-[#D49A43] to-transparent" />
      <span className="h-[5px] w-[5px] rotate-45 bg-[#C98B2D]" />
      <span className="h-[3px] w-[3px] rotate-45 bg-[#D9A75F]" />
      <span className="h-px w-[38px] bg-gradient-to-l from-[#D49A43] to-transparent" />
    </div>
  );
}

function CornerFlower() {
  return (
    <div className="pointer-events-none absolute bottom-[-20px] right-[-18px] opacity-[0.11]">
      <LotusMark className="h-[82px] w-[82px]" />
    </div>
  );
}

export default function VoicesOfGratitude() {
  const [page, setPage] = useState(0);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const visibleTestimonials = testimonials.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage,
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPage((previous) => (previous + 1) % totalPages);
    }, 5000);

    return () => {
      window.clearInterval(timer);
    };
  }, [totalPages]);

  return (
    <section className="relative w-full overflow-hidden bg-[#FCF8F1] px-3 py-3 sm:px-4 lg:px-5 lg:py-4">
      <div className="pointer-events-none absolute -left-10 -top-10 opacity-[0.06]">
        <LotusMark className="h-[170px] w-[170px]" />
      </div>

      <div className="pointer-events-none absolute -right-12 -top-12 opacity-[0.06]">
        <LotusMark className="h-[180px] w-[180px]" />
      </div>

      <div className="pointer-events-none absolute right-[4%] top-[20%] h-[100px] w-[190px] rounded-[50%] border border-[#DCA653]/10" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px]">
        <header className="mx-auto mb-3 max-w-[760px] text-center">
          <LotusMark className="mx-auto h-5 w-8" />

          <div className="mt-0.5 flex items-center justify-center gap-3">
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-[#B9843D]" />

            <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-[#93692E] sm:text-[10px]">
              Family Experiences
            </span>

            <span className="h-px w-14 bg-gradient-to-l from-transparent to-[#B9843D]" />
          </div>

          <h2 className="mt-1 font-serif text-[24px] font-normal leading-tight tracking-[-0.02em] text-[#352218] sm:text-[28px] lg:text-[31px]">
            Families Who Received Sewa
          </h2>

          <p className="mx-auto mt-1 max-w-[620px] text-[10px] font-normal leading-4 text-[#655247] sm:text-[11px]">
            Stories of families supported with dignity, care and compassion.
          </p>
        </header>

        <div className="grid min-h-[210px] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {visibleTestimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="group relative mx-auto h-[210px] w-full overflow-hidden rounded-[15px] border border-[#E8D5B9] bg-[#FFFDF9] px-4 py-4 shadow-[0_7px_19px_rgba(78,48,26,0.07)] transition duration-300 hover:-translate-y-0.5 hover:border-[#D8B077] hover:shadow-[0_10px_24px_rgba(78,48,26,0.10)]"
            >
              <CornerFlower />

              <div className="grid h-full grid-cols-[minmax(0,1fr)_112px] gap-3 lg:grid-cols-[minmax(0,1fr)_108px]">
                <div className="relative z-10 flex min-w-0 flex-col">
                  <div className="font-serif text-[36px] font-semibold leading-[0.65] text-[#D79B32]">
                    “
                  </div>

                  <p className="mt-1.5 line-clamp-5 font-serif text-[12px] font-normal leading-[1.42] text-[#3D2A20]">
                    {testimonial.quote}
                  </p>

                  <div className="mt-auto">
                    <DecorativeDivider />

                    <h3 className="mt-1.5 font-serif text-[14px] font-semibold leading-tight text-[#342219]">
                      {testimonial.name}
                    </h3>

                    <p className="mt-0.5 flex items-center gap-1 text-[10px] font-medium text-[#B17627]">
                      <FaMapMarkerAlt
                        className="h-3 w-3 fill-[#C88C33] text-[#C88C33]"
                      />

                      {testimonial.location}
                    </p>
                  </div>
                </div>

                <div className="relative flex items-center justify-center">
                  <div className="relative h-[145px] w-[112px] overflow-hidden rounded-[50%] border border-[#D9B77E] bg-[#FFF8EC] p-[4px] shadow-[0_4px_13px_rgba(74,46,27,0.09)] lg:h-[140px] lg:w-[108px]">
                    <div className="relative h-full w-full overflow-hidden rounded-[50%] border border-[#E6D6BF]">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        sizes="112px"
                        style={{
                          objectFit: "cover",
                          objectPosition:
                            testimonial.position ?? "50% 50%",
                        }}
                        className="transition-transform duration-500 group-hover:scale-[1.025]"
                      />
                    </div>
                  </div>

                  <div className="absolute bottom-[8px] left-1/2 z-20 grid h-[34px] w-[34px] -translate-x-1/2 place-items-center rounded-full border border-[#D8AF6B] bg-[#FFFDF9] shadow-[0_4px_10px_rgba(72,43,24,0.10)]">
                    <LotusMark className="h-4 w-6" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-center gap-2.5">
          {Array.from({ length: totalPages }).map((_, index) => {
            const selected = page === index;

            return (
              <button
                key={index}
                type="button"
                onClick={() => setPage(index)}
                aria-label={`Go to testimonial page ${index + 1}`}
                aria-current={selected ? "true" : undefined}
                className={`h-2.5 w-2.5 rounded-full border transition-all duration-300 ${
                  selected
                    ? "border-[#D89A32] bg-[#D89A32]"
                    : "border-[#C7954B] bg-transparent hover:bg-[#EAD3AC]"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
