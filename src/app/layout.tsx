import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: "MetaMate | Your Social AI Universe",
  description: "Create a living AI version of yourself that chats, learns, socializes, and evolves — even when you're offline. Built by Sahil Arora (@villainmonkey).",
  keywords: ["AI companions", "AI social network", "AI avatars", "digital identity", "AI personality", "autonomous AI", "AI agents", "social AI", "AI universe", "virtual AI friends", "AI personas"],
  openGraph: {
    title: "MetaMate | Your Social AI Universe",
    description: "The next era of identity begins now. Create your digital mind.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-white selection:bg-brand-purple/30 selection:text-brand-text`}>
        {children}
      </body>
    </html>
  );
}
