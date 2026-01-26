'use client'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We begin by understanding your business goals, target audience, and competition to develop a strategic plan.',
    icon: 'fa-magnifying-glass',
    direction: 'left'
  },
  {
    number: '02',
    title: 'Design & Branding',
    description: 'Our creative team develops visually stunning designs that align with your brand and appeal to your target audience.',
    icon: 'fa-paint-brush',
    direction: 'right'
  },
  {
    number: '03',
    title: 'Development & Launch',
    description: 'We build and deploy your project using cutting-edge technologies, ensuring optimal performance and user experience.',
    icon: 'fa-rocket',
    direction: 'left'
  },
  {
    number: '04',
    title: 'Growth & Support',
    description: 'We provide ongoing support and optimization to ensure your digital presence continues to grow and evolve.',
    icon: 'fa-chart-line',
    direction: 'right'
  }
]

export default function ProcessSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    })
  }, [])

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">Our Process</h2>
          <div className="w-24 h-1 bg-orange mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a proven methodology to ensure your project is completed efficiently and effectively.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-orange bg-opacity-20 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 lg:space-y-0">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className={`relative lg:flex lg:items-center lg:justify-between ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                data-aos={step.direction === 'left' ? 'fade-right' : 'fade-left'}
              >
                {/* Step content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'} mb-8 lg:mb-0`}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-deep-blue">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-orange bg-opacity-10 flex items-center justify-center">
                      <i className={`fa-solid ${step.icon} text-orange`}></i>
                    </div>
                  </div>
                </div>
                
                {/* Timeline dot for desktop */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 w-6 h-6 rounded-full bg-orange transform -translate-x-1/2 -translate-y-1/2 z-10"></div>
                
                {/* Empty div for spacing on alternating sides */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}