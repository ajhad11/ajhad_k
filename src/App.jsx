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
import RoboticIntro from './components/RoboticIntro';

export default function App() {
  // 1. Hook to manage application theme (dark/light, defaults to dark)
  const [theme, setTheme] = useState('dark');
  // 2. Hook to determine if the 3D intro should be displayed or hidden
  const [showIntro, setShowIntro] = useState(true);

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

  // Callback triggered when 3D introduction timeline finishes
  const handleIntroComplete = () => {
    setShowIntro(false); // Hides 3D intro and renders portfolio page content
  };

  return (
    <div className="relative min-h-screen bg-bg-primary text-text-white transition-colors duration-300">
      
      {/* Framer motion transition wrapper to manage entry/exit animation phases */}
      <AnimatePresence mode="wait">
        {showIntro ? (
          // Render the Three.js 3D opening animation initially
          <motion.div key="intro" className="fixed inset-0 z-50">
            <RoboticIntro onComplete={handleIntroComplete} />
          </motion.div>
        ) : (
          // Once intro completes, render the main developer portfolio
          <motion.div 
            key="portfolio"
            initial={{ opacity: 0 }} // Starts transparent
            animate={{ opacity: 1 }} // Fades in smoothly
            transition={{ duration: 1.2, ease: 'easeOut' }} // Reveal timeline easing
          >
            {/* Particle Background */}
            <ParticleBackground theme={theme} />

            {/* Navbar */}
            <Navbar theme={theme} toggleTheme={toggleTheme} />

            {/* Core page components sections */}
            <main className="relative z-10">
              <Hero />
              <About />
              <Skills />
              <Experience />
              <Projects />
              <Certifications />
              <Contact />
            </main>

            {/* Copywright footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
}
