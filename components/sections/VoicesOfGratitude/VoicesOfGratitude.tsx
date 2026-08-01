"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  location: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Moksha Sewa supported us at the most difficult time. Their help was a blessing for our family.",
    name: "Suman Devi",
    location: "Varanasi",
    image: "/assets/girl.jpg",
  },
  {
    id: 2,
    quote: "The team treated my father's last journey with so much respect and compassion. Thank you.",
    name: "Rajesh Sharma",
    location: "Lucknow",
    image: "/assets/man1.jpg",
  },
  {
    id: 3,
    quote: "They were with us 24x7 and handled everything. We could focus on our emotions. Forever grateful.",
    name: "Meena Patel",
    location: "Ahmedabad",
    image: "/assets/im1.jpeg",
  },
  {
    id: 4,
    quote: "Very professional and empathetic service. They arranged everything from the ambulance to the priest seamlessly.",
    name: "Anil Kumar",
    location: "Delhi",
    image: "/assets/man2.avif",
  },
  {
    id: 5,
    quote: "During our hardest time, the team stepped up and took care of all the rituals. We are deeply thankful.",
    name: "Sunita Verma",
    location: "Pune",
    image: "/assets/girl.jpg",
  },
  {
    id: 6,
    quote: "I highly recommend Moksha Sewa. Their dedication and compassion made a very tough day much easier for us.",
    name: "Prakash Singh",
    location: "Mumbai",
    image: "/assets/man1.jpg",
  },
];

export default function VoicesOfGratitude() {
  const [page, setPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const visibleTestimonials = testimonials.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  // Optional: Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalPages]);

  return (
    <section className="relative w-full overflow-hidden bg-[#FFFCF8] py-2 md:py-3">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-5 text-center">
          <h2 className="font-serif text-[24px] font-normal leading-none text-[#2F1D14] sm:text-[28px] md:text-[32px] lg:text-[38px]">
            Voices of Gratitude
          </h2>
        </header>

        {/* Min-height ensures the layout doesn't jump if cards have different text lengths */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 min-h-[160px]">
          {visibleTestimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="relative flex h-full flex-row items-start justify-between gap-4 rounded-[12px] border border-[#E9DED2] bg-white p-4 shadow-[0_4px_14px_rgba(66,43,24,0.055)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(66,43,24,0.09)] sm:p-5 sm:gap-5"
            >
              {/* Left Side: Quote + Author */}
              <div className="relative z-10 flex-1 pl-6 text-[#5D493C]">
                {/* Quote mark icon */}
                <div className="absolute left-0 top-0 text-3xl font-serif text-[#C78B4D] opacity-60 leading-none">
                  &ldquo;
                </div>
                
                <p className="mb-4 text-[13px] font-normal leading-relaxed sm:text-[14px]">
                  {testimonial.quote}
                </p>

                <div>
                  <h3 className="font-serif text-[15px] font-semibold text-[#32231C]">
                    - {testimonial.name}
                  </h3>
                  <p className="text-[12px] text-[#8B6A3E]">{testimonial.location}</p>
                </div>
              </div>

              {/* Right Side: Profile Image */}
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-[#E9DED2] sm:h-20 sm:w-20 lg:h-24 lg:w-24">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
            </article>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setPage(idx)}
              aria-label={`Go to page ${idx + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                page === idx ? "bg-[#C78B4D] w-4" : "border border-[#C78B4D] bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
