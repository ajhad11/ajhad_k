import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Scroll to top on route change helper
function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    if (!location.state?.scrollTo) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.state]);
  return null;
}

export default function App() {
  // Ensure dark mode is active and clean up any residual light theme settings
  useEffect(() => {
    document.documentElement.classList.remove('light');
    localStorage.removeItem('portfolio-theme');
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-bg-primary text-text-white transition-colors duration-300">
        {/* Global Navbar */}
        <Navbar />

        <Routes>
          {/* Main Portfolio Route */}
          <Route path="/" element={
            <motion.div 
              key="portfolio"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            >
              <main className="relative z-10">
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Certifications />
                <Contact />
              </main>
              <Footer />
            </motion.div>
          } />

          {/* Fallback redirect to prevent blank page on unknown hash routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}
