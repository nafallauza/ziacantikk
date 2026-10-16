import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import { certificates, type Certificate } from '../../data/portfolioData';

type CategoryFilter = 'Semua' | 'Kompetisi' | 'Akademik' | 'Organisasi' | 'Seminar';

const categories: CategoryFilter[] = ['Semua', 'Kompetisi', 'Akademik', 'Organisasi', 'Seminar'];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('Semua');
  const [activeItem, setActiveItem] = useState<Certificate | null>(null);

  const filteredItems = selectedCategory === 'Semua'
    ? certificates
    : certificates.filter((item) => item.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen pt-28 pb-20 px-4 sm:px-6 max-w-5xl mx-auto"
    >
      {/* Header */}
      <section className="mb-10">
        <span className="text-xs font-semibold text-rose-600 uppercase tracking-wider">Arsip Prestasi</span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 mt-1">
          Sertifikasi, Kompetisi & Penghargaan
        </h1>
        <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-2xl">
          Koleksi rekam jejak capaian akademik, kompetisi tingkat nasional, kepanitiaan, dan program pelatihan profesional.
        </p>
      </section>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-zinc-100/80 border border-zinc-200/60 max-w-fit mb-8">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`relative px-4 py-1.5 text-xs font-medium rounded-xl transition-colors duration-200 ${
                isActive ? 'text-zinc-950 font-semibold' : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="portfolio-tab"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  className="absolute inset-0 bg-white rounded-xl shadow-sm border border-zinc-200/80 -z-10"
                />
              )}
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid Cards */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              className="cursor-pointer group p-6 rounded-3xl bg-white border border-zinc-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-zinc-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium ${
                    item.category === 'Kompetisi'
                      ? 'bg-amber-50 text-amber-700 border border-amber-200/60'
                      : item.category === 'Akademik'
                      ? 'bg-rose-50 text-rose-700 border border-rose-200/60'
                      : item.category === 'Organisasi'
                      ? 'bg-blue-50 text-blue-700 border border-blue-200/60'
                      : 'bg-emerald-50 text-emerald-700 border border-emerald-200/60'
                  }`}>
                    {item.category}
                  </span>
                  <span className="text-[11px] font-medium text-zinc-400">{item.date}</span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-zinc-900 group-hover:text-rose-600 transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-zinc-600 leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-medium text-zinc-500">
                <span className="group-hover:text-zinc-900 transition-colors">Lihat Kredensial & Detail</span>
                <span className="text-zinc-400 group-hover:translate-x-1 group-hover:text-rose-600 transition-all">→</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal Popup Detail */}
      <AnimatePresence>
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="relative w-full max-w-lg p-6 sm:p-7 rounded-3xl bg-white border border-zinc-200 shadow-2xl"
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 hover:bg-zinc-200 transition-colors"
                aria-label="Tutup modal"
              >
                <X size={16} />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-200/60">
                  {activeItem.category}
                </span>
                <span className="text-xs text-zinc-400">{activeItem.date}</span>
              </div>

              <h2 className="text-xl font-bold text-zinc-950 tracking-tight leading-snug">
                {activeItem.title}
              </h2>

              <div className="mt-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-100">
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-800 mb-1">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  Keterangan Resmi
                </div>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {activeItem.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
                <span>Terverifikasi di Portofolio</span>
                <button
                  onClick={() => setActiveItem(null)}
                  className="px-4 py-2 rounded-xl bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-colors"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
