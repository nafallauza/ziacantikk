import { motion } from 'framer-motion';
import './Skills.css';

interface SkillBar {
  name: string;
  percent: number;
}

interface SkillCategory {
  title: string;
  subtitle: string;
  emoji: string;
  colorClass: string;
  skills: SkillBar[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Microsoft Office',
    subtitle: 'Produktivitas & Administrasi',
    emoji: '💻',
    colorClass: 'pink',
    skills: [
      { name: 'Microsoft Word', percent: 90 },
      { name: 'Microsoft Excel', percent: 85 },
      { name: 'Microsoft PowerPoint', percent: 92 },
      { name: 'Google Workspace', percent: 80 },
    ],
  },
  {
    title: 'Analisis Keuangan',
    subtitle: 'Bisnis & Finansial',
    emoji: '📊',
    colorClass: 'purple',
    skills: [
      { name: 'Laporan Keuangan', percent: 82 },
      { name: 'Analisis Data', percent: 78 },
      { name: 'Perencanaan Anggaran', percent: 75 },
      { name: 'Riset Pasar', percent: 70 },
    ],
  },
  {
    title: 'Komunikasi',
    subtitle: 'Interpersonal & Presentasi',
    emoji: '🎤',
    colorClass: 'cream',
    skills: [
      { name: 'Public Speaking', percent: 88 },
      { name: 'Presentasi', percent: 90 },
      { name: 'Negosiasi', percent: 76 },
      { name: 'Penulisan', percent: 82 },
    ],
  },
  {
    title: 'Organisasi',
    subtitle: 'Manajemen & Koordinasi',
    emoji: '🏛️',
    colorClass: 'blue',
    skills: [
      { name: 'Manajemen Proyek', percent: 80 },
      { name: 'Koordinasi Tim', percent: 85 },
      { name: 'Event Management', percent: 78 },
      { name: 'Problem Solving', percent: 83 },
    ],
  },
];

const softSkills = [
  { emoji: '🎯', title: 'Kepemimpinan', desc: 'Memimpin dan menginspirasi tim' },
  { emoji: '🤝', title: 'Kerja Tim', desc: 'Kolaborasi efektif dalam kelompok' },
  { emoji: '⏰', title: 'Manajemen Waktu', desc: 'Prioritas dan produktivitas' },
  { emoji: '💡', title: 'Berpikir Kritis', desc: 'Analisis dan pemecahan masalah' },
  { emoji: '🎨', title: 'Kreativitas', desc: 'Ide-ide inovatif dan segar' },
  { emoji: '📝', title: 'Detail Oriented', desc: 'Teliti dan rapi dalam bekerja' },
  { emoji: '🔄', title: 'Adaptabilitas', desc: 'Fleksibel menghadapi perubahan' },
  { emoji: '❤️', title: 'Empati', desc: 'Memahami perspektif orang lain' },
];

const tools = [
  'Microsoft Word',
  'Microsoft Excel',
  'Microsoft PowerPoint',
  'Google Docs',
  'Google Sheets',
  'Canva',
  'Zoom',
  'Google Meet',
  'Trello',
  'WhatsApp Business',
  'Instagram',
  'SPSS',
];

function Skills() {
  return (
    <motion.div
      className="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* ===== Hard Skills ===== */}
      <section className="skills-section section-padding">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Keahlian Saya
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Kompetensi teknis dan profesional yang saya kembangkan
          </motion.p>

          <div className="skills-grid">
            {skillCategories.map((cat, catIdx) => (
              <motion.div
                key={cat.title}
                className="skill-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              >
                <div className="skill-card-header">
                  <div className={`skill-card-icon ${cat.colorClass}`}>
                    {cat.emoji}
                  </div>
                  <div>
                    <div className="skill-card-title">{cat.title}</div>
                    <div className="skill-card-subtitle">{cat.subtitle}</div>
                  </div>
                </div>

                {cat.skills.map((skill, i) => (
                  <div key={skill.name} className="skill-bar-item">
                    <div className="skill-bar-label">
                      <span className="skill-bar-name">{skill.name}</span>
                      <span className="skill-bar-percent">{skill.percent}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: skill.percent / 100 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: catIdx * 0.1 + i * 0.1,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Soft Skills ===== */}
      <section className="softskills-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Soft Skills
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Kemampuan interpersonal yang mendukung karir saya
          </motion.p>

          <div className="softskills-grid">
            {softSkills.map((skill, i) => (
              <motion.div
                key={skill.title}
                className="softskill-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
              >
                <div className="softskill-emoji">{skill.emoji}</div>
                <h4>{skill.title}</h4>
                <p>{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Tools ===== */}
      <section className="tools-section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Tools & Aplikasi
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Perangkat lunak yang saya gunakan sehari-hari
          </motion.p>

          <div className="tools-grid">
            {tools.map((tool, i) => (
              <motion.div
                key={tool}
                className="tool-chip"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                whileHover={{ y: -3 }}
              >
                <span className="tool-chip-dot" />
                {tool}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Skills;
