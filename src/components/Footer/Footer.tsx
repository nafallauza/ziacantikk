import { Link } from 'react-router-dom';
import { Heart, Mail, Sparkles } from 'lucide-react';
import { Instagram, Linkedin, Github } from '../SocialIcons';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {

  return (
    <footer className="border-t border-zinc-200/80 bg-white/70 backdrop-blur-sm py-12 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 text-center">
        {/* Brand */}
        <div className="flex flex-col items-center gap-2">
          <Link to="/" className="flex items-center gap-2 text-zinc-900 font-semibold tracking-tight text-base group">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-rose-50 text-rose-600 border border-rose-200/60 group-hover:scale-105 transition-transform">
              <Sparkles size={14} />
            </span>
            <span>Nur Azizah Safriyani Susanti</span>
          </Link>
          <p className="text-xs text-zinc-500 max-w-sm">
            Mahasiswi S1 Akuntansi · Fakultas Ekonomi & Bisnis Universitas Brawijaya
          </p>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-zinc-600">
          <Link to="/" className="hover:text-zinc-900 transition-colors">Beranda</Link>
          <Link to="/about" className="hover:text-zinc-900 transition-colors">Profil</Link>
          <Link to="/portfolio" className="hover:text-zinc-900 transition-colors">Prestasi & Sertifikat</Link>
          <Link to="/skills" className="hover:text-zinc-900 transition-colors">Keahlian</Link>
          <Link to="/contact" className="hover:text-zinc-900 transition-colors">Kontak</Link>
        </nav>

        {/* Socials */}
        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-50 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 border border-zinc-200/60 transition-all hover:-translate-y-0.5"
            aria-label="Instagram"
          >
            <Instagram size={16} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-50 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 border border-zinc-200/60 transition-all hover:-translate-y-0.5"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-50 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 border border-zinc-200/60 transition-all hover:-translate-y-0.5"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="mailto:azizah@example.com"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-50 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 border border-zinc-200/60 transition-all hover:-translate-y-0.5"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>

        {/* Bottom line */}
        <div className="w-full pt-6 border-t border-zinc-200/60 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-3">
          <p>&copy; {CURRENT_YEAR} Nur Azizah. All rights reserved.</p>
          <p className="flex items-center gap-1.5 font-medium text-zinc-600">
            Crafted with <Heart size={13} className="text-rose-500 fill-rose-500 animate-pulse" /> by Lauza
          </p>
        </div>
      </div>
    </footer>
  );
}
