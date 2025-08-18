export default function BrandElevationCTA() {
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
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          {/* WhatsApp Quote Button */}
          <a 
            href="https://wa.me/254748421758" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary text-white px-8 py-4 text-lg hover:bg-primary-focus"
          >
            Get a Quote via WhatsApp
          </a>
          
          {/* Portfolio Button */}
          <button className="btn btn-outline btn-accent px-8 py-4 text-lg hover:bg-primary hover:text-white">
            View Our Portfolio
          </button>
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
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" defaultChecked />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" defaultChecked />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" defaultChecked />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" defaultChecked />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" defaultChecked />
            </div>
            <span>5.0 Rating (24 Reviews)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
