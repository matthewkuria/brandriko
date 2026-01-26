'use client'

import { useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const faqs = [
  {
    id: 1,
    question: 'How long does it take to complete a website project?',
    answer: 'The timeline for website projects varies depending on complexity and scope. A simple informational website might take 3-4 weeks, while a complex e-commerce platform could take 2-3 months. During our initial consultation, we\'ll provide a detailed timeline based on your specific requirements.'
  },
  {
    id: 2,
    question: 'What information do you need from me to start a project?',
    answer: 'To get started, we\'ll need information about your business goals, target audience, brand guidelines (if available), content requirements, and any specific functionality you need. We\'ve developed a comprehensive onboarding questionnaire that guides you through providing all the essential information we need to begin your project.'
  },
  {
    id: 3,
    question: 'Do you provide hosting and domain registration?',
    answer: 'Yes, we offer domain registration and hosting services as part of our web development packages. We partner with reliable hosting providers to ensure your website remains secure, fast, and always online. We can also work with your existing hosting provider if you prefer.'
  },
  {
    id: 4,
    question: 'How do you measure the success of digital marketing campaigns?',
    answer: 'We measure campaign success through multiple metrics aligned with your business goals. These typically include website traffic, conversion rates, lead generation, engagement metrics, and ultimately, return on investment (ROI). We provide regular reports with clear insights and recommendations based on data analysis.'
  },
  {
    id: 5,
    question: 'Do you offer maintenance and support after project completion?',
    answer: 'Absolutely! We offer various maintenance packages to keep your digital assets secure, updated, and performing optimally. Our support packages include regular updates, security monitoring, content updates, performance optimization, and technical support. We recommend ongoing maintenance for all websites and digital properties.'
  },
  {
    id: 6,
    question: 'What makes Brandriko different from other agencies?',
    answer: 'Brandriko combines local market knowledge with international design standards and technical expertise. We focus on results-driven solutions, not just aesthetics. Our team maintains open communication throughout your project, and we\'re dedicated to long-term partnerships rather than one-off projects. We measure our success by your business growth.'
  },
  {
    id: 7,
    question: 'Can you work with clients outside of Nakuru?',
    answer: 'Absolutely! While we\'re based in Nakuru, we work with clients throughout Kenya and beyond. Our digital workflow enables us to collaborate effectively with clients anywhere. We use video conferencing, project management tools, and regular communication to ensure smooth project execution regardless of location.'
  },
  {
    id: 8,
    question: 'What is your typical process for new clients?',
    answer: 'Our process begins with an initial consultation to understand your goals and requirements. We then prepare a detailed proposal with timeline and pricing. Once approved, we move through our four-step process: Discovery & Strategy, Design & Branding, Development & Launch, and Growth & Support. We maintain regular communication throughout each phase.'
  },
  {
    id: 9,
    question: 'What payment terms do you offer?',
    answer: 'We typically require a 50% deposit to begin work, with the remaining balance due upon project completion. For larger projects, we may structure payments in milestones. We accept bank transfers, M-Pesa, and major credit cards. All payment terms are clearly outlined in our proposals and contracts.'
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
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-orange mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our services and process.
          </p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={100 * (index % 3)}
            >
              <button
                className="flex justify-between items-center w-full px-6 py-4 text-left font-semibold text-deep-blue hover:bg-gray-50 transition-colors duration-300"
                onClick={() => toggleFAQ(faq.id)}
                aria-expanded={openId === faq.id}
              >
                <span className="text-lg">{faq.question}</span>
                <i className={`fa-solid transition-transform duration-300 ${
                  openId === faq.id ? 'fa-chevron-up' : 'fa-chevron-down'
                }`}></i>
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openId === faq.id ? 'max-h-96 py-4' : 'max-h-0'
                }`}
              >
                <div className="text-gray-600 bg-gray-50 rounded-lg p-4">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions section */}
        <div className="mt-16 bg-gradient-to-r from-orange/10 to-deep-blue/10 rounded-xl p-8 text-center" data-aos="fade-up">
          <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fa-solid fa-question text-white text-2xl"></i>
          </div>
          <h3 className="text-2xl font-bold text-deep-blue mb-4">Still Have Questions?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Can&apos;t find the answer you&apos;re looking for? Please chat with our friendly team.
          </p>
          <a
            href="/contact"
            className="btn-gradient px-8 py-3 rounded-full text-white font-medium inline-block hover:no-underline"
          >
            Contact Us <i className="fa-solid fa-message ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  )
}