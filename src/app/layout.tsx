import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sora = localFont({
  src: [
    { path: "./fonts/sora-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/sora-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
  fallback: ["Segoe UI", "system-ui", "sans-serif"],
});

const plexSans = localFont({
  src: [
    { path: "./fonts/plex-sans-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/plex-sans-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/plex-sans-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
  fallback: ["Segoe UI", "system-ui", "sans-serif"],
});

const plexMono = localFont({
  src: [
    { path: "./fonts/plex-mono-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/plex-mono-500.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-mono",
  display: "swap",
  fallback: ["Consolas", "monospace"],
});

const title = "Jagan Babu R. — Backend & full-stack software engineer";
const description =
  "Jagan Babu R. is a backend and full-stack software engineer in Chennai. He builds production-ready systems: a live UPI fraud platform, on-chain credentials, an agent runtime with an approval gate, and fairness audits.";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-orpin-omega-57.vercel.app"),
  title,
  description,
  applicationName: "Jagan Babu R.",
  authors: [{ name: "Jagan Babu R.", url: "https://github.com/Jaganravi131" }],
  keywords: [
    "Jagan Babu R.",
    "backend engineer",
    "full-stack engineer",
    "software engineer",
    "machine learning engineer",
    "Chennai",
    "API development",
    "system design",
    "portfolio",
  ],
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Jagan Babu R.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#05070c",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${plexSans.variable} ${plexMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
