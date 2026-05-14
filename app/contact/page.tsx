'use client'

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaCalendarCheck, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-orange-600 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] bg-blue-600 rounded-full blur-[120px]" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 text-center mt-10">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-widest uppercase bg-orange-600/20 text-orange-400 rounded-full border border-orange-600/30">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Ready to <span className="text-orange-500">Connect?</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether you have a specific project in mind or just want to explore the possibilities, we’re here to help you navigate the digital landscape.
          </p>
        </div>
      </section>

      {/* Contact Content Area */}
      <section className="py-24 -mt-16 relative z-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              
              {/* Contact Cards */}
              {[
                { 
                    icon: <FaPhoneAlt />, 
                    title: 'Call Us', 
                    content: '+254 718 421 871', 
                    sub: 'Available Mon-Sat, 8am-6pm',
                    link: 'tel:+254718421871',
                    color: 'bg-blue-50 text-blue-600'
                },
                { 
                    icon: <FaWhatsapp />, 
                    title: 'WhatsApp', 
                    content: 'Chat with us now', 
                    sub: 'Fastest response time',
                    link: 'https://wa.me/254718421871',
                    color: 'bg-green-50 text-green-600'
                },
                { 
                    icon: <FaEnvelope />, 
                    title: 'Email Us', 
                    content: 'info.brandriko.digital@gmail.com', 
                    sub: 'We reply within 24 hours',
                    link: 'mailto:info.brandriko.digital@gmail.com',
                    color: 'bg-orange-50 text-orange-600'
                },
                { 
                    icon: <FaMapMarkerAlt />, 
                    title: 'Visit Us', 
                    content: 'Nakuru, Kenya', 
                    sub: 'Central Business District',
                    link: '#map',
                    color: 'bg-slate-100 text-slate-700'
                }
              ].map((item, idx) => (
                <a 
                  href={item.link} 
                  key={idx} 
                  target={item.link.startsWith('http') ? "_blank" : undefined}
                  className="group flex items-center gap-6 p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center text-2xl transition-transform group-hover:scale-110 ${item.color}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{item.title}</h4>
                    <p className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">{item.content}</p>
                    <p className="text-sm text-slate-500 font-medium">{item.sub}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Map Section */}
            <div id="map" className="mt-12 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127640.34440813872!2d36.00234762507202!3d-0.302621008035222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d4c1d7c1b1%3A0xabcdef1234567890!2sNakuru%2C%20Kenya!5e0!3m2!1sen!2ske!4v1620000000000" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Brandriko Office"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-br from-orange-600 to-orange-500 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-orange-600/30">
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-8 rotate-3">
                <FaCalendarCheck className="text-4xl" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-6">Need a Custom Strategy?</h2>
              <p className="text-lg md:text-xl text-orange-50 mb-10 leading-relaxed">
                Skip the back-and-forth emails. Book a free 30-minute discovery call directly on our calendar.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="w-full sm:w-auto bg-white text-orange-600 hover:bg-slate-100 px-10 py-4 text-lg font-black rounded-2xl transition-all shadow-xl active:scale-95">
                  Book Free Discovery Call
                </button>
                <button className="w-full sm:w-auto bg-orange-700/30 hover:bg-orange-700/50 backdrop-blur-sm text-white border border-white/20 px-10 py-4 text-lg font-bold rounded-2xl transition-all">
                  View Our Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}