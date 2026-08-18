import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  HeartHandshake,
  Handshake,
  Leaf,
  ShieldCheck,
  Users,
} from "lucide-react";

type JoinCard = {
  title: React.ReactNode;
  description: React.ReactNode;
  button: string;
  icon: React.ReactNode;
  image: string;
  variant: "green" | "gold";
};

const cards: JoinCard[] = [
  {
    title: (
      <>
        Become a
        <br />
        Volunteer
      </>
    ),
    description: (
      <>
        Give your time.
        <br />
        Bring compassion.
        <br />
        Be the reason
        <br />
        someone is not alone.
      </>
    ),
    button: "JOIN AS VOLUNTEER",
    icon: <HeartHandshake />,
    image: "/hero-images/volunteer-team-shirts.png",
    variant: "green",
  },
  {
    title: (
      <>
        Partner
        <br />
        With Us
      </>
    ),
    description: (
      <>
        Join hands to create
        <br />
        a greater and
        <br />
        lasting impact.
      </>
    ),
    button: "EXPLORE PARTNERSHIP",
    icon: <Handshake />,
    image: "/hero-images/volunteer-impact-v2.png",
    variant: "gold",
  },
  {
    title: (
      <>
        Support
        <br />
        the Mission
      </>
    ),
    description: (
      <>
        Your support helps
        <br />
        ensure dignity, care
        <br />
        and respect in every
        <br />
        final journey.
      </>
    ),
    button: "SUPPORT THE MISSION",
    icon: <Leaf />,
    image: "/hero-images/support-mission-ghat.png",
    variant: "green",
  },
];

const Lotus = () => (
  <svg
    viewBox="0 0 50 50"
    className="h-10 w-10"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M25 39C18.5 33.5 17.5 25.5 21 18"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
    <path
      d="M25 39C31.5 33.5 32.5 25.5 29 18"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
    <path
      d="M25 39C19 35 12 31 7 31C11 37 17 40 25 40"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
    <path
      d="M25 39C31 35 38 31 43 31C39 37 33 40 25 40"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
    <path
      d="M25 38C22 31 22 24 25 18C28 24 28 31 25 38Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
  </svg>
);

const CardIcon = ({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: "green" | "gold";
}) => (
  <div
    className={`
      flex h-[66px] w-[66px] shrink-0 items-center justify-center
      rounded-full
      ${
        variant === "gold"
          ? "bg-[#f6ead8] text-[#bd7c1e]"
          : "bg-[#e7eee5] text-[#0b403b]"
      }
    `}
  >
    <div className="h-[37px] w-[37px] [&>svg]:h-full [&>svg]:w-full [&>svg]:stroke-[1.35]">
      {children}
    </div>
  </div>
);

