'use client'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Link from 'next/link'

export default function ServicesCTA() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    })
  }, [])

  return (
    <>
      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-deep-blue to-dark-navy text-white">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Let&apos;s discuss your project and create a tailored solution that meets your specific needs.
          </p>
          <Link
            href="/contact"
            className="btn-gradient px-10 py-4 rounded-full text-white font-medium inline-block text-lg hover:no-underline"
          >
            Contact Us Today <i className="fa-solid fa-arrow-right ml-2"></i>
          </Link>
        </div>
      </section>

      {/* Services Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">Choose Your Package</h2>
            <div className="w-24 h-1 bg-orange mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the perfect package for your business needs, or customize a solution that fits your requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="bg-orange text-white py-6 px-8 text-center">
                <h3 className="text-2xl font-bold">Starter Package</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">KES 15,000</span>
                  <span className="text-orange-200 ml-2">/project</span>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-green-500 mr-3"></i>
                    <span>Basic Logo Design</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-green-500 mr-3"></i>
                    <span>5-Page Website</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-green-500 mr-3"></i>
                    <span>Mobile Responsive</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-green-500 mr-3"></i>
                    <span>Basic SEO Setup</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <i className="fa-solid fa-xmark mr-3"></i>
                    <span>E-commerce Features</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <i className="fa-solid fa-xmark mr-3"></i>
                    <span>Advanced Analytics</span>
                  </li>
                </ul>
                <Link
                  href="/contact?package=starter"
                  className="btn-outline w-full text-center py-3 rounded-full font-medium block hover:no-underline"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Professional Package (Featured) */}
            <div
              className="bg-white rounded-xl shadow-xl overflow-hidden transform scale-105 relative border-2 border-orange"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="absolute top-0 right-0 bg-orange text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                MOST POPULAR
              </div>
              <div className="bg-deep-blue text-white py-6 px-8 text-center">
                <h3 className="text-2xl font-bold">Professional Package</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">KES 50,000</span>
                  <span className="text-blue-200 ml-2">/project</span>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-green-500 mr-3"></i>
                    <span>Complete Brand Identity</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-green-500 mr-3"></i>
                    <span>10+ Page Website</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-green-500 mr-3"></i>
                    <span>E-commerce Ready</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-green-500 mr-3"></i>
                    <span>Advanced SEO Strategy</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-green-500 mr-3"></i>
                    <span>Social Media Integration</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-green-500 mr-3"></i>
                    <span>3 Months Support</span>
                  </li>
                </ul>
                <Link
                  href="/contact?package=professional"
                  className="btn-gradient w-full text-center py-3 rounded-full font-medium block hover:no-underline"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Enterprise Package */}
            <div
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="bg-dark-navy text-white py-6 px-8 text-center">
                <h3 className="text-2xl font-bold">Enterprise Package</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">KES 100,000+</span>
                  <span className="text-gray-300 ml-2">/project</span>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-green-500 mr-3"></i>
                    <span>Custom Solution Design</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-green-500 mr-3"></i>
                    <span>Unlimited Pages</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-green-500 mr-3"></i>
                    <span>Advanced E-commerce</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-green-500 mr-3"></i>
                    <span>Complete Digital Marketing</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-green-500 mr-3"></i>
                    <span>Priority Support</span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-green-500 mr-3"></i>
                    <span>6 Months Maintenance</span>
                  </li>
                </ul>
                <Link
                  href="/contact?package=enterprise"
                  className="btn-outline w-full text-center py-3 rounded-full font-medium block hover:no-underline"
                >
                  Contact for Quote
                </Link>
              </div>
            </div>
          </div>

          {/* Custom Solutions */}
          <div className="mt-16 text-center" data-aos="fade-up">
            <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
              <i className="fa-solid fa-lightbulb text-orange text-2xl mr-3"></i>
              <div>
                <h4 className="font-bold text-deep-blue">Need a Custom Solution?</h4>
                <p className="text-gray-600 text-sm">
                  We can create a tailored package specifically for your business needs.
                </p>
              </div>
              <Link
                href="/contact?package=custom"
                className="ml-6 text-orange font-medium hover:underline"
              >
                Request Custom Quote <i className="fa-solid fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Reminder */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">Our Simple Process</h2>
            <div className="w-24 h-1 bg-orange mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Free initial consultation to understand your needs',
                icon: 'fa-comments'
              },
              {
                step: '02',
                title: 'Proposal',
                description: 'Detailed proposal with timeline and pricing',
                icon: 'fa-file-contract'
              },
              {
                step: '03',
                title: 'Development',
                description: 'Design, development, and regular updates',
                icon: 'fa-laptop-code'
              },
              {
                step: '04',
                title: 'Launch',
                description: 'Deployment and ongoing support',
                icon: 'fa-rocket'
              }
            ].map((step, index) => (
              <div
                key={step.step}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={100 * index}
              >
                <div className="w-20 h-20 bg-orange rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-deep-blue mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}