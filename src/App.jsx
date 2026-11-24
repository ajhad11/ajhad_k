import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar, { scrollToSection } from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';

// Scroll to top or specific target on route transition
function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        scrollToSection(location.state.scrollTo);
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.state]);

  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollHandler />
        <div className="relative min-h-screen bg-white dark:bg-[#0B1120] text-[#172033] dark:text-[#F8FAFC] transition-colors duration-200 selection:bg-[#2563EB]/25 selection:text-[#2563EB]">
          
          {/* Global Sticky Navigation */}
          <Navbar />

          <Routes>
            {/* Main Portfolio Single-Page Application */}
            <Route path="/" element={
              <motion.div 
                key="portfolio"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <main className="relative z-10">
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                  <Experience />
                  <Certifications />
                  <Contact />
                </main>
                <Footer />
              </motion.div>
            } />

            {/* Deep Project Architecture & Case Study View */}
            <Route path="/project/:id" element={
              <>
                <ProjectDetails />
                <Footer />
              </>
            } />

            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}