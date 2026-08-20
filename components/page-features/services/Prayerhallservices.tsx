import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import Image from "next/image";
import { FaHandHoldingHeart, FaOm, FaStar } from "react-icons/fa";
import { GiLotusFlower, GiCandleHolder } from "react-icons/gi";
import { BsTelephone } from "react-icons/bs";
import { MdHandshake, MdOutlineLocalFlorist } from "react-icons/md";
import { BiBuildingHouse } from "react-icons/bi";
import { TbHeartHandshake } from "react-icons/tb";

const supportCards = [
  {
    src: "/assets/prayerhallservices/support-1.png",
    title: "Ground Booking",
  },
  {
    src: "/assets/prayerhallservices/support-2.png",
    title: "Floral Setup",
  },
  {
    src: "/assets/prayerhallservices/support-3.png",
    title: "Seating Arrangements",
  },
  {
    src: "/assets/prayerhallservices/support-4.png",
    title: "Audio & Mic Setup",
  },
  {
    src: "/assets/prayerhallservices/support-5.png",
    title: "Pandit Ji Coordination",
  },
  {
    src: "/assets/prayerhallservices/support-6.png",
    title: "Guest Management",
  },
];

export default function PrayerHallServices() {
  return (
    <div className="service-page min-h-screen bg-[#FAF8F4] font-sans text-[#321A10]">
      <Topbar />
      <Navbar />

      <main className="overflow-hidden pb-6 pt-24 lg:pb-6 lg:pt-24">
        {/* Hero Section */}
        <section className="service-banner relative min-h-[500px] w-full overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/assets/prayerhallservices/hero-real.png"
              alt="Prayer Hall Setup"
              fill
              priority
              quality={100}
              sizes="100vw"
              className="object-cover object-right"
            />
          </div>

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(250,248,244,1) 0%, rgba(250,248,244,0.9) 35%, rgba(250,248,244,0.40) 60%, rgba(250,248,244,0.05) 85%)",
            }}
          />

          <div className="relative mx-auto flex min-h-[500px] w-full max-w-7xl items-center px-4 py-[20px] lg:px-0">
            <div className="max-w-[540px]">
              <div className="mb-1 flex items-center gap-2 text-[18px] font-medium tracking-wide text-[#321A10]">
                <span className="opacity-70">Moksha Sewa</span>
                <span className="opacity-50">›</span>
                <span className="opacity-70">Our Services</span>
                <span className="opacity-50">›</span>
                <span className="font-semibold text-[#C99A4A]">
                  Ground &amp; Prayer Support
                </span>
              </div>

              <div className="mb-[2px] flex items-center gap-2 text-[#C99A4A]">
                <GiLotusFlower className="h-5 w-5" />

                <span className="text-[18px] font-medium tracking-wide">
                  Creating A Space For Peace.
                </span>
              </div>

              <h1 className="pb-[20px] pt-[8px] font-serif text-[30px] leading-[1.1] text-[#321A10]">
                Ground &amp; Prayer Support
              </h1>

              <p className="mb-8 max-w-[480px] text-[18px] leading-relaxed text-[#321A10]/80">
                Finding the right place to grieve and pray is essential. We
                assist with cremation-ground coordination, setting up serene
                prayer halls, and providing calm guidance for the entire family.
              </p>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <a
                  href="/request-help"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-[#321A10] px-6 py-3 text-[20px] font-semibold text-[#FAF8F4] shadow-sm transition-all hover:bg-[#4A2E1B] md:px-8"
                >
                  <GiLotusFlower className="h-4 w-4 text-[#C99A4A]" />
                  <span>Request Support</span>
                </a>

                <a
                  href="/donation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="donate-nav-sparkle relative inline-flex h-[46px] min-w-[190px] items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full border border-[#F4C46A] bg-gradient-to-r from-[#B76B16] via-[#E5A93E] to-[#B76B16] px-6 text-[20px] font-semibold text-white shadow-[0_0_18px_rgba(229,169,62,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(229,169,62,0.72)]"
                >
                  <span className="donate-nav-shine" aria-hidden />
                  <GiCandleHolder className="relative z-10 h-5 w-5 shrink-0" />

                  <span className="relative z-10 whitespace-nowrap">
                    Donate for Support
                  </span>

                  <FaStar
                    className="donate-star donate-star-one"
                    aria-hidden
                  />
                  <FaStar
                    className="donate-star donate-star-two"
                    aria-hidden
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="mx-auto mb-4 max-w-7xl px-4 lg:px-0">
          <div className="grid grid-cols-1 items-stretch gap-2 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              imageSrc="/assets/prayerhallservices/feature-ground.png"
              title="Ground Coordination"
              desc="Seamless coordination with ground staff and family members."
            />

            <FeatureCard
              imageSrc="/assets/prayerhallservices/feature-setup.png"
              title="Prayer Setup"
              desc="Serene prayer arrangements prepared with care and respect."
            />

            <FeatureCard
              imageSrc="/assets/prayerhallservices/feature-family.png"
              title="Family Support"
              desc="Gentle guidance and assistance for family members throughout."
            />

            <FeatureCard
              imageSrc="/assets/prayerhallservices/feature-peace.png"
              title="Peaceful Environment"
              desc="A calm and respectful space for prayer, mourning and remembrance."
            />
          </div>
        </section>

        {/* How It Works Section */}
        <section className="relative bg-[#FAF8F4] pb-4 pt-2">
          <div className="mx-auto max-w-7xl px-4 lg:px-0">
            <div className="relative mb-6 text-center">
              <h2 className="inline-flex items-center gap-3 py-[20px] font-serif text-[30px] text-[#321A10]">
                <span className="text-[20px] text-[#C99A4A]/80">✹</span>
                How It Works
                <span className="text-[20px] text-[#C99A4A]/80">✹</span>
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-[15%] right-[15%] top-[36px] hidden border-t-[1.5px] border-dashed border-[#C99A4A]/40 lg:block" />

              <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                <StepItem
                  num="1"
                  icon={<BsTelephone className="h-6 w-6 text-[#321A10]" />}
                  title="Call or Request Support"
                />

                <StepItem
                  num="2"
                  icon={
                    <BiBuildingHouse className="h-7 w-7 text-[#321A10]" />
                  }
                  title="Ground Coordination"
                />

                <StepItem
                  num="3"
                  icon={
                    <MdOutlineLocalFlorist className="h-7 w-7 text-[#321A10]" />
                  }
                  title="Prayer Hall Setup"
                />

                <StepItem
                  num="4"
                  icon={<MdHandshake className="h-7 w-7 text-[#321A10]" />}
                  title="Guidance During Ceremony"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Complete Support */}
        <section className="mx-auto w-full max-w-7xl overflow-hidden px-4 pb-2 pt-4 lg:px-0">
          <SectionHeader title="Our Complete Support" />

          <style>{`
            @keyframes scrollMarquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }

            .marquee-track {
              display: flex;
              width: max-content;
              animation: scrollMarquee 25s linear infinite reverse;
            }

            .marquee-track:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="relative mt-8 w-full overflow-hidden">
            <div className="marquee-track gap-4 lg:gap-5">
              {[...supportCards, ...supportCards].map((card, idx) => (
                <div
                  key={idx}
                  className="w-[160px] shrink-0 sm:w-[180px]"
                >
                  <MarqueeCircleCard src={card.src} title={card.title} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ground Support Roles */}
        <section className="mx-auto mb-2 max-w-7xl px-4 pb-2 pt-0 lg:px-0">
          <SectionHeader title="Ground Support Roles" />

          <div className="mt-6 grid grid-cols-1 items-stretch gap-2 sm:grid-cols-2 lg:grid-cols-4">
            <RoleSquareCard
              src="/assets/prayerhallservices/roles-1.png"
              title="Venue Coordination"
              desc="Suitable venue coordination for every sacred ritual."
            />

            <RoleSquareCard
              src="/assets/prayerhallservices/roles-2.png"
              title="Setup & Decor"
              desc="Peaceful arrangements prepared with care and dignity."
            />

            <RoleSquareCard
              src="/assets/prayerhallservices/roles-3.png"
              title="Guest Assistance"
              desc="Clear and compassionate guidance for guests at every step."
            />

            <RoleSquareCard
              src="/assets/prayerhallservices/roles-4.png"
              title="Post-Prayer Cleanup"
              desc="Respectful clearing and coordination after rituals conclude."
            />
          </div>
        </section>

        {/* Trust Cards */}
        <section className="mx-auto mb-4 mt-2 max-w-7xl px-4 lg:px-0">
          <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-3">
            <TrustCard
              icon={
                <FaHandHoldingHeart className="h-10 w-10 text-[#C99A4A]" />
              }
              title="Compassionate Guidance"
              desc="Care, sensitivity and respect in every moment."
            />

            <TrustCard
              icon={<FaOm className="h-10 w-10 text-[#C99A4A]" />}
              title="Authentic Arrangements"
              desc="Setups tailored carefully to Shastra and family traditions."
            />

            <TrustCard
              icon={
                <TbHeartHandshake className="h-10 w-10 text-[#C99A4A]" />
              }
              title="Support Beyond Ceremony"
              desc="Continued guidance and support even after the ceremony."
            />
          </div>
        </section>

        {/* Final Donation CTA */}
        <section className="mx-auto max-w-7xl px-4 lg:px-0">
          <div className="flex flex-col items-stretch overflow-hidden rounded-none border border-[#E7D5B8] bg-[#E7D5B8]/30 shadow-sm lg:flex-row">
            {/* Left Image */}
            <div className="relative hidden h-[160px] w-full lg:block lg:h-auto lg:w-1/5">
              <Image
                src="/assets/prayerhallservices/hero.png"
                alt="Decorative brass items"
                fill
                sizes="20vw"
                className="object-cover object-bottom opacity-90"
              />
            </div>

            {/* Center Content */}
            <div className="z-10 flex flex-1 flex-col items-center justify-center bg-gradient-to-r from-[#FAF8F4] via-transparent to-transparent p-6 text-center lg:items-start lg:p-8 lg:text-left">
              <h2 className="max-w-lg py-[20px] font-serif text-[30px] leading-tight text-[#321A10]">
                Your Support Helps Families Receive Dignified &amp; Sacred Final
                Rites
              </h2>

              <a
                href="/donation"
                target="_blank"
                rel="noopener noreferrer"
                className="donate-nav-sparkle relative inline-flex h-[46px] min-w-[190px] items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full border border-[#F4C46A] bg-gradient-to-r from-[#B76B16] via-[#E5A93E] to-[#B76B16] px-6 text-[20px] font-semibold text-white shadow-[0_0_18px_rgba(229,169,62,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(229,169,62,0.72)]"
              >
                <span className="donate-nav-shine" aria-hidden />

                <span className="relative z-10 whitespace-nowrap">
                  Donate for Support
                </span>

                <FaStar
                  className="donate-star donate-star-one"
                  aria-hidden
                />
                <FaStar
                  className="donate-star donate-star-two"
                  aria-hidden
                />
              </a>
            </div>

            {/* Right Side */}
            <div className="flex w-full flex-col items-center justify-center border-t border-[#E7D5B8]/50 bg-[#FAF8F4]/50 p-6 text-center lg:w-1/4 lg:border-l lg:border-t-0">
              <FaHandHoldingHeart className="mb-3 h-10 w-10 text-[#C99A4A]" />

              <p className="max-w-[180px] text-[18px] font-medium leading-relaxed text-[#321A10]">
                Every act of kindness becomes a blessing for many.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// ---------------- Components ----------------

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mb-4 flex items-center justify-center gap-4 text-center">
      <GiLotusFlower className="h-5 w-5 rotate-90 text-[#C99A4A] opacity-60" />

      <h2 className="py-[20px] font-serif text-[30px] text-[#321A10]">
        {title}
      </h2>

      <GiLotusFlower className="h-5 w-5 -rotate-90 text-[#C99A4A] opacity-60" />
    </div>
  );
}

function FeatureCard({
  imageSrc,
  title,
  desc,
}: {
  imageSrc: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="group relative h-full min-h-[260px] w-full cursor-pointer overflow-hidden rounded-sm border border-black/10 aspect-[5/4]">
      <Image
        src={imageSrc}
        alt={title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black/90 via-black/30 to-black/5 p-5 text-center">
        <h4 className="flex items-end justify-center text-[20px] font-semibold leading-[1.15] text-white">
          {title}
        </h4>

        {desc && (
          <p className="max-h-0 overflow-hidden text-[18px] leading-snug text-white/90 opacity-0 transition-all duration-500 group-hover:mt-2 group-hover:max-h-[44px] group-hover:opacity-100">
            {desc}
          </p>
        )}
      </div>
    </div>
  );
}

function StepItem({
  num,
  icon,
  title,
}: {
  num: string;
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="group flex h-full flex-col items-center text-center">
      <div className="relative mb-4">
        <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-[#E7D5B8]/80 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-all group-hover:shadow-[0_4px_15px_rgba(0,0,0,0.06)]">
          {icon}
        </div>

        <div className="absolute -right-1 -top-1 flex h-[26px] w-[26px] items-center justify-center rounded-full border-2 border-white bg-[#C99A4A] text-[20px] font-semibold text-white">
          {num}
        </div>
      </div>

      <h4 className="mx-auto max-w-[220px] px-2 text-[20px] font-semibold leading-[1.15] text-[#321A10]">
        {title}
      </h4>
    </div>
  );
}

function MarqueeCircleCard({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  return (
    <div className="group flex h-full cursor-pointer flex-col items-center px-2">
      <div className="relative mb-3 aspect-square w-full overflow-hidden rounded-full border-4 border-[#E7D5B8]/40 bg-white shadow-sm transition-all duration-300 group-hover:border-[#C99A4A]/50">
        <Image
          src={src}
          alt={title}
          fill
          sizes="180px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <h4 className="flex items-center justify-center text-center text-[20px] font-semibold leading-[1.15] text-[#321A10]">
        {title}
      </h4>
    </div>
  );
}

function RoleSquareCard({
  src,
  title,
  desc,
}: {
  src: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-none border border-[#E7D5B8]/60 bg-white transition-shadow duration-300 hover:shadow-md">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={src}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col border-t border-[#E7D5B8]/30 bg-white p-4 text-center">
        <h4 className="flex items-center justify-center text-[20px] font-semibold leading-[1.15] text-[#321A10]">
          {title}
        </h4>

        <p className="mt-1 flex-1 text-[18px] leading-relaxed text-[#321A10]/70">
          {desc}
        </p>
      </div>
    </div>
  );
}

function TrustCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex h-full flex-col items-center gap-5 rounded-none border border-[#E7D5B8] bg-white p-6 text-center lg:flex-row lg:items-start lg:text-left">
      <div className="shrink-0 rounded-full border border-[#E7D5B8]/50 bg-[#FAF8F4] p-3">
        {icon}
      </div>

      <div className="flex h-full flex-1 flex-col">
        <h4 className="text-[20px] font-semibold leading-[1.15] text-[#321A10]">
          {title}
        </h4>

        <p className="mt-1 flex-1 text-[18px] leading-relaxed text-[#321A10]/70">
          {desc}
        </p>
      </div>
    </div>
  );
}