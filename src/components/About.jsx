import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCheckCircle, 
  FiFileText, 
  FiLayers, 
  FiCpu, 
  FiDatabase, 
  FiServer,
  FiArrowRight,
  FiAward,
  FiMapPin,
  FiBookOpen
} from 'react-icons/fi';
import { SiFlutter, SiDotnet, SiPython, SiPostgresql } from 'react-icons/si';
import { scrollToSection } from './Navbar';

export default function About() {
  const pillars = [
    {
      icon: <SiFlutter className="w-5 h-5 text-[#0A84FF]" />,
      title: 'Cross-Platform Mobile (Flutter)',
      desc: 'Building responsive 60 FPS applications with BLoC & Provider reactive architecture, offline SQLite caching, and native device channel integrations.'
    },
    {
      icon: <SiDotnet className="w-5 h-5 text-[#512BD4]" />,
      title: '.NET & Enterprise Backends',
      desc: 'Developing scalable C# Web APIs and Windows desktop solutions with Entity Framework Core, LINQ, and ACID transactional reliability.'
    },
    {
      icon: <FiCpu className="w-5 h-5 text-[#2563EB]" />,
      title: 'Applied AI & RAG Pipelines',
      desc: 'Connecting models to real data using Retrieval-Augmented Generation (RAG), Model Context Protocol (MCP) servers, and structured function calling.'
    },
    {
      icon: <FiDatabase className="w-5 h-5 text-emerald-500" />,
      title: 'Relational Database Architecture',
      desc: 'Designing normalized schemas and high-throughput queries across PostgreSQL, Supabase real-time sync, and SQL Server.'
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
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Visual Profile & Credentials Card */}
          <div className="lg:col-span-5">
            <div className="glass-card p-6 sm:p-7 rounded-3xl border border-[#E2E8F0] dark:border-white/10 shadow-xl space-y-5 bg-white dark:bg-[#0B1120]">
              
              {/* Profile Header */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#2563EB]/40 flex-shrink-0 shadow-md">
                  <img
                    src="/assets/profile.jpg"
                    alt="AJHAD K"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-space text-[#172033] dark:text-white">
                    AJHAD K
                  </h3>
                  <p className="text-xs font-mono text-[#2563EB] font-semibold">
                    Software Developer
                  </p>
                  <p className="text-[11px] text-[#64748B] dark:text-[#94A3B8] flex items-center gap-1 mt-0.5">
                    <FiMapPin className="w-3 h-3 text-[#2563EB]" />
                    <span>Kerala, India</span>
                  </p>
                </div>
              </div>

              {/* Education Box */}
              <div className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-[#E2E8F0] dark:border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#172033] dark:text-white font-space">
                  <FiBookOpen className="w-4 h-4 text-[#2563EB]" />
                  <span>BSc Computer Science</span>
                </div>
                <p className="text-xs text-[#64748B] dark:text-[#94A3B8]">
                  University of Calicut, Kerala &bull; Graduate
                </p>
                <div className="flex items-center gap-2 text-[11px] text-emerald-600 dark:text-emerald-400 font-mono font-semibold pt-1">
                  <FiAward className="w-3.5 h-3.5" />
                  <span>Grade A+ Certified in Flutter Development</span>
                </div>
              </div>

              {/* Quick Highlights */}
              <div className="space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-[#E2E8F0] dark:border-white/5">
                  <span className="text-[#64748B] dark:text-[#94A3B8]">Primary Stack</span>
                  <span className="font-semibold text-[#172033] dark:text-white">Flutter &bull; .NET &bull; AI</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-[#E2E8F0] dark:border-white/5">
                  <span className="text-[#64748B] dark:text-[#94A3B8]">Industry Experience</span>
                  <span className="font-semibold text-emerald-500">3 Production Internships</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-[#E2E8F0] dark:border-white/5">
                  <span className="text-[#64748B] dark:text-[#94A3B8]">Availability</span>
                  <span className="font-semibold text-[#2563EB]">Immediate / Full-Time</span>
                </div>
              </div>

              {/* CV Action */}
              <a
                href="/assets/doc/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl font-bold text-xs text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <FiFileText className="w-4 h-4" />
                <span>View Full Resume (PDF)</span>
              </a>

            </div>
          </div>

          {/* Right Column: Narrative & 4 Clean Capability Pillars */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#172033] dark:text-white font-space leading-snug">
                Engineering Practical, Scalable, and User-Focused Software
              </h3>
              <p className="text-sm text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                I am a software developer with hands-on experience delivering cross-platform mobile apps, enterprise business suites, and AI-assisted workflows. My approach focuses on clean architecture, high UI responsiveness, reliable databases, and measurable business impact.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="glass-card p-4 rounded-2xl border border-[#E2E8F0] dark:border-white/5 hover:border-[#2563EB]/40 transition-all duration-200 group hover:-translate-y-0.5 bg-white dark:bg-[#101B33]/60"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-2 rounded-xl bg-black/5 dark:bg-white/5 group-hover:scale-105 transition-transform">
                      {pillar.icon}
                    </div>
                    <h4 className="text-xs font-bold text-[#172033] dark:text-white font-space leading-tight">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Contact Trigger */}
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-[#101B33] dark:bg-[#2563EB] hover:bg-[#2563EB] dark:hover:bg-blue-600 transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Let's Discuss Opportunities</span>
                <FiArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => scrollToSection('projects')}
                className="px-5 py-2.5 rounded-xl font-semibold text-xs text-[#64748B] dark:text-[#94A3B8] hover:text-[#172033] dark:hover:text-white transition-colors cursor-pointer"
              >
                Browse My Work &rarr;
              </button>
            </div>

          </div>

        </div>

      </motion.div>
    </section>
  );
}