import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
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
        colors: ['#4A6277', '#89A9C7', '#B6CDDE', '#3E556B'],
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
    <section id="kontak" className="py-20 px-6 sm:px-10 max-w-4xl mx-auto border-t border-[#E8EFF6]">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-xs font-semibold text-[#4A6277] uppercase tracking-wider">Terhubung</span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1E2E3E] mt-1">
          Hubungi Saya
        </h2>
        <p className="mt-2 text-sm text-[#556E84] leading-relaxed max-w-md mx-auto">
          Terbuka untuk diskusi akademik, kesempatan magang, kolaborasi riset, atau sekadar berbagi pengalaman dan bertukar sapa.
        </p>
      </div>

      {/* Main Glassmorphism Contact Box — Modeled directly after the Haneul design card */}
      <div className="max-w-xl mx-auto relative rounded-[32px] bg-gradient-to-b from-[#F0F5FA]/90 to-[#E4EDF5]/90 border border-white/80 p-8 sm:p-10 shadow-[0_12px_40px_rgba(70,95,120,0.08)] backdrop-blur-md">
        <div className="text-center mb-6">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1E2E3E]">
            Mulai Percakapan
          </h3>
          <p className="text-xs text-[#556E84] mt-1">
            Silakan tinggalkan pesan Anda di bawah ini
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <input
              type="text"
              required
              placeholder="Nama lengkap Anda"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-5 py-3 rounded-full bg-white/95 border border-[#D5E1ED] text-xs sm:text-sm text-[#1E2E3E] placeholder:text-[#8EA3B8] focus:outline-none focus:ring-2 focus:ring-[#4A6277]/25 focus:border-[#4A6277] transition-all shadow-[0_2px_8px_rgba(70,95,120,0.02)]"
            />
          </div>

          <div>
            <input
              type="email"
              required
              placeholder="Alamat email Anda"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-5 py-3 rounded-full bg-white/95 border border-[#D5E1ED] text-xs sm:text-sm text-[#1E2E3E] placeholder:text-[#8EA3B8] focus:outline-none focus:ring-2 focus:ring-[#4A6277]/25 focus:border-[#4A6277] transition-all shadow-[0_2px_8px_rgba(70,95,120,0.02)]"
            />
          </div>

          <div>
            <input
              type="text"
              required
              placeholder="Subjek / Perihal pesan"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-5 py-3 rounded-full bg-white/95 border border-[#D5E1ED] text-xs sm:text-sm text-[#1E2E3E] placeholder:text-[#8EA3B8] focus:outline-none focus:ring-2 focus:ring-[#4A6277]/25 focus:border-[#4A6277] transition-all shadow-[0_2px_8px_rgba(70,95,120,0.02)]"
            />
          </div>

          <div>
            <textarea
              required
              rows={3}
              placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-5 py-3 rounded-2xl bg-white/95 border border-[#D5E1ED] text-xs sm:text-sm text-[#1E2E3E] placeholder:text-[#8EA3B8] focus:outline-none focus:ring-2 focus:ring-[#4A6277]/25 focus:border-[#4A6277] transition-all resize-none shadow-[0_2px_8px_rgba(70,95,120,0.02)]"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={`w-full py-3.5 rounded-full font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 ${
              submitted
                ? 'bg-emerald-600 text-white'
                : 'bg-[#3E556B] hover:bg-[#2E4254] text-white shadow-[0_4px_14px_rgba(62,85,107,0.25)]'
            }`}
          >
            {submitted ? (
              <>
                <Check size={16} />
                <span>Pesan Terkirim dengan Sukses!</span>
              </>
            ) : (
              <>
                <Send size={14} />
                <span>Kirim Pesan Sekarang</span>
              </>
            )}
          </motion.button>
        </form>

        {/* Quick Contact Info */}
        <div className="mt-8 pt-6 border-t border-[#D5E1ED]/80 flex flex-wrap items-center justify-center gap-4 text-xs text-[#556E84]">
          <a href="mailto:azizah@example.com" className="flex items-center gap-1.5 hover:text-[#1E2E3E] transition-colors">
            <Mail size={14} className="text-[#4A6277]" />
            <span>azizah@example.com</span>
          </a>
          <span className="text-[#BACDD8]">•</span>
          <div className="flex items-center gap-1.5">
            <MapPin size={14} className="text-[#4A6277]" />
            <span>FEB Universitas Brawijaya</span>
          </div>
        </div>
      </div>
    </section>
  );
}
