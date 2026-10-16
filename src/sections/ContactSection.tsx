import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, Check, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    topic: 'Diskusi Riset Keuangan',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#4A6277', '#89A9C7', '#B6CDDE', '#FFFFFF'],
      });
    } catch {
      // ignore
    }

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', contact: '', topic: 'Diskusi Riset Keuangan', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative w-full pt-16 pb-24 px-4 sm:px-6 overflow-hidden">
      <div id="kontak" className="sr-only" />
      {/* Mountain Background Banner — 1:1 Reference from Haneul Design */}
      <div className="relative w-full max-w-4xl mx-auto rounded-[36px] overflow-hidden min-h-[640px] sm:min-h-[700px] flex items-center justify-center border border-white/60 shadow-[0_20px_60px_rgba(30,46,62,0.25)]">
        {/* Alpine Mountain Photo */}
        <img
          src="/assets/mountain-alpine.jpg"
          alt="Majestic Alpine Mountains"
          className="absolute inset-0 w-full h-full object-cover object-center filter saturate-90 brightness-95"
        />

        {/* Ambient Overlay Gradients for Depth & Mist */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3A536B]/40 via-transparent to-[#1D2B38]/70 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white/90 via-white/40 to-transparent pointer-events-none" />

        {/* Floating Frosted Glass Card (Exact Haneul Consultation Card) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 300, damping: 25 }}
          className="relative z-10 w-full max-w-md mx-4 p-7 sm:p-9 rounded-[32px] bg-white/25 backdrop-blur-xl border border-white/60 shadow-[0_16px_50px_rgba(15,28,42,0.3)] text-white"
        >
          {/* Card Header */}
          <div className="text-center mb-6">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white drop-shadow-sm font-heading">
              Begin your journey today
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-white/90 font-light leading-relaxed">
              Pilih topik dan hubungi langsung Nur Azizah untuk kolaborasi akademik, riset pasar modal, atau sekadar berdiskusi.
            </p>
          </div>

          {/* Form with Rounded Pill Inputs */}
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <input
                type="text"
                required
                placeholder="nama lengkap"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-5 py-3 rounded-full bg-white/95 border border-white/80 text-xs sm:text-sm text-[#1E2E3E] placeholder:text-[#8EA3B8] focus:outline-none focus:ring-2 focus:ring-[#4A6277]/40 shadow-sm transition-all"
              />
            </div>

            <div>
              <input
                type="text"
                required
                placeholder="nomor whatsapp / email"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                className="w-full px-5 py-3 rounded-full bg-white/95 border border-white/80 text-xs sm:text-sm text-[#1E2E3E] placeholder:text-[#8EA3B8] focus:outline-none focus:ring-2 focus:ring-[#4A6277]/40 shadow-sm transition-all"
              />
            </div>

            <div className="relative">
              <select
                value={formData.topic}
                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                className="w-full px-5 py-3 rounded-full bg-white/95 border border-white/80 text-xs sm:text-sm text-[#1E2E3E] focus:outline-none focus:ring-2 focus:ring-[#4A6277]/40 shadow-sm transition-all appearance-none pr-10 cursor-pointer"
              >
                <option value="Diskusi Riset Keuangan">Diskusi Riset Ekonomi Syariah & Finansial</option>
                <option value="Pasar Modal Syariah">Kepanitiaan / Edukasi Pasar Modal Syariah</option>
                <option value="Kesempatan Magang / Kolaborasi">Peluang Magang & Kolaborasi Tim</option>
                <option value="Pertukaran Pengalaman">Sapaan & Pertukaran Pengalaman</option>
              </select>
              <ArrowUpRight
                size={16}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#4A6277] pointer-events-none"
              />
            </div>

            <div>
              <textarea
                required
                rows={3}
                placeholder="tuliskan pesan singkat Anda..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-5 py-3 rounded-2xl bg-white/95 border border-white/80 text-xs sm:text-sm text-[#1E2E3E] placeholder:text-[#8EA3B8] focus:outline-none focus:ring-2 focus:ring-[#4A6277]/40 shadow-sm transition-all resize-none"
              />
            </div>

            {/* Pill Submit Button (Modeled after "Book Free Consultation") */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3.5 rounded-full font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-md ${
                submitted
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#435C74] hover:bg-[#344A5E] text-white shadow-[0_4px_16px_rgba(20,38,56,0.3)]'
              }`}
            >
              {submitted ? (
                <>
                  <Check size={16} />
                  <span>Pesan Terkirim dengan Sukses!</span>
                </>
              ) : (
                <>
                  <Send size={13} />
                  <span>Kirim Pesan Sekarang</span>
                </>
              )}
            </motion.button>
          </form>

          {/* Subtext info */}
          <div className="mt-5 pt-4 border-t border-white/30 flex items-center justify-between text-[11px] text-white/90">
            <span className="flex items-center gap-1">
              <MapPin size={12} />
              FEBI UIN Sunan Ampel Surabaya
            </span>
            <span className="flex items-center gap-1 font-medium">
              <Mail size={12} />
              Surabaya, ID
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
