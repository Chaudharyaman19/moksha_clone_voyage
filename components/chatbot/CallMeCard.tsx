"use client";

import { useEffect, useRef, useState } from "react";

/*
 * Garima's chat: "call me now". Under her offer ("अभी कॉल करवाऊँ या कॉल-बैक?"), the visitor taps to be called at once
 * — on the number this chat verified already, or after a WhatsApp OTP for a new one — and our phone line rings their
 * mobile, Garima says she is connecting them, and the call goes to the team level by level (backend chat.phonecall).
 * The card then follows the call. "Call back" sends the usual callback request instead.
 */

const API = (process.env.NEXT_PUBLIC_API_URL || (process.env.NODE_ENV === "production" ? "https://api.mokshasewa.org/api/v1" : "http://localhost:5003/api/v1")).replace(/\/+$/, "");
/** Must match CHAT_CALL_OTP_PROFILE in the backend (chat.phonecall) */
const CALL_OTP_PROFILE = "CHAT_CALL";

type Step = "choose" | "confirm" | "number" | "otp" | "calling" | "over";
type CallState = "ringing" | "answered" | "connecting" | "team" | "missed-team" | "done-team" | "done" | "not-answered" | "unknown";

const TEXT = {
  hi: {
    callNow: "📞 अभी कॉल करें",
    callback: "🕑 कॉल-बैक नोट करें",
    callbackAsk: "मुझे कॉल-बैक चाहिए",
    confirm: (last4: string) => `आपके नंबर …${last4} पर अभी कॉल करें?`,
    yesCall: "हाँ, कॉल करें",
    otherNumber: "दूसरा नंबर",
    numberLabel: "आपका 10 अंकों का मोबाइल नंबर",
    sendOtp: "WhatsApp पर OTP भेजें",
    otpLabel: (last4: string) => `…${last4} पर WhatsApp में आया 6 अंकों का OTP`,
    verifyCall: "पक्का करें और कॉल करें",
    resend: "OTP फिर से भेजें",
    badNumber: "कृपया सही 10 अंकों का मोबाइल नंबर लिखिए।",
    badOtp: "कृपया 6 अंकों का OTP लिखिए।",
    working: "एक पल…",
    state: {
      ringing: (last4: string) => `📞 आपके फ़ोन (…${last4}) पर हमारी कॉल जा रही है — कृपया उठाइए।`,
      answered: "✅ कॉल जुड़ गई — गरिमा आपको हमारी टीम से जोड़ रही हैं।",
      connecting: "🎵 सीनियर से जोड़ा जा रहा है… कृपया लाइन पर बने रहिए।",
      team: "✅ आप हमारी टीम से बात कर रहे हैं।",
      "missed-team": "सीनियर अभी उपलब्ध नहीं हैं — आपका कॉल-बैक नोट कर लिया गया है।",
      "done-team": "कॉल समाप्त हुई। हमारी टीम से बात करने के लिए धन्यवाद।",
      done: "कॉल समाप्त हुई। धन्यवाद!",
      "not-answered": "कॉल नहीं उठी।",
      unknown: "कॉल की स्थिति देखी जा रही है…",
    } as Record<CallState, string | ((last4: string) => string)>,
    again: "फिर से कॉल करें",
  },
  en: {
    callNow: "📞 Call me now",
    callback: "🕑 Note a call back",
    callbackAsk: "I'd like a call back",
    confirm: (last4: string) => `Call you now on …${last4}?`,
    yesCall: "Yes, call me",
    otherNumber: "Another number",
    numberLabel: "Your 10-digit mobile number",
    sendOtp: "Send OTP on WhatsApp",
    otpLabel: (last4: string) => `The 6-digit OTP sent on WhatsApp to …${last4}`,
    verifyCall: "Verify and call me",
    resend: "Send the OTP again",
    badNumber: "Please enter a valid 10-digit mobile number.",
    badOtp: "Please enter the 6-digit OTP.",
    working: "One moment…",
    state: {
      ringing: (last4: string) => `📞 We're calling your phone (…${last4}) — please pick up.`,
      answered: "✅ Connected — Garima is putting you through to our team.",
      connecting: "🎵 Connecting you to a senior… please stay on the line.",
      team: "✅ You're talking with our team.",
      "missed-team": "Our seniors are busy right now — your call back has been noted.",
      "done-team": "The call has ended. Thank you for talking with our team.",
      done: "The call has ended. Thank you!",
      "not-answered": "The call wasn't answered.",
      unknown: "Checking the call…",
    } as Record<CallState, string | ((last4: string) => string)>,
    again: "Call me again",
  },
};

