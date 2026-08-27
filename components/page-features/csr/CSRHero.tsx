"use client";

import { CSRIcon } from "./CSRIcons";

import { imageOrFallback, itemOrFallback, textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";

const defaultHighlights = [
  { icon: "Target", label: "Defined Scope" },
  { icon: "ShieldCheck", label: "Due Diligence" },
  { icon: "ClipboardCheck", label: "Documentation" },
  { icon: "Report", label: "Impact Reporting" },
] as const;

const defaultBenefits = [
  { icon: "HeartHands", title: "Strengthen essential", description: "final-journey assistance" },
  { icon: "People", title: "Stand beside eligible", description: "& verified families" },
  { icon: "Handshake", title: "Build long-term,", description: "responsible partnerships" },
  { icon: "ClipboardCheck", title: "Create measurable", description: "human impact" },
] as const;

export default function CSRHero() {
  const section = useWebsiteSection("csr-hero");
  const eyebrow = textOrFallback(section?.eyebrow, "Corporate Social Responsibility", 60);
  const title = textOrFallback(section?.title, "CSR Partnership for\nDignified Humanitarian Support", 150);
  const subtitle = textOrFallback(section?.subtitle, "Partner for Dignity. Create Human Impact.", 100);
  const description = textOrFallback(section?.description, "Partner with Moksha Sewa, an initiative of\nNamo Gange Trust,\nto explore responsible humanitarian\ncollaborations designed\naround dignity, accountability and verified need.", 500);
  const heroImage = imageOrFallback(section?.image, "/assets/csr/csr-hero-photo.jpg");
  const buttonLabel = textOrFallback(section?.buttonLabel, "Discuss a CSR Partnership", 50);
  const buttonHref = section?.buttonHref || "#csr-enquiry";
  const secondaryButtonLabel = textOrFallback(section?.secondaryButtonLabel, "Request Organisation Profile", 50);
  const secondaryButtonHref = section?.secondaryButtonHref || "#organisation";

  const titleLines = title.split("\n");
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#FBF7EF]
      "
    >
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1660px]
          overflow-hidden

          lg:min-h-[660px]
        "
      >
        {/* =====================================================
            DESKTOP RIGHT IMAGE
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            right-0

            hidden
            w-[59%]

            bg-no-repeat

            lg:block
          "
          style={{
            backgroundImage:
              `url('${heroImage}')`,

            backgroundSize: "cover",

            /*
              Right side ke people cut na ho.
            */
            backgroundPosition: "60% center",
          }}
        />

        {/* =====================================================
            LEFT CREAM AREA + IMAGE BLEND
        ====================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-0
            z-[1]

            hidden
            w-[62%]

            lg:block
          "
          style={{
            background:
              "linear-gradient(90deg, #FBF7EF 0%, #FBF7EF 62%, rgba(251,247,239,0.97) 72%, rgba(251,247,239,0.77) 82%, rgba(251,247,239,0.30) 92%, rgba(251,247,239,0) 100%)",
          }}
        />

        {/* EXTRA SOFT CENTER BLEND */}

        <div
          className="
            pointer-events-none
            absolute
            inset-y-0
            left-[46%]
            z-[2]

            hidden
            w-[12%]

            bg-[#FBF7EF]/20
            blur-[18px]

            lg:block
          "
        />

        {/* =====================================================
            HERO CONTENT
        ====================================================== */}

        <div
          className="
            relative
            z-10

            px-5
            pb-[24px]
            pt-[30px]

            sm:px-8

            lg:w-[57%]
            lg:px-[74px]
            lg:pb-[100px]
            lg:pt-[72px]

            xl:px-[88px]
          "
        >
          {/* TOP LABEL */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-[8px]

              text-[14px]
              font-bold
              uppercase
              tracking-[0.08em]

              text-[#A86E20]

              sm:justify-start
              sm:gap-[12px]
              sm:text-[16px]
            "
          >
            <span
              className="
                h-px
                w-[28px]
                shrink-0
                bg-[#BF8B37]

                sm:w-[62px]
              "
            />

            <span className="text-center leading-[1.25] sm:whitespace-nowrap">
              {eyebrow}
            </span>

            <span
              className="
                h-px
                w-[28px]
                shrink-0
                bg-[#BF8B37]

                sm:w-[62px]
              "
            />
          </div>

          {/* =================================================
              MAIN HEADING
          ================================================= */}

          <h1
            className="
              mt-[14px]

              max-w-[850px]

              font-serif
              text-[34px]
              font-medium
              leading-[1.04]
              tracking-[-0.025em]

              text-[#063F32]

              sm:text-[42px]
              lg:text-[48px]
              xl:text-[52px]
            "
            style={{
              fontFamily:
                "Georgia, 'Times New Roman', serif",
            }}
          >
            <span className="block">
              {titleLines[0] || "CSR Partnership for"}
            </span>

            <span
              className="
                mt-[4px]
                block
                xl:whitespace-nowrap
              "
            >
              {titleLines.slice(1).join(" ") || "Dignified Humanitarian Support"}
            </span>
          </h1>

          {/* TAGLINE */}

          <p
            className="
              mt-[5px]
              text-[22px]
              font-medium
              leading-[1.2]
              text-[#AA701D]

              lg:text-[25px]
            "
          >
            {subtitle}
          </p>

          {/* =================================================
              LOTUS DIVIDER
          ================================================= */}

          <div
            className="
              mt-[10px]
              flex
              max-w-[610px]
              items-center
              gap-[11px]

              text-[#B88226]
            "
          >
            <span
              className="
                h-px
                flex-1
                bg-[#C59B56]
              "
            />

            <CSRIcon
              name="Lotus"
              className="
                h-[30px]
                w-[30px]
                shrink-0
              "
            />

            <span
              className="
                h-px
                flex-1
                bg-[#C59B56]
              "
            />
          </div>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <p
            className="
              mt-[6px]

              max-w-[620px]

              text-[18px]
              font-medium
              leading-[1.58]

              text-[#343A3D]
            "
          >
            {description.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br className="hidden xl:block" />
              </span>
            ))}
          </p>

          {/* =================================================
              BUTTONS
          ================================================= */}

          <div
            className="
              mt-[16px]
              flex
              flex-col
              gap-[10px]

              sm:flex-row
              sm:flex-wrap
            "
          >
            <a
              href={buttonHref}
              className="
                group

                inline-flex
                h-[52px]
                w-full

                items-center
                justify-between

                rounded-[7px]

                bg-[#004A39]

                px-[22px]

                text-[16px]
                font-bold
                uppercase

                text-white

                shadow-[0_5px_12px_rgba(0,65,46,0.12)]

                transition
                hover:bg-[#003D30]

                sm:w-auto
                sm:min-w-[300px]
              "
            >
              {buttonLabel}

              <CSRIcon
                name="ArrowRight"
                className="
                  h-[24px]
                  w-[24px]
                  text-[#D09A2C]

                  transition-transform
                  group-hover:translate-x-[3px]
                "
              />
            </a>

            <a
              href={secondaryButtonHref}
              className="
                group

                inline-flex
                h-[52px]
                w-full

                items-center
                justify-between

                rounded-[7px]

                border-[2px]
                border-[#C29145]

                bg-[#FFFAF2]/90

                px-[22px]

                text-[16px]
                font-bold
                uppercase

                text-[#A76D1F]

                sm:w-auto
                sm:min-w-[325px]
              "
            >
              {secondaryButtonLabel}

              <CSRIcon
                name="ArrowRight"
                className="
                  h-[24px]
                  w-[24px]

                  transition-transform
                  group-hover:translate-x-[3px]
                "
              />
            </a>
          </div>

          {/* =================================================
              4 SMALL HIGHLIGHTS
          ================================================= */}

          <div
            className="
              mt-[14px]

              grid
              w-full
              max-w-[920px]
              grid-cols-1

              px-[12px]

              sm:grid-cols-2

              lg:grid-cols-4
            "
          >
            {defaultHighlights.map((defaultItem, index) => {
              const item = itemOrFallback(section?.items, index, { label: defaultItem.label, value: defaultItem.icon });
              const label = item.label || defaultItem.label;
              const icon = (item.value || defaultItem.icon) as any;
              return (
                <div
                  key={index}
                  className="
                  flex
                  min-h-[54px]
                  items-center
                  justify-start

                  gap-[10px]

                  px-[18px]

                "
                >
                  <span
                    className="
                    grid
                    h-[42px]
                    w-[42px]
                    shrink-0

                    place-items-center

                    rounded-full

                    bg-[#EEF0E9]

                    text-[#0A4B3A]
                  "
                  >
                    <CSRIcon
                      name={icon}
                      className="
                      h-[27px]
                      w-[27px]
                    "
                    />
                  </span>

                  <span
                    className="
                    whitespace-nowrap
                    text-[16px]
                    font-semibold
                    text-[#35403E]
                  "
                  >
                    {label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* =====================================================
            MOBILE IMAGE
        ====================================================== */}

        <div
          className="
            relative
            h-[340px]
            w-full

            bg-cover
            bg-center
            bg-no-repeat

            lg:hidden
          "
          style={{
            backgroundImage:
              `url('${heroImage}')`,
          }}
        />

        {/* =====================================================
            BOTTOM BENEFITS STRIP
        ====================================================== */}

        <div
          className="
            relative
            z-30

            mx-5
            mb-[28px]
            mt-[24px]

            grid

            overflow-hidden

            rounded-[12px]

            border
            border-[#DFD5C5]

            bg-[#F7F4ED]/95

            sm:grid-cols-2

            lg:absolute
            lg:bottom-[0px]
            lg:left-[5.2%]
            lg:right-[5.2%]
            lg:mx-0
            lg:mb-0
            lg:mt-0

            xl:grid-cols-4
          "
        >
          {defaultBenefits.map(
            (defaultItem, index) => {
              const item = itemOrFallback(section?.items, index + 4, { title: defaultItem.title, description: defaultItem.description, value: defaultItem.icon });
              const title = item.title || defaultItem.title;
              const description = item.description || defaultItem.description;
              const icon = (item.value || defaultItem.icon) as any;
              return (
                <div
                  key={index}
                  className={`
                  flex
                  min-h-[96px]
                  items-center

                  gap-[18px]

                  px-[30px]
                  py-[15px]

                  ${index
                      ? "xl:border-l xl:border-[#DED3C4]"
                      : ""
                    }
                `}
                >
                  <CSRIcon
                    name={icon}
                    className="
                    h-[48px]
                    w-[48px]
                    shrink-0

                    text-[#155042]
                  "
                  />

                  <p
                    className="
                    text-[16px]
                    font-semibold
                    leading-[1.4]

                    text-[#34403F]
                  "
                  >
                    {title}
                    <br />
                    {description}
                  </p>
                </div>
              )
            }
          )}
        </div>
      </div>
    </section>
  );
}
