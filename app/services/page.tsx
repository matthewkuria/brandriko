import FAQSection from "../components/services/FAQSection";
import ServicesCTA from "../components/services/ServicesCTA";
import ServicesHero from "../components/services/ServicesHero";


export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesCTA />
      <FAQSection />
      <ServicesCTA />
    </main>
  )
}