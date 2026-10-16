"use client";

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useMotionValueEvent,
  type MotionValue,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Award, CheckCircle2 } from "lucide-react";

export interface CertificateCardItem {
  id: number;
  title: string;
  issuer: string;
  date: string;
  category: string;
  src: string;
  alt: string;
}

// Koleksi Sertifikat & Penghargaan Nur Azizah (FEB UB)
const CERTIFICATES: CertificateCardItem[] = [
  {
    id: 1,
    title: "Juara 2 LKTI Nasional",
    issuer: "Universitas Gadjah Mada",
    date: "Sep 2025",
    category: "Kompetisi",
    src: "https://images.unsplash.com/photo-1569683795645-b62e50fbf103?auto=format&fit=crop&w=800&q=80",
    alt: "Juara 2 LKTI UGM",
  },
  {
    id: 2,
    title: "Best Delegate MUN UI",
    issuer: "Universitas Indonesia",
    date: "Mei 2025",
    category: "Diplomasi",
    src: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
    alt: "MUN UI Best Delegate",
  },
  {
    id: 3,
    title: "Financial Modeling",
    issuer: "Bloomberg x FEB UB",
    date: "Jul 2025",
    category: "Akademik",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    alt: "Financial Modeling Bloomberg",
  },
  {
    id: 4,
    title: "Mahasiswa Berprestasi",
    issuer: "FEB Univ. Brawijaya",
    date: "Mar 2025",
    category: "Mawapres",
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
    alt: "Mawapres FEB UB",
  },
  {
    id: 5,
    title: "Ekonomi Syariah",
    issuer: "Bank Indonesia",
    date: "Apr 2025",
    category: "Seminar",
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    alt: "Seminar Bank Indonesia",
  },
  {
    id: 6,
    title: "Digital Marketing",
    issuer: "Google Indonesia",
    date: "Jan 2025",
    category: "Pelatihan",
    src: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",
    alt: "Google Digital Marketing",
  },
  {
    id: 7,
    title: "Ketua Seminar Ekraf",
    issuer: "500+ Delegasi Kampus",
    date: "Nov 2024",
    category: "Organisasi",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    alt: "Kepanitiaan Seminar Nasional",
  },
  {
    id: 8,
    title: "Finalis Business Case",
    issuer: "SBM ITB",
    date: "Okt 2024",
    category: "Kompetisi",
    src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    alt: "Business Case ITB",
  },
];

// Calculate a sweeping 3D arch around the center point for both mobile and desktop
const generatePanoramicCards = () => {
  const total = CERTIFICATES.length;
  const centerIndex = (total - 1) / 2;

  return CERTIFICATES.map((item, i) => {
    const offset = i - centerIndex;
    const absOffset = Math.abs(offset);
    const zIndex = Math.round(10 - absOffset);

    return {
      item,
      z: zIndex,
      desktop: {
        stacked: { x: offset * 2, y: offset * -2, rotateZ: offset * 2.5, rotateY: 0, scale: 1 },
        panoramic: { x: offset * 18, y: absOffset * 3, rotateZ: offset * 1.5, rotateY: offset * -12, scale: 1 - absOffset * 0.05 },
        size: { w: "22vw", h: "32vh", ml: "-11vw", mt: "-16vh" }
      },
      mobile: {
        stacked: { x: offset * 1.5, y: offset * -1.5, rotateZ: offset * 3, rotateY: 0, scale: 1 },
        panoramic: { x: offset * 16, y: absOffset * 5, rotateZ: offset * 2, rotateY: offset * -15, scale: 1 - absOffset * 0.04 },
        size: { w: "46vw", h: "30vh", ml: "-23vw", mt: "-15vh" }
      },
    };
  });
};

const CARDS = generatePanoramicCards();

const PROGRESS_SPRING = { stiffness: 80, damping: 25, mass: 0.5, restDelta: 0.001 };
const PARALLAX_SPRING = { stiffness: 50, damping: 25, mass: 0.5 };

