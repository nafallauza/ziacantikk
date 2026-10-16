import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import { certificates, type Certificate } from '../data/portfolioData';

type CategoryFilter = 'Semua' | 'Kompetisi' | 'Akademik' | 'Organisasi' | 'Seminar';

const categories: CategoryFilter[] = ['Semua', 'Kompetisi', 'Akademik', 'Organisasi', 'Seminar'];

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('Semua');
  const [activeItem, setActiveItem] = useState<Certificate | null>(null);

  const filteredItems = selectedCategory === 'Semua'
    ? certificates
    : certificates.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-12 px-6 sm:px-10 max-w-4xl mx-auto border-t border-[#E8EFF6]">
      {/* Header */}
      <div className="mb-10">
        <span className="text-xs font-semibold text-[#4A6277] uppercase tracking-wider">Arsip Prestasi</span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1E2E3E] mt-1">
          Sertifikasi, Kompetisi & Penghargaan
        </h2>
        <p className="mt-2 text-sm text-[#556E84] leading-relaxed max-w-xl">
          Koleksi rekam jejak capaian akademik, kompetisi tingkat nasional, kepanitiaan, dan program pelatihan profesional.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-[#EBF1F7] border border-[#D5E1ED] max-w-fit mb-8">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`relative px-4 py-1.5 text-xs font-medium rounded-xl transition-colors duration-200 ${
                isActive ? 'text-[#1E2E3E] font-semibold' : 'text-[#5A738E] hover:text-[#1E2E3E]'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="portfolio-tab-onepage"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  className="absolute inset-0 bg-white rounded-xl shadow-sm border border-[#D0DEEC] -z-10"
                />
              )}
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid Cards */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={() => setActiveItem(item)}
              className="cursor-pointer group p-5 sm:p-6 rounded-3xl bg-white border border-[#E2EAF1] shadow-[0_2px_10px_rgba(70,95,120,0.02)] hover:shadow-[0_8px_30px_rgba(70,95,120,0.08)] hover:border-[#CCDCEB] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium ${
                    item.category === 'Kompetisi'
                      ? 'bg-[#EBF1F7] text-[#2F4A63] border border-[#D5E1ED]'
                      : item.category === 'Akademik'
                      ? 'bg-[#E8F0F8] text-[#25425D] border border-[#CCDCEB]'
                      : item.category === 'Organisasi'
                      ? 'bg-[#EDF3F9] text-[#334E67] border border-[#D7E3EE]'
                      : 'bg-[#F2F6FA] text-[#3E556B] border border-[#DEE8F2]'
                  }`}>
                    {item.category}
                  </span>
                  <span className="text-[11px] font-medium text-[#8EA3B8]">{item.date}</span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-[#1E2E3E] group-hover:text-[#3B546C] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-xs text-[#556E84] leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-[#EEF3F8] flex items-center justify-between text-xs font-medium text-[#7E96AC]">
                <span className="group-hover:text-[#1E2E3E] transition-colors">Lihat Kredensial & Detail</span>
                <span className="text-[#8EA3B8] group-hover:translate-x-1 group-hover:text-[#3E556B] transition-all">→</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal Popup Detail */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E2E3E]/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="relative w-full max-w-lg p-6 sm:p-7 rounded-3xl bg-white border border-[#D5E1ED] shadow-2xl"
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-[#EBF1F7] text-[#4A6277] hover:bg-[#DEE8F2] transition-colors"
                aria-label="Tutup modal"
              >
                <X size={16} />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#EBF1F7] text-[#2F4A63] border border-[#D5E1ED]">
                  {activeItem.category}
                </span>
                <span className="text-xs text-[#8EA3B8]">{activeItem.date}</span>
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-[#1E2E3E] tracking-tight leading-snug">
                {activeItem.title}
              </h2>

              {/* Certificate Image preview with fallback */}
              <div className="mt-4 relative w-full h-48 rounded-2xl overflow-hidden bg-[#F0F5FA] border border-[#D5E1ED] flex items-center justify-center">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center pointer-events-none -z-0">
                  <span className="p-3 rounded-full bg-[#EBF1F7] text-[#4A6277] mb-2 border border-[#D5E1ED]">
                    <CheckCircle2 size={24} />
                  </span>
                  <span className="text-xs font-semibold text-[#1E2E3E]">{activeItem.title}</span>
                  <span className="text-[11px] text-[#7E96AC] mt-0.5">{activeItem.category} · {activeItem.date}</span>
                  <span className="text-[10px] text-[#556E84] mt-2 font-medium">Foto sertifikat di folder /assets/sertifikat/</span>
                </div>
              </div>

              <div className="mt-4 p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2EAF1]">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#203243] mb-1">
                  <CheckCircle2 size={14} className="text-[#4A6277]" />
                  Keterangan Resmi
                </div>
                <p className="text-xs sm:text-sm text-[#556E84] leading-relaxed">
                  {activeItem.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EEF3F8] flex items-center justify-between text-xs text-[#7E96AC]">
                <span>Terverifikasi di Portofolio</span>
                <button
                  onClick={() => setActiveItem(null)}
                  className="px-4 py-2 rounded-xl bg-[#3E556B] text-white font-medium hover:bg-[#2E4254] transition-colors"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
