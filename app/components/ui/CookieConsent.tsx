'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAccepted = localStorage.getItem('cookieConsent')
    
    if (!hasAccepted) {
      setTimeout(() => {
        setShowBanner(true)
        setTimeout(() => setIsVisible(true), 100)
      }, 1000)
    }
  }, [])

  const handleClose = (status: 'true' | 'declined') => {
    localStorage.setItem('cookieConsent', status)
    setIsVisible(false)
    setTimeout(() => setShowBanner(false), 400)
  }

  if (!showBanner) return null

  return (
    <div 
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-50 transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="bg-white/80 backdrop-blur-md border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl p-5 md:p-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          
          {/* Icon & Text */}
          <div className="flex items-center md:items-start gap-4">
            <div className="flex-shrink-0 bg-orange-100 p-3 rounded-xl text-orange-600">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" height="24" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                <path d="M8.5 8.5v.01" /><path d="M16 15.5v.01" /><path d="M12 12v.01" /><path d="M11 17v.01" /><path d="M7 14v.01" />
              </svg>
            </div>
            
            <div className="space-y-1">
              <h4 className="font-semibold text-gray-900 text-lg">Cookie Preferences</h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                We use cookies to personalize content and analyze our traffic. Read our{' '}
                <Link href="/privacy-policy" className="text-orange-600 hover:text-orange-700 underline underline-offset-4 decoration-orange-200 transition-colors">
                  Privacy Policy
                </Link>{' '}
                to learn more.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => handleClose('declined')}
              className="flex-1 md:flex-none px-5 py-2.5 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl transition-all active:scale-95"
            >
              Decline
            </button>
            <button
              onClick={() => handleClose('true')}
              className="flex-1 md:flex-none px-6 py-2.5 text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 shadow-sm shadow-orange-200 rounded-xl transition-all active:scale-95"
            >
              Accept All
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}