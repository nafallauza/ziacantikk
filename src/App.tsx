import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import HeroSection from './sections/HeroSection';
import ProfileSection from './sections/ProfileSection';
import PortfolioSection from './sections/PortfolioSection';
import SkillsSection from './sections/SkillsSection';
import ContactSection from './sections/ContactSection';
import './App.css';

export default function App() {
  return (
    <div className="min-h-screen bg-[#58728D] py-3 sm:py-7 px-2 sm:px-5 flex justify-center">
      {/* Outer rounded card sheet modeled after Haneul design */}
      <div className="w-full max-w-5xl bg-[#F8FAFC] rounded-[28px] sm:rounded-[38px] shadow-[0_24px_70px_rgba(20,38,56,0.3)] border border-white/30 overflow-hidden relative">
        <Navbar />
        <main>
          <HeroSection />
          <ProfileSection />
          <PortfolioSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}
