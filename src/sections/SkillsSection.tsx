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

export default function SkillsSection() {
  return (
    <section id="keahlian" className="py-16 px-6 sm:px-10 max-w-4xl mx-auto border-t border-[#E8EFF6]">
      {/* Header */}
      <div className="mb-12">
        <span className="text-xs font-semibold text-[#4A6277] uppercase tracking-wider">Kompetensi</span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1E2E3E] mt-1">
          Keahlian & Penguasaan Perangkat
        </h2>
        <p className="mt-2 text-sm text-[#556E84] leading-relaxed max-w-xl">
          Pendekatan berbasis kompetensi nyata: kombinasi analisis kuantitatif keuangan, penguasaan tools produktivitas tingkat lanjut, serta kepemimpinan tim.
        </p>
      </div>

      <div className="space-y-10">
        {/* Pilar 1: Finansial */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="p-1.5 rounded-lg bg-[#EBF1F7] text-[#3E556B] border border-[#D5E1ED]">
              <TrendingUp size={16} />
            </span>
            <h3 className="text-base sm:text-lg font-bold text-[#1E2E3E] tracking-tight">Analisis Keuangan & Akuntansi</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {financialSkills.map((s) => (
              <div
                key={s.name}
                className={`p-5 rounded-2xl border transition-all ${
                  s.highlight
                    ? 'bg-white border-[#C9D9E8] shadow-[0_4px_16px_rgba(70,95,120,0.06)]'
                    : 'bg-white border-[#E2EAF1] shadow-[0_2px_8px_rgba(70,95,120,0.02)]'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-xs sm:text-sm font-bold text-[#1E2E3E]">{s.name}</h4>
                  <span className={`shrink-0 px-2 py-0.5 rounded-full text-[10px] font-medium ${
                    s.highlight ? 'bg-[#EBF1F7] text-[#2F4A63] border border-[#D5E1ED]' : 'bg-[#F2F6FA] text-[#556E84]'
                  }`}>
                    {s.level}
                  </span>
                </div>
                <p className="mt-2 text-xs text-[#556E84] leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pilar 2: Tools & Data */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="p-1.5 rounded-lg bg-[#EBF1F7] text-[#3E556B] border border-[#D5E1ED]">
              <FileSpreadsheet size={16} />
            </span>
            <h3 className="text-base sm:text-lg font-bold text-[#1E2E3E] tracking-tight">Perangkat Lunak & Analisis Data</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {technicalTools.map((s) => (
              <div
                key={s.name}
                className={`p-5 rounded-2xl border transition-all ${
                  s.highlight
                    ? 'bg-white border-[#C9D9E8] shadow-[0_4px_16px_rgba(70,95,120,0.06)]'
                    : 'bg-white border-[#E2EAF1] shadow-[0_2px_8px_rgba(70,95,120,0.02)]'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-xs sm:text-sm font-bold text-[#1E2E3E]">{s.name}</h4>
                  <span className={`shrink-0 px-2 py-0.5 rounded-full text-[10px] font-medium ${
                    s.highlight ? 'bg-[#EBF1F7] text-[#2F4A63] border border-[#D5E1ED]' : 'bg-[#F2F6FA] text-[#556E84]'
                  }`}>
                    {s.level}
                  </span>
                </div>
                <p className="mt-2 text-xs text-[#556E84] leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pilar 3: Soft Skills */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="p-1.5 rounded-lg bg-[#EBF1F7] text-[#3E556B] border border-[#D5E1ED]">
              <Users size={16} />
            </span>
            <h3 className="text-base sm:text-lg font-bold text-[#1E2E3E] tracking-tight">Kepemimpinan, Diplomasi & Komunikasi</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {leadershipSkills.map((s) => (
              <div
                key={s.name}
                className={`p-5 rounded-2xl border transition-all ${
                  s.highlight
                    ? 'bg-white border-[#C9D9E8] shadow-[0_4px_16px_rgba(70,95,120,0.06)]'
                    : 'bg-white border-[#E2EAF1] shadow-[0_2px_8px_rgba(70,95,120,0.02)]'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-xs sm:text-sm font-bold text-[#1E2E3E]">{s.name}</h4>
                  <span className={`shrink-0 px-2 py-0.5 rounded-full text-[10px] font-medium ${
                    s.highlight ? 'bg-[#EBF1F7] text-[#2F4A63] border border-[#D5E1ED]' : 'bg-[#F2F6FA] text-[#556E84]'
                  }`}>
                    {s.level}
                  </span>
                </div>
                <p className="mt-2 text-xs text-[#556E84] leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
