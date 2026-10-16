import { 
  TrendingUp, 
  FileSpreadsheet, 
  Award, 
  CheckCircle2,
  Cpu,
  Globe2
} from 'lucide-react';

export default function SkillsSection() {
  return (
    <section id="keahlian" className="py-16 px-6 sm:px-10 max-w-5xl mx-auto border-t border-[#E8EFF6]">
      {/* Header */}
      <div className="max-w-2xl mb-12">
        <span className="text-xs font-semibold text-[#4A6277] uppercase tracking-wider">
          Matriks Kompetensi
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1E2E3E] mt-1">
          Keahlian Analitis, Perangkat & Kepemimpinan
        </h2>
        <p className="mt-2.5 text-xs sm:text-sm text-[#556E84] leading-relaxed">
          Kombinasi kompetensi analisis ekonomi syariah, pemahaman pasar modal, riset data SPSS/E-views, penguasaan instrumen teknologi, serta kemampuan komunikasi publik.
        </p>
      </div>

      {/* Bento Grid Layout (Strict Anti-AI Slop: No 90% bars, substantive context) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Large Card: Analisis Finansial & Standar Akuntansi (7 cols) */}
        <div className="md:col-span-7 p-6 sm:p-7 rounded-3xl bg-white border border-[#E2EAF1] shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="p-2 rounded-xl bg-[#EBF1F7] text-[#3E556B] border border-[#D5E1ED]">
                <TrendingUp size={18} />
              </span>
              <span className="px-3 py-1 rounded-full bg-[#EBF1F7] text-[#2F4A63] border border-[#D5E1ED] text-[10px] font-semibold">
                Fokus Akademik FEBI UINSA
              </span>
            </div>

            <h3 className="text-lg font-bold text-[#1E2E3E] tracking-tight">
              Lembaga Keuangan Syariah & Analisis Data
            </h3>
            <p className="mt-2 text-xs text-[#556E84] leading-relaxed">
              Keahlian dalam menelaah operasional lembaga keuangan syariah, instrumen pasar modal, serta analisis data kuantitatif menggunakan SPSS dan E-views untuk pengujian empiris.
            </p>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E8EFF6]">
                <div className="text-xs font-bold text-[#1E2E3E] flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-[#4A6277]" />
                  Evaluasi Rasio Keuangan
                </div>
                <p className="text-[11px] text-[#6B8298] mt-1">Likuiditas, solvabilitas, leverage, dan profitabilitas emiten.</p>
              </div>

              <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E8EFF6]">
                <div className="text-xs font-bold text-[#1E2E3E] flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-[#4A6277]" />
                  Etika Profesi Perbankan
                </div>
                <p className="text-[11px] text-[#6B8298] mt-1">Tersertifikasi Ikatan Bankir Indonesia (IBI 2025).</p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#EEF3F8] text-[11px] text-[#7E96AC] flex items-center justify-between">
            <span>Standar Pelaporan Keuangan</span>
            <span className="font-semibold text-[#4A6277]">PSAK · IFRS Basis</span>
          </div>
        </div>

        {/* Medium Card: Pasar Modal Syariah & CIMM (5 cols) */}
        <div className="md:col-span-5 p-6 sm:p-7 rounded-3xl bg-[#2D4052] text-white shadow-[0_4px_20px_rgba(45,64,82,0.15)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="p-2 rounded-xl bg-white/10 text-[#AFC5D9] border border-white/15">
                <Award size={18} />
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/15 text-white text-[10px] font-semibold border border-white/20">
                IARFC Certified
              </span>
            </div>

            <h3 className="text-lg font-bold tracking-tight text-white">
              Pasar Modal & Reksa Dana Syariah
            </h3>
            <p className="mt-2 text-xs text-[#DCE7F2] leading-relaxed">
              Memegang sertifikasi Certified Islamic Mutual Fund (CIMM) dari IARFC. Berpengalaman dalam pengelolaan teknis kompetisi trading saham syariah dan edukasi pasar modal di FEBI.
            </p>

            <div className="mt-5 space-y-2">
              <div className="flex items-center gap-2 text-xs text-[#E8F0F8]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#89A9C7]" />
                <span>Instrumen Sukuk & Reksa Dana Syariah</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#E8F0F8]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#89A9C7]" />
                <span>Panitia Diesnatalis GIS Divisi Trading 2025</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#E8F0F8]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#89A9C7]" />
                <span>Fasilitator Sekolah Pasar Modal Syariah</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/15 text-[11px] text-[#AFC5D9]">
            IARFC Indonesia · Sertifikat No. Terdaftar
          </div>
        </div>

        {/* Medium Card: Microsoft Excel & Tools (5 cols) */}
        <div className="md:col-span-5 p-6 sm:p-7 rounded-3xl bg-white border border-[#E2EAF1] shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="p-2 rounded-xl bg-[#EBF1F7] text-[#3E556B] border border-[#D5E1ED]">
                <FileSpreadsheet size={18} />
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#EBF1F7] text-[#2F4A63] text-[10px] font-semibold">
                Tingkat Lanjut
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-[#1E2E3E] tracking-tight">
              Excel Lanjutan & Pemodelan Data
            </h3>
            <p className="mt-2 text-xs text-[#556E84] leading-relaxed">
              Pengolahan data finansial kompleks menggunakan fungsi formula lanjut (XLOOKUP, INDEX/MATCH, Dynamic Arrays), Pivot Table, dan Scenario Manager.
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {['Pivot Tables', 'XLOOKUP / INDEX', 'Financial Math', 'Data Validation', 'Scenario Manager'].map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-lg bg-[#F0F5FA] border border-[#DDE7F0] text-[11px] font-medium text-[#4A6277]">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#EEF3F8] text-[11px] text-[#7E96AC]">
            Pemrosesan Model Keuangan & Rekap Data
          </div>
        </div>

        {/* Card: Sains, Robotika & Instrumentasi (4 cols) */}
        <div className="md:col-span-4 p-6 sm:p-7 rounded-3xl bg-white border border-[#E2EAF1] shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="p-2 rounded-xl bg-[#EBF1F7] text-[#3E556B] border border-[#D5E1ED]">
                <Cpu size={18} />
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#EBF1F7] text-[#2F4A63] text-[10px] font-semibold">
                Sains & Teknologi
              </span>
            </div>

            <h3 className="text-base font-bold text-[#1E2E3E] tracking-tight">
              Instrumen Lab & Logika Robotika
            </h3>
            <p className="mt-2 text-xs text-[#556E84] leading-relaxed">
              Juara Kejuaraan Robotika Nasional (KEJURNAS) 2023. Memiliki sertifikat kelulusan pelatihan pengoperasian instrumen laboratorium sains dari Universitas Negeri Malang (UM).
            </p>
          </div>

          <div className="mt-5 pt-3 border-t border-[#EEF3F8] text-[11px] text-[#6B8298]">
            Sertifikasi UM & Piagam KEJURNAS 2023
          </div>
        </div>

        {/* Card: Komunikasi Publik & Bahasa (3 cols) */}
        <div className="md:col-span-3 p-6 sm:p-7 rounded-3xl bg-white border border-[#E2EAF1] shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="p-2 rounded-xl bg-[#EBF1F7] text-[#3E556B] border border-[#D5E1ED]">
                <Globe2 size={18} />
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#EBF1F7] text-[#2F4A63] text-[10px] font-semibold">
                Bahasa
              </span>
            </div>

            <h3 className="text-base font-bold text-[#1E2E3E] tracking-tight">
              Komunikasi & Bahasa
            </h3>
            <p className="mt-2 text-xs text-[#556E84] leading-relaxed">
              Tersertifikasi English Proficiency dari Brilliant English Course Pare & pelatihan Webinar Public Speaking Nasional 2025.
            </p>
          </div>

          <div className="mt-5 pt-3 border-t border-[#EEF3F8] text-[11px] text-[#4A6277] font-semibold">
            Brilliant Pare Certified
          </div>
        </div>
      </div>
    </section>
  );
}
