'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'

const services = [
  {
    title: 'Website Design & Development',
    icon: 'fa-globe',
    description: 'Professional, responsive websites built with modern technologies like Next.js and React. Perfect for businesses in Kenya looking to establish or upgrade their online presence.',
    color: 'bg-primary/10',
    textColor: 'text-primary',
    features: ['Mobile-First Design', 'SEO Optimization', 'Fast Loading', 'Kenyan Hosting']
  },
  {
    title: 'Graphics & Brand Identity',
    icon: 'fa-palette',
    description: 'Complete brand identity packages including logo design, business cards, social media graphics, and marketing materials tailored for Kenyan businesses.',
    color: 'bg-secondary/10',
    textColor: 'text-secondary',
    features: ['Logo Design', 'Brand Guidelines', 'Print Materials', 'Digital Assets']
  },
  {
    title: 'Social Media Setup & Branding',
    icon: 'fa-hashtag',
    description: 'Professional setup of social media profiles with custom graphics, content strategy, and optimization for platforms popular in Kenya.',
    color: 'bg-accent/10',
    textColor: 'text-accent',
    features: ['Profile Setup', 'Content Strategy', 'Brand Consistency', 'Audience Growth']
  },
  {
    title: 'Google Business Optimization',
    icon: 'fa-store',
    description: 'Complete Google Business Profile setup and optimization to help your business appear in local searches across Kenya.',
    color: 'bg-primary/10',
    textColor: 'text-primary',
    features: ['Profile Creation', 'Local SEO', 'Review Management', 'Photo Optimization']
  },
  {
    title: 'Search Engine Optimization (SEO)',
    icon: 'fa-magnifying-glass',
    description: 'Comprehensive SEO strategies tailored for the Kenyan market to improve your website&apos;s visibility in search results.',
    color: 'bg-secondary/10',
    textColor: 'text-secondary',
    features: ['Keyword Research', 'Local SEO', 'Technical SEO', 'Content Optimization']
  },
  {
    title: 'Digital Marketing Strategy',
    icon: 'fa-bullhorn',
    description: 'Data-driven marketing strategies to help Kenyan businesses reach their target audience and achieve measurable growth.',
    color: 'bg-accent/10',
    textColor: 'text-accent',
    features: ['Campaign Planning', 'Audience Targeting', 'Performance Tracking', 'ROI Analysis']
  }
]

export default function ServicesShowcase() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    })
  }, [])

  return (
    <section className="py-20 bg-base-100" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Digital Services</h2>
          <div className="divider divider-primary w-24 mx-auto"></div>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Comprehensive solutions designed specifically for businesses in Nakuru and across Kenya
          </p>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="stat">
              <div className="stat-title">Delivery Time</div>
              <div className="stat-value text-primary text-2xl">2-6 Weeks</div>
              <div className="stat-desc">Depending on package</div>
            </div>
            <div className="stat">
              <div className="stat-title">Support Included</div>
              <div className="stat-value text-secondary text-2xl">Free</div>
              <div className="stat-desc">With every package</div>
            </div>
            <div className="stat">
              <div className="stat-title">Client Satisfaction</div>
              <div className="stat-value text-accent text-2xl">95%</div>
              <div className="stat-desc">Happy clients</div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={100 * index}
            >
              <div className="card-body">
                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <i className={`fa-solid ${service.icon} ${service.textColor} text-2xl`}></i>
                  </div>
                  <div>
                    <h3 className="card-title text-xl">{service.title}</h3>
                    <p className="text-sm text-base-content/70">Part of our complete packages</p>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-base-content/80 mb-4">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="mb-6">
                  <div className="text-sm font-semibold text-base-content/60 mb-2">Includes:</div>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="badge badge-outline badge-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action */}
                <div className="card-actions justify-between items-center">
                  <Link 
                    href="/services#packages" 
                    className="link link-primary font-medium"
                  >
                    View Packages <i className="fa-solid fa-arrow-right ml-2"></i>
                  </Link>
                  <div className="text-xs text-base-content/50">
                    <i className="fa-solid fa-check text-success mr-1"></i>
                    Available in all packages
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Package Integration Note */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <div className="alert alert-info max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <i className="fa-solid fa-boxes-packing text-2xl mb-2"></i>
              <h3 className="font-bold text-lg mb-2">All Services Included in Complete Packages</h3>
              <p className="text-sm">
                Get website design, graphics, social media setup, and Google Business optimization together for maximum impact
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Link href="#packages" className="btn btn-primary">
              <i className="fa-solid fa-gem mr-2"></i>
              View Complete Packages
            </Link>
            <Link href="/contact" className="btn btn-outline">
              <i className="fa-solid fa-question-circle mr-2"></i>
              Ask About Custom Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}