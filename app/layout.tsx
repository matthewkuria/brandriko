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
  title: "Brandriko Digital Solutions",
  description: "Brandriko Digital Solutions is a digital solutions company that specializes in web development, mobile app development, and digital marketing.",
  openGraph: {
    title: "Brandriko Digital Solutions",
    description:
      "Brandriko Digital Solutions is a digital solutions company that specializes in web development, mobile app development, and digital marketing.",
    url: "https://brandriko.com",
    siteName: "Brandriko Digital Solutions",
    images: [
      {
        url: "https://brandriko.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Brandriko Digital Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
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
