'use client';

import { useState, useRef, useEffect } from 'react';

const portfolioProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80",
    color: "from-purple-600 to-pink-600"
  },
  {
    id: 2,
    title: "Restaurant Management",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    color: "from-blue-600 to-cyan-600"
  },
  {
    id: 3,
    title: "Fitness Tracking App",
    category: "Mobile & Web",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    color: "from-green-600 to-teal-600"
  },
  {
    id: 4,
    title: "Real Estate Portal",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    color: "from-orange-600 to-red-600"
  },
  {
    id: 5,
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    color: "from-indigo-600 to-purple-600"
  },
  {
    id: 6,
    title: "Educational Platform",
    category: "EdTech",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    color: "from-cyan-600 to-blue-600"
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
      className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 hover:scale-[1.02]"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="aspect-[4/5] relative">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`} />
        
        <div
          ref={scrollContainerRef}
          className="h-full overflow-hidden"
          style={{ scrollBehavior: 'auto' }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover"
            style={{ minHeight: '200%' }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 z-20">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span className="text-xs font-semibold text-white/80 uppercase tracking-wider">
              {project.category}
            </span>
            <h3 className="text-2xl font-bold text-white mt-2">
              {project.title}
            </h3>
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-colors">
                View Project
              </button>
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

export default function PortfolioPage() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm">
            Our Work
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6">
            Portfolio
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Explore our latest projects and see how we transform ideas into exceptional digital experiences.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project) => (
            <PortfolioCard
              key={project.id}
              project={project}
              isHovered={hoveredId === project.id}
              onHover={() => setHoveredId(project.id)}
              onLeave={() => setHoveredId(null)}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's collaborate and bring your vision to life with cutting-edge web solutions.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all hover:scale-105">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
}