import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchExperience } from '../api';
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle, FiFileText } from 'react-icons/fi';

export default function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetchExperience().then(data => {
      setExperiences(data || []);
    });
  }, []);

  return (
    <section id="experience" className="relative py-24 bg-white dark:bg-[#0B1120] overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#2563EB]/5 dark:bg-[#2563EB]/10 rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-14">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#2563EB] uppercase block mb-2">
            // Career Milestones
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#172033] dark:text-white font-space">
            Work Experience & <span className="text-[#2563EB]">Internships</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B] dark:text-[#94A3B8] max-w-xl mt-3">
            Industry exposure building commercial Flutter apps, integrating machine learning APIs, and deploying full-stack web platforms.
          </p>
          <div className="h-1 w-12 bg-[#2563EB] mt-4 rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Center Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#2563EB] via-[#2563EB]/30 to-transparent transform md:-translate-x-1/2" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id || index}
                className={`relative flex flex-col md:flex-row items-start md:items-center pl-10 md:pl-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#2563EB] rounded-full transform -translate-x-1/2 shadow-md shadow-[#2563EB]/50 border-4 border-white dark:border-[#0B1120] z-20" />

                <div className="hidden md:block md:w-1/2" />

                {/* Experience Card */}
                <div className="w-full md:w-[46%] md:mx-4">
                  <div className="glass-card p-5 sm:p-6 rounded-3xl border border-[#E2E8F0] dark:border-white/10 hover:border-[#2563EB]/40 transition-all duration-300 relative group shadow-sm hover:shadow-xl bg-white dark:bg-[#101B33]/70">
                    
                    {/* Header */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <span className="text-xs font-mono font-bold text-[#2563EB] tracking-wider uppercase">
                          @{exp.company}
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-[#172033] dark:text-white font-space leading-tight mt-0.5">
                          {exp.job_title}
                        </h3>
                      </div>

                      {exp.badge && (
                        <span className="text-[9px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex-shrink-0">
                          {exp.badge}
                        </span>
                      )}
                    </div>

                    {/* Metadata */}
                    <div className="flex flex-wrap gap-3 text-xs font-mono text-[#64748B] dark:text-[#94A3B8] mb-3 pb-2.5 border-b border-[#E2E8F0] dark:border-white/5">
                      <span className="flex items-center gap-1 text-[#172033] dark:text-white/90">
                        <FiCalendar className="w-3.5 h-3.5 text-[#2563EB]" />
                        {exp.duration}
                      </span>
                      {exp.location && (
                        <span className="flex items-center gap-1">
                          <FiMapPin className="w-3.5 h-3.5 text-[#2563EB]" />
                          {exp.location}
                        </span>
                      )}
                    </div>

                    {/* Crisp 2-3 Bullet Points */}
                    <ul className="space-y-2 mb-3.5">
                      {(exp.responsibilities_list || []).slice(0, 3).map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start text-xs text-[#64748B] dark:text-[#94A3B8] leading-relaxed">
                          <FiCheckCircle className="w-3.5 h-3.5 text-[#2563EB] mr-2 flex-shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Stack tags */}
                    {exp.technologies && (
                      <div className="flex flex-wrap gap-1 pt-2.5 border-t border-[#E2E8F0] dark:border-white/5 font-mono">
                        {exp.technologies.map((t) => (
                          <span
                            key={t}
                            className="text-[9px] px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 text-[#172033] dark:text-blue-300 font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}

                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  );
}