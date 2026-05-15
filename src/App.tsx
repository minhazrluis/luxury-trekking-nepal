import { useScrollReveal } from './hooks/useScrollReveal';
import SvgSprite from './components/SvgSprite';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import DiscoverSection from './sections/DiscoverSection';
import FeaturedToursSection from './sections/FeaturedToursSection';
import ExpeditionSection from './sections/ExpeditionSection';
import AboutSection from './sections/AboutSection';
import StatsSection from './sections/StatsSection';
import DeparturesSection from './sections/DeparturesSection';
import JournalSection from './sections/JournalSection';
import AffiliatesSection from './sections/AffiliatesSection';
import CTASection from './sections/CTASection';
import Footer from './components/Footer';

export default function App() {
  useScrollReveal('.reveal');

  return (
    <>
      <SvgSprite />
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeSection />
        <DiscoverSection />
        <FeaturedToursSection />
        <ExpeditionSection />
        <AboutSection />
        <StatsSection />
        <DeparturesSection />
        <JournalSection />
        <AffiliatesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
