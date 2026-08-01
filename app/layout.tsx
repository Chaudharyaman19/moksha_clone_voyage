import type { Metadata } from "next";
import "./globals.css";
import Sideicon from "@/components/layout/Sideicon/Sideicon";

export const metadata: Metadata = {
  metadataBase: new URL("https://mokshavoyageclone.netlify.app/"),
  title: "Moksha Sewa",
  description: "Dignified farewell and related services with compassion.",
  openGraph: {
    title: "Moksha Sewa - Dignified Farewell Services",
    description: "We offer comprehensive, respectful, and dignified farewell services to support families during difficult times.",
    url: "https://mokshavoyageclone.netlify.app/",
    siteName: "Moksha Sewa",
    images: [
      {
        url: "/assets/logo Moksha Seva.png",
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
    images: ["/assets/logo Moksha Seva.png"],
  },
  icons: {
    icon: "/assets/logo Moksha Seva.png",
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
