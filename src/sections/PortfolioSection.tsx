import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Eye, Filter } from 'lucide-react';
import { certificates, type Certificate } from '../data/portfolioData';

type CategoryFilter = 'Semua' | 'Kompetisi' | 'Sertifikasi' | 'Kepanitiaan' | 'Seminar';

const categories: CategoryFilter[] = ['Semua', 'Kompetisi', 'Sertifikasi', 'Kepanitiaan', 'Seminar'];

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('Semua');
  const [activeItem, setActiveItem] = useState<Certificate | null>(null);

  const filteredItems =
    selectedCategory === 'Semua'
      ? certificates
      : certificates.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-12 px-6 sm:px-10 max-w-5xl mx-auto border-t border-[#E8EFF6]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-semibold text-[#4A6277] uppercase tracking-wider">
            Katalog Dokumen Lengkap
          </span>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1E2E3E] mt-1">
            Arsip Lengkap Sertifikat & Piagam
          </h3>
          <p className="mt-1.5 text-xs sm:text-sm text-[#556E84] leading-relaxed max-w-xl">
            Seluruh berkas fisik dan digital yang telah diverifikasi, mencakup kejuaraan robotika nasional, sertifikasi profesi keuangan, dan kepanitiaan.
          </p>
        </div>

        {/* Total Badge */}
        <div className="shrink-0 px-3.5 py-1.5 rounded-full bg-[#EBF1F7] border border-[#D5E1ED] text-xs font-semibold text-[#3E556B] self-start sm:self-auto">
          {filteredItems.length} Dokumen Terverifikasi
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
        <span className="text-xs font-medium text-[#7E96AC] flex items-center gap-1 shrink-0 mr-1">
          <Filter size={13} />
          Filter:
        </span>
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-[#EBF1F7] border border-[#D5E1ED]">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-xl transition-colors duration-200 ${
                  isActive ? 'text-[#1E2E3E] font-semibold' : 'text-[#5A738E] hover:text-[#1E2E3E]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="portfolio-tab-filter"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    className="absolute inset-0 bg-white rounded-xl shadow-xs border border-[#D0DEEC] -z-10"
                  />
                )}
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Certificates */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
              className="cursor-pointer group p-4 sm:p-5 rounded-3xl bg-white border border-[#E2EAF1] shadow-xs hover:shadow-[0_10px_30px_rgba(70,95,120,0.1)] hover:border-[#CCDCEB] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail Preview */}
                <div className="relative h-44 w-full rounded-2xl overflow-hidden bg-[#F0F5FA] border border-[#E2EAF1] mb-3.5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-sm text-[10px] font-semibold text-[#2F4A63] border border-[#D5E1ED] shadow-xs">
                    {item.category}
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-full bg-[#1E2E3E]/75 backdrop-blur-sm text-[10px] font-medium text-white shadow-xs">
                    {item.date}
                  </div>
                </div>

                <div className="text-[11px] text-[#6B8298] font-medium mb-1 truncate">
                  {item.issuer}
                </div>

                <h4 className="text-sm font-bold text-[#1E2E3E] group-hover:text-[#3B546C] transition-colors leading-snug line-clamp-2">
                  {item.title}
                </h4>

                <p className="mt-2 text-xs text-[#556E84] leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#EEF3F8] flex items-center justify-between text-xs font-semibold text-[#4A6277]">
                <span>Tinjau Dokumen Asli</span>
                <span className="text-[#8EA3B8] group-hover:translate-x-1 group-hover:text-[#3E556B] transition-all">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal Popup Detail */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E2E3E]/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto p-6 sm:p-8 rounded-3xl bg-white border border-[#D5E1ED] shadow-2xl"
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#EBF1F7] text-[#4A6277] hover:bg-[#DEE8F2] transition-colors"
                aria-label="Tutup modal"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#EBF1F7] text-[#2F4A63] border border-[#D5E1ED]">
                  {activeItem.category}
                </span>
                <span className="text-xs text-[#8EA3B8] font-medium">{activeItem.date}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#1E2E3E] tracking-tight pr-8">
                {activeItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#4A6277] font-medium mt-1">
                Penerbit: {activeItem.issuer}
              </p>

              {/* High-res Image preview */}
              <div className="mt-5 rounded-2xl overflow-hidden border border-[#D5E1ED] bg-[#F4F7FA] shadow-inner">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-auto max-h-[480px] object-contain mx-auto"
                />
              </div>

              <div className="mt-4 p-4 rounded-xl bg-[#F8FAFC] border border-[#E2EAF1] text-xs sm:text-sm text-[#556E84] leading-relaxed">
                <div className="flex items-center gap-1.5 font-semibold text-[#203243] mb-1">
                  <CheckCircle2 size={14} className="text-[#4A6277]" />
                  Deskripsi & Bukti Capaian
                </div>
                <p>{activeItem.description}</p>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <a
                  href={activeItem.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#4A6277] font-semibold hover:underline"
                >
                  <Eye size={14} />
                  Buka Gambar Asli Resolusi Penuh
                </a>
                <button
                  onClick={() => setActiveItem(null)}
                  className="px-5 py-2.5 rounded-full bg-[#3E556B] text-white text-xs sm:text-sm font-medium hover:bg-[#2E4254] transition-colors shadow-sm"
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
