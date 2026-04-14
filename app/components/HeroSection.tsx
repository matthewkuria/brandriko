'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'
import hotelBg from "@/public/hotelbg.jpg"

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    })
  }, [])

  return (
    /* Using bg-gradient-secondary to match your new brand palette */
    <section className="bg-brand-charcoal text-white relative overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="text-center lg:text-left" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Hospitality Web Design Agency  <span className="text-brand-orange">in Kenya</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              We build modern websites, booking systems, and digital solutions for hotels, restaurants, 
              and hospitality businesses to increase visibility, attract more customers, and drive bookings.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="btn-gradient px-8 py-4 rounded-full text-white font-bold text-center hover:shadow-lg transition-all"
              >
                Explore Services
              </Link>
              <Link
                href="/portfolio"
                /* Updated to use brand-orange border variables */
                className="border-2 border-brand-orange text-white hover:bg-brand-orange hover:text-white px-8 py-4 rounded-full font-bold transition-all text-center"
              >
                View Our Work
              </Link>
            </div>
          </div>

          <div className="hidden lg:block" data-aos="fade-down">
            <div className="relative w-full h-[450px]">
              <Image
                src={hotelBg}
                alt="Web Design Laptop"
                fill
                className="rounded-xl shadow-2xl object-cover border border-white/10"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom fade effect to transition into the next white section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}