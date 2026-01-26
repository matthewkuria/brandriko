'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function ServicesCTA() {
  const [selectedPackage, setSelectedPackage] = useState('business')
  const [showComparison, setShowComparison] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    })
  }, [])

  const packages = {
    standard: {
      name: 'Standard Package',
      priceRange: 'KES 25,000 - 40,000',
      timeline: '2-3 Weeks',
      color: 'border-blue-200',
      badge: 'Perfect Start',
      features: {
        webDesign: [
          '5-Page Responsive Website',
          'Mobile-First Design',
          'Basic Contact Form',
          'SEO-Friendly Structure',
          'Fast Loading Speed',
          'Social Media Integration'
        ],
        graphics: [
          'Logo Design',
          'Color Palette',
          'Business Card Design',
          'Social Media Cover Photo',
          'Email Signature'
        ],
        socialMedia: [
          'Facebook Page Setup',
          'Instagram Profile Setup',
          'Profile Optimization',
          'Basic Cover Photo Design'
        ],
        googleBusiness: [
          'Google Business Profile Creation',
          'Basic Information Setup',
          'Category Selection',
          'Contact Details'
        ],
        support: [
          '2 Weeks Free Support',
          'Basic Training Session',
          'Mobile Optimization Check'
        ],
        bestFor: [
          'Startups',
          'Personal Brands',
          'Small Local Businesses',
          'Freelancers'
        ]
      },
      deliverables: [
        'Fully functional website',
        'Logo files (PNG, JPG, SVG)',
        'Business cards design',
        'Social media assets',
        'Google Business setup'
      ]
    },
    business: {
      name: 'Business Package',
      priceRange: 'KES 60,000 - 100,000',
      timeline: '3-4 Weeks',
      color: 'border-primary',
      badge: 'Most Popular',
      features: {
        webDesign: [
          '8-10 Page Custom Website',
          'Advanced Mobile Responsive',
          'Content Management System (CMS)',
          'Advanced SEO Optimization',
          'Performance Optimization',
          'Contact & Inquiry Forms',
          'Testimonial/Review Section',
          'Gallery/Portfolio Pages',
          'Blog/News Section'
        ],
        graphics: [
          'Complete Brand Identity',
          'Logo + Variations (3 versions)',
          'Brand Guidelines Document',
          'Business Stationery Set',
          'Social Media Kit (15 posts)',
          'Marketing Flyer Design',
          'Email Newsletter Template',
          'Product/Service Brochure'
        ],
        socialMedia: [
          'Facebook Business Page Setup',
          'Instagram Business Profile',
          'LinkedIn Company Page',
          'Twitter/X Business Profile',
          'Profile Optimization',
          'Cover Photo & Avatar Design',
          'Post Templates (5 designs)'
        ],
        googleBusiness: [
          'Complete Google Business Setup',
          'Profile Optimization',
          'Service/Product Listings',
          'Business Description & Photos',
          'Posts & Updates Setup',
          'Review Management Setup'
        ],
        support: [
          '1 Month Free Support',
          'Comprehensive Training',
          'Performance Analytics Setup',
          'Monthly Backup Service',
          'Security Updates'
        ],
        bestFor: [
          'Growing Businesses',
          'Professional Services',
          'Retail Stores',
          'Healthcare Providers',
          'Educational Institutions'
        ]
      },
      deliverables: [
        'Custom website with CMS',
        'Complete brand identity package',
        'Social media management setup',
        'Google Business optimization',
        'Training documentation'
      ]
    },
    premium: {
      name: 'Premium Package',
      priceRange: 'KES 150,000 - 350,000',
      timeline: '4-6 Weeks',
      color: 'border-secondary',
      badge: 'Premium Solution',
      features: {
        webDesign: [
          '15-20 Page Advanced Website',
          'Custom Interactive Elements',
          'E-commerce Integration (Shopify/WooCommerce)',
          'Advanced SEO Strategy & Implementation',
          'Multi-language Support',
          'Member/Client Portal',
          'Custom Animations & Effects',
          'Advanced Forms & Calculators',
          'Blog with Advanced Features',
          'Payment Gateway Integration (M-Pesa, Cards)',
          'Advanced Security Features'
        ],
        graphics: [
          'Premium Brand Identity System',
          'Complete Visual System Design',
          'Packaging Design (if applicable)',
          'Digital Ad Creatives (Set of 10)',
          'Presentation Templates',
          'Event Marketing Materials',
          'Vehicle Wrap Design',
          'Signage & Environmental Graphics',
          'Annual Report Design',
          'Product Catalog Design'
        ],
        socialMedia: [
          'Complete Social Media Suite Setup',
          'Facebook, Instagram, LinkedIn, Twitter',
          'TikTok Business Account',
          'YouTube Channel Setup',
          'Complete Profile Optimization',
          'Custom Cover & Post Designs (20+)',
          'Social Media Strategy Document',
          'Content Calendar (1 month)'
        ],
        googleBusiness: [
          'Premium Google Business Optimization',
          'Complete Profile Setup & Verification',
          'Product/Service Catalog',
          'Professional Photo Shoot (if in Nakuru)',
          'Video Tour Integration',
          'Advanced Posting Strategy',
          'Review Response System',
          'Google Ads Integration Setup'
        ],
        support: [
          '3 Months Premium Support',
          'Priority Response Time (2 hours)',
          'Monthly SEO Reports & Optimization',
          'Quarterly Design Updates',
          '24/7 Security Monitoring',
          'Performance Analytics Dashboard',
          'Monthly Strategy Sessions'
        ],
        bestFor: [
          'Established Corporations',
          'E-commerce Businesses',
          'Hotel & Tourism Companies',
          'Manufacturing Companies',
          'Large Retail Chains',
          'Healthcare Facilities'
        ]
      },
      deliverables: [
        'Advanced e-commerce website',
        'Complete brand system',
        'Full social media suite',
        'Professional Google Business profile',
        'Ongoing support package'
      ]
    }
  }

  const selectedPackageData = packages[selectedPackage as keyof typeof packages]

  return (
    <>
      {/* Hero CTA */}
      <section className="py-20 bg-gradient-secondary text-primary-content">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Complete Digital Solutions Packages
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Everything you need for digital success: Website + Graphics + Social Media + Google Business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#packages" className="btn btn-primary btn-lg">
              <i className="fa-solid fa-gem mr-2"></i>
              View Packages
            </Link>
            <a href="tel:+254748421758" className="btn btn-outline btn-lg text-white hover:bg-white hover:text-secondary">
              <i className="fa-solid fa-phone mr-2"></i>
              Call for Custom Quote
            </a>
          </div>
          <p className="text-sm opacity-80 mt-6">
            All packages include FREE support period • Based in Nakuru, Kenya
          </p>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">4-in-1 Digital Solution</h2>
            <div className="divider divider-primary w-24 mx-auto"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Each package includes website design, graphics design, social media setup, and Google Business optimization
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: 'Website Design',
                description: 'Professional, responsive websites optimized for Kenyan internet speeds',
                icon: 'fa-globe',
                color: 'text-primary'
              },
              {
                title: 'Graphics Design',
                description: 'Complete brand identity and marketing materials',
                icon: 'fa-palette',
                color: 'text-secondary'
              },
              {
                title: 'Social Media',
                description: 'Professional setup across all major platforms',
                icon: 'fa-hashtag',
                color: 'text-accent'
              },
              {
                title: 'Google Business',
                description: 'Optimized profile to attract local customers in Kenya',
                icon: 'fa-store',
                color: 'text-primary'
              }
            ].map((item, index) => (
              <div key={index} className="card bg-base-200 hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay={100 * index}>
                <div className="card-body items-center text-center">
                  <div className={`w-14 h-14 ${item.color} bg-opacity-10 rounded-full flex items-center justify-center mb-4`}>
                    <i className={`fa-solid ${item.icon} ${item.color} text-xl`}></i>
                  </div>
                  <h3 className="card-title text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-base-content/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Package Selection */}
      <section className="py-20 bg-base-200" id="packages">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Package</h2>
            <div className="divider divider-primary w-24 mx-auto"></div>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              Transparent pricing with everything included. No hidden costs.
            </p>
            
            {/* Package Tabs */}
            <div className="tabs tabs-boxed justify-center mb-8">
              {Object.keys(packages).map((pkgKey) => (
                <button
                  key={pkgKey}
                  className={`tab tab-lg ${selectedPackage === pkgKey ? 'tab-active' : ''}`}
                  onClick={() => setSelectedPackage(pkgKey)}
                >
                  {packages[pkgKey as keyof typeof packages].name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Package Display */}
          <div className="max-w-6xl mx-auto mb-16" data-aos="fade-up">
            <div className={`card bg-base-100 shadow-xl border-2 ${selectedPackageData.color}`}>
              <div className="card-body p-8">
                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
                  <div>
                    <div className="badge badge-primary mb-2">{selectedPackageData.badge}</div>
                    <h2 className="text-3xl font-bold mb-2">{selectedPackageData.name}</h2>
                    <p className="text-base-content/70">{selectedPackageData.timeline} delivery</p>
                  </div>
                  <div className="mt-4 lg:mt-0 text-center lg:text-right">
                    <div className="text-4xl font-bold text-primary">{selectedPackageData.priceRange}</div>
                    <p className="text-base-content/60 text-sm">One-time investment</p>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                  {/* Web Design */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <i className="fa-solid fa-globe text-primary"></i>
                      Website Design
                    </h3>
                    <ul className="space-y-3">
                      {selectedPackageData.features.webDesign.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <i className="fa-solid fa-check text-success mt-1"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Graphics Design */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <i className="fa-solid fa-palette text-secondary"></i>
                      Graphics Design
                    </h3>
                    <ul className="space-y-3">
                      {selectedPackageData.features.graphics.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <i className="fa-solid fa-check text-success mt-1"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Social & Google */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <i className="fa-solid fa-bullhorn text-accent"></i>
                      Social & Google
                    </h3>
                    <ul className="space-y-3">
                      {selectedPackageData.features.socialMedia.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <i className="fa-solid fa-check text-success mt-1"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                      {selectedPackageData.features.googleBusiness.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <i className="fa-solid fa-check text-success mt-1"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Support & Best For */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <i className="fa-solid fa-headset text-primary"></i>
                      Support & Maintenance
                    </h3>
                    <ul className="space-y-3">
                      {selectedPackageData.features.support.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <i className="fa-solid fa-check text-success mt-1"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <i className="fa-solid fa-building text-secondary"></i>
                      Best For
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedPackageData.features.bestFor.map((type, index) => (
                        <span key={index} className="badge badge-outline">{type}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="card-actions justify-center gap-4">
                  <Link
                    href={`/contact?package=${selectedPackage}`}
                    className="btn btn-primary btn-lg"
                  >
                    <i className="fa-solid fa-calendar-check mr-2"></i>
                    Get This Package
                  </Link>
                  <button
                    onClick={() => setShowComparison(!showComparison)}
                    className="btn btn-outline btn-lg"
                  >
                    <i className="fa-solid fa-scale-balanced mr-2"></i>
                    Compare Packages
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Package Comparison Table */}
          {showComparison && (
            <div className="mb-16" data-aos="fade-up">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Package Comparison</h3>
                <div className="divider divider-primary w-24 mx-auto"></div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                  <thead>
                    <tr>
                      <th>Features</th>
                      <th className="text-center">Standard</th>
                      <th className="text-center">Business</th>
                      <th className="text-center">Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="font-bold bg-base-300">
                      <td colSpan={4}>Website Design</td>
                    </tr>
                    {[
                      'Number of Pages',
                      'Mobile Responsive',
                      'Content Management',
                      'SEO Optimization',
                      'E-commerce Ready',
                      'Payment Integration'
                    ].map((feature) => (
                      <tr key={feature}>
                        <td>{feature}</td>
                        <td className="text-center">
                          {feature === 'Number of Pages' ? '5 Pages' : 
                           feature === 'E-commerce Ready' || feature === 'Payment Integration' ? 
                           <i className="fa-solid fa-times text-error"></i> : 
                           <i className="fa-solid fa-check text-success"></i>}
                        </td>
                        <td className="text-center">
                          {feature === 'Number of Pages' ? '8-10 Pages' : 
                           feature === 'Payment Integration' ? 
                           <i className="fa-solid fa-times text-error"></i> : 
                           <i className="fa-solid fa-check text-success"></i>}
                        </td>
                        <td className="text-center">
                          {feature === 'Number of Pages' ? '15-20 Pages' : 
                           <i className="fa-solid fa-check text-success"></i>}
                        </td>
                      </tr>
                    ))}

                    <tr className="font-bold bg-base-300">
                      <td colSpan={4}>Graphics Design</td>
                    </tr>
                    {[
                      'Logo Design',
                      'Brand Guidelines',
                      'Social Media Kit',
                      'Marketing Materials',
                      'Packaging Design'
                    ].map((feature) => (
                      <tr key={feature}>
                        <td>{feature}</td>
                        <td className="text-center">
                          {feature === 'Brand Guidelines' || feature === 'Marketing Materials' || feature === 'Packaging Design' ? 
                           <i className="fa-solid fa-times text-error"></i> : 
                           <i className="fa-solid fa-check text-success"></i>}
                        </td>
                        <td className="text-center">
                          {feature === 'Packaging Design' ? 
                           <i className="fa-solid fa-times text-error"></i> : 
                           <i className="fa-solid fa-check text-success"></i>}
                        </td>
                        <td className="text-center">
                          <i className="fa-solid fa-check text-success"></i>
                        </td>
                      </tr>
                    ))}

                    <tr className="font-bold bg-base-300">
                      <td colSpan={4}>Social Media Setup</td>
                    </tr>
                    {[
                      'Number of Platforms',
                      'Profile Optimization',
                      'Post Templates',
                      'Content Strategy'
                    ].map((feature) => (
                      <tr key={feature}>
                        <td>{feature}</td>
                        <td className="text-center">
                          {feature === 'Number of Platforms' ? '2 Platforms' : 
                           feature === 'Content Strategy' ? 
                           <i className="fa-solid fa-times text-error"></i> : 
                           <i className="fa-solid fa-check text-success"></i>}
                        </td>
                        <td className="text-center">
                          {feature === 'Number of Platforms' ? '4 Platforms' : 
                           <i className="fa-solid fa-check text-success"></i>}
                        </td>
                        <td className="text-center">
                          {feature === 'Number of Platforms' ? '5+ Platforms' : 
                           <i className="fa-solid fa-check text-success"></i>}
                        </td>
                      </tr>
                    ))}

                    <tr className="font-bold bg-base-300">
                      <td colSpan={4}>Support & Maintenance</td>
                    </tr>
                    {[
                      'Free Support Period',
                      'Priority Support',
                      'Monthly Reports',
                      'Security Updates'
                    ].map((feature) => (
                      <tr key={feature}>
                        <td>{feature}</td>
                        <td className="text-center">
                          {feature === 'Free Support Period' ? '2 Weeks' : 
                           <i className="fa-solid fa-times text-error"></i>}
                        </td>
                        <td className="text-center">
                          {feature === 'Free Support Period' ? '1 Month' : 
                           feature === 'Priority Support' ? 
                           <i className="fa-solid fa-times text-error"></i> : 
                           <i className="fa-solid fa-check text-success"></i>}
                        </td>
                        <td className="text-center">
                          {feature === 'Free Support Period' ? '3 Months' : 
                           <i className="fa-solid fa-check text-success"></i>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Process Section */}
          <div className="mt-16" data-aos="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">How It Works</h2>
              <div className="divider divider-primary w-24 mx-auto"></div>
            </div>

            <div className="steps steps-vertical lg:steps-horizontal">
              <div className="step step-primary">
                <div className="step-circle">
                  <i className="fa-solid fa-comments"></i>
                </div>
                <div className="step-content">
                  <h3 className="font-bold">Consultation</h3>
                  <p>Free discovery call to understand your needs</p>
                </div>
              </div>
              
              <div className="step step-primary">
                <div className="step-circle">
                  <i className="fa-solid fa-file-contract"></i>
                </div>
                <div className="step-content">
                  <h3 className="font-bold">Proposal</h3>
                  <p>Detailed package proposal & agreement</p>
                </div>
              </div>
              
              <div className="step step-primary">
                <div className="step-circle">
                  <i className="fa-solid fa-pen-ruler"></i>
                </div>
                <div className="step-content">
                  <h3 className="font-bold">Design & Development</h3>
                  <p>Website + Graphics + Social setup</p>
                </div>
              </div>
              
              <div className="step step-primary">
                <div className="step-circle">
                  <i className="fa-solid fa-rocket"></i>
                </div>
                <div className="step-content">
                  <h3 className="font-bold">Launch</h3>
                  <p>Go live with training & support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA with Special Offer */}
      <section className="py-20 bg-gradient-primary text-primary-content">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <div className="max-w-3xl mx-auto">
            <div className="badge badge-secondary mb-4">Special Launch Offer</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Book Any Package & Get <span className="text-secondary">FREE</span> Website Hosting for 1 Year
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Limited time offer for Kenyan businesses. Save up to KES 12,000 on hosting costs!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="stat">
                <div className="stat-title text-primary-content/80">Offer Ends</div>
                <div className="stat-value text-2xl">Jan 31, 2025</div>
              </div>
              <div className="stat">
                <div className="stat-title text-primary-content/80">Free Bonus</div>
                <div className="stat-value text-2xl">1 Year Hosting</div>
              </div>
              <div className="stat">
                <div className="stat-title text-primary-content/80">Value</div>
                <div className="stat-value text-2xl">KES 12,000</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-secondary btn-lg">
                <i className="fa-solid fa-gift mr-2"></i>
                Claim Free Hosting
              </Link>
              <a href="tel:+254XXXXXXXXX" className="btn btn-outline btn-lg text-white hover:bg-white hover:text-primary">
                <i className="fa-solid fa-phone mr-2"></i>
                Call Now: +254 748 421 758
              </a>
            </div>

            <p className="text-sm opacity-80 mt-8">
              Offer valid for packages booked before January 31, 2025. Hosting includes email setup & SSL certificate.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}