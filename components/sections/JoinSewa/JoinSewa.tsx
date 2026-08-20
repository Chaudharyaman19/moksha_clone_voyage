import React from "react";
import Image from "next/image";
import Link from "next/link";
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
  href: string;
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
        Be the reason someone is not alone.
      </>
    ),
    button: "JOIN AS VOLUNTEER",
    href: "/volunteer/register",
    icon: <HeartHandshake />,
    image: "/assets/about-optimized/volunteer.png",
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
    href: "/partnership",
    icon: <Handshake />,
    image: "/assets/about-optimized/partner.png",
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
        Your support helps ensure
        <br />
        dignity, care and respect
        <br />
        in every final journey.
      </>
    ),
    button: "SUPPORT THE MISSION",
    href: "/donation",
    icon: <Leaf />,
    image: "/assets/about-optimized/support.png",
    variant: "green",
  },
];

const CardIcon = ({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: "green" | "gold";
}) => (
  <div
    className={`
      flex
      h-[66px]
      w-[66px]
      shrink-0
      items-center
      justify-center
      rounded-full

      ${variant === "gold"
        ? "bg-[#f6ead8] text-[#bd7c1e]"
        : "bg-[#e7eee5] text-[#0b403b]"
      }
    `}
  >
    <div
      className="
        h-[37px]
        w-[37px]
        [&>svg]:h-full
        [&>svg]:w-full
        [&>svg]:stroke-[1.35]
      "
    >
      {children}
    </div>
  </div>
);

