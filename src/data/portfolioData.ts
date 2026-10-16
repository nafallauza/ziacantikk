// ============================================================
// Portfolio Data — Nur Azizah Safriyani Susanti
// ============================================================

export interface Certificate {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  category: 'Akademik' | 'Organisasi' | 'Kompetisi' | 'Seminar';
}

export interface Skill {
  name: string;
  level: number;
  category: 'Technical' | 'Soft Skill' | 'Analisis';
}

export interface Experience {
  id: number;
  organization: string;
  role: string;
  period: string;
  description: string;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

// ---------- Sertifikat Asli Nur Azizah ----------
export const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Kejuaraan Robotika Nasional (KEJURNAS) 2023',
    description:
      'Piagam Penghargaan resmi atas partisipasi dan capaian prestasi dalam Kejuaraan Robotika Nasional (KEJURNAS) tahun 2023.',
    date: 'Tahun 2023',
    image: '/assets/sertifikat/Piagam_Penghargaan_Kejuaraan_Robotika_Nasional_KEJURNAS_2023_Nur_Azizah.jpg',
    category: 'Kompetisi',
  },
  {
    id: 2,
    title: 'Sertifikasi CIMM (Certified Islamic Mutual Fund) — IARFC',
    description:
      'Sertifikat kompetensi profesional keuangan syariah CIMM yang diselenggarakan oleh International Association of Registered Financial Consultants (IARFC) Indonesia.',
    date: 'Tahun 2025',
    image: '/assets/sertifikat/Sertifikat_CIMM_IARFC_INDONESIA_Nur_Azizah.jpg',
    category: 'Akademik',
  },
  {
    id: 3,
    title: 'Certificate of English Proficiency — Brilliant English Course',
    description:
      'Sertifikat kelulusan program bahasa Inggris intensif di Brilliant English Course, Kampung Inggris Pare.',
    date: 'Tahun 2025',
    image: '/assets/sertifikat/Certificate_Bahasa_Brilliant_English_Course_Nur_Azizah.jpg',
    category: 'Akademik',
  },
  {
    id: 4,
    title: 'Panitia Kompetisi Trading — Diesnatalis GIS 2025',
    description:
      'Sertifikat penghargaan sebagai panitia divisi Kompetisi Trading Pasar Modal dalam perayaan Diesnatalis Galeri Investasi Syariah (GIS).',
    date: 'Tahun 2025',
    image: '/assets/sertifikat/Sertifikat_Panitia_Trading_DIESNAT_GIS_2025.jpg',
    category: 'Organisasi',
  },
  {
    id: 5,
    title: 'Panitia Seminar Nasional — Diesnatalis GIS 2025',
    description:
      'Sertifikat dedikasi sebagai panitia pelaksana Seminar Nasional Diesnatalis Galeri Investasi Syariah 2025.',
    date: 'Tahun 2025',
    image: '/assets/sertifikat/Sertifikat_Panitia_SEMNAS_DIETNAS_GIS_2025_Nur_Azizah.jpg',
    category: 'Organisasi',
  },
  {
    id: 6,
    title: 'Seminar Nasional Pendidikan 2025 — UNESA',
    description:
      'Sertifikat kepesertaan aktif dalam Seminar Nasional Pendidikan yang diselenggarakan oleh Universitas Negeri Surabaya (UNESA).',
    date: 'Tahun 2025',
    image: '/assets/sertifikat/Sertifikat_Seminar_Nasioanl_Pendidikan_2025_UNESA_Nur_Azizah.jpg',
    category: 'Seminar',
  },
  {
    id: 7,
    title: 'Pelatihan Alat-alat Laboratorium Sains — UM',
    description:
      'Sertifikat keahlian pelatihan pengoperasian instrumen laboratorium sains modern di Universitas Negeri Malang (UM).',
    date: 'Tahun 2024',
    image: '/assets/sertifikat/Sertifikat_Pelatihan_Alat-alat_Lab_Sains_UM_Nur_Azizah.jpg',
    category: 'Akademik',
  },
  {
    id: 8,
    title: 'Webinar Nasional Public Speaking & Communication',
    description:
      'Sertifikat pelatihan public speaking profesional, teknik negosiasi, dan komunikasi publik berskala nasional.',
    date: 'Tahun 2025',
    image: '/assets/sertifikat/Sertifikat_Webunar_Nasional_Public_Speaking_2025.jpg',
    category: 'Seminar',
  },
  {
    id: 9,
    title: 'Dialog Inklusif Kepemimpinan Mahasiswa — DEMA FEBI x PMII',
    description:
      'Sertifikat penghargaan atas kontribusi dalam Dialog Inklusif Kepemimpinan Mahasiswa yang diselenggarakan oleh DEMA FEBI.',
    date: 'Tahun 2024',
    image: '/assets/sertifikat/NUR_AZIZAH_SAFRIYANI_SUSANTI_Sertifikat_Dialog_Inklusif_DEMA_FEBIxPMIIFEBI.jpg',
    category: 'Organisasi',
  },
  {
    id: 10,
    title: 'Sertifikasi Ikatan Bankir Indonesia (IBI)',
    description:
      'Sertifikat kompetensi dasar perbankan dan integritas etika profesi bersama Ikatan Bankir Indonesia (IBI).',
    date: 'Tahun 2025',
    image: '/assets/sertifikat/Sertifikat_IBI_Nur_Azizah_Safriyani_Susanti.jpg',
    category: 'Akademik',
  },
  {
    id: 11,
    title: 'Seminar Nasional Ekonomi & Karakter — Ponpes Al-Fithrah',
    description:
      'Sertifikat kepesertaan Seminar Nasional bertajuk penguatan karakter dan kemandirian ekonomi generasi muda.',
    date: 'Tahun 2025',
    image: '/assets/sertifikat/Sertifikat_Seminar_Nasional_2025_Ponpes_Al-Fithrah_Nur_Azizah.jpg',
    category: 'Seminar',
  },
  {
    id: 12,
    title: 'Sertifikat PBAK FEBI 2024',
    description:
      'Sertifikat Pengenalan Budaya Akademik dan Kemahasiswaan Fakultas Ekonomi dan Bisnis Islam (FEBI).',
    date: 'Tahun 2024',
    image: '/assets/sertifikat/SERTIFIKAT_PBAK_FEBI_2024.jpg',
    category: 'Organisasi',
  },
];

