import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type Service = {
  title: React.ReactNode;
  description: string;
  image: string;
  alt: string;
};

type Step = {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

const services: Service[] = [
  {
    title: (
      <>
        Final-Journey
        <br />
        Transport
      </>
    ),
    description:
      "Dignified and timely transport to the cremation destination.",
    image: "/assets/about-optimized/final_journey_support.png",
    alt: "Final journey transport",
  },
  {
    title: (
      <>
        Cremation &
        <br />
        Last-Rites Support
      </>
    ),
    description:
      "Complete support for cremation and essential last-rites arrangements.",
    image: "/assets/about-optimized/cremation.png",
    alt: "Cremation support",
  },
  {
    title: (
      <>
        Ritual & Priest
        <br />
        Coordination
      </>
    ),
    description:
      "Arranging priests and guidance for all required rituals with respect.",
    image: "/assets/about-optimized/ritual.png",
    alt: "Ritual and priest coordination",
  },
  {
    title: (
      <>
        Essential
        <br />
        Materials
      </>
    ),
    description:
      "Providing all essential items required for the final rites.",
    image: "/assets/about-optimized/essentials.png",
    alt: "Essential materials",
  },
  {
    title: (
      <>
        Family
        <br />
        Guidance
      </>
    ),
    description:
      "Emotional support and guidance for families during difficult times.",
    image: "/assets/about-optimized/family_guidance.png",
    alt: "Family guidance",
  },
];

const steps: Step[] = [
  {
    number: "01",
    title: "Understand",
    description: "We listen to the circumstances.",
    image: "/assets/about-optimized/understand.png",
    alt: "Understand",
  },
  {
    number: "02",
    title: "Verify",
    description: "Eligibility and required formalities are reviewed.",
    image: "/assets/about-optimized/verify.png",
    alt: "Verify",
  },
  {
    number: "03",
    title: "Coordinate",
    description: "Essential support is arranged as applicable.",
    image: "/assets/about-optimized/coordinate.png",
    alt: "Coordinate",
  },
  {
    number: "04",
    title: "Stand Beside",
    description:
      "Compassionate on-ground guidance continues through the process.",
    image: "/assets/about-optimized/stand_behind.png",
    alt: "Stand beside",
  },
];

const Lotus = ({ small = false }: { small?: boolean }) => (
  <svg
    viewBox="0 0 48 48"
    className={small ? "h-5 w-5" : "h-7 w-7"}
    fill="none"
  >
    <path
      d="M24 37C18 30 17 23 20 17C23 20 24 24 24 29"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M24 37C30 30 31 23 28 17C25 20 24 24 24 29"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M24 38C18 33 12 30 7 30C11 36 17 39 24 39"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <path
      d="M24 38C30 33 36 30 41 30C37 36 31 39 24 39"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const DecorativeDivider = () => (
  <div className="flex items-center justify-center gap-3 text-[#b77b22]">
    <span className="h-px w-14 bg-[#b77b22]/60" />
    <Lotus small />
    <span className="h-px w-14 bg-[#b77b22]/60" />
  </div>
);

const ServiceIcon = ({ image, alt }: { image: string; alt: string }) => (
  <div className="absolute -top-[64px] left-1/2 z-20 -translate-x-1/2 sm:-top-[92px]">
    <div className="relative h-[62px] w-[62px] sm:h-[82px] sm:w-[82px]">
      <Image
        src={image}
        alt={alt}
        fill
        sizes="82px"
        className="object-contain"
      />
    </div>
  </div>
);

const MokshaServices: React.FC = () => {
  return (
    <section
      className="
        relative isolate w-full overflow-hidden
        bg-[#f8f1e5]
        text-[#123e3a]
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================== */}
      <Image
        src="/assets/about-optimized/moksha_services_bg.png"
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />

      {/* Very subtle texture / readability layer */}
      <div
        className="
          absolute inset-0 -z-10
          bg-[#f8f1e5]/[0.03]
        "
      />

      {/* =========================================================
          MAIN CONTENT
      ========================================================== */}
      <div
        className="
          relative mx-auto w-full
          max-w-[1180px]
          px-4
          pb-8 pt-5
          sm:px-7 sm:pb-10 sm:pt-7
          lg:px-8 lg:pb-8 lg:pt-4
        "
      >
        {/* =======================================================
            HEADER
        ======================================================== */}
        <header className="mx-auto max-w-[700px] text-center">
          {/* Lotus */}
          <div className="mb-1 flex justify-center text-[#b77b22]">
            <Lotus />
          </div>

          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3">
            <span className="hidden h-px w-14 bg-[#b77b22]/70 sm:block" />

            <span
              className="
                text-[16px] font-semibold
                tracking-[0.20em]
                text-[#103e39]
              "
            >
              WHAT WE DO
            </span>

            <span className="hidden h-px w-14 bg-[#b77b22]/70 sm:block" />
          </div>

          {/* Main heading */}
          <h2
            className="
              mt-1
              font-sans
              text-[24px]
              font-semibold
              leading-[1.05]
              text-[#083e3a]
              sm:text-[30px]
            "
          >
            Supporting the
            <br />
            Final Journey{" "}
            <span className="text-[#ae721e]">
              With Care.
            </span>
          </h2>

          <div className="mt-3">
            <DecorativeDivider />
          </div>

          <p
            className="
              mx-auto mt-2 max-w-[570px]
              text-[16px] leading-[1.5]
              text-[#303635]
            "
          >
            We provide compassionate and responsible support for every step
            <br className="hidden sm:block" />
            of the final journey.
          </p>
        </header>

        {/* =======================================================
            SERVICE CARDS
        ======================================================== */}
        <div
          className="
            relative z-10
            mt-16
            grid grid-cols-1
            gap-y-[76px]
            rounded-[20px]
            bg-[#fffdf8]/90
            px-5 pb-6 pt-[52px]
            shadow-[0_4px_20px_rgba(89,64,30,0.05)]
            sm:mt-[68px]
            sm:grid-cols-2
            sm:gap-y-[106px]
            sm:px-7
            lg:mt-[66px]
            lg:grid-cols-5
            lg:gap-0
            lg:px-0
            lg:pb-5
            lg:pt-[53px]
          "
        >
          {services.map((service, index) => (
            <article
              key={index}
              className={`
                relative px-4 text-center
                lg:min-h-[150px]
                ${
                  index !== services.length - 1
                    ? "lg:border-r lg:border-[#cda86c]/45"
                    : ""
                }
              `}
            >
              <ServiceIcon image={service.image} alt={service.alt} />

              <h3
                className="
                  font-serif
                  text-[16px]
                  font-bold
                  leading-[1.12]
                  text-[#103f3a]
                  sm:text-[17px]
                "
              >
                {service.title}
              </h3>

              {/* tiny gold lotus */}
              <div className="my-2 flex justify-center text-[#b77b22]">
                <Lotus small />
              </div>

              <p
                className="
                  mx-auto max-w-[200px]
                  text-[16px]
                  leading-[1.42]
                  text-[#343838]
                "
              >
                {service.description}
              </p>
            </article>
          ))}
        </div>

        {/* =======================================================
            HOW WE SERVE
        ======================================================== */}
        <section className="mt-7 sm:mt-8">
          {/* Heading */}
          <div className="flex items-center justify-center gap-3">
            <span className="hidden h-px w-16 bg-[#b77b22]/70 sm:block" />

            <span className="text-[#b77b22]">
              <Lotus small />
            </span>

            <h3
              className="
                text-[16px] font-semibold
                tracking-[0.18em]
                text-[#10403b]
                sm:text-[18px]
              "
            >
              HOW WE SERVE
            </h3>

            <span className="hidden h-px w-16 bg-[#b77b22]/70 sm:block" />
          </div>

          {/* =====================================================
              DESKTOP TIMELINE
          ====================================================== */}
<div className="relative mt-4 hidden lg:block">
              {/* Main connecting line */}
              <div
                className="
                  absolute left-[9%] right-[9%] top-[51px]
                  h-px bg-[#0c3d39]
                "
              />

              <div className="grid grid-cols-4">
                {steps.map((step, index) => (
                  <div key={step.number} className="relative text-center">
                    {/* icon */}
                    <div className="relative mx-auto h-[120px] w-[120px]">
                      <Image
                        src={step.image}
                        alt={step.alt}
                        fill
                        sizes="120px"
                        className="object-contain"
                      />
                    </div>

                    {/* arrow between steps */}
                    {index !== steps.length - 1 && (
                      <div
                        className="
                          absolute right-[-9px] top-[39px] z-20
                          flex h-8 w-8
                          items-center justify-center
                          rounded-full
                          border border-[#bd8127]
                          bg-[#fbf5e9]
                          text-[#0b403c]
                        "
                      >
                        <ArrowRight size={15} />
                      </div>
                    )}

                  <h4
                    className="
                      mt-2
                      font-serif
                      text-[16px]
                      font-bold
                      text-[#16423d]
                    "
                  >
                    {step.title}
                  </h4>

                  <p
                    className="
                      mx-auto mt-1
                      max-w-[170px]
                      text-[16px]
                      leading-[1.42]
                      text-[#343737]
                    "
                  >
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* =====================================================
              TABLET
          ====================================================== */}
          <div className="mt-5 grid grid-cols-1 gap-6 sm:mt-6 sm:grid-cols-2 sm:gap-8 lg:hidden">
            {steps.map((step) => (
              <article
                key={step.number}
                className="
                  relative
                  flex flex-col
                  items-center
                  text-center
                "
              >
                <div className="relative mx-auto h-[84px] w-[84px] sm:h-[105px] sm:w-[105px]">
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      sizes="105px"
                      className="object-contain"
                    />
                  </div>

                <h4 className="mt-2 font-serif text-[16px] font-bold">
                  {step.title}
                </h4>

                <p className="mt-1 max-w-[200px] text-[16px] leading-[1.42]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* =======================================================
            CTA
        ======================================================== */}
        <div className="mt-5 flex justify-center sm:mt-6">
          <div className="flex w-full max-w-[440px] items-center justify-center gap-3">

            <a
              href="/prayerhallservices"
              aria-label="Explore Our Sewa"
              className="group relative block transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Image
                src="/assets/about-optimized/moksha_services_button.png"
                alt="Explore Our Sewa"
                width={360}
                height={82}
                className="h-auto w-full max-w-[360px] object-contain"
              />

              <span
                className="
                  absolute inset-0
                  flex items-center justify-center
                  font-serif
                  text-[16px]
                  font-semibold
                  text-white
                  drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]
                "
              >
                Explore Our Sewa
              </span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MokshaServices;