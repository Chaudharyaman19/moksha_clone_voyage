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

/* =========================================================
   CONNECTOR

   Circle = 170px
   Connector = 170px height

   Isliye arrow aur line icon circle ke
   EXACT CENTER par rahenge.
========================================================= */

function ProcessConnector() {
  return (
    <div
      className="
        hidden
        h-[170px]
        min-w-0
        items-center
        justify-center
        xl:flex
      "
    >
      {/* LEFT LINE */}
      <span
        className="
          h-px
          flex-1
          bg-[#C99635]
        "
      />

      {/* ARROW CIRCLE */}
      <span
        className="
          mx-[7px]
          grid
          h-[36px]
          w-[36px]
          shrink-0
          place-items-center
          rounded-full
          bg-[#C48616]
          text-white
          shadow-[0_3px_8px_rgba(176,112,12,0.18)]
        "
      >
        <PartnershipIcon
          name="ArrowRight"
          className="
            h-[20px]
            w-[20px]
          "
        />
      </span>

      {/* RIGHT LINE */}
      <span
        className="
          h-px
          flex-1
          bg-[#C99635]
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
              h-[9px]
              w-[9px]
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
              h-[36px]
              w-[36px]
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
              h-[9px]
              w-[9px]
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
            mt-[17px]
            text-center
          "
        >
          {/* LABEL */}

          <div
            className="
              flex
              items-center
              justify-center
              gap-[15px]
            "
          >
            <span
              className="
                h-px
                w-[36px]
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
                w-[36px]
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
              leading-[1.03]
              tracking-[-0.025em]
              text-[#064335]
              sm:text-[44px]
              lg:text-[52px]
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
              mt-[12px]
              flex
              items-center
              justify-center
              gap-[12px]
              text-[#C98A20]
            "
          >
            <span
              className="
                h-px
                w-[90px]
                bg-[#D0A45C]
              "
            />

            <PartnershipIcon
              name="Lotus"
              className="
                h-[29px]
                w-[29px]
              "
            />

            <span
              className="
                h-px
                w-[90px]
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
            mt-[28px]
            grid
            grid-cols-1
            items-start
            gap-y-[28px]

            md:grid-cols-2
            md:gap-x-[40px]

            xl:grid-cols-[1fr_105px_1fr_105px_1fr_105px_1fr]
            xl:gap-x-0
          "
        >
          {steps.map((step, index) => (
            <div key={step.no} className="contents">
              {/* ===============================================
                  STEP
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
                    OUTER CIRCLE
                ================================================= */}

                <div
                  className="
                    relative
                    grid
                    h-[170px]
                    w-[170px]
                    shrink-0
                    place-items-center
                    rounded-full
                    border-[2px]
                    border-[#D3A044]
                    bg-[#FFFDF8]
                    shadow-[0_4px_13px_rgba(104,73,23,0.045)]
                  "
                >
                  {/* INNER GREEN CIRCLE */}

                  <div
                    className="
                      grid
                      h-[145px]
                      w-[145px]
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
                        h-[68px]
                        w-[68px]
                      "
                    />
                  </div>

                  {/* =============================================
                      NUMBER BADGE
                  ============================================= */}

                  <span
                    className="
                      absolute
                      -left-[9px]
                      top-[2px]
                      z-20
                      grid
                      h-[50px]
                      w-[50px]
                      place-items-center
                      rounded-full
                      bg-[#C6810B]
                      text-[18px]
                      font-bold
                      text-white
                      shadow-[0_3px_9px_rgba(170,103,0,0.2)]
                    "
                  >
                    {step.no}
                  </span>

                  {/* =============================================
                      LEFT CENTER DOT
                  ============================================= */}

                  <span
                    className="
                      absolute
                      left-[-6px]
                      top-1/2
                      h-[11px]
                      w-[11px]
                      -translate-y-1/2
                      rounded-full
                      bg-[#D3A03C]
                      shadow-[0_0_10px_rgba(211,160,60,0.85)]
                    "
                  />

                  {/* =============================================
                      RIGHT CENTER DOT
                  ============================================= */}

                  <span
                    className="
                      absolute
                      right-[-6px]
                      top-1/2
                      h-[11px]
                      w-[11px]
                      -translate-y-1/2
                      rounded-full
                      bg-[#D3A03C]
                      shadow-[0_0_10px_rgba(211,160,60,0.85)]
                    "
                  />

                  {/* =============================================
                      BOTTOM DOT
                  ============================================= */}

                  <span
                    className="
                      absolute
                      bottom-[-6px]
                      left-1/2
                      h-[11px]
                      w-[11px]
                      -translate-x-1/2
                      rounded-full
                      bg-[#D8A33D]
                      shadow-[0_0_10px_rgba(211,156,50,0.85)]
                    "
                  />
                </div>

                {/* =================================================
                    TITLE
                ================================================= */}

                <h3
                  className="
                    mt-[13px]
                    text-[28px]
                    font-medium
                    leading-[1.04]
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
                    mt-[8px]
                    h-[2px]
                    w-[43px]
                    bg-[#D3A34F]
                  "
                />

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-[10px]
                    min-h-[48px]
                    whitespace-pre-line
                    text-[16px]
                    font-medium
                    leading-[1.48]
                    text-[#464C4D]
                  "
                >
                  {step.text}
                </p>
              </div>

              {/* ===============================================
                  CONNECTOR

                  Connector ki height bhi 170px hai.
                  Isliye gold line + arrow bilkul
                  icon circles ke center se jaate hain.
              =============================================== */}

              {index < steps.length - 1 && <ProcessConnector />}
            </div>
          ))}
        </div>

        {/* =====================================================
            GREEN PROCESS FLOW BAR
        ====================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-[27px]
            w-full
            max-w-[1130px]
            overflow-hidden
            border-y-[3px]
            border-[#C68F2C]
            bg-[#004A39]
            shadow-[0_4px_11px_rgba(0,65,46,0.11)]
          "
          style={{
            clipPath:
              "polygon(20px 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 20px 100%, 0 50%)",
          }}
        >
          <div
            className="
              grid
              min-h-[64px]
              grid-cols-2
              items-center
              px-[35px]

              md:grid-cols-[60px_1fr_42px_1fr_42px_1fr_42px_1.25fr_60px]
            "
          >
            {/* LEFT LOTUS */}

            <PartnershipIcon
              name="Lotus"
              className="
                mx-auto
                hidden
                h-[35px]
                w-[35px]
                text-[#D19A31]
                md:block
              "
            />

            <span
              className="
                text-center
                text-[18px]
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
                h-[26px]
                w-[26px]
                text-[#E2B65F]
                md:block
              "
            />

            <span
              className="
                text-center
                text-[18px]
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
                h-[26px]
                w-[26px]
                text-[#E2B65F]
                md:block
              "
            />

            <span
              className="
                text-center
                text-[18px]
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
                h-[26px]
                w-[26px]
                text-[#E2B65F]
                md:block
              "
            />

            <span
              className="
                text-center
                text-[18px]
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
                h-[35px]
                w-[35px]
                text-[#D19A31]
                md:block
              "
            />
          </div>
        </div>

        {/* =====================================================
            BOTTOM NOTE
        ====================================================== */}

        <div
          className="
            mx-auto
            mt-[25px]
            flex
            max-w-[900px]
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
              h-[58px]
              w-[58px]
              shrink-0
              place-items-center
              text-[#0A4B3B]
            "
          >
            <PartnershipIcon
              name="ShieldCheck"
              className="
                h-[48px]
                w-[48px]
              "
            />
          </span>

          <span
            className="
              mx-[20px]
              h-[50px]
              w-px
              bg-[#CDBA91]
            "
          />

          <p
            className="
              text-[17px]
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
            mt-[26px]
            flex
            items-center
            gap-[14px]
          "
        >
          <span
            className="
              h-[9px]
              w-[9px]
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
              h-[36px]
              w-[36px]
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
              h-[9px]
              w-[9px]
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
