import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';
import {
  GraduationCap,
  Building2,
  FileText,
  Briefcase,
  CheckCircle2,
  Maximize2,
  X,
  MapPin,
} from 'lucide-react';

interface TimelineItem {
  id: string;
  category: 'organisasi' | 'pendidikan' | 'riset';
  year: string;
  title: string;
  subtitle: string;
  institution: string;
  badge: string;
  description: string;
  highlights: string[];
  skills: string[];
  image: string;
  imageCaption: string;
  icon: typeof Building2;
}

const TIMELINE_DATA: TimelineItem[] = [
  {
    id: 'exp-gis-2025',
    category: 'organisasi',
    year: '2025',
    title: 'Staff Muda & Divisi Humas',
    subtitle: 'Galeri Investasi Syariah (GIS) UINSA',
    institution: 'FEBI UIN Sunan Ampel Surabaya',
    badge: 'Kepengurusan Aktif',
    description:
      'Aktif mengelola relasi media partner, publikasi seminar edukasi pasar modal syariah, administrasi kegiatan, serta pembelajaran intensif instrumen investasi saham syariah.',
    highlights: [
      'Koordinasi media partner & publikasi seminar edukasi pasar modal syariah',
      'Administrasi kegiatan dan pembelajaran instrumen investasi saham syariah',
    ],
    skills: ['Pasar Modal Syariah', 'Humas & Media', 'Administrasi Acara'],
    image: '/assets/organisasi/IMG-20251122-WA0030.jpg',
    imageCaption: 'Kepanitiaan Diesnatalis GIS 2025 di FEBI UINSA',
    icon: Building2,
  },
  {
    id: 'edu-uinsa-2024',
    category: 'pendidikan',
    year: '2024 – Sekarang',
    title: 'S1 Ekonomi Syariah',
    subtitle: 'Fakultas Ekonomi dan Bisnis Islam (FEBI)',
    institution: 'UIN Sunan Ampel Surabaya',
    badge: 'IPK 3.74 / 4.00 (Cumlaude)',
    description:
      'Konsentrasi Lembaga Keuangan Syariah. Berfokus pada tata kelola perbankan syariah, analisis data statistik dengan SPSS & E-views, serta kajian regulasi fikih muamalah.',
    highlights: [
      'Indeks Prestasi Kumulatif 3.74 dari skala 4.00',
      'Pengolahan dan pengujian data statistik menggunakan SPSS & E-views',
    ],
    skills: ['Ekonomi Syariah', 'SPSS & E-views', 'Fikih Muamalah'],
    image: '/assets/organisasi/IMG-20250924-WA0040.jpg',
    imageCaption: 'Aktivitas Akademik FEBI UIN Sunan Ampel Surabaya',
    icon: GraduationCap,
  },
  {
    id: 'riset-prestasi-2025',
    category: 'riset',
    year: '2023 – 2025',
    title: 'Riset Ilmiah & Kejuaraan Robotika',
    subtitle: 'Literature Review AI & Juara Robotika Nasional',
    institution: 'Riset Akademik & Komite Robotika Nasional',
    badge: 'Prestasi & Riset',
    description:
      'Menulis Literature Review perkembangan Artificial Intelligence di Indonesia serta menorehkan prestasi sebagai Juara dalam Kejuaraan Robotika Nasional (KEJURNAS).',
    highlights: [
      'Penyusunan naskah ilmiah Literature Review dinamika AI di Indonesia',
      'Juara & Piagam resmi Kejuaraan Robotika Nasional (KEJURNAS)',
    ],
    skills: ['Literature Review', 'Academic Writing', 'Robotika & IoT'],
    image: '/assets/organisasi/71ee9b776f2baa1479ac5158ef7db7fe_0.jpeg',
    imageCaption: 'Forum Riset Akademik & Diskusi Ilmiah Mahasiswa',
    icon: FileText,
  },
];

