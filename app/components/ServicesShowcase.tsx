"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Digital Branding",
    description:
      "Our digital branding services craft memorable visual identities that establish brand recognition and emotional connections with your target audience through strategic logo design, color psychology, and consistent brand messaging across all digital touchpoints.",
    icon: "🖌️",
    slug: "digital-branding",
    keywords: ["brand identity", "logo design", "visual branding"],
  },
  {
    title: "Graphic Design",
    description:
      "Professional graphic design solutions that transform your marketing materials into visually compelling assets, including brochures, business cards, banners, and social media graphics designed to maximize engagement and conversion rates.",
    icon: "🎨",
    slug: "graphic-design",
    keywords: ["print design", "marketing materials", "visual content"],
  },
  {
    title: "Social Media Branding",
    description:
      "End-to-end social media branding packages that develop cohesive visual identities across platforms, including profile optimization, content strategy, and platform-specific designs to boost your social media presence and follower engagement.",
    icon: "📱",
    slug: "social-media",
    keywords: ["social media marketing", "content strategy", "platform branding"],
  },
  {
    title: "Website Design & Development",
    description:
      "Custom website design and development services that create responsive, user-friendly sites with optimized conversion paths, fast load times, and mobile-first designs to maximize your online visibility and lead generation.",
    icon: "💻",
    slug: "web-design",
    keywords: ["responsive design", "UX/UI", "conversion optimization"],
  },
  {
    title: "SEO Services",
    description:
      "Comprehensive SEO strategies including keyword research, on-page optimization, technical SEO audits, and content optimization to improve your search rankings and drive qualified organic traffic to your website.",
    icon: "🔍",
    slug: "seo",
    keywords: ["search engine optimization", "keyword strategy", "organic traffic"],
  },
  {
    title: "Digital Marketing",
    description:
      "Data-driven digital marketing campaigns leveraging PPC advertising, email marketing, and conversion rate optimization to increase your online visibility, generate qualified leads, and maximize marketing ROI.",
    icon: "📈",
    slug: "digital-marketing",
    keywords: ["PPC advertising", "email campaigns", "lead generation"],
  },
];

export default function ServicesShowcase() {
  return (
    <section
      id="services"
      className="py-20 bg-base-100"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div
          className="text-center mb-12"
          itemProp="provider"
          itemScope
          itemType="https://schema.org/Organization"
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 text-secondary"
            itemProp="name"
          >
            Our <span className="text-primary">Digital Solutions</span>
          </h2>
          <meta
            itemProp="description"
            content="Comprehensive digital services to grow your business online"
          />
          <p className="text-lg md:text-xl text-neutral max-w-2xl mx-auto">
            Professional services designed to{" "}
            <span itemProp="slogan">
              elevate your online presence and drive measurable results
            </span>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              itemScope
              itemType="https://schema.org/Service"
              className="card bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/30 group rounded-2xl"
            >
              <Link
                href={`/services/${service.slug}`}
                className="block h-full"
                itemProp="url"
              >
                <div className="card-body items-center text-center p-8">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 8 }}
                    className="w-20 h-20 flex items-center justify-center rounded-2xl bg-primary/5 group-hover:bg-primary/10 transition-all duration-300 mb-6"
                  >
                    <span
                      className="text-4xl"
                      itemProp="image"
                      aria-hidden="true"
                    >
                      {service.icon}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <h3
                    className="card-title text-secondary text-xl font-semibold mb-3"
                    itemProp="serviceType"
                  >
                    {service.title}
                  </h3>
                  <meta
                    itemProp="keywords"
                    content={service.keywords.join(", ")}
                  />

                  {/* Description */}
                  <p className=" mb-5" itemProp="description">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <div className="card-actions mt-auto">
                    <button
                      className="btn btn-sm btn-ghost text-primary group-hover:underline flex items-center gap-2"
                      aria-label={`Learn more about ${service.title}`}
                      itemProp="hasOfferCatalog"
                    >
                      Learn more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <p className="text-lg mb-6 text-neutral">
            Need a customized solution for your business?
          </p>
          <Link
            href="/contact"
            className="btn btn-primary px-8 py-4 text-lg rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105"
            itemProp="potentialAction"
            itemScope
            itemType="https://schema.org/ContactPage"
          >
            Request Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
