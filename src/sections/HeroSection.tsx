import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  GraduationCap, 
  Award, 
  Users, 
  TrendingUp
} from 'lucide-react';

const stats = [
  { icon: <GraduationCap size={18} className="text-[#4A6277]" />, title: 'IPK Kumulatif', value: '3.87 / 4.00', desc: 'S1 Akuntansi FEB UB' },
  { icon: <Award size={18} className="text-[#4A6277]" />, title: 'Penghargaan', value: '10+ Prestasi', desc: 'Nasional & Universitas' },
  { icon: <Users size={18} className="text-[#4A6277]" />, title: 'Kepemimpinan', value: '5+ Peran', desc: 'BEM & HIMA Akuntansi' },
  { icon: <TrendingUp size={18} className="text-[#4A6277]" />, title: 'Fokus Riset', value: 'FinTech & Audit', desc: 'Financial Modeling' },
];

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="beranda" className="relative pt-32 pb-16 px-6 sm:px-10 max-w-4xl mx-auto flex flex-col items-center text-center">
      {/* Top Location / Status Pill */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#D5E1ED] shadow-[0_2px_10px_rgba(70,95,120,0.06)] text-xs text-[#4A6277] mb-6"
      >
        <span className="flex h-2 w-2 rounded-full bg-[#5282A8] animate-pulse" />
        <span className="font-medium">Fakultas Ekonomi & Bisnis · Universitas Brawijaya</span>
      </motion.div>

      {/* Main Name Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.08 }}
        className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1E2E3E] max-w-2xl leading-[1.18]"
      >
        Nur Azizah Safriyani <span className="text-[#4B6B8A]">Susanti</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.16 }}
        className="mt-4 text-sm sm:text-base text-[#556E84] max-w-xl leading-relaxed"
      >
        Mahasiswi S1 Akuntansi dengan minat mendalam pada <span className="text-[#1E2E3E] font-medium">analisis laporan keuangan, audit,</span> dan <span className="text-[#1E2E3E] font-medium">pemodelan finansial</span>. Memadukan integritas akademik dengan kepemimpinan organisasi.
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.24 }}
        className="mt-8 flex flex-wrap items-center justify-center gap-3"
      >
        <button
          onClick={() => scrollTo('prestasi')}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#3E556B] text-white text-xs sm:text-sm font-medium hover:bg-[#2E4254] transition-all shadow-[0_4px_14px_rgba(62,85,107,0.25)] active:scale-95"
        >
          Lihat Prestasi & Kredensial
          <ArrowRight size={15} />
        </button>
        <button
          onClick={() => scrollTo('kontak')}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-[#D5E1ED] text-[#4A6277] text-xs sm:text-sm font-medium hover:bg-[#F0F5FA] transition-all active:scale-95 shadow-sm"
        >
          Hubungi Saya
        </button>
      </motion.div>

      {/* Stats Cards */}
      <div className="w-full mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-left">
        {stats.map((s, idx) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.06 }}
            className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E2EAF1] shadow-[0_2px_10px_rgba(70,95,120,0.03)] flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <span className="p-2 rounded-xl bg-[#F0F5FA] border border-[#DEE8F1]">{s.icon}</span>
              <span className="text-[10px] font-semibold text-[#7E96AC] uppercase tracking-wider">{s.title}</span>
            </div>
            <div className="mt-3">
              <h3 className="text-lg sm:text-xl font-bold text-[#1E2E3E] tracking-tight">{s.value}</h3>
              <p className="text-[11px] text-[#6B8298] mt-0.5">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
