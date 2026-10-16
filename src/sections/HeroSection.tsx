import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Award, GraduationCap, TrendingUp, Sparkles } from 'lucide-react';
import { activityPhotos } from '../data/portfolioData';

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="ikhtisar" className="pt-8 pb-16 px-4 sm:px-8 max-w-6xl mx-auto">
      <div id="beranda" className="sr-only" />
      {/* Main Name & Narrative Heading */}
      <div className="text-center max-w-3xl mx-auto pt-2">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF1F7] border border-[#D5E1ED] text-xs font-semibold text-[#3E556B] mb-5 shadow-xs"
        >
          <Sparkles size={13} className="text-[#4A6277]" />
          <span>Portofolio Akademik & Profesional</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1E2E3E] leading-[1.18]"
        >
          Nur Azizah Safriyani <span className="text-[#4A6277]">Susanti</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.16 }}
          className="mt-4 text-xs sm:text-base text-[#556E84] leading-relaxed max-w-2xl mx-auto"
        >
          Mahasiswi S1 Ekonomi Syariah <strong className="text-[#1E2E3E] font-semibold">Fakultas Ekonomi dan Bisnis Islam (FEBI), UIN Sunan Ampel Surabaya</strong> (IPK 3.74). Berfokus pada lembaga keuangan syariah, tata kelola administrasi, riset pasar modal, serta analisis data kuantitatif dengan kepengurusan aktif Staff Muda GIS UINSA.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.24 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={() => scrollTo('prestasi')}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#3E556B] hover:bg-[#2E4254] text-white text-xs sm:text-sm font-medium transition-all shadow-[0_4px_16px_rgba(62,85,107,0.25)] active:scale-95"
          >
            Lihat Kredensial & Sertifikat
            <ArrowRight size={15} />
          </button>
          <button
            onClick={() => scrollTo('kontak')}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-[#D5E1ED] text-[#4A6277] text-xs sm:text-sm font-medium hover:bg-[#F0F5FA] transition-all shadow-xs active:scale-95"
          >
            Hubungi Saya
          </button>
        </motion.div>

        {/* Authentic Credential Badges (Bento style, NO fake percentages) */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
          <div className="p-4 rounded-2xl bg-white border border-[#E2EAF1] shadow-xs flex flex-col justify-between">
            <span className="p-2 rounded-xl bg-[#F0F5FA] border border-[#DEE8F1] w-fit text-[#4A6277]">
              <GraduationCap size={16} />
            </span>
            <div className="mt-3">
              <span className="text-[10px] font-semibold text-[#8EA3B8] uppercase tracking-wider block">Akademik</span>
              <div className="text-base sm:text-lg font-bold text-[#1E2E3E] mt-0.5">IPK 3.74</div>
              <p className="text-[11px] text-[#6B8298]">S1 Ekonomi Syariah UINSA</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#E2EAF1] shadow-xs flex flex-col justify-between">
            <span className="p-2 rounded-xl bg-[#F0F5FA] border border-[#DEE8F1] w-fit text-[#4A6277]">
              <Award size={16} />
            </span>
            <div className="mt-3">
              <span className="text-[10px] font-semibold text-[#8EA3B8] uppercase tracking-wider block">Organisasi</span>
              <div className="text-base sm:text-lg font-bold text-[#1E2E3E] mt-0.5">Staff Muda GIS</div>
              <p className="text-[11px] text-[#6B8298]">Galeri Investasi Syariah 2025</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#E2EAF1] shadow-xs flex flex-col justify-between">
            <span className="p-2 rounded-xl bg-[#F0F5FA] border border-[#DEE8F1] w-fit text-[#4A6277]">
              <TrendingUp size={16} />
            </span>
            <div className="mt-3">
              <span className="text-[10px] font-semibold text-[#8EA3B8] uppercase tracking-wider block">Karya Ilmiah</span>
              <div className="text-base sm:text-lg font-bold text-[#1E2E3E] mt-0.5">Riset Akademik</div>
              <p className="text-[11px] text-[#6B8298]">AI di ID & Fe₃O₄ Kelor</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#E2EAF1] shadow-xs flex flex-col justify-between">
            <span className="p-2 rounded-xl bg-[#F0F5FA] border border-[#DEE8F1] w-fit text-[#4A6277]">
              <Sparkles size={16} />
            </span>
            <div className="mt-3">
              <span className="text-[10px] font-semibold text-[#8EA3B8] uppercase tracking-wider block">Analisis Data</span>
              <div className="text-base sm:text-lg font-bold text-[#1E2E3E] mt-0.5">SPSS & E-views</div>
              <p className="text-[11px] text-[#6B8298]">Statistik & Riset Finansial</p>
            </div>
          </div>
        </div>
      </div>

      {/* Location Card & Activity Photo Showcase (Positioned below hero) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mt-14 items-start border-t border-[#E8EFF6] pt-12">
        {/* Left Column: Location & University Pin */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#D5E1ED] text-[11px] font-semibold text-[#4A6277] uppercase tracking-wider mb-2.5 shadow-sm">
              <MapPin size={12} className="text-[#4A6277]" />
              Lokasi & Afiliasi
            </div>
            <p className="text-xs sm:text-[13px] text-[#2F4A63] font-medium leading-relaxed">
              Fakultas Ekonomi dan Bisnis Islam, UIN Sunan Ampel Surabaya, Jl. Ahmad Yani No. 117, Surabaya, Jawa Timur
            </p>
          </div>

          {/* Minimalist Campus Map / Blueprint Card */}
          <div className="relative w-full h-36 rounded-2xl overflow-hidden border border-[#D5E1ED] bg-[#EBF1F7] p-4 flex flex-col justify-between shadow-sm group">
            <div
              className="absolute inset-0 opacity-25 pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(#4A6277 1px, transparent 1px), linear-gradient(to right, #4A6277 0.5px, transparent 0.5px 40px), linear-gradient(to bottom, #4A6277 0.5px, transparent 0.5px 40px)',
                backgroundSize: '20px 20px, 40px 40px, 40px 40px',
              }}
            />
            <div className="relative z-10 flex items-center justify-between">
              <span className="px-2 py-0.5 rounded-md bg-white/90 text-[10px] font-bold text-[#3E556B] border border-white/60 shadow-xs">
                FEBI UINSA Campus
              </span>
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
            </div>

            <div className="relative z-10">
              <div className="text-xs font-bold text-[#1E2E3E]">UIN Sunan Ampel Surabaya</div>
              <div className="text-[10px] text-[#6B8298] font-mono mt-0.5">7.3195° S, 112.7339° E · Surabaya</div>
            </div>
          </div>
        </div>

        {/* Right Column: Activity Photo Frames */}
        <div className="lg:col-span-8">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold text-[#1E2E3E] tracking-tight">
              Galeri Kegiatan & Aktivitas Organisasi
            </h3>
            <span className="text-[11px] text-[#7E96AC] font-medium hidden sm:inline-block">
              Dokumentasi Resmi
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {activityPhotos.map((photo, idx) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="group relative h-40 sm:h-44 rounded-2xl overflow-hidden border border-[#D5E1ED] bg-white shadow-[0_4px_16px_rgba(40,65,90,0.06)] hover:shadow-[0_8px_24px_rgba(40,65,90,0.12)] transition-all duration-300 flex flex-col justify-end p-3"
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#142332]/85 via-[#142332]/25 to-transparent pointer-events-none" />

                <div className="relative z-10 text-white">
                  <span className="text-[9px] uppercase tracking-wider font-semibold text-[#AFC5D9] block">
                    {photo.category}
                  </span>
                  <h4 className="text-xs font-bold leading-tight mt-0.5 text-white/95 truncate">
                    {photo.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
