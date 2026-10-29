import React, { useState } from "react";
import { Phone, User } from "lucide-react";
import { cleanMobile, cleanName, validateLead, type Lang, type LeadErrors, type LeadValues } from "./chatGuards";

const TEXT = {
  en: {
    name: "Full Name",
    namePh: "Your name",
    phone: "Mobile Number",
    phonePh: "10-digit mobile number",
    time: "Preferred Time (Optional)",
    anyTime: "Any time",
    times: ["Morning", "Afternoon", "Evening"],
    wait: "Please wait...",
    sent: "Request sent",
  },
  hi: {
    name: "पूरा नाम",
    namePh: "आपका नाम",
    phone: "मोबाइल नंबर",
    phonePh: "10 अंकों का मोबाइल नंबर",
    time: "पसंदीदा समय (वैकल्पिक)",
    anyTime: "कोई भी समय",
    times: ["सुबह", "दोपहर", "शाम"],
    wait: "कृपया प्रतीक्षा करें...",
    sent: "अनुरोध भेजा गया",
  },
} as const;

// The value sent to the backend is always English
const TIME_VALUES = ["Morning", "Afternoon", "Evening"];

type Props = {
  lang: Lang;
  submitLabel: string;
  /** Adds the Morning / Afternoon / Evening choice (callback request) */
  withTime?: boolean;
  defaultName?: string;
  defaultPhone?: string;
  /** Already submitted: the form stays visible but locked */
  sent?: boolean;
  /** Returns an error message, or null when the details were saved */
  onSubmit: (values: LeadValues) => Promise<string | null>;
};

const ChatLeadForm: React.FC<Props> = ({ lang, submitLabel, withTime, defaultName = "", defaultPhone = "", sent, onSubmit }) => {
  const t = TEXT[lang];
  const [values, setValues] = useState<LeadValues>({ name: defaultName, phone: defaultPhone, time: "" });
  const [errors, setErrors] = useState<LeadErrors>({});
  const [formError, setFormError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const set = (key: keyof LeadValues, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (key !== "time" && errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting || sent) return;
    setFormError("");
    const found = validateLead(values, lang);
    setErrors(found);
    if (Object.keys(found).length) return;
    setSubmitting(true);
    const error = await onSubmit({ ...values, name: values.name.trim() });
    setSubmitting(false);
    if (error) setFormError(error);
  };

  const inputClass = (error?: string) =>
    `w-full rounded-xl border bg-[#fbf5ea] py-2.5 text-[14px] text-[#2C1810] outline-none transition placeholder:text-[#2C1810]/40 focus:bg-white focus:ring-4 disabled:opacity-60 ${
      error ? "border-red-400 focus:border-red-500 focus:ring-red-500/15" : "border-[#C9A574]/50 focus:border-[#8B6A3E] focus:ring-[#8B6A3E]/15"
    }`;
  const label = "text-[10.5px] font-bold uppercase tracking-wider text-[#2C1810]";

  return (
    <form onSubmit={submit} noValidate className="overflow-hidden rounded-2xl border border-[#C9A574]/40 bg-white shadow-[0_4px_20px_-6px_rgba(44,24,16,0.18)]">
      <div className="h-[3px] bg-gradient-to-r from-[#8B6A3E] to-[#D54200]" aria-hidden="true" />
      <fieldset disabled={sent || submitting} className="m-0 flex min-w-0 flex-col gap-2.5 border-0 p-3.5">
        <label className="flex flex-col gap-1">
          <span className={label}>
            {t.name} <span className="text-[#D54200]">*</span>
          </span>
          <span className="relative">
            <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8B6A3E]" aria-hidden="true" />
            <input
              type="text"
              autoComplete="name"
              maxLength={60}
              placeholder={t.namePh}
              value={values.name}
              aria-invalid={!!errors.name}
              onChange={(e) => set("name", cleanName(e.target.value))}
              className={`${inputClass(errors.name)} pl-10 pr-3`}
            />
          </span>
          {errors.name && (
            <span role="alert" className="text-[11.5px] text-red-600">
              {errors.name}
            </span>
          )}
        </label>

        <label className="flex flex-col gap-1">
          <span className={label}>
            {t.phone} <span className="text-[#D54200]">*</span>
          </span>
          <span className="relative">
            <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8B6A3E]" aria-hidden="true" />
            <span className="absolute left-9 top-1/2 -translate-y-1/2 border-r border-[#C9A574]/60 pr-2 text-[14px] font-semibold text-[#73532F]" aria-hidden="true">
              +91
            </span>
            <input
              type="tel"
              autoComplete="tel-national"
              inputMode="numeric"
              maxLength={10}
              placeholder={t.phonePh}
              value={values.phone}
              aria-invalid={!!errors.phone}
              onChange={(e) => set("phone", cleanMobile(e.target.value))}
              onPaste={(e) => {
                // maxLength would cut "+91 98765 43210" before it can be cleaned
                e.preventDefault();
                set("phone", cleanMobile(e.clipboardData.getData("text")));
              }}
              className={`${inputClass(errors.phone)} pl-[78px] pr-14`}
            />
            <span
              className={`absolute right-3 top-1/2 -translate-y-1/2 text-[11px] font-semibold ${values.phone.length === 10 ? "text-[#8B6A3E]" : "text-[#2C1810]/40"}`}
              aria-hidden="true"
            >
              {values.phone.length}/10
            </span>
          </span>
          {errors.phone && (
            <span role="alert" className="text-[11.5px] text-red-600">
              {errors.phone}
            </span>
          )}
        </label>

        {withTime && (
          <label className="flex flex-col gap-1">
            <span className={label}>{t.time}</span>
            <select value={values.time} onChange={(e) => set("time", e.target.value)} className={`${inputClass()} px-3`}>
              <option value="">{t.anyTime}</option>
              {TIME_VALUES.map((value, i) => (
                <option key={value} value={value}>
                  {t.times[i]}
                </option>
              ))}
            </select>
          </label>
        )}

        {formError && (
          <p role="alert" className="rounded-lg border border-red-100 bg-red-50 px-3 py-2 text-[12.5px] text-red-600">
            {formError}
          </p>
        )}

        <button
          type="submit"
          className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#8B6A3E] to-[#73532F] py-2.5 text-[13.5px] font-semibold uppercase tracking-wider text-white shadow-md transition hover:brightness-110 active:scale-[0.98] disabled:opacity-60"
        >
          {submitting ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden="true" />
              {t.wait}
            </>
          ) : sent ? (
            t.sent
          ) : (
            submitLabel
          )}
        </button>
      </fieldset>
    </form>
  );
};

export default ChatLeadForm;
