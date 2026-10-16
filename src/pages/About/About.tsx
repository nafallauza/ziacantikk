import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Building2, 
  Sparkles,
  Compass
} from 'lucide-react';
import { education, experiences } from '../../data/portfolioData';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen pt-28 pb-20 px-4 sm:px-6 max-w-4xl mx-auto"
    >
      {/* ===== HEADER ===== */}
      <section className="mb-12">
        <span className="text-xs font-semibold text-rose-600 uppercase tracking-wider">Profil Pribadi</span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 mt-1">
          Dedikasi untuk Keunggulan Finansial & Akademik
        </h1>
        <p className="mt-4 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-2xl">
          Saya percaya bahwa data keuangan yang transparan dan analisis akuntansi yang tajam adalah fondasi bagi pertumbuhan bisnis yang berkelanjutan. Di FEB Universitas Brawijaya, saya terus mengasah kompetensi teknis sekaligus memimpin organisasi mahasiswa.
        </p>
      </section>

      {/* ===== BENTO PROFILE & HIGHLIGHTS ===== */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
        {/* Card Bio */}
        <div className="md:col-span-2 p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200/60 text-xs font-medium mb-4">
              <Sparkles size={13} />
              Filosofi & Pendekatan
            </div>
            <h3 className="text-xl font-bold text-zinc-900 tracking-tight">
              Integritas, Analisis Kritis, dan Empati
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Sebagai mahasiswa akuntansi, saya tidak hanya melihat angka sebagai deretan laporan, melainkan sebagai cerita utuh mengenai kesehatan, tata kelola, dan arah strategis suatu entitas. Keaktifan di organisasi mengasah kemampuan saya dalam memimpin tim lintas divisi dengan empati dan komunikasi yang jelas.
            </p>
          </div>

          <div className="mt-6 pt-5 border-t border-zinc-100 flex flex-wrap gap-4 text-xs text-zinc-500">
            <div>
              <span className="block text-zinc-400">Domisili</span>
              <span className="font-medium text-zinc-800">Malang, Jawa Timur</span>
            </div>
            <div>
              <span className="block text-zinc-400">Status</span>
              <span className="font-medium text-zinc-800">Mahasiswi Aktif Semester 5</span>
            </div>
            <div>
              <span className="block text-zinc-400">Bahasa</span>
              <span className="font-medium text-zinc-800">Bahasa Indonesia, English</span>
            </div>
          </div>
        </div>

        {/* Card Nilai */}
        <div className="p-6 rounded-3xl bg-zinc-950 text-white flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Compass size={14} />
              Nilai Utama
            </div>
            <h3 className="text-lg font-bold tracking-tight text-white">Etos Kerja</h3>
            <ul className="mt-4 space-y-3 text-xs text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">•</span>
                <span><strong>Presisi:</strong> Ketelitian mendalam dalam olah data finansial & riset.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">•</span>
                <span><strong>Inisiatif:</strong> Proaktif mencari solusi inovatif dalam penyelesaian studi kasus.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-400 font-bold">•</span>
                <span><strong>Kolaboratif:</strong> Menghargai keberagaman perspektif dalam tim.</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-800 text-[11px] text-zinc-400">
            Fakultas Ekonomi & Bisnis · UB
          </div>
        </div>
      </section>

      {/* ===== RIWAYAT PENDIDIKAN ===== */}
      <section className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <GraduationCap size={20} className="text-rose-600" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950">Riwayat Pendidikan</h2>
        </div>

        <div className="space-y-3">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-zinc-900">{edu.institution}</h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-600 text-[11px] font-medium">
                    {edu.period}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-600 mt-1">{edu.degree}</p>
              </div>

              {edu.gpa && (
                <div className="sm:text-right shrink-0">
                  <span className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider block">Prestasi</span>
                  <span className="text-sm font-bold text-rose-600">{edu.gpa}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ===== PENGALAMAN ORGANISASI ===== */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <Building2 size={20} className="text-rose-600" />
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950">Pengalaman Organisasi & Kontribusi</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-semibold text-rose-600 uppercase tracking-wider">{exp.organization}</span>
                  <span className="text-[11px] font-medium text-zinc-400">{exp.period}</span>
                </div>
                <h3 className="text-base font-bold text-zinc-900 tracking-tight">{exp.role}</h3>
                <p className="mt-2.5 text-xs sm:text-sm text-zinc-600 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
