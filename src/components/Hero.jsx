import { 
  FaGithub, 
  FaLinkedin 
} from 'react-icons/fa';
import { 
  FiArrowRight, 
  FiFileText 
} from 'react-icons/fi';
import { motion } from 'framer-motion';
import { scrollToSection } from './Navbar';
import FlutterCodeTyping from './FlutterCodeTyping';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-32 pb-16 flex flex-col justify-center overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting glows */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-[#2563EB]/10 rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] bg-purple-500/10 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10 my-auto">
        
        {/* Left Column: Simple, High-Impact Bio & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="lg:col-span-6 flex flex-col space-y-6 text-left"
        >
          {/* Headline & Role */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#172033] dark:text-white font-space leading-[1.05]">
              AJHAD <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-cyan-400">K</span>
            </h1>

            <p className="text-lg sm:text-2xl font-bold font-space text-[#2563EB] dark:text-blue-400">
              Flutter &bull; React &bull; Django Developer
            </p>
          </div>

          {/* Simple, Punchy Bio */}
          <p className="text-base sm:text-lg text-[#64748B] dark:text-[#94A3B8] max-w-xl leading-relaxed">
            I build fast, responsive cross-platform mobile apps with Flutter and modern, scalable web applications with React and Django.
          </p>

          {/* Simple Tech Tags */}
          <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
            <span className="px-3 py-1.5 rounded-lg bg-black/[0.03] dark:bg-white/[0.05] border border-[#E2E8F0] dark:border-white/10 text-[#172033] dark:text-slate-200 font-medium">
              Flutter
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-black/[0.03] dark:bg-white/[0.05] border border-[#E2E8F0] dark:border-white/10 text-[#172033] dark:text-slate-200 font-medium">
              Dart
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-black/[0.03] dark:bg-white/[0.05] border border-[#E2E8F0] dark:border-white/10 text-[#172033] dark:text-slate-200 font-medium">
              React
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-black/[0.03] dark:bg-white/[0.05] border border-[#E2E8F0] dark:border-white/10 text-[#172033] dark:text-slate-200 font-medium">
              Django
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-black/[0.03] dark:bg-white/[0.05] border border-[#E2E8F0] dark:border-white/10 text-[#172033] dark:text-slate-200 font-medium">
              Supabase
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-black/[0.03] dark:bg-white/[0.05] border border-[#E2E8F0] dark:border-white/10 text-[#172033] dark:text-slate-200 font-medium">
              PostgreSQL
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#2563EB] hover:bg-[#1D4ED8] shadow-lg shadow-[#2563EB]/25 transition-all duration-200 flex items-center gap-2 cursor-pointer group hover:-translate-y-0.5"
            >
              <span>View Projects</span>
              <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="/assets/doc/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl font-bold text-sm text-[#172033] dark:text-white bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-[#E2E8F0] dark:border-white/15 transition-all duration-200 flex items-center gap-2 hover:-translate-y-0.5"
            >
              <FiFileText className="w-4 h-4 text-[#2563EB]" />
              <span>Download CV</span>
            </a>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-5 py-3.5 rounded-xl font-bold text-sm text-[#64748B] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-white transition-colors cursor-pointer"
            >
              Contact Me
            </button>
          </div>

          {/* Social Profiles: Git and LinkedIn */}
          <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-[#E2E8F0] dark:border-white/10 text-xs font-mono text-[#64748B] dark:text-[#94A3B8]">
            <a
              href="https://github.com/ajhad11"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2563EB] flex items-center gap-1.5 transition-colors"
            >
              <FaGithub className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <span>&bull;</span>
            <a
              href="https://linkedin.com/in/ajhad-k"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#2563EB] flex items-center gap-1.5 transition-colors"
            >
              <FaLinkedin className="w-4 h-4 text-[#0A66C2]" />
              <span>LinkedIn</span>
            </a>
          </div>

        </motion.div>

        {/* Right Column: Clean Flutter Code Showcase & Key Metrics */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-6 relative flex flex-col items-center w-full"
        >
          {/* Animated Clean Code Showcase */}
          <FlutterCodeTyping />

          {/* Key Metrics Bar: Projects & Internships */}
          <div className="mt-5 w-full grid grid-cols-2 gap-3 text-center font-mono">
            <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-[#E2E8F0] dark:border-white/5">
              <span className="text-xl font-bold text-[#2563EB] block font-space">5+</span>
              <span className="text-xs text-[#64748B] dark:text-[#94A3B8]">Production Projects</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-[#E2E8F0] dark:border-white/5">
              <span className="text-xl font-bold text-emerald-500 block font-space">2+</span>
              <span className="text-xs text-[#64748B] dark:text-[#94A3B8]">Tech Internships</span>
            </div>
          </div>

        </motion.div>

      </div>

    </section>
  );
}
