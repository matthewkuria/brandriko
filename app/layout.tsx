import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
    <html lang="en" data-theme="light">
      <Navbar />
      <body
        className={`${poppins.className}  antialiased`}
      >
        
        {children}
      </body>
      <Footer />
    </html>
  );
}
