'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'
import heroImage from "@/public/hotelbg.jpg"

export default function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    })
  }, [])

  return (
    <section className="relative bg-brand-charcoal text-white min-h-screen flex items-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Web design showcase"
          fill
          priority
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-3xl text-center lg:text-left" data-aos="fade-up">

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            We Design & Build Websites That{" "}
            <span className="text-brand-orange">Convert Visitors Into Customers</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            At Brandriko Digital Solutions, we create modern, high-performing websites and landing pages
            that help businesses attract customers, improve user experience, and grow online.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

            <Link
              href="/contact"
              className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-all text-center shadow-lg"
            >
              Start a Project
            </Link>

            <Link
              href="/portfolio"
              className="border border-white/30 hover:border-brand-orange px-8 py-4 rounded-full font-semibold transition-all text-center hover:text-brand-orange"
            >
              View Our Work
            </Link>

          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/10 to-transparent"></div>
    </section>
  )
}