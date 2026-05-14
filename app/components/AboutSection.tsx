'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import AOS from 'aos'
// @ts-ignore
import 'aos/dist/aos.css'
import Link from 'next/link'

export default function AboutSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    })
  }, [])

  return (
    <section className="py-20" id="about">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Affordable Web Design in Kenya That Delivers Real Results
          </h1>

          <div className="divider divider-primary w-24 mx-auto"></div>

          <p className="text-lg max-w-3xl mx-auto mb-6">
            Looking for the best web design in Kenya? We create modern, high-performing websites that help businesses attract customers, increase conversions, and grow online.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

          {/* Text */}
          <div data-aos="zoom-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              The Best Web Design Company in Kenya for Growing Businesses
            </h2>

            <div className="space-y-4 text-base-content/80">

              <p>
                <strong>Brandriko Digital Solutions</strong> is a leading provider of affordable web design in Kenya, helping businesses build modern, responsive, and high-converting websites.
              </p>

              <p>
                We specialize in designing and developing websites and landing pages that not only look great but also turn visitors into customers. Our focus is on performance, user experience, and measurable business growth.
              </p>

              <p>
                Whether you are a startup, small business, or established company, we provide scalable digital solutions tailored to your needs—without breaking your budget.
              </p>

              <p>
                If you're searching for the best web design services in Kenya, we combine creative design with modern development technologies to deliver results that matter.
              </p>

            </div>
          </div>

          {/* Image */}
          <div className="relative" data-aos="zoom-out">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg"
                alt="Affordable web design in Kenya - Brandriko Digital Solutions building modern websites"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-content p-6 rounded-lg shadow-lg max-w-xs">
              <p className="text-xl font-bold">Affordable & High Quality</p>
              <p className="opacity-90">Web Design in Kenya</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="rounded-2xl p-8 shadow-xl mb-16" data-aos="fade-up">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Why Choose Our Web Design Services in Kenya?
            </h2>
            <div className="divider divider-primary w-24 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                title: 'Affordable Pricing',
                description: 'Get professional web design in Kenya at competitive and budget-friendly rates',
                icon: 'fa-money-bill-wave'
              },
              {
                title: 'Websites That Convert',
                description: 'We design websites focused on generating leads, customers, and sales',
                icon: 'fa-chart-line'
              },
              {
                title: 'Modern & Responsive',
                description: 'Fully responsive websites optimized for mobile, tablet, and desktop users',
                icon: 'fa-mobile-screen'
              },
              {
                title: 'Fast & SEO Optimized',
                description: 'Built for speed and optimized to rank on search engines like Google',
                icon: 'fa-rocket'
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`fa-solid ${item.icon} text-primary text-xl`}></i>
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-base-content/70">{item.description}</p>
              </div>
            ))}

          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16" data-aos="fade-up">
          <h3 className="text-xl font-bold mb-2">
            Ready to Get the Best Affordable Web Design in Kenya?
          </h3>

          <p className="text-base-content/80 mb-6">
            Let’s build a modern website that attracts customers and grows your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-primary">
              Start a Project
            </Link>

            <Link href="/portfolio" className="btn btn-outline btn-primary">
              View Our Work
            </Link>
          </div>

          <p className="text-sm text-base-content/60 mt-6">
            Based in Nakuru • Serving Clients Across Kenya
          </p>
        </div>

      </div>
    </section>
  )
}