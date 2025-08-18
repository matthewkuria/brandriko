import HeroSection from "./components/HeroSection";
import ServicesShowcase from "./components/ServicesShowcase";
import Testimonials from "./components/Testimonials";






export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesShowcase />
      {/* <ProcessSection /> */}
      <Testimonials />
      {/* <BrandElevationCTA /> */}
    </main>
  );
}