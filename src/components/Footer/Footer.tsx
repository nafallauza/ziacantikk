import { Link } from 'react-router-dom';
import { Heart, Mail } from 'lucide-react';
import { Instagram, Linkedin, Github } from '../SocialIcons';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <Link to="/" className="footer-brand">
            Azizah ✨
          </Link>

          <nav className="footer-nav">
            <Link to="/">Beranda</Link>
            <Link to="/about">Tentang</Link>
            <Link to="/portfolio">Portofolio</Link>
            <Link to="/skills">Keahlian</Link>
            <Link to="/contact">Kontak</Link>
          </nav>

          <div className="footer-socials">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:azizah@example.com"
              className="footer-social-btn"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          <div className="footer-divider" />

          <div className="footer-bottom">
            <p className="footer-copyright">
              &copy; {currentYear} Nur Azizah Safriyani Susanti. All rights reserved.
            </p>
            <p className="footer-made-with">
              Made with{' '}
              <Heart size={14} className="footer-heart" fill="#e8536d" />{' '}
              by Lauza
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
