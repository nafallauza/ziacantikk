import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Beranda' },
  { path: '/about', label: 'Profil' },
  { path: '/portfolio', label: 'Prestasi' },
  { path: '/skills', label: 'Keahlian' },
  { path: '/contact', label: 'Kontak' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pb-2 transition-all duration-300">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        className={`w-full max-w-4xl rounded-full transition-all duration-300 border ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md border-zinc-200/90 shadow-[0_8px_30px_rgba(0,0,0,0.06)] py-2.5 px-6'
            : 'bg-white/70 backdrop-blur-sm border-zinc-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)] py-3 px-6'
        } flex items-center justify-between`}
      >
        {/* Brand / Name */}
        <NavLink to="/" className="group flex items-center gap-2 text-zinc-900 font-semibold tracking-tight text-sm md:text-base">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-rose-50 text-rose-600 border border-rose-200/60 group-hover:bg-rose-100 transition-colors">
            <Sparkles size={14} />
          </span>
          <span className="font-medium text-zinc-900">Nur Azizah</span>
          <span className="hidden sm:inline-block text-xs font-normal text-zinc-400">· FEB UB</span>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 ${
                  isActive ? 'text-zinc-900' : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-pill"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-0 bg-zinc-100 rounded-full -z-10 border border-zinc-200/60"
                  />
                )}
                {item.label}
              </NavLink>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <NavLink
            to="/contact"
            className="text-xs font-medium px-4 py-1.5 rounded-full bg-zinc-900 text-white hover:bg-zinc-800 transition-all duration-200 hover:shadow-sm active:scale-95"
          >
            Hubungi
          </NavLink>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-700 hover:bg-zinc-200 transition-colors"
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
            className="fixed top-20 left-4 right-4 z-50 rounded-2xl bg-white/95 backdrop-blur-xl border border-zinc-200/90 shadow-xl p-4 flex flex-col gap-1 md:hidden"
          >
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-rose-50 text-rose-700 font-semibold'
                      : 'text-zinc-700 hover:bg-zinc-100'
                  }`}
                >
                  {item.label}
                </NavLink>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
