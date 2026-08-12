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
    image: "/assets/sandeep_singh.png"
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
    image: "/assets/madhukar_srujana.png"
  },
];

export default function BoardMembers() {
  return (
    <section className="bg-white py-2 md:py-3">
      <div className="mx-auto w-full max-w-[1400px] px-0">
        
        <header className="mb-3 flex flex-col items-center text-center">
          <div className="mb-1 inline-flex items-center space-x-3">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#8B6A3E]" />
            <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-[#8B6A3E]">
              Leadership & Governance
            </span>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#8B6A3E]" />
          </div>
          <h2 
            className="text-[32px] font-normal leading-tight text-[#2C1810] sm:text-[40px] md:text-[46px]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Meet Our Board
          </h2>
          
          {/* Elegant Diya Flourish */}
          <div className="mt-2 flex items-center gap-3">
            <span className="h-[2px] w-16 bg-gradient-to-r from-transparent to-[#8B6A3E]" />
            <span className="h-2.5 w-2.5 rotate-45 border border-[#8B6A3E] bg-[#C9A574] shadow-[0_0_8px_rgba(201,165,116,0.6)]" />
            <span className="h-[2px] w-16 bg-gradient-to-l from-transparent to-[#8B6A3E]" />
          </div>
        </header>

        {/* Board Members Marquee Container */}
        <div className="mx-auto mt-3 w-full max-w-[1300px] px-2 md:px-4">
          <div className="relative overflow-hidden rounded-[24px] border border-[#E9DDCD] bg-[#FDFAF7] shadow-sm">
            
            {/* Subtle fade edges inside the rounded container */}
            <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-12 bg-gradient-to-r from-[#FDFAF7] to-transparent md:w-20" />
            <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-12 bg-gradient-to-l from-[#FDFAF7] to-transparent md:w-20" />

            <Marquee speed={40} pauseOnHover={true} gradient={false} className="py-8">
              {boardMembers.map((member, idx) => (
                <div 
                  key={idx}
                  className="flex w-[260px] shrink-0 flex-col items-center border-r border-[#E9DDCD]/70 px-6 text-center md:w-[300px]"
                >
                  {/* Avatar */}
                  <div className="mb-4">
                    <div className="relative h-[95px] w-[95px] overflow-hidden rounded-full border border-[#D9B681] bg-white p-[3px] shadow-[0_2px_8px_rgba(217,182,129,0.2)] md:h-[110px] md:w-[110px]">
                      <div className="relative h-full w-full overflow-hidden rounded-full">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect width='100%25' height='100%25' fill='%23FBF8F3'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='12px' fill='%238B6A3E'%3EPhoto%3C/text%3E%3C/svg%3E";
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex flex-col items-center">
                    <h3 className="font-sans text-[15px] font-bold text-[#0D3823] md:text-[17px]">
                      {member.name}
                    </h3>
                    
                    <p className="mt-2 text-[14px] leading-[1.4] text-[#333333] md:text-[15px]">
                      <span className="font-medium block">{member.role}</span>
                      <span className="mt-1 block text-[14px] text-[#666666] md:text-[15px]">{member.description}</span>
                    </p>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
