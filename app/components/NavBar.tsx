import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
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
      <div className="container mx-auto px-4 flex items-center justify-between">

        {/* LEFT: Logo + Mobile Menu */}
        <div className="flex items-center gap-2">         

          {/* Brand Logo/Name */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-secondary">
            <Image 
              src="/brandriko_logo.png" 
              alt="Brandriko Digital Solutions" 
              width={100} 
              height={100} 
              className="rounded-md"
            />
         
          </Link>
        </div>

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
            {/* Mobile menu */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost p-1">
              <svg xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" fill="none" viewBox="0 0 24 24" 
                stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.subLinks ? (
                    <details>
                      <summary>{link.name}</summary>
                      <ul>
                        {link.subLinks.map((subLink) => (
                          <li key={subLink.name}>
                            <Link href={subLink.href}>{subLink.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link href={link.href}>{link.name}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        {/* RIGHT: CTA Button */}
        <div className=" hidden lg:block">
          <Link 
            href="/contact" 
            className="btn btn-primary text-white hover:bg-primary-focus"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
