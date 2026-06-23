import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchExperience } from '../api';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

export default function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetchExperience().then(data => {
      setExperiences(data);
    });
  }, []);

  return (
    <section id="experience" className="relative py-24 bg-[#071A35]/20 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-space">
            Work <span className="text-primary text-glow">Experience</span>
          </h2>
          <div className="h-1 w-12 bg-primary mt-4 rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto relative">
          
          {/* Vertical Timeline Bar */}
          <div className="absolute left-0 sm:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary to-transparent transform -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                  index % 2 === 0 ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-0 sm:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 shadow-[0_0_12px_rgba(10,132,255,0.8)] border-4 border-[#020B1C] z-20 hidden sm:block" />

                {/* Left/Right empty spacer for desktop layout balance */}
                <div className="w-full sm:w-1/2" />

                {/* Card Container */}
                <div className="w-full sm:w-[45%] sm:mx-4">
                  <div className="glass-card glass-card-hover p-6 md:p-8 rounded-2xl border border-white/5 transition-all duration-300 relative">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center">
                        <FiBriefcase className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold tracking-[0.15em] text-primary uppercase">
                          {exp.company}
                        </span>
                        <h3 className="text-lg md:text-xl font-bold text-white font-space">
                          {exp.job_title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-xs font-semibold text-text-gray/80 mb-6 pb-4 border-b border-white/5">
                      <span className="flex items-center gap-1.5">
                        <FiCalendar className="w-3.5 h-3.5 text-primary" />
                        {exp.duration}
                      </span>
                      {exp.location && (
                        <span className="flex items-center gap-1.5">
                          <FiMapPin className="w-3.5 h-3.5 text-primary" />
                          {exp.location}
                        </span>
                      )}
                    </div>

                    <div className="space-y-2.5">
                      <h4 className="text-xs font-bold tracking-wider text-white/80 uppercase mb-2">
                        Responsibilities:
                      </h4>
                      {exp.responsibilities_list && exp.responsibilities_list.map((resp, i) => (
                        <div key={i} className="flex items-start space-x-3 text-text-gray">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                          <p className="text-sm leading-relaxed">{resp}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
