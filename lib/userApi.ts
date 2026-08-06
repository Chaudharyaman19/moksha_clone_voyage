import { api } from "./api";

export const userApi = {
  updateMyProfile: (input: { name?: string; email?: string }) => api.put("/users/me", input),
};
