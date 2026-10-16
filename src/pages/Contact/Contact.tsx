import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Instagram, Linkedin, Github } from '../../components/SocialIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#E11D48', '#FDA4AF', '#3B82F6', '#10B981'],
      });
    } catch {
      // ignore
    }

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen pt-28 pb-20 px-4 sm:px-6 max-w-4xl mx-auto"
    >
      {/* Header */}
      <section className="mb-12">
        <span className="text-xs font-semibold text-rose-600 uppercase tracking-wider">Terhubung</span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 mt-1">
          Hubungi Saya
        </h1>
        <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-xl">
          Terbuka untuk diskusi akademik, kesempatan magang, kolaborasi riset, atau sekadar berbagi pengalaman dan bertukar sapa.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Info Column (2 cols) */}
        <div className="md:col-span-2 space-y-4">
          <div className="p-6 rounded-3xl bg-white border border-zinc-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-6">
            <div>
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Surel Resmi</span>
              <a
                href="mailto:azizah@example.com"
                className="mt-1 flex items-center gap-2 text-sm font-bold text-zinc-900 hover:text-rose-600 transition-colors"
              >
                <Mail size={16} className="text-rose-500 shrink-0" />
                <span>azizah@example.com</span>
              </a>
            </div>

            <div className="pt-4 border-t border-zinc-100">
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Kampus & Lokasi</span>
              <div className="mt-1 flex items-start gap-2 text-xs sm:text-sm font-medium text-zinc-800">
                <MapPin size={16} className="text-rose-500 shrink-0 mt-0.5" />
                <span>FEB Universitas Brawijaya, Malang, Jawa Timur</span>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-100">
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Jejaring Profesional</span>
              <div className="mt-3 flex items-center gap-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900 text-white flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <p className="text-xs text-zinc-300">
              Respon cepat biasanya dalam 1x24 jam di hari kerja.
            </p>
          </div>
        </div>

        {/* Form Column (3 cols) */}
        <div className="md:col-span-3">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <h2 className="text-lg font-bold text-zinc-950 tracking-tight mb-1">
              Kirim Pesan Langsung
            </h2>
            <p className="text-xs text-zinc-500 mb-6">
              Silakan tulis pesan Anda di formulir ini.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-zinc-700 mb-1.5">
                    Nama Lengkap
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Nama Anda"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50/50 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-zinc-700 mb-1.5">
                    Alamat Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="nama@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50/50 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-zinc-700 mb-1.5">
                  Topik / Perihal
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  placeholder="Contoh: Diskusi Peluang Magang / Kolaborasi"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50/50 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-zinc-700 mb-1.5">
                  Pesan Anda
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50/50 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className={`w-full py-3 rounded-xl font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 ${
                  submitted
                    ? 'bg-emerald-600 text-white'
                    : 'bg-zinc-900 hover:bg-zinc-800 text-white shadow-sm hover:shadow'
                }`}
              >
                {submitted ? (
                  <>
                    <Check size={16} />
                    <span>Pesan Terkirim dengan Sukses!</span>
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    <span>Kirim Pesan Sekarang</span>
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
