import AboutSection from "./components/AboutSection";
import BrandElevationCTA from "./components/BrandElevationCTA";
import HeroSection from "./components/HeroSection";
import ProcessSection from "./components/ProcessSection";
import ServicesShowcase from "./components/ServicesShowcase";
import Testimonials from "./components/Testimonials";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesShowcase />
      <ProcessSection />
      <Testimonials />
      <BrandElevationCTA />
    </main>
  );
}