'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const portfolioProjects = [
  {
    id: 1,
    title: "Pyrowise Energy LTD",
    category: "Web Development",
    description: "A comprehensive energy solutions website with dynamic pricing calculator and service portfolio showcase for a leading energy company.",
    image: "https://res.cloudinary.com/dwhba39zm/image/upload/v1767037074/screencapture-pyrowiseenergyltd_hmdmxt.png",
    color: "from-purple-600 to-pink-600",
    tags: ["Next.js", "Tailwind CSS", "React", "SEO"],
    link: "https://pyrowiseenergyltd.com",
    featured: true,
    location: "Nakuru, Kenya"
  },
  {
    id: 2,
    title: "Jafrana Construction Works",
    category: "Web Development",
    description: "Professional construction company website showcasing services, projects, and client testimonials with interactive galleries.",
    image: "https://res.cloudinary.com/dwhba39zm/image/upload/v1769511429/screencapture-jafranaconstructionworks-co-ke-2026-01-27-13_43_22_kvkz0j.png",
    color: "from-orange-600 to-red-600",
    tags: ["WordPress",  "CMS", "Responsive"],
    link: "https://jafranaconstructionworks.co.ke",
    featured: true,
    location: "Nairobi, Kenya"
  },
  {
    id: 3,
    title: "Thika Greens Golf Resort",
    category: "Web Development and Blogging CMS",
    description: "Modern blogging platform with rich text editor, user authentication, and social sharing features.",
    image: "https://res.cloudinary.com/dwhba39zm/image/upload/v1769512465/screencapture-thikagreensgolf-co-ke-2026-01-27-13_42_49_az7nkg.png",
    color: "from-cyan-600 to-blue-600",
    tags: ["NextJS", "Python", "Docker", "VPS", "PostgreSQL", "TailwindCSS"],
    link: "https://www.thikagreensgolf.co.ke/",
    featured: true,
    location: "Kenya"
  },
  {
    id: 4,
    title: "Lanet Secondary School",
    category: "Web  Development",
    description: "Complete restaurant management solution with table booking, online ordering, and inventory management.",
    image: "https://res.cloudinary.com/dwhba39zm/image/upload/v1767108066/screencapture-lanetsecondaryschool-sc-ke-2025-12-29-22_46_33_y7fs2c.png",
    color: "from-blue-600 to-cyan-600",
    tags:  ["Next.js", "TypeScript", "Framer Motion", "Responsive"],
    link: "https://www.lanetsecondaryschool.sc.ke",
    location: "Nakuru, Kenya"
  },
  {
    id: 5,
    title: "Speak English With Paul",
    category: "Website Development",
    description: "Cross-platform fitness app with workout tracking, progress analytics, and nutrition planning.",
    image: "https://res.cloudinary.com/dwhba39zm/image/upload/v1769511409/screencapture-englishwithpaul-in-2026-01-27-13_42_22_jxmbmk.png",
    color: "from-green-600 to-teal-600",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Responsive"],
    link: "https://englishwithpaul.in/",
    location: "Kenya"
  },
  {
    id: 6,
    title: "Brandriko Digital Solutions",
    category: "Web  Design",
    description: "Modern e-commerce dashboard with sales analytics, inventory management, and customer insights.",
    image: "https://res.cloudinary.com/dwhba39zm/image/upload/v1769511421/screencapture-brandrikodigital-co-ke-2026-01-27-13_48_15_canj7w.png",
    color: "from-indigo-600 to-purple-600",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Responsive"],
    link: "https://brandrikodigital.co.ke/",
    location: "Kenya"
  }
];

