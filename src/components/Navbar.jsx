import React, { useState, useEffect } from 'react';
import { 
  FiMenu, 
  FiX, 
  FiFileText, 
  FiArrowRight, 
  FiSun, 
  FiMoon, 
  FiGithub, 
  FiLinkedin, 
  FiMail 
} from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export const scrollToSection = (targetId) => {
  if (targetId === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const element = document.getElementById(targetId);
  if (element) {
    const navbarOffset = 76;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - navbarOffset;
    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: 'smooth',
    });
  }
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDark, toggleTheme } = useTheme();

  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
    { name: 'AI & Enterprise', href: 'ai-solutions' },
    { name: 'Experience', href: 'experience' },
    { name: 'Contact', href: 'contact' },
  ];

  // Prevent scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (location.pathname !== '/') return;

      if (window.scrollY < 120) {
        setActiveSection('home');
        return;
      }

      const sections = menuItems.map(item => item.href);
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (sectionId) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
      setTimeout(() => scrollToSection(sectionId), 150);
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/85 dark:bg-[#0B1120]/90 backdrop-blur-md shadow-sm border-b border-[#E2E8F0] dark:border-white/5 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#101B33] to-[#2563EB] flex items-center justify-center text-white font-bold text-base shadow-sm group-hover:scale-105 transition-transform">
            A
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-space font-bold text-base tracking-tight text-[#172033] dark:text-white group-hover:text-[#2563EB] transition-colors">
                AJHAD K
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#2563EB]/10 text-[#2563EB] dark:bg-[#2563EB]/20 dark:text-blue-400 font-semibold">
                DEV
              </span>
            </div>
            <p className="text-[10px] text-[#64748B] dark:text-[#94A3B8] font-medium leading-none">
              Flutter &bull; .NET &bull; AI
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 bg-[#F8FAFC]/80 dark:bg-[#101B33]/60 px-3 py-1.5 rounded-full border border-[#E2E8F0] dark:border-white/5 backdrop-blur-md">
          {menuItems.map((item) => {
            const isActive = activeSection === item.href && location.pathname === '/';
            return (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#2563EB] text-white shadow-sm'
                    : 'text-[#64748B] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </nav>

        {/* Right CTA & Controls */}
        <div className="flex items-center gap-2.5">
          {/* Dark / Light Mode Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            className="p-2.5 rounded-full border border-[#E2E8F0] dark:border-white/10 text-[#172033] dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
            title={`Toggle Theme (${isDark ? 'Dark' : 'Light'})`}
          >
            {isDark ? (
              <FiSun className="w-4 h-4 text-amber-400 hover:rotate-45 transition-transform" />
            ) : (
              <FiMoon className="w-4 h-4 text-[#2563EB] hover:-rotate-12 transition-transform" />
            )}
          </button>

          {/* Resume Download Button */}
          <a
            href="/assets/doc/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-[#101B33] dark:bg-[#2563EB] text-white hover:bg-[#2563EB] dark:hover:bg-blue-600 shadow-sm transition-all duration-200"
          >
            <FiFileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>

          {/* Mobile Drawer Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2.5 rounded-xl border border-[#E2E8F0] dark:border-white/10 text-[#172033] dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
          >
            {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Dropdown / Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-b border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-[#0B1120] px-6 py-6 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => {
                const isActive = activeSection === item.href && location.pathname === '/';
                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-left transition-all ${
                      isActive
                        ? 'bg-[#2563EB] text-white'
                        : 'text-[#172033] dark:text-[#F8FAFC] hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                  >
                    <span>{item.name}</span>
                    <FiArrowRight className="w-4 h-4 opacity-60" />
                  </button>
                );
              })}

              <div className="pt-4 border-t border-[#E2E8F0] dark:border-white/10 flex flex-col gap-3">
                <a
                  href="/assets/doc/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold bg-[#2563EB] text-white"
                >
                  <FiFileText className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>

                <div className="flex items-center justify-center gap-6 pt-2 text-[#64748B] dark:text-[#94A3B8]">
                  <a href="https://github.com/ajhad11" target="_blank" rel="noopener noreferrer" className="hover:text-[#2563EB]">
                    <FiGithub className="w-5 h-5" />
                  </a>
                  <a href="https://linkedin.com/in/ajhad-k" target="_blank" rel="noopener noreferrer" className="hover:text-[#2563EB]">
                    <FiLinkedin className="w-5 h-5" />
                  </a>
                  <a href="mailto:ajhadk453@gmail.com" className="hover:text-[#2563EB]">
                    <FiMail className="w-5 h-5" />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}