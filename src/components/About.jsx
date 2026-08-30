import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiCheckCircle } from 'react-icons/fi';

export default function About() {
  const stats = [
    { number: '15+', label: 'Flutter Apps' },
    { number: '2', label: 'Internships' },
    { number: 'BSc', label: 'Computer Science' },
  ];

  const highlights = [
    'Flutter & Dart Mobile Apps (iOS & Android)',
    'State Management (Provider & BLoC)',
    'REST APIs & Supabase Integration',
    'Local Storage (SQLite & Hive)',
  ];

  return (
    <section id="about" className="relative py-20 bg-[#071A35]/25 border-y border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-space">
            About <span className="text-primary text-glow">Me</span>
          </h2>
          <div className="h-1 w-10 bg-primary mx-auto mt-3 rounded-full" />
        </div>

        {/* 2-Column Clean Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
          
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5 flex justify-center"
          >
            <div className="relative w-64 md:w-72 aspect-square rounded-2xl overflow-hidden border-2 border-primary/30 shadow-[0_0_25px_rgba(10,132,255,0.15)] group bg-[#020B1C]">
              <img
                src="/assets/profile.jpg"
                alt="Ajhad K - Flutter Developer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Bio & Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-7 space-y-5"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white font-space">
              Hi, I'm <span className="text-primary">Ajhad K</span>
            </h3>

            <p className="text-text-gray text-base leading-relaxed">
              I'm a BSc Computer Science graduate and passionate <strong className="text-white">Flutter Developer</strong> based in Calicut, Kerala. I specialize in building responsive, high-performance mobile applications for Android and iOS.
            </p>

            <p className="text-text-gray text-base leading-relaxed">
              With hands-on experience as a <strong className="text-white">Flutter Developer Intern at Recongal Technologies</strong>, I focus on clean architecture, smooth UI animations, state management, and reliable backend/database integrations.
            </p>

            {/* Quick Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-sm text-text-gray">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <FiCheckCircle className="text-primary w-4 h-4 flex-shrink-0" />
                  <span className="text-white/90">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats & Actions */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              {/* Quick Stats */}
              <div className="flex items-center gap-6 border-r border-white/10 pr-6">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-xl font-bold text-white font-space">{s.number}</p>
                    <p className="text-xs text-text-gray">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div>
                <a
                  href="#contact"
                  className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-primary hover:bg-primary/90 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(10,132,255,0.25)]"
                >
                  <FiMail className="w-3.5 h-3.5" />
                  Get In Touch
                </a>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
