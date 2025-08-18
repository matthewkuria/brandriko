export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, Bright Solutions",
      text: "Brandriko completely transformed our digital presence. Our website traffic increased by 300% and we're getting more qualified leads than ever before.",
    },
    {
      name: "Michael Lee",
      role: "Founder, TechWave",
      text: "The team’s creativity and strategic approach helped us stand out in a competitive industry. Highly recommended!",
    },
    {
      name: "Emma Williams",
      role: "Marketing Director, GreenFuture",
      text: "From branding to digital marketing, everything was on point. We saw immediate results and a stronger online presence.",
    },
  ];

  return (
    <section className="py-20 bg-secondary text-neutral-content">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            What Our <span className="text-primary">Clients</span> Say
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Don&apos;t just take our word for it – hear from businesses we&apos;ve transformed
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="card bg-neutral bg-opacity-90 backdrop-blur-md text-neutral-content shadow-xl hover:shadow-2xl transition"
            >
              <div className="card-body">
                <div className="text-primary text-2xl mb-4">★★★★★</div>
                <p className="mb-6 italic">&quot;{t.text}&quot;</p>
                
                {/* Avatar + Info */}
                <div className="flex items-center">
                  <div className="avatar mr-4">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-bold text-white">
                      {t.name[0]}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold">{t.name}</h4>
                    <p className="text-sm opacity-80">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
