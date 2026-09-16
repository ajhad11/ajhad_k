import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

// Helper function to smoothly scroll to any section accounting for fixed navbar height
export const scrollToSection = (targetId) => {
  if (targetId === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const element = document.getElementById(targetId);
  if (element) {
    const navbarOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;
    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: 'smooth',
    });
  }
};

export default function Navbar() {
  // Mobile drawer open/close state
  const [isOpen, setIsOpen] = useState(false);
  // Scrolled state for navbar background appearance
  const [scrolled, setScrolled] = useState(false);
  // Currently active section ID for scrollspy highlighting
  const [activeSection, setActiveSection] = useState('home');

  const location = useLocation();
  const navigate = useNavigate();

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

  // Scroll listener for background styling and scrollspy active section tracking
  useEffect(() => {
    const handleScroll = () => {
      // 1. Toggle scrolled background style
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // 2. Only compute active section when on home route
      if (location.pathname !== '/') return;

      // At very top
      if (window.scrollY < 120) {
        setActiveSection('home');
        return;
      }

      // Near bottom of document
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      if (window.scrollY + windowHeight >= documentHeight - 60) {
        setActiveSection('contact');
        return;
      }

      // Check section offsets
      const sectionIds = ['home', 'about', 'skills', 'experience', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          if (scrollPosition >= el.offsetTop) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Handle route state scrollTo request (e.g. Navigating back from /project/:id)
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const targetId = location.state.scrollTo;
      setTimeout(() => {
        scrollToSection(targetId);
      }, 100);
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  // Close mobile drawer on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Universal click handler for navigation links to prevent HashRouter route hijacking
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    setIsOpen(false);

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: targetId } });
      setTimeout(() => {
        scrollToSection(targetId);
      }, 150);
    } else {
      scrollToSection(targetId);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3.5 bg-[#020B1C]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-xl font-bold tracking-widest font-space flex items-center gap-1 group cursor-pointer"
          >
            <span className="text-white group-hover:text-primary transition-colors duration-200">
              AJHAD
            </span>
            <span className="text-primary text-glow">K</span>
          </a>

          {/* Desktop Menu links list */}
          <div className="hidden lg:flex items-center space-x-7">
            {menuItems.map((item) => {
              const targetId = item.href.replace('#', '');
              const isActive = location.pathname === '/' && activeSection === targetId;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative py-1 text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'text-primary font-semibold'
                      : 'text-text-gray hover:text-white'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full shadow-[0_0_8px_rgba(10,132,255,0.8)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop Controls (Action Button) */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="relative px-5 py-2 rounded-full font-medium text-sm text-white overflow-hidden group border border-primary bg-primary/10 hover:bg-primary shadow-[0_0_15px_rgba(10,132,255,0.2)] hover:shadow-[0_0_25px_rgba(10,132,255,0.4)] transition-all duration-300 cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                Let's Connect <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </a>
          </div>

          {/* Mobile controls */}
          <div className="flex lg:hidden items-center space-x-2">
            {/* Hamburger Menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full border glass-card text-text-gray hover:text-white transition-all duration-200 cursor-pointer"
              aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
            >
              {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer menu container */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden w-full border-b backdrop-blur-xl overflow-hidden bg-[#020B1C]/95 border-white/10 text-white shadow-2xl"
            >
              <div className="px-6 py-6 flex flex-col space-y-2">
                {menuItems.map((item) => {
                  const targetId = item.href.replace('#', '');
                  const isActive = location.pathname === '/' && activeSection === targetId;

                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`flex items-center justify-between text-base font-medium py-3 px-4 rounded-xl transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-primary/15 text-primary font-semibold border border-primary/25'
                          : 'text-text-gray hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span>{item.name}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(10,132,255,0.8)]" />
                      )}
                    </a>
                  );
                })}

                <div className="pt-2">
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm text-white bg-primary hover:bg-primary/90 shadow-[0_0_15px_rgba(10,132,255,0.3)] transition-all duration-300 cursor-pointer"
                  >
                    Let's Connect <span>→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Drawer backdrop overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 lg:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
}