function PortfolioCard({ project, isHovered, onHover, onLeave }) {
  const scrollContainerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!isHovered || !scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollHeight = container.scrollHeight - container.clientHeight;
    
    let startTime = null;
    const duration = 3000;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      container.scrollTop = scrollHeight * progress;
      setScrollProgress(progress);

      if (progress < 1 && isHovered) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      if (container) {
        container.scrollTop = 0;
      }
    };
  }, [isHovered]);

  return (
    <div
      className="portfolio-card group relative overflow-hidden rounded-2xl cursor-pointer bg-base-100 shadow-xl"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      data-aos="fade-up"
    >
      <div className="aspect-[4/5] relative">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-10`} />
        
        <div
          ref={scrollContainerRef}
          className="h-full overflow-hidden"
          style={{ scrollBehavior: 'auto' }}
        >
          <Image
            src={project.image}
            alt={`${project.title} - ${project.category} project by Brandriko Digital Solutions, ${project.location}`}
            width={800}
            height={1000}
            className="w-full h-auto object-contain"
            style={{ minHeight: '200%' }}
            priority={project.featured}
          />
        </div>

        <div className="portfolio-overlay bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6 z-20">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <div className="flex items-center justify-between mb-2">
              <span className="badge badge-primary badge-sm">
                {project.category}
              </span>
              <span className="text-xs text-white/70">
                {project.location}
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mt-2">
              {project.title}
            </h3>
            
            <p className="text-sm text-white/80 mt-3 line-clamp-2">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-4 mb-4">
              {project.tags.map((tag, index) => (
                <span key={index} className="badge badge-outline badge-sm text-white/70">
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm text-white"
              >
                <i className="fa-solid fa-external-link-alt mr-2"></i>
                View Live Project
              </a>
            </div>
          </div>
        </div>

        {isHovered && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-30">
            <div
              className="h-full bg-white transition-all duration-100"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  const [hoveredId, setHoveredId] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
  }, []);

  const categories = ['all', 'Web Development', 'Full Stack Development', 'Mobile & Web App', 'UI/UX Design'];
  
  const filteredProjects = activeFilter === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 bg-base-200" id="portfolio">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Our Portfolio
          </h1>
          <div className="divider divider-primary w-24 mx-auto"></div>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Discover our successful web development and digital marketing projects for businesses across Kenya
          </p>
          
          {/* Statistics */}
          <div className="stats stats-vertical lg:stats-horizontal shadow bg-base-100 mb-8">
            <div className="stat place-items-center">
              <div className="stat-value text-primary">15+</div>
              <div className="stat-desc">Web Projects</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-value text-secondary">95%</div>
              <div className="stat-desc">Client Satisfaction</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-value text-accent">30+</div>
              <div className="stat-desc">Technologies Used</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-value">100%</div>
              <div className="stat-desc">On-time Delivery</div>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`btn btn-sm lg:btn-md ${
                activeFilter === category 
                  ? 'btn-primary' 
                  : 'btn-outline btn-primary'
              }`}
            >
              {category === 'all' ? 'All Projects' : category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <PortfolioCard
              key={project.id}
              project={project}
              isHovered={hoveredId === project.id}
              onHover={() => setHoveredId(project.id)}
              onLeave={() => setHoveredId(null)}
            />
          ))}
        </div>

        {/* Featured Case Study */}
        <div className="mt-20" data-aos="fade-up">
          <div className="card lg:card-side bg-gradient-secondary shadow-xl">
            <figure className="lg:w-1/2">
              <Image
                src="https://res.cloudinary.com/dwhba39zm/image/upload/v1767037074/screencapture-pyrowiseenergyltd_hmdmxt.png"
                alt="Pyrowise Energy LTD - Energy Solutions Website Case Study by Brandriko Digital Solutions, Nakuru Kenya"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body lg:w-1/2">
              <div className="badge badge-primary">Featured Case Study</div>
              <h2 className="card-title text-3xl text-white">Pyrowise Energy LTD</h2>
              <p className="text-white/80">
                A comprehensive energy solutions website that increased online inquiries by 200% for a leading energy company based in Nakuru, Kenya.
              </p>
              
              <div className="space-y-4 mt-6">
                <div>
                  <h4 className="font-semibold text-white mb-2">Challenge</h4>
                  <p className="text-white/70">Outdated website with poor mobile experience and low conversion rates.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Solution</h4>
                  <p className="text-white/70">Modern Next.js website with dynamic pricing calculator and service portfolio showcase.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Results</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">200%</div>
                      <div className="text-sm text-white/70">More Inquiries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white">60%</div>
                      <div className="text-sm text-white/70">Faster Load Time</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card-actions justify-end mt-6">
                <a
                  href="https://pyrowiseenergyltd.co.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View Case Study Details
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies We Use */}
        <div className="mt-20" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Technologies We Work With</h2>
            <div className="divider divider-primary w-24 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {[
              { name: 'Next.js', icon: 'fa-react', color: 'text-blue-400' },
              { name: 'React', icon: 'fa-react', color: 'text-cyan-400' },
              { name: 'TypeScript', icon: 'fa-code', color: 'text-blue-500' },
              { name: 'Tailwind CSS', icon: 'fa-css3-alt', color: 'text-teal-400' },
              { name: 'Node.js', icon: 'fa-node-js', color: 'text-green-500' },
              { name: 'MongoDB', icon: 'fa-database', color: 'text-green-400' },
            ].map((tech, index) => (
              <div key={index} className="card bg-base-100 shadow-sm">
                <div className="card-body items-center text-center p-4">
                  <i className={`fa-brands ${tech.icon} ${tech.color} text-3xl mb-2`}></i>
                  <h3 className="font-semibold">{tech.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center" data-aos="fade-up">
          <div className="card bg-gradient-primary text-primary-content shadow-xl">
            <div className="card-body py-16">
              <h2 className="card-title justify-center text-3xl md:text-4xl mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let&apos;s collaborate and bring your vision to life with cutting-edge web solutions tailored for the Kenyan market.
              </p>
              <div className="card-actions justify-center">
                <Link href="/contact" className="btn btn-secondary btn-lg">
                  <i className="fa-solid fa-calendar-check mr-2"></i>
                  Get Free Consultation
                </Link>
                <a
                  href="tel:+254XXXXXXXXX"
                  className="btn btn-outline btn-lg text-white hover:bg-white hover:text-secondary"
                >
                  <i className="fa-solid fa-phone mr-2"></i>
                  Call Us Now
                </a>
              </div>
              
              <div className="divider divider-white/20 max-w-md mx-auto"></div>
              
              <p className="text-sm opacity-90 mt-6">
                Based in Nakuru • Serving All of Kenya • 5+ Years Experience
              </p>
            </div>
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="mt-20" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">What Our Clients Say</h2>
            <div className="divider divider-primary w-24 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "John Mwangi",
                company: "Pyrowise Energy LTD",
                quote: "Brandriko transformed our online presence. Our website now generates 3x more leads than before.",
                rating: 5
              },
              {
                name: "Sarah Ochieng",
                company: "Jafrana Construction",
                quote: "Professional team with excellent communication. They delivered exactly what we needed.",
                rating: 5
              },
              {
                name: "David Kimani",
                company: "Tech Solutions Ltd",
                quote: "Their attention to detail and understanding of Kenyan market needs is impressive.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <div className="rating rating-sm">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <input key={i} type="radio" className="mask mask-star-2 bg-orange-400" readOnly />
                    ))}
                  </div>
                  <p className="italic text-base-content/80 mb-6">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-base-content/60">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}