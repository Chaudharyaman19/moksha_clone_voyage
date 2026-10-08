import { api } from "./api";

export interface Faq {
  _id: string;
  question: string;
  answer: string;
  category?: string;
  order: number;
}

export const faqsApi = {
  getAll: async () => {
    try {
      return await api.get<Faq[]>("/faqs");
    } catch (err) {
      console.warn("Failed to fetch FAQs, using fallback.");
      return [];
    }
  },
};
