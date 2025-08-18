const services = [
  {
    title: "Digital Branding",
    description: "Create a memorable identity that resonates with your audience.",
    icon: "🖌️"
  },
  {
    title: "Graphic Design",
    description: "Visually stunning assets that communicate your brand values.",
    icon: "🎨"
  },
  {
    title: "Social Media Branding",
    description: "Cohesive presence across all social platforms.",
    icon: "📱"
  },
  {
    title: "Website Design",
    description: "Beautiful, functional websites that convert visitors.",
    icon: "💻"
  },
  {
    title: "SEO Services",
    description: "Get found by your ideal customers online.",
    icon: "🔍"
  },
  {
    title: "Digital Marketing",
    description: "Targeted campaigns that deliver real results.",
    icon: "📈"
  }
];

export default function ServicesShowcase() {
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-secondary">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-neutral">
            Comprehensive solutions tailored to your brand's needs
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card bg-base-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
            >
              <div className="card-body items-center text-center">
                
                {/* Icon with circle */}
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-3xl mb-4">
                  {service.icon}
                </div>
                
                <h3 className="card-title text-secondary text-lg">
                  {service.title}
                </h3>
                <p className="text-neutral">{service.description}</p>
                
                <div className="card-actions mt-4">
                  <button className="btn btn-sm btn-outline border-primary text-primary hover:bg-primary hover:text-white transition">
                    Learn more →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
