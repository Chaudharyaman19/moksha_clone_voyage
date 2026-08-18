import Image from "next/image";
import { FaHandHoldingHeart, FaRegHeart, FaShieldAlt, FaUsers } from "react-icons/fa";
import { PiFlowerLotus, PiHandsPraying } from "react-icons/pi";

const values = [
  { title: "Compassion", caption: "At Every Step", icon: FaRegHeart },
  { title: "Integrity", caption: "In Every Action", icon: FaShieldAlt },
  { title: "Respect", caption: "For Every Life", icon: FaUsers },
  { title: "Dignity", caption: "In Every Journey", icon: PiFlowerLotus },
];

function LeafDecoration({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 120 150" fill="none" aria-hidden="true">
      <path d="M4 145C25 112 38 79 47 42C51 25 60 11 75 2" stroke="#aeb49a" strokeWidth="2" />
      <path d="M36 83C18 78 7 68 3 52C20 52 34 62 39 75M45 51C31 43 26 31 29 17C43 22 51 33 49 45M29 105C14 105 5 98 0 86C14 84 26 91 32 99M51 31C51 17 58 7 70 1C73 14 66 26 54 34M42 66C55 54 68 51 80 56C72 69 59 75 44 72M33 97C47 87 60 86 72 93C61 105 48 109 35 104M21 124C33 116 45 116 55 123C45 133 33 136 22 131" fill="#d9ddcb" fillOpacity=".72" />
    </svg>
  );
}

export default function WhoWeAre() {
  return (
    <section className="w-full overflow-hidden bg-[#faf4eb]" aria-labelledby="who-we-are-title">
      <div className="relative mx-auto aspect-[2.32/1] w-full max-w-[1774px] min-w-[720px] origin-top-left max-md:left-1/2 max-md:-translate-x-1/2">
        <Image
          src="/assets/about-reference/who-we-are-background-v2.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <LeafDecoration className="absolute -left-[.5%] -top-[1%] h-[25%] w-[8%] -rotate-[18deg] opacity-75" />
        <LeafDecoration className="absolute -bottom-[1%] -left-[1.4%] h-[47%] w-[10%] rotate-[4deg] opacity-75" />

        <div className="absolute left-[4.6%] top-[6.2%] flex w-[37%] flex-col items-center text-center text-[#123d31]">
          <PiFlowerLotus className="h-auto w-[5.2%] text-[#c28b2c]" aria-hidden="true" />

          <div className="mt-[1.1%] flex w-[68%] items-center gap-[3%] text-[clamp(10px,1.38vw,24px)] font-semibold tracking-[0.16em] text-[#b47a20]">
            <span className="h-px flex-1 bg-[#d4aa63]" />
            <span className="whitespace-nowrap">WHO WE ARE</span>
            <span className="h-px flex-1 bg-[#d4aa63]" />
          </div>

          <h2 id="who-we-are-title" className="mt-[2.2%] font-serif text-[clamp(21px,2.8vw,49px)] font-normal leading-[1.14] tracking-[-0.015em]">
            <span className="block">Moksha Sewa Is a</span>
            <span className="block whitespace-nowrap">Namo Gange Trust Initiative.</span>
          </h2>

          <div className="mt-[3.2%] flex w-[38%] items-center gap-[5%] text-[#c38c2b]">
            <span className="h-px flex-1 bg-[#d4aa63]" />
            <PiFlowerLotus className="w-[8%]" />
            <span className="h-px flex-1 bg-[#d4aa63]" />
          </div>
        </div>

        <div className="absolute left-[6.45%] top-[43%] w-[34.5%] text-[#263830]">
          <article className="grid grid-cols-[14%_1fr] items-start gap-[4%]">
            <div className="grid aspect-square place-items-center rounded-full bg-[#f1e8d5] text-[#c58b26]">
              <FaHandHoldingHeart className="h-auto w-[53%]" />
            </div>
            <p className="border-l border-[#d9a957] pl-[4%] text-[clamp(9px,1.12vw,20px)] leading-[1.48]">
              Moksha Sewa is a dedicated humanitarian initiative of Namo Gange Trust, created to provide <strong>compassionate and responsible support</strong> for authorised unclaimed cases, people without family support, and verified families facing financial hardship.
            </p>
          </article>

          <article className="mt-[3.5%] grid grid-cols-[14%_1fr] items-start gap-[4%]">
            <div className="grid aspect-square place-items-center rounded-full bg-[#f1e8d5] text-[#c58b26]">
              <FaUsers className="h-auto w-[51%]" />
            </div>
            <p className="border-l border-[#d9a957] pl-[4%] text-[clamp(9px,1.12vw,20px)] leading-[1.48]">
              The initiative operates under the guidance and institutional framework of Namo Gange Trust, bringing together volunteers, coordinators, service partners and compassionate citizens to support <strong>dignified final journeys</strong>.
            </p>
          </article>
        </div>

        <div className="absolute left-[6.4%] top-[87.3%] flex w-[35.4%] items-center text-[#34493f]">
          {values.map(({ title, caption, icon: Icon }, index) => (
            <div key={title} className={`flex flex-1 items-center gap-[8%] px-[2.5%] ${index ? "border-l border-[#d2bd97]" : ""}`}>
              <Icon className="h-auto w-[25%] shrink-0 text-[#bd862a]" />
              <span className="whitespace-nowrap text-[clamp(7px,.82vw,15px)] leading-[1.25]">
                <span className="block">{title}</span>{caption}
              </span>
            </div>
          ))}
        </div>

        <div className="absolute left-[57.5%] top-[10.5%] flex w-[14%] flex-col items-center text-center">
          <Image src="/assets/logo-moksha-seva.png" alt="Moksha Sewa" width={200} height={160} className="h-auto w-[31%] mix-blend-multiply" />
          <p className="mt-[-1%] font-serif text-[clamp(9px,1.15vw,20px)] font-semibold text-[#183d3b]">MOKSHA SEWA</p>
          <p className="text-[clamp(6px,.7vw,12px)] text-[#b47a20]">A Namo Gange Trust Initiative</p>
          <span className="mt-[3%] h-px w-[33%] bg-[#c79536]" />
        </div>

        <div className="absolute bottom-[3.2%] left-[51.1%] flex h-[12.5%] w-[45.8%] items-center rounded-[1.8vw] bg-[#103f31]/95 px-[5%] text-white shadow-[0_4px_7px_rgba(0,0,0,.25)]">
          <PiHandsPraying className="h-auto w-[8%] shrink-0 text-[#d09a2d]" />
          <div className="ml-[5%] border-l border-[#c59a48] pl-[5%] text-[clamp(8px,1.05vw,18px)] leading-[1.45]">
            Together, we ensure that no one is left without <strong className="text-[#d09a2d]">dignity,<br />care and respect</strong> in their final journey.
          </div>
        </div>
      </div>
    </section>
  );
}
