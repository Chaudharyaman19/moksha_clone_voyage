import { api } from "./api";

export const newsletterApi = {
  subscribe: (email: string, source?: string) => api.post<null>("/newsletter", { email, source }),
};
