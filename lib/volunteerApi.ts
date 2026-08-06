import { api } from "./api";
import { AuthUser, AuthTokens } from "@/store/slices/authSlice";

export interface VolunteerProfile {
  _id: string;
  city: string;
  skills: string[];
  status: "ACTIVE" | "INACTIVE" | "BLACKLISTED";
  availability: "AVAILABLE" | "BUSY" | "UNAVAILABLE";
  totalAssignments: number;
  name?: string;
  phone?: string;
  email?: string;
  avatarUrl?: string;
  address?: string;
  state?: string;
  pincode?: string;
  preferredRole?: "PRIMARY" | "SUPPORT" | "DRIVER";
  schedulePreference?: "WEEKDAYS" | "WEEKENDS" | "ANYTIME" | "EMERGENCY_ONLY";
}

export interface VolunteerAssignmentCase {
  caseId: string;
  status: string;
  city: string;
  priority: "LOW" | "NORMAL" | "HIGH" | "CRITICAL";
  scheduledAt?: string;
}

export interface VolunteerAssignment {
  _id: string;
  caseId: string;
  case: VolunteerAssignmentCase | null;
  role: "PRIMARY" | "SUPPORT" | "DRIVER";
  status: "ASSIGNED" | "ACCEPTED" | "DECLINED" | "COMPLETED" | "WITHDRAWN";
  note?: string;
  createdAt: string;
}

type RegisterResult = { user: AuthUser; volunteer: VolunteerProfile } & AuthTokens;

export const volunteerApi = {
  register: (input: { name: string; phone: string; email: string; password: string; city: string; skills: string[] }) =>
    api.post<RegisterResult>("/volunteers/register", input),
  myProfile: () => api.get<VolunteerProfile>("/volunteers/me"),
  updateAvailability: (availability: VolunteerProfile["availability"]) =>
    api.patch<VolunteerProfile>("/volunteers/me/availability", { availability }),
  myAssignments: () => api.get<VolunteerAssignment[]>("/volunteers/me/assignments"),
  respondToAssignment: (assignmentId: string, response: "ACCEPTED" | "DECLINED") =>
    api.patch<VolunteerAssignment>(`/volunteers/me/assignments/${assignmentId}/respond`, { response }),
};