const JoinCard = ({ card }: { card: JoinCard }) => {
  return (
    <article
      className="
        group relative min-h-[220px]
        overflow-hidden rounded-[9px]
        border border-[#ded8ca]
        bg-[#faf8f2]
        shadow-[0_4px_16px_rgba(53,48,35,0.08)]
        transition duration-300
        hover:-translate-y-1
        hover:shadow-[0_10px_28px_rgba(53,48,35,0.14)]
      "
    >
      {/* Card image */}
      <div
        className="
          absolute inset-y-0 right-0
          w-[48%]
          bg-cover bg-center
          transition-transform duration-500
          group-hover:scale-[1.03]
        "
        style={{
          backgroundImage: `url("${card.image}")`,
        }}
      />

      {/* Image fade */}
      <div
        className="
          absolute inset-y-0 right-[35%] w-[22%]
          bg-gradient-to-r
          from-[#faf8f2]
          to-transparent
        "
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-[220px] w-[63%] flex-col p-4 sm:p-5">
        <div className="flex items-start gap-4">
          <CardIcon variant={card.variant}>
            {card.icon}
          </CardIcon>

          <div className="pt-1">
            <h3
              className="
                font-serif
                text-[20px]
                font-bold
                leading-[1.03]
                text-[#10423c]
                sm:text-[21px]
              "
            >
              {card.title}
            </h3>

            <div className="mt-2 h-px w-16 bg-[#c88829]" />
          </div>
        </div>

        <p
          className="
            mt-3
            text-[12px]
            leading-[1.48]
            text-[#343735]
            sm:text-[13px]
          "
        >
          {card.description}
        </p>

        <button
          type="button"
          className={`
            group/button mt-auto
            flex w-fit items-center gap-3
            rounded-[7px]
            px-4 py-2.5
            text-[10px]
            font-bold
            tracking-[0.04em]
            text-white
            transition
            sm:text-[11px]
            ${
              card.variant === "gold"
                ? "bg-[#bf7c1e] hover:bg-[#a96816]"
                : "bg-[#06443d] hover:bg-[#07554d]"
            }
          `}
        >
          {card.button}

          <ArrowRight
            size={16}
            className="transition-transform group-hover/button:translate-x-1"
          />
        </button>
      </div>
    </article>
  );
};

const JoinSewa: React.FC = () => {
  return (
    <section
      className="
        relative isolate
        w-full overflow-hidden
        bg-[#f7f1e6]
        text-[#103f3a]
      "
    >
      {/* =====================================================
          HERO BACKGROUND — only behind the hero text
      ====================================================== */}
      <div className="absolute inset-x-0 top-0 -z-20 min-h-[365px] sm:min-h-[380px] lg:min-h-[390px]">
        <Image
          src="/hero-images/volunteer-hero-second.png"
          alt=""
          fill
          sizes="100vw"
          className="h-full w-full object-cover object-center"
        />

        {/* Makes left typography readable */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-r
            from-[#faf5eb]/95
            via-[#faf5eb]/80
            via-[48%]
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          HERO
      ====================================================== */}
      <div
        className="
          relative mx-auto
          min-h-[365px]
          max-w-7xl
          px-6
          sm:min-h-[380px]
          sm:px-8
          lg:min-h-[390px]
          lg:px-8
          2xl:px-0
        "
      >
        <div
          className="
            flex w-full
            max-w-[570px]
            flex-col
            justify-center
            pt-9
            sm:pt-10
            lg:min-h-[390px]
            lg:pt-0
          "
        >
          {/* JOIN */}
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-[#bd7b20]" />

            <div className="text-[#bd7b20]">
              <Lotus />
            </div>

            <span className="h-px w-12 bg-[#bd7b20]" />

            <span
              className="
                ml-1
                text-[15px]
                font-semibold
                tracking-[0.20em]
                text-[#0b403b]
              "
            >
              JOIN
            </span>

            <span className="h-px w-12 bg-[#bd7b20]" />
          </div>

          {/* eyebrow */}
          <div
            className="
              mt-3
              text-[15px]
              font-semibold
              tracking-[0.19em]
              text-[#b66f16]
              sm:text-[16px]
            "
          >
            BE PART OF THE SEWA
          </div>

          {/* heading */}
          <h1
            className="
              mt-3
              font-serif
              text-[42px]
              font-semibold
              leading-[0.98]
              tracking-[-0.025em]
              text-[#0b403b]
              sm:text-[48px]
              md:text-[54px]
              lg:text-[52px]
            "
          >
            You Don’t Have to
            <br />
            <span className="text-[#b56e17]">
              Do Everything.
            </span>
          </h1>

          <h2
            className="
              mt-3
              font-serif
              text-[23px]
              font-semibold
              leading-tight
              text-[#17443e]
              sm:text-[25px]
            "
          >
            You Can Simply Do Something.
          </h2>

          <p
            className="
              mt-4
              max-w-[400px]
              text-[13px]
              leading-[1.5]
              text-[#333735]
              sm:text-[14px]
            "
          >
            Every act of kindness creates a ripple of dignity,
            <br className="hidden sm:block" />
            compassion and respect.
          </p>
        </div>
      </div>

      {/* =====================================================
          CURVED DIVIDER
      ====================================================== */}
      <div className="relative z-10 -mt-[15px]">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="block h-[62px] w-full"
        >
          <path
            d="
              M0 32
              C180 48 300 42 460 35
              C640 27 790 25 960 35
              C1130 45 1260 44 1440 29
              L1440 80
              L0 80 Z
            "
            fill="#faf8f2"
          />

          <path
            d="
              M0 32
              C180 48 300 42 460 35
              C640 27 790 25 960 35
              C1130 45 1260 44 1440 29
            "
            fill="none"
            stroke="#d3a054"
            strokeOpacity=".35"
            strokeWidth="1"
          />
        </svg>

        {/* Center lotus */}
        <div
          className="
            absolute left-1/2 top-[13px]
            flex h-[44px] w-[44px]
            -translate-x-1/2
            items-center justify-center
            rounded-full
            border border-[#c98a2b]
            bg-[#06443d]
            text-[#d49a35]
            shadow-[0_2px_8px_rgba(0,0,0,.12)]
          "
        >
          <Lotus />
        </div>
      </div>

      {/* =====================================================
          CARDS
      ====================================================== */}
      <div
        className="
          relative z-20
          mx-auto
          max-w-7xl
          px-6
          pb-3
          sm:px-8
          lg:px-8
          2xl:px-0
        "
      >
        <div
          className="
            grid grid-cols-1
            gap-3
            md:grid-cols-3
            md:gap-4
          "
        >
          {cards.map((card) => (
            <JoinCard
              key={card.button}
              card={card}
            />
          ))}
        </div>
      </div>

      {/* =====================================================
          BOTTOM MESSAGE BAR
      ====================================================== */}
      <div
        className="
          relative z-20
          mx-auto
          mt-2
          max-w-7xl
          px-6
          pb-4
          sm:px-8
          lg:px-8
          2xl:px-0
        "
      >
        <div
          className="
            flex
            min-h-[58px]
            items-center
            justify-between
            gap-5
            rounded-[8px]
            border border-[#e5dfd2]
            bg-[#f4f1ea]/95
            px-5 py-3
            shadow-[0_2px_8px_rgba(60,50,35,.04)]
            sm:px-7
          "
        >
          {/* Left */}
          <div className="flex items-center gap-4">
            <div
              className="
                flex h-10 w-10 shrink-0
                items-center justify-center
                rounded-full
                bg-[#06443d]
                text-white
              "
            >
              <ShieldCheck size={23} strokeWidth={1.4} />
            </div>

            <div className="hidden h-8 w-px bg-[#cfc7b7] sm:block" />

            <p
              className="
                text-[12px]
                leading-[1.4]
                text-[#173f3a]
                sm:text-[14px]
              "
            >
              Together, we can make sure that{" "}
              <span className="font-semibold text-[#b87920]">
                no one
              </span>{" "}
              has to face their final journey alone.
            </p>
          </div>

          {/* Right */}
          <div className="hidden items-center gap-3 md:flex">
            <div className="text-[#b87920]">
              <Users size={32} strokeWidth={1.3} />
            </div>

            <div className="h-8 w-px bg-[#cfc7b7]" />

            <div className="text-[13px] leading-[1.35]">
              <div className="text-[#17443e]">
                Be Part of the Sewa.
              </div>
              <div className="font-medium text-[#b87920]">
                Be the change.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSewa;