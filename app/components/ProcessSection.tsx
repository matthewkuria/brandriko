"use client";
import { FaLightbulb, FaPenFancy, FaCode, FaRocket } from 'react-icons/fa';
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

export default function ProcessSection() {
  const processSteps = [
    {
      icon: <FaLightbulb className="text-3xl text-primary" />,
      title: "Discovery & Strategy",
      description: "We analyze your business goals, target audience, and competition to create a customized digital strategy.",
      keyFeatures: [
        "Market research",
        "Competitor analysis",
        "Goal setting"
      ]
    },
    {
      icon: <FaPenFancy className="text-3xl text-primary" />,
      title: "Design & Branding",
      description: "Our creative team develops visually stunning designs that reflect your brand identity and resonate with your audience.",
      keyFeatures: [
        "Brand identity",
        "UI/UX design",
        "Visual assets creation"
      ]
    },
    {
      icon: <FaCode className="text-3xl text-primary" />,
      title: "Development & Implementation",
      description: "We build robust digital solutions using cutting-edge technologies to bring your vision to life.",
      keyFeatures: [
        "Web development",
        "Mobile optimization",
        "Quality assurance"
      ]
    },
    {
      icon: <FaRocket className="text-3xl text-primary" />,
      title: "Launch & Growth",
      description: "We don't just deliver projects - we ensure continuous improvement and growth through analytics and optimization.",
      keyFeatures: [
        "Performance tracking",
        "SEO optimization",
        "Ongoing support"
      ]
    }
  ];

  const containerRef = useRef(null);

  // Hook that tracks scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 100px", "end end"]
  });

  // Smooth animation for progress line
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="process" className="py-20 bg-base-100" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-secondary">
            Our <span className="text-primary">Process</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto">
            A structured approach to delivering exceptional digital solutions that drive results
          </p>
        </div>

        <div className="relative">
          {/* Progress line (animated) */}
          <motion.div 
            className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-primary/30 -translate-x-1/2 origin-top"
            style={{ scaleY }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="relative bg-base-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-base-200"
              >
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="mb-4">
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-semibold mb-3 text-secondary">{step.title}</h3>
                <p className="mb-4">{step.description}</p>
                
                {/* Key features */}
                <ul className="space-y-2">
                  {step.keyFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-secondary">
            Ready to start your digital transformation journey?
          </h3>
          <button className="btn btn-primary text-white px-8 py-4 text-lg">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}
