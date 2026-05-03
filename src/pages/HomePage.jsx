import Hero from '../components/home/Hero';
import ServicesOverview from '../components/home/ServicesOverview';
import StatsSection from '../components/home/StatsSection';
import FeaturedPortfolio from '../components/home/FeaturedPortfolio';
import TestimonialsCarousel from '../components/home/TestimonialsCarousel';
import CTAStrip from '../components/sections/CTAStrip';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesOverview />
      <StatsSection />
      <FeaturedPortfolio />
      <TestimonialsCarousel />
      <CTAStrip />
    </main>
  );
}