const post = async (path: string, body: object) => {
  const res = await fetch(`${API}${path}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  return res.json().catch(() => null);
};

export default function CallMeCard({
  offer,
  english,
  sessionId,
  name,
  disabled,
  onCallback,
}: {
  offer: { verified: boolean; last4: string };
  english: boolean;
  sessionId: () => string;
  name?: string;
  disabled?: boolean;
  onCallback: (text: string) => void;
}) {
  const t = english ? TEXT.en : TEXT.hi;
  const [step, setStep] = useState<Step>("choose");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [last4, setLast4] = useState(offer.last4);
  const [working, setWorking] = useState(false);
  const [error, setError] = useState("");
  const [callId, setCallId] = useState("");
  const [state, setState] = useState<CallState>("ringing");
  const alive = useRef(true);
  useEffect(
    () => () => {
      alive.current = false;
    },
    []
  );

  // The call, followed every few seconds until it is over
  useEffect(() => {
    if (step !== "calling" || !callId) return;
    let stop = false;
    const look = async () => {
      try {
        const res = await fetch(`${API}/chat/call-me/${callId}?session=${encodeURIComponent(sessionId())}`, { cache: "no-store" });
        const data = (await res.json().catch(() => null))?.data;
        if (stop || !alive.current || !data?.status) return;
        setState(data.status);
        if (["done", "done-team", "not-answered"].includes(data.status)) setStep("over");
      } catch {
        // tried again on the next tick
      }
    };
    void look();
    const timer = setInterval(look, 3000);
    // (followed for at most 20 minutes)
    const end = setTimeout(() => clearInterval(timer), 20 * 60 * 1000);
    return () => {
      stop = true;
      clearInterval(timer);
      clearTimeout(end);
    };
  }, [step, callId, sessionId]);

  const callMe = async (number?: string) => {
    setWorking(true);
    setError("");
    try {
      const data = (await post("/chat/call-me", { sessionId: sessionId(), ...(number ? { phone: number } : {}) }))?.data;
      if (!alive.current) return;
      if (data?.ok) {
        setCallId(data.callId);
        setLast4(data.last4 || last4);
        setState("ringing");
        setStep("calling");
      } else if (data?.code === "VERIFY") {
        setStep("number");
        setError("");
      } else setError(data?.message || "The call couldn't be placed right now.");
    } catch {
      setError("The call couldn't be placed right now.");
    } finally {
      if (alive.current) setWorking(false);
    }
  };

  const sendOtp = async () => {
    const digits = phone.replace(/\D/g, "").replace(/^(?:91|0)(?=[6-9]\d{9}$)/, "");
    if (!/^[6-9]\d{9}$/.test(digits)) {
      setError(t.badNumber);
      return;
    }
    setWorking(true);
    setError("");
    try {
      const res = await post("/verify/send-phone-otp", { phone: digits, profile: CALL_OTP_PROFILE, name: name || null, eventName: "MOKSHASEWA" });
      if (!alive.current) return;
      if (res?.success === false) setError(res.message || "The OTP couldn't be sent.");
      else {
        setPhone(digits);
        setLast4(digits.slice(-4));
        setOtp("");
        setStep("otp");
      }
    } catch {
      setError("The OTP couldn't be sent.");
    } finally {
      if (alive.current) setWorking(false);
    }
  };

  const verifyAndCall = async () => {
    const code = otp.replace(/\D/g, "");
    if (code.length !== 6) {
      setError(t.badOtp);
      return;
    }
    setWorking(true);
    setError("");
    try {
      const res = await post("/verify/verify-phone-otp", { phone, otp: code });
      if (!alive.current) return;
      if (!res?.success) {
        setError(res?.message || "The OTP didn't match.");
        setWorking(false);
        return;
      }
      await callMe(phone);
    } catch {
      setError("The OTP couldn't be checked.");
      setWorking(false);
    }
  };

  const btn =
    "cursor-pointer rounded-full border px-3 py-1.5 text-left text-[12px] leading-tight font-semibold shadow-[0_2px_6px_-3px_rgba(110,40,20,0.35)] transition disabled:cursor-default disabled:opacity-50";
  const primary = `${btn} border-[#8f2433] bg-[linear-gradient(135deg,#8f2433,#6b1420)] text-white hover:brightness-110`;
  const soft = `${btn} border-[#d9a441]/60 bg-[#fffaf1] text-[#6b1420] hover:border-[#d9a441] hover:bg-[#fbecd2]`;
  const input =
    "w-full rounded-[12px] border border-[#ecd3a6] bg-white px-3 py-2 text-[13px] font-medium text-[#4a2a1a] outline-none focus:border-[#8f2433]/50 focus:ring-2 focus:ring-[#8f2433]/10";
  const said = (s: CallState) => {
    const line = t.state[s] ?? t.state.unknown;
    return typeof line === "function" ? line(last4) : line;
  };

  return (
    <div className="mt-2 rounded-[14px] border border-[#d9a441]/60 bg-[#fffaf1] p-2.5 shadow-[0_6px_14px_-10px_rgba(110,40,20,0.45)]">
      {step === "choose" && (
        <div className="flex flex-wrap gap-1.5">
          <button type="button" disabled={disabled || working} onClick={() => (offer.verified ? setStep("confirm") : setStep("number"))} className={primary}>
            {t.callNow}
          </button>
          <button type="button" disabled={disabled} onClick={() => onCallback(t.callbackAsk)} className={soft}>
            {t.callback}
          </button>
        </div>
      )}

      {step === "confirm" && (
        <div className="space-y-2">
          <p className="text-[12.5px] font-semibold text-[#4a2a1a]">{t.confirm(last4)}</p>
          <div className="flex flex-wrap gap-1.5">
            <button type="button" disabled={working} onClick={() => callMe()} className={primary}>
              {working ? t.working : t.yesCall}
            </button>
            <button type="button" disabled={working} onClick={() => setStep("number")} className={soft}>
              {t.otherNumber}
            </button>
          </div>
        </div>
      )}

      {step === "number" && (
        <div className="space-y-2">
          <label className="block text-[11.5px] font-semibold text-[#6b1420]">{t.numberLabel}</label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} onKeyDown={(e) => e.key === "Enter" && sendOtp()} inputMode="tel" maxLength={14} placeholder="98XXXXXXXX" className={input} />
          <button type="button" disabled={working} onClick={sendOtp} className={primary}>
            {working ? t.working : t.sendOtp}
          </button>
        </div>
      )}

      {step === "otp" && (
        <div className="space-y-2">
          <label className="block text-[11.5px] font-semibold text-[#6b1420]">{t.otpLabel(last4)}</label>
          <input
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
            onKeyDown={(e) => e.key === "Enter" && verifyAndCall()}
            inputMode="numeric"
            autoComplete="one-time-code"
            placeholder="______"
            className={`${input} tracking-[0.4em]`}
          />
          <div className="flex flex-wrap gap-1.5">
            <button type="button" disabled={working} onClick={verifyAndCall} className={primary}>
              {working ? t.working : t.verifyCall}
            </button>
            <button type="button" disabled={working} onClick={sendOtp} className={soft}>
              {t.resend}
            </button>
          </div>
        </div>
      )}

      {(step === "calling" || step === "over") && (
        <div className="space-y-2">
          <p className="flex items-center gap-2 text-[12.5px] font-semibold text-[#4a2a1a]">
            {step === "calling" && <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-[#22c55e]" />}
            {said(state)}
          </p>
          {step === "over" && state === "not-answered" && (
            <div className="flex flex-wrap gap-1.5">
              <button type="button" disabled={working} onClick={() => callMe()} className={primary}>
                {working ? t.working : t.again}
              </button>
              <button type="button" onClick={() => onCallback(t.callbackAsk)} className={soft}>
                {t.callback}
              </button>
            </div>
          )}
        </div>
      )}

      {error && (
        <div className="mt-2 space-y-1.5">
          <p className="text-[11.5px] font-semibold text-red-700">{error}</p>
          {step !== "number" && step !== "otp" && (
            <button type="button" onClick={() => onCallback(t.callbackAsk)} className={soft}>
              {t.callback}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
