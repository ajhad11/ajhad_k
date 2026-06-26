import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // 1. Hook to manage application theme (dark/light, defaults to dark)
  const [theme, setTheme] = useState('dark');

  // Synchronizes the theme state with the DOM document root element class list
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light'); // Append light theme variables selector class
    } else {
      root.classList.remove('light'); // Remove light theme class to default to dark properties
    }
  }, [theme]);

  // Switches between light and dark themes
  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-white transition-colors duration-300">
      
      <motion.div 
        key="portfolio"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <ParticleBackground theme={theme} />
        <Navbar theme={theme} toggleTheme={toggleTheme} />

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
      
    </div>
  );
}
