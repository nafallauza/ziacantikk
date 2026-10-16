import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  GraduationCap, 
  Award, 
  Users, 
  TrendingUp, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';

const stats = [
  { icon: <GraduationCap size={20} className="text-rose-600" />, title: 'IPK Kumulatif', value: '3.87 / 4.00', desc: 'S1 Akuntansi FEB UB' },
  { icon: <Award size={20} className="text-amber-600" />, title: 'Penghargaan', value: '10+ Capaian', desc: 'Nasional & Universitas' },
  { icon: <Users size={20} className="text-blue-600" />, title: 'Kepemimpinan', value: '5+ Organisasi', desc: 'BEM FEB & HIMA Akuntansi' },
  { icon: <TrendingUp size={20} className="text-emerald-600" />, title: 'Fokus Bidang', value: 'Finance & Audit', desc: 'Financial Modeling' },
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen pt-28 pb-20 px-4 sm:px-6 max-w-5xl mx-auto"
    >
      {/* ===== HERO SECTION ===== */}
      <section className="relative flex flex-col items-center text-center py-12 md:py-16">
        {/* Subtle status badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] text-xs text-zinc-600 mb-6"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Fakultas Ekonomi & Bisnis · Universitas Brawijaya</span>
        </motion.div>

        {/* Title & Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-950 max-w-3xl leading-[1.15]"
        >
          Nur Azizah Safriyani <span className="text-rose-600">Susanti</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.16 }}
          className="mt-5 text-sm sm:text-base md:text-lg text-zinc-600 max-w-2xl leading-relaxed font-normal"
        >
          Mahasiswi Akuntansi yang berfokus pada <span className="text-zinc-900 font-medium">analisis keuangan, audit,</span> dan <span className="text-zinc-900 font-medium">kebijakan ekonomi</span>. Memadukan integritas akademik tinggi dengan kepemimpinan organisasi yang aktif.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.24 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 text-white text-xs sm:text-sm font-medium hover:bg-zinc-800 transition-all shadow-sm hover:shadow active:scale-98"
          >
            Lihat Portofolio & Prestasi
            <ArrowRight size={15} />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-zinc-200/90 text-zinc-700 text-xs sm:text-sm font-medium hover:bg-zinc-50 transition-all hover:text-zinc-950 active:scale-98 shadow-sm"
          >
            Tentang Saya
          </Link>
        </motion.div>
      </section>

      {/* ===== STATS OVERVIEW ===== */}
      <section className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((s, idx) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.06 }}
            className="p-4 sm:p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <span className="p-2 rounded-xl bg-zinc-50 border border-zinc-100">{s.icon}</span>
              <span className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider">{s.title}</span>
            </div>
            <div className="mt-4">
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">{s.value}</h3>
              <p className="text-xs text-zinc-500 mt-0.5">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* ===== BENTO HIGHLIGHTS ===== */}
      <section className="mt-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-2">
          <div>
            <span className="text-xs font-semibold text-rose-600 uppercase tracking-wider">Rekam Jejak</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-950 tracking-tight mt-1">Sorotan Prestasi & Dedikasi</h2>
          </div>
          <Link to="/portfolio" className="text-xs font-medium text-zinc-600 hover:text-zinc-950 flex items-center gap-1 group">
            Lihat semua arsip
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: Prestasi Utama (2 Columns wide) */}
          <div className="md:col-span-2 p-6 sm:p-7 rounded-3xl bg-white border border-zinc-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-50/60 rounded-full blur-3xl -z-10 group-hover:bg-rose-100/60 transition-colors duration-500" />
            
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200/60 text-xs font-medium mb-4">
                <Sparkles size={12} />
                Juara 2 Nasional
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                Lomba Karya Tulis Ilmiah Nasional (LKTI) — UGM
              </h3>
              <p className="mt-2.5 text-sm text-zinc-600 leading-relaxed max-w-xl">
                Riset berjudul <span className="italic font-medium text-zinc-800">"Inovasi Ekonomi Digital & FinTech untuk Akselerasi UMKM Indonesia"</span>, berhasil menyisihkan puluhan delegasi universitas terkemuka di Indonesia.
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-500">
              <span className="font-medium text-zinc-700">Penyelenggara: Universitas Gadjah Mada</span>
              <span className="px-2.5 py-1 rounded-lg bg-zinc-100 font-medium text-zinc-700">September 2025</span>
            </div>
          </div>

          {/* Card 2: Capaian MUN */}
          <div className="p-6 rounded-3xl bg-white border border-zinc-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200/60 text-xs font-medium mb-4">
                <Award size={12} />
                Best Delegate
              </div>
              <h3 className="text-lg font-bold text-zinc-950 tracking-tight">Model United Nations UI</h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Penghargaan delegasi terbaik pada council ECOFIN, membahas stabilitas moneter serta kebijakan ekonomi global.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-100 text-xs text-zinc-500 flex justify-between items-center">
              <span>Universitas Indonesia</span>
              <span className="font-medium text-zinc-700">Mei 2025</span>
            </div>
          </div>

          {/* Card 3: Peran Organisasi */}
          <div className="p-6 rounded-3xl bg-white border border-zinc-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Kepemimpinan</span>
              <h3 className="text-lg font-bold text-zinc-950 tracking-tight mt-1">BEM FEB UB</h3>
              <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                Kepala Departemen Pendidikan & Keilmuan, mengoordinasikan program kajian ilmiah, pelatihan soft skill, dan diskusi publik mahasiswa.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-zinc-100 text-xs font-medium text-zinc-700">
              Periode 2025 – Sekarang
            </div>
          </div>

          {/* Card 4: Kemampuan Teknis (2 Columns) */}
          <div className="md:col-span-2 p-6 rounded-3xl bg-white border border-zinc-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Kompetensi Inti</span>
              <h3 className="text-xl font-bold text-zinc-950 tracking-tight mt-1">
                Keahlian Analitis & Perangkat Lunak
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  { name: 'Financial Modeling', badge: 'Tersertifikasi' },
                  { name: 'Microsoft Excel (Advanced)', badge: 'Mahir' },
                  { name: 'Analisis Laporan Keuangan', badge: 'Akademik' },
                  { name: 'SPSS & Data Analysis', badge: 'Kompeten' },
                  { name: 'Pasar Modal & Valuasi', badge: 'Praktisi' },
                  { name: 'Public Speaking & Negosiasi', badge: 'Soft Skill' },
                ].map((sk) => (
                  <span
                    key={sk.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-50 border border-zinc-200/70 text-xs text-zinc-800 font-medium"
                  >
                    <CheckCircle2 size={13} className="text-emerald-500" />
                    {sk.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
              <span>Kurikulum Akuntansi & Sertifikasi Profesional</span>
              <Link to="/skills" className="font-medium text-rose-600 hover:text-rose-700">
                Detail kompetensi →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CLOSING INVITATION ===== */}
      <section className="mt-16 p-8 sm:p-10 rounded-3xl bg-zinc-950 text-white relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-rose-400">Terbuka Untuk Kesempatan</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">Tertarik Berkolaborasi?</h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Terbuka untuk program magang di bidang Finance, Accounting, Audit, serta proyek riset dan kepanitiaan bersama.
          </p>
        </div>
        <Link
          to="/contact"
          className="shrink-0 px-6 py-3 rounded-full bg-white text-zinc-950 text-xs sm:text-sm font-semibold hover:bg-zinc-100 transition-all hover:shadow-lg active:scale-95"
        >
          Kirim Pesan / Kontak
        </Link>
      </section>
    </motion.div>
  );
}
