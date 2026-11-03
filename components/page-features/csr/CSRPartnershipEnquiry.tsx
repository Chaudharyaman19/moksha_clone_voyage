"use client";

import Image from "next/image";
import { isOptimizableSrc } from "@/lib/imageSrc";
import { FormEvent, useState } from "react";
import { websiteSubmissionsApi } from "@/lib/websiteSubmissionsApi";
import SuccessPopup from "@/components/common/SuccessPopup";
import { CSRIcon } from "./CSRIcons";
import { imageOrFallback, textOrFallback, useWebsiteSection } from "@/components/website/WebsiteContentContext";

const fields = [
  {
    name: "name",
    label: "Full Name",
    placeholder: "Enter your full name",
    required: true,
    type: "text",
  },
  {
    name: "organization",
    label: "Company / Organisation",
    placeholder: "Enter company / organisation name",
    required: true,
    type: "text",
  },
  {
    name: "email",
    label: "Official Email",
    placeholder: "Enter official email address",
    required: true,
    type: "email",
  },
  {
    name: "phone",
    label: "Phone Number",
    placeholder: "Enter 10-digit phone number",
    required: true,
    type: "tel",
    maxLength: 10,
    inputMode: "numeric" as const,
  },
  {
    name: "designation",
    label: "Designation",
    placeholder: "Enter your designation",
    required: false,
    type: "text",
  },
];

