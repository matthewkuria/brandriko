import AboutSection from "./components/AboutSection";
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
    </main>
  );
}