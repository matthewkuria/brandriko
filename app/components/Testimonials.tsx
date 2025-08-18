export default function Testimonials() {
  return (
    <section className="py-20 bg-secondary text-neutral-content">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            What Our <span className="text-primary">Clients</span> Say
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Don't just take our word for it - hear from businesses we've transformed
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="card bg-neutral text-neutral-content">
              <div className="card-body">
                <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                <p className="mb-6 italic">
                  "Brandriko completely transformed our digital presence. Our website traffic 
                  increased by 300% and we're getting more qualified leads than ever before."
                </p>
                <div className="flex items-center">
                  <div className="avatar mr-4">
                    <div className="w-12 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-bold">Sarah Johnson</h4>
                    <p className="text-sm opacity-80">CEO, Bright Solutions</p>
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