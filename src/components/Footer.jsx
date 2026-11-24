import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { scrollToSection } from './Navbar';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 bg-white dark:bg-[#080E1A] border-t border-[#E2E8F0] dark:border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        
        {/* Left Column: Brand & Attribution */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-sm font-bold text-[#172033] dark:text-white font-space">
            AJHAD <span className="text-[#2563EB]">K</span>
            <span className="text-xs font-normal text-[#64748B] dark:text-[#94A3B8] ml-2">
              Software Developer &bull; Flutter | .NET | AI Integration
            </span>
          </p>
          <p className="text-xs text-[#64748B] dark:text-[#94A3B8]/70">
            &copy; {currentYear} AJHAD K. Built with React 19, Tailwind CSS, .NET architecture principles, and Three.js.
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#64748B] dark:text-[#94A3B8]">
          <button
            onClick={() => scrollToSection('home')}
            className="hover:text-[#2563EB] transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>&bull;</span>
          <button
            onClick={() => scrollToSection('about')}
            className="hover:text-[#2563EB] transition-colors cursor-pointer"
          >
            About
          </button>
          <span>&bull;</span>
          <button
            onClick={() => scrollToSection('skills')}
            className="hover:text-[#2563EB] transition-colors cursor-pointer"
          >
            Skills
          </button>
          <span>&bull;</span>
          <button
            onClick={() => scrollToSection('projects')}
            className="hover:text-[#2563EB] transition-colors cursor-pointer"
          >
            Projects
          </button>
          <span>&bull;</span>
          <button
            onClick={() => scrollToSection('experience')}
            className="hover:text-[#2563EB] transition-colors cursor-pointer"
          >
            Experience
          </button>
          <span>&bull;</span>
          <a
            href="/assets/doc/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#2563EB] transition-colors"
          >
            Resume
          </a>
          <span>&bull;</span>
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-[#2563EB] transition-colors cursor-pointer"
          >
            Contact
          </button>
        </div>

        {/* Social Channels */}
        <div className="flex items-center space-x-3">
          <a
            href="https://github.com/ajhad11"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-[#E2E8F0] dark:border-white/10 text-[#64748B] dark:text-[#94A3B8] hover:text-[#2563EB] hover:border-[#2563EB]/30 transition-all"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/ajhad-k"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-[#E2E8F0] dark:border-white/10 text-[#64748B] dark:text-[#94A3B8] hover:text-[#2563EB] hover:border-[#2563EB]/30 transition-all"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-4 h-4 text-[#0A66C2]" />
          </a>
          <a
            href="mailto:ajhadk453@gmail.com"
            className="p-2.5 rounded-xl border border-[#E2E8F0] dark:border-white/10 text-[#64748B] dark:text-[#94A3B8] hover:text-[#2563EB] hover:border-[#2563EB]/30 transition-all"
            aria-label="Send Email"
          >
            <FaEnvelope className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  );
}
