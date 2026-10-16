import { useEffect, useRef, useState, useMemo } from 'react';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from 'framer-motion';
import {
  Award,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Eye,
  CheckCircle2,
  Sparkles,
  Layers,
} from 'lucide-react';
import { certificates, type Certificate } from '../../data/portfolioData';

interface CardTransformProps {
  index: number;
  total: number;
  smoothIndex: any;
  spreadSpring: any;
  cardWidth: number;
  cardSpacing: number;
  isHovered: boolean;
  isActive: boolean;
  item: Certificate;
  onSelect: (item: Certificate) => void;
  onCenter: (index: number) => void;
  onHoverStart: () => void;
}

function InteractiveCard({
  index,
  total,
  smoothIndex,
  spreadSpring,
  cardWidth,
  cardSpacing,
  isHovered,
  isActive,
  item,
  onSelect,
  onCenter,
  onHoverStart,
}: CardTransformProps) {
  // Center anchor for stacked state
  const centerStacked = 0;
  const stackOffset = index - centerStacked;

  // Transform values driven purely by motion springs (60fps native)
  const x = useTransform(
    [smoothIndex, spreadSpring],
    ([idx, spread]: any[]) => {
      // In stacked mode, cards sit slightly fanned in a compact deck
      const stackedX = stackOffset * 3.5;
      // In spread mode, cards spread widely around the active scroll index
      const relSpread = index - idx;
      const spreadX = relSpread * cardSpacing;
      return stackedX * (1 - spread) + spreadX * spread;
    }
  );

  const y = useTransform(
    [smoothIndex, spreadSpring],
    ([idx, spread]: any[]) => {
      const stackedY = stackOffset * -2;
      const relSpread = index - idx;
      // Parabolic curve for 3D panoramic arch
      const spreadY = Math.pow(Math.abs(relSpread), 1.25) * 8.5;
      return stackedY * (1 - spread) + spreadY * spread;
    }
  );

  const rotateY = useTransform(
    [smoothIndex, spreadSpring],
    ([idx, spread]: any[]) => {
      const relSpread = index - idx;
      const spreadRotY = Math.max(-38, Math.min(38, -relSpread * 12));
      return spreadRotY * spread;
    }
  );

  const rotateZ = useTransform(
    [smoothIndex, spreadSpring],
    ([idx, spread]: any[]) => {
      const stackedRotZ = Math.max(-9, Math.min(9, stackOffset * 1.8));
      const relSpread = index - idx;
      const spreadRotZ = Math.max(-7, Math.min(7, relSpread * 1.2));
      return stackedRotZ * (1 - spread) + spreadRotZ * spread;
    }
  );

  const scale = useTransform(
    [smoothIndex, spreadSpring],
    ([idx, spread]: any[]) => {
      const stackedScale = Math.max(0.78, 1 - stackOffset * 0.015);
      const relSpread = index - idx;
      const spreadScale = Math.max(0.74, 1 - Math.abs(relSpread) * 0.065);
      return stackedScale * (1 - spread) + spreadScale * spread;
    }
  );

  const opacity = useTransform(
    [smoothIndex, spreadSpring],
    ([idx, spread]: any[]) => {
      const stackedOpacity = stackOffset > 5 ? 0 : 1;
      const relSpread = index - idx;
      const spreadOpacity = Math.max(0.2, 1 - Math.abs(relSpread) * 0.15);
      return stackedOpacity * (1 - spread) + spreadOpacity * spread;
    }
  );

  const zIndex = useTransform(
    [smoothIndex, spreadSpring],
    ([idx, spread]: any[]) => {
      const stackedZ = total - stackOffset;
      const relSpread = index - idx;
      const spreadZ = Math.round(50 - Math.abs(relSpread) * 4);
      return Math.round(stackedZ * (1 - spread) + spreadZ * spread);
    }
  );

  const handleClick = () => {
    onCenter(index);
    onSelect(item);
  };

  return (
    <motion.div
      onClick={handleClick}
      onMouseEnter={onHoverStart}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform cursor-pointer select-none"
      style={{
        width: `${cardWidth}px`,
        x,
        y,
        rotateY,
        rotateZ,
        scale,
        opacity,
        zIndex,
        transformStyle: 'preserve-3d',
      }}
      whileHover={
        isHovered
          ? {
              y: -12,
              scale: 1.05,
              transition: { type: 'spring', stiffness: 400, damping: 25 },
            }
          : undefined
      }
      whileTap={{ scale: 0.97 }}
    >
      <div
        className={`group relative w-full h-[320px] sm:h-[350px] p-3 rounded-2xl bg-white border transition-all duration-300 flex flex-col justify-between ${
          isActive
            ? 'border-[#3E556B] shadow-[0_16px_36px_rgba(30,46,62,0.18)] ring-2 ring-[#4A6277]/25'
            : 'border-[#D5E1ED] shadow-[0_10px_28px_rgba(30,46,62,0.1)] hover:border-[#4A6277] hover:shadow-[0_18px_38px_rgba(30,46,62,0.2)]'
        }`}
      >
        {/* Certificate Image Frame */}
        <div className="relative h-[68%] w-full overflow-hidden rounded-xl bg-[#F0F5FA] border border-[#DEE8F2]">
          <img
            src={item.image}
            alt={item.title}
            draggable={false}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />

          {/* Category Pill Badge */}
          <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-sm text-[10px] font-semibold text-[#2F4A63] border border-[#D5E1ED] shadow-xs">
            {item.category}
          </div>

          {/* Year Badge */}
          <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-slate-900/75 backdrop-blur-sm text-[10px] font-semibold text-white shadow-xs">
            {item.date}
          </div>

          {/* Hover Action Overlay */}
          <div className="absolute inset-0 bg-[#1E2E3E]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 text-[#1E2E3E] text-xs font-semibold shadow-md">
              <Maximize2 size={12} className="text-[#4A6277]" />
              Lihat Dokumen
            </span>
          </div>
        </div>

        {/* Certificate Information */}
        <div className="pt-2 px-1 text-left flex flex-col justify-between flex-1">
          <div>
            <h4 className="text-xs sm:text-[13px] font-bold text-[#1E2E3E] line-clamp-2 leading-snug group-hover:text-[#4A6277] transition-colors">
              {item.title}
            </h4>
          </div>

          <div className="flex items-center justify-between text-[11px] text-[#6B8298] pt-1 border-t border-[#EEF3F8]">
            <span className="truncate max-w-[150px] font-medium">{item.issuer}</span>
            <span className="text-[10px] text-[#4A6277] font-semibold">#{index + 1}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function PanoramicSpreadHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isLockedSpread, setIsLockedSpread] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  // Responsive dimensions
  const [cardWidth, setCardWidth] = useState(250);
  const [cardSpacing, setCardSpacing] = useState(230);

  const total = certificates.length;

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 640;
      setCardWidth(isMobile ? 190 : 250);
      setCardSpacing(isMobile ? 170 : 230);
      // Auto expand on mobile devices since they don't have hover cursor
      if (isMobile) {
        setIsLockedSpread(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Motion Values for horizontal carousel navigation
  const targetIndex = useMotionValue(0);
  const smoothIndex = useSpring(targetIndex, {
    stiffness: 220,
    damping: 26,
    mass: 0.8,
  });

  // Spread control: 0 = stacked deck, 1 = fanned out / mencar
  const isInteracting = isHovered || isLockedSpread || selectedCert !== null;
  const spreadTarget = useMotionValue(0);
  const spreadSpring = useSpring(spreadTarget, {
    stiffness: 260,
    damping: 22,
    mass: 0.8,
  });

  // React to isInteracting state changes and trigger smooth spring animation
  useEffect(() => {
    spreadTarget.set(isInteracting ? 1 : 0);
  }, [isInteracting, spreadTarget]);

  // Track active index integer for indicator
  useMotionValueEvent(smoothIndex, 'change', (val) => {
    const rounded = Math.round(val);
    if (rounded !== activeIdx && rounded >= 0 && rounded < total) {
      setActiveIdx(rounded);
    }
  });

  // Ref to access hover state inside non-passive wheel event listener
  const isHoveredRef = useRef(false);
  useEffect(() => {
    isHoveredRef.current = isInteracting;
  }, [isInteracting]);

  // Non-passive wheel event listener to scroll left & right when cursor hovers
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (!isHoveredRef.current) return;

      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(delta) < 2) return;

      // Prevent full page vertical scroll while wheeling over the certificate gallery
      e.preventDefault();

      const sensitivity = 0.0065;
      const current = targetIndex.get();
      const next = Math.max(0, Math.min(total - 1, current + delta * sensitivity));
      targetIndex.set(next);
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [total, targetIndex]);

  // Navigation handlers
  const handlePrev = () => {
    const current = Math.round(targetIndex.get());
    targetIndex.set(Math.max(0, current - 1));
  };

  const handleNext = () => {
    const current = Math.round(targetIndex.get());
    targetIndex.set(Math.min(total - 1, current + 1));
  };

  const handleSelectIndex = (index: number) => {
    targetIndex.set(index);
  };

  // Pan / Drag navigation support for touchpad & touchscreens
  const handlePan = (_: any, info: { delta: { x: number } }) => {
    const sensitivity = 0.007;
    const current = targetIndex.get();
    const next = Math.max(0, Math.min(total - 1, current - info.delta.x * sensitivity));
    targetIndex.set(next);
  };

  const currentItem = useMemo(() => certificates[activeIdx] || certificates[0], [activeIdx]);

  return (
    <section
      id="sertifikat"
      className="relative w-full py-16 sm:py-24 bg-gradient-to-b from-white via-[#F5F8FB] to-white text-[#1E2E3E] select-none overflow-hidden border-t border-[#E8EFF6]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex flex-col items-center text-center">
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF1F7] border border-[#D5E1ED] text-xs font-semibold text-[#3E556B] mb-3 shadow-2xs">
          <Award size={14} className="text-[#4A6277]" />
          <span>Rekam Jejak & Kredensial Resmi</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1E2E3E]">
          Sertifikasi & Prestasi
        </h2>

        <p className="mt-2.5 text-xs sm:text-sm text-[#556E84] max-w-xl leading-relaxed">
          Arsip 12 sertifikat resmi mencakup kejuaraan robotika nasional, sertifikasi profesi keuangan CIMM, kepanitiaan FEBI UINSA, hingga kemahiran bahasa.
        </p>

        {/* Dynamic Interaction Hint Badge */}
        <div className="mt-4 flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-[#D5E1ED] text-[11px] sm:text-xs font-medium text-[#4A6277] shadow-xs">
          <span className="relative flex h-2 w-2">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                isInteracting ? 'bg-emerald-400' : 'bg-sky-400'
              }`}
            />
            <span
              className={`relative inline-flex rounded-full h-2 w-2 ${
                isInteracting ? 'bg-emerald-500' : 'bg-sky-500'
              }`}
            />
          </span>
          <span>
            {isInteracting
              ? 'Mode Mencar Aktif: Gulir wheel mouse / geser ke samping untuk menjelajah'
              : 'Arahkan kursor ke kartu untuk membentangkan (mencar) koleksi'}
          </span>
        </div>
      </div>

      {/* 3D Interactive Stage Container */}
      <div
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full h-[400px] sm:h-[450px] my-4 flex items-center justify-center cursor-grab active:cursor-grabbing"
        style={{ perspective: '1400px' }}
      >
        {/* Left Arrow Button */}
        <button
          onClick={handlePrev}
          disabled={activeIdx === 0}
          aria-label="Sertifikat sebelumnya"
          className="absolute left-3 sm:left-10 z-40 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/90 backdrop-blur-md border border-[#D5E1ED] text-[#2F4A63] shadow-md hover:bg-white hover:scale-105 active:scale-95 disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center justify-center"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Cards Scene Container with Pan support */}
        <motion.div
          onPan={handlePan}
          className="relative w-full h-full flex items-center justify-center"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {certificates.map((item, index) => (
            <InteractiveCard
              key={item.id}
              index={index}
              total={total}
              smoothIndex={smoothIndex}
              spreadSpring={spreadSpring}
              cardWidth={cardWidth}
              cardSpacing={cardSpacing}
              isHovered={isInteracting}
              isActive={index === activeIdx}
              item={item}
              onSelect={(cert) => setSelectedCert(cert)}
              onCenter={handleSelectIndex}
              onHoverStart={() => setIsHovered(true)}
            />
          ))}
        </motion.div>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          disabled={activeIdx === total - 1}
          aria-label="Sertifikat selanjutnya"
          className="absolute right-3 sm:right-10 z-40 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/90 backdrop-blur-md border border-[#D5E1ED] text-[#2F4A63] shadow-md hover:bg-white hover:scale-105 active:scale-95 disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Bottom Controls Bar: Active Info & Spread Lock Button */}
      <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
        {/* Active Certificate Quick Pill */}
        <div className="flex items-center gap-2.5">
          <span className="px-3 py-1 rounded-full bg-[#EBF1F7] text-[#2F4A63] border border-[#D5E1ED] text-xs font-semibold">
            {currentItem.category} · {currentItem.date}
          </span>
          <span className="text-xs text-[#6B8298] font-medium hidden sm:inline truncate max-w-xs">
            {currentItem.title}
          </span>
        </div>

        {/* Dots Pagination */}
        <div className="flex items-center gap-1.5 p-1 rounded-full bg-[#EBF1F7]/80 border border-[#D5E1ED]/80">
          {certificates.map((cert, i) => (
            <button
              key={cert.id}
              onClick={() => handleSelectIndex(i)}
              aria-label={`Pilih sertifikat ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-200 ${
                i === activeIdx
                  ? 'w-6 bg-[#3E556B]'
                  : 'w-2 bg-[#BDCFE0] hover:bg-[#8EA3B8]'
              }`}
            />
          ))}
        </div>

        {/* Spread Lock Toggle Button */}
        <button
          onClick={() => setIsLockedSpread((prev) => !prev)}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white border border-[#D5E1ED] text-xs font-semibold text-[#3E556B] shadow-2xs hover:bg-[#EBF1F7] hover:border-[#4A6277] transition-all active:scale-95"
        >
          {isLockedSpread ? (
            <>
              <Layers size={13} className="text-[#4A6277]" />
              <span>Tumpuk Kembali</span>
            </>
          ) : (
            <>
              <Sparkles size={13} className="text-[#4A6277]" />
              <span>Kunci Mencar</span>
            </>
          )}
        </button>
      </div>

      {/* Full-view Certificate Modal Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-[#0B1520]/70 backdrop-blur-md"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 rounded-3xl bg-white border border-[#D5E1ED] shadow-2xl z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#EBF1F7] text-[#4A6277] hover:bg-[#DEE8F2] transition-colors"
                aria-label="Tutup modal"
              >
                <X size={18} />
              </button>

              {/* Badges */}
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#EBF1F7] text-[#2F4A63] border border-[#D5E1ED]">
                  {selectedCert.category}
                </span>
                <span className="text-xs text-[#8EA3B8] font-medium">Tahun {selectedCert.date}</span>
              </div>

              {/* Title & Issuer */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#1E2E3E] tracking-tight pr-8">
                {selectedCert.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#4A6277] font-medium mt-1">
                Penerbit: {selectedCert.issuer}
              </p>

              {/* High-res Image Preview */}
              <div className="mt-5 rounded-2xl overflow-hidden border border-[#D5E1ED] bg-[#F4F7FA] shadow-inner">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto max-h-[460px] object-contain mx-auto"
                />
              </div>

              {/* Document Description */}
              <div className="mt-4 p-4 rounded-xl bg-[#F8FAFC] border border-[#E2EAF1] text-xs sm:text-sm text-[#556E84] leading-relaxed">
                <div className="flex items-center gap-1.5 font-semibold text-[#203243] mb-1">
                  <CheckCircle2 size={14} className="text-[#4A6277]" />
                  <span>Keterangan Dokumen</span>
                </div>
                <p>{selectedCert.description}</p>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <a
                  href={selectedCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#4A6277] font-semibold hover:underline"
                >
                  <Eye size={14} />
                  <span>Buka Gambar Asli di Tab Baru</span>
                </a>
                <button
                  onClick={() => setSelectedCert(null)}
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
