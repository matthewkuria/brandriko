export default function ContactForm() {
  return (
    <section className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="card bg-base-100 shadow-xl max-w-3xl mx-auto">
          <div className="card-body">
            <h2 className="card-title text-3xl mb-2 text-secondary">
              Ready to <span className="text-primary">Elevate</span> Your Brand?
            </h2>
            <p className="mb-8 text-neutral">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input type="text" placeholder="John Doe" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email Address</span>
                  </label>
                  <input type="email" placeholder="john@example.com" className="input input-bordered" required />
                </div>
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Interested In</span>
                </label>
                <select className="select select-bordered">
                  <option disabled selected>Select a service</option>
                  <option>Digital Branding</option>
                  <option>Graphic Design</option>
                  <option>Social Media Branding</option>
                  <option>Website Design</option>
                  <option>SEO Services</option>
                  <option>Digital Marketing</option>
                </select>
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Message</span>
                </label>
                <textarea className="textarea textarea-bordered h-32" placeholder="Tell us about your project..."></textarea>
              </div>
              
              <div className="form-control mt-8">
                <button className="btn btn-primary text-white">
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}