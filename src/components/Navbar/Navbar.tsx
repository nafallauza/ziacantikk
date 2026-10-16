import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const navItems = [
  { href: '#beranda', label: 'Beranda' },
  { href: '#profil', label: 'Profil' },
  { href: '#prestasi', label: 'Prestasi' },
  { href: '#keahlian', label: 'Keahlian' },
  { href: '#kontak', label: 'Kontak' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('beranda');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Detect active section
      const sections = ['beranda', 'profil', 'prestasi', 'keahlian', 'kontak'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pb-2 transition-all duration-300">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        className={`w-full max-w-4xl rounded-full transition-all duration-300 border ${
          scrolled
            ? 'bg-white/85 backdrop-blur-md border-white/60 shadow-[0_8px_32px_rgba(30,46,62,0.12)] py-2.5 px-6'
            : 'bg-white/70 backdrop-blur-sm border-white/40 shadow-[0_4px_20px_rgba(30,46,62,0.06)] py-3 px-6'
        } flex items-center justify-between`}
      >
        {/* Brand */}
        <button
          onClick={() => scrollTo('beranda')}
          className="group flex items-center gap-2 text-left"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EBF1F7] text-[#4A6277] border border-[#D5E1ED] group-hover:bg-[#DEE8F2] transition-colors">
            <Sparkles size={14} />
          </span>
          <span className="font-semibold text-[#203243] tracking-tight text-sm sm:text-base">
            Nur Azizah
          </span>
          <span className="hidden sm:inline-block text-xs font-normal text-[#6B8298]">· FEB UB</span>
        </button>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <button
                key={item.href}
                onClick={() => scrollTo(sectionId)}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 ${
                  isActive ? 'text-[#1F3142] font-semibold' : 'text-[#5A738E] hover:text-[#1F3142]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-nav-pill"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-0 bg-[#E8F0F7] rounded-full -z-10 border border-[#D2E0EE]"
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => scrollTo('kontak')}
            className="text-xs font-medium px-4 py-1.5 rounded-full bg-[#3E556B] hover:bg-[#2F4254] text-white transition-all shadow-sm active:scale-95"
          >
            Hubungi
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex h-8 w-8 items-center justify-center rounded-full bg-[#EBF1F7] text-[#3E556B] hover:bg-[#DEE8F2] transition-colors"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="fixed top-20 left-4 right-4 z-50 rounded-3xl bg-white/95 backdrop-blur-xl border border-white/80 shadow-2xl p-4 flex flex-col gap-1 md:hidden"
          >
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={item.href}
                  onClick={() => scrollTo(sectionId)}
                  className={`px-4 py-2.5 rounded-2xl text-left text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#EBF1F7] text-[#2F4254] font-semibold'
                      : 'text-[#5A738E] hover:bg-[#F4F7FA]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