// ---------- Keahlian ----------
export const skills: Skill[] = [
  { name: 'Financial Modeling & Valuation', level: 90, category: 'Analisis' },
  { name: 'Pasar Modal Syariah', level: 88, category: 'Analisis' },
  { name: 'Microsoft Excel (Advanced)', level: 92, category: 'Technical' },
  { name: 'Instrumen Sains & Laboratorium', level: 85, category: 'Technical' },
  { name: 'Public Speaking & Moderasi', level: 88, category: 'Soft Skill' },
  { name: 'Negosiasi & Kepemimpinan Tim', level: 86, category: 'Soft Skill' },
  { name: 'English Communication', level: 82, category: 'Technical' },
  { name: 'Manajemen Acara & Kepanitiaan', level: 90, category: 'Soft Skill' },
];

// ---------- Pengalaman Organisasi ----------
export const experiences: Experience[] = [
  {
    id: 1,
    organization: 'Galeri Investasi Syariah (GIS)',
    role: 'Panitia Divisi Trading & Seminar Nasional',
    period: '2024 – 2025',
    description:
      'Bertanggung jawab atas teknis pelaksanaan kompetisi trading pasar modal syariah dan penyelenggaraan seminar nasional investasi.',
  },
  {
    id: 2,
    organization: 'Dewan Eksekutif Mahasiswa (DEMA FEBI)',
    role: 'Pengurus & Koordinator Kegiatan',
    period: '2024 – Sekarang',
    description:
      'Aktif menginisiasi dialog inklusif kepemimpinan mahasiswa serta program pemberdayaan keilmuan dan advokasi sosial.',
  },
  {
    id: 3,
    organization: 'PMII Rayon FEBI',
    role: 'Kader Aktif & Penggerak Diskusi',
    period: '2024 – Sekarang',
    description:
      'Berpartisipasi aktif dalam kajian keislaman, kebangsaan, dan diskusi inklusif pengembangan nalar kritis mahasiswa.',
  },
];

// ---------- Pendidikan ----------
export const education: Education[] = [
  {
    id: 1,
    institution: 'Universitas Brawijaya',
    degree: 'S1 Akuntansi – Fakultas Ekonomi dan Bisnis',
    period: '2023 – Sekarang',
    gpa: '3.87 / 4.00',
  },
  {
    id: 2,
    institution: 'SMA Negeri 1 Malang',
    degree: 'IPA (Ilmu Pengetahuan Alam)',
    period: '2020 – 2023',
    gpa: 'Nilai Rata-rata: 92.5',
  },
];

// ---------- Tautan Sosial ----------
export const socialLinks: SocialLink[] = [
  { platform: 'Instagram', url: 'https://instagram.com', icon: 'Instagram' },
  { platform: 'LinkedIn', url: 'https://linkedin.com', icon: 'Linkedin' },
  { platform: 'Email', url: 'mailto:azizah@example.com', icon: 'Mail' },
  { platform: 'GitHub', url: 'https://github.com', icon: 'Github' },
];

// ---------- Profil ----------
export const profile = {
  name: 'Nur Azizah Safriyani Susanti',
  tagline: 'Mahasiswi Akuntansi · FEB Universitas Brawijaya',
  bio: 'Halo! Saya Nur Azizah, mahasiswi yang berfokus pada analisis keuangan, pasar modal syariah, dan tata kelola ekonomi. Memiliki rekam jejak aktif dalam kompetisi robotika nasional, sertifikasi IARFC, serta kepanitiaan Galeri Investasi Syariah.',
  avatar: '/assets/foto/profil.jpg',
};
