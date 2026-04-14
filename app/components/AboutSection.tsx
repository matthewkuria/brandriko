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
    <section className="py-20 " id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
             Hospitality Web Design & Digital Solutions in Kenya
          </h1>
          <div className="divider divider-primary w-24 mx-auto"></div>
          <p className="text-lg max-w-3xl mx-auto mb-6">
              Helping Hotels, Restaurants & Hospitality Brands Grow Through Smart Digital Solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div data-aos="fade-down">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Transforming Businesses Through Digital Excellence
            </h2>
            <div className="space-y-4">
              <p>
                <strong>Brandriko Digital Solutions</strong> is a hospitality-focused web design and digital solutions agency based in Nakuru, Kenya. We specialize in building modern websites, booking systems, and digital platforms for hotels, restaurants, and hospitality businesses.
              </p>

              <p>
                Our solutions are designed to help hospitality brands increase online visibility, attract more customers, and drive bookings through high-performing, mobile-friendly websites.
              </p>

              <p>
                With over 5 years of experience and many successful projects, we combine local market expertise with global design standards to deliver results that matter in the competitive hospitality industry.
              </p>

              <p>
                Whether you are running a hotel, restaurant, Airbnb, or resort, we help you transform your digital presence into a powerful growth engine.
              </p>
            </div>
          </div>
          
          <div className="relative" data-aos="fade-up">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg"
                alt="Brandriko Digital Solutions Team in Nakuru, Kenya working on web design and digital marketing projects"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-content p-6 rounded-lg shadow-lg max-w-xs">
              <p className="text-xl font-bold">5+ Years Experience</p>
              <p className="opacity-90">In Digital Solutions</p>
            </div>
          </div>
        </div>

        {/* Our Mission & Vision */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="card bg-base-100 shadow-xl" data-aos="fade-up" data-aos-delay="100">
            <div className="card-body items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <i className="fa-solid fa-bullseye text-primary text-2xl"></i>
              </div>
              <h3 className="card-title text-xl">Our Mission</h3>
              <p className="text-base-content/70">
                To empower Kenyan businesses with innovative digital solutions that drive measurable growth and create lasting impact.
              </p>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-xl" data-aos="fade-up" data-aos-delay="200">
            <div className="card-body items-center  text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <i className="fa-solid fa-binoculars text-primary text-2xl"></i>
              </div>
              <h3 className="card-title text-xl">Our Vision</h3>
              <p className="text-base-content/70">
                To be East Africa&apos;s leading digital solutions provider, recognized for excellence, innovation, and transformative results.
              </p>
            </div>
          </div>
          
          <div className="card bg-base-100 shadow-xl" data-aos="fade-up" data-aos-delay="300">
            <div className="card-body items-center text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <i className="fa-solid fa-handshake text-accent text-2xl"></i>
              </div>
              <h3 className="card-title text-xl">Our Values</h3>
              <div className="space-y-2 text-sm text-base-content/70 text-left">
                <p className="flex items-center">
                  <i className="fa-solid fa-check text-success mr-2"></i>
                  Excellence in Execution
                </p>
                <p className="flex items-center">
                  <i className="fa-solid fa-check text-success mr-2"></i>
                  Client-First Approach
                </p>
                <p className="flex items-center">
                  <i className="fa-solid fa-check text-success mr-2"></i>
                  Innovation & Creativity
                </p>
                <p className="flex items-center">
                  <i className="fa-solid fa-check text-success mr-2"></i>
                  Integrity & Transparency
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className=" rounded-2xl p-8 shadow-xl mb-16" data-aos="fade-up">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Why Hotels & Restaurants in Kenya Choose Brandriko
            </h2>
            <div className="divider divider-primary w-24 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Local Hospitality Expertise',
                description: 'Deep understanding of the Kenyan hospitality market and customer behavior',
                icon: 'fa-map-marker-alt'
              },
              {
                title: 'More Bookings',
                description: 'We design websites and systems that increase reservations and customer engagement',
                icon: 'fa-calendar-check'
              },
              {
                title: 'Complete Digital Solutions',
                description: 'From websites to booking systems and QR ordering for restaurants',
                icon: 'fa-code'
              },
              {
                title: 'Ongoing Growth Support',
                description: 'We continuously optimize your digital presence for better results',
                icon: 'fa-chart-line'
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`fa-solid ${item.icon} text-primary text-xl`}></i>
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
       

        {/* CTA */}
        <div className="text-center mt-16" data-aos="fade-up">
          <div className="max-w-3xl mx-auto mb-8">
            <div className="flex flex-col items-center">
              <i className="fa-solid fa-comments text-3xl mb-4"></i>
              <h3 className="text-xl font-bold mb-2">Ready to Transform Your Business?</h3>
              <p className="text-base-content/80">
                Join 50+ successful businesses who have elevated their digital presence with Brandriko
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/portfolio" className="btn btn-outline btn-primary">
              <i className="fa-solid fa-eye mr-2"></i>
              View Our Portfolio
            </Link>
            <Link href="/contact" className="btn btn-primary">
              <i className="fa-solid fa-calendar-check mr-2"></i>
              Schedule Free Consultation
            </Link>
          </div>
          <p className="text-sm text-base-content/60 mt-6">
            Based in Nakuru • Serving All of Kenya • Registered Business in Kenya
          </p>
        </div>
      </div>
    </section>
  )
}