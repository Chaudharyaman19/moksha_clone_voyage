const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  (process.env.NODE_ENV === "production"
    ? "https://api.mokshasewa.org/api/v1"
    : "http://localhost:5000/api/v1");

export const CHAT_URL = `${API_BASE_URL}/chat`;

/**
 * Settings published from the admin panel. Empty values mean "not set": the chat then keeps
 * its built-in text.
 */
export type ChatConfig = {
  enabled: boolean;
  name: string;
  subtitle: string;
  launcher: string;
  /** Uploaded avatar URL, "" for the default icon */
  avatar: string;
  defaultLanguage: string;
  messages: Partial<Record<"en" | "hi", { welcomeGreeting?: string; welcomeMessage?: string; closingGreeting?: string }>> | null;
};

// One request per page load; it is only made once the launcher mounts (after idle) or the panel opens.
let request: Promise<ChatConfig | null> | null = null;

export const loadChatConfig = (): Promise<ChatConfig | null> => {
  if (!request) {
    request = fetch(`${CHAT_URL}/config`)
      .then((res) => (res.ok ? res.json() : null))
      .then((json) => (json?.data as ChatConfig) || null)
      .catch(() => null);
  }
  return request;
};
