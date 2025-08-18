import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-neutral text-secondary">
      {/* Main footer links */}
      <div className="footer sm:footer-horizontal px-10 py-14 max-w-7xl mx-auto">
        <nav>
          <h6 className="footer-title text-primary">Services</h6>
          <Link href="/services/branding" className="link link-hover">
            Branding
          </Link>
          <Link href="/services/design" className="link link-hover">
            Design
          </Link>
          <Link href="/services/marketing" className="link link-hover">
            Marketing
          </Link>
          <Link href="/services/advertising" className="link link-hover">
            Advertising
          </Link>
        </nav>

        <nav>
          <h6 className="footer-title text-primary">Company</h6>
          <Link href="/about" className="link link-hover">
            About Us
          </Link>
          <Link href="/contact" className="link link-hover">
            Contact
          </Link>
          <Link href="/careers" className="link link-hover">
            Careers
          </Link>
          <Link href="/press" className="link link-hover">
            Press Kit
          </Link>
        </nav>

        <nav>
          <h6 className="footer-title text-primary">Legal</h6>
          <Link href="/terms" className="link link-hover">
            Terms of Use
          </Link>
          <Link href="/privacy" className="link link-hover">
            Privacy Policy
          </Link>
          <Link href="/cookies" className="link link-hover">
            Cookie Policy
          </Link>
        </nav>
      </div>

      {/* Bottom bar */}
      <div className="footer border-t border-base-300 px-10 py-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <aside className="flex items-center gap-3">
          <img src="/brandriko_logo.png" alt="Brandriko Logo" className="h-28
           w-auto" />
          <p className="text-sm">
            <span className="font-semibold">Brandriko Digital Solutions</span> <br />
            Crafting brands & digital growth since 2025.
          </p>
        </aside>

        <nav className="mt-4 md:mt-0">
          <div className="grid grid-flow-col gap-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775..." />
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246..." />
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642..." />
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
