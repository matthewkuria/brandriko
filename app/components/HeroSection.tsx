export default function HeroSection() {
  return (
    <div
      className="hero min-h-screen relative"  
    >
      {/* Overlay for readability */}
      <div className="bg-opacity-60"></div>

      {/* Content */}
      <div className=" text-center text-neutral-content px-4">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-primary">Elevate</span> Your Brand with<br />
            Powerful Digital Solutions
          </h1>
          <p className="mb-6 text-lg sm:text-xl">
            We help businesses stand out with strategic branding, stunning designs, 
            and results-driven digital marketing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-primary text-white px-8 py-3">
              Get Started
            </button>
            <button className="btn btn-outline btn-accent px-8 py-3">
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
