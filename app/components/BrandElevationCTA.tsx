'use client'

import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function BrandElevationCTA() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    })
  }, [])

  return (
    <section className="py-20 bg-gradient-to-r from-deep-blue to-dark-navy text-white">
      <div className="container mx-auto px-4 text-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Let&apos;s work together to create a powerful digital presence that drives results for your business.
        </p>
        <Link
          href="/contact"
          className="btn-gradient px-10 py-4 rounded-full text-white font-medium inline-block text-lg hover:no-underline"
        >
          Get Free Consultation <i className="fa-solid fa-arrow-right ml-2"></i>
        </Link>
      </div>
    </section>
  )
}