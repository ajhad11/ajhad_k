import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ theme, toggleTheme }) {
  // Hook to track mobile drawer open/close state
  const [isOpen, setIsOpen] = useState(false);
  // Hook to track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);

  // Navigation menu links
  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  // Monitors window scrolling to toggle scrolled state and apply navigation background changes
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-4 bg-black/90 dark:bg-black/90 light:bg-white/90 backdrop-blur-md border-b border-white/5 shadow-lg'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#home" className="text-xl font-bold tracking-widest text-white font-space">
          AJHAD <span className="text-primary text-glow">K</span>
        </a>

        {/* Desktop Menu links list */}
        <div className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-text-gray hover:text-white transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Connect Action Button */}
        <div className="hidden lg:flex items-center space-x-6">
          <a
            href="#contact"
            className="relative px-6 py-2.5 rounded-full font-medium text-sm text-white overflow-hidden group border border-primary bg-primary/10 hover:bg-primary shadow-[0_0_15px_rgba(10,132,255,0.2)] hover:shadow-[0_0_25px_rgba(10,132,255,0.4)] transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              Let's Connect <span className="transition-transform group-hover:translate-x-1">→</span>
            </span>
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center space-x-4">
          {/* Light/Dark Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full glass-card text-text-gray hover:text-white"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
          </button>
          
          {/* Hamburger Menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full glass-card text-text-gray hover:text-white"
            aria-label="Open Menu"
          >
            {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer list menu container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden w-full bg-black/95 dark:bg-black/95 light:bg-white/95 border-b border-white/5 backdrop-blur-lg"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-text-gray hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3 rounded-full font-medium text-sm text-white border border-primary bg-primary/10 hover:bg-primary/20 transition-all duration-300"
              >
                Let's Connect →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
