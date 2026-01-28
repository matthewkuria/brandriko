export default function BlogHero() {
  return (
    <section className="relative py-20 bg-gradient-secondary text-primary-content overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mt-10">
          <div className="badge badge-primary badge-lg mb-6">
            Digital Insights
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Brandriko <span className="text-accent">Blog</span>
          </h1>
          
          <p className="text-xl opacity-90 mb-8">
            Expert insights on web design, digital marketing, SEO, and branding strategies 
            for businesses in Nakuru and across Kenya
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <span className="badge badge-outline text-white">Web Design</span>
            <span className="badge badge-outline text-white">Digital Marketing</span>
            <span className="badge badge-outline text-white">SEO Kenya</span>
            <span className="badge badge-outline text-white">Branding</span>
            <span className="badge badge-outline text-white">Social Media</span>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
    </section>
  )
}