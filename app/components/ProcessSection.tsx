'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We understand your business, goals, and target audience to create a clear strategy for your website.',
    icon: 'fa-comments',
  },
  {
    number: '02',
    title: 'Design & Development',
    description: 'We design and build a modern, responsive website focused on user experience and conversions.',
    icon: 'fa-laptop-code',
  },
  {
    number: '03',
    title: 'Testing & Launch',
    description: 'Your website is tested across devices and optimized for speed before going live.',
    icon: 'fa-rocket',
  },
  {
    number: '04',
    title: 'Support & Growth',
    description: 'We provide ongoing support and improvements to help your business grow online.',
    icon: 'fa-chart-line',
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
    <section className="py-20 bg-base-100" id="process">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Web Design Process in Kenya
          </h2>

          <div className="divider divider-primary w-24 mx-auto"></div>

          <p className="text-lg max-w-2xl mx-auto">
            A simple and effective process we use to deliver affordable web design in Kenya that helps businesses grow and attract customers.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className="card bg-base-200 shadow hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card-body text-center">

                <div className="w-14 h-14 bg-primary text-primary-content rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {step.number}
                </div>

                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className={`fa-solid ${step.icon} text-primary`}></i>
                </div>

                <h3 className="font-bold text-lg mb-2">{step.title}</h3>

                <p className="text-sm text-base-content/70">
                  {step.description}
                </p>

              </div>
            </div>
          ))}

        </div>

        {/* Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-6" data-aos="fade-up">

          {[
            {
              title: 'Fast Delivery',
              desc: 'Get your website designed and launched in weeks, not months.',
              icon: 'fa-clock'
            },
            {
              title: 'Affordable Pricing',
              desc: 'Professional web design services in Kenya at competitive rates.',
              icon: 'fa-money-bill-wave'
            },
            {
              title: 'Results-Driven',
              desc: 'We build websites that attract customers and increase conversions.',
              icon: 'fa-chart-line'
            }
          ].map((item, i) => (
            <div key={i} className="card bg-base-200 shadow-sm">
              <div className="card-body items-center text-center">

                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <i className={`fa-solid ${item.icon} text-primary`}></i>
                </div>

                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-sm text-base-content/70">{item.desc}</p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}