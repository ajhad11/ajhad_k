import { 
  FaGithub, 
  FaLinkedin, 
  FaWhatsapp
} from 'react-icons/fa';
import { 
  FiArrowRight, 
  FiFileText, 
  FiCpu, 
  FiCode
} from 'react-icons/fi';
import { 
  SiFlutter, 
  SiDotnet, 
  SiPython, 
  SiReact, 
  SiSupabase, 
  SiPostgresql, 
  SiDocker,
  SiGit
} from 'react-icons/si';
import { motion } from 'framer-motion';
import { scrollToSection } from './Navbar';
import FlutterCodeTyping from './FlutterCodeTyping';

export default function Hero() {

  const techTicker = [
    { name: 'Flutter', icon: <SiFlutter className="w-4 h-4 text-[#02569B]" /> },
    { name: '.NET Core', icon: <SiDotnet className="w-4 h-4 text-[#512BD4]" /> },
    { name: 'C#', icon: <FiCode className="w-4 h-4 text-purple-500" /> },
    { name: 'Python', icon: <SiPython className="w-4 h-4 text-[#3776AB]" /> },
    { name: 'React', icon: <SiReact className="w-4 h-4 text-[#61DAFB]" /> },
    { name: 'Supabase', icon: <SiSupabase className="w-4 h-4 text-[#3ECF8E]" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="w-4 h-4 text-[#4169E1]" /> },
    { name: 'AI & RAG', icon: <FiCpu className="w-4 h-4 text-[#2563EB]" /> },
    { name: 'Docker', icon: <SiDocker className="w-4 h-4 text-[#2496ED]" /> },
    { name: 'Git', icon: <SiGit className="w-4 h-4 text-[#F05032]" /> },
  ];

  return (
    <section id="home" className="relative min-h-[95vh] pt-32 pb-16 flex flex-col justify-center overflow-hidden bg-grid-pattern">
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
          {/* Status Badge */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/20 text-[#2563EB] dark:text-blue-400 text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for work</span>
            </span>
          </div>

          {/* Headline & Role */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#172033] dark:text-white font-space leading-[1.05]">
              AJHAD <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-cyan-400">K</span>
            </h1>

            <p className="text-lg sm:text-2xl font-bold font-space text-[#2563EB] dark:text-blue-400">
              Flutter & Full-Stack Developer
            </p>
          </div>

          {/* Simple, Punchy Bio */}
          <p className="text-base sm:text-lg text-[#64748B] dark:text-[#94A3B8] max-w-xl leading-relaxed">
            I build fast, beautiful mobile apps with Flutter and modern, scalable backend systems.
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
              .NET Core
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-black/[0.03] dark:bg-white/[0.05] border border-[#E2E8F0] dark:border-white/10 text-[#172033] dark:text-slate-200 font-medium">
              Supabase
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

          {/* Social Profiles */}
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
            <span>&bull;</span>
            <a
              href="https://wa.me/971562001042"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-500 flex items-center gap-1.5 transition-colors"
            >
              <FaWhatsapp className="w-4 h-4 text-emerald-500" />
              <span>WhatsApp</span>
            </a>
          </div>

        </motion.div>

        {/* Right Column: Clean Flutter Code Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-6 relative flex flex-col items-center w-full"
        >
          {/* Animated Clean Code Showcase */}
          <FlutterCodeTyping />

          {/* Key Metrics Bar */}
          <div className="mt-5 w-full grid grid-cols-3 gap-2.5 text-center font-mono">
            <div className="p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-[#E2E8F0] dark:border-white/5">
              <span className="text-base font-bold text-[#2563EB] block font-space">5+</span>
              <span className="text-[11px] text-[#64748B] dark:text-[#94A3B8]">Projects</span>
            </div>
            <div className="p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-[#E2E8F0] dark:border-white/5">
              <span className="text-base font-bold text-emerald-500 block font-space">Grade A+</span>
              <span className="text-[11px] text-[#64748B] dark:text-[#94A3B8]">Flutter Certified</span>
            </div>
            <div className="p-3 rounded-2xl bg-black/5 dark:bg-white/5 border border-[#E2E8F0] dark:border-white/5">
              <span className="text-base font-bold text-purple-500 block font-space">3+</span>
              <span className="text-[11px] text-[#64748B] dark:text-[#94A3B8]">Internships</span>
            </div>
          </div>

        </motion.div>

      </div>

      {/* Tech Marquee Ticker */}
      <div className="mt-14 pt-6 border-t border-[#E2E8F0]/70 dark:border-white/5 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[11px] font-mono uppercase tracking-widest text-[#64748B] dark:text-[#94A3B8] mb-4">
            Technologies & Tools
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
            {techTicker.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-[#E2E8F0] dark:border-white/10 text-xs font-mono font-medium text-[#172033] dark:text-slate-200 hover:border-[#2563EB]/40 transition-colors"
              >
                {tech.icon}
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
