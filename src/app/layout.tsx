import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { PostHogAnalytics } from "@/components/analytics/PostHogAnalytics";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Kamruzzaman Khandakar | Full-Stack Developer",
  description:
    "Terminal-inspired portfolio for Kamruzzaman Khandakar, a full-stack developer building business-focused MERN systems and growth tooling."
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {children}
        <PostHogAnalytics />
        <Analytics />
      </body>
    </html>
  );
}
