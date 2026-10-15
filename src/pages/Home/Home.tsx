import { Link } from 'react-router-dom';
import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, GraduationCap, Award, Users, BookOpen } from 'lucide-react';
import './Home.css';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
};

const stats = [
  { icon: <GraduationCap size={24} />, number: 'FEB', label: 'Fakultas Ekonomi & Bisnis' },
  { icon: <Award size={24} />, number: '10+', label: 'Sertifikat & Penghargaan' },
  { icon: <Users size={24} />, number: '5+', label: 'Pengalaman Organisasi' },
  { icon: <BookOpen size={24} />, number: '3.8+', label: 'IPK Saat Ini' },
];

function Home() {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* ===== Hero ===== */}
      <section className="hero">
        <div className="hero-bg" />

        <motion.div
          className="hero-blob hero-blob-1"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="hero-blob hero-blob-2"
          animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="hero-blob hero-blob-3"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="hero-content">
          <motion.div
            className="hero-badge"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <Sparkles size={14} />
            Selamat datang di portfolio saya
          </motion.div>

          <motion.p
            className="hero-greeting"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            Halo, perkenalkan saya 👋
          </motion.p>

          <motion.h1
            className="hero-name"
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            Nur Azizah Safriyani Susanti
          </motion.h1>

          <motion.p
            className="hero-tagline"
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            Mahasiswi <span>Fakultas Ekonomi &amp; Bisnis</span> yang bersemangat
            dalam membangun karir di dunia bisnis, keuangan, dan kepemimpinan.
          </motion.p>

          <motion.div
            className="hero-buttons"
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <Link to="/portfolio" className="hero-btn hero-btn-primary">
              Lihat Portofolio
              <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="hero-btn hero-btn-secondary">
              Hubungi Saya
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="hero-scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span>Scroll</span>
          <motion.div
            className="hero-scroll-line"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: 'top' }}
          />
        </motion.div>
      </section>

      {/* ===== Stats ===== */}
      <section className="home-stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="home-cta">
        <div className="container">
          <motion.div
            className="cta-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="cta-title">Mari Berkenalan Lebih Dekat ✨</h2>
            <p className="cta-text">
              Saya selalu terbuka untuk peluang baru, kolaborasi, dan diskusi
              yang menarik. Jangan ragu untuk menghubungi saya!
            </p>
            <Link to="/about" className="cta-btn">
              Tentang Saya
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default Home;
