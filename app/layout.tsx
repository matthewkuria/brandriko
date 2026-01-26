import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import CookieConsent from '@/components/ui/CookieConsent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brandriko Digital Solutions | Best Web Design Agency in Nakuru, Kenya',
  description: 'Leading web development, graphic design, and digital marketing agency in Nakuru. We create stunning websites that drive business growth across Kenya',
  keywords: 'website design Nakuru, web development Kenya, graphic design Nakuru, digital marketing Kenya, SEO services Nakuru, Brandriko',
  openGraph: {
    title: 'Brandriko Digital Solutions | Best Web Design Agency in Nakuru, Kenya',
    description: 'Leading web development, graphic design, and digital marketing agency in Nakuru. We create stunning websites that drive business growth across Kenya',
    images: ['https://cdn.pixabay.com/photo/2017/05/09/13/33/laptop-2298286_1280.jpg'],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://brandrikodigital.co.ke" />
        <meta name="robots" content="index, follow" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" async />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                if (typeof AOS !== 'undefined') {
                  AOS.init({
                    duration: 800,
                    once: true,
                    offset: 100
                  });
                }
              });
            `,
          }}
        />
      </body>
    </html>
  )
}