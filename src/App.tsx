import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop';
import PortalHeroSection from './sections/PortalHeroSection';
import ProfileSection from './sections/ProfileSection';
import PanoramicSpreadHero from './components/ui/panoramic-spread-hero';
import ContactSection from './sections/ContactSection';
import './App.css';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#1E2E3E] antialiased selection:bg-[#DCE7F2] selection:text-[#1E2E3E]">
      <Navbar />
      <main>
        {/* 1. Home (Glyph Portal cover) & 2. About (Blue section with 3D Lanyard ID Card) */}
        <PortalHeroSection />

        {/* 3. Sertifikat (3D Panoramic Interactive Deck) */}
        <div id="sertifikat" className="scroll-mt-20">
          <div id="prestasi" className="sr-only" />
          <PanoramicSpreadHero />
        </div>

        {/* 4. Experience (Education, Leadership & Organizations) */}
        <div id="experience" className="scroll-mt-20">
          <div id="pengalaman" className="sr-only" />
          <ProfileSection />
        </div>

        {/* 5. Contact (Hubungi Saya) */}
        <div id="contact" className="scroll-mt-20">
          <ContactSection />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
