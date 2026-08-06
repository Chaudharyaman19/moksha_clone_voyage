import { api } from "./api";
import { AuthUser, AuthTokens } from "@/store/slices/authSlice";

export const VOLUNTEER_SCHEDULE_PREFERENCES = ["Weekdays", "Weekends", "Evenings", "Emergency Support", "Flexible"] as const;
export type VolunteerSchedulePreference = (typeof VOLUNTEER_SCHEDULE_PREFERENCES)[number];

export const VOLUNTEER_PREFERRED_ROLES = [
  "Field Volunteer",
  "Transport Support",
  "Documentation",
  "Family Coordination",
  "Ritual Assistance",
] as const;
export type VolunteerPreferredRole = (typeof VOLUNTEER_PREFERRED_ROLES)[number];

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
  preferredRole?: VolunteerPreferredRole;
  schedulePreference?: VolunteerSchedulePreference;
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

export interface VolunteerAssignmentDetail {
  assignment: VolunteerAssignment;
  case: VolunteerAssignmentCase;
  pickup: { address: string; area: string; city: string; state: string; pincode: string } | null;
  contact: { name: string; phone: string; altPhone?: string } | null;
  caseManager: { name: string; phone: string } | null;
  timeline: { event: string; toStatus?: string; note?: string; at: string }[];
}

type RegisterResult = { user: AuthUser; volunteer: VolunteerProfile } & AuthTokens;

export const volunteerApi = {
  register: (input: { name: string; phone: string; email: string; password: string; city: string; skills: string[] }) =>
    api.post<RegisterResult>("/volunteers/register", input),
  myProfile: () => api.get<VolunteerProfile>("/volunteers/me"),
  updateProfile: (
    input: Partial<{
      city: string;
      skills: string[];
      address: string;
      state: string;
      pincode: string;
      schedulePreference: VolunteerSchedulePreference;
      preferredRole: VolunteerPreferredRole;
    }>
  ) => api.patch<VolunteerProfile>("/volunteers/me", input),
  updateAvailability: (availability: VolunteerProfile["availability"]) =>
    api.patch<VolunteerProfile>("/volunteers/me/availability", { availability }),
  myAssignments: () => api.get<VolunteerAssignment[]>("/volunteers/me/assignments"),
  assignmentDetail: (assignmentId: string) =>
    api.get<VolunteerAssignmentDetail>(`/volunteers/me/assignments/${assignmentId}`),
  respondToAssignment: (assignmentId: string, response: "ACCEPTED" | "DECLINED") =>
    api.patch<VolunteerAssignment>(`/volunteers/me/assignments/${assignmentId}/respond`, { response }),
};
