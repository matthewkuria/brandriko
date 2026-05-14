'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCalendarCheck,
  FaWhatsapp,
  FaArrowRight,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const contactItems = [
  {
    icon: <FaPhoneAlt />,
    title: 'Call Us',
    content: '+254 718 421 871',
    sub: 'Available Mon - Sat, 8am - 6pm',
    link: 'tel:+254718421871',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: <FaWhatsapp />,
    title: 'WhatsApp',
    content: 'Chat With Us',
    sub: 'Fastest response time',
    link: 'https://wa.me/254718421871',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email Us',
    content: 'info.brandriko.digital@gmail.com',
    sub: 'Response within 24 hours',
    link: 'mailto:info.brandriko.digital@gmail.com',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Visit Us',
    content: 'Nakuru, Kenya',
    sub: 'Central Business District',
    link: '#map',
    color: 'bg-slate-100 text-slate-700',
  },
];

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-white">
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-black/80 text-white">

          {/* Phone Background Image */}
          <div className="absolute inset-0 opacity-[0.08]">
            <Image
              src="https://images.pexels.com/photos/5332442/pexels-photo-5332442.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Contact Brandriko Digital Solutions - Web Design, Branding, and Digital Services in Kenya"
              fill
              priority
              className="object-contain object-right"
            />
          </div>

        <div className="container relative z-10 mx-auto px-6 pt-32 pb-28">
          <div className="max-w-4xl">            

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl"
            >
              Let’s Build Your
              <span className="block text-orange-500">
                Digital Presence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg"
            >
              We help businesses establish a strong online presence through
              modern websites, branding, SEO, and digital solutions tailored
              for growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="https://wa.me/254718421871"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-orange-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-orange-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-700 focus:outline-none focus:ring-4 focus:ring-orange-300 sm:w-auto"
              >
                Chat on WhatsApp
                <FaArrowRight />
              </a>

              <Link
                href="/services"
                className="inline-flex w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-white/20 sm:w-auto"
              >
                View Our Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="relative z-20 -mt-14 pb-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
            {contactItems.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.link}
                target={item.link.startsWith('http') ? '_blank' : undefined}
                rel={
                  item.link.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group flex items-start gap-5 rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-orange-200"
              >
                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-2xl transition-transform duration-300 group-hover:scale-110 ${item.color}`}
                >
                  {item.icon}
                </div>

                <div className="min-w-0">
                  <h2 className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
                    {item.title}
                  </h2>

                  <p className="break-words text-lg font-black text-slate-900 transition-colors duration-300 group-hover:text-orange-600 sm:text-xl">
                    {item.content}
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-500">
                    {item.sub}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* MAP SECTION */}
          <motion.div
            id="map"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-[2.5rem] border-8 border-white bg-white shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps?q=Nakuru,+Kenya&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '500px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Brandriko Digital Solutions Location"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}