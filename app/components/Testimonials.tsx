'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'

const testimonials = [
  {
    id: 1,
    name: 'John Mwangi',
    position: 'CEO',
    company: 'Pyrowise Energy LTD',
    image: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
    quote: 'Brandriko transformed our online presence with a modern energy solutions website. Inquiries increased by 200% within 3 months, and the dynamic pricing calculator has been a game-changer for our sales team.',
    rating: 5,
    location: 'Nakuru, Kenya',
    service: 'Web Development & SEO',
    results: ['200% increase in inquiries', '60% faster page load', 'Mobile-first design'],
    projectLink: 'https://pyrowiseenergyltd.co.ke',
    projectImage: 'https://res.cloudinary.com/dwhba39zm/image/upload/v1767037074/screencapture-pyrowiseenergyltd_hmdmxt.png',
    date: 'November 2024'
  },
  {
    id: 2,
    name: 'Michael Jafrana',
    position: 'Managing Director',
    company: 'Jafrana Construction Works',
    image: 'https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg',
    quote: 'Our construction company needed a professional online presence to showcase our projects. Brandriko delivered an exceptional website that highlights our work beautifully. We\'ve seen a 150% increase in project inquiries.',
    rating: 5,
    location: 'Nairobi, Kenya',
    service: 'Web Development & UI/UX',
    results: ['150% more project inquiries', 'Interactive project galleries', 'Improved client communication'],
    projectLink: 'https://jafranaconstructionworks.co.ke',
    projectImage: 'https://res.cloudinary.com/dwhba39zm/image/upload/v1767108069/screencapture-jafranaconstructionworks-co-ke-2025-12-29-22_47_56_gyrmn5.png',
    date: 'December 2024'
  },
  {
    id: 3,
    name: 'Sarah Ochieng',
    position: 'Marketing Director',
    company: 'Safari Tours Kenya',
    image: 'https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383_1280.jpg',
    quote: 'The digital branding and social media strategy developed by Brandriko has doubled our online engagement. Our booking conversions have increased by 180% since implementing their recommendations.',
    rating: 5,
    location: 'Mombasa, Kenya',
    service: 'Digital Marketing & Branding',
    results: ['Double social media engagement', '180% booking increase', 'Consistent brand identity'],
    projectLink: '#',
    projectImage: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&q=80',
    date: 'October 2024'
  },
  {
    id: 4,
    name: 'David Kimani',
    position: 'Operations Manager',
    company: 'Restaurant Management System',
    image: 'https://cdn.pixabay.com/photo/2017/08/01/01/33/beanie-2562646_1280.jpg',
    quote: 'The restaurant management system developed by Brandriko streamlined our operations. Online orders increased by 220%, and inventory management is now 3x more efficient. Excellent understanding of the Kenyan restaurant market.',
    rating: 5,
    location: 'Nakuru, Kenya',
    service: 'Full Stack Development',
    results: ['220% online order increase', '3x inventory efficiency', 'Real-time analytics'],
    projectLink: '#',
    projectImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    date: 'September 2024'
  },
  {
    id: 5,
    name: 'Grace Wanjiru',
    position: 'CEO',
    company: 'Fitness Tracking App',
    image: 'https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072907_1280.jpg',
    quote: 'Our fitness app needed both mobile and web presence. Brandriko\'s team delivered an amazing cross-platform solution that has increased user retention by 75% and daily active users by 300%.',
    rating: 5,
    location: 'Nairobi, Kenya',
    service: 'Mobile & Web Development',
    results: ['75% user retention increase', '300% daily active users', 'Cross-platform compatibility'],
    projectLink: '#',
    projectImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    date: 'August 2024'
  },
  {
    id: 6,
    name: 'James Mwenda',
    position: 'CTO',
    company: 'Advanced Blogging Platform',
    image: 'https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg',
    quote: 'The blogging platform developed by Brandriko is robust and user-friendly. We\'ve seen a 400% increase in content creation and user engagement. Their technical expertise in modern web technologies is impressive.',
    rating: 5,
    location: 'Eldoret, Kenya',
    service: 'Web Development',
    results: ['400% content creation increase', 'Enhanced user experience', 'Scalable architecture'],
    projectLink: 'https://bl0gr.netlify.app',
    projectImage: 'https://res.cloudinary.com/dwhba39zm/image/upload/v1767108066/screencapture-bl0gr-netlify-app-2025-12-29-22_53_58_hv5b2s.png',
    date: 'July 2024'
  }
]

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    })

    let interval: NodeJS.Timeout
    if (autoplay) {
      interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % 3) // Show 3 at a time
      }, 5000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [autoplay])

  const visibleTestimonials = testimonials.slice(activeTestimonial, activeTestimonial + 3)

  return (
    <section className="py-20 bg-base-200" id="testimonials">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Client Success Stories
          </h1>
          <div className="divider divider-primary w-24 mx-auto"></div>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Discover how businesses across Kenya are achieving remarkable results with our digital solutions
          </p>
          
          {/* Stats Overview */}
          <div className="stats stats-vertical lg:stats-horizontal shadow bg-base-100 mb-8">
            <div className="stat place-items-center">
              <div className="stat-value text-primary">95%</div>
              <div className="stat-desc">Client Satisfaction</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-value text-secondary">200%</div>
              <div className="stat-desc">Avg. Growth</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-value text-accent">50+</div>
              <div className="stat-desc">Happy Clients</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-value">100%</div>
              <div className="stat-desc">On-time Delivery</div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={100 * index}
              onMouseEnter={() => setAutoplay(false)}
              onMouseLeave={() => setAutoplay(true)}
            >
              {/* Project Image Preview */}
              <figure className="h-48 overflow-hidden">
                <Image
                  src={testimonial.projectImage}
                  alt={`${testimonial.company} project developed by Brandriko Digital Solutions in ${testimonial.location}`}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <div className="badge badge-primary badge-sm">
                    {testimonial.service}
                  </div>
                </div>
              </figure>
              
              <div className="card-body">
                {/* Quote */}
                <div className="quote-icon relative">
                  <p className="text-base-content/80 italic text-lg mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
                
                {/* Results */}
                <div className="mb-6">
                  <h4 className="font-semibold text-sm text-base-content/60 mb-2">Key Results:</h4>
                  <div className="flex flex-wrap gap-2">
                    {testimonial.results.map((result, idx) => (
                      <span key={idx} className="badge badge-outline badge-sm">
                        {result}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Client Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-base-300">
                  <div className="avatar">
                    <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-base-content/60">{testimonial.position}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-base-content/40">{testimonial.company}</span>
                      <span className="text-xs text-base-content/40">•</span>
                      <span className="text-xs text-base-content/40">{testimonial.location}</span>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="rating rating-sm">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <input
                        key={i}
                        type="radio"
                        name={`rating-${testimonial.id}`}
                        className="mask mask-star-2 bg-orange-400"
                        readOnly
                      />
                    ))}
                  </div>
                </div>
                
                {/* Project Link */}
                {testimonial.projectLink !== '#' && (
                  <div className="card-actions justify-end mt-4">
                    <a
                      href={testimonial.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      <i className="fa-solid fa-external-link-alt mr-2"></i>
                      View Project
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <button
            onClick={() => {
              setAutoplay(false)
              setActiveTestimonial((prev) => (prev - 3 + testimonials.length) % testimonials.length)
            }}
            className="btn btn-circle btn-primary btn-outline"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          
          <div className="flex gap-2">
            {[...Array(Math.ceil(testimonials.length / 3))].map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false)
                  setActiveTestimonial(index * 3)
                }}
                className={`btn btn-xs ${activeTestimonial === index * 3 ? 'btn-primary' : 'btn-ghost'}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => {
              setAutoplay(false)
              setActiveTestimonial((prev) => (prev + 3) % testimonials.length)
            }}
            className="btn btn-circle btn-primary btn-outline"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
          
          <div className="ml-4">
            <div className="form-control">
              <label className="label cursor-pointer gap-2">
                <span className="label-text text-sm">Autoplay</span>
                <input
                  type="checkbox"
                  className="toggle toggle-primary"
                  checked={autoplay}
                  onChange={(e) => setAutoplay(e.target.checked)}
                />
              </label>
            </div>
          </div>
        </div>

        {/* Featured Case Study */}
        <div className="mb-16" data-aos="fade-up">
          <div className="card lg:card-side bg-gradient-secondary shadow-xl">
            <figure className="lg:w-2/5">
              <Image
                src="https://res.cloudinary.com/dwhba39zm/image/upload/v1767037074/screencapture-pyrowiseenergyltd_hmdmxt.png"
                alt="Pyrowise Energy LTD Success Story - 200% Increase in Inquiries with Brandriko Digital Solutions"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body lg:w-3/5">
              <div className="badge badge-primary">Featured Success Story</div>
              <h2 className="card-title text-3xl text-white">From 0 to 200% Growth</h2>
              <p className="text-white/80">
                How Pyrowise Energy LTD achieved a 200% increase in inquiries with a modern, mobile-first website developed by Brandriko Digital Solutions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="text-center">
                  <div className="stat">
                    <div className="stat-value text-4xl text-white">200%</div>
                    <div className="stat-desc text-white/70">More Inquiries</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="stat">
                    <div className="stat-value text-4xl text-white">60%</div>
                    <div className="stat-desc text-white/70">Faster Loading</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="stat">
                    <div className="stat-value text-4xl text-white">95%</div>
                    <div className="stat-desc text-white/70">Mobile Traffic</div>
                  </div>
                </div>
              </div>
              
              <div className="card-actions mt-6">
                <a
                  href="https://pyrowiseenergyltd.co.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <i className="fa-solid fa-chart-line mr-2"></i>
                  View Full Case Study
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center" data-aos="fade-up">
          <div className="alert alert-info max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <i className="fa-solid fa-award text-3xl mb-4 text-primary"></i>
              <h3 className="text-xl font-bold mb-2">Trusted by Businesses Across Kenya</h3>
              <p className="text-base-content/80">
                From startups in Nakuru to established companies in Nairobi, businesses trust Brandriko for digital transformation.
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {[
              'Nakuru Enterprises',
              'Nairobi Construction',
              'Mombasa Tourism',
              'Eldoret Tech',
              'Kisumu Retail'
            ].map((location, index) => (
              <div key={index} className="flex items-center gap-2">
                <i className="fa-solid fa-check text-success"></i>
                <span className="font-medium">{location}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <div className="card bg-gradient-primary text-primary-content shadow-xl">
            <div className="card-body py-12">
              <h2 className="card-title justify-center text-3xl md:text-4xl mb-4">
                Ready to Write Your Success Story?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join 50+ successful Kenyan businesses who have transformed their digital presence with Brandriko.
              </p>
              <div className="card-actions justify-center gap-4">
                <a href="/contact" className="btn btn-secondary btn-lg">
                  <i className="fa-solid fa-calendar-check mr-2"></i>
                  Book Free Consultation
                </a>
                <a href="tel:+254748421758" className="btn btn-outline btn-lg text-white hover:bg-white hover:text-secondary">
                  <i className="fa-solid fa-phone mr-2"></i>
                  Call: +254 748 421 758
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}