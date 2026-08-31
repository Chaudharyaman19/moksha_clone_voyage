"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaEnvelope } from "react-icons/fa";
import { PiFlowerLotus } from "react-icons/pi";
import Topbar from "@/components/layout/topbar/Topbar";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer/FooterNew";
import { useAppDispatch } from "@/store/hooks";
import { setCredentials } from "@/store/slices/authSlice";
import { authApi } from "@/lib/authApi";
import { ApiRequestError } from "@/lib/api";

const inputClass =
  "w-full rounded-lg border border-[#E4D5BE] bg-[#FBF8F3] px-3 py-3 text-sm text-[#2C1810] placeholder:text-[#A8937E] transition-all focus:border-[#C9A574] focus:outline-none focus:ring-2 focus:ring-[#C9A574]/40";
const labelClass = "mb-1 block text-[14px] font-semibold uppercase tracking-[0.08em] text-[#4A3428]";

function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  // Only ever redirect to a path within this site. A value like "//evil.com" or
  // "https://evil.com" is protocol-relative/absolute and would otherwise send a just-authenticated
  // user off-site — restrict to strings that start with a single "/" and nothing that looks like
  // the start of another origin.
  const requestedRedirect = searchParams.get("redirect");
  const redirectTo =
    requestedRedirect && /^\/(?!\/)/.test(requestedRedirect) ? requestedRedirect : "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [totpCode, setTotpCode] = useState("");
  const [requiresTwoFactor, setRequiresTwoFactor] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);
    try {
      const result = await authApi.login(email, password, requiresTwoFactor ? totpCode : undefined);
      dispatch(setCredentials(result));
      router.push(result.user.userType === "VOLUNTEER" ? "/volunteer/dashboard" : redirectTo);
    } catch (caughtError) {
      if (
        caughtError instanceof ApiRequestError &&
        caughtError.message.toLowerCase().includes("two-factor code required")
      ) {
        setRequiresTwoFactor(true);
        setError("Enter the code from your authenticator app to continue.");
      } else {
        setError(
          caughtError instanceof ApiRequestError
            ? caughtError.message
            : "Something went wrong. Please try again.",
        );
      }
    } finally {
      setIsSubmitting(false);
    }
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
              <h2 className="font-serif text-2xl text-[#2C1810]">
                Welcome to <span className="text-[#8B6A3E]">Moksha Sewa</span>
              </h2>
              <p className="mt-1 text-[14px] text-[#7A685B]">Sign in to access your account.</p>
            </div>

            {/* <div className="mb-5 flex items-center justify-center gap-2 rounded-lg bg-[#FBF8F3] px-3 py-2 text-[14px] font-semibold text-[#5F4630]">
              <FaEnvelope className="h-3 w-3" /> Email &amp; Password
            </div> */}

            {error && (
              <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-[14px] font-medium text-red-700">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className={labelClass}>Email Address</label>
                <input
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Password</label>
                <input
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="••••••••"
                  className={inputClass}
                />
              </div>
              {requiresTwoFactor && (
                <div>
                  <label className={labelClass}>Authenticator Code</label>
                  <input
                    type="text"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    required
                    value={totpCode}
                    onChange={(event) => setTotpCode(event.target.value.replace(/\D/g, "").slice(0, 8))}
                    placeholder="6-digit code or backup code"
                    className={inputClass}
                  />
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting || (requiresTwoFactor && totpCode.length < 6)}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#8B6A3E] px-4 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#73532F] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Login;
