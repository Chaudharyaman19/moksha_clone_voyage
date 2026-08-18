import React from "react";
import Image from "next/image";
import {
  Ambulance,
  Flame,
  UserRound,
  Package,
  HeartHandshake,
  MessageCircle,
  ClipboardCheck,
  Handshake,
  Umbrella,
  ArrowRight,
} from "lucide-react";

type Service = {
  title: React.ReactNode;
  description: string;
  icon: React.ReactNode;
};

type Step = {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
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
    description: "Dignified and timely transport to the cremation destination.",
    icon: <Ambulance />,
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
    icon: <Flame />,
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
    icon: <UserRound />,
  },
  {
    title: (
      <>
        Essential
        <br />
        Materials
      </>
    ),
    description: "Providing all essential items required for the final rites.",
    icon: <Package />,
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
    icon: <HeartHandshake />,
  },
];

const steps: Step[] = [
  {
    number: "01",
    title: "Understand",
    description: "We listen to the circumstances.",
    icon: <MessageCircle />,
  },
  {
    number: "02",
    title: "Verify",
    description: "Eligibility and required formalities are reviewed.",
    icon: <ClipboardCheck />,
  },
  {
    number: "03",
    title: "Coordinate",
    description: "Essential support is arranged as applicable.",
    icon: <Handshake />,
  },
  {
    number: "04",
    title: "Stand Beside",
    description:
      "Compassionate on-ground guidance continues through the process.",
    icon: <Umbrella />,
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

const ServiceIcon = ({ children }: { children: React.ReactNode }) => (
  <div
    className="
      absolute -top-[42px] left-1/2 z-20
      flex h-[78px] w-[78px] -translate-x-1/2
      items-center justify-center
      rounded-full
      border border-[#c9974a]/35
      bg-[#faf7ee]/95
      text-[#0d403c]
      shadow-[0_2px_10px_rgba(120,85,35,0.10)]
      sm:h-[82px] sm:w-[82px]
    "
  >
    <div className="absolute inset-[5px] rounded-full border border-[#c9974a]/15" />

    <div className="relative h-10 w-10 [&>svg]:h-full [&>svg]:w-full [&>svg]:stroke-[1.55]">
      {children}
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
                text-[11px] font-semibold
                tracking-[0.20em]
                text-[#103e39]
                sm:text-[13px]
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
              font-serif
              text-[31px]
              font-semibold
              leading-[0.98]
              tracking-[-0.025em]
              text-[#083e3a]
              sm:text-[42px]
              md:text-[48px]
              lg:text-[50px]
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
              text-[12px] leading-[1.45]
              text-[#303635]
              sm:text-[14px]
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
            mt-[68px]
            grid grid-cols-1
            gap-y-[60px]
            rounded-[20px]
            bg-[#fffdf8]/90
            px-5 pb-6 pt-[52px]
            shadow-[0_4px_20px_rgba(89,64,30,0.05)]
            sm:grid-cols-2
            sm:gap-y-[65px]
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
              <ServiceIcon>{service.icon}</ServiceIcon>

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
                  mx-auto max-w-[180px]
                  text-[11px]
                  leading-[1.42]
                  text-[#343838]
                  sm:text-[12px]
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
                  {/* circle */}
                  <div
                    className="
                      relative mx-auto
                      flex h-[120px] w-[120px]
                      items-center justify-center
                      rounded-full
                      border border-[#c89543]
                      bg-[#faf5e9]/90
                    "
                  >
                    <div className="flex h-[62px] w-[62px] items-center justify-center text-[#123f3a] [&>svg]:h-full [&>svg]:w-full [&>svg]:stroke-[1.35]">
                      {step.icon}
                    </div>

                    {/* number */}
                    <div
                      className="
                        absolute -top-[12px]
                        left-1/2
                        flex h-[30px] w-[30px]
                        -translate-x-1/2
                        items-center justify-center
                        rounded-full
                        bg-[#0c403b]
                        font-serif
                        text-[14px]
                        font-bold
                        text-white
                      "
                    >
                      {step.number}
                    </div>
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
                      max-w-[145px]
                      text-[10px]
                      leading-[1.4]
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
          <div className="mt-5 grid grid-cols-2 gap-8 lg:hidden">
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
                <div
                  className="
                    relative flex h-[105px] w-[105px]
                    items-center justify-center
                    rounded-full
                    border border-[#c89543]
                    bg-[#faf5e9]/90
                  "
                >
                  <div className="h-14 w-14 text-[#123f3a] [&>svg]:h-full [&>svg]:w-full">
                    {step.icon}
                  </div>

                  <span
                    className="
                      absolute -top-3
                      flex h-7 w-7
                      items-center justify-center
                      rounded-full
                      bg-[#0c403b]
                      text-[12px]
                      font-bold text-white
                    "
                  >
                    {step.number}
                  </span>
                </div>

                <h4 className="mt-2 font-serif text-[16px] font-bold">
                  {step.title}
                </h4>

                <p className="mt-1 max-w-[180px] text-[11px] leading-[1.4]">
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
            <span className="hidden h-px flex-1 bg-[#b77b22]/60 sm:block" />

            <a
              href="/sevas"
              aria-label="Explore Our Sewa"
              className="group relative block transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Image
                src="/assets/about-optimized/moksha_services_button.png"
                alt="Explore Our Sewa"
                width={280}
                height={64}
                className="h-auto w-full max-w-[280px] object-contain"
              />
            </a>

            <span className="hidden h-px flex-1 bg-[#b77b22]/60 sm:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MokshaServices;