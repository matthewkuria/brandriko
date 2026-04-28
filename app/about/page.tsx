import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "About Brandriko Digital Solutions | Affordable Web Design in Kenya",
  description:
    "Learn more about Brandriko Digital Solutions, a leading provider of affordable web design in Kenya. We design modern websites that help businesses grow.",
}

export default function AboutPage() {
  return (
    <main className="bg-base-100 text-base-content">

      {/* HERO */}
      <section className="py-20 text-center bg-brand-charcoal text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-brand-orange">Brandriko Digital </span>Solutions
          </h1>
          <p className="text-lg text-gray-300">
            Your trusted partner for affordable web design in Kenya—helping businesses build modern websites that attract customers and grow online.
          </p>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              We Build Websites That Help Businesses Grow
            </h2>

            <div className="space-y-4 text-base-content/80">
              <p>
                <strong>Brandriko Digital Solutions</strong> is a web design and development agency based in Kenya, focused on delivering affordable web design services for businesses of all sizes.
              </p>

              <p>
                We specialize in creating modern, responsive websites and landing pages that are designed to attract customers, improve user experience, and increase conversions.
              </p>

              <p>
                As one of the growing web design companies in Kenya, our mission is simple—provide high-quality, results-driven digital solutions at a price businesses can afford.
              </p>

              <p>
                Whether you are a startup, small business, or established company, we help you build a strong online presence that stands out in today’s competitive digital space.
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg"
              alt="Affordable web design company in Kenya creating modern business websites"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">

          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Our Web Design Services in Kenya?
            </h2>
            <p className="text-base-content/70">
              We combine modern design, development expertise, and business strategy to deliver websites that perform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                title: "Affordable Pricing",
                desc: "Get professional web design in Kenya without overspending.",
              },
              {
                title: "Results-Driven Design",
                desc: "We focus on creating websites that generate leads and customers.",
              },
              {
                title: "Modern Technology",
                desc: "Built with fast, secure, and scalable technologies.",
              },
              {
                title: "Responsive & SEO Ready",
                desc: "Optimized for mobile devices and search engines.",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-base-100 rounded-xl shadow">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-base-content/70">{item.desc}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              How We Work
            </h2>
            <p className="text-base-content/70">
              Our process is simple, transparent, and focused on delivering results quickly.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">1. Discovery</h3>
              <p className="text-sm text-base-content/70">
                We understand your business goals, target audience, and project requirements.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">2. Design & Development</h3>
              <p className="text-sm text-base-content/70">
                We design and build a modern, responsive website tailored to your needs.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">3. Launch & Growth</h3>
              <p className="text-sm text-base-content/70">
                We launch your website and ensure it is optimized for performance and growth.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-charcoal text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Work with a Reliable Web Design Company in Kenya?
          </h2>

          <p className="text-gray-300 mb-6">
            Let’s build a website that attracts customers and helps your business grow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-primary">
              Start a Project
            </Link>
            <Link href="/portfolio" className="btn btn-outline btn-primary">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}