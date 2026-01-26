'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import AOS from 'aos'
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
    <section className="py-20 bg-base-200" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            About Brandriko Digital Solutions
          </h1>
          <div className="divider divider-primary w-24 mx-auto"></div>
          <p className="text-lg max-w-3xl mx-auto mb-6">
            Your Trusted Digital Partner in Nakuru, Kenya
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div data-aos="fade-right">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Transforming Businesses Through Digital Excellence
            </h2>
            <div className="space-y-4 text-base-content/80">
              <p>
                <strong>Brandriko Digital Solutions</strong> is a registered business in Kenya offering cutting-edge digital solutions. Based in Nakuru, we help businesses across Kenya grow through strategic digital branding, marketing, web technology, and modern solutions.
              </p>
              <p>
                With over 5 years of experience and 100+ successful projects for more than 50 satisfied clients, we&apos;ve established ourselves as a premier digital agency in the region.
              </p>
              <p>
                Our team combines local market knowledge with international design standards to deliver solutions that resonate with Kenyan audiences while maintaining global quality benchmarks.
              </p>
              <p>
                Whether you&apos;re a startup looking to establish your online presence or an established business seeking to expand digitally, we have the expertise to help you achieve your goals.
              </p>
            </div>
          </div>
          
          <div className="relative" data-aos="fade-left">
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
            <div className="card-body items-center text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <i className="fa-solid fa-binoculars text-secondary text-2xl"></i>
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
        <div className="bg-base-100 rounded-2xl p-8 shadow-xl mb-16" data-aos="fade-up">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Why Businesses in Nakuru Choose Brandriko
            </h2>
            <div className="divider divider-primary w-24 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Local Expertise',
                description: 'Deep understanding of Kenyan market dynamics and consumer behavior',
                icon: 'fa-map-marker-alt'
              },
              {
                title: 'Proven Results',
                description: 'Track record of 95% client satisfaction and measurable business growth',
                icon: 'fa-chart-line'
              },
              {
                title: 'End-to-End Solutions',
                description: 'Complete digital transformation from strategy to execution',
                icon: 'fa-sync-alt'
              },
              {
                title: 'Ongoing Support',
                description: 'Continuous optimization and support for long-term success',
                icon: 'fa-headset'
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

        {/* Our Impact */}
        <div className="mb-16" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Our Impact in Numbers
          </h2>
          <div className="stats stats-vertical lg:stats-horizontal shadow w-full bg-gradient-secondary text-primary-content">
            <div className="stat place-items-center">
              <div className="stat-value text-4xl md:text-5xl">50+</div>
              <div className="stat-desc">Satisfied Clients</div>
              <div className="stat-desc text-sm opacity-80">Across Kenya</div>
            </div>
            
            <div className="stat place-items-center">
              <div className="stat-value text-4xl md:text-5xl">100+</div>
              <div className="stat-desc">Projects Completed</div>
              <div className="stat-desc text-sm opacity-80">Successful Deliveries</div>
            </div>
            
            <div className="stat place-items-center">
              <div className="stat-value text-4xl md:text-5xl">5+</div>
              <div className="stat-desc">Years Experience</div>
              <div className="stat-desc text-sm opacity-80">Industry Expertise</div>
            </div>
            
            <div className="stat place-items-center">
              <div className="stat-value text-4xl md:text-5xl">95%</div>
              <div className="stat-desc">Client Satisfaction</div>
              <div className="stat-desc text-sm opacity-80">Repeat Business Rate</div>
            </div>
          </div>
        </div>

        {/* Our Expertise */}
        <div className="bg-base-100 rounded-2xl p-8 shadow-xl" data-aos="fade-up">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Our Areas of Expertise
            </h2>
            <div className="divider divider-primary w-24 mx-auto"></div>
            <p className="text-lg max-w-3xl mx-auto mb-6">
              Specialized services designed for Kenyan businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Web Development',
                description: 'Responsive websites optimized for Kenyan internet speeds',
                skills: ['Next.js', 'React', 'SEO', 'Mobile-First']
              },
              {
                title: 'Digital Branding',
                description: 'Brand identities that resonate with Kenyan audiences',
                skills: ['Logo Design', 'Brand Strategy', 'Visual Identity']
              },
              {
                title: 'Digital Marketing',
                description: 'Targeted campaigns for Kenyan market penetration',
                skills: ['SEO', 'Social Media', 'Google Ads', 'Content']
              },
              {
                title: 'E-commerce Solutions',
                description: 'Online stores with M-Pesa integration',
                skills: ['Shopify', 'WooCommerce', 'Payment Gateways']
              },
              {
                title: 'Graphic Design',
                description: 'Visual content that communicates effectively',
                skills: ['Print Design', 'Digital Assets', 'UI/UX']
              },
              {
                title: 'Local SEO',
                description: 'Dominate local search results in Kenya',
                skills: ['Google My Business', 'Local Listings', 'Reviews']
              }
            ].map((expertise, index) => (
              <div key={index} className="card bg-base-200 shadow-sm">
                <div className="card-body">
                  <h3 className="card-title text-lg">{expertise.title}</h3>
                  <p className="text-sm text-base-content/70 mb-4">{expertise.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {expertise.skills.map((skill, idx) => (
                      <span key={idx} className="badge badge-outline badge-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16" data-aos="fade-up">
          <div className="alert alert-info max-w-3xl mx-auto mb-8">
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