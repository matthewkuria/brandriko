"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setisOpen] = useState(false);
function handleClick() {
    setisOpen(!isOpen)
  }
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { 
      name: "Services", 
      href: "/services",
      subLinks: [
        { name: "Digital Branding", href: "/services/branding" },
        { name: "Graphic Design", href: "/services/design" },
        { name: "Web Development", href: "/services/web" },
        { name: "Digital Marketing", href: "/services/marketing" },
      ]
    },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50">
      <div className="w-full flex items-center justify-between">

        {/* LEFT: Logo + Mobile Menu */}
        <div className="">     
          {/* Brand Logo/Name */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/brandriko_logo.png" 
              alt="Brandriko Digital Solutions" 
              width={100} 
              height={100} 
              className="rounded-md"
            />
         
          </Link>
        </div>

        <div className='flex items-center justify-between gap-4'>
        {/* CENTER: Desktop Nav */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.subLinks ? (
                  <details>
                    <summary className="text-secondary hover:text-primary">
                      {link.name}
                    </summary>
                    <ul className="p-2 bg-base-100 shadow-lg">
                      {link.subLinks.map((subLink) => (
                        <li key={subLink.name}>
                          <Link 
                            href={subLink.href} 
                            className="text-secondary hover:text-primary hover:bg-base-200"
                          >
                            {subLink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link 
                    href={link.href} 
                    className="text-secondary hover:text-primary"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          </div>
          <div className=''>
        {/* RIGHT: CTA Button */}
        <div className=" hidden lg:block">
          <Link 
            href="/contact" 
            className="btn btn-primary text-white hover:bg-primary-focus"
          >
            Get a Quote
            </Link>            
          </div> 
          {/* Mobile menu */}
          <div className="lg:hidden" onClick={handleClick}>
            <label tabIndex={0} className="btn btn-ghost p-1" >
                {
                 isOpen ? 
                (
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
                    ):
                    (
                  <svg xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" fill="none" viewBox="0 0 24 24" 
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
                )
              }
            </label>
            <ul tabIndex={0} className={`${isOpen? 'flex' : 'hidden' } absolute left-0 top-24 right-0 mt-3 z-[1] p-2 shadow bg-base-100 flex-col items-center gap-5 rounded-box w-full`}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.subLinks ? (
                    <details>
                      <summary>{link.name}</summary>
                      <ul>
                        {link.subLinks.map((subLink) => (
                          <li key={subLink.name} onClick={handleClick}>
                            <Link href={subLink.href}>{subLink.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link href={link.href} onClick={handleClick}>{link.name}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>  
          </div>
        </div>
      </div>
    </div>
  );
}
