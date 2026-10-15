import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Award, Tag, ExternalLink } from 'lucide-react';
import './Portfolio.css';

export type Category = 'Semua' | 'Prestasi' | 'Sertifikat' | 'Organisasi' | 'Seminar';

export interface PortfolioItem {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  category: Exclude<Category, 'Semua'>;
  image: string;
  tags: string[];
}

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: 'Juara 2 Lomba Karya Tulis Ilmiah Nasional (LKTI)',
    issuer: 'Universitas Gadjah Mada',
    date: 'September 2025',
    description: 'Meraih Juara 2 tingkat nasional dengan karya ilmiah bertajuk "Inovasi Ekonomi Digital & FinTech untuk Akselerasi UMKM Indonesia". Berhasil bersaing dengan puluhan tim universitas se-Indonesia.',
    category: 'Prestasi',
    image: 'https://picsum.photos/seed/award-lkti/800/500',
    tags: ['Juara 2', 'LKTI Nasional', 'Ekonomi Digital', 'FinTech'],
  },
  {
    id: 2,
    title: 'Best Delegate - Model United Nations (MUN)',
    issuer: 'Universitas Indonesia',
    date: 'Mei 2025',
    description: 'Mendapatkan penghargaan Best Delegate pada council ECOFIN (Economic and Financial Committee) dengan pembahasan stabilitas moneter global dan pengentasan kemiskinan.',
    category: 'Prestasi',
    image: 'https://picsum.photos/seed/award-mun/800/500',
    tags: ['Best Delegate', 'MUN', 'ECOFIN', 'Diplomasi'],
  },
  {
    id: 3,
    title: 'Finalis Business Case Competition Nasional',
    issuer: 'SBM ITB',
    date: 'Oktober 2024',
    description: 'Masuk dalam 5 Besar Finalis kompetisi strategi bisnis nasional dalam menyelesaikan problem operasional dan ekspansi pasar korporasi BUMN.',
    category: 'Prestasi',
    image: 'https://picsum.photos/seed/award-bcc/800/500',
    tags: ['Finalis', 'Business Case', 'Strategi Bisnis'],
  },
  {
    id: 4,
    title: 'Penghargaan Mahasiswa Berprestasi FEB',
    issuer: 'Fakultas Ekonomi & Bisnis',
    date: 'Maret 2025',
    description: 'Terpilih sebagai salah satu Mahasiswa Berprestasi (Mawapres) tingkat fakultas atas capaian akademik yang konsisten dan keaktifan kompetisi serta organisasi.',
    category: 'Prestasi',
    image: 'https://picsum.photos/seed/award-mawapres/800/500',
    tags: ['Mawapres', 'Akademik', 'FEB'],
  },
  {
    id: 5,
    title: 'Sertifikasi Financial Modeling & Valuation',
    issuer: 'Bloomberg & FEB Lab',
    date: 'Juli 2025',
    description: 'Sertifikasi kompetensi analisis laporan keuangan, discounted cash flow (DCF) valuation, dan pembuatan model keuangan komprehensif menggunakan spreadsheet.',
    category: 'Sertifikat',
    image: 'https://picsum.photos/seed/cert-fin/800/500',
    tags: ['Financial Modeling', 'Valuasi', 'Excel', 'Keuangan'],
  },
  {
    id: 6,
    title: 'Sertifikasi Microsoft Office Specialist (MOS)',
    issuer: 'Certiport / Microsoft',
    date: 'Februari 2024',
    description: 'Sertifikasi resmi keahlian Microsoft Excel tingkat lanjut (VLOOKUP, Pivot Table, Data Analysis) dan Microsoft PowerPoint untuk presentasi eksekutif.',
    category: 'Sertifikat',
    image: 'https://picsum.photos/seed/cert-mos/800/500',
    tags: ['Excel Advanced', 'MOS', 'PowerPoint', 'Produktivitas'],
  },
  {
    id: 7,
    title: 'Sertifikasi Data Analysis & SPSS for Research',
    issuer: 'Pusat Studi Riset & Statistik FEB',
    date: 'Agustus 2024',
    description: 'Pelatihan dan sertifikasi metodologi penelitian kuantitatif, analisis regresi linier berganda, uji validitas dan reliabilitas instrumen riset menggunakan SPSS.',
    category: 'Sertifikat',
    image: 'https://picsum.photos/seed/cert-spss/800/500',
    tags: ['SPSS', 'Data Analysis', 'Statistik', 'Riset'],
  },
  {
    id: 8,
    title: 'Sertifikat Leadership & Public Speaking Mastery',
    issuer: 'Indonesia Leadership Institute',
    date: 'Desember 2024',
    description: 'Pelatihan komunikasi kepemimpinan, teknik presentasi persuasif, dan manajemen krisis komunikasi organisasi.',
    category: 'Sertifikat',
    image: 'https://picsum.photos/seed/cert-lead/800/500',
    tags: ['Public Speaking', 'Leadership', 'Komunikasi'],
  },
  {
    id: 9,
    title: 'Ketua Departemen Pendidikan & Keilmuan',
    issuer: 'BEM Fakultas Ekonomi & Bisnis',
    date: '2024 - Sekarang',
    description: 'Memimpin tim departemen dalam merancang dan mengeksekusi program kerja pelatihan akademik, mentoring mahasiswa baru, dan forum diskusi ekonomi terkini.',
    category: 'Organisasi',
    image: 'https://picsum.photos/seed/org-bem/800/500',
    tags: ['BEM FEB', 'Kepala Departemen', 'Manajemen Tim'],
  },
  {
    id: 10,
    title: 'Ketua Pelaksana Seminar Nasional Ekonomi & Bisnis',
    issuer: 'Himpunan Mahasiswa FEB',
    date: 'November 2024',
    description: 'Memimpin kepanitiaan berjumlah 60+ anggota dalam menyelenggarakan seminar nasional berpenonton 500+ peserta dengan pembicara praktisi industri dan kementerian.',
    category: 'Organisasi',
    image: 'https://picsum.photos/seed/org-semnas/800/500',
    tags: ['Ketua Pelaksana', 'Seminar Nasional', 'Event Management'],
  },
  {
    id: 11,
    title: 'Staff Divisi Hubungan Masyarakat & Kemitraan',
    issuer: 'Kelompok Studi Pasar Modal (KSPM)',
    date: '2023 - 2024',
    description: 'Membangun relasi kemitraan dengan Bursa Efek Indonesia (BEI) dan sekuritas mitra untuk pelaksanaan Sekolah Pasar Modal bagi mahasiswa.',
    category: 'Organisasi',
    image: 'https://picsum.photos/seed/org-kspm/800/500',
    tags: ['KSPM', 'Pasar Modal', 'Humas', 'Relasi'],
  },
  {
    id: 12,
    title: 'Seminar Nasional: Green Economy & Sustainable Business',
    issuer: 'Kementerian ESDM & FEB',
    date: 'April 2025',
    description: 'Peserta aktif dalam seminar nasional mengenai transformasi energi baru terbarukan dan dampaknya terhadap model bisnis masa depan di Indonesia.',
    category: 'Seminar',
    image: 'https://picsum.photos/seed/sem-green/800/500',
    tags: ['Green Economy', 'Sustainability', 'Seminar Nasional'],
  },
  {
    id: 13,
    title: 'Workshop Digital Marketing & Social Media Growth',
    issuer: 'Grow with Google Indonesia',
    date: 'Januari 2025',
    description: 'Workshop komprehensif implementasi funnel pemasaran digital, analitik media sosial, dan optimasi konten untuk brand awareness.',
    category: 'Seminar',
    image: 'https://picsum.photos/seed/sem-google/800/500',
    tags: ['Digital Marketing', 'Google', 'Workshop'],
  },
];

