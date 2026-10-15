import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Heart } from 'lucide-react';
import './About.css';

const education = [
  {
    year: '2022 - Sekarang',
    title: 'S1 Ekonomi & Bisnis',
    institution: 'Universitas',
    description: 'Menempuh pendidikan sarjana di Fakultas Ekonomi & Bisnis dengan fokus pada manajemen dan analisis keuangan.',
  },
  {
    year: '2019 - 2022',
    title: 'SMA/MA',
    institution: 'Sekolah Menengah Atas',
    description: 'Menyelesaikan pendidikan menengah atas dengan prestasi akademik yang baik di bidang IPS.',
  },
  {
    year: '2016 - 2019',
    title: 'SMP/MTs',
    institution: 'Sekolah Menengah Pertama',
    description: 'Aktif dalam kegiatan organisasi dan pengembangan diri sejak dini.',
  },
];

const interests = [
  { icon: '📚', title: 'Membaca', desc: 'Buku ekonomi & pengembangan diri' },
  { icon: '☕', title: 'Ngopi', desc: 'Menikmati secangkir kopi santai' },
  { icon: '🎵', title: 'Musik', desc: 'Mendengarkan musik favorit' },
  { icon: '📸', title: 'Fotografi', desc: 'Mengabadikan momen indah' },
  { icon: '✈️', title: 'Traveling', desc: 'Menjelajahi tempat baru' },
  { icon: '🎨', title: 'Desain', desc: 'Eksplorasi desain kreatif' },
  { icon: '💡', title: 'Bisnis', desc: 'Ide-ide kewirausahaan' },
  { icon: '🌱', title: 'Self-Growth', desc: 'Pengembangan diri berkelanjutan' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function About() {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* ===== Bio ===== */}
      <section className="about-bio section-padding">
        <div className="container">
          <div className="about-bio-grid">
            <motion.div
              className="about-photo-wrapper"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="about-photo-frame">
                <img
                  src="https://picsum.photos/seed/azizah/500/667"
                  alt="Nur Azizah Safriyani Susanti"
                />
              </div>
              <div className="about-photo-decor" />
              <div className="about-photo-badge">
                <div className="about-photo-badge-icon">
                  <GraduationCap size={18} />
                </div>
                <span>Mahasiswi FEB</span>
              </div>
            </motion.div>

            <motion.div
              className="about-info"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2>Tentang Saya ✨</h2>
              <p className="subtitle">Mengenal lebih dekat siapa saya</p>

              <p>
                Halo! Saya <strong>Nur Azizah Safriyani Susanti</strong>, seorang
                mahasiswi yang sedang menempuh pendidikan di Fakultas Ekonomi &amp;
                Bisnis. Saya memiliki ketertarikan yang besar dalam dunia keuangan,
                manajemen, dan kepemimpinan.
              </p>
              <p>
                Selain fokus pada akademik, saya juga aktif dalam berbagai kegiatan
                organisasi kampus dan kegiatan sosial. Saya percaya bahwa
                pengalaman di luar kelas sama pentingnya dengan pembelajaran di
                dalam kelas untuk membentuk karakter dan soft skill yang kuat.
              </p>
              <p>
                Saya selalu bersemangat untuk belajar hal-hal baru dan menghadapi
                tantangan yang dapat mengembangkan potensi diri saya lebih jauh
                lagi.
              </p>

              <div className="about-details">
                <div className="about-detail-item">
                  <MapPin size={18} className="about-detail-icon" />
                  <div className="about-detail-text">
                    <span className="label">Lokasi</span>
                    <span className="value">Indonesia</span>
                  </div>
                </div>
                <div className="about-detail-item">
                  <GraduationCap size={18} className="about-detail-icon" />
                  <div className="about-detail-text">
                    <span className="label">Pendidikan</span>
                    <span className="value">S1 Ekonomi & Bisnis</span>
                  </div>
                </div>
                <div className="about-detail-item">
                  <Calendar size={18} className="about-detail-icon" />
                  <div className="about-detail-text">
                    <span className="label">Semester</span>
                    <span className="value">Aktif</span>
                  </div>
                </div>
                <div className="about-detail-item">
                  <Heart size={18} className="about-detail-icon" />
                  <div className="about-detail-text">
                    <span className="label">Status</span>
                    <span className="value">Open to Opportunity</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Education ===== */}
      <section className="about-education">
        <div className="container">
          <motion.h2
            className="section-title"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Riwayat Pendidikan
          </motion.h2>
          <motion.p
            className="section-subtitle"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Perjalanan pendidikan saya dari awal hingga saat ini
          </motion.p>

          <div className="education-timeline">
            {education.map((edu, i) => (
              <motion.div
                key={edu.title}
                className="education-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="education-dot" />
                <div className="education-card">
                  <span className="education-year">{edu.year}</span>
                  <h3>{edu.title}</h3>
                  <p className="institution">{edu.institution}</p>
                  <p className="description">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Interests ===== */}
      <section className="about-interests">
        <div className="container">
          <motion.h2
            className="section-title"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Minat & Hobi
          </motion.h2>
          <motion.p
            className="section-subtitle"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hal-hal yang saya nikmati di luar akademik
          </motion.p>

          <div className="interests-grid">
            {interests.map((item, i) => (
              <motion.div
                key={item.title}
                className="interest-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <div className="interest-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default About;
