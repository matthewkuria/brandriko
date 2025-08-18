import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image with alt text for SEO */}
          <div className="lg:w-1/2">
            <div className="relative h-96 w-full rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/brandriko_team.png"
                alt="Brandriko Digital Solutions team working on digital projects"
                fill
                className="object-cover hover:scale-105 transition duration-700"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl font-bold mb-6 text-secondary">
              About <span className="text-primary">Brandriko</span> Digital Solutions
            </h1>
            
            <p className="text-lg mb-6">
              Brandriko Digital Solutions is a full-service digital agency specializing in helping businesses and individuals grow through expert <strong>digital branding, marketing, and technology solutions</strong>. Based in Nakuru, we serve clients worldwide with innovative strategies and cutting-edge execution. 
              <br /><br />
              <strong>Brandriko is a registered business in Kenya</strong>, ensuring compliance, trust, and professionalism in all our operations.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <span className="text-primary text-xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-secondary">Our Mission</h3>
                  <p>
                    To empower businesses with <strong>strategic digital solutions</strong> that elevate their brand presence, engage their audience, and drive measurable growth in today's competitive digital landscape.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <span className="text-primary text-xl">✨</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-secondary">What We Do</h3>
                  <p>
                    We offer comprehensive services including <strong>graphic design, social media branding, website development, SEO, IT Support, and digital marketing</strong> — all designed to create cohesive, impactful brand experiences.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <span className="text-primary text-xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-secondary">Our Approach</h3>
                  <p>
                    Combining <strong>creative excellence with technical expertise</strong>, we deliver customized solutions that align with your business goals and resonate with your target audience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section for E-E-A-T */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-primary/5 rounded-xl">
            <div className="text-4xl font-bold text-primary">50+</div>
            <div className="text-secondary">Satisfied Clients</div>
          </div>
          <div className="p-6 bg-primary/5 rounded-xl">
            <div className="text-4xl font-bold text-primary">100+</div>
            <div className="text-secondary">Projects Completed</div>
          </div>
          <div className="p-6 bg-primary/5 rounded-xl">
            <div className="text-4xl font-bold text-primary">5+</div>
            <div className="text-secondary">Years Experience</div>
          </div>
          <div className="p-6 bg-primary/5 rounded-xl">
            <div className="text-4xl font-bold text-primary">95%</div>
            <div className="text-secondary">Client Retention</div>
          </div>
        </div>
      </div>
    </section>
  );
}