export default function CSRPartnershipEnquiry() {
  const section = useWebsiteSection("csr-enquiry");
  const title = textOrFallback(section?.title, "Connect With Our CSR Leadership Team", 100);
  const rawImage = section?.image?.trim();
  const bgImage = imageOrFallback(
    rawImage && rawImage !== "/assets/csr/enquiry-team-bg.jpg"
      ? rawImage
      : "/assets/csr/responsible-partnership-conversation.png",
    "/assets/csr/responsible-partnership-conversation.png"
  );
  const contactTitle = textOrFallback(section?.contactTitle, "CSR Partnership Enquiry", 80);
  const submitLabel = textOrFallback(section?.submitLabel, "Submit CSR Enquiry", 50);
  const submittedLabel = textOrFallback(section?.submittedLabel, "Inquiry Submitted", 50);
  const formNote = textOrFallback(section?.supportDescription, "For CSR, institutional and corporate partnership enquiries.", 150);
  const thankYouTitle = textOrFallback(section?.secondaryTitle, "Thank you!", 50);
  const thankYouDesc = textOrFallback(section?.secondaryDescription, "Your CSR partnership enquiry has been received. Our team will review the information and respond through the contact details provided.", 300);
  const consentText = textOrFallback(section?.legalNotice, "I consent to being contacted regarding this enquiry and acknowledge the Privacy Policy.", 200);

  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setSubmitState("loading");
    setSubmitMessage("");
    try {
      await websiteSubmissionsApi.csr({
        name: data.get("name"), organization: data.get("organization"), email: data.get("email"),
        phone: data.get("phone"), designation: data.get("designation"), interest: data.get("interest"),
        message: data.get("message"), consent: data.get("consent") === "on",
      });
      form.reset();
      setSubmitState("success");
      setSubmitMessage("Thank you. Your CSR partnership enquiry has been received.");
      setShowSuccessPopup(true);
    } catch (error) {
      setSubmitState("error");
      setSubmitMessage(error instanceof Error ? error.message : "Could not submit your enquiry.");
    }
  }
  return (
    <section
      id="csr-enquiry"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#FBF7F0]

        px-4
        py-[20px]

        sm:px-5
        lg:px-6
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
        "
      >
        {/* =====================================================
            MAIN 2 COLUMN GRID
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1

            gap-[22px]

            lg:grid-cols-[minmax(0,45fr)_minmax(0,55fr)]
            lg:gap-[26px]
          "
        >
          {/* =================================================
              LEFT SIDE - SINGLE GRAPHIC IMAGE
          ================================================= */}

          <div
            className="
              relative
              h-full
              min-h-[580px]
              sm:min-h-[650px]
              overflow-hidden
              rounded-[18px]
              bg-[#FBF7F0]
              shadow-[0_7px_26px_rgba(50,39,22,0.08)]
            "
          >
            {/* Full Graphic Image */}
            <Image
              src={bgImage}
              alt={title || "Corporate CSR Inquiry"}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              unoptimized={!isOptimizableSrc(bgImage)}
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>

          {/* =================================================
              RIGHT FORM CARD
          ================================================= */}

          <form
            onSubmit={handleSubmit}
            className="
              self-start

              rounded-[18px]

              bg-white

              px-[30px]
              pb-[22px]
              pt-[22px]

              shadow-[0_7px_26px_rgba(50,39,22,0.08)]

              sm:px-[38px]

              lg:min-h-[650px]
              lg:px-[42px]
              lg:pb-[22px]
              lg:pt-[22px]
            "
          >
            {/* =================================================
                FORM HEADER
            ================================================= */}

            <div
              className="
                flex
                items-center
                gap-[16px]
              "
            >
              <span
                className="
                  grid
                  h-[56px]
                  w-[56px]
                  shrink-0

                  place-items-center

                  rounded-full

                  bg-[#004A39]

                  text-[#D39A2D]
                "
              >
                <CSRIcon
                  name="Form"
                  className="
                    h-[34px]
                    w-[34px]
                  "
                />
              </span>

              <h3
                className="
                  whitespace-nowrap

                  text-[18px]
                  font-bold
                  uppercase
                  tracking-[0.08em]

                  text-[#0B4A3B]

                  sm:text-[20px]
                "
              >
                {contactTitle}
              </h3>

              <span
                className="
                  ml-auto
                  hidden
                  h-px
                  min-w-[45px]
                  flex-1

                  bg-[#C48D32]

                  sm:block
                "
              />

              <span
                className="
                  hidden
                  h-[8px]
                  w-[8px]
                  shrink-0

                  rounded-full

                  bg-[#BD8019]

                  sm:block
                "
              />
            </div>

            {/* =================================================
                FORM GRID
            ================================================= */}

            <div
              className="
                mt-[18px]

                grid
                grid-cols-1

                gap-x-[24px]
                gap-y-[14px]

                md:grid-cols-2
              "
            >
              {fields.map((field) => (
                <label
                  key={field.label}
                  className="block min-w-0"
                >
                  <span
                    className="
                      mb-[5px]
                      block

                      text-[16px]
                      font-semibold

                      text-[#222]
                    "
                  >
                    {field.label}

                    {field.required && (
                      <span className="text-red-600">
                        {" "}
                        *
                      </span>
                    )}
                  </span>

                  <input
                    name={field.name}
                    type={field.type}
                    required={field.required}
                    placeholder={field.placeholder}
                    maxLength={"maxLength" in field ? field.maxLength : undefined}
                    inputMode={"inputMode" in field ? field.inputMode : undefined}
                    onInput={
                      field.name === "phone"
                        ? (e) => {
                            e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "").slice(0, 10);
                          }
                        : undefined
                    }
                    className="
                      h-[48px]
                      w-full

                      rounded-[7px]

                      border
                      border-[#DFC8AA]

                      bg-white

                      px-[16px]

                      text-[16px]

                      outline-none

                      transition

                      placeholder:text-[#868686]

                      focus:border-[#A8792C]
                    "
                  />
                </label>
              ))}

              {/* CSR FOCUS */}

              <label className="block min-w-0">
                <span
                  className="
                    mb-[5px]
                    block

                    text-[16px]
                    font-semibold

                    text-[#222]
                  "
                >
                  CSR / ESG Focus Area
                </span>

                <select
                  name="interest"
                  className="
                    h-[48px]
                    w-full

                    rounded-[7px]

                    border
                    border-[#DFC8AA]

                    bg-white

                    px-[16px]

                    text-[16px]
                    text-[#777]

                    outline-none

                    focus:border-[#A8792C]
                  "
                >
                  <option>
                    Select or type focus area
                  </option>

                  <option>
                    Humanitarian Support
                  </option>

                  <option>
                    Community Welfare
                  </option>

                  <option>
                    Employee Volunteering
                  </option>
                </select>
              </label>
            </div>

            {/* =================================================
                MESSAGE
            ================================================= */}

            <label
              className="
                mt-[15px]
                block
              "
            >
              <span
                className="
                  mb-[5px]
                  block

                  text-[16px]
                  font-semibold

                  text-[#222]
                "
              >
                Message / Partnership Requirement{" "}
                <span className="text-red-600">
                  *
                </span>
              </span>

              <textarea
                name="message"
                required
                placeholder="Tell us about your CSR goals and partnership requirements..."
                className="
                  h-[88px]
                  w-full

                  resize-none

                  rounded-[7px]

                  border
                  border-[#DFC8AA]

                  p-[16px]

                  text-[16px]

                  outline-none

                  placeholder:text-[#868686]

                  focus:border-[#A8792C]
                "
              />
            </label>

            {/* =================================================
                CONSENT
            ================================================= */}

            <label
              className="
                mt-[12px]

                flex
                items-start
                gap-[12px]

                text-[16px]
                leading-[1.45]

                text-[#333]
              "
            >
              <input
                name="consent"
                required
                type="checkbox"
                className="
                  mt-[2px]
                  h-[20px]
                  w-[20px]
                  shrink-0

                  rounded

                  border-[#BB9870]
                "
              />

              <span>
                {consentText.includes("Privacy Policy") ? (
                  <>
                    {consentText.split("Privacy Policy")[0]}
                    <strong className="text-[#0A4C3A]">Privacy Policy.</strong>
                  </>
                ) : consentText}
              </span>
            </label>

            {/* =================================================
                SUBMIT BUTTON
            ================================================= */}

            <div
              className="
                mt-[15px]
                flex
                justify-center
              "
            >
              <button
                type="submit"
                disabled={submitState === "loading"}
                className="
                  group

                  inline-flex
                  h-[48px]
                  w-full
                  max-w-[290px]

                  items-center
                  justify-between

                  rounded-[7px]

                  bg-[#004B39]

                  px-[24px]

                  text-[16px]
                  font-bold
                  uppercase
                  tracking-[0.06em]

                  text-white

                  shadow-[0_5px_12px_rgba(0,69,49,0.12)]

                  transition

                  hover:bg-[#003D30]
                "
              >
                {submitState === "loading" ? "Submitting..." : (submitState === "success" ? submittedLabel : submitLabel)}

                <CSRIcon
                  name="ArrowRight"
                  className="
                    h-[25px]
                    w-[25px]

                    transition-transform

                    group-hover:translate-x-[3px]
                  "
                />
              </button>
            </div>

            <p
              className="
                mt-[9px]
                text-center

                text-[16px]

                text-[#555]
              "
            >
              {formNote}
            </p>
          </form>
        </div>

        {/* =====================================================
            THANK YOU STRIP
        ====================================================== */}

        <div
          className="
            mt-[20px]

            flex
            flex-col
            items-start
            gap-[12px]

            rounded-[14px]

            border
            border-[#B6C8B8]

            bg-[#F6F8EF]

            px-[24px]
            py-[9px]

            lg:px-[40px]
            sm:flex-row
            sm:items-center
          "
        >
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-4">
              <h3
                className="
                  font-sans
                  text-[26px]
                  font-semibold

                  text-[#064536]
                "
                style={{
                  fontFamily:
                    "Georgia, 'Times New Roman', serif",
                }}
              >
                {thankYouTitle}
              </h3>

              <span
                className="
                  block
                  h-px
                  w-[70px]
                  bg-[#C9912F]
                "
              />
            </div>
            <p className="mt-1 text-[17px] font-medium leading-[1.35] text-[#3D4443]">
              {thankYouDesc}
            </p>
            {submitMessage && <p role="status" className={`mt-2 text-center text-[16px] ${submitState === "error" ? "text-red-700" : "text-[#0A4C3A]"}`}>{submitMessage}</p>}
          </div>

          <span className="grid h-[58px] w-[58px] shrink-0 place-items-center rounded-full bg-[#E7F1D9] text-[#084D3B] sm:ml-auto">
            <CSRIcon name="HeartHands" className="h-[40px] w-[40px]" />
          </span>
        </div>
      </div>

      <SuccessPopup
        open={showSuccessPopup}
        onClose={() => setShowSuccessPopup(false)}
        message="Your CSR partnership enquiry has been received. Our team will review the information and respond through the contact details provided."
      />
    </section>
  );
}
