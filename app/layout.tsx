import type { Metadata } from "next";
import "./globals.css";
import { siteName, siteUrl } from "@/content/site";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: "Beyond Thought Method | Pre-Interpretive Infrastructure",
  description:
    "A practical framework for distinguishing observation, assumption, uncertainty, influence, and responsible next movement before interpretation becomes conclusion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
