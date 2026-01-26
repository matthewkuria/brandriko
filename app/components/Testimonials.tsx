'use client'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    name: 'John Kamau',
    position: 'CEO, Nakuru Enterprises',
    image: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
    quote: 'Brandriko transformed our online presence. Website increased inquiries by 300% in 3 months. Professional, creative team.',
    rating: 5
  },
  {
    name: 'Sarah Odhiambo',
    position: 'Marketing Director, Safari Tours',
    image: 'https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383_1280.jpg',
    quote: 'The branding work exceeded our expectations. Our social media engagement has doubled since working with Brandriko.',
    rating: 5
  },
  {
    name: 'David Njoroge',
    position: 'Founder, Tech Solutions Kenya',
    image: 'https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg',
    quote: 'As a tech company, we needed a website that reflected our innovation. Brandriko delivered a stunning solution.',
    rating: 5
  }
]

export default function Testimonials() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-orange mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-xl shadow-lg p-8 relative quote-icon"
              data-aos="fade-up"
              data-aos-delay={100 * index}
            >
              <div className="flex justify-center mb-6">
                <div className="relative w-20 h-20">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover border-4 border-orange"
                    sizes="80px"
                  />
                </div>
              </div>
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star text-yellow-400"></i>
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-center italic">&quot;{testimonial.quote}&quot;</p>
              <div className="text-center">
                <h4 className="font-bold text-deep-blue">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}