function usePointerTilt(active: boolean, enabled: boolean) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const tiltX = useSpring(rawX, PARALLAX_SPRING);
  const tiltY = useSpring(rawY, PARALLAX_SPRING);

  useEffect(() => {
    if (!enabled || !active) {
      rawX.set(0);
      rawY.set(0);
      return;
    }
    const onMove = (e: PointerEvent) => {
      rawX.set((e.clientY / window.innerHeight - 0.5) * -10);
      rawY.set((e.clientX / window.innerWidth - 0.5) * 10);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [active, enabled, rawX, rawY]);

  return { tiltX, tiltY };
}

interface GalleryCardProps {
  card: (typeof CARDS)[0];
  progress: MotionValue<number>;
  isSpreadActive: boolean;
  isMobile: boolean;
}

function GalleryCard({ card, progress, isMobile }: GalleryCardProps) {
  const { item, desktop, mobile, z } = card;
  const activeLayout = isMobile ? mobile : desktop;
  const { stacked, panoramic, size } = activeLayout;

  const ease = useTransform(progress, (p: number) =>
    p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2
  );

  const xRaw = useTransform(ease, [0, 1], [stacked.x, panoramic.x]);
  const yRaw = useTransform(ease, [0, 1], [stacked.y, panoramic.y]);
  const x = useTransform(xRaw, (v) => `${v}vw`);
  const y = useTransform(yRaw, (v) => `${v}vh`);
  
  const rotateZ = useTransform(ease, [0, 1], [stacked.rotateZ, panoramic.rotateZ]);
  const rotateY = useTransform(ease, [0, 1], [stacked.rotateY, panoramic.rotateY]);
  const scale = useTransform(ease, [0, 1], [0.75, panoramic.scale]);

  return (
    <div 
      className="absolute left-1/2 top-1/2 pointer-events-none"
      style={{ zIndex: z }}
    >
      <motion.div
        className="will-change-transform cursor-pointer pointer-events-auto rounded-2xl shadow-[0_16px_40px_rgba(20,38,56,0.18)]"
        style={{
          width: size.w,
          height: size.h,
          marginLeft: size.ml,
          marginTop: size.mt,
          x,
          y,
          rotateZ,
          rotateY,
          scale,
          transformOrigin: "center center -50px" 
        }}
      >
        <div className="group relative h-full w-full overflow-hidden bg-white p-2.5 pb-4 max-md:p-2 max-md:pb-3 rounded-2xl transition-all duration-500 hover:shadow-2xl border border-[#D5E1ED] flex flex-col justify-between">
          {/* Certificate Image Frame */}
          <div className="relative h-[65%] w-full overflow-hidden rounded-xl bg-[#EBF1F7]">
            <img
              src={item.src}
              alt={item.alt}
              draggable={false}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-semibold text-[#3E556B] shadow-sm border border-white/60">
              {item.category}
            </div>
          </div>

          {/* Certificate Caption */}
          <div className="pt-2 px-1 text-left">
            <div className="flex items-center gap-1 text-[11px] font-bold text-[#1E2E3E] truncate">
              <CheckCircle2 size={12} className="text-[#4A6277] shrink-0" />
              <span className="truncate">{item.title}</span>
            </div>
            <div className="flex items-center justify-between text-[10px] text-[#6B8298] mt-0.5">
              <span className="truncate">{item.issuer}</span>
              <span className="shrink-0 font-medium text-[#4A6277]">{item.date}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function PanoramicSpreadHero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, PROGRESS_SPRING);
  const progress = useTransform(smoothProgress, [0.15, 0.85], [0, 1]);

  const [spread, setSpread] = useState(false);
  useMotionValueEvent(progress, "change", (p) => setSpread(p > 0.95));

  const { tiltX, tiltY } = usePointerTilt(spread, !reduce);

  const textY = useTransform(progress, [0.2, 1], ["8vh", "-22vh"]);
  const textScale = useTransform(progress, [0.2, 1], [0.88, 1]);
  const textOpacity = useTransform(progress, [0.35, 0.85], [0, 1]);

  return (
    <div 
      ref={wrapRef} 
      className="relative w-full h-[320vh] bg-[#F8FAFC] text-[#1E2E3E] transition-colors duration-500 overflow-visible"
    >
      <div
        className="sticky top-0 h-[100svh] w-full overflow-hidden flex items-center justify-center"
        style={{ perspective: "1200px" }}
      >
        {/* Subtle Ambient Mist in Haneul palette */}
        <div className="absolute inset-0 flex items-center justify-center opacity-40 blur-[120px] pointer-events-none">
          <div className="w-[50vw] h-[50vw] bg-[#DCE7F2] rounded-full mix-blend-multiply" />
        </div>

        {/* Scene Container - Reacts to pointer tilt for whole-gallery parallax */}
        <motion.div
          className="absolute inset-0 z-10 flex items-center justify-center"
          style={{ rotateX: tiltX, rotateY: tiltY, transformStyle: "preserve-3d" }}
        >
          {CARDS.map((card, i) => (
            <GalleryCard
              key={i}
              card={card}
              progress={progress}
              isSpreadActive={spread}
              isMobile={isMobile}
            />
          ))}
        </motion.div>

        {/* Elegant Editorial Typography */}
        <motion.div
          className="pointer-events-none absolute z-[5] flex flex-col items-center text-center px-6"
          style={{ y: textY, scale: textScale, opacity: textOpacity }}
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EBF1F7] text-[#4A6277] border border-[#D5E1ED] text-xs font-semibold uppercase tracking-wider mb-3">
            <Award size={13} />
            Galeri Kredensial & Prestasi
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1E2E3E]">
            Honor & Capaian.
          </h2>
          <p className="mt-4 max-w-[48ch] text-xs sm:text-sm md:text-base font-normal text-[#556E84] leading-relaxed">
            Scroll perlahan untuk membentangkan 8 sertifikat pilihan, mulai dari Juara LKTI UGM hingga Best Delegate MUN UI.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
