import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative py-12 bg-[#020B1C] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        
        {/* Left text */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-sm font-semibold text-white/95">
            © 2026 Ajhad K. All rights reserved.
          </p>
          <p className="text-xs font-medium text-text-gray/70">
            Built with React.js (Vite, Tailwind, Framer Motion) & Django REST Framework.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-5">
          <a
            href="https://github.com/ajhad11"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full glass-card text-text-gray hover:text-white hover:border-primary/40 transition-all duration-300"
            aria-label="GitHub"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full glass-card text-text-gray hover:text-white hover:border-primary/40 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:ajhadk453@gmail.com"
            className="p-2.5 rounded-full glass-card text-text-gray hover:text-white hover:border-primary/40 transition-all duration-300"
            aria-label="Email"
          >
            <FaEnvelope className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  );
}
