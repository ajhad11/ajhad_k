import React, { useState, useEffect } from 'react';
import { 
  FiMenu, 
  FiX, 
  FiHome, 
  FiUser, 
  FiCpu, 
  FiBriefcase, 
  FiFolder, 
  FiAward, 
  FiMail,
  FiGithub,
  FiLinkedin,
  FiArrowRight
} from 'react-icons/fi';
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
    const navbarOffset = 75;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - navbarOffset;
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

  // Navigation menu links with dedicated icons
  const menuItems = [
    { name: 'Home', href: '#home', icon: FiHome },
    { name: 'About', href: '#about', icon: FiUser },
    { name: 'Skills', href: '#skills', icon: FiCpu },
    { name: 'Experience', href: '#experience', icon: FiBriefcase },
    { name: 'Projects', href: '#projects', icon: FiFolder },
    { name: 'Certifications', href: '#certifications', icon: FiAward },
    { name: 'Contact', href: '#contact', icon: FiMail },
  ];

  // Lock body scroll when mobile drawer is active to prevent jitter
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [isOpen]);

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
      if (window.scrollY + windowHeight >= documentHeight - 80) {
        setActiveSection('contact');
        return;
      }

      // Check section offsets accurately using getBoundingClientRect
      const sectionIds = ['home', 'about', 'skills', 'experience', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const elTop = el.getBoundingClientRect().top + window.scrollY;
          if (scrollPosition >= elTop) {
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
      }, 150);
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
    } else {
      // Small timeout allows drawer exit / body unlock to register smoothly
      setTimeout(() => {
        scrollToSection(targetId);
      }, 50);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? 'py-3.5 bg-[#020B1C]/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex justify-between items-center">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-xl font-bold tracking-widest font-space flex items-center gap-1 group cursor-pointer select-none"
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

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <FiX className="w-5 h-5 text-primary" /> : <FiMenu className="w-5 h-5" />}
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
              className="lg:hidden w-full border-b backdrop-blur-2xl bg-[#020B1C]/98 border-white/10 text-white shadow-2xl overflow-hidden"
            >
              {/* Scrollable container for mobile menu */}
              <div className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto px-6 py-6 flex flex-col space-y-2 overscroll-contain">
                {menuItems.map((item) => {
                  const targetId = item.href.replace('#', '');
                  const isActive = location.pathname === '/' && activeSection === targetId;
                  const ItemIcon = item.icon;

                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`flex items-center justify-between text-base font-medium py-3.5 px-4 rounded-xl transition-all duration-200 cursor-pointer active:scale-[0.98] ${
                        isActive
                          ? 'bg-primary/20 text-white font-semibold border border-primary/30 shadow-[0_0_15px_rgba(10,132,255,0.15)]'
                          : 'text-text-gray hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <ItemIcon className={`w-4 h-4 ${isActive ? 'text-primary' : 'text-text-gray'}`} />
                        <span>{item.name}</span>
                      </div>
                      {isActive ? (
                        <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(10,132,255,0.8)]" />
                      ) : (
                        <span className="text-xs text-white/20">→</span>
                      )}
                    </a>
                  );
                })}

                {/* Primary CTA Button in drawer */}
                <div className="pt-3">
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm text-white bg-primary hover:bg-primary/90 active:scale-[0.98] shadow-[0_0_20px_rgba(10,132,255,0.35)] transition-all duration-300 cursor-pointer"
                  >
                    <span>Let's Connect</span>
                    <FiArrowRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Social links row in drawer */}
                <div className="pt-4 mt-2 border-t border-white/10 flex items-center justify-center gap-4 text-text-gray">
                  <a
                    href="https://github.com/ajhad11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 hover:text-primary transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <FiGithub className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com/in/ajhad11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 hover:text-primary transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <FiLinkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:ajhadk453@gmail.com"
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 hover:text-primary transition-colors"
                    aria-label="Send Email"
                  >
                    <FiMail className="w-4 h-4" />
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
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
}
