import Image from "next/image";
import Marquee from "react-fast-marquee";

const boardMembers = [
  {
    name: "Madhukar Reddy Dasari",
    role: "Chief Financial Officer (CFO) & CIOO",
    description: "Manages finance, compliance, IT operations, and digital infrastructure.",
    image: "/assets/man1.jpg"
  },
  {
    name: "Sandeep Singh",
    role: "Chief Technology Officer (CTO)",
    description: "Leads technology, data security, and platform infrastructure.",
    image: "/assets/aman.jpeg"
  },
  {
    name: "Vijay Sharma",
    role: "Chief Operating Officer (COO) & CRSGO",
    description: "Oversees India operations, execution, on-ground services, and rituals.",
    image: "/assets/vijay_sharma.jpg"
  },
  {
    name: "Srujana Paid",
    role: "Chief Partnerships & Growth Officer (CPGO)",
    description: "Manages partnerships, growth strategies, and expansion initiatives.",
    image: "/assets/girl.jpg"
  },
  {
    name: "Madhukar & Srujana",
    role: "Chief Compliance & Risk Officer (CCRO)",
    description: "Ensures legal compliance, risk management, and governance standards.",
    image: "/assets/our.webp"
  },
];

export default function BoardMembers() {
  return (
    <section className="bg-white py-2 md:py-4">
      <div className="mx-auto w-full max-w-7xl px-0">
        
        <header className="mb-3 flex flex-col items-center text-center">
          <div className="mb-0.5 inline-flex items-center space-x-3">
            <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#8B6A3E]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#8B6A3E]">
              Leadership & Governance
            </span>
            <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#8B6A3E]" />
          </div>
          <h2 
            className="text-[26px] font-normal leading-tight text-[#2C1810] sm:text-[32px] md:text-[38px]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Meet Our Board Members
          </h2>
          
          {/* Diya Flourish */}
          <div className="mt-1.5 flex items-center gap-2">
            <span className="h-[2px] w-12 bg-[#8B6A3E]" />
            <span className="h-2 w-2 rotate-45 border border-[#8B6A3E] bg-[#C9A574]" />
            <span className="h-[1px] w-12 bg-gradient-to-r from-[#C9A574] to-transparent" />
          </div>
        </header>

        {/* Board Members Marquee */}
        <div className="relative mx-auto mt-2 w-full">
          {/* Subtle gradient fades for the edges of the marquee */}
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-8 bg-gradient-to-r from-white to-transparent md:w-20" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-8 bg-gradient-to-l from-white to-transparent md:w-20" />

          <Marquee speed={40} pauseOnHover={true} gradient={false} className="py-3">
            {boardMembers.map((member, idx) => (
              <div 
                key={idx}
                className="group relative mx-3 shrink-0 w-[300px] md:w-[340px] overflow-hidden rounded-2xl border border-[#D9B681]/30 bg-gradient-to-b from-[#FBF8F3] to-white p-4 shadow-[0_8px_20px_rgba(44,24,16,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_28px_rgba(139,106,62,0.12)] hover:border-[#D9B681]"
              >
                <div className="mb-3 flex justify-center">
                  <div className="relative h-16 w-16 md:h-20 md:w-20 overflow-hidden rounded-full border-4 border-white shadow-md ring-1 ring-[#D9B681]/30">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect width='100%25' height='100%25' fill='%23E9DDCF'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='12px' fill='%238B6A3E'%3EPhoto%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="font-serif text-[17px] font-medium text-[#2C1810] transition-colors group-hover:text-[#8B6A3E]">{member.name}</h3>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#8A7460]">
                    {member.role}
                  </p>
                  <div className="mt-2 mb-2 flex justify-center">
                    <span className="h-[2px] w-8 bg-gradient-to-r from-transparent via-[#D9B681] to-transparent" />
                  </div>
                  <p className="text-[12px] leading-[1.6] text-[#5F4A3D] line-clamp-3">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
