import { mergeLandingSections, type LandingSectionContent } from "./landingContent";
import { mergeAboutSections, type AboutSectionContent } from "./aboutContent";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api/v1";

interface ApiEnvelope<T> {
  success: boolean;
  data: T;
}

interface SettingsResponse {
  landingPage?: { sections?: LandingSectionContent[] };
  aboutPage?: { sections?: AboutSectionContent[] };
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

export async function getAboutSections(): Promise<AboutSectionContent[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/settings`, { cache: "no-store" });
    if (!response.ok) return mergeAboutSections();
    const body = (await response.json()) as ApiEnvelope<SettingsResponse>;
    return mergeAboutSections(body.data?.aboutPage?.sections);
  } catch {
    return mergeAboutSections();
  }
}
