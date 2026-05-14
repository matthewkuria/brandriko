'use client'

import { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react'
import Link from 'next/link'

const faqs = [
  {
    id: 1,
    question: 'How long does it take to complete a website project?',
    answer: 'The timeline varies depending on complexity. A simple informational website might take 3-4 weeks, while a complex e-commerce platform could take 2-3 months. We provide a detailed timeline during our initial consultation.'
  },
  {
    id: 2,
    question: 'What information do you need from me to start a project?',
    answer: 'We need your business goals, target audience, brand guidelines, and content requirements. Our comprehensive onboarding questionnaire will guide you through providing all essentials.'
  },
  {
    id: 3,
    question: 'Do you provide hosting and domain registration?',
    answer: 'Yes, we offer both as part of our packages. We partner with reliable providers to ensure speed and security, but we can also work with your existing host if preferred.'
  },
  {
    id: 4,
    question: 'How do you measure marketing success?',
    answer: 'We track website traffic, conversion rates, lead generation, and ROI. You will receive regular reports with clear data-driven insights and recommendations.'
  },
  {
    id: 5,
    question: 'Do you offer maintenance after launch?',
    answer: 'Absolutely. We provide packages for security monitoring, regular updates, performance optimization, and technical support to keep your site performing optimally.'
  },
  {
    id: 6,
    question: 'What makes Brandriko different?',
    answer: 'We combine local market insight with international technical standards. We focus on results-driven solutions and long-term partnerships rather than one-off projects.'
  }
]

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1)

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    })
  }, [])

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="py-24 bg-gray-50/50" id="faq">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Header Section */}
        <div className="text-center mb-20" data-aos="fade-up">
          <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">Got Questions?</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our process, pricing, and how we help your business grow.
          </p>
        </div>
        
        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id
            return (
              <div
                key={faq.id}
                className={`group transition-all duration-300 rounded-2xl border ${
                  isOpen 
                    ? 'bg-white border-orange-200 shadow-xl shadow-orange-500/5' 
                    : 'bg-white/50 border-gray-100 hover:border-gray-200'
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <button
                  className="flex justify-between items-center w-full px-6 py-6 text-left"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                >
                  <span className={`text-lg font-bold transition-colors ${
                    isOpen ? 'text-orange-600' : 'text-gray-900'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full transition-all duration-300 ${
                    isOpen ? 'bg-orange-600 text-white rotate-180' : 'bg-gray-100 text-gray-500'
                  }`}>
                    <ChevronDown size={18} strokeWidth={3} />
                  </div>
                </button>
                
                <div
                  className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-[500px] opacity-100 pb-8' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="text-gray-600 leading-relaxed pt-2 border-t border-gray-50">
                    {faq.answer}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Footer */}
        <div 
          className="mt-20 relative overflow-hidden bg-gray-900 rounded-[2rem] p-10 md:p-14 text-center" 
          data-aos="zoom-in"
        >
          {/* Decorative background circle */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="w-16 h-16 bg-orange-600/20 text-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-8 rotate-12 group-hover:rotate-0 transition-transform">
              <HelpCircle size={32} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h3>
            <p className="text-gray-400 mb-10 max-w-lg mx-auto text-lg leading-relaxed">
              Can’t find what you’re looking for? Reach out to our friendly team and we’ll get back to you within 24 hours.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all active:scale-95 shadow-lg shadow-orange-600/20"
            >
              Contact Us <MessageCircle size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}