const categories: Category[] = ['Semua', 'Prestasi', 'Sertifikat', 'Organisasi', 'Seminar'];

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Category>('Semua');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filtered =
    activeFilter === 'Semua'
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeFilter);

  return (
    <motion.div
      className="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className="portfolio-section section-padding">
        <div className="container">
          <motion.div
            className="portfolio-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-eyebrow">Pencapaian &amp; Pengalaman</span>
            <h2 className="section-title">Portofolio &amp; Sertifikat</h2>
            <p className="section-subtitle">
              Dokumentasi prestasi kejuaraan, sertifikat kompetensi, keaktifan organisasi, dan seminar yang telah diikuti
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            className="portfolio-filters"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`portfolio-filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
                <span className="filter-count">
                  {cat === 'Semua'
                    ? portfolioData.length
                    : portfolioData.filter((i) => i.category === cat).length}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div className="portfolio-grid" layout>
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  className="portfolio-card"
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedItem(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') setSelectedItem(item);
                  }}
                >
                  <div className="portfolio-card-image">
                    <img src={item.image} alt={item.title} loading="lazy" />
                    <div className="portfolio-card-overlay">
                      <span className="portfolio-card-overlay-text">
                        <ExternalLink size={16} /> Lihat Detail
                      </span>
                    </div>
                    <span className={`portfolio-card-category-badge badge-${item.category.toLowerCase()}`}>
                      {item.category}
                    </span>
                  </div>
                  <div className="portfolio-card-body">
                    <div className="portfolio-card-meta">
                      <span className="portfolio-card-issuer">
                        <Award size={13} /> {item.issuer}
                      </span>
                      <span className="portfolio-card-date">
                        <Calendar size={13} /> {item.date}
                      </span>
                    </div>
                    <h3 className="portfolio-card-title">{item.title}</h3>
                    <p className="portfolio-card-desc">{item.description}</p>
                    <div className="portfolio-card-tags">
                      {item.tags.map((tag) => (
                        <span key={tag} className="portfolio-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="portfolio-empty">
              <div className="portfolio-empty-icon">📂</div>
              <p>Belum ada item untuk kategori ini.</p>
            </div>
          )}
        </div>
      </section>

      {/* Detail Modal / Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="portfolio-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="portfolio-modal-content"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="portfolio-modal-close"
                onClick={() => setSelectedItem(null)}
                aria-label="Tutup"
              >
                <X size={20} />
              </button>

              <div className="portfolio-modal-image-wrap">
                <img src={selectedItem.image} alt={selectedItem.title} />
                <span className={`portfolio-card-category-badge badge-${selectedItem.category.toLowerCase()}`}>
                  {selectedItem.category}
                </span>
              </div>

              <div className="portfolio-modal-body">
                <div className="portfolio-modal-meta">
                  <span className="portfolio-modal-issuer">
                    <Award size={15} /> {selectedItem.issuer}
                  </span>
                  <span className="portfolio-modal-date">
                    <Calendar size={15} /> {selectedItem.date}
                  </span>
                </div>

                <h3 className="portfolio-modal-title">{selectedItem.title}</h3>
                <p className="portfolio-modal-desc">{selectedItem.description}</p>

                <div className="portfolio-modal-tags">
                  <span className="portfolio-modal-tag-label">
                    <Tag size={14} /> Tagar:
                  </span>
                  {selectedItem.tags.map((tag) => (
                    <span key={tag} className="portfolio-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Portfolio;
