import { api } from "./api";
import { AuthTokens, AuthUser } from "@/store/slices/authSlice";

type AuthResult = { user: AuthUser } & AuthTokens;

export const authApi = {
  sendOtp: (phone: string) => api.post<null>("/auth/otp/send", { phone }),
  verifyOtp: (phone: string, otp: string, name?: string) =>
    api.post<AuthResult>("/auth/otp/verify", { phone, otp, name }),
  register: (input: { name: string; phone: string; email: string; password: string }) =>
    api.post<AuthResult>("/auth/register", input),
  login: (email: string, password: string) => api.post<AuthResult>("/auth/login", { email, password }),
};
