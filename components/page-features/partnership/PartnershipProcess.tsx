"use client";

import { PartnershipIcon } from "./PartnershipIcons";

const steps = [
  {
    no: "01",
    icon: "Chat" as const,
    title: "Connect",
    text: "Tell us about your organisation\nand interest.",
  },
  {
    no: "02",
    icon: "Search" as const,
    title: "Explore",
    text: "We assess mission and\ncollaboration alignment.",
  },
  {
    no: "03",
    icon: "Clipboard" as const,
    title: "Define",
    text: "Scope, responsibilities and\nprocesses are clarified.",
  },
  {
    no: "04",
    icon: "Handshake" as const,
    title: "Collaborate",
    text: "Approved activities proceed\nwithin the agreed framework.",
  },
];

function ProcessConnector() {
  return (
    <div
      className="
        hidden
        min-w-0
        items-center
        xl:flex
      "
    >
      <span
        className="
          h-px
          flex-1
          bg-[#C89A43]
        "
      />

      <span
        className="
          mx-[8px]

          grid
          h-[34px]
          w-[34px]
          shrink-0

          place-items-center

          rounded-full

          bg-[#C48718]

          text-white

          shadow-[0_3px_8px_rgba(176,112,12,0.15)]
        "
      >
        <PartnershipIcon
          name="ArrowRight"
          className="
            h-[19px]
            w-[19px]
          "
        />
      </span>

      <span
        className="
          h-px
          flex-1
          bg-[#C89A43]
        "
      />
    </div>
  );
}

export default function PartnershipProcess() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden

        bg-[#FBF8F2]

        px-4
        py-[14px]

        sm:px-5
        lg:px-6
      "
    >
      <div
        className="
          relative

          mx-auto
          w-full
          max-w-[1344px]

          overflow-hidden

          bg-[#FFFCF6]

          px-[24px]
          pb-[20px]
          pt-[12px]

          sm:px-[34px]
          lg:px-[38px]
        "
      >
        {/* =====================================================
            TOP DECORATIVE LINE
        ====================================================== */}

        <div
          className="
            flex
            items-center
            gap-[14px]
          "
        >
          <span
            className="
              h-[8px]
              w-[8px]
              shrink-0
              rotate-45
              bg-[#C88718]
            "
          />

          <span
            className="
              h-px
              flex-1
              bg-[#C99228]
            "
          />

          <PartnershipIcon
            name="Lotus"
            className="
              h-[34px]
              w-[34px]
              shrink-0

              text-[#C98B1E]
            "
          />

          <span
            className="
              h-px
              flex-1
              bg-[#C99228]
            "
          />

          <span
            className="
              h-[8px]
              w-[8px]
              shrink-0
              rotate-45
              bg-[#C88718]
            "
          />
        </div>

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="
            mt-[14px]
            text-center
          "
        >
          {/* LABEL */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-[14px]
            "
          >
            <span
              className="
                h-px
                w-[34px]
                bg-[#D0A45A]
              "
            />

            <p
              className="
                text-[16px]
                font-bold
                uppercase
                tracking-[0.07em]

                text-[#B77A18]
              "
            >
              A Responsible Process
            </p>

            <span
              className="
                h-px
                w-[34px]
                bg-[#D0A45A]
              "
            />
          </div>

          {/* HEADING */}

          <h2
            className="
              mt-[7px]

              text-[38px]
              font-medium
              leading-[1.04]
              tracking-[-0.025em]

              text-[#064335]

              sm:text-[44px]
              lg:text-[50px]
            "
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            From Conversation to Collaboration
            <span className="text-[#B87917]">.</span>
          </h2>

          {/* LOTUS DIVIDER */}

          <div
            className="
              mt-[8px]

              flex
              items-center
              justify-center
              gap-[11px]

              text-[#C98A20]
            "
          >
            <span
              className="
                h-px
                w-[82px]
                bg-[#D0A45C]
              "
            />

            <PartnershipIcon
              name="Lotus"
              className="
                h-[27px]
                w-[27px]
              "
            />

            <span
              className="
                h-px
                w-[82px]
                bg-[#D0A45C]
              "
            />
          </div>
        </div>

        {/* =====================================================
            4 STEP PROCESS
        ====================================================== */}

        <div
          className="
            mt-[22px]

            grid
            grid-cols-1

            items-start

            gap-y-[22px]

            md:grid-cols-2
            md:gap-x-[40px]

            xl:grid-cols-[1fr_100px_1fr_100px_1fr_100px_1fr]
            xl:gap-x-0
          "
        >
          {steps.map((step, index) => (
            <div key={step.no} className="contents">
              {/* ===============================================
                  STEP ITEM
              =============================================== */}

              <div
                className="
                  relative
                  flex
                  min-w-0
                  flex-col
                  items-center

                  text-center
                "
              >
                {/* =================================================
                    OUTER GOLD RING
                ================================================= */}

                <div
                  className="
                    relative

                    grid
                    h-[146px]
                    w-[146px]
                    shrink-0

                    place-items-center

                    rounded-full

                    border-[2px]
                    border-[#D5A64A]

                    bg-[#FFFDF8]

                    shadow-[0_4px_12px_rgba(104,73,23,0.04)]
                  "
                >
                  {/* INNER GREEN CIRCLE */}

                  <div
                    className="
                      grid
                      h-[122px]
                      w-[122px]

                      place-items-center

                      rounded-full

                      border-[2px]
                      border-[#07503E]

                      bg-[#FFFEFA]

                      text-[#07503E]
                    "
                  >
                    <PartnershipIcon
                      name={step.icon}
                      className="
                        h-[58px]
                        w-[58px]
                      "
                    />
                  </div>

                  {/* NUMBER BADGE */}

                  <span
                    className="
                      absolute
                      -left-[8px]
                      top-[0px]

                      grid
                      h-[48px]
                      w-[48px]

                      place-items-center

                      rounded-full

                      bg-[#C6800D]

                      text-[17px]
                      font-bold

                      text-white

                      shadow-[0_3px_9px_rgba(170,103,0,0.18)]
                    "
                  >
                    {step.no}
                  </span>

                  {/* LEFT GOLD DOT */}

                  <span
                    className="
                      absolute
                      left-[-5px]
                      top-1/2

                      h-[10px]
                      w-[10px]

                      -translate-y-1/2

                      rounded-full

                      bg-[#C78B24]

                      shadow-[0_0_7px_rgba(199,139,36,0.65)]
                    "
                  />

                  {/* RIGHT GOLD DOT */}

                  <span
                    className="
                      absolute
                      right-[-5px]
                      top-1/2

                      h-[10px]
                      w-[10px]

                      -translate-y-1/2

                      rounded-full

                      bg-[#C78B24]

                      shadow-[0_0_7px_rgba(199,139,36,0.65)]
                    "
                  />

                  {/* BOTTOM GOLD DOT */}

                  <span
                    className="
                      absolute
                      bottom-[-5px]
                      left-1/2

                      h-[10px]
                      w-[10px]

                      -translate-x-1/2

                      rounded-full

                      bg-[#D8A33D]

                      shadow-[0_0_9px_rgba(211,156,50,0.85)]
                    "
                  />
                </div>

                {/* =================================================
                    STEP TITLE
                ================================================= */}

                <h3
                  className="
                    mt-[10px]

                    text-[27px]
                    font-medium
                    leading-[1.05]

                    text-[#064335]
                  "
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                  }}
                >
                  {step.title}
                </h3>

                {/* UNDERLINE */}

                <span
                  className="
                    mt-[7px]

                    h-[2px]
                    w-[42px]

                    bg-[#D3A34F]
                  "
                />

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-[8px]

                    min-h-[42px]

                    whitespace-pre-line

                    text-[16px]
                    font-medium
                    leading-[1.45]

                    text-[#464C4D]
                  "
                >
                  {step.text}
                </p>
              </div>

              {/* ===============================================
                  CONNECTOR
              =============================================== */}

              {index < steps.length - 1 && <ProcessConnector />}
            </div>
          ))}
        </div>

        {/* =====================================================
            GREEN PROCESS BAR
        ====================================================== */}

        <div
          className="
            relative

            mx-auto
            mt-[22px]

            w-full
            max-w-[1100px]

            overflow-hidden

            border-y-[3px]
            border-[#C68F2C]

            bg-[#004A39]

            shadow-[0_4px_11px_rgba(0,65,46,0.11)]
          "
          style={{
            clipPath:
              "polygon(18px 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 18px 100%, 0 50%)",
          }}
        >
          <div
            className="
              grid
              min-h-[60px]
              grid-cols-2

              items-center

              px-[34px]

              md:grid-cols-[60px_1fr_40px_1fr_40px_1fr_40px_1.25fr_60px]
            "
          >
            {/* LEFT LOTUS */}

            <PartnershipIcon
              name="Lotus"
              className="
                mx-auto
                hidden
                h-[34px]
                w-[34px]

                text-[#D19A31]

                md:block
              "
            />

            <span
              className="
                text-center

                text-[17px]
                font-medium
                uppercase

                text-white
              "
            >
              Connect
            </span>

            <PartnershipIcon
              name="ArrowRight"
              className="
                mx-auto
                hidden
                h-[24px]
                w-[24px]

                text-[#E2B65F]

                md:block
              "
            />

            <span
              className="
                text-center

                text-[17px]
                font-medium
                uppercase

                text-white
              "
            >
              Explore
            </span>

            <PartnershipIcon
              name="ArrowRight"
              className="
                mx-auto
                hidden
                h-[24px]
                w-[24px]

                text-[#E2B65F]

                md:block
              "
            />

            <span
              className="
                text-center

                text-[17px]
                font-medium
                uppercase

                text-white
              "
            >
              Define
            </span>

            <PartnershipIcon
              name="ArrowRight"
              className="
                mx-auto
                hidden
                h-[24px]
                w-[24px]

                text-[#E2B65F]

                md:block
              "
            />

            <span
              className="
                text-center

                text-[17px]
                font-medium
                uppercase

                text-white
              "
            >
              Collaborate
            </span>

            {/* RIGHT LOTUS */}

            <PartnershipIcon
              name="Lotus"
              className="
                mx-auto
                hidden
                h-[34px]
                w-[34px]

                text-[#D19A31]

                md:block
              "
            />
          </div>
        </div>

        {/* =====================================================
            BOTTOM IMPORTANT NOTE
        ====================================================== */}

        <div
          className="
            mx-auto
            mt-[22px]

            flex
            max-w-[870px]

            items-center

            rounded-[8px]

            bg-[#F5F1E8]

            px-[24px]
            py-[14px]

            text-left
          "
        >
          <span
            className="
              grid
              h-[54px]
              w-[54px]
              shrink-0

              place-items-center

              text-[#0A4B3B]
            "
          >
            <PartnershipIcon
              name="ShieldCheck"
              className="
                h-[46px]
                w-[46px]
              "
            />
          </span>

          <span
            className="
              mx-[18px]

              h-[48px]
              w-px

              bg-[#CDBA91]
            "
          />

          <p
            className="
              text-[16px]
              font-medium
              leading-[1.45]

              text-[#414748]
            "
          >
            Submitting an enquiry does not itself create or imply a formal
            partnership.
          </p>
        </div>

        {/* =====================================================
            BOTTOM DECORATIVE LINE
        ====================================================== */}

        <div
          className="
            mt-[24px]

            flex
            items-center
            gap-[14px]
          "
        >
          <span
            className="
              h-[8px]
              w-[8px]
              shrink-0
              rotate-45

              bg-[#C88718]
            "
          />

          <span
            className="
              h-px
              flex-1

              bg-[#C99228]
            "
          />

          <PartnershipIcon
            name="Lotus"
            className="
              h-[34px]
              w-[34px]
              shrink-0

              text-[#C98B1E]
            "
          />

          <span
            className="
              h-px
              flex-1

              bg-[#C99228]
            "
          />

          <span
            className="
              h-[8px]
              w-[8px]
              shrink-0
              rotate-45

              bg-[#C88718]
            "
          />
        </div>
      </div>
    </section>
  );
}
