// ============================================================
// Portfolio Data — Nur Azizah Safriyani Susanti
// FEBI UIN Sunan Ampel Surabaya · S1 Ekonomi Syariah
// ============================================================

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  description: string;
  date: string;
  image: string;
  category: 'Kompetisi' | 'Sertifikasi' | 'Kepanitiaan' | 'Seminar';
}

export interface ActivityPhoto {
  id: number;
  title: string;
  category: string;
  image: string;
  caption: string;
}

export interface Experience {
  id: number;
  organization: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  details: string;
}

// ---------- Koleksi Sertifikat Resmi Nur Azizah ----------
export const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Kejuaraan Robotika Nasional (KEJURNAS) 2023',
    issuer: 'Komite Robotika Nasional',
    description:
      'Piagam Penghargaan resmi atas partisipasi dan capaian prestasi dalam kompetisi Kejuaraan Robotika Nasional (KEJURNAS) 2023.',
    date: '2023',
    image: '/assets/sertifikat/Piagam_Penghargaan_Kejuaraan_Robotika_Nasional_KEJURNAS_2023_Nur_Azizah.jpg',
    category: 'Kompetisi',
  },
  {
    id: 2,
    title: 'Sertifikasi CIMM (Certified Islamic Mutual Fund)',
    issuer: 'IARFC Indonesia',
    description:
      'Sertifikat kompetensi profesional keuangan dan pasar modal syariah oleh International Association of Registered Financial Consultants (IARFC).',
    date: '2025',
    image: '/assets/sertifikat/Sertifikat_CIMM_IARFC_INDONESIA_Nur_Azizah.jpg',
    category: 'Sertifikasi',
  },
  {
    id: 3,
    title: 'Certificate of English Proficiency',
    issuer: 'Brilliant English Course Pare',
    description:
      'Sertifikat kelulusan kemahiran bahasa Inggris komprehensif dari Brilliant English Course di Kampung Inggris Pare, Kediri.',
    date: '2025',
    image: '/assets/sertifikat/Certificate_Bahasa_Brilliant_English_Course_Nur_Azizah.jpg',
    category: 'Sertifikasi',
  },
  {
    id: 4,
    title: 'Panitia Kompetisi Trading — DIESNAT GIS 2025',
    issuer: 'Galeri Investasi Syariah FEBI',
    description:
      'Sertifikat penghargaan kepanitiaan divisi kompetisi trading pasar modal pada Diesnatalis Galeri Investasi Syariah (GIS) 2025.',
    date: '2025',
    image: '/assets/sertifikat/Sertifikat_Panitia_Trading_DIESNAT_GIS_2025.jpg',
    category: 'Kepanitiaan',
  },
  {
    id: 5,
    title: 'Panitia Seminar Nasional — DIESNAT GIS 2025',
    issuer: 'Galeri Investasi Syariah FEBI',
    description:
      'Sertifikat penghargaan sebagai panitia pelaksana Seminar Nasional Investasi Pasar Modal Syariah Diesnatalis GIS 2025.',
    date: '2025',
    image: '/assets/sertifikat/Sertifikat_Panitia_SEMNAS_DIETNAS_GIS_2025_Nur_Azizah.jpg',
    category: 'Kepanitiaan',
  },
  {
    id: 6,
    title: 'Pelatihan Alat-alat Laboratorium Sains',
    issuer: 'Universitas Negeri Malang (UM)',
    description:
      'Sertifikat keahlian pelatihan pengoperasian instrumen laboratorium sains modern di Universitas Negeri Malang.',
    date: '2024',
    image: '/assets/sertifikat/Sertifikat_Pelatihan_Alat-alat_Lab_Sains_UM_Nur_Azizah.jpg',
    category: 'Sertifikasi',
  },
  {
    id: 7,
    title: 'Sertifikasi Profesi Perbankan — IBI',
    issuer: 'Ikatan Bankir Indonesia (IBI)',
    description:
      'Sertifikat kompetensi dasar perbankan, kepatuhan etika perbankan, dan literasi sistem keuangan nasional.',
    date: '2025',
    image: '/assets/sertifikat/Sertifikat_IBI_Nur_Azizah_Safriyani_Susanti.jpg',
    category: 'Sertifikasi',
  },
  {
    id: 8,
    title: 'Seminar Nasional Pendidikan 2025',
    issuer: 'Universitas Negeri Surabaya (UNESA)',
    description:
      'Sertifikat partisipasi aktif dalam Seminar Nasional Pendidikan yang diselenggarakan oleh UNESA.',
    date: '2025',
    image: '/assets/sertifikat/Sertifikat_Seminar_Nasioanl_Pendidikan_2025_UNESA_Nur_Azizah.jpg',
    category: 'Seminar',
  },
  {
    id: 9,
    title: 'Webinar Nasional Public Speaking & Communication',
    issuer: 'Penyelenggara Nasional',
    description:
      'Pelatihan teknik komunikasi profesional, retorika publik, negosiasi, dan moderasi forum ilmiah.',
    date: '2025',
    image: '/assets/sertifikat/Sertifikat_Webunar_Nasional_Public_Speaking_2025.jpg',
    category: 'Seminar',
  },
  {
    id: 10,
    title: 'Dialog Inklusif Kepemimpinan Mahasiswa',
    issuer: 'DEMA FEBI x PMII FEBI',
    description:
      'Kontribusi aktif dalam Dialog Inklusif Kepemimpinan Mahasiswa untuk penguatan integritas dan nalar kritis kampus.',
    date: '2024',
    image: '/assets/sertifikat/NUR_AZIZAH_SAFRIYANI_SUSANTI_Sertifikat_Dialog_Inklusif_DEMA_FEBIxPMIIFEBI.jpg',
    category: 'Kepanitiaan',
  },
  {
    id: 11,
    title: 'Panitia Sekolah Pasar Modal Syariah (SPMS)',
    issuer: 'Galeri Investasi Syariah FEBI',
    description:
      'Sertifikat penghargaan sebagai panitia edukasi investor pemula dan Sekolah Pasar Modal Syariah tingkat regional.',
    date: '2025',
    image: '/assets/sertifikat/Sertifikat_Panitia_SPMS_1_DIESNAT_GIS_2025.png',
    category: 'Kepanitiaan',
  },
  {
    id: 12,
    title: 'Seminar Nasional Karakter & Ekonomi 2025',
    issuer: 'Ponpes Al-Fithrah Surabaya',
    description:
      'Sertifikat peserta aktif Seminar Nasional kemandirian ekonomi generasi muda dan etika bisnis Islam.',
    date: '2025',
    image: '/assets/sertifikat/Sertifikat_Seminar_Nasional_2025_Ponpes_Al-Fithrah_Nur_Azizah.jpg',
    category: 'Seminar',
  },
];

