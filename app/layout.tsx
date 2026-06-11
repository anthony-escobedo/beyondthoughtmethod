import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
      <body>{children}</body>
    </html>
  );
}
