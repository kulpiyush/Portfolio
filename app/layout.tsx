import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Piyush Kulkarni | Data Engineer & AI Engineer",
  description:
    "Versatile data and AI professional specializing in production-grade data pipelines, intelligent agentic systems, and advanced LLM applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full bg-background`}
    >
      <body className={`${geistSans.className} min-h-full bg-background`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
