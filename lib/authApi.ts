import { api } from "./api";
import { AuthTokens, AuthUser } from "@/store/slices/authSlice";

type AuthResult = { user: AuthUser; twoFactorSetupRequired?: boolean } & AuthTokens;

export const authApi = {
  sendOtp: (phone: string) => api.post<null>("/auth/otp/send", { phone }),
  verifyOtp: (phone: string, otp: string, name?: string) =>
    api.post<AuthResult>("/auth/otp/verify", { phone, otp, name }),
  login: (email: string, password: string, totpCode?: string) =>
    api.post<AuthResult>("/auth/login", {
      email: email.trim().toLowerCase(),
      password,
      ...(totpCode ? { totpCode: totpCode.trim() } : {}),
    }),
  changePassword: (currentPassword: string, newPassword: string) =>
    api.patch("/auth/change-password", { currentPassword, newPassword }),
};
