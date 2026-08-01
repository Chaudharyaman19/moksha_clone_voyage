"use client";

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
];

export default function VoicesOfGratitude() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FFFCF8] py-2 md:py-3">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-5 text-center">
          <h2 className="font-serif text-[24px] font-normal leading-none text-[#2F1D14] sm:text-[28px] md:text-[32px] lg:text-[38px]">
            Voices of Gratitude
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="relative flex flex-col justify-between rounded-[12px] border border-[#E9DED2] bg-white p-5 shadow-[0_4px_14px_rgba(66,43,24,0.055)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(66,43,24,0.09)] sm:p-6"
            >
              {/* Quote mark icon */}
              <div className="absolute left-4 top-4 text-3xl font-serif text-[#C78B4D] opacity-60">
                &ldquo;
              </div>
              
              <div className="relative z-10 pl-6 text-[#5D493C]">
                <p className="mb-6 text-[13px] font-normal leading-relaxed sm:text-[14px]">
                  {testimonial.quote}
                </p>

                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-[#E9DED2]">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-[15px] font-semibold text-[#32231C]">
                      - {testimonial.name}
                    </h3>
                    <p className="text-[12px] text-[#8B6A3E]">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Dot indicators (visual only) */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <div className="h-2 w-2 rounded-full bg-[#C78B4D]"></div>
          <div className="h-2 w-2 rounded-full border border-[#C78B4D] bg-transparent"></div>
          <div className="h-2 w-2 rounded-full border border-[#C78B4D] bg-transparent"></div>
        </div>
      </div>
    </section>
  );
}