// ---------- Foto Kegiatan Riil (Reference: Clinic Space) ----------
export const activityPhotos: ActivityPhoto[] = [
  {
    id: 1,
    title: 'Kepanitiaan Diesnatalis GIS 2025',
    category: 'Galeri Investasi Syariah',
    image: '/assets/organisasi/IMG-20251122-WA0030.jpg',
    caption: 'Pelaksanaan panggung seminar dan kompetisi trading Diesnatalis GIS di FEBI.',
  },
  {
    id: 2,
    title: 'Koordinasi Tim & Evaluasi Proyek',
    category: 'Organisasi Kampus',
    image: '/assets/organisasi/IMG-20250925-WA0005.jpg',
    caption: 'Rapat pleno kepanitiaan bersama rekan sejawat dalam persiapan acara besar.',
  },
  {
    id: 3,
    title: 'Forum Diskusi & Kaderisasi',
    category: 'Kepemimpinan Mahasiswa',
    image: '/assets/organisasi/71ee9b776f2baa1479ac5158ef7db7fe_0.jpeg',
    caption: 'Diskusi inklusif perumusan program kerja dan advokasi mahasiswa.',
  },
];

// ---------- Pengalaman Organisasi & Kepanitiaan (Sesuai CV Resmi) ----------
export const experiences: Experience[] = [
  {
    id: 1,
    organization: 'Galeri Investasi Syariah (GIS) UINSA',
    role: 'Staff Muda & Divisi Humas',
    period: '2025',
    description:
      'Aktif berpartisipasi dalam kegiatan seminar dan edukasi investasi, koordinasi media partner, penyebaran informasi kegiatan, kebutuhan administrasi, serta pembelajaran instrumen saham dan pasar modal syariah.',
    highlights: [
      'Koordinasi media partner & publikasi seminar edukasi pasar modal',
      'Mendukung administrasi kegiatan dan kebutuhan koordinator acara',
      'Pembelajaran intensif instrumen investasi syariah, saham & pasar modal',
    ],
  },
  {
    id: 2,
    organization: 'Ekraf (Ekonomi Kreatif) Pengurus IKA PPK Alif Laam Miim',
    role: 'Anggota Divisi Ekonomi Kreatif',
    period: '2025',
    description:
      'Membantu pengelolaan dan pendataan anggota kegiatan organisasi, mendukung kebutuhan administrasi dan koordinasi internal, serta berpartisipasi dalam pengembangan ekonomi kreatif dan organisasi.',
    highlights: [
      'Pengelolaan dan pendataan anggota organisasi secara sistematis',
      'Mendukung kebutuhan administrasi dan koordinasi internal',
      'Partisipasi dalam pengembangan program ekonomi kreatif',
    ],
  },
  {
    id: 3,
    organization: 'OSIM Madrasah Aliyah Alif Laam Miim',
    role: 'Pengurus Bidang Kesehatan & Panitia Perlengkapan/Keamanan',
    period: '2022 – 2023',
    description:
      'Membantu persiapan kebutuhan kesehatan saat kegiatan sekolah berlangsung, pengelolaan keamanan, perlengkapan acara sekolah, serta koordinasi kelancaran event madrasah.',
    highlights: [
      'Persiapan kebutuhan posko kesehatan kegiatan sekolah',
      'Koordinasi perlengkapan dan logistik kegiatan madrasah',
      'Pengelolaan ketertiban dan keamanan berlangsungnya acara',
    ],
  },
];

