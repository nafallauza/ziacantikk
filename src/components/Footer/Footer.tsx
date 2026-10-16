import { Heart } from 'lucide-react';
import { Instagram, Linkedin, Github } from '../SocialIcons';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#E2EAF1] bg-white py-14 px-6 sm:px-12 w-full">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Column: Editorial Policy Links (Modeled after Haneul left links) */}
        <div className="flex flex-col items-center md:items-start space-y-2 text-xs font-medium text-[#6B8298]">
          <button
            onClick={() => scrollTo('prestasi')}
            className="hover:text-[#1E2E3E] transition-colors text-left"
          >
            Arsip Sertifikat Resmi
          </button>
          <button
            onClick={() => scrollTo('profil')}
            className="hover:text-[#1E2E3E] transition-colors text-left"
          >
            Riwayat Akademik FEBI UINSA
          </button>
          <a
            href="mailto:59zizahss@gmail.com"
            className="hover:text-[#1E2E3E] transition-colors text-left"
          >
            Informasi Kontak & Verifikasi
          </a>
        </div>

        {/* Center: Brand Typography (Exact HANEUL brand styling) */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-[0.25em] text-[#1E2E3E] uppercase font-heading">
            NUR AZIZAH
          </h2>
          <p className="text-[11px] text-[#7E96AC] tracking-wider uppercase mt-1">
            FEBI UIN Sunan Ampel Surabaya
          </p>
        </div>

        {/* Right Column: Circular Socials & Nav (Exact Haneul right section) */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          {/* Social Icons in Clean Circles */}
          <div className="flex items-center gap-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D5E1ED] text-[#4A6277] hover:text-[#1E2E3E] hover:bg-[#EBF1F7] transition-all shadow-xs"
              aria-label="Instagram"
            >
              <Instagram size={15} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D5E1ED] text-[#4A6277] hover:text-[#1E2E3E] hover:bg-[#EBF1F7] transition-all shadow-xs"
              aria-label="LinkedIn"
            >
              <Linkedin size={15} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D5E1ED] text-[#4A6277] hover:text-[#1E2E3E] hover:bg-[#EBF1F7] transition-all shadow-xs"
              aria-label="GitHub"
            >
              <Github size={15} />
            </a>
          </div>

          {/* Quick Links */}
          <nav className="flex items-center gap-3 text-xs font-medium text-[#556E84]">
            <button onClick={() => scrollTo('beranda')} className="hover:text-[#1E2E3E] transition-colors">
              Beranda
            </button>
            <span>·</span>
            <button onClick={() => scrollTo('prestasi')} className="hover:text-[#1E2E3E] transition-colors">
              Prestasi
            </button>
            <span>·</span>
            <button onClick={() => scrollTo('kontak')} className="hover:text-[#1E2E3E] transition-colors">
              Kontak
            </button>
          </nav>
        </div>
      </div>

      {/* Bottom Subtext */}
      <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-[#E8EFF6] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#8EA3B8] gap-3">
        <p>&copy; {CURRENT_YEAR} Nur Azizah Safriyani Susanti. All rights reserved.</p>
        <p className="flex items-center gap-1.5 font-medium text-[#4A6277]">
          Dibuat dengan cinta <Heart size={12} className="text-[#3E556B] fill-[#3E556B]" /> oleh Lauza
        </p>
      </div>
    </footer>
  );
}
