import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Design Asylum Studio | India's Top UX/UI & Digital Product Agency",
  description: "Globally reputed creative digital studio specializing in brand identity, high-conversion UI/UX systems, web & mobile engineering, and AI-augmented experiences for scaling companies in India, MENA & Worldwide.",
  keywords: ["Design Asylum", "UX UI Agency", "Digital Product Design", "Creative Agency India", "Bengaluru Design Agency", "Brand Strategy", "Next.js Development"],
  authors: [{ name: "Design Asylum Studio" }],
  openGraph: {
    title: "Design Asylum Studio | Globally Reputed UX UI Design Agency",
    description: "Design partners for category-defining companies across India and the Middle East.",
    type: "website",
    locale: "en_US",
    siteName: "Design Asylum",
  },
  twitter: {
    card: "summary_large_image",
    title: "Design Asylum Studio",
    description: "Design partners for category-defining companies across India, MENA and Global Markets.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
