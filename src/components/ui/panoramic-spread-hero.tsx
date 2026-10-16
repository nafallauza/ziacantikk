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

// 8 Sertifikat Nyata Pilihan Nur Azizah Safriyani Susanti
const CERTIFICATES: CertificateCardItem[] = [
  {
    id: 1,
    title: "Kejuaraan Robotika Nasional",
    issuer: "KEJURNAS 2023",
    date: "2023",
    category: "Kompetisi",
    src: "/assets/sertifikat/Piagam_Penghargaan_Kejuaraan_Robotika_Nasional_KEJURNAS_2023_Nur_Azizah.jpg",
    alt: "Piagam Kejuaraan Robotika Nasional",
  },
  {
    id: 2,
    title: "Sertifikasi CIMM Finansial",
    issuer: "IARFC INDONESIA",
    date: "2025",
    category: "Akademik",
    src: "/assets/sertifikat/Sertifikat_CIMM_IARFC_INDONESIA_Nur_Azizah.jpg",
    alt: "Sertifikat CIMM IARFC Indonesia",
  },
  {
    id: 3,
    title: "Certificate of English",
    issuer: "Brilliant English Course",
    date: "2025",
    category: "Bahasa",
    src: "/assets/sertifikat/Certificate_Bahasa_Brilliant_English_Course_Nur_Azizah.jpg",
    alt: "Certificate Brilliant English Course",
  },
  {
    id: 4,
    title: "Panitia Trading GIS",
    issuer: "DIESNAT GIS 2025",
    date: "2025",
    category: "Finansial",
    src: "/assets/sertifikat/Sertifikat_Panitia_Trading_DIESNAT_GIS_2025.jpg",
    alt: "Sertifikat Panitia Trading GIS",
  },
  {
    id: 5,
    title: "Semnas Pendidikan 2025",
    issuer: "Universitas Negeri Surabaya",
    date: "2025",
    category: "Seminar",
    src: "/assets/sertifikat/Sertifikat_Seminar_Nasioanl_Pendidikan_2025_UNESA_Nur_Azizah.jpg",
    alt: "Seminar Nasional Pendidikan UNESA",
  },
  {
    id: 6,
    title: "Webinar Public Speaking",
    issuer: "Nasional 2025",
    date: "2025",
    category: "Soft Skill",
    src: "/assets/sertifikat/Sertifikat_Webunar_Nasional_Public_Speaking_2025.jpg",
    alt: "Webinar Public Speaking 2025",
  },
  {
    id: 7,
    title: "Pelatihan Lab Sains UM",
    issuer: "Universitas Negeri Malang",
    date: "2024",
    category: "Pelatihan",
    src: "/assets/sertifikat/Sertifikat_Pelatihan_Alat-alat_Lab_Sains_UM_Nur_Azizah.jpg",
    alt: "Pelatihan Alat Lab Sains UM",
  },
  {
    id: 8,
    title: "Dialog Inklusif DEMA FEBI",
    issuer: "DEMA x PMII FEBI",
    date: "2024",
    category: "Organisasi",
    src: "/assets/sertifikat/NUR_AZIZAH_SAFRIYANI_SUSANTI_Sertifikat_Dialog_Inklusif_DEMA_FEBIxPMIIFEBI.jpg",
    alt: "Sertifikat Dialog Inklusif DEMA FEBI",
  },
];

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
          <div className="relative h-[65%] w-full overflow-hidden rounded-xl bg-[#EBF1F7] border border-[#DEE8F1]">
            <img
              src={item.src}
              alt={item.alt}
              draggable={false}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-sm text-[10px] font-semibold text-[#3E556B] shadow-sm border border-white/60">
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
            Galeri Kredensial & Sertifikat
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1E2E3E]">
            Honor & Capaian.
          </h2>
          <p className="mt-4 max-w-[48ch] text-xs sm:text-sm md:text-base font-normal text-[#556E84] leading-relaxed">
            Scroll perlahan untuk membentangkan 8 sertifikat nyata, mulai dari Kejuaraan Robotika Nasional, CIMM IARFC, hingga kepanitiaan Galeri Investasi Syariah.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
