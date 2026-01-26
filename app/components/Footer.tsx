import Link from 'next/link'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

const services = [
  { name: 'Digital Branding', href: '/services' },
  { name: 'Graphic Design', href: '/services' },
  { name: 'Social Media Branding', href: '/services' },
  { name: 'Web Development', href: '/services' },
  { name: 'SEO Services', href: '/services' },
  { name: 'Digital Marketing', href: '/services' },
]

export default function Footer() {
  return (
    <footer className="footer bg-base-300 text-base-content p-10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Social */}
          <div>
            <Link href="/" className="text-2xl font-bold">
              <span className="text-primary">B</span>
              <span className="text-secondary">randriko</span>
            </Link>
            <p className="mt-4 opacity-80">
              We are a premier digital solutions agency based in Nakuru, Kenya, 
              specializing in web design, branding, and digital marketing.
            </p>
            <div className="flex space-x-4 mt-6">
              {['facebook-f', 'twitter', 'instagram', 'linkedin-in'].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="btn btn-ghost btn-circle"
                  aria-label={`Follow us on ${icon}`}
                >
                  <i className={`fa-brands fa-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-title opacity-100">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="link link-hover">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="footer-title opacity-100">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="link link-hover">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="footer-title opacity-100">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fa-solid fa-location-dot mt-1 mr-3 text-primary"></i>
                <span className="opacity-80">Nakuru, Kenya</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-phone mt-1 mr-3 text-primary"></i>
                <span className="opacity-80">+254 748 421 758</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-envelope mt-1 mr-3 text-primary"></i>
                <span className="opacity-80">info.brandriko.digital@gmail.com</span>
              </li>
              <li className="flex items-start">
                <i className="fa-solid fa-clock mt-1 mr-3 text-primary"></i>
                <span className="opacity-80">Mon - Fri: 8:00AM - 6:00PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="divider"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="opacity-80">
            &copy; {new Date().getFullYear()} Brandriko Digital Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
              <a key={item} href="#" className="link link-hover">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}