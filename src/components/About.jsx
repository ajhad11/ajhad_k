import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiActivity, FiLayers } from 'react-icons/fi';

export default function About() {
  // Developer interest areas
  const interests = [
    'React Development',
    'Django Backend Development',
    'Flutter Applications',
    'REST APIs',
    'Database Design',
  ];

  // Stats badges displayed in the grid row
  const stats = [
    { number: '5+', label: 'Projects Completed', icon: <FiLayers className="text-primary w-6 h-6" /> },
    { number: '2', label: 'Internships Completed', icon: <FiBookOpen className="text-primary w-6 h-6" /> }, // Updated to '2' as user requested adding another experience!
    { number: '10+', label: 'Technologies Mastered', icon: <FiActivity className="text-primary w-6 h-6" /> },
  ];

  return (
    <section id="about" className="relative py-24 bg-[#071A35]/35 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-space">
            About <span className="text-primary text-glow">Me</span>
          </h2>
          <div className="h-1 w-12 bg-primary mt-4 rounded-full" />
        </div>

        {/* 2-Column layout for photo and biography text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-16">
          
          {/* Left Column: Glowing Profile Photo Frame (Spans 5 of 12 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-2xl overflow-hidden group">
              {/* Outer neon border glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-cyan-400 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />
              
              {/* Image box container */}
              <div className="relative w-full h-full bg-[#020B1C] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="public/assets/profile.jpg"
                  alt="Ajhad K - Professional Profile"
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />
                
                {/* Visual grid overlay for tech theme */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020B1C]/80 to-transparent opacity-60" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio details (Spans 7 of 12 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            <h3 className="text-2xl font-bold text-white font-space">
              Who is Ajhad K?
            </h3>
            
            <p className="text-text-gray leading-relaxed text-base md:text-lg">
              I am a final year BSc Computer Science student with a deep passion for designing and building highly interactive, scalable web and mobile application experiences. I love bridging frontend aesthetics with highly optimized backend APIs.
            </p>
            
            {/* Core Interests */}
            <div className="flex flex-col space-y-3 pt-2">
              <h4 className="text-sm font-semibold tracking-wider text-white/90 uppercase">
                Core Interests & Focus:
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {interests.map((interest) => (
                  <li key={interest} className="flex items-center space-x-3 text-text-gray">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-sm font-medium">{interest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>

        {/* Horizontal Stats Cards Row (Spans full width below) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card glass-card-hover p-6 rounded-2xl flex items-center space-x-6 border border-white/5 transition-all duration-300"
            >
              <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                {stat.icon}
              </div>
              <div>
                <h4 className="text-3xl font-extrabold text-white font-space tracking-tight">
                  {stat.number}
                </h4>
                <p className="text-xs font-semibold text-text-gray mt-1">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
