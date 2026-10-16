import { 
  GraduationCap, 
  Building2, 
  Sparkles,
  Compass
} from 'lucide-react';
import { education, experiences } from '../data/portfolioData';

export default function ProfileSection() {
  return (
    <section id="profil" className="py-16 px-6 sm:px-10 max-w-4xl mx-auto border-t border-[#E8EFF6]">
      {/* Header with Photo Avatar */}
      <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center gap-6 justify-between mb-12">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold text-[#4A6277] uppercase tracking-wider">Profil Pribadi</span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1E2E3E] mt-1">
            Dedikasi untuk Keunggulan Finansial & Akademik
          </h2>
          <p className="mt-3 text-sm text-[#556E84] leading-relaxed">
            Bagi saya, data keuangan yang transparan dan analisis akuntansi yang tajam adalah fondasi bagi pertumbuhan bisnis yang berkelanjutan. Di FEB Universitas Brawijaya, saya terus mengasah kompetensi teknis sekaligus memimpin organisasi mahasiswa.
          </p>
        </div>

        {/* Profile Avatar with fallback */}
        <div className="shrink-0 relative group">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl overflow-hidden bg-[#EBF1F7] border-2 border-[#D5E1ED] shadow-[0_4px_20px_rgba(70,95,120,0.08)] flex items-center justify-center relative">
            <img
              src="/assets/foto/profil.jpg"
              alt="Nur Azizah Safriyani Susanti"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2 bg-gradient-to-b from-[#EBF1F7] to-[#DCE7F2] -z-0">
              <span className="text-2xl font-bold text-[#3E556B]">AZ</span>
              <span className="text-[10px] text-[#556E84] font-medium">Zia Cantika</span>
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1 px-2.5 py-0.5 rounded-full bg-white border border-[#D5E1ED] text-[10px] font-semibold text-[#3E556B] shadow-sm">
            FEB UB
          </div>
        </div>
      </div>

      {/* Bento Bio & Ethos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
        {/* Card Bio */}
        <div className="md:col-span-2 p-6 sm:p-7 rounded-3xl bg-white border border-[#E2EAF1] shadow-[0_2px_10px_rgba(70,95,120,0.02)] flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBF1F7] text-[#3E556B] border border-[#D5E1ED] text-xs font-medium mb-4">
              <Sparkles size={13} />
              Filosofi & Pendekatan
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#1E2E3E] tracking-tight">
              Integritas, Analisis Kritis, dan Empati
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-[#556E84] leading-relaxed">
              Sebagai mahasiswa akuntansi, saya tidak hanya melihat angka sebagai deretan laporan, melainkan sebagai cerita utuh mengenai kesehatan, tata kelola, dan arah strategis suatu entitas. Keaktifan di organisasi mengasah kemampuan saya dalam memimpin tim lintas divisi dengan empati dan komunikasi yang jelas.
            </p>
          </div>

          <div className="mt-6 pt-5 border-t border-[#EEF3F8] flex flex-wrap gap-5 text-xs text-[#6B8298]">
            <div>
              <span className="block text-[#8EA3B8] text-[10px] uppercase font-semibold">Domisili</span>
              <span className="font-medium text-[#203243]">Malang, Jawa Timur</span>
            </div>
            <div>
              <span className="block text-[#8EA3B8] text-[10px] uppercase font-semibold">Status</span>
              <span className="font-medium text-[#203243]">Mahasiswi Aktif Semester 5</span>
            </div>
            <div>
              <span className="block text-[#8EA3B8] text-[10px] uppercase font-semibold">Bahasa</span>
              <span className="font-medium text-[#203243]">Bahasa Indonesia, English</span>
            </div>
          </div>
        </div>

        {/* Card Nilai */}
        <div className="p-6 rounded-3xl bg-[#2D4052] text-white flex flex-col justify-between shadow-[0_4px_20px_rgba(45,64,82,0.15)]">
          <div>
            <div className="flex items-center gap-2 text-[#AFC5D9] text-xs font-semibold uppercase tracking-wider mb-3">
              <Compass size={14} />
              Nilai Utama
            </div>
            <h3 className="text-base sm:text-lg font-bold tracking-tight text-white">Etos Kerja</h3>
            <ul className="mt-4 space-y-3 text-xs text-[#E1EAF2]">
              <li className="flex items-start gap-2">
                <span className="text-[#89A9C7] font-bold">•</span>
                <span><strong>Presisi:</strong> Ketelitian mendalam dalam olah data finansial & riset.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#89A9C7] font-bold">•</span>
                <span><strong>Inisiatif:</strong> Proaktif mencari solusi inovatif dalam penyelesaian masalah.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#89A9C7] font-bold">•</span>
                <span><strong>Kolaboratif:</strong> Menghargai keberagaman perspektif dalam tim.</span>
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-[#41566B] text-[11px] text-[#A6BFD5]">
            Fakultas Ekonomi & Bisnis · UB
          </div>
        </div>
      </div>

      {/* Riwayat Pendidikan */}
      <div className="mb-14">
        <div className="flex items-center gap-2 mb-5">
          <GraduationCap size={18} className="text-[#4A6277]" />
          <h3 className="text-lg font-bold tracking-tight text-[#1E2E3E]">Riwayat Pendidikan</h3>
        </div>

        <div className="space-y-3">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="p-5 rounded-2xl bg-white border border-[#E2EAF1] shadow-[0_2px_8px_rgba(70,95,120,0.02)] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm sm:text-base font-bold text-[#1E2E3E]">{edu.institution}</h4>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F0F5FA] text-[#556E84] text-[11px] font-medium border border-[#DDE7F0]">
                    {edu.period}
                  </span>
                </div>
                <p className="text-xs text-[#556E84] mt-1">{edu.degree}</p>
              </div>

              {edu.gpa && (
                <div className="sm:text-right shrink-0">
                  <span className="text-[10px] font-semibold text-[#8EA3B8] uppercase tracking-wider block">Prestasi</span>
                  <span className="text-sm font-bold text-[#3E556B]">{edu.gpa}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Pengalaman Organisasi */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <Building2 size={18} className="text-[#4A6277]" />
          <h3 className="text-lg font-bold tracking-tight text-[#1E2E3E]">Pengalaman Organisasi & Kepemimpinan</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="p-5 rounded-2xl bg-white border border-[#E2EAF1] shadow-[0_2px_8px_rgba(70,95,120,0.02)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-semibold text-[#4A6277] uppercase tracking-wider">{exp.organization}</span>
                  <span className="text-[10px] font-medium text-[#8EA3B8]">{exp.period}</span>
                </div>
                <h4 className="text-sm font-bold text-[#1E2E3E] tracking-tight">{exp.role}</h4>
                <p className="mt-2 text-xs text-[#556E84] leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
