import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from "@/components/session-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trackly - Modern Website Analytics Platform",
  description: "Track and analyze your website performance with powerful, real-time analytics. Get insights that matter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-website-id='a91cc974-45e6-4cb4-aa3d-0cd81a73b91b'
          data-domain='https://trackly-beta.vercel.app/'
          src="https://trackly-beta.vercel.app/analytics.js">
        </script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          <Toaster />
          <Header />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
