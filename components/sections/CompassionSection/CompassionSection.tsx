"use client";

interface CompassionSectionProps {
  variant?: "voyage" | "seva";
}

export default function CompassionSection({
  variant = "voyage",
}: CompassionSectionProps) {
  return (
    <section className="relative w-full min-h-[560px] overflow-hidden md:min-h-[600px] lg:min-h-[640px]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-no-repeat"
            style={{
              backgroundImage: "url('/assets/chatgpt.png')",
              backgroundPosition: "right center",
              backgroundSize: "contain",
            }}
          />

          {/* Single, balanced gradient overlay - this controls brightness */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F8F4EC] via-[#F8F4EC]/20 to-[#F8F4EC]/0"></div>
        </div>

        {/* Blur elements with reduced opacity for subtle depth */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#E8DBC5] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4C1A6] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute top-40 right-40 w-80 h-80 bg-[#C9B696] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="relative z-10 mx-auto h-full min-h-[560px] max-w-7xl px-0 md:min-h-[600px] lg:min-h-[640px]">
        <div className="flex h-full min-h-[560px] items-center md:min-h-[600px] lg:min-h-[640px]">
          <div className="max-w-3xl py-8 md:py-10">
            <div className="mb-3 inline-flex items-center gap-3">
              <span className="w-10 h-[1px] bg-[#8B6A3E]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8B6A3E]">
                {variant === "seva" ? "Moksha Sewa" : "Our Mission"}
              </span>
            </div>

            <h2 
              className="mb-3 text-[24px] font-normal leading-tight text-[#2C1810] sm:text-[28px] lg:text-[30px]"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              <span className="mb-1 block">
                {variant === "seva"
                  ? "For Families Who Need Support"
                  : "A Journey Guided by Love"}
              </span>
              <span className="block bg-gradient-to-r from-[#8B6A3E] to-[#5F4630] bg-clip-text text-transparent text-[24px] sm:text-[28px] lg:text-[30px]">
                {variant === "seva"
                  ? "Priest and Ritual Assistance"
                  : "with Peace of Mind"}
              </span>
            </h2>

            {/* Standard Diya Flourish */}
            <div className="mb-4 flex items-center gap-2">
              <span className="h-[2px] w-12 bg-[#8B6A3E]" />
              <span className="h-2 w-2 rotate-45 border border-[#8B6A3E] bg-[#C9A574]" />
              <span className="h-[1px] w-12 bg-gradient-to-r from-[#C9A574] to-transparent" />
            </div>

            <p className="mb-5 max-w-2xl text-[13px] font-light leading-relaxed text-[#5A4030]">
              At{" "}
              <span className="font-semibold text-[#8B6A3E]">
                {variant === "seva" ? "Moksha Sewa" : "Moksha Voyage"}
              </span>
              {variant === "seva"
                ? ", we arrange priest support, ritual items and final-rites assistance for poor and needy families. When a family cannot afford or manage the rituals, our team helps complete the prayers at the cremation ground with dignity, peace and proper guidance."
                : " To build a trusted, transparent digital ecosystem that connects families with verified end-of-life service providers, provides step-by-step emotional and ritual guidance, and ensures no one navigates life's most profound transition alone or without dignity. Our mission is to create a trusted digital ecosystem that supports families during life’s most difficult moments by connecting them with verified end-of-life service providers and offering compassionate guidance through every emotional and ritual step with dignity and care."}
            </p>

            {/* New Stats Row - Added for balance */}
            <div className="mb-4 grid grid-cols-3 gap-3">
              <div className="bg-[#8B6A3E]/5 p-3 rounded-lg text-center border border-[#8B6A3E]/10">
                <div className="text-xl font-bold text-[#8B6A3E]">500+</div>
                <div className="text-xs text-[#5A4030]">
                  {variant === "seva" ? "Ritual Help" : "Families Served"}
                </div>
                <div className="text-[9px] text-[#5A4030]/60 mt-1">
                  {variant === "seva" ? "For Needy Families" : "With Compassion"}
                </div>
              </div>
              <div className="bg-[#8B6A3E]/5 p-3 rounded-lg text-center border border-[#8B6A3E]/10">
                <div className="text-xl font-bold text-[#8B6A3E]">50+</div>
                <div className="text-xs text-[#5A4030]">
                  {variant === "seva" ? "Verified Priests" : "Verified Pandits"}
                </div>
                <div className="text-[9px] text-[#5A4030]/60 mt-1">
                  {variant === "seva" ? "Proper Ritual Guidance" : "Across India"}
                </div>
              </div>
              <div className="bg-[#8B6A3E]/5 p-3 rounded-lg text-center border border-[#8B6A3E]/10">
                <div className="text-xl font-bold text-[#8B6A3E]">15+</div>
                <div className="text-xs text-[#5A4030]">
                  {variant === "seva" ? "Cremation Ground Support" : "Cities Covered"}
                </div>
                <div className="text-[9px] text-[#5A4030]/60 mt-1">
                  {variant === "seva" ? "Family Guidance" : "Pan-India Network"}
                </div>
              </div>
            </div>

            {/* New Features Grid - Added for balance */}
            <div className="mb-4 grid grid-cols-2 gap-3">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8B6A3E] mt-2"></div>
                <div>
                  <div className="text-sm font-medium text-[#3A2A1F]">
                    {variant === "seva" ? "Priest Arrangement" : "Transparent Pricing"}
                  </div>
                  <div className="text-xs text-[#5A4030]/70">
                    {variant === "seva" ? "For families in need" : "No hidden costs, upfront quotes"}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8B6A3E] mt-2"></div>
                <div>
                  <div className="text-sm font-medium text-[#3A2A1F]">
                    {variant === "seva" ? "Ritual Items" : "Digital Agreements"}
                  </div>
                  <div className="text-xs text-[#5A4030]/70">
                    {variant === "seva"
                      ? "Flowers, lamps and prayer items"
                      : "Secure documentation"}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8B6A3E] mt-2"></div>
                <div>
                  <div className="text-sm font-medium text-[#3A2A1F]">
                    {variant === "seva" ? "Priest & Rituals" : "Ritual Guidance"}
                  </div>
                  <div className="text-xs text-[#5A4030]/70">
                    {variant === "seva" ? "Final rites with proper guidance" : "Step-by-step support"}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8B6A3E] mt-2"></div>
                <div>
                  <div className="text-sm font-medium text-[#3A2A1F]">
                    {variant === "seva" ? "Family Guidance" : "NRI Services"}
                  </div>
                  <div className="text-xs text-[#5A4030]/70">
                    {variant === "seva" ? "Calm support through rituals" : "Support from abroad"}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-7 py-3.5 bg-[#8B6A3E] text-white text-sm rounded-md font-medium hover:bg-[#7A5A2E] transition-colors shadow-sm hover:shadow-md">
                {variant === "seva" ? "Request Priest Support" : "Learn More"}
              </button>
              <button className="px-7 py-3.5 border border-[#8B6A3E] text-[#8B6A3E] text-sm rounded-md font-medium hover:bg-[#8B6A3E]/10 transition-colors">
                {variant === "seva" ? "Call for Ritual Help" : "Contact Our Team"}
              </button>
            </div>

            <div className="mt-5 flex items-center space-x-8">
              <div className="flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-full bg-[#8B6A3E]/10 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-[#8B6A3E]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm text-[#5A4030] font-medium">
                  {variant === "seva" ? "Priest Support" : "24/7 Support"}
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-full bg-[#8B6A3E]/10 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-[#8B6A3E]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 3a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm0 3a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm0 3a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm text-[#5A4030] font-medium">
                  {variant === "seva" ? "Ritual Items & Guidance" : "Cultural Sensitivity"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
