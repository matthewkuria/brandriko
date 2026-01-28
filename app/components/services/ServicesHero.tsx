'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function ServicesHero() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    })
  }, [])

  return (
    <section className="relative overflow-hidden text-white ">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-secondary"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left mt-10" data-aos="fade-right">
              <div className="badge badge-primary badge-lg mb-6">
                Digital Solutions in Kenya
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Complete <span className="text-primary">Web & Graphics</span> Design Packages
              </h1>
              
              <p className="text-xl text-base-content/90 mb-8 leading-relaxed">
                Professional website design, brand identity creation, social media setup, 
                and Google Business optimization—all in one comprehensive package. 
                Perfect for businesses in Nakuru and across Kenya.
              </p>

              {/* Key Features List */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: 'fa-globe', text: 'Responsive Websites' },
                  { icon: 'fa-palette', text: 'Brand Identity' },
                  { icon: 'fa-hashtag', text: 'Social Media Setup' },
                  { icon: 'fa-store', text: 'Google Business' }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      <i className={`fa-solid ${feature.icon} text-primary`}></i>
                    </div>
                    <span className="font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">95%</div>
                  <div className="text-sm opacity-90">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">50+</div>
                  <div className="text-sm opacity-90">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">5+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#packages" className="btn btn-primary btn-lg">
                  <i className="fa-solid fa-gem mr-2"></i>
                  View Packages
                </a>
                <a href="#contact" className="btn btn-outline btn-lg text-white hover:bg-white hover:text-secondary">
                  <i className="fa-solid fa-phone mr-2"></i>
                  Free Consultation
                </a>
              </div>

              <p className="text-sm opacity-80 mt-6">
                <i className="fa-solid fa-check text-success mr-2"></i>
                Based in Nakuru, Kenya • Serving Nationwide
              </p>
            </div>

            {/* Right Column - Visual */}
            <div className="relative" data-aos="fade-left" data-aos-delay="200">
              <div className="relative w-full h-[500px]">
                <Image
                  src="https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_1280.png"
                  alt="Web design, graphics design, social media and Google Business services for Kenyan businesses - Brandriko Digital Solutions"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 card bg-base-100 shadow-xl w-64" data-aos="fade-up" data-aos-delay="400">
                <div className="card-body p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-bolt text-primary"></i>
                    </div>
                    <div>
                      <h3 className="font-bold">Fast Delivery</h3>
                      <p className="text-sm opacity-70">2-6 weeks</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 card bg-base-100 shadow-xl w-64" data-aos="fade-up" data-aos-delay="600">
                <div className="card-body p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-shield-alt text-secondary"></i>
                    </div>
                    <div>
                      <h3 className="font-bold">Free Support</h3>
                      <p className="text-sm opacity-70">Included in every package</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#packages" className="btn btn-circle btn-ghost">
          <i className="fa-solid fa-chevron-down text-2xl"></i>
        </a>
      </div>
    </section>
  )
}