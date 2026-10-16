import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  FileSpreadsheet, 
  Users
} from 'lucide-react';

interface SkillItem {
  name: string;
  level: string;
  description: string;
  highlight?: boolean;
}

const financialSkills: SkillItem[] = [
  {
    name: 'Financial Modeling & Valuation',
    level: 'Tersertifikasi',
    description: 'Pelatihan Bloomberg x FEB UB, pemodelan arus kas (DCF), proyeksi keuangan, dan valuasi bisnis.',
    highlight: true,
  },
  {
    name: 'Analisis Laporan Keuangan',
    level: 'Lanjutan',
    description: 'Evaluasi rasio likuiditas, solvabilitas, profitabilitas, serta kepatuhan standar akuntansi.',
  },
  {
    name: 'Pasar Modal & Investasi',
    level: 'Praktisi Kampus',
    description: 'Analisis fundamental emiten saham dan simulasi portofolio di Kelompok Studi Pasar Modal.',
  },
  {
    name: 'Ekonomi Digital & FinTech',
    level: 'Riset Nasional',
    description: 'Penulisan karya ilmiah bertema inovasi pembayaran dan inklusi finansial UMKM (Juara 2 LKTI UGM).',
  },
];

const technicalTools: SkillItem[] = [
  {
    name: 'Microsoft Excel (Advanced)',
    level: 'Mahir',
    description: 'VLOOKUP/XLOOKUP, Pivot Tables, What-If Analysis, Nested Logic, dan Financial Forecasting.',
    highlight: true,
  },
  {
    name: 'SPSS & Pengolahan Data Statistik',
    level: 'Kompeten',
    description: 'Uji regresi berganda, uji validitas/reliabilitas data riset kuantitatif, dan analisis deskriptif.',
  },
  {
    name: 'Microsoft PowerPoint',
    level: 'Executive Pitching',
    description: 'Penyusunan slide presentasi bisnis formal, laporan riset akademik, dan deck kompetisi.',
  },
  {
    name: 'Digital Marketing & Social Strategy',
    level: 'Tersertifikasi Google',
    description: 'Strategi kampanye digital dan manajemen komunikasi relasi publik.',
  },
];

const leadershipSkills: SkillItem[] = [
  {
    name: 'Diplomasi & Negosiasi Internasional',
    level: 'Best Delegate (MUN UI)',
    description: 'Kemampuan bernegosiasi, merumuskan draft resolusi, dan menyelaraskan kepentingan multi-pihak.',
    highlight: true,
  },
  {
    name: 'Manajemen Kepanitiaan Skala Nasional',
    level: 'Ketua Pelaksana',
    description: 'Memimpin kepanitiaan Seminar Ekonomi Kreatif dengan lebih dari 500 peserta delegasi universitas.',
  },
  {
    name: 'Public Speaking & Moderasi',
    level: 'Teruji',
    description: 'Berpengalaman menjadi pembicara, moderator kajian ilmiah, dan representasi organisasi kampus.',
  },
  {
    name: 'Pengembangan Keilmuan Mahasiswa',
    level: 'Kadep BEM FEB',
    description: 'Merancang kurikulum pelatihan soft skill, kajian ekonomi publik, dan mentoring akademik.',
  },
];

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen pt-28 pb-20 px-4 sm:px-6 max-w-4xl mx-auto"
    >
      {/* Header */}
      <section className="mb-12">
        <span className="text-xs font-semibold text-rose-600 uppercase tracking-wider">Kompetensi</span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 mt-1">
          Keahlian & Penguasaan Perangkat
        </h1>
        <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-2xl">
          Pendekatan berbasis kompetensi nyata: kombinasi analisis kuantitatif keuangan, penguasaan tools produktivitas tingkat lanjut, serta kepemimpinan tim.
        </p>
      </section>

      {/* Grid: 3 Pillars */}
      <div className="space-y-12">
        {/* Pilar 1: Finansial */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <span className="p-1.5 rounded-lg bg-rose-50 text-rose-600 border border-rose-100">
              <TrendingUp size={18} />
            </span>
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight">Analisis Keuangan & Akuntansi</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {financialSkills.map((s) => (
              <div
                key={s.name}
                className={`p-5 rounded-2xl border transition-all ${
                  s.highlight
                    ? 'bg-white border-rose-200/90 shadow-[0_4px_16px_rgba(244,63,94,0.06)]'
                    : 'bg-white border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)]'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-bold text-zinc-900">{s.name}</h3>
                  <span className={`shrink-0 px-2.5 py-0.5 rounded-full text-[11px] font-medium ${
                    s.highlight ? 'bg-rose-50 text-rose-700 border border-rose-200/60' : 'bg-zinc-100 text-zinc-600'
                  }`}>
                    {s.level}
                  </span>
                </div>
                <p className="mt-2 text-xs text-zinc-600 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pilar 2: Tools & Data */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <span className="p-1.5 rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
              <FileSpreadsheet size={18} />
            </span>
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight">Perangkat Lunak & Analisis Data</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {technicalTools.map((s) => (
              <div
                key={s.name}
                className={`p-5 rounded-2xl border transition-all ${
                  s.highlight
                    ? 'bg-white border-blue-200/90 shadow-[0_4px_16px_rgba(59,130,246,0.06)]'
                    : 'bg-white border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)]'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-bold text-zinc-900">{s.name}</h3>
                  <span className={`shrink-0 px-2.5 py-0.5 rounded-full text-[11px] font-medium ${
                    s.highlight ? 'bg-blue-50 text-blue-700 border border-blue-200/60' : 'bg-zinc-100 text-zinc-600'
                  }`}>
                    {s.level}
                  </span>
                </div>
                <p className="mt-2 text-xs text-zinc-600 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pilar 3: Soft Skills & Diplomasi */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <span className="p-1.5 rounded-lg bg-amber-50 text-amber-600 border border-amber-100">
              <Users size={18} />
            </span>
            <h2 className="text-xl font-bold text-zinc-900 tracking-tight">Kepemimpinan, Diplomasi & Komunikasi</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {leadershipSkills.map((s) => (
              <div
                key={s.name}
                className={`p-5 rounded-2xl border transition-all ${
                  s.highlight
                    ? 'bg-white border-amber-200/90 shadow-[0_4px_16px_rgba(245,158,11,0.06)]'
                    : 'bg-white border-zinc-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.02)]'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-bold text-zinc-900">{s.name}</h3>
                  <span className={`shrink-0 px-2.5 py-0.5 rounded-full text-[11px] font-medium ${
                    s.highlight ? 'bg-amber-50 text-amber-800 border border-amber-200/60' : 'bg-zinc-100 text-zinc-600'
                  }`}>
                    {s.level}
                  </span>
                </div>
                <p className="mt-2 text-xs text-zinc-600 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
}
