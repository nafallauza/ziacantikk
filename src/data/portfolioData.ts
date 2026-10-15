// ============================================================
// Portfolio Data — Semua teks dalam Bahasa Indonesia
// ============================================================

// ---------- Tipe ----------
export interface Certificate {
  id: number
  title: string
  description: string
  date: string
  image: string
  category: 'Akademik' | 'Organisasi' | 'Kompetisi' | 'Seminar'
}

export interface Skill {
  name: string
  level: number // 0‑100
  category: 'Technical' | 'Soft Skill' | 'Analisis'
}

export interface Experience {
  id: number
  organization: string
  role: string
  period: string
  description: string
}

export interface Education {
  id: number
  institution: string
  degree: string
  period: string
  gpa?: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string // lucide-react icon name
}

// ---------- Sertifikat ----------
export const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Juara 2 Lomba Karya Tulis Ilmiah Nasional',
    description:
      'Meraih Juara 2 dalam Lomba Karya Tulis Ilmiah tingkat nasional yang diselenggarakan oleh Universitas Gadjah Mada dengan tema "Inovasi Ekonomi Digital untuk Indonesia Maju".',
    date: 'September 2025',
    image: '/placeholder.svg',
    category: 'Kompetisi',
  },
  {
    id: 2,
    title: 'Sertifikat Pelatihan Financial Modeling',
    description:
      'Menyelesaikan pelatihan Financial Modeling & Valuation yang diselenggarakan oleh Bloomberg Indonesia bekerja sama dengan FEB.',
    date: 'Juli 2025',
    image: '/placeholder.svg',
    category: 'Akademik',
  },
  {
    id: 3,
    title: 'Best Delegate MUN Universitas Indonesia',
    description:
      'Mendapatkan penghargaan Best Delegate pada Model United Nations (MUN) yang diselenggarakan oleh Universitas Indonesia.',
    date: 'Mei 2025',
    image: '/placeholder.svg',
    category: 'Kompetisi',
  },
  {
    id: 4,
    title: 'Sertifikat Seminar Nasional Ekonomi Syariah',
    description:
      'Mengikuti Seminar Nasional Ekonomi Syariah dengan tema "Peran Ekonomi Syariah dalam Pembangunan Berkelanjutan" bersama narasumber dari Bank Indonesia.',
    date: 'April 2025',
    image: '/placeholder.svg',
    category: 'Seminar',
  },
  {
    id: 5,
    title: 'Penghargaan Mahasiswa Berprestasi FEB',
    description:
      'Meraih penghargaan sebagai Mahasiswa Berprestasi tingkat Fakultas Ekonomi dan Bisnis berdasarkan prestasi akademik dan non-akademik.',
    date: 'Maret 2025',
    image: '/placeholder.svg',
    category: 'Akademik',
  },
  {
    id: 6,
    title: 'Sertifikat Workshop Digital Marketing',
    description:
      'Menyelesaikan workshop intensif Digital Marketing & Social Media Strategy yang diselenggarakan oleh Google Indonesia.',
    date: 'Januari 2025',
    image: '/placeholder.svg',
    category: 'Seminar',
  },
  {
    id: 7,
    title: 'Ketua Pelaksana Seminar Ekonomi Kreatif',
    description:
      'Memimpin kepanitiaan Seminar Ekonomi Kreatif yang dihadiri lebih dari 500 peserta dari berbagai universitas se-Indonesia.',
    date: 'November 2024',
    image: '/placeholder.svg',
    category: 'Organisasi',
  },
  {
    id: 8,
    title: 'Finalis Business Case Competition',
    description:
      'Menjadi finalis dalam Business Case Competition tingkat nasional yang diselenggarakan oleh SBM ITB dengan studi kasus perusahaan BUMN.',
    date: 'Oktober 2024',
    image: '/placeholder.svg',
    category: 'Kompetisi',
  },
]

// ---------- Keahlian ----------
export const skills: Skill[] = [
  { name: 'Microsoft Excel', level: 90, category: 'Technical' },
  { name: 'Microsoft Word', level: 85, category: 'Technical' },
  { name: 'Microsoft PowerPoint', level: 88, category: 'Technical' },
  { name: 'Financial Analysis', level: 75, category: 'Analisis' },
  { name: 'Akuntansi', level: 80, category: 'Analisis' },
  { name: 'Public Speaking', level: 70, category: 'Soft Skill' },
  { name: 'Leadership', level: 78, category: 'Soft Skill' },
  { name: 'Digital Marketing', level: 72, category: 'Technical' },
  { name: 'SPSS', level: 68, category: 'Analisis' },
  { name: 'Data Analysis', level: 74, category: 'Analisis' },
]

// ---------- Pengalaman Organisasi ----------
export const experiences: Experience[] = [
  {
    id: 1,
    organization: 'Badan Eksekutif Mahasiswa FEB',
    role: 'Kepala Departemen Pendidikan & Keilmuan',
    period: 'Januari 2025 – Sekarang',
    description:
      'Memimpin departemen yang bertanggung jawab atas program-program pengembangan akademik dan keilmuan mahasiswa FEB, termasuk menyelenggarakan kajian ilmiah, diskusi publik, dan pelatihan soft skill.',
  },
  {
    id: 2,
    organization: 'Himpunan Mahasiswa Akuntansi',
    role: 'Koordinator Divisi Hubungan Masyarakat',
    period: 'Agustus 2024 – Desember 2024',
    description:
      'Mengelola komunikasi dan relasi dengan pihak eksternal, termasuk sponsor, media, dan organisasi mitra. Berhasil menjalin kerja sama dengan 12 perusahaan untuk program magang mahasiswa.',
  },
  {
    id: 3,
    organization: 'Kelompok Studi Pasar Modal',
    role: 'Anggota Aktif & Mentor',
    period: 'Maret 2024 – Sekarang',
    description:
      'Aktif dalam kegiatan edukasi pasar modal, analisis saham, dan simulasi trading. Menjadi mentor bagi anggota baru dalam memahami dasar-dasar investasi dan analisis fundamental.',
  },
  {
    id: 4,
    organization: 'Volunteer Mengajar Indonesia',
    role: 'Relawan Pengajar',
    period: 'Juni 2024 – Agustus 2024',
    description:
      'Mengajar mata pelajaran Ekonomi dan Matematika untuk siswa SMA di daerah tertinggal selama program relawan mengajar musim panas.',
  },
]

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
]

// ---------- Tautan Sosial ----------
export const socialLinks: SocialLink[] = [
  {
    platform: 'Instagram',
    url: 'https://instagram.com/ziacantikk',
    icon: 'Instagram',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/ziacantikk',
    icon: 'Linkedin',
  },
  {
    platform: 'Email',
    url: 'mailto:zia@example.com',
    icon: 'Mail',
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/ziacantikk',
    icon: 'Github',
  },
]

// ---------- Profil ----------
export const profile = {
  name: 'Zia Cantika',
  tagline: 'Mahasiswi Akuntansi · FEB Universitas Brawijaya',
  bio: 'Halo! Saya Zia, mahasiswi Akuntansi semester 5 di Fakultas Ekonomi dan Bisnis Universitas Brawijaya. Saya memiliki ketertarikan mendalam di bidang keuangan, akuntansi, dan analisis data. Saat ini aktif di berbagai organisasi kampus dan terus mengembangkan diri melalui kompetisi serta pelatihan profesional.',
  avatar: '/placeholder.svg',
}
