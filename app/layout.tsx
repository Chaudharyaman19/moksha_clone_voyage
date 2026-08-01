import type { Metadata } from "next";
import "./globals.css";
import Sideicon from "@/components/layout/Sideicon/Sideicon";

export const metadata: Metadata = {
  metadataBase: new URL("https://mokshavoyageclone.netlify.app/"),
  title: "Moksha Sewa",
  description: "We offer comprehensive, respectful, and dignified farewell services to support families during difficult times.",
  openGraph: {
    title: "Moksha Sewa - Dignified Farewell Services",
    description: "We offer comprehensive, respectful, and dignified farewell services to support families during difficult times.",
    url: "https://mokshavoyageclone.netlify.app/",
    siteName: "Moksha Sewa",
    images: [
      {
        url: "https://mokshavoyageclone.netlify.app/assets/logoreal-removebg-preview.png",
        width: 1200,
        height: 630,
        alt: "Moksha Sewa Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moksha Sewa - Dignified Farewell Services",
    description: "We offer comprehensive, respectful, and dignified farewell services to support families during difficult times.",
    images: ["https://mokshavoyageclone.netlify.app/assets/logoreal-removebg-preview.png"],
  },
  icons: {
    icon: "/assets/logo-moksha-seva.png",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Sideicon />
        {children}
      </body>
    </html>
  );
}