export default function ProfileSection() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; caption: string } | null>(null);

  // 21st.dev Style Cursor Follower Floating Media Preview (Desktop)
  const [hoveredItem, setHoveredItem] = useState<TimelineItem | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const springConfig = { stiffness: 220, damping: 22, mass: 0.1 };
  const mousePos = {
    x: useSpring(0, springConfig),
    y: useSpring(0, springConfig),
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relativeX = e.clientX - rect.left;
    const relativeY = e.clientY - rect.top;

    mousePos.x.set(relativeX + 24);
    mousePos.y.set(relativeY - 90);
  };

  return (
    <section
      id="experience"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative py-16 sm:py-20 px-4 sm:px-8 max-w-5xl mx-auto border-t border-[#E8EFF6]"
    >
      {/* 21st.dev Floating Media Cursor Follower (Desktop Only) */}
      <motion.div
        className="hidden lg:block pointer-events-none absolute z-40 overflow-hidden rounded-2xl bg-white p-2 shadow-[0_20px_50px_rgba(20,38,56,0.22)] border border-[#D5E1ED] will-change-transform"
        style={{
          x: mousePos.x,
          y: mousePos.y,
          opacity: hoveredItem ? 1 : 0,
          scale: hoveredItem ? 1 : 0.85,
          transition: 'opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1), scale 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {hoveredItem && (
          <div className="w-[260px]">
            <div className="relative h-[150px] w-full rounded-xl overflow-hidden bg-[#F0F5FA] border border-[#DEE8F2]">
              <img
                src={hoveredItem.image}
                alt={hoveredItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-sm text-[10px] font-semibold text-white">
                {hoveredItem.year}
              </div>
            </div>
            <div className="p-2 pt-2">
              <p className="text-xs font-bold text-[#1E2E3E] line-clamp-1">{hoveredItem.title}</p>
              <p className="text-[11px] text-[#556E84] mt-0.5 line-clamp-1">{hoveredItem.imageCaption}</p>
            </div>
          </div>
        )}
      </motion.div>

      {/* Header Section */}
      <div className="max-w-2xl mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF1F7] border border-[#D5E1ED] text-xs font-semibold text-[#3E556B] mb-3 shadow-2xs">
          <Briefcase size={14} className="text-[#4A6277]" />
          <span>Rekam Jejak Utama · Experience</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1E2E3E]">
          Pengalaman & Riwayat Akademik
        </h2>
        <p className="mt-2.5 text-xs sm:text-sm text-[#556E84] leading-relaxed">
          Tiga pilar rekam jejak utama: kepemimpinan di GIS UINSA, pencapaian akademik FEBI (IPK 3.74), dan kontribusi riset ilmiah.
        </p>
      </div>

      {/* 21st.dev Style Compact Timeline Ledger */}
      <div className="relative">
        {/* Continuous Vertical Timeline Rail Line */}
        <div className="absolute left-4 sm:left-7 top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#4A6277] via-[#CBDCEB] to-transparent pointer-events-none" />

        <div className="space-y-6 sm:space-y-7">
          {TIMELINE_DATA.map((item, index) => {
            const IconComponent = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ type: 'spring', stiffness: 350, damping: 26, delay: index * 0.08 }}
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
                className="relative pl-11 sm:pl-18 group"
              >
                {/* Timeline Node Marker */}
                <div className="absolute left-2.5 sm:left-5.5 top-5 -translate-x-1/2 flex items-center justify-center">
                  <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-white border-2 border-[#4A6277] flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:border-[#2F4A63] transition-transform">
                    <IconComponent size={14} className="text-[#3E556B]" />
                  </div>
                </div>

                {/* Compact Bento Timeline Card */}
                <div className="p-5 sm:p-6 rounded-3xl bg-white border border-[#E2EAF1] shadow-xs hover:border-[#CBDCEB] hover:shadow-[0_10px_28px_rgba(30,46,62,0.07)] transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    {/* Left: Role Info & Bullets */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="px-3 py-0.5 rounded-full bg-[#EBF1F7] text-[#2F4A63] text-xs font-bold border border-[#D5E1ED]">
                          {item.year}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-semibold border border-emerald-200/60">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold tracking-tight text-[#1E2E3E]">
                        {item.title}
                      </h3>
                      <div className="text-xs sm:text-sm font-semibold text-[#4A6277] mt-0.5">
                        {item.subtitle}
                      </div>
                      <p className="text-xs text-[#7E96AC] flex items-center gap-1 mt-1">
                        <MapPin size={12} className="shrink-0" />
                        <span>{item.institution}</span>
                      </p>

                      <p className="mt-3 text-xs sm:text-sm text-[#556E84] leading-relaxed">
                        {item.description}
                      </p>

                      {/* Compact Highlights List */}
                      <div className="mt-3 pt-3 border-t border-[#EEF3F8] space-y-1.5">
                        {item.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-[#556E84]">
                            <CheckCircle2 size={13} className="text-[#4A6277] shrink-0 mt-0.5" />
                            <span className="leading-snug">{h}</span>
                          </div>
                        ))}
                      </div>

                      {/* Skill Pills */}
                      <div className="mt-3.5 flex flex-wrap gap-1.5">
                        {item.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-0.5 rounded-md bg-[#F0F5FA] text-[#3E556B] text-[11px] font-medium border border-[#DDE7F0]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Compact Photo Thumbnail */}
                    <div className="sm:w-[200px] shrink-0 mt-3 sm:mt-0">
                      <div
                        onClick={() =>
                          setSelectedImage({
                            src: item.image,
                            caption: item.imageCaption,
                          })
                        }
                        className="group/img relative h-[130px] w-full rounded-2xl overflow-hidden bg-[#F0F5FA] border border-[#D5E1ED] cursor-pointer shadow-xs hover:border-[#4A6277] hover:shadow-md transition-all"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                        />
                        <div className="absolute inset-0 bg-[#1E2E3E]/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 text-[#1E2E3E] text-[10px] font-semibold shadow-md">
                            <Maximize2 size={11} className="text-[#4A6277]" />
                            Perbesar
                          </span>
                        </div>
                      </div>
                      <p className="text-[10px] text-[#7E96AC] mt-1.5 leading-tight italic truncate">
                        📷 {item.imageCaption}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Full-view Activity Photo Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="absolute inset-0 bg-[#0B1520]/75 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-3xl bg-white border border-[#D5E1ED] shadow-2xl z-10 p-6 sm:p-8"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#EBF1F7] text-[#4A6277] hover:bg-[#DEE8F2] transition-colors"
                aria-label="Tutup modal"
              >
                <X size={18} />
              </button>

              <h4 className="text-lg font-bold text-[#1E2E3E] pr-8 mb-4">
                Dokumentasi Kegiatan Resmi
              </h4>

              <div className="rounded-2xl overflow-hidden border border-[#D5E1ED] bg-[#F4F7FA]">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.caption}
                  className="w-full h-auto max-h-[500px] object-contain mx-auto"
                />
              </div>

              <p className="mt-4 text-xs sm:text-sm text-[#556E84] leading-relaxed bg-[#F8FAFC] p-3.5 rounded-xl border border-[#E2EAF1]">
                📷 {selectedImage.caption}
              </p>

              <div className="mt-5 flex items-center justify-end">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="px-5 py-2.5 rounded-full bg-[#3E556B] text-white text-xs sm:text-sm font-medium hover:bg-[#2E4254] transition-colors shadow-sm"
                >
                  Tutup Tampilan
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
