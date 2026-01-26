'use client'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function ServicesHero() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    })
  }, [])

  return (
    <section className="hero-gradient text-white relative">
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our Digital Services</h1>
          <p className="text-xl mb-8 text-gray-100">
            Comprehensive digital solutions tailored to help your business grow in today&apos;s competitive landscape.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  )
}