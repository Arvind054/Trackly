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
          data-website-id='9e4545e9-6efe-4380-8698-c825481b9842'
          data-domain='http://localhost:3000'
          src="http://localhost:3000/analytics.js">
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
