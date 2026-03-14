import "./globals.css";
import Sideicon from "@/components/Sideicon/Sideicon";

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
