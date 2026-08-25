import { mergeLandingSections, type LandingSectionContent } from "./landingContent";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api/v1";

interface ApiEnvelope<T> {
  success: boolean;
  data: T;
}

interface SettingsResponse {
  landingPage?: { sections?: LandingSectionContent[] };
}

export async function getWebsiteSections(): Promise<LandingSectionContent[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/settings`, { cache: "no-store" });
    if (!response.ok) return mergeLandingSections();
    const body = (await response.json()) as ApiEnvelope<SettingsResponse>;
    return mergeLandingSections(body.data?.landingPage?.sections);
  } catch {
    return mergeLandingSections();
  }
}
