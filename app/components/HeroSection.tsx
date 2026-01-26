'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    })
  }, [])

  return (
    <section className="hero-gradient text-white relative overflow-hidden min-h-screen flex items-center">
      {/* <div className="absolute inset-0 bg-bla bg-opacity-50"></div> */}
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left" data-aos="fade-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 mt-6">
              Elevate Your Brand with Powerful Digital Solutions
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              We help businesses stand out with strategic branding, stunning web design, 
              and results-driven digital marketing. Based in Nakuru, serving all of Kenya
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="btn-gradient px-8 py-4 rounded-full text-white font-medium text-center"
              >
                Get Started
              </Link>
              <Link
                href="/portfolio"
                className="btn-outline px-8 py-4 rounded-full font-medium border-2 text-white border-white hover:bg-white hover:text-deep-blue text-center"
              >
                View Our Work
              </Link>
            </div>
          </div>
          <div className="hidden lg:block" data-aos="fade-left">
            <div className="relative w-full h-[400px]">
              <Image
                src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"
                alt="Web Design Laptop"
                fill
                className="rounded-lg shadow-2xl object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  )
}