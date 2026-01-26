'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookieConsent')
    
    if (!hasAccepted) {
      // Show banner with a slight delay for better UX
      setTimeout(() => {
        setShowBanner(true)
        // Add another slight delay for the slide-up animation
        setTimeout(() => setIsVisible(true), 100)
      }, 1000)
    }
  }, [])

  const acceptCookies = () => {
    // Save acceptance to localStorage
    localStorage.setItem('cookieConsent', 'true')
    
    // Animate out
    setIsVisible(false)
    setTimeout(() => setShowBanner(false), 300)
  }

  const declineCookies = () => {
    // User declined - still store a flag to not show again
    localStorage.setItem('cookieConsent', 'declined')
    
    // Animate out
    setIsVisible(false)
    setTimeout(() => setShowBanner(false), 300)
  }

  if (!showBanner) return null

  return (
    <div className={`fixed bottom-0 left-0 w-full bg-white shadow-lg z-40 transform transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : 'translate-y-full'
    }`}>
      <div className="container mx-auto py-4 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex-1">
            <div className="flex items-start">
              <div className="mr-3 mt-1 text-orange">
                <i className="fa-solid fa-cookie-bite text-xl"></i>
              </div>
              <div>
                <p className="text-gray-700">
                  We use cookies to enhance your experience. By continuing to visit this site you agree to our use of 
                  cookies. Read our{' '}
                  <Link 
                    href="/privacy-policy" 
                    className="text-orange hover:underline font-medium"
                  >
                    Privacy Policy
                  </Link>
                  {' '}and{' '}
                  <Link 
                    href="/cookie-policy" 
                    className="text-orange hover:underline font-medium"
                  >
                    Cookie Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              onClick={declineCookies}
              className="btn-outline px-4 py-2 rounded-full font-medium text-sm"
            >
              Decline
            </button>
            <button
              onClick={acceptCookies}
              className="btn-gradient px-6 py-2 rounded-full text-white font-medium text-sm"
            >
              Accept Cookies
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}