import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiAward, 
  FiBookOpen, 
  FiFileText, 
  FiCheckCircle, 
  FiExternalLink 
} from 'react-icons/fi';

export default function Certifications() {
  const education = [
    {
      degree: 'BSc in Computer Science',
      institution: 'Calicut University',
      duration: '2023 – 2026',
      status: 'Graduate',
      details: 'Comprehensive computer science foundation covering algorithms, data structures, database management, and software engineering.'
    }
  ];

  const certifications = [
    {
      title: 'Certificate in Flutter Development (Grade A+)',
      issuer: 'Avodha Edutech / Skill India',
      date: 'Nov 2024',
      link: '/assets/doc/flutter certificate.pdf'
    },
    {
      title: 'Flutter Development with AI Integration',
      issuer: 'Multysense EduTech',
      date: 'Nov 2025',
      link: '/assets/doc/Certificate_MS2502010502042 (1).pdf'
    },
    {
      title: 'Full-Stack Web Development Certification',
      issuer: 'VerVex Technologies',
      date: 'May 2025',
      link: '/assets/doc/web certficate.pdf'
    },
    {
      title: 'Letter of Recommendation (LOR)',
      issuer: 'Regional Technologies',
      date: 'Aug 2026',
      link: '/assets/doc/LOR.pdf'
    }
  ];

  return (
    <section id="certifications" className="relative py-20 bg-white dark:bg-[#080E1A] border-b border-[#E2E8F0] dark:border-white/5 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#2563EB]/5 dark:bg-[#2563EB]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#2563EB] uppercase block mb-2">
            // Credentials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#172033] dark:text-white font-space">
            Education & <span className="text-[#2563EB]">Certifications</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] max-w-xl mt-3">
            Academic degree and verified technical credentials.
          </p>
          <div className="h-1 w-12 bg-[#2563EB] mt-4 rounded-full" />
        </div>

        {/* 2-Column Clean Layout: Education on Left, Certifications on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Education */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB]">
              <FiBookOpen className="w-4 h-4" />
              <span>Education</span>
            </div>

            {education.map((edu, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl border border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-[#101B33]/60 shadow-sm space-y-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base sm:text-lg font-bold font-space text-[#172033] dark:text-white">
                    {edu.degree}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#2563EB]/10 text-[#2563EB] font-bold">
                    {edu.duration}
                  </span>
                </div>

                <p className="text-xs font-mono text-[#2563EB] dark:text-blue-400 font-semibold">
                  {edu.institution}
                </p>

                <p className="text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                  {edu.details}
                </p>

                <div className="pt-2 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold font-mono">
                  <FiCheckCircle className="w-4 h-4" />
                  <span>Bachelor's Degree Complete</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Verified Certifications */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#2563EB]">
              <FiAward className="w-4 h-4" />
              <span>Verified Certifications</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="glass-card p-4 rounded-2xl border border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-[#101B33]/60 shadow-sm hover:border-[#2563EB]/40 transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 text-[#64748B] dark:text-[#94A3B8] font-semibold">
                        {cert.date}
                      </span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold font-space text-[#172033] dark:text-white leading-snug">
                      {cert.title}
                    </h4>

                    <p className="text-xs font-mono text-[#64748B] dark:text-[#94A3B8]">
                      {cert.issuer}
                    </p>
                  </div>

                  {cert.link && (
                    <div className="pt-2 border-t border-[#E2E8F0] dark:border-white/5">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#2563EB] hover:underline"
                      >
                        <FiFileText className="w-3.5 h-3.5" />
                        <span>View Certificate &rarr;</span>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