const JoinCard = ({ card }: { card: JoinCard }) => {
  return (
    <article
      className="
        group
        relative
        min-h-[190px]
        overflow-hidden
        rounded-[9px]
        border
        border-[#ded8ca]
        bg-[#faf8f2]
        shadow-[0_4px_16px_rgba(53,48,35,0.08)]
        transition
        duration-300

        hover:-translate-y-1
        hover:shadow-[0_10px_28px_rgba(53,48,35,0.14)]
      "
    >
      {/* CARD IMAGE */}

      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          transition-transform
          duration-500

          group-hover:scale-[1.03]
        "
        style={{
          backgroundImage: `url("${card.image}")`,
        }}
      />

      {/* CARD CONTENT */}

      <div
        className="
          relative
          z-10
          flex
          h-full
          min-h-[260px]
          w-full
          flex-col
          p-4

          sm:p-5

          lg:min-h-[190px]
          lg:w-[70%]
        "
      >
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
            my-3
            text-base
            leading-[1.5]
            text-[#343735]
          "
        >
          {card.description}
        </p>

        <Link
          href={card.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            group/button
            mt-auto

            flex
            w-full
            items-center
            justify-center
            gap-3

            rounded-[7px]

            px-6
            py-3

            text-[14px]
            font-bold
            tracking-[0.04em]

            text-white

            transition

            sm:w-auto
            sm:min-w-[230px]

            ${card.variant === "gold"
              ? "bg-[#bf7c1e] hover:bg-[#a96816]"
              : "bg-[#06443d] hover:bg-[#07554d]"
            }
          `}
        >
          {card.button}

          <ArrowRight
            size={16}
            className="
              transition-transform
              group-hover/button:translate-x-1
            "
          />
        </Link>
      </div>
    </article>
  );
};

const JoinSewa: React.FC = () => {
  return (
    <section
      className="
        relative
        isolate
        w-full
        overflow-hidden
        bg-[#f7f1e6]
        text-[#103f3a]
      "
    >
      {/* =====================================================
          HERO
      ====================================================== */}

      <div
        className="
          relative
          mx-auto
          w-full
          aspect-[1728/623]
          min-h-[320px]
        "
      >
        {/* HERO BACKGROUND — kept at the image's native aspect
            ratio so the artwork's curve/icon detailing near the
            bottom edge is never cropped off by object-cover. */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/assets/about-optimized/be_part.png"
            alt=""
            fill
            sizes="100vw"
            className="
              h-full
              w-full
              object-cover
              object-center
            "
          />
        </div>

        <div
          className="
            relative
            mx-auto
            flex
            h-full
            w-full
            max-w-7xl
            flex-col
            justify-center

            px-6
            py-6

            sm:px-8
            sm:py-7
            lg:px-8
            lg:py-8
            2xl:px-0
          "
        >
          <div
            className="
              max-w-[640px]
            "
          >
            {/* JOIN */}

            <div className="flex items-center gap-3">


              <span className="h-px w-12 bg-[#bd7b20]" />

              <span
                className="
                  ml-1
                  text-base
                  font-semibold
                  tracking-[0.20em]
                  text-[#0b403b]
                "
              >
                JOIN
              </span>

              <span className="h-px w-12 bg-[#bd7b20]" />
            </div>

            {/* EYEBROW */}

            <div
              className="
                mt-3
                text-base
                font-semibold
                tracking-[0.19em]
                text-[#b66f16]
              "
            >
              BE PART OF THE SEWA
            </div>

            {/* MAIN HEADING */}

            <h2
              className="
                mt-2

                font-serif

                text-[32px]
                font-semibold
                leading-[0.98]
                tracking-[-0.025em]

                text-[#0b403b]

                sm:text-[38px]
                md:text-[42px]
                lg:text-[40px]
              "
            >
              You Don’t Have to
              <br />

              <span className="text-[#b56e17]">
                Do Everything.
              </span>
            </h2>

            {/* SECOND HEADING */}

            <h2
              className="
                mt-2

                font-sans

                text-[20px]
                font-semibold
                leading-[1.05]

                text-[#17443e]

                sm:text-[24px]
              "
            >
              You Can Simply Do Something.
            </h2>

            {/* =================================================
                UPDATED LONG DESCRIPTION
            ================================================= */}

            <p
              className="
                mt-2
                max-w-[620px]

                text-[16px]
                font-medium
                leading-[1.5]

                text-[#333735]

                sm:text-[17px]
              "
            >
              Every act of kindness creates a ripple of dignity,
              compassion and respect. Even a small contribution of
              time, care or support can bring comfort to someone
              during their most difficult moments and help ensure
              that no one has to face their final journey alone.
            </p>

            <p
              className="
                mt-3
                max-w-[620px]

                text-[16px]
                font-medium
                leading-[1.5]

                text-[#333735]

                sm:text-[17px]
              "
            >
              Whether you give your time as a volunteer, partner with
              us as an organisation, or support a family directly,
              every contribution helps us stand beside those who
              need it most — with dignity, care and respect.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          CARDS
      ====================================================== */}

      <div
        className="
          relative
          z-20

          mx-auto
          max-w-7xl

          px-6
          pt-1
          pb-2

          sm:px-8
          sm:pt-2
          lg:px-8
          2xl:px-0
        "
      >
        <div
          className="
            grid
            grid-cols-1
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
          relative
          z-20

          mx-auto
          mt-2
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
            flex
            min-h-[58px]
            items-center
            justify-between
            gap-5

            rounded-[8px]

            border
            border-[#e5dfd2]

            bg-[#f4f1ea]/95

            px-5
            py-3

            shadow-[0_2px_8px_rgba(60,50,35,.04)]

            sm:px-7
          "
        >
          {/* LEFT */}

          <div className="flex items-center gap-4">
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#06443d]
                text-white
              "
            >
              <ShieldCheck
                size={23}
                strokeWidth={1.4}
              />
            </div>

            <div
              className="
                hidden
                h-8
                w-px
                bg-[#cfc7b7]

                sm:block
              "
            />

            <p
              className="
                text-base
                leading-[1.4]
                text-[#173f3a]
              "
            >
              Together, we can make sure that{" "}
              <span className="font-semibold text-[#b87920]">
                no one
              </span>{" "}
              has to face their final journey alone.
            </p>
          </div>

          {/* RIGHT */}

          <div
            className="
              hidden
              items-center
              gap-3

              md:flex
            "
          >
            <div className="text-[#b87920]">
              <Users
                size={32}
                strokeWidth={1.3}
              />
            </div>

            <div className="h-8 w-px bg-[#cfc7b7]" />

            <div className="text-base leading-[1.35]">
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