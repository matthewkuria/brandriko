import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

export const metadata = {
  title: 'Contact Us | Brandriko Digital Solutions',
  description: 'Get in touch with our digital branding experts. Reach out for inquiries about our graphic design, web development, IT support, and marketing services in Kenya.',
  keywords: ['contact digital agency kenya', 'branding consultation', 'web design inquiry', 'IT support kenya'],
}

export default function ContactPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center mt-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s <span className="text-primary">Elevate</span> Your Brand Together
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Have questions about our services? Ready to start your project? Reach out — we&apos;d love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="lg:w-1/2">
              <div className="bg-white shadow-lg rounded-xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-secondary">Send Us a Message</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="input input-bordered w-full" 
                        placeholder="Enter Your Name" 
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="input input-bordered w-full" 
                        placeholder="Email Address" 
                        required 
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block mb-2 font-medium">Service Interested In</label>
                    <select id="service" className="select select-bordered w-full">
                      <option value="">Select a service</option>
                      <option>Digital Branding</option>
                      <option>Graphic Design</option>
                      <option>Website Design</option>
                      <option>SEO Services</option>
                      <option>Digital Marketing</option>
                      <option>IT Support</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="textarea textarea-bordered w-full" 
                      placeholder="Tell us about your project..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary text-white w-full py-4 text-lg">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-8 text-secondary">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 p-3 rounded-full mt-1">
                    <FaMapMarkerAlt className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Office</h3>
                    <p className="text-lg">Nakuru, Kenya<br /></p>
                    <p className="text-sm text-gray-500">Registered Business in Kenya</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 p-3 rounded-full mt-1">
                    <FaPhoneAlt className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Phone</h3>
                    <p className="text-lg">+254 748 421 758</p>
                    <p className="text-sm text-gray-500">Mon-Sat, 8am-6pm (EAT)</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 p-3 rounded-full mt-1">
                    <FaEnvelope className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <p className="text-lg">info.brandriko.digital@gmail.com</p>
                    <p className="text-sm text-gray-500">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 p-3 rounded-full mt-1">
                    <FaClock className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
                    <p className="text-lg">Monday - Saturday: 8:00am - 6:00pm </p>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="mt-12 rounded-xl overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.964182!2d36.817223!3d-1.286389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d4c1d7c1b1%3A0xabcdef1234567890!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1620000000000!5m2!1sen!2ske" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Brandriko Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Not Sure Where to Start?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book a free 30-minute consultation with our digital strategist to discuss your project needs.
          </p>
          <button className="btn btn-secondary text-white px-8 py-4 text-lg">
            Schedule Free Consultation
          </button>
        </div>
      </section>
    </main>
  );
}
