import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AnimatedBackground from './components/canvas/AnimatedBackground';
import MouseFollower from './components/ui/MouseFollower';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import PartnershipsPage from './pages/PartnershipsPage';
import ImpactPage from './pages/ImpactPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-navy-900 text-white relative overflow-x-hidden">
        {/* Animated Background */}
        <AnimatedBackground />

        {/* Mouse Follower (desktop only) */}
        <MouseFollower />

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/programs" element={<ProgramsPage />} />
                <Route path="/partnerships" element={<PartnershipsPage />} />
                <Route path="/impact" element={<ImpactPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
