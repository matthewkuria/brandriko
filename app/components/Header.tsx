'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },  
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 glass-nav">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-deep-blue flex items-center">
          <Image alt='Brandriko digital solutions logo' 
          src="/brandriko_logo.png" 
          width={70} height={80}
          className='h-[12vh]'
          />
          </Link>
          
          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-300 ${
                  pathname === item.href
                    ? 'text-orange'
                    : 'text-deep-blue hover:text-orange'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* CTA Button (Desktop) */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="btn-gradient px-6 py-3 rounded-full text-white font-medium"
            >
              Get Started
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-deep-blue focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg rounded-b-lg py-4 px-6 z-50">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium py-2 transition-colors duration-300 ${
                    pathname === item.href
                      ? 'text-orange'
                      : 'text-deep-blue hover:text-orange'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <Link
              href="/contact"
              className="btn-gradient mt-6 block text-center px-6 py-3 rounded-full text-white font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}