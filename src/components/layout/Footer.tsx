import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, ArrowUpRight, MessageCircle } from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Partnerships', path: '/partnerships' },
  { name: 'Impact', path: '/impact' },
];

const programs = [
  { name: 'Knowledge Programs', path: '/programs#knowledge' },
  { name: 'Engagement Programs', path: '/programs#engagement' },
  { name: 'Development Programs', path: '/programs#development' },
];

const institutions = [
  'Schools',
  'PU Colleges',
  'Degree Colleges',
  'Engineering Colleges',
  'Polytechnic Colleges',
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-navy-900 border-t border-white/5">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-4 mb-8 group">
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gold-400 via-gold-500 to-electric-500 flex items-center justify-center shadow-2xl shadow-gold-500/30">
                  <span className="text-navy-900 font-display font-bold text-xl">Q</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-white">Quantum Learn</span>
                <span className="text-[10px] text-gold-500 font-medium tracking-[0.2em] uppercase">
                  Shaping Futures
                </span>
              </div>
            </Link>

            <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-xs">
              Empowering educational institutions through practical learning, innovation ecosystems,
              and industry-ready experiences.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: MessageCircle, href: 'https://wa.me/917760270540' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-11 h-11 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-gold-500 hover:border-gold-500/30 hover:bg-gold-500/5 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-6 text-sm tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/40 hover:text-gold-500 transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-6 text-sm tracking-wide">Programs</h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.path}>
                  <Link
                    to={program.path}
                    className="text-white/40 hover:text-gold-500 transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    {program.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Institutions */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-6 text-sm tracking-wide">Institutions</h4>
            <ul className="space-y-3">
              {institutions.map((inst) => (
                <li key={inst}>
                  <span className="text-white/40 text-sm">{inst}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-6 text-sm tracking-wide">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:msmithun927@gmail.com"
                  className="flex items-start gap-3 text-white/40 hover:text-gold-500 transition-colors group"
                >
                  <Mail className="w-4 h-4 text-gold-500/50 group-hover:text-gold-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">msmithun927@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917760270540"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/40 hover:text-green-500 transition-colors group"
                >
                  <MessageCircle className="w-4 h-4 text-green-500/50 group-hover:text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">+91 7760270540</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/40">
                <MapPin className="w-4 h-4 text-gold-500/50 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Bangarpet, Karnataka, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/30 text-sm">
              © {currentYear} Quantum Learn. All rights reserved.
            </p>

            <div className="flex items-center gap-8">
              <Link to="/privacy" className="text-white/30 hover:text-gold-500 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/30 hover:text-gold-500 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -4 }}
              className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-gold-500 hover:border-gold-500/30 transition-all duration-300"
            >
              <ArrowUpRight className="w-4 h-4 rotate-[-45deg]" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
