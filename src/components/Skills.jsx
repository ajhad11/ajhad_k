import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchSkills } from '../api';
import { FiCode, FiServer, FiDatabase, FiSmartphone, FiCpu } from 'react-icons/fi';

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    fetchSkills().then(data => {
      // Sort skills by category or order
      setSkills(data);
    });
  }, []);

  const categories = [
    { id: 'all', name: 'All Skills', icon: <FiCode /> },
    { id: 'frontend', name: 'Frontend', icon: <FiCode /> },
    { id: 'backend', name: 'Backend', icon: <FiServer /> },
    { id: 'database', name: 'Database', icon: <FiDatabase /> },
    { id: 'mobile', name: 'Mobile', icon: <FiSmartphone /> },
    { id: 'tools', name: 'Tools', icon: <FiCpu /> },
  ];

  // Group skills by category for fallback/rendering
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 bg-[#020B1C] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white font-space">
            Technical <span className="text-primary text-glow">Skills</span>
          </h2>
          <div className="h-1 w-12 bg-primary mt-4 rounded-full" />
          <p className="text-text-gray mt-6 max-w-xl text-center">
            A comprehensive overview of programming languages, frameworks, databases, and design utilities I utilize.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-primary border-primary text-white shadow-[0_0_15px_rgba(10,132,255,0.3)]'
                  : 'bg-[#071A35]/40 border-white/5 text-text-gray hover:text-white hover:border-white/10'
              }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-card glass-card-hover p-6 rounded-2xl border border-white/5 hover:border-primary/20 flex flex-col justify-between transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-base font-bold text-white font-space">{skill.name}</span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                  {skill.proficiency}%
                </span>
              </div>
              
              {/* Progress Bar Container */}
              <div className="w-full h-2 bg-[#020B1C] rounded-full overflow-hidden border border-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.proficiency}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                  className="h-full bg-primary rounded-full shadow-[0_0_8px_rgba(10,132,255,0.7)]"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
