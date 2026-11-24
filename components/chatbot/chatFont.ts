import { Inter } from "next/font/google";

// Inter for the chat's own text (the launcher's bubble, the chat window): the font of Design House's
// "From concept to creation…" line. Not preloaded, so it never competes with the page's own font.
export const chatFont = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap", preload: false });