// ---------- Pendidikan Resmi (Sesuai CV Resmi) ----------
export const education: Education[] = [
  {
    id: 1,
    institution: 'UIN Sunan Ampel Surabaya (UINSA)',
    degree: 'S1 Ekonomi Syariah — Fakultas Ekonomi dan Bisnis Islam (FEBI)',
    period: '2024 – Sekarang',
    gpa: 'IPK: 3.74 / 4.00',
    details: 'Konsentrasi Lembaga Keuangan Syariah. Minat pada administrasi, penelitian, investasi, serta pengolahan data SPSS & E-views.',
  },
  {
    id: 2,
    institution: 'MA Alif Laam Miim Surabaya',
    degree: 'Madrasah Aliyah',
    period: '2022 – 2024',
    details: 'Aktif dalam OSIM Bidang Kesehatan, kepanitiaan madrasah, ekstrakurikuler Internet of Things (IoT) & kejuaraan robotika.',
  },
];

// ---------- Karya Tulis Ilmiah & Riset Akademik (Scientific Writing) ----------
export interface ScientificPaper {
  id: number;
  title: string;
  type: string;
  period: string;
  description: string;
  highlights: string[];
}

export const scientificPapers: ScientificPaper[] = [
  {
    id: 1,
    title: 'Perkembangan Dinamika Artificial Intelligence (AI) di Indonesia',
    type: 'Literature Review',
    period: '2024 / 2025',
    description:
      'Melakukan pencarian dan pengolahan informasi terkait perkembangan Artificial Intelligence di Indonesia, berkontribusi dalam penyusunan laporan, serta pengelolaan format dokumen penelitian.',
    highlights: [
      'Pencarian dan sintesis literatur perkembangan AI di Indonesia',
      'Penyusunan laporan dan tata kelola format dokumen akademik',
      'Kolaborasi tim penelitian dan perumusan naskah ilmiah',
    ],
  },
  {
    id: 2,
    title: 'Kontribusi Kelor (Moringa oleifera) untuk Aktivitas Antibakteri Ferrofluida Fe₃O₄',
    type: 'Scientific Paper / Riset Laboratorium',
    period: '2024',
    description:
      'Berkontribusi dalam penyusunan karya tulis ilmiah terkait penelitian antibakteri menggunakan Fe₃O₄ dan kelor, pengumpulan informasi, koordinasi tim, serta peninjauan proses di lokasi.',
    highlights: [
      'Penyusunan karya tulis ilmiah penelitian antibakteri Fe₃O₄ & kelor',
      'Pengumpulan informasi dan koordinasi tugas riset kelompok',
      'Peninjauan hasil proses bersama tim di laboratorium',
    ],
  },
];
