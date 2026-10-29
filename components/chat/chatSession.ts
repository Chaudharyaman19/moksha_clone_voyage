/**
 * Remembers who is chatting on this browser, so the name is not asked again on every page.
 * The chat is forgotten after 30 minutes without a message, or when the browser is closed — so
 * the next person on a shared computer starts fresh.
 */

const STORAGE_KEY = "mokshaMitraChat";
// Session cookie (no expiry): the browser deletes it when it is closed
const ALIVE_COOKIE = "mokshaMitraAlive";
const IDLE_LIMIT_MS = 30 * 60 * 1000;

type SavedChat = { sessionId: string; name: string; phone?: string; lastActive: number };

export type ChatSessionState =
  | { status: "active"; sessionId: string; name: string; phone: string }
  | { status: "expired" }
  | { status: "none" };

const hasAliveCookie = () => {
  try {
    return document.cookie.split("; ").some((c) => c.startsWith(`${ALIVE_COOKIE}=`));
  } catch {
    return false;
  }
};

const setAliveCookie = () => {
  try {
    document.cookie = `${ALIVE_COOKIE}=1; path=/; SameSite=Lax`;
  } catch {
    // ignore
  }
};

export const newSessionId = (): string => {
  try {
    return crypto.randomUUID();
  } catch {
    return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }
};

export const clearChatSession = () => {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
};

export const readChatSession = (): ChatSessionState => {
  let saved: SavedChat | null = null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    saved = raw ? (JSON.parse(raw) as SavedChat) : null;
  } catch {
    saved = null;
  }
  if (!saved?.sessionId) return { status: "none" };

  const idleTooLong = Date.now() - (saved.lastActive || 0) > IDLE_LIMIT_MS;
  if (idleTooLong || !hasAliveCookie()) {
    clearChatSession();
    return { status: "expired" };
  }
  return { status: "active", sessionId: saved.sessionId, name: saved.name || "", phone: saved.phone || "" };
};

/** Call after the name is given and on every message, to keep the chat alive.
 *  Without `phone`, the number already saved for this chat is kept. */
export const saveChatSession = (sessionId: string, name: string, phone?: string) => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const saved = raw ? (JSON.parse(raw) as SavedChat) : null;
    if (phone === undefined && saved?.sessionId === sessionId) phone = saved.phone;
    const data: SavedChat = { sessionId, name, phone, lastActive: Date.now() };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Private mode / blocked storage — the chat still works until the page is reloaded
  }
  setAliveCookie();
};
