import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alexa Miao | Data Science & AI Portfolio",
  description:
    "I focus on analytics, AI-enabled workflows, and business intelligence.",

  openGraph: {
    title: "Alexa Miao | Data Science & AI Portfolio",
    description:
      "I focus on analytics, AI-enabled workflows, and business intelligence.",
    url: "https://alexamiao-portfolio.vercel.app/",
    siteName: "Alexa Miao Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Alexa Miao Portfolio Preview",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Alexa Miao | Data Science & AI Portfolio",
    description:
      "I focus on analytics, AI-enabled workflows, and business intelligence.",
    images: ["/og.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
