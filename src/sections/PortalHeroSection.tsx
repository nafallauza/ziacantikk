"use client";

import GlyphPortal from "../components/ui/glyph-portal";
import Lanyard from "../components/ui/Lanyard";
import { Award } from "lucide-react";

export default function PortalHeroSection() {

  return (
    <div
      id="home"
      data-slipstream-demo
      className="relative w-full bg-white"
    >
      <style>{`
        [data-slipstream-demo] [data-gp-caption]{inset:auto 24px clamp(32px, 5.5vh, 48px) 24px;justify-content:center;z-index:22;}
        [data-slipstream-demo] [data-gp-hint]{display:none;}
        [data-slipstream-demo] [data-gp-enter]{min-height:46px;padding:0 24px;gap:20px;background:#0F2035;border:1px solid rgba(255,255,255,0.25);border-radius:9999px;color:#fff;font-size:13px;font-weight:600;box-shadow:0 8px 24px rgba(15,32,53,0.35);transition:all .2s;}
        [data-slipstream-demo] [data-gp-enter]:hover{background:#0A1624;box-shadow:0 10px 28px rgba(15,32,53,0.45);transform:scale(1.02);}
        [data-slipstream-demo] [data-gp-enter]:focus-visible{outline:2px solid #38BDF8;outline-offset:4px;}
        [data-slipstream-demo] [data-gp-touch-picker]{top:auto;bottom:18px;left:50%;}
        [data-slipstream-demo] [data-gp-select]{border-color:#CBD5E1;border-radius:9999px;font-size:12px;color:#0F2035;background:#fff;}
        [data-sublime-scroll]{position:absolute;inset:auto 24px clamp(8px, 1.4vh, 14px) 24px;display:flex;justify-content:center;z-index:22;pointer-events:none;}
        [data-sublime-scroll] span{display:inline-flex;align-items:center;gap:6px;padding:3px 14px;border-radius:9999px;background:rgba(255,255,255,0.85);backdrop-filter:blur(6px);border:1px solid rgba(203,213,225,0.7);box-shadow:0 2px 10px rgba(15,32,53,0.08);color:#0F2035;font-size:11px;font-weight:600;letter-spacing:.02em;}
        @media(any-pointer:coarse){[data-sublime-scroll]{bottom:6px;}}
        @container(max-width:450px){[data-slipstream-demo] [data-gp-caption]{bottom:24px;}}
        @container(max-height:479px){[data-slipstream-demo] [data-gp-caption]{bottom:16px;}[data-sublime-scroll]{display:none;}}
        
        /* Inside Portal Full-Blue Content Styling */
        [data-slipstream-demo] [data-gp-content]{padding:5rem clamp(1.5rem,6cqw,6rem) 6rem;font-family:inherit;}
        [data-slipstream-copy]{display:flex;width:min(100%,75rem);margin:auto;flex-direction:column;align-items:flex-start;gap:clamp(2rem,5svh,3.5rem);}
        [data-slipstream-copy] h2{max-width:46rem;margin:0;color:#FFFFFF;font-size:clamp(1.85rem,1.2rem + 2.2cqw,2.75rem);font-weight:700;line-height:1.2;letter-spacing:-0.025em;text-wrap:balance;}
        [data-slipstream-features]{display:grid;width:100%;grid-template-columns:1fr;gap:1.75rem;}
        [data-slipstream-feature]{border-top:1px solid rgba(255,255,255,.25);padding-top:1.3rem;}
        [data-slipstream-feature] h3{margin:0;color:#FFFFFF;font-size:1.15rem;font-weight:600;line-height:1.25;letter-spacing:0;}
        [data-slipstream-feature] p{margin:.65rem 0 0;color:rgba(255,255,255,.82);font-size:.925rem;line-height:1.6;}
        [data-slipstream-no]{display:inline-block;margin-right:.7rem;color:rgba(255,255,255,.85);font:600 .75rem ui-monospace,monospace;letter-spacing:.08em;transform:translateY(-.1em);}
        @media(min-width:768px){[data-slipstream-features]{grid-template-columns:repeat(3,minmax(0,1fr));gap:3rem;}}
      `}</style>

      <GlyphPortal
        word="azizah."
        focusChar="h"
        scrollLength={2.6}
        interactive={false}
        fontFamily='"Glyph Portal Jakarta", "Arial Black", Arial, sans-serif'
        fontWeight={900}
        enterLabel="Melangkah Masuk"
        style={{
          "--gp-paper": "#FFFFFF",
          "--gp-ink": "#0F2035",
          "--gp-field": "#0D1E2E",
          "--gp-foreground": "#FFFFFF",
        }}
        background={
          <div
            data-gp-default-field
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 18% 12%, rgba(68, 115, 160, 0.45), transparent 45%), radial-gradient(circle at 82% 78%, rgba(35, 75, 110, 0.4), transparent 50%), linear-gradient(135deg, #0D1E2E 0%, #172F47 50%, #0A1622 100%)",
            }}
          />
        }
        front={
          <>
            {/* Cutout Photo & Floating Badges - Anchored to Bottom ("mentok ke bawah, diturunin") */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                bottom: 0,
                transform: "translateX(-50%)",
                zIndex: 18,
                pointerEvents: "none",
              }}
              className="flex items-end justify-center select-none"
            >
              <div className="relative flex items-end justify-center">
                {/* Soft ambient depth shadow behind figure */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-6 sm:inset-x-10 bottom-0 top-16 bg-slate-900/20 blur-2xl sm:blur-3xl -z-10 rounded-full pointer-events-none"
                />

                {/* High-Resolution Color-Graded Transparent Cutout of Nur Azizah with Multi-Layer Drop Shadow */}
                <img
                  src="/assets/foto/hero-almamater-hd.png"
                  alt="Nur Azizah Safriyani Susanti"
                  className="h-[460px] sm:h-[560px] md:h-[640px] lg:h-[720px] xl:h-[780px] max-h-[85vh] w-auto object-contain select-none pointer-events-none"
                  style={{
                    filter:
                      "drop-shadow(0 6px 12px rgba(15, 30, 48, 0.18)) drop-shadow(0 16px 32px rgba(15, 30, 48, 0.25)) drop-shadow(0 28px 60px rgba(15, 30, 48, 0.32))",
                  }}
                  loading="eager"
                />

                {/* Floating Info Badge Left: University */}
                <div className="absolute top-[32%] -left-4 sm:-left-12 md:-left-16 lg:-left-24 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/95 backdrop-blur-md border border-[#CBD5E1]/80 shadow-[0_8px_24px_rgba(15,30,46,0.12)] flex items-center gap-2 text-[11px] sm:text-xs md:text-sm font-semibold text-[#0F2035] whitespace-nowrap pointer-events-auto transition-transform duration-200 hover:scale-105 cursor-default">
                  <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>FEBI UIN Sunan Ampel Surabaya</span>
                </div>

                {/* Floating Info Badge Right: Credentials */}
                <div className="absolute top-[52%] -right-4 sm:-right-12 md:-right-16 lg:-right-24 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/95 backdrop-blur-md border border-[#CBD5E1]/80 shadow-[0_8px_24px_rgba(15,30,46,0.12)] flex items-center gap-2 text-[11px] sm:text-xs md:text-sm font-semibold text-[#0F2035] whitespace-nowrap pointer-events-auto transition-transform duration-200 hover:scale-105 cursor-default">
                  <Award size={14} strokeWidth={1.75} className="text-amber-500" />
                  <span>IPK 3.74 · Ekonomi Syariah</span>
                </div>
              </div>
            </div>

            {/* Scroll instruction at bottom */}
            <span data-sublime-scroll>
              <span>Gulir untuk melangkah masuk ke dalam huruf ↓</span>
            </span>
          </>
        }
      >
        {/* Inside Portal: Full Blue Screen with About Story & 3D Lanyard ID Card */}
        <div id="about" className="scroll-mt-24 w-full" data-slipstream-copy>
          {/* Main Container: Text (Left) + 3D Lanyard Layered Above (Right to Left Overlap) */}
          <div className="w-full relative min-h-[580px] lg:min-h-[640px]">
            {/* Left Narrative Text: Pure Editorial Paragraphs (NO AI Slop Boxes!) */}
            <div className="w-full lg:max-w-[62%] xl:max-w-[64%] flex flex-col justify-start text-left pt-2 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-[#A8C8E8] mb-5 w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>About Me · Nur Azizah</span>
              </div>

              <h2>Dedikasi untuk Integritas Ekonomi Syariah & Eksplorasi Riset Finansial.</h2>

              <p className="mt-5 text-sm sm:text-base text-white/90 leading-relaxed">
                Halo! Saya <strong className="text-white font-semibold">Nur Azizah Safriyani Susanti</strong>, mahasiswi S1 Program Studi Ekonomi Syariah di <strong className="text-white font-semibold">Fakultas Ekonomi dan Bisnis Islam (FEBI), UIN Sunan Ampel Surabaya</strong> (<span className="text-white font-semibold">IPK 3.74</span>) dengan konsentrasi pada Lembaga Keuangan Syariah.
              </p>

              <p className="mt-3.5 text-xs sm:text-sm text-white/80 leading-relaxed">
                Minat profesional saya berfokus pada administrasi organisasi, penelitian finansial, investasi pasar modal, serta analisis data kuantitatif menggunakan perangkat lunak <strong className="text-white font-semibold">SPSS</strong> dan <strong className="text-white font-semibold">E-views</strong>. Aktif mengasah kemampuan manajerial dan komunikasi publik sebagai <strong className="text-white font-semibold">Staff Muda di Galeri Investasi Syariah (GIS) UINSA</strong>—terlibat dalam edukasi saham syariah, koordinasi kemitraan media partner, serta administrasi kepanitiaan seminar pasar modal.
              </p>

              <p className="mt-3.5 text-xs sm:text-sm text-white/80 leading-relaxed">
                Selain berkontribusi di kepengurusan <strong className="text-white font-semibold">Ekraf (Ekonomi Kreatif) IKA PPK Alif Laam Miim</strong>, saya memiliki rekam jejak riset akademik nyata, mencakup penyusunan <em>literature review</em> tentang dinamika perkembangan <em>Artificial Intelligence (AI) di Indonesia</em> serta karya tulis ilmiah eksperimental antibakteri <em>Fe₃O₄ & Kelor</em>. Didukung latar belakang ekstrakurikuler <em>Internet of Things (IoT)</em> dan kompetisi robotika, saya bertekad memadukan prinsip syariah, ketelitian riset saintifik, dan inovasi teknologi digital.
              </p>
            </div>

            {/* 3D Lanyard ID Card Layer: Layered freely above text ("taruh di atas teksnya, kanan lagi dikit, atas lagi dikit") */}
            <div
              className="relative w-full h-[540px] sm:h-[600px] mt-6 flex justify-center items-start lg:absolute lg:-top-36 xl:-top-44 lg:right-[-80px] xl:right-[-50px] lg:w-[700px] xl:w-[800px] lg:h-[840px] xl:h-[900px] lg:mt-0 z-20 pointer-events-none"
              style={{
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, transparent 4%, rgba(0,0,0,0.2) 11%, rgba(0,0,0,0.7) 20%, rgba(0,0,0,1) 28%, rgba(0,0,0,1) 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, transparent 4%, rgba(0,0,0,0.2) 11%, rgba(0,0,0,0.7) 20%, rgba(0,0,0,1) 28%, rgba(0,0,0,1) 100%)",
              }}
            >
              <div className="w-full h-full pointer-events-auto flex justify-center items-start">
                <Lanyard
                  frontImage="/card-front.png"
                  backImage="/card-back.png"
                  strapImage="/band.png"
                  imageFit="cover"
                  cardColor="#ffffff"
                  orientation="portrait"
                  finish="glossy"
                  cornerRadius={0.28}
                  size={0.32}
                  anchor={0.74}
                  strapLength={0.48}
                  strapColor="#14202E"
                  strapWidth={0.65}
                  metal="silver"
                  gravity={0.9}
                  damping={0.5}
                  elasticity={0.45}
                  breeze={0.35}
                  interactive
                  intro
                />
              </div>
            </div>
          </div>

          {/* Bottom Full-Width 3 Pillars */}
          <div data-slipstream-features className="w-full mt-8 sm:mt-12">
            <div data-slipstream-feature>
              <h3>
                <span data-slipstream-no>01</span>Lembaga Keuangan & Pasar Modal Syariah
              </h3>
              <p>
                Konsentrasi S1 Ekonomi Syariah FEBI UINSA (IPK 3.74) dan kepengurusan aktif Staff Muda Galeri Investasi Syariah (GIS) UINSA dalam literasi instrumen saham dan pasar modal syariah.
              </p>
            </div>
            <div data-slipstream-feature>
              <h3>
                <span data-slipstream-no>02</span>Analisis Data & Riset Ilmiah
              </h3>
              <p>
                Kecakapan pengolahan data statistik menggunakan SPSS dan E-views, penulisan literature review AI di Indonesia, serta karya tulis ilmiah antibakteri ferrofluida Fe₃O₄.
              </p>
            </div>
            <div data-slipstream-feature>
              <h3>
                <span data-slipstream-no>03</span>Manajemen Organisasi & Ekraf
              </h3>
              <p>
                Berpengalaman dalam koordinasi media partner, administrasi organisasi di Ekraf IKA PPK Alif Laam Miim, kepanitiaan seminar, serta peminatan teknologi berbasis IoT.
              </p>
            </div>
          </div>
        </div>
      </GlyphPortal>

      {/* Smooth transition from portal blue to clean white */}
      <div className="w-full h-24 sm:h-32 bg-gradient-to-b from-[#1E3245] via-[#1E3245]/80 to-white pointer-events-none" />
    </div>
  );
}
