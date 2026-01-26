'use client'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Link from 'next/link'

const services = [
  {
    title: 'Digital Branding',
    icon: 'fa-pen-to-square',
    description: 'Craft compelling brand identity that resonates with your audience and sets you apart from competitors.',
    color: 'bg-blue-100',
    textColor: 'text-blue-600'
  },
  {
    title: 'Graphic Design',
    icon: 'fa-palette',
    description: 'Create stunning visuals that communicate your brand message effectively across all platforms.',
    color: 'bg-purple-100',
    textColor: 'text-purple-600'
  },
  {
    title: 'Social Media Branding',
    icon: 'fa-share-nodes',
    description: 'Build powerful social presence with cohesive branding and strategic content that engages your audience.',
    color: 'bg-pink-100',
    textColor: 'text-pink-600'
  },
  {
    title: 'Web Development',
    icon: 'fa-code',
    description: 'Develop responsive SEO-friendly websites with NextJS that convert visitors into customers.',
    color: 'bg-orange-100',
    textColor: 'text-orange-600'
  },
  {
    title: 'SEO Services',
    icon: 'fa-magnifying-glass',
    description: 'Rank higher on Google with our proven SEO strategies tailored to your business goals.',
    color: 'bg-green-100',
    textColor: 'text-green-600'
  },
  {
    title: 'Digital Marketing',
    icon: 'fa-bullhorn',
    description: 'Comprehensive growth strategies that drive traffic, generate leads, and increase revenue.',
    color: 'bg-red-100',
    textColor: 'text-red-600'
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
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-orange mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions tailored to help your business grow in today&apos;s competitive market.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card service-card p-8 rounded-xl shadow-lg"
              data-aos="fade-up"
              data-aos-delay={100 * index}
            >
              <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mb-6`}>
                <i className={`fa-solid ${service.icon} ${service.textColor} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-deep-blue mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link href="/services" className="text-orange font-medium flex items-center hover:underline">
                Learn More
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}