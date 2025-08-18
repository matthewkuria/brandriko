"use client";
import { useState } from "react";
import Link from "next/link";

export default function BrandElevationCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-20 bg-secondary text-neutral-content relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-primary/10"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-primary/10"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-6">
          Ready to <span className="text-primary">Elevate</span> Your Brand?
        </h2>
        
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let's transform your digital presence with strategic branding and 
          cutting-edge solutions that make your business unforgettable.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn btn-primary text-white px-8 py-4 text-lg hover:bg-primary-focus"
          >
            Get Your Free Consultation
          </button>
          
          <Link
            href="/portfolio"
            className="btn btn-outline btn-accent px-8 py-4 text-lg hover:bg-primary hover:text-white"
          >
            View Our Portfolio
          </Link>
        </div>
        
        {/* Trust indicators */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((item) => (
                <div 
                  key={item} 
                  className="w-8 h-8 rounded-full bg-neutral-content/20 border-2 border-white"
                ></div>
              ))}
            </div>
            <span>Trusted by 50+ brands</span>
          </div>
          
          <div className="hidden md:block w-px h-6 bg-neutral-content/30"></div>
          
          <div className="flex items-center gap-2">
            <div className="rating rating-sm">
              {[1, 2, 3, 4, 5].map((star) => (
                <input
                  key={star}
                  type="radio"
                  name="rating"
                  className="mask mask-star-2 bg-primary"
                  checked
                  readOnly
                />
              ))}
            </div>
            <span>5.0 Rating (24 Reviews)</span>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-white text-black p-8 rounded-xl w-full max-w-lg relative">
            <h3 className="text-2xl font-bold mb-4">Book a Free Consultation</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
                required
              />
              <textarea
                placeholder="Tell us about your project..."
                className="textarea textarea-bordered w-full"
                rows={4}
              ></textarea>
              <button type="submit" className="btn btn-primary w-full">
                Submit
              </button>
            </form>
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
