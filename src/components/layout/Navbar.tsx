import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Partnerships', path: '/partnerships' },
  { name: 'Impact', path: '/impact' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'py-4 bg-navy-900/80 backdrop-blur-3xl border-b border-white/5'
            : 'py-6 bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="relative z-10 group">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gold-400 via-gold-500 to-electric-500 flex items-center justify-center shadow-2xl shadow-gold-500/30 group-hover:shadow-gold-500/50 transition-shadow duration-500">
                    <span className="text-navy-900 font-display font-bold text-xl">Q</span>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-gold-500/50 to-electric-500/50 rounded-2xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-lg tracking-tight text-white group-hover:text-gold-400 transition-colors duration-300">
                    Quantum Learn
                  </span>
                  <span className="text-[10px] text-gold-500/80 font-medium tracking-[0.2em] uppercase">
                    Shaping Futures
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + index * 0.05 }}
                >
                  <Link
                    to={item.path}
                    className={`nav-link px-5 py-2.5 text-[13px] font-medium tracking-wide ${
                      location.pathname === item.path ? 'active text-white' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hidden lg:block"
            >
              <Link
                to="/contact"
                className="btn-primary text-sm inline-flex items-center gap-2"
              >
                Partner With Us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-10 p-2 text-white hover:text-gold-500 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="absolute top-1 left-0 w-6 h-0.5 bg-current origin-left"
                />
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="absolute top-3 left-0 w-6 h-0.5 bg-current"
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="absolute top-5 left-0 w-6 h-0.5 bg-current origin-left"
                />
              </div>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-navy-900/95 backdrop-blur-3xl"
            />

            <motion.nav
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="relative h-full flex flex-col items-center justify-center px-6"
            >
              <div className="w-full max-w-sm space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 + index * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      className={`block py-4 text-2xl font-display font-semibold transition-colors text-center ${
                        location.pathname === item.path
                          ? 'text-gold-500'
                          : 'text-white/70 hover:text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="pt-8"
                >
                  <Link
                    to="/contact"
                    className="btn-primary block w-full text-center text-lg"
                  >
                    Partner With Us
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
