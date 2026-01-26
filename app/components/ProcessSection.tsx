'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Consultation',
    description: 'We start with a free consultation to understand your business goals, target audience in Kenya, and market competition. This helps us develop a strategic plan tailored for your specific needs.',
    icon: 'fa-comments',
    duration: '1-2 Days',
    deliverables: ['Business Analysis', 'Target Audience Profile', 'Competitor Research', 'Project Scope Document']
  },
  {
    number: '02',
    title: 'Design & Brand Development',
    description: 'Our creative team in Nakuru designs stunning visuals that align with your brand identity. We create mockups and prototypes for your approval before moving to development.',
    icon: 'fa-pen-ruler',
    duration: '3-5 Days',
    deliverables: ['Brand Identity Design', 'Website Mockups', 'Social Media Templates', 'Brand Guidelines']
  },
  {
    number: '03',
    title: 'Development & Implementation',
    description: 'Using modern technologies like Next.js and React, we build your digital solution with performance and user experience in mind. Regular updates keep you informed throughout.',
    icon: 'fa-laptop-code',
    duration: '2-3 Weeks',
    deliverables: ['Website Development', 'Social Media Setup', 'Google Business Profile', 'Content Integration']
  },
  {
    number: '04',
    title: 'Testing & Quality Assurance',
    description: 'We thoroughly test your solution across all devices and browsers to ensure flawless performance. Security checks and speed optimization are key parts of this phase.',
    icon: 'fa-vial',
    duration: '2-3 Days',
    deliverables: ['Cross-browser Testing', 'Mobile Responsiveness', 'Performance Audit', 'Security Checks']
  },
  {
    number: '05',
    title: 'Launch & Training',
    description: 'We deploy your solution and provide comprehensive training on how to manage your new digital assets. You\'ll receive all login credentials and documentation.',
    icon: 'fa-rocket',
    duration: '1-2 Days',
    deliverables: ['Live Deployment', 'Training Session', 'Documentation', 'Login Credentials']
  },
  {
    number: '06',
    title: 'Support & Growth',
    description: 'Enjoy free support during the included period. We monitor performance and provide optimization recommendations to help your digital presence continue to grow.',
    icon: 'fa-chart-line',
    duration: 'Ongoing',
    deliverables: ['Technical Support', 'Performance Reports', 'SEO Optimization', 'Content Updates']
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
          <div className="badge badge-primary badge-lg mb-4">Our Workflow</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Proven 6-Step Process</h2>
          <div className="divider divider-primary w-24 mx-auto"></div>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            A structured approach that ensures your project is delivered on time, within budget, and exceeds expectations
          </p>
          
          {/* Quick Stats */}
          <div className="stats stats-vertical lg:stats-horizontal shadow bg-base-200 max-w-3xl mx-auto">
            <div className="stat place-items-center">
              <div className="stat-value text-primary text-2xl">6 Steps</div>
              <div className="stat-desc">Structured Process</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-value text-secondary text-2xl">2-6 Weeks</div>
              <div className="stat-desc">Average Timeline</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-value text-accent text-2xl">100%</div>
              <div className="stat-desc">On-time Delivery</div>
            </div>
          </div>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative" data-aos="fade-up">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2"></div>
          
          {/* Steps */}
          <div className="space-y-24">
            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex items-center justify-between ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                data-aos-delay={100 * index}
              >
                {/* Step Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="card-body">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 bg-primary text-primary-content rounded-full flex items-center justify-center text-xl font-bold">
                            {step.number}
                          </div>
                          <div>
                            <h3 className="card-title text-xl">{step.title}</h3>
                            <div className="badge badge-primary badge-sm">{step.duration}</div>
                          </div>
                        </div>
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <i className={`fa-solid ${step.icon} text-primary text-xl`}></i>
                        </div>
                      </div>
                      
                      <p className="text-base-content/80 mb-4">{step.description}</p>
                      
                      <div className="mt-4">
                        <div className="text-sm font-semibold text-base-content/60 mb-2">Deliverables:</div>
                        <div className="flex flex-wrap gap-2">
                          {step.deliverables.map((item, idx) => (
                            <span key={idx} className="badge badge-outline badge-sm">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-1/2 top-1/2 w-8 h-8 bg-primary rounded-full border-4 border-base-100 transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                
                {/* Empty Space */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden" data-aos="fade-up">
          <div className="timeline timeline-snap-icon timeline-vertical">
            {processSteps.map((step, index) => (
              <div key={step.number} className="timeline-item">
                <div className="timeline-marker">
                  <div className="w-12 h-12 bg-primary text-primary-content rounded-full flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="timeline-content">
                  <div className="card bg-base-200 shadow-lg">
                    <div className="card-body">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="card-title text-lg">{step.title}</h3>
                          <div className="badge badge-primary badge-sm">{step.duration}</div>
                        </div>
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <i className={`fa-solid ${step.icon} text-primary`}></i>
                        </div>
                      </div>
                      
                      <p className="text-base-content/80 mb-4 text-sm">{step.description}</p>
                      
                      <div className="mt-3">
                        <div className="text-xs font-semibold text-base-content/60 mb-2">Deliverables:</div>
                        <div className="flex flex-wrap gap-1">
                          {step.deliverables.map((item, idx) => (
                            <span key={idx} className="badge badge-outline badge-xs">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Benefits */}
        <div className="mt-20 grid md:grid-cols-3 gap-6" data-aos="fade-up">
          {[
            {
              title: 'Clear Communication',
              description: 'Regular updates and transparent communication throughout the project',
              icon: 'fa-comment-dots'
            },
            {
              title: 'Flexible Approach',
              description: 'Adaptable process that accommodates changes and feedback',
              icon: 'fa-sync-alt'
            },
            {
              title: 'Quality Assurance',
              description: 'Rigorous testing at every stage to ensure excellence',
              icon: 'fa-award'
            }
          ].map((benefit, index) => (
            <div key={index} className="card bg-base-200 shadow-sm">
              <div className="card-body items-center text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <i className={`fa-solid ${benefit.icon} text-primary text-xl`}></i>
                </div>
                <h3 className="card-title text-lg mb-2">{benefit.title}</h3>
                <p className="text-sm text-base-content/70">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  )
}