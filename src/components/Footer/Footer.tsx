import { Heart, Mail, Sparkles } from 'lucide-react';
import { Instagram, Linkedin, Github } from '../SocialIcons';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#E2EAF1] bg-[#F7FAFD]/80 backdrop-blur-sm py-12 px-6 rounded-b-[36px]">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 text-center">
        {/* Brand */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 text-[#203243] font-semibold tracking-tight text-base group">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EBF1F7] text-[#4A6277] border border-[#D5E1ED] group-hover:scale-105 transition-transform">
              <Sparkles size={14} />
            </span>
            <span className="font-heading font-bold text-lg tracking-tight">Nur Azizah Safriyani Susanti</span>
          </div>
          <p className="text-xs text-[#6B8298] max-w-sm">
            Mahasiswi S1 Akuntansi · Fakultas Ekonomi & Bisnis Universitas Brawijaya
          </p>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-[#556E84]">
          <button onClick={() => scrollTo('beranda')} className="hover:text-[#1E2E3E] transition-colors">Beranda</button>
          <button onClick={() => scrollTo('profil')} className="hover:text-[#1E2E3E] transition-colors">Profil</button>
          <button onClick={() => scrollTo('prestasi')} className="hover:text-[#1E2E3E] transition-colors">Prestasi & Sertifikat</button>
          <button onClick={() => scrollTo('keahlian')} className="hover:text-[#1E2E3E] transition-colors">Keahlian</button>
          <button onClick={() => scrollTo('kontak')} className="hover:text-[#1E2E3E] transition-colors">Kontak</button>
        </nav>

        {/* Socials */}
        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#4A6277] hover:text-[#1E2E3E] hover:bg-[#EBF1F7] border border-[#D5E1ED] transition-all hover:-translate-y-0.5 shadow-sm"
            aria-label="Instagram"
          >
            <Instagram size={16} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#4A6277] hover:text-[#1E2E3E] hover:bg-[#EBF1F7] border border-[#D5E1ED] transition-all hover:-translate-y-0.5 shadow-sm"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#4A6277] hover:text-[#1E2E3E] hover:bg-[#EBF1F7] border border-[#D5E1ED] transition-all hover:-translate-y-0.5 shadow-sm"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="mailto:azizah@example.com"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#4A6277] hover:text-[#1E2E3E] hover:bg-[#EBF1F7] border border-[#D5E1ED] transition-all hover:-translate-y-0.5 shadow-sm"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>

        {/* Bottom line */}
        <div className="w-full pt-6 border-t border-[#E2EAF1] flex flex-col sm:flex-row items-center justify-between text-xs text-[#7E96AC] gap-3">
          <p>&copy; {CURRENT_YEAR} Nur Azizah. All rights reserved.</p>
          <p className="flex items-center gap-1.5 font-medium text-[#4A6277]">
            Crafted with <Heart size={13} className="text-[#3E556B] fill-[#3E556B] animate-pulse" /> by Lauza
          </p>
        </div>
      </div>
    </footer>
  );
}
