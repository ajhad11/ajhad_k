import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiFileText, 
  FiMapPin, 
  FiBookOpen, 
  FiArrowRight,
  FiCheckCircle,
  FiCode
} from 'react-icons/fi';
import { SiFlutter, SiReact, SiDjango } from 'react-icons/si';
import { scrollToSection } from './Navbar';

export default function About() {
  const highlights = [
    {
      icon: <SiFlutter className="w-5 h-5 text-[#02569B]" />,
      title: 'Flutter Mobile Engineering',
      desc: 'Developing responsive Android & iOS apps with Provider, BLoC, and local database caching.'
    },
    {
      icon: <SiReact className="w-5 h-5 text-[#61DAFB]" />,
      title: 'React Web Development',
      desc: 'Building modern, interactive web interfaces with React, JavaScript (ES6+), and Tailwind CSS.'
    },
    {
      icon: <SiDjango className="w-5 h-5 text-[#092E20] dark:text-emerald-400" />,
      title: 'Django REST & Databases',
      desc: 'Architecting secure backend REST APIs, PostgreSQL schemas, and real-time Supabase integrations.'
    }
  ];

  return (
    <section id="about" className="relative py-20 bg-[#F8FAFC]/60 dark:bg-[#071A35]/20 border-y border-[#E2E8F0] dark:border-white/5 overflow-hidden">
      <div className="absolute top-1/2 -left-20 w-[450px] h-[450px] bg-[#2563EB]/5 dark:bg-[#2563EB]/10 rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#2563EB] uppercase block mb-2">
            // Profile & Background
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#172033] dark:text-white font-space">
            About <span className="text-[#2563EB]">Me</span>
          </h2>
          <div className="h-1 w-12 bg-[#2563EB] mx-auto mt-4 rounded-full" />
        </div>

        {/* 2-Column Clean Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Prominent Profile Photo Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="glass-card p-6 rounded-3xl border border-[#E2E8F0] dark:border-white/10 shadow-xl bg-white dark:bg-[#0B1120] w-full max-w-sm text-center space-y-4">
              
              {/* Profile Image */}
              <div className="w-44 h-52 sm:w-48 sm:h-56 mx-auto rounded-2xl overflow-hidden border-2 border-[#2563EB]/40 shadow-lg bg-slate-100 dark:bg-slate-800">
                <img
                  src="/assets/profile.jpg"
                  alt="AJHAD K"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Name & Title */}
              <div>
                <h3 className="text-xl font-bold font-space text-[#172033] dark:text-white">
                  AJHAD K
                </h3>
                <p className="text-xs font-mono text-[#2563EB] font-semibold mt-0.5">
                  Flutter &bull; React &bull; Django Developer
                </p>
                <p className="text-xs text-[#64748B] dark:text-[#94A3B8] flex items-center justify-center gap-1.5 mt-1.5">
                  <FiMapPin className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Calicut, Kerala, India</span>
                </p>
              </div>

              {/* Education Snippet */}
              <div className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-[#E2E8F0] dark:border-white/5 text-xs text-left">
                <div className="flex items-center gap-2 font-bold text-[#172033] dark:text-white">
                  <FiBookOpen className="w-4 h-4 text-[#2563EB]" />
                  <span>BSc Computer Science</span>
                </div>
                <p className="text-[11px] text-[#64748B] dark:text-[#94A3B8] mt-0.5">
                  Calicut University &bull; Graduate
                </p>
              </div>

              {/* Download CV Action */}
              <a
                href="/assets/doc/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl font-bold text-xs text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <FiFileText className="w-4 h-4" />
                <span>Download CV (PDF)</span>
              </a>

            </div>
          </div>

          {/* Right Column: Clean Bio & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#172033] dark:text-white font-space leading-snug">
                Passionate about building fast, intuitive, and impactful software.
              </h3>
              <p className="text-sm sm:text-base text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                I am a software developer with hands-on experience delivering cross-platform mobile apps using Flutter and responsive web applications with React and Django.
              </p>
              <p className="text-sm sm:text-base text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                My core strength lies in clean architecture, smooth UI interactions, and solid backend integrations using PostgreSQL, Supabase, and Firebase. I love turning ideas into reliable, production-ready code that delivers genuine value.
              </p>
            </div>

            {/* 3 Core Capability Highlights */}
            <div className="space-y-3 pt-2">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="glass-card p-4 rounded-2xl border border-[#E2E8F0] dark:border-white/5 hover:border-[#2563EB]/40 transition-all duration-200 bg-white dark:bg-[#101B33]/60 flex items-start gap-3.5"
                >
                  <div className="p-2.5 rounded-xl bg-black/5 dark:bg-white/5 flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#172033] dark:text-white font-space">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#64748B] dark:text-[#94A3B8] mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Simple CTAs */}
            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 rounded-xl font-bold text-xs text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Get In Touch</span>
                <FiArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => scrollToSection('projects')}
                className="px-5 py-3 rounded-xl font-semibold text-xs text-[#64748B] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-white transition-colors cursor-pointer"
              >
                Browse Projects &rarr;
              </button>
            </div>

          </div>

        </div>

      </motion.div>
    </section>
  );
}
