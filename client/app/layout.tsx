import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://boosterprep.com"),

  title: {
    default: "Booster Prep NCLEX",
    template: "%s | Booster Prep NCLEX",
  },

  description:
    "Prepare for the NCLEX with expert-led courses, realistic practice questions, study plans, and comprehensive learning resources.",

  keywords: [
    "NCLEX",
    "NCLEX-RN",
    "USRN",
    "Nursing",
    "Medical Education",
    "Online Courses",
    "Practice Questions",
    "Nursing Exam",
  ],

  authors: [
    {
      name: "Booster Prep",
    },
  ],

  creator: "Booster Prep",

  openGraph: {
    title: "Booster Prep NCLEX",
    description:
      "Prepare. Practice. Pass NCLEX. Become a USRN.",
    type: "website",
    locale: "en_US",
    siteName: "Booster Prep NCLEX",
  },

  twitter: {
    card: "summary_large_image",
    title: "Booster Prep NCLEX",
    description:
      "Prepare. Practice. Pass NCLEX. Become a USRN.",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={[
          geistSans.variable,
          geistMono.variable,
          manrope.variable,
          "min-h-screen bg-background font-sans text-foreground antialiased",
        ].join(" ")}
      >
        {children}
      </body>
    </html>
  );
}