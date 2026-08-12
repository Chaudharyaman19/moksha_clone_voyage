"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import { FaPhoneAlt, FaEnvelope, FaChevronLeft } from "react-icons/fa";
import { PiFlowerLotus } from "react-icons/pi";
import { useAppDispatch } from "@/store/hooks";
import { setCredentials } from "@/store/slices/authSlice";
import { authApi } from "@/lib/authApi";
import { ApiRequestError } from "@/lib/api";

type Mode = "otp" | "password";
type PasswordSubMode = "login" | "register";
type OtpStep = "phone" | "otp";

const inputClass =
  "w-full rounded-lg border border-[#E4D5BE] bg-[#FBF8F3] px-3 py-3 text-sm text-[#2C1810] placeholder:text-[#A8937E] transition-all focus:border-[#C9A574] focus:outline-none focus:ring-2 focus:ring-[#C9A574]/40";
const labelClass = "mb-1 block text-[14px] font-semibold uppercase tracking-[0.08em] text-[#4A3428]";

function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  // No post-login dashboard exists yet (case tracking / donor portal land in later phases) —
  // default back to the homepage until one does.
  const redirectTo = searchParams.get("redirect") || "/";

  const [mode, setMode] = useState<Mode>("otp");
  const [passwordSubMode, setPasswordSubMode] = useState<PasswordSubMode>("login");
  const [otpStep, setOtpStep] = useState<OtpStep>("phone");

  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [regPhone, setRegPhone] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [resendCooldown, setResendCooldown] = useState(0);
  const cooldownRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => {
      if (cooldownRef.current) clearInterval(cooldownRef.current);
    };
  }, []);

  const startCooldown = () => {
    setResendCooldown(60);
    cooldownRef.current = setInterval(() => {
      setResendCooldown((prev) => {
        if (prev <= 1 && cooldownRef.current) clearInterval(cooldownRef.current);
        return prev - 1;
      });
    }, 1000);
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);
    try {
      await authApi.sendOtp(phone);
      setOtpStep("otp");
      startCooldown();
    } catch (err) {
      setError(err instanceof ApiRequestError ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);
    try {
      const result = await authApi.verifyOtp(phone, otp, name || undefined);
      dispatch(setCredentials(result));
      router.push(result.user.userType === "VOLUNTEER" ? "/volunteer/dashboard" : redirectTo);
    } catch (err) {
      setError(err instanceof ApiRequestError ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);
    try {
      const result = await authApi.login(email, password);
      dispatch(setCredentials(result));
      router.push(result.user.userType === "VOLUNTEER" ? "/volunteer/dashboard" : redirectTo);
    } catch (err) {
      setError(err instanceof ApiRequestError ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);
    try {
      const result = await authApi.register({ name, phone: regPhone, email, password });
      dispatch(setCredentials(result));
      router.push(redirectTo);
    } catch (err) {
      setError(err instanceof ApiRequestError ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const switchMode = (next: Mode) => {
    setMode(next);
    setError("");
    setOtpStep("phone");
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FBF8F3] text-[#2C1810]">
      <Topbar />
      <Navbar />

      <main className="relative flex min-h-[calc(100vh-160px)] items-center justify-center overflow-hidden px-4 py-12 sm:px-6">
        <div className="pointer-events-none absolute -left-10 top-1/3 hidden select-none font-serif text-[220px] leading-none text-[#8B6A3E]/[0.05] lg:block">
          स्वागत
        </div>

        <div className="relative z-10 w-full max-w-md">
          <div className="relative overflow-hidden rounded-2xl border border-[#E6D6BF] bg-white p-6 shadow-[0_16px_42px_rgba(73,49,31,0.08)] sm:p-8">
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#C9A574] to-transparent" />

            <div className="mb-6 text-center">
              <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#8B6A3E] text-white">
                <PiFlowerLotus className="h-6 w-6" />
              </span>
              <h1 className="font-serif text-2xl text-[#2C1810]">
                Welcome to <span className=" text-[#8B6A3E]">Moksha Sewa</span>
              </h1>
              <p className="mt-1 text-[14px] text-[#7A685B]">Sign in to book services and track your requests.</p>
            </div>

            {/* mode tabs */}
            <div className="mb-5 grid grid-cols-2 gap-2 rounded-lg bg-[#FBF8F3] p-1">
              <button
                type="button"
                onClick={() => switchMode("otp")}
                className={`flex items-center justify-center gap-1.5 rounded-md py-2 text-[14px] font-semibold transition-all ${
                  mode === "otp" ? "bg-[#8B6A3E] text-white shadow" : "text-[#5F4630] hover:text-[#8B6A3E]"
                }`}
              >
                <FaPhoneAlt className="h-3 w-3" /> Phone OTP
              </button>
              <button
                type="button"
                onClick={() => switchMode("password")}
                className={`flex items-center justify-center gap-1.5 rounded-md py-2 text-[14px] font-semibold transition-all ${
                  mode === "password" ? "bg-[#8B6A3E] text-white shadow" : "text-[#5F4630] hover:text-[#8B6A3E]"
                }`}
              >
                <FaEnvelope className="h-3 w-3" /> Email & Password
              </button>
            </div>

            {error && (
              <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-[14px] font-medium text-red-700">
                {error}
              </div>
            )}

            {mode === "otp" && otpStep === "phone" && (
              <form onSubmit={handleSendOtp} className="space-y-4">
                <div>
                  <label className={labelClass}>Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                    placeholder="98765 43210"
                    className={inputClass}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || phone.length !== 10}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#8B6A3E] px-4 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#73532F] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Send OTP"}
                </button>
              </form>
            )}

            {mode === "otp" && otpStep === "otp" && (
              <form onSubmit={handleVerifyOtp} className="space-y-4">
                <button
                  type="button"
                  onClick={() => setOtpStep("phone")}
                  className="inline-flex items-center gap-1 text-[14px] font-semibold text-[#8B6A3E] hover:underline"
                >
                  <FaChevronLeft className="h-2.5 w-2.5" /> +91 {phone}
                </button>
                <div>
                  <label className={labelClass}>Enter 6-digit OTP</label>
                  <input
                    type="text"
                    inputMode="numeric"
                    required
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                    placeholder="••••••"
                    className={`${inputClass} text-center text-lg tracking-[0.5em]`}
                  />
                </div>
                <div>
                  <label className={labelClass}>Your Name (first time only)</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Optional"
                    className={inputClass}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || otp.length !== 6}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#8B6A3E] px-4 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#73532F] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Verifying..." : "Verify & Continue"}
                </button>
                <button
                  type="button"
                  disabled={resendCooldown > 0}
                  onClick={handleSendOtp}
                  className="w-full text-center text-[14px] font-semibold text-[#8B6A3E] disabled:text-[#B5A490]"
                >
                  {resendCooldown > 0 ? `Resend OTP in ${resendCooldown}s` : "Resend OTP"}
                </button>
              </form>
            )}

            {mode === "password" && (
              <>
                <div className="mb-4 flex justify-center gap-4 text-[14px] font-semibold">
                  <button
                    type="button"
                    onClick={() => setPasswordSubMode("login")}
                    className={passwordSubMode === "login" ? "text-[#8B6A3E]" : "text-[#A8937E]"}
                  >
                    Login
                  </button>
                  <span className="text-[#E4D5BE]">|</span>
                  <button
                    type="button"
                    onClick={() => setPasswordSubMode("register")}
                    className={passwordSubMode === "register" ? "text-[#8B6A3E]" : "text-[#A8937E]"}
                  >
                    Create Account
                  </button>
                </div>

                {passwordSubMode === "login" ? (
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <label className={labelClass}>Email Address</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Password</label>
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className={inputClass}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#8B6A3E] px-4 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#73532F] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting ? "Logging in..." : "Login"}
                    </button>
                  </form>
                ) : (
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                      <label className={labelClass}>Full Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={regPhone}
                        onChange={(e) => setRegPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                        placeholder="98765 43210"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Email Address</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Password</label>
                      <input
                        type="password"
                        required
                        minLength={6}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="At least 6 characters"
                        className={inputClass}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#8B6A3E] px-4 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#73532F] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting ? "Creating account..." : "Create Account"}
                    </button>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Login;
